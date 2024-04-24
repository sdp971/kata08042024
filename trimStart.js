

class Mystring {
  constructor(str = '') {
    this.str = str;
  }

  trimStart(str) {
    let modifiedStr = str;
    let i = 0;
  

    while (modifiedStr[i] === ' ') {
     i++;
    }

    modifiedStr = modifiedStr.slice(i);
    console.log(modifiedStr, "result");


  }
}
const str1 = new Mystring('   Hello    world!   J');
console.log(str1, "depart");


console.log(str1.trimStart('   Hello    world!   J'));

const greeting = '   Babar!   A';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";
