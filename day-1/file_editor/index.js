
// const s  = require("os")
// console.log(s.version())
// console.log(s.cpus()[0])

const fs = require("fs")

let data1 = "This is a file containing a collection of names.";
fs.appendFileSync( "./test1.txt", data1, {encoding: "utf-8"})
const data = fs.readFileSync("./test1.txt", {encoding: "utf-8"})
console.log(data)
fs.rename("./test1.txt", "./test.txt", ()=>{
    console.log("file renamed")
})
fs.unlink("./test.txt", ()=>{
    console.log("file removed")
})