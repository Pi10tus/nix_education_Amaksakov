import * as assert from "assert";
import Calculator from "../main.js";

describe("Calculator testing", function () {
  let calc = new Calculator();
  it("Checking sum function with mantissa.", function () {
    assert.strictEqual(calc.calculation(2, 3, "sum"), 5);
  });
  it("Checking minus function with mantissa.", function () {
    assert.strictEqual(calc.calculation(2, 3, "minus"), -1);
  });
  it("Checking multiple function with mantissa.", function () {
    assert.strictEqual(calc.calculation(2, 3, "multiple"), 6);
  });
  it("Checking division function with mantissa.", function () {
    assert.strictEqual(calc.calculation(6, 2, "division"), 3);
  });

  it("Checking sum function with a floating-point number.", function () {
    assert.strictEqual(calc.calculation(2.5, 3.25, "sum"), 5.75);
  });
  it("Checking minus function with a floating-point number.", function () {
    assert.strictEqual(calc.calculation(2.5, 3.25, "minus"), -0.75);
  });
  it("Checking multiple function with a floating-point number.", function () {
    assert.strictEqual(calc.calculation(0.25, 3, "multiple"), 0.75);
  });
  it("Checking division function with a floating-point number.", function () {
    assert.strictEqual(calc.calculation(1, 2, "division"), 0.5);
  });

  it("Checking on invalid operation.", function () {
    assert.strictEqual(
      calc.calculation(2.5, 3.25, "agrwhrtsh"),
      "operation not found"
    );
  });

  it("Checking on invalid operator.", function () {
    assert.strictEqual(
      calc.calculation("%", "!4r283742h", "sum"),
      "Operator type is invalid"
    );
  });

});
