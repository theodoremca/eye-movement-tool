import { ref} from 'vue'
import { defineStore } from 'pinia'
import { timer } from './timer'

export const useMovementStore = defineStore('movement', () => {

  
  const tunes = [0, 1].map(e => new Audio(`./sounds/tune${e}.wav`))
  var dx = 10;
  var dy = 0;
  var maxX = 300;
  var maxY = 300;
  var y = maxY/2;
  var x = maxX/2;
  var interV;
  var speed = 10;
  var time = 30;
  var color = "#454ABE";
  var size = 20;
  var selectedTune = 0
  var isPlaying = false;
  var settingsOpened = true;
  const init = {
    dx,
    dy,
    y,
    x,
    maxX,
    maxY,
    interV,
    speed,
    color,
    size,
    time,
    selectedTune,
    isPlaying,
    settingsOpened
  }
  const settings = ref({
    dx,
    dy,
    y,
    x,
    maxX,
    maxY,
    interV,
    speed,
    color,
    size,
    time,
    selectedTune,
    isPlaying,
    settingsOpened,
    ground:null
  });

 
  
  let direction = true;
  const draw = (updating) => {
    if(!updating){

    if(direction)  {settings.value.x += settings.value.dx;
      settings.value.y += settings.value.dy;}
      else{settings.value.x -= settings.value.dx;
        settings.value.y -= settings.value.dy;}
    }
    let context = myCanvas.getContext("2d");
    context.clearRect(0, 0, settings.value.maxX, settings.value.maxY);
    context.beginPath();
    context.fillStyle = settings.value.color;
    context.arc(settings.value.x, settings.value.y, settings.value.size, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
      console.log(`time: ${settings.value.time}, y: ${settings.value.y}`);
      // console.log(`color: ${settings.value.color}, y: ${settings.value.y}`);
    // console.log(`x: ${settings.value.x}, y: ${settings.value.y}`);
    // if (settings.value.x < 20 || settings.value.x > settings.value.maxX - 20) settings.value.dx = -settings.value.dx;
    if (settings.value.x < 20 || settings.value.x > settings.value.maxX - 20) direction=!direction;
    if (settings.value.x < 20 || settings.value.x > settings.value.maxX - 20) {
      if(settings.value.isPlaying)  {
        tunes[settings.value.selectedTune].pause()
        tunes[settings.value.selectedTune].currentTime = 0;
        tunes[settings.value.selectedTune].play()
    }}
    if (settings.value.y < 20 || settings.value.y > settings.value.maxY - 20) settings.value.dy = -settings.value.dy;
  };



  const updateSettings = (settingsUpdate) => {
    Object.assign(settings.value, settingsUpdate)
    draw(true)
  }

  const clearSettings = () => {
    Object.assign(settings.value, init)
  }
const openSettings = () =>{
  // if(!settings.value.isPlaying) settings.value.isPlaying = true;
  settings.value.settingsOpened = !settings.value.settingsOpened;
  if(!settings.value.isPlaying) setTimeout(()=>draw(true),50)
}
  const start = () =>{
    if(!settings.value.isPlaying) settings.value.isPlaying = true;
    if(settings.value.settingsOpened) settings.value.settingsOpened = false;
    draw(true)
    settings.value.interV = setInterval(draw, 10)  
    timer.setup({time:settings.value.time*1000,callBack:stop})
    };

  const stop = () => {
    clearInterval(settings.value.interV)
    settings.value.isPlaying = false;
    setTimeout(()=>draw(true),100)
    timer.cancel()
  }
  const updateTune = (newTune, oldTune) => {
    tunes[oldTune].pause()
    tunes[oldTune].currentTime = 0;
    settings.value.selectedTune = newTune
  }

  const updateTime = (newTune) => {
    settings.value.time = newTune
    setTimeout(()=>draw(true),100)
  }

  const updateSpeed = (newTune) => {
    settings.value.dx = newTune
    setTimeout(()=>draw(true),100)
  }
  return { start, stop, updateSettings,updateTune,updateSpeed,updateTime, settings , clearSettings , openSettings}
})
