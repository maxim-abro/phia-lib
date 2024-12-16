import { defineComponent as v, computed as y, openBlock as l, createElementBlock as d, normalizeClass as b, renderSlot as c, createElementVNode as $, toDisplayString as g, ref as M, withDirectives as I, vModelDynamic as B, createCommentVNode as f, vModelText as V, normalizeStyle as w, onMounted as C, reactive as D, normalizeProps as S, guardReactiveProps as N, createBlock as T, Teleport as L, pushScopeId as z, popScopeId as K } from "vue";
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
  setup(a) {
    const t = a, e = y(() => `m-button__${t.type}`);
    return (o, s) => (l(), d("button", {
      class: b(["m-button", [
        o.size,
        e.value,
        {
          round: o.round,
          "is-plain": o.plain,
          disabled: o.disabled
        }
      ]]),
      type: "button",
      disabled: o.disabled
    }, [
      c(o.$slots, "default", {}, void 0, !0)
    ], 10, F));
  }
}), _ = (a, t) => {
  const e = a.__vccOpts || a;
  for (const [o, s] of t)
    e[o] = s;
  return e;
}, Se = /* @__PURE__ */ _(P, [["__scopeId", "data-v-f765b75f"]]), E = ["id"], H = { class: "notify-container__title" }, O = { class: "notify-container__body" }, U = /* @__PURE__ */ v({
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
  setup(a) {
    return (t, e) => (l(), d("div", {
      id: t.id,
      class: "notify-container"
    }, [
      $("div", H, g(t.title), 1),
      $("div", O, g(t.message), 1)
    ], 8, E));
  }
}), Ne = /* @__PURE__ */ _(U, [["__scopeId", "data-v-701a75cf"]]), R = ["href", "target"], Z = {
  name: "MLink"
}, j = /* @__PURE__ */ v({
  ...Z,
  props: {
    type: { default: "default" },
    underline: { type: Boolean },
    disabled: { type: Boolean },
    target: { default: "_self" },
    href: {}
  },
  setup(a) {
    return (t, e) => t.disabled ? (l(), d("span", {
      key: 1,
      class: b(["m-link", [
        {
          "m-link__disabled": t.disabled,
          "m-link__underline": t.underline
        },
        t.type
      ]])
    }, [
      c(t.$slots, "default", {}, void 0, !0)
    ], 2)) : (l(), d("a", {
      key: 0,
      class: b(["m-link", [
        {
          "m-link__disabled": t.disabled,
          "m-link__underline": t.underline
        },
        t.type
      ]]),
      href: t.disabled ? "" : t.href,
      target: t.target
    }, [
      c(t.$slots, "default", {}, void 0, !0)
    ], 10, R));
  }
}), Te = /* @__PURE__ */ _(j, [["__scopeId", "data-v-be744edc"]]), q = ["type", "disabled", "placeholder", "autocomplete"], A = {
  name: "MInput"
}, G = /* @__PURE__ */ v({
  ...A,
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
  setup(a, { emit: t }) {
    const e = M(!1);
    function o(u) {
      const i = u.target;
      n.maxLength && (i == null ? void 0 : i.value.length) > n.maxLength && (s.value = s.value.substring(0, n.maxLength));
    }
    const s = y({
      get() {
        return n.modelValue;
      },
      set(u) {
        r("update:modelValue", u);
      }
    }), n = a, r = t;
    return (u, i) => (l(), d("div", {
      class: b(["m-input", {
        "is-focus": e.value,
        disabled: u.disabled
      }])
    }, [
      I($("input", {
        "onUpdate:modelValue": i[0] || (i[0] = (m) => s.value = m),
        type: u.type,
        disabled: u.disabled,
        placeholder: u.placeholder,
        autocomplete: u.autocomplete,
        onFocus: i[1] || (i[1] = (m) => e.value = !0),
        onBlur: i[2] || (i[2] = (m) => e.value = !1),
        onInput: o
      }, null, 40, q), [
        [B, s.value]
      ]),
      u.clearable && s.value ? (l(), d("button", {
        key: 0,
        class: "m-input__clear",
        onClick: i[3] || (i[3] = (m) => s.value = "")
      }, " clear ")) : f("", !0)
    ], 2));
  }
}), Le = /* @__PURE__ */ _(G, [["__scopeId", "data-v-22af735f"]]), J = { class: "m-badge-wrap" }, Q = { key: 0 }, W = {
  name: "MBadge"
}, X = /* @__PURE__ */ v({
  ...W,
  props: {
    value: {},
    max: {},
    isDot: { type: Boolean },
    hidden: { type: Boolean },
    type: { default: "primary" },
    showZero: { type: Boolean }
  },
  setup(a) {
    const t = y(() => e.max && Number(e.value) > e.max ? `${e.max}+` : e.value), e = a;
    return (o, s) => (l(), d("div", J, [
      c(o.$slots, "default", {}, void 0, !0),
      o.hidden ? f("", !0) : (l(), d("div", {
        key: 0,
        class: b(["m-badge-wrap__item", [
          {
            "is-dot": o.value === void 0 || o.isDot
          },
          o.type
        ]])
      }, [
        o.value !== void 0 && !o.isDot ? (l(), d("span", Q, g(t.value), 1)) : f("", !0)
      ], 2))
    ]));
  }
}), ze = /* @__PURE__ */ _(X, [["__scopeId", "data-v-c82c06d9"]]), Y = { class: "m-input-number" }, x = ["disabled"], ee = ["disabled"], te = ["disabled"], oe = {
  name: "MInputNumber"
}, ae = /* @__PURE__ */ v({
  ...oe,
  props: {
    steps: { default: 1 },
    min: { default: -999999 },
    max: { default: 999999 },
    disabled: { type: Boolean, default: !1 },
    modelValue: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = y({
      get() {
        return String(o.modelValue);
      },
      set(p) {
        s("update:modelValue", Number(p));
      }
    }), o = a, s = t;
    function n(p) {
      p === "+" ? o.max !== parseInt(e.value, 10) && r(parseInt(e.value, 10) + o.steps) : p === "-" && o.min !== parseInt(e.value, 10) && r(parseInt(e.value, 10) - o.steps);
    }
    function r(p) {
      (p || p === 0) && (e.value = p + ""), s("update:modelValue", p);
    }
    function u() {
      e.value = e.value.replace(/[^0-9]/gi, ""), parseInt(e.value, 10) >= o.max && (e.value = o.max + ""), parseInt(e.value, 10) <= o.min && (e.value = o.min + "");
    }
    const i = y(() => parseInt(e.value, 10) === o.min), m = y(() => parseInt(e.value, 10) === o.max);
    return (p, h) => (l(), d("div", Y, [
      $("button", {
        class: "m-input-number__button-left",
        disabled: i.value || p.disabled,
        onClick: h[0] || (h[0] = (k) => n("-"))
      }, " - ", 8, x),
      I($("input", {
        "onUpdate:modelValue": h[1] || (h[1] = (k) => e.value = k),
        type: "text",
        disabled: p.disabled,
        class: "m-input-number__input",
        onBlur: u
      }, null, 40, ee), [
        [V, e.value]
      ]),
      $("button", {
        class: "m-input-number__button-right",
        disabled: m.value || p.disabled,
        onClick: h[2] || (h[2] = (k) => n("+"))
      }, " + ", 8, te)
    ]));
  }
}), Ke = /* @__PURE__ */ _(ae, [["__scopeId", "data-v-2ae6e9a5"]]), se = { class: "m-dropdown" }, ne = {
  name: "MDropdown"
}, le = /* @__PURE__ */ v({
  ...ne,
  props: {
    maxHeight: {},
    disabled: { type: Boolean },
    trigger: {}
  },
  setup(a, { expose: t }) {
    const e = M(!1);
    function o() {
      e.value = !e.value;
    }
    t({
      toggleMenu: o
    });
    const s = {
      onClick: o
    };
    return (n, r) => (l(), d("div", se, [
      c(n.$slots, "default", { props: s }, void 0, !0),
      e.value ? (l(), d("div", {
        key: 0,
        class: "m-dropdown__menu",
        style: w(`max-height: ${n.maxHeight || "auto"}`)
      }, [
        c(n.$slots, "menu", {}, void 0, !0)
      ], 4)) : f("", !0)
    ]));
  }
}), Fe = /* @__PURE__ */ _(le, [["__scopeId", "data-v-8f486435"]]), de = {
  name: "MDropdownMenu"
}, ue = { class: "m-dropdown-menu" };
function ie(a, t, e, o, s, n) {
  return l(), d("div", ue, [
    c(a.$slots, "default", {}, void 0, !0)
  ]);
}
const Pe = /* @__PURE__ */ _(de, [["render", ie], ["__scopeId", "data-v-762ed40f"]]), re = {
  name: "MDropdownMenuItem"
}, pe = /* @__PURE__ */ v({
  ...re,
  props: {
    disabled: { type: Boolean }
  },
  setup(a) {
    return (t, e) => (l(), d("div", {
      class: b(["m-dropdown-menu-item", {
        disabled: t.disabled
      }])
    }, [
      c(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ee = /* @__PURE__ */ _(pe, [["__scopeId", "data-v-e2653670"]]), ce = { class: "m-card" }, _e = {
  key: 0,
  class: "m-card__header"
}, me = { key: 0 }, ve = { class: "m-card__body" }, fe = {
  key: 1,
  class: "m-card__footer"
}, $e = { key: 0 }, ye = {
  name: "MCard"
}, be = /* @__PURE__ */ v({
  ...ye,
  props: {
    header: {},
    footer: {}
  },
  setup(a) {
    return (t, e) => (l(), d("div", ce, [
      t.$slots.header || t.header ? (l(), d("div", _e, [
        c(t.$slots, "header", {}, () => [
          t.header ? (l(), d("span", me, g(t.header), 1)) : f("", !0)
        ], !0)
      ])) : f("", !0),
      $("div", ve, [
        c(t.$slots, "default", {}, void 0, !0)
      ]),
      t.$slots.footer || t.footer ? (l(), d("div", fe, [
        c(t.$slots, "footer", {}, () => [
          t.footer ? (l(), d("span", $e, g(t.footer), 1)) : f("", !0)
        ], !0)
      ])) : f("", !0)
    ]));
  }
}), He = /* @__PURE__ */ _(be, [["__scopeId", "data-v-7cd1dd93"]]), he = { class: "m-collapse" }, ge = {
  name: "MCollapse"
}, Me = /* @__PURE__ */ v({
  ...ge,
  props: {
    toTeleport: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { expose: t, emit: e }) {
    const o = a, s = e, n = M(!1), r = M(!1);
    C(() => {
      n.value = o.modelValue, r.value = !0;
    });
    const u = () => {
      n.value = !n.value, s("update:modelValue", n.value);
    };
    t({
      toggleCollapse: u
    });
    const i = D({
      toggleCollapse: u,
      isExpand: n
    });
    return (m, p) => (l(), d("div", he, [
      $("div", {
        class: b({
          "m-activator": n.value
        })
      }, [
        c(m.$slots, "default", S(N(i)), void 0, !0)
      ], 2),
      r.value ? (l(), T(L, {
        key: 0,
        disabled: !m.toTeleport,
        to: m.toTeleport
      }, [
        n.value ? c(m.$slots, "expand", { key: 0 }, void 0, !0) : f("", !0)
      ], 8, ["disabled", "to"])) : f("", !0)
    ]));
  }
}), Oe = /* @__PURE__ */ _(Me, [["__scopeId", "data-v-feaba461"]]), ke = (a) => (z("data-v-51452163"), a = a(), K(), a), Ie = { class: "select" }, Be = { class: "select__activator" }, Ve = /* @__PURE__ */ ke(() => /* @__PURE__ */ $("div", { class: "select__menu" }, null, -1)), we = {
  name: "MSelect"
}, Ce = /* @__PURE__ */ v({
  ...we,
  props: {
    modelValue: { type: [Boolean, String, Number] },
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    valueKey: { default: "value" },
    titleKey: { default: "title" },
    placeholder: { default: "Выбрать" },
    loading: { type: Boolean },
    noDataText: {},
    values: {}
  },
  emits: ["change", "focus", "blur", "update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, o = t, s = y({
      get() {
        return e.modelValue;
      },
      set(r) {
        o("update:modelValue", r);
      }
    }), n = y(() => {
      if (!s.value)
        return e.placeholder;
      const r = e.values.find((u) => {
        if (u[e.valueKey])
          return u[e.valueKey] === s.value;
      });
      return (r == null ? void 0 : r[e.titleKey]) || s.value;
    });
    return (r, u) => (l(), d("div", Ie, [
      $("div", Be, g(n.value), 1),
      Ve
    ]));
  }
}), Ue = /* @__PURE__ */ _(Ce, [["__scopeId", "data-v-51452163"]]);
export {
  ze as MBadge,
  Se as MButton,
  He as MCard,
  Oe as MCollapse,
  Fe as MDropdown,
  Pe as MDropdownMenu,
  Ee as MDropdownMenuItem,
  Le as MInput,
  Ke as MInputNumber,
  Te as MLink,
  Ne as MNotify,
  Ue as MSelect
};
//# sourceMappingURL=index.js.map
