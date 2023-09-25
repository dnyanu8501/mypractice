let text='i live in mumbai';
let textlen=text.length;
console.log(textlen);

let sclicetxt=text.slice(2,6);
console.log(sclicetxt);
let txtstr=text.substring(2,6);
console.log(sclicetxt);
let arr=['ram','vish','pavan','sham','swaraj','dnyanu'];
let arrs=arr.slice(0,2);
console.log(arrs);
// let arrss=arr.substring(0,3);
// console.log(arrss);

//for in

let demo={
    name:"ram",
    age:20,
    gender:"male"
}
for(let x in demo){
    console.log(demo[x]);
}

//for of loop
let demo2=["pavan","chinta","Anu","Dj"];
for(let x of demo2){
    console.log(x);
}

// String Method in js
// length :- it will return a no of character present in string and no of element present in the array.
let text5="i am a Good boy Good"
console.log(text5.length);


//slice:- it will return the string from start index to end index of a specific string

console.log(text5.slice(7,11));

//substring
console.log(text5.substring(7,-1)); //-1 count return string 7 to -1


//substr
console.log(text5.substr(2,8));//pass to parameter index and length

//replace
let q=text5.replace(/good/gi,"obedient");//  /RegEx/     i:- reprent the insentive word   g:- represent the globally 
console.log(q);

//  replaceAll

let r=text5.replaceAll("Good", "Great");
console.log(r);

//concat or +   it is use to merge two string

let demo3="Dnyaneshwar";
let demo4="Gavade";
console.log(demo3.concat(" ",demo4));
console.log(demo3 + " "+demo4);

//toLowerCase
let city="i Am PRETTY sure THAT hdsfuhjsdhuiyhsd";
console.log(city.toLowerCase());

//'toUpperCase
console.log(city.toUpperCase());

//trim   it remove the white spaces on both side of the string






