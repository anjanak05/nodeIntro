const {addition, division, subtraction, mulitplication} = require("../calculator/calculater")

// console.log(mulitplication(2,3))
const process = require('process');

const ans1 = subtraction(+process.argv[3], +process.argv[4]);
const ans2 = division(+process.argv[3], +process.argv[4]);
const ans3 = mulitplication(+process.argv[3], +process.argv[4]);
const ans4 = addition(+process.argv[3], +process.argv[4]);
console.log(ans1)
console.log(ans2)
console.log(ans3)
console.log(ans4)
