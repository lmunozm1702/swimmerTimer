function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 1000;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}.${formattedMS}`;
}

function insertSprintTime(distance, sprint, arm) {
  const divResultList = document.querySelector('#table-body');

  const trResult = document.createElement('tr');
  divResultList.insertBefore(trResult, divResultList.firstChild);

  let newTd = document.createElement('td');
  newTd.textContent = `${distance} m.`;
  trResult.appendChild(newTd);

  newTd = document.createElement('td');
  newTd.textContent = timeToString(sprint);
  trResult.appendChild(newTd);

  newTd = document.createElement('td');
  newTd.textContent = timeToString(arm);
  trResult.appendChild(newTd);
}

export { insertSprintTime, timeToString };
