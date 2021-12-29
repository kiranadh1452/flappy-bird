//game begun 
function gamePlay() {
  let birdElement = _('.bird');

  if (gameStart) {

    document.addEventListener('keydown', handleKey);

    moveBird();
    movePipe(birdElement);

    time += 0.001;

    window.requestAnimationFrame(gamePlay);
    scoreContainer.innerText = `${score}`;
  }

}
//when game has ended
function gameOver() {
  time = 0;
  birdDeath();
  gameStart = false;
  birdVelocity = INIT_VELOCITY;
  startBtn.classList.remove('hide');
  document.removeEventListener("keydown", handleKey);
  localStorage.setItem('highestScore', highScoreFlappy);
  startBtn.innerHTML = `<p>Your Score : ${score} </p><p>Restart</p> <img src="assets/images/startButton.png" alt="play">`;
}
//handling the key interaction
function handleKey(e) {
  let code = e.code;

  if (code == "Space") {
    birdVelocity = 0;
    time = 0;
    birdVelocity = -4;
  }

}