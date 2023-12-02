//factorial number
let num =7;
let sum=1;

for(let i=1;i<=num;i++){
    sum=sum*i;
}
console.log("factoial num is : ",sum);

//prime number 

let no=17;
var count=0;


for(let i=1;i<=17;i++){
    if(no%i==0){
        count+=1;
    }
}
if(count==2){
    console.log("prime number ");
}else{
    console.log("not prime numner");
}



//Anagram Detection:

let str1="listen";
let str2='silent';
let  strlen1=str1.length;
let  strlen2=str2.length;


if (strlen1!=strlen2) {
    console.log("this isw not anagram string");
}else{
    let arr1=str1.split("").sort().join();
    let arr2=str2.split("").sort().join();
   if(arr1==arr2){
    console.log("anagram String");
   }else{
    console.log("not anagram string");
   }
}