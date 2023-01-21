<template>
  <div class="nav">
    <div class="flex-container">
      
      <pause-icon v-if="false" :scale="scale" class="flex-items" />
      <!-- <clear-icon :scale="scale" @click="movement.clearSettings()" class="flex-items" /> -->
      <delete-icon v-if="false" :scale="scale" class="flex-items" />
      <edit-icon   :scale="scale" @mousedown="mDown()" @mouseup="mUp" class="flex-items" />
      <stop-icon v-if="movement.settings.isPlaying" :scale="scale" @click="movement.stop()" class="flex-items"/>
      <play-icon v-else :scale="scale" @click="movement.start()"  class="flex-items" />
    </div>
  </div>
</template>

<script setup>

import { useMovementStore } from './../stores/movement'
import StopIcon from "./icons/IconStop.vue";
import PauseIcon from "./icons/IconPause.vue";
import PlayIcon from "./icons/IconPlay.vue";
import EditIcon from "./icons/IconEdit.vue";
import DeleteIcon from "./icons/IconDelete.vue";
import ClearIcon from "./icons/IconClear.vue";
const scale = 1.3;

const movement = useMovementStore()
const mDown = ()=>{
  movement.updateBusy(true)
}

const mUp = ()=>{
  movement.openSettings()
  // movement.stop()
  movement.updateBusy(false)
}


</script>

<style scoped>
.nav {
  height: 100vh;
}

.flex-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: normal;
  align-content: center;
}

.flex-items {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: center;
  order: 0;
  align-items: center;
  height: 50px;

  transition: 0.3s;
}

.flex-items:hover {
  width: 30px;
  height: 60px;

  background-color: rgba(240, 248, 255, 0.076);
  border-radius: 10px;
  padding-inline: 10px;
}

.flex-items:active {
  background-color: rgba(240, 248, 255, 0.196);
}
</style>
