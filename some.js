class MyArray {
  constructor(tab = []) {
    this.tab = tab;
  }

  mySome(callback) {
    for (let i = 0; i < this.tab.length; i++) {
      if (callback(this.tab[i], i, this.tab)) {
        return true;
      }
    }
    return false;
  }

  /**Tableau une dimension */
  myFlat() {

    let newArr = [];

    for (let i = 0; i < this.tab.length; i++){

      if ( this.tab[i].constructor === Array) {
        for (let j = 0; j < this.tab[i].length; j++){
           newArr[newArr.length] = this.tab[i][j];
        }
      } else {
         newArr[newArr.length] = this.tab[i];
         console.log(newArr);
      }
    }
    return newArr;
  }

  myFlat() {
    let newArr = [];

    function recursive(arr) {
      for (let i = 0; i < arr.length; i++) {
       if (arr[i].constructor === Array) {
          recursive(arr[i]);
        } else {
          newArr[newArr.length] = arr[i];
        }
      }
    }
    recursive(this.tab);
    return newArr;
  }
}

// const arr = new MyArray([12, 5, 8, 1, 4]);
// const even = (element) => element > 10;

// function estAssezGrand(element, indice, array) {
//   return element >= 10;
// }

// console.log(arr.mySome(estAssezGrand));

const arr = new MyArray([0, 1, [2, [3, [4, 5]]]]);
console.log(arr.myFlat());
