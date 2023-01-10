<template>
    <div>
        <div class="flex-container">
            <color-container :color="blue" class="flex-items"/>
            <color-container :color="orange" class="flex-items"/>
            <color-container :color="yellow" class="flex-items"/>
            <color-container :color="softBlue" class="flex-items"/>
         </div>
    </div>
</template>

<script setup>
import ColorContainer from "./ColorContainer.vue";
const blue = '#454ABE';
const orange = '#FFA500';
const yellow = '#FFFF00';
const softBlue = '#AF8FE9';
</script>

<style scoped>
.flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: normal;
    align-items: center;
    align-content: normal;
  }
  
  .flex-items {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
    padding: 5px;
  }

</style>