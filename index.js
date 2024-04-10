// string split 

let stringToSplit = "Oh brave new world that has such people in it."
let separator = " ";
console.log(typeof separator)


let monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
var virgule = ',';

let initial = 'Hello!@#World!@#OpenAI';
let separator2 = '!@#';
console.log(separator2.length,"longueur")


// function splitString(stringToSplit, separator) {
//   let array = [];

//   for (let i = 0; i < stringToSplit.length; i++){
//     if (stringToSplit[i] !== separator) {
    
//      count++;
   
//       if (i >= count) {
//         let j = 0;
//         while (j < count) {
//           array.push(stringToSplit[j]);
//           j++
//          }
     
//      }
//     } 
//   }
 
//   return array;
// }
  
// function splitString(stringToSplit, separator) {
//   let array = [];

//   for (let i = 0; i < stringToSplit.length; i++) {
//     if (stringToSplit[i] !== ' ') {
//       count++;
//       if(i <= count) {
//         let j = 0;
//         for (let j = 0; j < count; j++){
//               array.push(stringToSplit[j]);
//         }
//       }
  
//     }
//   }
//   return array;
// }

function splitString(stringToSplit, separator) {
  let array = [];
  let word = '';

  for (let i = 0; i < stringToSplit.length; i++) {
    console.log(separator.length, 'youhou');
    if (separator.length > 0) {
      
    }
    if (stringToSplit[i] !== separator) {
      word += stringToSplit[i];
       
    } else {
     
      if (word !== '') {
        array.push(word);
        word = '';
      }
    }
    if (separator !== undefined) {
      return stringToSplit
    }
   
  }

  if (word !== '') {
    array.push(word);
  }




  return array;
}
  // tant que tu n'as pas de separator, tu pushes dans le tableau cet element
  // est ce que c'est separator ? Si oui tu t'arretes sinon tu pushes dans le tableau


let result = splitString(initial,separator2);

console.log(result, "resultat du mien");

console.log(monthString.split(","),"resultat")