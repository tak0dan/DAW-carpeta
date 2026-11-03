var init;

!function() {
var e = {
50: function() {
document.addEventListener("click", function(e) {
let t = e.target;
for (;t; ) {
if (!t.className.match) return;
if (t.className.match(/_unready\b/)) return void e.preventDefault();
t = t.parentElement;
}
}), document.addEventListener("submit", function(e) {
e.target.className.match && e.target.className.match(/_unready\b/) && e.preventDefault();
});
},
102: function(e) {
function t(e, t, n, o, a) {
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
e.delegateTarget = n, n && o.call(a || this, e);
});
}
t.delegateMixin = function(e) {
e.delegate = function(e, n, o) {
t(this.elem, e, n, o, this);
};
}, e.exports = t;
},
116: function() {
try {
window.localStorage._test = 1, delete window.localStorage._test;
} catch (e) {
try {
window.localStorage = {};
} catch (e) {}
}
},
117: function(e, t, n) {
const o = n(618);
n(102)(document.documentElement, "[data-video-player-href]", "click", e => {
e.preventDefault(), new o({
src: e.target.dataset.videoPlayerHref
});
});
},
129: function() {
window.initSponsorBar = function() {
let e = document.getElementById("sponsorBar");
if (!document.querySelector(".page").classList.contains("page_sidebar_on")) return;
if (document.domain.includes("local") || document.domain.match(/^[0-9.]+$/)) return;
let t = !0, n = e;
for (;n = n.parentElement; ) if ("none" == getComputedStyle(n).display) {
t = !1;
break;
}
if (0 == t) return;
let o = document.getElementById("sponsorBarTitle"), a = document.getElementById("sponsorBarContent"), s = document.createElement("script");
s.src = "https://cdn.carbonads.com/carbon.js?serve=CE7D42QJ&placement=javascriptinfo", 
s.id = "_carbonads_js", a.append(s), new MutationObserver(e => {
for (let t of e) {
if ("childList" !== t.type) return;
let e = [ ...a.children ].filter(e => "SCRIPT" != e.tagName);
e.length && e[0].children.length && (o.innerHTML = '<a href="http://carbonads.net/?utm_source=javascriptinfo&amp;utm_medium=ad_via_link&amp;utm_campaign=in_unit&amp;utm_term=carbon" class="carbon-poweredby" target="_blank" rel="noopener sponsored" style="color:var(--foregroundSubtle);display:inline">Ads by Carbon</a>');
}
}).observe(a, {
childList: !0,
subtree: !0
});
};
},
203: function(e) {
e.exports = function() {
let e = document.createElement("span");
document.body.appendChild(e), e.className = "font-test", e.style.fontFamily = "serif";
let t = e.offsetWidth;
e.style.fontFamily = "", function n() {
t != e.offsetWidth ? document.body.classList.remove("no-icons") : setTimeout(n, 100);
}();
};
},
387: function(e, t, n) {
const o = n(484), a = Object.fromEntries(Object.entries(o).map(([e, t]) => [ t, e ])), s = window.matchMedia("(prefers-color-scheme: dark)").matches;
function i(e, t, n) {
let s = "dark" == n ? o : a, i = e.getSVGDocument();
if (!i) return;
let r = [ "fill", "stroke", "stop-color" ];
for (let e of r) for (let t of i.querySelectorAll(`[${e}]`)) {
let n = c(t.getAttribute(e));
if ("none" == n) continue;
let o = s[n];
o && t.setAttribute(e, o);
}
for (let e of i.querySelectorAll("[style]")) for (let t of r) if (e.style[t]) {
let n = c(e.style[t]);
if ("none" == n) continue;
let o = s[n];
o && (e.style[t] = s[o]);
}
e.style.visibility = "visible";
}
function c(e) {
if ("#" == e[0] && 4 == e.length) {
let t = e.slice(1).split("");
e = "#" + t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
}
return e.toLowerCase();
}
document.documentElement.dataset.themeEnabled && (document.documentElement.dataset.theme = localStorage.getItem("theme") || (s ? "dark" : "light"), 
"dark" == document.documentElement.dataset.theme && document.head.insertAdjacentHTML("afterBegin", "<style> [data-use-theme] { visibility: hidden } </style>"), 
document.addEventListener("load", ({target: e}) => {
"OBJECT" == e.tagName && "image/svg+xml" == e.type && e.hasAttribute("data-use-theme") && "dark" == document.documentElement.dataset.theme && i(e, "light", "dark");
}, !0)), window.themeSvg = i;
},
484: function(e) {
e.exports = {
"#c9dcea": "#293c40",
"#1c85b5": "#6bafbc",
"#166388": "#7fd3e4",
"#eef6f1": "#1b2b22",
"#91c2a3": "#315841",
"#478964": "#498e67",
"#37664b": "#74b28d",
"#f6f3f1": "#272727",
"#181717": "#ffffff",
"#d1cfcd": "#3f3f3e",
"#7e7c7b": "#82807f",
"#5e5c5c": "#a6a4a3",
"#767d89": "#7a818d",
"#c06334": "#7a7f9c",
"#fef1f0": "#441b1b",
"#efa39f": "#8f2e32",
"#d35155": "#d55759",
"#a7333a": "#e88b88",
"#ffffff": "#232529",
"#fbf2ec": "#252732",
"#dbaf88": "#4b4e65",
"#af6e24": "#7a7f9c",
"#643b0c": "#c4c6d4",
"#000000": "#fffffe"
};
},
618: function(e, t, n) {
const o = n(102);
class a extends Modal {
constructor(e = {}) {
super(e), this.options.inModal = !0, this.setContent(`\n    <video controls autoplay style="max-width:100%;max-height:100%">\n      <source src="${e.src}" type="video/mp4"/>\n    </video>\n    `);
}
render() {
super.render(), this.elem.classList.add("video-player-modal");
}
}
o.delegateMixin(a.prototype), e.exports = a;
},
639: function(e) {
e.exports = function() {
let e, t = document.querySelector(".notification_top"), n = t.id;
if (!n) throw new Error("Top notification must have an id");
try {
e = JSON.parse(localStorage.topNotificationsHidden);
} catch (t) {
e = [];
}
e.includes(n) || (t.querySelector("button").onclick = () => {
e.push(n), localStorage.topNotificationsHidden = JSON.stringify(e), t.style.display = "none", 
window.dispatchEvent(new CustomEvent("resize-internal"));
}, t.style.display = "");
};
},
817: function(e) {
e.exports = class {
constructor(e = {}) {
this.options = e, this.render(), this.setHasClose(void 0 === e.hasClose || e.hasClose), 
this.onClick = this.onClick.bind(this), this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), 
this.elem.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onDocumentKeyDown);
}
setHasClose(e) {
this._hasClose = e, this._hasClose ? this.elem.classList.add("modal__has-close") : this.elem.classList.remove("modal__has-close");
}
render() {
document.body.insertAdjacentHTML("beforeEnd", '<div class="modal"><div class="modal__dialog"><button class="close-button modal__close"></button><div class="modal__content"></div></div></div>'), 
document.body.classList.add("paranja-open"), this.elem = document.body.lastChild, 
this.contentElem = this.elem.querySelector(".modal__content");
}
onClick(e) {
e.target.classList.contains("modal__close") && (this.remove(), e.preventDefault());
}
onDocumentKeyDown(e) {
27 === e.keyCode && (e.preventDefault(), this.remove());
}
showOverlay() {
this.contentElem.classList.add("modal-overlay_light");
}
hideOverlay() {
this.contentElem.classList.remove("modal-overlay_light");
}
setContent(e) {
"string" == typeof e ? this.contentElem.innerHTML = e : (this.contentElem.innerHTML = "", 
this.contentElem.appendChild(e));
let t = this.contentElem.querySelector("[data-modal-autofocus],[autofocus]");
t && t.focus();
}
remove() {
document.body.classList.remove("paranja-open"), document.body.removeChild(this.elem), 
document.removeEventListener("keydown", this.onDocumentKeyDown), this.elem.dispatchEvent(new CustomEvent("modal-remove"));
}
};
},
931: function(e, t, n) {
let o = n(817);
e.exports = function(e) {
function t(n) {
t.triggered || (t.triggered = !0, e(n));
}
if (localStorage.gdprAccepted) return t(!0);
let n = new o;
n.setContent('<div class="gdpr">\n    <h1 class="gdpr__title">Este sitio web utiliza cookies</h1>\n    <form class="gdpr__form">\n      <p class="gdpr__text">Usamos tecnologías de navegador como cookies y almacenamiento local para almacenar sus preferencias. Debes aceptar nuestras <a href="/privacy">Políticas de Privacidad</a> y <a href="/terms">Condiciones de Uso</a> para que podamos hacerlo.</p>\n      \n      <input class="button button_action" autofocus name="accept" type="submit" value="Aceptar">\n      <input class="button button_cancel" name="cancel" type="button" value="Cancelar">\n      \n    </form>\n    </div>\n  '), 
n.elem.querySelector("form").addEventListener("submit", e => {
e.preventDefault(), localStorage.gdprAccepted = 1, n.remove(), t(!0);
}), n.elem.querySelector("form").elements.cancel.addEventListener("click", e => {
e.preventDefault(), n.remove(), t(!1);
}), n.elem.addEventListener("modal-remove", function() {
setTimeout(() => t(!1), 10);
});
};
}
}, t = {};
function n(o) {
var a = t[o];
if (void 0 !== a) return a.exports;
var s = t[o] = {
exports: {}
};
return e[o](s, s.exports, n), s.exports;
}
n(116), n(387), window.acceptGdpr = n(931), window.Modal = n(817), n(50), window.fontTest = n(203), 
window.showTopNotification = n(639), n(129), n(117), init = {};
}();
//# sourceMappingURL=init.5d7bf060746ac03f75b7.js.map