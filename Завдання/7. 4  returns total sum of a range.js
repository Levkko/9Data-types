// A function which returns total sum of a range

function sumRange(start, end) { 
    if (start > end) {
        return 0;
    } else {
        return start + sumRange(start + 1, end);
    }
 }
sumRange(2, 4) // 9
sumRange(-1, 3) // 5   









//інший метод (тяжка математика)
function sumRange(start, end) {
    const n = end - start + 1; 
    return (n * (start + end)) / 2; 
}

console.log(sumRange(2, 4));  // 9
console.log(sumRange(-1, 3)); // 5
