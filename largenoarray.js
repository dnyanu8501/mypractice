//  find large number in array
let num=[32,43,112,45,76];
num.sort();
console.log("large no =",num[num.length-1]);

// find small number in array
let num1=[32,43,12,45,76];
num1.sort();
console.log("small no =",num1[0]);

//find array duplicate no

let arr1=[10,20,10,45,34,2,45];
let dupliarr=[];
let extra=[];
arr1.forEach ( ele=>{
    if(!dupliarr.includes(ele)){
        dupliarr.push(ele);
    }else{
        extra.push(ele);
    }

})
console.log(dupliarr);
console.log(extra);


// return and remove the last elemnt in array
let arr2;
function remove1(){
    

 arr2=[12,32,43,563,11];

return arr2.pop();

}
console.log(remove1());
console.log(arr2);


// different way to create array 
// 1
let diff1=[10,20,30,40];

// 2
let diff2=new Array(10,20,30,40);

// 3
let diff3=Array.of(10,20,30,40);
console.log(diff3);


// swapping array variable 
let a=[1,2,3];
let b=[9,8,7];
let temp=[...a];
a=[...b];
b=[...temp];
console.log(a);
console.log(b);