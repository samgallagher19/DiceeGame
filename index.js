var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);
var image1 = "images/dice" + randomNumber1 + ".png";
var image2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);
