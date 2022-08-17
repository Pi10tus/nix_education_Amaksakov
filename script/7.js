const searchCandidatesByPhoneNumber = (phone) => {
  var arr = [];
  phone = parseInt(phone.replace(/[^\d]/g, ""));

  condidateArr.forEach((element) => {
    if (
      String(parseInt(element.phone.replace(/[^\d]/g, ""))).indexOf(phone) >= 0
    ) {
      arr.push(element);
    }
  });

  return arr;
};

const getCandidateById = (id) => {
  var t = 0;
  condidateArr.forEach((element) => {
    if (element._id === id) {
      t = element;
    }
  });
  if (t) {
    var t2 = new Date(t.registered);
    t.registered =
      String(t2.getDate()).padStart(2, "0") +
      "/" +
      String(t2.getMonth() + 1).padStart(2, "0") +
      "/" +
      t2.getFullYear();
  }
  return t;
};
console.log("Task 1");
console.log(searchCandidatesByPhoneNumber("43"));
console.log(searchCandidatesByPhoneNumber("+1(869) 40"));
console.log(searchCandidatesByPhoneNumber("+1(869)408-39-82"));
console.log(" ");
console.log("Task 2");
console.log(getCandidateById("5e216bc9a6059760578aefa4"));
