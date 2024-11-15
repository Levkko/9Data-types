// Перевірка на спам (слова для спаму придумаєте самі 😂)

function checkSpam(str) {

    if (str.toLowerCase().includes("spam")
    || str.toLowerCase().includes("scam")
    || str.toLowerCase().includes("sale")
    || str.toLowerCase().includes("offer")
    || str.toLowerCase().includes("free")
    || str.toLowerCase().includes("cash")
    ) {
        return true; 
    } else {
        return false; 
    }
}