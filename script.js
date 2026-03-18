let currentPlayer = "X";
let gameActive = true;

function play(cell) {
  if (cell.innerHTML !== "" || !gameActive) return;

  cell.innerHTML = currentPlayer;
  checkWinner();

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  const cells = document.querySelectorAll(".cell");
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (let pattern of winPatterns) {
    let [a,b,c] = pattern;
    if (
      cells[a].innerHTML &&
      cells[a].innerHTML === cells[b].innerHTML &&
      cells[a].innerHTML === cells[c].innerHTML
    ) {
      document.getElementById("status").innerText = cells[a].innerHTML + " Wins!";
      gameActive = false;
      return;
    }
  }
}

function resetGame() {
  document.querySelectorAll(".cell").forEach(cell => cell.innerHTML = "");
  document.getElementById("status").innerText = "";
  currentPlayer = "X";
  gameActive = true;
}
