// A function which prints the stair picture of size n

function printStairs(n) { 
    let str = "";
    for (let i = 1; i <= n; i++) {
        str += "#"
        console.log(str)
    }
 }
printStairs(3);

// #
// ##
// ###








//Другий варіант
function printStairs(n) { 

    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i));
    }
    console.log("#".repeat(n))
 }

printStairs(3);

// #
// ##
// ###
