var timer = 60;
let score = 0;
let HitRn = 0;
let gameStarted = false;

function startGame() {
  if (!gameStarted) {
    gameStarted = true;
    document.querySelector("#pbottom").style.display = "flex";
    runTimer();
    createBubble();
    getNewHit();
  }
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function runTimer() {
  var timeInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timeInterval);
      document.querySelector("#pbottom").innerHTML = `<h1>Game Over!</h1>`;
      setTimeout(() => {
        location.reload();
      }, 2000);
    }
  }, 1000);
}

function createBubble() {
  let clutter = "";
  for (let i = 1; i <= 70; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbottom").innerHTML = clutter;
}
function getNewHit() {
  HitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = HitRn;
}

document.querySelector("#pbottom").addEventListener("click", (event) => {
  let clickedNumber = Number(event.target.textContent);
  console.log(clickedNumber);
  if (clickedNumber === HitRn) {
    increaseScore();
    createBubble();
    getNewHit();
  }
});
document.querySelector("#startButton").addEventListener("click", startGame);
//concept of event bhubling
//Sometimes we have to add event listner to many more  elements which is not the optimal way to add  event listner , for ex if we have to add event listner to 70 elements it will be too much difficult  so here the reole  of the event bubling comes
// If the buble donot find the event listner on it it will search for the event in the parent elements if not found in parent it will find it in the garndparents elements like this the hirarchy forms.
