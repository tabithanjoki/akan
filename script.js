// Akan names for each day of the week
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

// Get the Akan name based on the day index and gender
function getAkanName(dayIndex, gender) {
  if (gender === "male") {
    return maleNames[dayIndex];
  }
  if (gender === "female") {
    return femaleNames[dayIndex];
  }
  return "Unknown";
}

// Listen for form submit
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the input values
  const dd = parseInt(document.getElementById("birth-date").value, 10);
  let mm = parseInt(document.getElementById("month").value, 10);
  let year = parseInt(document.getElementById("year").value, 10);
  const gender = document.getElementById("gender").value;

  // Adjust for January and February
  if (mm === 1) {
    mm = 13;
    year -= 1;
  }
  if (mm === 2) {
    mm = 14;
    year -= 1;
  }

  // Calculate century and year parts
  const cc = Math.floor(year / 100);
  const yy = year % 100;

  // Apply the formula
  let d =
    Math.floor(cc / 4) -
    2 * cc -
    1 +
    Math.floor((5 * yy) / 4) +
    Math.floor((26 * (mm + 1)) / 10) +
    dd;
  d = d % 7;
  if (d < 0) {
    d += 7;
  }

  // Get the Akan name
  const akanName = getAkanName(d, gender);

  // Show the result
  document.getElementById("akan-result").textContent =
    `You were born on ${weekDays[d]}. Your Akan name is ${akanName}.`;
});
