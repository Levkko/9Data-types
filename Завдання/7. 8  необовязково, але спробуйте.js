// (?) необов"язково, але спробуйте. 
// A function which removes duplication of letters in string. 
// The function must be case-insensitive.

function removeDuplicationLetters(str) {
    str = str.toLowerCase();  
    let result = '';  

    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {  
            result += str[i]; 
        }
    }

    return result;  
}
console.log(removeDuplicationLetters('Hello I am Iron Man'));  // 'Helo I am rn '

//Chat GPT. Сам так і не догадався, надто тяжко. Але це ніби не обов"язкове
