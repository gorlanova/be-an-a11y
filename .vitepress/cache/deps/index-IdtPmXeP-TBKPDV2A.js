// node_modules/@owlabio/minuit/dist/index-IdtPmXeP.js
var Sn = Object.create;
var Gt = Object.defineProperty;
var In = Object.getOwnPropertyDescriptor;
var ke = Object.getOwnPropertyNames;
var kn = Object.getPrototypeOf;
var bn = Object.prototype.hasOwnProperty;
var Rn = (e, t) => function() {
  return e && (t = (0, e[ke(e)[0]])(e = 0)), t;
};
var wn = (e, t) => function() {
  return t || (0, e[ke(e)[0]])((t = { exports: {} }).exports, t), t.exports;
};
var Pn = (e, t, n, u) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of ke(t))
      !bn.call(e, r) && r !== n && Gt(e, r, { get: () => t[r], enumerable: !(u = In(t, r)) || u.enumerable });
  return e;
};
var Vn = (e, t, n) => (n = e != null ? Sn(kn(e)) : {}, Pn(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Gt(n, "default", { value: e, enumerable: true }),
  e
));
var ee = Rn({
  "../../node_modules/.pnpm/tsup@8.3.5_@microsoft+api-extractor@7.48.1_@types+node@22.10.5__jiti@2.4.2_postcss@8.4.49_tsx_s7k37zks4wtn7x2grzma6lrsfa/node_modules/tsup/assets/esm_shims.js"() {
  }
});
var xn = wn({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
    ee(), t.exports = u;
    function n(o) {
      return o instanceof Buffer ? Buffer.from(o) : new o.constructor(o.buffer.slice(), o.byteOffset, o.length);
    }
    function u(o) {
      if (o = o || {}, o.circles) return r(o);
      const i = /* @__PURE__ */ new Map();
      if (i.set(Date, (d) => new Date(d)), i.set(Map, (d, m) => new Map(h(Array.from(d), m))), i.set(Set, (d, m) => new Set(h(Array.from(d), m))), o.constructorHandlers)
        for (const d of o.constructorHandlers)
          i.set(d[0], d[1]);
      let a = null;
      return o.proto ? A : p;
      function h(d, m) {
        const c = Object.keys(d), _ = new Array(c.length);
        for (let g = 0; g < c.length; g++) {
          const f = c[g], E = d[f];
          typeof E != "object" || E === null ? _[f] = E : E.constructor !== Object && (a = i.get(E.constructor)) ? _[f] = a(E, m) : ArrayBuffer.isView(E) ? _[f] = n(E) : _[f] = m(E);
        }
        return _;
      }
      function p(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return h(d, p);
        if (d.constructor !== Object && (a = i.get(d.constructor)))
          return a(d, p);
        const m = {};
        for (const c in d) {
          if (Object.hasOwnProperty.call(d, c) === false) continue;
          const _ = d[c];
          typeof _ != "object" || _ === null ? m[c] = _ : _.constructor !== Object && (a = i.get(_.constructor)) ? m[c] = a(_, p) : ArrayBuffer.isView(_) ? m[c] = n(_) : m[c] = p(_);
        }
        return m;
      }
      function A(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return h(d, A);
        if (d.constructor !== Object && (a = i.get(d.constructor)))
          return a(d, A);
        const m = {};
        for (const c in d) {
          const _ = d[c];
          typeof _ != "object" || _ === null ? m[c] = _ : _.constructor !== Object && (a = i.get(_.constructor)) ? m[c] = a(_, A) : ArrayBuffer.isView(_) ? m[c] = n(_) : m[c] = A(_);
        }
        return m;
      }
    }
    function r(o) {
      const i = [], a = [], h = /* @__PURE__ */ new Map();
      if (h.set(Date, (c) => new Date(c)), h.set(Map, (c, _) => new Map(A(Array.from(c), _))), h.set(Set, (c, _) => new Set(A(Array.from(c), _))), o.constructorHandlers)
        for (const c of o.constructorHandlers)
          h.set(c[0], c[1]);
      let p = null;
      return o.proto ? m : d;
      function A(c, _) {
        const g = Object.keys(c), f = new Array(g.length);
        for (let E = 0; E < g.length; E++) {
          const C = g[E], y = c[C];
          if (typeof y != "object" || y === null)
            f[C] = y;
          else if (y.constructor !== Object && (p = h.get(y.constructor)))
            f[C] = p(y, _);
          else if (ArrayBuffer.isView(y))
            f[C] = n(y);
          else {
            const k = i.indexOf(y);
            k !== -1 ? f[C] = a[k] : f[C] = _(y);
          }
        }
        return f;
      }
      function d(c) {
        if (typeof c != "object" || c === null) return c;
        if (Array.isArray(c)) return A(c, d);
        if (c.constructor !== Object && (p = h.get(c.constructor)))
          return p(c, d);
        const _ = {};
        i.push(c), a.push(_);
        for (const g in c) {
          if (Object.hasOwnProperty.call(c, g) === false) continue;
          const f = c[g];
          if (typeof f != "object" || f === null)
            _[g] = f;
          else if (f.constructor !== Object && (p = h.get(f.constructor)))
            _[g] = p(f, d);
          else if (ArrayBuffer.isView(f))
            _[g] = n(f);
          else {
            const E = i.indexOf(f);
            E !== -1 ? _[g] = a[E] : _[g] = d(f);
          }
        }
        return i.pop(), a.pop(), _;
      }
      function m(c) {
        if (typeof c != "object" || c === null) return c;
        if (Array.isArray(c)) return A(c, m);
        if (c.constructor !== Object && (p = h.get(c.constructor)))
          return p(c, m);
        const _ = {};
        i.push(c), a.push(_);
        for (const g in c) {
          const f = c[g];
          if (typeof f != "object" || f === null)
            _[g] = f;
          else if (f.constructor !== Object && (p = h.get(f.constructor)))
            _[g] = p(f, m);
          else if (ArrayBuffer.isView(f))
            _[g] = n(f);
          else {
            const E = i.indexOf(f);
            E !== -1 ? _[g] = a[E] : _[g] = m(f);
          }
        }
        return i.pop(), a.pop(), _;
      }
    }
  }
});
ee();
ee();
ee();
var Wt = typeof navigator < "u";
var l = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof l.chrome < "u" && l.chrome.devtools;
Wt && (l.self, l.top);
var ze;
typeof navigator < "u" && ((ze = navigator.userAgent) == null || ze.toLowerCase().includes("electron"));
ee();
var Nn = Vn(xn());
var Fn = /(?:^|[-_/])(\w)/g;
function Un(e, t) {
  return t ? t.toUpperCase() : "";
}
function Bn(e) {
  return e && `${e}`.replace(Fn, Un);
}
function Ln(e, t) {
  let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
  const u = n.lastIndexOf("/"), r = n.substring(u + 1);
  {
    const o = r.lastIndexOf(t);
    return r.substring(0, o);
  }
}
var Mn = /^https?:\/\//;
function Kn(e) {
  return e.startsWith("/") || Mn.test(e);
}
var $e = (0, Nn.default)({ circles: true });
var Hn = {
  trailing: true
};
function K(e, t = 25, n = {}) {
  if (n = { ...Hn, ...n }, !Number.isFinite(t))
    throw new TypeError("Expected `wait` to be a finite number");
  let u, r, o = [], i, a;
  const h = (p, A) => (i = zn(e, p, A), i.finally(() => {
    if (i = null, n.trailing && a && !r) {
      const d = h(p, a);
      return a = null, d;
    }
  }), i);
  return function(...p) {
    return i ? (n.trailing && (a = p), i) : new Promise((A) => {
      const d = !r && n.leading;
      clearTimeout(r), r = setTimeout(() => {
        r = null;
        const m = n.leading ? u : h(this, p);
        for (const c of o)
          c(m);
        o = [];
      }, t), d ? (u = h(this, p), A(u)) : o.push(A);
    });
  };
}
async function zn(e, t, n) {
  return await e.apply(t, n);
}
function me(e, t = {}, n) {
  for (const u in e) {
    const r = e[u], o = n ? `${n}:${u}` : u;
    typeof r == "object" && r !== null ? me(r, t, o) : typeof r == "function" && (t[o] = r);
  }
  return t;
}
var $n = { run: (e) => e() };
var jn = () => $n;
var qt = typeof console.createTask < "u" ? console.createTask : jn;
function Gn(e, t) {
  const n = t.shift(), u = qt(n);
  return e.reduce(
    (r, o) => r.then(() => u.run(() => o(...t))),
    Promise.resolve()
  );
}
function Wn(e, t) {
  const n = t.shift(), u = qt(n);
  return Promise.all(e.map((r) => u.run(() => r(...t))));
}
function pe(e, t) {
  for (const n of [...e])
    n(t);
}
var qn = class {
  constructor() {
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
  }
  hook(t, n, u = {}) {
    if (!t || typeof n != "function")
      return () => {
      };
    const r = t;
    let o;
    for (; this._deprecatedHooks[t]; )
      o = this._deprecatedHooks[t], t = o.to;
    if (o && !u.allowDeprecated) {
      let i = o.message;
      i || (i = `${r} hook has been deprecated` + (o.to ? `, please use ${o.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i));
    }
    if (!n.name)
      try {
        Object.defineProperty(n, "name", {
          get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(n), () => {
      n && (this.removeHook(t, n), n = void 0);
    };
  }
  hookOnce(t, n) {
    let u, r = (...o) => (typeof u == "function" && u(), u = void 0, r = void 0, n(...o));
    return u = this.hook(t, r), u;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const u = this._hooks[t].indexOf(n);
      u !== -1 && this._hooks[t].splice(u, 1), this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == "string" ? { to: n } : n;
    const u = this._hooks[t] || [];
    delete this._hooks[t];
    for (const r of u)
      this.hook(t, r);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t)
      this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = me(t), u = Object.keys(n).map(
      (r) => this.hook(r, n[r])
    );
    return () => {
      for (const r of u.splice(0, u.length))
        r();
    };
  }
  removeHooks(t) {
    const n = me(t);
    for (const u in n)
      this.removeHook(u, n[u]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(Gn, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(Wn, t, ...n);
  }
  callHookWith(t, n, ...u) {
    const r = this._before || this._after ? { name: n, args: u, context: {} } : void 0;
    this._before && pe(this._before, r);
    const o = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      u
    );
    return o instanceof Promise ? o.finally(() => {
      this._after && r && pe(this._after, r);
    }) : (this._after && r && pe(this._after, r), o);
  }
  beforeEach(t) {
    return this._before = this._before || [], this._before.push(t), () => {
      if (this._before !== void 0) {
        const n = this._before.indexOf(t);
        n !== -1 && this._before.splice(n, 1);
      }
    };
  }
  afterEach(t) {
    return this._after = this._after || [], this._after.push(t), () => {
      if (this._after !== void 0) {
        const n = this._after.indexOf(t);
        n !== -1 && this._after.splice(n, 1);
      }
    };
  }
};
function Yt() {
  return new qn();
}
var Yn = Object.create;
var Zt = Object.defineProperty;
var Zn = Object.getOwnPropertyDescriptor;
var be = Object.getOwnPropertyNames;
var Xn = Object.getPrototypeOf;
var Jn = Object.prototype.hasOwnProperty;
var Qn = (e, t) => function() {
  return e && (t = (0, e[be(e)[0]])(e = 0)), t;
};
var Xt = (e, t) => function() {
  return t || (0, e[be(e)[0]])((t = { exports: {} }).exports, t), t.exports;
};
var eu = (e, t, n, u) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of be(t))
      !Jn.call(e, r) && r !== n && Zt(e, r, { get: () => t[r], enumerable: !(u = Zn(t, r)) || u.enumerable });
  return e;
};
var tu = (e, t, n) => (n = e != null ? Yn(Xn(e)) : {}, eu(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Zt(n, "default", { value: e, enumerable: true }),
  e
));
var s = Qn({
  "../../node_modules/.pnpm/tsup@8.3.5_@microsoft+api-extractor@7.48.1_@types+node@22.10.5__jiti@2.4.2_postcss@8.4.49_tsx_s7k37zks4wtn7x2grzma6lrsfa/node_modules/tsup/assets/esm_shims.js"() {
  }
});
var nu = Xt({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(e, t) {
    s(), function(n) {
      var u = {
        // latin
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "Ae",
        Å: "A",
        Æ: "AE",
        Ç: "C",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        Ð: "D",
        Ñ: "N",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "Oe",
        Ő: "O",
        Ø: "O",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "Ue",
        Ű: "U",
        Ý: "Y",
        Þ: "TH",
        ß: "ss",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "ae",
        å: "a",
        æ: "ae",
        ç: "c",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        ð: "d",
        ñ: "n",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "oe",
        ő: "o",
        ø: "o",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "ue",
        ű: "u",
        ý: "y",
        þ: "th",
        ÿ: "y",
        "ẞ": "SS",
        // language specific
        // Arabic
        ا: "a",
        أ: "a",
        إ: "i",
        آ: "aa",
        ؤ: "u",
        ئ: "e",
        ء: "a",
        ب: "b",
        ت: "t",
        ث: "th",
        ج: "j",
        ح: "h",
        خ: "kh",
        د: "d",
        ذ: "th",
        ر: "r",
        ز: "z",
        س: "s",
        ش: "sh",
        ص: "s",
        ض: "dh",
        ط: "t",
        ظ: "z",
        ع: "a",
        غ: "gh",
        ف: "f",
        ق: "q",
        ك: "k",
        ل: "l",
        م: "m",
        ن: "n",
        ه: "h",
        و: "w",
        ي: "y",
        ى: "a",
        ة: "h",
        ﻻ: "la",
        ﻷ: "laa",
        ﻹ: "lai",
        ﻵ: "laa",
        // Persian additional characters than Arabic
        گ: "g",
        چ: "ch",
        پ: "p",
        ژ: "zh",
        ک: "k",
        ی: "y",
        // Arabic diactrics
        "َ": "a",
        "ً": "an",
        "ِ": "e",
        "ٍ": "en",
        "ُ": "u",
        "ٌ": "on",
        "ْ": "",
        // Arabic numbers
        "٠": "0",
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        // Persian numbers
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        // Burmese consonants
        က: "k",
        ခ: "kh",
        ဂ: "g",
        ဃ: "ga",
        င: "ng",
        စ: "s",
        ဆ: "sa",
        ဇ: "z",
        "စျ": "za",
        ည: "ny",
        ဋ: "t",
        ဌ: "ta",
        ဍ: "d",
        ဎ: "da",
        ဏ: "na",
        တ: "t",
        ထ: "ta",
        ဒ: "d",
        ဓ: "da",
        န: "n",
        ပ: "p",
        ဖ: "pa",
        ဗ: "b",
        ဘ: "ba",
        မ: "m",
        ယ: "y",
        ရ: "ya",
        လ: "l",
        ဝ: "w",
        သ: "th",
        ဟ: "h",
        ဠ: "la",
        အ: "a",
        // consonant character combos
        "ြ": "y",
        "ျ": "ya",
        "ွ": "w",
        "ြွ": "yw",
        "ျွ": "ywa",
        "ှ": "h",
        // independent vowels
        ဧ: "e",
        "၏": "-e",
        ဣ: "i",
        ဤ: "-i",
        ဉ: "u",
        ဦ: "-u",
        ဩ: "aw",
        "သြော": "aw",
        ဪ: "aw",
        // numbers
        "၀": "0",
        "၁": "1",
        "၂": "2",
        "၃": "3",
        "၄": "4",
        "၅": "5",
        "၆": "6",
        "၇": "7",
        "၈": "8",
        "၉": "9",
        // virama and tone marks which are silent in transliteration
        "္": "",
        "့": "",
        "း": "",
        // Czech
        č: "c",
        ď: "d",
        ě: "e",
        ň: "n",
        ř: "r",
        š: "s",
        ť: "t",
        ů: "u",
        ž: "z",
        Č: "C",
        Ď: "D",
        Ě: "E",
        Ň: "N",
        Ř: "R",
        Š: "S",
        Ť: "T",
        Ů: "U",
        Ž: "Z",
        // Dhivehi
        ހ: "h",
        ށ: "sh",
        ނ: "n",
        ރ: "r",
        ބ: "b",
        ޅ: "lh",
        ކ: "k",
        އ: "a",
        ވ: "v",
        މ: "m",
        ފ: "f",
        ދ: "dh",
        ތ: "th",
        ލ: "l",
        ގ: "g",
        ޏ: "gn",
        ސ: "s",
        ޑ: "d",
        ޒ: "z",
        ޓ: "t",
        ޔ: "y",
        ޕ: "p",
        ޖ: "j",
        ޗ: "ch",
        ޘ: "tt",
        ޙ: "hh",
        ޚ: "kh",
        ޛ: "th",
        ޜ: "z",
        ޝ: "sh",
        ޞ: "s",
        ޟ: "d",
        ޠ: "t",
        ޡ: "z",
        ޢ: "a",
        ޣ: "gh",
        ޤ: "q",
        ޥ: "w",
        "ަ": "a",
        "ާ": "aa",
        "ި": "i",
        "ީ": "ee",
        "ު": "u",
        "ޫ": "oo",
        "ެ": "e",
        "ޭ": "ey",
        "ޮ": "o",
        "ޯ": "oa",
        "ް": "",
        // Georgian https://en.wikipedia.org/wiki/Romanization_of_Georgian
        // National system (2002)
        ა: "a",
        ბ: "b",
        გ: "g",
        დ: "d",
        ე: "e",
        ვ: "v",
        ზ: "z",
        თ: "t",
        ი: "i",
        კ: "k",
        ლ: "l",
        მ: "m",
        ნ: "n",
        ო: "o",
        პ: "p",
        ჟ: "zh",
        რ: "r",
        ს: "s",
        ტ: "t",
        უ: "u",
        ფ: "p",
        ქ: "k",
        ღ: "gh",
        ყ: "q",
        შ: "sh",
        ჩ: "ch",
        ც: "ts",
        ძ: "dz",
        წ: "ts",
        ჭ: "ch",
        ხ: "kh",
        ჯ: "j",
        ჰ: "h",
        // Greek
        α: "a",
        β: "v",
        γ: "g",
        δ: "d",
        ε: "e",
        ζ: "z",
        η: "i",
        θ: "th",
        ι: "i",
        κ: "k",
        λ: "l",
        μ: "m",
        ν: "n",
        ξ: "ks",
        ο: "o",
        π: "p",
        ρ: "r",
        σ: "s",
        τ: "t",
        υ: "y",
        φ: "f",
        χ: "x",
        ψ: "ps",
        ω: "o",
        ά: "a",
        έ: "e",
        ί: "i",
        ό: "o",
        ύ: "y",
        ή: "i",
        ώ: "o",
        ς: "s",
        ϊ: "i",
        ΰ: "y",
        ϋ: "y",
        ΐ: "i",
        Α: "A",
        Β: "B",
        Γ: "G",
        Δ: "D",
        Ε: "E",
        Ζ: "Z",
        Η: "I",
        Θ: "TH",
        Ι: "I",
        Κ: "K",
        Λ: "L",
        Μ: "M",
        Ν: "N",
        Ξ: "KS",
        Ο: "O",
        Π: "P",
        Ρ: "R",
        Σ: "S",
        Τ: "T",
        Υ: "Y",
        Φ: "F",
        Χ: "X",
        Ψ: "PS",
        Ω: "O",
        Ά: "A",
        Έ: "E",
        Ί: "I",
        Ό: "O",
        Ύ: "Y",
        Ή: "I",
        Ώ: "O",
        Ϊ: "I",
        Ϋ: "Y",
        // Latvian
        ā: "a",
        // 'č': 'c', // duplicate
        ē: "e",
        ģ: "g",
        ī: "i",
        ķ: "k",
        ļ: "l",
        ņ: "n",
        // 'š': 's', // duplicate
        ū: "u",
        // 'ž': 'z', // duplicate
        Ā: "A",
        // 'Č': 'C', // duplicate
        Ē: "E",
        Ģ: "G",
        Ī: "I",
        Ķ: "k",
        Ļ: "L",
        Ņ: "N",
        // 'Š': 'S', // duplicate
        Ū: "U",
        // 'Ž': 'Z', // duplicate
        // Macedonian
        Ќ: "Kj",
        ќ: "kj",
        Љ: "Lj",
        љ: "lj",
        Њ: "Nj",
        њ: "nj",
        Тс: "Ts",
        тс: "ts",
        // Polish
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        // 'ó': 'o', // duplicate
        ś: "s",
        ź: "z",
        ż: "z",
        Ą: "A",
        Ć: "C",
        Ę: "E",
        Ł: "L",
        Ń: "N",
        Ś: "S",
        Ź: "Z",
        Ż: "Z",
        // Ukranian
        Є: "Ye",
        І: "I",
        Ї: "Yi",
        Ґ: "G",
        є: "ye",
        і: "i",
        ї: "yi",
        ґ: "g",
        // Romanian
        ă: "a",
        Ă: "A",
        ș: "s",
        Ș: "S",
        // 'ş': 's', // duplicate
        // 'Ş': 'S', // duplicate
        ț: "t",
        Ț: "T",
        ţ: "t",
        Ţ: "T",
        // Russian https://en.wikipedia.org/wiki/Romanization_of_Russian
        // ICAO
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "yo",
        ж: "zh",
        з: "z",
        и: "i",
        й: "i",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "c",
        ч: "ch",
        ш: "sh",
        щ: "sh",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "yu",
        я: "ya",
        А: "A",
        Б: "B",
        В: "V",
        Г: "G",
        Д: "D",
        Е: "E",
        Ё: "Yo",
        Ж: "Zh",
        З: "Z",
        И: "I",
        Й: "I",
        К: "K",
        Л: "L",
        М: "M",
        Н: "N",
        О: "O",
        П: "P",
        Р: "R",
        С: "S",
        Т: "T",
        У: "U",
        Ф: "F",
        Х: "Kh",
        Ц: "C",
        Ч: "Ch",
        Ш: "Sh",
        Щ: "Sh",
        Ъ: "",
        Ы: "Y",
        Ь: "",
        Э: "E",
        Ю: "Yu",
        Я: "Ya",
        // Serbian
        ђ: "dj",
        ј: "j",
        // 'љ': 'lj',  // duplicate
        // 'њ': 'nj', // duplicate
        ћ: "c",
        џ: "dz",
        Ђ: "Dj",
        Ј: "j",
        // 'Љ': 'Lj', // duplicate
        // 'Њ': 'Nj', // duplicate
        Ћ: "C",
        Џ: "Dz",
        // Slovak
        ľ: "l",
        ĺ: "l",
        ŕ: "r",
        Ľ: "L",
        Ĺ: "L",
        Ŕ: "R",
        // Turkish
        ş: "s",
        Ş: "S",
        ı: "i",
        İ: "I",
        // 'ç': 'c', // duplicate
        // 'Ç': 'C', // duplicate
        // 'ü': 'u', // duplicate, see langCharMap
        // 'Ü': 'U', // duplicate, see langCharMap
        // 'ö': 'o', // duplicate, see langCharMap
        // 'Ö': 'O', // duplicate, see langCharMap
        ğ: "g",
        Ğ: "G",
        // Vietnamese
        ả: "a",
        Ả: "A",
        ẳ: "a",
        Ẳ: "A",
        ẩ: "a",
        Ẩ: "A",
        đ: "d",
        Đ: "D",
        ẹ: "e",
        Ẹ: "E",
        ẽ: "e",
        Ẽ: "E",
        ẻ: "e",
        Ẻ: "E",
        ế: "e",
        Ế: "E",
        ề: "e",
        Ề: "E",
        ệ: "e",
        Ệ: "E",
        ễ: "e",
        Ễ: "E",
        ể: "e",
        Ể: "E",
        ỏ: "o",
        ọ: "o",
        Ọ: "o",
        ố: "o",
        Ố: "O",
        ồ: "o",
        Ồ: "O",
        ổ: "o",
        Ổ: "O",
        ộ: "o",
        Ộ: "O",
        ỗ: "o",
        Ỗ: "O",
        ơ: "o",
        Ơ: "O",
        ớ: "o",
        Ớ: "O",
        ờ: "o",
        Ờ: "O",
        ợ: "o",
        Ợ: "O",
        ỡ: "o",
        Ỡ: "O",
        Ở: "o",
        ở: "o",
        ị: "i",
        Ị: "I",
        ĩ: "i",
        Ĩ: "I",
        ỉ: "i",
        Ỉ: "i",
        ủ: "u",
        Ủ: "U",
        ụ: "u",
        Ụ: "U",
        ũ: "u",
        Ũ: "U",
        ư: "u",
        Ư: "U",
        ứ: "u",
        Ứ: "U",
        ừ: "u",
        Ừ: "U",
        ự: "u",
        Ự: "U",
        ữ: "u",
        Ữ: "U",
        ử: "u",
        Ử: "ư",
        ỷ: "y",
        Ỷ: "y",
        ỳ: "y",
        Ỳ: "Y",
        ỵ: "y",
        Ỵ: "Y",
        ỹ: "y",
        Ỹ: "Y",
        ạ: "a",
        Ạ: "A",
        ấ: "a",
        Ấ: "A",
        ầ: "a",
        Ầ: "A",
        ậ: "a",
        Ậ: "A",
        ẫ: "a",
        Ẫ: "A",
        // 'ă': 'a', // duplicate
        // 'Ă': 'A', // duplicate
        ắ: "a",
        Ắ: "A",
        ằ: "a",
        Ằ: "A",
        ặ: "a",
        Ặ: "A",
        ẵ: "a",
        Ẵ: "A",
        "⓪": "0",
        "①": "1",
        "②": "2",
        "③": "3",
        "④": "4",
        "⑤": "5",
        "⑥": "6",
        "⑦": "7",
        "⑧": "8",
        "⑨": "9",
        "⑩": "10",
        "⑪": "11",
        "⑫": "12",
        "⑬": "13",
        "⑭": "14",
        "⑮": "15",
        "⑯": "16",
        "⑰": "17",
        "⑱": "18",
        "⑲": "18",
        "⑳": "18",
        "⓵": "1",
        "⓶": "2",
        "⓷": "3",
        "⓸": "4",
        "⓹": "5",
        "⓺": "6",
        "⓻": "7",
        "⓼": "8",
        "⓽": "9",
        "⓾": "10",
        "⓿": "0",
        "⓫": "11",
        "⓬": "12",
        "⓭": "13",
        "⓮": "14",
        "⓯": "15",
        "⓰": "16",
        "⓱": "17",
        "⓲": "18",
        "⓳": "19",
        "⓴": "20",
        "Ⓐ": "A",
        "Ⓑ": "B",
        "Ⓒ": "C",
        "Ⓓ": "D",
        "Ⓔ": "E",
        "Ⓕ": "F",
        "Ⓖ": "G",
        "Ⓗ": "H",
        "Ⓘ": "I",
        "Ⓙ": "J",
        "Ⓚ": "K",
        "Ⓛ": "L",
        "Ⓜ": "M",
        "Ⓝ": "N",
        "Ⓞ": "O",
        "Ⓟ": "P",
        "Ⓠ": "Q",
        "Ⓡ": "R",
        "Ⓢ": "S",
        "Ⓣ": "T",
        "Ⓤ": "U",
        "Ⓥ": "V",
        "Ⓦ": "W",
        "Ⓧ": "X",
        "Ⓨ": "Y",
        "Ⓩ": "Z",
        "ⓐ": "a",
        "ⓑ": "b",
        "ⓒ": "c",
        "ⓓ": "d",
        "ⓔ": "e",
        "ⓕ": "f",
        "ⓖ": "g",
        "ⓗ": "h",
        "ⓘ": "i",
        "ⓙ": "j",
        "ⓚ": "k",
        "ⓛ": "l",
        "ⓜ": "m",
        "ⓝ": "n",
        "ⓞ": "o",
        "ⓟ": "p",
        "ⓠ": "q",
        "ⓡ": "r",
        "ⓢ": "s",
        "ⓣ": "t",
        "ⓤ": "u",
        "ⓦ": "v",
        "ⓥ": "w",
        "ⓧ": "x",
        "ⓨ": "y",
        "ⓩ": "z",
        // symbols
        "“": '"',
        "”": '"',
        "‘": "'",
        "’": "'",
        "∂": "d",
        ƒ: "f",
        "™": "(TM)",
        "©": "(C)",
        œ: "oe",
        Œ: "OE",
        "®": "(R)",
        "†": "+",
        "℠": "(SM)",
        "…": "...",
        "˚": "o",
        º: "o",
        ª: "a",
        "•": "*",
        "၊": ",",
        "။": ".",
        // currency
        $: "USD",
        "€": "EUR",
        "₢": "BRN",
        "₣": "FRF",
        "£": "GBP",
        "₤": "ITL",
        "₦": "NGN",
        "₧": "ESP",
        "₩": "KRW",
        "₪": "ILS",
        "₫": "VND",
        "₭": "LAK",
        "₮": "MNT",
        "₯": "GRD",
        "₱": "ARS",
        "₲": "PYG",
        "₳": "ARA",
        "₴": "UAH",
        "₵": "GHS",
        "¢": "cent",
        "¥": "CNY",
        元: "CNY",
        円: "YEN",
        "﷼": "IRR",
        "₠": "EWE",
        "฿": "THB",
        "₨": "INR",
        "₹": "INR",
        "₰": "PF",
        "₺": "TRY",
        "؋": "AFN",
        "₼": "AZN",
        лв: "BGN",
        "៛": "KHR",
        "₡": "CRC",
        "₸": "KZT",
        ден: "MKD",
        zł: "PLN",
        "₽": "RUB",
        "₾": "GEL"
      }, r = [
        // burmese
        "်",
        // Dhivehi
        "ް"
      ], o = {
        // Burmese
        // dependent vowels
        "ာ": "a",
        "ါ": "a",
        "ေ": "e",
        "ဲ": "e",
        "ိ": "i",
        "ီ": "i",
        "ို": "o",
        "ု": "u",
        "ူ": "u",
        "ေါင်": "aung",
        "ော": "aw",
        "ော်": "aw",
        "ေါ": "aw",
        "ေါ်": "aw",
        "်": "်",
        // this is special case but the character will be converted to latin in the code
        "က်": "et",
        "ိုက်": "aik",
        "ောက်": "auk",
        "င်": "in",
        "ိုင်": "aing",
        "ောင်": "aung",
        "စ်": "it",
        "ည်": "i",
        "တ်": "at",
        "ိတ်": "eik",
        "ုတ်": "ok",
        "ွတ်": "ut",
        "ေတ်": "it",
        "ဒ်": "d",
        "ိုဒ်": "ok",
        "ုဒ်": "ait",
        "န်": "an",
        "ာန်": "an",
        "ိန်": "ein",
        "ုန်": "on",
        "ွန်": "un",
        "ပ်": "at",
        "ိပ်": "eik",
        "ုပ်": "ok",
        "ွပ်": "ut",
        "န်ုပ်": "nub",
        "မ်": "an",
        "ိမ်": "ein",
        "ုမ်": "on",
        "ွမ်": "un",
        "ယ်": "e",
        "ိုလ်": "ol",
        "ဉ်": "in",
        "ံ": "an",
        "ိံ": "ein",
        "ုံ": "on",
        // Dhivehi
        "ައް": "ah",
        "ަށް": "ah"
      }, i = {
        en: {},
        // default language
        az: {
          // Azerbaijani
          ç: "c",
          ə: "e",
          ğ: "g",
          ı: "i",
          ö: "o",
          ş: "s",
          ü: "u",
          Ç: "C",
          Ə: "E",
          Ğ: "G",
          İ: "I",
          Ö: "O",
          Ş: "S",
          Ü: "U"
        },
        cs: {
          // Czech
          č: "c",
          ď: "d",
          ě: "e",
          ň: "n",
          ř: "r",
          š: "s",
          ť: "t",
          ů: "u",
          ž: "z",
          Č: "C",
          Ď: "D",
          Ě: "E",
          Ň: "N",
          Ř: "R",
          Š: "S",
          Ť: "T",
          Ů: "U",
          Ž: "Z"
        },
        fi: {
          // Finnish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          ä: "a",
          // ok
          Ä: "A",
          // ok
          ö: "o",
          // ok
          Ö: "O"
          // ok
        },
        hu: {
          // Hungarian
          ä: "a",
          // ok
          Ä: "A",
          // ok
          // 'á': 'a', duplicate see charMap/latin
          // 'Á': 'A', duplicate see charMap/latin
          ö: "o",
          // ok
          Ö: "O",
          // ok
          // 'ő': 'o', duplicate see charMap/latin
          // 'Ő': 'O', duplicate see charMap/latin
          ü: "u",
          Ü: "U",
          ű: "u",
          Ű: "U"
        },
        lt: {
          // Lithuanian
          ą: "a",
          č: "c",
          ę: "e",
          ė: "e",
          į: "i",
          š: "s",
          ų: "u",
          ū: "u",
          ž: "z",
          Ą: "A",
          Č: "C",
          Ę: "E",
          Ė: "E",
          Į: "I",
          Š: "S",
          Ų: "U",
          Ū: "U"
        },
        lv: {
          // Latvian
          ā: "a",
          č: "c",
          ē: "e",
          ģ: "g",
          ī: "i",
          ķ: "k",
          ļ: "l",
          ņ: "n",
          š: "s",
          ū: "u",
          ž: "z",
          Ā: "A",
          Č: "C",
          Ē: "E",
          Ģ: "G",
          Ī: "i",
          Ķ: "k",
          Ļ: "L",
          Ņ: "N",
          Š: "S",
          Ū: "u",
          Ž: "Z"
        },
        pl: {
          // Polish
          ą: "a",
          ć: "c",
          ę: "e",
          ł: "l",
          ń: "n",
          ó: "o",
          ś: "s",
          ź: "z",
          ż: "z",
          Ą: "A",
          Ć: "C",
          Ę: "e",
          Ł: "L",
          Ń: "N",
          Ó: "O",
          Ś: "S",
          Ź: "Z",
          Ż: "Z"
        },
        sv: {
          // Swedish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          ä: "a",
          // ok
          Ä: "A",
          // ok
          ö: "o",
          // ok
          Ö: "O"
          // ok
        },
        sk: {
          // Slovak
          ä: "a",
          Ä: "A"
        },
        sr: {
          // Serbian
          љ: "lj",
          њ: "nj",
          Љ: "Lj",
          Њ: "Nj",
          đ: "dj",
          Đ: "Dj"
        },
        tr: {
          // Turkish
          Ü: "U",
          Ö: "O",
          ü: "u",
          ö: "o"
        }
      }, a = {
        ar: {
          "∆": "delta",
          "∞": "la-nihaya",
          "♥": "hob",
          "&": "wa",
          "|": "aw",
          "<": "aqal-men",
          ">": "akbar-men",
          "∑": "majmou",
          "¤": "omla"
        },
        az: {},
        ca: {
          "∆": "delta",
          "∞": "infinit",
          "♥": "amor",
          "&": "i",
          "|": "o",
          "<": "menys que",
          ">": "mes que",
          "∑": "suma dels",
          "¤": "moneda"
        },
        cs: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "nebo",
          "<": "mensi nez",
          ">": "vetsi nez",
          "∑": "soucet",
          "¤": "mena"
        },
        de: {
          "∆": "delta",
          "∞": "unendlich",
          "♥": "Liebe",
          "&": "und",
          "|": "oder",
          "<": "kleiner als",
          ">": "groesser als",
          "∑": "Summe von",
          "¤": "Waehrung"
        },
        dv: {
          "∆": "delta",
          "∞": "kolunulaa",
          "♥": "loabi",
          "&": "aai",
          "|": "noonee",
          "<": "ah vure kuda",
          ">": "ah vure bodu",
          "∑": "jumula",
          "¤": "faisaa"
        },
        en: {
          "∆": "delta",
          "∞": "infinity",
          "♥": "love",
          "&": "and",
          "|": "or",
          "<": "less than",
          ">": "greater than",
          "∑": "sum",
          "¤": "currency"
        },
        es: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "y",
          "|": "u",
          "<": "menos que",
          ">": "mas que",
          "∑": "suma de los",
          "¤": "moneda"
        },
        fa: {
          "∆": "delta",
          "∞": "bi-nahayat",
          "♥": "eshgh",
          "&": "va",
          "|": "ya",
          "<": "kamtar-az",
          ">": "bishtar-az",
          "∑": "majmooe",
          "¤": "vahed"
        },
        fi: {
          "∆": "delta",
          "∞": "aarettomyys",
          "♥": "rakkaus",
          "&": "ja",
          "|": "tai",
          "<": "pienempi kuin",
          ">": "suurempi kuin",
          "∑": "summa",
          "¤": "valuutta"
        },
        fr: {
          "∆": "delta",
          "∞": "infiniment",
          "♥": "Amour",
          "&": "et",
          "|": "ou",
          "<": "moins que",
          ">": "superieure a",
          "∑": "somme des",
          "¤": "monnaie"
        },
        ge: {
          "∆": "delta",
          "∞": "usasruloba",
          "♥": "siqvaruli",
          "&": "da",
          "|": "an",
          "<": "naklebi",
          ">": "meti",
          "∑": "jami",
          "¤": "valuta"
        },
        gr: {},
        hu: {
          "∆": "delta",
          "∞": "vegtelen",
          "♥": "szerelem",
          "&": "es",
          "|": "vagy",
          "<": "kisebb mint",
          ">": "nagyobb mint",
          "∑": "szumma",
          "¤": "penznem"
        },
        it: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amore",
          "&": "e",
          "|": "o",
          "<": "minore di",
          ">": "maggiore di",
          "∑": "somma",
          "¤": "moneta"
        },
        lt: {
          "∆": "delta",
          "∞": "begalybe",
          "♥": "meile",
          "&": "ir",
          "|": "ar",
          "<": "maziau nei",
          ">": "daugiau nei",
          "∑": "suma",
          "¤": "valiuta"
        },
        lv: {
          "∆": "delta",
          "∞": "bezgaliba",
          "♥": "milestiba",
          "&": "un",
          "|": "vai",
          "<": "mazak neka",
          ">": "lielaks neka",
          "∑": "summa",
          "¤": "valuta"
        },
        my: {
          "∆": "kwahkhyaet",
          "∞": "asaonasme",
          "♥": "akhyait",
          "&": "nhin",
          "|": "tho",
          "<": "ngethaw",
          ">": "kyithaw",
          "∑": "paungld",
          "¤": "ngwekye"
        },
        mk: {},
        nl: {
          "∆": "delta",
          "∞": "oneindig",
          "♥": "liefde",
          "&": "en",
          "|": "of",
          "<": "kleiner dan",
          ">": "groter dan",
          "∑": "som",
          "¤": "valuta"
        },
        pl: {
          "∆": "delta",
          "∞": "nieskonczonosc",
          "♥": "milosc",
          "&": "i",
          "|": "lub",
          "<": "mniejsze niz",
          ">": "wieksze niz",
          "∑": "suma",
          "¤": "waluta"
        },
        pt: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "e",
          "|": "ou",
          "<": "menor que",
          ">": "maior que",
          "∑": "soma",
          "¤": "moeda"
        },
        ro: {
          "∆": "delta",
          "∞": "infinit",
          "♥": "dragoste",
          "&": "si",
          "|": "sau",
          "<": "mai mic ca",
          ">": "mai mare ca",
          "∑": "suma",
          "¤": "valuta"
        },
        ru: {
          "∆": "delta",
          "∞": "beskonechno",
          "♥": "lubov",
          "&": "i",
          "|": "ili",
          "<": "menshe",
          ">": "bolshe",
          "∑": "summa",
          "¤": "valjuta"
        },
        sk: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "alebo",
          "<": "menej ako",
          ">": "viac ako",
          "∑": "sucet",
          "¤": "mena"
        },
        sr: {},
        tr: {
          "∆": "delta",
          "∞": "sonsuzluk",
          "♥": "ask",
          "&": "ve",
          "|": "veya",
          "<": "kucuktur",
          ">": "buyuktur",
          "∑": "toplam",
          "¤": "para birimi"
        },
        uk: {
          "∆": "delta",
          "∞": "bezkinechnist",
          "♥": "lubov",
          "&": "i",
          "|": "abo",
          "<": "menshe",
          ">": "bilshe",
          "∑": "suma",
          "¤": "valjuta"
        },
        vn: {
          "∆": "delta",
          "∞": "vo cuc",
          "♥": "yeu",
          "&": "va",
          "|": "hoac",
          "<": "nho hon",
          ">": "lon hon",
          "∑": "tong",
          "¤": "tien te"
        }
      }, h = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), p = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), A = [".", "!", "~", "*", "'", "(", ")"].join(""), d = function(f, E) {
        var C = "-", y = "", k = "", _e = true, w = {}, Le, ne, j, fe, de, Me, G, B, Ke, P, v, ue, b, L, V = "";
        if (typeof f != "string")
          return "";
        if (typeof E == "string" && (C = E), G = a.en, B = i.en, typeof E == "object") {
          Le = E.maintainCase || false, w = E.custom && typeof E.custom == "object" ? E.custom : w, j = +E.truncate > 1 && E.truncate || false, fe = E.uric || false, de = E.uricNoSlash || false, Me = E.mark || false, _e = !(E.symbols === false || E.lang === false), C = E.separator || C, fe && (V += h), de && (V += p), Me && (V += A), G = E.lang && a[E.lang] && _e ? a[E.lang] : _e ? a.en : {}, B = E.lang && i[E.lang] ? i[E.lang] : E.lang === false || E.lang === true ? {} : i.en, E.titleCase && typeof E.titleCase.length == "number" && Array.prototype.toString.call(E.titleCase) ? (E.titleCase.forEach(function(I) {
            w[I + ""] = I + "";
          }), ne = true) : ne = !!E.titleCase, E.custom && typeof E.custom.length == "number" && Array.prototype.toString.call(E.custom) && E.custom.forEach(function(I) {
            w[I + ""] = I + "";
          }), Object.keys(w).forEach(function(I) {
            var W;
            I.length > 1 ? W = new RegExp("\\b" + c(I) + "\\b", "gi") : W = new RegExp(c(I), "gi"), f = f.replace(W, w[I]);
          });
          for (v in w)
            V += v;
        }
        for (V += C, V = c(V), f = f.replace(/(^\s+|\s+$)/g, ""), b = false, L = false, P = 0, ue = f.length; P < ue; P++)
          v = f[P], _(v, w) ? b = false : B[v] ? (v = b && B[v].match(/[A-Za-z0-9]/) ? " " + B[v] : B[v], b = false) : v in u ? (P + 1 < ue && r.indexOf(f[P + 1]) >= 0 ? (k += v, v = "") : L === true ? (v = o[k] + u[v], k = "") : v = b && u[v].match(/[A-Za-z0-9]/) ? " " + u[v] : u[v], b = false, L = false) : v in o ? (k += v, v = "", P === ue - 1 && (v = o[k]), L = true) : (
            /* process symbol chars */
            G[v] && !(fe && h.indexOf(v) !== -1) && !(de && p.indexOf(v) !== -1) ? (v = b || y.substr(-1).match(/[A-Za-z0-9]/) ? C + G[v] : G[v], v += f[P + 1] !== void 0 && f[P + 1].match(/[A-Za-z0-9]/) ? C : "", b = true) : (L === true ? (v = o[k] + v, k = "", L = false) : b && (/[A-Za-z0-9]/.test(v) || y.substr(-1).match(/A-Za-z0-9]/)) && (v = " " + v), b = false)
          ), y += v.replace(new RegExp("[^\\w\\s" + V + "_-]", "g"), C);
        return ne && (y = y.replace(/(\w)(\S*)/g, function(I, W, He) {
          var Ee = W.toUpperCase() + (He !== null ? He : "");
          return Object.keys(w).indexOf(Ee.toLowerCase()) < 0 ? Ee : Ee.toLowerCase();
        })), y = y.replace(/\s+/g, C).replace(new RegExp("\\" + C + "+", "g"), C).replace(new RegExp("(^\\" + C + "+|\\" + C + "+$)", "g"), ""), j && y.length > j && (Ke = y.charAt(j) === C, y = y.slice(0, j), Ke || (y = y.slice(0, y.lastIndexOf(C)))), !Le && !ne && (y = y.toLowerCase()), y;
      }, m = function(f) {
        return function(C) {
          return d(C, f);
        };
      }, c = function(f) {
        return f.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, _ = function(g, f) {
        for (var E in f)
          if (f[E] === g)
            return true;
      };
      if (typeof t < "u" && t.exports)
        t.exports = d, t.exports.createSlug = m;
      else if (typeof define < "u" && define.amd)
        define([], function() {
          return d;
        });
      else
        try {
          if (n.getSlug || n.createSlug)
            throw "speakingurl: globals exists /(getSlug|createSlug)/";
          n.getSlug = d, n.createSlug = m;
        } catch {
        }
    }(e);
  }
});
var uu = Xt({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
    s(), t.exports = nu();
  }
});
s();
s();
s();
s();
s();
s();
s();
s();
function ru(e) {
  var t;
  const n = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return n === "index" && ((t = e.__file) != null && t.endsWith("index.vue")) ? "" : n;
}
function ou(e) {
  const t = e.__file;
  if (t)
    return Bn(Ln(t, ".vue"));
}
function je(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Re(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function Jt(e) {
  var t, n;
  const u = (t = e.subTree) == null ? void 0 : t.type, r = Re(e);
  return r ? ((n = r == null ? void 0 : r.types) == null ? void 0 : n.Fragment) === u : false;
}
function ae(e) {
  var t, n, u;
  const r = ru((e == null ? void 0 : e.type) || {});
  if (r)
    return r;
  if ((e == null ? void 0 : e.root) === e)
    return "Root";
  for (const i in (n = (t = e.parent) == null ? void 0 : t.type) == null ? void 0 : n.components)
    if (e.parent.type.components[i] === (e == null ? void 0 : e.type))
      return je(e, i);
  for (const i in (u = e.appContext) == null ? void 0 : u.components)
    if (e.appContext.components[i] === (e == null ? void 0 : e.type))
      return je(e, i);
  const o = ou((e == null ? void 0 : e.type) || {});
  return o || "Anonymous Component";
}
function iu(e) {
  var t, n, u;
  const r = (u = (n = (t = e == null ? void 0 : e.appContext) == null ? void 0 : t.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? u : 0, o = e === (e == null ? void 0 : e.root) ? "root" : e.uid;
  return `${r}:${o}`;
}
function ve(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function su() {
  const e = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    get width() {
      return e.right - e.left;
    },
    get height() {
      return e.bottom - e.top;
    }
  };
  return e;
}
var re;
function au(e) {
  return re || (re = document.createRange()), re.selectNode(e), re.getBoundingClientRect();
}
function lu(e) {
  const t = su();
  if (!e.children)
    return t;
  for (let n = 0, u = e.children.length; n < u; n++) {
    const r = e.children[n];
    let o;
    if (r.component)
      o = U(r.component);
    else if (r.el) {
      const i = r.el;
      i.nodeType === 1 || i.getBoundingClientRect ? o = i.getBoundingClientRect() : i.nodeType === 3 && i.data.trim() && (o = au(i));
    }
    o && cu(t, o);
  }
  return t;
}
function cu(e, t) {
  return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var Ge = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function U(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? Ge : Jt(e) ? lu(e.subTree) : (t == null ? void 0 : t.nodeType) === 1 ? t == null ? void 0 : t.getBoundingClientRect() : e.subTree.component ? U(e.subTree.component) : Ge;
}
s();
function we(e) {
  return Jt(e) ? _u(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function _u(e) {
  if (!e.children)
    return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...we(n.component)) : n != null && n.el && t.push(n.el);
  }), t;
}
var Qt = "__vue-devtools-component-inspector__";
var en = "__vue-devtools-component-inspector__card__";
var tn = "__vue-devtools-component-inspector__name__";
var nn = "__vue-devtools-component-inspector__indicator__";
var un = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
};
var fu = {
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "5px 8px",
  borderRadius: "4px",
  textAlign: "left",
  position: "absolute",
  left: 0,
  color: "#e9e9e9",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "24px",
  backgroundColor: "#42b883",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
};
var du = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function $() {
  return document.getElementById(Qt);
}
function Eu() {
  return document.getElementById(en);
}
function pu() {
  return document.getElementById(nn);
}
function hu() {
  return document.getElementById(tn);
}
function Pe(e) {
  return {
    left: `${Math.round(e.left * 100) / 100}px`,
    top: `${Math.round(e.top * 100) / 100}px`,
    width: `${Math.round(e.width * 100) / 100}px`,
    height: `${Math.round(e.height * 100) / 100}px`
  };
}
function Ve(e) {
  var t;
  const n = document.createElement("div");
  n.id = (t = e.elementId) != null ? t : Qt, Object.assign(n.style, {
    ...un,
    ...Pe(e.bounds),
    ...e.style
  });
  const u = document.createElement("span");
  u.id = en, Object.assign(u.style, {
    ...fu,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const r = document.createElement("span");
  r.id = tn, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const o = document.createElement("i");
  return o.id = nn, o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(o.style, du), u.appendChild(r), u.appendChild(o), n.appendChild(u), document.body.appendChild(n), n;
}
function xe(e) {
  const t = $(), n = Eu(), u = hu(), r = pu();
  t && (Object.assign(t.style, {
    ...un,
    ...Pe(e.bounds)
  }), Object.assign(n.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), u.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, r.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function gu(e) {
  const t = U(e);
  if (!t.width && !t.height)
    return;
  const n = ae(e);
  $() ? xe({ bounds: t, name: n }) : Ve({ bounds: t, name: n });
}
function rn() {
  const e = $();
  e && (e.style.display = "none");
}
var Ae = null;
function ye(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && (Ae = n, n.vnode.el)) {
      const r = U(n), o = ae(n);
      $() ? xe({ bounds: r, name: o }) : Ve({ bounds: r, name: o });
    }
  }
}
function mu(e, t) {
  if (e.preventDefault(), e.stopPropagation(), Ae) {
    const n = iu(Ae);
    t(n);
  }
}
var se = null;
function vu() {
  rn(), window.removeEventListener("mouseover", ye), window.removeEventListener("click", se, true), se = null;
}
function Au() {
  return window.addEventListener("mouseover", ye), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), mu(n, (u) => {
        window.removeEventListener("click", t, true), se = null, window.removeEventListener("mouseover", ye);
        const r = $();
        r && (r.style.display = "none"), e(JSON.stringify({ id: u }));
      });
    }
    se = t, window.addEventListener("click", t, true);
  });
}
function yu(e) {
  const t = ve(D.value, e.id);
  if (t) {
    const [n] = we(t);
    if (typeof n.scrollIntoView == "function")
      n.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const u = U(t), r = document.createElement("div"), o = {
        ...Pe(u),
        position: "absolute"
      };
      Object.assign(r.style, o), document.body.appendChild(r), r.scrollIntoView({
        behavior: "smooth"
      }), setTimeout(() => {
        document.body.removeChild(r);
      }, 2e3);
    }
    setTimeout(() => {
      const u = U(t);
      if (u.width || u.height) {
        const r = ae(t), o = $();
        o ? xe({ ...e, name: r, bounds: u }) : Ve({ ...e, name: r, bounds: u }), setTimeout(() => {
          o && (o.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
s();
var We;
var qe;
(qe = (We = l).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (We.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = true);
function Ou(e) {
  let t = 0;
  const n = setInterval(() => {
    l.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(n);
  }, 30);
}
function Cu() {
  const e = l.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function Tu() {
  return new Promise((e) => {
    function t() {
      Cu(), e(l.__VUE_INSPECTOR__);
    }
    l.__VUE_INSPECTOR__ ? t() : Ou(() => {
      t();
    });
  });
}
s();
s();
function Du(e) {
  return !!(e && e.__v_isReadonly);
}
function on(e) {
  return Du(e) ? on(e.__v_raw) : !!(e && e.__v_isReactive);
}
function he(e) {
  return !!(e && e.__v_isRef === true);
}
function q(e) {
  const t = e && e.__v_raw;
  return t ? q(t) : e;
}
var Su = class {
  constructor() {
    this.refEditor = new Iu();
  }
  set(e, t, n, u) {
    const r = Array.isArray(t) ? t : t.split(".");
    for (; r.length > 1; ) {
      const a = r.shift();
      e instanceof Map && (e = e.get(a)), e instanceof Set ? e = Array.from(e.values())[a] : e = e[a], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    const o = r[0], i = this.refEditor.get(e)[o];
    u ? u(e, o, n) : this.refEditor.isRef(i) ? this.refEditor.set(i, n) : e[o] = n;
  }
  get(e, t) {
    const n = Array.isArray(t) ? t : t.split(".");
    for (let u = 0; u < n.length; u++)
      if (e instanceof Map ? e = e.get(n[u]) : e = e[n[u]], this.refEditor.isRef(e) && (e = this.refEditor.get(e)), !e)
        return;
    return e;
  }
  has(e, t, n = false) {
    if (typeof e > "u")
      return false;
    const u = Array.isArray(t) ? t.slice() : t.split("."), r = n ? 2 : 1;
    for (; e && u.length > r; ) {
      const o = u.shift();
      e = e[o], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    return e != null && Object.prototype.hasOwnProperty.call(e, u[0]);
  }
  createDefaultSetCallback(e) {
    return (t, n, u) => {
      if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : q(t) instanceof Map ? t.delete(n) : q(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
        const r = t[e.newKey || n];
        this.refEditor.isRef(r) ? this.refEditor.set(r, u) : q(t) instanceof Map ? t.set(e.newKey || n, u) : q(t) instanceof Set ? t.add(u) : t[e.newKey || n] = u;
      }
    };
  }
};
var Iu = class {
  set(e, t) {
    if (he(e))
      e.value = t;
    else {
      if (e instanceof Set && Array.isArray(t)) {
        e.clear(), t.forEach((r) => e.add(r));
        return;
      }
      const n = Object.keys(t);
      if (e instanceof Map) {
        const r = new Set(e.keys());
        n.forEach((o) => {
          e.set(o, Reflect.get(t, o)), r.delete(o);
        }), r.forEach((o) => e.delete(o));
        return;
      }
      const u = new Set(Object.keys(e));
      n.forEach((r) => {
        Reflect.set(e, r, Reflect.get(t, r)), u.delete(r);
      }), u.forEach((r) => Reflect.deleteProperty(e, r));
    }
  }
  get(e) {
    return he(e) ? e.value : e;
  }
  isRef(e) {
    return he(e) || on(e);
  }
};
s();
s();
s();
var ku = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function bu() {
  if (!Wt || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: false,
      mouseEventEnabled: false,
      keyboardEventEnabled: false,
      componentEventEnabled: false,
      performanceEventEnabled: false,
      selected: ""
    };
  const e = localStorage.getItem(ku);
  return e ? JSON.parse(e) : {
    recordingState: false,
    mouseEventEnabled: false,
    keyboardEventEnabled: false,
    componentEventEnabled: false,
    performanceEventEnabled: false,
    selected: ""
  };
}
s();
s();
s();
var Ye;
var Ze;
(Ze = (Ye = l).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (Ye.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var Ru = new Proxy(l.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function wu(e, t) {
  T.timelineLayersState[t.id] = false, Ru.push({
    ...e,
    descriptorId: t.id,
    appRecord: Re(t.app)
  });
}
var Xe;
var Je;
(Je = (Xe = l).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (Xe.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var Ne = new Proxy(l.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
var sn = K(() => {
  N.hooks.callHook("sendInspectorToClient", an());
});
function Pu(e, t) {
  var n, u;
  Ne.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : "Search tree...",
    stateFilterPlaceholder: (u = e.stateFilterPlaceholder) != null ? u : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: Re(t.app)
  }), sn();
}
function an() {
  return Ne.filter((e) => e.descriptor.app === D.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
    var t;
    const n = e.descriptor, u = e.options;
    return {
      id: u.id,
      label: u.label,
      logo: n.logo,
      icon: `custom-ic-baseline-${(t = u == null ? void 0 : u.icon) == null ? void 0 : t.replace(/_/g, "-")}`,
      packageName: n.packageName,
      homepage: n.homepage,
      pluginId: n.id
    };
  });
}
function oe(e, t) {
  return Ne.find((n) => n.options.id === e && (t ? n.descriptor.app === t : true));
}
function Vu() {
  const e = Yt();
  e.hook("addInspector", ({ inspector: u, plugin: r }) => {
    Pu(u, r.descriptor);
  });
  const t = K(async ({ inspectorId: u, plugin: r }) => {
    var o;
    if (!u || !((o = r == null ? void 0 : r.descriptor) != null && o.app) || T.highPerfModeEnabled)
      return;
    const i = oe(u, r.descriptor.app), a = {
      app: r.descriptor.app,
      inspectorId: u,
      filter: (i == null ? void 0 : i.treeFilter) || "",
      rootNodes: []
    };
    await new Promise((h) => {
      e.callHookWith(
        async (p) => {
          await Promise.all(p.map((A) => A(a))), h();
        },
        "getInspectorTree"
        /* GET_INSPECTOR_TREE */
      );
    }), e.callHookWith(
      async (h) => {
        await Promise.all(h.map((p) => p({
          inspectorId: u,
          rootNodes: a.rootNodes
        })));
      },
      "sendInspectorTreeToClient"
      /* SEND_INSPECTOR_TREE_TO_CLIENT */
    );
  }, 120);
  e.hook("sendInspectorTree", t);
  const n = K(async ({ inspectorId: u, plugin: r }) => {
    var o;
    if (!u || !((o = r == null ? void 0 : r.descriptor) != null && o.app) || T.highPerfModeEnabled)
      return;
    const i = oe(u, r.descriptor.app), a = {
      app: r.descriptor.app,
      inspectorId: u,
      nodeId: (i == null ? void 0 : i.selectedNodeId) || "",
      state: null
    }, h = {
      currentTab: `custom-inspector:${u}`
    };
    a.nodeId && await new Promise((p) => {
      e.callHookWith(
        async (A) => {
          await Promise.all(A.map((d) => d(a, h))), p();
        },
        "getInspectorState"
        /* GET_INSPECTOR_STATE */
      );
    }), e.callHookWith(
      async (p) => {
        await Promise.all(p.map((A) => A({
          inspectorId: u,
          nodeId: a.nodeId,
          state: a.state
        })));
      },
      "sendInspectorStateToClient"
      /* SEND_INSPECTOR_STATE_TO_CLIENT */
    );
  }, 120);
  return e.hook("sendInspectorState", n), e.hook("customInspectorSelectNode", ({ inspectorId: u, nodeId: r, plugin: o }) => {
    const i = oe(u, o.descriptor.app);
    i && (i.selectedNodeId = r);
  }), e.hook("timelineLayerAdded", ({ options: u, plugin: r }) => {
    wu(u, r.descriptor);
  }), e.hook("timelineEventAdded", ({ options: u, plugin: r }) => {
    var o;
    const i = ["performance", "component-event", "keyboard", "mouse"];
    T.highPerfModeEnabled || !((o = T.timelineLayersState) != null && o[r.descriptor.id]) && !i.includes(u.layerId) || e.callHookWith(
      async (a) => {
        await Promise.all(a.map((h) => h(u)));
      },
      "sendTimelineEventToClient"
      /* SEND_TIMELINE_EVENT_TO_CLIENT */
    );
  }), e.hook("getComponentInstances", async ({ app: u }) => {
    const r = u.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
    if (!r)
      return null;
    const o = r.id.toString();
    return [...r.instanceMap].filter(([a]) => a.split(":")[0] === o).map(([, a]) => a);
  }), e.hook("getComponentBounds", async ({ instance: u }) => U(u)), e.hook("getComponentName", ({ instance: u }) => ae(u)), e.hook("componentHighlight", ({ uid: u }) => {
    const r = D.value.instanceMap.get(u);
    r && gu(r);
  }), e.hook("componentUnhighlight", () => {
    rn();
  }), e;
}
var Qe;
var et;
(et = (Qe = l).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (Qe.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var tt;
var nt;
(nt = (tt = l).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (tt.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var ut;
var rt;
(rt = (ut = l).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (ut.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var ot;
var it;
(it = (ot = l).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (ot.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var st;
var at;
(at = (st = l).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (st.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var F = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function xu() {
  return {
    connected: false,
    clientConnected: false,
    vitePluginDetected: true,
    appRecords: [],
    activeAppRecordId: "",
    tabs: [],
    commands: [],
    highPerfModeEnabled: true,
    devtoolsClientDetected: {},
    perfUniqueGroupId: 0,
    timelineLayersState: bu()
  };
}
var lt;
var ct;
(ct = (lt = l)[F]) != null || (lt[F] = xu());
var Nu = K((e) => {
  N.hooks.callHook("devtoolsStateUpdated", { state: e });
});
K((e, t) => {
  N.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var le = new Proxy(l.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, n) {
    return t === "value" ? l.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : l.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
});
var D = new Proxy(l.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, n) {
    return t === "value" ? l.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? l.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : l.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function te() {
  Nu({
    ...l[F],
    appRecords: le.value,
    activeAppRecordId: D.id,
    tabs: l.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: l.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function Fu(e) {
  l.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, te();
}
function Uu(e) {
  l.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, te();
}
var T = new Proxy(l[F], {
  get(e, t) {
    return t === "appRecords" ? le : t === "activeAppRecordId" ? D.id : t === "tabs" ? l.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? l.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : l[F][t];
  },
  deleteProperty(e, t) {
    return delete e[t], true;
  },
  set(e, t, n) {
    return { ...l[F] }, e[t] = n, l[F][t] = n, true;
  }
});
function Pr(e) {
  return new Promise((t) => {
    T.connected && (e(), t()), N.hooks.hook("devtoolsConnectedUpdated", ({ state: n }) => {
      n.connected && (e(), t());
    });
  });
}
var Oe = (e) => {
  if (e)
    return e.startsWith("baseline-") ? `custom-ic-${e}` : e.startsWith("i-") || Kn(e) ? e : `custom-ic-baseline-${e}`;
};
function Vr(e) {
  const t = l.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__;
  t.some((n) => n.name === e.name) || (t.push({
    ...e,
    icon: Oe(e.icon)
  }), te());
}
function xr(e) {
  const t = l.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__;
  t.some((n) => n.id === e.id) || (t.push({
    ...e,
    icon: Oe(e.icon),
    children: e.children ? e.children.map((n) => ({
      ...n,
      icon: Oe(n.icon)
    })) : void 0
  }), te());
}
function Nr(e) {
  const t = l.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__, n = t.findIndex((u) => u.id === e);
  n !== -1 && (t.splice(n, 1), te());
}
function Bu(e = {}) {
  var t, n, u;
  const { file: r, host: o, baseUrl: i = window.location.origin, line: a = 0, column: h = 0 } = e;
  if (r) {
    if (o === "chrome-extension") {
      const p = r.replace(/\\/g, "\\\\"), A = (n = (t = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : t.openInEditorHost) != null ? n : "/";
      fetch(`${A}__open-in-editor?file=${encodeURI(r)}`).then((d) => {
        if (!d.ok) {
          const m = `Opening component ${p} failed`;
          console.log(`%c${m}`, "color:red");
        }
      });
    } else if (T.vitePluginDetected) {
      const p = (u = l.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? u : i;
      l.__VUE_INSPECTOR__.openInEditor(p, r, a, h);
    }
  }
}
s();
s();
s();
s();
s();
var _t;
var ft;
(ft = (_t = l).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (_t.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var Fe = new Proxy(l.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function Ce(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = e[n].defaultValue;
  }), t;
}
function Ue(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function Lu(e) {
  var t, n, u;
  const r = (n = (t = Fe.find((o) => {
    var i;
    return o[0].id === e && !!((i = o[0]) != null && i.settings);
  })) == null ? void 0 : t[0]) != null ? n : null;
  return (u = r == null ? void 0 : r.settings) != null ? u : null;
}
function ln(e, t) {
  var n, u, r;
  const o = Ue(e);
  if (o) {
    const i = localStorage.getItem(o);
    if (i)
      return JSON.parse(i);
  }
  if (e) {
    const i = (u = (n = Fe.find((a) => a[0].id === e)) == null ? void 0 : n[0]) != null ? u : null;
    return Ce((r = i == null ? void 0 : i.settings) != null ? r : {});
  }
  return Ce(t);
}
function Mu(e, t) {
  const n = Ue(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(Ce(t)));
}
function Ku(e, t, n) {
  const u = Ue(e), r = localStorage.getItem(u), o = JSON.parse(r || "{}"), i = {
    ...o,
    [t]: n
  };
  localStorage.setItem(u, JSON.stringify(i)), N.hooks.callHookWith(
    (a) => {
      a.forEach((h) => h({
        pluginId: e,
        key: t,
        oldValue: o[t],
        newValue: n,
        settings: i
      }));
    },
    "setPluginSettings"
    /* SET_PLUGIN_SETTINGS */
  );
}
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
var dt;
var Et;
var S = (Et = (dt = l).__VUE_DEVTOOLS_HOOK) != null ? Et : dt.__VUE_DEVTOOLS_HOOK = Yt();
var Hu = {
  vueAppInit(e) {
    S.hook("app:init", e);
  },
  vueAppUnmount(e) {
    S.hook("app:unmount", e);
  },
  vueAppConnected(e) {
    S.hook("app:connected", e);
  },
  componentAdded(e) {
    return S.hook("component:added", e);
  },
  componentEmit(e) {
    return S.hook("component:emit", e);
  },
  componentUpdated(e) {
    return S.hook("component:updated", e);
  },
  componentRemoved(e) {
    return S.hook("component:removed", e);
  },
  setupDevtoolsPlugin(e) {
    S.hook("devtools-plugin:setup", e);
  },
  perfStart(e) {
    return S.hook("perf:start", e);
  },
  perfEnd(e) {
    return S.hook("perf:end", e);
  }
};
var cn = {
  on: Hu,
  setupDevToolsPlugin(e, t) {
    return S.callHook("devtools-plugin:setup", e, t);
  }
};
var zu = class {
  constructor({ plugin: e, ctx: t }) {
    this.hooks = t.hooks, this.plugin = e;
  }
  get on() {
    return {
      // component inspector
      visitComponentTree: (e) => {
        this.hooks.hook("visitComponentTree", e);
      },
      inspectComponent: (e) => {
        this.hooks.hook("inspectComponent", e);
      },
      editComponentState: (e) => {
        this.hooks.hook("editComponentState", e);
      },
      // custom inspector
      getInspectorTree: (e) => {
        this.hooks.hook("getInspectorTree", e);
      },
      getInspectorState: (e) => {
        this.hooks.hook("getInspectorState", e);
      },
      editInspectorState: (e) => {
        this.hooks.hook("editInspectorState", e);
      },
      // timeline
      inspectTimelineEvent: (e) => {
        this.hooks.hook("inspectTimelineEvent", e);
      },
      timelineCleared: (e) => {
        this.hooks.hook("timelineCleared", e);
      },
      // settings
      setPluginSettings: (e) => {
        this.hooks.hook("setPluginSettings", e);
      }
    };
  }
  // component inspector
  notifyComponentUpdate(e) {
    var t;
    if (T.highPerfModeEnabled)
      return;
    const n = an().find((u) => u.packageName === this.plugin.descriptor.packageName);
    if (n != null && n.id) {
      if (e) {
        const u = [
          e.appContext.app,
          e.uid,
          (t = e.parent) == null ? void 0 : t.uid,
          e
        ];
        S.callHook("component:updated", ...u);
      } else
        S.callHook(
          "component:updated"
          /* COMPONENT_UPDATED */
        );
      this.hooks.callHook("sendInspectorState", { inspectorId: n.id, plugin: this.plugin });
    }
  }
  // custom inspector
  addInspector(e) {
    this.hooks.callHook("addInspector", { inspector: e, plugin: this.plugin }), this.plugin.descriptor.settings && Mu(e.id, this.plugin.descriptor.settings);
  }
  sendInspectorTree(e) {
    T.highPerfModeEnabled || this.hooks.callHook("sendInspectorTree", { inspectorId: e, plugin: this.plugin });
  }
  sendInspectorState(e) {
    T.highPerfModeEnabled || this.hooks.callHook("sendInspectorState", { inspectorId: e, plugin: this.plugin });
  }
  selectInspectorNode(e, t) {
    this.hooks.callHook("customInspectorSelectNode", { inspectorId: e, nodeId: t, plugin: this.plugin });
  }
  visitComponentTree(e) {
    return this.hooks.callHook("visitComponentTree", e);
  }
  // timeline
  now() {
    return T.highPerfModeEnabled ? 0 : Date.now();
  }
  addTimelineLayer(e) {
    this.hooks.callHook("timelineLayerAdded", { options: e, plugin: this.plugin });
  }
  addTimelineEvent(e) {
    T.highPerfModeEnabled || this.hooks.callHook("timelineEventAdded", { options: e, plugin: this.plugin });
  }
  // settings
  getSettings(e) {
    return ln(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
  }
  // utilities
  getComponentInstances(e) {
    return this.hooks.callHook("getComponentInstances", { app: e });
  }
  getComponentBounds(e) {
    return this.hooks.callHook("getComponentBounds", { instance: e });
  }
  getComponentName(e) {
    return this.hooks.callHook("getComponentName", { instance: e });
  }
  highlightElement(e) {
    const t = e.__VUE_DEVTOOLS_NEXT_UID__;
    return this.hooks.callHook("componentHighlight", { uid: t });
  }
  unhighlightElement() {
    return this.hooks.callHook(
      "componentUnhighlight"
      /* COMPONENT_UNHIGHLIGHT */
    );
  }
};
var $u = zu;
s();
s();
s();
s();
var ju = "__vue_devtool_undefined__";
var Gu = "__vue_devtool_infinity__";
var Wu = "__vue_devtool_negative_infinity__";
var qu = "__vue_devtool_nan__";
s();
s();
var Yu = {
  [ju]: "undefined",
  [qu]: "NaN",
  [Gu]: "Infinity",
  [Wu]: "-Infinity"
};
Object.entries(Yu).reduce((e, [t, n]) => (e[n] = t, e), {});
s();
s();
s();
s();
s();
var pt;
var ht;
(ht = (pt = l).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (pt.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function Fr(e, t) {
  return cn.setupDevToolsPlugin(e, t);
}
function Zu(e, t) {
  const [n, u] = e;
  if (n.app !== t)
    return;
  const r = new $u({
    plugin: {
      setupFn: u,
      descriptor: n
    },
    ctx: N
  });
  n.packageName === "vuex" && r.on.editInspectorState((o) => {
    r.sendInspectorState(o.inspectorId);
  }), u(r);
}
function _n(e, t) {
  l.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || T.highPerfModeEnabled && !(t != null && t.inspectingComponent) || (l.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), Fe.forEach((n) => {
    Zu(n, e);
  }));
}
s();
s();
var Z = "__VUE_DEVTOOLS_ROUTER__";
var H = "__VUE_DEVTOOLS_ROUTER_INFO__";
var gt;
var mt;
(mt = (gt = l)[H]) != null || (gt[H] = {
  currentRoute: null,
  routes: []
});
var vt;
var At;
(At = (vt = l)[Z]) != null || (vt[Z] = {});
new Proxy(l[H], {
  get(e, t) {
    return l[H][t];
  }
});
new Proxy(l[Z], {
  get(e, t) {
    if (t === "value")
      return l[Z];
  }
});
function Xu(e) {
  const t = /* @__PURE__ */ new Map();
  return ((e == null ? void 0 : e.getRoutes()) || []).filter((n) => !t.has(n.path) && t.set(n.path, 1));
}
function Be(e) {
  return e.map((t) => {
    let { path: n, name: u, children: r, meta: o } = t;
    return r != null && r.length && (r = Be(r)), {
      path: n,
      name: u,
      children: r,
      meta: o
    };
  });
}
function Ju(e) {
  if (e) {
    const { fullPath: t, hash: n, href: u, path: r, name: o, matched: i, params: a, query: h } = e;
    return {
      fullPath: t,
      hash: n,
      href: u,
      path: r,
      name: o,
      params: a,
      query: h,
      matched: Be(i)
    };
  }
  return e;
}
function Qu(e, t) {
  function n() {
    var u;
    const r = (u = e.app) == null ? void 0 : u.config.globalProperties.$router, o = Ju(r == null ? void 0 : r.currentRoute.value), i = Be(Xu(r)), a = console.warn;
    console.warn = () => {
    }, l[H] = {
      currentRoute: o ? $e(o) : {},
      routes: $e(i)
    }, l[Z] = r, console.warn = a;
  }
  n(), cn.on.componentUpdated(K(() => {
    var u;
    ((u = t.value) == null ? void 0 : u.app) === e.app && (n(), !T.highPerfModeEnabled && N.hooks.callHook("routerInfoUpdated", { state: l[H] }));
  }, 200));
}
function er(e) {
  return {
    // get inspector tree
    async getInspectorTree(t) {
      const n = {
        ...t,
        app: D.value.app,
        rootNodes: []
      };
      return await new Promise((u) => {
        e.callHookWith(
          async (r) => {
            await Promise.all(r.map((o) => o(n))), u();
          },
          "getInspectorTree"
          /* GET_INSPECTOR_TREE */
        );
      }), n.rootNodes;
    },
    // get inspector state
    async getInspectorState(t) {
      const n = {
        ...t,
        app: D.value.app,
        state: null
      }, u = {
        currentTab: `custom-inspector:${t.inspectorId}`
      };
      return await new Promise((r) => {
        e.callHookWith(
          async (o) => {
            await Promise.all(o.map((i) => i(n, u))), r();
          },
          "getInspectorState"
          /* GET_INSPECTOR_STATE */
        );
      }), n.state;
    },
    // edit inspector state
    editInspectorState(t) {
      const n = new Su(), u = {
        ...t,
        app: D.value.app,
        set: (r, o = t.path, i = t.state.value, a) => {
          n.set(r, o, i, a || n.createDefaultSetCallback(t.state));
        }
      };
      e.callHookWith(
        (r) => {
          r.forEach((o) => o(u));
        },
        "editInspectorState"
        /* EDIT_INSPECTOR_STATE */
      );
    },
    // send inspector state
    sendInspectorState(t) {
      const n = oe(t);
      e.callHook("sendInspectorState", { inspectorId: t, plugin: {
        descriptor: n.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return Au();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return vu();
    },
    // get component render code
    getComponentRenderCode(t) {
      const n = ve(D.value, t);
      if (n)
        return (n == null ? void 0 : n.type) instanceof Function ? n.type.toString() : n.render.toString();
    },
    // scroll to component
    scrollToComponent(t) {
      return yu({ id: t });
    },
    // open in editor
    openInEditor: Bu,
    // get vue inspector
    getVueInspector: Tu,
    // toggle app
    toggleApp(t, n) {
      const u = le.value.find((r) => r.id === t);
      u && (Uu(t), Fu(u), Qu(u, D), sn(), _n(u.app, n));
    },
    // inspect dom
    inspectDOM(t) {
      const n = ve(D.value, t);
      if (n) {
        const [u] = we(n);
        u && (l.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = u);
      }
    },
    updatePluginSettings(t, n, u) {
      Ku(t, n, u);
    },
    getPluginSettings(t) {
      return {
        options: Lu(t),
        values: ln(t)
      };
    }
  };
}
s();
var yt;
var Ot;
(Ot = (yt = l).__VUE_DEVTOOLS_ENV__) != null || (yt.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: false
});
var Ct = Vu();
var Tt;
var Dt;
(Dt = (Tt = l).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (Tt.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: Ct,
  get state() {
    return {
      ...T,
      activeAppRecordId: D.id,
      activeAppRecord: D.value,
      appRecords: le.value
    };
  },
  api: er(Ct)
});
var N = l.__VUE_DEVTOOLS_KIT_CONTEXT__;
s();
tu(uu());
var St;
var It;
(It = (St = l).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (St.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
function Ur(e) {
  return new Promise((t) => {
    if (T.connected && T.clientConnected) {
      e(), t();
      return;
    }
    N.hooks.hook("devtoolsConnectedUpdated", ({ state: n }) => {
      n.connected && n.clientConnected && (e(), t());
    });
  });
}
s();
function tr(e) {
  T.highPerfModeEnabled = e ?? !T.highPerfModeEnabled, !e && D.value && _n(D.value.app);
}
s();
s();
s();
function nr(e) {
  T.devtoolsClientDetected = {
    ...T.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(T.devtoolsClientDetected).some(Boolean);
  tr(!t);
}
var kt;
var bt;
(bt = (kt = l).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (kt.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = nr);
s();
s();
s();
s();
s();
s();
s();
var ur = class {
  constructor() {
    this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
  }
  set(e, t) {
    this.keyToValue.set(e, t), this.valueToKey.set(t, e);
  }
  getByKey(e) {
    return this.keyToValue.get(e);
  }
  getByValue(e) {
    return this.valueToKey.get(e);
  }
  clear() {
    this.keyToValue.clear(), this.valueToKey.clear();
  }
};
var fn = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new ur();
  }
  register(e, t) {
    this.kv.getByValue(e) || (t || (t = this.generateIdentifier(e)), this.kv.set(t, e));
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(e) {
    return this.kv.getByValue(e);
  }
  getValue(e) {
    return this.kv.getByKey(e);
  }
};
var rr = class extends fn {
  constructor() {
    super((e) => e.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
  }
  register(e, t) {
    typeof t == "object" ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t);
  }
  getAllowedProps(e) {
    return this.classToAllowedProps.get(e);
  }
};
s();
s();
function or(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const n in e)
    e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function ir(e, t) {
  const n = or(e);
  if ("find" in n)
    return n.find(t);
  const u = n;
  for (let r = 0; r < u.length; r++) {
    const o = u[r];
    if (t(o))
      return o;
  }
}
function z(e, t) {
  Object.entries(e).forEach(([n, u]) => t(u, n));
}
function ie(e, t) {
  return e.indexOf(t) !== -1;
}
function Rt(e, t) {
  for (let n = 0; n < e.length; n++) {
    const u = e[n];
    if (t(u))
      return u;
  }
}
var sr = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return ir(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
s();
s();
var ar = (e) => Object.prototype.toString.call(e).slice(8, -1);
var dn = (e) => typeof e > "u";
var lr = (e) => e === null;
var X = (e) => typeof e != "object" || e === null || e === Object.prototype ? false : Object.getPrototypeOf(e) === null ? true : Object.getPrototypeOf(e) === Object.prototype;
var Te = (e) => X(e) && Object.keys(e).length === 0;
var x = (e) => Array.isArray(e);
var cr = (e) => typeof e == "string";
var _r = (e) => typeof e == "number" && !isNaN(e);
var fr = (e) => typeof e == "boolean";
var dr = (e) => e instanceof RegExp;
var J = (e) => e instanceof Map;
var Q = (e) => e instanceof Set;
var En = (e) => ar(e) === "Symbol";
var Er = (e) => e instanceof Date && !isNaN(e.valueOf());
var pr = (e) => e instanceof Error;
var wt = (e) => typeof e == "number" && isNaN(e);
var hr = (e) => fr(e) || lr(e) || dn(e) || _r(e) || cr(e) || En(e);
var gr = (e) => typeof e == "bigint";
var mr = (e) => e === 1 / 0 || e === -1 / 0;
var vr = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView);
var Ar = (e) => e instanceof URL;
s();
var pn = (e) => e.replace(/\./g, "\\.");
var ge = (e) => e.map(String).map(pn).join(".");
var Y = (e) => {
  const t = [];
  let n = "";
  for (let r = 0; r < e.length; r++) {
    let o = e.charAt(r);
    if (o === "\\" && e.charAt(r + 1) === ".") {
      n += ".", r++;
      continue;
    }
    if (o === ".") {
      t.push(n), n = "";
      continue;
    }
    n += o;
  }
  const u = n;
  return t.push(u), t;
};
s();
function R(e, t, n, u) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: u
  };
}
var hn = [
  R(dn, "undefined", () => null, () => {
  }),
  R(gr, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  R(Er, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  R(pr, "Error", (e, t) => {
    const n = {
      name: e.name,
      message: e.message
    };
    return t.allowedErrorProps.forEach((u) => {
      n[u] = e[u];
    }), n;
  }, (e, t) => {
    const n = new Error(e.message);
    return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach((u) => {
      n[u] = e[u];
    }), n;
  }),
  R(dr, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  R(
    Q,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  R(J, "map", (e) => [...e.entries()], (e) => new Map(e)),
  R((e) => wt(e) || mr(e), "number", (e) => wt(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  R((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  R(Ar, "URL", (e) => e.toString(), (e) => new URL(e))
];
function ce(e, t, n, u) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: u
  };
}
var gn = ce((e, t) => En(e) ? !!t.symbolRegistry.getIdentifier(e) : false, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const u = n.symbolRegistry.getValue(t[1]);
  if (!u)
    throw new Error("Trying to deserialize unknown symbol");
  return u;
});
var yr = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {});
var mn = ce(vr, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = yr[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function vn(e, t) {
  return e != null && e.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : false;
}
var An = ce(vn, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
  const n = t.classRegistry.getAllowedProps(e.constructor);
  if (!n)
    return { ...e };
  const u = {};
  return n.forEach((r) => {
    u[r] = e[r];
  }), u;
}, (e, t, n) => {
  const u = n.classRegistry.getValue(t[1]);
  if (!u)
    throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
  return Object.assign(Object.create(u.prototype), e);
});
var yn = ce((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const u = n.customTransformerRegistry.findByName(t[1]);
  if (!u)
    throw new Error("Trying to deserialize unknown custom value");
  return u.deserialize(e);
});
var Or = [An, gn, yn, mn];
var Pt = (e, t) => {
  const n = Rt(Or, (r) => r.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const u = Rt(hn, (r) => r.isApplicable(e, t));
  if (u)
    return {
      value: u.transform(e, t),
      type: u.annotation
    };
};
var On = {};
hn.forEach((e) => {
  On[e.annotation] = e;
});
var Cr = (e, t, n) => {
  if (x(t))
    switch (t[0]) {
      case "symbol":
        return gn.untransform(e, t, n);
      case "class":
        return An.untransform(e, t, n);
      case "custom":
        return yn.untransform(e, t, n);
      case "typed-array":
        return mn.untransform(e, t, n);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    const u = On[t];
    if (!u)
      throw new Error("Unknown transformation: " + t);
    return u.untransform(e, n);
  }
};
s();
var M = (e, t) => {
  if (t > e.size)
    throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function Cn(e) {
  if (ie(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (ie(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (ie(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var Tr = (e, t) => {
  Cn(t);
  for (let n = 0; n < t.length; n++) {
    const u = t[n];
    if (Q(e))
      e = M(e, +u);
    else if (J(e)) {
      const r = +u, o = +t[++n] == 0 ? "key" : "value", i = M(e, r);
      switch (o) {
        case "key":
          e = i;
          break;
        case "value":
          e = e.get(i);
          break;
      }
    } else
      e = e[u];
  }
  return e;
};
var De = (e, t, n) => {
  if (Cn(t), t.length === 0)
    return n(e);
  let u = e;
  for (let o = 0; o < t.length - 1; o++) {
    const i = t[o];
    if (x(u)) {
      const a = +i;
      u = u[a];
    } else if (X(u))
      u = u[i];
    else if (Q(u)) {
      const a = +i;
      u = M(u, a);
    } else if (J(u)) {
      if (o === t.length - 2)
        break;
      const h = +i, p = +t[++o] == 0 ? "key" : "value", A = M(u, h);
      switch (p) {
        case "key":
          u = A;
          break;
        case "value":
          u = u.get(A);
          break;
      }
    }
  }
  const r = t[t.length - 1];
  if (x(u) ? u[+r] = n(u[+r]) : X(u) && (u[r] = n(u[r])), Q(u)) {
    const o = M(u, +r), i = n(o);
    o !== i && (u.delete(o), u.add(i));
  }
  if (J(u)) {
    const o = +t[t.length - 2], i = M(u, o);
    switch (+r == 0 ? "key" : "value") {
      case "key": {
        const h = n(i);
        u.set(h, u.get(i)), h !== i && u.delete(i);
        break;
      }
      case "value": {
        u.set(i, n(u.get(i)));
        break;
      }
    }
  }
  return e;
};
function Se(e, t, n = []) {
  if (!e)
    return;
  if (!x(e)) {
    z(e, (o, i) => Se(o, t, [...n, ...Y(i)]));
    return;
  }
  const [u, r] = e;
  r && z(r, (o, i) => {
    Se(o, t, [...n, ...Y(i)]);
  }), t(u, n);
}
function Dr(e, t, n) {
  return Se(t, (u, r) => {
    e = De(e, r, (o) => Cr(o, u, n));
  }), e;
}
function Sr(e, t) {
  function n(u, r) {
    const o = Tr(e, Y(r));
    u.map(Y).forEach((i) => {
      e = De(e, i, () => o);
    });
  }
  if (x(t)) {
    const [u, r] = t;
    u.forEach((o) => {
      e = De(e, Y(o), () => e);
    }), r && z(r, n);
  } else
    z(t, n);
  return e;
}
var Ir = (e, t) => X(e) || x(e) || J(e) || Q(e) || vn(e, t);
function kr(e, t, n) {
  const u = n.get(e);
  u ? u.push(t) : n.set(e, [t]);
}
function br(e, t) {
  const n = {};
  let u;
  return e.forEach((r) => {
    if (r.length <= 1)
      return;
    t || (r = r.map((a) => a.map(String)).sort((a, h) => a.length - h.length));
    const [o, ...i] = r;
    o.length === 0 ? u = i.map(ge) : n[ge(o)] = i.map(ge);
  }), u ? Te(n) ? [u] : [u, n] : Te(n) ? void 0 : n;
}
var Tn = (e, t, n, u, r = [], o = [], i = /* @__PURE__ */ new Map()) => {
  var a;
  const h = hr(e);
  if (!h) {
    kr(e, r, t);
    const _ = i.get(e);
    if (_)
      return u ? {
        transformedValue: null
      } : _;
  }
  if (!Ir(e, n)) {
    const _ = Pt(e, n), g = _ ? {
      transformedValue: _.value,
      annotations: [_.type]
    } : {
      transformedValue: e
    };
    return h || i.set(e, g), g;
  }
  if (ie(o, e))
    return {
      transformedValue: null
    };
  const p = Pt(e, n), A = (a = p == null ? void 0 : p.value) != null ? a : e, d = x(A) ? [] : {}, m = {};
  z(A, (_, g) => {
    if (g === "__proto__" || g === "constructor" || g === "prototype")
      throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);
    const f = Tn(_, t, n, u, [...r, g], [...o, e], i);
    d[g] = f.transformedValue, x(f.annotations) ? m[g] = f.annotations : X(f.annotations) && z(f.annotations, (E, C) => {
      m[pn(g) + "." + C] = E;
    });
  });
  const c = Te(m) ? {
    transformedValue: d,
    annotations: p ? [p.type] : void 0
  } : {
    transformedValue: d,
    annotations: p ? [p.type, m] : m
  };
  return h || i.set(e, c), c;
};
s();
s();
function Dn(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Vt(e) {
  return Dn(e) === "Array";
}
function Rr(e) {
  if (Dn(e) !== "Object")
    return false;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function wr(e, t, n, u, r) {
  const o = {}.propertyIsEnumerable.call(u, t) ? "enumerable" : "nonenumerable";
  o === "enumerable" && (e[t] = n), r && o === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: false,
    writable: true,
    configurable: true
  });
}
function Ie(e, t = {}) {
  if (Vt(e))
    return e.map((r) => Ie(r, t));
  if (!Rr(e))
    return e;
  const n = Object.getOwnPropertyNames(e), u = Object.getOwnPropertySymbols(e);
  return [...n, ...u].reduce((r, o) => {
    if (Vt(t.props) && !t.props.includes(o))
      return r;
    const i = e[o], a = Ie(i, t);
    return wr(r, o, a, e, t.nonenumerable), r;
  }, {});
}
var O = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = false } = {}) {
    this.classRegistry = new rr(), this.symbolRegistry = new fn((t) => {
      var n;
      return (n = t.description) != null ? n : "";
    }), this.customTransformerRegistry = new sr(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = Tn(e, t, this, this.dedupe), u = {
      json: n.transformedValue
    };
    n.annotations && (u.meta = {
      ...u.meta,
      values: n.annotations
    });
    const r = br(t, this.dedupe);
    return r && (u.meta = {
      ...u.meta,
      referentialEqualities: r
    }), u;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let u = Ie(t);
    return n != null && n.values && (u = Dr(u, n.values, this)), n != null && n.referentialEqualities && (u = Sr(u, n.referentialEqualities)), u;
  }
  stringify(e) {
    return JSON.stringify(this.serialize(e));
  }
  parse(e) {
    return this.deserialize(JSON.parse(e));
  }
  registerClass(e, t) {
    this.classRegistry.register(e, t);
  }
  registerSymbol(e, t) {
    this.symbolRegistry.register(e, t);
  }
  registerCustom(e, t) {
    this.customTransformerRegistry.register({
      name: t,
      ...e
    });
  }
  allowErrorProps(...e) {
    this.allowedErrorProps.push(...e);
  }
};
O.defaultInstance = new O();
O.serialize = O.defaultInstance.serialize.bind(O.defaultInstance);
O.deserialize = O.defaultInstance.deserialize.bind(O.defaultInstance);
O.stringify = O.defaultInstance.stringify.bind(O.defaultInstance);
O.parse = O.defaultInstance.parse.bind(O.defaultInstance);
O.registerClass = O.defaultInstance.registerClass.bind(O.defaultInstance);
O.registerSymbol = O.defaultInstance.registerSymbol.bind(O.defaultInstance);
O.registerCustom = O.defaultInstance.registerCustom.bind(O.defaultInstance);
O.allowErrorProps = O.defaultInstance.allowErrorProps.bind(O.defaultInstance);
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
s();
var xt;
var Nt;
(Nt = (xt = l).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (xt.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var Ft;
var Ut;
(Ut = (Ft = l).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (Ft.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var Bt;
var Lt;
(Lt = (Bt = l).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (Bt.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var Mt;
var Kt;
(Kt = (Mt = l).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (Mt.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var Ht;
var zt;
(zt = (Ht = l).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (Ht.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var $t;
var jt;
(jt = ($t = l).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || ($t.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
s();
s();
s();
s();
s();
s();
s();
export {
  xr as addCustomCommand,
  Vr as addCustomTab,
  Ur as onDevToolsClientConnected,
  Pr as onDevToolsConnected,
  Nr as removeCustomCommand,
  Fr as setupDevToolsPlugin,
  Fr as setupDevtoolsPlugin
};
//# sourceMappingURL=index-IdtPmXeP-TBKPDV2A.js.map
