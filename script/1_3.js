function sheets() {
  console.log("Task 3");
  const sheetsInReamPaper = 500;
  const consumptionPerWeek = 1200;
  const weeksAmount = 8;
  var a = 0;
  for (
    let i = 0;
    i < consumptionPerWeek * weeksAmount;
    i = i + sheetsInReamPaper
  ) {
    a++;
  }
  console.log(a);
}
sheets();
