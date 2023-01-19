<template>
    <div>
        <div class="flex-container">
            <div class="flex-items"><p class="title-text">Eye movement tool</p></div>
            <div class="flex-items"><object-color/></div>
            <div class="flex-items"><object-size/></div>
            <div class="flex-items"><audio-option/></div>
            <div class="flex-items"><Time/></div>
            <div class="flex-items"><Speed/></div>
            <div  class="flex-items"><main-buttons/></div>
         </div>
    </div>
</template>

<script setup>
import ObjectColor from "./controls/ObjectColor/index.vue";
import ObjectSize from "./controls/ObjectSize/index.vue";
import AudioOption from "./controls/AudioOption/index.vue";
import Time from "./controls/Time.vue";
import Speed from "./controls/Speed.vue";
import MainButtons from "./controls/MainButtons.vue";
</script>

<style  scoped>
.flex-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: normal;
    align-items: normal;
    align-content: normal;
  }

  
  .flex-items {
    padding-left: 15px;
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
  
  .flex-items:nth-child(3) {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
  }
  
  .flex-items:nth-child(4) {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
  }
  
  .flex-items:nth-child(5) {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
  }

  .title-text{
   font-size: 31px; font-weight: 700; line-height: 100%; color: white;

   padding-top: 40px;
  }
</style>