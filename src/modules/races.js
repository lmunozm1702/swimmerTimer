class Race {
  constructor(raceTimes = [], armFreqs = []) {
    this.raceTimes = raceTimes;
    this.lastTime = 0;
    this.lastDiffTime = 0;

    this.sprintCount = 0;

    this.armFreqs = armFreqs;
    this.lastArmFreq = 0;
    this.lastArmDiff = 0;
  }

  addSprint(time = 0, sprintType = 'sprint') {
    let raceSprint = {};
    let diffTime = time - this.lastTime;

    raceSprint.sprintType = sprintType;
    raceSprint.sprintTime = time;
    raceSprint.sprintDiff = diffTime;

    this.raceTimes.push(raceSprint);
    this.lastTime = time;
    this.lastDiffTime = diffTime;
    this.sprintCount += 1;
    return (diffTime);
  }

  addArmFreq(time) {
    let armFreq = {};
    let diffTime = time - this.lastArmFreq;

    armFreq.regType = 'Arm-Frequency'
    armFreq.regTime = time;
    armFreq.diffTime = diffTime;

    this.armFreqs.push(armFreq);
    this.lastArmFreq = time;
    this.lastArmDiff = diffTime;
  }

  getStartTime() {
    return this.raceTimes[0].sprintTime;
  }

  getSprintTime() {
    return this.lastTime;
  }

  getSprintDiff() {
    return this.lastDiffTime;
  }

  getArmTime() {
    return this.lastArmFreq;
  }

  getArmDiff() {
    return this.lastArmDiff;
  }

  getSprintCount() {
    return this.sprintCount - 1;
  }
}

export default Race;
