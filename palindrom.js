let num =12121;
let num2=num.toString();
let len=num2.length;
let rev='';
for (let i = num2.length-1; i >=0; i--) {
    rev+=num2.charAt(i);
    
}

if(num==rev){
    console.log("palindrom number");
}else{
    console.log("not palindrom number");
}
