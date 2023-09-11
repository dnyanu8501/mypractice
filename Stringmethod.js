//substrting()  :- it returns the specific string of a given start and end indexe in string
let a="i am going to pune";
let b=a.substring(5,10);
console.log(b);

// length :-  it return the number of character present in string
let c="what do you do";
console.log(c.length);

//substr  :- it returns the specific strin from start index ang length in the string

let d="i am going to pune";
console.log(d.substr(5,10));

//slice()  :- it returns the specific string of a given start and end indexe in string
//slice is a well work to array and string;
let e="i am go to school";
console.log(e.slice(5,10));

// trim :- it will remove whitespace both side to the string
// trimSmart :- remove the whitespace only from start to the string
// trimEnd :- remove the whitespace only from end to the string

let f=" i am go to school ";
console.log(f.trim());
console.log(f.trimStart());
console.log(f.trimEnd());

//toLowerCase:-  convert string into lower case
//toUpperCase :-  convert string into uppercase

let g= 'Hello my name is DNYANESHWAR';
console.log(g.toLowerCase());
console.log(g.toUpperCase());


//charAt  :- it return the character in specific index in the string
//charCodeAt :- it returns the unicode of specific  index in the string

let h='every one starts a bignning';
console.log(h.charAt(7));
console.log(h.charCodeAt(7));

//split :-it always returns the array

let i='sai surya jaya sourya';
console.log(i.split(' '));

// replace :-  it will replace the specific string
//replaceAll is same as replace / /g
let j =" jayu ram sai jayu shourya JAYU";
console.log(j.replace('jayu','surya'));
console.log(j.replaceAll('jayu','surya'));
console.log(j.replace(/jayu/g,'surya'));
console.log(j.replace(/jayu/gi,'surya'));

// concate ;- it is use to merge to string

let first_name='Dnyaneshwar';
let last_name='Gavade';
console.log(first_name+" "+last_name);
console.log(first_name.concat(" ",last_name));