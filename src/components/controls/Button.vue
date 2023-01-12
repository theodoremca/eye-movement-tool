<template>
    <div style="margin-right: 10px">
        <div class="btn-container">
            <div class="btn">
                <p class="btn-text">
                    {{ text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    text: String,
});

const text = props.text;
</script>

<style  scoped>
.btn-container {
    height: 50px;
    width: 145px;
    background-color: rgba(128, 128, 128, 1);
    border-radius: 100px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
}
.btn-container:hover {
    background-color: rgb(84, 82, 82);
}
.btn-container:active {
    width: 135px;
}

.btn {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.btn-text {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    color: white;
}
</style>
