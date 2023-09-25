// let no1=0;
// let no2=1;
// console.log(no1," ",no2);
// for(let i=0;i<=10;i++){

//     let no3=no1+no2;
//     console.log(no3);
//     no1=no2;
//     no2=no3;

// }


let no1=0;
let no2=1;
let arr=[];
arr.push(no1,no2);
for(let i=0;i<=10;i++){

    let no3=no1+no2;
   arr.push(no3);
    no1=no2;
    no2=no3;

}
console.log(arr);


//palindrom number with reverse methode

let  num="1221";
let len=num.length-1;
let rev=""
for(let i=len;i>=0;i--){
 rev+=num.charAt(i);
    
}
if(rev==num){
    console.log("palindrom number");
}else{
    console.log(" Not a palindrom number");
}

