import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMovementStore = defineStore('movement', () => {
  const tunes = [0, 1].map(e => new Audio(`./sounds/drum-loop${e}.wav`))
  var dx = 4;
  var dy = 0;
  var y = 150;
  var x = 150;
  var maxX = 200;
  var maxY = 300;
  var interV;
  var speed = 200;
  var time = 30;
  var color = "#0000ff";
  var size = 20;
  var selectedTune = 0
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
    selectedTune
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
  }

  const start = () =>{
    settings.value.interV = setInterval(draw, settings.value.speed)
    tunes[settings.value.selectedTune].loop = true
    tunes[settings.value.selectedTune].play()
    };

  const stop = () => {
    clearInterval(settings.value.interV)
    tunes[settings.value.selectedTune].pause()
    tunes[settings.value.selectedTune].currentTime = 0;
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
  return { start, stop, updateSettings,updateTune,updateSpeed,updateTime }
})
