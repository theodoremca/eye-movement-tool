<template>
    <div>
        <div class="holder">
            <div @click="clickHandler" :style="`width: ${size}px;height: ${size}px;`" class="Ellipse10"><div class="number">{{value}}</div></div>
        </div>
    </div>
</template>

<script setup>
import { useMovementStore } from '@/stores/movement'
const props = defineProps(['size','value'])
const movement = useMovementStore()
const clickHandler = () => movement.updateSettings({size:props.size/2})
</script>

<style scoped>



.holder:hover {
    background-color: rgba(240, 248, 255, 0.104);
    border-radius: 9999px;
    padding: 5px;
    transition: 0.3s;
}

.holder:active {
    background-color: transparent;
    border-radius: 9999px;
    padding: 5px;
    transition: 0.01s;
}

.Ellipse10 {
    border-radius: 50%;
    border-radius: 9999px;
    transition: 0.3s;
    margin: 5px;
    background-color: #FE7A00;
    position: relative;
}

.number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 15px;
    color: #ffffff;
    cursor: pointer;
  }

.Ellipse10:hover {
    border-color: azure;
}

.Ellipse10:active {
    border-radius: 9px;
    transition: 0.01s;
}
</style>