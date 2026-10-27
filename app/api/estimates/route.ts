import {env} from 'cloudflare:workers';
import {z} from 'zod';
const schema=z.object({space:z.string().min(1).max(80),services:z.array(z.string().max(80)).min(1).max(8),goal:z.string().min(1).max(120),size:z.string().min(1).max(80),timing:z.string().min(1).max(80),budget:z.string().min(1).max(80),city:z.string().trim().min(1).max(80),zip:z.string().regex(/^\d{5}$/),address:z.string().max(180).optional(),name:z.string().trim().min(1).max(100),email:z.string().email().max(150),phone:z.string().min(10).max(30).refine(v=>v.replace(/\D/g,'').length>=10),contactMethod:z.enum(['Phone','Text','Email']).optional(),consent:z.literal(true),notes:z.string().max(2000).optional(),turfUse:z.string().max(80).optional(),inspiration:z.string().max(100).optional()});
const fail=(error:string,status=400)=>Response.json({error},{status,headers:{'Cache-Control':'no-store'}});
export async function POST(request:Request){
 const savedKeys:string[]=[];
 try{
  if(request.headers.get('origin')!==new URL(request.url).origin)return fail('Please submit from this website.',403);
  if(!env.DB||!env.BUCKET)return fail('Secure submission is temporarily unavailable. Please call (303) 874-8895.',503);
  if(Number(request.headers.get('content-length')||0)>16*1024*1024)return fail('Upload is too large.',413);
  const reader=request.body?.getReader();if(!reader)return fail('No form data received.');let total=0;const parts:Uint8Array[]=[];
  while(true){const {done,value}=await reader.read();if(done)break;total+=value.byteLength;if(total>16*1024*1024){await reader.cancel();return fail('Upload is too large.',413)}parts.push(value)}
  const bytes=new Uint8Array(total);let pos=0;for(const part of parts){bytes.set(part,pos);pos+=part.length}
  const form=await new Response(bytes,{headers:{'Content-Type':request.headers.get('content-type')||''}}).formData();
  if(form.get('website'))return fail('Unable to accept this request.',400);
  const token=String(form.get('token')||'');if(!/^[a-f0-9-]{36}$/.test(token))return fail('Reload this page to refresh the secure form.');
  const existing=await env.DB.prepare('SELECT id FROM estimates WHERE id=?').bind(token).first();if(existing)return Response.json({id:token.slice(0,8).toUpperCase()});
  const challenge=await env.DB.prepare('SELECT created_at,used FROM challenges WHERE id=?').bind(token).first<{created_at:number;used:number}>();
  if(!challenge||challenge.used||Date.now()-challenge.created_at<2000||Date.now()-challenge.created_at>86400000)return fail('Your secure form expired. Reload the page to try again.');
  let parsed;try{parsed=schema.safeParse(JSON.parse(String(form.get('answers')||'')))}catch{return fail('Please check your project information.')}
  if(!parsed.success)return fail('Please complete all project and contact details.');const a=parsed.data;
  const ip=request.headers.get('cf-connecting-ip')||request.headers.get('oai-authenticated-user-id')||'local-preview';const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(ip+'|a1-estimate-rate-v1'));const key=Array.from(new Uint8Array(digest),v=>v.toString(16).padStart(2,'0')).join('');
  const count=await env.DB.prepare('SELECT COUNT(*) AS n FROM estimates WHERE rate_key=? AND created_at>?').bind(key,Date.now()-3600000).first<{n:number}>();if((count?.n||0)>=5)return fail('Several requests have already been received. Please call A1 or try again later.',429);
  const photos=form.getAll('photos');if(photos.length>3)return fail('Upload no more than three photos.');const uploads=[];
  for(const value of photos){if(!(value instanceof File)||value.size===0||value.size>5*1024*1024)return fail('Each photo must be under 5 MB.');const buffer=await value.arrayBuffer();const b=new Uint8Array(buffer);let ext='';if(b[0]===255&&b[1]===216&&b[2]===255)ext='jpg';if(b[0]===137&&b[1]===80&&b[2]===78&&b[3]===71&&b[4]===13&&b[5]===10&&b[6]===26&&b[7]===10)ext='png';if(String.fromCharCode(...b.slice(0,4))==='RIFF'&&String.fromCharCode(...b.slice(8,12))==='WEBP')ext='webp';if(!ext)return fail('Only genuine JPEG, PNG and WebP files are accepted.');uploads.push({buffer,key:'estimates/'+token+'/'+crypto.randomUUID()+'.'+ext,type:ext==='jpg'?'image/jpeg':'image/'+ext})}
  for(const u of uploads){await env.BUCKET.put(u.key,u.buffer,{httpMetadata:{contentType:u.type}});savedKeys.push(u.key)}
  await env.DB.batch([env.DB.prepare('INSERT INTO estimates (id,created_at,name,email,phone,city,answers,files,rate_key) VALUES (?,?,?,?,?,?,?,?,?)').bind(token,Date.now(),a.name,a.email,a.phone,a.city,JSON.stringify(a),JSON.stringify(savedKeys),key),env.DB.prepare('UPDATE challenges SET used=1 WHERE id=?').bind(token)]);
  return Response.json({id:token.slice(0,8).toUpperCase()},{status:201,headers:{'Cache-Control':'no-store'}});
 }catch{for(const key of savedKeys){try{await env.BUCKET?.delete(key)}catch{}}return fail('We could not save your request. Your answers remain in this tab. Please retry or call (303) 874-8895.',503)}
}
