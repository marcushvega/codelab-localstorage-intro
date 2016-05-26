var theMode = localStorage.getItem('theMode')

function toggleDNMode() {
  console.log("the mode is " + theMode)

  if(theMode === null) {
      theMode = alert("Hello, Marshmallow!")
      console.log(theMode)
  }

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
  document.body.className = theMode
}

setMode();
