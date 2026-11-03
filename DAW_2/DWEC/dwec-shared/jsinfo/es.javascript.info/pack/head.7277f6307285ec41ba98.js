/*! For license information please see head.7277f6307285ec41ba98.js.LICENSE.txt */
var head;

!function() {
var e, t, n = {
465: function(e, t, n) {
var r = n(3411), i = n(5594);
e.exports = Object.keys || function(e) {
return r(e, i);
};
},
595: function(e, t, n) {
var r = n(6669), i = Math.max, o = Math.min;
e.exports = function(e, t) {
return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t);
};
},
820: function(e, t, n) {
let r = n(7746), i = n(8849), o = [];
t.iframe = function(e) {
r.async(e, function(t, n) {
n && (e.style.height = n + "px");
});
}, t.codeTabs = function(e) {
function t() {
let t = e.closest(".code-tabs"), n = (e.closest("[data-code-tabs-content]"), t.querySelector("[data-code-tabs-switches]"));
n.firstElementChild.offsetWidth > n.offsetWidth ? t.classList.add("code-tabs_scroll") : t.classList.remove("code-tabs_scroll");
}
t(), o.push(t);
}, window.addEventListener("resize", i(function() {
o.forEach(e => e());
}, 200));
},
825: function(e, t, n) {
var r = n(8922), i = n(7350), o = n(8466), s = Object.defineProperty;
t.f = n(8013) ? Object.defineProperty : function(e, t, n) {
if (r(e), t = o(t, !0), r(n), i) try {
return s(e, t, n);
} catch (e) {}
if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
return "value" in n && (e[t] = n.value), e;
};
},
949: function(e, t) {
const n = "//" + window.disqus_shortname + ".disqus.com/embed.js";
window.disqus_shortname;
function r() {
const e = document.getElementById("disqus_thread");
if (!e || e.classList.contains("disqus-loading")) return;
const t = document.querySelector(".comments-load-button");
t && (t.remove(), document.querySelector(".comments__disqus").style.display = ""), 
e.classList.add("disqus-loading");
const r = new Spinner({
size: "large"
});
e.append(r.elem), r.start();
const i = document.createElement("script");
i.src = n, i.setAttribute("data-timestamp", +new Date), document.head.appendChild(i), 
i.onload = () => {
r.stop(), r.elem.remove();
};
}
t.M = r, t.t = function() {
if (!window.disqus_enabled) return;
const e = document.getElementById("disqus_thread");
if (new MutationObserver(e => {
for (let t of e) {
if ("childList" !== t.type) return;
if (!t.addedNodes) return;
t.addedNodes.forEach(e => {
"IFRAME" !== e.tagName || e.src.includes("embed/comments") || e.remove();
});
}
}).observe(e, {
childList: !0
}), document.querySelector(`script[src="${n}"]`)) return;
if (e.hasChildNodes()) return;
const t = e.getBoundingClientRect();
t.top > document.documentElement.clientHeight + 150 || t.bottom < -150 || r();
};
},
956: function(e, t, n) {
var r = n(825), i = n(8922), o = n(465);
e.exports = n(8013) ? Object.defineProperties : function(e, t) {
i(e);
for (var n, s = o(t), a = s.length, u = 0; a > u; ) r.f(e, n = s[u++], t[n]);
return e;
};
},
1070: function() {
document.addEventListener("click", e => {
if (e.target.classList.contains("spoiler__button")) {
let t = e.target.closest(".spoiler");
t.classList.toggle("open"), t.classList.toggle("closed");
}
});
},
1184: function(e, t, n) {
let r = n(1385), i = n(5115), o = n(2849);
const s = n(9907).lang;
class a extends HTMLElement {
constructor() {
super(), this.render();
}
static get observedAttributes() {
return [ "weekdays", "format", "with-zone", "to", "from" ];
}
attributeChangedCallback(e, t, n) {
this.render();
}
connectedCallback() {
this.render();
}
format(e, t, n) {
let o = r(e).utcOffset(-(new Date).getTimezoneOffset()).format(t);
return n && (o += " " + i()), o;
}
render() {
if ("{" === this.getAttribute("weekdays")[0]) return;
let e = [ "weekdays", "with-zone", "from", "to" ].map(e => this.getAttribute(e)).join(":");
if (this.lastParams === e) return;
this.lastParams = e;
let t, n = this.getAttribute("weekdays").split(",").map(Number), r = this.getAttribute("from"), a = this.getAttribute("to");
if ([n, r, a] = o(n, r, a, -(new Date).getTimezoneOffset()), t = "ru" === s ? [ "", "пн", "вт", "ср", "чт", "пт", "сб", "вс" ] : [ "", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ], 
n = n.map(e => t[e]), n = "ru" === s ? n.join("/") : n.join(", "), this.hasAttribute("with-zone")) {
let e = i();
this.setAttribute("data-tooltip", "Время указано в вашем часовом поясе,<br>по данным браузера это " + e);
}
this.innerHTML = n + " " + r + " – " + a;
}
}
window.WeekRangeElement = a, window.customElements.define("week-range", a);
},
1225: function(e, t, n) {
var r = n(3439), i = n(2767), o = n(2604)("match");
e.exports = function(e) {
var t;
return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
};
},
1285: function(e) {
e.exports = class {
constructor({elem: e}) {
this.elem = e, this.formElem = this.elem.querySelector(".sitetoolbar__search"), 
this.toggleElem = this.elem.querySelector(".sitetoolbar__search-toggle"), this.searchInput = this.elem.querySelector(".sitetoolbar__search-input input"), 
this.findButton = this.elem.querySelector(".sitetoolbar__find"), this.toggleElem.onclick = this.onToggleClick.bind(this), 
this.searchInput.onkeydown = this.onSearchInputKeydown.bind(this), this.searchInput.onblur = this.onSearchInputBlur.bind(this), 
this.findButton.onpointerdown = this.onFindPointerDown.bind(this);
}
onToggleClick() {
this.show();
}
onSearchInputKeydown(e) {
27 == e.keyCode && (this.searchInput.value = "", this.searchInput.blur());
}
onFindPointerDown() {
this.searchInput.value && this.formElem.submit();
}
onSearchInputBlur() {
this.hide();
}
show() {
this.formElem.parentNode || this.elem.append(this.formElem);
let e = document.querySelector(".sitetoolbar");
setTimeout(() => e.classList.add("sitetoolbar_search_open")), this.searchInput.focus();
let t = document.createElement("div");
t.className = "search-paranja", t.style.top = e.offsetHeight + "px", document.body.appendChild(t), 
document.body.classList.add("paranja-open");
}
hide() {
document.querySelector(".search-paranja").remove(), document.querySelector(".sitetoolbar").classList.remove("sitetoolbar_search_open"), 
document.body.classList.remove("paranja-open"), this.formElem.remove();
}
};
},
1315: function(e) {
var t = {}.hasOwnProperty;
e.exports = function(e, n) {
return t.call(e, n);
};
},
1353: function(e, t, n) {
var r = n(8922), i = n(956), o = n(5594), s = n(9736)("IE_PROTO"), a = function() {}, u = "prototype", l = function() {
var e, t = n(9844)("iframe"), r = o.length;
for (t.style.display = "none", n(7282).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), 
e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; r--; ) delete l[u][o[r]];
return l();
};
e.exports = Object.create || function(e, t) {
var n;
return null !== e ? (a[u] = r(e), n = new a, a[u] = null, n[s] = e) : n = l(), void 0 === t ? n : i(n, t);
};
},
1385: function(e, t, n) {
const r = n(9907).lang;
let i = n(6151);
"ru" === r ? (n(7045), i.updateLocale("ru", {
monthsShort: {
format: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_"),
standalone: "янв_фев_мар_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_")
}
})) : "zh" === r ? n(5250) : "en" !== r && n(5358)("./" + r), e.exports = i;
},
1436: function(e, t, n) {
let r = n(1385), i = n(5115);
class o extends HTMLElement {
constructor() {
super(), this.render();
}
connectedCallback() {
this.render();
}
static get observedAttributes() {
return [ "except" ];
}
attributeChangedCallback(e, t, n) {
this.render();
}
format(e, t, n) {
let o = r(e).utcOffset(-(new Date).getTimezoneOffset()).format(t);
return n && (o += " " + i()), o;
}
render() {
let e = [ "except" ].map(e => this.getAttribute(e)).join(":");
if (this.lastParams === e) return;
if (this.lastParams = e, "{" === this.getAttribute("except")[0]) return;
if (!this.getAttribute("except")) return;
let t = this.getAttribute("except").split(",").map(e => new Date(e)), n = [];
for (let e = 0; e < t.length; e++) {
let i = t[e], o = t[e + 1], s = !o || o.getMonth() != i.getMonth(), a = r(i).utcOffset(-(new Date).getTimezoneOffset()).format(s ? "D MMM" : "D");
n.push(a);
}
this.innerHTML = `(кроме ${n.join(", ")})`;
}
}
window.DateExceptElement = o, window.customElements.define("date-except", o);
},
1498: function(e) {
e.exports = function(e, t) {
return {
enumerable: !(1 & e),
configurable: !(2 & e),
writable: !(4 & e),
value: t
};
};
},
1604: function(e, t, n) {
n(8712), String.prototype.startsWith || (String.prototype.startsWith = function(e) {
let t = arguments.length < 2 ? 0 : arguments[1];
return 0 === this.slice(t).indexOf(e);
}), String.prototype.endsWith || (String.prototype.endsWith = function(e) {
let t = arguments.length < 2 ? this.length : arguments[1], n = this.lastIndexOf(e);
return -1 !== n && n === t - e.length;
}), String.prototype.includes || (String.prototype.includes = function(e, t) {
if ("object" == typeof e && e instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
return -1 !== this.indexOf(e, t);
}), String.prototype.padStart || (String.prototype.padStart = function(e, t) {
return e |= 0, t = String(void 0 !== t ? t : " "), this.length >= e ? String(this) : ((e -= this.length) > t.length && (t += t.repeat(e / t.length)), 
t.slice(0, e) + String(this));
});
},
1832: function(e) {
var t = e.exports = {
version: "2.6.12"
};
"number" == typeof __e && (__e = t);
},
1963: function(e, t, n) {
var r = n(2767);
e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
return "String" == r(e) ? e.split("") : Object(e);
};
},
2024: function(e, t, n) {
t.Captcha = n(9902), t.initForms = n(8697);
},
2101: function(e, t, n) {
var r = n(5280), i = n(2795), o = n(1315), s = n(3425)("src"), a = n(2243), u = "toString", l = ("" + a).split(u);
n(1832).inspectSource = function(e) {
return a.call(e);
}, (e.exports = function(e, t, n, a) {
var u = "function" == typeof n;
u && (o(n, "name") || i(n, "name", t)), e[t] !== n && (u && (o(n, s) || i(n, s, e[t] ? "" + e[t] : l.join(String(t)))), 
e === r ? e[t] = n : a ? e[t] ? e[t] = n : i(e, t, n) : (delete e[t], i(e, t, n)));
})(Function.prototype, u, function() {
return "function" == typeof this && this[s] || a.call(this);
});
},
2243: function(e, t, n) {
e.exports = n(7866)("native-function-to-string", Function.toString);
},
2268: function(e, t, n) {
!function(e) {
"use strict";
var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), r = [ /^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i ], i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
e.defineLocale("es-do", {
months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
monthsShort: function(e, r) {
return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t;
},
monthsRegex: i,
monthsShortRegex: i,
monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
monthsParse: r,
longMonthsParse: r,
shortMonthsParse: r,
weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
weekdaysParseExact: !0,
longDateFormat: {
LT: "h:mm A",
LTS: "h:mm:ss A",
L: "DD/MM/YYYY",
LL: "D [de] MMMM [de] YYYY",
LLL: "D [de] MMMM [de] YYYY h:mm A",
LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
},
calendar: {
sameDay: function() {
return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
nextDay: function() {
return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
nextWeek: function() {
return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
lastDay: function() {
return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
lastWeek: function() {
return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
sameElse: "L"
},
relativeTime: {
future: "en %s",
past: "hace %s",
s: "unos segundos",
ss: "%d segundos",
m: "un minuto",
mm: "%d minutos",
h: "una hora",
hh: "%d horas",
d: "un día",
dd: "%d días",
w: "una semana",
ww: "%d semanas",
M: "un mes",
MM: "%d meses",
y: "un año",
yy: "%d años"
},
dayOfMonthOrdinalParse: /\d{1,2}º/,
ordinal: "%dº",
week: {
dow: 1,
doy: 4
}
});
}(n(6151));
},
2578: function(e, t, n) {
var r = n(6751), i = n(5963), o = n(595);
e.exports = function(e) {
return function(t, n, s) {
var a, u = r(t), l = i(u.length), c = o(s, l);
if (e && n != n) {
for (;l > c; ) if ((a = u[c++]) != a) return !0;
} else for (;l > c; c++) if ((e || c in u) && u[c] === n) return e || c || 0;
return !e && -1;
};
};
},
2604: function(e, t, n) {
var r = n(7866)("wks"), i = n(3425), o = n(5280).Symbol, s = "function" == typeof o;
(e.exports = function(e) {
return r[e] || (r[e] = s && o[e] || (s ? o : i)("Symbol." + e));
}).store = r;
},
2651: function(e, t, n) {
let r = n(5345);
document.addEventListener("click", function(e) {
let t = e.target.closest("[data-banner-close]");
t && (localStorage["hideBanner" + t.dataset.bannerClose] = Date.now(), new r.Success(t.dataset.bannerCloseMessage), 
t.parentNode.remove());
});
},
2656: function(e) {
e.exports = function(e, t) {
let n, r, i, o, s, a = (t = t || {}).onRight || function() {}, u = t.onLeft || function() {}, l = t.tolerance || 50, c = t.threshold || 150, d = t.allowedTime || 500;
e.addEventListener("touchstart", function(e) {
let t = e.changedTouches[0];
i = 0, n = t.pageX, r = t.pageY, s = Date.now();
}), e.addEventListener("touchend", function(e) {
let t = e.changedTouches[0];
if (i = t.pageX - n, o = Date.now() - s, Math.abs(t.pageY - r) > l) return;
if (o > d) return;
let h = !1, f = e.target;
for (;f != document.body; ) {
if (f.scrollWidth > f.clientWidth) {
h = !0;
break;
}
f = f.parentElement;
}
h || (i > c && a(e), i < -c && u(e));
});
};
},
2684: function(e, t, n) {
let r, i = n(3449);
e.exports = function(e) {
e = e || document;
let t = Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.body.clientHeight, e.documentElement.clientHeight);
return e.documentElement.scrollWidth > e.documentElement.clientWidth && (r || (r = i()), 
t += r), t;
};
},
2767: function(e) {
var t = {}.toString;
e.exports = function(e) {
return t.call(e).slice(8, -1);
};
},
2795: function(e, t, n) {
var r = n(825), i = n(1498);
e.exports = n(8013) ? function(e, t, n) {
return r.f(e, t, i(1, n));
} : function(e, t, n) {
return e[t] = n, e;
};
},
2799: function(e, t, n) {
!function(e) {
"use strict";
var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), r = [ /^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i ], i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
e.defineLocale("es-mx", {
months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
monthsShort: function(e, r) {
return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t;
},
monthsRegex: i,
monthsShortRegex: i,
monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
monthsParse: r,
longMonthsParse: r,
shortMonthsParse: r,
weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
weekdaysParseExact: !0,
longDateFormat: {
LT: "H:mm",
LTS: "H:mm:ss",
L: "DD/MM/YYYY",
LL: "D [de] MMMM [de] YYYY",
LLL: "D [de] MMMM [de] YYYY H:mm",
LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
},
calendar: {
sameDay: function() {
return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
nextDay: function() {
return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
nextWeek: function() {
return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
lastDay: function() {
return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
lastWeek: function() {
return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
sameElse: "L"
},
relativeTime: {
future: "en %s",
past: "hace %s",
s: "unos segundos",
ss: "%d segundos",
m: "un minuto",
mm: "%d minutos",
h: "una hora",
hh: "%d horas",
d: "un día",
dd: "%d días",
w: "una semana",
ww: "%d semanas",
M: "un mes",
MM: "%d meses",
y: "un año",
yy: "%d años"
},
dayOfMonthOrdinalParse: /\d{1,2}º/,
ordinal: "%dº",
week: {
dow: 0,
doy: 4
},
invalidDate: "Fecha inválida"
});
}(n(6151));
},
2849: function(e) {
e.exports = function(e, t, n, r) {
r = +r, t.split && (t = t.split(":").map(Number)), n.split && (n = n.split(":").map(Number)), 
t = 60 * t[0] + t[1] + r, n = 60 * n[0] + n[1] + r, t < 0 ? (t += 1440, n += 1440, 
e = e.map(e => 1 === e ? 7 : e - 1)) : t >= 1440 && (t -= 1440, n -= 1440, e = e.map(e => 7 === e ? 1 : e + 1)), 
n > 1440 && (n -= 1440), n < 0 && (n += 1440);
let i = e => 0 === e ? "00" : e < 10 ? "0" + e : e;
return [ e, t = [ Math.floor(t / 60), t % 60 ].map(i).join(":"), n = [ Math.floor(n / 60), n % 60 ].map(i).join(":") ];
};
},
2987: function(e) {
e.exports = function(e) {
function t() {
t.wasCalled || (t.wasCalled = !0, e());
}
return setTimeout(t, 500), t;
};
},
3102: function(e) {
function t(e, t, n, r, i) {
e.addEventListener(n, function(e) {
let n = function(e, t) {
let n = e.target;
for (;n; ) {
if (n.matches(t)) return n;
if (n == e.currentTarget) break;
n = n.parentElement;
}
return null;
}(e, t);
e.delegateTarget = n, n && r.call(i || this, e);
});
}
t.delegateMixin = function(e) {
e.delegate = function(e, n, r) {
t(this.elem, e, n, r, this);
};
}, e.exports = t;
},
3158: function(e, t, n) {
let r = n(2656), i = n(9907);
function o() {
let e, t = document.querySelector('link[rel="next"]');
t && (e = document.querySelector('a[href="' + t.getAttribute("href") + '"] .page__nav-text-shortcut'), 
e.innerHTML = 'Ctrl + <span class="page__nav-text-arr">' + (i.isRTL ? "←" : "→") + "</span>");
let n = document.querySelector('link[rel="prev"]');
n && (e = document.querySelector('a[href="' + n.getAttribute("href") + '"] .page__nav-text-shortcut'), 
e.innerHTML = 'Ctrl + <span class="page__nav-text-arr">' + (i.isRTL ? "→" : "←") + "</span>");
}
r(document, {
onRight: function() {
let e = document.querySelector('link[rel="prev"]');
e && (document.location = e.href);
},
onLeft: function() {
let e = document.querySelector('link[rel="next"]');
e && (document.location = e.href);
}
}), document.addEventListener("keydown", function(e) {
if (document.activeElement && ~[ "INPUT", "TEXTAREA", "SELECT" ].indexOf(document.activeElement.tagName)) return;
if (!e.ctrlKey) return;
let t = null;
switch (e.keyCode) {
case 37:
t = "prev";
break;

case 39:
t = "next";
break;

default:
return;
}
let n = document.querySelector('link[rel="' + t + '"]');
n && (document.location = n.href, e.preventDefault());
}), "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", o) : o();
},
3330: function(e) {
e.exports = function(e) {
try {
return !!e();
} catch (e) {
return !0;
}
};
},
3411: function(e, t, n) {
var r = n(1315), i = n(6751), o = n(2578)(!1), s = n(9736)("IE_PROTO");
e.exports = function(e, t) {
var n, a = i(e), u = 0, l = [];
for (n in a) n != s && r(a, n) && l.push(n);
for (;t.length > u; ) r(a, n = t[u++]) && (~o(l, n) || l.push(n));
return l;
};
},
3425: function(e) {
var t = 0, n = Math.random();
e.exports = function(e) {
return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + n).toString(36));
};
},
3439: function(e) {
e.exports = function(e) {
return "object" == typeof e ? null !== e : "function" == typeof e;
};
},
3449: function(e) {
e.exports = function() {
let e = document.createElement("div");
if (e.style.cssText = "visibility:hidden;height:100px", !document.body) throw new Error("getScrollbarHeight called to early: no document.body");
document.body.appendChild(e);
let t = e.offsetWidth;
e.style.overflow = "scroll";
let n = document.createElement("div");
n.style.width = "100%", e.appendChild(n);
let r = n.offsetWidth;
return e.parentNode.removeChild(e), t - r;
};
},
3640: function(e, t, n) {
const r = n(949).M, i = (n(949).t, n(9907));
let o;
function s() {
false;
}
function a() {
s("onWindowScrollAndResizeThrottled", o), o || (o = window.requestAnimationFrame(function() {
!function() {
let e = ".sitetoolbar", t = document.querySelector(e);
if (!t) return void s("no sitetoolbar");
let n = document.querySelector(".sidebar");
if (n) {
const e = document.querySelector(".page"), r = e.classList.contains("page_profile") && "flex" === getComputedStyle(e).display ? 0 : Math.max(t.getBoundingClientRect().bottom, 0) + "px";
n.style.top = r, function() {
s("compactifySidebar");
let e = document.querySelector(".sidebar");
if (!e.observer) {
(e.observer = new MutationObserver(e => {
for (let t of e) {
if ("childList" !== t.type) return;
a();
}
})).observe(e, {
childList: !0,
subtree: !0
});
}
let t = e.querySelector(".sidebar__content"), n = e.querySelector(".sidebar__inner"), r = e.classList.contains("sidebar_sticky-footer"), i = e.classList.contains("sidebar_compact");
if (i) {
let n;
n = r ? t.lastElementChild.getBoundingClientRect().top - t.lastElementChild.previousElementSibling.getBoundingClientRect().bottom : t.getBoundingClientRect().bottom - t.lastElementChild.getBoundingClientRect().bottom, 
s("decompact?", n), n > 150 && e.classList.remove("sidebar_compact");
} else s(n.scrollHeight, n.clientHeight), n.scrollHeight > n.clientHeight && (s("compact!"), 
e.classList.add("sidebar_compact"));
}();
}
!function() {
let e = document.documentElement.clientWidth <= 840, t = document.querySelector('meta[name="viewport"]').content;
t = t.replace(/user-scalable=\w+/, "user-scalable=" + (e ? "yes" : "no")), document.querySelector('meta[name="viewport"]').content = t;
}();
}(), o = null;
}));
}
function u() {
!function() {
let e = [ ...document.querySelectorAll("input[data-theme-changer]") ];
for (let t of e) t.onchange = () => {
const e = t.checked;
l(e ? "light" : "dark", e ? "dark" : "light");
}, t.checked = "dark" == document.documentElement.dataset.theme;
}(), ("ru" != i.lang || window.location.hash.match(/#comment-/)) && r(), document.querySelector(".comments-load-button")?.addEventListener("click", r), 
a();
}
function l(e, t) {
document.documentElement.dataset.theme = t, localStorage.setItem("theme", t);
for (let n of document.querySelectorAll("[data-use-theme]")) "OBJECT" == n.tagName && window.themeSvg(n, e, t);
window.DISQUS && DISQUS.reset({
reload: !0,
config: disqus_config
});
}
window.addEventListener("resize-internal", a), window.addEventListener("scroll", a), 
window.addEventListener("resize", a), "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", u) : u();
},
3710: function(e, t, n) {
"use strict";
var r = n(1353), i = n(1498), o = n(9930), s = {};
n(2795)(s, n(2604)("iterator"), function() {
return this;
}), e.exports = function(e, t, n) {
e.prototype = r(s, {
next: i(1, n)
}), o(e, t + " Iterator");
};
},
3802: function() {
let e;
document.addEventListener("mouseover", function(t) {
if (!t.target.closest) return;
let n = t.target.closest("[data-add-class-on-hover]") || t.target.closest(".button");
n && (e = n, n.classList.add("hover"));
}), document.addEventListener("touchend", function(t) {
setTimeout(function() {
e && (e.classList.remove("hover"), e = null);
}, 500);
}), document.addEventListener("mouseout", function(t) {
e && (e.contains(t.relatedTarget) || (e.classList.remove("hover"), e = null));
}), navigator.userAgent.match(/(iPad|iPhone|iPod)/g) || document.documentElement.classList.add("working-hover");
},
4231: function() {
!function() {
let e = 0;
window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
let r = (new Date).getTime(), i = Math.max(0, 16 - (r - e)), o = window.setTimeout(function() {
t(r + i);
}, i);
return e = r + i, o;
}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
clearTimeout(e);
});
}();
},
4450: function(e, t, n) {
let r = n(1385), i = n(5115);
class o extends HTMLElement {
constructor() {
super(), this.render();
}
connectedCallback() {
this.render();
}
static get observedAttributes() {
return [ "timestamp", "format", "with-zone", "to", "from" ];
}
attributeChangedCallback(e, t, n) {
this.render();
}
format(e, t, n) {
let o = r(e).utcOffset(-(new Date).getTimezoneOffset()).format(t);
return n && (o += " " + i()), o;
}
render() {
let e = [ "timestamp", "from", "to", "format" ].map(e => this.getAttribute(e)).join(":");
if (this.lastParams === e) return;
if (this.lastParams = e, this.hasAttribute("with-zone")) {
let e = i();
this.setAttribute("data-tooltip", "Время в вашем часовом поясе,<br>по данным браузера это " + e + ".");
}
if (this.getAttribute("timestamp")) {
if ("{" === this.getAttribute("timestamp")[0]) return;
return void (this.innerHTML = this.format(this.getAttribute("timestamp"), this.getAttribute("format"), this.hasAttribute("with-zone")));
}
let t = [];
if ("{" === this.getAttribute("from")[0] || "{" === this.getAttribute("to")[0]) return;
let n = new Date(this.getAttribute("from")), r = new Date(this.getAttribute("to")), o = this.getAttribute("format"), s = this.getAttribute("format");
n.getFullYear() === r.getFullYear() && (o = o.replace(/ YY(YY)?$/g, "")), n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth() && n.getDate() === r.getDate() || t.push(this.format(n, o)), 
t.push(this.format(r, s, this.hasAttribute("with-zone"))), this.innerHTML = t.join(" – ");
}
}
window.DateLocalElement = o, window.customElements.define("date-local", o);
},
4474: function(e) {
e.exports = function(e) {
if (null == e) throw TypeError("Can't call method on  " + e);
return e;
};
},
5115: function(e) {
let t = new Intl.DateTimeFormat([], {
timeZoneName: "short"
}).formatToParts;
e.exports = function() {
if (t) return new Intl.DateTimeFormat([], {
timeZoneName: "short"
}).formatToParts(new Date).find(e => "timeZoneName" == e.type).value;
let e = -(new Date).getTimezoneOffset(), n = (new Date).toLocaleTimeString([], {
timeZoneName: "short"
}).split(" ");
return n[0].match(/[+-]/) ? n = n[0] : n[n.length - 1].match(/[+-]/) || n[n.length - 1].match(/[A-Z]{2,}/) ? n = n[n.length - 1] : (n = "GMT", 
e > 0 && (n += "+" + e / 60), e < 0 && (n += "-" + -e / 60)), n;
};
},
5180: function(e) {
function t() {
let e = document.createElement("form");
e.method = "POST", e.action = "/auth/logout?_csrf=" + document.cookie.match(/XSRF-TOKEN=([\w-]+)/)[1], 
document.body.appendChild(e), e.submit();
}
document.addEventListener("click", function(e) {
e.target.hasAttribute("data-action-user-logout") && (e.preventDefault(), t());
}), e.exports = t;
},
5250: function(e, t, n) {
!function(e) {
"use strict";
e.defineLocale("zh-cn", {
months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
weekdaysMin: "日_一_二_三_四_五_六".split("_"),
longDateFormat: {
LT: "HH:mm",
LTS: "HH:mm:ss",
L: "YYYY/MM/DD",
LL: "YYYY年M月D日",
LLL: "YYYY年M月D日Ah点mm分",
LLLL: "YYYY年M月D日ddddAh点mm分",
l: "YYYY/M/D",
ll: "YYYY年M月D日",
lll: "YYYY年M月D日 HH:mm",
llll: "YYYY年M月D日dddd HH:mm"
},
meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
meridiemHour: function(e, t) {
return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12;
},
meridiem: function(e, t, n) {
var r = 100 * e + t;
return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上";
},
calendar: {
sameDay: "[今天]LT",
nextDay: "[明天]LT",
nextWeek: function(e) {
return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT";
},
lastDay: "[昨天]LT",
lastWeek: function(e) {
return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT";
},
sameElse: "L"
},
dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
ordinal: function(e, t) {
switch (t) {
case "d":
case "D":
case "DDD":
return e + "日";

case "M":
return e + "月";

case "w":
case "W":
return e + "周";

default:
return e;
}
},
relativeTime: {
future: "%s后",
past: "%s前",
s: "几秒",
ss: "%d 秒",
m: "1 分钟",
mm: "%d 分钟",
h: "1 小时",
hh: "%d 小时",
d: "1 天",
dd: "%d 天",
w: "1 周",
ww: "%d 周",
M: "1 个月",
MM: "%d 个月",
y: "1 年",
yy: "%d 年"
},
week: {
dow: 1,
doy: 4
}
});
}(n(6151));
},
5280: function(e) {
var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
"number" == typeof __g && (__g = t);
},
5345: function(e, t, n) {
"use strict";
n.r(t), n.d(t, {
Error: function() {
return c;
},
Info: function() {
return a;
},
Success: function() {
return l;
},
Warning: function() {
return u;
},
init: function() {
return o;
}
});
let r = n(3102);
class i {
constructor(e = {}) {
this.notifications = [], this.verticalSpace = e.verticalSpace || 8;
}
register(e) {
this.notifications.unshift(e), setTimeout(() => this.recalculate(), 20);
}
unregister(e) {
let t = this.notifications.indexOf(e);
this.notifications.splice(t, 1), this.recalculate();
}
recalculate() {
let e = this.verticalSpace;
this.notifications.forEach(t => {
t.top = e, e += t.height + this.verticalSpace;
});
}
}
function o(e) {
window.notificationManager || (window.notificationManager = new i(e));
}
class s {
constructor(e, t, n) {
let r = `<div class="notification notification_popup notification_${t}">\n    <div class="notification__content">${e}</div>\n    <button title="Закрыть" class="notification__close"></button></div>`;
switch (document.body.insertAdjacentHTML("beforeEnd", r), this.elem = document.body.lastElementChild, 
n) {
case void 0:
this.timeout = this.TIMEOUT_DEFAULT;
break;

case "slow":
this.timeout = this.TIMEOUT_SLOW;
break;

case "fast":
this.timeout = this.TIMEOUT_FAST;
break;

default:
this.timeout = n;
}
window.notificationManager.register(this), this.setupCloseHandler(), this.setupCloseTimeout();
}
get TIMEOUT_DEFAULT() {
return 3e3;
}
get TIMEOUT_SLOW() {
return 5e3;
}
get TIMEOUT_FAST() {
return 1500;
}
close() {
this.elem.parentNode && (this.elem.remove(), window.notificationManager.unregister(this));
}
setupCloseHandler() {
this.delegate(".notification__close", "click", () => this.close());
}
setupCloseTimeout() {
this.timeout && setTimeout(() => this.close(), this.timeout);
}
get height() {
return this.elem.offsetHeight;
}
set top(e) {
this.elem.style.transform = "translateY(" + e + "px)";
}
}
r.delegateMixin(s.prototype);
class a extends s {
constructor(e, t) {
super(e, "info", t);
}
}
class u extends s {
constructor(e, t) {
super(e, "warning", t);
}
}
class l extends s {
constructor(e, t) {
super(e, "success", t);
}
}
class c extends s {
constructor(e, t) {
super(e, "error", t);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
},
5358: function(e, t, n) {
var r = {
"./es": 9576,
"./es-do": 2268,
"./es-do.js": 2268,
"./es-mx": 2799,
"./es-mx.js": 2799,
"./es-us": 6501,
"./es-us.js": 6501,
"./es.js": 9576
};
function i(e) {
var t = o(e);
return n(t);
}
function o(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = o, e.exports = i, i.id = 5358;
},
5594: function(e) {
e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
},
5850: function(e, t, n) {
let r = window.location.host;
n(2987);
document.addEventListener("click", function(e) {
if (1 != e.which) return;
if (e.defaultPrevented) return;
let t = e.target.closest && e.target.closest("a");
if (!t || r == t.host && !t.hasAttribute("data-track-outbound")) return;
if (!~[ "_self", "_top", "_parent" ].indexOf(t.target)) return;
if (e.shiftKey || e.ctrlKey || e.altKey) return;
e.preventDefault();
t.href;
});
},
5963: function(e, t, n) {
var r = n(6669), i = Math.min;
e.exports = function(e) {
return e > 0 ? i(r(e), 9007199254740991) : 0;
};
},
6151: function(e, t, n) {
(e = n.nmd(e)).exports = function() {
"use strict";
var t, r;
function i() {
return t.apply(null, arguments);
}
function o(e) {
t = e;
}
function s(e) {
return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
}
function a(e) {
return null != e && "[object Object]" === Object.prototype.toString.call(e);
}
function u(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}
function l(e) {
if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
var t;
for (t in e) if (u(e, t)) return !1;
return !0;
}
function c(e) {
return void 0 === e;
}
function d(e) {
return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e);
}
function h(e) {
return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
}
function f(e, t) {
var n, r = [], i = e.length;
for (n = 0; n < i; ++n) r.push(t(e[n], n));
return r;
}
function m(e, t) {
for (var n in t) u(t, n) && (e[n] = t[n]);
return u(t, "toString") && (e.toString = t.toString), u(t, "valueOf") && (e.valueOf = t.valueOf), 
e;
}
function p(e, t, n, r) {
return Zn(e, t, n, r, !0).utc();
}
function _() {
return {
empty: !1,
unusedTokens: [],
unusedInput: [],
overflow: -2,
charsLeftOver: 0,
nullInput: !1,
invalidEra: null,
invalidMonth: null,
invalidFormat: !1,
userInvalidated: !1,
iso: !1,
parsedDateParts: [],
era: null,
meridiem: null,
rfc2822: !1,
weekdayMismatch: !1
};
}
function y(e) {
return null == e._pf && (e._pf = _()), e._pf;
}
function g(e) {
var t = null, n = !1, i = e._d && !isNaN(e._d.getTime());
return i && (t = y(e), n = r.call(t.parsedDateParts, function(e) {
return null != e;
}), i = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), 
e._strict && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)), 
null != Object.isFrozen && Object.isFrozen(e) ? i : (e._isValid = i, e._isValid);
}
function v(e) {
var t = p(NaN);
return null != e ? m(y(t), e) : y(t).userInvalidated = !0, t;
}
r = Array.prototype.some ? Array.prototype.some : function(e) {
var t, n = Object(this), r = n.length >>> 0;
for (t = 0; t < r; t++) if (t in n && e.call(this, n[t], t, n)) return !0;
return !1;
};
var w = i.momentProperties = [], b = !1;
function M(e, t) {
var n, r, i, o = w.length;
if (c(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), c(t._i) || (e._i = t._i), 
c(t._f) || (e._f = t._f), c(t._l) || (e._l = t._l), c(t._strict) || (e._strict = t._strict), 
c(t._tzm) || (e._tzm = t._tzm), c(t._isUTC) || (e._isUTC = t._isUTC), c(t._offset) || (e._offset = t._offset), 
c(t._pf) || (e._pf = y(t)), c(t._locale) || (e._locale = t._locale), o > 0) for (n = 0; n < o; n++) c(i = t[r = w[n]]) || (e[r] = i);
return e;
}
function S(e) {
M(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), 
!1 === b && (b = !0, i.updateOffset(this), b = !1);
}
function D(e) {
return e instanceof S || null != e && null != e._isAMomentObject;
}
function k(e) {
!1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn;
}
function T(e, t) {
var n = !0;
return m(function() {
if (null != i.deprecationHandler && i.deprecationHandler(null, e), n) {
var r, o, s, a = [], l = arguments.length;
for (o = 0; o < l; o++) {
if (r = "", "object" == typeof arguments[o]) {
for (s in r += "\n[" + o + "] ", arguments[0]) u(arguments[0], s) && (r += s + ": " + arguments[0][s] + ", ");
r = r.slice(0, -2);
} else r = arguments[o];
a.push(r);
}
k(e + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + (new Error).stack), 
n = !1;
}
return t.apply(this, arguments);
}, t);
}
var E, Y = {};
function C(e, t) {
null != i.deprecationHandler && i.deprecationHandler(e, t), Y[e] || (k(t), Y[e] = !0);
}
function L(e) {
return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
}
function x(e) {
var t, n;
for (n in e) u(e, n) && (L(t = e[n]) ? this[n] = t : this["_" + n] = t);
this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
}
function O(e, t) {
var n, r = m({}, e);
for (n in t) u(t, n) && (a(e[n]) && a(t[n]) ? (r[n] = {}, m(r[n], e[n]), m(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
for (n in e) u(e, n) && !u(t, n) && a(e[n]) && (r[n] = m({}, r[n]));
return r;
}
function N(e) {
null != e && this.set(e);
}
i.suppressDeprecationWarnings = !1, i.deprecationHandler = null, E = Object.keys ? Object.keys : function(e) {
var t, n = [];
for (t in e) u(e, t) && n.push(t);
return n;
};
var P = {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
};
function A(e, t, n) {
var r = this._calendar[e] || this._calendar.sameElse;
return L(r) ? r.call(t, n) : r;
}
function j(e, t, n) {
var r = "" + Math.abs(e), i = t - r.length;
return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r;
}
var R = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, H = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, F = {}, W = {};
function U(e, t, n, r) {
var i = r;
"string" == typeof r && (i = function() {
return this[r]();
}), e && (W[e] = i), t && (W[t[0]] = function() {
return j(i.apply(this, arguments), t[1], t[2]);
}), n && (W[n] = function() {
return this.localeData().ordinal(i.apply(this, arguments), e);
});
}
function I(e) {
return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function G(e) {
var t, n, r = e.match(R);
for (t = 0, n = r.length; t < n; t++) W[r[t]] ? r[t] = W[r[t]] : r[t] = I(r[t]);
return function(t) {
var i, o = "";
for (i = 0; i < n; i++) o += L(r[i]) ? r[i].call(t, e) : r[i];
return o;
};
}
function V(e, t) {
return e.isValid() ? (t = z(t, e.localeData()), F[t] = F[t] || G(t), F[t](e)) : e.localeData().invalidDate();
}
function z(e, t) {
var n = 5;
function r(e) {
return t.longDateFormat(e) || e;
}
for (H.lastIndex = 0; n >= 0 && H.test(e); ) e = e.replace(H, r), H.lastIndex = 0, 
n -= 1;
return e;
}
var B = {
LTS: "h:mm:ss A",
LT: "h:mm A",
L: "MM/DD/YYYY",
LL: "MMMM D, YYYY",
LLL: "MMMM D, YYYY h:mm A",
LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function q(e) {
var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
return t || !n ? t : (this._longDateFormat[e] = n.match(R).map(function(e) {
return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e;
}).join(""), this._longDateFormat[e]);
}
var $ = "Invalid date";
function Z() {
return this._invalidDate;
}
var K = "%d", X = /\d{1,2}/;
function J(e) {
return this._ordinal.replace("%d", e);
}
var Q = {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
w: "a week",
ww: "%d weeks",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
};
function ee(e, t, n, r) {
var i = this._relativeTime[n];
return L(i) ? i(e, t, n, r) : i.replace(/%d/i, e);
}
function te(e, t) {
var n = this._relativeTime[e > 0 ? "future" : "past"];
return L(n) ? n(t) : n.replace(/%s/i, t);
}
var ne = {
D: "date",
dates: "date",
date: "date",
d: "day",
days: "day",
day: "day",
e: "weekday",
weekdays: "weekday",
weekday: "weekday",
E: "isoWeekday",
isoweekdays: "isoWeekday",
isoweekday: "isoWeekday",
DDD: "dayOfYear",
dayofyears: "dayOfYear",
dayofyear: "dayOfYear",
h: "hour",
hours: "hour",
hour: "hour",
ms: "millisecond",
milliseconds: "millisecond",
millisecond: "millisecond",
m: "minute",
minutes: "minute",
minute: "minute",
M: "month",
months: "month",
month: "month",
Q: "quarter",
quarters: "quarter",
quarter: "quarter",
s: "second",
seconds: "second",
second: "second",
gg: "weekYear",
weekyears: "weekYear",
weekyear: "weekYear",
GG: "isoWeekYear",
isoweekyears: "isoWeekYear",
isoweekyear: "isoWeekYear",
w: "week",
weeks: "week",
week: "week",
W: "isoWeek",
isoweeks: "isoWeek",
isoweek: "isoWeek",
y: "year",
years: "year",
year: "year"
};
function re(e) {
return "string" == typeof e ? ne[e] || ne[e.toLowerCase()] : void 0;
}
function ie(e) {
var t, n, r = {};
for (n in e) u(e, n) && (t = re(n)) && (r[t] = e[n]);
return r;
}
var oe = {
date: 9,
day: 11,
weekday: 11,
isoWeekday: 11,
dayOfYear: 4,
hour: 13,
millisecond: 16,
minute: 14,
month: 8,
quarter: 7,
second: 15,
weekYear: 1,
isoWeekYear: 1,
week: 5,
isoWeek: 5,
year: 1
};
function se(e) {
var t, n = [];
for (t in e) u(e, t) && n.push({
unit: t,
priority: oe[t]
});
return n.sort(function(e, t) {
return e.priority - t.priority;
}), n;
}
var ae, ue = /\d/, le = /\d\d/, ce = /\d{3}/, de = /\d{4}/, he = /[+-]?\d{6}/, fe = /\d\d?/, me = /\d\d\d\d?/, pe = /\d\d\d\d\d\d?/, _e = /\d{1,3}/, ye = /\d{1,4}/, ge = /[+-]?\d{1,6}/, ve = /\d+/, we = /[+-]?\d+/, be = /Z|[+-]\d\d:?\d\d/gi, Me = /Z|[+-]\d\d(?::?\d\d)?/gi, Se = /[+-]?\d+(\.\d{1,3})?/, De = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, ke = /^[1-9]\d?/, Te = /^([1-9]\d|\d)/;
function Ee(e, t, n) {
ae[e] = L(t) ? t : function(e, r) {
return e && n ? n : t;
};
}
function Ye(e, t) {
return u(ae, e) ? ae[e](t._strict, t._locale) : new RegExp(Ce(e));
}
function Ce(e) {
return Le(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
return t || n || r || i;
}));
}
function Le(e) {
return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function xe(e) {
return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Oe(e) {
var t = +e, n = 0;
return 0 !== t && isFinite(t) && (n = xe(t)), n;
}
ae = {};
var Ne = {};
function Pe(e, t) {
var n, r, i = t;
for ("string" == typeof e && (e = [ e ]), d(t) && (i = function(e, n) {
n[t] = Oe(e);
}), r = e.length, n = 0; n < r; n++) Ne[e[n]] = i;
}
function Ae(e, t) {
Pe(e, function(e, n, r, i) {
r._w = r._w || {}, t(e, r._w, r, i);
});
}
function je(e, t, n) {
null != t && u(Ne, e) && Ne[e](t, n._a, n, e);
}
function Re(e) {
return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
}
var He = 0, Fe = 1, We = 2, Ue = 3, Ie = 4, Ge = 5, Ve = 6, ze = 7, Be = 8;
function qe(e) {
return Re(e) ? 366 : 365;
}
U("Y", 0, 0, function() {
var e = this.year();
return e <= 9999 ? j(e, 4) : "+" + e;
}), U(0, [ "YY", 2 ], 0, function() {
return this.year() % 100;
}), U(0, [ "YYYY", 4 ], 0, "year"), U(0, [ "YYYYY", 5 ], 0, "year"), U(0, [ "YYYYYY", 6, !0 ], 0, "year"), 
Ee("Y", we), Ee("YY", fe, le), Ee("YYYY", ye, de), Ee("YYYYY", ge, he), Ee("YYYYYY", ge, he), 
Pe([ "YYYYY", "YYYYYY" ], He), Pe("YYYY", function(e, t) {
t[He] = 2 === e.length ? i.parseTwoDigitYear(e) : Oe(e);
}), Pe("YY", function(e, t) {
t[He] = i.parseTwoDigitYear(e);
}), Pe("Y", function(e, t) {
t[He] = parseInt(e, 10);
}), i.parseTwoDigitYear = function(e) {
return Oe(e) + (Oe(e) > 68 ? 1900 : 2e3);
};
var $e, Ze = Xe("FullYear", !0);
function Ke() {
return Re(this.year());
}
function Xe(e, t) {
return function(n) {
return null != n ? (Qe(this, e, n), i.updateOffset(this, t), this) : Je(this, e);
};
}
function Je(e, t) {
if (!e.isValid()) return NaN;
var n = e._d, r = e._isUTC;
switch (t) {
case "Milliseconds":
return r ? n.getUTCMilliseconds() : n.getMilliseconds();

case "Seconds":
return r ? n.getUTCSeconds() : n.getSeconds();

case "Minutes":
return r ? n.getUTCMinutes() : n.getMinutes();

case "Hours":
return r ? n.getUTCHours() : n.getHours();

case "Date":
return r ? n.getUTCDate() : n.getDate();

case "Day":
return r ? n.getUTCDay() : n.getDay();

case "Month":
return r ? n.getUTCMonth() : n.getMonth();

case "FullYear":
return r ? n.getUTCFullYear() : n.getFullYear();

default:
return NaN;
}
}
function Qe(e, t, n) {
var r, i, o, s, a;
if (e.isValid() && !isNaN(n)) {
switch (r = e._d, i = e._isUTC, t) {
case "Milliseconds":
return void (i ? r.setUTCMilliseconds(n) : r.setMilliseconds(n));

case "Seconds":
return void (i ? r.setUTCSeconds(n) : r.setSeconds(n));

case "Minutes":
return void (i ? r.setUTCMinutes(n) : r.setMinutes(n));

case "Hours":
return void (i ? r.setUTCHours(n) : r.setHours(n));

case "Date":
return void (i ? r.setUTCDate(n) : r.setDate(n));

case "FullYear":
break;

default:
return;
}
o = n, s = e.month(), a = 29 !== (a = e.date()) || 1 !== s || Re(o) ? a : 28, i ? r.setUTCFullYear(o, s, a) : r.setFullYear(o, s, a);
}
}
function et(e) {
return L(this[e = re(e)]) ? this[e]() : this;
}
function tt(e, t) {
if ("object" == typeof e) {
var n, r = se(e = ie(e)), i = r.length;
for (n = 0; n < i; n++) this[r[n].unit](e[r[n].unit]);
} else if (L(this[e = re(e)])) return this[e](t);
return this;
}
function nt(e, t) {
return (e % t + t) % t;
}
function rt(e, t) {
if (isNaN(e) || isNaN(t)) return NaN;
var n = nt(t, 12);
return e += (t - n) / 12, 1 === n ? Re(e) ? 29 : 28 : 31 - n % 7 % 2;
}
$e = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
var t;
for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
return -1;
}, U("M", [ "MM", 2 ], "Mo", function() {
return this.month() + 1;
}), U("MMM", 0, 0, function(e) {
return this.localeData().monthsShort(this, e);
}), U("MMMM", 0, 0, function(e) {
return this.localeData().months(this, e);
}), Ee("M", fe, ke), Ee("MM", fe, le), Ee("MMM", function(e, t) {
return t.monthsShortRegex(e);
}), Ee("MMMM", function(e, t) {
return t.monthsRegex(e);
}), Pe([ "M", "MM" ], function(e, t) {
t[Fe] = Oe(e) - 1;
}), Pe([ "MMM", "MMMM" ], function(e, t, n, r) {
var i = n._locale.monthsParse(e, r, n._strict);
null != i ? t[Fe] = i : y(n).invalidMonth = e;
});
var it = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ot = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), st = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, at = De, ut = De;
function lt(e, t) {
return e ? s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || st).test(t) ? "format" : "standalone"][e.month()] : s(this._months) ? this._months : this._months.standalone;
}
function ct(e, t) {
return e ? s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[st.test(t) ? "format" : "standalone"][e.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function dt(e, t, n) {
var r, i, o, s = e.toLocaleLowerCase();
if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], 
this._shortMonthsParse = [], r = 0; r < 12; ++r) o = p([ 2e3, r ]), this._shortMonthsParse[r] = this.monthsShort(o, "").toLocaleLowerCase(), 
this._longMonthsParse[r] = this.months(o, "").toLocaleLowerCase();
return n ? "MMM" === t ? -1 !== (i = $e.call(this._shortMonthsParse, s)) ? i : null : -1 !== (i = $e.call(this._longMonthsParse, s)) ? i : null : "MMM" === t ? -1 !== (i = $e.call(this._shortMonthsParse, s)) || -1 !== (i = $e.call(this._longMonthsParse, s)) ? i : null : -1 !== (i = $e.call(this._longMonthsParse, s)) || -1 !== (i = $e.call(this._shortMonthsParse, s)) ? i : null;
}
function ht(e, t, n) {
var r, i, o;
if (this._monthsParseExact) return dt.call(this, e, t, n);
for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), 
r = 0; r < 12; r++) {
if (i = p([ 2e3, r ]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), 
this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), 
n || this._monthsParse[r] || (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), 
this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
if (!n && this._monthsParse[r].test(e)) return r;
}
}
function ft(e, t) {
if (!e.isValid()) return e;
if ("string" == typeof t) if (/^\d+$/.test(t)) t = Oe(t); else if (!d(t = e.localeData().monthsParse(t))) return e;
var n = t, r = e.date();
return r = r < 29 ? r : Math.min(r, rt(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r), 
e;
}
function mt(e) {
return null != e ? (ft(this, e), i.updateOffset(this, !0), this) : Je(this, "Month");
}
function pt() {
return rt(this.year(), this.month());
}
function _t(e) {
return this._monthsParseExact ? (u(this, "_monthsRegex") || gt.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = at), 
this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function yt(e) {
return this._monthsParseExact ? (u(this, "_monthsRegex") || gt.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = ut), 
this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function gt() {
function e(e, t) {
return t.length - e.length;
}
var t, n, r, i, o = [], s = [], a = [];
for (t = 0; t < 12; t++) n = p([ 2e3, t ]), r = Le(this.monthsShort(n, "")), i = Le(this.months(n, "")), 
o.push(r), s.push(i), a.push(i), a.push(r);
o.sort(e), s.sort(e), a.sort(e), this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), 
this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), 
this._monthsShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i");
}
function vt(e, t, n, r, i, o, s) {
var a;
return e < 100 && e >= 0 ? (a = new Date(e + 400, t, n, r, i, o, s), isFinite(a.getFullYear()) && a.setFullYear(e)) : a = new Date(e, t, n, r, i, o, s), 
a;
}
function wt(e) {
var t, n;
return e < 100 && e >= 0 ? ((n = Array.prototype.slice.call(arguments))[0] = e + 400, 
t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), 
t;
}
function bt(e, t, n) {
var r = 7 + t - n;
return -(7 + wt(e, 0, r).getUTCDay() - t) % 7 + r - 1;
}
function Mt(e, t, n, r, i) {
var o, s, a = 1 + 7 * (t - 1) + (7 + n - r) % 7 + bt(e, r, i);
return a <= 0 ? s = qe(o = e - 1) + a : a > qe(e) ? (o = e + 1, s = a - qe(e)) : (o = e, 
s = a), {
year: o,
dayOfYear: s
};
}
function St(e, t, n) {
var r, i, o = bt(e.year(), t, n), s = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;
return s < 1 ? r = s + Dt(i = e.year() - 1, t, n) : s > Dt(e.year(), t, n) ? (r = s - Dt(e.year(), t, n), 
i = e.year() + 1) : (i = e.year(), r = s), {
week: r,
year: i
};
}
function Dt(e, t, n) {
var r = bt(e, t, n), i = bt(e + 1, t, n);
return (qe(e) - r + i) / 7;
}
function kt(e) {
return St(e, this._week.dow, this._week.doy).week;
}
U("w", [ "ww", 2 ], "wo", "week"), U("W", [ "WW", 2 ], "Wo", "isoWeek"), Ee("w", fe, ke), 
Ee("ww", fe, le), Ee("W", fe, ke), Ee("WW", fe, le), Ae([ "w", "ww", "W", "WW" ], function(e, t, n, r) {
t[r.substr(0, 1)] = Oe(e);
});
var Tt = {
dow: 0,
doy: 6
};
function Et() {
return this._week.dow;
}
function Yt() {
return this._week.doy;
}
function Ct(e) {
var t = this.localeData().week(this);
return null == e ? t : this.add(7 * (e - t), "d");
}
function Lt(e) {
var t = St(this, 1, 4).week;
return null == e ? t : this.add(7 * (e - t), "d");
}
function xt(e, t) {
return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10);
}
function Ot(e, t) {
return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Nt(e, t) {
return e.slice(t, 7).concat(e.slice(0, t));
}
U("d", 0, "do", "day"), U("dd", 0, 0, function(e) {
return this.localeData().weekdaysMin(this, e);
}), U("ddd", 0, 0, function(e) {
return this.localeData().weekdaysShort(this, e);
}), U("dddd", 0, 0, function(e) {
return this.localeData().weekdays(this, e);
}), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), Ee("d", fe), Ee("e", fe), 
Ee("E", fe), Ee("dd", function(e, t) {
return t.weekdaysMinRegex(e);
}), Ee("ddd", function(e, t) {
return t.weekdaysShortRegex(e);
}), Ee("dddd", function(e, t) {
return t.weekdaysRegex(e);
}), Ae([ "dd", "ddd", "dddd" ], function(e, t, n, r) {
var i = n._locale.weekdaysParse(e, r, n._strict);
null != i ? t.d = i : y(n).invalidWeekday = e;
}), Ae([ "d", "e", "E" ], function(e, t, n, r) {
t[r] = Oe(e);
});
var Pt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), At = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), jt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Rt = De, Ht = De, Ft = De;
function Wt(e, t) {
var n = s(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
return !0 === e ? Nt(n, this._week.dow) : e ? n[e.day()] : n;
}
function Ut(e) {
return !0 === e ? Nt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function It(e) {
return !0 === e ? Nt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Gt(e, t, n) {
var r, i, o, s = e.toLocaleLowerCase();
if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], 
this._minWeekdaysParse = [], r = 0; r < 7; ++r) o = p([ 2e3, 1 ]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(o, "").toLocaleLowerCase(), 
this._shortWeekdaysParse[r] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(o, "").toLocaleLowerCase();
return n ? "dddd" === t ? -1 !== (i = $e.call(this._weekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = $e.call(this._shortWeekdaysParse, s)) ? i : null : -1 !== (i = $e.call(this._minWeekdaysParse, s)) ? i : null : "dddd" === t ? -1 !== (i = $e.call(this._weekdaysParse, s)) || -1 !== (i = $e.call(this._shortWeekdaysParse, s)) || -1 !== (i = $e.call(this._minWeekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = $e.call(this._shortWeekdaysParse, s)) || -1 !== (i = $e.call(this._weekdaysParse, s)) || -1 !== (i = $e.call(this._minWeekdaysParse, s)) ? i : null : -1 !== (i = $e.call(this._minWeekdaysParse, s)) || -1 !== (i = $e.call(this._weekdaysParse, s)) || -1 !== (i = $e.call(this._shortWeekdaysParse, s)) ? i : null;
}
function Vt(e, t, n) {
var r, i, o;
if (this._weekdaysParseExact) return Gt.call(this, e, t, n);
for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], 
this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
if (i = p([ 2e3, 1 ]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), 
this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), 
this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), 
this._weekdaysParse[r] || (o = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), 
this._weekdaysParse[r] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e)) return r;
if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
if (!n && this._weekdaysParse[r].test(e)) return r;
}
}
function zt(e) {
if (!this.isValid()) return null != e ? this : NaN;
var t = Je(this, "Day");
return null != e ? (e = xt(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Bt(e) {
if (!this.isValid()) return null != e ? this : NaN;
var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
return null == e ? t : this.add(e - t, "d");
}
function qt(e) {
if (!this.isValid()) return null != e ? this : NaN;
if (null != e) {
var t = Ot(e, this.localeData());
return this.day(this.day() % 7 ? t : t - 7);
}
return this.day() || 7;
}
function $t(e) {
return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Xt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = Rt), 
this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Zt(e) {
return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Xt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ht), 
this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Kt(e) {
return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Xt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ft), 
this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Xt() {
function e(e, t) {
return t.length - e.length;
}
var t, n, r, i, o, s = [], a = [], u = [], l = [];
for (t = 0; t < 7; t++) n = p([ 2e3, 1 ]).day(t), r = Le(this.weekdaysMin(n, "")), 
i = Le(this.weekdaysShort(n, "")), o = Le(this.weekdays(n, "")), s.push(r), a.push(i), 
u.push(o), l.push(r), l.push(i), l.push(o);
s.sort(e), a.sort(e), u.sort(e), l.sort(e), this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), 
this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, 
this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), 
this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i");
}
function Jt() {
return this.hours() % 12 || 12;
}
function Qt() {
return this.hours() || 24;
}
function en(e, t) {
U(e, 0, 0, function() {
return this.localeData().meridiem(this.hours(), this.minutes(), t);
});
}
function tn(e, t) {
return t._meridiemParse;
}
function nn(e) {
return "p" === (e + "").toLowerCase().charAt(0);
}
U("H", [ "HH", 2 ], 0, "hour"), U("h", [ "hh", 2 ], 0, Jt), U("k", [ "kk", 2 ], 0, Qt), 
U("hmm", 0, 0, function() {
return "" + Jt.apply(this) + j(this.minutes(), 2);
}), U("hmmss", 0, 0, function() {
return "" + Jt.apply(this) + j(this.minutes(), 2) + j(this.seconds(), 2);
}), U("Hmm", 0, 0, function() {
return "" + this.hours() + j(this.minutes(), 2);
}), U("Hmmss", 0, 0, function() {
return "" + this.hours() + j(this.minutes(), 2) + j(this.seconds(), 2);
}), en("a", !0), en("A", !1), Ee("a", tn), Ee("A", tn), Ee("H", fe, Te), Ee("h", fe, ke), 
Ee("k", fe, ke), Ee("HH", fe, le), Ee("hh", fe, le), Ee("kk", fe, le), Ee("hmm", me), 
Ee("hmmss", pe), Ee("Hmm", me), Ee("Hmmss", pe), Pe([ "H", "HH" ], Ue), Pe([ "k", "kk" ], function(e, t, n) {
var r = Oe(e);
t[Ue] = 24 === r ? 0 : r;
}), Pe([ "a", "A" ], function(e, t, n) {
n._isPm = n._locale.isPM(e), n._meridiem = e;
}), Pe([ "h", "hh" ], function(e, t, n) {
t[Ue] = Oe(e), y(n).bigHour = !0;
}), Pe("hmm", function(e, t, n) {
var r = e.length - 2;
t[Ue] = Oe(e.substr(0, r)), t[Ie] = Oe(e.substr(r)), y(n).bigHour = !0;
}), Pe("hmmss", function(e, t, n) {
var r = e.length - 4, i = e.length - 2;
t[Ue] = Oe(e.substr(0, r)), t[Ie] = Oe(e.substr(r, 2)), t[Ge] = Oe(e.substr(i)), 
y(n).bigHour = !0;
}), Pe("Hmm", function(e, t, n) {
var r = e.length - 2;
t[Ue] = Oe(e.substr(0, r)), t[Ie] = Oe(e.substr(r));
}), Pe("Hmmss", function(e, t, n) {
var r = e.length - 4, i = e.length - 2;
t[Ue] = Oe(e.substr(0, r)), t[Ie] = Oe(e.substr(r, 2)), t[Ge] = Oe(e.substr(i));
});
var rn = /[ap]\.?m?\.?/i, on = Xe("Hours", !0);
function sn(e, t, n) {
return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var an, un = {
calendar: P,
longDateFormat: B,
invalidDate: $,
ordinal: K,
dayOfMonthOrdinalParse: X,
relativeTime: Q,
months: it,
monthsShort: ot,
week: Tt,
weekdays: Pt,
weekdaysMin: jt,
weekdaysShort: At,
meridiemParse: rn
}, ln = {}, cn = {};
function dn(e, t) {
var n, r = Math.min(e.length, t.length);
for (n = 0; n < r; n += 1) if (e[n] !== t[n]) return n;
return r;
}
function hn(e) {
return e ? e.toLowerCase().replace("_", "-") : e;
}
function fn(e) {
for (var t, n, r, i, o = 0; o < e.length; ) {
for (t = (i = hn(e[o]).split("-")).length, n = (n = hn(e[o + 1])) ? n.split("-") : null; t > 0; ) {
if (r = pn(i.slice(0, t).join("-"))) return r;
if (n && n.length >= t && dn(i, n) >= t - 1) break;
t--;
}
o++;
}
return an;
}
function mn(e) {
return !(!e || !e.match("^[^/\\\\]*$"));
}
function pn(t) {
var r = null;
if (void 0 === ln[t] && e && e.exports && mn(t)) try {
r = an._abbr, n(5358)("./" + t), _n(r);
} catch (e) {
ln[t] = null;
}
return ln[t];
}
function _n(e, t) {
var n;
return e && ((n = c(t) ? vn(e) : yn(e, t)) ? an = n : "undefined" != typeof console && console.warn), 
an._abbr;
}
function yn(e, t) {
if (null !== t) {
var n, r = un;
if (t.abbr = e, null != ln[e]) C("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), 
r = ln[e]._config; else if (null != t.parentLocale) if (null != ln[t.parentLocale]) r = ln[t.parentLocale]._config; else {
if (null == (n = pn(t.parentLocale))) return cn[t.parentLocale] || (cn[t.parentLocale] = []), 
cn[t.parentLocale].push({
name: e,
config: t
}), null;
r = n._config;
}
return ln[e] = new N(O(r, t)), cn[e] && cn[e].forEach(function(e) {
yn(e.name, e.config);
}), _n(e), ln[e];
}
return delete ln[e], null;
}
function gn(e, t) {
if (null != t) {
var n, r, i = un;
null != ln[e] && null != ln[e].parentLocale ? ln[e].set(O(ln[e]._config, t)) : (null != (r = pn(e)) && (i = r._config), 
t = O(i, t), null == r && (t.abbr = e), (n = new N(t)).parentLocale = ln[e], ln[e] = n), 
_n(e);
} else null != ln[e] && (null != ln[e].parentLocale ? (ln[e] = ln[e].parentLocale, 
e === _n() && _n(e)) : null != ln[e] && delete ln[e]);
return ln[e];
}
function vn(e) {
var t;
if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return an;
if (!s(e)) {
if (t = pn(e)) return t;
e = [ e ];
}
return fn(e);
}
function wn() {
return E(ln);
}
function bn(e) {
var t, n = e._a;
return n && -2 === y(e).overflow && (t = n[Fe] < 0 || n[Fe] > 11 ? Fe : n[We] < 1 || n[We] > rt(n[He], n[Fe]) ? We : n[Ue] < 0 || n[Ue] > 24 || 24 === n[Ue] && (0 !== n[Ie] || 0 !== n[Ge] || 0 !== n[Ve]) ? Ue : n[Ie] < 0 || n[Ie] > 59 ? Ie : n[Ge] < 0 || n[Ge] > 59 ? Ge : n[Ve] < 0 || n[Ve] > 999 ? Ve : -1, 
y(e)._overflowDayOfYear && (t < He || t > We) && (t = We), y(e)._overflowWeeks && -1 === t && (t = ze), 
y(e)._overflowWeekday && -1 === t && (t = Be), y(e).overflow = t), e;
}
var Mn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Sn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Dn = /Z|[+-]\d\d(?::?\d\d)?/, kn = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, !1 ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, !1 ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, !1 ], [ "YYYYDDD", /\d{7}/ ], [ "YYYYMM", /\d{6}/, !1 ], [ "YYYY", /\d{4}/, !1 ] ], Tn = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ], En = /^\/?Date\((-?\d+)/i, Yn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Cn = {
UT: 0,
GMT: 0,
EDT: -240,
EST: -300,
CDT: -300,
CST: -360,
MDT: -360,
MST: -420,
PDT: -420,
PST: -480
};
function Ln(e) {
var t, n, r, i, o, s, a = e._i, u = Mn.exec(a) || Sn.exec(a), l = kn.length, c = Tn.length;
if (u) {
for (y(e).iso = !0, t = 0, n = l; t < n; t++) if (kn[t][1].exec(u[1])) {
i = kn[t][0], r = !1 !== kn[t][2];
break;
}
if (null == i) return void (e._isValid = !1);
if (u[3]) {
for (t = 0, n = c; t < n; t++) if (Tn[t][1].exec(u[3])) {
o = (u[2] || " ") + Tn[t][0];
break;
}
if (null == o) return void (e._isValid = !1);
}
if (!r && null != o) return void (e._isValid = !1);
if (u[4]) {
if (!Dn.exec(u[4])) return void (e._isValid = !1);
s = "Z";
}
e._f = i + (o || "") + (s || ""), In(e);
} else e._isValid = !1;
}
function xn(e, t, n, r, i, o) {
var s = [ On(e), ot.indexOf(t), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10) ];
return o && s.push(parseInt(o, 10)), s;
}
function On(e) {
var t = parseInt(e, 10);
return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Nn(e) {
return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Pn(e, t, n) {
return !e || At.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (y(n).weekdayMismatch = !0, 
n._isValid = !1, !1);
}
function An(e, t, n) {
if (e) return Cn[e];
if (t) return 0;
var r = parseInt(n, 10), i = r % 100;
return (r - i) / 100 * 60 + i;
}
function jn(e) {
var t, n = Yn.exec(Nn(e._i));
if (n) {
if (t = xn(n[4], n[3], n[2], n[5], n[6], n[7]), !Pn(n[1], t, e)) return;
e._a = t, e._tzm = An(n[8], n[9], n[10]), e._d = wt.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), 
y(e).rfc2822 = !0;
} else e._isValid = !1;
}
function Rn(e) {
var t = En.exec(e._i);
null === t ? (Ln(e), !1 === e._isValid && (delete e._isValid, jn(e), !1 === e._isValid && (delete e._isValid, 
e._strict ? e._isValid = !1 : i.createFromInputFallback(e)))) : e._d = new Date(+t[1]);
}
function Hn(e, t, n) {
return null != e ? e : null != t ? t : n;
}
function Fn(e) {
var t = new Date(i.now());
return e._useUTC ? [ t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate() ] : [ t.getFullYear(), t.getMonth(), t.getDate() ];
}
function Wn(e) {
var t, n, r, i, o, s = [];
if (!e._d) {
for (r = Fn(e), e._w && null == e._a[We] && null == e._a[Fe] && Un(e), null != e._dayOfYear && (o = Hn(e._a[He], r[He]), 
(e._dayOfYear > qe(o) || 0 === e._dayOfYear) && (y(e)._overflowDayOfYear = !0), 
n = wt(o, 0, e._dayOfYear), e._a[Fe] = n.getUTCMonth(), e._a[We] = n.getUTCDate()), 
t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = s[t] = r[t];
for (;t < 7; t++) e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
24 === e._a[Ue] && 0 === e._a[Ie] && 0 === e._a[Ge] && 0 === e._a[Ve] && (e._nextDay = !0, 
e._a[Ue] = 0), e._d = (e._useUTC ? wt : vt).apply(null, s), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), 
null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ue] = 24), 
e._w && void 0 !== e._w.d && e._w.d !== i && (y(e).weekdayMismatch = !0);
}
}
function Un(e) {
var t, n, r, i, o, s, a, u, l;
null != (t = e._w).GG || null != t.W || null != t.E ? (o = 1, s = 4, n = Hn(t.GG, e._a[He], St(Kn(), 1, 4).year), 
r = Hn(t.W, 1), ((i = Hn(t.E, 1)) < 1 || i > 7) && (u = !0)) : (o = e._locale._week.dow, 
s = e._locale._week.doy, l = St(Kn(), o, s), n = Hn(t.gg, e._a[He], l.year), r = Hn(t.w, l.week), 
null != t.d ? ((i = t.d) < 0 || i > 6) && (u = !0) : null != t.e ? (i = t.e + o, 
(t.e < 0 || t.e > 6) && (u = !0)) : i = o), r < 1 || r > Dt(n, o, s) ? y(e)._overflowWeeks = !0 : null != u ? y(e)._overflowWeekday = !0 : (a = Mt(n, r, i, o, s), 
e._a[He] = a.year, e._dayOfYear = a.dayOfYear);
}
function In(e) {
if (e._f !== i.ISO_8601) if (e._f !== i.RFC_2822) {
e._a = [], y(e).empty = !0;
var t, n, r, o, s, a, u, l = "" + e._i, c = l.length, d = 0;
for (u = (r = z(e._f, e._locale).match(R) || []).length, t = 0; t < u; t++) o = r[t], 
(n = (l.match(Ye(o, e)) || [])[0]) && ((s = l.substr(0, l.indexOf(n))).length > 0 && y(e).unusedInput.push(s), 
l = l.slice(l.indexOf(n) + n.length), d += n.length), W[o] ? (n ? y(e).empty = !1 : y(e).unusedTokens.push(o), 
je(o, n, e)) : e._strict && !n && y(e).unusedTokens.push(o);
y(e).charsLeftOver = c - d, l.length > 0 && y(e).unusedInput.push(l), e._a[Ue] <= 12 && !0 === y(e).bigHour && e._a[Ue] > 0 && (y(e).bigHour = void 0), 
y(e).parsedDateParts = e._a.slice(0), y(e).meridiem = e._meridiem, e._a[Ue] = Gn(e._locale, e._a[Ue], e._meridiem), 
null !== (a = y(e).era) && (e._a[He] = e._locale.erasConvertYear(a, e._a[He])), 
Wn(e), bn(e);
} else jn(e); else Ln(e);
}
function Gn(e, t, n) {
var r;
return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((r = e.isPM(n)) && t < 12 && (t += 12), 
r || 12 !== t || (t = 0), t) : t;
}
function Vn(e) {
var t, n, r, i, o, s, a = !1, u = e._f.length;
if (0 === u) return y(e).invalidFormat = !0, void (e._d = new Date(NaN));
for (i = 0; i < u; i++) o = 0, s = !1, t = M({}, e), null != e._useUTC && (t._useUTC = e._useUTC), 
t._f = e._f[i], In(t), g(t) && (s = !0), o += y(t).charsLeftOver, o += 10 * y(t).unusedTokens.length, 
y(t).score = o, a ? o < r && (r = o, n = t) : (null == r || o < r || s) && (r = o, 
n = t, s && (a = !0));
m(e, n || t);
}
function zn(e) {
if (!e._d) {
var t = ie(e._i), n = void 0 === t.day ? t.date : t.day;
e._a = f([ t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond ], function(e) {
return e && parseInt(e, 10);
}), Wn(e);
}
}
function Bn(e) {
var t = new S(bn(qn(e)));
return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function qn(e) {
var t = e._i, n = e._f;
return e._locale = e._locale || vn(e._l), null === t || void 0 === n && "" === t ? v({
nullInput: !0
}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), D(t) ? new S(bn(t)) : (h(t) ? e._d = t : s(n) ? Vn(e) : n ? In(e) : $n(e), 
g(e) || (e._d = null), e));
}
function $n(e) {
var t = e._i;
c(t) ? e._d = new Date(i.now()) : h(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? Rn(e) : s(t) ? (e._a = f(t.slice(0), function(e) {
return parseInt(e, 10);
}), Wn(e)) : a(t) ? zn(e) : d(t) ? e._d = new Date(t) : i.createFromInputFallback(e);
}
function Zn(e, t, n, r, i) {
var o = {};
return !0 !== t && !1 !== t || (r = t, t = void 0), !0 !== n && !1 !== n || (r = n, 
n = void 0), (a(e) && l(e) || s(e) && 0 === e.length) && (e = void 0), o._isAMomentObject = !0, 
o._useUTC = o._isUTC = i, o._l = n, o._i = e, o._f = t, o._strict = r, Bn(o);
}
function Kn(e, t, n, r) {
return Zn(e, t, n, r, !1);
}
i.createFromInputFallback = T("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
}), i.ISO_8601 = function() {}, i.RFC_2822 = function() {};
var Xn = T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
var e = Kn.apply(null, arguments);
return this.isValid() && e.isValid() ? e < this ? this : e : v();
}), Jn = T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
var e = Kn.apply(null, arguments);
return this.isValid() && e.isValid() ? e > this ? this : e : v();
});
function Qn(e, t) {
var n, r;
if (1 === t.length && s(t[0]) && (t = t[0]), !t.length) return Kn();
for (n = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](n) || (n = t[r]);
return n;
}
function er() {
return Qn("isBefore", [].slice.call(arguments, 0));
}
function tr() {
return Qn("isAfter", [].slice.call(arguments, 0));
}
var nr = function() {
return Date.now ? Date.now() : +new Date;
}, rr = [ "year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond" ];
function ir(e) {
var t, n, r = !1, i = rr.length;
for (t in e) if (u(e, t) && (-1 === $e.call(rr, t) || null != e[t] && isNaN(e[t]))) return !1;
for (n = 0; n < i; ++n) if (e[rr[n]]) {
if (r) return !1;
parseFloat(e[rr[n]]) !== Oe(e[rr[n]]) && (r = !0);
}
return !0;
}
function or() {
return this._isValid;
}
function sr() {
return Cr(NaN);
}
function ar(e) {
var t = ie(e), n = t.year || 0, r = t.quarter || 0, i = t.month || 0, o = t.week || t.isoWeek || 0, s = t.day || 0, a = t.hour || 0, u = t.minute || 0, l = t.second || 0, c = t.millisecond || 0;
this._isValid = ir(t), this._milliseconds = +c + 1e3 * l + 6e4 * u + 1e3 * a * 60 * 60, 
this._days = +s + 7 * o, this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = vn(), 
this._bubble();
}
function ur(e) {
return e instanceof ar;
}
function lr(e) {
return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
}
function cr(e, t, n) {
var r, i = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), s = 0;
for (r = 0; r < i; r++) (n && e[r] !== t[r] || !n && Oe(e[r]) !== Oe(t[r])) && s++;
return s + o;
}
function dr(e, t) {
U(e, 0, 0, function() {
var e = this.utcOffset(), n = "+";
return e < 0 && (e = -e, n = "-"), n + j(~~(e / 60), 2) + t + j(~~e % 60, 2);
});
}
dr("Z", ":"), dr("ZZ", ""), Ee("Z", Me), Ee("ZZ", Me), Pe([ "Z", "ZZ" ], function(e, t, n) {
n._useUTC = !0, n._tzm = fr(Me, e);
});
var hr = /([\+\-]|\d\d)/gi;
function fr(e, t) {
var n, r, i = (t || "").match(e);
return null === i ? null : 0 === (r = 60 * (n = ((i[i.length - 1] || []) + "").match(hr) || [ "-", 0, 0 ])[1] + Oe(n[2])) ? 0 : "+" === n[0] ? r : -r;
}
function mr(e, t) {
var n, r;
return t._isUTC ? (n = t.clone(), r = (D(e) || h(e) ? e.valueOf() : Kn(e).valueOf()) - n.valueOf(), 
n._d.setTime(n._d.valueOf() + r), i.updateOffset(n, !1), n) : Kn(e).local();
}
function pr(e) {
return -Math.round(e._d.getTimezoneOffset());
}
function _r(e, t, n) {
var r, o = this._offset || 0;
if (!this.isValid()) return null != e ? this : NaN;
if (null != e) {
if ("string" == typeof e) {
if (null === (e = fr(Me, e))) return this;
} else Math.abs(e) < 16 && !n && (e *= 60);
return !this._isUTC && t && (r = pr(this)), this._offset = e, this._isUTC = !0, 
null != r && this.add(r, "m"), o !== e && (!t || this._changeInProgress ? Pr(this, Cr(e - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, 
i.updateOffset(this, !0), this._changeInProgress = null)), this;
}
return this._isUTC ? o : pr(this);
}
function yr(e, t) {
return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function gr(e) {
return this.utcOffset(0, e);
}
function vr(e) {
return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(pr(this), "m")), 
this;
}
function wr() {
if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
var e = fr(be, this._i);
null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
}
return this;
}
function br(e) {
return !!this.isValid() && (e = e ? Kn(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
}
function Mr() {
return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Sr() {
if (!c(this._isDSTShifted)) return this._isDSTShifted;
var e, t = {};
return M(t, this), (t = qn(t))._a ? (e = t._isUTC ? p(t._a) : Kn(t._a), this._isDSTShifted = this.isValid() && cr(t._a, e.toArray()) > 0) : this._isDSTShifted = !1, 
this._isDSTShifted;
}
function Dr() {
return !!this.isValid() && !this._isUTC;
}
function kr() {
return !!this.isValid() && this._isUTC;
}
function Tr() {
return !!this.isValid() && this._isUTC && 0 === this._offset;
}
i.updateOffset = function() {};
var Er = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Yr = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Cr(e, t) {
var n, r, i, o = e, s = null;
return ur(e) ? o = {
ms: e._milliseconds,
d: e._days,
M: e._months
} : d(e) || !isNaN(+e) ? (o = {}, t ? o[t] = +e : o.milliseconds = +e) : (s = Er.exec(e)) ? (n = "-" === s[1] ? -1 : 1, 
o = {
y: 0,
d: Oe(s[We]) * n,
h: Oe(s[Ue]) * n,
m: Oe(s[Ie]) * n,
s: Oe(s[Ge]) * n,
ms: Oe(lr(1e3 * s[Ve])) * n
}) : (s = Yr.exec(e)) ? (n = "-" === s[1] ? -1 : 1, o = {
y: Lr(s[2], n),
M: Lr(s[3], n),
w: Lr(s[4], n),
d: Lr(s[5], n),
h: Lr(s[6], n),
m: Lr(s[7], n),
s: Lr(s[8], n)
}) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (i = Or(Kn(o.from), Kn(o.to)), 
(o = {}).ms = i.milliseconds, o.M = i.months), r = new ar(o), ur(e) && u(e, "_locale") && (r._locale = e._locale), 
ur(e) && u(e, "_isValid") && (r._isValid = e._isValid), r;
}
function Lr(e, t) {
var n = e && parseFloat(e.replace(",", "."));
return (isNaN(n) ? 0 : n) * t;
}
function xr(e, t) {
var n = {};
return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, 
n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function Or(e, t) {
var n;
return e.isValid() && t.isValid() ? (t = mr(t, e), e.isBefore(t) ? n = xr(e, t) : ((n = xr(t, e)).milliseconds = -n.milliseconds, 
n.months = -n.months), n) : {
milliseconds: 0,
months: 0
};
}
function Nr(e, t) {
return function(n, r) {
var i;
return null === r || isNaN(+r) || (C(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), 
i = n, n = r, r = i), Pr(this, Cr(n, r), e), this;
};
}
function Pr(e, t, n, r) {
var o = t._milliseconds, s = lr(t._days), a = lr(t._months);
e.isValid() && (r = r ?? !0, a && ft(e, Je(e, "Month") + a * n), s && Qe(e, "Date", Je(e, "Date") + s * n), 
o && e._d.setTime(e._d.valueOf() + o * n), r && i.updateOffset(e, s || a));
}
Cr.fn = ar.prototype, Cr.invalid = sr;
var Ar = Nr(1, "add"), jr = Nr(-1, "subtract");
function Rr(e) {
return "string" == typeof e || e instanceof String;
}
function Hr(e) {
return D(e) || h(e) || Rr(e) || d(e) || Wr(e) || Fr(e) || null == e;
}
function Fr(e) {
var t, n, r = a(e) && !l(e), i = !1, o = [ "years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms" ], s = o.length;
for (t = 0; t < s; t += 1) n = o[t], i = i || u(e, n);
return r && i;
}
function Wr(e) {
var t = s(e), n = !1;
return t && (n = 0 === e.filter(function(t) {
return !d(t) && Rr(e);
}).length), t && n;
}
function Ur(e) {
var t, n, r = a(e) && !l(e), i = !1, o = [ "sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse" ];
for (t = 0; t < o.length; t += 1) n = o[t], i = i || u(e, n);
return r && i;
}
function Ir(e, t) {
var n = e.diff(t, "days", !0);
return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function Gr(e, t) {
1 === arguments.length && (arguments[0] ? Hr(arguments[0]) ? (e = arguments[0], 
t = void 0) : Ur(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, 
t = void 0));
var n = e || Kn(), r = mr(n, this).startOf("day"), o = i.calendarFormat(this, r) || "sameElse", s = t && (L(t[o]) ? t[o].call(this, n) : t[o]);
return this.format(s || this.localeData().calendar(o, this, Kn(n)));
}
function Vr() {
return new S(this);
}
function zr(e, t) {
var n = D(e) ? e : Kn(e);
return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = re(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf());
}
function Br(e, t) {
var n = D(e) ? e : Kn(e);
return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = re(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf());
}
function qr(e, t, n, r) {
var i = D(e) ? e : Kn(e), o = D(t) ? t : Kn(t);
return !!(this.isValid() && i.isValid() && o.isValid()) && ("(" === (r = r || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === r[1] ? this.isBefore(o, n) : !this.isAfter(o, n));
}
function $r(e, t) {
var n, r = D(e) ? e : Kn(e);
return !(!this.isValid() || !r.isValid()) && ("millisecond" === (t = re(t) || "millisecond") ? this.valueOf() === r.valueOf() : (n = r.valueOf(), 
this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()));
}
function Zr(e, t) {
return this.isSame(e, t) || this.isAfter(e, t);
}
function Kr(e, t) {
return this.isSame(e, t) || this.isBefore(e, t);
}
function Xr(e, t, n) {
var r, i, o;
if (!this.isValid()) return NaN;
if (!(r = mr(e, this)).isValid()) return NaN;
switch (i = 6e4 * (r.utcOffset() - this.utcOffset()), t = re(t)) {
case "year":
o = Jr(this, r) / 12;
break;

case "month":
o = Jr(this, r);
break;

case "quarter":
o = Jr(this, r) / 3;
break;

case "second":
o = (this - r) / 1e3;
break;

case "minute":
o = (this - r) / 6e4;
break;

case "hour":
o = (this - r) / 36e5;
break;

case "day":
o = (this - r - i) / 864e5;
break;

case "week":
o = (this - r - i) / 6048e5;
break;

default:
o = this - r;
}
return n ? o : xe(o);
}
function Jr(e, t) {
if (e.date() < t.date()) return -Jr(t, e);
var n = 12 * (t.year() - e.year()) + (t.month() - e.month()), r = e.clone().add(n, "months");
return -(n + (t - r < 0 ? (t - r) / (r - e.clone().add(n - 1, "months")) : (t - r) / (e.clone().add(n + 1, "months") - r))) || 0;
}
function Qr() {
return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function ei(e) {
if (!this.isValid()) return null;
var t = !0 !== e, n = t ? this.clone().utc() : this;
return n.year() < 0 || n.year() > 9999 ? V(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : L(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", V(n, "Z")) : V(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
}
function ti() {
if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
var e, t, n, r, i = "moment", o = "";
return this.isLocal() || (i = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", 
o = "Z"), e = "[" + i + '("]', t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", 
n = "-MM-DD[T]HH:mm:ss.SSS", r = o + '[")]', this.format(e + t + n + r);
}
function ni(e) {
e || (e = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
var t = V(this, e);
return this.localeData().postformat(t);
}
function ri(e, t) {
return this.isValid() && (D(e) && e.isValid() || Kn(e).isValid()) ? Cr({
to: this,
from: e
}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function ii(e) {
return this.from(Kn(), e);
}
function oi(e, t) {
return this.isValid() && (D(e) && e.isValid() || Kn(e).isValid()) ? Cr({
from: this,
to: e
}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function si(e) {
return this.to(Kn(), e);
}
function ai(e) {
var t;
return void 0 === e ? this._locale._abbr : (null != (t = vn(e)) && (this._locale = t), 
this);
}
i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
var ui = T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
return void 0 === e ? this.localeData() : this.locale(e);
});
function li() {
return this._locale;
}
var ci = 1e3, di = 60 * ci, hi = 60 * di, fi = 3506328 * hi;
function mi(e, t) {
return (e % t + t) % t;
}
function pi(e, t, n) {
return e < 100 && e >= 0 ? new Date(e + 400, t, n) - fi : new Date(e, t, n).valueOf();
}
function _i(e, t, n) {
return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - fi : Date.UTC(e, t, n);
}
function yi(e) {
var t, n;
if (void 0 === (e = re(e)) || "millisecond" === e || !this.isValid()) return this;
switch (n = this._isUTC ? _i : pi, e) {
case "year":
t = n(this.year(), 0, 1);
break;

case "quarter":
t = n(this.year(), this.month() - this.month() % 3, 1);
break;

case "month":
t = n(this.year(), this.month(), 1);
break;

case "week":
t = n(this.year(), this.month(), this.date() - this.weekday());
break;

case "isoWeek":
t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
break;

case "day":
case "date":
t = n(this.year(), this.month(), this.date());
break;

case "hour":
t = this._d.valueOf(), t -= mi(t + (this._isUTC ? 0 : this.utcOffset() * di), hi);
break;

case "minute":
t = this._d.valueOf(), t -= mi(t, di);
break;

case "second":
t = this._d.valueOf(), t -= mi(t, ci);
}
return this._d.setTime(t), i.updateOffset(this, !0), this;
}
function gi(e) {
var t, n;
if (void 0 === (e = re(e)) || "millisecond" === e || !this.isValid()) return this;
switch (n = this._isUTC ? _i : pi, e) {
case "year":
t = n(this.year() + 1, 0, 1) - 1;
break;

case "quarter":
t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
break;

case "month":
t = n(this.year(), this.month() + 1, 1) - 1;
break;

case "week":
t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
break;

case "isoWeek":
t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
break;

case "day":
case "date":
t = n(this.year(), this.month(), this.date() + 1) - 1;
break;

case "hour":
t = this._d.valueOf(), t += hi - mi(t + (this._isUTC ? 0 : this.utcOffset() * di), hi) - 1;
break;

case "minute":
t = this._d.valueOf(), t += di - mi(t, di) - 1;
break;

case "second":
t = this._d.valueOf(), t += ci - mi(t, ci) - 1;
}
return this._d.setTime(t), i.updateOffset(this, !0), this;
}
function vi() {
return this._d.valueOf() - 6e4 * (this._offset || 0);
}
function wi() {
return Math.floor(this.valueOf() / 1e3);
}
function bi() {
return new Date(this.valueOf());
}
function Mi() {
var e = this;
return [ e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond() ];
}
function Si() {
var e = this;
return {
years: e.year(),
months: e.month(),
date: e.date(),
hours: e.hours(),
minutes: e.minutes(),
seconds: e.seconds(),
milliseconds: e.milliseconds()
};
}
function Di() {
return this.isValid() ? this.toISOString() : null;
}
function ki() {
return g(this);
}
function Ti() {
return m({}, y(this));
}
function Ei() {
return y(this).overflow;
}
function Yi() {
return {
input: this._i,
format: this._f,
locale: this._locale,
isUTC: this._isUTC,
strict: this._strict
};
}
function Ci(e, t) {
var n, r, o, s = this._eras || vn("en")._eras;
for (n = 0, r = s.length; n < r; ++n) switch ("string" == typeof s[n].since && (o = i(s[n].since).startOf("day"), 
s[n].since = o.valueOf()), typeof s[n].until) {
case "undefined":
s[n].until = 1 / 0;
break;

case "string":
o = i(s[n].until).startOf("day").valueOf(), s[n].until = o.valueOf();
}
return s;
}
function Li(e, t, n) {
var r, i, o, s, a, u = this.eras();
for (e = e.toUpperCase(), r = 0, i = u.length; r < i; ++r) if (o = u[r].name.toUpperCase(), 
s = u[r].abbr.toUpperCase(), a = u[r].narrow.toUpperCase(), n) switch (t) {
case "N":
case "NN":
case "NNN":
if (s === e) return u[r];
break;

case "NNNN":
if (o === e) return u[r];
break;

case "NNNNN":
if (a === e) return u[r];
} else if ([ o, s, a ].indexOf(e) >= 0) return u[r];
}
function xi(e, t) {
var n = e.since <= e.until ? 1 : -1;
return void 0 === t ? i(e.since).year() : i(e.since).year() + (t - e.offset) * n;
}
function Oi() {
var e, t, n, r = this.localeData().eras();
for (e = 0, t = r.length; e < t; ++e) {
if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until) return r[e].name;
if (r[e].until <= n && n <= r[e].since) return r[e].name;
}
return "";
}
function Ni() {
var e, t, n, r = this.localeData().eras();
for (e = 0, t = r.length; e < t; ++e) {
if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until) return r[e].narrow;
if (r[e].until <= n && n <= r[e].since) return r[e].narrow;
}
return "";
}
function Pi() {
var e, t, n, r = this.localeData().eras();
for (e = 0, t = r.length; e < t; ++e) {
if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until) return r[e].abbr;
if (r[e].until <= n && n <= r[e].since) return r[e].abbr;
}
return "";
}
function Ai() {
var e, t, n, r, o = this.localeData().eras();
for (e = 0, t = o.length; e < t; ++e) if (n = o[e].since <= o[e].until ? 1 : -1, 
r = this.clone().startOf("day").valueOf(), o[e].since <= r && r <= o[e].until || o[e].until <= r && r <= o[e].since) return (this.year() - i(o[e].since).year()) * n + o[e].offset;
return this.year();
}
function ji(e) {
return u(this, "_erasNameRegex") || Gi.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Ri(e) {
return u(this, "_erasAbbrRegex") || Gi.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Hi(e) {
return u(this, "_erasNarrowRegex") || Gi.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Fi(e, t) {
return t.erasAbbrRegex(e);
}
function Wi(e, t) {
return t.erasNameRegex(e);
}
function Ui(e, t) {
return t.erasNarrowRegex(e);
}
function Ii(e, t) {
return t._eraYearOrdinalRegex || ve;
}
function Gi() {
var e, t, n, r, i, o = [], s = [], a = [], u = [], l = this.eras();
for (e = 0, t = l.length; e < t; ++e) n = Le(l[e].name), r = Le(l[e].abbr), i = Le(l[e].narrow), 
s.push(n), o.push(r), a.push(i), u.push(n), u.push(r), u.push(i);
this._erasRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + s.join("|") + ")", "i"), 
this._erasAbbrRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + a.join("|") + ")", "i");
}
function Vi(e, t) {
U(0, [ e, e.length ], 0, t);
}
function zi(e) {
return Xi.call(this, e, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy);
}
function Bi(e) {
return Xi.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
}
function qi() {
return Dt(this.year(), 1, 4);
}
function $i() {
return Dt(this.isoWeekYear(), 1, 4);
}
function Zi() {
var e = this.localeData()._week;
return Dt(this.year(), e.dow, e.doy);
}
function Ki() {
var e = this.localeData()._week;
return Dt(this.weekYear(), e.dow, e.doy);
}
function Xi(e, t, n, r, i) {
var o;
return null == e ? St(this, r, i).year : (t > (o = Dt(e, r, i)) && (t = o), Ji.call(this, e, t, n, r, i));
}
function Ji(e, t, n, r, i) {
var o = Mt(e, t, n, r, i), s = wt(o.year, 0, o.dayOfYear);
return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), 
this;
}
function Qi(e) {
return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
}
U("N", 0, 0, "eraAbbr"), U("NN", 0, 0, "eraAbbr"), U("NNN", 0, 0, "eraAbbr"), U("NNNN", 0, 0, "eraName"), 
U("NNNNN", 0, 0, "eraNarrow"), U("y", [ "y", 1 ], "yo", "eraYear"), U("y", [ "yy", 2 ], 0, "eraYear"), 
U("y", [ "yyy", 3 ], 0, "eraYear"), U("y", [ "yyyy", 4 ], 0, "eraYear"), Ee("N", Fi), 
Ee("NN", Fi), Ee("NNN", Fi), Ee("NNNN", Wi), Ee("NNNNN", Ui), Pe([ "N", "NN", "NNN", "NNNN", "NNNNN" ], function(e, t, n, r) {
var i = n._locale.erasParse(e, r, n._strict);
i ? y(n).era = i : y(n).invalidEra = e;
}), Ee("y", ve), Ee("yy", ve), Ee("yyy", ve), Ee("yyyy", ve), Ee("yo", Ii), Pe([ "y", "yy", "yyy", "yyyy" ], He), 
Pe([ "yo" ], function(e, t, n, r) {
var i;
n._locale._eraYearOrdinalRegex && (i = e.match(n._locale._eraYearOrdinalRegex)), 
n._locale.eraYearOrdinalParse ? t[He] = n._locale.eraYearOrdinalParse(e, i) : t[He] = parseInt(e, 10);
}), U(0, [ "gg", 2 ], 0, function() {
return this.weekYear() % 100;
}), U(0, [ "GG", 2 ], 0, function() {
return this.isoWeekYear() % 100;
}), Vi("gggg", "weekYear"), Vi("ggggg", "weekYear"), Vi("GGGG", "isoWeekYear"), 
Vi("GGGGG", "isoWeekYear"), Ee("G", we), Ee("g", we), Ee("GG", fe, le), Ee("gg", fe, le), 
Ee("GGGG", ye, de), Ee("gggg", ye, de), Ee("GGGGG", ge, he), Ee("ggggg", ge, he), 
Ae([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(e, t, n, r) {
t[r.substr(0, 2)] = Oe(e);
}), Ae([ "gg", "GG" ], function(e, t, n, r) {
t[r] = i.parseTwoDigitYear(e);
}), U("Q", 0, "Qo", "quarter"), Ee("Q", ue), Pe("Q", function(e, t) {
t[Fe] = 3 * (Oe(e) - 1);
}), U("D", [ "DD", 2 ], "Do", "date"), Ee("D", fe, ke), Ee("DD", fe, le), Ee("Do", function(e, t) {
return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
}), Pe([ "D", "DD" ], We), Pe("Do", function(e, t) {
t[We] = Oe(e.match(fe)[0]);
});
var eo = Xe("Date", !0);
function to(e) {
var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
return null == e ? t : this.add(e - t, "d");
}
U("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear"), Ee("DDD", _e), Ee("DDDD", ce), Pe([ "DDD", "DDDD" ], function(e, t, n) {
n._dayOfYear = Oe(e);
}), U("m", [ "mm", 2 ], 0, "minute"), Ee("m", fe, Te), Ee("mm", fe, le), Pe([ "m", "mm" ], Ie);
var no = Xe("Minutes", !1);
U("s", [ "ss", 2 ], 0, "second"), Ee("s", fe, Te), Ee("ss", fe, le), Pe([ "s", "ss" ], Ge);
var ro, io, oo = Xe("Seconds", !1);
for (U("S", 0, 0, function() {
return ~~(this.millisecond() / 100);
}), U(0, [ "SS", 2 ], 0, function() {
return ~~(this.millisecond() / 10);
}), U(0, [ "SSS", 3 ], 0, "millisecond"), U(0, [ "SSSS", 4 ], 0, function() {
return 10 * this.millisecond();
}), U(0, [ "SSSSS", 5 ], 0, function() {
return 100 * this.millisecond();
}), U(0, [ "SSSSSS", 6 ], 0, function() {
return 1e3 * this.millisecond();
}), U(0, [ "SSSSSSS", 7 ], 0, function() {
return 1e4 * this.millisecond();
}), U(0, [ "SSSSSSSS", 8 ], 0, function() {
return 1e5 * this.millisecond();
}), U(0, [ "SSSSSSSSS", 9 ], 0, function() {
return 1e6 * this.millisecond();
}), Ee("S", _e, ue), Ee("SS", _e, le), Ee("SSS", _e, ce), ro = "SSSS"; ro.length <= 9; ro += "S") Ee(ro, ve);
function so(e, t) {
t[Ve] = Oe(1e3 * ("0." + e));
}
for (ro = "S"; ro.length <= 9; ro += "S") Pe(ro, so);
function ao() {
return this._isUTC ? "UTC" : "";
}
function uo() {
return this._isUTC ? "Coordinated Universal Time" : "";
}
io = Xe("Milliseconds", !1), U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
var lo = S.prototype;
function co(e) {
return Kn(1e3 * e);
}
function ho() {
return Kn.apply(null, arguments).parseZone();
}
function fo(e) {
return e;
}
lo.add = Ar, lo.calendar = Gr, lo.clone = Vr, lo.diff = Xr, lo.endOf = gi, lo.format = ni, 
lo.from = ri, lo.fromNow = ii, lo.to = oi, lo.toNow = si, lo.get = et, lo.invalidAt = Ei, 
lo.isAfter = zr, lo.isBefore = Br, lo.isBetween = qr, lo.isSame = $r, lo.isSameOrAfter = Zr, 
lo.isSameOrBefore = Kr, lo.isValid = ki, lo.lang = ui, lo.locale = ai, lo.localeData = li, 
lo.max = Jn, lo.min = Xn, lo.parsingFlags = Ti, lo.set = tt, lo.startOf = yi, lo.subtract = jr, 
lo.toArray = Mi, lo.toObject = Si, lo.toDate = bi, lo.toISOString = ei, lo.inspect = ti, 
"undefined" != typeof Symbol && null != Symbol.for && (lo[Symbol.for("nodejs.util.inspect.custom")] = function() {
return "Moment<" + this.format() + ">";
}), lo.toJSON = Di, lo.toString = Qr, lo.unix = wi, lo.valueOf = vi, lo.creationData = Yi, 
lo.eraName = Oi, lo.eraNarrow = Ni, lo.eraAbbr = Pi, lo.eraYear = Ai, lo.year = Ze, 
lo.isLeapYear = Ke, lo.weekYear = zi, lo.isoWeekYear = Bi, lo.quarter = lo.quarters = Qi, 
lo.month = mt, lo.daysInMonth = pt, lo.week = lo.weeks = Ct, lo.isoWeek = lo.isoWeeks = Lt, 
lo.weeksInYear = Zi, lo.weeksInWeekYear = Ki, lo.isoWeeksInYear = qi, lo.isoWeeksInISOWeekYear = $i, 
lo.date = eo, lo.day = lo.days = zt, lo.weekday = Bt, lo.isoWeekday = qt, lo.dayOfYear = to, 
lo.hour = lo.hours = on, lo.minute = lo.minutes = no, lo.second = lo.seconds = oo, 
lo.millisecond = lo.milliseconds = io, lo.utcOffset = _r, lo.utc = gr, lo.local = vr, 
lo.parseZone = wr, lo.hasAlignedHourOffset = br, lo.isDST = Mr, lo.isLocal = Dr, 
lo.isUtcOffset = kr, lo.isUtc = Tr, lo.isUTC = Tr, lo.zoneAbbr = ao, lo.zoneName = uo, 
lo.dates = T("dates accessor is deprecated. Use date instead.", eo), lo.months = T("months accessor is deprecated. Use month instead", mt), 
lo.years = T("years accessor is deprecated. Use year instead", Ze), lo.zone = T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", yr), 
lo.isDSTShifted = T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Sr);
var mo = N.prototype;
function po(e, t, n, r) {
var i = vn(), o = p().set(r, t);
return i[n](o, e);
}
function _o(e, t, n) {
if (d(e) && (t = e, e = void 0), e = e || "", null != t) return po(e, t, n, "month");
var r, i = [];
for (r = 0; r < 12; r++) i[r] = po(e, r, n, "month");
return i;
}
function yo(e, t, n, r) {
"boolean" == typeof e ? (d(t) && (n = t, t = void 0), t = t || "") : (n = t = e, 
e = !1, d(t) && (n = t, t = void 0), t = t || "");
var i, o = vn(), s = e ? o._week.dow : 0, a = [];
if (null != n) return po(t, (n + s) % 7, r, "day");
for (i = 0; i < 7; i++) a[i] = po(t, (i + s) % 7, r, "day");
return a;
}
function go(e, t) {
return _o(e, t, "months");
}
function vo(e, t) {
return _o(e, t, "monthsShort");
}
function wo(e, t, n) {
return yo(e, t, n, "weekdays");
}
function bo(e, t, n) {
return yo(e, t, n, "weekdaysShort");
}
function Mo(e, t, n) {
return yo(e, t, n, "weekdaysMin");
}
mo.calendar = A, mo.longDateFormat = q, mo.invalidDate = Z, mo.ordinal = J, mo.preparse = fo, 
mo.postformat = fo, mo.relativeTime = ee, mo.pastFuture = te, mo.set = x, mo.eras = Ci, 
mo.erasParse = Li, mo.erasConvertYear = xi, mo.erasAbbrRegex = Ri, mo.erasNameRegex = ji, 
mo.erasNarrowRegex = Hi, mo.months = lt, mo.monthsShort = ct, mo.monthsParse = ht, 
mo.monthsRegex = yt, mo.monthsShortRegex = _t, mo.week = kt, mo.firstDayOfYear = Yt, 
mo.firstDayOfWeek = Et, mo.weekdays = Wt, mo.weekdaysMin = It, mo.weekdaysShort = Ut, 
mo.weekdaysParse = Vt, mo.weekdaysRegex = $t, mo.weekdaysShortRegex = Zt, mo.weekdaysMinRegex = Kt, 
mo.isPM = nn, mo.meridiem = sn, _n("en", {
eras: [ {
since: "0001-01-01",
until: 1 / 0,
offset: 1,
name: "Anno Domini",
narrow: "AD",
abbr: "AD"
}, {
since: "0000-12-31",
until: -1 / 0,
offset: 1,
name: "Before Christ",
narrow: "BC",
abbr: "BC"
} ],
dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
ordinal: function(e) {
var t = e % 10;
return e + (1 === Oe(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
}
}), i.lang = T("moment.lang is deprecated. Use moment.locale instead.", _n), i.langData = T("moment.langData is deprecated. Use moment.localeData instead.", vn);
var So = Math.abs;
function Do() {
var e = this._data;
return this._milliseconds = So(this._milliseconds), this._days = So(this._days), 
this._months = So(this._months), e.milliseconds = So(e.milliseconds), e.seconds = So(e.seconds), 
e.minutes = So(e.minutes), e.hours = So(e.hours), e.months = So(e.months), e.years = So(e.years), 
this;
}
function ko(e, t, n, r) {
var i = Cr(t, n);
return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, 
e._bubble();
}
function To(e, t) {
return ko(this, e, t, 1);
}
function Eo(e, t) {
return ko(this, e, t, -1);
}
function Yo(e) {
return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Co() {
var e, t, n, r, i, o = this._milliseconds, s = this._days, a = this._months, u = this._data;
return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * Yo(xo(a) + s), 
s = 0, a = 0), u.milliseconds = o % 1e3, e = xe(o / 1e3), u.seconds = e % 60, t = xe(e / 60), 
u.minutes = t % 60, n = xe(t / 60), u.hours = n % 24, s += xe(n / 24), a += i = xe(Lo(s)), 
s -= Yo(xo(i)), r = xe(a / 12), a %= 12, u.days = s, u.months = a, u.years = r, 
this;
}
function Lo(e) {
return 4800 * e / 146097;
}
function xo(e) {
return 146097 * e / 4800;
}
function Oo(e) {
if (!this.isValid()) return NaN;
var t, n, r = this._milliseconds;
if ("month" === (e = re(e)) || "quarter" === e || "year" === e) switch (t = this._days + r / 864e5, 
n = this._months + Lo(t), e) {
case "month":
return n;

case "quarter":
return n / 3;

case "year":
return n / 12;
} else switch (t = this._days + Math.round(xo(this._months)), e) {
case "week":
return t / 7 + r / 6048e5;

case "day":
return t + r / 864e5;

case "hour":
return 24 * t + r / 36e5;

case "minute":
return 1440 * t + r / 6e4;

case "second":
return 86400 * t + r / 1e3;

case "millisecond":
return Math.floor(864e5 * t) + r;

default:
throw new Error("Unknown unit " + e);
}
}
function No(e) {
return function() {
return this.as(e);
};
}
var Po = No("ms"), Ao = No("s"), jo = No("m"), Ro = No("h"), Ho = No("d"), Fo = No("w"), Wo = No("M"), Uo = No("Q"), Io = No("y"), Go = Po;
function Vo() {
return Cr(this);
}
function zo(e) {
return e = re(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Bo(e) {
return function() {
return this.isValid() ? this._data[e] : NaN;
};
}
var qo = Bo("milliseconds"), $o = Bo("seconds"), Zo = Bo("minutes"), Ko = Bo("hours"), Xo = Bo("days"), Jo = Bo("months"), Qo = Bo("years");
function es() {
return xe(this.days() / 7);
}
var ts = Math.round, ns = {
ss: 44,
s: 45,
m: 45,
h: 22,
d: 26,
w: null,
M: 11
};
function rs(e, t, n, r, i) {
return i.relativeTime(t || 1, !!n, e, r);
}
function is(e, t, n, r) {
var i = Cr(e).abs(), o = ts(i.as("s")), s = ts(i.as("m")), a = ts(i.as("h")), u = ts(i.as("d")), l = ts(i.as("M")), c = ts(i.as("w")), d = ts(i.as("y")), h = o <= n.ss && [ "s", o ] || o < n.s && [ "ss", o ] || s <= 1 && [ "m" ] || s < n.m && [ "mm", s ] || a <= 1 && [ "h" ] || a < n.h && [ "hh", a ] || u <= 1 && [ "d" ] || u < n.d && [ "dd", u ];
return null != n.w && (h = h || c <= 1 && [ "w" ] || c < n.w && [ "ww", c ]), (h = h || l <= 1 && [ "M" ] || l < n.M && [ "MM", l ] || d <= 1 && [ "y" ] || [ "yy", d ])[2] = t, 
h[3] = +e > 0, h[4] = r, rs.apply(null, h);
}
function os(e) {
return void 0 === e ? ts : "function" == typeof e && (ts = e, !0);
}
function ss(e, t) {
return void 0 !== ns[e] && (void 0 === t ? ns[e] : (ns[e] = t, "s" === e && (ns.ss = t - 1), 
!0));
}
function as(e, t) {
if (!this.isValid()) return this.localeData().invalidDate();
var n, r, i = !1, o = ns;
return "object" == typeof e && (t = e, e = !1), "boolean" == typeof e && (i = e), 
"object" == typeof t && (o = Object.assign({}, ns, t), null != t.s && null == t.ss && (o.ss = t.s - 1)), 
r = is(this, !i, o, n = this.localeData()), i && (r = n.pastFuture(+this, r)), n.postformat(r);
}
var us = Math.abs;
function ls(e) {
return (e > 0) - (e < 0) || +e;
}
function cs() {
if (!this.isValid()) return this.localeData().invalidDate();
var e, t, n, r, i, o, s, a, u = us(this._milliseconds) / 1e3, l = us(this._days), c = us(this._months), d = this.asSeconds();
return d ? (e = xe(u / 60), t = xe(e / 60), u %= 60, e %= 60, n = xe(c / 12), c %= 12, 
r = u ? u.toFixed(3).replace(/\.?0+$/, "") : "", i = d < 0 ? "-" : "", o = ls(this._months) !== ls(d) ? "-" : "", 
s = ls(this._days) !== ls(d) ? "-" : "", a = ls(this._milliseconds) !== ls(d) ? "-" : "", 
i + "P" + (n ? o + n + "Y" : "") + (c ? o + c + "M" : "") + (l ? s + l + "D" : "") + (t || e || u ? "T" : "") + (t ? a + t + "H" : "") + (e ? a + e + "M" : "") + (u ? a + r + "S" : "")) : "P0D";
}
var ds = ar.prototype;
return ds.isValid = or, ds.abs = Do, ds.add = To, ds.subtract = Eo, ds.as = Oo, 
ds.asMilliseconds = Po, ds.asSeconds = Ao, ds.asMinutes = jo, ds.asHours = Ro, ds.asDays = Ho, 
ds.asWeeks = Fo, ds.asMonths = Wo, ds.asQuarters = Uo, ds.asYears = Io, ds.valueOf = Go, 
ds._bubble = Co, ds.clone = Vo, ds.get = zo, ds.milliseconds = qo, ds.seconds = $o, 
ds.minutes = Zo, ds.hours = Ko, ds.days = Xo, ds.weeks = es, ds.months = Jo, ds.years = Qo, 
ds.humanize = as, ds.toISOString = cs, ds.toString = cs, ds.toJSON = cs, ds.locale = ai, 
ds.localeData = li, ds.toIsoString = T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", cs), 
ds.lang = ui, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), Ee("x", we), Ee("X", Se), 
Pe("X", function(e, t, n) {
n._d = new Date(1e3 * parseFloat(e));
}), Pe("x", function(e, t, n) {
n._d = new Date(Oe(e));
}), i.version = "2.30.1", o(Kn), i.fn = lo, i.min = er, i.max = tr, i.now = nr, 
i.utc = p, i.unix = co, i.months = go, i.isDate = h, i.locale = _n, i.invalid = v, 
i.duration = Cr, i.isMoment = D, i.weekdays = wo, i.parseZone = ho, i.localeData = vn, 
i.isDuration = ur, i.monthsShort = vo, i.weekdaysMin = Mo, i.defineLocale = yn, 
i.updateLocale = gn, i.locales = wn, i.weekdaysShort = bo, i.normalizeUnits = re, 
i.relativeTimeRounding = os, i.relativeTimeThreshold = ss, i.calendarFormat = Ir, 
i.prototype = lo, i.HTML5_FMT = {
DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
DATE: "YYYY-MM-DD",
TIME: "HH:mm",
TIME_SECONDS: "HH:mm:ss",
TIME_MS: "HH:mm:ss.SSS",
WEEK: "GGGG-[W]WW",
MONTH: "YYYY-MM"
}, i;
}();
},
6501: function(e, t, n) {
!function(e) {
"use strict";
var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), r = [ /^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i ], i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
e.defineLocale("es-us", {
months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
monthsShort: function(e, r) {
return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t;
},
monthsRegex: i,
monthsShortRegex: i,
monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
monthsParse: r,
longMonthsParse: r,
shortMonthsParse: r,
weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
weekdaysParseExact: !0,
longDateFormat: {
LT: "h:mm A",
LTS: "h:mm:ss A",
L: "MM/DD/YYYY",
LL: "D [de] MMMM [de] YYYY",
LLL: "D [de] MMMM [de] YYYY h:mm A",
LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
},
calendar: {
sameDay: function() {
return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
nextDay: function() {
return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
nextWeek: function() {
return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
lastDay: function() {
return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
lastWeek: function() {
return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
sameElse: "L"
},
relativeTime: {
future: "en %s",
past: "hace %s",
s: "unos segundos",
ss: "%d segundos",
m: "un minuto",
mm: "%d minutos",
h: "una hora",
hh: "%d horas",
d: "un día",
dd: "%d días",
w: "una semana",
ww: "%d semanas",
M: "un mes",
MM: "%d meses",
y: "un año",
yy: "%d años"
},
dayOfMonthOrdinalParse: /\d{1,2}º/,
ordinal: "%dº",
week: {
dow: 0,
doy: 6
}
});
}(n(6151));
},
6669: function(e) {
var t = Math.ceil, n = Math.floor;
e.exports = function(e) {
return isNaN(e = +e) ? 0 : (e > 0 ? n : t)(e);
};
},
6682: function(e, t, n) {
var r = n(7733);
e.exports = function(e, t, n) {
if (r(e), void 0 === t) return e;
switch (n) {
case 1:
return function(n) {
return e.call(t, n);
};

case 2:
return function(n, r) {
return e.call(t, n, r);
};

case 3:
return function(n, r, i) {
return e.call(t, n, r, i);
};
}
return function() {
return e.apply(t, arguments);
};
};
},
6689: function() {
void 0 === document.documentElement.hidden && (document.head.insertAdjacentHTML("beforeEnd", "<style> [hidden] { display: none } </style>"), 
Object.defineProperty(Element.prototype, "hidden", {
set: function(e) {
this.setAttribute("hidden", e);
},
get: function() {
return this.getAttribute("hidden");
}
}));
},
6751: function(e, t, n) {
var r = n(1963), i = n(4474);
e.exports = function(e) {
return r(i(e));
};
},
6986: function(e, t, n) {
const r = n(1285);
document.addEventListener("click", function(e) {
if (!e.target.closest) return;
if (!e.target.closest(".sitetoolbar__search-toggle")) return;
let t = document.querySelector(".sitetoolbar__search-content");
i || (i = new r({
elem: t
}), i.show());
}), document.addEventListener("click", function(e) {
if (!e.target.closest) return;
let t = e.target.closest("[data-dropdown-toggler]");
if (!t) return;
t.nextElementSibling.style.display = t.nextElementSibling.offsetWidth ? "none" : "block";
}), document.addEventListener("click", function(e) {
if (!e.target.closest) return;
if (!e.target.closest(".sitetoolbar__nav-toggle")) return;
e.target.classList.toggle("sitetoolbar__nav-toggle_active"), document.querySelector(".sitetoolbar").classList.toggle("sitetoolbar_menu_open");
});
let i;
},
7045: function(e, t, n) {
!function(e) {
"use strict";
function t(e, t) {
var n = e.split("_");
return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2];
}
function n(e, n, r) {
return "m" === r ? n ? "минута" : "минуту" : e + " " + t({
ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
hh: "час_часа_часов",
dd: "день_дня_дней",
ww: "неделя_недели_недель",
MM: "месяц_месяца_месяцев",
yy: "год_года_лет"
}[r], +e);
}
var r = [ /^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i ];
e.defineLocale("ru", {
months: {
format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
},
monthsShort: {
format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
},
weekdays: {
standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
},
weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
monthsParse: r,
longMonthsParse: r,
shortMonthsParse: r,
monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
longDateFormat: {
LT: "H:mm",
LTS: "H:mm:ss",
L: "DD.MM.YYYY",
LL: "D MMMM YYYY г.",
LLL: "D MMMM YYYY г., H:mm",
LLLL: "dddd, D MMMM YYYY г., H:mm"
},
calendar: {
sameDay: "[Сегодня, в] LT",
nextDay: "[Завтра, в] LT",
lastDay: "[Вчера, в] LT",
nextWeek: function(e) {
if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
switch (this.day()) {
case 0:
return "[В следующее] dddd, [в] LT";

case 1:
case 2:
case 4:
return "[В следующий] dddd, [в] LT";

case 3:
case 5:
case 6:
return "[В следующую] dddd, [в] LT";
}
},
lastWeek: function(e) {
if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
switch (this.day()) {
case 0:
return "[В прошлое] dddd, [в] LT";

case 1:
case 2:
case 4:
return "[В прошлый] dddd, [в] LT";

case 3:
case 5:
case 6:
return "[В прошлую] dddd, [в] LT";
}
},
sameElse: "L"
},
relativeTime: {
future: "через %s",
past: "%s назад",
s: "несколько секунд",
ss: n,
m: n,
mm: n,
h: "час",
hh: n,
d: "день",
dd: n,
w: "неделя",
ww: n,
M: "месяц",
MM: n,
y: "год",
yy: n
},
meridiemParse: /ночи|утра|дня|вечера/i,
isPM: function(e) {
return /^(дня|вечера)$/.test(e);
},
meridiem: function(e, t, n) {
return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера";
},
dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
ordinal: function(e, t) {
switch (t) {
case "M":
case "d":
case "DDD":
return e + "-й";

case "D":
return e + "-го";

case "w":
case "W":
return e + "-я";

default:
return e;
}
},
week: {
dow: 1,
doy: 4
}
});
}(n(6151));
},
7164: function() {
try {
new CustomEvent("IE has CustomEvent, but doesn't support constructor");
} catch (e) {
window.CustomEvent = function(e, t) {
let n;
return t = t || {
bubbles: !1,
cancelable: !1,
detail: void 0
}, n = document.createEvent("CustomEvent"), n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), 
n;
}, CustomEvent.prototype = Object.create(window.Event.prototype);
}
},
7282: function(e, t, n) {
var r = n(5280).document;
e.exports = r && r.documentElement;
},
7350: function(e, t, n) {
e.exports = !n(8013) && !n(3330)(function() {
return 7 != Object.defineProperty(n(9844)("div"), "a", {
get: function() {
return 7;
}
}).a;
});
},
7412: function() {
(function() {
"use strict";
var e = window.Document.prototype.createElement, t = window.Document.prototype.createElementNS, n = window.Document.prototype.importNode, r = window.Document.prototype.prepend, i = window.Document.prototype.append, o = window.DocumentFragment.prototype.prepend, s = window.DocumentFragment.prototype.append, a = window.Node.prototype.cloneNode, u = window.Node.prototype.appendChild, l = window.Node.prototype.insertBefore, c = window.Node.prototype.removeChild, d = window.Node.prototype.replaceChild, h = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"), f = window.Element.prototype.attachShadow, m = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), p = window.Element.prototype.getAttribute, _ = window.Element.prototype.setAttribute, y = window.Element.prototype.removeAttribute, g = window.Element.prototype.toggleAttribute, v = window.Element.prototype.getAttributeNS, w = window.Element.prototype.setAttributeNS, b = window.Element.prototype.removeAttributeNS, M = window.Element.prototype.insertAdjacentElement, S = window.Element.prototype.insertAdjacentHTML, D = window.Element.prototype.prepend, k = window.Element.prototype.append, T = window.Element.prototype.before, E = window.Element.prototype.after, Y = window.Element.prototype.replaceWith, C = window.Element.prototype.remove, L = window.HTMLElement, x = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), O = window.HTMLElement.prototype.insertAdjacentElement, N = window.HTMLElement.prototype.insertAdjacentHTML, P = new Set;
function A(e) {
var t = P.has(e);
return e = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(e), !t && e;
}
"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(e) {
return P.add(e);
});
var j = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
function R(e) {
var t = e.isConnected;
if (void 0 !== t) return t;
if (j(e)) return !0;
for (;e && !(e.__CE_isImportDocument || e instanceof Document); ) e = e.parentNode || (window.ShadowRoot && e instanceof ShadowRoot ? e.host : void 0);
return !(!e || !(e.__CE_isImportDocument || e instanceof Document));
}
function H(e) {
var t = e.children;
if (t) return Array.prototype.slice.call(t);
for (t = [], e = e.firstChild; e; e = e.nextSibling) e.nodeType === Node.ELEMENT_NODE && t.push(e);
return t;
}
function F(e, t) {
for (;t && t !== e && !t.nextSibling; ) t = t.parentNode;
return t && t !== e ? t.nextSibling : null;
}
function W(e, t, n) {
for (var r = e; r; ) {
if (r.nodeType === Node.ELEMENT_NODE) {
var i = r;
t(i);
var o = i.localName;
if ("link" === o && "import" === i.getAttribute("rel")) {
if (r = i.import, void 0 === n && (n = new Set), r instanceof Node && !n.has(r)) for (n.add(r), 
r = r.firstChild; r; r = r.nextSibling) W(r, t, n);
r = F(e, i);
continue;
}
if ("template" === o) {
r = F(e, i);
continue;
}
if (i = i.__CE_shadowRoot) for (i = i.firstChild; i; i = i.nextSibling) W(i, t, n);
}
r = r.firstChild ? r.firstChild : F(e, r);
}
}
function U() {
var e = !(null == ue || !ue.noDocumentConstructionObserver), t = !(null == ue || !ue.shadyDomFastWalk);
this.m = [], this.g = [], this.j = !1, this.shadyDomFastWalk = t, this.I = !e;
}
function I(e, t, n, r) {
var i = window.ShadyDOM;
if (e.shadyDomFastWalk && i && i.inUse) {
if (t.nodeType === Node.ELEMENT_NODE && n(t), t.querySelectorAll) for (e = i.nativeMethods.querySelectorAll.call(t, "*"), 
t = 0; t < e.length; t++) n(e[t]);
} else W(t, n, r);
}
function G(e, t) {
e.j && I(e, t, function(t) {
return V(e, t);
});
}
function V(e, t) {
if (e.j && !t.__CE_patched) {
t.__CE_patched = !0;
for (var n = 0; n < e.m.length; n++) e.m[n](t);
for (n = 0; n < e.g.length; n++) e.g[n](t);
}
}
function z(e, t) {
var n = [];
for (I(e, t, function(e) {
return n.push(e);
}), t = 0; t < n.length; t++) {
var r = n[t];
1 === r.__CE_state ? e.connectedCallback(r) : $(e, r);
}
}
function B(e, t) {
var n = [];
for (I(e, t, function(e) {
return n.push(e);
}), t = 0; t < n.length; t++) {
var r = n[t];
1 === r.__CE_state && e.disconnectedCallback(r);
}
}
function q(e, t, n) {
var r = (n = void 0 === n ? {} : n).J, i = n.upgrade || function(t) {
return $(e, t);
}, o = [];
for (I(e, t, function(t) {
if (e.j && V(e, t), "link" === t.localName && "import" === t.getAttribute("rel")) {
var n = t.import;
n instanceof Node && (n.__CE_isImportDocument = !0, n.__CE_registry = document.__CE_registry), 
n && "complete" === n.readyState ? n.__CE_documentLoadHandled = !0 : t.addEventListener("load", function() {
var n = t.import;
if (!n.__CE_documentLoadHandled) {
n.__CE_documentLoadHandled = !0;
var o = new Set;
r && (r.forEach(function(e) {
return o.add(e);
}), o.delete(n)), q(e, n, {
J: o,
upgrade: i
});
}
});
} else o.push(t);
}, r), t = 0; t < o.length; t++) i(o[t]);
}
function $(e, t) {
try {
var n = t.ownerDocument, r = n.__CE_registry, i = r && (n.defaultView || n.__CE_isImportDocument) ? ie(r, t.localName) : void 0;
if (i && void 0 === t.__CE_state) {
i.constructionStack.push(t);
try {
try {
if (new i.constructorFunction !== t) throw Error("The custom element constructor did not produce the element being upgraded.");
} finally {
i.constructionStack.pop();
}
} catch (e) {
throw t.__CE_state = 2, e;
}
if (t.__CE_state = 1, t.__CE_definition = i, i.attributeChangedCallback && t.hasAttributes()) {
var o = i.observedAttributes;
for (i = 0; i < o.length; i++) {
var s = o[i], a = t.getAttribute(s);
null !== a && e.attributeChangedCallback(t, s, null, a, null);
}
}
R(t) && e.connectedCallback(t);
}
} catch (e) {
K(e);
}
}
function Z(n, r, i, o) {
var s = r.__CE_registry;
if (s && (null === o || "http://www.w3.org/1999/xhtml" === o) && (s = ie(s, i))) try {
var a = new s.constructorFunction;
if (void 0 === a.__CE_state || void 0 === a.__CE_definition) throw Error("Failed to construct '" + i + "': The returned value was not constructed with the HTMLElement constructor.");
if ("http://www.w3.org/1999/xhtml" !== a.namespaceURI) throw Error("Failed to construct '" + i + "': The constructed element's namespace must be the HTML namespace.");
if (a.hasAttributes()) throw Error("Failed to construct '" + i + "': The constructed element must not have any attributes.");
if (null !== a.firstChild) throw Error("Failed to construct '" + i + "': The constructed element must not have any children.");
if (null !== a.parentNode) throw Error("Failed to construct '" + i + "': The constructed element must not have a parent node.");
if (a.ownerDocument !== r) throw Error("Failed to construct '" + i + "': The constructed element's owner document is incorrect.");
if (a.localName !== i) throw Error("Failed to construct '" + i + "': The constructed element's local name is incorrect.");
return a;
} catch (s) {
return K(s), r = null === o ? e.call(r, i) : t.call(r, o, i), Object.setPrototypeOf(r, HTMLUnknownElement.prototype), 
r.__CE_state = 2, r.__CE_definition = void 0, V(n, r), r;
}
return V(n, r = null === o ? e.call(r, i) : t.call(r, o, i)), r;
}
function K(e) {
var t = "", n = "", r = 0, i = 0;
e instanceof Error ? (t = e.message, n = e.sourceURL || e.fileName || "", r = e.line || e.lineNumber || 0, 
i = e.column || e.columnNumber || 0) : t = "Uncaught " + String(e);
var o = void 0;
void 0 === ErrorEvent.prototype.initErrorEvent ? o = new ErrorEvent("error", {
cancelable: !0,
message: t,
filename: n,
lineno: r,
colno: i,
error: e
}) : ((o = document.createEvent("ErrorEvent")).initErrorEvent("error", !1, !0, t, n, r), 
o.preventDefault = function() {
Object.defineProperty(this, "defaultPrevented", {
configurable: !0,
get: function() {
return !0;
}
});
}), void 0 === o.error && Object.defineProperty(o, "error", {
configurable: !0,
enumerable: !0,
get: function() {
return e;
}
}), window.dispatchEvent(o), o.defaultPrevented;
}
function X() {
var e = this;
this.g = void 0, this.F = new Promise(function(t) {
e.l = t;
});
}
function J(e) {
var t = document;
this.l = void 0, this.h = e, this.g = t, q(this.h, this.g), "loading" === this.g.readyState && (this.l = new MutationObserver(this.G.bind(this)), 
this.l.observe(this.g, {
childList: !0,
subtree: !0
}));
}
function Q(e) {
e.l && e.l.disconnect();
}
function ee(e) {
this.s = new Map, this.u = new Map, this.C = new Map, this.A = !1, this.B = new Map, 
this.o = function(e) {
return e();
}, this.i = !1, this.v = [], this.h = e, this.D = e.I ? new J(e) : void 0;
}
function te(e, t) {
if (!A(t)) throw new SyntaxError("The element name '" + t + "' is not valid.");
if (ie(e, t)) throw Error("A custom element with name '" + t + "' has already been defined.");
if (e.A) throw Error("A custom element is already being defined.");
}
function ne(e, t, n) {
var r;
e.A = !0;
try {
var i = n.prototype;
if (!(i instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
var o = function(e) {
var t = i[e];
if (void 0 !== t && !(t instanceof Function)) throw Error("The '" + e + "' callback must be a function.");
return t;
}, s = o("connectedCallback"), a = o("disconnectedCallback"), u = o("adoptedCallback"), l = (r = o("attributeChangedCallback")) && n.observedAttributes || [];
} catch (e) {
throw e;
} finally {
e.A = !1;
}
return n = {
localName: t,
constructorFunction: n,
connectedCallback: s,
disconnectedCallback: a,
adoptedCallback: u,
attributeChangedCallback: r,
observedAttributes: l,
constructionStack: []
}, e.u.set(t, n), e.C.set(n.constructorFunction, n), n;
}
function re(e) {
if (!1 !== e.i) {
e.i = !1;
for (var t = [], n = e.v, r = new Map, i = 0; i < n.length; i++) r.set(n[i], []);
for (q(e.h, document, {
upgrade: function(n) {
if (void 0 === n.__CE_state) {
var i = n.localName, o = r.get(i);
o ? o.push(n) : e.u.has(i) && t.push(n);
}
}
}), i = 0; i < t.length; i++) $(e.h, t[i]);
for (i = 0; i < n.length; i++) {
for (var o = n[i], s = r.get(o), a = 0; a < s.length; a++) $(e.h, s[a]);
(o = e.B.get(o)) && o.resolve(void 0);
}
n.length = 0;
}
}
function ie(e, t) {
var n = e.u.get(t);
if (n) return n;
if (n = e.s.get(t)) {
e.s.delete(t);
try {
return ne(e, t, n());
} catch (e) {
K(e);
}
}
}
function oe(e, t, n) {
function r(t) {
return function(n) {
for (var r = [], i = 0; i < arguments.length; ++i) r[i] = arguments[i];
i = [];
for (var o = [], s = 0; s < r.length; s++) {
var a = r[s];
if (a instanceof Element && R(a) && o.push(a), a instanceof DocumentFragment) for (a = a.firstChild; a; a = a.nextSibling) i.push(a); else i.push(a);
}
for (t.apply(this, r), r = 0; r < o.length; r++) B(e, o[r]);
if (R(this)) for (r = 0; r < i.length; r++) (o = i[r]) instanceof Element && z(e, o);
};
}
void 0 !== n.prepend && (t.prepend = r(n.prepend)), void 0 !== n.append && (t.append = r(n.append));
}
function se(e) {
function n(t, n) {
Object.defineProperty(t, "innerHTML", {
enumerable: n.enumerable,
configurable: !0,
get: n.get,
set: function(t) {
var r = this, i = void 0;
if (R(this) && (i = [], I(e, this, function(e) {
e !== r && i.push(e);
})), n.set.call(this, t), i) for (var o = 0; o < i.length; o++) {
var s = i[o];
1 === s.__CE_state && e.disconnectedCallback(s);
}
return this.ownerDocument.__CE_registry ? q(e, this) : G(e, this), t;
}
});
}
function r(t, n) {
t.insertAdjacentElement = function(t, r) {
var i = R(r);
return t = n.call(this, t, r), i && B(e, r), R(t) && z(e, r), t;
};
}
function i(t, n) {
function r(t, n) {
for (var r = []; t !== n; t = t.nextSibling) r.push(t);
for (n = 0; n < r.length; n++) q(e, r[n]);
}
t.insertAdjacentHTML = function(e, t) {
if ("beforebegin" === (e = e.toLowerCase())) {
var i = this.previousSibling;
n.call(this, e, t), r(i || this.parentNode.firstChild, this);
} else if ("afterbegin" === e) i = this.firstChild, n.call(this, e, t), r(this.firstChild, i); else if ("beforeend" === e) i = this.lastChild, 
n.call(this, e, t), r(i || this.firstChild, null); else {
if ("afterend" !== e) throw new SyntaxError("The value provided (" + String(e) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
i = this.nextSibling, n.call(this, e, t), r(this.nextSibling, i);
}
};
}
f && (Element.prototype.attachShadow = function(t) {
if (t = f.call(this, t), e.j && !t.__CE_patched) {
t.__CE_patched = !0;
for (var n = 0; n < e.m.length; n++) e.m[n](t);
}
return this.__CE_shadowRoot = t;
}), m && m.get ? n(Element.prototype, m) : x && x.get ? n(HTMLElement.prototype, x) : function(e, t) {
e.j = !0, e.g.push(t);
}(e, function(e) {
n(e, {
enumerable: !0,
configurable: !0,
get: function() {
return a.call(this, !0).innerHTML;
},
set: function(e) {
var n = "template" === this.localName, r = n ? this.content : this, i = t.call(document, this.namespaceURI, this.localName);
for (i.innerHTML = e; 0 < r.childNodes.length; ) c.call(r, r.childNodes[0]);
for (e = n ? i.content : i; 0 < e.childNodes.length; ) u.call(r, e.childNodes[0]);
}
});
}), Element.prototype.setAttribute = function(t, n) {
if (1 !== this.__CE_state) return _.call(this, t, n);
var r = p.call(this, t);
_.call(this, t, n), n = p.call(this, t), e.attributeChangedCallback(this, t, r, n, null);
}, Element.prototype.setAttributeNS = function(t, n, r) {
if (1 !== this.__CE_state) return w.call(this, t, n, r);
var i = v.call(this, t, n);
w.call(this, t, n, r), r = v.call(this, t, n), e.attributeChangedCallback(this, n, i, r, t);
}, Element.prototype.removeAttribute = function(t) {
if (1 !== this.__CE_state) return y.call(this, t);
var n = p.call(this, t);
y.call(this, t), null !== n && e.attributeChangedCallback(this, t, n, null, null);
}, g && (Element.prototype.toggleAttribute = function(t, n) {
if (1 !== this.__CE_state) return g.call(this, t, n);
var r = p.call(this, t);
return null !== r !== (n = g.call(this, t, n)) && e.attributeChangedCallback(this, t, r, n ? "" : null, null), 
n;
}), Element.prototype.removeAttributeNS = function(t, n) {
if (1 !== this.__CE_state) return b.call(this, t, n);
var r = v.call(this, t, n);
b.call(this, t, n);
var i = v.call(this, t, n);
r !== i && e.attributeChangedCallback(this, n, r, i, t);
}, O ? r(HTMLElement.prototype, O) : M && r(Element.prototype, M), N ? i(HTMLElement.prototype, N) : S && i(Element.prototype, S), 
oe(e, Element.prototype, {
prepend: D,
append: k
}), function(e) {
function t(t) {
return function(n) {
for (var r = [], i = 0; i < arguments.length; ++i) r[i] = arguments[i];
i = [];
for (var o = [], s = 0; s < r.length; s++) {
var a = r[s];
if (a instanceof Element && R(a) && o.push(a), a instanceof DocumentFragment) for (a = a.firstChild; a; a = a.nextSibling) i.push(a); else i.push(a);
}
for (t.apply(this, r), r = 0; r < o.length; r++) B(e, o[r]);
if (R(this)) for (r = 0; r < i.length; r++) (o = i[r]) instanceof Element && z(e, o);
};
}
var n = Element.prototype;
void 0 !== T && (n.before = t(T)), void 0 !== E && (n.after = t(E)), void 0 !== Y && (n.replaceWith = function(t) {
for (var n = [], r = 0; r < arguments.length; ++r) n[r] = arguments[r];
r = [];
for (var i = [], o = 0; o < n.length; o++) {
var s = n[o];
if (s instanceof Element && R(s) && i.push(s), s instanceof DocumentFragment) for (s = s.firstChild; s; s = s.nextSibling) r.push(s); else r.push(s);
}
for (o = R(this), Y.apply(this, n), n = 0; n < i.length; n++) B(e, i[n]);
if (o) for (B(e, this), n = 0; n < r.length; n++) (i = r[n]) instanceof Element && z(e, i);
}), void 0 !== C && (n.remove = function() {
var t = R(this);
C.call(this), t && B(e, this);
});
}(e);
}
U.prototype.connectedCallback = function(e) {
var t = e.__CE_definition;
if (t.connectedCallback) try {
t.connectedCallback.call(e);
} catch (e) {
K(e);
}
}, U.prototype.disconnectedCallback = function(e) {
var t = e.__CE_definition;
if (t.disconnectedCallback) try {
t.disconnectedCallback.call(e);
} catch (e) {
K(e);
}
}, U.prototype.attributeChangedCallback = function(e, t, n, r, i) {
var o = e.__CE_definition;
if (o.attributeChangedCallback && -1 < o.observedAttributes.indexOf(t)) try {
o.attributeChangedCallback.call(e, t, n, r, i);
} catch (e) {
K(e);
}
}, X.prototype.resolve = function(e) {
if (this.g) throw Error("Already resolved.");
this.g = e, this.l(e);
}, J.prototype.G = function(e) {
var t = this.g.readyState;
for ("interactive" !== t && "complete" !== t || Q(this), t = 0; t < e.length; t++) for (var n = e[t].addedNodes, r = 0; r < n.length; r++) q(this.h, n[r]);
}, ee.prototype.H = function(e, t) {
var n = this;
if (!(t instanceof Function)) throw new TypeError("Custom element constructor getters must be functions.");
te(this, e), this.s.set(e, t), this.v.push(e), this.i || (this.i = !0, this.o(function() {
return re(n);
}));
}, ee.prototype.define = function(e, t) {
var n = this;
if (!(t instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
te(this, e), ne(this, e, t), this.v.push(e), this.i || (this.i = !0, this.o(function() {
return re(n);
}));
}, ee.prototype.upgrade = function(e) {
q(this.h, e);
}, ee.prototype.get = function(e) {
if (e = ie(this, e)) return e.constructorFunction;
}, ee.prototype.whenDefined = function(e) {
if (!A(e)) return Promise.reject(new SyntaxError("'" + e + "' is not a valid custom element name."));
var t = this.B.get(e);
if (t) return t.F;
t = new X, this.B.set(e, t);
var n = this.u.has(e) || this.s.has(e);
return e = -1 === this.v.indexOf(e), n && e && t.resolve(void 0), t.F;
}, ee.prototype.polyfillWrapFlushCallback = function(e) {
this.D && Q(this.D);
var t = this.o;
this.o = function(n) {
return e(function() {
return t(n);
});
};
}, ee.prototype.define = ee.prototype.define, ee.prototype.upgrade = ee.prototype.upgrade, 
ee.prototype.get = ee.prototype.get, ee.prototype.whenDefined = ee.prototype.whenDefined, 
ee.prototype.polyfillDefineLazy = ee.prototype.H, ee.prototype.polyfillWrapFlushCallback = ee.prototype.polyfillWrapFlushCallback;
var ae = {};
var ue = window.customElements;
function le() {
var t = new U;
!function(t) {
function n() {
var n = this.constructor, r = document.__CE_registry.C.get(n);
if (!r) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
var i = r.constructionStack;
if (0 === i.length) return i = e.call(document, r.localName), Object.setPrototypeOf(i, n.prototype), 
i.__CE_state = 1, i.__CE_definition = r, V(t, i), i;
var o = i.length - 1, s = i[o];
if (s === ae) throw Error("Failed to construct '" + r.localName + "': This element was already constructed.");
return i[o] = ae, Object.setPrototypeOf(s, n.prototype), V(t, s), s;
}
n.prototype = L.prototype, Object.defineProperty(HTMLElement.prototype, "constructor", {
writable: !0,
configurable: !0,
enumerable: !1,
value: n
}), window.HTMLElement = n;
}(t), function(e) {
Document.prototype.createElement = function(t) {
return Z(e, this, t, null);
}, Document.prototype.importNode = function(t, r) {
return t = n.call(this, t, !!r), this.__CE_registry ? q(e, t) : G(e, t), t;
}, Document.prototype.createElementNS = function(t, n) {
return Z(e, this, n, t);
}, oe(e, Document.prototype, {
prepend: r,
append: i
});
}(t), oe(t, DocumentFragment.prototype, {
prepend: o,
append: s
}), function(e) {
function t(t, n) {
Object.defineProperty(t, "textContent", {
enumerable: n.enumerable,
configurable: !0,
get: n.get,
set: function(t) {
if (this.nodeType === Node.TEXT_NODE) n.set.call(this, t); else {
var r = void 0;
if (this.firstChild) {
var i = this.childNodes, o = i.length;
if (0 < o && R(this)) {
r = Array(o);
for (var s = 0; s < o; s++) r[s] = i[s];
}
}
if (n.set.call(this, t), r) for (t = 0; t < r.length; t++) B(e, r[t]);
}
}
});
}
Node.prototype.insertBefore = function(t, n) {
if (t instanceof DocumentFragment) {
var r = H(t);
if (t = l.call(this, t, n), R(this)) for (n = 0; n < r.length; n++) z(e, r[n]);
return t;
}
return r = t instanceof Element && R(t), n = l.call(this, t, n), r && B(e, t), R(this) && z(e, t), 
n;
}, Node.prototype.appendChild = function(t) {
if (t instanceof DocumentFragment) {
var n = H(t);
if (t = u.call(this, t), R(this)) for (var r = 0; r < n.length; r++) z(e, n[r]);
return t;
}
return n = t instanceof Element && R(t), r = u.call(this, t), n && B(e, t), R(this) && z(e, t), 
r;
}, Node.prototype.cloneNode = function(t) {
return t = a.call(this, !!t), this.ownerDocument.__CE_registry ? q(e, t) : G(e, t), 
t;
}, Node.prototype.removeChild = function(t) {
var n = t instanceof Element && R(t), r = c.call(this, t);
return n && B(e, t), r;
}, Node.prototype.replaceChild = function(t, n) {
if (t instanceof DocumentFragment) {
var r = H(t);
if (t = d.call(this, t, n), R(this)) for (B(e, n), n = 0; n < r.length; n++) z(e, r[n]);
return t;
}
r = t instanceof Element && R(t);
var i = d.call(this, t, n), o = R(this);
return o && B(e, n), r && B(e, t), o && z(e, t), i;
}, h && h.get ? t(Node.prototype, h) : function(e, t) {
e.j = !0, e.m.push(t);
}(e, function(e) {
t(e, {
enumerable: !0,
configurable: !0,
get: function() {
for (var e = [], t = this.firstChild; t; t = t.nextSibling) t.nodeType !== Node.COMMENT_NODE && e.push(t.textContent);
return e.join("");
},
set: function(e) {
for (;this.firstChild; ) c.call(this, this.firstChild);
null != e && "" !== e && u.call(this, document.createTextNode(e));
}
});
});
}(t), se(t), window.CustomElementRegistry = ee, t = new ee(t), document.__CE_registry = t, 
Object.defineProperty(window, "customElements", {
configurable: !0,
enumerable: !0,
value: t
});
}
ue && !ue.forcePolyfill && "function" == typeof ue.define && "function" == typeof ue.get || le(), 
window.__CE_installPolyfill = le;
}).call(self);
},
7505: function(e, t, n) {
"use strict";
var r = n(7965), i = n(4474), o = n(5963), s = n(1225), a = n(8564), u = RegExp.prototype, l = function(e, t) {
this._r = e, this._s = t;
};
n(3710)(l, "RegExp String", function() {
var e = this._r.exec(this._s);
return {
value: e,
done: null === e
};
}), r(r.P, "String", {
matchAll: function(e) {
if (i(this), !s(e)) throw TypeError(e + " is not a regexp!");
var t = String(this), n = "flags" in u ? String(e.flags) : a.call(e), r = new RegExp(e.source, ~n.indexOf("g") ? n : "g" + n);
return r.lastIndex = o(e.lastIndex), new l(r, t);
}
});
},
7729: function(e, t, n) {
let r = n(8944);
for (let e of document.querySelectorAll("[data-action-login]")) for (let t of e.classList) t.endsWith("_unready") && e.classList.remove(t);
function i(e) {
let t = new Modal({
hasClose: !1,
mixClass: "login-modal"
}), i = new r;
t.setContent(i.elem), i.start(), Promise.all([ n.e(908), n.e(616) ]).then(function() {
t.remove(), new (n(641))(e);
}.bind(null, n)).catch(n.oe);
}
document.addEventListener("click", function(e) {
if (!e.target.hasAttribute("data-action-login")) return;
let t = {
email: e.target.getAttribute("data-action-login")
};
e.preventDefault(), i(t);
}), e.exports = i;
},
7733: function(e) {
e.exports = function(e) {
if ("function" != typeof e) throw TypeError(e + " is not a function!");
return e;
};
},
7737: function() {
if (!(document.documentElement.dataset || Object.getOwnPropertyDescriptor(Element.prototype, "dataset") && Object.getOwnPropertyDescriptor(Element.prototype, "dataset").get)) {
let e = {
enumerable: !0,
get: function() {
"use strict";
let e, t, n, r, i, o, s = this, a = this.attributes, u = a.length, l = function(e) {
return e.charAt(1).toUpperCase();
}, c = function() {
return this;
}, d = function(e, t) {
return void 0 !== t ? this.setAttribute(e, t) : this.removeAttribute(e);
};
try {
({}).__defineGetter__("test", function() {}), t = {};
} catch (e) {
t = document.createElement("div");
}
for (e = 0; e < u; e++) if (o = a[e], o && o.name && /^data-\w[\w\-]*$/.test(o.name)) {
n = o.value, r = o.name, i = r.substr(5).replace(/-./g, l);
try {
Object.defineProperty(t, i, {
enumerable: this.enumerable,
get: c.bind(n || ""),
set: d.bind(s, r)
});
} catch (e) {
t[i] = n;
}
}
return t;
}
};
try {
Object.defineProperty(Element.prototype, "dataset", e);
} catch (t) {
e.enumerable = !1, Object.defineProperty(Element.prototype, "dataset", e);
}
}
},
7746: function(e, t, n) {
let r = n(2684);
function i(e, t) {
try {
(e.contentDocument || e.contentWindow.document).body;
} catch (e) {
return;
}
let n = setTimeout(function() {
t(new Error("timeout"));
}, 500);
function i(e, r) {
clearTimeout(n), t(e, r);
}
if (!e.offsetWidth) {
let t = e.cloneNode(!0);
return t.name = "", t.style.height = "50px", t.style.position = "absolute", t.style.display = "block", 
t.style.top = "10000px", t.onload = function() {
let n = r(this.contentDocument);
e.style.display = "block", t.remove(), i(null, n);
}, void document.body.appendChild(t);
}
e.style.display = "block", e.style.height = "1px";
let o = r(e.contentDocument);
e.style.height = "", i(null, o);
}
i.async = function(e, t) {
setTimeout(function() {
i(e, t);
}, 0);
}, e.exports = i;
},
7866: function(e, t, n) {
var r = n(1832), i = n(5280), o = "__core-js_shared__", s = i[o] || (i[o] = {});
(e.exports = function(e, t) {
return s[e] || (s[e] = void 0 !== t ? t : {});
})("versions", []).push({
version: r.version,
mode: n(8236) ? "pure" : "global",
copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
});
},
7965: function(e, t, n) {
var r = n(5280), i = n(1832), o = n(2795), s = n(2101), a = n(6682), u = "prototype", l = function(e, t, n) {
var c, d, h, f, m = e & l.F, p = e & l.G, _ = e & l.S, y = e & l.P, g = e & l.B, v = p ? r : _ ? r[t] || (r[t] = {}) : (r[t] || {})[u], w = p ? i : i[t] || (i[t] = {}), b = w[u] || (w[u] = {});
for (c in p && (n = t), n) h = ((d = !m && v && void 0 !== v[c]) ? v : n)[c], f = g && d ? a(h, r) : y && "function" == typeof h ? a(Function.call, h) : h, 
v && s(v, c, h, e & l.U), w[c] != h && o(w, c, f), y && b[c] != h && (b[c] = h);
};
r.core = i, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, 
e.exports = l;
},
8013: function(e, t, n) {
e.exports = !n(3330)(function() {
return 7 != Object.defineProperty({}, "a", {
get: function() {
return 7;
}
}).a;
});
},
8163: function() {
function e() {
let e = document.querySelector(".page-wrapper");
document.querySelector(".page").classList.toggle("page_sidebar_on"), e && e.classList.toggle("page-wrapper_sidebar_on"), 
document.querySelector(".page").classList.contains("page_sidebar_on") ? delete localStorage.noSidebar : localStorage.noSidebar = 1;
}
document.addEventListener("click", function(t) {
if (!t.target.hasAttribute("data-sidebar-toggle")) return;
e();
}), document.addEventListener("keydown", function(t) {
if (document.activeElement && ~[ "INPUT", "TEXTAREA", "SELECT" ].indexOf(document.activeElement.tagName)) return;
if (t.keyCode != "S".charCodeAt(0)) return;
if (~navigator.userAgent.toLowerCase().indexOf("mac os x")) {
if (!t.metaKey || !t.altKey) return;
} else if (!t.altKey) return;
e(), t.preventDefault();
}), function() {
function e() {
let e = document.getElementsByClassName("sidebar__navigation-link_active");
e[0] && e[0].classList.remove("sidebar__navigation-link_active");
let t, n = document.getElementsByTagName("h2");
for (t = 0; t < n.length; t++) {
if (n[t].getBoundingClientRect().top > 1) break;
}
if (t--, t >= 0) {
let e = n[t].firstElementChild && n[t].firstElementChild.getAttribute("href"), r = document.querySelector('.sidebar__navigation-link a[href="' + e + '"]');
e && r && r.classList.add("sidebar__navigation-link_active");
}
}
document.addEventListener("DOMContentLoaded", function() {
e(), window.addEventListener("scroll", e);
});
}();
},
8169: function(e, t, n) {
const r = n(8650);
e.exports = function(e) {
if ("string" != typeof e) return;
const t = e.toUpperCase();
return Object.prototype.hasOwnProperty.call(r, t) ? r[t] : void 0;
}, e.exports.currencySymbolMap = r;
},
8236: function(e) {
e.exports = !1;
},
8445: function(e, t, n) {
function r(e) {
if (e.length) {
if (1 === e.length) return "string" == typeof e[0] ? document.createTextNode(e[0]) : e[0];
{
let t, n = document.createDocumentFragment(), r = e.length, i = -1;
for (;++i < r; ) t = e[i], n.appendChild("string" == typeof t ? document.createTextNode(t) : t);
return n;
}
}
throw new Error("DOM Exception 8");
}
let i = {
matches: Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
replace() {
this.parentNode && this.parentNode.replaceChild(r(arguments), this);
},
prepend() {
this.insertBefore(r(arguments), this.firstChild);
},
append() {
this.appendChild(r(arguments));
},
remove() {
let e = this.parentNode;
if (e) return e.removeChild(this);
},
before: function() {
this.parentNode && this.parentNode.insertBefore(r(arguments), this);
},
after: function() {
this.parentNode && this.parentNode.insertBefore(r(arguments), this.nextSibling);
},
closest: function(e) {
let t = this;
for (;t; ) {
if (t.matches && t.matches(e)) return t;
t = t.parentElement;
}
return null;
}
};
for (let e in i) Element.prototype[e] || (Element.prototype[e] = i[e]);
n(7164), n(7737), n(6689), n(4231), n(7412);
},
8466: function(e, t, n) {
var r = n(3439);
e.exports = function(e, t) {
if (!r(e)) return e;
var n, i;
if (t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
if ("function" == typeof (n = e.valueOf) && !r(i = n.call(e))) return i;
if (!t && "function" == typeof (n = e.toString) && !r(i = n.call(e))) return i;
throw TypeError("Can't convert object to primitive value");
};
},
8564: function(e, t, n) {
"use strict";
var r = n(8922);
e.exports = function() {
var e = r(this), t = "";
return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), 
e.unicode && (t += "u"), e.sticky && (t += "y"), t;
};
},
8650: function(e) {
e.exports = {
AED: "د.إ",
AFN: "؋",
ALL: "L",
AMD: "֏",
ANG: "ƒ",
AOA: "Kz",
ARS: "$",
AUD: "$",
AWG: "ƒ",
AZN: "₼",
BAM: "KM",
BBD: "$",
BDT: "৳",
BGN: "лв",
BHD: ".د.ب",
BIF: "FBu",
BMD: "$",
BND: "$",
BOB: "$b",
BOV: "BOV",
BRL: "R$",
BSD: "$",
BTC: "₿",
BTN: "Nu.",
BWP: "P",
BYN: "Br",
BYR: "Br",
BZD: "BZ$",
CAD: "$",
CDF: "FC",
CHE: "CHE",
CHF: "CHF",
CHW: "CHW",
CLF: "CLF",
CLP: "$",
CNY: "元",
COP: "$",
COU: "COU",
CRC: "₡",
CUC: "$",
CUP: "₱",
CVE: "$",
CZK: "Kč",
DJF: "Fdj",
DKK: "kr",
DOP: "RD$",
DZD: "دج",
EEK: "kr",
EGP: "£",
ERN: "Nfk",
ETB: "Br",
ETH: "Ξ",
EUR: "€",
FJD: "$",
FKP: "£",
GBP: "£",
GEL: "₾",
GGP: "£",
GHC: "₵",
GHS: "GH₵",
GIP: "£",
GMD: "D",
GNF: "FG",
GTQ: "Q",
GYD: "$",
HKD: "$",
HNL: "L",
HRK: "kn",
HTG: "G",
HUF: "Ft",
IDR: "Rp",
ILS: "₪",
IMP: "£",
INR: "₹",
IQD: "ع.د",
IRR: "﷼",
ISK: "kr",
JEP: "£",
JMD: "J$",
JOD: "JD",
JPY: "¥",
KES: "KSh",
KGS: "лв",
KHR: "៛",
KMF: "CF",
KPW: "₩",
KRW: "₩",
KWD: "KD",
KYD: "$",
KZT: "₸",
LAK: "₭",
LBP: "£",
LKR: "₨",
LRD: "$",
LSL: "M",
LTC: "Ł",
LTL: "Lt",
LVL: "Ls",
LYD: "LD",
MAD: "MAD",
MDL: "lei",
MGA: "Ar",
MKD: "ден",
MMK: "K",
MNT: "₮",
MOP: "MOP$",
MRO: "UM",
MRU: "UM",
MUR: "₨",
MVR: "Rf",
MWK: "MK",
MXN: "$",
MXV: "MXV",
MYR: "RM",
MZN: "MT",
NAD: "$",
NGN: "₦",
NIO: "C$",
NOK: "kr",
NPR: "₨",
NZD: "$",
OMR: "﷼",
PAB: "B/.",
PEN: "S/.",
PGK: "K",
PHP: "₱",
PKR: "₨",
PLN: "zł",
PYG: "Gs",
QAR: "﷼",
RMB: "元",
RON: "lei",
RSD: "Дин.",
RUB: "₽",
RWF: "R₣",
SAR: "﷼",
SBD: "$",
SCR: "₨",
SDG: "ج.س.",
SEK: "kr",
SGD: "S$",
SHP: "£",
SLL: "Le",
SOS: "S",
SRD: "$",
SSP: "£",
STD: "Db",
STN: "Db",
SVC: "$",
SYP: "£",
SZL: "E",
THB: "฿",
TJS: "SM",
TMT: "T",
TND: "د.ت",
TOP: "T$",
TRL: "₤",
TRY: "₺",
TTD: "TT$",
TVD: "$",
TWD: "NT$",
TZS: "TSh",
UAH: "₴",
UGX: "USh",
USD: "$",
UYI: "UYI",
UYU: "$U",
UYW: "UYW",
UZS: "лв",
VEF: "Bs",
VES: "Bs.S",
VND: "₫",
VUV: "VT",
WST: "WS$",
XAF: "FCFA",
XBT: "Ƀ",
XCD: "$",
XOF: "CFA",
XPF: "₣",
XSU: "Sucre",
XUA: "XUA",
YER: "﷼",
ZAR: "R",
ZMW: "ZK",
ZWD: "Z$",
ZWL: "$"
};
},
8697: function(e, t, n) {
let r = n(8905), i = n(9902);
e.exports = async function() {
let e = document.querySelectorAll("[data-captcha-submit]");
if (e.length) {
for (let t of e) t.disabled = !0;
await r();
for (let t of e) {
let e = t.form, n = new i(e);
e.onsubmit = async t => {
t.preventDefault(), await n.validateForm(e), e.checkValidity() ? e.submit() : e.reportValidity();
}, t.disabled = !1;
}
}
};
},
8712: function(e, t, n) {
n(7505), e.exports = n(1832).String.matchAll;
},
8849: function(e) {
e.exports = function(e, t) {
let n, r, i = !1;
return function o() {
if (i) return n = arguments, void (r = this);
e.apply(this, arguments), i = !0, setTimeout(() => {
i = !1, n && (o.apply(r, n), n = r = null);
}, t);
};
};
},
8869: function(e, t, n) {
n(8445), n(1604), "undefined" == typeof globalThis && (window.globalThis = window);
},
8905: function(e) {
let t;
e.exports = async function() {
if (window.CAPTCHA_ID) return t || (t = new Promise((e, t) => {
window.captchaCallback = e;
let n = document.createElement("script");
n.src = "recaptcha" == window.CAPTCHA_TYPE ? "https://www.google.com/recaptcha/api.js?onload=captchaCallback&render=explicit" : "https://smartcaptcha.yandexcloud.net/captcha.js?render=onload&onload=captchaCallback", 
n.onerror = t, document.head.appendChild(n);
}), t);
};
},
8922: function(e, t, n) {
var r = n(3439);
e.exports = function(e) {
if (!r(e)) throw TypeError(e + " is not an object!");
return e;
};
},
8944: function(e) {
function t(e) {
if (e = e || {}, this.elem = e.elem, this.size = e.size || "medium", this.class = e.class ? " " + e.class : "", 
this.elemClass = e.elemClass, "medium" != this.size && "small" != this.size && "large" != this.size) throw new Error("Unsupported size: " + this.size);
this.elem || (this.elem = document.createElement("div"));
}
t.prototype.start = function() {
this.elemClass && this.elem.classList.toggle(this.elemClass), this.elem.insertAdjacentHTML("beforeend", '<span class="spinner spinner_active spinner_' + this.size + this.class + '"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>');
}, t.prototype.stop = function() {
let e = this.elem.querySelector(".spinner");
e && (e.remove(), this.elemClass && this.elem.classList.toggle(this.elemClass));
}, window.Spinner = t, e.exports = t;
},
9576: function(e, t, n) {
!function(e) {
"use strict";
var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), r = [ /^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i ], i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
e.defineLocale("es", {
months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
monthsShort: function(e, r) {
return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t;
},
monthsRegex: i,
monthsShortRegex: i,
monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
monthsParse: r,
longMonthsParse: r,
shortMonthsParse: r,
weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
weekdaysParseExact: !0,
longDateFormat: {
LT: "H:mm",
LTS: "H:mm:ss",
L: "DD/MM/YYYY",
LL: "D [de] MMMM [de] YYYY",
LLL: "D [de] MMMM [de] YYYY H:mm",
LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
},
calendar: {
sameDay: function() {
return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
nextDay: function() {
return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
nextWeek: function() {
return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
lastDay: function() {
return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
lastWeek: function() {
return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
},
sameElse: "L"
},
relativeTime: {
future: "en %s",
past: "hace %s",
s: "unos segundos",
ss: "%d segundos",
m: "un minuto",
mm: "%d minutos",
h: "una hora",
hh: "%d horas",
d: "un día",
dd: "%d días",
w: "una semana",
ww: "%d semanas",
M: "un mes",
MM: "%d meses",
y: "un año",
yy: "%d años"
},
dayOfMonthOrdinalParse: /\d{1,2}º/,
ordinal: "%dº",
week: {
dow: 1,
doy: 4
},
invalidDate: "Fecha inválida"
});
}(n(6151));
},
9736: function(e, t, n) {
var r = n(7866)("keys"), i = n(3425);
e.exports = function(e) {
return r[e] || (r[e] = i(e));
};
},
9844: function(e, t, n) {
var r = n(3439), i = n(5280).document, o = r(i) && r(i.createElement);
e.exports = function(e) {
return o ? i.createElement(e) : {};
};
},
9902: function(e, t, n) {
let r = n(8905);
e.exports = class {
constructor(e) {
this.elem = e, this.renderPromise = new Promise((e, t) => {
this.renderPromiseResolve = e, this.renderPromiseReject = t;
}), this.render();
}
async render() {
if (!window.CAPTCHA_ID) return;
if (void 0 !== this.widgetId) return;
await r();
let e = document.createElement("div");
this.elem.append(e), this.widgetId = "recaptcha" == window.CAPTCHA_TYPE ? grecaptcha.render(e, {
sitekey: window.CAPTCHA_ID,
size: "invisible",
callback: this.renderPromiseResolve
}) : smartCaptcha.render(e, {
sitekey: window.CAPTCHA_ID,
hl: "ru",
invisible: !0,
hideShield: !0,
test: !0,
callback: this.renderPromiseResolve
});
}
async execute() {
if (!window.CAPTCHA_ID) return "";
await this.render();
let e = "recaptcha" == CAPTCHA_TYPE ? grecaptcha : smartCaptcha, t = e.getResponse(this.widgetId);
return t || (e.execute(this.widgetId), this.renderPromise);
}
async validateForm(e) {
if (!window.CAPTCHA_ID) return;
let t = await this.execute(), n = e.elements["captcha-response"];
n || (n = document.createElement("input"), n.name = "captcha-response", n.type = "hidden", 
e.append(n)), n.value = t;
}
};
},
9907: function(e) {
e.exports = {
lang: "es",
localCurrency: "EUR",
shopCurrency: "EUR",
env: "production",
rateShopTo: void 0,
countryCode,
ordersMail: "orders@javascript.info",
providers: [ {
name: "Github",
id: "github"
}, {
name: "Discord",
id: "discord"
}, {
name: "Facebook",
id: "facebook"
}, {
name: "Google",
id: "google"
} ],
stripeKey: "pk_live_51HXm0nFjeNqw1p5a3mjFxSeNHh8OL94IyGcp3PHbZVoNuYUYjlM57YtZMIAM1zrEd1F6WIKfFs67KbTemRdNIySo00KfWS1yhr",
paypalClientId: "Ac86EanyVr7jcO5a_EwTK2vg1MGguuNX27jI4oC120g8xLMuAKmayooEcpc-mODQd4Gsmm7yqA1C7NM-",
telegramBotId: 7532264140,
lookatCodeUrlBase: "https://lookatcode.com",
isRTL: void 0
};
},
9930: function(e, t, n) {
var r = n(825).f, i = n(1315), o = n(2604)("toStringTag");
e.exports = function(e, t, n) {
e && !i(e = n ? e : e.prototype, o) && r(e, o, {
configurable: !0,
value: t
});
};
},
9981: function(e, t, n) {
n(1385);
const r = n(8169);
class i extends HTMLElement {
constructor() {
super(), this.render();
}
connectedCallback() {
this.render();
}
static get observedAttributes() {
return [ "amount", "convert-to", "only" ];
}
attributeChangedCallback(e, t, n) {
this.render();
}
addCurrencySign(e, t) {
return [ "CNY" ].includes(t) ? e + r(t) : r(t) + e;
}
render() {
let e = i.observedAttributes.map(e => this.getAttribute(e)).join(":");
if (this.lastParams === e) return;
this.lastParams = e;
let t = +this.getAttribute("amount"), n = {};
if ("am" == window.countryCode) n.amount = "֏" + Math.round(t * window.rateShopTo.AMD), 
n.convertTo = this.addCurrencySign(t, window.shopCurrency); else if ("RUB" == window.shopCurrency) {
if (n.amount = t + "р", this.getAttribute("convert-to")) {
let e = this.getAttribute("convert-to");
n.convertTo = this.addCurrencySign(Math.round(t * window.rateShopTo[e]), e);
}
} else n.amount = this.addCurrencySign(t, window.shopCurrency), n.convertTo = this.addCurrencySign(Math.round(t * window.rateShopTo[window.localCurrency]), window.localCurrency);
this.innerHTML = "amount" == this.getAttribute("only") ? n.amount : "convert-to" == this.getAttribute("only") ? n.convertTo : n.amount + (n.convertTo ? ` (≈${n.convertTo})` : "");
}
}
window.PriceCurrencyElem = i, window.customElements.define("price-currency", i);
}
}, r = {};
function i(e) {
var t = r[e];
if (void 0 !== t) return t.exports;
var o = r[e] = {
id: e,
loaded: !1,
exports: {}
};
return n[e].call(o.exports, o, o.exports, i), o.loaded = !0, o.exports;
}
i.m = n, i.d = function(e, t) {
for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
enumerable: !0,
get: t[n]
});
}, i.f = {}, i.e = function(e) {
return Promise.all(Object.keys(i.f).reduce(function(t, n) {
return i.f[n](e, t), t;
}, []));
}, i.u = function(e) {
return (616 === e ? "authClient" : e) + "-" + e + "." + {
616: "ad3edb95e1b0388a6318",
908: "3792ccf6dd1b778a59c7"
}[e] + ".js";
}, i.miniCssF = function(e) {}, i.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, e = {}, t = "javascript-nodejs:", i.l = function(n, r, o, s) {
if (e[n]) e[n].push(r); else {
var a, u;
if (void 0 !== o) for (var l = document.getElementsByTagName("script"), c = 0; c < l.length; c++) {
var d = l[c];
if (d.getAttribute("src") == n || d.getAttribute("data-webpack") == t + o) {
a = d;
break;
}
}
a || (u = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, 
i.nc && a.setAttribute("nonce", i.nc), a.setAttribute("data-webpack", t + o), a.src = n), 
e[n] = [ r ];
var h = function(t, r) {
a.onerror = a.onload = null, clearTimeout(f);
var i = e[n];
if (delete e[n], a.parentNode && a.parentNode.removeChild(a), i && i.forEach(function(e) {
return e(r);
}), t) return t(r);
}, f = setTimeout(h.bind(null, void 0, {
type: "timeout",
target: a
}), 12e4);
a.onerror = h.bind(null, a.onerror), a.onload = h.bind(null, a.onload), u && document.head.appendChild(a);
}
}, i.r = function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
}, i.nmd = function(e) {
return e.paths = [], e.children || (e.children = []), e;
}, i.p = "/pack/", function() {
var e = {
577: 0
};
i.f.j = function(t, n) {
var r = i.o(e, t) ? e[t] : void 0;
if (0 !== r) if (r) n.push(r[2]); else {
var o = new Promise(function(n, i) {
r = e[t] = [ n, i ];
});
n.push(r[2] = o);
var s = i.p + i.u(t), a = new Error;
i.l(s, function(n) {
if (i.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
var o = n && ("load" === n.type ? "missing" : n.type), s = n && n.target && n.target.src;
a.message = "Loading chunk " + t + " failed.\n(" + o + ": " + s + ")", a.name = "ChunkLoadError", 
a.type = o, a.request = s, r[1](a);
}
}, "chunk-" + t, t);
}
};
var t = function(t, n) {
var r, o, s = n[0], a = n[1], u = n[2], l = 0;
if (s.some(function(t) {
return 0 !== e[t];
})) {
for (r in a) i.o(a, r) && (i.m[r] = a[r]);
if (u) u(i);
}
for (t && t(n); l < s.length; l++) o = s[l], i.o(e, o) && e[o] && e[o][0](), e[o] = 0;
}, n = self.webpackChunkjavascript_nodejs = self.webpackChunkjavascript_nodejs || [];
n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n));
}();
var o, s = {};
o = s, i(8869), o.login = i(7729), i(5180), o.resizeOnload = i(820), i(3640), i(6986), 
i(8163), i(3158), i(3802), i(5850), i(1070), i(2651), i(5345).init(), i(2024).initForms(), 
i(4450), i(1436), i(1184), i(9981), head = s;
}();
//# sourceMappingURL=head.7277f6307285ec41ba98.js.map