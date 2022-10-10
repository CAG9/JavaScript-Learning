function queue(arr, n) {
  arr.push(n); 
  return arr.shift(); 
}
  
var arr = [1, 2, 3, 4, 5];
  
console.log("Before: " + JSON.stringify(arr));
console.log(queue(arr, 6));
console.log("After: " + JSON.stringify(arr));
