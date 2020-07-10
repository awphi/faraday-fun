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
  data: function() {
    return { phrasesUsed: [] };
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
    getNextSbText() {
      const r = Math.randRange(0, this.phrases.length - 1);
      const p = this.phrases[r];
      this.phrases.splice(r, 1);
      this.phrasesUsed.push(p);

      if (this.phrases.length === 0) {
        this.phrases.push(...this.phrasesUsed);
        this.phrasesUsed = [];
      }

      return p;
    },
    addSb() {
      if (this.phrases.length > 0) {
        const container = document.querySelector("#sb-rain");
        const sb = document.createElement("div");
        sb.classList.add("sb");
        sb.style.left = Math.randRange(20, 80) + "%";
        sb.textContent = this.getNextSbText();
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

@keyframes floatUp {
  from {
    transform: translate(-50%, 100vh);
  }

  to {
    transform: translate(-50%, -10vh);
  }
}
</style>

<style scoped>
#sb-rain {
  filter: blur(2px);
  position: fixed;
  height: 100%;
  width: 100%;
}
</style>
