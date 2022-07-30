function getArray() {
  console.log("Task 2");
  const amount = 12;
  let array = new Array(amount / 3);

  for (let i = 0; i < array.length; i++) {
    array[i] = new Array(3);
  }

  for (let i = 0; i < array.length; i++) {
    let array2 = [];
    for (let j = i * 3; j < i * 3 + 3; j++) {
      array2.push(j + 1);
    }
    array[i] = array2;
  }

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  console.log("");
}
getArray();
