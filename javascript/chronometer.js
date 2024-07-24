class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 10;
      if (callback) callback();
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60000);
  }


  getSeconds() {
    return Math.floor((this.currentTime % 60000) / 1000);
  }

  getMilliseconds() {
    return Math.floor((this.currentTime % 1000) / 10);
  }

  computeTwoDigitNumber(number) {
    return number.toString().padStart(2, '0');
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
    return `${minutes}:${seconds}:${milliseconds}`;
  }


computeTwoDigitNumber(number) {
  return number.toString().padStart(2, '0');
}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}



