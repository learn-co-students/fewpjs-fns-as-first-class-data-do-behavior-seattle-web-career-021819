/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

let h1 = document.getElementById('greeting');

/* Write your implementation of greet() */
function greet(timeString) {
  let hour = timeString.slice(0,-3);
  if (hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour <= 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greetingString) {
  h1.textContent = greetingString;
}
