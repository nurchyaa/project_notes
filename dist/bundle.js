(() => {
    var t = {
        187: () => {
          function t(e) {
            return (
              (t =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    }),
              t(e)
            );
          }
          function e(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(t, c(o.key), o);
            }
          }
          function n(t) {
            var e = "function" == typeof Map ? new Map() : void 0;
            return (
              (n = function (t) {
                if (
                  null === t ||
                  !(function (t) {
                    try {
                      return (
                        -1 !== Function.toString.call(t).indexOf("[native code]")
                      );
                    } catch (e) {
                      return "function" == typeof t;
                    }
                  })(t)
                )
                  return t;
                if ("function" != typeof t)
                  throw new TypeError(
                    "Super expression must either be null or a function",
                  );
                if (void 0 !== e) {
                  if (e.has(t)) return e.get(t);
                  e.set(t, n);
                }
                function n() {
                  return (function (t, e, n) {
                    if (o()) return Reflect.construct.apply(null, arguments);
                    var i = [null];
                    i.push.apply(i, e);
                    var a = new (t.bind.apply(t, i))();
                    return n && r(a, n.prototype), a;
                  })(t, arguments, i(this).constructor);
                }
                return (
                  (n.prototype = Object.create(t.prototype, {
                    constructor: {
                      value: n,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  r(n, t)
                );
              }),
              n(t)
            );
          }
          function o() {
            try {
              var t = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              );
            } catch (t) {}
            return (o = function () {
              return !!t;
            })();
          }
          function r(t, e) {
            return (
              (r = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                    return (t.__proto__ = e), t;
                  }),
              r(t, e)
            );
          }
          function i(t) {
            return (
              (i = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  }),
              i(t)
            );
          }
          function a(t, e, n) {
            return (
              (e = c(e)) in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n),
              t
            );
          }
          function c(e) {
            var n = (function (e, n) {
              if ("object" != t(e) || !e) return e;
              var o = e[Symbol.toPrimitive];
              if (void 0 !== o) {
                var r = o.call(e, "string");
                if ("object" != t(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == t(n) ? n : n + "";
          }
          var u = (function (n) {
            function c() {
              var e, n, r, u;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, c),
                a(
                  ((n = this),
                  (r = i((r = c))),
                  (e = (function (e, n) {
                    if (n && ("object" === t(n) || "function" == typeof n))
                      return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(e);
                  })(
                    n,
                    o()
                      ? Reflect.construct(r, u || [], i(n).constructor)
                      : r.apply(n, u),
                  ))),
                  "_shadowRoot",
                  null,
                ),
                a(e, "_style", null),
                (e._shadowRoot = e.attachShadow({ mode: "open" })),
                (e._style = document.createElement("style")),
                e
              );
            }
            return (
              (function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function",
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e && r(t, e);
              })(c, n),
              (u = c),
              (s = [
                {
                  key: "_updateStyle",
                  value: function () {
                    this._style.textContent =
                      "\n      :host {\n        display: block;\n      }\n\n      div {\n        padding: 24px 20px;\n        color: white;\n        background-color: rgb(117, 106, 182);\n        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);\n      }\n\n      .app-name {\n        margin: 0;\n        font-size: 1.7rem;\n        text-align: center;\n      }\n\n      @media screen and (max-width: 768px) {\n        div {\n          width: 100%;\n        }\n      }\n    ";
                  },
                },
                {
                  key: "_emptyContent",
                  value: function () {
                    this._shadowRoot.innerHTML = "";
                  },
                },
                {
                  key: "connectedCallback",
                  value: function () {
                    this.render();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    this._emptyContent(),
                      this._updateStyle(),
                      this._shadowRoot.appendChild(this._style),
                      (this._shadowRoot.innerHTML +=
                        '\n    <div>\n      <h1 class="app-name">NOTES APP</h1>\n    </div>\n    ');
                  },
                },
              ]) && e(u.prototype, s),
              Object.defineProperty(u, "prototype", { writable: !1 }),
              u
            );
            var u, s;
          })(n(HTMLElement));
          customElements.define("app-bar", u);
        },
        137: () => {
          function t(e) {
            return (
              (t =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    }),
              t(e)
            );
          }
          function e(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(t, c(o.key), o);
            }
          }
          function n(t) {
            var e = "function" == typeof Map ? new Map() : void 0;
            return (
              (n = function (t) {
                if (
                  null === t ||
                  !(function (t) {
                    try {
                      return (
                        -1 !== Function.toString.call(t).indexOf("[native code]")
                      );
                    } catch (e) {
                      return "function" == typeof t;
                    }
                  })(t)
                )
                  return t;
                if ("function" != typeof t)
                  throw new TypeError(
                    "Super expression must either be null or a function",
                  );
                if (void 0 !== e) {
                  if (e.has(t)) return e.get(t);
                  e.set(t, n);
                }
                function n() {
                  return (function (t, e, n) {
                    if (o()) return Reflect.construct.apply(null, arguments);
                    var i = [null];
                    i.push.apply(i, e);
                    var a = new (t.bind.apply(t, i))();
                    return n && r(a, n.prototype), a;
                  })(t, arguments, i(this).constructor);
                }
                return (
                  (n.prototype = Object.create(t.prototype, {
                    constructor: {
                      value: n,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  r(n, t)
                );
              }),
              n(t)
            );
          }
          function o() {
            try {
              var t = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              );
            } catch (t) {}
            return (o = function () {
              return !!t;
            })();
          }
          function r(t, e) {
            return (
              (r = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                    return (t.__proto__ = e), t;
                  }),
              r(t, e)
            );
          }
          function i(t) {
            return (
              (i = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  }),
              i(t)
            );
          }
          function a(t, e, n) {
            return (
              (e = c(e)) in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n),
              t
            );
          }
          function c(e) {
            var n = (function (e, n) {
              if ("object" != t(e) || !e) return e;
              var o = e[Symbol.toPrimitive];
              if (void 0 !== o) {
                var r = o.call(e, "string");
                if ("object" != t(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return String(e);
            })(e);
            return "symbol" == t(n) ? n : n + "";
          }
          var u = (function (n) {
            function c() {
              var e, n, r, u;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, c),
                a(
                  ((n = this),
                  (r = i((r = c))),
                  (e = (function (e, n) {
                    if (n && ("object" === t(n) || "function" == typeof n))
                      return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(e);
                  })(
                    n,
                    o()
                      ? Reflect.construct(r, u || [], i(n).constructor)
                      : r.apply(n, u),
                  ))),
                  "_shadowRoot",
                  null,
                ),
                a(e, "_style", null),
                (e._shadowRoot = e.attachShadow({ mode: "open" })),
                (e._style = document.createElement("style")),
                e
              );
            }
            return (
              (function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function",
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(t, "prototype", { writable: !1 }),
                  e && r(t, e);
              })(c, n),
              (u = c),
              (s = [
                {
                  key: "_updateStyle",
                  value: function () {
                    this._style.textContent =
                      "\n    :host {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    div {\n      width: 100%;\n      max-width: 500px;\n    }\n    \n    .container {\n      width: 100%;\n      max-width: 500px;\n      border-radius: 8px;\n      margin: 16px;\n      background: white;\n      padding: 16px;\n      flex-grow: 1;\n      height: fit-content;\n    }\n    \n    .form {\n      display: flex;\n      padding: 16px;\n      flex-direction: column;\n      height: fit-content;\n      border-radius: 16px;\n    }\n    \n    .form-group {\n      display: flex;\n      flex-direction: column;\n    }\n    \n    .form-group label {\n      margin-bottom: 4px;\n      font-size: 20px;\n      font-weight: bold;\n    }\n    \n    .shadow {\n      box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);\n    }\n    \n    input[type=text], textarea{\n      background: rgb(240, 237, 255);\n      border: 2px solid rgb(117, 106, 182);\n      border-radius: 8px;\n      padding: 16px;\n      box-sizing: border-box;\n      margin-bottom: 8px;\n      font-size: 18px;\n    }\n    \n    .btn-submit {\n      width: fit-content;\n      border-radius: 16px;\n      padding: 12px 24px;\n      border: 2px solid rgb(117, 106, 182);\n      background: rgb(240, 237, 255);\n      color: black;\n      font-size: 20px;\n      margin-top: auto;\n      align-self: flex-end;\n      cursor: pointer;\n    }\n    \n    .btn-submit:hover {\n      background: rgb(117, 106, 182);\n      color: white;\n    }\n    \n    input[type=text], textarea, .btn-submit:focus {\n      outline: none;\n    }\n    \n    .text-center {\n      text-align: center;\n    }\n\n    @media screen and (max-width: 768px) {\n      container {\n        width: 100%;\n      }\n    }\n    ";
                  },
                },
                {
                  key: "_emptyContent",
                  value: function () {
                    this._shadowRoot.innerHTML = "";
                  },
                },
                {
                  key: "connectedCallback",
                  value: function () {
                    this.render(),
                      this._shadowRoot
                        .querySelector("#form")
                        .addEventListener(
                          "submit",
                          this._handleSubmit.bind(this),
                        );
                  },
                },
                {
                  key: "_handleSubmit",
                  value: function (t) {
                    t.preventDefault();
                    var e = this._shadowRoot.querySelector("#title").value,
                      n = this._shadowRoot.querySelector("#description").value,
                      o = {
                        id: "notes-".concat(
                          Math.random().toString(36).substring(2, 9),
                        ),
                        title: e,
                        body: n,
                        createdAt: new Date().toISOString(),
                        archived: !1,
                      };
                    this.dispatchEvent(
                      new CustomEvent("note-added", { detail: o }),
                    ),
                      (this._shadowRoot.querySelector("#title").value = ""),
                      (this._shadowRoot.querySelector("#description").value = "");
                  },
                },
                {
                  key: "render",
                  value: function () {
                    this._emptyContent(),
                      this._updateStyle(),
                      this._shadowRoot.appendChild(this._style),
                      (this._shadowRoot.innerHTML +=
                        '\n    <div>\n      <div class="container shadow" id="add-note">\n        <h2 class="container-header text-center">Add a new Note</h2>\n        <form class="form" action="#" id="form">\n          <div class="form-group form-title">\n            <label for="title">Title</label>\n            <input type="text" id="title" name="title" required>\n          </div>\n          <div class="form-group form-desc">\n            <label for="description">Description</label>\n            <textarea name="description" id="description" cols="30" rows="5" required></textarea>\n          </div>\n          <input type="submit" value="Add Note" name="submit" class="btn-submit">\n        </form>\n      </div>\n    </div>\n    ');
                  },
                },
              ]) && e(u.prototype, s),
              Object.defineProperty(u, "prototype", { writable: !1 }),
              u
            );
            var u, s;
          })(n(HTMLElement));
          customElements.define("input-note", u);
        },
        919: (t, e, n) => {
          "use strict";
          n.d(e, { A: () => c });
          var o = n(601),
            r = n.n(o),
            i = n(314),
            a = n.n(i)()(r());
          a.push([
            t.id,
            "* {\n  padding: 0;\n  margin: 0;\n\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: sans-serif;\n}\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n\n\n\n",
            "",
          ]);
          const c = a;
        },
        314: (t) => {
          "use strict";
          t.exports = function (t) {
            var e = [];
            return (
              (e.toString = function () {
                return this.map(function (e) {
                  var n = "",
                    o = void 0 !== e[5];
                  return (
                    e[4] && (n += "@supports (".concat(e[4], ") {")),
                    e[2] && (n += "@media ".concat(e[2], " {")),
                    o &&
                      (n += "@layer".concat(
                        e[5].length > 0 ? " ".concat(e[5]) : "",
                        " {",
                      )),
                    (n += t(e)),
                    o && (n += "}"),
                    e[2] && (n += "}"),
                    e[4] && (n += "}"),
                    n
                  );
                }).join("");
              }),
              (e.i = function (t, n, o, r, i) {
                "string" == typeof t && (t = [[null, t, void 0]]);
                var a = {};
                if (o)
                  for (var c = 0; c < this.length; c++) {
                    var u = this[c][0];
                    null != u && (a[u] = !0);
                  }
                for (var s = 0; s < t.length; s++) {
                  var l = [].concat(t[s]);
                  (o && a[l[0]]) ||
                    (void 0 !== i &&
                      (void 0 === l[5] ||
                        (l[1] = "@layer"
                          .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                          .concat(l[1], "}")),
                      (l[5] = i)),
                    n &&
                      (l[2]
                        ? ((l[1] = "@media "
                            .concat(l[2], " {")
                            .concat(l[1], "}")),
                          (l[2] = n))
                        : (l[2] = n)),
                    r &&
                      (l[4]
                        ? ((l[1] = "@supports ("
                            .concat(l[4], ") {")
                            .concat(l[1], "}")),
                          (l[4] = r))
                        : (l[4] = "".concat(r))),
                    e.push(l));
                }
              }),
              e
            );
          };
        },
        601: (t) => {
          "use strict";
          t.exports = function (t) {
            return t[1];
          };
        },
        72: (t) => {
          "use strict";
          var e = [];
          function n(t) {
            for (var n = -1, o = 0; o < e.length; o++)
              if (e[o].identifier === t) {
                n = o;
                break;
              }
            return n;
          }
          function o(t, o) {
            for (var i = {}, a = [], c = 0; c < t.length; c++) {
              var u = t[c],
                s = o.base ? u[0] + o.base : u[0],
                l = i[s] || 0,
                d = "".concat(s, " ").concat(l);
              i[s] = l + 1;
              var p = n(d),
                f = {
                  css: u[1],
                  media: u[2],
                  sourceMap: u[3],
                  supports: u[4],
                  layer: u[5],
                };
              if (-1 !== p) e[p].references++, e[p].updater(f);
              else {
                var y = r(f, o);
                (o.byIndex = c),
                  e.splice(c, 0, { identifier: d, updater: y, references: 1 });
              }
              a.push(d);
            }
            return a;
          }
          function r(t, e) {
            var n = e.domAPI(e);
            return (
              n.update(t),
              function (e) {
                if (e) {
                  if (
                    e.css === t.css &&
                    e.media === t.media &&
                    e.sourceMap === t.sourceMap &&
                    e.supports === t.supports &&
                    e.layer === t.layer
                  )
                    return;
                  n.update((t = e));
                } else n.remove();
              }
            );
          }
          t.exports = function (t, r) {
            var i = o((t = t || []), (r = r || {}));
            return function (t) {
              t = t || [];
              for (var a = 0; a < i.length; a++) {
                var c = n(i[a]);
                e[c].references--;
              }
              for (var u = o(t, r), s = 0; s < i.length; s++) {
                var l = n(i[s]);
                0 === e[l].references && (e[l].updater(), e.splice(l, 1));
              }
              i = u;
            };
          };
        },
        659: (t) => {
          "use strict";
          var e = {};
          t.exports = function (t, n) {
            var o = (function (t) {
              if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (t) {
                    n = null;
                  }
                e[t] = n;
              }
              return e[t];
            })(t);
            if (!o)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
              );
            o.appendChild(n);
          };
        },
        540: (t) => {
          "use strict";
          t.exports = function (t) {
            var e = document.createElement("style");
            return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
          };
        },
        56: (t, e, n) => {
          "use strict";
          t.exports = function (t) {
            var e = n.nc;
            e && t.setAttribute("nonce", e);
          };
        },
        825: (t) => {
          "use strict";
          t.exports = function (t) {
            if ("undefined" == typeof document)
              return { update: function () {}, remove: function () {} };
            var e = t.insertStyleElement(t);
            return {
              update: function (n) {
                !(function (t, e, n) {
                  var o = "";
                  n.supports && (o += "@supports (".concat(n.supports, ") {")),
                    n.media && (o += "@media ".concat(n.media, " {"));
                  var r = void 0 !== n.layer;
                  r &&
                    (o += "@layer".concat(
                      n.layer.length > 0 ? " ".concat(n.layer) : "",
                      " {",
                    )),
                    (o += n.css),
                    r && (o += "}"),
                    n.media && (o += "}"),
                    n.supports && (o += "}");
                  var i = n.sourceMap;
                  i &&
                    "undefined" != typeof btoa &&
                    (o +=
                      "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                        " */",
                      )),
                    e.styleTagTransform(o, t, e.options);
                })(e, t, n);
              },
              remove: function () {
                !(function (t) {
                  if (null === t.parentNode) return !1;
                  t.parentNode.removeChild(t);
                })(e);
              },
            };
          };
        },
        113: (t) => {
          "use strict";
          t.exports = function (t, e) {
            if (e.styleSheet) e.styleSheet.cssText = t;
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(t));
            }
          };
        },
      },
      e = {};
    function n(o) {
      var r = e[o];
      if (void 0 !== r) return r.exports;
      var i = (e[o] = { id: o, exports: {} });
      return t[o](i, i.exports, n), i.exports;
    }
    (n.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return n.d(e, { a: e }), e;
    }),
      (n.d = (t, e) => {
        for (var o in e)
          n.o(e, o) &&
            !n.o(t, o) &&
            Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
      }),
      (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
      (n.nc = void 0),
      (() => {
        "use strict";
        var t = n(72),
          e = n.n(t),
          o = n(825),
          r = n.n(o),
          i = n(659),
          a = n.n(i),
          c = n(56),
          u = n.n(c),
          s = n(540),
          l = n.n(s),
          d = n(113),
          p = n.n(d),
          f = n(919),
          y = {};
        (y.styleTagTransform = p()),
          (y.setAttributes = u()),
          (y.insert = a().bind(null, "head")),
          (y.domAPI = r()),
          (y.insertStyleElement = l()),
          e()(f.A, y),
          f.A && f.A.locals && f.A.locals,
          n(187),
          n(137);
        const b = [
          {
            id: "notes-jT-jjsyz61J8XKiI",
            title: "Welcome to Notes, Dimas!",
            body: "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
            createdAt: "2022-07-28T10:03:12.594Z",
            archived: !1,
          },
          {
            id: "notes-aB-cdefg12345",
            title: "Meeting Agenda",
            body: "Discuss project updates and assign tasks for the upcoming week.",
            createdAt: "2022-08-05T15:30:00.000Z",
            archived: !1,
          },
          {
            id: "notes-XyZ-789012345",
            title: "Shopping List",
            body: "Milk, eggs, bread, fruits, and vegetables.",
            createdAt: "2022-08-10T08:45:23.120Z",
            archived: !1,
          },
          {
            id: "notes-1a-2b3c4d5e6f",
            title: "Personal Goals",
            body: "Read two books per month, exercise three times a week, learn a new language.",
            createdAt: "2022-08-15T18:12:55.789Z",
            archived: !1,
          },
          {
            id: "notes-LMN-456789",
            title: "Recipe: Spaghetti Bolognese",
            body: "Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",
            createdAt: "2022-08-20T12:30:40.200Z",
            archived: !1,
          },
          {
            id: "notes-QwErTyUiOp",
            title: "Workout Routine",
            body: "Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",
            createdAt: "2022-08-25T09:15:17.890Z",
            archived: !1,
          },
          {
            id: "notes-abcdef-987654",
            title: "Book Recommendations",
            body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
            createdAt: "2022-09-01T14:20:05.321Z",
            archived: !1,
          },
          {
            id: "notes-zyxwv-54321",
            title: "Daily Reflections",
            body: "Write down three positive things that happened today and one thing to improve tomorrow.",
            createdAt: "2022-09-07T20:40:30.150Z",
            archived: !1,
          },
          {
            id: "notes-poiuyt-987654",
            title: "Travel Bucket List",
            body: "1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",
            createdAt: "2022-09-15T11:55:44.678Z",
            archived: !1,
          },
          {
            id: "notes-asdfgh-123456",
            title: "Coding Projects",
            body: "1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",
            createdAt: "2022-09-20T17:10:12.987Z",
            archived: !1,
          },
          {
            id: "notes-5678-abcd-efgh",
            title: "Project Deadline",
            body: "Complete project tasks by the deadline on October 1st.",
            createdAt: "2022-09-28T14:00:00.000Z",
            archived: !1,
          },
          {
            id: "notes-9876-wxyz-1234",
            title: "Health Checkup",
            body: "Schedule a routine health checkup with the doctor.",
            createdAt: "2022-10-05T09:30:45.600Z",
            archived: !1,
          },
          {
            id: "notes-qwerty-8765-4321",
            title: "Financial Goals",
            body: "1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",
            createdAt: "2022-10-12T12:15:30.890Z",
            archived: !1,
          },
          {
            id: "notes-98765-54321-12345",
            title: "Holiday Plans",
            body: "Research and plan for the upcoming holiday destination.",
            createdAt: "2022-10-20T16:45:00.000Z",
            archived: !1,
          },
          {
            id: "notes-1234-abcd-5678",
            title: "Language Learning",
            body: "Practice Spanish vocabulary for 30 minutes every day.",
            createdAt: "2022-10-28T08:00:20.120Z",
            archived: !1,
          },
        ];
        function h(t) {
          return (
            (h =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            h(t)
          );
        }
        function v(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, S(o.key), o);
          }
        }
        function m(t) {
          var e = "function" == typeof Map ? new Map() : void 0;
          return (
            (m = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (e) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (g()) return Reflect.construct.apply(null, arguments);
                  var o = [null];
                  o.push.apply(o, e);
                  var r = new (t.bind.apply(t, o))();
                  return n && w(r, n.prototype), r;
                })(t, arguments, x(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                w(n, t)
              );
            }),
            m(t)
          );
        }
        function g() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (g = function () {
            return !!t;
          })();
        }
        function w(t, e) {
          return (
            (w = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            w(t, e)
          );
        }
        function x(t) {
          return (
            (x = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            x(t)
          );
        }
        function _(t, e, n) {
          return (
            (e = S(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function S(t) {
          var e = (function (t, e) {
            if ("object" != h(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(t, "string");
              if ("object" != h(o)) return o;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
          })(t);
          return "symbol" == h(e) ? e : e + "";
        }
        var O = (function (t) {
          function e() {
            var t, n, o, r;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
              _(
                ((n = this),
                (o = x((o = e))),
                (t = (function (t, e) {
                  if (e && ("object" === h(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(t);
                })(
                  n,
                  g()
                    ? Reflect.construct(o, r || [], x(n).constructor)
                    : o.apply(n, r),
                ))),
                "_shadowRoot",
                null,
              ),
              _(t, "_style", null),
              _(t, "_note", {
                id: null,
                title: null,
                body: null,
                createdAt: null,
              }),
              (t._shadowRoot = t.attachShadow({ mode: "open" })),
              (t._style = document.createElement("style")),
              t
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && w(t, e);
            })(e, t),
            (n = e),
            (o = [
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "note",
                get: function () {
                  return this._note;
                },
                set: function (t) {
                  (this._note = t), this.render();
                },
              },
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n      :host {\n        display: block;\n      }\n\n      .container {\n        padding: 4%;\n      }\n\n      .list {\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n        gap: 3%;\n        margin-top: 2rem;\n        justify-items: center;\n        justify-content: center;\n      }\n\n      .card-note {\n        display: block;\n        background: rgb(240, 237, 255);\n        border-radius: 8px;\n        box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);\n        width: 300px;\n        padding: 20px;\n        height: fit-content;\n      }\n      \n      .note-info {\n        padding: 20px;\n        border: 2px solid rgb(117, 106, 182);\n        border-radius: 8px;\n        height: fit-content;\n      }\n      \n      .note-title h2 {\n        font-weight: bold;\n      }\n      \n      .note-description {\n        margin-top: 10px;\n      }\n\n      .note-date {\n        margin-top: 2rem;\n      }\n\n      .note-delete {\n        margin-top: 2rem;\n      }\n\n      .button-delete {\n        color: #fff;\n        background-color: #dc3545;\n        border: 1px solid;\n        border-radius: 8px;\n        padding: 10px 15px;\n        font-size: 16px;\n      }\n\n      .button-delete:hover {\n        background-color: darkred;\n      }\n\n      @media screen and (max-width: 768px) {\n        .list {\n          justify-items: center;\n          justify-content: center;\n        }\n      }\n    ";
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n      <div class="container">\n        <div class="list">\n        '.concat(
                        b
                          .map(function (t) {
                            return '\n          <div class="card-note">\n            <div class="note-info">\n              <div class="note-title">\n                <h2>'
                              .concat(
                                t.title,
                                '</h2>\n              </div>\n              <div class="note-description">\n                <p>',
                              )
                              .concat(
                                t.body,
                                '</p>\n              </div>\n              <div class="note-date">\n                <p>',
                              )
                              .concat(
                                new Date(t.createdAt).toLocaleString(),
                                '</p>\n              </div>\n              <div class="note-delete">\n                <button type="button" class="button-delete" id=""',
                              )
                              .concat(
                                t.id,
                                ">Hapus</button>\n              </div>\n            </div>\n          </div>\n          ",
                              );
                          })
                          .join(""),
                        "\n        </div>\n      </div>\n    ",
                      ));
                },
              },
            ]) && v(n.prototype, o),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
          var n, o;
        })(m(HTMLElement));
        customElements.define("note-item", O),
          (document.querySelector("note-item").note = b),
          document
            .querySelector("input-note")
            .addEventListener("note-added", function (t) {
              b.push(t.detail), (document.querySelector("note-item").note = b);
            });
      })();
  })();
  