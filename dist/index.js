import { defineComponent as v, computed as h, openBlock as a, createElementBlock as n, normalizeClass as b, renderSlot as p, createElementVNode as $, toDisplayString as g, ref as M, withDirectives as I, vModelDynamic as B, createCommentVNode as _, vModelText as V, normalizeStyle as C, onMounted as w, reactive as D, normalizeProps as N, guardReactiveProps as L, createBlock as T, Teleport as z } from "vue";
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
      class: b(["m-button", [
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
}, Me = /* @__PURE__ */ m(P, [["__scopeId", "data-v-f765b75f"]]), S = ["id"], E = { class: "notify-container__title" }, H = { class: "notify-container__body" }, O = /* @__PURE__ */ v({
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
      $("div", E, g(e.title), 1),
      $("div", H, g(e.message), 1)
    ], 8, S));
  }
}), ke = /* @__PURE__ */ m(O, [["__scopeId", "data-v-701a75cf"]]), U = ["href", "target"], R = {
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
      class: b(["m-link", [
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
      class: b(["m-link", [
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
}), Ie = /* @__PURE__ */ m(Z, [["__scopeId", "data-v-be744edc"]]), j = ["type", "disabled", "placeholder", "autocomplete"], q = {
  name: "MInput"
}, A = /* @__PURE__ */ v({
  ...q,
  props: {
    type: { default: "text" },
    placeholder: {},
    maxLength: {},
    clearable: { type: Boolean },
    disabled: { type: Boolean },
    autocomplete: { default: "" },
    modelValue: { default: "" },
    formatter: {}
  },
  emits: ["blur", "focus", "change", "input", "clear", "update:modelValue"],
  setup(l, { emit: e }) {
    const t = M(!1);
    function o(i) {
      const u = i.target;
      s.maxLength && (u == null ? void 0 : u.value.length) > s.maxLength && (d.value = d.value.substring(0, s.maxLength));
    }
    const d = h({
      get() {
        return s.modelValue;
      },
      set(i) {
        f("update:modelValue", i);
      }
    }), s = l, f = e;
    return (i, u) => (a(), n("div", {
      class: b(["m-input", {
        "is-focus": t.value,
        disabled: i.disabled
      }])
    }, [
      I($("input", {
        "onUpdate:modelValue": u[0] || (u[0] = (c) => d.value = c),
        type: i.type,
        disabled: i.disabled,
        placeholder: i.placeholder,
        autocomplete: i.autocomplete,
        onFocus: u[1] || (u[1] = (c) => t.value = !0),
        onBlur: u[2] || (u[2] = (c) => t.value = !1),
        onInput: o
      }, null, 40, j), [
        [B, d.value]
      ]),
      i.clearable && d.value ? (a(), n("button", {
        key: 0,
        class: "m-input__clear",
        onClick: u[3] || (u[3] = (c) => d.value = "")
      }, " clear ")) : _("", !0)
    ], 2));
  }
}), Be = /* @__PURE__ */ m(A, [["__scopeId", "data-v-22af735f"]]), G = { class: "m-badge-wrap" }, J = { key: 0 }, K = {
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
        class: b(["m-badge-wrap__item", [
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
}), Ve = /* @__PURE__ */ m(Q, [["__scopeId", "data-v-c82c06d9"]]), W = { class: "m-input-number" }, X = ["disabled"], Y = ["disabled"], x = ["disabled"], ee = {
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
    function i() {
      t.value = t.value.replace(/[^0-9]/gi, ""), parseInt(t.value, 10) >= o.max && (t.value = o.max + ""), parseInt(t.value, 10) <= o.min && (t.value = o.min + "");
    }
    const u = h(() => parseInt(t.value, 10) === o.min), c = h(() => parseInt(t.value, 10) === o.max);
    return (r, y) => (a(), n("div", W, [
      $("button", {
        class: "m-input-number__button-left",
        disabled: u.value || r.disabled,
        onClick: y[0] || (y[0] = (k) => s("-"))
      }, " - ", 8, X),
      I($("input", {
        "onUpdate:modelValue": y[1] || (y[1] = (k) => t.value = k),
        type: "text",
        disabled: r.disabled,
        class: "m-input-number__input",
        onBlur: i
      }, null, 40, Y), [
        [V, t.value]
      ]),
      $("button", {
        class: "m-input-number__button-right",
        disabled: c.value || r.disabled,
        onClick: y[2] || (y[2] = (k) => s("+"))
      }, " + ", 8, x)
    ]));
  }
}), Ce = /* @__PURE__ */ m(te, [["__scopeId", "data-v-2ae6e9a5"]]), oe = { class: "m-dropdown" }, ae = {
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
}), we = /* @__PURE__ */ m(se, [["__scopeId", "data-v-8f486435"]]), ne = {
  name: "MDropdownMenu"
}, le = { class: "m-dropdown-menu" };
function de(l, e, t, o, d, s) {
  return a(), n("div", le, [
    p(l.$slots, "default", {}, void 0, !0)
  ]);
}
const De = /* @__PURE__ */ m(ne, [["render", de], ["__scopeId", "data-v-762ed40f"]]), ue = {
  name: "MDropdownMenuItem"
}, ie = /* @__PURE__ */ v({
  ...ue,
  props: {
    disabled: { type: Boolean }
  },
  setup(l) {
    return (e, t) => (a(), n("div", {
      class: b(["m-dropdown-menu-item", {
        disabled: e.disabled
      }])
    }, [
      p(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ne = /* @__PURE__ */ m(ie, [["__scopeId", "data-v-e2653670"]]), re = { class: "m-card" }, pe = {
  key: 0,
  class: "m-card__header"
}, ce = { key: 0 }, me = { class: "m-card__body" }, _e = {
  key: 1,
  class: "m-card__footer"
}, ve = { key: 0 }, fe = {
  name: "MCard"
}, $e = /* @__PURE__ */ v({
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
      $("div", me, [
        p(e.$slots, "default", {}, void 0, !0)
      ]),
      e.$slots.footer || e.footer ? (a(), n("div", _e, [
        p(e.$slots, "footer", {}, () => [
          e.footer ? (a(), n("span", ve, g(e.footer), 1)) : _("", !0)
        ], !0)
      ])) : _("", !0)
    ]));
  }
}), Le = /* @__PURE__ */ m($e, [["__scopeId", "data-v-7cd1dd93"]]), be = { class: "m-collapse" }, ye = {
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
    const i = () => {
      s.value = !s.value, d("update:modelValue", s.value);
    };
    e({
      toggleCollapse: i
    });
    const u = D({
      toggleCollapse: i,
      isExpand: s
    });
    return (c, r) => (a(), n("div", be, [
      $("div", {
        class: b({
          "m-activator": s.value
        })
      }, [
        p(c.$slots, "default", N(L(u)), void 0, !0)
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
}), Te = /* @__PURE__ */ m(he, [["__scopeId", "data-v-feaba461"]]);
export {
  Ve as MBadge,
  Me as MButton,
  Le as MCard,
  Te as MCollapse,
  we as MDropdown,
  De as MDropdownMenu,
  Ne as MDropdownMenuItem,
  Be as MInput,
  Ce as MInputNumber,
  Ie as MLink,
  ke as MNotify
};
//# sourceMappingURL=index.js.map
