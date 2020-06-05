<template>
  <div id="app">
    <SpinTheWheel id="wheel" v-bind:border="{ color: '#2C3E50', width: 0.6 }" />
  </div>
</template>

<script>
import SpinTheWheel from "./components/SpinTheWheel.vue";
// eslint-disable-next-line no-unused-vars
import helper from "./helpers";

export default {
  name: "App",
  components: {
    SpinTheWheel
  }
};
</script>

<style>
#wheel {
  height: 500px;
  width: 500px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
}

body {
  margin: 0;
}

html,
body,
#app {
  height: 100%;
}
</style>
