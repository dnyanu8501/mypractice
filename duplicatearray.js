let a=[12,20,30,40,50];
let b=[23,40,50,12]
let arr1=[];
len=a.length;
for (let i = 0; i < a.length; i++) {
    if(b.includes(a[i])){
        arr1.push(a[i]);
    }
    
}
console.log(arr1);