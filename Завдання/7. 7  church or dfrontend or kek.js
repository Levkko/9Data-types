// A function which returns true if string contains 
// "church" or "dfrontend" or "kek" otherwise returns false. 
// The function must be case-insensitive.

function dfrontendCheck(str) { 
    str = str.toLowerCase();
    if (str.includes("church")) {
        return true
    } else if (str.includes("dfrontend")) {
        return true
    } else if (str.includes("kek")) {
        return true
    } else {
        return false
    }
 }

dfrontendCheck('Hello DFrontend') // true
dfrontendCheck('lolkek') // true
dfrontendCheck('Hello') // false








//інший варіант 
function dfrontendCheck(str) { 
    str = str.toLowerCase();  
    return str.includes("church") || str.includes("dfrontend") || str.includes("kek");
}

console.log(dfrontendCheck('Hello DFrontend'));  // true
console.log(dfrontendCheck('lolkek'));  // true
console.log(dfrontendCheck('Hello'));  // false
