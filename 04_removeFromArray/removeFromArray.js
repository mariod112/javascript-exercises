const removeFromArray = function(inputArray, ...toBeRemoved) {
    return inputArray.filter((element) => !toBeRemoved.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
