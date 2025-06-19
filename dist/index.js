import { defineComponent as y, computed as b, createElementBlock as d, openBlock as i, normalizeClass as M, renderSlot as g, createElementVNode as h, toDisplayString as $, ref as T, withDirectives as I, createCommentVNode as k, vModelDynamic as U, createVNode as V, vModelText as H, resolveDirective as A, normalizeStyle as q, onMounted as E, reactive as j, createBlock as D, normalizeProps as O, guardReactiveProps as R, Teleport as W, Transition as Z, withCtx as N, Fragment as S, renderList as L, vShow as P, onBeforeMount as G, resolveComponent as J, createTextVNode as w, unref as Q, vModelCheckbox as X, useSlots as Y, watch as x } from "vue";
const ee = ["disabled"], te = {
  name: "MButton"
}, F = /* @__PURE__ */ y({
  ...te,
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
    const t = u, e = b(() => `m-button__${t.type}`);
    return (s, n) => (i(), d("button", {
      class: M(["m-button", [
        s.size,
        e.value,
        {
          round: s.round,
          "is-plain": s.plain,
          disabled: s.disabled
        }
      ]]),
      type: "button",
      disabled: s.disabled
    }, [
      g(s.$slots, "default")
    ], 10, ee));
  }
}), le = ["id"], ae = { class: "notify-container__title" }, se = { class: "notify-container__body" }, yt = /* @__PURE__ */ y({
  __name: "index",
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
    return (t, e) => (i(), d("div", {
      id: t.id,
      class: "notify-container"
    }, [
      h("div", ae, $(t.title), 1),
      h("div", se, $(t.message), 1)
    ], 8, le));
  }
}), ne = ["href", "target"], oe = {
  name: "MLink"
}, $t = /* @__PURE__ */ y({
  ...oe,
  props: {
    type: { default: "default" },
    underline: { type: Boolean },
    disabled: { type: Boolean },
    target: { default: "_self" },
    href: {}
  },
  setup(u) {
    return (t, e) => t.disabled ? (i(), d("span", {
      key: 1,
      class: M(["m-link", [
        {
          "m-link__disabled": t.disabled,
          "m-link__underline": t.underline
        },
        t.type
      ]])
    }, [
      g(t.$slots, "default")
    ], 2)) : (i(), d("a", {
      key: 0,
      class: M(["m-link", [
        {
          "m-link__disabled": t.disabled,
          "m-link__underline": t.underline
        },
        t.type
      ]]),
      href: t.disabled ? "" : t.href,
      target: t.target
    }, [
      g(t.$slots, "default")
    ], 10, ne));
  }
}), ie = {
  name: "MIcon"
}, C = /* @__PURE__ */ y({
  ...ie,
  props: {
    icon: {}
  },
  setup(u) {
    return (t, e) => (i(), d("i", {
      class: M(`mdi ${t.icon}`)
    }, null, 2));
  }
}), ue = ["type", "disabled", "placeholder", "autocomplete"], re = {
  name: "MInput"
}, de = /* @__PURE__ */ y({
  ...re,
  props: {
    type: { default: "text" },
    placeholder: {},
    maxLength: {},
    clearable: { type: Boolean },
    disabled: { type: Boolean },
    autocomplete: {},
    modelValue: {},
    formatter: {}
  },
  emits: ["blur", "focus", "change", "input", "clear", "update:modelValue"],
  setup(u, { emit: t }) {
    const e = T(!1);
    function s(r) {
      const c = r.target;
      o.maxLength && (c == null ? void 0 : c.value.length) > o.maxLength && (n.value = n.value.substring(0, o.maxLength));
    }
    const n = b({
      get() {
        return o.modelValue;
      },
      set(r) {
        _("update:modelValue", r);
      }
    }), o = u, _ = t;
    return (r, c) => (i(), d("div", {
      class: M(["m-input", {
        "is-focus": e.value,
        disabled: r.disabled
      }])
    }, [
      I(h("input", {
        "onUpdate:modelValue": c[0] || (c[0] = (v) => n.value = v),
        type: r.type,
        disabled: r.disabled,
        placeholder: r.placeholder,
        autocomplete: r.autocomplete,
        onFocus: c[1] || (c[1] = (v) => e.value = !0),
        onBlur: c[2] || (c[2] = (v) => e.value = !1),
        onInput: s
      }, null, 40, ue), [
        [U, n.value]
      ]),
      r.clearable && n.value ? (i(), d("button", {
        key: 0,
        class: "m-input__clear",
        onClick: c[3] || (c[3] = (v) => n.value = "")
      }, [
        V(C, { icon: "mdi-close" })
      ])) : k("", !0)
    ], 2));
  }
}), ce = { class: "m-badge-wrap" }, pe = { key: 0 }, me = {
  name: "MBadge"
}, gt = /* @__PURE__ */ y({
  ...me,
  props: {
    value: {},
    max: {},
    isDot: { type: Boolean },
    hidden: { type: Boolean },
    type: { default: "primary" },
    showZero: { type: Boolean }
  },
  setup(u) {
    const t = b(() => e.max && Number(e.value) > e.max ? `${e.max}+` : e.value), e = u;
    return (s, n) => (i(), d("div", ce, [
      g(s.$slots, "default"),
      s.hidden ? k("", !0) : (i(), d("div", {
        key: 0,
        class: M(["m-badge-wrap__item", [
          {
            "is-dot": s.value === void 0 || s.isDot
          },
          s.type
        ]])
      }, [
        s.value !== void 0 && !s.isDot ? (i(), d("span", pe, $(t.value), 1)) : k("", !0)
      ], 2))
    ]));
  }
}), _e = { class: "m-input-number" }, fe = ["disabled"], ve = ["disabled"], he = ["disabled"], be = {
  name: "MInputNumber"
}, kt = /* @__PURE__ */ y({
  ...be,
  props: {
    steps: { default: 1 },
    min: { default: -999999 },
    max: { default: 999999 },
    disabled: { type: Boolean, default: !1 },
    modelValue: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: t }) {
    const e = b({
      get() {
        return String(s.modelValue);
      },
      set(l) {
        n("update:modelValue", Number(l));
      }
    }), s = u, n = t;
    function o(l) {
      l === "+" ? s.max !== parseInt(e.value, 10) && _(parseInt(e.value, 10) + s.steps) : l === "-" && s.min !== parseInt(e.value, 10) && _(parseInt(e.value, 10) - s.steps);
    }
    function _(l) {
      (l || l === 0) && (e.value = l + ""), n("update:modelValue", l);
    }
    function r() {
      e.value = e.value.replace(/[^0-9]/gi, ""), parseInt(e.value, 10) >= s.max && (e.value = s.max + ""), parseInt(e.value, 10) <= s.min && (e.value = s.min + "");
    }
    const c = b(() => parseInt(e.value, 10) === s.min), v = b(() => parseInt(e.value, 10) === s.max);
    return (l, p) => (i(), d("div", _e, [
      h("button", {
        class: "m-input-number__button-left",
        disabled: c.value || l.disabled,
        onClick: p[0] || (p[0] = (a) => o("-"))
      }, [
        V(C, { icon: "mdi-minus" })
      ], 8, fe),
      I(h("input", {
        "onUpdate:modelValue": p[1] || (p[1] = (a) => e.value = a),
        type: "text",
        disabled: l.disabled,
        class: "m-input-number__input",
        onBlur: r
      }, null, 40, ve), [
        [H, e.value]
      ]),
      h("button", {
        class: "m-input-number__button-right",
        disabled: v.value || l.disabled,
        onClick: p[2] || (p[2] = (a) => o("+"))
      }, [
        V(C, { icon: "mdi-plus" })
      ], 8, he)
    ]));
  }
}), ye = { class: "m-dropdown" }, $e = {
  name: "MDropdown"
}, Mt = /* @__PURE__ */ y({
  ...$e,
  props: {
    maxHeight: {},
    disabled: { type: Boolean },
    trigger: {}
  },
  setup(u, { expose: t }) {
    const e = T(!1);
    function s() {
      e.value = !e.value;
    }
    function n() {
      e.value = !1;
    }
    t({
      toggleMenu: s
    });
    const o = {
      onClick: s
    };
    return (_, r) => {
      const c = A("click-outside");
      return i(), d("div", ye, [
        g(_.$slots, "default", { props: o }),
        e.value ? I((i(), d("div", {
          key: 0,
          class: "m-dropdown__menu",
          style: q(`max-height: ${_.maxHeight || "auto"}`)
        }, [
          g(_.$slots, "menu")
        ], 4)), [
          [c, n]
        ]) : k("", !0)
      ]);
    };
  }
}), ge = {
  name: "MDropdownMenu"
}, ke = (u, t) => {
  const e = u.__vccOpts || u;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, Me = { class: "m-dropdown-menu" };
function Ve(u, t, e, s, n, o) {
  return i(), d("div", Me, [
    g(u.$slots, "default")
  ]);
}
const Vt = /* @__PURE__ */ ke(ge, [["render", Ve]]), Te = {
  name: "MDropdownMenuItem"
}, Tt = /* @__PURE__ */ y({
  ...Te,
  props: {
    disabled: { type: Boolean }
  },
  setup(u) {
    return (t, e) => (i(), d("div", {
      class: M(["m-dropdown-menu-item", {
        disabled: t.disabled
      }])
    }, [
      g(t.$slots, "default")
    ], 2));
  }
}), Be = { class: "m-card" }, Ie = {
  key: 0,
  class: "m-card__header"
}, Ce = { key: 0 }, we = { class: "m-card__body" }, De = {
  key: 1,
  class: "m-card__footer"
}, Se = { key: 0 }, Le = {
  name: "MCard"
}, Bt = /* @__PURE__ */ y({
  ...Le,
  props: {
    header: {},
    footer: {}
  },
  setup(u) {
    return (t, e) => (i(), d("div", Be, [
      t.$slots.header || t.header ? (i(), d("div", Ie, [
        g(t.$slots, "header", {}, () => [
          t.header ? (i(), d("span", Ce, $(t.header), 1)) : k("", !0)
        ])
      ])) : k("", !0),
      h("div", we, [
        g(t.$slots, "default")
      ]),
      t.$slots.footer || t.footer ? (i(), d("div", De, [
        g(t.$slots, "footer", {}, () => [
          t.footer ? (i(), d("span", Se, $(t.footer), 1)) : k("", !0)
        ])
      ])) : k("", !0)
    ]));
  }
}), Ke = { class: "m-collapse" }, Ne = { class: "m-activator" }, Pe = { key: 0 }, Fe = {
  name: "MCollapse"
}, It = /* @__PURE__ */ y({
  ...Fe,
  props: {
    toTeleport: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(u, { expose: t, emit: e }) {
    const s = u, n = e, o = T(!1), _ = T(!1);
    E(() => {
      o.value = s.modelValue, _.value = !0;
    });
    const r = () => {
      o.value = !o.value, n("update:modelValue", o.value);
    };
    t({
      toggleCollapse: r
    });
    const c = j({
      toggleCollapse: r,
      isExpand: o
    }), v = (a) => {
      const m = a;
      m.style.height = "0", m.style.opacity = "0", m.style.overflow = "hidden";
    }, l = (a, m) => {
      const f = a, B = f.scrollHeight;
      requestAnimationFrame(() => {
        f.style.transition = "height 0.3s ease, opacity 0.3s ease", f.style.height = `${B}px`, f.style.opacity = "1", setTimeout(() => {
          f.style.height = "auto", m();
        }, 300);
      });
    }, p = (a, m) => {
      const f = a, B = f.scrollHeight;
      f.style.height = `${B}px`, f.style.opacity = "1", requestAnimationFrame(() => {
        f.style.transition = "height 0.3s ease, opacity 0.3s ease", requestAnimationFrame(() => {
          f.style.height = "0", f.style.opacity = "0", setTimeout(m, 300);
        });
      });
    };
    return (a, m) => (i(), d("div", Ke, [
      h("div", Ne, [
        g(a.$slots, "default", O(R(c)))
      ]),
      _.value ? (i(), D(W, {
        key: 0,
        disabled: !a.toTeleport,
        to: a.toTeleport
      }, [
        V(Z, {
          onBeforeEnter: v,
          onEnter: l,
          onLeave: p
        }, {
          default: N(() => [
            o.value ? (i(), d("div", Pe, [
              g(a.$slots, "expand")
            ])) : k("", !0)
          ]),
          _: 3
        })
      ], 8, ["disabled", "to"])) : k("", !0)
    ]));
  }
}), ze = { class: "select" }, Ae = { class: "select__activator__text" }, Ee = { class: "select__menu" }, Ue = ["onClick"], He = { key: 0 }, qe = {
  name: "MSelect"
}, je = /* @__PURE__ */ y({
  ...qe,
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
    const e = u, s = t, n = T(!1), o = b({
      get() {
        return e.modelValue;
      },
      set(l) {
        s("update:modelValue", l);
      }
    }), _ = b(() => {
      var p;
      if (!o.value)
        return e.placeholder;
      const l = (p = e.values) == null ? void 0 : p.find((a) => {
        if (typeof a == "object" && (a != null && a[e.valueKey]))
          return e.valueKey ? a == null ? void 0 : a[e.valueKey] : a === o.value;
      });
      return e.titleKey ? l == null ? void 0 : l[e.titleKey] : l || o.value;
    });
    function r() {
      e != null && e.disabled || (n.value = !n.value);
    }
    function c() {
      n.value = !1;
    }
    function v(l) {
      o.value = l, n.value = !1;
    }
    return (l, p) => {
      var m;
      const a = A("click-outside");
      return i(), d("div", ze, [
        I((i(), d("div", {
          class: M(["select__activator", {
            active: n.value,
            disabled: l.disabled
          }]),
          onClick: r
        }, [
          h("span", Ae, $(_.value), 1),
          h("span", {
            class: M(["select__activator__icon", {
              rotate: n.value
            }])
          }, [
            V(C, { icon: "mdi-chevron-down" })
          ], 2)
        ], 2)), [
          [a, c]
        ]),
        I(h("div", Ee, [
          (i(!0), d(S, null, L(l.values, (f, B) => (i(), d("div", {
            key: B,
            class: M(["select__menu__item", {
              active: l.valueKey ? f[l.valueKey] === o.value : f === o.value
            }]),
            onClick: (ht) => v(l.valueKey ? f[l.valueKey] : f)
          }, [
            h("span", null, $(l.titleKey ? f[l.titleKey] : f), 1)
          ], 10, Ue))), 128)),
          (m = l.values) != null && m.length ? k("", !0) : (i(), d("div", He, $(l.noDataText), 1))
        ], 512), [
          [P, n.value]
        ])
      ]);
    };
  }
}), Oe = {
  name: "MTag"
}, Ct = /* @__PURE__ */ y({
  ...Oe,
  props: {
    type: { default: "default" },
    size: { default: "default" },
    closable: { type: Boolean },
    round: { type: Boolean }
  },
  setup(u) {
    const t = u, e = b(() => `m-tag__${t.type}`);
    return (s, n) => (i(), d("span", {
      class: M(["m-tag", [
        s.size,
        e.value,
        {
          round: s.round
        }
      ]])
    }, [
      g(s.$slots, "default")
    ], 2));
  }
}), Re = ["onClick"], We = {
  key: 0,
  class: "child"
}, Ze = {
  name: "MTree"
}, wt = /* @__PURE__ */ y({
  ...Ze,
  props: {
    data: {},
    load: { type: Boolean },
    showCheckbox: { type: Boolean }
  },
  emits: ["node-click"],
  setup(u, { emit: t }) {
    const e = u, s = t, n = T([]);
    function o(r, c, v) {
      if (!r) {
        _(c);
        return;
      }
      n.value[v].collapse = !n.value[v].collapse;
    }
    function _(r) {
      s("node-click", r);
    }
    return G(() => {
      n.value = e.data.map((r) => ({
        ...r,
        collapse: !1
      }));
    }), (r, c) => {
      const v = J("MTree");
      return i(!0), d(S, null, L(n.value, (l, p) => {
        var a, m;
        return i(), d("div", { key: p }, [
          h("div", {
            class: "tree-item",
            onClick: (f) => {
              var B;
              return o(!!((B = l.children) != null && B.length), l.id || l.label, p);
            }
          }, [
            w($(l.label) + " ", 1),
            (a = l.children) != null && a.length ? (i(), D(C, {
              key: 0,
              icon: "mdi-chevron-right",
              class: M(["tree-item__icon", {
                opened: l.collapse
              }])
            }, null, 8, ["class"])) : k("", !0)
          ], 8, Re),
          (m = l.children) != null && m.length ? I((i(), d("div", We, [
            V(v, {
              data: l.children || [],
              onNodeClick: c[0] || (c[0] = (f) => s("node-click", f))
            }, null, 8, ["data"])
          ], 512)), [
            [P, l == null ? void 0 : l.collapse]
          ]) : k("", !0)
        ]);
      }), 128);
    };
  }
});
function K(u) {
  const [t, e] = u.split(":").map(Number);
  return t * 60 + e;
}
function Ge(u) {
  const t = Math.floor(u / 60), e = u % 60;
  return `${t.toString().padStart(2, "0")}:${e.toString().padStart(2, "0")}`;
}
const Je = {
  name: "MTimeSelect"
}, Dt = /* @__PURE__ */ y({
  ...Je,
  props: {
    disabled: { type: Boolean },
    clearable: { type: Boolean },
    placeholder: {},
    start: { default: "09:00" },
    end: { default: "18:00" },
    step: { default: "00:30" },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(u, { emit: t }) {
    const e = u, s = t, n = b({
      get() {
        return e.modelValue;
      },
      set(_) {
        s("update:modelValue", _);
      }
    }), o = b(() => {
      if (e.start >= e.end) throw new Error("Начальное время должно быть меньше конечного");
      const _ = K(e.step), r = K(e.start), c = K(e.end), v = [];
      let l = r;
      for (; l <= c; )
        v.push(Ge(l)), l += _;
      return v;
    });
    return (_, r) => (i(), D(je, {
      modelValue: n.value,
      "onUpdate:modelValue": r[0] || (r[0] = (c) => n.value = c),
      values: o.value,
      disabled: _.disabled,
      placeholder: _.placeholder,
      "value-key": null,
      "title-key": null
    }, null, 8, ["modelValue", "values", "disabled", "placeholder"]));
  }
}), Qe = { class: "transfer-panel" }, Xe = { class: "transfer-panel__header" }, Ye = { class: "transfer-panel__header__left" }, xe = { class: "transfer-panel__header__left__label" }, et = ["checked", "disabled"], tt = { class: "transfer-panel__header__right" }, lt = { class: "transfer-panel__input" }, at = { class: "transfer-panel__list" }, st = { class: "transfer-panel__list__item__label" }, nt = ["value"], ot = {
  name: "MDataTransferPanel"
}, z = /* @__PURE__ */ y({
  ...ot,
  props: {
    activeItems: {},
    titlePanel: {},
    items: {},
    filterPlaceholder: { default: "Ввести" },
    filterable: { type: Boolean },
    leftTitle: { default: "Не выбранные" },
    leftButtonText: {},
    rightButtonText: {},
    rightTitle: { default: "Выбранные" },
    itemValue: { default: "value" },
    itemTitle: { default: "title" }
  },
  emits: ["update:activeItems"],
  setup(u, { emit: t }) {
    const e = u, s = t, n = T(""), o = b({
      get() {
        return e.activeItems;
      },
      set(p) {
        s("update:activeItems", p || []);
      }
    }), _ = b(() => n.value ? e.items.filter(
      (p) => p[e.itemTitle].toLowerCase().includes(n.value.toLowerCase())
    ) : e.items), r = b(() => e.items.length), c = b(() => {
      var p;
      return (p = e.activeItems) == null ? void 0 : p.length;
    }), v = b(
      () => r.value === c.value && r.value !== 0
    );
    function l() {
      if (v.value) {
        o.value = [];
        return;
      }
      o.value = e.items.map((p) => p[e.itemValue]);
    }
    return (p, a) => (i(), d("div", Qe, [
      h("div", Xe, [
        h("div", Ye, [
          h("label", xe, [
            h("input", {
              type: "checkbox",
              checked: v.value,
              disabled: r.value === 0,
              onClick: l
            }, null, 8, et),
            w(" " + $(p.titlePanel), 1)
          ])
        ]),
        h("div", tt, $(c.value) + "/" + $(r.value), 1)
      ]),
      h("div", lt, [
        p.filterable ? (i(), D(Q(de), {
          key: 0,
          modelValue: n.value,
          "onUpdate:modelValue": a[0] || (a[0] = (m) => n.value = m),
          class: "transfer-panel__input__element",
          clearable: "",
          placeholder: p.filterPlaceholder
        }, null, 8, ["modelValue", "placeholder"])) : k("", !0)
      ]),
      h("div", at, [
        (i(!0), d(S, null, L(_.value, (m, f) => (i(), d("div", {
          key: f,
          class: "transfer-panel__list__item"
        }, [
          h("label", st, [
            I(h("input", {
              "onUpdate:modelValue": a[1] || (a[1] = (B) => o.value = B),
              value: m[p.itemValue],
              type: "checkbox"
            }, null, 8, nt), [
              [X, o.value]
            ]),
            w(" " + $(m[p.itemTitle]), 1)
          ])
        ]))), 128))
      ])
    ]));
  }
}), it = { class: "transfer" }, ut = { class: "transfer__buttons" }, rt = {
  name: "MDataTransfer"
}, St = /* @__PURE__ */ y({
  ...rt,
  props: {
    modelValue: {},
    items: {},
    filterPlaceholder: { default: "Ввести" },
    filterable: { type: Boolean },
    leftTitle: { default: "Не выбранные" },
    leftButtonText: {},
    rightButtonText: {},
    rightTitle: { default: "Выбранные" },
    itemValue: { default: "value" },
    itemTitle: { default: "title" }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: t }) {
    const e = u, s = t, n = T([]), o = T([]), _ = b(() => n.value.length), r = b(() => o.value.length), c = b(
      () => e.items.filter((a) => e.modelValue.includes(a[e.itemValue]))
    ), v = b(() => e.items.filter((a) => !e.modelValue.includes(a[e.itemValue])));
    function l() {
      s("update:modelValue", [...e.modelValue, ...n.value]), n.value = [];
    }
    function p() {
      const a = e.modelValue.filter((m) => !o.value.includes(m));
      s("update:modelValue", a), o.value = [];
    }
    return (a, m) => (i(), d("div", it, [
      V(z, {
        "active-items": n.value,
        "onUpdate:activeItems": m[0] || (m[0] = (f) => n.value = f),
        "filter-placeholder": e.filterPlaceholder,
        "title-panel": a.leftTitle,
        "left-button-text": a.leftButtonText,
        filterable: a.filterable,
        "item-value": a.itemValue,
        "item-title": a.itemTitle,
        items: v.value
      }, null, 8, ["active-items", "filter-placeholder", "title-panel", "left-button-text", "filterable", "item-value", "item-title", "items"]),
      h("div", ut, [
        V(F, {
          type: "primary",
          class: "transfer__buttons__button",
          disabled: !r.value,
          onClick: p
        }, {
          default: N(() => [
            V(C, { icon: "mdi-chevron-left" }),
            w(" " + $(a.leftButtonText), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        V(F, {
          type: "primary",
          class: "transfer__buttons__button",
          disabled: !_.value,
          onClick: l
        }, {
          default: N(() => [
            w($(a.rightButtonText) + " ", 1),
            V(C, { icon: "mdi-chevron-right" })
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      V(z, {
        "active-items": o.value,
        "onUpdate:activeItems": m[1] || (m[1] = (f) => o.value = f),
        "filter-placeholder": e.filterPlaceholder,
        "title-panel": a.rightTitle,
        "left-button-text": a.leftButtonText,
        filterable: a.filterable,
        "item-value": a.itemValue,
        "item-title": a.itemTitle,
        items: c.value
      }, null, 8, ["active-items", "filter-placeholder", "title-panel", "left-button-text", "filterable", "item-value", "item-title", "items"])
    ]));
  }
}), dt = { class: "tabs" }, ct = { class: "tabs__header" }, pt = ["onClick"], mt = { class: "tabs__content" }, _t = {
  name: "MTabs"
}, Lt = /* @__PURE__ */ y({
  ..._t,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue", "tab-click"],
  setup(u, { emit: t }) {
    const e = u, s = t, n = Y(), o = T(e.modelValue), _ = T([]);
    function r() {
      var p;
      return (((p = n.default) == null ? void 0 : p.call(n)) || []).filter((a) => {
        var m;
        return ((m = a.type) == null ? void 0 : m.name) === "MTab";
      }).map((a) => {
        var m;
        return (m = a.props) == null ? void 0 : m.title;
      });
    }
    function c() {
      _.value = r();
    }
    function v(l) {
      o.value = l, s("update:modelValue", l);
    }
    return E(c), x(() => {
      var l;
      return (l = n.default) == null ? void 0 : l.call(n);
    }, c), (l, p) => (i(), d("div", dt, [
      h("div", ct, [
        (i(!0), d(S, null, L(_.value, (a, m) => (i(), d("div", {
          key: m,
          class: M(["tabs__header__item", { active: m === o.value }]),
          onClick: (f) => v(m)
        }, $(a), 11, pt))), 128))
      ]),
      h("div", mt, [
        g(l.$slots, "default", { activeIndex: o.value })
      ])
    ]));
  }
}), ft = { class: "tabs__content__item" }, vt = {
  name: "MTab"
}, Kt = /* @__PURE__ */ y({
  ...vt,
  props: {
    activeIndex: {},
    index: {},
    title: {}
  },
  setup(u) {
    const t = u, e = b(() => t.index === t.activeIndex);
    return (s, n) => I((i(), d("div", ft, [
      g(s.$slots, "default")
    ], 512)), [
      [P, e.value]
    ]);
  }
});
export {
  gt as MBadge,
  F as MButton,
  Bt as MCard,
  It as MCollapse,
  St as MDataTransfer,
  Mt as MDropdown,
  Vt as MDropdownMenu,
  Tt as MDropdownMenuItem,
  C as MIcon,
  de as MInput,
  kt as MInputNumber,
  $t as MLink,
  yt as MNotify,
  je as MSelect,
  Kt as MTab,
  Lt as MTabs,
  Ct as MTag,
  Dt as MTimeSelect,
  wt as MTree
};
//# sourceMappingURL=index.js.map
