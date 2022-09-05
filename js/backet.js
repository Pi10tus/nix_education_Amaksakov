const field = document.getElementById("backet_items_list");
const backet_items = [];
function displayBacket() {
  const el = document.getElementById("backet_section");
  if (el.style.display === "block") el.style.display = "none";
  else el.style.display = "block";
}
function addToCart(element) {
  const backet = document.getElementById("backet_section");
  backet.style.display = "block";
  if (!backet_items.includes(items[element.id.replace(/[^\d.]/g, "") - 1])) {
    backet_items.push(items[element.id.replace(/[^\d.]/g, "") - 1]);
    Object.assign(backet_items[backet_items.length - 1], { number: 1 });
  } else {
    backet_items.forEach((el) => {
      if (el === items[element.id.replace(/[^\d.]/g, "") - 1]) {
        el.number += 1;
      }
    });
  }
  insertIntoBacket(backet_items);
}
function clearBacket() {
  field.innerHTML = "";
}
function insertIntoBacket(items) {
  clearBacket();
  let total_number = 0;
  let total_price = 0;

  items.forEach((element) => {
    total_price = total_price + element.price * element.number;
    total_number += element.number;
    let text = "";
    text += '<div class="backet_items_list_el">';
    text +=
      '<img src="./img/' +
      element.imgUrl +
      '" alt="" width="100px" height="100px" />';
    text +=
      '<span class="backet_title" id="t_' +
      element.id +
      '">' +
      element.name +
      "</span>";
    text += '<span class="backet_price">$' + element.price + "</span>";
    text +=
      '<span class="button_reduce" onclick="reduceNumber(this)" id="r_' +
      element.id +
      '"> <</span>';
    text += '<span class="backet_number">' + element.number + "</span>";
    text +=
      '<span class="button_add" onclick="addNumber(this)" id="a_' +
      element.id +
      '"> ></span>';
    text +=
      '<span class="button_delete" onclick="deleteFromBacket(this)" id="d_' +
      element.id +
      '"> X</span>';
    text += " </div> <hr />";
    field.innerHTML += text;
  });
  var x = document.getElementById("number_total");
  var x1 = document.getElementById("price_total");
  x.innerHTML =
    '<span id="number_total">Total amount: <b>' +
    total_number +
    " ptc.</b> </span>";
  x1.innerHTML =
    '<span id="price_total">Total price: <b> ' + total_price + "</b> </span>";
}
function deleteFromBacket(element) {
  for (let i = 0; i < backet_items.length; i++) {
    if (element.id.replace(/[^\d.]/g, "") == backet_items[i].id) {
      backet_items.splice(i, 1);
      insertIntoBacket(backet_items);
      break;
    }
  }
}
function addNumber(element) {
  for (let i = 0; i < backet_items.length; i++) {
    if (element.id.replace(/[^\d.]/g, "") == backet_items[i].id) {
      backet_items[i].number += 1;
      insertIntoBacket(backet_items);
      break;
    }
  }
}
function reduceNumber(element) {
  for (let i = 0; i < backet_items.length; i++) {
    if (element.id.replace(/[^\d.]/g, "") == backet_items[i].id) {
      if (backet_items[i].number > 1) {
        backet_items[i].number -= 1;
        insertIntoBacket(backet_items);
      }
      break;
    }
  }
}
