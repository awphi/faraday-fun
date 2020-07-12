<template>
  <div
    :class="[
      'cat-selector',
      isCategoryEnabled(category) ? 'fadeInPartial' : 'fadeOutPartial'
    ]"
    @click="toggle()"
  >
    <img :src="require(`@/assets/images/${getCategory(category).image}`)" />
    <div class="text-box">
      <h1>{{ getCategory(category).name }}</h1>
      <p>{{ getCategory(category).description }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CategorySelector",
  props: {
    category: {
      type: String,
      default: null
    }
  },
  computed: {
    ...mapGetters(["getCategory", "isCategoryEnabled"])
  },
  methods: {
    ...mapMutations(["toggleCategory"]),
    toggle() {
      // Commits the change to the state
      this.toggleCategory(this.category);

      // TODO play animation here
    }
  }
};
</script>

<style scoped>
.cat-selector {
  background-color: var(--cl-box);
  border-radius: 2em;
  width: 85%;
  display: flex;
  flex-direction: row;
  box-shadow: 5px 5px 8px var(--cl-shadow);
  padding: 1rem;
}

img {
  object-fit: contain;
  max-width: 20%;
  margin-right: 0.5rem;
  width: auto;
  height: auto;
}

h1,
h2,
p {
  color: white;
  text-align: left;
}

h1 {
  font-size: 20pt;
}

p {
  font-size: 10pt;
}
</style>
