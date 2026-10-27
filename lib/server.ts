import 'server-only';
import {createHmac,createHash,timingSafeEqual,randomUUID} from 'node:crypto';
import {Redis} from '@upstash/redis';
export class SetupError extends Error{}
const redisUrl=()=>process.env.UPSTASH_REDIS_REST_URL||process.env.KV_REST_API_URL;
const redisToken=()=>process.env.UPSTASH_REDIS_REST_TOKEN||process.env.KV_REST_API_TOKEN;
export function configured(){return Boolean(redisUrl()&&redisToken()&&process.env.FORM_SECRET&&process.env.FORM_SECRET.length>=32)}
export function redis(){if(!configured())throw new SetupError('Inquiry storage is not configured');return new Redis({url:redisUrl()!,token:redisToken()!})}
function secret(){if(!process.env.FORM_SECRET||process.env.FORM_SECRET.length<32)throw new SetupError('Form signing key is not configured');return process.env.FORM_SECRET}
function signature(value:string,purpose:string){return createHmac('sha256',secret()).update(purpose+':'+value).digest('base64url')}
function sign(data:object,purpose:string){const value=Buffer.from(JSON.stringify(data)).toString('base64url');return value+'.'+signature(value,purpose)}
function verify(token:string,purpose:string){try{if(token.length>2000)return null;const[value,sig]=token.split('.');if(!value||!sig)return null;const expected=Buffer.from(signature(value,purpose));const received=Buffer.from(sig);if(expected.length!==received.length||!timingSafeEqual(expected,received))return null;return JSON.parse(Buffer.from(value,'base64url').toString())}catch{return null}}
export function createFormToken(){return sign({id:randomUUID(),issuedAt:Date.now()},'form')}
export function verifyFormToken(token:string){const value=verify(token,'form');if(!value||!/^[-a-f0-9]{36}$/.test(value.id)||!Number.isFinite(value.issuedAt)||Date.now()-value.issuedAt<2000||Date.now()-value.issuedAt>86400000)return null;return value as {id:string;issuedAt:number}}
export function sameOrigin(request:Request){const origin=request.headers.get('origin');return origin===new URL(request.url).origin}
export function networkKey(request:Request){const ip=request.headers.get('x-vercel-forwarded-for')||request.headers.get('x-forwarded-for')?.split(',')[0]||'local';return createHmac('sha256',secret()).update(ip.trim()).digest('hex')}
export async function rateLimit(key:string,limit:number,seconds:number){const db=redis();const n=await db.incr('a1:rate:'+key);if(n===1)await db.expire('a1:rate:'+key,seconds);return n<=limit}
export function checkPassword(value:string){const expected=process.env.ADMIN_PASSWORD;if(!expected||expected.length<16)return false;return timingSafeEqual(createHash('sha256').update(value).digest(),createHash('sha256').update(expected).digest())}
export function adminCookie(){return sign({expires:Date.now()+8*3600000},'admin')}
export function isAdmin(cookie:string|null){const value=(cookie||'').split(';').map(x=>x.trim()).find(x=>x.startsWith('a1_admin='))?.slice(9);if(!value)return false;const data=verify(value,'admin');return Boolean(data&&data.expires>Date.now()&&data.expires<Date.now()+9*3600000)}
export type Lead={id:string;createdAt:number;name:string;email:string;phone:string;city:string;answers:Record<string,any>;files:{url:string;contentType:string}[]};
export async function getLead(id:string){return redis().get<Lead>('a1:lead:'+id)}
export async function getLeads(){const db=redis();const ids=await db.zrange<string[]>('a1:leads',0,199,{rev:true});if(!ids.length)return [];return (await db.mget<Lead[]>(...ids.map(id=>'a1:lead:'+id))).filter(Boolean)}
export function jsonError(error:string,status=400){return Response.json({error},{status,headers:{'Cache-Control':'no-store'}})}
