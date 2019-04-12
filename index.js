/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(string){
  let time = parseInt(string)
  if(time < 12){
    return "Good Morning"
  }
  if(time > 12 && time < 17){
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}

function displayMessage(reply){
  let greeting = document.getElementById('greeting')
  greeting.textContent = reply
}
