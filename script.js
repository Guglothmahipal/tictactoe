    const cells = document.querySelectorAll('.cell');
const messageElement = document.getElementById('message');

let currentPlayer = 'X';
let gameOver = false;

function handleCellClick(e) {
  const cell = e.target;

  if (!gameOver && cell.textContent === '') {
    cell.textContent = currentPlayer;

    if (checkWin()) {
      gameOver = true;
      messageElement.textContent = `Player ${currentPlayer}😁 wins! Play Again`;
    } else if (checkDraw()) {
      gameOver = true;
      messageElement.textContent = "It's a draw!🙃 Try Again Better Luck Next Time🤗";
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winningCombinations.some(combination => {
    return combination.every(index => {
      return cells[index].textContent === currentPlayer;
    });
  });
}

function checkDraw() {
  return Array.from(cells).every(cell => {
    return cell.textContent !== '';
  });
}

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});
