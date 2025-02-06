// 0 1 2
// 3 4 5
// 6 7 8

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

const boxes = document.querySelectorAll(".box");

let turnX = false;
let turn = 0;

function disableGame() {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}

function reset() {
  turnX = false;
  turn = 0;
  boxes.forEach((box) => {
    box.textContent = "";
    box.disabled = false;
    box.style.background = "beige";
  });
  displayMessage("");
}

function displayMessage(message) {
  const heading = document.querySelector(".msg");
  heading.textContent = message;
}

function matchWinningPatterns() {
  let isWinner = false;
  winningPatterns.forEach((pattern) => {
    if (
      boxes[pattern[0]].textContent !== "" &&
      boxes[pattern[1]].textContent !== "" &&
      boxes[pattern[2]].textContent !== ""
    ) {
      if (
        boxes[pattern[0]].textContent === boxes[pattern[1]].textContent &&
        boxes[pattern[1]].textContent === boxes[pattern[2]].textContent
      ) {
        const msg = turnX ? "X is winner" : "O is winner";
        displayMessage(msg);
        disableGame();
        isWinner = true;
        boxes[pattern[0]].style.background = "#cddc39";
        boxes[pattern[1]].style.background = "#cddc39";
        boxes[pattern[2]].style.background = "#cddc39";
      }
    }
  });

  turn++;
  turnX = turnX ? false : true;

  if (turn === 9 && !isWinner) {
    disableGame();
    console.log("We came in draw section: ", turn);
    displayMessage("DRAW");
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.textContent = turnX ? "X" : "O";
    box.disabled = true;

    matchWinningPatterns();
  });
});
