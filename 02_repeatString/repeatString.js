const repeatString = function(inputString, timesToRepeat) {

    if(timesToRepeat >= 0)
    {
        let outputString = "";

        for(let count = 0; count < timesToRepeat; count++)
        { 
            outputString += inputString;
        }

        return outputString;
    }
    else
    {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
