/*! For license information please see tutorial.1fd2eb45c196482dd6c4.js.LICENSE.txt */
var tutorial;

(function() {
var __webpack_modules__ = {
225: function(e) {
function t(e) {
let t = document.createElement("div"), n = getComputedStyle(e);
return t.style.width = e.offsetWidth + "px", t.style.marginLeft = n.marginLeft, 
t.style.marginRight = n.marginRight, t.style.position = n.position, t.style.height = e.offsetHeight + "px", 
t.style.marginBottom = n.marginBottom, t.style.marginTop = n.marginTop, t;
}
e.exports = function() {
let e = document.querySelectorAll("[data-sticky]");
for (let n = 0; n < e.length; n++) {
let r = e[n], i = r.dataset.sticky ? JSON.parse(r.dataset.sticky) : {}, o = i.bottomLimit ? document.querySelector(i.bottomLimit) : null, a = i.container ? document.querySelector(i.container) : document.body, s = !i.minWidth || document.documentElement.clientWidth > i.minWidth;
if (r.placeholder) (r.placeholder.getBoundingClientRect().top > 0 || !s) && (r.style.cssText = "", 
r.classList.remove("sticky"), r.placeholder.parentNode.insertBefore(r, r.placeholder), 
r.placeholder.remove(), r.placeholder = null); else if (r.placeholder && o) o.getBoundingClientRect().top <= r.offsetHeight ? ("fixed" == r.style.position && (r.style.top = window.pageYOffset + "px"), 
r.style.position = "absolute") : (r.style.position = "fixed", r.style.top = 0); else if (r.getBoundingClientRect().top < 0 && s) {
if (r.style.cssText) return;
let e, n;
i.saveRight ? n = document.documentElement.clientWidth - r.getBoundingClientRect().right : e = r.getBoundingClientRect().left;
let o = i.noPlaceholder ? document.createElement("div") : t(r), s = r.offsetWidth;
r.after(o), a.appendChild(r), r.classList.add("sticky"), r.style.position = "fixed", 
r.style.top = 0, i.saveRight ? r.style.right = n + "px" : r.style.left = e + "px", 
r.style.zIndex = 101, r.style.background = "white", r.style.margin = 0, r.style.width = s + "px", 
r.placeholder = o;
}
}
};
},
467: function(e, t, n) {
let r = n(4596);
e.exports = function() {
window.consoleLogNative = window.console.log.bind(console), console.log = function(...e) {
consoleLogNative(...e);
let t = {
type: "console-log",
log: r(e),
codeBoxId: window.__codeBoxId
};
window.postMessage(t, "*");
}, window.addEventListener("message", ({source: e, data: t}) => {
if (e != window && e == window.parent) return;
if ("console-log" != t.type) return;
let n = document.getElementById(t.codeBoxId);
n && n.codeBox.consoleLog(t.log);
});
};
},
773: function(e, t, n) {
"use strict";
const r = new (n(8679))("en");
let i = console.error;
function o(e) {
if (!r.hasPhrase(a, e)) {
!1 && i("No such phrase", e);
}
return r.t(a, ...arguments);
}
e.exports = o;
const a = n(9907).lang;
"en" !== a && r.setFallback(a, "en"), r.add = (...e) => (e = e.map(e => e.__esModule ? e.default : e), 
r.addPhrase(a, ...e)), o.i18n = r;
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
937: function(e, t, n) {
var r = n(2983), i = Object.prototype, o = i.hasOwnProperty, a = i.toString, s = r ? r.toStringTag : void 0;
e.exports = function(e) {
var t = o.call(e, s), n = e[s];
try {
e[s] = void 0;
var r = !0;
} catch (e) {}
var i = a.call(e);
return r && (t ? e[s] = n : delete e[s]), i;
};
},
1113: function(e, t) {
!function(e) {
var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
e.languages.css = {
comment: /\/\*[\s\S]*?\*\//,
atrule: {
pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + t.source + ")*?" + /(?:;|(?=\s*\{))/.source),
inside: {
rule: /^@[\w-]+/,
"selector-function-argument": {
pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
lookbehind: !0,
alias: "selector"
},
keyword: {
pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
lookbehind: !0
}
}
},
url: {
pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
greedy: !0,
inside: {
function: /^url/i,
punctuation: /^\(|\)$/,
string: {
pattern: RegExp("^" + t.source + "$"),
alias: "url"
}
}
},
selector: {
pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
lookbehind: !0
},
string: {
pattern: t,
greedy: !0
},
property: {
pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
lookbehind: !0
},
important: /!important\b/i,
function: {
pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
lookbehind: !0
},
punctuation: /[(){};:,]/
}, e.languages.css.atrule.inside.rest = e.languages.css;
var n = e.languages.markup;
n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
}(Prism);
},
1310: function(e, t, n) {
"use strict";
n.r(t), t.default = {
site: {
privacy_policy: "política de privacidad",
terms: "condiciones de uso",
gdpr_dialog: {
title: "Este sitio web utiliza cookies",
text: 'Usamos tecnologías de navegador como cookies y almacenamiento local para almacenar sus preferencias. Debes aceptar nuestras <a href="/privacy">Políticas de Privacidad</a> y <a href="/terms">Condiciones de Uso</a> para que podamos hacerlo.',
accept: "Aceptar",
cancel: "Cancelar"
},
theme: {
light: "Light theme",
dark: "Dark theme",
change: "Change theme"
},
toolbar: {
lang_switcher: {
cta_text: '<p>Queremos que este proyecto de código abierto esté disponible para personas de todo el mundo.</p> <p><a href="https://javascript.info/translate">Ayuda a traducir</a> el contenido de este tutorial a tu idioma!</p>\n',
footer_text: "cuánto contenido está traducido al idioma correspondiente",
old_version: "Antigua versión está publicada, necesita backporting."
},
logo: {
normal: {
svg: "sitetoolbar__logo_en.svg",
width: 200
},
"normal-white": {
svg: "sitetoolbar__logo_en-white.svg"
},
small: {
svg: "sitetoolbar__logo_small_en.svg",
width: 70
},
"small-white": {
svg: "sitetoolbar__logo_small_en-white.svg"
}
},
sections: null,
buy_ebook_extra: "Comprar",
buy_ebook: "EPUB/PDF",
search_placeholder: "Buscar en Javascript.info",
search_button: "Buscar",
public_profile: "Perfil público",
account: "Cuenta",
notifications: "Notificaciones",
admin: "Admin",
logout: "Cerrar sesión"
},
sorry_old_browser: "Lo sentimos, Internet Explorer no es compatible. Utilice un navegador más nuevo.",
contact_us: "contáctenos",
about_the_project: "acerca del proyecto",
ilya_kantor: "Ilya Kantor",
comments: "Comentarios",
loading: "Cargando...",
search: "Buscar",
share: "Compartir",
read_before_commenting: "lea esto antes de comentar…",
last_updated_at: "Última actualización el #{date}",
meta: {
description: "Tutorial de JavaScript moderno: explicaciones simples pero detalladas con ejemplos y tareas, que incluyen: closures, documentos y eventos, programación orientada a objetos y más."
},
"tablet-menu": {
choose_section: "Elija una sección",
search_placeholder: "Buscar en el tutorial",
search_button: "Buscar"
},
comment: {
help: [ 'Si tiene sugerencias sobre qué mejorar, por favor <a href="https://github.com/javascript-tutorial/en.javascript.info/issues/new">enviar una propuesta de GitHub</a> o una solicitud de extracción en lugar de comentar.', "Si no puede entender algo en el artículo, por favor explique.", "Para insertar algunas palabras de código, use la etiqueta <code>&lt;code&gt;</code>, para varias líneas – envolverlas en la etiqueta <code>&lt;pre&gt;</code>, para más de 10 líneas – utilice una entorno controlado (sandbox) (<a href='https://plnkr.co/edit/?p=preview'>plnkr</a>, <a href='https://jsbin.com'>jsbin</a>, <a href='http://codepen.io'>codepen</a>…)" ]
},
edit_on_github: "Editar en GitHub",
error: "error",
close: "cerrar",
hide_forever: "ocultar de manera permanente",
hidden_forever: "Esta información no volverá a aparecer.",
subscribe: {
title: "Esté atento a las actualizaciones de javascript.info",
text: "No enviamos publicidad, solo material relevante. Tu eliges que recibir:",
agreement: 'Al suscribirse a los boletines informativos, acepta las <a href="#{link}" target="_blank">condiciones de uso</a>.',
button: "Suscríbete",
button_unsubscribe: "Darse de baja de todos",
common_updates: "Actualizaciones comúnes",
common_updates_text: "nuevos cursos, clases magistrales, lanzamientos de artículos y screencast",
your_email: "tu@email.aqui",
newsletters: "boletín informativo,boletines informativos,boletines informativos",
no_selected: "Nada seleccionado"
},
form: {
value_must_not_be_empty: "El valor no debe estar vacío.",
value_is_too_long: "El valor es demasiado largo.",
value_is_too_short: "El valor es demasiado corto.",
invalid_email: "Dirección de email no válida.",
invalid_value: "Valor no válido.",
invalid_autocomplete: "Por favor elija de la lista",
invalid_date: "Fecha no válida, formato: dd.mm.yyyyy.",
invalid_range: "Esta fecha no es válida aquí.",
save: "Guardar",
upload_file: "Subir Archivo",
cancel: "Cancelar",
server_error: "Error de solicitud, código de estado"
}
}
};
},
1328: function(e, t, n) {
let r = n(820), i = n(6970), o = n(8060);
n(9516);
const a = n(9907);
let s = n(4596);
const l = n(773), c = n(9907).lang;
l.i18n.add("prism", n(3692)("./" + c + ".yml")), e.exports = function(e) {
let t, n = e.querySelector("pre"), c = Array.from(n.childNodes).find(e => "CODE" === e.tagName), u = c.textContent;
e.codeBox = this;
let d = u;
e.hasAttribute("data-async") && (d = `(async () => {\n${u}\n})()`), Prism.highlightElement(c);
let p = o(n.innerHTML);
n.insertAdjacentHTML("afterBegin", p);
let h = JSON.parse(e.getAttribute("data-highlight"));
h && function(e, t) {
let n = e.innerHTML, r = n.split(/\n/);
for (let e of t) if (void 0 !== e.end) r[e.start] = '<em class="block-highlight">' + r[e.start], 
r[e.end] += "</em>"; else {
let t = r[e.start], n = e.cols, i = !1, o = -1, a = "";
for (let e = 0; e < t.length; e++) {
if ("<" == t[e] && (i = !0), i) a += t[e]; else {
if (o++, n.find(e => e.start == o) && (a += '<em class="inline-highlight">'), a += t[e], 
"&" == t[e]) {
let n = [ "lt;", "gt;", "amp;", "quot;" ];
for (let r of n) t.slice(e + 1, e + 1 + r.length) == r && (e += r.length, a += r);
}
n.find(e => e.end == o + 1) && (a += "</em>");
}
">" == t[e] && (i = !1);
}
r[e.start] = a;
}
e.innerHTML = r.join("\n");
}(c, h);
let f, m, g, E = n.classList.contains("language-javascript"), b = n.classList.contains("language-markup"), v = +e.getAttribute("data-trusted"), T = !+e.getAttribute("data-no-strict") && E ? '"use strict";' : "", S = `globalThis.__codeBoxId = "${e.id}";`, _ = `${T}\n\n${d}`;
d = `${T}${S}\n\n${d}`;
let y = !0;
if (!E && !b) return;
let A = e.querySelector('[data-action="run"]');
A && (A.onclick = function() {
return this.blur(), R(), !1;
});
let w = e.querySelector('[data-action="edit"]');
function L() {
let e = f.contentWindow;
"function" == typeof e.postMessage ? e.postMessage(d, a.lookatCodeUrlBase + "/showjs") : alert("Sorry, your browser is too old");
}
function I() {
if (e.hasAttribute("data-global")) {
m || (m = document.createElement("iframe"), m.className = "js-frame", m.style.width = 0, 
m.style.height = 0, m.style.border = "none", m.name = "js-global-frame", document.body.appendChild(m));
let t = document.createElement("form");
t.style.display = "none", t.method = "POST", t.enctype = "multipart/form-data", 
t.action = a.lookatCodeUrlBase + "/showhtml", t.target = "js-global-frame";
let n = e.hasAttribute("data-module") ? ' type="module"' : "", r = document.createElement("textarea");
r.name = "code", r.value = O(`<script${n}>\n${d}\n<\/script>`), t.appendChild(r), 
m.parentNode.insertBefore(t, m.nextSibling), t.submit(), t.remove();
} else if (v) {
if (e.hasAttribute("data-autorun") || e.hasAttribute("data-module")) return void function(e) {
let t = document.createElement("script");
t.type = "module", t.text = e, document.head.append(t), t.remove();
}(d);
try {
window.eval.call(window, d);
} catch (e) {
alert(e.constructor.name + ": " + e.message);
}
} else e.hasAttribute("data-refresh") && f && (f.remove(), f = null), f ? L() : (f = document.createElement("iframe"), 
f.className = "js-frame", f.src = a.lookatCodeUrlBase + "/showjs", f.style.width = 0, 
f.style.height = 0, f.style.border = "none", f.onload = function() {
L();
}, document.body.appendChild(f));
}
function O(e) {
if (e.match(/^\s*<!doctype/i)) return e;
let t = e;
return e.match(/<body/i) || (t = `<body>\n${t}\n</body>`), t = "<!doctype html>\n" + t, 
t;
}
function R() {
t && (t.remove(), t = null), E ? I() : function() {
let t;
if (g && e.hasAttribute("data-refresh") && (g.remove(), g = null), g || (g = e.querySelector(".code-result")), 
g) t = g.querySelector("iframe"); else {
if (g = document.createElement("div"), g.className = "code-result code-example__result", 
t = document.createElement("iframe"), t.name = e.id, t.className = "code-result__iframe", 
"0" === e.getAttribute("data-demo-height")) g.style.display = "none"; else if (e.hasAttribute("data-demo-height")) {
let n = +e.getAttribute("data-demo-height");
t.style.height = n + "px";
}
g.appendChild(t), e.appendChild(g);
}
if (v && !t.hasCustomConsoleLog) {
t.hasCustomConsoleLog = !0;
let n = t.contentWindow.console.log.bind(t.contentWindow.console);
t.contentWindow.console.log = function(...t) {
n(...t);
let r = s(t);
window.postMessage({
type: "console-log",
log: r,
codeBoxId: e.id
}, "*");
};
}
if (v) {
let n = t.contentDocument || t.contentWindow.document;
n.open(), n.write(O(u)), n.close(), e.hasAttribute("data-demo-height") || r.iframe(t), 
y && e.hasAttribute("data-autorun") || i(g) || g.scrollIntoView(!1);
} else {
let n = document.createElement("form");
n.style.display = "none", n.method = "POST", n.enctype = "multipart/form-data", 
n.action = a.lookatCodeUrlBase + "/showhtml", n.target = t.name;
let o = document.createElement("textarea");
o.name = "code";
let s = O(u);
s.includes("console.log") && (s = s.replace(/<head>|<body>/im, "$&__LOOKATCODE_SCRIPT__")), 
o.value = s, n.appendChild(o), t.parentNode.insertBefore(n, t.nextSibling), n.submit(), 
n.remove(), y && e.hasAttribute("data-autorun") || (t.onload = function() {
e.hasAttribute("data-demo-height") || r.iframe(t), i(g) || g.scrollIntoView(!1);
});
}
}(), y = !1;
}
w && (w.onclick = function() {
return this.blur(), function() {
let e;
e = b ? O(u) : `<!DOCTYPE html>\n<script>\n${_}\n<\/script>`;
let t = document.createElement("form");
t.action = "https://plnkr.co/edit/?p=preview", t.method = "POST", t.target = "_blank", 
document.body.appendChild(t);
let n = document.createElement("textarea");
n.name = "files[index.html]", n.value = e, t.appendChild(n);
let r = document.createElement("input");
r.name = "description", r.value = "Fork from " + window.location, t.appendChild(r), 
t.submit(), t.remove();
}(), !1;
}), e.hasAttribute("data-autorun") && ("epub" == window.ebookType && "no-epub" == e.getAttribute("data-autorun") ? e.querySelector("iframe").remove() : setTimeout(R, 100)), 
this.consoleLog = function(n) {
if (!t) {
t = document.createElement("div"), t.className = "codebox__output", e.append(t);
let n = document.createElement("div");
n.className = "codebox__output-label", n.innerHTML = l("prism.output"), t.append(n);
}
let r = document.createElement("div");
r.className = "codebox__output-line", r.innerHTML = n, t.append(r);
};
};
},
1486: function(e, t, n) {
var r = n(6339);
e.exports = function() {
return r.Date.now();
};
},
1495: function(e, t, n) {
let r = n(5345), i = n(4629);
const o = n(9907).lang, a = n(773);
a.i18n.add("", n(3205)("./" + o + ".yml")), a.i18n.add("error.network", n(6188)("./" + o + ".yml")), 
document.addEventListener("xhrfail", function(e) {
new r.Error(e.reason);
}), e.exports = function(e) {
let t = new XMLHttpRequest, n = e.method || "GET", r = e.body, o = e.url;
t.open(n, o, !e.sync), t.method = n;
let s = i();
s && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", s), e.responseType && (t.responseType = e.responseType), 
"[object Object]" == {}.toString.call(r) && (t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
r = JSON.stringify(r)), e.noDocumentEvents || (t.addEventListener("loadstart", e => {
t.timeStart = Date.now();
let n = c("xhrstart", e);
document.dispatchEvent(n);
}), t.addEventListener("loadend", e => {
let t = c("xhrend", e);
document.dispatchEvent(t);
}), t.addEventListener("success", e => {
let t = c("xhrsuccess", e);
t.result = e.result, document.dispatchEvent(t);
}), t.addEventListener("fail", e => {
let t = c("xhrfail", e);
t.reason = e.reason, document.dispatchEvent(t);
})), e.raw || t.setRequestHeader("Accept", "application/json"), t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
let l = e.normalStatuses || [ 200 ];
function c(e, t) {
let n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function u(e, n) {
let r = c("fail", n);
r.reason = e, t.dispatchEvent(r);
}
return t.addEventListener("error", e => {
u(a("error.network.server_connection_error"), e);
}), t.addEventListener("timeout", e => {
u(a("error.network.server_request_timeout"), e);
}), t.addEventListener("abort", e => {
u(a("error.network.request_aborted"), e);
}), t.addEventListener("load", n => {
if (!t.status) return void u(a("error.network.no_response"), n);
let r = e.responseType && "text" !== e.responseType ? t.response : t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
r = JSON.parse(r);
} catch (n) {
return void u(a("error.network.invalid_format"), n);
}
if (!l.includes(t.status)) {
return void u(r.info ? a("error.network.server_error_info", {
status: t.status,
info: r.info
}) : a("error.network.server_error", {
status: t.status
}), n);
}
!function(e, n) {
let r = c("success", n);
r.result = e, t.dispatchEvent(r);
}(r, n);
}), setTimeout(function() {
t.send(r);
}), t;
};
},
1552: function(e, t, n) {
var r = n(9006), i = n(3667), o = n(6516), a = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, l = /^0o[0-7]+$/i, c = parseInt;
e.exports = function(e) {
if ("number" == typeof e) return e;
if (o(e)) return NaN;
if (i(e)) {
var t = "function" == typeof e.valueOf ? e.valueOf() : e;
e = i(t) ? t + "" : t;
}
if ("string" != typeof e) return 0 === e ? e : +e;
e = r(e);
var n = s.test(e);
return n || l.test(e) ? c(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e;
};
},
1623: function(e, t, n) {
let r = n(7200);
e.exports = class {
constructor(e) {
this.slider = e.el, this.list = this.slider.querySelector("ul"), e.class && (this.classList = e.class.split(" ")), 
this.disabled = !1, this.init(), this.bindHandlers();
}
init() {
this.classList && this.classList.length && this.slider.classList.add(...this.classList), 
this.slider.classList.add("slider_disable-left");
const e = document.createElement("div");
e.classList.add("slider__container"), e.appendChild(this.list), this.slider.innerHTML = '<button class="slider__arrow slider__arrow_left"></button><button class="slider__arrow slider__arrow_right"></button>', 
this.slider.appendChild(e), this.innerWidth = this.countInnerWidth(), this.arrowLeft = this.slider.querySelector(".slider__arrow_left"), 
this.arrowRight = this.slider.querySelector(".slider__arrow_right");
}
countInnerWidth() {
return [ ...this.list.querySelectorAll("li") ].reduce((e, t) => {
const n = window.getComputedStyle(t);
return e + (t.offsetWidth + parseFloat(n.marginLeft) + parseFloat(n.marginRight));
}, 0);
}
bindHandlers() {
this.transformX = 0, this.arrowLeft.addEventListener("click", () => {
this.transformX -= this.list.clientWidth, this.transformX < 0 && (this.transformX = 0), 
this.render();
}), this.arrowRight.addEventListener("click", () => {
this.transformX = Math.min(this.transformX + this.list.clientWidth, this.list.scrollWidth - this.list.clientWidth), 
this.render();
}), window.addEventListener("resize", r(() => {
this.onResize();
}, 200)), this.onResize();
}
onResize() {
!this.disabled && this.innerWidth <= this.list.offsetWidth ? (this.slider.classList.add("slider_disabled"), 
this.disabled = !0, this.transformX > 0 && (this.transformX = 0, this.slider.classList.contains("slider_disable-right") && this.slider.classList.remove("slider_disable-right"), 
this.render())) : this.disabled && this.innerWidth > this.list.offsetWidth && (this.slider.classList.remove("slider_disabled"), 
this.slider.classList.contains("slider_disable-right") && this.slider.classList.remove("slider_disable-right"), 
this.disabled = !1);
}
render() {
this.list.style.transform = this.transformX > 0 ? `translateX(${-this.transformX}px)` : "translateX(0)", 
0 === this.transformX ? this.slider.classList.add("slider_disable-left") : this.slider.classList.remove("slider_disable-left"), 
this.transformX == this.list.scrollWidth - this.list.clientWidth ? this.slider.classList.add("slider_disable-right") : this.slider.classList.remove("slider_disable-right");
}
};
},
1983: function(e, t) {
var n = function(e) {
var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, n = 0, r = {}, i = {
manual: e.Prism && e.Prism.manual,
disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
util: {
encode: function e(t) {
return t instanceof o ? new o(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
},
type: function(e) {
return Object.prototype.toString.call(e).slice(8, -1);
},
objId: function(e) {
return e.__id || Object.defineProperty(e, "__id", {
value: ++n
}), e.__id;
},
clone: function e(t, n) {
var r, o;
switch (n = n || {}, i.util.type(t)) {
case "Object":
if (o = i.util.objId(t), n[o]) return n[o];
for (var a in r = {}, n[o] = r, t) t.hasOwnProperty(a) && (r[a] = e(t[a], n));
return r;

case "Array":
return o = i.util.objId(t), n[o] ? n[o] : (r = [], n[o] = r, t.forEach(function(t, i) {
r[i] = e(t, n);
}), r);

default:
return t;
}
},
getLanguage: function(e) {
for (;e; ) {
var n = t.exec(e.className);
if (n) return n[1].toLowerCase();
e = e.parentElement;
}
return "none";
},
setLanguage: function(e, n) {
e.className = e.className.replace(RegExp(t, "gi"), ""), e.classList.add("language-" + n);
},
currentScript: function() {
if ("undefined" == typeof document) return null;
if (document.currentScript && "SCRIPT" === document.currentScript.tagName) return document.currentScript;
try {
throw new Error;
} catch (r) {
var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
if (e) {
var t = document.getElementsByTagName("script");
for (var n in t) if (t[n].src == e) return t[n];
}
return null;
}
},
isActive: function(e, t, n) {
for (var r = "no-" + t; e; ) {
var i = e.classList;
if (i.contains(t)) return !0;
if (i.contains(r)) return !1;
e = e.parentElement;
}
return !!n;
}
},
languages: {
plain: r,
plaintext: r,
text: r,
txt: r,
extend: function(e, t) {
var n = i.util.clone(i.languages[e]);
for (var r in t) n[r] = t[r];
return n;
},
insertBefore: function(e, t, n, r) {
var o = (r = r || i.languages)[e], a = {};
for (var s in o) if (o.hasOwnProperty(s)) {
if (s == t) for (var l in n) n.hasOwnProperty(l) && (a[l] = n[l]);
n.hasOwnProperty(s) || (a[s] = o[s]);
}
var c = r[e];
return r[e] = a, i.languages.DFS(i.languages, function(t, n) {
n === c && t != e && (this[t] = a);
}), a;
},
DFS: function e(t, n, r, o) {
o = o || {};
var a = i.util.objId;
for (var s in t) if (t.hasOwnProperty(s)) {
n.call(t, s, t[s], r || s);
var l = t[s], c = i.util.type(l);
"Object" !== c || o[a(l)] ? "Array" !== c || o[a(l)] || (o[a(l)] = !0, e(l, n, s, o)) : (o[a(l)] = !0, 
e(l, n, null, o));
}
}
},
plugins: {},
highlightAll: function(e, t) {
i.highlightAllUnder(document, e, t);
},
highlightAllUnder: function(e, t, n) {
var r = {
callback: n,
container: e,
selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
};
i.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), 
i.hooks.run("before-all-elements-highlight", r);
for (var o, a = 0; o = r.elements[a++]; ) i.highlightElement(o, !0 === t, r.callback);
},
highlightElement: function(t, n, r) {
var o = i.util.getLanguage(t), a = i.languages[o];
i.util.setLanguage(t, o);
var s = t.parentElement;
s && "pre" === s.nodeName.toLowerCase() && i.util.setLanguage(s, o);
var l = {
element: t,
language: o,
grammar: a,
code: t.textContent
};
function c(e) {
l.highlightedCode = e, i.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, 
i.hooks.run("after-highlight", l), i.hooks.run("complete", l), r && r.call(l.element);
}
if (i.hooks.run("before-sanity-check", l), (s = l.element.parentElement) && "pre" === s.nodeName.toLowerCase() && !s.hasAttribute("tabindex") && s.setAttribute("tabindex", "0"), 
!l.code) return i.hooks.run("complete", l), void (r && r.call(l.element));
if (i.hooks.run("before-highlight", l), l.grammar) if (n && e.Worker) {
var u = new Worker(i.filename);
u.onmessage = function(e) {
c(e.data);
}, u.postMessage(JSON.stringify({
language: l.language,
code: l.code,
immediateClose: !0
}));
} else c(i.highlight(l.code, l.grammar, l.language)); else c(i.util.encode(l.code));
},
highlight: function(e, t, n) {
var r = {
code: e,
grammar: t,
language: n
};
if (i.hooks.run("before-tokenize", r), !r.grammar) throw new Error('The language "' + r.language + '" has no grammar.');
return r.tokens = i.tokenize(r.code, r.grammar), i.hooks.run("after-tokenize", r), 
o.stringify(i.util.encode(r.tokens), r.language);
},
tokenize: function(e, t) {
var n = t.rest;
if (n) {
for (var r in n) t[r] = n[r];
delete t.rest;
}
var i = new l;
return c(i, i.head, e), s(e, i, t, i.head, 0), function(e) {
var t = [], n = e.head.next;
for (;n !== e.tail; ) t.push(n.value), n = n.next;
return t;
}(i);
},
hooks: {
all: {},
add: function(e, t) {
var n = i.hooks.all;
n[e] = n[e] || [], n[e].push(t);
},
run: function(e, t) {
var n = i.hooks.all[e];
if (n && n.length) for (var r, o = 0; r = n[o++]; ) r(t);
}
},
Token: o
};
function o(e, t, n, r) {
this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length;
}
function a(e, t, n, r) {
e.lastIndex = t;
var i = e.exec(n);
if (i && r && i[1]) {
var o = i[1].length;
i.index += o, i[0] = i[0].slice(o);
}
return i;
}
function s(e, t, n, r, l, d) {
for (var p in n) if (n.hasOwnProperty(p) && n[p]) {
var h = n[p];
h = Array.isArray(h) ? h : [ h ];
for (var f = 0; f < h.length; ++f) {
if (d && d.cause == p + "," + f) return;
var m = h[f], g = m.inside, E = !!m.lookbehind, b = !!m.greedy, v = m.alias;
if (b && !m.pattern.global) {
var T = m.pattern.toString().match(/[imsuy]*$/)[0];
m.pattern = RegExp(m.pattern.source, T + "g");
}
for (var S = m.pattern || m, _ = r.next, y = l; _ !== t.tail && !(d && y >= d.reach); y += _.value.length, 
_ = _.next) {
var A = _.value;
if (t.length > e.length) return;
if (!(A instanceof o)) {
var w, L = 1;
if (b) {
if (!(w = a(S, y, e, E)) || w.index >= e.length) break;
var I = w.index, O = w.index + w[0].length, R = y;
for (R += _.value.length; I >= R; ) R += (_ = _.next).value.length;
if (y = R -= _.value.length, _.value instanceof o) continue;
for (var N = _; N !== t.tail && (R < O || "string" == typeof N.value); N = N.next) L++, 
R += N.value.length;
L--, A = e.slice(y, R), w.index -= y;
} else if (!(w = a(S, 0, A, E))) continue;
I = w.index;
var k = w[0], C = A.slice(0, I), F = A.slice(I + k.length), x = y + A.length;
d && x > d.reach && (d.reach = x);
var D = _.prev;
if (C && (D = c(t, D, C), y += C.length), u(t, D, L), _ = c(t, D, new o(p, g ? i.tokenize(k, g) : k, v, k)), 
F && c(t, _, F), L > 1) {
var P = {
cause: p + "," + f,
reach: x
};
s(e, t, n, _.prev, y, P), d && P.reach > d.reach && (d.reach = P.reach);
}
}
}
}
}
}
function l() {
var e = {
value: null,
prev: null,
next: null
}, t = {
value: null,
prev: e,
next: null
};
e.next = t, this.head = e, this.tail = t, this.length = 0;
}
function c(e, t, n) {
var r = t.next, i = {
value: n,
prev: t,
next: r
};
return t.next = i, r.prev = i, e.length++, i;
}
function u(e, t, n) {
for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
t.next = r, r.prev = t, e.length -= i;
}
if (e.Prism = i, o.stringify = function e(t, n) {
if ("string" == typeof t) return t;
if (Array.isArray(t)) {
var r = "";
return t.forEach(function(t) {
r += e(t, n);
}), r;
}
var o = {
type: t.type,
content: e(t.content, n),
tag: "span",
classes: [ "token", t.type ],
attributes: {},
language: n
}, a = t.alias;
a && (Array.isArray(a) ? Array.prototype.push.apply(o.classes, a) : o.classes.push(a)), 
i.hooks.run("wrap", o);
var s = "";
for (var l in o.attributes) s += " " + l + '="' + (o.attributes[l] || "").replace(/"/g, "&quot;") + '"';
return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + s + ">" + o.content + "</" + o.tag + ">";
}, !e.document) return e.addEventListener ? (i.disableWorkerMessageHandler || e.addEventListener("message", function(t) {
var n = JSON.parse(t.data), r = n.language, o = n.code, a = n.immediateClose;
e.postMessage(i.highlight(o, i.languages[r], r)), a && e.close();
}, !1), i) : i;
var d = i.util.currentScript();
function p() {
i.manual || i.highlightAll();
}
if (d && (i.filename = d.src, d.hasAttribute("data-manual") && (i.manual = !0)), 
!i.manual) {
var h = document.readyState;
"loading" === h || "interactive" === h && d && d.defer ? document.addEventListener("DOMContentLoaded", p) : window.requestAnimationFrame ? window.requestAnimationFrame(p) : window.setTimeout(p, 16);
}
return i;
}("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
void 0 !== e && e.exports && (e.exports = n), "undefined" != typeof global && (global.Prism = n);
},
2346: function(e) {
e.exports = e => {
e.languages.sql = {
comment: {
pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
lookbehind: !0
},
variable: [ {
pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
greedy: !0
}, /@[\w.$]+/ ],
string: {
pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
greedy: !0,
lookbehind: !0
},
identifier: {
pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
greedy: !0,
lookbehind: !0,
inside: {
punctuation: /^`|`$/
}
},
function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
punctuation: /[;[\]()`,.]/,
error: /^\s*ERROR/
};
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
2924: function(e, t, n) {
let r = n(7200), i = n(3102);
class o {
constructor(e) {
this.elem = e, this.throttleFilter = r(this.filter, 200), this.showTasksCheckbox = e.querySelector("[data-tutorial-map-show-tasks]"), 
this.showTasksCheckbox.checked = +sessionStorage.showTasksCheckbox, this.updateShowTasks(), 
this.showTasksCheckbox.onchange = this.updateShowTasks.bind(this), this.filterInput = this.elem.querySelector("[data-tutorial-map-filter]"), 
this.textInputBlock = this.elem.querySelector(".tutorial-map__filter .text-input"), 
this.filterInput.oninput = this.onFilterInput.bind(this), this.filterInput.onkeydown = this.onFilterKeydown.bind(this), 
this.elem.querySelector(".text-input__clear").onclick = () => {
this.filterInput.value = "", this.showClearButton(!1), this.filter("");
}, this.chaptersCollapsed = JSON.parse(sessionStorage.tutorialMapChapters || "{}"), 
this.showChaptersCollapsed(), this.delegate(".tutorial-map__item > .tutorial-map__link", "click", e => {
e.preventDefault();
let t = e.delegateTarget.getAttribute("href");
this.chaptersCollapsed[t] ? delete this.chaptersCollapsed[t] : this.chaptersCollapsed[t] = 1, 
sessionStorage.tutorialMapChapters = JSON.stringify(this.chaptersCollapsed), this.showChaptersCollapsed();
});
let t = this.elem.querySelector('.tutorial-map-list-three__link[href="' + location.pathname + '"]');
t && t.classList.add("tutorial-map-list-three__link_active"), this.filterInput.focus();
}
showChaptersCollapsed() {
let e = this.elem.querySelectorAll(".tutorial-map__item > .tutorial-map__link");
for (let t = 0; t < e.length; t++) {
let n = e[t];
this.chaptersCollapsed[n.getAttribute("href")] ? n.parentNode.classList.add("tutorial-map__item_collapsed") : n.parentNode.classList.remove("tutorial-map__item_collapsed");
}
}
updateShowTasks() {
this.showTasksCheckbox.checked ? this.elem.classList.add("tutorial-map_show-tasks") : this.elem.classList.remove("tutorial-map_show-tasks"), 
sessionStorage.showTasksCheckbox = this.showTasksCheckbox.checked ? "1" : "0";
}
onFilterInput(e) {
this.showClearButton(e.target.value), this.throttleFilter(e.target.value);
}
onFilterKeydown(e) {
27 === e.keyCode && (this.filterInput.value = "", this.showClearButton(!1), this.filter(""));
}
showClearButton(e) {
e ? this.textInputBlock.classList.add("text-input_clear-button") : this.textInputBlock.classList.remove("text-input_clear-button");
}
focus() {
this.elem.tabIndex = -1, this.elem.focus();
}
filter(e) {
e = e.toLowerCase();
let t = this.showTasksCheckbox.checked, n = (this.elem.querySelectorAll(".tutorial-map-list a"), 
this.elem.querySelectorAll(".tutorial-map-list-two__item"));
function r(t) {
return function(e, t) {
let n = 0, r = 0;
for (;n < e.length && r < t.length; ) e[n] === t[r] ? (n++, r++) : n++;
return r === t.length;
}(t.querySelector("a").innerHTML.toLowerCase(), e.replace(/\s/g, ""));
}
for (let e = 0; e < n.length; e++) {
let i = n[e], o = i.querySelectorAll(".tutorial-map-list-three__item"), a = Array.prototype.reduce.call(o, function(e, n) {
let i = !1;
if (t) {
let e = n.querySelectorAll(".tutorial-map-list-four__item");
i = Array.prototype.reduce.call(e, function(e, t) {
let n = r(t);
return t.hidden = !n, e || n;
}, !1);
}
let o = i || r(n);
return n.hidden = !o, e || o;
}, !1);
i.hidden = !(a || r(i));
}
}
}
e.exports = o, i.delegateMixin(o.prototype);
},
2983: function(e, t, n) {
var r = n(6339).Symbol;
e.exports = r;
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
3123: function(e, t, n) {
n(1983), n(4312), n(1113), n(5365), n(5624), n(5723), n(4784), n(4604), n(6966), 
n(6976), n(7022), Prism.hooks.add("wrap", function(e) {
"span" === e.tag && (e.tag = "code");
});
},
3205: function(e, t, n) {
var r = {
"./es.yml": 1310
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
}, i.resolve = o, e.exports = i, i.id = 3205;
},
3388: function(e) {
var t = Object.prototype.toString;
e.exports = function(e) {
return t.call(e);
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
3667: function(e) {
e.exports = function(e) {
var t = typeof e;
return null != e && ("object" == t || "function" == t);
};
},
3692: function(e, t, n) {
var r = {
"./es.yml": 9835
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
}, i.resolve = o, e.exports = i, i.id = 3692;
},
4312: function(e, t) {
Prism.languages.markup = {
comment: {
pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
greedy: !0
},
prolog: {
pattern: /<\?[\s\S]+?\?>/,
greedy: !0
},
doctype: {
pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
greedy: !0,
inside: {
"internal-subset": {
pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
lookbehind: !0,
greedy: !0,
inside: null
},
string: {
pattern: /"[^"]*"|'[^']*'/,
greedy: !0
},
punctuation: /^<!|>$|[[\]]/,
"doctype-tag": /^DOCTYPE/i,
name: /[^\s<>'"]+/
}
},
cdata: {
pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
greedy: !0
},
tag: {
pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
greedy: !0,
inside: {
tag: {
pattern: /^<\/?[^\s>\/]+/,
inside: {
punctuation: /^<\/?/,
namespace: /^[^\s>\/:]+:/
}
},
"special-attr": [],
"attr-value": {
pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
inside: {
punctuation: [ {
pattern: /^=/,
alias: "attr-equals"
}, {
pattern: /^(\s*)["']|["']$/,
lookbehind: !0
} ]
}
},
punctuation: /\/?>/,
"attr-name": {
pattern: /[^\s>\/]+/,
inside: {
namespace: /^[^\s>\/:]+:/
}
}
}
},
entity: [ {
pattern: /&[\da-z]{1,8};/i,
alias: "named-entity"
}, /&#x?[\da-f]{1,8};/i ]
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, 
Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, 
Prism.hooks.add("wrap", function(e) {
"entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
value: function(e, t) {
var n = {};
n["language-" + t] = {
pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
lookbehind: !0,
inside: Prism.languages[t]
}, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
var r = {
"included-cdata": {
pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
inside: n
}
};
r["language-" + t] = {
pattern: /[\s\S]+/,
inside: Prism.languages[t]
};
var i = {};
i[e] = {
pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
return e;
}), "i"),
lookbehind: !0,
greedy: !0,
inside: r
}, Prism.languages.insertBefore("markup", "cdata", i);
}
}), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
value: function(e, t) {
Prism.languages.markup.tag.inside["special-attr"].push({
pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
lookbehind: !0,
inside: {
"attr-name": /^[^\s=]+/,
"attr-value": {
pattern: /=[\s\S]+/,
inside: {
value: {
pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
lookbehind: !0,
alias: [ t, "language-" + t ],
inside: Prism.languages[t]
},
punctuation: [ {
pattern: /^=/,
alias: "attr-equals"
}, /"|'/ ]
}
}
}
});
}
}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, 
Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), 
Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, 
Prism.languages.rss = Prism.languages.xml;
},
4596: function(e) {
function t(e, n = 0) {
if (null == e) return "null";
if ("function" == typeof e) return function(e, t = 0) {
if (t) return "function " + e.name;
(e = (e = e.toString()).split("\n")).length > 10 && (e = e.slice(0, 10).join("\n") + "\n...");
return e;
}(e, n);
if (Array.isArray(e)) return function(e, n = 0) {
if (n > 2) return "[...]";
let r = 1 == n ? 3 : 10;
e.length > r && (e = e.slice(0, r)).push("...");
return "[" + e.map(e => t(e, n + 1)).join(", ") + "]";
}(e, n);
if ("object" == typeof window) {
if (e instanceof Node) return t(e.outerHTML, n);
if (e instanceof Event) {
let r = [ Symbol.toStringTag, "type", "clientX", "clientY", "key", "code" ], i = {};
for (let t of r) t in e && (i[t] = e[t]);
return t(i, n);
}
}
return "object" == typeof e ? function(e, n = 0) {
let r = e.constructor.name;
"Object" == r && e[Symbol.toStringTag] && (r = e[Symbol.toStringTag]);
if ("Object" != r && e.toString != Object.prototype.toString) return e.toString();
let i = "";
"Object" != r && (i += r + " ");
if (i += "{", n > 1) i += "..."; else {
let r = [];
for (let i in e) e.hasOwnProperty(i) && r.push(`${i}: ${t(e[i], n + 1)}`);
i += r.join(", ");
}
return i += "}", i;
}(e, n) : "string" == typeof e ? function(e, t = 0) {
let n = 1 == t ? 20 : 60;
e.length > n && (e = e.slice(0, e.limit - 1) + "…");
return JSON.stringify(e);
}(e, n) : JSON.stringify(e);
}
e.exports = function(e) {
return Array.from(e).map(t).join(", ");
};
},
4604: function(e, t) {
Prism.languages.scss = Prism.languages.extend("css", {
comment: {
pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
lookbehind: !0
},
atrule: {
pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
inside: {
rule: /@[\w-]+/
}
},
url: /(?:[-a-z]+-)?url(?=\()/i,
selector: {
pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
inside: {
parent: {
pattern: /&/,
alias: "important"
},
placeholder: /%[-\w]+/,
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}
},
property: {
pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
inside: {
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}
}
}), Prism.languages.insertBefore("scss", "atrule", {
keyword: [ /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
pattern: /( )(?:from|through)(?= )/,
lookbehind: !0
} ]
}), Prism.languages.insertBefore("scss", "important", {
variable: /\$[-\w]+|#\{\$[-\w]+\}/
}), Prism.languages.insertBefore("scss", "function", {
"module-modifier": {
pattern: /\b(?:as|hide|show|with)\b/i,
alias: "keyword"
},
placeholder: {
pattern: /%[-\w]+/,
alias: "selector"
},
statement: {
pattern: /\B!(?:default|optional)\b/i,
alias: "keyword"
},
boolean: /\b(?:false|true)\b/,
null: {
pattern: /\bnull\b/,
alias: "keyword"
},
operator: {
pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
lookbehind: !0
}
}), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
},
4629: function(e) {
e.exports = function() {
let e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
},
4784: function(e, t) {
!function(e) {
function t(e) {
return RegExp("(^(?:" + e + "):[ \t]*(?![ \t]))[^]+", "i");
}
e.languages.http = {
"request-line": {
pattern: /^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,
inside: {
method: {
pattern: /^[A-Z]+\b/,
alias: "property"
},
"request-target": {
pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
lookbehind: !0,
alias: "url",
inside: e.languages.uri
},
"http-version": {
pattern: /^(\s)HTTP\/[\d.]+/,
lookbehind: !0,
alias: "property"
}
}
},
"response-status": {
pattern: /^HTTP\/[\d.]+ \d+ .+/m,
inside: {
"http-version": {
pattern: /^HTTP\/[\d.]+/,
alias: "property"
},
"status-code": {
pattern: /^(\s)\d+(?=\s)/,
lookbehind: !0,
alias: "number"
},
"reason-phrase": {
pattern: /^(\s).+/,
lookbehind: !0,
alias: "string"
}
}
},
header: {
pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,
inside: {
"header-value": [ {
pattern: t(/Content-Security-Policy/.source),
lookbehind: !0,
alias: [ "csp", "languages-csp" ],
inside: e.languages.csp
}, {
pattern: t(/Public-Key-Pins(?:-Report-Only)?/.source),
lookbehind: !0,
alias: [ "hpkp", "languages-hpkp" ],
inside: e.languages.hpkp
}, {
pattern: t(/Strict-Transport-Security/.source),
lookbehind: !0,
alias: [ "hsts", "languages-hsts" ],
inside: e.languages.hsts
}, {
pattern: t(/[^:]+/.source),
lookbehind: !0
} ],
"header-name": {
pattern: /^[^:]+/,
alias: "keyword"
},
punctuation: /^:/
}
}
};
var n, r = e.languages, i = {
"application/javascript": r.javascript,
"application/json": r.json || r.javascript,
"application/xml": r.xml,
"text/xml": r.xml,
"text/html": r.html,
"text/css": r.css,
"text/plain": r.plain
}, o = {
"application/json": !0,
"application/xml": !0
};
function a(e) {
var t = e.replace(/^[a-z]+\//, "");
return "(?:" + e + "|" + ("\\w+/(?:[\\w.-]+\\+)+" + t + "(?![+\\w.-])") + ")";
}
for (var s in i) if (i[s]) {
n = n || {};
var l = o[s] ? a(s) : s;
n[s.replace(/\//g, "-")] = {
pattern: RegExp("(" + /content-type:\s*/.source + l + /(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source + ")" + /[^ \t\w-][\s\S]*/.source, "i"),
lookbehind: !0,
inside: i[s]
};
}
n && e.languages.insertBefore("http", "header", n);
}(Prism);
},
4890: function(e, t, n) {
var r = n(2983), i = n(937), o = n(3388), a = r ? r.toStringTag : void 0;
e.exports = function(e) {
return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? i(e) : o(e);
};
},
5116: function(e) {
e.exports = function(e) {
return null != e && "object" == typeof e;
};
},
5304: function(e) {
e.exports = function() {
function e(e, t, n, r, i, o) {
this.message = e, this.expected = t, this.found = n, this.offset = r, this.line = i, 
this.column = o, this.name = "SyntaxError";
}
return function(e, t) {
function n() {
this.constructor = e;
}
n.prototype = t.prototype, e.prototype = new n;
}(e, Error), {
SyntaxError: e,
parse: function(t) {
var n, r = arguments.length > 1 ? arguments[1] : {}, i = {}, o = {
start: ue
}, a = ue, s = i, l = "((", c = {
type: "literal",
value: "((",
description: '"(("'
}, u = "))", d = {
type: "literal",
value: "))",
description: '"))"'
}, p = null, h = function(e, t) {
return {
type: "plural",
forms: Te(e),
strict: Se(e),
anchor: t || "count"
};
}, f = "|", m = {
type: "literal",
value: "|",
description: '"|"'
}, g = function(e, t) {
return [ e ].concat(t);
}, E = function(e) {
return [ e ];
}, b = "=", v = {
type: "literal",
value: "=",
description: '"="'
}, T = /^[0-9]/, S = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, _ = " ", y = {
type: "literal",
value: " ",
description: '" "'
}, A = function(e, t) {
return {
strict: e.join(""),
text: t.join("")
};
}, w = function() {
return {
text: ae()
};
}, L = "\\", I = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, O = /^[\\|)(]/, R = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, N = function(e) {
return e;
}, k = void 0, C = {
type: "any",
description: "any character"
}, F = function() {
return ae();
}, x = ":", D = {
type: "literal",
value: ":",
description: '":"'
}, P = function(e) {
return e;
}, M = "#{", U = {
type: "literal",
value: "#{",
description: '"#{"'
}, B = "}", G = {
type: "literal",
value: "}",
description: '"}"'
}, j = function(e) {
return {
type: "variable",
anchor: e
};
}, H = ".", $ = {
type: "literal",
value: ".",
description: '"."'
}, q = function() {
return ae();
}, W = /^[a-zA-Z_$]/, X = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, Y = /^[a-zA-Z0-9_$]/, z = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, K = function(e) {
return e;
}, V = function(e) {
return {
type: "literal",
text: e.join("")
};
}, Z = /^[\\#()|]/, J = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, ee = 0, te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}, re = 0, ie = [], oe = 0;
if ("startRule" in r) {
if (!(r.startRule in o)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
a = o[r.startRule];
}
function ae() {
return t.substring(ee, Q);
}
function se(e) {
return te !== e && (te > e && (te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}), function(e, n, r) {
var i, o;
for (i = n; i < r; i++) "\n" === (o = t.charAt(i)) ? (e.seenCR || e.line++, e.column = 1, 
e.seenCR = !1) : "\r" === o || "\u2028" === o || "\u2029" === o ? (e.line++, e.column = 1, 
e.seenCR = !0) : (e.column++, e.seenCR = !1);
}(ne, te, e), te = e), ne;
}
function le(e) {
Q < re || (Q > re && (re = Q, ie = []), ie.push(e));
}
function ce(n, r, i) {
var o = se(i), a = i < t.length ? t.charAt(i) : null;
return null !== r && function(e) {
var t = 1;
for (e.sort(function(e, t) {
return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
}); t < e.length; ) e[t - 1] === e[t] ? e.splice(t, 1) : t++;
}(r), new e(null !== n ? n : function(e, t) {
var n, r = new Array(e.length);
for (n = 0; n < e.length; n++) r[n] = e[n].description;
return "Expected " + (e.length > 1 ? r.slice(0, -1).join(", ") + " or " + r[e.length - 1] : r[0]) + " but " + (t ? '"' + function(e) {
function t(e) {
return e.charCodeAt(0).toString(16).toUpperCase();
}
return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(e) {
return "\\x0" + t(e);
}).replace(/[\x10-\x1F\x80-\xFF]/g, function(e) {
return "\\x" + t(e);
}).replace(/[\u0180-\u0FFF]/g, function(e) {
return "\\u0" + t(e);
}).replace(/[\u1080-\uFFFF]/g, function(e) {
return "\\u" + t(e);
});
}(t) + '"' : "end of input") + " found.";
}(r, a), r, a, i, o.line, o.column);
}
function ue() {
var e, t;
for (e = [], (t = be()) === i && (t = de()) === i && (t = me()); t !== i; ) e.push(t), 
(t = be()) === i && (t = de()) === i && (t = me());
return e;
}
function de() {
var e, n, r, o, a;
return e = Q, t.substr(Q, 2) === l ? (n = l, Q += 2) : (n = i, 0 === oe && le(c)), 
n !== i && (r = pe()) !== i ? (t.substr(Q, 2) === u ? (o = u, Q += 2) : (o = i, 
0 === oe && le(d)), o !== i ? (a = function() {
var e, n, r;
e = Q, 58 === t.charCodeAt(Q) ? (n = x, Q++) : (n = i, 0 === oe && le(D));
n !== i && (r = ge()) !== i ? (ee = e, e = n = P(r)) : (Q = e, e = s);
return e;
}(), a === i && (a = p), a !== i ? (ee = e, e = n = h(r, a)) : (Q = e, e = s)) : (Q = e, 
e = s)) : (Q = e, e = s), e;
}
function pe() {
var e, n, r, o;
return e = Q, (n = he()) !== i ? (124 === t.charCodeAt(Q) ? (r = f, Q++) : (r = i, 
0 === oe && le(m)), r !== i && (o = pe()) !== i ? (ee = e, e = n = g(n, o)) : (Q = e, 
e = s)) : (Q = e, e = s), e === i && (e = Q, (n = he()) !== i && (ee = e, n = E(n)), 
e = n), e;
}
function he() {
var e, n, r, o, a, l;
if (e = Q, 61 === t.charCodeAt(Q) ? (n = b, Q++) : (n = i, 0 === oe && le(v)), n !== i) {
if (r = [], T.test(t.charAt(Q)) ? (o = t.charAt(Q), Q++) : (o = i, 0 === oe && le(S)), 
o !== i) for (;o !== i; ) r.push(o), T.test(t.charAt(Q)) ? (o = t.charAt(Q), Q++) : (o = i, 
0 === oe && le(S)); else r = s;
if (r !== i) if (32 === t.charCodeAt(Q) ? (o = _, Q++) : (o = i, 0 === oe && le(y)), 
o === i && (o = p), o !== i) {
if (a = [], (l = fe()) !== i) for (;l !== i; ) a.push(l), l = fe(); else a = s;
a !== i ? (ee = e, e = n = A(r, a)) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
} else Q = e, e = s;
if (e === i) {
if (e = Q, n = [], (r = fe()) !== i) for (;r !== i; ) n.push(r), r = fe(); else n = s;
n !== i && (ee = e, n = w()), e = n;
}
return e;
}
function fe() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = L, Q++) : (n = i, 0 === oe && le(I)), 
n !== i ? (O.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = i, 0 === oe && le(R)), 
r !== i ? (ee = e, e = n = N(r)) : (Q = e, e = s)) : (Q = e, e = s), e === i && (e = Q, 
n = Q, oe++, 124 === t.charCodeAt(Q) ? (r = f, Q++) : (r = i, 0 === oe && le(m)), 
r === i && (t.substr(Q, 2) === u ? (r = u, Q += 2) : (r = i, 0 === oe && le(d))), 
oe--, r === i ? n = k : (Q = n, n = s), n !== i ? (t.length > Q ? (r = t.charAt(Q), 
Q++) : (r = i, 0 === oe && le(C)), r !== i ? (ee = e, e = n = F()) : (Q = e, e = s)) : (Q = e, 
e = s)), e;
}
function me() {
var e, n, r, o;
return e = Q, t.substr(Q, 2) === M ? (n = M, Q += 2) : (n = i, 0 === oe && le(U)), 
n !== i && (r = ge()) !== i ? (125 === t.charCodeAt(Q) ? (o = B, Q++) : (o = i, 
0 === oe && le(G)), o !== i ? (ee = e, e = n = j(r)) : (Q = e, e = s)) : (Q = e, 
e = s), e;
}
function ge() {
var e, n, r, o;
if (e = Q, Ee() !== i) if (46 === t.charCodeAt(Q) ? (n = H, Q++) : (n = i, 0 === oe && le($)), 
n !== i) {
if (r = [], (o = ge()) !== i) for (;o !== i; ) r.push(o), o = ge(); else r = s;
r !== i ? (ee = e, e = q()) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
return e === i && (e = Ee()), e;
}
function Ee() {
var e, n, r, o;
if (e = Q, W.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = i, 0 === oe && le(X)), 
n !== i) {
for (r = [], Y.test(t.charAt(Q)) ? (o = t.charAt(Q), Q++) : (o = i, 0 === oe && le(z)); o !== i; ) r.push(o), 
Y.test(t.charAt(Q)) ? (o = t.charAt(Q), Q++) : (o = i, 0 === oe && le(z));
r !== i ? (ee = e, e = n = F()) : (Q = e, e = s);
} else Q = e, e = s;
return e;
}
function be() {
var e, t, n, r, o;
if (e = Q, t = [], n = Q, r = Q, oe++, (o = de()) === i && (o = me()), oe--, o === i ? r = k : (Q = r, 
r = s), r !== i && (o = ve()) !== i ? (ee = n, n = r = K(o)) : (Q = n, n = s), n !== i) for (;n !== i; ) t.push(n), 
n = Q, r = Q, oe++, (o = de()) === i && (o = me()), oe--, o === i ? r = k : (Q = r, 
r = s), r !== i && (o = ve()) !== i ? (ee = n, n = r = K(o)) : (Q = n, n = s); else t = s;
return t !== i && (ee = e, t = V(t)), e = t;
}
function ve() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = L, Q++) : (n = i, 0 === oe && le(I)), 
n !== i ? (Z.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = i, 0 === oe && le(J)), 
r !== i ? (ee = e, e = n = N(r)) : (Q = e, e = s)) : (Q = e, e = s), e === i && (t.length > Q ? (e = t.charAt(Q), 
Q++) : (e = i, 0 === oe && le(C))), e;
}
function Te(e) {
for (var t = [], n = 0; n < e.length; n++) void 0 === e[n].strict && t.push(e[n].text);
return t;
}
function Se(e) {
for (var t = {}, n = 0; n < e.length; n++) void 0 !== e[n].strict && (t[e[n].strict] = e[n].text);
return t;
}
if ((n = a()) !== i && Q === t.length) return n;
throw n !== i && Q < t.length && le({
type: "end",
description: "end of input"
}), ce(null, ie, re);
}
};
}();
},
5345: function(e, t, n) {
"use strict";
n.r(t), n.d(t, {
Error: function() {
return u;
},
Info: function() {
return s;
},
Success: function() {
return c;
},
Warning: function() {
return l;
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
class a {
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
r.delegateMixin(a.prototype);
class s extends a {
constructor(e, t) {
super(e, "info", t);
}
}
class l extends a {
constructor(e, t) {
super(e, "warning", t);
}
}
class c extends a {
constructor(e, t) {
super(e, "success", t);
}
}
class u extends a {
constructor(e, t) {
super(e, "error", t);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
},
5365: function(e, t) {
!function(e) {
var t, n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
e.languages.css.selector = {
pattern: e.languages.css.selector.pattern,
lookbehind: !0,
inside: t = {
"pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
"pseudo-class": /:[-\w]+/,
class: /\.[-\w]+/,
id: /#[-\w]+/,
attribute: {
pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
greedy: !0,
inside: {
punctuation: /^\[|\]$/,
"case-sensitivity": {
pattern: /(\s)[si]$/i,
lookbehind: !0,
alias: "keyword"
},
namespace: {
pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
lookbehind: !0,
inside: {
punctuation: /\|$/
}
},
"attr-name": {
pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
lookbehind: !0
},
"attr-value": [ n, {
pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
lookbehind: !0
} ],
operator: /[|~*^$]?=/
}
},
"n-th": [ {
pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
lookbehind: !0,
inside: {
number: /[\dn]+/,
operator: /[+-]/
}
}, {
pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
lookbehind: !0
} ],
combinator: />|\+|~|\|\|/,
punctuation: /[(),]/
}
}, e.languages.css.atrule.inside["selector-function-argument"].inside = t, e.languages.insertBefore("css", "property", {
variable: {
pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
lookbehind: !0
}
});
var r = {
pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
lookbehind: !0
}, i = {
pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
lookbehind: !0
};
e.languages.insertBefore("css", "function", {
operator: {
pattern: /(\s)[+\-*\/](?=\s)/,
lookbehind: !0
},
hexcode: {
pattern: /\B#[\da-f]{3,8}\b/i,
alias: "color"
},
color: [ {
pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
lookbehind: !0
}, {
pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
inside: {
unit: r,
number: i,
function: /[\w-]+(?=\()/,
punctuation: /[(),]/
}
} ],
entity: /\\[\da-f]{1,8}/i,
unit: r,
number: i
});
}(Prism);
},
5566: function(e, t, n) {
(document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop()).setAttribute("data-manual", 1), 
n(3123), n(2346)(Prism);
let r = n(1328), i = n(6700), o = n(467);
function a(e) {
if (function(e) {
let t = e.querySelectorAll(".code-example:not([data-prism-highlighted])");
for (let e of t) new r(e), e.setAttribute("data-prism-highlighted", "1");
}(e), function(e) {
let t = e.querySelectorAll("div.code-tabs:not([data-prism-highlighted])");
for (let e of t) new i(e), e.setAttribute("data-prism-highlighted", "1");
}(e), window.ebookType) for (let e of document.querySelectorAll(".line-numbers-rows")) e.remove();
}
t.init = function() {
document.removeEventListener("DOMContentLoaded", Prism.highlightAll), document.addEventListener("DOMContentLoaded", function() {
a(document);
}), o();
}, t.highlight = a;
},
5624: function(e, t) {
Prism.languages.clike = {
comment: [ {
pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
lookbehind: !0,
greedy: !0
}, {
pattern: /(^|[^\\:])\/\/.*/,
lookbehind: !0,
greedy: !0
} ],
string: {
pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
greedy: !0
},
"class-name": {
pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
lookbehind: !0,
inside: {
punctuation: /[.\\]/
}
},
keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
boolean: /\b(?:false|true)\b/,
function: /\b\w+(?=\()/,
number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
punctuation: /[{}[\];(),.:]/
};
},
5723: function(e, t) {
Prism.languages.javascript = Prism.languages.extend("clike", {
"class-name": [ Prism.languages.clike["class-name"], {
pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
lookbehind: !0
} ],
keyword: [ {
pattern: /((?:^|\})\s*)catch\b/,
lookbehind: !0
}, {
pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
lookbehind: !0
} ],
function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
number: {
pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
lookbehind: !0
},
operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, 
Prism.languages.insertBefore("javascript", "keyword", {
regex: {
pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
lookbehind: !0,
greedy: !0,
inside: {
"regex-source": {
pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
lookbehind: !0,
alias: "language-regex",
inside: Prism.languages.regex
},
"regex-delimiter": /^\/|\/$/,
"regex-flags": /^[a-z]+$/
}
},
"function-variable": {
pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
alias: "function"
},
parameter: [ {
pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
lookbehind: !0,
inside: Prism.languages.javascript
}, {
pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
lookbehind: !0,
inside: Prism.languages.javascript
}, {
pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
lookbehind: !0,
inside: Prism.languages.javascript
}, {
pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
lookbehind: !0,
inside: Prism.languages.javascript
} ],
constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
hashbang: {
pattern: /^#!.*/,
greedy: !0,
alias: "comment"
},
"template-string": {
pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
greedy: !0,
inside: {
"template-punctuation": {
pattern: /^`|`$/,
alias: "string"
},
interpolation: {
pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
lookbehind: !0,
inside: {
"interpolation-punctuation": {
pattern: /^\$\{|\}$/,
alias: "punctuation"
},
rest: Prism.languages.javascript
}
},
string: /[\s\S]+/
}
},
"string-property": {
pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
lookbehind: !0,
greedy: !0,
alias: "property"
}
}), Prism.languages.insertBefore("javascript", "operator", {
"literal-property": {
pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
lookbehind: !0,
alias: "property"
}
}), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), 
Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), 
Prism.languages.js = Prism.languages.javascript;
},
6127: function(e, t, n) {
let r = n(1495), i = n(3102), o = n(8944), a = n(2924), s = n(225);
class l {
constructor() {
this.elem = document.createElement("div"), document.body.appendChild(this.elem);
let e = new Modal({
hasClose: !1
}), t = new o;
e.setContent(t.elem), t.start(), this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);
let n = r({
url: "/tutorial/map/part"
});
n.addEventListener("success", t => {
e.remove(), this.elem.innerHTML = '<div class="tutorial-map-overlay"></div>', this.mapElem = this.elem.firstChild, 
this.mapElem.innerHTML = t.result + '<button class="close-button tutorial-map-overlay__close"></button>', 
this.mapElem.addEventListener("click", e => {
e.target.classList.contains("tutorial-map-overlay__close") && this.remove();
}), document.addEventListener("keydown", this.onDocumentKeyDown), document.body.classList.add("tutorial-map_on"), 
this.mapElem.addEventListener("scroll", s, {
passive: !0
}), new a(this.mapElem.firstElementChild);
}), n.addEventListener("fail", () => e.remove());
}
remove() {
this.elem.dispatchEvent(new CustomEvent("tutorial-map-remove")), this.elem.remove(), 
document.body.classList.remove("tutorial-map_on"), document.removeEventListener("keydown", this.onDocumentKeyDown);
}
onDocumentKeyDown(e) {
27 == e.keyCode && (e.preventDefault(), this.remove());
}
}
i.delegateMixin(l.prototype), e.exports = l;
},
6188: function(e, t, n) {
var r = {
"./es.yml": 7115
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
}, i.resolve = o, e.exports = i, i.id = 6188;
},
6339: function(e, t, n) {
var r = n(7726), i = "object" == typeof self && self && self.Object === Object && self, o = r || i || Function("return this")();
e.exports = o;
},
6516: function(e, t, n) {
var r = n(4890), i = n(5116);
e.exports = function(e) {
return "symbol" == typeof e || i(e) && "[object Symbol]" == r(e);
};
},
6532: function(e) {
"use strict";
var t = {};
function n(e) {
var n;
return t[e] ? e : (n = e.toLowerCase().replace("_", "-"), t[n] ? n : (n = n.split("-")[0], 
t[n] ? n : null));
}
var r = /c\d+$/;
function i(e, i) {
var o = n(e);
if (!o) return -1;
if (!t[o].cFn) return 0;
var a = String(i), s = 0;
if (r.test(a)) {
var l = a.split("c");
s = +l[1], i = Math.pow(10, s) * l[0], a = String(i);
}
var c = a.indexOf(".") < 0 ? "" : a.split(".")[1], u = c.length, d = c.replace(/0+$/, "").length, p = +i, h = +a.split(".")[0], f = 0 === c.length ? 0 : +c.replace(/0+$/, "");
return t[o].cFn(p, h, u, +c, f, d, s);
}
function o(e, r) {
var i = n(e);
if (!i) return -1;
if (!t[i].oFn) return 0;
var o = String(r), a = o.indexOf(".") < 0 ? "" : o.split(".")[1], s = a.length, l = a.replace(/0+$/, "").length, c = +r, u = +o.split(".")[0], d = 0 === a.length ? 0 : +a.replace(/0+$/, "");
return t[i].oFn(c, u, s, +a, d, l, 0);
}
e.exports = function(e, r) {
var o = n(e);
return o ? t[o].c[i(o, r)] : null;
}, e.exports.indexOf = i, e.exports.forms = function(e) {
var r = n(e);
return t[r] ? t[r].c : null;
}, e.exports.ordinal = function(e, r) {
var i = n(e);
return t[i] ? t[i].o[o(i, r)] : null;
}, e.exports.ordinal.indexOf = o, e.exports.ordinal.forms = function(e) {
var r = n(e);
return t[r] ? t[r].o : null;
};
var a = [ "zero", "one", "two", "few", "many", "other" ];
function s(e) {
return a[e];
}
function l(e, n) {
var r;
for (n.c = n.c ? n.c.map(s) : [ "other" ], n.o = n.o ? n.o.map(s) : [ "other" ], 
r = 0; r < e.length; r++) t[e[r]] = n;
}
function c(e, t, n) {
return e <= n && n <= t && n % 1 == 0;
}
function u(e, t) {
return e.indexOf(t) >= 0;
}
l([ "af", "an", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sd", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
}
}), l([ "ak", "bho", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(e) {
return c(0, 1, e) ? 0 : 1;
}
}), l([ "am", "doi", "fa", "kn", "pcm", "zu" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
}
}), l([ "ar", "ars" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : c(3, 10, t) ? 3 : c(11, 99, t) ? 4 : 5;
}
}), l([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return u([ 1, 5, 7, 8, 9, 10 ], e) ? 0 : u([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), l([ "ast", "de", "et", "fi", "fy", "gl", "ia", "io", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), l([ "az" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100, i = t % 1e3;
return u([ 1, 2, 5, 7, 8 ], n) || u([ 20, 50, 70, 80 ], r) ? 0 : u([ 3, 4 ], n) || u([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], i) ? 1 : 0 === t || 6 === n || u([ 40, 60, 90 ], r) ? 2 : 3;
}
}), l([ "bal" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), l([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : c(2, 4, t) && !c(12, 14, n) ? 1 : 0 === t || c(5, 9, t) || c(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
var t = e % 100;
return u([ 2, 3 ], e % 10) && !u([ 12, 13 ], t) ? 0 : 1;
}
}), l([ "bm", "bo", "dz", "hnj", "id", "ig", "ii", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "osa", "sah", "ses", "sg", "su", "th", "to", "tpi", "und", "wo", "yo", "yue", "zh" ], {}), 
l([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100, r = e % 1e6;
return 1 !== t || u([ 11, 71, 91 ], n) ? 2 !== t || u([ 12, 72, 92 ], n) ? !c(3, 4, t) && 9 !== t || c(10, 19, n) || c(70, 79, n) || c(90, 99, n) ? 0 !== e && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), l([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n, r) {
var i = t % 10, o = t % 100, a = r % 10, s = r % 100;
return 0 === n && 1 === i && 11 !== o || 1 === a && 11 !== s ? 0 : 0 === n && c(2, 4, i) && !c(12, 14, o) || c(2, 4, a) && !c(12, 14, s) ? 1 : 2;
}
}), l([ "ca" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return u([ 1, 3 ], e) ? 0 : 2 === e ? 1 : 4 === e ? 2 : 3;
}
}), l([ "ceb" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var i = t % 10, o = r % 10;
return 0 === n && u([ 1, 2, 3 ], t) || 0 === n && !u([ 4, 6, 9 ], i) || 0 !== n && !u([ 4, 6, 9 ], o) ? 0 : 1;
}
}), l([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : c(2, 4, t) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), l([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 === e ? 3 : 6 === e ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(e) {
return u([ 0, 7, 8, 9 ], e) ? 0 : 1 === e ? 1 : 2 === e ? 2 : u([ 3, 4 ], e) ? 3 : u([ 5, 6 ], e) ? 4 : 5;
}
}), l([ "da" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, i) {
return 1 === e || 0 !== i && u([ 0, 1 ], t) ? 0 : 1;
}
}), l([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n, r) {
var i = t % 100, o = r % 100;
return 0 === n && 1 === i || 1 === o ? 0 : 0 === n && 2 === i || 2 === o ? 1 : 0 === n && c(3, 4, i) || c(3, 4, o) ? 2 : 3;
}
}), l([ "en" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : 2 === t && 12 !== n ? 1 : 3 === t && 13 !== n ? 2 : 3;
}
}), l([ "es" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, i, o, a) {
return 1 === e ? 0 : 0 === a && 0 !== t && 0 === t % 1e6 && 0 === n || !c(0, 5, a) ? 1 : 2;
}
}), l([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return u([ 0, 1 ], t) ? 0 : 1;
}
}), l([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var i = t % 10, o = r % 10;
return 0 === n && u([ 1, 2, 3 ], t) || 0 === n && !u([ 4, 6, 9 ], i) || 0 !== n && !u([ 4, 6, 9 ], o) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), l([ "fr" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, i, o, a) {
var s = t % 1e6;
return u([ 0, 1 ], t) ? 0 : 0 === a && 0 !== t && 0 === s && 0 === n || !c(0, 5, a) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), l([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : c(3, 6, e) ? 2 : c(7, 10, e) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), l([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e) {
return u([ 1, 11 ], e) ? 0 : u([ 2, 12 ], e) ? 1 : c(3, 10, e) || c(13, 19, e) ? 2 : 3;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return u([ 1, 11 ], e) ? 0 : u([ 2, 12 ], e) ? 1 : u([ 3, 13 ], e) ? 2 : 3;
}
}), l([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : u([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), l([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && u([ 0, 20, 40, 60, 80 ], t % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), l([ "he" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(e, t, n) {
var r = e % 10;
return 1 === t && 0 === n ? 0 : 2 === t && 0 === n ? 1 : 0 !== n || c(0, 10, e) || 0 !== r ? 3 : 2;
}
}), l([ "hu" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return u([ 1, 5 ], e) ? 0 : 1;
}
}), l([ "hy" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return u([ 0, 1 ], t) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), l([ "is" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, i) {
return 0 === i && 1 === t % 10 && 11 !== t % 100 || 0 !== i ? 0 : 1;
}
}), l([ "it" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, i, o, a) {
return 1 === t && 0 === n ? 0 : 0 === a && 0 !== t && 0 === t % 1e6 && 0 === n || !c(0, 5, a) ? 1 : 2;
},
o: [ 4, 5 ],
oFn: function(e) {
return u([ 11, 8, 80, 800 ], e) ? 0 : 1;
}
}), l([ "iu", "naq", "sat", "se", "sma", "smi", "smj", "smn", "sms" ], {
c: [ 1, 2, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : 2;
}
}), l([ "ka" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e, t) {
var n = t % 100;
return 1 === t ? 0 : 0 === t || c(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
}
}), l([ "kk" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
var t = e % 10;
return 6 === t || 9 === t || 0 === t && 0 !== e ? 0 : 1;
}
}), l([ "ksh" ], {
c: [ 0, 1, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2;
}
}), l([ "kw" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100, n = e % 1e3, r = e % 1e5, i = e % 1e6;
return 0 === e ? 0 : 1 === e ? 1 : u([ 2, 22, 42, 62, 82 ], t) || 0 === n && (c(1e3, 2e4, r) || 4e4 === r || 6e4 === r || 8e4 === r) || 0 !== e && 1e5 === i ? 2 : u([ 3, 23, 43, 63, 83 ], t) ? 3 : 1 !== e && u([ 1, 21, 41, 61, 81 ], t) ? 4 : 5;
},
o: [ 1, 4, 5 ],
oFn: function(e) {
var t = e % 100;
return c(1, 4, e) || c(1, 4, t) || c(21, 24, t) || c(41, 44, t) || c(61, 64, t) || c(81, 84, t) ? 0 : 5 === e || 5 === t ? 1 : 2;
}
}), l([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t) {
return 0 === e ? 0 : u([ 0, 1 ], t) && 0 !== e ? 1 : 2;
}
}), l([ "lij" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
return 11 === e || 8 === e || c(80, 89, e) || c(800, 899, e) ? 0 : 1;
}
}), l([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), l([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n, r) {
var i = e % 10, o = e % 100;
return 1 !== i || c(11, 19, o) ? c(2, 9, i) && !c(11, 19, o) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), l([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t, n, r) {
var i = e % 10, o = e % 100, a = r % 100, s = r % 10;
return 0 === i || c(11, 19, o) || 2 === n && c(11, 19, a) ? 0 : 1 === i && 11 !== o || 2 === n && 1 === s && 11 !== a || 2 !== n && 1 === s ? 1 : 2;
}
}), l([ "mk" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return 0 === n && 1 === t % 10 && 11 !== t % 100 || 1 === r % 10 && 11 !== r % 100 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : u([ 7, 8 ], n) && !u([ 17, 18 ], r) ? 2 : 3;
}
}), l([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 0 !== n || 0 === e || c(2, 19, e % 100) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), l([ "mr" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return 1 === e ? 0 : u([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 3;
}
}), l([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 1 === e ? 0 : 0 === e || c(2, 10, t) ? 1 : c(11, 19, t) ? 2 : 3;
}
}), l([ "ne" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return c(1, 4, e) ? 0 : 1;
}
}), l([ "or" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e || 5 === e || c(7, 9, e) ? 0 : u([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), l([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 1 === t && 0 === n ? 0 : 0 === n && c(2, 4, r) && !c(12, 14, i) ? 1 : 0 === n && 1 !== t && c(0, 1, r) || 0 === n && c(5, 9, r) || 0 === n && c(12, 14, i) ? 2 : 3;
}
}), l([ "pt" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, i, o, a) {
var s = t % 1e6;
return c(0, 1, t) ? 0 : 0 === a && 0 !== t && 0 === s && 0 === n || !c(0, 5, a) ? 1 : 2;
}
}), l([ "pt-pt" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, i, o, a) {
return 1 === t && 0 === n ? 0 : 0 === a && 0 !== t && 0 === t % 1e6 && 0 === n || !c(0, 5, a) ? 1 : 2;
}
}), l([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && c(2, 4, r) && !c(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && c(5, 9, r) || 0 === n && c(11, 14, i) ? 2 : 3;
}
}), l([ "sc", "scn" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
return u([ 11, 8, 80, 800 ], e) ? 0 : 1;
}
}), l([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : c(2, 10, e) ? 1 : 2;
}
}), l([ "si" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return u([ 0, 1 ], e) || 0 === t && 1 === r ? 0 : 1;
}
}), l([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n) {
var r = t % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && c(3, 4, r) || 0 !== n ? 2 : 3;
}
}), l([ "sq" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 4 === e % 10 && 14 !== e % 100 ? 1 : 2;
}
}), l([ "sv" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
var t = e % 100;
return u([ 1, 2 ], e % 10) && !u([ 11, 12 ], t) ? 0 : 1;
}
}), l([ "tk" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 3, 5 ],
oFn: function(e) {
return u([ 6, 9 ], e % 10) || 10 === e ? 0 : 1;
}
}), l([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(e) {
return c(0, 1, e) || c(11, 99, e) ? 0 : 1;
}
}), l([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, i = t % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && c(2, 4, r) && !c(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && c(5, 9, r) || 0 === n && c(11, 14, i) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
return 3 === e % 10 && 13 !== e % 100 ? 0 : 1;
}
});
},
6700: function(e, t, n) {
let r = n(3102), i = n(8060);
class o {
constructor(e) {
if (window.ebookType) return;
this.elem = e, this.translateX = 0, this.switchesElem = e.querySelector("[data-code-tabs-switches]"), 
this.switchesElemItems = this.switchesElem.firstElementChild, this.arrowLeft = e.querySelector("[data-code-tabs-left]"), 
this.arrowRight = e.querySelector("[data-code-tabs-right]"), this.arrowLeft.onclick = e => {
e.preventDefault(), this.translateX = Math.max(0, this.translateX - this.switchesElem.offsetWidth), 
this.renderTranslate();
}, this.arrowRight.onclick = e => {
e.preventDefault(), this.translateX = Math.min(this.translateX + this.switchesElem.offsetWidth, this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth), 
this.renderTranslate();
};
let t = this.elem.querySelector(".code-tabs__section_current");
t !== t.parentElement.firstElementChild && this.highlightTab(t), this.delegate(".code-tabs__switch", "click", this.onSwitchClick);
}
onSwitchClick(e) {
e.preventDefault();
let t, n = e.delegateTarget.parentNode.children, r = this.elem.querySelector("[data-code-tabs-content]").children;
for (let i = 0; i < n.length; i++) {
let o = n[i], a = r[i];
o === e.delegateTarget ? (t = i, a.classList.add("code-tabs__section_current"), 
o.classList.add("code-tabs__switch_current")) : (a.classList.remove("code-tabs__section_current"), 
o.classList.remove("code-tabs__switch_current"));
}
0 === t ? this.elem.classList.add("code-tabs_result_on") : (this.elem.classList.remove("code-tabs_result_on"), 
this.highlightTab(r[t]));
}
highlightTab(e) {
if (e.highlighted) return;
let t = e.querySelector("pre"), n = t.querySelector("code");
Prism.highlightElement(n), t.insertAdjacentHTML("afterBegin", i(t.innerHTML)), e.highlighted = !0;
}
renderTranslate() {
this.switchesElemItems.style.transform = "translateX(-" + this.translateX + "px)", 
0 === this.translateX ? this.arrowLeft.setAttribute("disabled", "") : this.arrowLeft.removeAttribute("disabled"), 
this.translateX === this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth ? this.arrowRight.setAttribute("disabled", "") : this.arrowRight.removeAttribute("disabled");
}
}
r.delegateMixin(o.prototype), e.exports = o;
},
6966: function(e, t) {
Prism.languages.sql = {
comment: {
pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
lookbehind: !0
},
variable: [ {
pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
greedy: !0
}, /@[\w.$]+/ ],
string: {
pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
greedy: !0,
lookbehind: !0
},
identifier: {
pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
greedy: !0,
lookbehind: !0,
inside: {
punctuation: /^`|`$/
}
},
function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
punctuation: /[;[\]()`,.]/
};
},
6970: function(e) {
e.exports = function(e) {
let t = e.getBoundingClientRect(), n = 0;
if (t.top < 0) n = t.bottom; else {
if (!(t.bottom > window.innerHeight)) return !0;
n = window.innerHeight - top;
}
return n > 10;
};
},
6976: function(e, t) {
!function(e) {
var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, n = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, r = {
pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
lookbehind: !0,
inside: {
namespace: {
pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
inside: {
punctuation: /\./
}
},
punctuation: /\./
}
};
e.languages.java = e.languages.extend("clike", {
string: {
pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
lookbehind: !0,
greedy: !0
},
"class-name": [ r, {
pattern: RegExp(/(^|[^\w.])/.source + n + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
lookbehind: !0,
inside: r.inside
}, {
pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + n + /[A-Z]\w*\b/.source),
lookbehind: !0,
inside: r.inside
} ],
keyword: t,
function: [ e.languages.clike.function, {
pattern: /(::\s*)[a-z_]\w*/,
lookbehind: !0
} ],
number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
operator: {
pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
lookbehind: !0
},
constant: /\b[A-Z][A-Z_\d]+\b/
}), e.languages.insertBefore("java", "string", {
"triple-quoted-string": {
pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
greedy: !0,
alias: "string"
},
char: {
pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
greedy: !0
}
}), e.languages.insertBefore("java", "class-name", {
annotation: {
pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
lookbehind: !0,
alias: "punctuation"
},
generics: {
pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
inside: {
"class-name": r,
keyword: t,
punctuation: /[<>(),.:]/,
operator: /[?&|]/
}
},
import: [ {
pattern: RegExp(/(\bimport\s+)/.source + n + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
lookbehind: !0,
inside: {
namespace: r.inside.namespace,
punctuation: /\./,
operator: /\*/,
"class-name": /\w+/
}
}, {
pattern: RegExp(/(\bimport\s+static\s+)/.source + n + /(?:\w+|\*)(?=\s*;)/.source),
lookbehind: !0,
alias: "static",
inside: {
namespace: r.inside.namespace,
static: /\b\w+$/,
punctuation: /\./,
operator: /\*/,
"class-name": /\w+/
}
} ],
namespace: {
pattern: RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
return t.source;
})),
lookbehind: !0,
inside: {
punctuation: /\./
}
}
});
}(Prism);
},
7022: function(e, t) {
!function(e) {
var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", n = {
pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
lookbehind: !0,
alias: "punctuation",
inside: null
}, r = {
bash: n,
environment: {
pattern: RegExp("\\$" + t),
alias: "constant"
},
variable: [ {
pattern: /\$?\(\([\s\S]+?\)\)/,
greedy: !0,
inside: {
variable: [ {
pattern: /(^\$\(\([\s\S]+)\)\)/,
lookbehind: !0
}, /^\$\(\(/ ],
number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
punctuation: /\(\(?|\)\)?|,|;/
}
}, {
pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
greedy: !0,
inside: {
variable: /^\$\(|^`|\)$|`$/
}
}, {
pattern: /\$\{[^}]+\}/,
greedy: !0,
inside: {
operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
punctuation: /[\[\]]/,
environment: {
pattern: RegExp("(\\{)" + t),
lookbehind: !0,
alias: "constant"
}
}
}, /\$(?:\w+|[#?*!@$])/ ],
entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
};
e.languages.bash = {
shebang: {
pattern: /^#!\s*\/.*/,
alias: "important"
},
comment: {
pattern: /(^|[^"{\\$])#.*/,
lookbehind: !0
},
"function-name": [ {
pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
lookbehind: !0,
alias: "function"
}, {
pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
alias: "function"
} ],
"for-or-select": {
pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
alias: "variable",
lookbehind: !0
},
"assign-left": {
pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
inside: {
environment: {
pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
lookbehind: !0,
alias: "constant"
}
},
alias: "variable",
lookbehind: !0
},
parameter: {
pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
alias: "variable",
lookbehind: !0
},
string: [ {
pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
lookbehind: !0,
greedy: !0,
inside: r
}, {
pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
lookbehind: !0,
greedy: !0,
inside: {
bash: n
}
}, {
pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
lookbehind: !0,
greedy: !0,
inside: r
}, {
pattern: /(^|[^$\\])'[^']*'/,
lookbehind: !0,
greedy: !0
}, {
pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
greedy: !0,
inside: {
entity: r.entity
}
} ],
environment: {
pattern: RegExp("\\$?" + t),
alias: "constant"
},
variable: r.variable,
function: {
pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
lookbehind: !0
},
keyword: {
pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
lookbehind: !0
},
builtin: {
pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
lookbehind: !0,
alias: "class-name"
},
boolean: {
pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
lookbehind: !0
},
"file-descriptor": {
pattern: /\B&\d\b/,
alias: "important"
},
operator: {
pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
inside: {
"file-descriptor": {
pattern: /^\d/,
alias: "important"
}
}
},
punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
number: {
pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
lookbehind: !0
}
}, n.inside = e.languages.bash;
for (var i = [ "comment", "function-name", "for-or-select", "assign-left", "parameter", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number" ], o = r.variable[1].inside, a = 0; a < i.length; a++) o[i[a]] = e.languages.bash[i[a]];
e.languages.sh = e.languages.bash, e.languages.shell = e.languages.bash;
}(Prism);
},
7115: function(e, t, n) {
"use strict";
n.r(t), t.default = {
server_connection_error: "Error de conexión al servidor.",
server_request_timeout: "Tiempo de espera de la solicitud del servidor.",
request_aborted: "La solicitud fue cancelada.",
no_response: "No hay respuesta del servidor.",
server_error: "Error de servidor (código #{status}), intente nuevamente más tarde.",
invalid_format: "Formato de respuesta no válido."
};
},
7200: function(e, t, n) {
var r = n(9591), i = n(3667);
e.exports = function(e, t, n) {
var o = !0, a = !0;
if ("function" != typeof e) throw new TypeError("Expected a function");
return i(n) && (o = "leading" in n ? !!n.leading : o, a = "trailing" in n ? !!n.trailing : a), 
r(e, t, {
leading: o,
maxWait: t,
trailing: a
});
};
},
7726: function(e, t, n) {
var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
e.exports = r;
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
8060: function(e) {
e.exports = function(e) {
let t, n = 1 + e.split("\n").length, r = new Array(n);
return r = r.join("<span></span>"), t = `<span class="line-numbers-rows">${r}</span>`, 
t;
};
},
8679: function(e, t, n) {
"use strict";
var r = n(5304), i = n(6532);
function o(e) {
return Object.prototype.toString.call(e);
}
function a(e) {
return "[object String]" === o(e);
}
function s(e) {
return !isNaN(e) && isFinite(e);
}
function l(e) {
return !0 === e || !1 === e;
}
function c(e) {
return "[object Object]" === o(e);
}
var u = Array.isArray || function(e) {
return "[object Array]" === o(e);
}, d = Array.prototype.forEach;
function p(e, t, n) {
if (null !== e) if (d && e.forEach === d) e.forEach(t, n); else if (e.length === +e.length) for (var r = 0, i = e.length; r < i; r += 1) t.call(n, e[r], r, e); else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(n, e[o], o, e);
}
var h = /%[sdj%]/g;
function f(e) {
var t = 1, n = arguments, r = n.length;
return String(e).replace(h, function(e) {
if ("%%" === e) return "%";
if (t >= r) return e;
switch (e) {
case "%s":
return String(n[t++]);

case "%d":
return Number(n[t++]);

case "%j":
return JSON.stringify(n[t++]);

default:
return e;
}
});
}
function m(e) {
var t = {};
return p(e || {}, function(e, n) {
e && "object" == typeof e ? p(m(e), function(e, r) {
t[n + "." + r] = e;
}) : t[n] = e;
}), t;
}
var g = "#@$";
function E(e, t) {
return e + g + t;
}
function b(e, t, n) {
var r = E(t, n), i = e._storage;
if (i.hasOwnProperty(r)) return r;
if (t === e._defaultLocale) return null;
var o = e._fallbacks_cache;
if (o.hasOwnProperty(r)) return o[r];
for (var a, s = e._fallbacks[t] || [ e._defaultLocale ], l = 0, c = s.length; l < c; l++) if (a = E(s[l], n), 
i.hasOwnProperty(a)) return o[r] = a, o[r];
return o[r] = null, null;
}
function v(e, t, n) {
var r = i.indexOf(e, t);
return -1 === r ? f('[pluralizer for "%s" locale not found]', e) : void 0 === n[r] ? f('[plural form %d ("%s") not found in translation]', r, i.forms(e)[r]) : n[r];
}
function T(e) {
if (!(this instanceof T)) return new T(e);
this._defaultLocale = e ? String(e) : "en", this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
T.prototype.addPhrase = function(e, t, n, r) {
var i, o = this;
if (l(r)) i = r ? 1 / 0 : 0; else if (s(r)) {
if ((i = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else i = 1 / 0;
if (c(n) && i > 0) return p(n, function(n, r) {
o.addPhrase(e, (t ? t + "." : "") + r, n, i - 1);
}), this;
if (a(n)) this._storage[E(e, t)] = {
translation: n,
locale: e,
raw: !1
}; else {
if (!(u(n) || s(n) || l(n) || 0 === i && c(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[E(e, t)] = {
translation: n,
locale: e,
raw: !0
};
}
return o._fallbacks_cache = {}, this;
}, T.prototype.setFallback = function(e, t) {
var n = this._defaultLocale;
if (n === e) throw new Error("Default locale can't have fallbacks");
var r = u(t) ? t.slice() : [ t ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[e] = r, this._fallbacks_cache = {}, 
this;
};
var S = /#\{|\(\(|\\\\/;
T.prototype.translate = function(e, t, n) {
var i, l = b(this, e, t);
return l ? (i = this._storage[l]).raw ? i.translation : (i.hasOwnProperty("compiled") || (i.compiled = function(e, t, n) {
var i, o, a, s, l, c;
return S.test(t) ? 1 === (i = r.parse(t)).length && "literal" === i[0].type ? i[0].text : (e._plurals_cache[n] || (e._plurals_cache[n] = new T(n)), 
c = e._plurals_cache[n], (o = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
o.push("params = flatten(params);"), p(i, function(e) {
if ("literal" !== e.type) {
if ("variable" === e.type) return a = e.anchor, void o.push(f('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', a, a, a));
if ("plural" !== e.type) throw new Error("Unknown node type");
a = e.anchor, s = {}, p(e.strict, function(t, i) {
var o = r.parse(t);
if (1 === o.length && "literal" === o[0].type) return s[i] = !1, void (e.strict[i] = o[0].text);
s[i] = !0, c.hasPhrase(n, t, !0) || c.addPhrase(n, t, t);
}), l = {}, p(e.forms, function(t, i) {
var o, a = r.parse(t);
if (1 === a.length && "literal" === a[0].type) return o = a[0].text, e.forms[i] = o, 
void (l[o] = !1);
l[t] = !0, c.hasPhrase(n, t, !0) || c.addPhrase(n, t, t);
}), o.push(f("loc = %j;", n)), o.push(f("loc_plzr = %j;", n.split(/[-_]/)[0])), 
o.push(f("anchor = params[%j];", a)), o.push(f("cache = this._plurals_cache[loc];")), 
o.push(f("strict = %j;", e.strict)), o.push(f("strict_exec = %j;", s)), o.push(f("forms = %j;", e.forms)), 
o.push(f("forms_exec = %j;", l)), o.push("if (+(anchor) != anchor) {"), o.push(f('  str += "[invalid plurals amount: %s(" + anchor + ")]";', a)), 
o.push("} else {"), o.push("  if (strict[anchor] !== undefined) {"), o.push("    plrl = strict[anchor];"), 
o.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), o.push("  } else {"), 
o.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), o.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
o.push("  }"), o.push("}");
} else o.push(f("str += %j;", e.text));
}), o.push("return str;"), new Function("params", "flatten", "pluralizer", o.join("\n"))) : t;
}(this, i.translation, i.locale)), "[object Function]" !== o(i.compiled) ? i.compiled : ((s(n) || a(n)) && (n = {
count: n,
value: n
}), i.compiled.call(this, n, m, v))) : e + ": No translation for [" + t + "]";
}, T.prototype.hasPhrase = function(e, t, n) {
return n ? this._storage.hasOwnProperty(E(e, t)) : !!b(this, e, t);
}, T.prototype.getLocale = function(e, t, n) {
if (n) return this._storage.hasOwnProperty(E(e, t)) ? e : null;
var r = b(this, e, t);
return r ? r.split(g, 2)[0] : null;
}, T.prototype.t = T.prototype.translate, T.prototype.stringify = function(e) {
var t = this, n = {};
p(this._storage, function(e, t) {
n[t.split(g)[1]] = !0;
});
var r = {};
p(n, function(n, i) {
var o = b(t, e, i);
if (o) {
var a = t._storage[o].locale;
r[a] || (r[a] = {}), r[a][i] = t._storage[o].translation;
}
});
var i = {
fallback: {},
locales: r
}, o = (t._fallbacks[e] || []).slice(0, -1);
return o.length && (i.fallback[e] = o), JSON.stringify(i);
}, T.prototype.load = function(e) {
var t = this;
return a(e) && (e = JSON.parse(e)), p(e.locales, function(e, n) {
p(e, function(e, r) {
t.addPhrase(n, r, e, 0);
});
}), p(e.fallback, function(e, n) {
t.setFallback(n, e);
}), this;
}, e.exports = T;
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
9006: function(e, t, n) {
var r = n(9474), i = /^\s+/;
e.exports = function(e) {
return e ? e.slice(0, r(e) + 1).replace(i, "") : e;
};
},
9474: function(e) {
var t = /\s/;
e.exports = function(e) {
for (var n = e.length; n-- && t.test(e.charAt(n)); ) ;
return n;
};
},
9516: function(e) {
e.exports = function(e) {
if (!e || !e.length) return "";
let t = [];
for (let n of e) {
let e = `<code class="block-highlight${n.cols ? " block-highlight_inline" : ""}" data-start="${n.start}">`;
if (e += "\n".repeat(n.start), n.end) e += `<code class="mask">${"\n".repeat(n.end - n.start + 1)}</code>`; else if (n.cols) for (let t = 0; t < n.cols.length; t++) {
let r = n.cols[t], i = 0 === t ? null : n.cols[t - 1];
e += " ".repeat(i ? r.start - i.end : r.start), e += `<code class="mask-inline">${" ".repeat(r.end - r.start)}</code>`;
}
e += "</code>", t.push(e);
}
return t.join("");
};
},
9591: function(e, t, n) {
var r = n(3667), i = n(1486), o = n(1552), a = Math.max, s = Math.min;
e.exports = function(e, t, n) {
var l, c, u, d, p, h, f = 0, m = !1, g = !1, E = !0;
if ("function" != typeof e) throw new TypeError("Expected a function");
function b(t) {
var n = l, r = c;
return l = c = void 0, f = t, d = e.apply(r, n);
}
function v(e) {
var n = e - h;
return void 0 === h || n >= t || n < 0 || g && e - f >= u;
}
function T() {
var e = i();
if (v(e)) return S(e);
p = setTimeout(T, function(e) {
var n = t - (e - h);
return g ? s(n, u - (e - f)) : n;
}(e));
}
function S(e) {
return p = void 0, E && l ? b(e) : (l = c = void 0, d);
}
function _() {
var e = i(), n = v(e);
if (l = arguments, c = this, h = e, n) {
if (void 0 === p) return function(e) {
return f = e, p = setTimeout(T, t), m ? b(e) : d;
}(h);
if (g) return clearTimeout(p), p = setTimeout(T, t), b(h);
}
return void 0 === p && (p = setTimeout(T, t)), d;
}
return t = o(t) || 0, r(n) && (m = !!n.leading, u = (g = "maxWait" in n) ? a(o(n.maxWait) || 0, t) : u, 
E = "trailing" in n ? !!n.trailing : E), _.cancel = function() {
void 0 !== p && clearTimeout(p), f = 0, l = h = c = p = void 0;
}, _.flush = function() {
return void 0 === p ? d : S(i());
}, _;
};
},
9835: function(e, t, n) {
"use strict";
n.r(t), t.default = {
output: "SALIDA"
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
}
}, __webpack_module_cache__ = {};
function __webpack_require__(e) {
var t = __webpack_module_cache__[e];
if (void 0 !== t) return t.exports;
var n = __webpack_module_cache__[e] = {
exports: {}
};
return __webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__), 
n.exports;
}
__webpack_require__.d = function(e, t) {
for (var n in t) __webpack_require__.o(t, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, {
enumerable: !0,
get: t[n]
});
}, __webpack_require__.g = function() {
if ("object" == typeof globalThis) return globalThis;
try {
return this || new Function("return this")();
} catch (e) {
if ("object" == typeof window) return window;
}
}(), __webpack_require__.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, __webpack_require__.r = function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
};
var __webpack_exports__ = {};
!function() {
const delegate = __webpack_require__(3102), prism = __webpack_require__(5566), ItemSlider = __webpack_require__(1623);
function init() {
initTaskButtons(), initFolderList(), initViewMoreButton(), initCoursesSlider(), 
prism.init();
}
function initTaskButtons() {
delegate(document, ".task__solution", "click", function(e) {
e.target.closest(".task").classList.toggle("task_answer_open");
}), delegate(document, ".task__answer-close", "click", function(e) {
e.target.closest(".task").classList.toggle("task_answer_open");
}), delegate(document, ".task__step-show", "click", function(e) {
e.target.closest(".task__step").classList.toggle("task_step_open");
});
}
function initViewMoreButton() {
delegate(document, "a.list-sub__more", "click", function(e) {
e.preventDefault();
const t = e.target;
for (let e of t.closest(".list-sub").querySelectorAll(".list-sub__item_phone_hidden")) e.classList.remove("list-sub__item_phone_hidden");
t.style.display = "none";
});
}
function initFolderList() {
delegate(document, ".lessons-list__lesson_level_1 > .lessons-list__link", "click", function(e) {
let t = e.delegateTarget, n = t.closest(".lessons-list").querySelector(".lessons-list__lesson_open");
n && n !== t.parentNode && n.classList.remove("lessons-list__lesson_open"), t.parentNode.classList.toggle("lessons-list__lesson_open"), 
e.preventDefault();
});
}
function initCoursesSlider() {
const e = document.querySelector("[data-courses-slider]");
e && new ItemSlider({
el: e,
class: "slider_frontpage"
});
}
window.runDemo = function(button) {
let demoElem, parent = button;
for (;(parent = parent.parentElement) && (demoElem = parent.querySelector("[data-demo]"), 
!demoElem); ) ;
demoElem ? eval(demoElem.textContent) : alert("Error, no demo element");
}, init();
}(), function() {
let e = __webpack_require__(6127), t = __webpack_require__(2924), n = __webpack_require__(3102);
function r() {
/[&?]map\b/.test(location.href) || window.history.replaceState(null, null, ~location.href.indexOf("?") ? location.href + "&map" : location.href + "?map"), 
(new e).elem.addEventListener("tutorial-map-remove", () => {
window.history.replaceState(null, null, location.href.replace(/[&?]map\b/, ""));
});
}
!function() {
n(document, '[data-action="tutorial-map"]', "click", e => {
1 === e.which && (e.preventDefault(), r());
});
let e = document.querySelector(".tutorial-map");
e ? new t(e) : /[&?]map\b/.test(location.href) && r();
}();
}(), tutorial = __webpack_exports__;
})();
//# sourceMappingURL=tutorial.1fd2eb45c196482dd6c4.js.map