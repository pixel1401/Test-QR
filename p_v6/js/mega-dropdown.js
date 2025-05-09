! function() {
    "use strict";
    var e = {
            d: function(t, n) {
                for (var i in n) e.o(n, i) && !e.o(t, i) && Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: n[i]
                })
            },
            o: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            r: function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        },
        t = {};

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    e.r(t), e.d(t, {
        MegaDropdown: function() {
            return o
        }
    });
    var o = function() {
            function e(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                n(this, e), this._onHover = "hover" === i.trigger || "hover" === t.getAttribute("data-trigger"), this._container = e._findParent(t, "mega-dropdown"), this._container && (this._menu = this._container.querySelector(".dropdown-toggle ~ .dropdown-menu"), this._menu && (t.setAttribute("aria-expanded", "false"), this._el = t, this._bindEvents()))
            }
            var t, o, s;
            return t = e, s = [{
                key: "_findParent",
                value: function(e, t) {
                    if ("BODY" === e.tagName.toUpperCase()) return null;
                    for (e = e.parentNode;
                        "BODY" !== e.tagName.toUpperCase() && !e.classList.contains(t);) e = e.parentNode;
                    return "BODY" !== e.tagName.toUpperCase() ? e : null
                }
            }], (o = [{
                key: "open",
                value: function() {
                    this._timeout && (clearTimeout(this._timeout), this._timeout = null), this._focusTimeout && (clearTimeout(this._focusTimeout), this._focusTimeout = null), "true" !== this._el.getAttribute("aria-expanded") && (this._triggerEvent("show"), this._container.classList.add("show"), this._menu.classList.add("show"), this._el.setAttribute("aria-expanded", "true"), this._el.focus(), this._triggerEvent("shown"))
                }
            }, {
                key: "close",
                value: function(e) {
                    var t = this;
                    this._timeout && (clearTimeout(this._timeout), this._timeout = null), this._focusTimeout && (clearTimeout(this._focusTimeout), this._focusTimeout = null), this._onHover && !e ? this._timeout = setTimeout((function() {
                        t._timeout && (clearTimeout(t._timeout), t._timeout = null), t._close()
                    }), 150) : this._close()
                }
            }, {
                key: "toggle",
                value: function() {
                    "true" === this._el.getAttribute("aria-expanded") ? this.close(!0) : this.open()
                }
            }, {
                key: "destroy",
                value: function() {
                    this._unbindEvents(), this._el = null, this._timeout && (clearTimeout(this._timeout), this._timeout = null), this._focusTimeout && (clearTimeout(this._focusTimeout), this._focusTimeout = null)
                }
            }, {
                key: "_close",
                value: function() {
                    "true" === this._el.getAttribute("aria-expanded") && (this._triggerEvent("hide"), this._container.classList.remove("show"), this._menu.classList.remove("show"), this._el.setAttribute("aria-expanded", "false"), this._triggerEvent("hidden"))
                }
            }, {
                key: "_bindEvents",
                value: function() {
                    var t = this;
                    this._elClickEvnt = function(e) {
                        e.preventDefault(), t.toggle()
                    }, this._el.addEventListener("click", this._elClickEvnt), this._bodyClickEvnt = function(e) {
                        !t._container.contains(e.target) && t._container.classList.contains("show") && t.close(!0)
                    }, document.body.addEventListener("click", this._bodyClickEvnt, !0), this._menuClickEvnt = function(e) {
                        e.target.classList.contains("mega-dropdown-link") && t.close(!0)
                    }, this._menu.addEventListener("click", this._menuClickEvnt, !0), this._focusoutEvnt = function() {
                        t._focusTimeout && (clearTimeout(t._focusTimeout), t._focusTimeout = null), "true" === t._el.getAttribute("aria-expanded") && (t._focusTimeout = setTimeout((function() {
                            "BODY" !== document.activeElement.tagName.toUpperCase() && e._findParent(document.activeElement, "mega-dropdown") !== t._container && t.close(!0)
                        }), 100))
                    }, this._container.addEventListener("focusout", this._focusoutEvnt, !0), this._onHover && (this._enterEvnt = function() {
                        "static" !== window.getComputedStyle(t._menu, null).getPropertyValue("position") && t.open()
                    }, this._leaveEvnt = function() {
                        "static" !== window.getComputedStyle(t._menu, null).getPropertyValue("position") && t.close()
                    }, this._el.addEventListener("mouseenter", this._enterEvnt), this._menu.addEventListener("mouseenter", this._enterEvnt), this._el.addEventListener("mouseleave", this._leaveEvnt), this._menu.addEventListener("mouseleave", this._leaveEvnt))
                }
            }, {
                key: "_unbindEvents",
                value: function() {
                    this._elClickEvnt && (this._el.removeEventListener("click", this._elClickEvnt), this._elClickEvnt = null), this._bodyClickEvnt && (document.body.removeEventListener("click", this._bodyClickEvnt, !0), this._bodyClickEvnt = null), this._menuClickEvnt && (this._menu.removeEventListener("click", this._menuClickEvnt, !0), this._menuClickEvnt = null), this._focusoutEvnt && (this._container.removeEventListener("focusout", this._focusoutEvnt, !0), this._focusoutEvnt = null), this._enterEvnt && (this._el.removeEventListener("mouseenter", this._enterEvnt), this._menu.removeEventListener("mouseenter", this._enterEvnt), this._enterEvnt = null), this._leaveEvnt && (this._el.removeEventListener("mouseleave", this._leaveEvnt), this._menu.removeEventListener("mouseleave", this._leaveEvnt), this._leaveEvnt = null)
                }
            }, {
                key: "_triggerEvent",
                value: function(e) {
                    var t;
                    document.createEvent ? ("function" == typeof Event ? t = new Event(e) : (t = document.createEvent("Event")).initEvent(e, !1, !0), this._container.dispatchEvent(t)) : this._container.fireEvent("on".concat(e), document.createEventObject())
                }
            }]) && i(t.prototype, o), s && i(t, s), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e
        }(),
        s = window;
    for (var u in t) s[u] = t[u];
    t.__esModule && Object.defineProperty(s, "__esModule", {
        value: !0
    })
}();