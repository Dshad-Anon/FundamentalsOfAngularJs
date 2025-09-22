function calcArray(arrayNum) {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < arrayNum.length; i++) {
        sum += arrayNum[i];
        count++;
    }
    return {
        sum: sum,
        count: count
    };
}
var arrayNum = [1, 5, 5, 5, 6];
var test = calcArray(arrayNum);
console.log("Sum: ".concat(test.sum, " & Count: ").concat(test.count));
