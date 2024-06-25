const fibonacci = function(input) {
    if(input < 0)
        return 'OOPS';

    let f_1 = 1;
    let f_2 = 0;

    if (input == 0)
        return 0;

    for (let i = 2; i <= input; i++)
    {
        let value = f_1 + f_2;
        f_2 = f_1;
        f_1 = value;
    }

    return f_1;
};

// Do not edit below this line
module.exports = fibonacci;

//0, 1, 2, 3, 4, 5, 6
//0, 1, 1, 2, 3, 5, 8