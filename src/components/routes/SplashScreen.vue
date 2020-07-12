<template>
  <div id="splash">
    <div id="box">
      <h1>Faraday Fun</h1>
      <h2>by awphi</h2>
      <div id="controls">
        <button id="start-btn" @click="$router.push('start')" class="green">
          Start Game
        </button>
        <button
          id="categories-btn"
          @click="$router.push('categories')"
          class="orange"
        >
          Categories
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplashScreen"
};
</script>

<style>
.sb {
  border: none;
  background-color: var(--cl-box);
  padding: 1rem;
  text-align: center;
  display: inline-block;
  border-radius: 2em;
  box-shadow: 5px 5px 8px var(--cl-shadow);

  position: absolute;
  white-space: nowrap;

  animation: floatUp 10s forwards;
  animation-timing-function: linear;
}

@keyframes floatUp {
  from {
    transform: translate(-50%, 100vh);
  }

  to {
    transform: translate(-50%, -10vh);
  }
}

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
</style>

<style scoped>
#sb-rain {
  z-index: -10;
  filter: blur(2px);
  position: fixed;
  height: 100%;
  width: 100%;
}

#splash {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: white;
}

#box {
  animation: bounceIn 450ms forwards;
  animation-timing-function: linear;
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
