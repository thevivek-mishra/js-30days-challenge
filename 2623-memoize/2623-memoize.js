/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    
    let cache = {}
    return function(...args) {
        let value = JSON.stringify(args)
        if(value in cache){
            return cache[value]
        }
        else {
            let result =fn.apply(this,args)
            cache[value]= result 
            return result
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */