<template>
    <div>
        <div class="flex-container">
            <color-container :size="30" :value="1" class="flex-items"/>
            <color-container :size="40" :value="2" class="flex-items"/>
         </div>
    </div>
</template>

<script setup>
import ColorContainer from "./SizeContainer.vue";
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

  }

</style>