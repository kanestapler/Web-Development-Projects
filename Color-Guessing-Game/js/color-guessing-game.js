
var colors = generateRandomColors();

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");
var number = genereateRandomnNumber();
var colorToBeGuessed = colors[number];
var easyButton = document.querySelector("#easy-mode-button");
var hardButton = document.querySelector("#hard-mode-button");
var newColorButton = document.querySelector("#newcolor-button");
var hardModeSquares = document.querySelectorAll(".hard-mode-squares")
var statusMessage = document.querySelector("#status-message");
var text = colorToBeGuessed.toUpperCase();
var easyModeToggle;

assignColors();

console.log(number);

colorDisplay.textContent = text;

easyButton.addEventListener("click", function () {

  if (easyModeToggle === false) {
    colors = generateRandomColors();
    assignColors();
  }

  for (var i = 0; i < hardModeSquares.length; i++) {
    hardModeSquares[i].style.display = "none";
  }

  easyModeToggle = true;

});

hardButton.addEventListener("click", function () {
  if (easyModeToggle === true) {
    for (var i = 0; i < hardModeSquares.length; i++) {
      hardModeSquares[i].style.display = "block";
    }
    colors = generateRandomColors();
    assignColors();
  }

  easyModeToggle = false;
});

newColorButton.addEventListener("click", function () {
  colors = generateRandomColors();
  assignColors();
  statusMessage.textContent = "";
});

for (var j = 0; j < squares.length; j++) {
  squares[j].addEventListener("click", function () {
    var pickedColor = this.style.background;
    if (pickedColor === colors[number]) {
      statusMessage.textContent = "You're Right!";
      for (var i = 0; i < 6; i++) {
        squares[i].style.background = pickedColor;
      }
    }
    else {
      statusMessage.textContent = "Try Again";
      this.style.background = "#232323";
    }
  });

}


// assigns the color to each square
function assignColors() {
  for (var i = 0; i < 6; i++) {
    squares[i].style.background = colors[i];
  }
}


function generateRandomColors() {
  var tempColorArr = [];

  for (var i = 0; i < 6; i++) {
    var color = generateColor();
    tempColorArr[i] = color;
  }

  return tempColorArr;
}

function generateColor() {

  var r = Math.floor(Math.random() * 251);
  var g = Math.floor(Math.random() * 251);
  var b = Math.floor(Math.random() * 251);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}


function genereateRandomnNumber() {
  return Math.floor(Math.random() * 6);
}
