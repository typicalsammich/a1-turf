import type {Metadata} from 'next';
import 'leaflet/dist/leaflet.css';
import './globals.css';
import {Navigation,Footer} from './ui';
import {origin,business} from '../content/site';
export const metadata:Metadata={metadataBase:new URL(origin),title:{default:'A1 Turf & Hardscape | Colorado Outdoor Living',template:'%s | A1 Turf & Hardscape'},description:'Custom pavers, patios, artificial turf, putting greens and outdoor transformations. Explore actual A1 projects and request a free estimate.',icons:{icon:'/media/favicon.png'},openGraph:{siteName:business.name,type:'website',locale:'en_US',images:[{url:'/media/social-preview.jpg',width:1200,height:630}]},twitter:{card:'summary_large_image',images:['/media/social-preview.jpg']}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navigation/><main id="main">{children}</main><Footer/></body></html>}
