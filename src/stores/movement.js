import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMovementStore = defineStore('movement', () => {
    var dx = 4;
    var dy = 0;
    var y = 150;
    var x = 150;
    var maxX = 200;
    var maxY = 300;
    var interV;
    var speed = 40;
    var color = "#0000ff";
    var size = 20;
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
    
    const start = () => (settings.value.interV = setInterval(draw, settings.value.speed));
    const stop = () => clearInterval(settings.value.interV)  
  return { start, stop, updateSettings }
})
