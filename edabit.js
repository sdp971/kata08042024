//minMax([1, 2, 3, 4, 5]) ➞[1, 5];

function minMax(arr) {
  let tab = [];
  let max = 0;


  for (let i = 0; i < arr.length; i++) {
    //Si la première valeur est plus grande que la deuxième valeur: alors je la mets dans la variable max sinon je la mets dans min
      let isWap = false;
   
    // console.log(arr[i]);
    let firstValue = arr[i];
    let secondValue = arr[i + 1];
      if (firstValue > secondValue) {
      max = firstValue;
      min = secondValue;
    }
    if (secondValue > firstValue) {
      max = secondValue;
      min = firstValue;
   

    }
console.log( min,max);
  }
  
  return tab;
}


let result = minMax([1, 2, 3, 4, 5]);