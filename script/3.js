function Emploee(emploee) {
  return {
    id: emploee.id,
    name: emploee.name,
    surname: emploee.surname,
    salary: emploee.salary,
    workExperience: emploee.workExperience,
    isPrivileges: emploee.isPrivileges,
    gender: emploee.gender,
    getFullName: function () {
      return `${emploee.name} ${emploee.surname}`;
    },
  };
}
let createEmployesFromArr = (arr) => {
  let readyArray = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    readyArray[i] = new Emploee(arr[i]);
  }
  return readyArray;
};
const getFullNamesFromArr = (arr) => {
  let readyArray = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    readyArray[i] = arr[i].getFullName();
  }
  return readyArray;
};
const getMiddleSalary = (arr) => {
  let middlesalary = 0;
  for (let i = 0; i < arr.length; i++) {
    middlesalary = middlesalary + arr[i].salary;
  }
  return middlesalary / arr.length;
};

console.log("Task 1");
const employeeObj = new Emploee({
  id: 11,
  name: "Игорь",
  surname: "Куштым",
  salary: 300,
  workExperience: 1,
  isPrivileges: false,
  gender: "male",
});
console.log(employeeObj);
console.log(" ");

console.log("Task 2");
console.log(employeeObj.getFullName());
console.log(" ");

console.log("Task 3");
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);
console.log(emplyeeConstructArr);
console.log(" ");

console.log("Task 4");
console.log(getFullNamesFromArr(emplyeeConstructArr));
console.log(" ");

console.log("Task 5");
console.log(getMiddleSalary(emplyeeConstructArr)); // ответ не сходиться с тем, который предложен в ДЗ. Однако я вручную пересчитал среднее значение. Скорее всего, в дз опечатка
console.log(" ");
