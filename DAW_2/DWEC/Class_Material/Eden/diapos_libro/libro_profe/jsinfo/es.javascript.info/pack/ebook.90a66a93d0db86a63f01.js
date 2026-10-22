/*! For license information please see ebook.90a66a93d0db86a63f01.js.LICENSE.txt */
var ebook;

!function() {
var e = {
23: function(e, t, r) {
var n = {
"./es.yml": 552
};
function o(e) {
var t = a(e);
return r(t);
}
function a(e) {
if (!r.o(n, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return n[e];
}
o.keys = function() {
return Object.keys(n);
}, o.resolve = a, e.exports = o, o.id = 23;
},
102: function(e) {
function t(e, t, r, n, o) {
e.addEventListener(r, function(e) {
let r = function(e, t) {
let r = e.target;
for (;r; ) {
if (r.matches(t)) return r;
if (r == e.currentTarget) break;
r = r.parentElement;
}
return null;
}(e, t);
e.delegateTarget = r, r && n.call(o || this, e);
});
}
t.delegateMixin = function(e) {
e.delegate = function(e, r, n) {
t(this.elem, e, r, n, this);
};
}, e.exports = t;
},
115: function(e, t, r) {
"use strict";
r.r(t), t.default = {
server_connection_error: "Error de conexión al servidor.",
server_request_timeout: "Tiempo de espera de la solicitud del servidor.",
request_aborted: "La solicitud fue cancelada.",
no_response: "No hay respuesta del servidor.",
server_error: "Error de servidor (código #{status}), intente nuevamente más tarde.",
invalid_format: "Formato de respuesta no válido."
};
},
116: function(e, t, r) {
e.exports = r(391);
},
188: function(e, t, r) {
var n = {
"./es.yml": 115
};
function o(e) {
var t = a(e);
return r(t);
}
function a(e) {
if (!r.o(n, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return n[e];
}
o.keys = function() {
return Object.keys(n);
}, o.resolve = a, e.exports = o, o.id = 188;
},
205: function(e, t, r) {
var n = {
"./es.yml": 310
};
function o(e) {
var t = a(e);
return r(t);
}
function a(e) {
if (!r.o(n, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return n[e];
}
o.keys = function() {
return Object.keys(n);
}, o.resolve = a, e.exports = o, o.id = 205;
},
209: function(e, t, r) {
"use strict";
r.r(t), t.default = {
build_at: "Hecho el",
last_version: 'La última versión de este tutorial está en <a href="#{url}">#{url}</a>',
tracker_ref: 'Trabajamos constantemente para mejorar el tutorial. Si encuentra algún error, por favor escríbanos a <a href="#{url}/issues/new">nuestro github</a>',
tasks: "Tareas",
importance: "importancia",
to_solution: "A solución",
solutions: "Soluciones",
to_formulation: "A formulación",
more: "Series adicionales",
newOrder: {
title: "Comprar el EPUB/PDF para la lectura fuera de línea",
sample: "Descargar muestra",
choose_course: "¿Qué secciones del tutorial desea?",
price: "Precio",
specifyEmail: "Especifique su email",
note: "El link de descarga será enviado a esta dirección después del pago.",
choose_payment: "Por favor seleccione el método de pago",
continue: "Continuar",
continue_text: 'Al presionar el botón \'Continuar\' usted acepta nuestros <a href="/terms">términos</a> y <a href="/privacy">política de privacidad</a>.',
confirmation: "Confirmación",
currency: "USD",
continue_with_paypal: "Pago con PayPal",
continue_with_stripe: "Pago con Tarjeta",
continue_pay: "Proceder con el pago",
info: "<p>El libro <strong>PDF/EPUB</strong> es la versión offline del tutorial. Comprando este libro, soporta al proyecto y lo habilita a usted a leer el tutorial como e-book.</p> <p>Usted obtiene el contenido completo al día, más 1 año de actualizaciones gratuitas.</p>\n"
},
orders: {
order: "Orden",
failed: "El pago falló, por favor intente más tarde.",
currency: "u$d",
payment: "Pago",
successful: "Exitoso",
pending: "Confirmación pendiente",
amount: "Precio",
choose_another_payment: "Elegir otro método de pago",
do_not_pay_twice: "No pague dos veces. Cambie el método de pago solamente si está seguro de que el pago falló.",
questions: "Si tiene preguntas, por favor envíelas a",
thanks: "Pago exitoso, ¡gracias por su compra!",
download: "Descargar ebook",
confirmation_soon: "La confirmación fue enviada a <b>#{email}</b>",
download_now: "Puede descargar el tutorial ahora mismo usando este link:",
link_active_3_months: "El link estará activo por 1 año, con la edición más actualizada del tutorial."
},
client: {
enter_email: "Introduzca el email."
},
onPaid: {
subject: "Tutorial de JavaScript EPUB/PDF"
}
};
},
223: function(e, t, r) {
t.FormPayment = r(335);
},
304: function(e) {
e.exports = function() {
function e(e, t, r, n, o, a) {
this.message = e, this.expected = t, this.found = r, this.offset = n, this.line = o, 
this.column = a, this.name = "SyntaxError";
}
return function(e, t) {
function r() {
this.constructor = e;
}
r.prototype = t.prototype, e.prototype = new r;
}(e, Error), {
SyntaxError: e,
parse: function(t) {
var r, n = arguments.length > 1 ? arguments[1] : {}, o = {}, a = {
start: le
}, i = le, s = o, c = "((", u = {
type: "literal",
value: "((",
description: '"(("'
}, l = "))", d = {
type: "literal",
value: "))",
description: '"))"'
}, p = null, f = function(e, t) {
return {
type: "plural",
forms: be(e),
strict: we(e),
anchor: t || "count"
};
}, m = "|", h = {
type: "literal",
value: "|",
description: '"|"'
}, v = function(e, t) {
return [ e ].concat(t);
}, y = function(e) {
return [ e ];
}, g = "=", _ = {
type: "literal",
value: "=",
description: '"="'
}, b = /^[0-9]/, w = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, E = " ", F = {
type: "literal",
value: " ",
description: '" "'
}, k = function(e, t) {
return {
strict: e.join(""),
text: t.join("")
};
}, x = function() {
return {
text: ie()
};
}, S = "\\", j = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, P = /^[\\|)(]/, O = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, C = function(e) {
return e;
}, A = void 0, T = {
type: "any",
description: "any character"
}, q = function() {
return ie();
}, L = ":", M = {
type: "literal",
value: ":",
description: '":"'
}, U = function(e) {
return e;
}, D = "#{", N = {
type: "literal",
value: "#{",
description: '"#{"'
}, z = "}", I = {
type: "literal",
value: "}",
description: '"}"'
}, R = function(e) {
return {
type: "variable",
anchor: e
};
}, B = ".", H = {
type: "literal",
value: ".",
description: '"."'
}, $ = function() {
return ie();
}, G = /^[a-zA-Z_$]/, K = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, V = /^[a-zA-Z0-9_$]/, W = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, J = function(e) {
return e;
}, X = function(e) {
return {
type: "literal",
text: e.join("")
};
}, Z = /^[\\#()|]/, Y = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, ee = 0, te = 0, re = {
line: 1,
column: 1,
seenCR: !1
}, ne = 0, oe = [], ae = 0;
if ("startRule" in n) {
if (!(n.startRule in a)) throw new Error("Can't start parsing from rule \"" + n.startRule + '".');
i = a[n.startRule];
}
function ie() {
return t.substring(ee, Q);
}
function se(e) {
return te !== e && (te > e && (te = 0, re = {
line: 1,
column: 1,
seenCR: !1
}), function(e, r, n) {
var o, a;
for (o = r; o < n; o++) "\n" === (a = t.charAt(o)) ? (e.seenCR || e.line++, e.column = 1, 
e.seenCR = !1) : "\r" === a || "\u2028" === a || "\u2029" === a ? (e.line++, e.column = 1, 
e.seenCR = !0) : (e.column++, e.seenCR = !1);
}(re, te, e), te = e), re;
}
function ce(e) {
Q < ne || (Q > ne && (ne = Q, oe = []), oe.push(e));
}
function ue(r, n, o) {
var a = se(o), i = o < t.length ? t.charAt(o) : null;
return null !== n && function(e) {
var t = 1;
for (e.sort(function(e, t) {
return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
}); t < e.length; ) e[t - 1] === e[t] ? e.splice(t, 1) : t++;
}(n), new e(null !== r ? r : function(e, t) {
var r, n = new Array(e.length);
for (r = 0; r < e.length; r++) n[r] = e[r].description;
return "Expected " + (e.length > 1 ? n.slice(0, -1).join(", ") + " or " + n[e.length - 1] : n[0]) + " but " + (t ? '"' + function(e) {
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
}(n, i), n, i, o, a.line, a.column);
}
function le() {
var e, t;
for (e = [], (t = ge()) === o && (t = de()) === o && (t = he()); t !== o; ) e.push(t), 
(t = ge()) === o && (t = de()) === o && (t = he());
return e;
}
function de() {
var e, r, n, a, i;
return e = Q, t.substr(Q, 2) === c ? (r = c, Q += 2) : (r = o, 0 === ae && ce(u)), 
r !== o && (n = pe()) !== o ? (t.substr(Q, 2) === l ? (a = l, Q += 2) : (a = o, 
0 === ae && ce(d)), a !== o ? (i = function() {
var e, r, n;
e = Q, 58 === t.charCodeAt(Q) ? (r = L, Q++) : (r = o, 0 === ae && ce(M));
r !== o && (n = ve()) !== o ? (ee = e, e = r = U(n)) : (Q = e, e = s);
return e;
}(), i === o && (i = p), i !== o ? (ee = e, e = r = f(n, i)) : (Q = e, e = s)) : (Q = e, 
e = s)) : (Q = e, e = s), e;
}
function pe() {
var e, r, n, a;
return e = Q, (r = fe()) !== o ? (124 === t.charCodeAt(Q) ? (n = m, Q++) : (n = o, 
0 === ae && ce(h)), n !== o && (a = pe()) !== o ? (ee = e, e = r = v(r, a)) : (Q = e, 
e = s)) : (Q = e, e = s), e === o && (e = Q, (r = fe()) !== o && (ee = e, r = y(r)), 
e = r), e;
}
function fe() {
var e, r, n, a, i, c;
if (e = Q, 61 === t.charCodeAt(Q) ? (r = g, Q++) : (r = o, 0 === ae && ce(_)), r !== o) {
if (n = [], b.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = o, 0 === ae && ce(w)), 
a !== o) for (;a !== o; ) n.push(a), b.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = o, 
0 === ae && ce(w)); else n = s;
if (n !== o) if (32 === t.charCodeAt(Q) ? (a = E, Q++) : (a = o, 0 === ae && ce(F)), 
a === o && (a = p), a !== o) {
if (i = [], (c = me()) !== o) for (;c !== o; ) i.push(c), c = me(); else i = s;
i !== o ? (ee = e, e = r = k(n, i)) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
} else Q = e, e = s;
if (e === o) {
if (e = Q, r = [], (n = me()) !== o) for (;n !== o; ) r.push(n), n = me(); else r = s;
r !== o && (ee = e, r = x()), e = r;
}
return e;
}
function me() {
var e, r, n;
return e = Q, 92 === t.charCodeAt(Q) ? (r = S, Q++) : (r = o, 0 === ae && ce(j)), 
r !== o ? (P.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = o, 0 === ae && ce(O)), 
n !== o ? (ee = e, e = r = C(n)) : (Q = e, e = s)) : (Q = e, e = s), e === o && (e = Q, 
r = Q, ae++, 124 === t.charCodeAt(Q) ? (n = m, Q++) : (n = o, 0 === ae && ce(h)), 
n === o && (t.substr(Q, 2) === l ? (n = l, Q += 2) : (n = o, 0 === ae && ce(d))), 
ae--, n === o ? r = A : (Q = r, r = s), r !== o ? (t.length > Q ? (n = t.charAt(Q), 
Q++) : (n = o, 0 === ae && ce(T)), n !== o ? (ee = e, e = r = q()) : (Q = e, e = s)) : (Q = e, 
e = s)), e;
}
function he() {
var e, r, n, a;
return e = Q, t.substr(Q, 2) === D ? (r = D, Q += 2) : (r = o, 0 === ae && ce(N)), 
r !== o && (n = ve()) !== o ? (125 === t.charCodeAt(Q) ? (a = z, Q++) : (a = o, 
0 === ae && ce(I)), a !== o ? (ee = e, e = r = R(n)) : (Q = e, e = s)) : (Q = e, 
e = s), e;
}
function ve() {
var e, r, n, a;
if (e = Q, ye() !== o) if (46 === t.charCodeAt(Q) ? (r = B, Q++) : (r = o, 0 === ae && ce(H)), 
r !== o) {
if (n = [], (a = ve()) !== o) for (;a !== o; ) n.push(a), a = ve(); else n = s;
n !== o ? (ee = e, e = $()) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
return e === o && (e = ye()), e;
}
function ye() {
var e, r, n, a;
if (e = Q, G.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = o, 0 === ae && ce(K)), 
r !== o) {
for (n = [], V.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = o, 0 === ae && ce(W)); a !== o; ) n.push(a), 
V.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = o, 0 === ae && ce(W));
n !== o ? (ee = e, e = r = q()) : (Q = e, e = s);
} else Q = e, e = s;
return e;
}
function ge() {
var e, t, r, n, a;
if (e = Q, t = [], r = Q, n = Q, ae++, (a = de()) === o && (a = he()), ae--, a === o ? n = A : (Q = n, 
n = s), n !== o && (a = _e()) !== o ? (ee = r, r = n = J(a)) : (Q = r, r = s), r !== o) for (;r !== o; ) t.push(r), 
r = Q, n = Q, ae++, (a = de()) === o && (a = he()), ae--, a === o ? n = A : (Q = n, 
n = s), n !== o && (a = _e()) !== o ? (ee = r, r = n = J(a)) : (Q = r, r = s); else t = s;
return t !== o && (ee = e, t = X(t)), e = t;
}
function _e() {
var e, r, n;
return e = Q, 92 === t.charCodeAt(Q) ? (r = S, Q++) : (r = o, 0 === ae && ce(j)), 
r !== o ? (Z.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = o, 0 === ae && ce(Y)), 
n !== o ? (ee = e, e = r = C(n)) : (Q = e, e = s)) : (Q = e, e = s), e === o && (t.length > Q ? (e = t.charAt(Q), 
Q++) : (e = o, 0 === ae && ce(T))), e;
}
function be(e) {
for (var t = [], r = 0; r < e.length; r++) void 0 === e[r].strict && t.push(e[r].text);
return t;
}
function we(e) {
for (var t = {}, r = 0; r < e.length; r++) void 0 !== e[r].strict && (t[e[r].strict] = e[r].text);
return t;
}
if ((r = i()) !== o && Q === t.length) return r;
throw r !== o && Q < t.length && ce({
type: "end",
description: "end of input"
}), ue(null, oe, ne);
}
};
}();
},
310: function(e, t, r) {
"use strict";
r.r(t), t.default = {
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
335: function(e, t, r) {
let n = r(345), o = r(495), a = r(944);
const i = r(773), s = r(907), {localCurrency: c, shopCurrency: u} = r(907), l = r(116).loadScript;
i.i18n.add("payments", r(23)("./" + s.lang + ".yml"));
e.exports = class {
constructor(e, t) {
this.orderForm = e, this.paymentMethodElem = t, document.querySelector("[data-pay-paypal-buttons]") && l({
"client-id": s.paypalClientId,
currency: u,
components: "buttons,marks"
}).then(() => {
this.initPaypalButtons().render("[data-pay-paypal-buttons]"), window.paypal.Marks().render(document.getElementById("input-paypal").parentNode.querySelector(".pay-method__paypal-marks"));
});
}
request(e) {
let t = o(e);
return t.addEventListener("loadstart", function() {
let e = this.startRequestIndication();
t.addEventListener("loadend", e);
}.bind(this)), t;
}
startRequestIndication() {
this.paymentMethodElem.classList.add("modal-overlay_light");
let e = new a({
elem: this.paymentMethodElem.querySelector('[type="submit"]'),
size: "small",
class: "",
elemClass: "button_loading"
});
return e.start(), () => {
this.paymentMethodElem.classList.remove("modal-overlay_light"), e && e.stop();
};
}
readPaymentFormValues() {
let e = {};
return [].forEach.call(this.paymentMethodElem.querySelectorAll("input,select,textarea"), function(t) {
("radio" != t.type && "checkbox" != t.type || t.checked) && (e[t.name] = t.value);
}), e;
}
readOrderDataWithPayment() {
let e = this.orderForm.getOrderData();
if (!e) return;
let t = this.readPaymentFormValues();
if (t.paymentMethod) {
if ("invoice" == t.paymentMethod) {
if (!t.invoiceCompanyName) return new n.Error(i("payments.client.specify_company_name")), 
void this.paymentMethodElem.querySelector('[name="invoiceCompanyName"]').focus();
if (document.querySelector("#invoice-agreement").checked || document.querySelector("#invoice-act").checked) {
let e = document.querySelector("#invoice-contract-head");
if (!e.dataset.prefilled && e.value == e.defaultValue) return new n.Error("Введите, пожалуйста, шапку договора/акта."), 
void e.focus();
let t = document.querySelector("#invoice-company-address");
if (!t.dataset.prefilled && t.value == t.defaultValue) return new n.Error("Введите, пожалуйста, юридический адрес."), 
void t.focus();
let r = document.querySelector("#invoice-bank-details");
if (!r.dataset.prefilled && r.value == r.defaultValue) return new n.Error("Ведите, пожалуйста, реквизиты."), 
void r.focus();
let o = document.querySelector("#invoice-document-exchange-edo");
if (o && o.checked) {
let e = document.getElementById("invoice-inn"), t = e.value.trim();
if (!t) return new n.Error("Введите ИНН, пожалуйста."), void e.focus();
if (10 != t.length && 12 != t.length || /\D/.test(t)) return new n.Error("Некорректный ИНН (должно быть 10 или 12 цифр)"), 
void e.focus();
let r = document.getElementById("invoice-kpp");
if ("" == r.value) return new n.Error("Введите КПП, пожалуйста (или 0, если его нет)."), 
void r.focus();
let o = +r.value;
if (0 != o && (o < 1e8 || o >= 1e10)) return new n.Error("Некорректный КПП (должно быть 9 цифр)"), 
void r.focus();
}
let a = document.querySelector("#invoice-document-exchange-mail");
if (a && a.checked) {
let e = {
"invoice-company-mail-index": "Индекс",
"invoice-company-mail-who": "Кому",
"invoice-company-mail-address": "Адрес"
};
for (let [t, r] of Object.entries(e)) {
let e = document.getElementById(t);
if (!e.value) return new n.Error(`Почтовый адрес: заполните поле ${r}.`), void e.focus();
}
let t = document.getElementById("invoice-company-mail-index").value;
if (t.length < 5 || t.length > 7) {
return new n.Error("Почтовый адрес: некорректный индекс (от 5 до 7 цифр)."), void document.getElementById("invoice-company-mail-index").focus();
}
}
}
}
for (let r in t) e[r] = t[r];
return e;
}
new n.Error(i("payments.client.choose_payment_method"));
}
async submit() {
let e = this.readOrderDataWithPayment();
if (e) return await this.sendPaymentRequest(e);
}
initPaypalButtons() {
return window.paypal.Buttons({
style: {
layout: "vertical",
size: "small",
color: "blue",
label: "pay",
height: 40,
tagline: !1
},
onClick: (e, t) => !!this.readOrderDataWithPayment(),
createOrder: async (e, t) => {
let r, n, o = await this.submit();
if (!o) throw new Error("Empty submitResult (must not happen, validate in onClick)");
return r = o.form, n = o.orderNumber, r.paypalOrderId;
},
onApprove: (e, t) => {
this.request({
method: "POST",
url: "/payments/paypal/capture",
json: !0,
body: {
paypalOrderId: e.orderID
}
}).addEventListener("success", r => {
let o = r.result;
if (o.id !== e.orderID) throw new Error("Result id must match order id (assertion failed)");
"COMPLETED" == o.status ? t.redirect(`${window.location.protocol}//${window.location.host}/payments/common/redirect/order/${o.orderNumber}`) : new n.Error(i("payments.client.error_start_again", {
message: `Error ${o.status} Order ${o.id}`,
email: s.ordersMail
}));
});
},
onCancel: e => {
new n.Error(i("payments.payment_failed"));
},
onError: e => {
new n.Error(i("payments.client.error_start_again", {
message: e.message,
email: s.ordersMail
}));
}
});
}
async sendPaymentRequest(e) {
let t = o({
method: "POST",
url: "/payments/common/checkout",
normalStatuses: [ 200, 403, 400, 503 ],
body: e,
noDocumentEvents: !0
}), r = this.startRequestIndication();
return new Promise((o, a) => {
t.addEventListener("success", c => {
let u;
if (403 == t.status ? u = "payments.client.error_start_again" : 503 == t.status ? u = "payments.client.purchase_error" : 400 == t.status && (u = "payments.client.maybe_purchase_error"), 
u) return new n.Error(i(u, {
message: c.result.description || c.result.message || "",
email: s.ordersMail
})), r(), void a();
let l = c.result;
if (l.form) {
if ("paypal" === e.paymentMethod) return r(), void o(l);
if (l.form.redirect) window.location.href = l.form.redirect; else {
let e = document.createElement("div");
e.hidden = !0, e.innerHTML = l.form, document.body.appendChild(e), e.firstChild.submit();
}
} else r(), new n.Error(i("payments.client.purchase_error", {
email: s.ordersMail
}));
}), t.addEventListener("fail", e => {
new n.Error(e.reason), r(), a();
});
});
}
};
},
345: function(e, t, r) {
"use strict";
r.r(t), r.d(t, {
Error: function() {
return l;
},
Info: function() {
return s;
},
Success: function() {
return u;
},
Warning: function() {
return c;
},
init: function() {
return a;
}
});
let n = r(102);
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
function a(e) {
window.notificationManager || (window.notificationManager = new o(e));
}
class i {
constructor(e, t, r) {
let n = `<div class="notification notification_popup notification_${t}">\n    <div class="notification__content">${e}</div>\n    <button title="Закрыть" class="notification__close"></button></div>`;
switch (document.body.insertAdjacentHTML("beforeEnd", n), this.elem = document.body.lastElementChild, 
r) {
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
this.timeout = r;
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
n.delegateMixin(i.prototype);
class s extends i {
constructor(e, t) {
super(e, "info", t);
}
}
class c extends i {
constructor(e, t) {
super(e, "warning", t);
}
}
class u extends i {
constructor(e, t) {
super(e, "success", t);
}
}
class l extends i {
constructor(e, t) {
super(e, "error", t);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
},
391: function(e, t) {
"use strict";
function r(e) {
var t = "https://www.paypal.com/sdk/js";
e.sdkBaseURL && (t = e.sdkBaseURL, delete e.sdkBaseURL), function(e) {
var t = e["merchant-id"], r = e["data-merchant-id"], n = "", o = "";
Array.isArray(t) ? t.length > 1 ? (n = "*", o = t.toString()) : n = t.toString() : "string" == typeof t && t.length > 0 ? n = t : "string" == typeof r && r.length > 0 && (n = "*", 
o = r), e["merchant-id"] = n, e["data-merchant-id"] = o;
}(e);
var r = Object.keys(e).filter(function(t) {
return void 0 !== e[t] && null !== e[t] && "" !== e[t];
}).reduce(function(t, r) {
var n = e[r].toString();
return "data-" === r.substring(0, 5) ? t.dataAttributes[r] = n : t.queryParams[r] = n, 
t;
}, {
queryParams: {},
dataAttributes: {}
}), o = r.queryParams, a = r.dataAttributes;
return {
url: "".concat(t, "?").concat(n(o)),
dataAttributes: a
};
}
function n(e) {
var t = "";
return Object.keys(e).forEach(function(r) {
0 !== t.length && (t += "&"), t += r + "=" + e[r];
}), t;
}
function o(e, t) {
void 0 === t && (t = {});
var r = document.createElement("script");
return r.src = e, Object.keys(t).forEach(function(e) {
r.setAttribute(e, t[e]), "data-csp-nonce" === e && r.setAttribute("nonce", t["data-csp-nonce"]);
}), r;
}
function a(e, t) {
void 0 === t && (t = i()), c(e, t);
var r = e.url, n = e.attributes;
if ("string" != typeof r || 0 === r.length) throw new Error("Invalid url.");
if (void 0 !== n && "object" != typeof n) throw new Error("Expected attributes to be an object.");
return new t(function(e, t) {
if ("undefined" == typeof document) return e();
!function(e) {
var t = e.onSuccess, r = e.onError, n = o(e.url, e.attributes);
n.onerror = r, n.onload = t, document.head.insertBefore(n, document.head.firstElementChild);
}({
url: r,
attributes: n,
onSuccess: function() {
return e();
},
onError: function() {
var e = new Error('The script "'.concat(r, '" failed to load.'));
return window.fetch ? fetch(r).then(function(r) {
return 200 === r.status && t(e), r.text();
}).then(function(e) {
var r = function(e) {
var t = e.split("/* Original Error:")[1];
return t ? t.replace(/\n/g, "").replace("*/", "").trim() : e;
}(e);
t(new Error(r));
}).catch(function(e) {
t(e);
}) : t(e);
}
});
});
}
function i() {
if ("undefined" == typeof Promise) throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");
return Promise;
}
function s(e) {
return window[e];
}
function c(e, t) {
if ("object" != typeof e || null === e) throw new Error("Expected an options object.");
if (void 0 !== t && "function" != typeof t) throw new Error("Expected PromisePonyfill to be a function.");
}
t.loadScript = function(e, t) {
if (void 0 === t && (t = i()), c(e, t), "undefined" == typeof document) return t.resolve(null);
var n = r(e), u = n.url, l = n.dataAttributes, d = l["data-namespace"] || "paypal", p = s(d);
return function(e, t) {
var r = document.querySelector('script[src="'.concat(e, '"]'));
if (null === r) return null;
var n = o(e, t), a = r.cloneNode();
if (delete a.dataset.uidAuto, Object.keys(a.dataset).length !== Object.keys(n.dataset).length) return null;
var i = !0;
return Object.keys(a.dataset).forEach(function(e) {
a.dataset[e] !== n.dataset[e] && (i = !1);
}), i ? r : null;
}(u, l) && p ? t.resolve(p) : a({
url: u,
attributes: l
}, t).then(function() {
var e = s(d);
if (e) return e;
throw new Error("The window.".concat(d, " global variable is not available."));
});
};
},
495: function(e, t, r) {
let n = r(345), o = r(629);
const a = r(907).lang, i = r(773);
i.i18n.add("", r(205)("./" + a + ".yml")), i.i18n.add("error.network", r(188)("./" + a + ".yml")), 
document.addEventListener("xhrfail", function(e) {
new n.Error(e.reason);
}), e.exports = function(e) {
let t = new XMLHttpRequest, r = e.method || "GET", n = e.body, a = e.url;
t.open(r, a, !e.sync), t.method = r;
let s = o();
s && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", s), e.responseType && (t.responseType = e.responseType), 
"[object Object]" == {}.toString.call(n) && (t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
n = JSON.stringify(n)), e.noDocumentEvents || (t.addEventListener("loadstart", e => {
t.timeStart = Date.now();
let r = u("xhrstart", e);
document.dispatchEvent(r);
}), t.addEventListener("loadend", e => {
let t = u("xhrend", e);
document.dispatchEvent(t);
}), t.addEventListener("success", e => {
let t = u("xhrsuccess", e);
t.result = e.result, document.dispatchEvent(t);
}), t.addEventListener("fail", e => {
let t = u("xhrfail", e);
t.reason = e.reason, document.dispatchEvent(t);
})), e.raw || t.setRequestHeader("Accept", "application/json"), t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
let c = e.normalStatuses || [ 200 ];
function u(e, t) {
let r = new CustomEvent(e);
return r.originalEvent = t, r;
}
function l(e, r) {
let n = u("fail", r);
n.reason = e, t.dispatchEvent(n);
}
return t.addEventListener("error", e => {
l(i("error.network.server_connection_error"), e);
}), t.addEventListener("timeout", e => {
l(i("error.network.server_request_timeout"), e);
}), t.addEventListener("abort", e => {
l(i("error.network.request_aborted"), e);
}), t.addEventListener("load", r => {
if (!t.status) return void l(i("error.network.no_response"), r);
let n = e.responseType && "text" !== e.responseType ? t.response : t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
n = JSON.parse(n);
} catch (r) {
return void l(i("error.network.invalid_format"), r);
}
if (!c.includes(t.status)) {
return void l(n.info ? i("error.network.server_error_info", {
status: t.status,
info: n.info
}) : i("error.network.server_error", {
status: t.status
}), r);
}
!function(e, r) {
let n = u("success", r);
n.result = e, t.dispatchEvent(n);
}(n, r);
}), setTimeout(function() {
t.send(n);
}), t;
};
},
532: function(e) {
"use strict";
var t = {};
function r(e) {
var r;
return t[e] ? e : (r = e.toLowerCase().replace("_", "-"), t[r] ? r : (r = r.split("-")[0], 
t[r] ? r : null));
}
var n = /c\d+$/;
function o(e, o) {
var a = r(e);
if (!a) return -1;
if (!t[a].cFn) return 0;
var i = String(o), s = 0;
if (n.test(i)) {
var c = i.split("c");
s = +c[1], o = Math.pow(10, s) * c[0], i = String(o);
}
var u = i.indexOf(".") < 0 ? "" : i.split(".")[1], l = u.length, d = u.replace(/0+$/, "").length, p = +o, f = +i.split(".")[0], m = 0 === u.length ? 0 : +u.replace(/0+$/, "");
return t[a].cFn(p, f, l, +u, m, d, s);
}
function a(e, n) {
var o = r(e);
if (!o) return -1;
if (!t[o].oFn) return 0;
var a = String(n), i = a.indexOf(".") < 0 ? "" : a.split(".")[1], s = i.length, c = i.replace(/0+$/, "").length, u = +n, l = +a.split(".")[0], d = 0 === i.length ? 0 : +i.replace(/0+$/, "");
return t[o].oFn(u, l, s, +i, d, c, 0);
}
e.exports = function(e, n) {
var a = r(e);
return a ? t[a].c[o(a, n)] : null;
}, e.exports.indexOf = o, e.exports.forms = function(e) {
var n = r(e);
return t[n] ? t[n].c : null;
}, e.exports.ordinal = function(e, n) {
var o = r(e);
return t[o] ? t[o].o[a(o, n)] : null;
}, e.exports.ordinal.indexOf = a, e.exports.ordinal.forms = function(e) {
var n = r(e);
return t[n] ? t[n].o : null;
};
var i = [ "zero", "one", "two", "few", "many", "other" ];
function s(e) {
return i[e];
}
function c(e, r) {
var n;
for (r.c = r.c ? r.c.map(s) : [ "other" ], r.o = r.o ? r.o.map(s) : [ "other" ], 
n = 0; n < e.length; n++) t[e[n]] = r;
}
function u(e, t, r) {
return e <= r && r <= t && r % 1 == 0;
}
function l(e, t) {
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
return u(0, 1, e) ? 0 : 1;
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
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : u(3, 10, t) ? 3 : u(11, 99, t) ? 4 : 5;
}
}), c([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return l([ 1, 5, 7, 8, 9, 10 ], e) ? 0 : l([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "ast", "de", "et", "fi", "fy", "gl", "ia", "io", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 1;
}
}), c([ "az" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(e, t) {
var r = t % 10, n = t % 100, o = t % 1e3;
return l([ 1, 2, 5, 7, 8 ], r) || l([ 20, 50, 70, 80 ], n) ? 0 : l([ 3, 4 ], r) || l([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], o) ? 1 : 0 === t || 6 === r || l([ 40, 60, 90 ], n) ? 2 : 3;
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
var t = e % 10, r = e % 100;
return 1 === t && 11 !== r ? 0 : u(2, 4, t) && !u(12, 14, r) ? 1 : 0 === t || u(5, 9, t) || u(11, 14, r) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
var t = e % 100;
return l([ 2, 3 ], e % 10) && !l([ 12, 13 ], t) ? 0 : 1;
}
}), c([ "bm", "bo", "dz", "hnj", "id", "ig", "ii", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "osa", "sah", "ses", "sg", "su", "th", "to", "tpi", "und", "wo", "yo", "yue", "zh" ], {}), 
c([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, r = e % 100, n = e % 1e6;
return 1 !== t || l([ 11, 71, 91 ], r) ? 2 !== t || l([ 12, 72, 92 ], r) ? !u(3, 4, t) && 9 !== t || u(10, 19, r) || u(70, 79, r) || u(90, 99, r) ? 0 !== e && 0 === n ? 3 : 4 : 2 : 1 : 0;
}
}), c([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, r, n) {
var o = t % 10, a = t % 100, i = n % 10, s = n % 100;
return 0 === r && 1 === o && 11 !== a || 1 === i && 11 !== s ? 0 : 0 === r && u(2, 4, o) && !u(12, 14, a) || u(2, 4, i) && !u(12, 14, s) ? 1 : 2;
}
}), c([ "ca" ], {
c: [ 1, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return l([ 1, 3 ], e) ? 0 : 2 === e ? 1 : 4 === e ? 2 : 3;
}
}), c([ "ceb" ], {
c: [ 1, 5 ],
cFn: function(e, t, r, n) {
var o = t % 10, a = n % 10;
return 0 === r && l([ 1, 2, 3 ], t) || 0 === r && !l([ 4, 6, 9 ], o) || 0 !== r && !l([ 4, 6, 9 ], a) ? 0 : 1;
}
}), c([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : u(2, 4, t) && 0 === r ? 1 : 0 !== r ? 2 : 3;
}
}), c([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 === e ? 3 : 6 === e ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(e) {
return l([ 0, 7, 8, 9 ], e) ? 0 : 1 === e ? 1 : 2 === e ? 2 : l([ 3, 4 ], e) ? 3 : l([ 5, 6 ], e) ? 4 : 5;
}
}), c([ "da" ], {
c: [ 1, 5 ],
cFn: function(e, t, r, n, o) {
return 1 === e || 0 !== o && l([ 0, 1 ], t) ? 0 : 1;
}
}), c([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, r, n) {
var o = t % 100, a = n % 100;
return 0 === r && 1 === o || 1 === a ? 0 : 0 === r && 2 === o || 2 === a ? 1 : 0 === r && u(3, 4, o) || u(3, 4, a) ? 2 : 3;
}
}), c([ "en" ], {
c: [ 1, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
var t = e % 10, r = e % 100;
return 1 === t && 11 !== r ? 0 : 2 === t && 12 !== r ? 1 : 3 === t && 13 !== r ? 2 : 3;
}
}), c([ "es" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, r, n, o, a, i) {
return 1 === e ? 0 : 0 === i && 0 !== t && 0 === t % 1e6 && 0 === r || !u(0, 5, i) ? 1 : 2;
}
}), c([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return l([ 0, 1 ], t) ? 0 : 1;
}
}), c([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(e, t, r, n) {
var o = t % 10, a = n % 10;
return 0 === r && l([ 1, 2, 3 ], t) || 0 === r && !l([ 4, 6, 9 ], o) || 0 !== r && !l([ 4, 6, 9 ], a) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "fr" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, r, n, o, a, i) {
var s = t % 1e6;
return l([ 0, 1 ], t) ? 0 : 0 === i && 0 !== t && 0 === s && 0 === r || !u(0, 5, i) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : u(3, 6, e) ? 2 : u(7, 10, e) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e) {
return l([ 1, 11 ], e) ? 0 : l([ 2, 12 ], e) ? 1 : u(3, 10, e) || u(13, 19, e) ? 2 : 3;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return l([ 1, 11 ], e) ? 0 : l([ 2, 12 ], e) ? 1 : l([ 3, 13 ], e) ? 2 : 3;
}
}), c([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : l([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e, t, r) {
var n = t % 10;
return 0 === r && 1 === n ? 0 : 0 === r && 2 === n ? 1 : 0 === r && l([ 0, 20, 40, 60, 80 ], t % 100) ? 2 : 0 !== r ? 3 : 4;
}
}), c([ "he" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(e, t, r) {
var n = e % 10;
return 1 === t && 0 === r ? 0 : 2 === t && 0 === r ? 1 : 0 !== r || u(0, 10, e) || 0 !== n ? 3 : 2;
}
}), c([ "hu" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return l([ 1, 5 ], e) ? 0 : 1;
}
}), c([ "hy" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return l([ 0, 1 ], t) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "is" ], {
c: [ 1, 5 ],
cFn: function(e, t, r, n, o) {
return 0 === o && 1 === t % 10 && 11 !== t % 100 || 0 !== o ? 0 : 1;
}
}), c([ "it" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, r, n, o, a, i) {
return 1 === t && 0 === r ? 0 : 0 === i && 0 !== t && 0 === t % 1e6 && 0 === r || !u(0, 5, i) ? 1 : 2;
},
o: [ 4, 5 ],
oFn: function(e) {
return l([ 11, 8, 80, 800 ], e) ? 0 : 1;
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
var r = t % 100;
return 1 === t ? 0 : 0 === t || u(2, 20, r) || 40 === r || 60 === r || 80 === r ? 1 : 2;
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
var t = e % 100, r = e % 1e3, n = e % 1e5, o = e % 1e6;
return 0 === e ? 0 : 1 === e ? 1 : l([ 2, 22, 42, 62, 82 ], t) || 0 === r && (u(1e3, 2e4, n) || 4e4 === n || 6e4 === n || 8e4 === n) || 0 !== e && 1e5 === o ? 2 : l([ 3, 23, 43, 63, 83 ], t) ? 3 : 1 !== e && l([ 1, 21, 41, 61, 81 ], t) ? 4 : 5;
},
o: [ 1, 4, 5 ],
oFn: function(e) {
var t = e % 100;
return u(1, 4, e) || u(1, 4, t) || u(21, 24, t) || u(41, 44, t) || u(61, 64, t) || u(81, 84, t) ? 0 : 5 === e || 5 === t ? 1 : 2;
}
}), c([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t) {
return 0 === e ? 0 : l([ 0, 1 ], t) && 0 !== e ? 1 : 2;
}
}), c([ "lij" ], {
c: [ 1, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
return 11 === e || 8 === e || u(80, 89, e) || u(800, 899, e) ? 0 : 1;
}
}), c([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, r, n) {
var o = e % 10, a = e % 100;
return 1 !== o || u(11, 19, a) ? u(2, 9, o) && !u(11, 19, a) ? 1 : 0 !== n ? 2 : 3 : 0;
}
}), c([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t, r, n) {
var o = e % 10, a = e % 100, i = n % 100, s = n % 10;
return 0 === o || u(11, 19, a) || 2 === r && u(11, 19, i) ? 0 : 1 === o && 11 !== a || 2 === r && 1 === s && 11 !== i || 2 !== r && 1 === s ? 1 : 2;
}
}), c([ "mk" ], {
c: [ 1, 5 ],
cFn: function(e, t, r, n) {
return 0 === r && 1 === t % 10 && 11 !== t % 100 || 1 === n % 10 && 11 !== n % 100 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(e, t) {
var r = t % 10, n = t % 100;
return 1 === r && 11 !== n ? 0 : 2 === r && 12 !== n ? 1 : l([ 7, 8 ], r) && !l([ 17, 18 ], n) ? 2 : 3;
}
}), c([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 0 !== r || 0 === e || u(2, 19, e % 100) ? 1 : 2;
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
return 1 === e ? 0 : l([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 3;
}
}), c([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 1 === e ? 0 : 0 === e || u(2, 10, t) ? 1 : u(11, 19, t) ? 2 : 3;
}
}), c([ "ne" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return u(1, 4, e) ? 0 : 1;
}
}), c([ "or" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e || 5 === e || u(7, 9, e) ? 0 : l([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), c([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, r) {
var n = t % 10, o = t % 100;
return 1 === t && 0 === r ? 0 : 0 === r && u(2, 4, n) && !u(12, 14, o) ? 1 : 0 === r && 1 !== t && u(0, 1, n) || 0 === r && u(5, 9, n) || 0 === r && u(12, 14, o) ? 2 : 3;
}
}), c([ "pt" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, r, n, o, a, i) {
var s = t % 1e6;
return u(0, 1, t) ? 0 : 0 === i && 0 !== t && 0 === s && 0 === r || !u(0, 5, i) ? 1 : 2;
}
}), c([ "pt-pt" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, r, n, o, a, i) {
return 1 === t && 0 === r ? 0 : 0 === i && 0 !== t && 0 === t % 1e6 && 0 === r || !u(0, 5, i) ? 1 : 2;
}
}), c([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, r) {
var n = t % 10, o = t % 100;
return 0 === r && 1 === n && 11 !== o ? 0 : 0 === r && u(2, 4, n) && !u(12, 14, o) ? 1 : 0 === r && 0 === n || 0 === r && u(5, 9, n) || 0 === r && u(11, 14, o) ? 2 : 3;
}
}), c([ "sc", "scn" ], {
c: [ 1, 5 ],
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
return l([ 11, 8, 80, 800 ], e) ? 0 : 1;
}
}), c([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : u(2, 10, e) ? 1 : 2;
}
}), c([ "si" ], {
c: [ 1, 5 ],
cFn: function(e, t, r, n) {
return l([ 0, 1 ], e) || 0 === t && 1 === n ? 0 : 1;
}
}), c([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, r) {
var n = t % 100;
return 0 === r && 1 === n ? 0 : 0 === r && 2 === n ? 1 : 0 === r && u(3, 4, n) || 0 !== r ? 2 : 3;
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
cFn: function(e, t, r) {
return 1 === t && 0 === r ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
var t = e % 100;
return l([ 1, 2 ], e % 10) && !l([ 11, 12 ], t) ? 0 : 1;
}
}), c([ "tk" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 3, 5 ],
oFn: function(e) {
return l([ 6, 9 ], e % 10) || 10 === e ? 0 : 1;
}
}), c([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(e) {
return u(0, 1, e) || u(11, 99, e) ? 0 : 1;
}
}), c([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, r) {
var n = t % 10, o = t % 100;
return 0 === r && 1 === n && 11 !== o ? 0 : 0 === r && u(2, 4, n) && !u(12, 14, o) ? 1 : 0 === r && 0 === n || 0 === r && u(5, 9, n) || 0 === r && u(11, 14, o) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
return 3 === e % 10 && 13 !== e % 100 ? 0 : 1;
}
});
},
552: function(e, t, r) {
"use strict";
r.r(t), t.default = {
client: {
choose_payment_method: "Seleccione el método de pago, por favor",
specify_company_name: "Especifique el nombre de la empresa",
error_start_again: "<p>#{message}</p><p>Por favor, intente la compra nuevamente.</p> <p>Si cree que hay un error en el server, contacte con <a href='mailto:#{email}'> servicio al cliente</a>.</p>\n",
maybe_purchase_error: "<p>#{message}</p><p>Si cree que ocurrió un error, por favor contacte con <a href='mailto:#{email}'>servicio al cliente</a>.</p>\n",
purchase_error: "Ocurrió un error, por favor contacte con <a href='mailto:#{email}'>servicio al cliente</a>.\n"
},
currency: "USD",
payment_for: "Pago por",
payment: "Pago",
pay: "Pagar",
payment_received: "Pago recibido",
payment_processing: "Proceso pendiente",
payment_received_processing: "Pago recibido, procesando",
payment_error: "Ha ocurrido un error",
payment_error_accent: "Un error ha ocurrido durante el proceso de pago.",
payment_failed: "El pago falló",
payment_failed_try_again: "Pago fallido, por favor intente de nuevo",
payment_success_description: "<p>Le enviaremos un email a <b>#{orderEmail}</b>.</p><p>Si tiene alguna pregunta, por favor envíela a #{mailLink}.</p>",
order_canceled: "Orden cancelada",
contact_payment: "<p>Por favor envíe todas las preguntas concernientes al pago a #{mailLink}.</p>",
contact_order: "<p>Por favor envíe todas las preguntas concernientes a la orden a #{mailLink}.</p>",
thanks: "¡Gracias por la orden!",
contact_support: "<p>Por favor, contacte a soporte en #{mailLink}.</p>",
payment_usd: "pago en dólares de EE.UU.",
profile_order_link: "<p>Información de la orden disponible <a href='#{link}'>en su perfil</a>.</p>"
};
},
629: function(e) {
e.exports = function() {
let e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
},
679: function(e, t, r) {
"use strict";
var n = r(304), o = r(532);
function a(e) {
return Object.prototype.toString.call(e);
}
function i(e) {
return "[object String]" === a(e);
}
function s(e) {
return !isNaN(e) && isFinite(e);
}
function c(e) {
return !0 === e || !1 === e;
}
function u(e) {
return "[object Object]" === a(e);
}
var l = Array.isArray || function(e) {
return "[object Array]" === a(e);
}, d = Array.prototype.forEach;
function p(e, t, r) {
if (null !== e) if (d && e.forEach === d) e.forEach(t, r); else if (e.length === +e.length) for (var n = 0, o = e.length; n < o; n += 1) t.call(r, e[n], n, e); else for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(r, e[a], a, e);
}
var f = /%[sdj%]/g;
function m(e) {
var t = 1, r = arguments, n = r.length;
return String(e).replace(f, function(e) {
if ("%%" === e) return "%";
if (t >= n) return e;
switch (e) {
case "%s":
return String(r[t++]);

case "%d":
return Number(r[t++]);

case "%j":
return JSON.stringify(r[t++]);

default:
return e;
}
});
}
function h(e) {
var t = {};
return p(e || {}, function(e, r) {
e && "object" == typeof e ? p(h(e), function(e, n) {
t[r + "." + n] = e;
}) : t[r] = e;
}), t;
}
var v = "#@$";
function y(e, t) {
return e + v + t;
}
function g(e, t, r) {
var n = y(t, r), o = e._storage;
if (o.hasOwnProperty(n)) return n;
if (t === e._defaultLocale) return null;
var a = e._fallbacks_cache;
if (a.hasOwnProperty(n)) return a[n];
for (var i, s = e._fallbacks[t] || [ e._defaultLocale ], c = 0, u = s.length; c < u; c++) if (i = y(s[c], r), 
o.hasOwnProperty(i)) return a[n] = i, a[n];
return a[n] = null, null;
}
function _(e, t, r) {
var n = o.indexOf(e, t);
return -1 === n ? m('[pluralizer for "%s" locale not found]', e) : void 0 === r[n] ? m('[plural form %d ("%s") not found in translation]', n, o.forms(e)[n]) : r[n];
}
function b(e) {
if (!(this instanceof b)) return new b(e);
this._defaultLocale = e ? String(e) : "en", this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
b.prototype.addPhrase = function(e, t, r, n) {
var o, a = this;
if (c(n)) o = n ? 1 / 0 : 0; else if (s(n)) {
if ((o = Math.floor(n)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else o = 1 / 0;
if (u(r) && o > 0) return p(r, function(r, n) {
a.addPhrase(e, (t ? t + "." : "") + n, r, o - 1);
}), this;
if (i(r)) this._storage[y(e, t)] = {
translation: r,
locale: e,
raw: !1
}; else {
if (!(l(r) || s(r) || c(r) || 0 === o && u(r))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[y(e, t)] = {
translation: r,
locale: e,
raw: !0
};
}
return a._fallbacks_cache = {}, this;
}, b.prototype.setFallback = function(e, t) {
var r = this._defaultLocale;
if (r === e) throw new Error("Default locale can't have fallbacks");
var n = l(t) ? t.slice() : [ t ];
return n[n.length - 1] !== r && n.push(r), this._fallbacks[e] = n, this._fallbacks_cache = {}, 
this;
};
var w = /#\{|\(\(|\\\\/;
b.prototype.translate = function(e, t, r) {
var o, c = g(this, e, t);
return c ? (o = this._storage[c]).raw ? o.translation : (o.hasOwnProperty("compiled") || (o.compiled = function(e, t, r) {
var o, a, i, s, c, u;
return w.test(t) ? 1 === (o = n.parse(t)).length && "literal" === o[0].type ? o[0].text : (e._plurals_cache[r] || (e._plurals_cache[r] = new b(r)), 
u = e._plurals_cache[r], (a = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
a.push("params = flatten(params);"), p(o, function(e) {
if ("literal" !== e.type) {
if ("variable" === e.type) return i = e.anchor, void a.push(m('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', i, i, i));
if ("plural" !== e.type) throw new Error("Unknown node type");
i = e.anchor, s = {}, p(e.strict, function(t, o) {
var a = n.parse(t);
if (1 === a.length && "literal" === a[0].type) return s[o] = !1, void (e.strict[o] = a[0].text);
s[o] = !0, u.hasPhrase(r, t, !0) || u.addPhrase(r, t, t);
}), c = {}, p(e.forms, function(t, o) {
var a, i = n.parse(t);
if (1 === i.length && "literal" === i[0].type) return a = i[0].text, e.forms[o] = a, 
void (c[a] = !1);
c[t] = !0, u.hasPhrase(r, t, !0) || u.addPhrase(r, t, t);
}), a.push(m("loc = %j;", r)), a.push(m("loc_plzr = %j;", r.split(/[-_]/)[0])), 
a.push(m("anchor = params[%j];", i)), a.push(m("cache = this._plurals_cache[loc];")), 
a.push(m("strict = %j;", e.strict)), a.push(m("strict_exec = %j;", s)), a.push(m("forms = %j;", e.forms)), 
a.push(m("forms_exec = %j;", c)), a.push("if (+(anchor) != anchor) {"), a.push(m('  str += "[invalid plurals amount: %s(" + anchor + ")]";', i)), 
a.push("} else {"), a.push("  if (strict[anchor] !== undefined) {"), a.push("    plrl = strict[anchor];"), 
a.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), a.push("  } else {"), 
a.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), a.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
a.push("  }"), a.push("}");
} else a.push(m("str += %j;", e.text));
}), a.push("return str;"), new Function("params", "flatten", "pluralizer", a.join("\n"))) : t;
}(this, o.translation, o.locale)), "[object Function]" !== a(o.compiled) ? o.compiled : ((s(r) || i(r)) && (r = {
count: r,
value: r
}), o.compiled.call(this, r, h, _))) : e + ": No translation for [" + t + "]";
}, b.prototype.hasPhrase = function(e, t, r) {
return r ? this._storage.hasOwnProperty(y(e, t)) : !!g(this, e, t);
}, b.prototype.getLocale = function(e, t, r) {
if (r) return this._storage.hasOwnProperty(y(e, t)) ? e : null;
var n = g(this, e, t);
return n ? n.split(v, 2)[0] : null;
}, b.prototype.t = b.prototype.translate, b.prototype.stringify = function(e) {
var t = this, r = {};
p(this._storage, function(e, t) {
r[t.split(v)[1]] = !0;
});
var n = {};
p(r, function(r, o) {
var a = g(t, e, o);
if (a) {
var i = t._storage[a].locale;
n[i] || (n[i] = {}), n[i][o] = t._storage[a].translation;
}
});
var o = {
fallback: {},
locales: n
}, a = (t._fallbacks[e] || []).slice(0, -1);
return a.length && (o.fallback[e] = a), JSON.stringify(o);
}, b.prototype.load = function(e) {
var t = this;
return i(e) && (e = JSON.parse(e)), p(e.locales, function(e, r) {
p(e, function(e, n) {
t.addPhrase(r, n, e, 0);
});
}), p(e.fallback, function(e, r) {
t.setFallback(r, e);
}), this;
}, e.exports = b;
},
773: function(e, t, r) {
"use strict";
const n = new (r(679))("en");
let o = console.error;
function a(e) {
if (!n.hasPhrase(i, e)) {
!1 && o("No such phrase", e);
}
return n.t(i, ...arguments);
}
e.exports = a;
const i = r(907).lang;
"en" !== i && n.setFallback(i, "en"), n.add = (...e) => (e = e.map(e => e.__esModule ? e.default : e), 
n.addPhrase(i, ...e)), a.i18n = n;
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
},
986: function(e, t, r) {
var n = {
"./es.yml": 209
};
function o(e) {
var t = a(e);
return r(t);
}
function a(e) {
if (!r.o(n, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return n[e];
}
o.keys = function() {
return Object.keys(n);
}, o.resolve = a, e.exports = o, o.id = 986;
},
996: function(e, t, r) {
r(495);
let n = r(345), o = r(102), a = r(223).FormPayment;
r(907);
const i = r(773), s = r(907).lang;
i.i18n.add("ebook", r(986)("./" + s + ".yml"));
class c {
constructor(e) {
this.elem = e.elem, this.product = "ebook", this.elem.addEventListener("submit", e => this.onSubmit(e)), 
this.delegate("[data-order-payment-change]", "click", function(e) {
e.preventDefault(), this.elem.querySelector("[data-order-form-step-payment]").style.display = "block", 
this.elem.querySelector("[data-order-form-step-confirm]").style.display = "none", 
this.elem.querySelector("[data-order-form-step-receipt]").style.display = "none";
}), this.delegate(".new-complex-form__extract .extract__item", "click", function(e) {
e.delegateTarget.querySelector('[type="radio"]').checked = !0;
}), this.elem.addEventListener("change", e => this.onChange(e)), this.formPayment = new a(this, this.elem), 
this.showHidePaypalButtons();
}
onSubmit(e) {
e.preventDefault(), this.formPayment.submit();
}
onChange(e) {
this.showHidePaypalButtons();
}
showHidePaypalButtons() {
document.querySelector("#input-paypal") && (document.querySelector("#input-paypal").checked ? (document.querySelector("[data-pay-paypal-buttons]").style.display = "block", 
document.querySelector("[data-pay-regular-buttons]").style.display = "none") : (document.querySelector("[data-pay-paypal-buttons]").style.display = "none", 
document.querySelector("[data-pay-regular-buttons]").style.display = "block"));
}
getOrderData() {
let e = {};
if (window.order) e.orderNumber = window.order.number, e.amount = window.order.amount, 
e.title = window.order.title, e.email = window.order.email; else {
let t = this.elem.querySelector('input[name="orderTemplate"]:checked');
e.orderTemplate = t.value, e.amount = t.dataset.price, e.title = t.dataset.title;
}
if (this.elem.elements.email) {
if (!this.elem.elements.email.value) return new n.Error(i("ebook.client.enter_email")), 
this.elem.elements.email.scrollIntoView(), setTimeout(function() {
window.scrollBy(0, -200);
}, 0), void this.elem.elements.email.focus();
e.email = this.elem.elements.email.value;
}
return e.email || (e.email = window.currentUser.email), e;
}
}
o.delegateMixin(c.prototype), e.exports = c;
}
}, t = {};
function r(n) {
var o = t[n];
if (void 0 !== o) return o.exports;
var a = t[n] = {
exports: {}
};
return e[n](a, a.exports, r), a.exports;
}
r.d = function(e, t) {
for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
enumerable: !0,
get: t[n]
});
}, r.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, r.r = function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
};
var n = {};
!function() {
let e = r(996);
!function() {
let t = document.querySelector("[data-order-form]");
t && new e({
elem: t
});
}();
}(), function() {
"use strict";
r.r(n);
}(), ebook = n;
}();
//# sourceMappingURL=ebook.90a66a93d0db86a63f01.js.map