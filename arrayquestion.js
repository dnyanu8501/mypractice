// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
let num=[1,2,3,4];
let arr=[];
for(let i=0;i<num.length;i++){
    arr.push(num[i]*(num[i]+1)/2);

}
console.log(arr);

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
let num2=[1,1,1,1,1];
let arr2=[];
for (let i = 0; i <num2.length; i++) {
   arr2.push(num2[i]+i);
    
}
console.log(arr2);

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

let num3 = [3,1,2,10,1];
let arr3=[];
let sum=0;
for (let i = 0; i < num3.length; i++) {

   sum= sum+num3[i];
  arr3.push(sum);
}
console.log(arr3);

