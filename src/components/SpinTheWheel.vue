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
      padding: 1,
      internalPadding: 2,
      pointerLength: 6,
      pointerWidth: 2.5,
      wheelGroup: null
    };
  },
  computed: {
    limit() {
      return 2 * (this.radius + this.padding);
    },
    center() {
      return this.radius + this.padding;
    },
    theta() {
      return (2 * Math.PI) / this.categories.length;
    },
    thetaDeg() {
      return this.theta * (180 / Math.PI);
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
    pointerColor: {
      type: String,
      default: "red"
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
  mounted: function() {
    this.rebuild();
  },
  methods: {
    spin(force, revLower = 1, revUpper = 3) {
      const pick = Math.randRange(0, this.categories.length - 1);
      const revs =
        Math.randRange(revLower, revUpper) *
        Math.round(Math.constrict(force, 1, 5));
      const angle =
        this.thetaDeg / 2 +
        pick * this.thetaDeg +
        Math.randRange(-this.thetaDeg / 2 + 5, this.thetaDeg / 2 - 5);
      return this.wheelGroup
        .animate(3000, "cubicOut", 0)
        .rotate(revs * 360 + angle);
      //console.log(this.categories[pick].name);
    },
    getCorners() {
      var corners = "";
      Object.keys(this.svgAngles).forEach(corner => {
        if (this.theta >= this.svgAngles[corner]) {
          corners += " " + corner;
        }
      });
      return corners;
    },
    rebuild() {
      document.querySelector(".wheel").empty();
      const corners = this.getCorners();

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

      this.wheelGroup = draw.group();
      var c = 0;

      Object.keys(this.categories).forEach(key => {
        const element = this.categories[key];
        var wedgeGroup = this.wheelGroup.group().attr({
          transform: `rotate(${-this.thetaDeg * c} ${this.center} ${
            this.center
          })`
        });
        wedgeGroup.clipWith(draw.use(circle));

        const x = this.center + Math.round(this.limit * Math.cos(this.theta));
        const y = this.center - Math.round(this.limit * Math.sin(this.theta));
        const wedge = wedgeGroup
          .polygon(
            `${this.center},${this.center} ${this.limit},${this.center} ${corners} ${x},${y}`
          )
          .fill(element.color);
        const textL = this.radius - this.internalPadding;
        const textXDest =
          this.center + Math.round(textL * Math.cos(this.theta / 2));
        const textYDest =
          this.center - Math.round(textL * Math.sin(this.theta / 2));

        const path = wedgeGroup.path(
          `M ${this.center + this.internalPadding}, ${this.center -
            this.internalPadding} L ${textXDest}, ${textYDest}`
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

      const rip = this.radius * 2 + this.padding;
      const ptr = draw
        .polygon(
          `${this.radius * 2 - this.pointerLength},${this.center} ${rip},${this
            .center + this.pointerWidth} ${rip},${this.center -
            this.pointerWidth}`
        )
        .fill(this.pointerColor);

      if (this.border !== null) {
        ptr.stroke(this.border);
      }
    }
  }
};
</script>

<style>
.wheel svg {
  transform: rotate(-90deg);
}
</style>
