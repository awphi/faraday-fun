<template>
  <div id="sb-rain"></div>
</template>

<script>
export default {
  name: "TextRain",
  mounted() {
    this.addSb();
    this.rainSb();
  },
  props: {
    phrases: {
      type: Array,
      default: () => []
    },
    timeLower: {
      type: Number,
      default: 2000
    },
    timeUpper: {
      type: Number,
      default: 6000
    }
  },
  methods: {
    addSb() {
      console.log(this);
      if (this.phrases.length > 0) {
        const container = document.querySelector("#sb-rain");
        const sb = document.createElement("div");
        sb.classList.add("sb");
        sb.style.left = Math.randRange(20, 80) + "%";
        sb.textContent = this.phrases.exhaustiveRandomElement();
        sb.addEventListener("animationend", function() {
          this.remove();
        });
        container.appendChild(sb);
      }
    },
    rainSb() {
      var rand = Math.randRange(this.timeLower, this.timeUpper);
      setTimeout(() => {
        this.addSb();
        this.rainSb();
      }, rand);
    }
  }
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
  color: white;
}
</style>

<style scoped>
#sb-rain {
  filter: blur(1px);
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -10;
}
</style>
