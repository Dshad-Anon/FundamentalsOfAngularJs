type ArrayValues = {
    sum: number;
    count: number;
}

function calcArray(arrayNum: number[]): ArrayValues {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arrayNum.length; i++) {
        sum += arrayNum[i];
        count++;
    }
    return {
        sum,
        count
    };
}

const arrayNum: number[] = [1, 5, 5 ,5,6];
const test = calcArray(arrayNum);
console.log(`Sum: ${test.sum} & Count: ${test.count}`);