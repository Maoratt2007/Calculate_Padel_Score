const POINT_LABELS = ["0", "15", "30", "40"];
let pointsA = 0, pointsB = 0;
let gameOver = false;

const scoreA = document.getElementById("score-a");
const scoreB = document.getElementById("score-b");
const btnA = document.getElementById("add-team-a");
const btnB = document.getElementById("add-team-b");

function hasWon(scorer, opponent) {
  return scorer >= 4 && scorer - opponent >= 2;
}

function labelFor(me, opp) {
  if (hasWon(me, opp)) return "Game!";
  if (me >= 3 && opp >= 3) {
    if (me === opp) return "Deuce";
    return me > opp ? "Ad" : "40";
  }
  return POINT_LABELS[Math.min(me, 3)];
}

function render() {
  scoreA.textContent = labelFor(pointsA, pointsB);
  scoreB.textContent = labelFor(pointsB, pointsA);
  btnA.disabled = gameOver;
  btnB.disabled = gameOver;
}

function addPoint(team) {
  if (gameOver) return;
  if (team === "A") pointsA++;
  else pointsB++;
  if (hasWon(pointsA, pointsB) || hasWon(pointsB, pointsA)) gameOver = true;
  render();
}

btnA.onclick = () => addPoint("A");
btnB.onclick = () => addPoint("B");

document.getElementById("reset-game").onclick = () => {
  pointsA = 0;
  pointsB = 0;
  gameOver = false;
  render();
};
