//indexOf :- it returnce first occurence no. in the string 
//lastIndexOf :- it returnce last occurence no. in the string 
let a ='i am live in mumbai live ';
console.log(a.indexOf('live'));//indexOf()
console.log(a.lastIndexOf('live'));//lastIndexOf()

//search :- it will search specific string and return no of string
console.log(a.search("live"));

//diff.between indexOf and search()
// indexOf :-
// 1)IndexOf does not support the regular expression. 2)it is use to simple string search 3)it run faster than search()method becouse does not supports RegEx
//search()
// 1)it does support the regular expression 2)it is use to pattern matching  3)it is slower than indexOf() method



//includes  :-  it will return true if the specific string or char present in the string other wise false
let b='hello bhai';
console.log(b.includes('e'));

//match  :- it will returns the array if the specific string or char present in the string

let c ='ram sdjk djdam  asm saam amsdhf';
console.log(Array.from(c.matchAll('am')));