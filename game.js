import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;

let gameOver = false;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  if (gameOver) {
    
    if (confirm("You lost .Press ok to restart.")) {
      window.location = "/";
    }
    return;
  }
  window.requestAnimationFrame(main);

  const secondsSinceLastRenderTime = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRenderTime < 1 / SNAKE_SPEED) return;
  //  console.log("render")
  lastRenderTime = currentTime;
  // console.log(secondsSinceLastRenderTime);

  update();

  draw();
}
window.requestAnimationFrame(main);

function update() {
  //  const inputDirection= getInputDirection

  updateSnake();
  updateFood();
  checkDeath();

  // console.log(updateFood);
}
function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  // console.log(outsideGrid(getSnakeHead()));
  // console.log(snakeIntersection());
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
  // console.log(gameOver);
}
