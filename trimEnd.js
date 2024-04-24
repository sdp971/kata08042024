class Mystring {
  constructor(str = '') {
    this.str = str;
  }
  trimStart() {
    let i = 0;
    while (i < this.str.length && this.str[i] === ' ') i = i + 1;
    let str = '';
    while (i < this.str.length) str += this.str[i++];
    return str;
  }

  trimEnd() {
    let i = 0;
     let str = '';

    while (i < str.length && this.str[i] === ' ') {
      i++;
    }
 
    while (str[i] === this.str[str.length - i]) str += this.str[i];
    
     return str;
  }
}



const word = '   Hello world!   ';

const greeting = '  A   Babar!   C';

// console.log(greeting);
// Expected output: "   Hello world!   ";

// console.log(greeting.trimEnd());
// console.log(greeting.trimStart());
// Expected output: "Hello world!   ";

console.log(word.trimEnd(),"fin");
console.log(word.trimStart(),"début");
