const { body } = document;

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header__container');
  const btn1 = document.createElement('button');
  btn1.className = 'game__button button-newgame';
  btn1.textContent = 'New game';
  const btn2 = document.createElement('button');
  btn2.className = 'game__button button-save';
  btn2.textContent = 'Save';
  const btn3 = document.createElement('button');
  btn3.className = 'game__button button-load';
  btn3.textContent = 'Load';
  const btn4 = document.createElement('button');
  btn4.className = 'game__button button-results';
  btn4.textContent = 'Top results';
  headerContainer.appendChild(btn1);
  headerContainer.appendChild(btn2);
  headerContainer.appendChild(btn3);
  headerContainer.appendChild(btn4);
  header.appendChild(headerContainer);
  body.append(header);
}
function createMain() {
  const main = document.createElement('main');
  main.classList.add('game');
  const gameContainer = document.createElement('div');
  gameContainer.classList.add('game__container');
  const gameStats = document.createElement('div');
  gameStats.classList.add('game__stats');
  gameContainer.appendChild(gameStats);
  const statsWrapper = document.createElement('div');
  statsWrapper.classList.add('game__stats-wrapper');
  gameStats.appendChild(statsWrapper);
  const gameBombs = document.createElement('div');
  gameBombs.classList.add('game__bombs');
  const bombsTitle = document.createElement('div');
  bombsTitle.classList.add('game__bombs-title');
  bombsTitle.textContent = 'Bombs:';
  const bombsCount = document.createElement('div');
  bombsCount.classList.add('game__bombs-count');
  bombsCount.textContent = '010';
  gameBombs.appendChild(bombsTitle);
  gameBombs.appendChild(bombsCount);
  const gameMovies = document.createElement('div');
  gameMovies.classList.add('game__movies');
  const moviesTitle = document.createElement('div');
  moviesTitle.classList.add('game__movies-title');
  moviesTitle.textContent = 'Movies:';
  const moviesCount = document.createElement('div');
  moviesCount.classList.add('game__movies-count');
  moviesCount.textContent = '000';
  gameMovies.appendChild(moviesTitle);
  gameMovies.appendChild(moviesCount);
  const gameTimer = document.createElement('div');
  gameTimer.classList.add('game__timer');
  const timerTitle = document.createElement('div');
  timerTitle.classList.add('game__timer-title');
  timerTitle.textContent = 'Timer:';
  const timerCount = document.createElement('div');
  timerCount.classList.add('game__timer-time');
  timerCount.textContent = '000';
  gameTimer.appendChild(timerTitle);
  gameTimer.appendChild(timerCount);
  statsWrapper.appendChild(gameBombs);
  statsWrapper.appendChild(gameMovies);
  statsWrapper.appendChild(gameTimer);
  const gameWrapper = document.createElement('div');
  gameWrapper.classList.add('game__wrapper');
  gameContainer.appendChild(gameWrapper);
  const gameField = document.createElement('div');
  gameField.classList.add('game__field');
  gameWrapper.appendChild(gameField);
  const gameSettings = document.createElement('div');
  gameSettings.classList.add('game__settings');
  gameContainer.appendChild(gameSettings);
  const settingsWrapper = document.createElement('div');
  settingsWrapper.classList.add('game__settings-wrapper');
  gameSettings.appendChild(settingsWrapper);
  const settingsSize = document.createElement('div');
  settingsSize.classList.add('game__settings-field-size');
  settingsSize.textContent = 'Field size: 10x10';
  const theme = document.createElement('button');
  theme.className = 'game__settings-theme game__button';
  theme.textContent = 'gray';
  const volume = document.createElement('button');
  volume.className = 'game__settings-volume game__button';
  volume.textContent = 'vol';
  settingsWrapper.appendChild(settingsSize);
  settingsWrapper.appendChild(theme);
  settingsWrapper.appendChild(volume);
  main.appendChild(gameContainer);
  body.append(main);
}
function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('footer__container');
  const btn1 = document.createElement('button');
  btn1.className = 'footer__settings-easy game__button level-active';
  btn1.textContent = 'Easy';
  const btn2 = document.createElement('button');
  btn2.className = 'footer__settings-medium game__button';
  btn2.textContent = 'Medium';
  const btn3 = document.createElement('button');
  btn3.className = 'footer__settings-hard game__button';
  btn3.textContent = 'Hard';
  const input = document.createElement('input');
  input.classList.add('footer__settings-bombs');
  input.type = 'number';
  input.value = '10';
  input.placeholder = 'number of bombs';
  input.min = '10';
  input.max = '99';
  footerContainer.appendChild(btn1);
  footerContainer.appendChild(btn2);
  footerContainer.appendChild(btn3);
  footerContainer.appendChild(input);
  footer.appendChild(footerContainer);
  body.append(footer);
}

function createFieldCells(rows, cells) {
  const field = document.querySelector('.game__field');
  for (let i = 0; i < rows; i += 1) {
    const gameRow = document.createElement('div');
    gameRow.classList.add('game__field-row');
    field.appendChild(gameRow);
  }
  const row = document.querySelectorAll('.game__field-row');
  row.forEach((el) => {
    for (let i = 0; i < cells; i += 1) {
      const gameCell = document.createElement('button');
      gameCell.classList.add('game__cell');
      el.appendChild(gameCell);
    }
  });
}

export {
  createHeader,
  createFooter,
  createMain,
  createFieldCells,
};
