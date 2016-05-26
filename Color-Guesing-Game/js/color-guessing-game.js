var colors = [
  "rgb(250, 0, 0)",
  "rgb(0, 250, 0)",
  "rgb(250, 0, 250)",
  "rgb(0, 250, 250)",
  "rgb(0, 0, 250)",
  "rgb(250, 250, 0)"
]

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");
var colorToBeGuessed = colors[0];
var text = colorToBeGuessed.toUpperCase();
colorDisplay.textContent = text;


// assigns the color to each square
for (var i = 0; i < 6; i++) {
  squares[i].style.background = colors[i];
}