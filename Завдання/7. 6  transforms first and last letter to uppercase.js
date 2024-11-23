// A function which transforms first and last letter 
// to uppercase (use built in string's method).

function firstAndLastToUpper(str) { 
    let result = str[0].toUpperCase() + str.slice(1); 
    return result.slice(0, -1) + result[result.length - 1].toUpperCase();
 }
 
firstAndLastToUpper('abc') // 'AbC'









//інший метод (тяжкіше додуматись, але код кращий)
function firstAndLastToUpper(str) { 
    return str[0].toUpperCase() + str.slice(1, -1) + str[str.length - 1].toUpperCase();
}

console.log(firstAndLastToUpper('abc'));  // 'AbC'

