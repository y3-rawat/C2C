"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183"], {
        28382: (t, e, r) => {
            r.d(e, {
                Q: () => o
            });
            var n = "<unknown>";

            function o(t) {
                return t.split("\n").reduce(function(t, e) {
                    var r, o, f, d = function(t) {
                        var e = i.exec(t);
                        if (!e) return null;
                        var r = e[2] && 0 === e[2].indexOf("native"),
                            o = e[2] && 0 === e[2].indexOf("eval"),
                            a = l.exec(e[2]);
                        return o && null != a && (e[2] = a[1], e[3] = a[2], e[4] = a[3]), {
                            file: r ? null : e[2],
                            methodName: e[1] || n,
                            arguments: r ? [e[2]] : [],
                            lineNumber: e[3] ? +e[3] : null,
                            column: e[4] ? +e[4] : null
                        }
                    }(e) || ((r = a.exec(e)) ? {
                        file: r[2],
                        methodName: r[1] || n,
                        arguments: [],
                        lineNumber: +r[3],
                        column: r[4] ? +r[4] : null
                    } : null) || function(t) {
                        var e = u.exec(t);
                        if (!e) return null;
                        var r = e[3] && e[3].indexOf(" > eval") > -1,
                            o = p.exec(e[3]);
                        return r && null != o && (e[3] = o[1], e[4] = o[2], e[5] = null), {
                            file: e[3],
                            methodName: e[1] || n,
                            arguments: e[2] ? e[2].split(",") : [],
                            lineNumber: e[4] ? +e[4] : null,
                            column: e[5] ? +e[5] : null
                        }
                    }(e) || ((o = s.exec(e)) ? {
                        file: o[2],
                        methodName: o[1] || n,
                        arguments: [],
                        lineNumber: +o[3],
                        column: o[4] ? +o[4] : null
                    } : null) || ((f = c.exec(e)) ? {
                        file: f[3],
                        methodName: f[1] || n,
                        arguments: [],
                        lineNumber: +f[4],
                        column: f[5] ? +f[5] : null
                    } : null);
                    return d && t.push(d), t
                }, [])
            }
            var i = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                l = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                a = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                u = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                p = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                c = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i,
                s = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i
        },
        97733: (t, e, r) => {
            function n() {
                let t = new Uint32Array(4);
                crypto.getRandomValues(t);
                let e = -1;
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(r) {
                    e++;
                    let n = t[e >> 3] >> e % 8 * 4 & 15;
                    return ("x" === r ? n : 3 & n | 8).toString(16)
                })
            }

            function o() {
                return "object" == typeof crypto && "randomUUID" in crypto && "function" == typeof crypto.randomUUID
            }

            function i() {
                return o() && crypto.randomUUID === n
            }

            function l() {
                o() || (crypto.randomUUID = n)
            }
            r.r(e), r.d(e, {
                apply: () => l,
                isPolyfilled: () => i,
                isSupported: () => o,
                randomUUID: () => n
            })
        },
        49237: (t, e, r) => {
            r.d(e, {
                nn: () => tN,
                Gb: () => t_
            });
            var n = {};
            r.r(n), r.d(n, {
                abortSignalAbort: () => v,
                apply: () => A,
                isPolyfilled: () => S,
                isSupported: () => x
            });
            var o = {};
            r.r(o), r.d(o, {
                abortSignalTimeout: () => w,
                apply: () => C,
                isPolyfilled: () => P,
                isSupported: () => E
            });
            var i = {};
            r.r(i), r.d(i, {
                AggregateError: () => AggregateError,
                apply: () => j,
                isPolyfilled: () => O,
                isSupported: () => T
            });
            var l = {};
            r.r(l), r.d(l, {
                apply: () => M,
                arrayLikeAt: () => k,
                isPolyfilled: () => D,
                isSupported: () => L
            });
            var a = {};
            r.r(a), r.d(a, {
                ClipboardItem: () => clipboarditem_ClipboardItem,
                apply: () => q,
                isPolyfilled: () => N,
                isSupported: () => _
            });
            var u = {};
            r.r(u), r.d(u, {
                apply: () => z,
                isPolyfilled: () => W,
                isSupported: () => H,
                replaceChildren: () => $
            });
            var p = {};
            r.r(p), r.d(p, {
                addEventListenerWithAbortSignal: () => G,
                apply: () => Q,
                isPolyfilled: () => J,
                isSupported: () => V
            });
            var c = {};
            r.r(c), r.d(c, {
                apply: () => tt,
                clipboardRead: () => K,
                clipboardWrite: () => Z,
                isPolyfilled: () => Y,
                isSupported: () => X
            });
            var s = {};
            r.r(s), r.d(s, {
                apply: () => to,
                isPolyfilled: () => tn,
                isSupported: () => tr,
                requestSubmit: () => te
            });
            var f = {};
            r.r(f), r.d(f, {
                apply: () => tp,
                isPolyfilled: () => tu,
                isSupported: () => ta,
                objectHasOwn: () => tl
            });
            var d = {};
            r.r(d), r.d(d, {
                apply: () => td,
                isPolyfilled: () => tf,
                isSupported: () => ts,
                promiseAllSettled: () => tc
            });
            var y = {};
            r.r(y), r.d(y, {
                apply: () => tg,
                isPolyfilled: () => tm,
                isSupported: () => tb,
                promiseAny: () => ty
            });
            var b = {};
            r.r(b), r.d(b, {
                apply: () => tA,
                cancelIdleCallback: () => tv,
                isPolyfilled: () => tS,
                isSupported: () => tx,
                requestIdleCallback: () => th
            });
            var m = {};
            r.r(m), r.d(m, {
                apply: () => tC,
                isPolyfilled: () => tP,
                isSupported: () => tE,
                stringReplaceAll: () => tw
            });
            var g = {};
            r.r(g), r.d(g, {
                apply: () => tI,
                arrayFindLast: () => tT,
                isPolyfilled: () => tj,
                isSupported: () => tO
            });
            var h = {};

            function v(t) {
                let e = new AbortController;
                return e.abort(t), e.signal
            }

            function x() {
                return "abort" in AbortSignal && "function" == typeof AbortSignal.abort
            }

            function S() {
                return AbortSignal.abort === v
            }

            function A() {
                x() || (AbortSignal.abort = v)
            }

            function w(t) {
                let e = new AbortController;
                return setTimeout(() => e.abort(new DOMException("TimeoutError")), t), e.signal
            }

            function E() {
                return "abort" in AbortSignal && "function" == typeof AbortSignal.timeout
            }

            function P() {
                return AbortSignal.timeout === w
            }

            function C() {
                E() || (AbortSignal.timeout = w)
            }
            r.r(h), r.d(h, {
                apply: () => tM,
                arrayFindLastIndex: () => tk,
                isPolyfilled: () => tD,
                isSupported: () => tL
            });
            let AggregateError = class AggregateError extends Error {
                constructor(t, e, r = {}) {
                    super(e), Object.defineProperty(this, "errors", {
                        value: Array.from(t),
                        configurable: !0,
                        writable: !0
                    }), r.cause && Object.defineProperty(this, "cause", {
                        value: r.cause,
                        configurable: !0,
                        writable: !0
                    })
                }
            };

            function T() {
                return "function" == typeof globalThis.AggregateError
            }

            function O() {
                return globalThis.AggregateError === AggregateError
            }

            function j() {
                T() || (globalThis.AggregateError = AggregateError)
            }
            let I = Reflect.getPrototypeOf(Int8Array);

            function k(t) {
                let e = this.length;
                return (t = Math.trunc(t) || 0) < 0 && (t += e), t < 0 || t >= e ? void 0 : this[t]
            }

            function L() {
                return "at" in Array.prototype && "function" == typeof Array.prototype.at && "at" in String.prototype && "function" == typeof String.prototype.at && "function" == typeof I && "at" in I.prototype && "function" == typeof I.prototype.at
            }

            function D() {
                return Array.prototype.at === k && String.prototype.at === k && "function" == typeof I && I.prototype.at === k
            }

            function M() {
                if (!L()) {
                    let t = {
                        value: k,
                        writable: !0,
                        configurable: !0
                    };
                    Object.defineProperty(Array.prototype, "at", t), Object.defineProperty(String.prototype, "at", t), Object.defineProperty(I, "at", t)
                }
            }
            let F = new WeakMap,
                U = new WeakMap;
            let clipboarditem_ClipboardItem = class clipboarditem_ClipboardItem {
                constructor(t, e = {}) {
                    if (0 === Object.keys(t).length) throw TypeError("Empty dictionary argument");
                    F.set(this, t), U.set(this, e.presentationStyle || "unspecified")
                }
                get presentationStyle() {
                    return U.get(this) || "unspecified"
                }
                get types() {
                    return Object.freeze(Object.keys(F.get(this) || {}))
                }
                async getType(t) {
                    let e = F.get(this);
                    if (e && t in e) {
                        let r = await e[t];
                        return "string" == typeof r ? new Blob([r], {
                            type: t
                        }) : r
                    }
                    throw new DOMException("Failed to execute 'getType' on 'ClipboardItem': The type was not found", "NotFoundError")
                }
            };

            function _() {
                try {
                    return new globalThis.ClipboardItem({
                        "text/plain": Promise.resolve("")
                    }), !0
                } catch {
                    return !1
                }
            }

            function N() {
                return globalThis.ClipboardItem === clipboarditem_ClipboardItem
            }

            function q() {
                _() || (globalThis.ClipboardItem = clipboarditem_ClipboardItem)
            }
            var R = r(97733);

            function $(...t) {
                for (; this.firstChild;) this.removeChild(this.firstChild);
                this.append(...t)
            }

            function H() {
                return "replaceChildren" in Element.prototype && "function" == typeof Element.prototype.replaceChildren && "replaceChildren" in Document.prototype && "function" == typeof Document.prototype.replaceChildren && "replaceChildren" in DocumentFragment.prototype && "function" == typeof DocumentFragment.prototype.replaceChildren
            }

            function W() {
                return Element.prototype.replaceChildren === $ && Document.prototype.replaceChildren === $ && DocumentFragment.prototype.replaceChildren === $
            }

            function z() {
                H() || (Element.prototype.replaceChildren = Document.prototype.replaceChildren = DocumentFragment.prototype.replaceChildren = $)
            }
            let B = EventTarget.prototype.addEventListener;

            function G(t, e, r) {
                if ("object" == typeof r && "signal" in r && r.signal instanceof AbortSignal) {
                    if (r.signal.aborted) return;
                    B.call(r.signal, "abort", () => {
                        this.removeEventListener(t, e, r)
                    })
                }
                return B.call(this, t, e, r)
            }

            function V() {
                let t = !1;

                function e() {}
                let r = Object.create({}, {
                    signal: {
                        get: () => t = !0
                    }
                });
                try {
                    let n = new EventTarget;
                    return n.addEventListener("test", e, r), n.removeEventListener("test", e, r), t
                } catch {
                    return t
                }
            }

            function J() {
                return EventTarget.prototype.addEventListener === G
            }

            function Q() {
                "function" != typeof AbortSignal || V() || (EventTarget.prototype.addEventListener = G)
            }
            async function Z(t) {
                if (0 === t.length) return;
                let e = t[0],
                    r = await e.getType(e.types.includes("text/plain") ? "text/plain" : e.types[0]);
                return navigator.clipboard.writeText("string" == typeof r ? r : await r.text())
            }
            async function K() {
                let t = navigator.clipboard.readText();
                return [new ClipboardItem({
                    "text/plain": t
                })]
            }

            function X() {
                return "clipboard" in navigator && "function" == typeof navigator.clipboard.read && "function" == typeof navigator.clipboard.write
            }

            function Y() {
                return "clipboard" in navigator && (navigator.clipboard.write === Z || navigator.clipboard.read === K)
            }

            function tt() {
                "clipboard" in navigator && !X() && (navigator.clipboard.write = Z, navigator.clipboard.read = K)
            }

            function te(t = null) {
                let e;
                let r = new SubmitEvent("submit", {
                    bubbles: !0,
                    cancelable: !0,
                    submitter: t
                });
                t && t.name && (e = Object.assign(document.createElement("input"), {
                    type: "hidden",
                    hidden: !0,
                    name: t.name,
                    value: t.value
                }), this.append(e)), this.checkValidity() && !this.dispatchEvent(r) && this.submit(), e?.remove()
            }

            function tr() {
                return "requestSubmit" in HTMLFormElement.prototype && "function" == typeof HTMLFormElement.prototype.requestSubmit
            }

            function tn() {
                return HTMLFormElement.prototype.requestSubmit === te
            }

            function to() {
                tr() || (HTMLFormElement.prototype.requestSubmit = te)
            }
            let ti = Object.prototype.hasOwnProperty;

            function tl(t, e) {
                if (null == t) throw TypeError("Cannot convert undefined or null to object");
                return ti.call(Object(t), e)
            }

            function ta() {
                return "hasOwn" in Object && "function" == typeof Object.hasOwn
            }

            function tu() {
                return Object.hasOwn === tl
            }

            function tp() {
                ta() || Object.defineProperty(Object, "hasOwn", {
                    value: tl,
                    configurable: !0,
                    writable: !0
                })
            }

            function tc(t) {
                return Promise.all(t.map(t => Promise.resolve(t).then(t => ({
                    status: "fulfilled",
                    value: t
                }), t => ({
                    status: "rejected",
                    reason: t
                }))))
            }

            function ts() {
                return "allSettled" in Promise && "function" == typeof Promise.allSettled
            }

            function tf() {
                return Promise.all === tc
            }

            function td() {
                ts() || (Promise.allSettled = tc)
            }

            function ty(t) {
                return new Promise((e, r) => {
                    let n = !1,
                        o = Array.from(t),
                        i = [];

                    function l(t) {
                        n || (n = !0, e(t))
                    }

                    function a(t) {
                        i.push(t), i.length === o.length && r(new globalThis.AggregateError(i, "All Promises rejected"))
                    }
                    for (let t of o) Promise.resolve(t).then(l, a)
                })
            }

            function tb() {
                return "any" in Promise && "function" == typeof Promise.any
            }

            function tm() {
                return Promise.all === ty
            }

            function tg() {
                tb() || (Promise.any = ty)
            }

            function th(t, e = {}) {
                let r = Date.now(),
                    n = e.timeout || 0,
                    o = Object.defineProperty({
                        didTimeout: !1,
                        timeRemaining: () => Math.max(0, 50 - (Date.now() - r))
                    }, "didTimeout", {
                        get: () => Date.now() - r > n
                    });
                return window.setTimeout(() => {
                    t(o)
                })
            }

            function tv(t) {
                clearTimeout(t)
            }

            function tx() {
                return "function" == typeof globalThis.requestIdleCallback
            }

            function tS() {
                return globalThis.requestIdleCallback === th && globalThis.cancelIdleCallback === tv
            }

            function tA() {
                tx() || (globalThis.requestIdleCallback = th, globalThis.cancelIdleCallback = tv)
            }

            function tw(t, e) {
                if (t instanceof RegExp) return this.replace(t, e);
                let r = -1,
                    n = 0,
                    o = "";
                if ("function" == typeof e) {
                    let n = e;
                    e = () => n(t, r, this)
                }
                for (r = this.indexOf(t, r + 1); - 1 !== r;) o += this.substring(n, r) + t.replace(t, e), n = r + t.length, r = this.indexOf(t, r + 1);
                return o + this.substring(n)
            }

            function tE() {
                return "replaceAll" in String.prototype && "function" == typeof String.prototype.replaceAll
            }

            function tP() {
                return String.prototype.replaceAll === tw
            }

            function tC() {
                tE() || (String.prototype.replaceAll = tw)
            }

            function tT(t, e = this) {
                for (let r = this.length - 1; r >= 0; r -= 1)
                    if (t.call(e, this[r], r, this)) return this[r]
            }

            function tO() {
                return "findLast" in Array.prototype && "function" == typeof Array.prototype.findLast
            }

            function tj() {
                return Array.prototype.findLast === tT
            }

            function tI() {
                tO() || Object.defineProperty(Array.prototype, "findLast", {
                    value: tT,
                    writable: !0,
                    configurable: !0
                })
            }

            function tk(t, e = this) {
                for (let r = this.length - 1; r >= 0; r -= 1)
                    if (t.call(e, this[r], r, this)) return r;
                return -1
            }

            function tL() {
                return "findLastIndex" in Array.prototype && "function" == typeof Array.prototype.findLastIndex
            }

            function tD() {
                return Array.prototype.findLastIndex === tk
            }

            function tM() {
                tL() || Object.defineProperty(Array.prototype, "findLastIndex", {
                    value: tk,
                    writable: !0,
                    configurable: !0
                })
            }
            let tF = "function" == typeof Blob && "function" == typeof PerformanceObserver && "object" == typeof Intl && "function" == typeof MutationObserver && "function" == typeof URLSearchParams && "function" == typeof WebSocket && "function" == typeof IntersectionObserver && "function" == typeof queueMicrotask && "function" == typeof TextEncoder && "function" == typeof TextDecoder && "object" == typeof customElements && "function" == typeof HTMLDetailsElement && "function" == typeof AbortController && "function" == typeof AbortSignal && "object" == typeof globalThis && "entries" in FormData.prototype && "toggleAttribute" in Element.prototype && "fromEntries" in Object && "flatMap" in Array.prototype && "trimEnd" in String.prototype && "matchAll" in String.prototype,
                tU = {
                    abortSignalAbort: n,
                    abortSignalTimeout: o,
                    aggregateError: i,
                    arrayAt: l,
                    clipboardItem: a,
                    cryptoRandomUUID: R,
                    elementReplaceChildren: u,
                    eventAbortSignal: p,
                    navigatorClipboard: c,
                    formRequestSubmit: s,
                    objectHasOwn: f,
                    promiseAllSettled: d,
                    promiseAny: y,
                    requestIdleCallback: b,
                    stringReplaceAll: m,
                    arrayFindLast: g,
                    arrayFindLastIndex: h
                };

            function t_() {
                return tF && Object.values(tU).every(t => t.isSupported())
            }

            function tN() {
                for (let t of Object.values(tU)) t.apply()
            }
        },
        82918: (t, e, r) => {
            let n;

            function o() {
                return `${Math.round(2147483647 * Math.random())}.${Math.round(Date.now() / 1e3)}`
            }

            function i() {
                try {
                    let t = function() {
                        let t;
                        let e = document.cookie,
                            r = e.match(/_octo=([^;]+)/g);
                        if (!r) return;
                        let n = [0, 0];
                        for (let e of r) {
                            let [, r] = e.split("="), [, o, ...i] = r.split("."), l = o.split("-").map(Number);
                            l > n && (n = l, t = i.join("."))
                        }
                        return t
                    }();
                    if (t) return t;
                    let e = o();
                    return ! function(t) {
                        let e = `GH1.1.${t}`,
                            r = Date.now(),
                            n = new Date(r + 31536e6).toUTCString(),
                            {
                                domain: o
                            } = document;
                        o.endsWith(".github.com") && (o = "github.com"), document.cookie = `_octo=${e}; expires=${n}; path=/; domain=${o}; secure; samesite=lax`
                    }(e), e
                } catch (t) {
                    return n || (n = o()), n
                }
            }
            r.d(e, {
                b: () => i
            })
        },
        15205: (t, e, r) => {
            function n(...t) {
                return JSON.stringify(t, (t, e) => "object" == typeof e ? e : String(e))
            }

            function o(t, e = {}) {
                let {
                    hash: r = n,
                    cache: o = new Map
                } = e;
                return function(...e) {
                    let n = r.apply(this, e);
                    if (o.has(n)) return o.get(n);
                    let i = t.apply(this, e);
                    return i instanceof Promise && (i = i.catch(t => {
                        throw o.delete(n), t
                    })), o.set(n, i), i
                }
            }
            r.d(e, {
                Z: () => o
            })
        }
    }
]);
//# sourceMappingURL=vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183-fd984a2e793f.js.map