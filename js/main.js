let x = 0, y = 50, dirX = 1, dirY = 1;
let square = document.getElementById("square");

const squareWidth = square.clientWidth;
const squareHeight = square.clientHeight;

id = setInterval(animate, 1000);

function animate() {
  const screenHeight = document.body.clientHeight;
  const screenWidth = document.body.clientWidth;

  if (y + squareHeight >= screenHeight || y < 0) {
    dirY *= -1;
  }
  if (x + squareWidth >= screenWidth || x < 0) {
    dirX *= -1;
  }
  x += dirX * 10;
  y += dirY * 10;

  square.style.left = x + "px";
  square.style.top = y + "px";
  window.requestAnimationFrame(id);
}

window.requestAnimationFrame(id);