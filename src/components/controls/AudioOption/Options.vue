<template>
  <div>
    <div class="flex-container">
      <div class="flex-items"> <label for="super-happy">
          <input v-model="selectedTune" @select="play" type="radio" name="rating"   class="super-happy" id="super-happy" value=0 />
          <div class="radio-button">
            <p class="button-text">
              1</p>
          </div>
        </label>

      </div>
      <div class="flex-items">
        <label for="happy">
          <input v-model="selectedTune" type="radio" name="rating" class="happy" id="happy" value=1 />
          <div class="radio-button">
            <p class="button-text">
              2</p>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useMovementStore } from '@/stores/movement'
const movement = useMovementStore()
const selectedTune = ref(movement.settings.selectedTune)

watch(selectedTune, (newTune, oldTune) => {
  movement.updateTune(newTune, oldTune)
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.radio-button {
  border-style: solid;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(144, 137, 97, 1);
  width: 70px;
  height: 32px;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 33px;
  padding-right: 32px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.button-text {
  width: 5px;
  height: 10.11px;
  font-size: 10px;
  font-weight: 500;
  line-height: 100%;
  color: rgba(217, 217, 217, 1);
}


.rating-form-2 svg {
  height: 3rem;
  width: 3rem;
  margin: 0.5rem;
}

#radios label {
  position: relative;

}

input[type="radio"] {
  position: absolute;
  opacity: 0;
}

input[type="radio"]+div {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

input+div {
  cursor: pointer;
  margin-right: 10px;
}

input:hover+div,
input:checked+div,
input:focus+div {
  background-color: #908961;
}



.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: center;
  align-content: normal;
}

.flex-items:nth-child(1) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

.flex-items:nth-child(2) {
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}
</style>