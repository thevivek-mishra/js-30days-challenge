/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (promises) {
  // Base case: If there are no promises, immediately resolve with an empty array
  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  // Create an array to hold the results of each promise
  const outputs = new Array(promises.length);
  // Counter to track how many promises have resolved successfully
  let resolveCounter = 0;

  return new Promise((resolve, reject) => {
    // Iterate over each promise in the input array
    promises.forEach((promise, index) => {
      // Invoke the promise immediately
      promise()
        .then((value) => {
          // Store the resolved value in the corresponding index of the outputs array
          outputs[index] = value;
          // Increment the counter of resolved promises
          resolveCounter += 1;

          // If all promises have resolved, resolve the main promise with the outputs array
          if (resolveCounter === promises.length) {
            resolve(outputs);
          }
        })
        .catch((err) => {
          // If any promise rejects, reject the main promise with the error
          reject(err);
        });
    });
  });
};
/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */