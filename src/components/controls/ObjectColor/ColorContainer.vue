<template>
    <div>
        <div :style="`background-color:${color}`" class="Ellipse10"></div>
    </div>
</template>

<script setup>
const props = defineProps(['color'])


</script>

<style scoped>
.Ellipse10 {
    width: 21px;
    height: 21px;
    border-radius: 9999px;
    transition: 0.3s;
}

.Ellipse10:hover {
    width: 25px;
    height: 25px;
    border-radius: 9px;
}
</style>