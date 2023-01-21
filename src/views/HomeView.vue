<script setup>
import { onMounted } from 'vue'

import Settings from '../components/Settings.vue'
import PlayGround from '../components/PlayGround.vue'
import { useMovementStore } from './../stores/movement'
const movement = useMovementStore()


</script>

<template>
  <main> 
    <div class="flex-container">
      <settings style="background-color: #343536;"  v-if="movement.settings.settingsOpened"  class="flex-items"></settings>
      <play-ground  class="flex-items"></play-ground>
   </div>
  </main>
</template>

<style scoped>
main {
  background: #242424;
  width: 100vw;
  height: 100vh;
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
  height:inherit;
  
}

.flex-items:nth-child(1) {
  display: block;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  align-self: stretch;
  order: 0;
  min-width: 81px;
  height:100%;
  background: #161616;
  
}

.flex-items:nth-child(2) {
  display: block;
  flex-grow: 60;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  min-width:346px;
  background: #343536;
}

.flex-items:nth-child(3) {
  display: block;
  flex-grow: 177;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  background: #242424;
  width: 1033px;



}
</style>