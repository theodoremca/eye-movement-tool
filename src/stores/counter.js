import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  let interval;
  function start(time) {
    count.value = time;
    interval = setInterval(() => {
      count.value--;
    }, 1000);
    if (count.value == 0) clearInterval(interval);
  }
  function stop() {
    clearInterval(interval);
  }

  return { count, start, stop };
});
