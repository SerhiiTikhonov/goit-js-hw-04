// function isEnoughCapacity(products, containerSize) {
//     let values = Object.values(products);
//     let rez = 0;
//     for (const i of values) {
//         rez += i;
//     }  
//    return rez <= containerSize;
// }

function isEnoughCapacity(products, containerSize) {
    let rez = 0;
    for (const i of Object.values(products)) {
        rez += i;
    }  
   return rez <= containerSize;
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false