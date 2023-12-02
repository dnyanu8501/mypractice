 let allstring ='hello word dnyatyrtneshwar';
  let words=allstring.toLowerCase().split(' ');
  var result=[];
  for(let i=0;i<words.length;i++){
    let oneword = words[i];
   var titleword=oneword.charAt(0).toUpperCase() + oneword.slice(1);
 result=result.concat(titleword);

}
var res1=result.join(' ');
console.log(res1);
let res2=allstring.replace(/\b\w/g, l => l.toUpperCase());
console.log(res2);