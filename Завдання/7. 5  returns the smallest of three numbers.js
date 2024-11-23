// Write a function which returns the smallest of three numbers

function min(a, b, c) { 
    if (a <= b && a <= c) {
        return  a;
    } else if (b <= a && b <= c) {
        return b;
    } else if (c <= a && c <= b) {
        return c;
    }
 }
min(10, 5, 11) // 5
min(3, 8, 4) // 3








//інший, набагато легший варіант (згадав про нього аж після if else)
function min(a, b, c) {
    return Math.min(a, b, c);
}

console.log(min(10, 5, 11));  // 5
console.log(min(3, 8, 4));    // 3
