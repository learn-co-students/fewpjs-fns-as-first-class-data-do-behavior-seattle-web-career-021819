/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  let hour = parseInt(timeString);

  if (hour < 12) {
    // displayMessage("Good Morning")
    return "Good Morning";
  } else if (hour > 17) {
    // displayMessage("Good Evening")
    return "Good Evening";
  } else {
    // displayMessage("Good Afternoon")
    return "Good Afternoon";
  }
}

function displayMessage(string) {
  let greeting = document.getElementById('greeting')
  greeting.textContent = string;
}





// end
