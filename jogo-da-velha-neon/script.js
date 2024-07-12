document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".cell");
  const statusDisplay = document.querySelector(".status");
  const resetButton = document.querySelector(".reset-button");
  let currentPlayer = "X";
  let gameState = ["", "", "", "", "", "", "", "", ""];
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleCellClick = (e) => {
    const clickedCell = e.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute("data-index"));

    if (gameState[clickedCellIndex] !== "" || !isGameActive()) {
      return;
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add(currentPlayer.toLowerCase()); 

    if (checkWinner()) {
      statusDisplay.textContent = `Jogador ${currentPlayer} venceu!`;
      statusDisplay.classList.add(currentPlayer.toLowerCase()); 
    } else if (!gameState.includes("")) {
      statusDisplay.textContent = `Empate!`;
      statusDisplay.classList.remove("x", "o");
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      updateStatusDisplay();
    }
  };

  const checkWinner = () => {
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return true;
      }
    }
    return false;
  };

  const isGameActive = () => {
    return (
      !statusDisplay.textContent.includes("vence") &&
      !statusDisplay.textContent.includes("Empate")
    );
  };

  const handleResetGame = () => {
    gameState = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    updateStatusDisplay();
    cells.forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("x", "o"); 
    });
    statusDisplay.classList.remove("x", "o"); 
  };

  const updateStatusDisplay = () => {
    statusDisplay.textContent = `Vez do jogador ${currentPlayer}`;
    statusDisplay.classList.remove("x", "o");
    statusDisplay.classList.add(currentPlayer.toLowerCase());
  };

  cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
  resetButton.addEventListener("click", handleResetGame);

  updateStatusDisplay();
});
