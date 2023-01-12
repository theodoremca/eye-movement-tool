<template>
    <div style="margin-right: 10px; ">
        <div style="height:50px; width: 145px; background-color: rgba(128, 128, 128, 1); border-radius: 100px; display: inline-flex; flex-direction: column; align-items: center; justify-content: center;">
            <div style="padding-left: 24px; padding-right: 24px; padding-top: 10px; padding-bottom: 10px; display: inline-flex; flex-direction: row; align-items: center; justify-content: center;">
                <p style="font-size: 14px; font-weight: 500; line-height: 20px; text-align: center; color: white;">{{text}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props= defineProps({
    text:String
})

const text = props.text;
</script>

<style lang="scss" scoped>

</style>