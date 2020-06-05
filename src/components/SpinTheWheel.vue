<template>
  <div class="wheel"></div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { SVG } from "@svgdotjs/svg.js";

export default {
  data: function() {
    return {
      categories: [
        "cat1",
        "cat2",
        "cat3",
        "cat4",
        "cat5",
        "cat6",
        "cat7",
        "cat8"
      ],
      svgAngles: {
        "100, 0": 0.7853981633974483,
        "0, 0": 2.356194490192345,
        "0, 100": 3.9269908169872414,
        "100, 100": 5.497787143782138
      }
    };
  },
  props: {
    border: {
      type: Object,
      default: null
    }
  },
  watch: {
    categories: function() {
      this.build();
    },
    border: {
      handler(val) {
        this.build();
      },
      deep: true
    }
  },
  mounted: function() {
    this.build();
  },
  methods: {
    getCorners(theta) {
      var corners = "";
      Object.keys(this.svgAngles).forEach(corner => {
        if (theta >= this.svgAngles[corner]) {
          corners += " " + corner;
        }
      });
      return corners;
    },
    build() {
      document.querySelector(".wheel").empty();
      const theta = (2 * Math.PI) / this.categories.length;
      const thetaDeg = theta * (180 / Math.PI);
      const corners = this.getCorners(theta);

      const draw = SVG()
        .viewbox(0, 0, 110, 110)
        .addTo(".wheel")
        .size("100%", "100%");

      const circle = draw
        .circle("100")
        .fill("white")
        .move(5, 5);

      if (this.border !== null) {
        const cp = Object.assign({}, this.border);
        cp.width = cp.width * 2;
        circle.fill(this.border.color).stroke(cp);
      }

      var c = 0;

      this.categories.forEach(element => {
        var wedgeGroup = draw
          .group()
          .attr({ transform: `rotate(${-thetaDeg * c} 55 55)` });
        wedgeGroup.clipWith(draw.use(circle));

        const x = 55 + Math.round(1000 * Math.cos(theta));
        const y = 55 - Math.round(1000 * Math.sin(theta));
        console.log(x, y);
        const wedge = wedgeGroup
          .polygon(`55,55 1000,55 ${corners} ${x},${y}`)
          .fill("lightgreen");

        if (this.border !== null) {
          wedge.stroke(this.border);
        }

        wedge.clipWith(draw.use(wedge));
        c++;
      });
    }
  }
};
</script>

<style scoped>
.wheel {
  padding: 1rem;
}
</style>
