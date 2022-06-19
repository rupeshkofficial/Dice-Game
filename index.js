// This is for Left Image
var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // Random Number between 1-6.

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage;  // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//This is for Right Image

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//Title change according to wining player


 if(randomNumber1 > randomNumber2){
     document.querySelector("h1").innerHTML = "🚩 play 1 wins!";
 }
 else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = " play 2 wins! 🚩";
 }

 else{
    document.querySelector("h1").innerHTML = "Draw!";
 }
