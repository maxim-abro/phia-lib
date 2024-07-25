import { defineComponent as v, computed as h, openBlock as a, createElementBlock as n, normalizeClass as $, renderSlot as p, createElementVNode as b, toDisplayString as g, ref as M, withDirectives as B, vModelDynamic as I, createCommentVNode as _, vModelText as V, normalizeStyle as C, onMounted as w, reactive as D, normalizeProps as N, guardReactiveProps as L, createBlock as T, Teleport as z } from "vue";
const F = ["disabled"], P = /* @__PURE__ */ v({
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
  setup(l) {
    const e = l, t = h(() => `m-button__${e.type}`);
    return (o, d) => (a(), n("button", {
      class: $(["m-button", [
        o.size,
        t.value,
        {
          round: o.round,
          "is-plain": o.plain,
          disabled: o.disabled
        }
      ]]),
      type: "button",
      disabled: o.disabled
    }, [
      p(o.$slots, "default", {}, void 0, !0)
    ], 10, F));
  }
}), m = (l, e) => {
  const t = l.__vccOpts || l;
  for (const [o, d] of e)
    t[o] = d;
  return t;
}, Me = /* @__PURE__ */ m(P, [["__scopeId", "data-v-c8c4791b"]]), S = ["id"], E = { class: "notify-container__title" }, H = { class: "notify-container__body" }, O = /* @__PURE__ */ v({
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
  setup(l) {
    return (e, t) => (a(), n("div", {
      id: e.id,
      class: "notify-container"
    }, [
      b("div", E, g(e.title), 1),
      b("div", H, g(e.message), 1)
    ], 8, S));
  }
}), ke = /* @__PURE__ */ m(O, [["__scopeId", "data-v-4765145f"]]), U = ["href", "target"], R = {
  name: "MLink"
}, Z = /* @__PURE__ */ v({
  ...R,
  props: {
    type: { default: "default" },
    underline: { type: Boolean },
    disabled: { type: Boolean },
    target: { default: "_self" },
    href: {}
  },
  setup(l) {
    return (e, t) => e.disabled ? (a(), n("span", {
      key: 1,
      class: $(["m-link", [
        {
          "m-link__disabled": e.disabled,
          "m-link__underline": e.underline
        },
        e.type
      ]])
    }, [
      p(e.$slots, "default", {}, void 0, !0)
    ], 2)) : (a(), n("a", {
      key: 0,
      class: $(["m-link", [
        {
          "m-link__disabled": e.disabled,
          "m-link__underline": e.underline
        },
        e.type
      ]]),
      href: e.disabled ? "" : e.href,
      target: e.target
    }, [
      p(e.$slots, "default", {}, void 0, !0)
    ], 10, U));
  }
}), Be = /* @__PURE__ */ m(Z, [["__scopeId", "data-v-b0c00adc"]]), j = ["type", "disabled", "placeholder", "autocomplete", "autofocus"], q = {
  name: "MInput"
}, A = /* @__PURE__ */ v({
  ...q,
  props: {
    type: { default: "text" },
    placeholder: {},
    maxLength: {},
    clearable: { type: Boolean },
    disabled: { type: Boolean },
    autofocus: { type: Boolean },
    autocomplete: {},
    modelValue: { default: "" },
    formatter: {}
  },
  emits: ["blur", "focus", "change", "input", "clear", "update:modelValue"],
  setup(l, { emit: e }) {
    const t = M(!1);
    function o(u) {
      const i = u.target;
      s.maxLength && (i == null ? void 0 : i.value.length) > s.maxLength && (d.value = d.value.substring(0, s.maxLength));
    }
    const d = h({
      get() {
        return s.modelValue;
      },
      set(u) {
        f("update:modelValue", u);
      }
    }), s = l, f = e;
    return (u, i) => (a(), n("div", {
      class: $(["m-input", {
        "is-focus": t.value,
        disabled: u.disabled
      }])
    }, [
      B(b("input", {
        "onUpdate:modelValue": i[0] || (i[0] = (c) => d.value = c),
        type: u.type,
        disabled: u.disabled,
        placeholder: u.placeholder,
        autocomplete: u.autocomplete,
        autofocus: u.autofocus,
        onFocus: i[1] || (i[1] = (c) => t.value = !0),
        onBlur: i[2] || (i[2] = (c) => t.value = !1),
        onInput: o
      }, null, 40, j), [
        [I, d.value]
      ]),
      u.clearable && d.value ? (a(), n("button", {
        key: 0,
        class: "m-input__clear",
        onClick: i[3] || (i[3] = (c) => d.value = "")
      }, " clear ")) : _("", !0)
    ], 2));
  }
}), Ie = /* @__PURE__ */ m(A, [["__scopeId", "data-v-31ff7c60"]]), G = { class: "m-badge-wrap" }, J = { key: 0 }, K = {
  name: "MBadge"
}, Q = /* @__PURE__ */ v({
  ...K,
  props: {
    value: {},
    max: {},
    isDot: { type: Boolean },
    hidden: { type: Boolean },
    type: { default: "primary" },
    showZero: { type: Boolean }
  },
  setup(l) {
    const e = h(() => t.max && Number(t.value) > t.max ? `${t.max}+` : t.value), t = l;
    return (o, d) => (a(), n("div", G, [
      p(o.$slots, "default", {}, void 0, !0),
      o.hidden ? _("", !0) : (a(), n("div", {
        key: 0,
        class: $(["m-badge-wrap__item", [
          {
            "is-dot": o.value === void 0 || o.isDot
          },
          o.type
        ]])
      }, [
        o.value !== void 0 && !o.isDot ? (a(), n("span", J, g(e.value), 1)) : _("", !0)
      ], 2))
    ]));
  }
}), Ve = /* @__PURE__ */ m(Q, [["__scopeId", "data-v-2c9ecba5"]]), W = { class: "m-input-number" }, X = ["disabled"], Y = ["disabled"], x = ["disabled"], ee = {
  name: "MInputNumber"
}, te = /* @__PURE__ */ v({
  ...ee,
  props: {
    steps: { default: 1 },
    min: { default: -999999 },
    max: { default: 999999 },
    disabled: { type: Boolean, default: !1 },
    modelValue: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: e }) {
    const t = h({
      get() {
        return String(o.modelValue);
      },
      set(r) {
        d("update:modelValue", Number(r));
      }
    }), o = l, d = e;
    function s(r) {
      r === "+" ? o.max !== parseInt(t.value, 10) && f(parseInt(t.value, 10) + o.steps) : r === "-" && o.min !== parseInt(t.value, 10) && f(parseInt(t.value, 10) - o.steps);
    }
    function f(r) {
      (r || r === 0) && (t.value = r + ""), d("update:modelValue", r);
    }
    function u() {
      t.value = t.value.replace(/[^0-9]/gi, ""), parseInt(t.value, 10) >= o.max && (t.value = o.max + ""), parseInt(t.value, 10) <= o.min && (t.value = o.min + "");
    }
    const i = h(() => parseInt(t.value, 10) === o.min), c = h(() => parseInt(t.value, 10) === o.max);
    return (r, y) => (a(), n("div", W, [
      b("button", {
        class: "m-input-number__button-left",
        onClick: y[0] || (y[0] = (k) => s("-")),
        disabled: i.value || r.disabled
      }, " - ", 8, X),
      B(b("input", {
        onBlur: u,
        "onUpdate:modelValue": y[1] || (y[1] = (k) => t.value = k),
        type: "text",
        disabled: r.disabled,
        class: "m-input-number__input"
      }, null, 40, Y), [
        [V, t.value]
      ]),
      b("button", {
        class: "m-input-number__button-right",
        onClick: y[2] || (y[2] = (k) => s("+")),
        disabled: c.value || r.disabled
      }, " + ", 8, x)
    ]));
  }
}), Ce = /* @__PURE__ */ m(te, [["__scopeId", "data-v-cd5a6c44"]]), oe = { class: "m-dropdown" }, ae = {
  name: "MDropdown"
}, se = /* @__PURE__ */ v({
  ...ae,
  props: {
    maxHeight: {},
    disabled: { type: Boolean },
    trigger: {}
  },
  setup(l, { expose: e }) {
    const t = M(!1);
    function o() {
      t.value = !t.value;
    }
    e({
      toggleMenu: o
    });
    const d = {
      onClick: o
    };
    return (s, f) => (a(), n("div", oe, [
      p(s.$slots, "default", { props: d }, void 0, !0),
      t.value ? (a(), n("div", {
        key: 0,
        class: "m-dropdown__menu",
        style: C(`max-height: ${s.maxHeight || "auto"}`)
      }, [
        p(s.$slots, "menu", {}, void 0, !0)
      ], 4)) : _("", !0)
    ]));
  }
}), we = /* @__PURE__ */ m(se, [["__scopeId", "data-v-1817b7fb"]]), ne = {
  name: "MDropdownMenu"
}, le = { class: "m-dropdown-menu" };
function de(l, e, t, o, d, s) {
  return a(), n("div", le, [
    p(l.$slots, "default", {}, void 0, !0)
  ]);
}
const De = /* @__PURE__ */ m(ne, [["render", de], ["__scopeId", "data-v-382d1b46"]]), ue = {
  name: "MDropdownMenuItem"
}, ie = /* @__PURE__ */ v({
  ...ue,
  props: {
    disabled: { type: Boolean }
  },
  setup(l) {
    return (e, t) => (a(), n("div", {
      class: $(["m-dropdown-menu-item", {
        disabled: e.disabled
      }])
    }, [
      p(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ne = /* @__PURE__ */ m(ie, [["__scopeId", "data-v-a90c1a98"]]), re = { class: "m-card" }, pe = {
  key: 0,
  class: "m-card__header"
}, ce = { key: 0 }, me = { class: "m-card__body" }, _e = {
  key: 1,
  class: "m-card__footer"
}, ve = { key: 0 }, fe = {
  name: "MCard"
}, be = /* @__PURE__ */ v({
  ...fe,
  props: {
    header: {},
    footer: {}
  },
  setup(l) {
    return (e, t) => (a(), n("div", re, [
      e.$slots.header || e.header ? (a(), n("div", pe, [
        p(e.$slots, "header", {}, () => [
          e.header ? (a(), n("span", ce, g(e.header), 1)) : _("", !0)
        ], !0)
      ])) : _("", !0),
      b("div", me, [
        p(e.$slots, "default", {}, void 0, !0)
      ]),
      e.$slots.footer || e.footer ? (a(), n("div", _e, [
        p(e.$slots, "footer", {}, () => [
          e.footer ? (a(), n("span", ve, g(e.footer), 1)) : _("", !0)
        ], !0)
      ])) : _("", !0)
    ]));
  }
}), Le = /* @__PURE__ */ m(be, [["__scopeId", "data-v-1976ace9"]]), $e = { class: "m-collapse" }, ye = {
  name: "MCollapse"
}, he = /* @__PURE__ */ v({
  ...ye,
  props: {
    toTeleport: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(l, { expose: e, emit: t }) {
    const o = l, d = t, s = M(!1), f = M(!1);
    w(() => {
      s.value = o.modelValue, f.value = !0;
    });
    const u = () => {
      s.value = !s.value, d("update:modelValue", s.value);
    };
    e({
      toggleCollapse: u
    });
    const i = D({
      toggleCollapse: u,
      isExpand: s
    });
    return (c, r) => (a(), n("div", $e, [
      b("div", {
        class: $({
          "m-activator": s.value
        })
      }, [
        p(c.$slots, "default", N(L(i)), void 0, !0)
      ], 2),
      f.value ? (a(), T(z, {
        key: 0,
        disabled: !c.toTeleport,
        to: c.toTeleport
      }, [
        s.value ? p(c.$slots, "expand", { key: 0 }, void 0, !0) : _("", !0)
      ], 8, ["disabled", "to"])) : _("", !0)
    ]));
  }
}), Te = /* @__PURE__ */ m(he, [["__scopeId", "data-v-e90c2409"]]);
export {
  Ve as MBadge,
  Me as MButton,
  Le as MCard,
  Te as MCollapse,
  we as MDropdown,
  De as MDropdownMenu,
  Ne as MDropdownMenuItem,
  Ie as MInput,
  Ce as MInputNumber,
  Be as MLink,
  ke as MNotify
};
//# sourceMappingURL=index.js.map
