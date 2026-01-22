import * as im from './my_module.js'
import fs from 'fs';

console.log(im.sum(6,7));
console.log(im.sig(2))
console.log(im.hyp(4,3,2))

// fs.appendFileSync('cadt.txt', '\n I come from xsfdsf');
// console.log('File created thankyou! \n');

// let data = fs.readFileSync('cadt.txt');
// let res = data.toString().split('\n');
// console.log(res);

let numbers = [100,1,2,3,4,5];
// numbers.push(6);
// numbers = numbers.map( n => n * 2 );
// numbers.forEach((n,i) => {
//     numbers[i] = n * 2;
// });
// for(let i = 0; i < numbers.length; i++) {
//     numbers[i] = 1;
// }
numbers.forEach((_, i) => {
    numbers[i] = 1;
});
console.log(numbers);
// numbers.pop(numbers[0]);
// numbers.splice(0,1);
// const newNumbers = numbers.filter(numbers => numbers > 2);
// console.log(numbers);

// console.log(newNumbers);