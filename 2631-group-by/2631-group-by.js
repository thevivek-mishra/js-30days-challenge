/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  const grouped = {}; // The object to store our groups

  this.forEach((item) => {
    const key = fn(item); // Get the group key for this item
    // Create the group array if it doesn't exist
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(item); // Add the item to its group
  });
  return grouped;
};


/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */