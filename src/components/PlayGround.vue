<template>
  <div>
    <canvas id="myCanvas" width="200" height="300"></canvas>
    <button @click="movement.stop()">clear</button>
    <button @click="movement.start()">start</button>
  </div>
</template>

<script setup>
import { useMovementStore } from './../stores/movement'
const movement = useMovementStore()
</script>

<style scoped>
#myCanvas {
  background: rgba(255, 255, 255, 0.105);
}
</style>
