<template>
  <div
    ref="ground"
    :style="show ? 'cursor:auto' : 'cursor:none'"
    @mousemove="onmousemove()"
  >
    <div
      style="
        position: absolute;
        cursor: pointer;
        top: 40px;
        right: 42px;
        font-size: 31px;
        font-weight: 700;
        line-height: 100%;
        color: white;
      "
    >
      {{ toHHMMSS(movement.settings.counter) }}
    </div>
    <canvas
      id="myCanvas"
      :width="movement.settings.maxX"
      :height="movement.settings.maxY"
    ></canvas>
    <div
      v-if="!movement.settings.settingsOpened && show"
      style="
        position: absolute;
        cursor: pointer;
        bottom: 35px;
        z-index: 100;
        left: 30px;
        font-size: 31px;
        font-weight: 700;
        line-height: 100%;
        color: white;
      "
    >
      <edit-icon
        :scale="scale"
        @mousedown="mDown()"
        @mouseup="mUp"
        class="flex-itemsw"
      />
      <stop-icon
        v-if="movement.settings.isPlaying"
        :scale="scale"
        @click="movement.stop()"
        class="flex-itemsw"
      />
      <play-icon
        v-else
        :scale="scale"
        @click="movement.start()"
        class="flex-itemsw"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useMovementStore } from "./../stores/movement";
import StopIcon from "./icons/IconStop.vue";
import PlayIcon from "./icons/IconPlay.vue";
import EditIcon from "./icons/IconEdit.vue";
import { toHHMMSS } from "@/stores/timer";
const movement = useMovementStore();
const ground = ref(null);
const show = ref(false);
const scale = 1.3;

var timeoutId;

const onmousemove = () => {
  show.value = true;
  clearTimeout(timeoutId);
  timeoutId = setTimeout(function () {
    show.value = false;
  }, 1000);
};

const mDown = () => {
  movement.updateBusy(true);
};

const mUp = () => {
  movement.openSettings();
  // movement.stop()
  movement.updateBusy(false);
};
onMounted(() => {
  movement.updateSettings({
    maxY: ground.value.clientHeight,
    maxX: ground.value.clientWidth,
    y: ground.value.clientHeight / 2,
  });
  console.log({ ground: ground.value });
  function myEventHandler(e) {
    console.log(ground.value.clientHeight, ground.value.clientWidth);
    movement.updateSettings({
      maxY: ground.value.clientHeight,
      maxX: ground.value.clientWidth,
      y: ground.value.clientHeight / 2,
    });
  }
  window.addEventListener("resize", myEventHandler);
  window.addEventListener("click", myEventHandler);
});
</script>

<style scoped>
#myCanvas {
  background: rgba(255, 255, 255, 0.105);
}

.flex-itemsw {
  height: 50px;
  width: 40px;
  transition: 0.3s;
  margin-left: 10px;
}

.flex-itemsw:hover {
  width: 30px;
  height: 60px;
  background-color: rgba(240, 248, 255, 0.076);
  border-radius: 10px;
  padding-inline: 10px;
}

.flex-itemsw:active {
  background-color: rgba(240, 248, 255, 0.196);
}
</style>
