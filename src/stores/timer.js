export const timer = {
    remind(callBack) {
      callBack()
      this.timeoutID = undefined;
      this.intervalID = undefined;
    },
  
    setup({time,callBack,intervalCallback}) {
      if (typeof this.timeoutID === 'number') {
        this.cancel();
      }
      this.intervalID=setInterval(intervalCallback,1000)
      this.timeoutID = setTimeout(()=>this.remind(callBack), time);
    },
  
    cancel() {
      clearTimeout(this.timeoutID);
      clearInterval(this.intervalID);
    }
  };

  export const toHHMMSS = (sec) =>{
    var sec_num = parseInt(sec, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
  
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return minutes + ':' + seconds;
  }