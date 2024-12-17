import { defineComponent as $, computed as k, openBlock as n, createElementBlock as l, normalizeClass as b, renderSlot as _, createElementVNode as f, toDisplayString as M, ref as B, withDirectives as C, vModelDynamic as D, createCommentVNode as h, vModelText as N, normalizeStyle as K, onMounted as L, reactive as S, normalizeProps as z, guardReactiveProps as F, createBlock as P, Teleport as E, resolveDirective as H, Fragment as V, renderList as w, vShow as O, onBeforeMount as U, resolveComponent as R, createVNode as W } from "vue";
const Z = ["disabled"], j = /* @__PURE__ */ $({
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
  setup(u) {
    const t = u, e = k(() => `m-button__${t.type}`);
    return (a, s) => (n(), l("button", {
      class: b(["m-button", [
        a.size,
        e.value,
        {
          round: a.round,
          "is-plain": a.plain,
          disabled: a.disabled
        }
      ]]),
      type: "button",
      disabled: a.disabled
    }, [
      _(a.$slots, "default", {}, void 0, !0)
    ], 10, Z));
  }
}), v = (u, t) => {
  const e = u.__vccOpts || u;
  for (const [a, s] of t)
    e[a] = s;
  return e;
}, qe = /* @__PURE__ */ v(j, [["__scopeId", "data-v-f765b75f"]]), q = ["id"], A = { class: "notify-container__title" }, G = { class: "notify-container__body" }, J = /* @__PURE__ */ $({
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
  setup(u) {
    return (t, e) => (n(), l("div", {
      id: t.id,
      class: "notify-container"
    }, [
      f("div", A, M(t.title), 1),
      f("div", G, M(t.message), 1)
    ], 8, q));
  }
}), Ae = /* @__PURE__ */ v(J, [["__scopeId", "data-v-701a75cf"]]), Q = ["href", "target"], X = {
  name: "MLink"
}, Y = /* @__PURE__ */ $({
  ...X,
  props: {
    type: { default: "default" },
    underline: { type: Boolean },
    disabled: { type: Boolean },
    target: { default: "_self" },
    href: {}
  },
  setup(u) {
    return (t, e) => t.disabled ? (n(), l("span", {
      key: 1,
      class: b(["m-link", [
        {
          "m-link__disabled": t.disabled,
          "m-link__underline": t.underline
        },
        t.type
      ]])
    }, [
      _(t.$slots, "default", {}, void 0, !0)
    ], 2)) : (n(), l("a", {
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
      _(t.$slots, "default", {}, void 0, !0)
    ], 10, Q));
  }
}), Ge = /* @__PURE__ */ v(Y, [["__scopeId", "data-v-be744edc"]]), x = ["type", "disabled", "placeholder", "autocomplete"], ee = {
  name: "MInput"
}, te = /* @__PURE__ */ $({
  ...ee,
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
  setup(u, { emit: t }) {
    const e = B(!1);
    function a(r) {
      const i = r.target;
      d.maxLength && (i == null ? void 0 : i.value.length) > d.maxLength && (s.value = s.value.substring(0, d.maxLength));
    }
    const s = k({
      get() {
        return d.modelValue;
      },
      set(r) {
        y("update:modelValue", r);
      }
    }), d = u, y = t;
    return (r, i) => (n(), l("div", {
      class: b(["m-input", {
        "is-focus": e.value,
        disabled: r.disabled
      }])
    }, [
      C(f("input", {
        "onUpdate:modelValue": i[0] || (i[0] = (p) => s.value = p),
        type: r.type,
        disabled: r.disabled,
        placeholder: r.placeholder,
        autocomplete: r.autocomplete,
        onFocus: i[1] || (i[1] = (p) => e.value = !0),
        onBlur: i[2] || (i[2] = (p) => e.value = !1),
        onInput: a
      }, null, 40, x), [
        [D, s.value]
      ]),
      r.clearable && s.value ? (n(), l("button", {
        key: 0,
        class: "m-input__clear",
        onClick: i[3] || (i[3] = (p) => s.value = "")
      }, " clear ")) : h("", !0)
    ], 2));
  }
}), Je = /* @__PURE__ */ v(te, [["__scopeId", "data-v-22af735f"]]), ae = { class: "m-badge-wrap" }, oe = { key: 0 }, se = {
  name: "MBadge"
}, ne = /* @__PURE__ */ $({
  ...se,
  props: {
    value: {},
    max: {},
    isDot: { type: Boolean },
    hidden: { type: Boolean },
    type: { default: "primary" },
    showZero: { type: Boolean }
  },
  setup(u) {
    const t = k(() => e.max && Number(e.value) > e.max ? `${e.max}+` : e.value), e = u;
    return (a, s) => (n(), l("div", ae, [
      _(a.$slots, "default", {}, void 0, !0),
      a.hidden ? h("", !0) : (n(), l("div", {
        key: 0,
        class: b(["m-badge-wrap__item", [
          {
            "is-dot": a.value === void 0 || a.isDot
          },
          a.type
        ]])
      }, [
        a.value !== void 0 && !a.isDot ? (n(), l("span", oe, M(t.value), 1)) : h("", !0)
      ], 2))
    ]));
  }
}), Qe = /* @__PURE__ */ v(ne, [["__scopeId", "data-v-c82c06d9"]]), le = { class: "m-input-number" }, de = ["disabled"], ue = ["disabled"], re = ["disabled"], ie = {
  name: "MInputNumber"
}, pe = /* @__PURE__ */ $({
  ...ie,
  props: {
    steps: { default: 1 },
    min: { default: -999999 },
    max: { default: 999999 },
    disabled: { type: Boolean, default: !1 },
    modelValue: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: t }) {
    const e = k({
      get() {
        return String(a.modelValue);
      },
      set(o) {
        s("update:modelValue", Number(o));
      }
    }), a = u, s = t;
    function d(o) {
      o === "+" ? a.max !== parseInt(e.value, 10) && y(parseInt(e.value, 10) + a.steps) : o === "-" && a.min !== parseInt(e.value, 10) && y(parseInt(e.value, 10) - a.steps);
    }
    function y(o) {
      (o || o === 0) && (e.value = o + ""), s("update:modelValue", o);
    }
    function r() {
      e.value = e.value.replace(/[^0-9]/gi, ""), parseInt(e.value, 10) >= a.max && (e.value = a.max + ""), parseInt(e.value, 10) <= a.min && (e.value = a.min + "");
    }
    const i = k(() => parseInt(e.value, 10) === a.min), p = k(() => parseInt(e.value, 10) === a.max);
    return (o, m) => (n(), l("div", le, [
      f("button", {
        class: "m-input-number__button-left",
        disabled: i.value || o.disabled,
        onClick: m[0] || (m[0] = (c) => d("-"))
      }, " - ", 8, de),
      C(f("input", {
        "onUpdate:modelValue": m[1] || (m[1] = (c) => e.value = c),
        type: "text",
        disabled: o.disabled,
        class: "m-input-number__input",
        onBlur: r
      }, null, 40, ue), [
        [N, e.value]
      ]),
      f("button", {
        class: "m-input-number__button-right",
        disabled: p.value || o.disabled,
        onClick: m[2] || (m[2] = (c) => d("+"))
      }, " + ", 8, re)
    ]));
  }
}), Xe = /* @__PURE__ */ v(pe, [["__scopeId", "data-v-2ae6e9a5"]]), ce = { class: "m-dropdown" }, _e = {
  name: "MDropdown"
}, ve = /* @__PURE__ */ $({
  ..._e,
  props: {
    maxHeight: {},
    disabled: { type: Boolean },
    trigger: {}
  },
  setup(u, { expose: t }) {
    const e = B(!1);
    function a() {
      e.value = !e.value;
    }
    t({
      toggleMenu: a
    });
    const s = {
      onClick: a
    };
    return (d, y) => (n(), l("div", ce, [
      _(d.$slots, "default", { props: s }, void 0, !0),
      e.value ? (n(), l("div", {
        key: 0,
        class: "m-dropdown__menu",
        style: K(`max-height: ${d.maxHeight || "auto"}`)
      }, [
        _(d.$slots, "menu", {}, void 0, !0)
      ], 4)) : h("", !0)
    ]));
  }
}), Ye = /* @__PURE__ */ v(ve, [["__scopeId", "data-v-8f486435"]]), me = {
  name: "MDropdownMenu"
}, fe = { class: "m-dropdown-menu" };
function $e(u, t, e, a, s, d) {
  return n(), l("div", fe, [
    _(u.$slots, "default", {}, void 0, !0)
  ]);
}
const xe = /* @__PURE__ */ v(me, [["render", $e], ["__scopeId", "data-v-762ed40f"]]), ye = {
  name: "MDropdownMenuItem"
}, he = /* @__PURE__ */ $({
  ...ye,
  props: {
    disabled: { type: Boolean }
  },
  setup(u) {
    return (t, e) => (n(), l("div", {
      class: b(["m-dropdown-menu-item", {
        disabled: t.disabled
      }])
    }, [
      _(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), et = /* @__PURE__ */ v(he, [["__scopeId", "data-v-e2653670"]]), be = { class: "m-card" }, ge = {
  key: 0,
  class: "m-card__header"
}, ke = { key: 0 }, Me = { class: "m-card__body" }, Be = {
  key: 1,
  class: "m-card__footer"
}, Ie = { key: 0 }, Ce = {
  name: "MCard"
}, Ve = /* @__PURE__ */ $({
  ...Ce,
  props: {
    header: {},
    footer: {}
  },
  setup(u) {
    return (t, e) => (n(), l("div", be, [
      t.$slots.header || t.header ? (n(), l("div", ge, [
        _(t.$slots, "header", {}, () => [
          t.header ? (n(), l("span", ke, M(t.header), 1)) : h("", !0)
        ], !0)
      ])) : h("", !0),
      f("div", Me, [
        _(t.$slots, "default", {}, void 0, !0)
      ]),
      t.$slots.footer || t.footer ? (n(), l("div", Be, [
        _(t.$slots, "footer", {}, () => [
          t.footer ? (n(), l("span", Ie, M(t.footer), 1)) : h("", !0)
        ], !0)
      ])) : h("", !0)
    ]));
  }
}), tt = /* @__PURE__ */ v(Ve, [["__scopeId", "data-v-7cd1dd93"]]), we = { class: "m-collapse" }, Te = {
  name: "MCollapse"
}, De = /* @__PURE__ */ $({
  ...Te,
  props: {
    toTeleport: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(u, { expose: t, emit: e }) {
    const a = u, s = e, d = B(!1), y = B(!1);
    L(() => {
      d.value = a.modelValue, y.value = !0;
    });
    const r = () => {
      d.value = !d.value, s("update:modelValue", d.value);
    };
    t({
      toggleCollapse: r
    });
    const i = S({
      toggleCollapse: r,
      isExpand: d
    });
    return (p, o) => (n(), l("div", we, [
      f("div", {
        class: b({
          "m-activator": d.value
        })
      }, [
        _(p.$slots, "default", z(F(i)), void 0, !0)
      ], 2),
      y.value ? (n(), P(E, {
        key: 0,
        disabled: !p.toTeleport,
        to: p.toTeleport
      }, [
        d.value ? _(p.$slots, "expand", { key: 0 }, void 0, !0) : h("", !0)
      ], 8, ["disabled", "to"])) : h("", !0)
    ]));
  }
}), at = /* @__PURE__ */ v(De, [["__scopeId", "data-v-feaba461"]]), Ne = { class: "select" }, Ke = { class: "select__activator__text" }, Le = { class: "select__menu" }, Se = ["onClick"], ze = { key: 0 }, Fe = {
  name: "MSelect"
}, Pe = /* @__PURE__ */ $({
  ...Fe,
  props: {
    modelValue: { type: [Boolean, String, Number] },
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    valueKey: { default: "value" },
    titleKey: { default: "title" },
    placeholder: { default: "Выбрать" },
    loading: { type: Boolean },
    noDataText: { default: "Нет данных" },
    values: {}
  },
  emits: ["change", "focus", "blur", "update:modelValue"],
  setup(u, { emit: t }) {
    const e = u, a = t, s = B(!1), d = k({
      get() {
        return e.modelValue;
      },
      set(o) {
        a("update:modelValue", o);
      }
    }), y = k(() => {
      var m;
      if (!d.value)
        return e.placeholder;
      const o = (m = e.values) == null ? void 0 : m.find((c) => {
        if (c != null && c[e.valueKey])
          return (c == null ? void 0 : c[e.valueKey]) === d.value;
      });
      return (o == null ? void 0 : o[e.titleKey]) || d.value;
    });
    function r() {
      e != null && e.disabled || (s.value = !s.value);
    }
    function i() {
      s.value = !1;
    }
    function p(o) {
      d.value = o, s.value = !1;
    }
    return (o, m) => {
      var I;
      const c = H("click-outside");
      return n(), l("div", Ne, [
        C((n(), l("div", {
          class: b(["select__activator", {
            active: s.value,
            disabled: o.disabled
          }]),
          onClick: r
        }, [
          f("span", Ke, M(y.value), 1),
          f("span", {
            class: b(["select__activator__icon", {
              rotate: s.value
            }])
          }, " arrow ", 2)
        ], 2)), [
          [c, i]
        ]),
        C(f("div", Le, [
          (n(!0), l(V, null, w(o.values, (g, T) => (n(), l("div", {
            key: T,
            class: b(["select__menu__item", {
              active: g[o.valueKey] === d.value
            }]),
            onClick: (Ze) => p(g == null ? void 0 : g[o.valueKey])
          }, [
            f("span", null, M(g == null ? void 0 : g[o.titleKey]), 1)
          ], 10, Se))), 128)),
          (I = o.values) != null && I.length ? h("", !0) : (n(), l("div", ze, M(o.noDataText), 1))
        ], 512), [
          [O, s.value]
        ])
      ]);
    };
  }
}), ot = /* @__PURE__ */ v(Pe, [["__scopeId", "data-v-dc274120"]]), Ee = {
  name: "MTag"
}, He = /* @__PURE__ */ $({
  ...Ee,
  props: {
    type: { default: "default" },
    size: { default: "default" },
    closable: { type: Boolean },
    round: { type: Boolean }
  },
  setup(u) {
    const t = u, e = k(() => `m-tag__${t.type}`);
    return (a, s) => (n(), l("span", {
      class: b(["m-tag", [
        a.size,
        e.value,
        {
          round: a.round
        }
      ]])
    }, [
      _(a.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), st = /* @__PURE__ */ v(He, [["__scopeId", "data-v-d2d9e1a6"]]), Oe = ["onClick"], Ue = {
  key: 0,
  class: "child"
}, Re = {
  name: "MTree"
}, We = /* @__PURE__ */ $({
  ...Re,
  props: {
    data: {},
    load: { type: Boolean },
    showCheckbox: { type: Boolean }
  },
  emits: ["node-click"],
  setup(u, { emit: t }) {
    const e = u, a = t, s = B([]);
    function d(r, i, p) {
      if (!r) {
        y(i);
        return;
      }
      s.value[p].collapse = !s.value[p].collapse;
    }
    function y(r) {
      a("node-click", r);
    }
    return U(() => {
      s.value = e.data.map((r) => ({
        ...r,
        collapse: !1
      }));
    }), (r, i) => {
      const p = R("MTree");
      return n(!0), l(V, null, w(s.value, (o, m) => {
        var c;
        return n(), l("div", { key: m }, [
          f("div", {
            class: "tree-item",
            onClick: (I) => {
              var g;
              return d((g = o.children) == null ? void 0 : g.length, o.id || o.label, m);
            }
          }, M(o.label), 9, Oe),
          (c = o.children) != null && c.length && o.collapse ? (n(), l("div", Ue, [
            W(p, {
              data: o.children,
              onNodeClick: i[0] || (i[0] = (I) => a("node-click", I))
            }, null, 8, ["data"])
          ])) : h("", !0)
        ]);
      }), 128);
    };
  }
}), nt = /* @__PURE__ */ v(We, [["__scopeId", "data-v-4ad9996d"]]);
export {
  Qe as MBadge,
  qe as MButton,
  tt as MCard,
  at as MCollapse,
  Ye as MDropdown,
  xe as MDropdownMenu,
  et as MDropdownMenuItem,
  Je as MInput,
  Xe as MInputNumber,
  Ge as MLink,
  Ae as MNotify,
  ot as MSelect,
  st as MTag,
  nt as MTree
};
//# sourceMappingURL=index.js.map
