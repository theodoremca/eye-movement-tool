<template>
    <div>
        <div class="flex-container">
            <div class="flex-items"><main-button  @click="movement.openSettings()"  :text="'BACK'"/></div>
            <div class="flex-items" v-if="movement.settings.isPlaying" ><main-button    @click="movement.stop()"  :text="'STOP'"/></div>
            <div class="flex-items"  v-else><main-button   @click="movement.start()"  :text="'START'"/></div>
         </div>
    </div>
</template>

<script setup>
import MainButton from './Button.vue'

import { useMovementStore } from '../../stores/movement'
const movement = useMovementStore()

</script>

<style  scoped>
.flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: normal;
    align-items: center;
    align-content: normal;
  }
  
  .flex-items:nth-child(1) {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
  }
  
  .flex-items:nth-child(2) {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
  }
</style>