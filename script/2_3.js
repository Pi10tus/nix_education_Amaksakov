const namesOfDays = {
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};
function getNameOfDay() {
  console.log("Task 3");
  const lang = "en";
  const day = 7;
  console.log(namesOfDays[lang][day - 1]);
  console.log();
}
getNameOfDay();
