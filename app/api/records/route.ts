import 'server-only';
import {localRecords} from '@/lib/local-store';
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
// Enable only after Vercel Authentication protects ALL deployments, including production.
async function proxy(request: Request) {
  if(!process.env.VERCEL)return localRecords(request);
  const token=process.env.SITES_BACKEND_TOKEN;
  if(process.env.FINANCE_PRIVATE_DEPLOYMENT!=='true'||!token) {
    return Response.json({error:'Private data connection is not configured. Your original records remain safe in ChatGPT Sites.'},{status:503});
  }
  if(request.method!=='GET') {
    const origin=request.headers.get('origin');
    if(origin&&origin!==new URL(request.url).origin) return Response.json({error:'Origin not allowed'},{status:403});
  }
  try {
    const response=await fetch('https://naser-finance-copilot.naserdev0.chatgpt.site/api/records',{
      method:request.method,headers:{'Content-Type':'application/json','OAI-Sites-Authorization':`Bearer ${token}`},
      body:request.method==='GET'?undefined:await request.text(),cache:'no-store',redirect:'error',signal:AbortSignal.timeout(15000)
    });
    const type=response.headers.get('content-type')||'';
    if(!type.includes('application/json'))throw new Error('Backend unavailable');
    return new Response(await response.text(),{status:response.status,headers:{'Content-Type':'application/json','Cache-Control':'private, no-store'}});
  } catch {
    return Response.json({error:'Your data connection is unavailable. Please retry.'},{status:503});
  }
}
export const GET=proxy;
export const POST=proxy;
export const PUT=proxy;
export const DELETE=proxy;
