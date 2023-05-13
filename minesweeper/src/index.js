import './assets/styles/style.css';
import './assets/styles/normalize.css';
import { createFieldCells, changeBombs, clickOnCell } from './js/game.js';
import { createHeader, createFooter, createMain } from './js/app.js';

createHeader();
createMain();
createFooter();
createFieldCells(10);
changeBombs();
clickOnCell();
