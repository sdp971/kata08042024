// let stringToSplit = 'Oh brave new world that has such people in it.';
// let text = "je fais un test"
// let array = [];



// class Mystring {
//   constructor(str = '') {
//     this.str = str;
//   }

//   split(separator) {
//     const tab = [];
//     let word = "";

//     for (let i = 0; i < this.str.length; i++){
//       console.log(this.str[i]);
//          word += this.str[i];

//       if (this.str[i] === separator || i === this.str.length - 1) {
//         console.log(separator,"separator");
//         console.log("je passe", this.str[i]);
//         tab.push(word);
//         word = "";
      
//       }
//       if (this.str[i] === separator) {
//         console.log("je passe separator", this.str[i]);
      
       
//         //  tab.push(word);
//         //  word = '';
//       }
     
//     }
    
// return tab;

//   }
 
// }



// const myStr = new Mystring('Je fais un test');
// console.log(myStr.split('un'),"ma version")

// console.log(text.split('un'))



class Mystring {
  constructor(str = '') {
    this.str = str;
  }

  // startsWith(str) {
  //   if (this.str.indexOf(str) === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  // }

  //   startsWith(str, position) {

  //  if (this.str[position].indexOf(str) === 0) {
  //    return true;
  //  } else {
  //    return false;
  //  }

  //   }

  startsWith(str, position) {
    let indexStart = position || 0;

    for (let i = 0; i < str.length; i++) {
      if (this.str[indexStart + i] !== str[i]) {
        return false;
      }
    }

    return true;
  }

 
}

//si une position est spécifiée je veux que la recherche commence à partir de cette position

const myStr = new Mystring('Être, ou ne pas être : telle est la question.');
console.log(myStr.startsWith("Être"), 'ma version');