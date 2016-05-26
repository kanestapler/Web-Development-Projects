var colors = generateRandomColors();

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");
var colorToBeGuessed = colors[0];
var easyButton = document.querySelector("#easy-mode-button");
var hardButton = document.querySelector("#hard-mode-button");
var hardModeSquares = document.querySelectorAll(".hard-mode-squares")
var text = colorToBeGuessed.toUpperCase();
var easyModeToggle;

colorDisplay.textContent = text;

console.log(easyButton);

easyButton.addEventListener("click", function () {

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
  }
  easyModeToggle = false;
});



// assigns the color to each square
for (var i = 0; i < 6; i++) {
  squares[i].style.background = colors[i];
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
