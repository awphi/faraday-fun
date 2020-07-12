<template>
  <div id="container">
    <h1>Categories</h1>
    <p>(Tap to toggle!)</p>
    <hr />
    <div id="cat-box">
      <CategorySelector
        v-for="i in this.getCategories"
        :key="i"
        :category="i"
      />
    </div>
    <button class="green" @click="$router.push('/')">
      <font-awesome-icon icon="arrow-left" />
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CategorySelector from "../CategorySelector.vue";

export default {
  name: "CategorySelectScreen",
  components: {
    CategorySelector
  },
  computed: {
    ...mapGetters(["getCategories"])
  }
};
</script>

<style scoped>
h1 {
  font-size: 36pt;
}

#container {
  align-items: center;
  animation: bounceIn 450ms forwards;
}

button {
  margin: 1em;
  width: fit-content;
}

h1,
h2,
p {
  color: white;
}

p {
  opacity: 0.75;
  font-size: 8pt;
}

#container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#cat-box {
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
}
</style>
