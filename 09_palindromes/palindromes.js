const palindromes = function (input) {
    const punctuation = /[!.,\s]/g;
    let cleanedInput = input.replace(punctuation, "").toLowerCase();
    let reverse = cleanedInput;

    reverse = reverse.split("").reverse().join("");
    return cleanedInput === reverse;
};

// Do not edit below this line
module.exports = palindromes;
