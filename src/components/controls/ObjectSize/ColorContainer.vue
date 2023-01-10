<template>
    <div>
        <div class="holder">
            <div :style="`background-color:${color}`" class="Ellipse10"></div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['color'])
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
    width: 23px;
    height: 23px;
    border-radius: 9999px;
    transition: 0.3s;
    margin: 5px;

}

.Ellipse10:hover {
    width: 25px;
    height: 25px;

}

.Ellipse10:active {
    border-radius: 9px;
    transition: 0.01s;
}
</style>