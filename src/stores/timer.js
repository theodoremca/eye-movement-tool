
export const timer = {
    remind(callBack) {
      callBack()
      this.timeoutID = undefined;
    },
  
    setup({time,callBack}) {
      if (typeof this.timeoutID === 'number') {
        this.cancel(callBack); 
      }
      this.timeoutID = setTimeout(()=>this.remind(callBack), time);
    },
  
    cancel(callBack) {
     if(callBack) callBack();
      clearTimeout(this.timeoutID);
    }
  };