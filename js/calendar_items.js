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
  let text = "";
  let mar = 0;
  let x = document.getElementById("f1");
  switch (true) {
    case element.start >= 0 && element.start < 30:
      if (element.start != 0) {
        mar = (element.start * 100) / 30;
      } else mar = 0;
      text +=
        '<div class="calendar_item" onclick="modalItem(this)" id="' +
        element.id +
        '"  style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 30 && element.start < 60:
      x = document.getElementById("f2");
      if (element.start != 30) {
        mar = ((element.start - 30) * 100) / 30;
      } else mar = 0;

      text +=
        '<div class="calendar_item" onclick="modalItem(this)"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 60 && element.start < 90:
      x = document.getElementById("f3");
      if (element.start != 60) {
        mar = ((element.start - 60) * 100) / 30;
      } else mar = 0;
      text +=
        '<div class="calendar_item" onclick="modalItem(this)"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 90 && element.start < 120:
      x = document.getElementById("f4");
      if (element.start != 90) {
        mar = ((element.start - 90) * 100) / 30;
      } else mar = 0;

      text +=
        '<div class="calendar_item" onclick="modalItem(this)"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 120 && element.start < 150:
      x = document.getElementById("f5");
      if (element.start != 120) {
        mar = ((element.start - 120) * 100) / 30;
      } else mar = 0;

      text +=
        '<div class="calendar_item" onclick="modalItem(this)"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 150 && element.start < 180:
      x = document.getElementById("f6");
      if (element.start != 150) {
        mar = ((element.start - 150) * 100) / 30;
      } else mar = 0;

      text +=
        '<div class="calendar_item" onclick="modalItem(this)"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 180 && element.start < 210:
      x = document.getElementById("f7");
      if (element.start != 180) {
        mar = ((element.start - 180) * 100) / 30;
      } else mar = 0;
      text +=
        '<div class="calendar_item" onclick="modalItem(this)"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 210 && element.start < 240:
      x = document.getElementById("f8");
      if (element.start != 210) {
        mar = ((element.start - 210) * 100) / 30;
      } else mar = 0;
      text +=
        '<div class="calendar_item" onclick="modalItem(this)"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 240 && element.start < 270:
      x = document.getElementById("f9");
      if (element.start != 240) {
        mar = ((element.start - 240) * 100) / 30;
      } else mar = 0;
      text +=
        '<div class="calendar_item" onclick="modalItem(this)"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 270 && element.start < 300:
      x = document.getElementById("f10");
      if (element.start != 270) {
        mar = ((element.start - 270) * 100) / 30;
      } else mar = 0;
      text +=
        '<div class="calendar_item" onclick="modalItem(this)"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 300 && element.start < 330:
      x = document.getElementById("f11");
      if (element.start != 300) {
        mar = ((element.start - 300) * 100) / 30;
      } else mar = 0;
      text +=
        '<div class="calendar_item" onclick="modalItem(this)"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 330 && element.start < 360:
      x = document.getElementById("f12");
      if (element.start != 330) {
        mar = ((element.start - 330) * 100) / 30;
      } else mar = 0;
      text +=
        '<div class="calendar_item" onclick="modalItem(this)"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 360 && element.start < 390:
      x = document.getElementById("f13");
      if (element.start != 360) {
        mar = ((element.start - 360) * 100) / 30;
      } else mar = 0;
      text +=
        '<div class="calendar_item" onclick="modalItem(this)"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 390 && element.start < 420:
      x = document.getElementById("f14");
      if (element.start != 390) {
        mar = ((element.start - 390) * 100) / 30;
      } else mar = 0;
      text +=
        '<div class="calendar_item" onclick="modalItem(this)"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 420 && element.start < 450:
      x = document.getElementById("f15");
      if (element.start != 420) {
        mar = ((element.start - 420) * 100) / 30;
      } else mar = 0;
      text +=
        '<div class="calendar_item" onclick="modalItem(this)"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 450 && element.start < 480:
      x = document.getElementById("f16");
      if (element.start != 450) {
        mar = ((element.start - 450) * 100) / 30;
      } else mar = 0;
      text +=
        '<div class="calendar_item" onclick="modalItem(this)"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 480 && element.start < 510:
      x = document.getElementById("f17");
      if (element.start != 480) {
        mar = ((element.start - 480) * 100) / 30;
      } else mar = 0;
      text +=
        '<div class="calendar_item" onclick="modalItem()"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 510 && element.start < 540:
      x = document.getElementById("f18");
      if (element.start != 510) {
        mar = ((element.start - 510) * 100) / 30;
      } else mar = 0;
      text +=
        '<div class="calendar_item" onclick="modalItem()"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 540 && element.start < 570:
      x = document.getElementById("f19");
      if (element.start != 540) {
        mar = ((element.start - 540) * 100) / 30;
      } else mar = 0;
      text +=
        '<div class="calendar_item" onclick="modalItem(this)"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 570 && element.start < 600:
      x = document.getElementById("f20");
      if (element.start != 570) {
        mar = ((element.start - 570) * 100) / 30;
      } else mar = 0;
      text +=
        '<div class="calendar_item" onclick="modalItem(this)"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
    case element.start >= 600 && element.start < 630:
      x = document.getElementById("f21");
      if (element.start != 0) {
        mar = ((element.start - 600) * 100) / 30;
      } else mar = 0;
      text +=
        '<div class="calendar_item" onclick="modalItem(this)"  id="' +
        element.id +
        '" style = "height: calc(' +
        element.duration +
        "px * 100 / 30); margin-top:" +
        mar +
        'px">';
      break;
  }

  text += element.title + "</div> ";

  x.innerHTML += text;
  text = "";
}
displayCalendarItems(calendar_items);
