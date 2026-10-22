var frontpage;

!function() {
var e = {
24: function(e, t, n) {
t.Captcha = n(902), t.initForms = n(697);
},
51: function(e, t, n) {
var r = {
"./es.yml": 228
};
function o(e) {
var t = i(e);
return n(t);
}
function i(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = i, e.exports = o, o.id = 51;
},
102: function(e) {
function t(e, t, n, r, o) {
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
e.delegateTarget = n, n && r.call(o || this, e);
});
}
t.delegateMixin = function(e) {
e.delegate = function(e, n, r) {
t(this.elem, e, n, r, this);
};
}, e.exports = t;
},
115: function(e, t, n) {
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
188: function(e, t, n) {
var r = {
"./es.yml": 115
};
function o(e) {
var t = i(e);
return n(t);
}
function i(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = i, e.exports = o, o.id = 188;
},
205: function(e, t, n) {
var r = {
"./es.yml": 310
};
function o(e) {
var t = i(e);
return n(t);
}
function i(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = i, e.exports = o, o.id = 205;
},
228: function(e, t, n) {
"use strict";
n.r(t), t.default = {
choose_newsletter: "Elija boletines en la lista.",
email_please: "¿Tu email?"
};
},
304: function(e) {
e.exports = function() {
function e(e, t, n, r, o, i) {
this.message = e, this.expected = t, this.found = n, this.offset = r, this.line = o, 
this.column = i, this.name = "SyntaxError";
}
return function(e, t) {
function n() {
this.constructor = e;
}
n.prototype = t.prototype, e.prototype = new n;
}(e, Error), {
SyntaxError: e,
parse: function(t) {
var n, r = arguments.length > 1 ? arguments[1] : {}, o = {}, i = {
start: ue
}, s = ue, a = o, c = "((", l = {
type: "literal",
value: "((",
description: '"(("'
}, u = "))", d = {
type: "literal",
value: "))",
description: '"))"'
}, f = null, p = function(e, t) {
return {
type: "plural",
forms: ye(e),
strict: we(e),
anchor: t || "count"
};
}, h = "|", m = {
type: "literal",
value: "|",
description: '"|"'
}, v = function(e, t) {
return [ e ].concat(t);
}, g = function(e) {
return [ e ];
}, _ = "=", b = {
type: "literal",
value: "=",
description: '"="'
}, y = /^[0-9]/, w = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, F = " ", x = {
type: "literal",
value: " ",
description: '" "'
}, E = function(e, t) {
return {
strict: e.join(""),
text: t.join("")
};
}, C = function() {
return {
text: se()
};
}, k = "\\", A = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, j = /^[\\|)(]/, T = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, S = function(e) {
return e;
}, O = void 0, L = {
type: "any",
description: "any character"
}, P = function() {
return se();
}, q = ":", D = {
type: "literal",
value: ":",
description: '":"'
}, M = function(e) {
return e;
}, z = "#{", N = {
type: "literal",
value: "#{",
description: '"#{"'
}, H = "}", I = {
type: "literal",
value: "}",
description: '"}"'
}, R = function(e) {
return {
type: "variable",
anchor: e
};
}, U = ".", $ = {
type: "literal",
value: ".",
description: '"."'
}, B = function() {
return se();
}, V = /^[a-zA-Z_$]/, G = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, K = /^[a-zA-Z0-9_$]/, J = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, X = function(e) {
return e;
}, Y = function(e) {
return {
type: "literal",
text: e.join("")
};
}, Z = /^[\\#()|]/, W = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, ee = 0, te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}, re = 0, oe = [], ie = 0;
if ("startRule" in r) {
if (!(r.startRule in i)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
s = i[r.startRule];
}
function se() {
return t.substring(ee, Q);
}
function ae(e) {
return te !== e && (te > e && (te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}), function(e, n, r) {
var o, i;
for (o = n; o < r; o++) "\n" === (i = t.charAt(o)) ? (e.seenCR || e.line++, e.column = 1, 
e.seenCR = !1) : "\r" === i || "\u2028" === i || "\u2029" === i ? (e.line++, e.column = 1, 
e.seenCR = !0) : (e.column++, e.seenCR = !1);
}(ne, te, e), te = e), ne;
}
function ce(e) {
Q < re || (Q > re && (re = Q, oe = []), oe.push(e));
}
function le(n, r, o) {
var i = ae(o), s = o < t.length ? t.charAt(o) : null;
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
}(r, s), r, s, o, i.line, i.column);
}
function ue() {
var e, t;
for (e = [], (t = _e()) === o && (t = de()) === o && (t = me()); t !== o; ) e.push(t), 
(t = _e()) === o && (t = de()) === o && (t = me());
return e;
}
function de() {
var e, n, r, i, s;
return e = Q, t.substr(Q, 2) === c ? (n = c, Q += 2) : (n = o, 0 === ie && ce(l)), 
n !== o && (r = fe()) !== o ? (t.substr(Q, 2) === u ? (i = u, Q += 2) : (i = o, 
0 === ie && ce(d)), i !== o ? (s = function() {
var e, n, r;
e = Q, 58 === t.charCodeAt(Q) ? (n = q, Q++) : (n = o, 0 === ie && ce(D));
n !== o && (r = ve()) !== o ? (ee = e, e = n = M(r)) : (Q = e, e = a);
return e;
}(), s === o && (s = f), s !== o ? (ee = e, e = n = p(r, s)) : (Q = e, e = a)) : (Q = e, 
e = a)) : (Q = e, e = a), e;
}
function fe() {
var e, n, r, i;
return e = Q, (n = pe()) !== o ? (124 === t.charCodeAt(Q) ? (r = h, Q++) : (r = o, 
0 === ie && ce(m)), r !== o && (i = fe()) !== o ? (ee = e, e = n = v(n, i)) : (Q = e, 
e = a)) : (Q = e, e = a), e === o && (e = Q, (n = pe()) !== o && (ee = e, n = g(n)), 
e = n), e;
}
function pe() {
var e, n, r, i, s, c;
if (e = Q, 61 === t.charCodeAt(Q) ? (n = _, Q++) : (n = o, 0 === ie && ce(b)), n !== o) {
if (r = [], y.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 0 === ie && ce(w)), 
i !== o) for (;i !== o; ) r.push(i), y.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 
0 === ie && ce(w)); else r = a;
if (r !== o) if (32 === t.charCodeAt(Q) ? (i = F, Q++) : (i = o, 0 === ie && ce(x)), 
i === o && (i = f), i !== o) {
if (s = [], (c = he()) !== o) for (;c !== o; ) s.push(c), c = he(); else s = a;
s !== o ? (ee = e, e = n = E(r, s)) : (Q = e, e = a);
} else Q = e, e = a; else Q = e, e = a;
} else Q = e, e = a;
if (e === o) {
if (e = Q, n = [], (r = he()) !== o) for (;r !== o; ) n.push(r), r = he(); else n = a;
n !== o && (ee = e, n = C()), e = n;
}
return e;
}
function he() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = k, Q++) : (n = o, 0 === ie && ce(A)), 
n !== o ? (j.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = o, 0 === ie && ce(T)), 
r !== o ? (ee = e, e = n = S(r)) : (Q = e, e = a)) : (Q = e, e = a), e === o && (e = Q, 
n = Q, ie++, 124 === t.charCodeAt(Q) ? (r = h, Q++) : (r = o, 0 === ie && ce(m)), 
r === o && (t.substr(Q, 2) === u ? (r = u, Q += 2) : (r = o, 0 === ie && ce(d))), 
ie--, r === o ? n = O : (Q = n, n = a), n !== o ? (t.length > Q ? (r = t.charAt(Q), 
Q++) : (r = o, 0 === ie && ce(L)), r !== o ? (ee = e, e = n = P()) : (Q = e, e = a)) : (Q = e, 
e = a)), e;
}
function me() {
var e, n, r, i;
return e = Q, t.substr(Q, 2) === z ? (n = z, Q += 2) : (n = o, 0 === ie && ce(N)), 
n !== o && (r = ve()) !== o ? (125 === t.charCodeAt(Q) ? (i = H, Q++) : (i = o, 
0 === ie && ce(I)), i !== o ? (ee = e, e = n = R(r)) : (Q = e, e = a)) : (Q = e, 
e = a), e;
}
function ve() {
var e, n, r, i;
if (e = Q, ge() !== o) if (46 === t.charCodeAt(Q) ? (n = U, Q++) : (n = o, 0 === ie && ce($)), 
n !== o) {
if (r = [], (i = ve()) !== o) for (;i !== o; ) r.push(i), i = ve(); else r = a;
r !== o ? (ee = e, e = B()) : (Q = e, e = a);
} else Q = e, e = a; else Q = e, e = a;
return e === o && (e = ge()), e;
}
function ge() {
var e, n, r, i;
if (e = Q, V.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = o, 0 === ie && ce(G)), 
n !== o) {
for (r = [], K.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 0 === ie && ce(J)); i !== o; ) r.push(i), 
K.test(t.charAt(Q)) ? (i = t.charAt(Q), Q++) : (i = o, 0 === ie && ce(J));
r !== o ? (ee = e, e = n = P()) : (Q = e, e = a);
} else Q = e, e = a;
return e;
}
function _e() {
var e, t, n, r, i;
if (e = Q, t = [], n = Q, r = Q, ie++, (i = de()) === o && (i = me()), ie--, i === o ? r = O : (Q = r, 
r = a), r !== o && (i = be()) !== o ? (ee = n, n = r = X(i)) : (Q = n, n = a), n !== o) for (;n !== o; ) t.push(n), 
n = Q, r = Q, ie++, (i = de()) === o && (i = me()), ie--, i === o ? r = O : (Q = r, 
r = a), r !== o && (i = be()) !== o ? (ee = n, n = r = X(i)) : (Q = n, n = a); else t = a;
return t !== o && (ee = e, t = Y(t)), e = t;
}
function be() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = k, Q++) : (n = o, 0 === ie && ce(A)), 
n !== o ? (Z.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = o, 0 === ie && ce(W)), 
r !== o ? (ee = e, e = n = S(r)) : (Q = e, e = a)) : (Q = e, e = a), e === o && (t.length > Q ? (e = t.charAt(Q), 
Q++) : (e = o, 0 === ie && ce(L))), e;
}
function ye(e) {
for (var t = [], n = 0; n < e.length; n++) void 0 === e[n].strict && t.push(e[n].text);
return t;
}
function we(e) {
for (var t = {}, n = 0; n < e.length; n++) void 0 !== e[n].strict && (t[e[n].strict] = e[n].text);
return t;
}
if ((n = s()) !== o && Q === t.length) return n;
throw n !== o && Q < t.length && ce({
type: "end",
description: "end of input"
}), le(null, oe, re);
}
};
}();
},
310: function(e, t, n) {
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
345: function(e, t, n) {
"use strict";
n.r(t), n.d(t, {
Error: function() {
return u;
},
Info: function() {
return a;
},
Success: function() {
return l;
},
Warning: function() {
return c;
},
init: function() {
return i;
}
});
let r = n(102);
class o {
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
function i(e) {
window.notificationManager || (window.notificationManager = new o(e));
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
class c extends s {
constructor(e, t) {
super(e, "warning", t);
}
}
class l extends s {
constructor(e, t) {
super(e, "success", t);
}
}
class u extends s {
constructor(e, t) {
super(e, "error", t);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
},
348: function(e, t, n) {
const r = n(773), o = n(662);
e.exports = class {
constructor(e) {
this.elem = e.elem, this.select = this.elem.querySelector("select"), this.textContainer = this.elem.querySelector(".multiselect__active-button"), 
this.options = [ ...this.select.querySelectorAll("option") ], this.defaultValue = this.textContainer.textContent, 
this.status = "closed", this.elem.querySelector(".multiselect__container").insertAdjacentHTML("beforeend", this.createDropdown()), 
this.setButtonTitle(), this.bindHandlers();
}
createDropdown() {
return `\n      <div class='multiselect__dropdown-container'>\n        <div class='multiselect__dropdown'>\n          ${this.options.map(e => `<div class='multiselect__item${e.selected ? " multiselect__item_checked" : ""}' data-value='${e.value}'>\n                <span class='multiselect__item-title'>${e.textContent + ("advanced" === e.value ? `<span class='multiselect__greyed-text'>${r("site.subscribe.common_updates_text")}</span>` : "")}</span>\n              </div>`).join("")}\n        </div>\n      </div>\n    `;
}
bindHandlers() {
this.textContainer.addEventListener("click", this.toggleDropdown.bind(this));
for (let e of this.elem.querySelectorAll(".multiselect__item")) e.addEventListener("click", this.onChange.bind(this));
this.select.addEventListener("change", this.setButtonTitle.bind(this));
}
toggleDropdown(e) {
e.stopPropagation(), this.elem.classList.toggle("multiselect_opened"), this.toggleStatus(), 
"opened" === this.status && (this.boundCloseDropdown = this.closeDropdown.bind(this), 
document.addEventListener("click", this.boundCloseDropdown));
}
toggleStatus() {
"closed" === this.status ? this.status = "opened" : this.status = "closed";
}
closeDropdown(e) {
e.target.closest(".multiselect__dropdown-container") || (this.status = "closed", 
this.elem.classList.remove("multiselect_opened"), document.removeEventListener("click", this.boundCloseDropdown));
}
onChange(e) {
const t = e.target.closest(".multiselect__item");
t.classList.toggle("multiselect__item_checked");
this.options.filter(e => e.value === t.getAttribute("data-value")).pop().selected = t.classList.contains("multiselect__item_checked"), 
this.select.dispatchEvent(new Event("change"));
}
setButtonTitle() {
const e = this.getValues();
1 === e.length && e.includes("advanced") ? this.textContainer.textContent = this.defaultValue : e.length ? this.textContainer.textContent = e.length + " " + o(e.length, r("site.subscribe.newsletters")) : this.textContainer.textContent = r("site.subscribe.no_selected");
}
getValues() {
return this.options.filter(e => e.selected).map(e => e.value);
}
};
},
461: function(e, t, n) {
const r = n(944), o = n(495), i = n(345), s = n(348), {Captcha: a} = n(24), c = n(773), l = n(907).lang;
function u(e, t) {
if (!e.elements.email.value) return;
const n = e.elements.slug;
let s, a = [ ...n.querySelectorAll("option:checked") ].map(e => e.value);
if (a.length || (a = n.value), e.elements["subscribe-email"] && (s = !0), !s && !a.length) return void new i.Error(c("newsletter.client.choose_newsletter"));
const l = {
email: e.elements.email.value,
slug: a
};
e.elements["captcha-response"] && (l["captcha-response"] = e.elements["captcha-response"].value), 
s && (l.replace = !0);
const u = o({
method: "POST",
url: e.action,
body: l
}), d = e.querySelector('[type="submit"]'), f = new r({
elem: d,
size: "small",
elemClass: "button_loading"
});
f.start(), d.disabled = !0, u.addEventListener("loadend", () => {
f.stop(), d.disabled = !1;
}), u.addEventListener("success", function(n) {
if (200 == this.status) {
new i.Success(n.result.message, "slow");
e.elements.gaEvent && JSON.parse(e.elements.gaEvent.value);
t && t();
} else new i.Error(n.result.message);
});
}
c.i18n.add("newsletter.client", n(51)("./" + l + ".yml")), t.initNewsletterForm = function() {
let e = document.querySelectorAll("[data-newsletter-subscribe-form]");
for (let t of e) {
const e = "hidden" === t.elements.email.type, n = t.querySelector(".multiselect");
if (n) {
const r = new s({
elem: n
}), o = t.querySelector('button[type="submit"]'), i = o.querySelector("span");
t.elements.slug && t.elements.slug.addEventListener("change", () => {
o.disabled = !r.getValues().length && !e, !r.getValues().length && e ? i.textContent = c("site.subscribe.button_unsubscribe") : i.textContent = c("site.subscribe.button");
});
}
let r = new a(t);
t.onsubmit = async function(e) {
e.preventDefault(), await r.validateForm(t), u(t);
};
}
}, t.submitSubscribeForm = u;
},
495: function(e, t, n) {
let r = n(345), o = n(629);
const i = n(907).lang, s = n(773);
s.i18n.add("", n(205)("./" + i + ".yml")), s.i18n.add("error.network", n(188)("./" + i + ".yml")), 
document.addEventListener("xhrfail", function(e) {
new r.Error(e.reason);
}), e.exports = function(e) {
let t = new XMLHttpRequest, n = e.method || "GET", r = e.body, i = e.url;
t.open(n, i, !e.sync), t.method = n;
let a = o();
a && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", a), e.responseType && (t.responseType = e.responseType), 
"[object Object]" == {}.toString.call(r) && (t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
r = JSON.stringify(r)), e.noDocumentEvents || (t.addEventListener("loadstart", e => {
t.timeStart = Date.now();
let n = l("xhrstart", e);
document.dispatchEvent(n);
}), t.addEventListener("loadend", e => {
let t = l("xhrend", e);
document.dispatchEvent(t);
}), t.addEventListener("success", e => {
let t = l("xhrsuccess", e);
t.result = e.result, document.dispatchEvent(t);
}), t.addEventListener("fail", e => {
let t = l("xhrfail", e);
t.reason = e.reason, document.dispatchEvent(t);
})), e.raw || t.setRequestHeader("Accept", "application/json"), t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
let c = e.normalStatuses || [ 200 ];
function l(e, t) {
let n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function u(e, n) {
let r = l("fail", n);
r.reason = e, t.dispatchEvent(r);
}
return t.addEventListener("error", e => {
u(s("error.network.server_connection_error"), e);
}), t.addEventListener("timeout", e => {
u(s("error.network.server_request_timeout"), e);
}), t.addEventListener("abort", e => {
u(s("error.network.request_aborted"), e);
}), t.addEventListener("load", n => {
if (!t.status) return void u(s("error.network.no_response"), n);
let r = e.responseType && "text" !== e.responseType ? t.response : t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
r = JSON.parse(r);
} catch (n) {
return void u(s("error.network.invalid_format"), n);
}
if (!c.includes(t.status)) {
return void u(r.info ? s("error.network.server_error_info", {
status: t.status,
info: r.info
}) : s("error.network.server_error", {
status: t.status
}), n);
}
!function(e, n) {
let r = l("success", n);
r.result = e, t.dispatchEvent(r);
}(r, n);
}), setTimeout(function() {
t.send(r);
}), t;
};
},
532: function(e) {
"use strict";
var t = {};
function n(e) {
var n;
return t[e] ? e : (n = e.toLowerCase().replace("_", "-"), t[n] ? n : (n = n.split("-")[0], 
t[n] ? n : null));
}
var r = /c\d+$/;
function o(e, o) {
var i = n(e);
if (!i) return -1;
if (!t[i].cFn) return 0;
var s = String(o), a = 0;
if (r.test(s)) {
var c = s.split("c");
a = +c[1], o = Math.pow(10, a) * c[0], s = String(o);
}
var l = s.indexOf(".") < 0 ? "" : s.split(".")[1], u = l.length, d = l.replace(/0+$/, "").length, f = +o, p = +s.split(".")[0], h = 0 === l.length ? 0 : +l.replace(/0+$/, "");
return t[i].cFn(f, p, u, +l, h, d, a);
}
function i(e, r) {
var o = n(e);
if (!o) return -1;
if (!t[o].oFn) return 0;
var i = String(r), s = i.indexOf(".") < 0 ? "" : i.split(".")[1], a = s.length, c = s.replace(/0+$/, "").length, l = +r, u = +i.split(".")[0], d = 0 === s.length ? 0 : +s.replace(/0+$/, "");
return t[o].oFn(l, u, a, +s, d, c, 0);
}
e.exports = function(e, r) {
var i = n(e);
return i ? t[i].c[o(i, r)] : null;
}, e.exports.indexOf = o, e.exports.forms = function(e) {
var r = n(e);
return t[r] ? t[r].c : null;
}, e.exports.ordinal = function(e, r) {
var o = n(e);
return t[o] ? t[o].o[i(o, r)] : null;
}, e.exports.ordinal.indexOf = i, e.exports.ordinal.forms = function(e) {
var r = n(e);
return t[r] ? t[r].o : null;
};
var s = [ "zero", "one", "two", "few", "many", "other" ];
function a(e) {
return s[e];
}
function c(e, n) {
var r;
for (n.c = n.c ? n.c.map(a) : [ "other" ], n.o = n.o ? n.o.map(a) : [ "other" ], 
r = 0; r < e.length; r++) t[e[r]] = n;
}
function l(e, t, n) {
return e <= n && n <= t && n % 1 == 0;
}
function u(e, t) {
return e.indexOf(t) >= 0;
}
c([ "af", "an", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sd", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "ak", "bho", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(e) {
return l(0, 1, e) ? 0 : 1;
}
}), c([ "am", "doi", "fa", "kn", "pcm", "zu" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
}
}), c([ "ar", "ars" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : l(3, 10, t) ? 3 : l(11, 99, t) ? 4 : 5;
}
}), c([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return u([ 1, 5, 7, 8, 9, 10 ], e) ? 0 : u([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "ast", "de", "et", "fi", "fy", "gl", "ia", "io", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), c([ "az" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100, o = t % 1e3;
return u([ 1, 2, 5, 7, 8 ], n) || u([ 20, 50, 70, 80 ], r) ? 0 : u([ 3, 4 ], n) || u([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], o) ? 1 : 0 === t || 6 === n || u([ 40, 60, 90 ], r) ? 2 : 3;
}
}), c([ "bal" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : l(2, 4, t) && !l(12, 14, n) ? 1 : 0 === t || l(5, 9, t) || l(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
var t = e % 100;
return u([ 2, 3 ], e % 10) && !u([ 12, 13 ], t) ? 0 : 1;
}
}), c([ "bm", "bo", "dz", "hnj", "id", "ig", "ii", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "osa", "sah", "ses", "sg", "su", "th", "to", "tpi", "und", "wo", "yo", "yue", "zh" ], {}), 
c([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100, r = e % 1e6;
return 1 !== t || u([ 11, 71, 91 ], n) ? 2 !== t || u([ 12, 72, 92 ], n) ? !l(3, 4, t) && 9 !== t || l(10, 19, n) || l(70, 79, n) || l(90, 99, n) ? 0 !== e && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), c([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n, r) {
var o = t % 10, i = t % 100, s = r % 10, a = r % 100;
return 0 === n && 1 === o && 11 !== i || 1 === s && 11 !== a ? 0 : 0 === n && l(2, 4, o) && !l(12, 14, i) || l(2, 4, s) && !l(12, 14, a) ? 1 : 2;
}
}), c([ "ca" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return u([ 1, 3 ], e) ? 0 : 2 === e ? 1 : 4 === e ? 2 : 3;
}
}), c([ "ceb" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var o = t % 10, i = r % 10;
return 0 === n && u([ 1, 2, 3 ], t) || 0 === n && !u([ 4, 6, 9 ], o) || 0 !== n && !u([ 4, 6, 9 ], i) ? 0 : 1;
}
}), c([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : l(2, 4, t) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), c([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 === e ? 3 : 6 === e ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(e) {
return u([ 0, 7, 8, 9 ], e) ? 0 : 1 === e ? 1 : 2 === e ? 2 : u([ 3, 4 ], e) ? 3 : u([ 5, 6 ], e) ? 4 : 5;
}
}), c([ "da" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, o) {
return 1 === e || 0 !== o && u([ 0, 1 ], t) ? 0 : 1;
}
}), c([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n, r) {
var o = t % 100, i = r % 100;
return 0 === n && 1 === o || 1 === i ? 0 : 0 === n && 2 === o || 2 === i ? 1 : 0 === n && l(3, 4, o) || l(3, 4, i) ? 2 : 3;
}
}), c([ "en" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : 2 === t && 12 !== n ? 1 : 3 === t && 13 !== n ? 2 : 3;
}
}), c([ "es" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, o, i, s) {
return 1 === e ? 0 : 0 === s && 0 !== t && 0 === t % 1e6 && 0 === n || !l(0, 5, s) ? 1 : 2;
}
}), c([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return u([ 0, 1 ], t) ? 0 : 1;
}
}), c([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var o = t % 10, i = r % 10;
return 0 === n && u([ 1, 2, 3 ], t) || 0 === n && !u([ 4, 6, 9 ], o) || 0 !== n && !u([ 4, 6, 9 ], i) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "fr" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, o, i, s) {
var a = t % 1e6;
return u([ 0, 1 ], t) ? 0 : 0 === s && 0 !== t && 0 === a && 0 === n || !l(0, 5, s) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : l(3, 6, e) ? 2 : l(7, 10, e) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e) {
return u([ 1, 11 ], e) ? 0 : u([ 2, 12 ], e) ? 1 : l(3, 10, e) || l(13, 19, e) ? 2 : 3;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return u([ 1, 11 ], e) ? 0 : u([ 2, 12 ], e) ? 1 : u([ 3, 13 ], e) ? 2 : 3;
}
}), c([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : u([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && u([ 0, 20, 40, 60, 80 ], t % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), c([ "he" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(e, t, n) {
var r = e % 10;
return 1 === t && 0 === n ? 0 : 2 === t && 0 === n ? 1 : 0 !== n || l(0, 10, e) || 0 !== r ? 3 : 2;
}
}), c([ "hu" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return u([ 1, 5 ], e) ? 0 : 1;
}
}), c([ "hy" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return u([ 0, 1 ], t) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "is" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, o) {
return 0 === o && 1 === t % 10 && 11 !== t % 100 || 0 !== o ? 0 : 1;
}
}), c([ "it" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, o, i, s) {
return 1 === t && 0 === n ? 0 : 0 === s && 0 !== t && 0 === t % 1e6 && 0 === n || !l(0, 5, s) ? 1 : 2;
},
o: [ 4, 5 ],
oFn: function(e) {
return u([ 11, 8, 80, 800 ], e) ? 0 : 1;
}
}), c([ "iu", "naq", "sat", "se", "sma", "smi", "smj", "smn", "sms" ], {
c: [ 1, 2, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : 2;
}
}), c([ "ka" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e, t) {
var n = t % 100;
return 1 === t ? 0 : 0 === t || l(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
}
}), c([ "kk" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
var t = e % 10;
return 6 === t || 9 === t || 0 === t && 0 !== e ? 0 : 1;
}
}), c([ "ksh" ], {
c: [ 0, 1, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2;
}
}), c([ "kw" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100, n = e % 1e3, r = e % 1e5, o = e % 1e6;
return 0 === e ? 0 : 1 === e ? 1 : u([ 2, 22, 42, 62, 82 ], t) || 0 === n && (l(1e3, 2e4, r) || 4e4 === r || 6e4 === r || 8e4 === r) || 0 !== e && 1e5 === o ? 2 : u([ 3, 23, 43, 63, 83 ], t) ? 3 : 1 !== e && u([ 1, 21, 41, 61, 81 ], t) ? 4 : 5;
},
o: [ 1, 4, 5 ],
oFn: function(e) {
var t = e % 100;
return l(1, 4, e) || l(1, 4, t) || l(21, 24, t) || l(41, 44, t) || l(61, 64, t) || l(81, 84, t) ? 0 : 5 === e || 5 === t ? 1 : 2;
}
}), c([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t) {
return 0 === e ? 0 : u([ 0, 1 ], t) && 0 !== e ? 1 : 2;
}
}), c([ "lij" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
return 11 === e || 8 === e || l(80, 89, e) || l(800, 899, e) ? 0 : 1;
}
}), c([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n, r) {
var o = e % 10, i = e % 100;
return 1 !== o || l(11, 19, i) ? l(2, 9, o) && !l(11, 19, i) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), c([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t, n, r) {
var o = e % 10, i = e % 100, s = r % 100, a = r % 10;
return 0 === o || l(11, 19, i) || 2 === n && l(11, 19, s) ? 0 : 1 === o && 11 !== i || 2 === n && 1 === a && 11 !== s || 2 !== n && 1 === a ? 1 : 2;
}
}), c([ "mk" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return 0 === n && 1 === t % 10 && 11 !== t % 100 || 1 === r % 10 && 11 !== r % 100 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : u([ 7, 8 ], n) && !u([ 17, 18 ], r) ? 2 : 3;
}
}), c([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 0 !== n || 0 === e || l(2, 19, e % 100) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "mr" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return 1 === e ? 0 : u([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 3;
}
}), c([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 1 === e ? 0 : 0 === e || l(2, 10, t) ? 1 : l(11, 19, t) ? 2 : 3;
}
}), c([ "ne" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return l(1, 4, e) ? 0 : 1;
}
}), c([ "or" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e || 5 === e || l(7, 9, e) ? 0 : u([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, o = t % 100;
return 1 === t && 0 === n ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 1 !== t && l(0, 1, r) || 0 === n && l(5, 9, r) || 0 === n && l(12, 14, o) ? 2 : 3;
}
}), c([ "pt" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, o, i, s) {
var a = t % 1e6;
return l(0, 1, t) ? 0 : 0 === s && 0 !== t && 0 === a && 0 === n || !l(0, 5, s) ? 1 : 2;
}
}), c([ "pt-pt" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, o, i, s) {
return 1 === t && 0 === n ? 0 : 0 === s && 0 !== t && 0 === t % 1e6 && 0 === n || !l(0, 5, s) ? 1 : 2;
}
}), c([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, o = t % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, o) ? 2 : 3;
}
}), c([ "sc", "scn" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
return u([ 11, 8, 80, 800 ], e) ? 0 : 1;
}
}), c([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : l(2, 10, e) ? 1 : 2;
}
}), c([ "si" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return u([ 0, 1 ], e) || 0 === t && 1 === r ? 0 : 1;
}
}), c([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n) {
var r = t % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && l(3, 4, r) || 0 !== n ? 2 : 3;
}
}), c([ "sq" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 4 === e % 10 && 14 !== e % 100 ? 1 : 2;
}
}), c([ "sv" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
var t = e % 100;
return u([ 1, 2 ], e % 10) && !u([ 11, 12 ], t) ? 0 : 1;
}
}), c([ "tk" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 3, 5 ],
oFn: function(e) {
return u([ 6, 9 ], e % 10) || 10 === e ? 0 : 1;
}
}), c([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(e) {
return l(0, 1, e) || l(11, 99, e) ? 0 : 1;
}
}), c([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, o = t % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, o) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
return 3 === e % 10 && 13 !== e % 100 ? 0 : 1;
}
});
},
629: function(e) {
e.exports = function() {
let e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
},
662: function(e) {
e.exports = function(e, t) {
var n, r = (n = e) % 10 == 1 && n % 100 != 11 ? "one" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) && n == Math.floor(n) ? "few" : n % 10 == 0 || n % 10 >= 5 && n % 10 <= 9 || n % 100 >= 11 && n % 100 <= 14 && n == Math.floor(n) ? "many" : "other", o = t.split(",");
switch (r) {
case "one":
return o[0];

case "few":
return o[1];

case "many":
return o[2];

default:
throw new Error("Unsupported count: " + e);
}
};
},
679: function(e, t, n) {
"use strict";
var r = n(304), o = n(532);
function i(e) {
return Object.prototype.toString.call(e);
}
function s(e) {
return "[object String]" === i(e);
}
function a(e) {
return !isNaN(e) && isFinite(e);
}
function c(e) {
return !0 === e || !1 === e;
}
function l(e) {
return "[object Object]" === i(e);
}
var u = Array.isArray || function(e) {
return "[object Array]" === i(e);
}, d = Array.prototype.forEach;
function f(e, t, n) {
if (null !== e) if (d && e.forEach === d) e.forEach(t, n); else if (e.length === +e.length) for (var r = 0, o = e.length; r < o; r += 1) t.call(n, e[r], r, e); else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(n, e[i], i, e);
}
var p = /%[sdj%]/g;
function h(e) {
var t = 1, n = arguments, r = n.length;
return String(e).replace(p, function(e) {
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
return f(e || {}, function(e, n) {
e && "object" == typeof e ? f(m(e), function(e, r) {
t[n + "." + r] = e;
}) : t[n] = e;
}), t;
}
var v = "#@$";
function g(e, t) {
return e + v + t;
}
function _(e, t, n) {
var r = g(t, n), o = e._storage;
if (o.hasOwnProperty(r)) return r;
if (t === e._defaultLocale) return null;
var i = e._fallbacks_cache;
if (i.hasOwnProperty(r)) return i[r];
for (var s, a = e._fallbacks[t] || [ e._defaultLocale ], c = 0, l = a.length; c < l; c++) if (s = g(a[c], n), 
o.hasOwnProperty(s)) return i[r] = s, i[r];
return i[r] = null, null;
}
function b(e, t, n) {
var r = o.indexOf(e, t);
return -1 === r ? h('[pluralizer for "%s" locale not found]', e) : void 0 === n[r] ? h('[plural form %d ("%s") not found in translation]', r, o.forms(e)[r]) : n[r];
}
function y(e) {
if (!(this instanceof y)) return new y(e);
this._defaultLocale = e ? String(e) : "en", this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
y.prototype.addPhrase = function(e, t, n, r) {
var o, i = this;
if (c(r)) o = r ? 1 / 0 : 0; else if (a(r)) {
if ((o = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else o = 1 / 0;
if (l(n) && o > 0) return f(n, function(n, r) {
i.addPhrase(e, (t ? t + "." : "") + r, n, o - 1);
}), this;
if (s(n)) this._storage[g(e, t)] = {
translation: n,
locale: e,
raw: !1
}; else {
if (!(u(n) || a(n) || c(n) || 0 === o && l(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[g(e, t)] = {
translation: n,
locale: e,
raw: !0
};
}
return i._fallbacks_cache = {}, this;
}, y.prototype.setFallback = function(e, t) {
var n = this._defaultLocale;
if (n === e) throw new Error("Default locale can't have fallbacks");
var r = u(t) ? t.slice() : [ t ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[e] = r, this._fallbacks_cache = {}, 
this;
};
var w = /#\{|\(\(|\\\\/;
y.prototype.translate = function(e, t, n) {
var o, c = _(this, e, t);
return c ? (o = this._storage[c]).raw ? o.translation : (o.hasOwnProperty("compiled") || (o.compiled = function(e, t, n) {
var o, i, s, a, c, l;
return w.test(t) ? 1 === (o = r.parse(t)).length && "literal" === o[0].type ? o[0].text : (e._plurals_cache[n] || (e._plurals_cache[n] = new y(n)), 
l = e._plurals_cache[n], (i = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
i.push("params = flatten(params);"), f(o, function(e) {
if ("literal" !== e.type) {
if ("variable" === e.type) return s = e.anchor, void i.push(h('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', s, s, s));
if ("plural" !== e.type) throw new Error("Unknown node type");
s = e.anchor, a = {}, f(e.strict, function(t, o) {
var i = r.parse(t);
if (1 === i.length && "literal" === i[0].type) return a[o] = !1, void (e.strict[o] = i[0].text);
a[o] = !0, l.hasPhrase(n, t, !0) || l.addPhrase(n, t, t);
}), c = {}, f(e.forms, function(t, o) {
var i, s = r.parse(t);
if (1 === s.length && "literal" === s[0].type) return i = s[0].text, e.forms[o] = i, 
void (c[i] = !1);
c[t] = !0, l.hasPhrase(n, t, !0) || l.addPhrase(n, t, t);
}), i.push(h("loc = %j;", n)), i.push(h("loc_plzr = %j;", n.split(/[-_]/)[0])), 
i.push(h("anchor = params[%j];", s)), i.push(h("cache = this._plurals_cache[loc];")), 
i.push(h("strict = %j;", e.strict)), i.push(h("strict_exec = %j;", a)), i.push(h("forms = %j;", e.forms)), 
i.push(h("forms_exec = %j;", c)), i.push("if (+(anchor) != anchor) {"), i.push(h('  str += "[invalid plurals amount: %s(" + anchor + ")]";', s)), 
i.push("} else {"), i.push("  if (strict[anchor] !== undefined) {"), i.push("    plrl = strict[anchor];"), 
i.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), i.push("  } else {"), 
i.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), i.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
i.push("  }"), i.push("}");
} else i.push(h("str += %j;", e.text));
}), i.push("return str;"), new Function("params", "flatten", "pluralizer", i.join("\n"))) : t;
}(this, o.translation, o.locale)), "[object Function]" !== i(o.compiled) ? o.compiled : ((a(n) || s(n)) && (n = {
count: n,
value: n
}), o.compiled.call(this, n, m, b))) : e + ": No translation for [" + t + "]";
}, y.prototype.hasPhrase = function(e, t, n) {
return n ? this._storage.hasOwnProperty(g(e, t)) : !!_(this, e, t);
}, y.prototype.getLocale = function(e, t, n) {
if (n) return this._storage.hasOwnProperty(g(e, t)) ? e : null;
var r = _(this, e, t);
return r ? r.split(v, 2)[0] : null;
}, y.prototype.t = y.prototype.translate, y.prototype.stringify = function(e) {
var t = this, n = {};
f(this._storage, function(e, t) {
n[t.split(v)[1]] = !0;
});
var r = {};
f(n, function(n, o) {
var i = _(t, e, o);
if (i) {
var s = t._storage[i].locale;
r[s] || (r[s] = {}), r[s][o] = t._storage[i].translation;
}
});
var o = {
fallback: {},
locales: r
}, i = (t._fallbacks[e] || []).slice(0, -1);
return i.length && (o.fallback[e] = i), JSON.stringify(o);
}, y.prototype.load = function(e) {
var t = this;
return s(e) && (e = JSON.parse(e)), f(e.locales, function(e, n) {
f(e, function(e, r) {
t.addPhrase(n, r, e, 0);
});
}), f(e.fallback, function(e, n) {
t.setFallback(n, e);
}), this;
}, e.exports = y;
},
697: function(e, t, n) {
let r = n(905), o = n(902);
e.exports = async function() {
let e = document.querySelectorAll("[data-captcha-submit]");
if (e.length) {
for (let t of e) t.disabled = !0;
await r();
for (let t of e) {
let e = t.form, n = new o(e);
e.onsubmit = async t => {
t.preventDefault(), await n.validateForm(e), e.checkValidity() ? e.submit() : e.reportValidity();
}, t.disabled = !1;
}
}
};
},
773: function(e, t, n) {
"use strict";
const r = new (n(679))("en");
let o = console.error;
function i(e) {
if (!r.hasPhrase(s, e)) {
!1 && o("No such phrase", e);
}
return r.t(s, ...arguments);
}
e.exports = i;
const s = n(907).lang;
"en" !== s && r.setFallback(s, "en"), r.add = (...e) => (e = e.map(e => e.__esModule ? e.default : e), 
r.addPhrase(s, ...e)), i.i18n = r;
},
902: function(e, t, n) {
let r = n(905);
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
905: function(e) {
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
907: function(e) {
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
944: function(e) {
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
}
}, t = {};
function n(r) {
var o = t[r];
if (void 0 !== o) return o.exports;
var i = t[r] = {
exports: {}
};
return e[r](i, i.exports, n), i.exports;
}
n.d = function(e, t) {
for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
enumerable: !0,
get: t[r]
});
}, n.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, n.r = function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
};
var r = {};
n(461).initNewsletterForm(), function() {
function e(e, t, n) {
let r = e.length;
for (;--r && window.scrollY + n < e[r].offsetTop; ) ;
t.forEach(e => e.classList.remove("active")), t[r].classList.add("active");
}
document.addEventListener("click", e => {
if (e.target.closest(".frontpage-content")) {
let t, n = e.target.closest(".tabs__menu-button");
if (!n) return;
e.preventDefault(), t = document.getElementsByClassName("tabs__menu-button"), document.querySelector(n.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});
}
}), document.addEventListener("DOMContentLoaded", () => {
const t = document.querySelectorAll(".tabs__content"), n = document.querySelector(".tabs__menu"), r = n.querySelectorAll(".tabs__menu-button");
new IntersectionObserver(e => {
e[0].target.classList.toggle("sticky", !e[0].isIntersecting);
}, {
rootMargin: `-${n.offsetHeight + 1}px`,
threshold: 0
}).observe(n), e(t, r, n.offsetHeight), window.addEventListener("scroll", () => e(t, r, n.offsetHeight));
});
}(), function() {
"use strict";
n.r(r);
}(), frontpage = r;
}();
//# sourceMappingURL=frontpage.87033a8d3d1dd0f1b31b.js.map