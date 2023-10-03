const repeatString = function (string, num) {
    resultString = "";
    if(num<0)return "ERROR";
    while (num--) {
        resultString += string;
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
