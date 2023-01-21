<template>
  <div  ref="ground">
    <div style="  position: absolute;
    cursor: pointer;
    top: 40px;
    right: 42px;
    font-size: 31px; font-weight: 700; line-height: 100%; color: white;
    ">{{toHHMMSS(movement.settings.counter)}}</div>
    <canvas id="myCanvas" :width="movement.settings.maxX" :height="movement.settings.maxY"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref , watch } from "vue";
import { useMovementStore } from "./../stores/movement";
import {toHHMMSS} from "@/stores/timer"
const movement = useMovementStore();
const ground = ref(null);

onMounted(() => {
  movement.updateSettings({
      maxY: ground.value.clientHeight,
      maxX: ground.value.clientWidth,
      y:ground.value.clientHeight/2
    });
  console.log({ ground: ground.value });
  function myEventHandler(e) {
    console.log(ground.value.clientHeight, ground.value.clientWidth);
    movement.updateSettings({
      maxY: ground.value.clientHeight,
      maxX: ground.value.clientWidth,
      y: ground.value.clientHeight/2
    });
  }
  window.addEventListener("resize", myEventHandler);
  window.addEventListener("click", myEventHandler);
});
</script>

<style scoped>
#myCanvas {
  background: rgba(255, 255, 255, 0.105);
}
</style>
