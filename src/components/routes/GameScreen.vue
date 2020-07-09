<template>
  <div id="game">
    <SpinTheWheel
      id="wheel"
      v-bind:border="{ color: 'var(--cl-box)', width: 0.6 }"
      v-bind:text="{ family: 'Noto Sans JP', size: 6, color: 'white' }"
    />
  </div>
</template>

<script>
import SpinTheWheel from "../SpinTheWheel.vue";

export default {
  name: "GameScreen",
  components: {
    SpinTheWheel
  }
};
</script>

<style scoped>
#game {
  display: flex;
  flex-direction: column;
}
</style>
