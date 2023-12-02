let no1=0;
let no2=1;
let fibb=0 +" "+1;
for(let i=0;i<=20;i++){
    let no3=no1+no2;
    fibb +=" "+no3;
    no1=no2;
    no2=no3;
}
console.log(fibb);