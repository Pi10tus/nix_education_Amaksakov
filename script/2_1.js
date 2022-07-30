const citiesAndCountries = {
  Киев: "Украина",
  "Нью-Йорк": "США",
  Амстердам: "Нидерланды",
  Берлин: "Германия",
  Париж: "Франция",
  Лиссабон: "Португалия",
  Вена: "Австрия",
};
function cityOrigin() {
  console.log("Task 1");
  let countryKeys = Object.keys(citiesAndCountries);
  let countyValues = Object.values(citiesAndCountries);
  for (let i = 0; i < countryKeys.length; i++) {
    console.log(countryKeys[i] + " - " + "это " + countyValues[i]);
  }
  console.log(" ");
}
cityOrigin();
