var footer;

!function() {
var t = {
169: function(t, e, o) {
const n = o(650);
t.exports = function(t) {
if ("string" != typeof t) return;
const e = t.toUpperCase();
return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : void 0;
}, t.exports.currencySymbolMap = n;
},
225: function(t) {
function e(t) {
let e = document.createElement("div"), o = getComputedStyle(t);
return e.style.width = t.offsetWidth + "px", e.style.marginLeft = o.marginLeft, 
e.style.marginRight = o.marginRight, e.style.position = o.position, e.style.height = t.offsetHeight + "px", 
e.style.marginBottom = o.marginBottom, e.style.marginTop = o.marginTop, e;
}
t.exports = function() {
let t = document.querySelectorAll("[data-sticky]");
for (let o = 0; o < t.length; o++) {
let n = t[o], i = n.dataset.sticky ? JSON.parse(n.dataset.sticky) : {}, l = i.bottomLimit ? document.querySelector(i.bottomLimit) : null, r = i.container ? document.querySelector(i.container) : document.body, s = !i.minWidth || document.documentElement.clientWidth > i.minWidth;
if (n.placeholder) (n.placeholder.getBoundingClientRect().top > 0 || !s) && (n.style.cssText = "", 
n.classList.remove("sticky"), n.placeholder.parentNode.insertBefore(n, n.placeholder), 
n.placeholder.remove(), n.placeholder = null); else if (n.placeholder && l) l.getBoundingClientRect().top <= n.offsetHeight ? ("fixed" == n.style.position && (n.style.top = window.pageYOffset + "px"), 
n.style.position = "absolute") : (n.style.position = "fixed", n.style.top = 0); else if (n.getBoundingClientRect().top < 0 && s) {
if (n.style.cssText) return;
let t, o;
i.saveRight ? o = document.documentElement.clientWidth - n.getBoundingClientRect().right : t = n.getBoundingClientRect().left;
let l = i.noPlaceholder ? document.createElement("div") : e(n), s = n.offsetWidth;
n.after(l), r.appendChild(n), n.classList.add("sticky"), n.style.position = "fixed", 
n.style.top = 0, i.saveRight ? n.style.right = o + "px" : n.style.left = t + "px", 
n.style.zIndex = 101, n.style.background = "white", n.style.margin = 0, n.style.width = s + "px", 
n.placeholder = l;
}
}
};
},
580: function(t, e, o) {
let n = o(829);
t.exports = function() {
let t = null;
function e(e) {
let o = e.clientX + 8;
o + t.offsetWidth > document.documentElement.clientWidth && (o = Math.max(0, e.clientX - 8 - t.offsetWidth)), 
t.style.left = o + "px";
let n = e.clientY + 10;
n + t.offsetHeight > document.documentElement.clientHeight && (n = Math.max(0, e.clientY - 10 - t.offsetHeight)), 
t.style.top = n + "px";
}
n("a,[data-tooltip]", function(o) {
o.closest && ("A" == o.tagName && o.closest(".toolbar") || o.classList.contains("button") || (t = document.createElement("span"), 
t.className = "link__type", o.getAttribute("data-tooltip") ? (t.innerHTML = o.getAttribute("data-tooltip"), 
t.setAttribute("data-tooltip", "1")) : t.setAttribute("data-url", o.getAttribute("href")), 
document.body.append(t), e(event), document.addEventListener("mousemove", e)));
}, function() {
t && (document.removeEventListener("mousemove", e), t.remove(), t = null);
});
};
},
595: function(t) {
t.exports = function() {
let t = document.querySelectorAll('figure img[src$=".png"]');
for (let e = 0; e < t.length; e++) {
let o = t[e];
o.onload = function() {
if (this.onload = null, this.src.match(/@2x.png$/)) return;
let t = new Image;
t.onload = function() {
this.width && this.height && (o.src = this.src);
}, t.src = this.src.replace(".png", "@2x.png");
}, o.complete && o.onload();
}
};
},
650: function(t) {
t.exports = {
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
829: function(t) {
let e, o, n = 1 / 0, i = 1 / 0, l = Date.now(), r = {};
document.addEventListener("mousemove", function(t) {
if (o) return;
if (Math.sqrt(Math.pow(t.pageX - n, 2) + Math.pow(t.pageY - i, 2)) / (Date.now() - l) < .2) {
let n = document.elementFromPoint(t.clientX, t.clientY);
if (!n) return;
if (n !== e) {
for (let t in r) {
let e = n.closest(t);
e && (o = {
elem: e,
out: r[t].out
}, r[t].over(e));
}
e = n;
}
}
n = t.pageX, i = t.pageY, l = Date.now();
}), document.addEventListener("mouseout", function(t) {
if (!o) return;
let e = t.relatedTarget;
for (;e && (!e.hasAttribute("data-tooltip") || e === o.elem); ) {
if (e === o.elem) return;
e = e.parentElement;
}
let {elem: n, out: i} = o;
o = null, i(n);
}), t.exports = function(t, e, o) {
r[t] = {
over: e,
out: o
};
};
},
907: function(t) {
t.exports = {
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
}
}, e = {};
function o(n) {
var i = e[n];
if (void 0 !== i) return i.exports;
var l = e[n] = {
exports: {}
};
return t[n](l, l.exports, o), l.exports;
}
let n = o(580), i = o(595), l = o(225), {shopCurrency: r, localCurrency: s} = (o(907).lang, 
o(907));
o(169);
n(), window.devicePixelRatio > 1 && i(), window.addEventListener("scroll", l, {
passive: !0
}), window.addEventListener("resize", l, {
passive: !0
}), l(), footer = {};
}();
//# sourceMappingURL=footer.2c081af06e54a9cb6d00.js.map