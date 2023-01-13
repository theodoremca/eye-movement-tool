<template>
  <div ref="ground">
    <canvas id="myCanvas" :width="movement.settings.maxX" :height="movement.settings.maxY"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref , watch } from "vue";
import { useMovementStore } from "./../stores/movement";
const movement = useMovementStore();
const ground = ref(null);

onMounted(() => {
  movement.updateSettings({
      maxY: ground.value.clientHeight,
      maxX: ground.value.clientWidth,
      ground
    });
  console.log({ ground: ground.value });
  function myEventHandler(e) {
    console.log(ground.value.clientHeight, ground.value.clientWidth);
    movement.updateSettings({
      maxY: ground.value.clientHeight,
      maxX: ground.value.clientWidth,
      ground
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
