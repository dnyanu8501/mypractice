const { log } = require("console");
const fs=require("fs");
fs.writeFile("read.txt","welcome to world",()=>{
    console.log("inside console");
})
console.log("out site console")

fs.readFile("read.txt","utf-8",()=>{
    console.log("welcome");
})
// fs.unlink("read.txt")