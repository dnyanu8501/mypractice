function sumofnum(){
    let a=10;
    let b=20;
    console.log("sum =",a+b);
}
// sumofnum();


//find large no in array

function largeno(){
    let a=Array(10,180,20,70,90,50,30);
    // let b=a.sort();
    // console.log(b);
    // console.log(a[a.length-1]);
    console.log(Math.max(...a));
}
// largeno()


function palindrom(){
let a="madam";
let b=a.split("").reverse().join("");
if(a==b){
    console.log("palindrom string");
}else{
    console.log("not palindrom string");
}

}

// palindrom();


function reverse(){
    let a="dnyaneshwar";
    let strlength1=a.length;
    let rev='';
    for (let i = strlength1;i >=0 ;i--) {
       rev+=a.charAt(i)
        
    }
    console.log(rev);
}

// reverse();

function evenarray() {

    let a=[2,3,4,5,6,7,8,9,10,11]
    let b=a.filter (ele =>{
        return ele % 2==0;
    })
    console.log(b);
    
}
// evenarray()

// factorial
function factorial(){
   let a=5;
   fact=1;
   for(i=1;i<=a;i++){
    fact*=i;
   } 
   console.log(fact);
}
factorial();
