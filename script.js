// Akan name arrays for male and female days
const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Convert month input to a number between 1 and 12.
// The user can type a month number or the month name.
function parseMonth(value) {
  const number = parseInt(value, 10);
  if (!Number.isNaN(number) && number >= 1 && number <= 12) {
    return number;
  }

  const monthNames = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const index = monthNames.indexOf(value.trim().toLowerCase());
  return index >= 0 ? index + 1 : null;
}

// Choose the correct Akan name based on the weekday index and gender.
function getAkanName(dayIndex, gender) {
  const normalizedGender = gender.trim().toLowerCase();
  if (normalizedGender === "male" || normalizedGender === "m") {
    return maleNames[dayIndex];
  }
  if (normalizedGender === "female" || normalizedGender === "f") {
    return femaleNames[dayIndex];
  }
  return null;
}

// Update the result section, if it exists.
function showResult(message) {
  const resultElement = document.getElementById("akan-result");
  if (resultElement) {
    resultElement.textContent = message;
  } else {
    alert(message);
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const dayInput = document.getElementById("birth-date").value;
  const monthInput = document.getElementById("month").value;
  const yearInput = document.getElementById("year").value;
  const genderInput = document.getElementById("gender").value;

  const dd = parseInt(dayInput, 10);
  let mm = parseMonth(monthInput);
  let year = parseInt(yearInput, 10);

  // If the user enters January or February, use the formula adjustment
  // that makes month 13 and 14 for calculation.
  if (mm === 1 || mm === 2) {
    mm += 12;
    year -= 1;
  }

  const yy = year % 100; // last two digits of the year
  const cc = Math.floor(year / 100); // century part of the year

  // The formula from your request
  let d =
    Math.floor(cc / 4) -
    2 * cc -
    1 +
    Math.floor((5 * yy) / 4) +
    Math.floor((26 * (mm + 1)) / 10) +
    dd;

  d = d % 7;
  if (d < 0) {
    d += 7; // keep the weekday index positive
  }

  const akanName = getAkanName(d, genderInput);
  showResult(`You were born on ${weekDays[d]}. Your Akan name is ${akanName}.`);
});
