export function AiTurn(gameBoard, setGameBoard) {
  //crates random number between 0 and 8
  const random = Math.floor(Math.random() * 9);
  //checks if the random number is already taken
  if (gameBoard[random] === 0) {
    //if not, it sets the gameBoard to the random number
    const gameBoardCopy = [...gameBoard];
    gameBoardCopy[random] = -1;
    return gameBoardCopy;
  } else {
    //if it is, it calls the function again
    return AiTurn(gameBoard, setGameBoard);
  }
}
