// length  :- it will return the number of element present in the array

let a=[32,43,52,667,85,878];
console.log(a.length);
// toString :- used to convert array into string
console.log(a.toString());
 

//pop  :-remove the last element in the  array
a.pop();
console.log(a);

//push  :-  add the new element in the array at last 
a.push(500);
console.log(a);

//shift  :- remove the element in the array at a starting

a.shift();
console.log(a);

//unshift  :- add the new element at a starting in the array

a.unshift(100);
console.log(a);

//delete :- it is use to delete element in the array  after delete element undefined holes are present

delete a[3];
console.log(a);


//concat  :- merge two array

let b=[200,300,400,600,700];
let c=a.concat(b)
console.log(c);


//join :- convert array into string 
console.log(a.join("/"));


// differnce between sllice  && splaice 
//slice :- it return the peice or  part of array from existing array ,does affect in original array.
//splice :- it affect original array by removing and adding  element and return affected array

// let b=[200,300,400,600,700];
 
console.log(b.slice(1,3));//slice


// splice

b.splice(0,2,1200,1300);
console.log(b);