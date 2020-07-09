<template>
  <div id="back"></div>
</template>

<script>
export default {
  name: "RainbowBackground"
};
</script>

<style scoped>
#back {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -9999;

  animation-name: background;
  animation-duration: 40s;
  animation-iteration-count: infinite;
}

@keyframes background {
  0% {
    background-color: #e74c3c;
  }
  20% {
    background-color: #9b59b6;
  }
  40% {
    background-color: #3498db;
  }
  60% {
    background-color: #2ecc71;
  }
  80% {
    background-color: #e67e22;
  }
  100% {
    background-color: #e74c3c;
  }
}
</style>
