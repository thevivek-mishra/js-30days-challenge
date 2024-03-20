class TimeLimitedCache {
    constructor(){
        this.cache = new Map();
    }
    
    // Methods defined inside the class 
    set(key, value, duration){
        
        const alreadyExists = this.cache.get(key);
        
        if(alreadyExists){
            clearTimeout(alreadyExists.timeoutId)
        }
        
        let timeoutId = setTimeout(()=>{
            this.cache.delete(key)
        },duration)
        
        this.cache.set(key,{value, timeoutId})
        return Boolean(alreadyExists)
    }
    get(key){
        if(this.cache.has(key)){
            return this.cache.get(key).value
        }
        return -1
    }
    count(){
        return this.cache.size;
    }
}





























// var TimeLimitedCache = function() {
//     this.cache = new Map();
// };

// TimeLimitedCache.prototype.set = function(key, value, duration) {
//     const currentTime = Date.now();
//     const expirationTime = currentTime + duration;
    
//     if (this.cache.has(key)) {
//         const { expiration } = this.cache.get(key);
//         if (expiration > currentTime) {
//             this.cache.set(key, { value, expiration: expirationTime });
//             return true;
//         }
//     }
//     this.cache.set(key, { value, expiration: expirationTime });
//     return false;
// };

// TimeLimitedCache.prototype.get = function(key) {
//     const currentTime = Date.now();  
//     if (this.cache.has(key)) {
//         const { value, expiration } = this.cache.get(key);
        
//         if (expiration > currentTime) {
//             return value;
//         } else {
//             this.cache.delete(key);
//         }
//     }
//     return -1;
// };

// TimeLimitedCache.prototype.count = function() {
//     const currentTime = Date.now();
//     let count = 0;
    
//     for (const [key, { expiration }] of this.cache.entries()) {
//         if (expiration > currentTime) {
//             count++;
//         } else {
//             this.cache.delete(key);
//         }
//     }
//     return count;
// };
