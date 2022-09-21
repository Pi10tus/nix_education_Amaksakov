const calendar_items = [
  { start: 0, duration: 15, title: "Exercise", id: "el_1" },
  { start: 25, duration: 30, title: "Travel to work", id: "el_2" },
  { start: 30, duration: 30, title: "Plan day", id: "el_3" },
  { start: 60, duration: 15, title: "Review yesterday's commits", id: "el_4" },
  { start: 100, duration: 15, title: "Code review", id: "el_5" },
  { start: 180, duration: 90, title: "Have lunch with John", id: "el_6" },
  { start: 360, duration: 30, title: "Skype call", id: "el_7" },
  { start: 370, duration: 45, title: "Follow up with designer", id: "el_8" },
  { start: 405, duration: 30, title: "Review yesterday's commits", id: "el_9" },
];

function deleteItem(element) {
  for (let i = 0; i < calendar_items.length; i++) {
    if (calendar_items[i] === element.value) {
      calendar_items.splice(i, 1);
      break;
    }
  }
  closeInfo();
  displayCalendarItems(calendar_items);
}
function safeItem(element) {
  element.value.start = document.getElementById("text_time").value;
  element.value.duration = document.getElementById("text_duration").value;
  element.value.title = document.getElementById("text_title").value;
  closeInfo();
  displayCalendarItems(calendar_items);
}
function displayCalendarItems(array) {
  let folders = document.getElementsByClassName("folder");

  Array.prototype.forEach.call(folders, function (el) {
    el.innerHTML = "";
  });

  array.forEach((element) => {
    addFinalElement(element);
  });
}
function modalItem(element) {
  const el = calendar_items.find((obj) => obj.id === element.id);
  let x = document.getElementById("itemInfoBack");
  x.style.display = "block";
  let x1 = document.getElementById("itemInfo");
  x1.style.display = "flex";
  let safe_b = document.getElementById("safe");
  let delete_b = document.getElementById("del");
  document.getElementById("text_title").value = el.title;
  document.getElementById("text_time").value = el.start;
  document.getElementById("text_duration").value = el.duration;
  safe_b.value = el;
  delete_b.value = el;
}
function closeInfo() {
  let x = document.getElementById("itemInfoBack");
  x.style.display = "none";
  let x1 = document.getElementById("itemInfo");
  x1.style.display = "none";
}
function addElement() {
  let x = document.getElementById("add_start");
  let x1 = document.getElementById("add_minute");
  let x2 = document.getElementById("add_title");
  let el = {
    start: Number(x.value),
    duration: Number(x1.value),
    title: x2.value,
    id:
      "el_" +
      (Number(calendar_items[calendar_items.length - 1].id.match(/\d+/)[0]) +
        1),
  };
  calendar_items.push(el);
  addFinalElement(el);
}
function addFinalElement(element) {
  let x = document.getElementById("f1");
  switch (true) {
    case element.start >= 0 && element.start < 30:
      addHtml("f1", 0, element);
      break;

    case element.start >= 30 && element.start < 60:
      addHtml("f2", 30, element);
      break;

    case element.start >= 60 && element.start < 90:
      addHtml("f3", 60, element);
      break;

    case element.start >= 90 && element.start < 120:
      addHtml("f4", 90, element);
      break;
    case element.start >= 120 && element.start < 150:
      addHtml("f5", 120, element);
      break;
    case element.start >= 150 && element.start < 180:
      addHtml("f6", 150, element);
      break;
    case element.start >= 180 && element.start < 210:
      addHtml("f7", 180, element);
      break;
    case element.start >= 210 && element.start < 240:
      addHtml("f8", 210, element);
      break;
    case element.start >= 240 && element.start < 270:
      addHtml("f9", 240, element);
      break;
    case element.start >= 270 && element.start < 300:
      addHtml("f10", 270, element);
      break;
    case element.start >= 300 && element.start < 330:
      addHtml("f11", 300, element);
      break;
    case element.start >= 330 && element.start < 360:
      addHtml("f12", 330, element);
      break;
    case element.start >= 360 && element.start < 390:
      addHtml("f13", 360, element);

      break;
    case element.start >= 390 && element.start < 420:
      addHtml("f14", 390, element);
      break;
    case element.start >= 420 && element.start < 450:
      addHtml("f15", 420, element);
      break;
    case element.start >= 450 && element.start < 480:
      addHtml("f16", 450, element);
      break;
    case element.start >= 480 && element.start < 510:
      addHtml("f17", 480, element);
      break;
    case element.start >= 510 && element.start < 540:
      addHtml("f18", 510, element);
      break;
    case element.start >= 540 && element.start < 570:
      addHtml("f19", 540, element);
      break;
    case element.start >= 570 && element.start < 600:
      addHtml("f20", 570, element);
      break;
    case element.start >= 600 && element.start < 630:
      addHtml("f21", 600, element);
      break;
  }
}
function addHtml(id, timestart, element) {
  let x = document.getElementById(id);
  let mar = 0;
  if (element.start != 0) {
    mar = ((element.start - timestart) * 100) / 30;
  }
  let text = "";
  text +=
    '<div class="calendar_item" onclick="modalItem(this)"  id="' +
    element.id +
    '" style = "height: calc(' +
    element.duration +
    "px * 100 / 30); margin-top:" +
    mar +
    'px">';
  text += element.title + "</div> ";

  x.innerHTML += text;
}
displayCalendarItems(calendar_items);
