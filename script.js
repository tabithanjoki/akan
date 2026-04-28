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

function parseMonth(value) {
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
  const trimmed = value.trim().toLowerCase();
  const number = parseInt(trimmed, 10);
  if (!Number.isNaN(number) && number >= 1 && number <= 12) {
    return number;
  }
  const index = monthNames.indexOf(trimmed);
  return index >= 0 ? index + 1 : null;
}

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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const dayInput = document.getElementById("birth-date").value;
    const monthInput = document.getElementById("month").value;
    const yearInput = document.getElementById("year").value;
    const genderInput = document.getElementById("gender").value;

    const day = parseInt(dayInput, 10);
    const month = parseMonth(monthInput);
    const year = parseInt(yearInput, 10);

    if (
      Number.isNaN(day) ||
      month === null ||
      Number.isNaN(year) ||
      !genderInput.trim()
    ) {
      alert("Please enter a valid day, month, year and gender.");
      return;
    }

    const birthDate = new Date(year, month - 1, day);
    if (
      birthDate.getFullYear() !== year ||
      birthDate.getMonth() !== month - 1 ||
      birthDate.getDate() !== day
    ) {
      alert("That date is not valid. Check the day, month, and year.");
      return;
    }

    const dayIndex = birthDate.getDay();
    const akanName = getAkanName(dayIndex, genderInput);

    if (!akanName) {
      alert("Please enter 'male' or 'female' for gender.");
      return;
    }

    alert(
      `You were born on ${weekDays[dayIndex]}. Your Akan name is ${akanName}.`,
    );
  });
});
