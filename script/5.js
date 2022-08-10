console.log("Task 1");
const sumArgs = () => {
  let sum = 0;
  return function (value) {
    sum += value;
    console.log(sum);
  };
};
let counter = sumArgs();
counter(3);
counter(5);
counter(228);
console.log(" ");

console.log("Task 2");
const pushArray = () => {
  let array = [];
  return function (value) {
    if (value) {
      array.push(value);
    } else {
      array = [];
    }
    console.log(array);
  };
};
let getUpdatedArr = pushArray();
getUpdatedArr(3);
getUpdatedArr(5);
getUpdatedArr({ name: "Vasya" });
getUpdatedArr();
getUpdatedArr(4);
