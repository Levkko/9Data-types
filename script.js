// Виділіть гроші

let str = `$120`;

function extractCurrencyValue(str) {
    return +str.slice(1);
};

alert(extractCurrencyValue(str));