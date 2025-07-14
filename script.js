
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let isGameOver = false;

const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');

function handleCellClick(event) {
    const cellIndex = event.target.id.split('-')[1];

    if (gameBoard[cellIndex] !== '' || isGameOver) return;

    gameBoard[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;

    if (checkWin()) {
        message.textContent = `Player ${currentPlayer} wins!`;
        isGameOver = true;
        return;
    }

    if (gameBoard.every(cell => cell !== '')) {
        message.textContent = "It's a draw!";
        isGameOver = true;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameBoard[a] === currentPlayer && gameBoard[b] === currentPlayer && gameBoard[c] === currentPlayer;
    });
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
