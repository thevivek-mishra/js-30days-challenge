/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

// function sortBy(arr, fn) {
//   return arr.sort((a, b) => {
//     const fnResultA = fn(a);
//     const fnResultB = fn(b);

//     // Ascending order:
//     return fnResultA - fnResultB;
//   });
// }


// or we can write this in this way 


function sortBy(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
}


