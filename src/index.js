module.exports = function toReadable(num) {
    const arrayOfNum = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const arrayOfNumWithTwoChar = [
        0,
        1,
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const len = num.toString().length;
    /**
     * 1-19
     */
    if (num < 20) {
        return arrayOfNum[num];
    }
    /**
     * 21, 22, 23, ... 99
     */
    if (len === 2) {
        /**
         * 20, 30, 40 ... 90
         */
        if (len === 2 && num % 10 === 0) {
            return arrayOfNumWithTwoChar[num.toString()[0]];
        }
        return `${arrayOfNumWithTwoChar[num.toString()[0]]} ${
            arrayOfNum[num.toString()[1]]
        }`;
    }
    /**
     * 121, 122, 123 ... 999
     */
    if (len === 3) {
        /**
         * 100, 200, 300 ... 900
         */
        if (len === 3 && num % 10 === 0 && num % 100 === 0) {
            return `${arrayOfNum[num.toString()[0]]} hundred`;
        }
        /**
         * 101, 102, 103 ... 119
         */
        if (len === 3 && +num.toString().slice(1) < 20) {
            return `${arrayOfNum[num.toString()[0]]} hundred ${
                +num.toString().slice(1) < 10
                    ? arrayOfNum[num.toString().slice(2)]
                    : arrayOfNum[num.toString().slice(1)]
            }`;
        }
        return `${
            +num.toString()[2] === 0
                ? arrayOfNum[num.toString()[0]] +
                  " hundred " +
                  arrayOfNumWithTwoChar[num.toString()[1]]
                : arrayOfNum[num.toString()[0]] +
                  " hundred " +
                  arrayOfNumWithTwoChar[num.toString()[1]] +
                  " " +
                  arrayOfNum[num.toString()[2]]
        }`;
    }
};
