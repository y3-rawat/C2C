"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["ui_packages_failbot_failbot_ts"], {
        40578: (e, t, n) => {
            let r;

            function o() {
                if (!r) throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");
                return r
            }

            function a() {
                return r?.locale ?? "en-US"
            }
            n.d(t, {
                    Kd: () => a,
                    dU: () => o
                }),
                function() {
                    if ("undefined" != typeof document) {
                        let e = document.getElementById("client-env");
                        if (e) try {
                            r = JSON.parse(e.textContent || "")
                        } catch (e) {
                            console.error("Error parsing client-env", e)
                        }
                    }
                }()
        },
        87274: (e, t, n) => {
            n.d(t, {
                C: () => a,
                x: () => o
            });
            var r = n(71207);
            let o = r.n4?.readyState === "interactive" || r.n4?.readyState === "complete" ? Promise.resolve() : new Promise(e => {
                    r.n4?.addEventListener("DOMContentLoaded", () => {
                        e()
                    })
                }),
                a = r.n4?.readyState === "complete" ? Promise.resolve() : new Promise(e => {
                    r.iG?.addEventListener("load", e)
                })
        },
        65809: (e, t, n) => {
            n.d(t, {
                eK: () => y
            });
            var r = n(82918),
                o = n(49237),
                a = n(28382);

            function i(e) {
                let t = document.querySelectorAll(e);
                if (t.length > 0) return t[t.length - 1]
            }
            var c = n(54508),
                u = n(71207),
                l = n(18515),
                s = n(58374);
            let f = !1,
                d = 0,
                m = Date.now(),
                h = new Set(["Failed to fetch", "NetworkError when attempting to fetch resource."]);

            function p(e) {
                return !!("AbortError" === e.name || "TypeError" === e.name && h.has(e.message) || e.name.startsWith("ApiError") && h.has(e.message))
            }

            function y(e, t = {}) {
                if ((0, l.c)("FAILBOT_HANDLE_NON_ERRORS")) {
                    if (!(e instanceof Error || "object" == typeof e && null !== e && "name" in e && "string" == typeof e.name && "message" in e && "string" == typeof e.message)) {
                        if (function(e) {
                                if (!e || "boolean" == typeof e || "number" == typeof e) return !0;
                                if ("string" == typeof e) {
                                    if (L.some(t => e.includes(t))) return !0
                                } else if ("object" == typeof e && "string" == typeof e.message && "number" == typeof e.code) return !0;
                                return !1
                            }(e)) return;
                        let n = Error(),
                            r = function(e) {
                                try {
                                    return JSON.stringify(e)
                                } catch {
                                    return "Unserializable"
                                }
                            }(e),
                            o = {
                                type: "UnknownError",
                                value: `Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${r}`,
                                stacktrace: v(n),
                                catalogService: void 0
                            };
                        g(w(o, t));
                        return
                    }
                    p(e) || g(w(S(e), t))
                } else p(e) || g(w(S(e), t))
            }
   

            function S(e) {
                return {
                    type: e.name,
                    value: e.message,
                    stacktrace: v(e),
                    catalogService: e.catalogService
                }
            }

            function w(e, t = {}) {
                return Object.assign({
                    error: e,
                    sanitizedUrl: `${window.location.protocol}//${window.location.host}${function(){let e=i("meta[name=analytics-location]");return e?e.content:window.location.pathname}()+function(){let e=i("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=i("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`( ^ | [ ? & ]) $ {
                        n[0]
                    }($ |= )`,"g"),`
                    $1$ {
                        n[1]
                    }
                    $2`)}return t}()}` || window.location.href,
                    readyState: document.readyState,
                    referrer: (0, s.wP)(),
                    timeSinceLoad: Math.round(Date.now() - m),
                    user: function() {
                        let e = document.head?.querySelector('meta[name="user-login"]')?.content;
                        if (e) return e;
                        let t = (0, r.b)();
                        return `anonymous-${t}`
                    }() || void 0,
                    bundler: c.A7,
                    ui: !!document.querySelector('meta[name="ui"]')
                }, t)
            }

            function v(e) {
                return (0, a.Q)(e.stack || "").map(e => ({
                    filename: e.file || "",
                    function: String(e.methodName),
                    lineno: (e.lineNumber || 0).toString(),
                    colno: (e.column || 0).toString()
                }))
            }
            let b = /(chrome|moz|safari)-extension:\/\//,
                E = !1;
            if (u.iG?.addEventListener("pageshow", () => E = !1), u.iG?.addEventListener("pagehide", () => E = !0), "function" == typeof BroadcastChannel) {
                let e = new BroadcastChannel("shared-worker-error");
                e.addEventListener("message", e => {
                    y(e.data.error)
                })
            }
            let L = ["Object Not Found Matching Id", "Not implemented on this platform", "provider because it's not your default extension"]
        },
        18515: (e, t, n) => {
            n.d(t, {
                $: () => l,
                c: () => u
            });
            var r = n(15205),
                o = n(40578),
                a = n(71207);

            function i() {
                let e = (0, o.dU)().featureFlags,
                    t = e.map(e => e.toUpperCase());
                return new Set(t)
            }
            let c = a.W6 ? i : (0, r.Z)(i);

            function u(e) {
                return c().has(e.toUpperCase())
            }
            let l = {
                isFeatureEnabled: u
            }
        },
        54508: (e, t, n) => {
            n.d(t, {
                A7: () => u,
                ko: () => c,
                q1: () => i
            });
            var r = n(15205),
                o = n(71207);
            let a = (0, r.Z)(function() {
                    return o.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content || ""
                }),
                i = (0, r.Z)(function() {
                    return o.n4?.head?.querySelector('meta[name="is-private-instance"]')?.content === "true"
                }),
                c = (0, r.Z)(function() {
                    return "enterprise" === a()
                }),
                u = "webpack"
        },
        56363: (e, t, n) => {
            n.d(t, {
                Z: () => i,
                _: () => c
            });
            var r = n(71207),
                o = n(43786);
            let a = class NoOpStorage {
                getItem() {
                    return null
                }
                setItem() {}
                removeItem() {}
                clear() {}
                key() {
                    return null
                }
                get length() {
                    return 0
                }
            };

            function i(e, t = {
                throwQuotaErrorsOnSet: !1
            }, n = r.iG, i = e => e, c = e => e) {
                let u;
                try {
                    if (!n) throw Error();
                    u = n[e] || new a
                } catch {
                    u = new a
                }
                let {
                    throwQuotaErrorsOnSet: l
                } = t;

                function s(e) {
                    t.sendCacheStats && (0, o.b)({
                        incrementKey: e
                    })
                }

                function f(e) {
                    try {
                        if (u.removeItem(e), t.ttl) {
                            let t = `${e}:expiry`;
                            u.removeItem(t)
                        }
                    } catch (e) {}
                }
                return {
                    getItem: function(e, t = new Date().getTime()) {
                        try {
                            let n = u.getItem(e);
                            if (!n) return null;
                            let r = `${e}:expiry`,
                                o = Number(u.getItem(r));
                            if (o && t > o) return f(e), f(r), s("SAFE_STORAGE_VALUE_EXPIRED"), null;
                            return s("SAFE_STORAGE_VALUE_WITHIN_TTL"), i(n)
                        } catch (e) {
                            return null
                        }
                    },
                    setItem: function(e, n, r = new Date().getTime()) {
                        try {
                            if (u.setItem(e, c(n)), t.ttl) {
                                let n = `${e}:expiry`,
                                    o = r + t.ttl;
                                u.setItem(n, o.toString())
                            }
                        } catch (e) {
                            if (l && e instanceof Error && e.message.toLowerCase().includes("quota")) throw e
                        }
                    },
                    removeItem: f,
                    clear: u.clear,
                    key: u.key,
                    get length() {
                        return u.length
                    }
                }
            }

            function c(e) {
                return i(e, {
                    throwQuotaErrorsOnSet: !1
                }, window, JSON.parse, JSON.stringify)
            }
        },
        65706: (e, t, n) => {
            n.d(t, {
                LS: () => a,
                cl: () => i,
                rV: () => o
            });
            var r = n(56363);
            let {
                getItem: o,
                setItem: a,
                removeItem: i
            } = (0, r.Z)("sessionStorage")
        },
        58374: (e, t, n) => {
            n.d(t, {
                Ak: () => S,
                CI: () => E,
                Gj: () => p,
                J$: () => b,
                Nb: () => L,
                Nt: () => w,
                OE: () => y,
                U6: () => d,
                Wl: () => g,
                XL: () => f,
                jN: () => o,
                pS: () => m,
                sj: () => h,
                vu: () => k,
                wG: () => I,
                wP: () => v
            });
            var r = n(65706);
            let o = "reload",
                a = "soft-nav:fail",
                i = "soft-nav:fail-referrer",
                c = "soft-nav:referrer",
                u = "soft-nav:marker",
                l = "soft-nav:react-app-name",
                s = "soft-nav:latest-mechanism";

            function f() {
                (0, r.LS)(u, "0"), (0, r.cl)(c), (0, r.cl)(a), (0, r.cl)(i), (0, r.cl)(l), (0, r.cl)(s)
            }

            function d(e) {
                (0, r.LS)(u, e)
            }

            function m() {
                (0, r.LS)(u, "0")
            }

            function h() {
                let e = (0, r.rV)(u);
                return e && "0" !== e
            }

            function p() {
                return (0, r.rV)(u)
            }

            function y() {
                return !!g()
            }

            function g() {
                return (0, r.rV)(a)
            }

            function S(e) {
                (0, r.LS)(a, e || o), (0, r.LS)(i, window.location.href)
            }

            function w() {
                (0, r.LS)(c, window.location.href)
            }

            function v() {
                return (0, r.rV)(c) || document.referrer
            }

            function b() {
                let e = L();
                e ? (0, r.LS)(l, e) : (0, r.cl)(l)
            }

            function E() {
                return (0, r.rV)(l)
            }

            function L() {
                return document.querySelector('meta[name="ui"]') ? "ui" : document.querySelector("react-app")?.getAttribute("app-name")
            }

            function k(e) {
                (0, r.LS)(s, e)
            }

            function I() {
                return (0, r.rV)(s)
            }
        },
        71207: (e, t, n) => {
            n.d(t, {
                Qg: () => r.Qg,
                W6: () => r.W6,
                cF: () => r.cF,
                iG: () => o.iG,
                n4: () => o.n4,
                ssrSafeLocation: () => o.jX,
                zu: () => o.zu
            });
            var r = n(60327),
                o = n(66199)
        },
        66199: (e, t, n) => {
            n.d(t, {
                iG: () => o,
                jX: () => i,
                n4: () => r,
                zu: () => a
            });
            let r = "undefined" == typeof document ? void 0 : document,
                o = "undefined" == typeof window ? void 0 : window,
                a = "undefined" == typeof history ? void 0 : history,
                i = "undefined" == typeof location ? {
                    pathname: "",
                    origin: "",
                    search: "",
                    hash: ""
                } : location
        },
        60327: (e, t, n) => {
            n.d(t, {
                Qg: () => a,
                W6: () => o,
                cF: () => i
            });
            var r = n(66199);
            let o = void 0 === r.n4,
                a = !o;

            function i() {
                return !!o || !!r.n4.querySelector('react-app[data-ssr="true"]')
            }
        },
        43786: (e, t, n) => {
            n.d(t, {
                B: () => d,
                b: () => u
            });
            var r = n(71207),
                o = n(87274),
                a = n(54508),
                i = n(18515);
            let c = [];

            function u(e, t = !1, n = 1) {
                if (!0 !== (0, i.c)("BROWSER_STATS_DISABLED")) {
                    if (n < 0 || n > 1) throw RangeError("Sampling probability must be between 0 and 1");
                    void 0 === e.timestamp && (e.timestamp = new Date().getTime()), e.loggedIn = !!r.n4?.head?.querySelector('meta[name="user-login"]')?.content, e.staff = d(), e.bundler = a.A7, Math.random() < n && c.push(e), t ? f() : s()
                }
            }
            let l = null;
            async function s() {
                await o.C, null == l && (l = window.requestIdleCallback(f))
            }

            function f() {
                if (l = null, !c.length) return;
                let e = r.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;
                if (!e) return;
                let t = function(e) {
                    let t = [],
                        n = e.map(e => JSON.stringify(e));
                    for (; n.length > 0;) t.push(function(e) {
                        let t = e.shift(),
                            n = [t],
                            r = t.length;
                        for (; e.length > 0 && r <= 65536;) {
                            let t = e[0].length;
                            if (r + t <= 65536) {
                                let o = e.shift();
                                n.push(o), r += t
                            } else break
                        }
                        return n
                    }(n));
                    return t
                }(c);
                for (let n of t) ! function(e, t) {
                    try {
                        navigator.sendBeacon && navigator.sendBeacon(e, t)
                    } catch {}
                }(e, `{"stats": [${n.join(",")}] }`);
                c = []
            }

            function d() {
                return !!r.n4?.head?.querySelector('meta[name="user-staff"]')?.content
            }
            r.n4?.addEventListener("pagehide", f), r.n4?.addEventListener("visibilitychange", f)
        }
    }
]);
//# sourceMappingURL=ui_packages_failbot_failbot_ts-385036314cb6.js.map