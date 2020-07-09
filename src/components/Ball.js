import { defineComponent, h, watch, reactive, toRefs } from "@vue/runtime-core";

export default defineComponent({
  props: ["x", "y", "radius"],
  setup(props) {},
  render(ctx) {
    // console.log(ctx);
    return h("Container", [
      h("circle", {
        x: ctx.x,
        y: ctx.y,
        width: ctx.radius * 2,
        height: ctx.radius * 2,
      }),
    ]);
  },
});
