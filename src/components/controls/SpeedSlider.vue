
<template>
  <div>
    <div class="body">
      <div class="range" :style="show ? 'margin-top: 35px;' : ''">
        <div class="sliderValue" :style="`left: -30%`">
          <span :style="`left: ${14 + value * 0.35/0.73}%;`" :class="show ? 'show' : ''">{{ `${formatedSpeed}%`
          }}</span>
        </div>
        <div class="field">
          <input @mousedown="mDown()" @mouseup="mUp()" v-model="value" @input="onInput()" @blur="onBlur()"  type="range" min="0" max="73" steps="1" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

import { ref, computed, watch } from 'vue'
import { useMovementStore } from '@/stores/movement'


const movement = useMovementStore()
const value = ref((movement.settings.dx-10)/0.54);

const formatedSpeed = computed(() => parseInt(value.value)+27)

watch(value, (newValue) => {
  movement.updateSpeed(10 + (newValue * 0.54))
})

const onInput=()=>{
  show.value = true;
  movement.updateBusy(true)
}
const onBlur = ()=>{
  show.value = false;
}
const mDown = ()=>{
  movement.updateSettings({x:680})
  movement.updateBusy(true)
}

const mUp = ()=>{
  movement.updateBusy(false)
}


const show = ref(false);

</script>
<style scoped>
.body {
  height: 100%;
  text-align: center;
  place-items: center;
}

.range {
  height: 80px;
  width: 260px;
  background: transparent;
  border-radius: 10px;
  transition: 0.3s;
}

.sliderValue {
  position: relative;
  width: 260%;
}

.sliderValue span {
  position: absolute;
  width: 43px;
  height: 43px;
  transform: translateX(-70%) scale(0);
  font-weight: 500;
  top: -40px;

  line-height: 60px;
  z-index: 2;
  color: #fff;
  transform-origin: bottom;
  transition: transform 0.3s ease-in-out;
}

.sliderValue span.show {
  transform: translateX(-70%) scale(1);
}

.sliderValue span:after {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  background: #8A8A8A;
  z-index: -1;
  left: 50%;
  top: 10px;
  transform: translateX(-50%) rotate(45deg);
  border-bottom-left-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

.field {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
}

.field .value {
  position: absolute;
  font-size: 18px;
  color: #8A8A8A;
  font-weight: 600;
}

.field .value.left {
  left: -22px;
}

.field .value.right {
  right: -43px;
}

.range input {
  -webkit-appearance: none;
  width: 100%;
  height: 3px;
  background: #ddd;
  border-radius: 5px;
  outline: none;
  border: none;
  z-index: 2222;
}

.range input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #8A8A8A;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.range input::-webkit-slider-thumb:active {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: #bdbaba;

}

.range input::-moz-range-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #8A8A8A;
  border: 1px solid #8A8A8A;
  cursor: pointer;
}

.range input::-moz-range-progress {
  background: #8A8A8A;
}
</style>
