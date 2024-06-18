import { defineComponent as l, computed as c, openBlock as s, createElementBlock as a, normalizeClass as d, renderSlot as i, createElementVNode as u, toDisplayString as _ } from "vue";
const f = ["disabled"], y = /* @__PURE__ */ l({
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
  setup(n) {
    const e = n, o = c(() => `m-button__${e.type}`);
    return (t, p) => (s(), a("button", {
      class: d(["m-button", [
        t.size,
        o.value,
        {
          round: t.round,
          "is-plain": t.plain,
          disabled: t.disabled
        }
      ]]),
      type: "button",
      disabled: t.disabled
    }, [
      i(t.$slots, "default", {}, void 0, !0)
    ], 10, f));
  }
}), r = (n, e) => {
  const o = n.__vccOpts || n;
  for (const [t, p] of e)
    o[t] = p;
  return o;
}, M = /* @__PURE__ */ r(y, [["__scopeId", "data-v-02d3a9cd"]]), m = ["id"], b = { class: "notify-container__title" }, k = { class: "notify-container__body" }, h = /* @__PURE__ */ l({
  __name: "MNotify",
  props: {
    title: {},
    message: {},
    type: {},
    position: {},
    id: {},
    onClose: { type: Function },
    onClick: { type: Function }
  },
  setup(n) {
    return (e, o) => (s(), a("div", {
      class: "notify-container",
      id: e.id
    }, [
      u("div", b, _(e.title), 1),
      u("div", k, _(e.message), 1)
    ], 8, m));
  }
}), C = /* @__PURE__ */ r(h, [["__scopeId", "data-v-6d56566b"]]), v = ["href", "target"], B = {
  name: "MLink"
}, g = /* @__PURE__ */ l({
  ...B,
  props: {
    type: { default: "default" },
    underline: { type: Boolean },
    disabled: { type: Boolean },
    target: { default: "_self" },
    href: {}
  },
  setup(n) {
    return (e, o) => e.disabled ? (s(), a("span", {
      key: 1,
      class: d(["m-link", [
        {
          "m-link__disabled": e.disabled,
          "m-link__underline": e.underline
        },
        e.type
      ]])
    }, [
      i(e.$slots, "default", {}, void 0, !0)
    ], 2)) : (s(), a("a", {
      key: 0,
      class: d(["m-link", [
        {
          "m-link__disabled": e.disabled,
          "m-link__underline": e.underline
        },
        e.type
      ]]),
      href: e.disabled ? "" : e.href,
      target: e.target
    }, [
      i(e.$slots, "default", {}, void 0, !0)
    ], 10, v));
  }
}), z = /* @__PURE__ */ r(g, [["__scopeId", "data-v-b1935d85"]]);
export {
  M as MButton,
  z as MLink,
  C as MNotify
};
//# sourceMappingURL=index.js.map
