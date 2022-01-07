var printNumber = function (number) {
    return (+number >= 0 &&
        +number % 2 !== 0 &&
        +number % 11 !== 0 &&
        +number % 22 !== 0 &&
        console.log(number));
};
printNumber(13);
