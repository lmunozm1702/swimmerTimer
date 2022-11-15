import _ from 'lodash';
import './style.css';
import Race from './modules/races.js';
import { insertSprintTime, timeToString } from './modules/render.js'

const divStartRace = document.querySelector('#start-race');
const divEndRace = document.querySelector('#end-race');
const divRaceTimer = document.querySelector('#race-timer');
const divSprint = document.querySelector('#sprint');
const divArmFreq = document.querySelector('#arm-freq');
const INTERVAL = 99;
const POOL_SIZE = 50;

let timerRaceInterval;
let timerSprintInterval;
let timerArmInterval;
let armFirstCount = false;
let raceTimes = new Race();

divStartRace.addEventListener('click', () => {
  divStartRace.classList.replace('displayed', 'hidden');
  divEndRace.classList.replace('hidden', 'displayed');
  divSprint.classList.replace('event-disable', 'event-enable');
  divArmFreq.classList.replace('event-disable', 'event-enable');

  raceTimes.addSprint(Date.now(), 'start');

  timerRaceInterval = setInterval(() => {
    let elapsedTime = Date.now() - raceTimes.getStartTime();
    divRaceTimer.textContent = timeToString(elapsedTime);
  }, INTERVAL);
});

divEndRace.addEventListener('click', () => {
  raceTimes.addSprint(Date.now(), 'end');

  clearInterval(timerRaceInterval);
  clearInterval(timerSprintInterval);
  clearInterval(timerArmInterval);

  const cycleByMin = 60 / ((raceTimes.getArmDiff() * 2) / 3);
  insertSprintTime(POOL_SIZE * raceTimes.getSprintCount(), raceTimes.getSprintDiff(), cycleByMin);

  divEndRace.classList.add('event-disable');
  divSprint.classList.replace('event-enable', 'event-disable');
  divArmFreq.classList.replace('event-enable', 'event-disable');
});

divSprint.addEventListener('click', () => {
  raceTimes.addSprint(Date.now());

  const cycleByMin = 60 / ((raceTimes.getArmDiff() * 2));
  insertSprintTime(POOL_SIZE * raceTimes.getSprintCount(), raceTimes.getSprintDiff(), cycleByMin);

  clearInterval(timerSprintInterval);
  timerSprintInterval = setInterval(() => {
    let elapsedSprintTime = Date.now() - raceTimes.getSprintTime();
    divSprint.textContent = timeToString(elapsedSprintTime);
  }, INTERVAL);
});

divArmFreq.addEventListener('click', () => {
  raceTimes.addArmFreq(Date.now());
  if (armFirstCount) {
    clearInterval(timerArmInterval);
    armFirstCount = false;
  }
  else {
    clearInterval(timerArmInterval);
    timerArmInterval = setInterval(() => {
      let elapsedArmTime = Date.now() - raceTimes.getArmTime();
      divArmFreq.textContent = timeToString(elapsedArmTime);
    }, INTERVAL);
    armFirstCount = true;
  }
})

