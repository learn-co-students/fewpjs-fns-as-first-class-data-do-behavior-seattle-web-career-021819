/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

const greet = (string) => {
  const time = parseInt(string,10)
  //debugger
  if(time < 12){
    let output = "Good Morning"
    return output
  }else if (time >= 12 && time < 17){ //1200 to 1700
    let output = "Good Afternoon"
    return output
  }else{
    let output = "Good Evening"
    return output
  }
  return output
}
/* Write your implementation of displayMessage() */

const displayMessage = (string) => {
  let header = document.getElementById('greeting')
  header.textContent = greet(string)
}
