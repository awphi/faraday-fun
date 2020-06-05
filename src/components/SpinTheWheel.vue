<template>
  <div class="wheel"></div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { SVG } from "@svgdotjs/svg.js";

export default {
  data: function() {
    return {
      radius: 50,
      padding: 5,
      internalPadding: 2
    };
  },
  computed: {
    limit() {
      return 2 * (this.radius + this.padding);
    },
    center() {
      return this.radius + this.padding;
    },
    svgAngles() {
      const o = {};
      o[`${this.limit}, 0`] = 0.7853981633974483;
      o[`0, 0`] = 2.356194490192345;
      o[`0, ${this.limit}`] = 3.9269908169872414;
      o[`${this.limit}, ${this.limit}`] = 5.497787143782138;
      return o;
    }
  },
  props: {
    text: {
      type: Object,
      default() {
        return {
          family: "Helvetica",
          size: 6,
          color: "white"
        };
      }
    },
    border: {
      type: Object,
      default: null
    },
    categories: {
      type: Array,
      default() {
        return [
          { id: "default1", name: "Sexy Truths", color: "#AED6F1" },
          { id: "default2", name: "Sexy Dares", color: "#F5B041" },
          { id: "default3", name: "Regular Truths", color: "#C5B021" },
          { id: "default3", name: "Regular Dares", color: "#91B021" }
        ];
      }
    }
  },
  watch: {
    radius() {
      this.build();
    },
    padding() {
      this.build();
    },
    internalPadding() {
      this.build();
    },
    categories: {
      handler(val) {
        this.build();
      },
      deep: true
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
        .viewbox(0, 0, this.limit, this.limit)
        .addTo(".wheel")
        .size("100%", "100%");

      const circle = draw
        .circle(this.radius * 2)
        .fill("white")
        .move(this.padding, this.padding);

      if (this.border !== null) {
        const cp = Object.assign({}, this.border);
        cp.width = cp.width * 2;
        circle.fill(this.border.color).stroke(cp);
      }

      var c = 0;

      Object.keys(this.categories).forEach(key => {
        const element = this.categories[key];
        var wedgeGroup = draw.group().attr({
          transform: `rotate(${-thetaDeg * c} ${this.center} ${this.center})`
        });
        wedgeGroup.clipWith(draw.use(circle));

        const x = this.center + Math.round(this.limit * Math.cos(theta));
        const y = this.center - Math.round(this.limit * Math.sin(theta));
        const wedge = wedgeGroup
          .polygon(
            `${this.center},${this.center} ${this.limit},${this.center} ${corners} ${x},${y}`
          )
          .fill(element.color);
        const L = this.radius - this.internalPadding;
        const xx = this.center + Math.round(L * Math.cos(theta / 2));
        const yy = this.center - Math.round(L * Math.sin(theta / 2));

        const path = wedgeGroup.path(
          `M ${this.center + this.internalPadding}, ${this.center -
            this.internalPadding} L ${xx}, ${yy}`
        );

        const txt = path
          .text(function(add) {
            add.tspan(element.name);
          })
          .attr({
            "dominant-baseline": "middle",
            "text-anchor": "middle",
            startOffset: "50%"
          })
          .font(this.text)
          .fill(this.text.color);

        if (this.border !== null) {
          wedge.stroke(this.border);
        }

        const clip = draw.use(wedge);
        wedge.clipWith(clip);
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
