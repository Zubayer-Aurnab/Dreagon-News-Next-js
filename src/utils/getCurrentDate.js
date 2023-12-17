export default function getCurrentDate() {
  // Create a new Date object
  var currentDate = new Date();

  // Define days of the week and months arrays
  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get day, date, and year
  var dayOfWeek = daysOfWeek[currentDate.getDay()];
  var day = currentDate.getDate();
  var month = months[currentDate.getMonth()];
  var year = currentDate.getFullYear();

  // Display the result
  //   console.log(dayOfWeek + " " + month + " " + day + ", " + year);
  return ` ${dayOfWeek},${month}, ${day}, ${year}`;
}

// Call the function to display the current date
// showCurrentDate();
