const removeFromArray = function () {
    let resultArr = [];

    for (let i = 1; i < arguments.length; i++) {
        for (let nums of arguments[0]) {
            if (nums !== arguments[i]) resultArr.push(nums);
        }
        arguments[0] = resultArr;
        resultArr = [];
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
