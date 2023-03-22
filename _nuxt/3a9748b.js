(window.webpackJsonp = window.webpackJsonp || []).push([[9, 2], {
    207: function(t, e, o) {
        var content = o(219);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        o(28).default)("017468e8", content, !0, {
            sourceMap: !1
        })
    },
    218: function(t, e, o) {
        "use strict";
        o(207)
    },
    219: function(t, e, o) {
        var n = o(27)((function(i) {
            return i[1]
        }
        ));
        n.push([t.i, "/*purgecss start ignore*/\n.height-enter-active,.height-leave-active{\n  transition:all .2s;\n  max-height:230px;\n  overflow:hidden\n}\n.height-enter,.height-leave-to{\n  opacity:0;\n  max-height:0\n}\n.fade-enter-active,.fade-leave-active{\n  transition:opacity .2s\n}\n.fade-enter,.fade-leave-to{\n  opacity:0\n}\n\n/*purgecss end ignore*/", ""]),
        n.locals = {},
        t.exports = n
    },
    235: function(t, e, o) {
        "use strict";
        o.r(e);
        o(11),
        o(55),
        o(56),
        o(54),
        o(29);
        var n = {
            methods: {
                abbNum: function(t) {
                    for (var e = t, o = 0; e >= 1e3; )
                        e /= 1e3,
                        o++;
                    return e = e.toPrecision(3),
                    e += ["", "k", "m", "b", "t"][o]
                },
                addCommas: function(t) {
                    t = t.toString();
                    for (var pattern = /(-?\d+)(\d{3})/; pattern.test(t); )
                        t = t.replace(pattern, "$1,$2");
                    return t
                }
            },
            data: function() {
                return {
                    contributors: {
                        lead: [["Coding", "https://github.com/tandpfun"]],
                        major: [["Megumin", "https://github.com/meguminsama"]],
                        minor: [["Polar", "https://github.com/xPolar"], ["Commandtechno", "https://github.com/Commandtechno"], ["Toasty", "https://github.com/toastythetoaster"], ["Techy", "https://github.com/Techy"]]
                    }
                }
            }
        }
          , r = (o(218),
        o(22))
          , component = Object(r.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "sm:pt-8 lg:pt-10 sm:pb-12 md:pb-16 lg:pb-24 xl:pb-40 bg-dark-darker mt-5 mb-5"
            }, [o("div", {
                staticClass: "align-center mx-5 text-center"
            }, [t._m(0), t._v(" "), o("div", {
                staticClass: "bg-dark-dark max-w-6xl px-10 py-10 mx-auto mt-8 text-left rounded text-white"
            }, [o("p", {
                staticClass: "sm:text-xl font-semibold text-gray-200"
            }, [t._v("Privacy Policy:")]), t._v(" "), o("p", {
                staticClass: "sm:text-md text-gray-200 mt-1"
            }, [t._v("\n        DiscordTools stores no user data. When authorizing DiscordTools' access to your account, we are given basic user information and a list of the servers you are in. None of\n        this data is stored or logged. We log ratelimits to prevent abuse, and errors to help fix bugs, but that's all. Our entire source code is available on GitHub.\n      ")]), t._v(" "), o("p", {
                staticClass: "sm:text-md text-gray-200 mt-2"
            }, [t._v("\n        We run public analytics on our website provided by SimpleAnalytics. SimpleAnalytics is GDPA compliant and DOES NOT store or use IP addresses, cookies, or any other user\n        data.\n      ")]), t._v(" "), o("p", {
                staticClass: "sm:text-xl font-semibold text-gray-200 mt-5"
            }, [t._v("Links:")]), t._v(" "), o("ul", {
                staticClass: "list-disc ml-10 mb-5"
            }, [o("li", [o("font-awesome-icon", {
                attrs: {
                    icon: ["fab", "github"]
                }
            }), t._v(" "), o("a", {
                staticClass: "text-blue-500 hover:text-blue-600 transition duration-250",
                attrs: {
                    href: "https://github.com/tandpfun/DiscordTools",
                    target: "_blank"
                }
            }, [t._v(" Github")])], 1), t._v(" "), o("li", [o("font-awesome-icon", {
                attrs: {
                    icon: ["fab", "discord"]
                }
            }), t._v(" "), o("a", {
                staticClass: "text-blue-500 hover:text-blue-600 transition duration-250",
                attrs: {
                    href: "https://discord.gg/GFsA2x7j4F",
                    target: "_blank"
                }
            }, [t._v(" Discord Server")])], 1), t._v(" "), o("li", [o("font-awesome-icon", {
                attrs: {
                    icon: ["fas", "chart-area"]
                }
            }), t._v(" "), o("a", {
                staticClass: "text-blue-500 hover:text-blue-600 transition duration-250",
                attrs: {
                    href: "https://simpleanalytics.com/discordtools.io",
                    target: "_blank"
                }
            }, [t._v(" Analytics")])], 1)]), t._v(" "), o("p", {
                staticClass: "sm:text-xl font-semibold text-gray-200"
            }, [t._v("Contributors:")]), t._v(" "), o("ul", {
                staticClass: "list-disc ml-10"
            }, [o("li", [t._v("\n          Lead Developer:\n          "), t._l(t.contributors.lead, (function(e) {
                return o("a", {
                    key: e[1],
                    staticClass: "text-blue-500 hover:text-blue-600 transition duration-250",
                    attrs: {
                        href: e[1],
                        target: "_blank"
                    }
                }, [t._v(t._s(e[0]) + " ")])
            }
            ))], 2), t._v(" "), o("li", [t._v("\n          Major Contributor:\n          "), t._l(t.contributors.major, (function(e) {
                return o("a", {
                    key: e[1],
                    staticClass: "text-blue-500 hover:text-blue-600 transition duration-250",
                    attrs: {
                        href: e[1],
                        target: "_blank"
                    }
                }, [t._v(t._s(e[0]) + " ")])
            }
            ))], 2), t._v(" "), o("li", [t._v("\n          Minor Contributors:\n          "), t._l(t.contributors.minor, (function(e) {
                return o("a", {
                    key: e[1],
                    staticClass: "text-blue-500 hover:text-blue-600 transition duration-250",
                    attrs: {
                        href: e[1],
                        target: "_blank"
                    }
                }, [t._v(t._s(e[0]) + " ")])
            }
            ))], 2)])])])])
        }
        ), [function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "sm:my-auto max-w-2xl mx-auto my-10"
            }, [o("h1", {
                staticClass: "md:text-5xl mb-2 text-3xl font-bold text-gray-900"
            }, [o("span", {
                staticClass: "text-discord-blurple block"
            }, [t._v("About DiscordTools")])]), t._v(" "), o("p", {
                staticClass: "sm:text-xl text-md text-gray-200"
            }, [t._v("DiscordTools is an open-source Discord utilities website.")])])
        }
        ], !1, null, null, null);
        e.default = component.exports
    },
    246: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = {
            head: {
                title: "DiscordTools | About"
            }
        }
          , r = o(22)
          , component = Object(r.a)(n, (function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", [e("AboutPage")], 1)
        }
        ), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            AboutPage: o(235).default
        })
    }
}]);
