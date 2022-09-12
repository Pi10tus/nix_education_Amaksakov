const calendar_items = [
  { start: 0, duration: 15, title: "Exercise", day: 1 },
  { start: 25, duration: 30, title: "Travel to work", day: 1 },
  { start: 180, duration: 30, title: "Plan day", day: 1 },
  { start: 0, duration: 15, title: "Exercise", day: 2 },
  { start: 25, duration: 30, title: "Travel to work", day: 2 },
  { start: 180, duration: 30, title: "Plan day", day: 2 },
  { start: 0, duration: 15, title: "Exercise", day: 3 },
  { start: 25, duration: 30, title: "Travel to work", day: 3 },
  { start: 180, duration: 30, title: "Plan day", day: 3 },
  { start: 0, duration: 15, title: "Exercise", day: 4 },
  { start: 25, duration: 30, title: "Travel to work", day: 4 },
  { start: 180, duration: 30, title: "Plan day", day: 4 },
  { start: 0, duration: 15, title: "Exercise", day: 5 },
  { start: 25, duration: 30, title: "Travel to work", day: 5 },
  { start: 180, duration: 30, title: "Plan day", day: 5 },
  { start: 0, duration: 15, title: "Exercise", day: 6 },
  { start: 25, duration: 30, title: "Travel to work", day: 6 },
  { start: 180, duration: 30, title: "Plan day", day: 6 },
  { start: 0, duration: 15, title: "Exercise", day: 7 },
  { start: 25, duration: 30, title: "Travel to work", day: 7 },
  { start: 180, duration: 30, title: "Plan day", day: 7 },
];

function displayCalendarItems(array) {
  const x = document.getElementById("calendar_content");
  console.log(x);
  let text = "";
  array.forEach((element) => {
    text +=
      '<div class="calendar_item" style = "height: calc(' +
      element.duration +
      "px * 75 / 30); position: absolute; top:calc(10.25vh + (" +
      element.start.toFixed(2) / 100 +
      " * 33.5vh));";
    switch (element.day) {
      case 1:
        text += 'left:4vw; ">';
        break;
      case 2:
        text += 'left:18.5vw; ">';
        break;
      case 3:
        text += 'left:32.5vw; ">';
        break;
      case 4:
        text += 'left:46.75vw; ">';
        break;
      case 5:
        text += 'left:61vw; ">';
        break;
      case 6:
        text += 'left:75vw; ">';
        break;
      case 7:
        console.log("Oranges are $0.59 a pound.");
        break;
    }

    text += element.title + "</div> ";
    x.innerHTML += text;
    console.log(text);
    text = "";
  });
}
displayCalendarItems(calendar_items);
