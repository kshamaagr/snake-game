import { onSnake, expandSnake, SNAKE_SPEED, increaseSnakeSpeed } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPosition();
// console.log(food)
const EXPENSION_RATE = 2;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPENSION_RATE);
    food = getRandomFoodPosition();
    // SNAKE_SPEED= SNAKE_SPEED + 1;
    increaseSnakeSpeed();
    console.log(SNAKE_SPEED);

  }
}

export function draw(gameBoard) {
  // console.log(gameBoard)
  const foodElement = document.createElement("div");
  //   console.log(foodElement)
  //   console.log(food.y)
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}
function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  // console.log(newFoodPosition)

  return newFoodPosition;
}
