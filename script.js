const gameGrid = document.querySelector('.game-grid');
const root = document.querySelector(':root');

function makeCell(number) {
  for (let i = 0; i < number; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('cell');
    gameGrid.appendChild(gridCell);
  }
  mouseHover();
}
function makeGrid(amount) {
  root.style.setProperty(`--numCols`, amount);
  root.style.setProperty(`--numRows`, amount);

  let number = amount * amount;
  makeCell(number);
}

function mouseHover() {
  gameGrid.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = 'black';
  });
}

function userPrompt() {
  amount = parseInt(
    window.prompt(`Choose the size of the Grid! (Max is 100)`, 16)
  );

  makeGrid(amount);
}

userPrompt();
