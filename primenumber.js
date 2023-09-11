//prime number
var all="";
for(let i=0;i<=100;i++){
    let count=0;
    for(let j=0;j<=100;j++){
        if(i%j==0){
            count+=1;
        }
    }
    if(count==2){
       all=all+' '+i;
    }
}
console.log(all);


//armstrong number 153

let a=153;
let b=a.toString();
var sum=0;
for(let i=0;i<b.length;i++){
  let add=b[i]**b.length;
    sum+=add;
}
console.log(sum);