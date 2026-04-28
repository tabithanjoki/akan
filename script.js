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
  
  const number = parseInt();
  if ( number >= 1 && number <= 12) {
    return number;
  }
  const index = monthNames.indexOf();
  return index >= 0 ? index + 1 : null;
}

function getAkanName(dayIndex, gender) {
  const normalizedGender = gender();
  if (normalizedGender === "male") {
    return maleNames[dayIndex];
  }
  if (normalizedGender === "female") {
    return femaleNames[dayIndex];
  }
  return null;
}


  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const dayInput = document.getElementById("birth-date").value;
    const monthInput = document.getElementById("month").value;
    const yearInput = document.getElementById("year").value;
    const genderInput = document.getElementById("gender").value;

    const day = parseInt(dayInput);
    const month = parseMonth(monthInput);
    const year = parseInt(yearInput);

   

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
