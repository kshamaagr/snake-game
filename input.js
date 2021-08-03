let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

const upButton = document.querySelector("[data-controls-up]");
const downButton = document.querySelector("[data-controls-down]");
const rightButton = document.querySelector("[data-controls-right]");
const leftButton = document.querySelector("[data-controls-left]");

upButton.addEventListener("click", (button) => {
  console.log("upButton clicked")
  if (lastInputDirection.y !== 0) ;
  inputDirection = { x: 0, y: -1 };
});

downButton.addEventListener("click", (button) => {
  console.log("downButton clicked")

  if (lastInputDirection.y !== 0);

  inputDirection = { x: 0, y: 1 };
});

rightButton.addEventListener("click", (button) => {
  console.log("rightButton clicked")
  if (lastInputDirection.x !== 0) ;
  inputDirection = { x: 1, y: 0 };
});

leftButton.addEventListener("click", (button) => {
  console.log("leftButton clicked")
  if (lastInputDirection.x !== 0) ;
  inputDirection = { x:-1, y: 0 };
});

window.addEventListener("keydown", (e) => {
  console.log(e.key);

  switch (e.key) {
    case "ArrowUp":
      if (lastInputDirection.y !== 0) break;

      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDirection.y !== 0) break;

      inputDirection = { x: 0, y: 1 };
      break;

    case "ArrowLeft":
      if (lastInputDirection.x !== 0) break;

      inputDirection = { x: -1, y: 0 };
      break;

    case "ArrowRight":
      if (lastInputDirection.x !== 0) break;

      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
