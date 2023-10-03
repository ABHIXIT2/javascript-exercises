const reverseString = function (string) {
    let returnstring = "";
    for (let i = string.length-1; i > -1; i--) {
        returnstring += string[i];
    }
    return returnstring;
};

// Do not edit below this line
module.exports = reverseString;
