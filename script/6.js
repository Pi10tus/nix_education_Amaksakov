function removeUser(arr, n) {
  if (n >= 0 && n < arr.length) arr.splice(n, 1);
}

function getAllKeys(obj) {
  return console.log(Object.keys(obj));
}
function getAllValues(obj) {
  return console.log(Object.values(obj));
}
function insertIntoarr(obj, n) {
  arr1.splice(n - 1, 0, obj);
}
class Condidate {
  constructor(obj) {
    this.info = obj;
  }
  state() {
    console.log(this.info.address.split(",")[2]);
  }
}
function getCompanyNames() {
  var t = [];
  condidateArr.forEach((element) => {
    if (!t.includes(element.company)) {
      t.push(element.company);
    }
  });
  console.log(t);
}
function getUsersByYear(year) {
  var t = [];
  condidateArr.forEach((element) => {
    if (element.registered.split("-")[0] == year) {
      t.push(element._id);
    }
  });
  console.log(t);
}
function getCondidatesByUnreadMsg(n) {
  var t = [];
  condidateArr.forEach((element) => {
    if (parseInt(element.greeting.match(/\d+/)) == n) {
      t.push(new Condidate(element));
    }
  });
  console.log(t);
}
function getCondidatesByGender(gender) {
  var t = [];
  condidateArr.forEach((element) => {
    if (element.gender == gender) {
      t.push(new Condidate(element));
    }
  });
  console.log(t);
}

console.log("Task 1");
const arr = ["Vasya", "Petya", "Alexey"];
removeUser(arr, 1);
console.log(arr);
console.log(" ");

console.log("Task 2");
const obj = { name: "Vasya", age: 1 };
getAllKeys(obj);
console.log(" ");

console.log("Task 3");
getAllValues(obj);
console.log(" ");

console.log("Task 4");
const obj1 = {
  id: 3,
  name: "Vasya",
};
const secondObj = {
  id: 4,
  name: "Katya",
};
const arr1 = [
  {
    id: 1,
    name: "Kolya",
  },
  {
    id: 2,
    name: "Petya",
  },
];
insertIntoarr(obj1, 2);
console.log(arr1);
insertIntoarr(secondObj, 1);
console.log(arr1);
console.log(" ");

console.log("Task 5");
const condidate = new Condidate(condidateArr[0]);
condidate.state();
console.log(" ");

console.log("Task 6");
getCompanyNames();
console.log(" ");

console.log("Task 7");
getUsersByYear(2017);
console.log(" ");

console.log("Task 8");
getCondidatesByUnreadMsg(8);
console.log(" ");

console.log("Task 9");
getCondidatesByGender("male");
console.log(" ");
