/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        
        const fnExec = fn.apply(this, args)
        const fnRej = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                reject("Time Limit Exceeded")
            },t)
        })
        
        return Promise.race([fnExec, fnRej])
        
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */