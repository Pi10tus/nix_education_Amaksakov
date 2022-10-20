import * as assert from "assert";
import Calculator from "../main.js";

function doTest(braces, expected) {
  const actual = checkBraces(braces);
  assert.strictEqual(actual, expected, `for braces:\n"${braces}"\n`);
}
function checkBraces(braces) {
  if (braces.length % 2 !== 0) return false;
  const openBraces = ["(", "{", "["];
  let bracketArr = [];
  let result = true;
  braces.split("").forEach((brecket) => {
    if (openBraces.includes(brecket)) bracketArr.push(brecket);
    else {
      const lastBracket = bracketArr.pop();
      if (brecket !== closeBracket(lastBracket)) {
        result = false;
        return;
      }
    }
  });
  return result ? bracketArr.length === 0 : result;
}
function closeBracket(bracket){
  switch(bracket){
    case '(':
      return ')';
    case '{':
      return '}';
    case '[':
      return ']';
  }
}
const symbolQuantity = 4;

function maskify(cc) {
  const arrCC = cc.split("");

  return arrCC.length > symbolQuantity
    ? arrCC
        .map((el, i, arr) =>
          arr.length - symbolQuantity > i ? (el = "#") : el
        )
        .join("")
    : cc;
}
function randomString() {
  return Math.random()
    .toString(36)
    .substring(2, 5 + Math.random() * 10);
}
function getMask(original) {
  let masked = [];
  for (let i = 0; i < original.length - 4; i++) masked.push("#");
  for (let i = original.length - 4; i < original.length; i++)
    masked.push(original[i]);
  return masked.join("");
}

function narcissistic(value) {
  const nums = Array.from(String(value), Number);
  const narcissisticVal = nums.reduce(
    (accumulator, currentValue, index, array) =>
      accumulator + Math.pow(+currentValue, array.length),
    0
  );
  return narcissisticVal === value;
}
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
describe("Maskify function test", function () {
  for (let i = 0; i < 200; i++) {
    let temp = randomString() + randomString();
    let temp2 = getMask(temp);
    it("Checking " + temp, function () {
      assert.strictEqual(maskify(temp), temp2);
    });
  }
});
describe("Narcissistic function test", function () {
  let size = Math.floor(Math.random() * 10) + 5;
  for (let i = 0; i < size; i++) {
    let value = Math.floor(Math.random() * 42000) + 9475;

    it("Checking " + value, function () {
      assert.strictEqual(
        narcissistic(value),
        false,
        value + "is not narcissistic"
      );
    });
  }
});

describe("Tests suite", function () {
  it("sample tests", function () {
    doTest("()))", false);
    doTest("()", true);
    doTest("[]", true);
    doTest("{}", true);
    doTest("(){}[]", true);
    doTest("([{}])", true);
    doTest("(}", false);
    doTest("[(])", false);
    doTest("({})[({})]", true);
    doTest("(})", false);
    doTest("(({{[[]]}}))", true);
    doTest("{}({})[]", true);
    doTest(")(}{][", false);
    doTest("())({}}{()][][", false);
    doTest("(((({{", false);
    doTest("}}]]))}])", false);
  });
});
