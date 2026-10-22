var frontpage;

!function() {
var e = {
24: function(e, t, n) {
t.Captcha = n(902), t.initForms = n(697);
},
51: function(e, t, n) {
var r = {
"./en.yml": 433
};
function o(e) {
var t = s(e);
return n(t);
}
function s(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = s, e.exports = o, o.id = 51;
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
188: function(e, t, n) {
var r = {
"./en.yml": 526
};
function o(e) {
var t = s(e);
return n(t);
}
function s(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = s, e.exports = o, o.id = 188;
},
205: function(e, t, n) {
var r = {
"./en.yml": 979
};
function o(e) {
var t = s(e);
return n(t);
}
function s(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = s, e.exports = o, o.id = 205;
},
304: function(e) {
e.exports = function() {
function e(e, t, n, r, o, s) {
this.message = e, this.expected = t, this.found = n, this.offset = r, this.line = o, 
this.column = s, this.name = "SyntaxError";
}
return function(e, t) {
function n() {
this.constructor = e;
}
n.prototype = t.prototype, e.prototype = new n;
}(e, Error), {
SyntaxError: e,
parse: function(t) {
var n, r = arguments.length > 1 ? arguments[1] : {}, o = {}, s = {
start: le
}, i = le, a = o, c = "((", u = {
type: "literal",
value: "((",
description: '"(("'
}, l = "))", f = {
type: "literal",
value: "))",
description: '"))"'
}, d = null, h = function(e, t) {
return {
type: "plural",
forms: ye(e),
strict: we(e),
anchor: t || "count"
};
}, p = "|", m = {
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
}, k = function(e, t) {
return {
strict: e.join(""),
text: t.join("")
};
}, C = function() {
return {
text: ie()
};
}, E = "\\", A = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, S = /^[\\|)(]/, j = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, T = function(e) {
return e;
}, O = void 0, L = {
type: "any",
description: "any character"
}, P = function() {
return ie();
}, q = ":", I = {
type: "literal",
value: ":",
description: '":"'
}, M = function(e) {
return e;
}, D = "#{", H = {
type: "literal",
value: "#{",
description: '"#{"'
}, N = "}", z = {
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
}, V = function() {
return ie();
}, B = /^[a-zA-Z_$]/, Y = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, W = /^[a-zA-Z0-9_$]/, J = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, K = function(e) {
return e;
}, G = function(e) {
return {
type: "literal",
text: e.join("")
};
}, X = /^[\\#()|]/, Z = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, ee = 0, te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}, re = 0, oe = [], se = 0;
if ("startRule" in r) {
if (!(r.startRule in s)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
i = s[r.startRule];
}
function ie() {
return t.substring(ee, Q);
}
function ae(e) {
return te !== e && (te > e && (te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}), function(e, n, r) {
var o, s;
for (o = n; o < r; o++) "\n" === (s = t.charAt(o)) ? (e.seenCR || e.line++, e.column = 1, 
e.seenCR = !1) : "\r" === s || "\u2028" === s || "\u2029" === s ? (e.line++, e.column = 1, 
e.seenCR = !0) : (e.column++, e.seenCR = !1);
}(ne, te, e), te = e), ne;
}
function ce(e) {
Q < re || (Q > re && (re = Q, oe = []), oe.push(e));
}
function ue(n, r, o) {
var s = ae(o), i = o < t.length ? t.charAt(o) : null;
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
}(r, i), r, i, o, s.line, s.column);
}
function le() {
var e, t;
for (e = [], (t = _e()) === o && (t = fe()) === o && (t = me()); t !== o; ) e.push(t), 
(t = _e()) === o && (t = fe()) === o && (t = me());
return e;
}
function fe() {
var e, n, r, s, i;
return e = Q, t.substr(Q, 2) === c ? (n = c, Q += 2) : (n = o, 0 === se && ce(u)), 
n !== o && (r = de()) !== o ? (t.substr(Q, 2) === l ? (s = l, Q += 2) : (s = o, 
0 === se && ce(f)), s !== o ? (i = function() {
var e, n, r;
e = Q, 58 === t.charCodeAt(Q) ? (n = q, Q++) : (n = o, 0 === se && ce(I));
n !== o && (r = ve()) !== o ? (ee = e, e = n = M(r)) : (Q = e, e = a);
return e;
}(), i === o && (i = d), i !== o ? (ee = e, e = n = h(r, i)) : (Q = e, e = a)) : (Q = e, 
e = a)) : (Q = e, e = a), e;
}
function de() {
var e, n, r, s;
return e = Q, (n = he()) !== o ? (124 === t.charCodeAt(Q) ? (r = p, Q++) : (r = o, 
0 === se && ce(m)), r !== o && (s = de()) !== o ? (ee = e, e = n = v(n, s)) : (Q = e, 
e = a)) : (Q = e, e = a), e === o && (e = Q, (n = he()) !== o && (ee = e, n = g(n)), 
e = n), e;
}
function he() {
var e, n, r, s, i, c;
if (e = Q, 61 === t.charCodeAt(Q) ? (n = _, Q++) : (n = o, 0 === se && ce(b)), n !== o) {
if (r = [], y.test(t.charAt(Q)) ? (s = t.charAt(Q), Q++) : (s = o, 0 === se && ce(w)), 
s !== o) for (;s !== o; ) r.push(s), y.test(t.charAt(Q)) ? (s = t.charAt(Q), Q++) : (s = o, 
0 === se && ce(w)); else r = a;
if (r !== o) if (32 === t.charCodeAt(Q) ? (s = F, Q++) : (s = o, 0 === se && ce(x)), 
s === o && (s = d), s !== o) {
if (i = [], (c = pe()) !== o) for (;c !== o; ) i.push(c), c = pe(); else i = a;
i !== o ? (ee = e, e = n = k(r, i)) : (Q = e, e = a);
} else Q = e, e = a; else Q = e, e = a;
} else Q = e, e = a;
if (e === o) {
if (e = Q, n = [], (r = pe()) !== o) for (;r !== o; ) n.push(r), r = pe(); else n = a;
n !== o && (ee = e, n = C()), e = n;
}
return e;
}
function pe() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = E, Q++) : (n = o, 0 === se && ce(A)), 
n !== o ? (S.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = o, 0 === se && ce(j)), 
r !== o ? (ee = e, e = n = T(r)) : (Q = e, e = a)) : (Q = e, e = a), e === o && (e = Q, 
n = Q, se++, 124 === t.charCodeAt(Q) ? (r = p, Q++) : (r = o, 0 === se && ce(m)), 
r === o && (t.substr(Q, 2) === l ? (r = l, Q += 2) : (r = o, 0 === se && ce(f))), 
se--, r === o ? n = O : (Q = n, n = a), n !== o ? (t.length > Q ? (r = t.charAt(Q), 
Q++) : (r = o, 0 === se && ce(L)), r !== o ? (ee = e, e = n = P()) : (Q = e, e = a)) : (Q = e, 
e = a)), e;
}
function me() {
var e, n, r, s;
return e = Q, t.substr(Q, 2) === D ? (n = D, Q += 2) : (n = o, 0 === se && ce(H)), 
n !== o && (r = ve()) !== o ? (125 === t.charCodeAt(Q) ? (s = N, Q++) : (s = o, 
0 === se && ce(z)), s !== o ? (ee = e, e = n = R(r)) : (Q = e, e = a)) : (Q = e, 
e = a), e;
}
function ve() {
var e, n, r, s;
if (e = Q, ge() !== o) if (46 === t.charCodeAt(Q) ? (n = U, Q++) : (n = o, 0 === se && ce($)), 
n !== o) {
if (r = [], (s = ve()) !== o) for (;s !== o; ) r.push(s), s = ve(); else r = a;
r !== o ? (ee = e, e = V()) : (Q = e, e = a);
} else Q = e, e = a; else Q = e, e = a;
return e === o && (e = ge()), e;
}
function ge() {
var e, n, r, s;
if (e = Q, B.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = o, 0 === se && ce(Y)), 
n !== o) {
for (r = [], W.test(t.charAt(Q)) ? (s = t.charAt(Q), Q++) : (s = o, 0 === se && ce(J)); s !== o; ) r.push(s), 
W.test(t.charAt(Q)) ? (s = t.charAt(Q), Q++) : (s = o, 0 === se && ce(J));
r !== o ? (ee = e, e = n = P()) : (Q = e, e = a);
} else Q = e, e = a;
return e;
}
function _e() {
var e, t, n, r, s;
if (e = Q, t = [], n = Q, r = Q, se++, (s = fe()) === o && (s = me()), se--, s === o ? r = O : (Q = r, 
r = a), r !== o && (s = be()) !== o ? (ee = n, n = r = K(s)) : (Q = n, n = a), n !== o) for (;n !== o; ) t.push(n), 
n = Q, r = Q, se++, (s = fe()) === o && (s = me()), se--, s === o ? r = O : (Q = r, 
r = a), r !== o && (s = be()) !== o ? (ee = n, n = r = K(s)) : (Q = n, n = a); else t = a;
return t !== o && (ee = e, t = G(t)), e = t;
}
function be() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = E, Q++) : (n = o, 0 === se && ce(A)), 
n !== o ? (X.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = o, 0 === se && ce(Z)), 
r !== o ? (ee = e, e = n = T(r)) : (Q = e, e = a)) : (Q = e, e = a), e === o && (t.length > Q ? (e = t.charAt(Q), 
Q++) : (e = o, 0 === se && ce(L))), e;
}
function ye(e) {
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
345: function(e, t, n) {
"use strict";
n.r(t), n.d(t, {
Error: function() {
return l;
},
Info: function() {
return a;
},
Success: function() {
return u;
},
Warning: function() {
return c;
},
init: function() {
return s;
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
function s(e) {
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
class a extends i {
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
433: function(e, t, n) {
"use strict";
n.r(t), t.default = {
choose_newsletter: "Choose newsletters in the list.",
email_please: "Your e-mail?"
};
},
461: function(e, t, n) {
const r = n(944), o = n(495), s = n(345), i = n(348), {Captcha: a} = n(24), c = n(773), u = n(907).lang;
function l(e, t) {
if (!e.elements.email.value) return;
const n = e.elements.slug;
let i, a = [ ...n.querySelectorAll("option:checked") ].map(e => e.value);
if (a.length || (a = n.value), e.elements["subscribe-email"] && (i = !0), !i && !a.length) return void new s.Error(c("newsletter.client.choose_newsletter"));
const u = {
email: e.elements.email.value,
slug: a
};
e.elements["captcha-response"] && (u["captcha-response"] = e.elements["captcha-response"].value), 
i && (u.replace = !0);
const l = o({
method: "POST",
url: e.action,
body: u
}), f = e.querySelector('[type="submit"]'), d = new r({
elem: f,
size: "small",
elemClass: "button_loading"
});
d.start(), f.disabled = !0, l.addEventListener("loadend", () => {
d.stop(), f.disabled = !1;
}), l.addEventListener("success", function(n) {
if (200 == this.status) {
new s.Success(n.result.message, "slow");
e.elements.gaEvent && JSON.parse(e.elements.gaEvent.value);
t && t();
} else new s.Error(n.result.message);
});
}
c.i18n.add("newsletter.client", n(51)("./" + u + ".yml")), t.initNewsletterForm = function() {
let e = document.querySelectorAll("[data-newsletter-subscribe-form]");
for (let t of e) {
const e = "hidden" === t.elements.email.type, n = t.querySelector(".multiselect");
if (n) {
const r = new i({
elem: n
}), o = t.querySelector('button[type="submit"]'), s = o.querySelector("span");
t.elements.slug && t.elements.slug.addEventListener("change", () => {
o.disabled = !r.getValues().length && !e, !r.getValues().length && e ? s.textContent = c("site.subscribe.button_unsubscribe") : s.textContent = c("site.subscribe.button");
});
}
let r = new a(t);
t.onsubmit = async function(e) {
e.preventDefault(), await r.validateForm(t), l(t);
};
}
}, t.submitSubscribeForm = l;
},
495: function(e, t, n) {
let r = n(345), o = n(629);
const s = n(907).lang, i = n(773);
i.i18n.add("", n(205)("./" + s + ".yml")), i.i18n.add("error.network", n(188)("./" + s + ".yml")), 
document.addEventListener("xhrfail", function(e) {
new r.Error(e.reason);
}), e.exports = function(e) {
let t = new XMLHttpRequest, n = e.method || "GET", r = e.body, s = e.url;
t.open(n, s, !e.sync), t.method = n;
let a = o();
a && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", a), e.responseType && (t.responseType = e.responseType), 
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
var s = n(e);
if (!s) return -1;
if (!t[s].cFn) return 0;
var i = String(o), a = 0;
if (r.test(i)) {
var c = i.split("c");
a = +c[1], o = Math.pow(10, a) * c[0], i = String(o);
}
var u = i.indexOf(".") < 0 ? "" : i.split(".")[1], l = u.length, f = u.replace(/0+$/, "").length, d = +o, h = +i.split(".")[0], p = 0 === u.length ? 0 : +u.replace(/0+$/, "");
return t[s].cFn(d, h, l, +u, p, f, a);
}
function s(e, r) {
var o = n(e);
if (!o) return -1;
if (!t[o].oFn) return 0;
var s = String(r), i = s.indexOf(".") < 0 ? "" : s.split(".")[1], a = i.length, c = i.replace(/0+$/, "").length, u = +r, l = +s.split(".")[0], f = 0 === i.length ? 0 : +i.replace(/0+$/, "");
return t[o].oFn(u, l, a, +i, f, c, 0);
}
e.exports = function(e, r) {
var s = n(e);
return s ? t[s].c[o(s, r)] : null;
}, e.exports.indexOf = o, e.exports.forms = function(e) {
var r = n(e);
return t[r] ? t[r].c : null;
}, e.exports.ordinal = function(e, r) {
var o = n(e);
return t[o] ? t[o].o[s(o, r)] : null;
}, e.exports.ordinal.indexOf = s, e.exports.ordinal.forms = function(e) {
var r = n(e);
return t[r] ? t[r].o : null;
};
var i = [ "zero", "one", "two", "few", "many", "other" ];
function a(e) {
return i[e];
}
function c(e, n) {
var r;
for (n.c = n.c ? n.c.map(a) : [ "other" ], n.o = n.o ? n.o.map(a) : [ "other" ], 
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
var o = t % 10, s = t % 100, i = r % 10, a = r % 100;
return 0 === n && 1 === o && 11 !== s || 1 === i && 11 !== a ? 0 : 0 === n && u(2, 4, o) && !u(12, 14, s) || u(2, 4, i) && !u(12, 14, a) ? 1 : 2;
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
var o = t % 10, s = r % 10;
return 0 === n && l([ 1, 2, 3 ], t) || 0 === n && !l([ 4, 6, 9 ], o) || 0 !== n && !l([ 4, 6, 9 ], s) ? 0 : 1;
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
var o = t % 100, s = r % 100;
return 0 === n && 1 === o || 1 === s ? 0 : 0 === n && 2 === o || 2 === s ? 1 : 0 === n && u(3, 4, o) || u(3, 4, s) ? 2 : 3;
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
cFn: function(e, t, n, r, o, s, i) {
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
var o = t % 10, s = r % 10;
return 0 === n && l([ 1, 2, 3 ], t) || 0 === n && !l([ 4, 6, 9 ], o) || 0 !== n && !l([ 4, 6, 9 ], s) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), c([ "fr" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, o, s, i) {
var a = t % 1e6;
return l([ 0, 1 ], t) ? 0 : 0 === i && 0 !== t && 0 === a && 0 === n || !u(0, 5, i) ? 1 : 2;
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
cFn: function(e, t, n, r, o, s, i) {
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
var o = e % 10, s = e % 100;
return 1 !== o || u(11, 19, s) ? u(2, 9, o) && !u(11, 19, s) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), c([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t, n, r) {
var o = e % 10, s = e % 100, i = r % 100, a = r % 10;
return 0 === o || u(11, 19, s) || 2 === n && u(11, 19, i) ? 0 : 1 === o && 11 !== s || 2 === n && 1 === a && 11 !== i || 2 !== n && 1 === a ? 1 : 2;
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
cFn: function(e, t, n, r, o, s, i) {
var a = t % 1e6;
return u(0, 1, t) ? 0 : 0 === i && 0 !== t && 0 === a && 0 === n || !u(0, 5, i) ? 1 : 2;
}
}), c([ "pt-pt" ], {
c: [ 1, 4, 5 ],
cFn: function(e, t, n, r, o, s, i) {
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
function s(e) {
return Object.prototype.toString.call(e);
}
function i(e) {
return "[object String]" === s(e);
}
function a(e) {
return !isNaN(e) && isFinite(e);
}
function c(e) {
return !0 === e || !1 === e;
}
function u(e) {
return "[object Object]" === s(e);
}
var l = Array.isArray || function(e) {
return "[object Array]" === s(e);
}, f = Array.prototype.forEach;
function d(e, t, n) {
if (null !== e) if (f && e.forEach === f) e.forEach(t, n); else if (e.length === +e.length) for (var r = 0, o = e.length; r < o; r += 1) t.call(n, e[r], r, e); else for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.call(n, e[s], s, e);
}
var h = /%[sdj%]/g;
function p(e) {
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
return d(e || {}, function(e, n) {
e && "object" == typeof e ? d(m(e), function(e, r) {
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
var s = e._fallbacks_cache;
if (s.hasOwnProperty(r)) return s[r];
for (var i, a = e._fallbacks[t] || [ e._defaultLocale ], c = 0, u = a.length; c < u; c++) if (i = g(a[c], n), 
o.hasOwnProperty(i)) return s[r] = i, s[r];
return s[r] = null, null;
}
function b(e, t, n) {
var r = o.indexOf(e, t);
return -1 === r ? p('[pluralizer for "%s" locale not found]', e) : void 0 === n[r] ? p('[plural form %d ("%s") not found in translation]', r, o.forms(e)[r]) : n[r];
}
function y(e) {
if (!(this instanceof y)) return new y(e);
this._defaultLocale = e ? String(e) : "en", this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
y.prototype.addPhrase = function(e, t, n, r) {
var o, s = this;
if (c(r)) o = r ? 1 / 0 : 0; else if (a(r)) {
if ((o = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else o = 1 / 0;
if (u(n) && o > 0) return d(n, function(n, r) {
s.addPhrase(e, (t ? t + "." : "") + r, n, o - 1);
}), this;
if (i(n)) this._storage[g(e, t)] = {
translation: n,
locale: e,
raw: !1
}; else {
if (!(l(n) || a(n) || c(n) || 0 === o && u(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[g(e, t)] = {
translation: n,
locale: e,
raw: !0
};
}
return s._fallbacks_cache = {}, this;
}, y.prototype.setFallback = function(e, t) {
var n = this._defaultLocale;
if (n === e) throw new Error("Default locale can't have fallbacks");
var r = l(t) ? t.slice() : [ t ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[e] = r, this._fallbacks_cache = {}, 
this;
};
var w = /#\{|\(\(|\\\\/;
y.prototype.translate = function(e, t, n) {
var o, c = _(this, e, t);
return c ? (o = this._storage[c]).raw ? o.translation : (o.hasOwnProperty("compiled") || (o.compiled = function(e, t, n) {
var o, s, i, a, c, u;
return w.test(t) ? 1 === (o = r.parse(t)).length && "literal" === o[0].type ? o[0].text : (e._plurals_cache[n] || (e._plurals_cache[n] = new y(n)), 
u = e._plurals_cache[n], (s = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
s.push("params = flatten(params);"), d(o, function(e) {
if ("literal" !== e.type) {
if ("variable" === e.type) return i = e.anchor, void s.push(p('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', i, i, i));
if ("plural" !== e.type) throw new Error("Unknown node type");
i = e.anchor, a = {}, d(e.strict, function(t, o) {
var s = r.parse(t);
if (1 === s.length && "literal" === s[0].type) return a[o] = !1, void (e.strict[o] = s[0].text);
a[o] = !0, u.hasPhrase(n, t, !0) || u.addPhrase(n, t, t);
}), c = {}, d(e.forms, function(t, o) {
var s, i = r.parse(t);
if (1 === i.length && "literal" === i[0].type) return s = i[0].text, e.forms[o] = s, 
void (c[s] = !1);
c[t] = !0, u.hasPhrase(n, t, !0) || u.addPhrase(n, t, t);
}), s.push(p("loc = %j;", n)), s.push(p("loc_plzr = %j;", n.split(/[-_]/)[0])), 
s.push(p("anchor = params[%j];", i)), s.push(p("cache = this._plurals_cache[loc];")), 
s.push(p("strict = %j;", e.strict)), s.push(p("strict_exec = %j;", a)), s.push(p("forms = %j;", e.forms)), 
s.push(p("forms_exec = %j;", c)), s.push("if (+(anchor) != anchor) {"), s.push(p('  str += "[invalid plurals amount: %s(" + anchor + ")]";', i)), 
s.push("} else {"), s.push("  if (strict[anchor] !== undefined) {"), s.push("    plrl = strict[anchor];"), 
s.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), s.push("  } else {"), 
s.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), s.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
s.push("  }"), s.push("}");
} else s.push(p("str += %j;", e.text));
}), s.push("return str;"), new Function("params", "flatten", "pluralizer", s.join("\n"))) : t;
}(this, o.translation, o.locale)), "[object Function]" !== s(o.compiled) ? o.compiled : ((a(n) || i(n)) && (n = {
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
d(this._storage, function(e, t) {
n[t.split(v)[1]] = !0;
});
var r = {};
d(n, function(n, o) {
var s = _(t, e, o);
if (s) {
var i = t._storage[s].locale;
r[i] || (r[i] = {}), r[i][o] = t._storage[s].translation;
}
});
var o = {
fallback: {},
locales: r
}, s = (t._fallbacks[e] || []).slice(0, -1);
return s.length && (o.fallback[e] = s), JSON.stringify(o);
}, y.prototype.load = function(e) {
var t = this;
return i(e) && (e = JSON.parse(e)), d(e.locales, function(e, n) {
d(e, function(e, r) {
t.addPhrase(n, r, e, 0);
});
}), d(e.fallback, function(e, n) {
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
function s(e) {
if (!r.hasPhrase(i, e)) {
!1 && o("No such phrase", e);
}
return r.t(i, ...arguments);
}
e.exports = s;
const i = n(907).lang;
"en" !== i && r.setFallback(i, "en"), r.add = (...e) => (e = e.map(e => e.__esModule ? e.default : e), 
r.addPhrase(i, ...e)), s.i18n = r;
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
}
}, t = {};
function n(r) {
var o = t[r];
if (void 0 !== o) return o.exports;
var s = t[r] = {
exports: {}
};
return e[r](s, s.exports, n), s.exports;
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
//# sourceMappingURL=frontpage.d0620df1b003c8b66296.js.map