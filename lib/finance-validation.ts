export const kinds=['transaction','account','budget','task','statement','document','savings'];
export function validateRecord(x:any){
 if(!x||!kinds.includes(x.kind)||!x.data||typeof x.data.title!=='string'||!x.data.title.trim()||x.data.title.length>250)throw Error('Enter a valid record name.');
 const d=x.data;if(!['Personal','Business'].includes(d.mode))throw Error('Choose a workspace.');
 if(JSON.stringify(d).length>120000)throw Error('Record too large.');
 if(['transaction','account','budget'].includes(x.kind)&&(!Number.isSafeInteger(d.amount)||d.amount<0||d.amount>1e12))throw Error('Enter a valid amount.');
 if(['transaction','task'].includes(x.kind)&&!/^\d{4}-\d{2}-\d{2}$/.test(d.date))throw Error('Choose a date.');
 if(x.kind==='transaction'&&(!['income','expense','transfer'].includes(d.type)||!['Food','Transport','Bills','Shopping','Health','Work','Other','Savings','Fees'].includes(d.category)))throw Error('Choose a category and type.');
 if(x.kind==='transaction'&&d.type==='transfer'&&(!d.account||d.account==='none'||!d.toAccount||d.toAccount==='none'||d.account===d.toAccount))throw Error('Choose different source and destination accounts.');
 if(x.kind==='budget'&&!/^\d{4}-\d{2}$/.test(d.month))throw Error('Choose a month.');
 if(x.kind==='savings'&&(!Number.isSafeInteger(d.installment)||d.installment<0||d.installment>1e12))throw Error('Enter a valid contribution.');
 if(x.kind==='statement'&&d.sourceUrl&&!/^https:\/\/mail\.google\.com\//.test(d.sourceUrl))throw Error('Invalid statement source.');
 // PDF passwords are deliberately never persisted.
 delete d.password;delete d.pdfPassword;return x;
}
