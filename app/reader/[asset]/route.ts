import 'server-only';
export const dynamic='force-dynamic';
const assets=new Set(['pdf.min.mjs','pdf.worker.min.mjs','tesseract.mjs','worker.min.js','eng.traineddata.gz','tesseract-core-lstm.wasm.js','tesseract-core-lstm.wasm']);
export async function GET(_request:Request,{params}:{params:Promise<{asset:string}>}){
 const {asset}=await params;if(!assets.has(asset))return new Response('Not found',{status:404});const token=process.env.SITES_BACKEND_TOKEN;if(process.env.FINANCE_PRIVATE_DEPLOYMENT!=='true'||!token)return new Response('Private connection is not configured',{status:503});
 try{const r=await fetch('https://naser-finance-copilot.naserdev0.chatgpt.site/reader/'+asset,{headers:{'OAI-Sites-Authorization':`Bearer ${token}`},redirect:'error',cache:'no-store'});return new Response(r.body,{status:r.status,headers:{'Content-Type':asset.endsWith('.mjs')||asset.endsWith('.js')?'application/javascript':asset.endsWith('.wasm')?'application/wasm':'application/octet-stream','Cache-Control':'private, max-age=3600','X-Content-Type-Options':'nosniff'}})}catch{return new Response('Reader assets unavailable',{status:503})}
}
