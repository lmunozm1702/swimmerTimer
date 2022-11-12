class Race {
  constructor(raceTimes = []) {
    this.raceTimes = raceTimes;
  }

  addStart(time = 0) {
    let raceStart = {};
    raceStart.sprintType = "initial"
    raceStart.sprintTime = time;
    this.raceTimes.push(raceStart);
  }

  addSprint(time = 0) {
    let raceSprint = {};
    raceSprint.sprintType = "sprint"
    raceSprint.sprintTime = time;
    this.raceTimes.push(raceSprint);
  }

  addEnd(time = 0) {
    let raceEnd = {};
    raceEnd.sprintType = "final"
    raceEnd.sprintTime = time;
    this.raceTimes.push(raceEnd);
  }

  getStartTime() {
    return this.raceTimes[0].sprintTime;
  }
}

export default Race;
