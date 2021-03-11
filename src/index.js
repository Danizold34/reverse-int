module.exports = function reverse (n) {
   let arr = [...new Set(n)];
   return arr.reverse().join();
    //let num = Number(arr)
    
}
