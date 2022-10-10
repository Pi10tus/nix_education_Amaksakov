fetch("http://localhost:8000", { mode: "no-cors", body: JSON.stringify(data) })
  .then((response) => response.json())
  .then((data) => console.log(data));
function settingsDisplay() {
  var x = document.getElementById("mfs");
  if (x.style.display === "block") x.style.display = "none";
  else x.style.display = "block";
}
function changeDisplay(element) {
  switch (element.id) {
    case "btn_1":
      var x = document.getElementById("field_1");
      if (x.style.display === "block") x.style.display = "none";
      else x.style.display = "block";
      break;
    case "btn_2":
      var x = document.getElementById("field_2");
      if (x.style.display === "block") x.style.display = "none";
      else x.style.display = "block";
      break;
    case "btn_3":
      var x = document.getElementById("field_3");
      if (x.style.display === "block") x.style.display = "none";
      else x.style.display = "block";
      break;
    case "btn_4":
      var x = document.getElementById("field_4");
      if (x.style.display === "block") x.style.display = "none";
      else x.style.display = "block";
      break;
    case "btn_5":
      var x = document.getElementById("field_5");
      if (x.style.display === "block") x.style.display = "none";
      else x.style.display = "block";
      break;
  }
}
function itemDisplay(element) {
  if (
    String(window.event.path[0].onclick) !=
    "function onclick(event) {" + "\naddToCart(this)" + "\n}"
  ) {
    var x = document.getElementById("itemInfo");
    x.style.display = "flex";
    var x1 = document.getElementById("itemInfoBack");
    x1.style.display = "block";
    let text = "";

    text +=
      '<div> <img src="./img/' +
      items[element.id - 1].imgUrl +
      '" alt="" class="modal_content_img" /> </div>';
    text +=
      " <div> <h2>" +
      items[element.id - 1].name +
      '</h2>  <p class="modal_content_review"> <img src="./img/icons/like_filled.svg" alt="like" />';
    text +=
      " <span><span><b> " +
      items[element.id - 1].orderInfo.reviews +
      "%</b> Positive reviews </span><span> Above avarage</span></span>";
    text +=
      '<span><span style="text-align: center"><b>' +
      Math.floor(Math.random() * items[element.id - 1].orderInfo.inStock) +
      "</b> </span><span> orders</span></span></p>";
    text +=
      '<p class="modal_content_info"> <p class="modal_content_info_el">Color: <b> ' +
      items[element.id - 1].color +
      '</b></p> <p class="modal_content_info_el">Operating System:<b>   ' +
      items[element.id - 1].os +
      '</b></p> <p class="modal_content_info_el">Chip:<b>   ' +
      items[element.id - 1].chip.name +
      '</b>  </p> <p class="modal_content_info_el">Height: <b> ' +
      items[element.id - 1].size.height +
      ' cm</b></p> <p class="modal_content_info_el">Width: <b> ' +
      items[element.id - 1].size.width +
      ' cm</b></p> <p class="modal_content_info_el">Depth: <b> ' +
      items[element.id - 1].size.depth +
      ' cm</b></p> <p class="modal_content_info_el">Weight: <b> ' +
      items[element.id - 1].size.weight +
      " g</b></p> </p>";
    text +=
      "</div> <div><h3>$ " +
      items[element.id - 1].price +
      '</h3> <p class="modal_content_stocks">Stocks: ' +
      items[element.id - 1].orderInfo.inStock +
      ' pcs.</p> <p class="modal_content_button">Add to cart</p> </div>';
    x.innerHTML += text;
  }
}
function closeInfo() {
  var x = document.getElementById("itemInfo");
  x.style.display = "none";
  var x1 = document.getElementById("itemInfoBack");
  x1.style.display = "none";
  document.getElementById("itemInfo").innerHTML = "";
}
const container = document.getElementById("products");
function displayGoods(items) {
  clearGoods();
  items.forEach((element) => {
    let text = "";
    text +=
      '<div class="products_item" id="' +
      element.id +
      '" onclick="itemDisplay(this)"> ';
    text +=
      '<img src="./img/icons/like_empty.svg" alt="like" class="products_item_like" />';
    text +=
      '<img src="./img/' +
      element.imgUrl +
      '" alt="apple-tv" class="products_item_img"/>';
    text += "<h2>" + element.name + "</h2>";
    text += "<p><b>" + element.orderInfo.inStock + "</b> left in stock</p>";
    text += "<p>Price: <b>" + element.price + "</b> $</p>";
    text +=
      '<div class="products_item_button"id="b_' +
      element.id +
      '" onclick="addToCart(this)">Add to cart</div> <div class="products_item_bottom"> <div>';
    text +=
      " <p><b>" +
      element.orderInfo.reviews +
      "%</b> Positive reviews</p> <p><b>" +
      Math.floor(Math.random() * element.orderInfo.inStock) +
      "</b></p> </div>";
    text +=
      '<div> <p>Above avarage</p> <p>orders</p> </div> <img src="./img/icons/like_filled.svg" alt="like" /> </div> </div>';
    container.innerHTML += text;
  });
}
function clearGoods() {
  container.innerHTML = "";
}
displayGoods(items);
