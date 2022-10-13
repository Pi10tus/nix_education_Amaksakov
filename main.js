export default class Calculator {
  result;
  constructor() {}

  calculation(num1, num2, op) {
    if (
      typeof num1 === "string" ||
      num1 instanceof String ||
      typeof num2 === "string" ||
      num2 instanceof String
    ) {
      this.result = "Operator type is invalid";
      return this.result;
    }
    switch (op) {
      case "sum":
        this.result = num1 + num2;
        break;
      case "minus":
        this.result = num1 - num2;
        break;
      case "multiple":
        this.result = num1 * num2;
        break;
      case "division":
        this.result = num1 / num2;
        break;
      default:
        this.result = "operation not found";
        break;
    }
    return this.result;
  }
}

// const calc = new Calculator();
// console.log(calc.calculation(1, 2, "sum"));
// console.log(calc.calculation(1, 2, "minus"));
// console.log(calc.calculation(1, 2, "division"));
