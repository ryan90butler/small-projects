
class Timer {
  constructor(){
    this.interval;
    this.totalTime =0;
  }
  start(){
      this.interval = setInterval(() => {
      this.totalTime ++
    }, 1000)
  }

  stop() {
    clearInterval(this.interval)
    return this.totalTime;
  }
}
const newTime = new Timer();

function setTimeout(() =>{
  const timePassed = newTime.stop();
  constole.log(timePassed)
}, 5000)
