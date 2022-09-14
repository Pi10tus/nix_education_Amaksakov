const calendar_items = [
  { start: 0, duration: 15, title: "Exercise" },
  { start: 25, duration: 30, title: "Travel to work" },
  { start: 30, duration: 30, title: "Plan day" },
  { start: 60, duration: 15, title: "Review yesterday's commits" },
  { start: 100, duration: 15, title: "Code review" },
  { start: 180, duration: 90, title: "Have lunch with John" },
  { start: 360, duration: 30, title: "Skype call" },
  { start: 370, duration: 45, title: "Follow up with designer" },
  { start: 405, duration: 30, title: "Review yesterday's commits" },
];

function displayCalendarItems(array) {
  let text = "";
  let mar = 0;
  array.forEach((element) => {
    let x = document.getElementById("f1");
    switch (true) {
      case element.start >= 0 && element.start < 30:
        text +=
          '<div class="calendar_item" style = "height: calc(' +
          element.duration +
          "px * 100 / 30); margin-top:" +
          element.start +
          'px">';
        break;
      case element.start >= 30 && element.start < 60:
        x = document.getElementById("f2");
        mar = element.start - 30;

        text +=
          '<div class="calendar_item" style = "height: calc(' +
          element.duration +
          "px * 100 / 30); margin-top:" +
          mar +
          'px">';
        break;
      case element.start >= 60 && element.start < 90:
        x = document.getElementById("f3");
        mar = element.start - 60;

        text +=
          '<div class="calendar_item" style = "height: calc(' +
          element.duration +
          "px * 100 / 30); margin-top:" +
          mar +
          'px">';
        break;
      case element.start >= 90 && element.start < 120:
        x = document.getElementById("f4");
        mar = element.start - 90;

        text +=
          '<div class="calendar_item" style = "height: calc(' +
          element.duration +
          "px * 100 / 30); margin-top:" +
          mar +
          'px">';
        break;
      case element.start >= 120 && element.start < 150:
        x = document.getElementById("f5");
        mar = element.start - 120;

        text +=
          '<div class="calendar_item" style = "height: calc(' +
          element.duration +
          "px * 100 / 30); margin-top:" +
          mar +
          'px">';
        break;
      case element.start >= 150 && element.start < 180:
        x = document.getElementById("f6");
        mar = element.start - 150;

        text +=
          '<div class="calendar_item" style = "height: calc(' +
          element.duration +
          "px * 100 / 30); margin-top:" +
          mar +
          'px">';
        break;
      case element.start >= 180 && element.start < 210:
        x = document.getElementById("f7");
        mar = element.start - 180;
        text +=
          '<div class="calendar_item" style = "height: calc(' +
          element.duration +
          "px * 100 / 30); margin-top:" +
          mar +
          'px">';
        break;
      case element.start >= 210 && element.start < 240:
        x = document.getElementById("f8");
        mar = element.start - 210;
        text +=
          '<div class="calendar_item" style = "height: calc(' +
          element.duration +
          "px * 100 / 30); margin-top:" +
          mar +
          'px">';
        break;
      case element.start >= 240 && element.start < 270:
        x = document.getElementById("f9");
        mar = element.start - 240;
        text +=
          '<div class="calendar_item" style = "height: calc(' +
          element.duration +
          "px * 100 / 30); margin-top:" +
          mar +
          'px">';
        break;
      case element.start >= 270 && element.start < 300:
        x = document.getElementById("f10");
        mar = element.start - 270;
        text +=
          '<div class="calendar_item" style = "height: calc(' +
          element.duration +
          "px * 100 / 30); margin-top:" +
          mar +
          'px">';
        break;
      case element.start >= 300 && element.start < 330:
        x = document.getElementById("f11");
        mar = element.start - 300;
        text +=
          '<div class="calendar_item" style = "height: calc(' +
          element.duration +
          "px * 100 / 30); margin-top:" +
          mar +
          'px">';
        break;
      case element.start >= 330 && element.start < 360:
        x = document.getElementById("f12");
        mar = element.start - 330;
        text +=
          '<div class="calendar_item" style = "height: calc(' +
          element.duration +
          "px * 100 / 30); margin-top:" +
          mar +
          'px">';
        break;
      case element.start >= 360 && element.start < 390:
        x = document.getElementById("f13");
        mar = element.start - 360;
        text +=
          '<div class="calendar_item" style = "height: calc(' +
          element.duration +
          "px * 100 / 30); margin-top:" +
          mar +
          'px">';
        break;
      case element.start >= 390 && element.start < 420:
        x = document.getElementById("f14");
         mar = element.start - 390;
         text +=
           '<div class="calendar_item" style = "height: calc(' +
           element.duration +
           "px * 100 / 30); margin-top:" +
           mar +
           'px">';
        break;
      case element.start >= 420 && element.start < 450:
        x = document.getElementById("f15");
         mar = element.start - 420;
         text +=
           '<div class="calendar_item" style = "height: calc(' +
           element.duration +
           "px * 100 / 30); margin-top:" +
           mar +
           'px">';
        break;
      case element.start >= 450 && element.start < 480:
        x = document.getElementById("f16");
         mar = element.start - 450;
         text +=
           '<div class="calendar_item" style = "height: calc(' +
           element.duration +
           "px * 100 / 30); margin-top:" +
           mar +
           'px">';
        break;
      case element.start >= 480 && element.start < 510:
        x = document.getElementById("f17");
         mar = element.start - 480;
         text +=
           '<div class="calendar_item" style = "height: calc(' +
           element.duration +
           "px * 100 / 30); margin-top:" +
           mar +
           'px">';
        break;
      case element.start >= 510 && element.start < 540:
        x = document.getElementById("f18");
         mar = element.start - 510;
         text +=
           '<div class="calendar_item" style = "height: calc(' +
           element.duration +
           "px * 100 / 30); margin-top:" +
           mar +
           'px">';
        break;
      case element.start >= 540 && element.start < 570:
        x = document.getElementById("f19");
         mar = element.start - 540;
         text +=
           '<div class="calendar_item" style = "height: calc(' +
           element.duration +
           "px * 100 / 30); margin-top:" +
           mar +
           'px">';
        break;
      case element.start >= 570 && element.start < 600:
        x = document.getElementById("f20");
         mar = element.start - 570;
         text +=
           '<div class="calendar_item" style = "height: calc(' +
           element.duration +
           "px * 100 / 30); margin-top:" +
           mar +
           'px">';
        break;
      case element.start >= 600 && element.start < 630:
        x = document.getElementById("f21");
         mar = element.start - 600;
         text +=
           '<div class="calendar_item" style = "height: calc(' +
           element.duration +
           "px * 100 / 30); margin-top:" +
           mar +
           'px">';
        break;
    }

    text += element.title + "</div> ";

    x.innerHTML += text;
    text = "";
  });
}
displayCalendarItems(calendar_items);
