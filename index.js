//This sets the random number for the first dice.
var randomNumber1 = Math.floor(Math.random() * 6 + 1);

//This is attaching image catalog to variable.
var img1 = "./images/dice" + randomNumber1 + ".png";

//This is selecting Player 1's dice image and setting the img1 variable to the front-end.
document.querySelector("img.img1").setAttribute("src", img1);

//Same thing as above for Player 2.
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var img2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src", img2);

//Change the title to display a winner.
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🤪 Player 1 WINS!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 WINS! 🤪";
} else {
  document.querySelector("h1").innerHTML = "🥺 DRAW! 🥺";
}
