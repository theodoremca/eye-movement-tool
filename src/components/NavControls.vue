<template>
    <nav >
        <div class="flex-container">
            <stop-icon :scale="scale" class="flex-items"/>
            <pause-icon :scale="scale" class="flex-items"/>
            <clear-icon :scale="scale" class="flex-items"/>
            <delete-icon :scale="scale" class="flex-items"/>
            <edit-icon :scale="scale" class="flex-items"/>
            <play-icon :scale="scale" class="flex-items"/>
        </div>
    </nav>

</template>

<script setup>
import StopIcon from './icons/IconStop.vue'
import PauseIcon from './icons/IconPause.vue'
import PlayIcon from './icons/IconPlay.vue'
import EditIcon from './icons/IconEdit.vue'
import DeleteIcon from './icons/IconDelete.vue'
import ClearIcon from './icons/IconClear.vue'
const scale = 1.3
</script>

<style scoped>

.flex-container {
    height: 100vh;
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
    margin-bottom: 15px;
    margin-top: 15px;
    transition: 0.3s;
}

.flex-items:hover {
    margin-bottom: 30px;
    margin-top: 30px;
}


</style>