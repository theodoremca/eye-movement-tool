import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useMovementStore = defineStore('movement', () => {
  const tunes = [0, 1].map(e => new Audio(`./sounds/drum-loop${e}.wav`))
  var dx = 4;
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

 
  

  const draw = () => {
    let context = myCanvas.getContext("2d");
    context.clearRect(0, 0, settings.value.maxX, settings.value.maxY);
    context.beginPath();
    context.fillStyle = settings.value.color;
    context.arc(settings.value.x, settings.value.y, settings.value.size, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    console.log(`x: ${settings.value.x}, y: ${settings.value.y}`);
    if (settings.value.x < 20 || settings.value.x > settings.value.maxX - 20) settings.value.dx = -settings.value.dx;
    if (settings.value.y < 20 || settings.value.y > settings.value.maxY - 20) settings.value.dy = -settings.value.dy;
    settings.value.x += settings.value.dx;
    settings.value.y += settings.value.dy;
  };



  const updateSettings = (settingsUpdate) => {
    Object.assign(settings.value, settingsUpdate)
    draw()
  }

  const clearSettings = () => {
    Object.assign(settings.value, init)
  }

  const start = () =>{
    if(!settings.value.isPlaying) settings.value.isPlaying = true;
    if(settings.value.settingsOpened) settings.value.settingsOpened = false;
    settings.value.interV = setInterval(draw, (25/settings.value.speed))
    tunes[settings.value.selectedTune].loop = true
    tunes[settings.value.selectedTune].play()
    };

  const stop = () => {
    clearInterval(settings.value.interV)
    tunes[settings.value.selectedTune].pause()
    tunes[settings.value.selectedTune].currentTime = 0;
    settings.value.isPlaying = false;
    settings.value.settingsOpened = true;
  }
  const updateTune = (newTune, oldTune) => {
    tunes[oldTune].pause()
    tunes[oldTune].currentTime = 0;
    settings.value.selectedTune = newTune
  }

  const updateTime = (newTune) => {
    settings.value.time = newTune
  }

  const updateSpeed = (newTune) => {
    settings.value.speed = newTune
  }
  return { start, stop, updateSettings,updateTune,updateSpeed,updateTime, settings , clearSettings }
})
