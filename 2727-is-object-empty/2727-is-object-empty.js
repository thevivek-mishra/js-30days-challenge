/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    
    // return Object.keys(obj).length === 0 && obj.constructor ===  Object
    
    // return _.isEmpty(obj)
    
    return Object.keys(obj).length === 0
    
};