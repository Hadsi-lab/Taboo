const fs=require('fs');const src=fs.readFileSync(process.argv[2],'utf8');
const CARDS=new Function(src+';return CARDS;')();
let bad=0;const seen=new Set();
for(const c of CARDS){
  const key=c.w.toLowerCase(); if(seen.has(key)){console.log('DUP',c.w);bad++} seen.add(key);
  if(c.f.length!==5){console.log('COUNT',c.w,c.f.length);bad++}
  const tw=key.split(/[\s-]+/);
  for(const f of c.f){const fl=f.toLowerCase(); for(const t of tw){ if(t.length>2&&(fl.includes(t)||t.includes(fl)&&fl.length>2)){console.log('OVERLAP',c.w,'->',f);bad++} }}
  if(new Set(c.f.map(x=>x.toLowerCase())).size!==5){console.log('DUPWORD',c.w);bad++}
}
console.log(CARDS.length,'cards',bad,'problems');process.exit(bad?1:0);
