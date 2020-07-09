<template>
  <div id="splash">
    <h1>Faraday Fun</h1>
    <h2>by awphi</h2>
    <div id="controls">
      <button class="green">Start Game</button>
      <button class="orange">Categories</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplashScreen"
};
</script>

<style scoped>
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3) translate3d(0, 0, 0);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.1);
  }
  80% {
    opacity: 1;
    transform: scale(0.89);
  }
  100% {
    opacity: 1;
    transform: scale(1) translate3d(0, 0, 0);
  }
}

#splash {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  animation-name: bounceIn;
  animation-duration: 450ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

h2 {
  margin-bottom: 2rem;
}

h1 {
  font-size: 36pt;
  text-shadow: 2px 2px 4px var(--cl-shadow);
}

button {
  margin: 0 0.4rem 0 0.4rem;
}

h2 {
  font-size: 14pt;
  text-shadow: 1px 1px 2px var(--cl-shadow);
}
</style>
