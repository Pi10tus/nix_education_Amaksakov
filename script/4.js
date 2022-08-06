class Student {
  constructor(enrollee) {
    Student.number++;
    this.id = Student.number;
    this.name = enrollee.name;
    this.surname = enrollee.surname;
    this.ratingPoint = enrollee.ratingPoint;
    this.schoolPoint = enrollee.schoolPoint;
    this.isSelfPayment = true;
    Student.listOfStudents.push({
      id: this.id,
      name: this.name,
      surname: this.surname,
      ratingPoint: this.ratingPoint,
      schoolPoint: this.schoolPoint,
      isSelfPayment: this.isSelfPayment,
    });

    Student.listOfStudents.sort(function (a, b) {
      if (a.ratingPoint > b.ratingPoint) {
        return -1;
      }
      if (a.ratingPoint < b.ratingPoint) {
        return 1;
      }
      if (a.schoolPoint > b.schoolPoint) {
        return -1;
      }
      if (a.schoolPoint < b.schoolPoint) {
        return 1;
      }
    });

    Student.listOfStudents.forEach((element) => (element.isSelfPayment = true));

    for (
      let i = 0;
      i <
      (Student.listOfStudents.length < 5 ? Student.listOfStudents.length : 5);
      i++
    ) {
      if (Student.listOfStudents[i].ratingPoint >= 800)
        Student.listOfStudents[i].isSelfPayment = false;
      else break;
    }
  }
}

class CustomString {
  reverse(text) {
    return text.split("").reverse().join("");
  }
  ucFirst(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  ucWords(text) {
    let arr = text.split(" ");
    let text2 = "";
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      text2 += " " + arr[i];
    }

    return text2.slice(1);
  }
}

console.log("Task 1");
Student.number = 0;
Student.listOfStudents = [];
new Student(studentArr[0]);
new Student(studentArr[1]);
new Student(studentArr[3]);
new Student(studentArr[4]);
new Student(studentArr[5]);
new Student(studentArr[6]);
new Student(studentArr[7]);
new Student(studentArr[8]);
new Student(studentArr[7]);
new Student(studentArr[9]);
new Student(studentArr[10]);
console.log(Student.listOfStudents);
console.log(" ");
console.log("Task 2");
const myString = new CustomString();
console.log(myString.reverse("qwerty"));
console.log(myString.ucFirst("qwerty"));
console.log(myString.ucWords("qwerty qwerty qwerty"));
