const POINTS = ["0", "15", "30", "40", "Game!"];
let idxA = 0, idxB = 0;

const scoreA = document.getElementById("score-a");
const scoreB = document.getElementById("score-b");

document.getElementById("add-team-a").onclick = () => {
  if (idxA < POINTS.length - 1) idxA++;
  scoreA.textContent = POINTS[idxA];
};

document.getElementById("add-team-b").onclick = () => {
  if (idxB < POINTS.length - 1) idxB++;
  scoreB.textContent = POINTS[idxB];
};

document.getElementById("reset-game").onclick = () => {
  idxA = 0;
  idxB = 0;
  scoreA.textContent = POINTS[0];
  scoreB.textContent = POINTS[0];
};
