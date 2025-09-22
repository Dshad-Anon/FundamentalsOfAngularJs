export class Values {
    public firstNumber: number;
    public secondNumber: number;
    public operator: string;

    constructor() {
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.operator = '';
    }
}

export class Calculator {
    private values: Values;

    constructor() {
        this.values = new Values();
    }

    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        return a / b;
    }

    calculate(firstNum: number, operator: string, secondNum: number): number {
        this.values.firstNumber = firstNum;
        this.values.operator = operator;
        this.values.secondNumber = secondNum;

        if (operator === '+') {
            return this.add(firstNum, secondNum);
        }
        if (operator === '-') {
            return this.subtract(firstNum, secondNum);
        }
        if (operator === '*') {
            return this.multiply(firstNum, secondNum);
        }
        if (operator === '/') {
            return this.divide(firstNum, secondNum);
        }
        return 0;
    }
}

class Main {
    private calculator: Calculator;

    constructor() {
        this.calculator = new Calculator();
    }

    run(): void {
        console.log(this.calculator.calculate(11, '+', 5));
        console.log(this.calculator.calculate(20, '-', 5));
        console.log(this.calculator.calculate(10, '*', 5));
        console.log(this.calculator.calculate(10, '/', 5));
    }
}

const app = new Main();
app.run();