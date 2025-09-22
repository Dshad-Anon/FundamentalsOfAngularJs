"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = exports.Values = void 0;
var Values = /** @class */ (function () {
    function Values() {
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.operator = '';
    }
    return Values;
}());
exports.Values = Values;
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.values = new Values();
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        return a / b;
    };
    Calculator.prototype.calculate = function (firstNum, operator, secondNum) {
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
    };
    return Calculator;
}());
exports.Calculator = Calculator;
var Main = /** @class */ (function () {
    function Main() {
        this.calculator = new Calculator();
    }
    Main.prototype.run = function () {
        console.log(this.calculator.calculate(11, '+', 5));
        console.log(this.calculator.calculate(20, '-', 5));
        console.log(this.calculator.calculate(10, '*', 5));
        console.log(this.calculator.calculate(10, '/', 5));
    };
    return Main;
}());
var app = new Main();
app.run();
