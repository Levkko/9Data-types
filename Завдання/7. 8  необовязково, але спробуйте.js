// (?) необов"язково, але спробуйте.
// A function which removes duplication of letters in string.
// The function must be case-insensitive.

function removeDuplicationLetters(str) {
    let result = "";
  
    str.split("").forEach((char) => {
      if (char === " " || !result.toUpperCase().includes(char.toUpperCase())) {
        result = result + char;
      }
    });
  
    return result;
  }
  
  console.log(removeDuplicationLetters("Hello I am Iron Man")); // 'Helo I am rn '
  
