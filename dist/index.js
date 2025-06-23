import { defineComponent as y, computed as b, createElementBlock as r, openBlock as i, normalizeClass as V, renderSlot as g, createElementVNode as h, toDisplayString as $, ref as T, withDirectives as I, createCommentVNode as k, vModelDynamic as U, createVNode as M, vModelText as H, resolveDirective as z, normalizeStyle as q, onMounted as A, reactive as j, createBlock as N, normalizeProps as O, guardReactiveProps as R, Teleport as W, Transition as Z, withCtx as S, Fragment as D, renderList as L, vShow as P, onBeforeMount as G, resolveComponent as J, createTextVNode as C, unref as Q, vModelCheckbox as X, useSlots as Y, watch as x } from "vue";
const ee = ["disabled"], te = {
  name: "MButton"
}, E = /* @__PURE__ */ y({
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
    return (a, n) => (i(), r("button", {
      class: V(["m-button", [
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
      g(a.$slots, "default")
    ], 10, ee));
  }
}), le = ["id"], ae = { class: "notify-container__title" }, se = { class: "notify-container__body" }, kt = /* @__PURE__ */ y({
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
    return (t, e) => (i(), r("div", {
      id: t.id,
      class: "notify-container"
    }, [
      h("div", ae, $(t.title), 1),
      h("div", se, $(t.message), 1)
    ], 8, le));
  }
}), ne = ["href", "target"], oe = {
  name: "MLink"
}, ie = /* @__PURE__ */ y({
  ...oe,
  props: {
    type: { default: "default" },
    underline: { type: Boolean },
    disabled: { type: Boolean },
    target: { default: "_self" },
    href: {}
  },
  setup(u) {
    return (t, e) => t.disabled ? (i(), r("span", {
      key: 1,
      class: V(["m-link", [
        {
          "m-link__disabled": t.disabled,
          "m-link__underline": t.underline
        },
        t.type
      ]])
    }, [
      g(t.$slots, "default")
    ], 2)) : (i(), r("a", {
      key: 0,
      class: V(["m-link", [
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
}), ue = {
  name: "MIcon"
}, w = /* @__PURE__ */ y({
  ...ue,
  props: {
    icon: {}
  },
  setup(u) {
    return (t, e) => (i(), r("i", {
      class: V(`mdi ${t.icon}`)
    }, null, 2));
  }
}), re = ["type", "disabled", "placeholder", "autocomplete"], de = {
  name: "MInput"
}, ce = /* @__PURE__ */ y({
  ...de,
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
    function a(d) {
      const c = d.target;
      o.maxLength && (c == null ? void 0 : c.value.length) > o.maxLength && (n.value = n.value.substring(0, o.maxLength));
    }
    const n = b({
      get() {
        return o.modelValue;
      },
      set(d) {
        _("update:modelValue", d);
      }
    }), o = u, _ = t;
    return (d, c) => (i(), r("div", {
      class: V(["m-input", {
        "is-focus": e.value,
        disabled: d.disabled
      }])
    }, [
      I(h("input", {
        "onUpdate:modelValue": c[0] || (c[0] = (v) => n.value = v),
        type: d.type,
        disabled: d.disabled,
        placeholder: d.placeholder,
        autocomplete: d.autocomplete,
        onFocus: c[1] || (c[1] = (v) => e.value = !0),
        onBlur: c[2] || (c[2] = (v) => e.value = !1),
        onInput: a
      }, null, 40, re), [
        [U, n.value]
      ]),
      d.clearable && n.value ? (i(), r("button", {
        key: 0,
        class: "m-input__clear",
        onClick: c[3] || (c[3] = (v) => n.value = "")
      }, [
        M(w, { icon: "mdi-close" })
      ])) : k("", !0)
    ], 2));
  }
}), pe = { class: "m-badge-wrap" }, me = { key: 0 }, _e = {
  name: "MBadge"
}, Mt = /* @__PURE__ */ y({
  ..._e,
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
    return (a, n) => (i(), r("div", pe, [
      g(a.$slots, "default"),
      a.hidden ? k("", !0) : (i(), r("div", {
        key: 0,
        class: V(["m-badge-wrap__item", [
          {
            "is-dot": a.value === void 0 || a.isDot
          },
          a.type
        ]])
      }, [
        a.value !== void 0 && !a.isDot ? (i(), r("span", me, $(t.value), 1)) : k("", !0)
      ], 2))
    ]));
  }
}), fe = { class: "m-input-number" }, ve = ["disabled"], he = ["disabled"], be = ["disabled"], ye = {
  name: "MInputNumber"
}, Vt = /* @__PURE__ */ y({
  ...ye,
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
        return String(a.modelValue);
      },
      set(l) {
        n("update:modelValue", Number(l));
      }
    }), a = u, n = t;
    function o(l) {
      l === "+" ? a.max !== parseInt(e.value, 10) && _(parseInt(e.value, 10) + a.steps) : l === "-" && a.min !== parseInt(e.value, 10) && _(parseInt(e.value, 10) - a.steps);
    }
    function _(l) {
      (l || l === 0) && (e.value = l + ""), n("update:modelValue", l);
    }
    function d() {
      e.value = e.value.replace(/[^0-9]/gi, ""), parseInt(e.value, 10) >= a.max && (e.value = a.max + ""), parseInt(e.value, 10) <= a.min && (e.value = a.min + "");
    }
    const c = b(() => parseInt(e.value, 10) === a.min), v = b(() => parseInt(e.value, 10) === a.max);
    return (l, p) => (i(), r("div", fe, [
      h("button", {
        class: "m-input-number__button-left",
        disabled: c.value || l.disabled,
        onClick: p[0] || (p[0] = (s) => o("-"))
      }, [
        M(w, { icon: "mdi-minus" })
      ], 8, ve),
      I(h("input", {
        "onUpdate:modelValue": p[1] || (p[1] = (s) => e.value = s),
        type: "text",
        disabled: l.disabled,
        class: "m-input-number__input",
        onBlur: d
      }, null, 40, he), [
        [H, e.value]
      ]),
      h("button", {
        class: "m-input-number__button-right",
        disabled: v.value || l.disabled,
        onClick: p[2] || (p[2] = (s) => o("+"))
      }, [
        M(w, { icon: "mdi-plus" })
      ], 8, be)
    ]));
  }
}), $e = { class: "m-dropdown" }, ge = {
  name: "MDropdown"
}, Tt = /* @__PURE__ */ y({
  ...ge,
  props: {
    maxHeight: {},
    disabled: { type: Boolean },
    trigger: {}
  },
  setup(u, { expose: t }) {
    const e = T(!1);
    function a() {
      e.value = !e.value;
    }
    function n() {
      e.value = !1;
    }
    t({
      toggleMenu: a
    });
    const o = {
      onClick: a
    };
    return (_, d) => {
      const c = z("click-outside");
      return i(), r("div", $e, [
        g(_.$slots, "default", { props: o }),
        e.value ? I((i(), r("div", {
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
}), ke = {
  name: "MDropdownMenu"
}, Me = (u, t) => {
  const e = u.__vccOpts || u;
  for (const [a, n] of t)
    e[a] = n;
  return e;
}, Ve = { class: "m-dropdown-menu" };
function Te(u, t, e, a, n, o) {
  return i(), r("div", Ve, [
    g(u.$slots, "default")
  ]);
}
const Bt = /* @__PURE__ */ Me(ke, [["render", Te]]), Be = {
  name: "MDropdownMenuItem"
}, It = /* @__PURE__ */ y({
  ...Be,
  props: {
    disabled: { type: Boolean }
  },
  setup(u) {
    return (t, e) => (i(), r("div", {
      class: V(["m-dropdown-menu-item", {
        disabled: t.disabled
      }])
    }, [
      g(t.$slots, "default")
    ], 2));
  }
}), Ie = { class: "m-card" }, Ce = {
  key: 0,
  class: "m-card__header"
}, we = { key: 0 }, De = { class: "m-card__body" }, Le = {
  key: 1,
  class: "m-card__footer"
}, Se = { key: 0 }, Ne = {
  name: "MCard"
}, Ct = /* @__PURE__ */ y({
  ...Ne,
  props: {
    header: {},
    footer: {}
  },
  setup(u) {
    return (t, e) => (i(), r("div", Ie, [
      t.$slots.header || t.header ? (i(), r("div", Ce, [
        g(t.$slots, "header", {}, () => [
          t.header ? (i(), r("span", we, $(t.header), 1)) : k("", !0)
        ])
      ])) : k("", !0),
      h("div", De, [
        g(t.$slots, "default")
      ]),
      t.$slots.footer || t.footer ? (i(), r("div", Le, [
        g(t.$slots, "footer", {}, () => [
          t.footer ? (i(), r("span", Se, $(t.footer), 1)) : k("", !0)
        ])
      ])) : k("", !0)
    ]));
  }
}), Ke = { class: "m-collapse" }, Pe = { class: "m-activator" }, Ee = { key: 0 }, Fe = {
  name: "MCollapse"
}, wt = /* @__PURE__ */ y({
  ...Fe,
  props: {
    toTeleport: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(u, { expose: t, emit: e }) {
    const a = u, n = e, o = T(!1), _ = T(!1);
    A(() => {
      o.value = a.modelValue, _.value = !0;
    });
    const d = () => {
      o.value = !o.value, n("update:modelValue", o.value);
    };
    t({
      toggleCollapse: d
    });
    const c = j({
      toggleCollapse: d,
      isExpand: o
    }), v = (s) => {
      const m = s;
      m.style.height = "0", m.style.opacity = "0", m.style.overflow = "hidden";
    }, l = (s, m) => {
      const f = s, B = f.scrollHeight;
      requestAnimationFrame(() => {
        f.style.transition = "height 0.3s ease, opacity 0.3s ease", f.style.height = `${B}px`, f.style.opacity = "1", setTimeout(() => {
          f.style.height = "auto", m();
        }, 300);
      });
    }, p = (s, m) => {
      const f = s, B = f.scrollHeight;
      f.style.height = `${B}px`, f.style.opacity = "1", requestAnimationFrame(() => {
        f.style.transition = "height 0.3s ease, opacity 0.3s ease", requestAnimationFrame(() => {
          f.style.height = "0", f.style.opacity = "0", setTimeout(m, 300);
        });
      });
    };
    return (s, m) => (i(), r("div", Ke, [
      h("div", Pe, [
        g(s.$slots, "default", O(R(c)))
      ]),
      _.value ? (i(), N(W, {
        key: 0,
        disabled: !s.toTeleport,
        to: s.toTeleport
      }, [
        M(Z, {
          onBeforeEnter: v,
          onEnter: l,
          onLeave: p
        }, {
          default: S(() => [
            o.value ? (i(), r("div", Ee, [
              g(s.$slots, "expand")
            ])) : k("", !0)
          ]),
          _: 3
        })
      ], 8, ["disabled", "to"])) : k("", !0)
    ]));
  }
}), ze = { class: "select" }, Ae = { class: "select__activator__text" }, Ue = { class: "select__menu" }, He = ["onClick"], qe = { key: 0 }, je = {
  name: "MSelect"
}, Oe = /* @__PURE__ */ y({
  ...je,
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
    const e = u, a = t, n = T(!1), o = b({
      get() {
        return e.modelValue;
      },
      set(l) {
        a("update:modelValue", l);
      }
    }), _ = b(() => {
      var p;
      if (!o.value)
        return e.placeholder;
      const l = (p = e.values) == null ? void 0 : p.find((s) => {
        if (typeof s == "object" && (s != null && s[e.valueKey]))
          return e.valueKey ? s == null ? void 0 : s[e.valueKey] : s === o.value;
      });
      return e.titleKey ? l == null ? void 0 : l[e.titleKey] : l || o.value;
    });
    function d() {
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
      const s = z("click-outside");
      return i(), r("div", ze, [
        I((i(), r("div", {
          class: V(["select__activator", {
            active: n.value,
            disabled: l.disabled
          }]),
          onClick: d
        }, [
          h("span", Ae, $(_.value), 1),
          h("span", {
            class: V(["select__activator__icon", {
              rotate: n.value
            }])
          }, [
            M(w, { icon: "mdi-chevron-down" })
          ], 2)
        ], 2)), [
          [s, c]
        ]),
        I(h("div", Ue, [
          (i(!0), r(D, null, L(l.values, (f, B) => (i(), r("div", {
            key: B,
            class: V(["select__menu__item", {
              active: l.valueKey ? f[l.valueKey] === o.value : f === o.value
            }]),
            onClick: ($t) => v(l.valueKey ? f[l.valueKey] : f)
          }, [
            h("span", null, $(l.titleKey ? f[l.titleKey] : f), 1)
          ], 10, He))), 128)),
          (m = l.values) != null && m.length ? k("", !0) : (i(), r("div", qe, $(l.noDataText), 1))
        ], 512), [
          [P, n.value]
        ])
      ]);
    };
  }
}), Re = {
  name: "MTag"
}, Dt = /* @__PURE__ */ y({
  ...Re,
  props: {
    type: { default: "default" },
    size: { default: "default" },
    closable: { type: Boolean },
    round: { type: Boolean }
  },
  setup(u) {
    const t = u, e = b(() => `m-tag__${t.type}`);
    return (a, n) => (i(), r("span", {
      class: V(["m-tag", [
        a.size,
        e.value,
        {
          round: a.round
        }
      ]])
    }, [
      g(a.$slots, "default")
    ], 2));
  }
}), We = ["onClick"], Ze = {
  key: 0,
  class: "child"
}, Ge = {
  name: "MTree"
}, Lt = /* @__PURE__ */ y({
  ...Ge,
  props: {
    data: {},
    load: { type: Boolean },
    showCheckbox: { type: Boolean }
  },
  emits: ["node-click"],
  setup(u, { emit: t }) {
    const e = u, a = t, n = T([]);
    function o(d, c, v) {
      if (!d) {
        _(c);
        return;
      }
      n.value[v].collapse = !n.value[v].collapse;
    }
    function _(d) {
      a("node-click", d);
    }
    return G(() => {
      n.value = e.data.map((d) => ({
        ...d,
        collapse: !1
      }));
    }), (d, c) => {
      const v = J("MTree", !0);
      return i(!0), r(D, null, L(n.value, (l, p) => {
        var s, m;
        return i(), r("div", { key: p }, [
          h("div", {
            class: "tree-item",
            onClick: (f) => {
              var B;
              return o(!!((B = l.children) != null && B.length), l.id || l.label, p);
            }
          }, [
            C($(l.label) + " ", 1),
            (s = l.children) != null && s.length ? (i(), N(w, {
              key: 0,
              icon: "mdi-chevron-right",
              class: V(["tree-item__icon", {
                opened: l.collapse
              }])
            }, null, 8, ["class"])) : k("", !0)
          ], 8, We),
          (m = l.children) != null && m.length ? I((i(), r("div", Ze, [
            M(v, {
              data: l.children || [],
              onNodeClick: c[0] || (c[0] = (f) => a("node-click", f))
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
function Je(u) {
  const t = Math.floor(u / 60), e = u % 60;
  return `${t.toString().padStart(2, "0")}:${e.toString().padStart(2, "0")}`;
}
const Qe = {
  name: "MTimeSelect"
}, St = /* @__PURE__ */ y({
  ...Qe,
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
    const e = u, a = t, n = b({
      get() {
        return e.modelValue;
      },
      set(_) {
        a("update:modelValue", _);
      }
    }), o = b(() => {
      if (e.start >= e.end) throw new Error("Начальное время должно быть меньше конечного");
      const _ = K(e.step), d = K(e.start), c = K(e.end), v = [];
      let l = d;
      for (; l <= c; )
        v.push(Je(l)), l += _;
      return v;
    });
    return (_, d) => (i(), N(Oe, {
      modelValue: n.value,
      "onUpdate:modelValue": d[0] || (d[0] = (c) => n.value = c),
      values: o.value,
      disabled: _.disabled,
      placeholder: _.placeholder,
      "value-key": null,
      "title-key": null
    }, null, 8, ["modelValue", "values", "disabled", "placeholder"]));
  }
}), Xe = { class: "transfer-panel" }, Ye = { class: "transfer-panel__header" }, xe = { class: "transfer-panel__header__left" }, et = { class: "transfer-panel__header__left__label" }, tt = ["checked", "disabled"], lt = { class: "transfer-panel__header__right" }, at = { class: "transfer-panel__input" }, st = { class: "transfer-panel__list" }, nt = { class: "transfer-panel__list__item__label" }, ot = ["value"], it = {
  name: "MDataTransferPanel"
}, F = /* @__PURE__ */ y({
  ...it,
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
    const e = u, a = t, n = T(""), o = b({
      get() {
        return e.activeItems;
      },
      set(p) {
        a("update:activeItems", p || []);
      }
    }), _ = b(() => n.value ? e.items.filter(
      (p) => p[e.itemTitle].toLowerCase().includes(n.value.toLowerCase())
    ) : e.items), d = b(() => e.items.length), c = b(() => {
      var p;
      return (p = e.activeItems) == null ? void 0 : p.length;
    }), v = b(
      () => d.value === c.value && d.value !== 0
    );
    function l() {
      if (v.value) {
        o.value = [];
        return;
      }
      o.value = e.items.map((p) => p[e.itemValue]);
    }
    return (p, s) => (i(), r("div", Xe, [
      h("div", Ye, [
        h("div", xe, [
          h("label", et, [
            h("input", {
              type: "checkbox",
              checked: v.value,
              disabled: d.value === 0,
              onClick: l
            }, null, 8, tt),
            C(" " + $(p.titlePanel), 1)
          ])
        ]),
        h("div", lt, $(c.value) + "/" + $(d.value), 1)
      ]),
      h("div", at, [
        p.filterable ? (i(), N(Q(ce), {
          key: 0,
          modelValue: n.value,
          "onUpdate:modelValue": s[0] || (s[0] = (m) => n.value = m),
          class: "transfer-panel__input__element",
          clearable: "",
          placeholder: p.filterPlaceholder
        }, null, 8, ["modelValue", "placeholder"])) : k("", !0)
      ]),
      h("div", st, [
        (i(!0), r(D, null, L(_.value, (m, f) => (i(), r("div", {
          key: f,
          class: "transfer-panel__list__item"
        }, [
          h("label", nt, [
            I(h("input", {
              "onUpdate:modelValue": s[1] || (s[1] = (B) => o.value = B),
              value: m[p.itemValue],
              type: "checkbox"
            }, null, 8, ot), [
              [X, o.value]
            ]),
            C(" " + $(m[p.itemTitle]), 1)
          ])
        ]))), 128))
      ])
    ]));
  }
}), ut = { class: "transfer" }, rt = { class: "transfer__buttons" }, dt = {
  name: "MDataTransfer"
}, Nt = /* @__PURE__ */ y({
  ...dt,
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
    const e = u, a = t, n = T([]), o = T([]), _ = b(() => n.value.length), d = b(() => o.value.length), c = b(
      () => e.items.filter((s) => e.modelValue.includes(s[e.itemValue]))
    ), v = b(() => e.items.filter((s) => !e.modelValue.includes(s[e.itemValue])));
    function l() {
      a("update:modelValue", [...e.modelValue, ...n.value]), n.value = [];
    }
    function p() {
      const s = e.modelValue.filter((m) => !o.value.includes(m));
      a("update:modelValue", s), o.value = [];
    }
    return (s, m) => (i(), r("div", ut, [
      M(F, {
        "active-items": n.value,
        "onUpdate:activeItems": m[0] || (m[0] = (f) => n.value = f),
        "filter-placeholder": e.filterPlaceholder,
        "title-panel": s.leftTitle,
        "left-button-text": s.leftButtonText,
        filterable: s.filterable,
        "item-value": s.itemValue,
        "item-title": s.itemTitle,
        items: v.value
      }, null, 8, ["active-items", "filter-placeholder", "title-panel", "left-button-text", "filterable", "item-value", "item-title", "items"]),
      h("div", rt, [
        M(E, {
          type: "primary",
          class: "transfer__buttons__button",
          disabled: !d.value,
          onClick: p
        }, {
          default: S(() => [
            M(w, { icon: "mdi-chevron-left" }),
            C(" " + $(s.leftButtonText), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        M(E, {
          type: "primary",
          class: "transfer__buttons__button",
          disabled: !_.value,
          onClick: l
        }, {
          default: S(() => [
            C($(s.rightButtonText) + " ", 1),
            M(w, { icon: "mdi-chevron-right" })
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      M(F, {
        "active-items": o.value,
        "onUpdate:activeItems": m[1] || (m[1] = (f) => o.value = f),
        "filter-placeholder": e.filterPlaceholder,
        "title-panel": s.rightTitle,
        "left-button-text": s.leftButtonText,
        filterable: s.filterable,
        "item-value": s.itemValue,
        "item-title": s.itemTitle,
        items: c.value
      }, null, 8, ["active-items", "filter-placeholder", "title-panel", "left-button-text", "filterable", "item-value", "item-title", "items"])
    ]));
  }
}), ct = { class: "tabs" }, pt = { class: "tabs__header" }, mt = ["onClick"], _t = { class: "tabs__content" }, ft = {
  name: "MTabs"
}, Kt = /* @__PURE__ */ y({
  ...ft,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue", "tab-click"],
  setup(u, { emit: t }) {
    const e = u, a = t, n = Y(), o = T(e.modelValue), _ = T([]);
    function d() {
      var p;
      return (((p = n.default) == null ? void 0 : p.call(n)) || []).filter((s) => {
        var m;
        return ((m = s.type) == null ? void 0 : m.name) === "MTab";
      }).map((s) => {
        var m;
        return (m = s.props) == null ? void 0 : m.title;
      });
    }
    function c() {
      _.value = d();
    }
    function v(l) {
      o.value = l, a("update:modelValue", l);
    }
    return A(c), x(() => {
      var l;
      return (l = n.default) == null ? void 0 : l.call(n);
    }, c), (l, p) => (i(), r("div", ct, [
      h("div", pt, [
        (i(!0), r(D, null, L(_.value, (s, m) => (i(), r("div", {
          key: m,
          class: V(["tabs__header__item", { active: m === o.value }]),
          onClick: (f) => v(m)
        }, $(s), 11, mt))), 128))
      ]),
      h("div", _t, [
        g(l.$slots, "default", { activeIndex: o.value })
      ])
    ]));
  }
}), vt = { class: "tabs__content__item" }, ht = {
  name: "MTab"
}, Pt = /* @__PURE__ */ y({
  ...ht,
  props: {
    activeIndex: {},
    index: {},
    title: {}
  },
  setup(u) {
    const t = u, e = b(() => t.index === t.activeIndex);
    return (a, n) => I((i(), r("div", vt, [
      g(a.$slots, "default")
    ], 512)), [
      [P, e.value]
    ]);
  }
}), bt = { class: "m-breadcrumbs" }, yt = {
  name: "MBreadcrumbs"
}, Et = /* @__PURE__ */ y({
  ...yt,
  props: {
    items: {},
    separator: { default: "/" }
  },
  setup(u) {
    const t = u;
    function e(a) {
      return t.items.length - 1 === a;
    }
    return (a, n) => (i(), r("div", bt, [
      (i(!0), r(D, null, L(a.items, (o, _) => (i(), r("div", {
        key: _,
        class: "m-breadcrumbs__item"
      }, [
        M(ie, {
          class: "m-breadcrumbs__item__link",
          href: o.href,
          type: "primary",
          disabled: o.disabled || e(_),
          underline: ""
        }, {
          default: S(() => [
            g(a.$slots, "prepend"),
            C(" " + $(o.title), 1)
          ]),
          _: 2
        }, 1032, ["href", "disabled"]),
        e(_) ? k("", !0) : g(a.$slots, "separator", { key: 0 }, () => [
          C($(a.separator), 1)
        ])
      ]))), 128))
    ]));
  }
});
export {
  Mt as MBadge,
  Et as MBreadcrumbs,
  E as MButton,
  Ct as MCard,
  wt as MCollapse,
  Nt as MDataTransfer,
  Tt as MDropdown,
  Bt as MDropdownMenu,
  It as MDropdownMenuItem,
  w as MIcon,
  ce as MInput,
  Vt as MInputNumber,
  ie as MLink,
  kt as MNotify,
  Oe as MSelect,
  Pt as MTab,
  Kt as MTabs,
  Dt as MTag,
  St as MTimeSelect,
  Lt as MTree
};
//# sourceMappingURL=index.js.map
