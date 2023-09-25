// let rev=' Reverse Demo';
// let nu=rev.length;
// let newrev='';

// for(let i=nu;i>=0;i--){
//     let char1=rev.charAt(i);
//     newrev=newrev+char1;
   
// }
// console.log(newrev); 
// let t=5**3;
// console.log(t);


// let test="Dnyaneshwar";
// let rev="";
// for(let i=test.length;i>=0;i--){
//     let chara=test.charAt(i);
//    rev =rev+chara;
// }
// console.log(rev);
  

//reverse array
// let test2=["ram","Apple","banana","xyz"];

// let text3=[];
// for(let i=test2.length-1;i>=0;i--){
// text3.push(test2[i]);
// }
// console.log(text3);


// let test2=["ram","Apple","banana","ram","xyz"];

// let text3=[];
// let text4=[];
// for(let i=0;i<test2.length;i++){
//     if(!text3.includes(test2[i])){
//  text3.push(test2[i]);
//     }
//      else{
//         text4.push(test2[i]);

// }
// }
// console.log(text3);
// console.log(test2);
// console.log(text4);


let employee = [
   { name: 'poonam', age: 80 },
   { name: 'pooja', age: 30 },
   { name: 'om', age: 30 },
   { name: 'jay', age: 30 }
]

let empolyeeNames = employee.map(employeeData => {
   return employeeData.name;
})
console.log('empolyeeNames', empolyeeNames);


let arr=[2,34,45,26,56];
let arr2=arr.map(demo);

function demo(value){
   return value+2;
}
console.log(arr2);

console.log(Date());