// Сума властивостей об’єкта

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
  
  let sum;

  if (salaries) {
    sum = salaries.John + salaries.Ann + salaries.Pete;
  } else {
    sum = 0;
  }