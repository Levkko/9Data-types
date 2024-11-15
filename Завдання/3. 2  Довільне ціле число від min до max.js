// Довільне ціле число від min до max 

let min = +prompt("Введіть мінімальне число", 1);
let max = +prompt("Введіть максимальне число", 5);

function random(min, max) {
    return min + Math.random() * (max - min);
  }

alert( random(min, max).toFixed(0) ); 

