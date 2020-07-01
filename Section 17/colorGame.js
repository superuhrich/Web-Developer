var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {

    setupModeButtons();
    setupSquares();
    Reset();
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square and compare to picked color
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                resetbutton.textContent = "Play Again?";

                ChangeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            Reset();
        });
    }
}

function Reset() {
    colors = GenerateRandomColors(numSquares);
    pickedColor = PickColor();
    //change colordisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetbutton.textContent = "New Colors"
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "#steelblue";
}


resetbutton.addEventListener("click", function () {

    Reset();
});

function GenerateRandomColors(num) {
    //make an array
    var arr = [];
    //add num colors to arr
    for (var i = 0; i < num; i++) {
        arr.push(RandomColor());
        //get random color and push into array
    }

    //return array
    return arr;

}

function RandomColor() {
    //pick a red from 0 -255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";


}

function PickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function ChangeColors(color) {
    //loop through colors

    for (var i = 0; i < squares.length; i++) {
        //change to match given color
        squares[i].style.backgroundColor = color;
    }

}

