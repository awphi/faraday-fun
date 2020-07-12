<template>
  <div id="app">
    <RainbowBackground />
    <TextRain v-bind:phrases="menuPhrases" />
    <router-view />
  </div>
</template>

<script>
import RainbowBackground from "./components/RainbowBackground.vue";
import TextRain from "./components/TextRain.vue";

import menuPhrasesRaw from "./assets/menu-phrases.txt";

// eslint-disable-next-line no-unused-vars
import helper from "./helpers";

export default {
  name: "App",
  data: function() {
    return {
      menuPhrases: menuPhrasesRaw.split("\n")
    };
  },
  components: {
    TextRain,
    RainbowBackground
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap");
@import url("./assets/colors.css");
@import url("./assets/buttons.css");
@import url("./assets/animations.css");
@import url("./assets/text.css");

#wheel {
  height: 100%;
  width: 100%;
}

#view {
  width: 100%;
  height: 100%;
}

#app {
  margin-top: 60px;
  margin: 0;
  overflow: hidden;
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
