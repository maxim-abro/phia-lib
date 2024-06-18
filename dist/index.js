import { defineComponent as r, computed as i, openBlock as s, createElementBlock as d, normalizeClass as p, renderSlot as c } from "vue";
const u = ["disabled"], _ = /* @__PURE__ */ r({
  __name: "MButton",
  props: {
    size: { default: "default" },
    type: { default: "default" },
    round: { type: Boolean },
    link: {},
    loading: { type: Boolean },
    disabled: { type: Boolean },
    icon: { type: Boolean },
    plain: { type: Boolean }
  },
  setup(t) {
    const o = t, n = i(() => `m-button__${o.type}`);
    return (e, a) => (s(), d("button", {
      class: p(["m-button", [
        e.size,
        n.value,
        {
          round: e.round,
          "is-plain": e.plain,
          disabled: e.disabled
        }
      ]]),
      type: "button",
      disabled: e.disabled
    }, [
      c(e.$slots, "default", {}, void 0, !0)
    ], 10, u));
  }
}), l = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [e, a] of o)
    n[e] = a;
  return n;
}, b = /* @__PURE__ */ l(_, [["__scopeId", "data-v-02d3a9cd"]]), f = {};
function y(t, o) {
  return s(), d("div");
}
const B = /* @__PURE__ */ l(f, [["render", y]]);
export {
  b as MButton,
  B as MNotify
};
//# sourceMappingURL=index.js.map
