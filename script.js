var theMode = localStorage.getItem('theMode')
var counter = localStorage.getItem('counter')
var xTimes = document.getElementById('xTimes')

function toggleDNMode() {


  console.log("the mode is " + theMode)

  if(theMode === null) {
      theMode = alert("Hello, Marshmallow!")
      counter = 0
      console.log(theMode)
  }
  //check if window.location.pathname === "/thoughts/"


  if (document.body.className === 'dayMode'){
    document.body.className = 'nightMode'
    theMode = 'nightMode'
    localStorage.setItem('theMode', theMode)
    console.log("the mode is " + document.body.className)
  }
  else {
    document.body.className = 'dayMode'
    theMode = 'dayMode'
    localStorage.setItem('theMode', theMode)
    console.log("the mode is " + document.body.className)
  }
}

function setMode () {
  if (window.location.pathname !== "/thoughts/"){
    return
  }
  counter++
  document.body.className = theMode
  localStorage.setItem('counter', counter)
  xTimes.innerHTML = "You have been to this page " + counter + " times."
}

setMode();
