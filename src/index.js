import _ from 'lodash';
import './style.css';
import Race from './modules/races.js';
import timeToString from './modules/render.js';

const divStartRace = document.querySelector('#start-race');
const divEndRace = document.querySelector('#end-race');
const divRaceTimer = document.querySelector('#race-timer');
let timerInterval;
let raceTimes = new Race();

divStartRace.addEventListener('click', () => {
  divStartRace.classList.replace('displayed', 'hidden');
  divEndRace.classList.replace('hidden', 'displayed');

  raceTimes.addStart(Date.now());
  console.log(raceTimes);
  timerInterval = setInterval(() => {
    let elapsedTime = Date.now() - raceTimes.getStartTime();
    divRaceTimer.textContent = timeToString(elapsedTime);
  }, 20);
});

divEndRace.addEventListener('click', () => {
  raceTimes.addEnd(Date.now());
  console.log(raceTimes)
  clearInterval(timerInterval);
  divEndRace.classList.add('event-disable')
});
