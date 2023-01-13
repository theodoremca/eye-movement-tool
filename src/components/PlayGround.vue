<template>
  <div ref="headline">
    <canvas id="myCanvas" width="200" height="300"></canvas>
  </div>
</template>

<script setup>
import { onMounted ,  ref } from 'vue';
import { useMovementStore } from './../stores/movement'
const movement = useMovementStore()
const headline = ref(null);
onMounted(()=>{
 console.log({headline:headline.value})
function myEventHandler(e) {
  console.log(headline.value.clientHeight,headline.value.clientWidth)
}
window.addEventListener('resize', myEventHandler)
})


</script>

<style scoped>
#myCanvas {
  background: rgba(255, 255, 255, 0.105);
}
</style>
