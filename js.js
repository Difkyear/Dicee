var player1 = Math.floor(Math.random() * 6 + 1);
var player2 = Math.floor(Math.random() * 6 + 1);
var img1 = "./images/dice" + player1 + ".png";
var img2 = "./images/dice" + player2 + ".png";
document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2);
if (player1 > player2) {
  document.querySelector("h1").textContent = "👍Player 1 Win!";
} else if (player1 === player2) {
  document.querySelector("h1").textContent = "you both equal ,play againg";
} else {
  document.querySelector("h1").textContent = "👍Player 2 Win!";
}
