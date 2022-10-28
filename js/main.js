const firstScoreEl = document.getElementById('first-score');
const secondScoreEl = document.getElementById('second-score');

let firstScoreNum = 0;
let secondScoreNum = 0;

// Functions for the first set of buttons

function firstAdd1() {
  firstScoreNum++;
  
  firstScoreEl.textContent = firstScoreNum;
}

function firstAdd2() {
  firstScoreNum += 2;

  firstScoreEl.textContent = firstScoreNum;
}

function firstAdd3() {
  firstScoreNum += 3;

  firstScoreEl.textContent = firstScoreNum;
}

// Functions for the second set of buttons

function secondAdd1() {
  secondScoreNum++;

  secondScoreEl.textContent = secondScoreNum;
}

function secondAdd2() {
  secondScoreNum += 2;

  secondScoreEl.textContent = secondScoreNum;
}

function secondAdd3() {
  secondScoreNum += 3;

  secondScoreEl.textContent = secondScoreNum;
}