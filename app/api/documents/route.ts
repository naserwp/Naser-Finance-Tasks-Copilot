import 'server-only';
export const dynamic='force-dynamic';
export const runtime='nodejs';
async function proxy(request:Request){
 const token=process.env.SITES_BACKEND_TOKEN;if(process.env.FINANCE_PRIVATE_DEPLOYMENT!=='true'||!token)return Response.json({error:'The private data connection is not configured. Use your original ChatGPT Site to upload documents.'},{status:503});
 const origin=request.headers.get('origin');if(request.method!=='GET'&&origin&&origin!==new URL(request.url).origin)return new Response('Origin not allowed',{status:403});
 const id=new URL(request.url).searchParams.get('id');const url='https://naser-finance-copilot.naserdev0.chatgpt.site/api/documents'+(id?'?id='+encodeURIComponent(id):'');
 try{const headers:Record<string,string>={'OAI-Sites-Authorization':`Bearer ${token}`};const contentType=request.headers.get('content-type');if(contentType)headers['Content-Type']=contentType;const response=await fetch(url,{method:request.method,headers,body:request.method==='GET'?undefined:await request.arrayBuffer(),cache:'no-store',redirect:'error',signal:AbortSignal.timeout(60000)});const resultHeaders=new Headers({'Content-Type':response.headers.get('content-type')||'application/octet-stream','Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'});const disposition=response.headers.get('content-disposition');if(disposition)resultHeaders.set('Content-Disposition',disposition);return new Response(response.body,{status:response.status,headers:resultHeaders})}catch{return Response.json({error:'Document storage is temporarily unavailable.'},{status:503})}
}
export const GET=proxy;export const POST=proxy;
