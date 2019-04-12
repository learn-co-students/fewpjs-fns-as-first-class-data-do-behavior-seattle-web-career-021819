/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  console.log(displayMessage(greet(timeString)))
  // console.log(greet(timeString))
}

/* End Given Code, don't edit above here...*/



/* Write your implementation of greet() */
function greet(timeString){
  let timeConvertSplit = timeString.split(':');
  let timeHH = timeConvertSplit[0]
  let timeMM = timeConvertSplit[1]
  let newTime = timeHH + timeMM

  if(newTime < 1200) {
    return "Good Morning"
  } else if (newTime >= 1200 && newTime < 1700) {
    return "Good Afternoon"
  } else if (newTime > 1700) {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(greet){
  // console.log(greet + "haha")
  let greetingNode = document.getElementById("greeting")
  greetingNode.textContent = greet
}
