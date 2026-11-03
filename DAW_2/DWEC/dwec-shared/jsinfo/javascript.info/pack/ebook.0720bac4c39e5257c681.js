/*! For license information please see ebook.0720bac4c39e5257c681.js.LICENSE.txt */
var ebook;

!function() {
var e = {
23: function(e, t, n) {
var r = {
"./en.yml": 541
};
function o(e) {
var t = a(e);
return n(t);
}
function a(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = a, e.exports = o, o.id = 23;
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
116: function(e, t, n) {
e.exports = n(391);
},
188: function(e, t, n) {
var r = {
"./en.yml": 526
};
function o(e) {
var t = a(e);
return n(t);
}
function a(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = a, e.exports = o, o.id = 188;
},
205: function(e, t, n) {
var r = {
"./en.yml": 979
};
function o(e) {
var t = a(e);
return n(t);
}
function a(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = a, e.exports = o, o.id = 205;
},
223: function(e, t, n) {
t.FormPayment = n(335);
},
304: function(e) {
e.exports = function() {
function e(e, t, n, r, o, a) {
this.message = e, this.expected = t, this.found = n, this.offset = r, this.line = o, 
this.column = a, this.name = "SyntaxError";
}
return function(e, t) {
function n() {
this.constructor = e;
}
n.prototype = t.prototype, e.prototype = new n;
}(e, Error), {
SyntaxError: e,
parse: function(t) {
var n, r = arguments.length > 1 ? arguments[1] : {}, o = {}, a = {
start: le
}, i = le, s = o, c = "((", u = {
type: "literal",
value: "((",
description: '"(("'
}, l = "))", d = {
type: "literal",
value: "))",
description: '"))"'
}, f = null, p = function(e, t) {
return {
type: "plural",
forms: be(e),
strict: we(e),
anchor: t || "count"
};
}, h = "|", m = {
type: "literal",
value: "|",
description: '"|"'
}, y = function(e, t) {
return [ e ].concat(t);
}, v = function(e) {
return [ e ];
}, g = "=", _ = {
type: "literal",
value: "=",
description: '"="'
}, b = /^[0-9]/, w = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, k = " ", E = {
type: "literal",
value: " ",
description: '" "'
}, F = function(e, t) {
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
}, T = function(e) {
return e;
}, A = void 0, C = {
type: "any",
description: "any character"
}, q = function() {
return ie();
}, L = ":", M = {
type: "literal",
value: ":",
description: '":"'
}, I = function(e) {
return e;
}, U = "#{", D = {
type: "literal",
value: "#{",
description: '"#{"'
}, N = "}", R = {
type: "literal",
value: "}",
description: '"}"'
}, B = function(e) {
return {
type: "variable",
anchor: e
};
}, z = ".", H = {
type: "literal",
value: ".",
description: '"."'
}, $ = function() {
return ie();
}, W = /^[a-zA-Z_$]/, V = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, J = /^[a-zA-Z0-9_$]/, K = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, G = function(e) {
return e;
}, X = function(e) {
return {
type: "literal",
text: e.join("")
};
}, Y = /^[\\#()|]/, Z = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, ee = 0, te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}, re = 0, oe = [], ae = 0;
if ("startRule" in r) {
if (!(r.startRule in a)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
i = a[r.startRule];
}
function ie() {
return t.substring(ee, Q);
}
function se(e) {
return te !== e && (te > e && (te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}), function(e, n, r) {
var o, a;
for (o = n; o < r; o++) "\n" === (a = t.charAt(o)) ? (e.seenCR || e.line++, e.column = 1, 
e.seenCR = !1) : "\r" === a || "\u2028" === a || "\u2029" === a ? (e.line++, e.column = 1, 
e.seenCR = !0) : (e.column++, e.seenCR = !1);
}(ne, te, e), te = e), ne;
}
function ce(e) {
Q < re || (Q > re && (re = Q, oe = []), oe.push(e));
}
function ue(n, r, o) {
var a = se(o), i = o < t.length ? t.charAt(o) : null;
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
}(r, i), r, i, o, a.line, a.column);
}
function le() {
var e, t;
for (e = [], (t = ge()) === o && (t = de()) === o && (t = me()); t !== o; ) e.push(t), 
(t = ge()) === o && (t = de()) === o && (t = me());
return e;
}
function de() {
var e, n, r, a, i;
return e = Q, t.substr(Q, 2) === c ? (n = c, Q += 2) : (n = o, 0 === ae && ce(u)), 
n !== o && (r = fe()) !== o ? (t.substr(Q, 2) === l ? (a = l, Q += 2) : (a = o, 
0 === ae && ce(d)), a !== o ? (i = function() {
var e, n, r;
e = Q, 58 === t.charCodeAt(Q) ? (n = L, Q++) : (n = o, 0 === ae && ce(M));
n !== o && (r = ye()) !== o ? (ee = e, e = n = I(r)) : (Q = e, e = s);
return e;
}(), i === o && (i = f), i !== o ? (ee = e, e = n = p(r, i)) : (Q = e, e = s)) : (Q = e, 
e = s)) : (Q = e, e = s), e;
}
function fe() {
var e, n, r, a;
return e = Q, (n = pe()) !== o ? (124 === t.charCodeAt(Q) ? (r = h, Q++) : (r = o, 
0 === ae && ce(m)), r !== o && (a = fe()) !== o ? (ee = e, e = n = y(n, a)) : (Q = e, 
e = s)) : (Q = e, e = s), e === o && (e = Q, (n = pe()) !== o && (ee = e, n = v(n)), 
e = n), e;
}
function pe() {
var e, n, r, a, i, c;
if (e = Q, 61 === t.charCodeAt(Q) ? (n = g, Q++) : (n = o, 0 === ae && ce(_)), n !== o) {
if (r = [], b.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = o, 0 === ae && ce(w)), 
a !== o) for (;a !== o; ) r.push(a), b.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = o, 
0 === ae && ce(w)); else r = s;
if (r !== o) if (32 === t.charCodeAt(Q) ? (a = k, Q++) : (a = o, 0 === ae && ce(E)), 
a === o && (a = f), a !== o) {
if (i = [], (c = he()) !== o) for (;c !== o; ) i.push(c), c = he(); else i = s;
i !== o ? (ee = e, e = n = F(r, i)) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
} else Q = e, e = s;
if (e === o) {
if (e = Q, n = [], (r = he()) !== o) for (;r !== o; ) n.push(r), r = he(); else n = s;
n !== o && (ee = e, n = x()), e = n;
}
return e;
}
function he() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = S, Q++) : (n = o, 0 === ae && ce(j)), 
n !== o ? (P.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = o, 0 === ae && ce(O)), 
r !== o ? (ee = e, e = n = T(r)) : (Q = e, e = s)) : (Q = e, e = s), e === o && (e = Q, 
n = Q, ae++, 124 === t.charCodeAt(Q) ? (r = h, Q++) : (r = o, 0 === ae && ce(m)), 
r === o && (t.substr(Q, 2) === l ? (r = l, Q += 2) : (r = o, 0 === ae && ce(d))), 
ae--, r === o ? n = A : (Q = n, n = s), n !== o ? (t.length > Q ? (r = t.charAt(Q), 
Q++) : (r = o, 0 === ae && ce(C)), r !== o ? (ee = e, e = n = q()) : (Q = e, e = s)) : (Q = e, 
e = s)), e;
}
function me() {
var e, n, r, a;
return e = Q, t.substr(Q, 2) === U ? (n = U, Q += 2) : (n = o, 0 === ae && ce(D)), 
n !== o && (r = ye()) !== o ? (125 === t.charCodeAt(Q) ? (a = N, Q++) : (a = o, 
0 === ae && ce(R)), a !== o ? (ee = e, e = n = B(r)) : (Q = e, e = s)) : (Q = e, 
e = s), e;
}
function ye() {
var e, n, r, a;
if (e = Q, ve() !== o) if (46 === t.charCodeAt(Q) ? (n = z, Q++) : (n = o, 0 === ae && ce(H)), 
n !== o) {
if (r = [], (a = ye()) !== o) for (;a !== o; ) r.push(a), a = ye(); else r = s;
r !== o ? (ee = e, e = $()) : (Q = e, e = s);
} else Q = e, e = s; else Q = e, e = s;
return e === o && (e = ve()), e;
}
function ve() {
var e, n, r, a;
if (e = Q, W.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = o, 0 === ae && ce(V)), 
n !== o) {
for (r = [], J.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = o, 0 === ae && ce(K)); a !== o; ) r.push(a), 
J.test(t.charAt(Q)) ? (a = t.charAt(Q), Q++) : (a = o, 0 === ae && ce(K));
r !== o ? (ee = e, e = n = q()) : (Q = e, e = s);
} else Q = e, e = s;
return e;
}
function ge() {
var e, t, n, r, a;
if (e = Q, t = [], n = Q, r = Q, ae++, (a = de()) === o && (a = me()), ae--, a === o ? r = A : (Q = r, 
r = s), r !== o && (a = _e()) !== o ? (ee = n, n = r = G(a)) : (Q = n, n = s), n !== o) for (;n !== o; ) t.push(n), 
n = Q, r = Q, ae++, (a = de()) === o && (a = me()), ae--, a === o ? r = A : (Q = r, 
r = s), r !== o && (a = _e()) !== o ? (ee = n, n = r = G(a)) : (Q = n, n = s); else t = s;
return t !== o && (ee = e, t = X(t)), e = t;
}
function _e() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = S, Q++) : (n = o, 0 === ae && ce(j)), 
n !== o ? (Y.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = o, 0 === ae && ce(Z)), 
r !== o ? (ee = e, e = n = T(r)) : (Q = e, e = s)) : (Q = e, e = s), e === o && (t.length > Q ? (e = t.charAt(Q), 
Q++) : (e = o, 0 === ae && ce(C))), e;
}
function be(e) {
for (var t = [], n = 0; n < e.length; n++) void 0 === e[n].strict && t.push(e[n].text);
return t;
}
function we(e) {
for (var t = {}, n = 0; n < e.length; n++) void 0 !== e[n].strict && (t[e[n].strict] = e[n].text);
return t;
}
if ((n = i()) !== o && Q === t.length) return n;
throw n !== o && Q < t.length && ce({
type: "end",
description: "end of input"
}), ue(null, oe, re);
}
};
}();
},
335: function(e, t, n) {
let r = n(345), o = n(495), a = n(944);
const i = n(773), s = n(907), {localCurrency: c, shopCurrency: u} = n(907), l = n(116).loadScript;
i.i18n.add("payments", n(23)("./" + s.lang + ".yml"));
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
if (!t.invoiceCompanyName) return new r.Error(i("payments.client.specify_company_name")), 
void this.paymentMethodElem.querySelector('[name="invoiceCompanyName"]').focus();
if (document.querySelector("#invoice-agreement").checked || document.querySelector("#invoice-act").checked) {
let e = document.querySelector("#invoice-contract-head");
if (!e.dataset.prefilled && e.value == e.defaultValue) return new r.Error("Введите, пожалуйста, шапку договора/акта."), 
void e.focus();
let t = document.querySelector("#invoice-company-address");
if (!t.dataset.prefilled && t.value == t.defaultValue) return new r.Error("Введите, пожалуйста, юридический адрес."), 
void t.focus();
let n = document.querySelector("#invoice-bank-details");
if (!n.dataset.prefilled && n.value == n.defaultValue) return new r.Error("Ведите, пожалуйста, реквизиты."), 
void n.focus();
let o = document.querySelector("#invoice-document-exchange-edo");
if (o && o.checked) {
let e = document.getElementById("invoice-inn"), t = e.value.trim();
if (!t) return new r.Error("Введите ИНН, пожалуйста."), void e.focus();
if (10 != t.length && 12 != t.length || /\D/.test(t)) return new r.Error("Некорректный ИНН (должно быть 10 или 12 цифр)"), 
void e.focus();
let n = document.getElementById("invoice-kpp");
if ("" == n.value) return new r.Error("Введите КПП, пожалуйста (или 0, если его нет)."), 
void n.focus();
let o = +n.value;
if (0 != o && (o < 1e8 || o >= 1e10)) return new r.Error("Некорректный КПП (должно быть 9 цифр)"), 
void n.focus();
}
let a = document.querySelector("#invoice-document-exchange-mail");
if (a && a.checked) {
let e = {
"invoice-company-mail-index": "Индекс",
"invoice-company-mail-who": "Кому",
"invoice-company-mail-address": "Адрес"
};
for (let [t, n] of Object.entries(e)) {
let e = document.getElementById(t);
if (!e.value) return new r.Error(`Почтовый адрес: заполните поле ${n}.`), void e.focus();
}
let t = document.getElementById("invoice-company-mail-index").value;
if (t.length < 5 || t.length > 7) {
return new r.Error("Почтовый адрес: некорректный индекс (от 5 до 7 цифр)."), void document.getElementById("invoice-company-mail-index").focus();
}
}
}
}
for (let n in t) e[n] = t[n];
return e;
}
new r.Error(i("payments.client.choose_payment_method"));
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
let n, r, o = await this.submit();
if (!o) throw new Error("Empty submitResult (must not happen, validate in onClick)");
return n = o.form, r = o.orderNumber, n.paypalOrderId;
},
onApprove: (e, t) => {
this.request({
method: "POST",
url: "/payments/paypal/capture",
json: !0,
body: {
paypalOrderId: e.orderID
}
}).addEventListener("success", n => {
let o = n.result;
if (o.id !== e.orderID) throw new Error("Result id must match order id (assertion failed)");
"COMPLETED" == o.status ? t.redirect(`${window.location.protocol}//${window.location.host}/payments/common/redirect/order/${o.orderNumber}`) : new r.Error(i("payments.client.error_start_again", {
message: `Error ${o.status} Order ${o.id}`,
email: s.ordersMail
}));
});
},
onCancel: e => {
new r.Error(i("payments.payment_failed"));
},
onError: e => {
new r.Error(i("payments.client.error_start_again", {
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
}), n = this.startRequestIndication();
return new Promise((o, a) => {
t.addEventListener("success", c => {
let u;
if (403 == t.status ? u = "payments.client.error_start_again" : 503 == t.status ? u = "payments.client.purchase_error" : 400 == t.status && (u = "payments.client.maybe_purchase_error"), 
u) return new r.Error(i(u, {
message: c.result.description || c.result.message || "",
email: s.ordersMail
})), n(), void a();
let l = c.result;
if (l.form) {
if ("paypal" === e.paymentMethod) return n(), void o(l);
if (l.form.redirect) window.location.href = l.form.redirect; else {
let e = document.createElement("div");
e.hidden = !0, e.innerHTML = l.form, document.body.appendChild(e), e.firstChild.submit();
}
} else n(), new r.Error(i("payments.client.purchase_error", {
email: s.ordersMail
}));
}), t.addEventListener("fail", e => {
new r.Error(e.reason), n(), a();
});
});
}
};
},
345: function(e, t, n) {
"use strict";
n.r(t), n.d(t, {
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
function a(e) {
window.notificationManager || (window.notificationManager = new o(e));
}
class i {
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
r.delegateMixin(i.prototype);
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
function n(e) {
var t = "https://www.paypal.com/sdk/js";
e.sdkBaseURL && (t = e.sdkBaseURL, delete e.sdkBaseURL), function(e) {
var t = e["merchant-id"], n = e["data-merchant-id"], r = "", o = "";
Array.isArray(t) ? t.length > 1 ? (r = "*", o = t.toString()) : r = t.toString() : "string" == typeof t && t.length > 0 ? r = t : "string" == typeof n && n.length > 0 && (r = "*", 
o = n), e["merchant-id"] = r, e["data-merchant-id"] = o;
}(e);
var n = Object.keys(e).filter(function(t) {
return void 0 !== e[t] && null !== e[t] && "" !== e[t];
}).reduce(function(t, n) {
var r = e[n].toString();
return "data-" === n.substring(0, 5) ? t.dataAttributes[n] = r : t.queryParams[n] = r, 
t;
}, {
queryParams: {},
dataAttributes: {}
}), o = n.queryParams, a = n.dataAttributes;
return {
url: "".concat(t, "?").concat(r(o)),
dataAttributes: a
};
}
function r(e) {
var t = "";
return Object.keys(e).forEach(function(n) {
0 !== t.length && (t += "&"), t += n + "=" + e[n];
}), t;
}
function o(e, t) {
void 0 === t && (t = {});
var n = document.createElement("script");
return n.src = e, Object.keys(t).forEach(function(e) {
n.setAttribute(e, t[e]), "data-csp-nonce" === e && n.setAttribute("nonce", t["data-csp-nonce"]);
}), n;
}
function a(e, t) {
void 0 === t && (t = i()), c(e, t);
var n = e.url, r = e.attributes;
if ("string" != typeof n || 0 === n.length) throw new Error("Invalid url.");
if (void 0 !== r && "object" != typeof r) throw new Error("Expected attributes to be an object.");
return new t(function(e, t) {
if ("undefined" == typeof document) return e();
!function(e) {
var t = e.onSuccess, n = e.onError, r = o(e.url, e.attributes);
r.onerror = n, r.onload = t, document.head.insertBefore(r, document.head.firstElementChild);
}({
url: n,
attributes: r,
onSuccess: function() {
return e();
},
onError: function() {
var e = new Error('The script "'.concat(n, '" failed to load.'));
return window.fetch ? fetch(n).then(function(n) {
return 200 === n.status && t(e), n.text();
}).then(function(e) {
var n = function(e) {
var t = e.split("/* Original Error:")[1];
return t ? t.replace(/\n/g, "").replace("*/", "").trim() : e;
}(e);
t(new Error(n));
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
var r = n(e), u = r.url, l = r.dataAttributes, d = l["data-namespace"] || "paypal", f = s(d);
return function(e, t) {
var n = document.querySelector('script[src="'.concat(e, '"]'));
if (null === n) return null;
var r = o(e, t), a = n.cloneNode();
if (delete a.dataset.uidAuto, Object.keys(a.dataset).length !== Object.keys(r.dataset).length) return null;
var i = !0;
return Object.keys(a.dataset).forEach(function(e) {
a.dataset[e] !== r.dataset[e] && (i = !1);
}), i ? n : null;
}(u, l) && f ? t.resolve(f) : a({
url: u,
attributes: l
}, t).then(function() {
var e = s(d);
if (e) return e;
throw new Error("The window.".concat(d, " global variable is not available."));
});
};
},
495: function(e, t, n) {
let r = n(345), o = n(629);
const a = n(907).lang, i = n(773);
i.i18n.add("", n(205)("./" + a + ".yml")), i.i18n.add("error.network", n(188)("./" + a + ".yml")), 
document.addEventListener("xhrfail", function(e) {
new r.Error(e.reason);
}), e.exports = function(e) {
let t = new XMLHttpRequest, n = e.method || "GET", r = e.body, a = e.url;
t.open(n, a, !e.sync), t.method = n;
let s = o();
s && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", s), e.responseType && (t.responseType = e.responseType), 
"[object Object]" == {}.toString.call(r) && (t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
r = JSON.stringify(r)), e.noDocumentEvents || (t.addEventListener("loadstart", e => {
t.timeStart = Date.now();
let n = u("xhrstart", e);
document.dispatchEvent(n);
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
let n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function l(e, n) {
let r = u("fail", n);
r.reason = e, t.dispatchEvent(r);
}
return t.addEventListener("error", e => {
l(i("error.network.server_connection_error"), e);
}), t.addEventListener("timeout", e => {
l(i("error.network.server_request_timeout"), e);
}), t.addEventListener("abort", e => {
l(i("error.network.request_aborted"), e);
}), t.addEventListener("load", n => {
if (!t.status) return void l(i("error.network.no_response"), n);
let r = e.responseType && "text" !== e.responseType ? t.response : t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
r = JSON.parse(r);
} catch (n) {
return void l(i("error.network.invalid_format"), n);
}
if (!c.includes(t.status)) {
return void l(r.info ? i("error.network.server_error_info", {
status: t.status,
info: r.info
}) : i("error.network.server_error", {
status: t.status
}), n);
}
!function(e, n) {
let r = u("success", n);
r.result = e, t.dispatchEvent(r);
}(r, n);
}), setTimeout(function() {
t.send(r);
}), t;
};
},
526: function(e, t, n) {
"use strict";
n.r(t), t.default = {
server_connection_error: "Server connection error.",
server_request_timeout: "Server request timeout.",
request_aborted: "Request was aborted.",
no_response: "No response from server.",
server_error: "Server error (code #{status}), try again later.",
invalid_format: "Invalid response format."
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
var a = n(e);
if (!a) return -1;
if (!t[a].cFn) return 0;
var i = String(o), s = 0;
if (r.test(i)) {
var c = i.split("c");
s = +c[1], o = Math.pow(10, s) * c[0], i = String(o);
}
var u = i.indexOf(".") < 0 ? "" : i.split(".")[1], l = u.length, d = u.replace(/0+$/, "").length, f = +o, p = +i.split(".")[0], h = 0 === u.length ? 0 : +u.replace(/0+$/, "");
return t[a].cFn(f, p, l, +u, h, d, s);
}
function a(e, r) {
var o = n(e);
if (!o) return -1;
if (!t[o].oFn) return 0;
var a = String(r), i = a.indexOf(".") < 0 ? "" : a.split(".")[1], s = i.length, c = i.replace(/0+$/, "").length, u = +r, l = +a.split(".")[0], d = 0 === i.length ? 0 : +i.replace(/0+$/, "");
return t[o].oFn(u, l, s, +i, d, c, 0);
}
e.exports = function(e, r) {
var a = n(e);
return a ? t[a].c[o(a, r)] : null;
}, e.exports.indexOf = o, e.exports.forms = function(e) {
var r = n(e);
return t[r] ? t[r].c : null;
}, e.exports.ordinal = function(e, r) {
var o = n(e);
return t[o] ? t[o].o[a(o, r)] : null;
}, e.exports.ordinal.indexOf = a, e.exports.ordinal.forms = function(e) {
var r = n(e);
return t[r] ? t[r].o : null;
};
var i = [ "zero", "one", "two", "few", "many", "other" ];
function s(e) {
return i[e];
}
function c(e, n) {
var r;
for (n.c = n.c ? n.c.map(s) : [ "other" ], n.o = n.o ? n.o.map(s) : [ "other" ], 
r = 0; r < e.length; r++) t[e[r]] = n;
}
function u(e, t, n) {
return e <= n && n <= t && n % 1 == 0;
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
return l([ 1, 2, 5, 7, 8 ], n) || l([ 20, 50, 70, 80 ], r) ? 0 : l([ 3, 4 ], n) || l([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], o) ? 1 : 0 === t || 6 === n || l([ 40, 60, 90 ], r) ? 2 : 3;
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
return 1 === t && 11 !== n ? 0 : u(2, 4, t) && !u(12, 14, n) ? 1 : 0 === t || u(5, 9, t) || u(11, 14, n) ? 2 : 3;
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
var t = e % 10, n = e % 100, r = e % 1e6;
return 1 !== t || l([ 11, 71, 91 ], n) ? 2 !== t || l([ 12, 72, 92 ], n) ? !u(3, 4, t) && 9 !== t || u(10, 19, n) || u(70, 79, n) || u(90, 99, n) ? 0 !== e && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), c([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n, r) {
var o = t % 10, a = t % 100, i = r % 10, s = r % 100;
return 0 === n && 1 === o && 11 !== a || 1 === i && 11 !== s ? 0 : 0 === n && u(2, 4, o) && !u(12, 14, a) || u(2, 4, i) && !u(12, 14, s) ? 1 : 2;
}
}), c([ "ca" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return l([ 1, 3 ], e) ? 0 : 2 === e ? 1 : 4 === e ? 2 : 3;
}
}), c([ "ceb" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var o = t % 10, a = r % 10;
return 0 === n && l([ 1, 2, 3 ], t) || 0 === n && !l([ 4, 6, 9 ], o) || 0 !== n && !l([ 4, 6, 9 ], a) ? 0 : 1;
}
}), c([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : u(2, 4, t) && 0 === n ? 1 : 0 !== n ? 2 : 3;
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
cFn: function(e, t, n, r, o) {
return 1 === e || 0 !== o && l([ 0, 1 ], t) ? 0 : 1;
}
}), c([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n, r) {
var o = t % 100, a = r % 100;
return 0 === n && 1 === o || 1 === a ? 0 : 0 === n && 2 === o || 2 === a ? 1 : 0 === n && u(3, 4, o) || u(3, 4, a) ? 2 : 3;
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
cFn: function(e, t, n, r, o, a, i) {
return 1 === e ? 0 : 0 === i && 0 !== t && 0 === t % 1e6 && 0 === n || !u(0, 5, i) ? 1 : 2;
}
}), c([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return l([ 0, 1 ], t) ? 0 : 1;
}
}), c([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var o = t % 10, a = r % 10;
return 0 === n && l([ 1, 2, 3 ], t) || 0 === n && !l([ 4, 6, 9 ], o) || 0 !== n && !l([ 4, 6, 9 ], a) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "fr" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, o, a, i) {
var s = t % 1e6;
return l([ 0, 1 ], t) ? 0 : 0 === i && 0 !== t && 0 === s && 0 === n || !u(0, 5, i) ? 1 : 2;
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
cFn: function(e, t, n) {
var r = t % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && l([ 0, 20, 40, 60, 80 ], t % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), c([ "he" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(e, t, n) {
var r = e % 10;
return 1 === t && 0 === n ? 0 : 2 === t && 0 === n ? 1 : 0 !== n || u(0, 10, e) || 0 !== r ? 3 : 2;
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
cFn: function(e, t, n, r, o) {
return 0 === o && 1 === t % 10 && 11 !== t % 100 || 0 !== o ? 0 : 1;
}
}), c([ "it" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, o, a, i) {
return 1 === t && 0 === n ? 0 : 0 === i && 0 !== t && 0 === t % 1e6 && 0 === n || !u(0, 5, i) ? 1 : 2;
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
var n = t % 100;
return 1 === t ? 0 : 0 === t || u(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
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
return 0 === e ? 0 : 1 === e ? 1 : l([ 2, 22, 42, 62, 82 ], t) || 0 === n && (u(1e3, 2e4, r) || 4e4 === r || 6e4 === r || 8e4 === r) || 0 !== e && 1e5 === o ? 2 : l([ 3, 23, 43, 63, 83 ], t) ? 3 : 1 !== e && l([ 1, 21, 41, 61, 81 ], t) ? 4 : 5;
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
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
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
cFn: function(e, t, n, r) {
var o = e % 10, a = e % 100;
return 1 !== o || u(11, 19, a) ? u(2, 9, o) && !u(11, 19, a) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), c([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t, n, r) {
var o = e % 10, a = e % 100, i = r % 100, s = r % 10;
return 0 === o || u(11, 19, a) || 2 === n && u(11, 19, i) ? 0 : 1 === o && 11 !== a || 2 === n && 1 === s && 11 !== i || 2 !== n && 1 === s ? 1 : 2;
}
}), c([ "mk" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return 0 === n && 1 === t % 10 && 11 !== t % 100 || 1 === r % 10 && 11 !== r % 100 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : l([ 7, 8 ], n) && !l([ 17, 18 ], r) ? 2 : 3;
}
}), c([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 0 !== n || 0 === e || u(2, 19, e % 100) ? 1 : 2;
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
cFn: function(e, t, n) {
var r = t % 10, o = t % 100;
return 1 === t && 0 === n ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, o) ? 1 : 0 === n && 1 !== t && u(0, 1, r) || 0 === n && u(5, 9, r) || 0 === n && u(12, 14, o) ? 2 : 3;
}
}), c([ "pt" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, o, a, i) {
var s = t % 1e6;
return u(0, 1, t) ? 0 : 0 === i && 0 !== t && 0 === s && 0 === n || !u(0, 5, i) ? 1 : 2;
}
}), c([ "pt-pt" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, o, a, i) {
return 1 === t && 0 === n ? 0 : 0 === i && 0 !== t && 0 === t % 1e6 && 0 === n || !u(0, 5, i) ? 1 : 2;
}
}), c([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, o = t % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && u(5, 9, r) || 0 === n && u(11, 14, o) ? 2 : 3;
}
}), c([ "sc", "scn" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
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
cFn: function(e, t, n, r) {
return l([ 0, 1 ], e) || 0 === t && 1 === r ? 0 : 1;
}
}), c([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n) {
var r = t % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && u(3, 4, r) || 0 !== n ? 2 : 3;
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
cFn: function(e, t, n) {
var r = t % 10, o = t % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && u(2, 4, r) && !u(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && u(5, 9, r) || 0 === n && u(11, 14, o) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
return 3 === e % 10 && 13 !== e % 100 ? 0 : 1;
}
});
},
541: function(e, t, n) {
"use strict";
n.r(t), t.default = {
client: {
choose_payment_method: "Select the payment method, please",
specify_company_name: "Specify company name",
error_start_again: "<p>#{message}</p><p>Please reload the page and try to purchase again.</p> <p>If the error repeats – contact with <a href='mailto:#{email}'> customer service</a>.</p>\n",
maybe_purchase_error: "<p>#{message}</p><p>If you think an error has occurred &mdash; please contact with <a href='mailto:#{email}'>customer service</a>.</p>\n",
purchase_error: "An error has occurred, please contact with <a href='mailto:#{email}'>customer service</a>.\n"
},
currency: "USD",
payment_for: "Payment for",
payment: "Payment",
pay: "Pay",
payment_received: "Payment received.",
payment_processing: "Pending processing.",
payment_received_processing: "Payment received, processing.",
payment_error: "An error occured.",
payment_error_accent: "An error has occured during payment processing.",
payment_failed: "Payment failed.",
payment_failed_try_again: "Payment failed, please try again.",
payment_success_description: "<p>We'll send you an email to <b>#{orderEmail}</b>.</p><p>If you have any questions, please send them to #{mailLink}.</p>",
order_canceled: "Order canceled",
contact_payment: "<p>Please send all questions regarding payment to #{mailLink}.</p>",
contact_order: "<p>Please send all questions regarding the order to #{mailLink}.</p>",
thanks: "Thanks for the order!",
contact_support: "<p>Please, contact support at #{mailLink}.</p>",
payment_usd: "payment in US Dollars",
profile_order_link: "<p>Order information is available <a href='#{link}'>in your profile</a>.</p>"
};
},
629: function(e) {
e.exports = function() {
let e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
},
679: function(e, t, n) {
"use strict";
var r = n(304), o = n(532);
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
function f(e, t, n) {
if (null !== e) if (d && e.forEach === d) e.forEach(t, n); else if (e.length === +e.length) for (var r = 0, o = e.length; r < o; r += 1) t.call(n, e[r], r, e); else for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(n, e[a], a, e);
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
var y = "#@$";
function v(e, t) {
return e + y + t;
}
function g(e, t, n) {
var r = v(t, n), o = e._storage;
if (o.hasOwnProperty(r)) return r;
if (t === e._defaultLocale) return null;
var a = e._fallbacks_cache;
if (a.hasOwnProperty(r)) return a[r];
for (var i, s = e._fallbacks[t] || [ e._defaultLocale ], c = 0, u = s.length; c < u; c++) if (i = v(s[c], n), 
o.hasOwnProperty(i)) return a[r] = i, a[r];
return a[r] = null, null;
}
function _(e, t, n) {
var r = o.indexOf(e, t);
return -1 === r ? h('[pluralizer for "%s" locale not found]', e) : void 0 === n[r] ? h('[plural form %d ("%s") not found in translation]', r, o.forms(e)[r]) : n[r];
}
function b(e) {
if (!(this instanceof b)) return new b(e);
this._defaultLocale = e ? String(e) : "en", this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
b.prototype.addPhrase = function(e, t, n, r) {
var o, a = this;
if (c(r)) o = r ? 1 / 0 : 0; else if (s(r)) {
if ((o = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else o = 1 / 0;
if (u(n) && o > 0) return f(n, function(n, r) {
a.addPhrase(e, (t ? t + "." : "") + r, n, o - 1);
}), this;
if (i(n)) this._storage[v(e, t)] = {
translation: n,
locale: e,
raw: !1
}; else {
if (!(l(n) || s(n) || c(n) || 0 === o && u(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[v(e, t)] = {
translation: n,
locale: e,
raw: !0
};
}
return a._fallbacks_cache = {}, this;
}, b.prototype.setFallback = function(e, t) {
var n = this._defaultLocale;
if (n === e) throw new Error("Default locale can't have fallbacks");
var r = l(t) ? t.slice() : [ t ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[e] = r, this._fallbacks_cache = {}, 
this;
};
var w = /#\{|\(\(|\\\\/;
b.prototype.translate = function(e, t, n) {
var o, c = g(this, e, t);
return c ? (o = this._storage[c]).raw ? o.translation : (o.hasOwnProperty("compiled") || (o.compiled = function(e, t, n) {
var o, a, i, s, c, u;
return w.test(t) ? 1 === (o = r.parse(t)).length && "literal" === o[0].type ? o[0].text : (e._plurals_cache[n] || (e._plurals_cache[n] = new b(n)), 
u = e._plurals_cache[n], (a = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
a.push("params = flatten(params);"), f(o, function(e) {
if ("literal" !== e.type) {
if ("variable" === e.type) return i = e.anchor, void a.push(h('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', i, i, i));
if ("plural" !== e.type) throw new Error("Unknown node type");
i = e.anchor, s = {}, f(e.strict, function(t, o) {
var a = r.parse(t);
if (1 === a.length && "literal" === a[0].type) return s[o] = !1, void (e.strict[o] = a[0].text);
s[o] = !0, u.hasPhrase(n, t, !0) || u.addPhrase(n, t, t);
}), c = {}, f(e.forms, function(t, o) {
var a, i = r.parse(t);
if (1 === i.length && "literal" === i[0].type) return a = i[0].text, e.forms[o] = a, 
void (c[a] = !1);
c[t] = !0, u.hasPhrase(n, t, !0) || u.addPhrase(n, t, t);
}), a.push(h("loc = %j;", n)), a.push(h("loc_plzr = %j;", n.split(/[-_]/)[0])), 
a.push(h("anchor = params[%j];", i)), a.push(h("cache = this._plurals_cache[loc];")), 
a.push(h("strict = %j;", e.strict)), a.push(h("strict_exec = %j;", s)), a.push(h("forms = %j;", e.forms)), 
a.push(h("forms_exec = %j;", c)), a.push("if (+(anchor) != anchor) {"), a.push(h('  str += "[invalid plurals amount: %s(" + anchor + ")]";', i)), 
a.push("} else {"), a.push("  if (strict[anchor] !== undefined) {"), a.push("    plrl = strict[anchor];"), 
a.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), a.push("  } else {"), 
a.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), a.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
a.push("  }"), a.push("}");
} else a.push(h("str += %j;", e.text));
}), a.push("return str;"), new Function("params", "flatten", "pluralizer", a.join("\n"))) : t;
}(this, o.translation, o.locale)), "[object Function]" !== a(o.compiled) ? o.compiled : ((s(n) || i(n)) && (n = {
count: n,
value: n
}), o.compiled.call(this, n, m, _))) : e + ": No translation for [" + t + "]";
}, b.prototype.hasPhrase = function(e, t, n) {
return n ? this._storage.hasOwnProperty(v(e, t)) : !!g(this, e, t);
}, b.prototype.getLocale = function(e, t, n) {
if (n) return this._storage.hasOwnProperty(v(e, t)) ? e : null;
var r = g(this, e, t);
return r ? r.split(y, 2)[0] : null;
}, b.prototype.t = b.prototype.translate, b.prototype.stringify = function(e) {
var t = this, n = {};
f(this._storage, function(e, t) {
n[t.split(y)[1]] = !0;
});
var r = {};
f(n, function(n, o) {
var a = g(t, e, o);
if (a) {
var i = t._storage[a].locale;
r[i] || (r[i] = {}), r[i][o] = t._storage[a].translation;
}
});
var o = {
fallback: {},
locales: r
}, a = (t._fallbacks[e] || []).slice(0, -1);
return a.length && (o.fallback[e] = a), JSON.stringify(o);
}, b.prototype.load = function(e) {
var t = this;
return i(e) && (e = JSON.parse(e)), f(e.locales, function(e, n) {
f(e, function(e, r) {
t.addPhrase(n, r, e, 0);
});
}), f(e.fallback, function(e, n) {
t.setFallback(n, e);
}), this;
}, e.exports = b;
},
735: function(e, t, n) {
"use strict";
n.r(t), t.default = {
build_at: "Built at",
last_version: 'The last version of the tutorial is at <a href="#{url}">#{url}</a>',
tracker_ref: 'We constantly work to improve the tutorial. If you find any mistakes, please write at <a href="#{url}/issues/new">our github</a>',
tasks: "Tasks",
importance: "importance",
to_solution: "To solution",
solutions: "Solutions",
to_formulation: "To formulation",
more: "Additional series",
newOrder: {
title: "Buy EPUB/PDF for offline reading",
sample: "Download sample",
choose_course: "Which parts of the tutorial you want?",
price: "Price",
specifyEmail: "Specify your email",
note: 'The download link will be sent to this address after payment.<br>In case of any difficulty please contact <a href="mailto:orders@javascript.info?subject=Order%20problem%20at%20#{site}">orders@javascript.info</a>.',
choose_payment: "Select the payment method, please",
continue: "Continue",
continue_text: 'By pressing the button \'Continue\' you agree to our <a href="/terms">terms</a> and <a href="/privacy">privacy policy</a>.',
confirmation: "Confirmation",
currency: "USD",
continue_with_paypal: "Pay with PayPal",
continue_with_stripe: "Pay via Stripe",
continue_pay: "Proceed with payment",
info: "<p><strong>PDF/EPUB</strong> book is an offline version of the tutorial. Buying this book, you support the project and become able to read the tutorial as e-book.</p> <p>You get the whole content as of now, plus 1 year of free updates.</p>\n"
},
orders: {
order: "Order",
failed: "Payment failed, please try again later.",
currency: "$",
payment: "Payment",
successful: "Successful",
pending: "Confirmation pending",
amount: "Price",
choose_another_payment: "Choose another payment method",
do_not_pay_twice: "Do not pay twice. Change payment method only if you are sure that payment failed.",
questions: "If you have any questions please send them to",
thanks: "Payment successful, thanks for your purchase!",
download: "Download ebook",
confirmation_soon: "The confirmation was sent to <b>#{email}</b>",
download_now: "You can download the tutorial right now using this link:",
link_active_3_months: "The link will be active for 1 year, with the latest tutorial build."
},
client: {
enter_email: "Please enter email."
},
onPaid: {
subject: "JavaScript Tutorial EPUB/PDF"
}
};
},
773: function(e, t, n) {
"use strict";
const r = new (n(679))("en");
let o = console.error;
function a(e) {
if (!r.hasPhrase(i, e)) {
!1 && o("No such phrase", e);
}
return r.t(i, ...arguments);
}
e.exports = a;
const i = n(907).lang;
"en" !== i && r.setFallback(i, "en"), r.add = (...e) => (e = e.map(e => e.__esModule ? e.default : e), 
r.addPhrase(i, ...e)), a.i18n = r;
},
907: function(e) {
e.exports = {
lang: "en",
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
979: function(e, t, n) {
"use strict";
n.r(t), t.default = {
site: {
privacy_policy: "privacy policy",
terms: "terms of usage",
banner_bottom_courses: 'Advance your skils with <a href="https://frontendmasters.com/learn/javascript/?utm_source=website&utm_medium=jsinfo&utm_campaign=jsinfo">video courses on JavaScript and Frameworks</a>.',
banner_buttom_sponsor: 'Benefitted from the site? <a href="/sponsor">Sponsor us</a>!',
action_required: "Action required",
gdpr_dialog: {
title: "This website uses cookies",
text: 'We use browser technologies such as cookies and local storage to store your preferences. You need to accept our <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Use</a> for us to do so.',
accept: "Accept",
cancel: "Cancel"
},
theme: {
light: "Light theme",
dark: "Dark theme",
change: "Change theme"
},
toolbar: {
lang_switcher: {
cta_text: '<p>We want to make this open-source project available for people all around the world.</p> <p><a href="https://javascript.info/translate">Help to translate</a> the content of this tutorial to your language!</p>\n',
footer_text: "how much content is translated to the corresponding language",
old_version: "Old version is published, needs backporting."
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
buy_ebook_extra: "Buy",
buy_ebook: "EPUB/PDF",
search_placeholder: "Search on Javascript.info",
search_button: "Search",
public_profile: "Public profile",
account: "Account",
notifications: "Notifications",
admin: "Admin",
logout: "Logout"
},
sorry_old_browser: "Sorry, Internet Explorer is not supported, please use a newer browser.",
contact_us: "contact us",
about_the_project: "about the project",
ilya_kantor: "Ilya Kantor",
comments: "Comments",
loading: "Loading...",
search: "Search",
share: "Share",
read_before_commenting: "read this before commenting…",
last_updated_at: "Last updated on #{date}",
meta: {
description: "Modern JavaScript Tutorial: simple, but detailed explanations with examples and tasks, including: closures, document and events, object oriented programming and more."
},
"tablet-menu": {
choose_section: "Choose section",
search_placeholder: "Search in the tutorial",
search_button: "Search"
},
comment: {
help: [ 'If you have suggestions what to improve - please <a href="https://github.com/javascript-tutorial/en.javascript.info/issues/new">submit a GitHub issue</a> or a pull request instead of commenting.', "If you can't understand something in the article – please elaborate.", "To insert few words of code, use the <code>&lt;code&gt;</code> tag, for several lines – wrap them in <code>&lt;pre&gt;</code> tag, for more than 10 lines – use a sandbox (<a href='https://plnkr.co/edit/?p=preview'>plnkr</a>, <a href='https://jsbin.com'>jsbin</a>, <a href='http://codepen.io'>codepen</a>…)" ]
},
edit_on_github: "Edit on GitHub",
error: "error",
close: "close",
hide_forever: "hide permanently",
hide_week: "hide for 1 week",
hidden_forever: "This information will not show up any more.",
hidden_week: "This information will stay hidden for 1 week",
subscribe: {
title: "Watch for javascript.info updates",
text: "We do not send advertisements, only relevant stuff. You choose what to receive:",
agreement: 'By signing up to newsletters you agree to the <a href="#{link}" target="_blank">terms of usage</a>.',
button: "Subscribe",
button_unsubscribe: "Unsubscribe from all",
common_updates: "Common updates",
common_updates_text: "new courses, master classes, article and screencast releases",
your_email: "your@email.here",
newsletters: "newsletter,newsletters,newsletters",
no_selected: "Nothing selected"
},
form: {
value_must_not_be_empty: "Value must not be empty.",
value_is_too_long: "Value is too long.",
value_is_too_short: "Value is too short.",
invalid_email: "Invalid email.",
invalid_value: "Invalid value.",
invalid_autocomplete: "Please, choose from the list",
invalid_date: "Invalid date, format: dd.mm.yyyyy.",
invalid_range: "This date is invalid here.",
save: "Save",
upload_file: "Upload file",
cancel: "Cancel",
server_error: "Request error, status code"
}
}
};
},
986: function(e, t, n) {
var r = {
"./en.yml": 735
};
function o(e) {
var t = a(e);
return n(t);
}
function a(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = a, e.exports = o, o.id = 986;
},
996: function(e, t, n) {
n(495);
let r = n(345), o = n(102), a = n(223).FormPayment;
n(907);
const i = n(773), s = n(907).lang;
i.i18n.add("ebook", n(986)("./" + s + ".yml"));
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
if (!this.elem.elements.email.value) return new r.Error(i("ebook.client.enter_email")), 
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
function n(r) {
var o = t[r];
if (void 0 !== o) return o.exports;
var a = t[r] = {
exports: {}
};
return e[r](a, a.exports, n), a.exports;
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
!function() {
let e = n(996);
!function() {
let t = document.querySelector("[data-order-form]");
t && new e({
elem: t
});
}();
}(), function() {
"use strict";
n.r(r);
}(), ebook = r;
}();
//# sourceMappingURL=ebook.0720bac4c39e5257c681.js.map