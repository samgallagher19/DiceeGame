var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);
var image1 = "images/dice" + randomNumber1 + ".png";
var image2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);
var headerUpdate = ["🚩 Player 1 Wins!", "Player 2 Wins! 🚩", "Draw!"];
var headerIndex = 0;
if(randomNumber2 > randomNumber1) {
  headerIndex = 1;
} else if(randomNumber2 === randomNumber1) {
  headerIndex = 2;
}
document.querySelector("h1").innerText = headerUpdate[headerIndex];
