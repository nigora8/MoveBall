var velocity = 30;
var positionX = 0;
var positionY = 0;
var ball = document.getElementById("ball");
var Xmin = 0;
var Xmax = 2000;
var Ymin = 0;
var Ymax = 900;
var reverseX = false;
var reverseY = false;

function moveBall() {
  if (!reverseX) {
    positionX += velocity;
  } else {
    positionX -= velocity;
  }

  if (!reverseY) {
    positionY += velocity;
  } else {
    positionY -= velocity;
  }

  if (positionX >= Xmax || positionX <= Xmin) {
    reverseX = !reverseX;
  }

  if (positionY >= Ymax || positionY <= Ymin) {
    reverseY = !reverseY;
  }

  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";
}

setInterval(moveBall, 10);

var velocity2 = 20;
var positionX2 = 0;
var positionY2 = 0;
var ball2 = document.getElementById("ball2");
var Xmin2 = 0;
var Xmax2 = 1000;
var Ymin2 = 0;
var Ymax2 = 600;
var reverseX2 = false;
var reverseY2 = false;

function moveBall2() {
  if (!reverseX2) {
    positionX2 += velocity2;
  } else {
    positionX2 -= velocity2;
  }

  if (!reverseY2) {
    positionY2 += velocity2;
  } else {
    positionY2 -= velocity2;
  }

  if (positionX2 >= Xmax2 || positionX2 <= Xmin2) {
    reverseX2 = !reverseX2
  }

  if (positionY2 >= Ymax2 || positionY2 <= Ymin2) {
    reverseY2 = !reverseY2;
  }

  ball2.style.left = positionX2 + "px";
  ball2.style.top = positionY2 + "px";
}

setInterval(moveBall2, 10);