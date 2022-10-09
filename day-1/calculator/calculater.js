
// console.log(add(2, 3))

// const s  = require("os")
// console.log(s.version())
// console.log(s.cpus()[0])


// const fs = require("fs")
// const data = fs.readFileSync("./intro.txt", {encoding: "utf-8"})
// console.log(data)


const addition = (a, b) => {
    return a + b;
  };
  
  const subtraction = (a, b) => {
    return a - b;
  };
  
  const mulitplication = (a, b) => {
    return a * b;
  };
  
  const division = (a, b) => {
    return a / b;
  };
  
  module.exports = {addition, division, subtraction, mulitplication}