export const timer = {
    remind(callBack) {
      callBack()
      this.timeoutID = undefined;
    },
  
    setup({time,callBack}) {
      if (typeof this.timeoutID === 'number') {
        this.cancel();
      }
  
      this.timeoutID = setTimeout(()=>this.remind(callBack), time);
    },
  
    cancel() {
      clearTimeout(this.timeoutID);
    }
  };