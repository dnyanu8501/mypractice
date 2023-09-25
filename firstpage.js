console.log("hello");

var a="aman";
console.log(a);


let b=9999999999999999n;
console.log(b);

let c=BigInt(9999999999999999);
console.log(c);
let studentData = {
    studentName : 'Om',
    age: 15,
    contact: 9898989898,
    city: 'Pune'
}
for(let x in studentData){
    console.log(studentData[x]);
}