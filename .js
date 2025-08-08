function botMove() {
  // 1. Bot yutish imkoniyatini tekshiradi
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      board[i] = "O";
      if (checkWin("O")) {
        renderBoard();
        messageEl.textContent = `O g'olib bo'ldi!`;
        isGameOver = true;
        return;
      }
      board[i] = "";
    }
  }

  // 2. O'yinchi yutishini to'sadi
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      board[i] = "X";
      if (checkWin("X")) {
        board[i] = "O";
        renderBoard();
        if (checkWin("O")) {
          messageEl.textContent = `O g'olib bo'ldi!`;
          isGameOver = true;
        }
        return;
      }
      board[i] = "";
    }
  }

  // 3. Markazni egallaydi
  if (board[4] === "") {
    board[4] = "O";
    renderBoard();
    return;
  }

  // 4. Bo‘sh joylardan birortasini tanlaydi
  let emptyIndexes = board.map((v, i) => (v === "" ? i : null)).filter(i => i !== null);
  let move = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
  board[move] = "O";
  renderBoard();
}
    