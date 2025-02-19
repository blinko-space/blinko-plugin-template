var Ve = Object.defineProperty;
var ze = (e, _, t) => _ in e ? Ve(e, _, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[_] = t;
var re = (e, _, t) => (ze(e, typeof _ != "symbol" ? _ + "" : _, t), t);
var V, f, Ce, S, ie, Ee, He, Ne, ee, G, J, T = {}, Ae = [], je = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, z = Array.isArray;
function x(e, _) {
  for (var t in _)
    e[t] = _[t];
  return e;
}
function _e(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function K(e, _, t) {
  var n, o, r, l = {};
  for (r in _)
    r == "key" ? n = _[r] : r == "ref" ? o = _[r] : l[r] = _[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? V.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return R(e, l, n, o, null);
}
function R(e, _, t, n, o) {
  var r = { type: e, props: _, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Ce, __i: -1, __u: 0 };
  return o == null && f.vnode != null && f.vnode(r), r;
}
function C(e) {
  return e.children;
}
function $(e, _) {
  this.props = e, this.context = _;
}
function E(e, _) {
  if (_ == null)
    return e.__ ? E(e.__, e.__i + 1) : null;
  for (var t; _ < e.__k.length; _++)
    if ((t = e.__k[_]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? E(e) : null;
}
function Ue(e) {
  var _, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, _ = 0; _ < e.__k.length; _++)
      if ((t = e.__k[_]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return Ue(e);
  }
}
function le(e) {
  (!e.__d && (e.__d = !0) && S.push(e) && !L.__r++ || ie !== f.debounceRendering) && ((ie = f.debounceRendering) || Ee)(L);
}
function L() {
  for (var e, _, t, n, o, r, l, u = 1; S.length; )
    S.length > u && S.sort(He), e = S.shift(), u = S.length, e.__d && (t = void 0, o = (n = (_ = e).__v).__e, r = [], l = [], _.__P && ((t = x({}, n)).__v = n.__v + 1, f.vnode && f.vnode(t), te(_.__P, t, n, _.__n, _.__P.namespaceURI, 32 & n.__u ? [o] : null, r, o ?? E(n), !!(32 & n.__u), l), t.__v = n.__v, t.__.__k[t.__i] = t, De(r, t, l), t.__e != o && Ue(t)));
  L.__r = 0;
}
function Te(e, _, t, n, o, r, l, u, a, c, h) {
  var i, p, s, g, k, b, d = n && n.__k || Ae, v = _.length;
  for (a = Ie(t, _, d, a, v), i = 0; i < v; i++)
    (s = t.__k[i]) != null && (p = s.__i === -1 ? T : d[s.__i] || T, s.__i = i, b = te(e, s, p, o, r, l, u, a, c, h), g = s.__e, s.ref && p.ref != s.ref && (p.ref && ne(p.ref, null, s), h.push(s.ref, s.__c || g, s)), k == null && g != null && (k = g), 4 & s.__u || p.__k === s.__k ? a = Me(s, a, e) : typeof s.type == "function" && b !== void 0 ? a = b : g && (a = g.nextSibling), s.__u &= -7);
  return t.__e = k, a;
}
function Ie(e, _, t, n, o) {
  var r, l, u, a, c, h = t.length, i = h, p = 0;
  for (e.__k = new Array(o), r = 0; r < o; r++)
    (l = _[r]) != null && typeof l != "boolean" && typeof l != "function" ? (a = r + p, (l = e.__k[r] = typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? R(null, l, null, null, null) : z(l) ? R(C, { children: l }, null, null, null) : l.constructor === void 0 && l.__b > 0 ? R(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l).__ = e, l.__b = e.__b + 1, u = null, (c = l.__i = qe(l, t, a, i)) !== -1 && (i--, (u = t[c]) && (u.__u |= 2)), u == null || u.__v === null ? (c == -1 && p--, typeof l.type != "function" && (l.__u |= 4)) : c != a && (c == a - 1 ? p-- : c == a + 1 ? p++ : (c > a ? p-- : p++, l.__u |= 4))) : e.__k[r] = null;
  if (i)
    for (r = 0; r < h; r++)
      (u = t[r]) != null && !(2 & u.__u) && (u.__e == n && (n = E(u)), Oe(u, u));
  return n;
}
function Me(e, _, t) {
  var n, o;
  if (typeof e.type == "function") {
    for (n = e.__k, o = 0; n && o < n.length; o++)
      n[o] && (n[o].__ = e, _ = Me(n[o], _, t));
    return _;
  }
  e.__e != _ && (_ && e.type && !t.contains(_) && (_ = E(e)), t.insertBefore(e.__e, _ || null), _ = e.__e);
  do
    _ = _ && _.nextSibling;
  while (_ != null && _.nodeType == 8);
  return _;
}
function B(e, _) {
  return _ = _ || [], e == null || typeof e == "boolean" || (z(e) ? e.some(function(t) {
    B(t, _);
  }) : _.push(e)), _;
}
function qe(e, _, t, n) {
  var o, r, l = e.key, u = e.type, a = _[t];
  if (a === null || a && l == a.key && u === a.type && !(2 & a.__u))
    return t;
  if (n > (a != null && !(2 & a.__u) ? 1 : 0))
    for (o = t - 1, r = t + 1; o >= 0 || r < _.length; ) {
      if (o >= 0) {
        if ((a = _[o]) && !(2 & a.__u) && l == a.key && u === a.type)
          return o;
        o--;
      }
      if (r < _.length) {
        if ((a = _[r]) && !(2 & a.__u) && l == a.key && u === a.type)
          return r;
        r++;
      }
    }
  return -1;
}
function ue(e, _, t) {
  _[0] == "-" ? e.setProperty(_, t ?? "") : e[_] = t == null ? "" : typeof t != "number" || je.test(_) ? t : t + "px";
}
function O(e, _, t, n, o) {
  var r;
  e:
    if (_ == "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof n == "string" && (e.style.cssText = n = ""), n)
          for (_ in n)
            t && _ in t || ue(e.style, _, "");
        if (t)
          for (_ in t)
            n && t[_] === n[_] || ue(e.style, _, t[_]);
      }
    else if (_[0] == "o" && _[1] == "n")
      r = _ != (_ = _.replace(Ne, "$1")), _ = _.toLowerCase() in e || _ == "onFocusOut" || _ == "onFocusIn" ? _.toLowerCase().slice(2) : _.slice(2), e.l || (e.l = {}), e.l[_ + r] = t, t ? n ? t.t = n.t : (t.t = ee, e.addEventListener(_, r ? J : G, r)) : e.removeEventListener(_, r ? J : G, r);
    else {
      if (o == "http://www.w3.org/2000/svg")
        _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_ != "width" && _ != "height" && _ != "href" && _ != "list" && _ != "form" && _ != "tabIndex" && _ != "download" && _ != "rowSpan" && _ != "colSpan" && _ != "role" && _ != "popover" && _ in e)
        try {
          e[_] = t ?? "";
          break e;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && _[4] != "-" ? e.removeAttribute(_) : e.setAttribute(_, _ == "popover" && t == 1 ? "" : t));
    }
}
function ce(e) {
  return function(_) {
    if (this.l) {
      var t = this.l[_.type + e];
      if (_.u == null)
        _.u = ee++;
      else if (_.u < t.t)
        return;
      return t(f.event ? f.event(_) : _);
    }
  };
}
function te(e, _, t, n, o, r, l, u, a, c) {
  var h, i, p, s, g, k, b, d, v, H, P, M, N, oe, D, j, I, w = _.type;
  if (_.constructor !== void 0)
    return null;
  128 & t.__u && (a = !!(32 & t.__u), r = [u = _.__e = t.__e]), (h = f.__b) && h(_);
  e:
    if (typeof w == "function")
      try {
        if (d = _.props, v = "prototype" in w && w.prototype.render, H = (h = w.contextType) && n[h.__c], P = h ? H ? H.props.value : h.__ : n, t.__c ? b = (i = _.__c = t.__c).__ = i.__E : (v ? _.__c = i = new w(d, P) : (_.__c = i = new $(d, P), i.constructor = w, i.render = Ge), H && H.sub(i), i.props = d, i.state || (i.state = {}), i.context = P, i.__n = n, p = i.__d = !0, i.__h = [], i._sb = []), v && i.__s == null && (i.__s = i.state), v && w.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = x({}, i.__s)), x(i.__s, w.getDerivedStateFromProps(d, i.__s))), s = i.props, g = i.state, i.__v = _, p)
          v && w.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), v && i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v && w.getDerivedStateFromProps == null && d !== s && i.componentWillReceiveProps != null && i.componentWillReceiveProps(d, P), !i.__e && (i.shouldComponentUpdate != null && i.shouldComponentUpdate(d, i.__s, P) === !1 || _.__v == t.__v)) {
            for (_.__v != t.__v && (i.props = d, i.state = i.__s, i.__d = !1), _.__e = t.__e, _.__k = t.__k, _.__k.some(function(A) {
              A && (A.__ = _);
            }), M = 0; M < i._sb.length; M++)
              i.__h.push(i._sb[M]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(d, i.__s, P), v && i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(s, g, k);
          });
        }
        if (i.context = P, i.props = d, i.__P = e, i.__e = !1, N = f.__r, oe = 0, v) {
          for (i.state = i.__s, i.__d = !1, N && N(_), h = i.render(i.props, i.state, i.context), D = 0; D < i._sb.length; D++)
            i.__h.push(i._sb[D]);
          i._sb = [];
        } else
          do
            i.__d = !1, N && N(_), h = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++oe < 25);
        i.state = i.__s, i.getChildContext != null && (n = x(x({}, n), i.getChildContext())), v && !p && i.getSnapshotBeforeUpdate != null && (k = i.getSnapshotBeforeUpdate(s, g)), u = Te(e, z(j = h != null && h.type === C && h.key == null ? h.props.children : h) ? j : [j], _, t, n, o, r, l, u, a, c), i.base = _.__e, _.__u &= -161, i.__h.length && l.push(i), b && (i.__E = i.__ = null);
      } catch (A) {
        if (_.__v = null, a || r != null)
          if (A.then) {
            for (_.__u |= a ? 160 : 128; u && u.nodeType == 8 && u.nextSibling; )
              u = u.nextSibling;
            r[r.indexOf(u)] = null, _.__e = u;
          } else
            for (I = r.length; I--; )
              _e(r[I]);
        else
          _.__e = t.__e, _.__k = t.__k;
        f.__e(A, _, t);
      }
    else
      r == null && _.__v == t.__v ? (_.__k = t.__k, _.__e = t.__e) : u = _.__e = Ze(t.__e, _, t, n, o, r, l, a, c);
  return (h = f.diffed) && h(_), 128 & _.__u ? void 0 : u;
}
function De(e, _, t) {
  for (var n = 0; n < t.length; n++)
    ne(t[n], t[++n], t[++n]);
  f.__c && f.__c(_, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(r) {
        r.call(o);
      });
    } catch (r) {
      f.__e(r, o.__v);
    }
  });
}
function Ze(e, _, t, n, o, r, l, u, a) {
  var c, h, i, p, s, g, k, b = t.props, d = _.props, v = _.type;
  if (v == "svg" ? o = "http://www.w3.org/2000/svg" : v == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), r != null) {
    for (c = 0; c < r.length; c++)
      if ((s = r[c]) && "setAttribute" in s == !!v && (v ? s.localName == v : s.nodeType == 3)) {
        e = s, r[c] = null;
        break;
      }
  }
  if (e == null) {
    if (v == null)
      return document.createTextNode(d);
    e = document.createElementNS(o, v, d.is && d), u && (f.__m && f.__m(_, r), u = !1), r = null;
  }
  if (v === null)
    b === d || u && e.data === d || (e.data = d);
  else {
    if (r = r && V.call(e.childNodes), b = t.props || T, !u && r != null)
      for (b = {}, c = 0; c < e.attributes.length; c++)
        b[(s = e.attributes[c]).name] = s.value;
    for (c in b)
      if (s = b[c], c != "children") {
        if (c == "dangerouslySetInnerHTML")
          i = s;
        else if (!(c in d)) {
          if (c == "value" && "defaultValue" in d || c == "checked" && "defaultChecked" in d)
            continue;
          O(e, c, null, s, o);
        }
      }
    for (c in d)
      s = d[c], c == "children" ? p = s : c == "dangerouslySetInnerHTML" ? h = s : c == "value" ? g = s : c == "checked" ? k = s : u && typeof s != "function" || b[c] === s || O(e, c, s, b[c], o);
    if (h)
      u || i && (h.__html === i.__html || h.__html === e.innerHTML) || (e.innerHTML = h.__html), _.__k = [];
    else if (i && (e.innerHTML = ""), Te(_.type === "template" ? e.content : e, z(p) ? p : [p], _, t, n, v == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, r, l, r ? r[0] : t.__k && E(t, 0), u, a), r != null)
      for (c = r.length; c--; )
        _e(r[c]);
    u || (c = "value", v == "progress" && g == null ? e.removeAttribute("value") : g !== void 0 && (g !== e[c] || v == "progress" && !g || v == "option" && g !== b[c]) && O(e, c, g, b[c], o), c = "checked", k !== void 0 && k !== e[c] && O(e, c, k, b[c], o));
  }
  return e;
}
function ne(e, _, t) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && _ == null || (e.__u = e(_));
    } else
      e.current = _;
  } catch (o) {
    f.__e(o, t);
  }
}
function Oe(e, _, t) {
  var n, o;
  if (f.unmount && f.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || ne(n, null, _)), (n = e.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        f.__e(r, _);
      }
    n.base = n.__P = null;
  }
  if (n = e.__k)
    for (o = 0; o < n.length; o++)
      n[o] && Oe(n[o], _, t || typeof e.type != "function");
  t || _e(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Ge(e, _, t) {
  return this.constructor(e, t);
}
function Je(e, _, t) {
  var n, o, r, l;
  _ == document && (_ = document.documentElement), f.__ && f.__(e, _), o = (n = typeof t == "function") ? null : t && t.__k || _.__k, r = [], l = [], te(_, e = (!n && t || _).__k = K(C, null, [e]), o || T, T, _.namespaceURI, !n && t ? [t] : o ? null : _.firstChild ? V.call(_.childNodes) : null, r, !n && t ? t : o ? o.__e : _.firstChild, n, l), De(r, e, l);
}
V = Ae.slice, f = { __e: function(e, _, t, n) {
  for (var o, r, l; _ = _.__; )
    if ((o = _.__c) && !o.__)
      try {
        if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(e)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), l = o.__d), l)
          return o.__E = o;
      } catch (u) {
        e = u;
      }
  throw e;
} }, Ce = 0, $.prototype.setState = function(e, _) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = x({}, this.state), typeof e == "function" && (e = e(x({}, t), this.props)), e && x(t, e), e != null && this.__v && (_ && this._sb.push(_), le(this));
}, $.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), le(this));
}, $.prototype.render = C, S = [], Ee = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, He = function(e, _) {
  return e.__v.__b - _.__v.__b;
}, L.__r = 0, Ne = /(PointerCapture)$|Capture$/i, ee = 0, G = ce(!1), J = ce(!0);
var Ke = 0;
function U(e, _, t, n, o, r) {
  _ || (_ = {});
  var l, u, a = _;
  if ("ref" in a)
    for (u in a = {}, _)
      u == "ref" ? l = _[u] : a[u] = _[u];
  var c = { type: e, props: a, key: t, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ke, __i: -1, __u: 0, __source: o, __self: r };
  if (typeof e == "function" && (l = e.defaultProps))
    for (u in l)
      a[u] === void 0 && (a[u] = l[u]);
  return f.vnode && f.vnode(c), c;
}
var Q, m, q, ae, X = 0, Fe = [], y = f, se = y.__b, fe = y.__r, pe = y.diffed, he = y.__c, de = y.unmount, ve = y.__;
function Qe(e, _) {
  y.__h && y.__h(m, e, X || _), X = 0;
  var t = m.__H || (m.__H = { __: [], __h: [] });
  return e >= t.__.length && t.__.push({}), t.__[e];
}
function Xe(e) {
  return X = 1, Ye(Re, e);
}
function Ye(e, _, t) {
  var n = Qe(Q++, 2);
  if (n.t = e, !n.__c && (n.__ = [t ? t(_) : Re(void 0, _), function(u) {
    var a = n.__N ? n.__N[0] : n.__[0], c = n.t(a, u);
    a !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = m, !m.__f)) {
    var o = function(u, a, c) {
      if (!n.__c.__H)
        return !0;
      var h = n.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (h.every(function(p) {
        return !p.__N;
      }))
        return !r || r.call(this, u, a, c);
      var i = n.__c.props !== u;
      return h.forEach(function(p) {
        if (p.__N) {
          var s = p.__[0];
          p.__ = p.__N, p.__N = void 0, s !== p.__[0] && (i = !0);
        }
      }), r && r.call(this, u, a, c) || i;
    };
    m.__f = !0;
    var r = m.shouldComponentUpdate, l = m.componentWillUpdate;
    m.componentWillUpdate = function(u, a, c) {
      if (this.__e) {
        var h = r;
        r = void 0, o(u, a, c), r = h;
      }
      l && l.call(this, u, a, c);
    }, m.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function e_() {
  for (var e; e = Fe.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(W), e.__H.__h.forEach(Y), e.__H.__h = [];
      } catch (_) {
        e.__H.__h = [], y.__e(_, e.__v);
      }
}
y.__b = function(e) {
  m = null, se && se(e);
}, y.__ = function(e, _) {
  e && _.__k && _.__k.__m && (e.__m = _.__k.__m), ve && ve(e, _);
}, y.__r = function(e) {
  fe && fe(e), Q = 0;
  var _ = (m = e.__c).__H;
  _ && (q === m ? (_.__h = [], m.__h = [], _.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (_.__h.forEach(W), _.__h.forEach(Y), _.__h = [], Q = 0)), q = m;
}, y.diffed = function(e) {
  pe && pe(e);
  var _ = e.__c;
  _ && _.__H && (_.__H.__h.length && (Fe.push(_) !== 1 && ae === y.requestAnimationFrame || ((ae = y.requestAnimationFrame) || __)(e_)), _.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), q = m = null;
}, y.__c = function(e, _) {
  _.some(function(t) {
    try {
      t.__h.forEach(W), t.__h = t.__h.filter(function(n) {
        return !n.__ || Y(n);
      });
    } catch (n) {
      _.some(function(o) {
        o.__h && (o.__h = []);
      }), _ = [], y.__e(n, t.__v);
    }
  }), he && he(e, _);
}, y.unmount = function(e) {
  de && de(e);
  var _, t = e.__c;
  t && t.__H && (t.__H.__.forEach(function(n) {
    try {
      W(n);
    } catch (o) {
      _ = o;
    }
  }), t.__H = void 0, _ && y.__e(_, t.__v));
};
var me = typeof requestAnimationFrame == "function";
function __(e) {
  var _, t = function() {
    clearTimeout(n), me && cancelAnimationFrame(_), setTimeout(e);
  }, n = setTimeout(t, 100);
  me && (_ = requestAnimationFrame(t));
}
function W(e) {
  var _ = m, t = e.__c;
  typeof t == "function" && (e.__c = void 0, t()), m = _;
}
function Y(e) {
  var _ = m;
  e.__c = e.__(), m = _;
}
function Re(e, _) {
  return typeof _ == "function" ? _(e) : _;
}
function t_(e, _) {
  for (var t in _)
    e[t] = _[t];
  return e;
}
function ye(e, _) {
  for (var t in e)
    if (t !== "__source" && !(t in _))
      return !0;
  for (var n in _)
    if (n !== "__source" && e[n] !== _[n])
      return !0;
  return !1;
}
function ge(e, _) {
  this.props = e, this.context = _;
}
(ge.prototype = new $()).isPureReactComponent = !0, ge.prototype.shouldComponentUpdate = function(e, _) {
  return ye(this.props, e) || ye(this.state, _);
};
var be = f.__b;
f.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), be && be(e);
};
var n_ = f.__e;
f.__e = function(e, _, t, n) {
  if (e.then) {
    for (var o, r = _; r = r.__; )
      if ((o = r.__c) && o.__c)
        return _.__e == null && (_.__e = t.__e, _.__k = t.__k), o.__c(e, _);
  }
  n_(e, _, t, n);
};
var ke = f.unmount;
function We(e, _, t) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = t_({}, e)).__c != null && (e.__c.__P === t && (e.__c.__P = _), e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return We(n, _, t);
  })), e;
}
function Le(e, _, t) {
  return e && t && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return Le(n, _, t);
  }), e.__c && e.__c.__P === _ && (e.__e && t.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = t)), e;
}
function Z() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Be(e) {
  var _ = e.__.__c;
  return _ && _.__a && _.__a(e);
}
function F() {
  this.i = null, this.l = null;
}
f.unmount = function(e) {
  var _ = e.__c;
  _ && _.__R && _.__R(), _ && 32 & e.__u && (e.type = null), ke && ke(e);
}, (Z.prototype = new $()).__c = function(e, _) {
  var t = _.__c, n = this;
  n.o == null && (n.o = []), n.o.push(t);
  var o = Be(n.__v), r = !1, l = function() {
    r || (r = !0, t.__R = null, o ? o(u) : u());
  };
  t.__R = l;
  var u = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var a = n.state.__a;
        n.__v.__k[0] = Le(a, a.__c.__P, a.__c.__O);
      }
      var c;
      for (n.setState({ __a: n.__b = null }); c = n.o.pop(); )
        c.forceUpdate();
    }
  };
  n.__u++ || 32 & _.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(l, l);
}, Z.prototype.componentWillUnmount = function() {
  this.o = [];
}, Z.prototype.render = function(e, _) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = We(this.__b, t, n.__O = n.__P);
    }
    this.__b = null;
  }
  var o = _.__a && K(C, null, e.fallback);
  return o && (o.__u &= -33), [K(C, null, _.__a ? null : e.children), o];
};
var we = function(e, _, t) {
  if (++t[1] === t[0] && e.l.delete(_), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
    for (t = e.i; t; ) {
      for (; t.length > 3; )
        t.pop()();
      if (t[1] < t[0])
        break;
      e.i = t = t[2];
    }
};
(F.prototype = new $()).__a = function(e) {
  var _ = this, t = Be(_.__v), n = _.l.get(e);
  return n[0]++, function(o) {
    var r = function() {
      _.props.revealOrder ? (n.push(o), we(_, e, n)) : o();
    };
    t ? t(r) : r();
  };
}, F.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var _ = B(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && _.reverse();
  for (var t = _.length; t--; )
    this.l.set(_[t], this.i = [1, 0, this.i]);
  return e.children;
}, F.prototype.componentDidUpdate = F.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(_, t) {
    we(e, t, _);
  });
};
var o_ = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, r_ = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, i_ = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, l_ = /[A-Z0-9]/g, u_ = typeof document < "u", c_ = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function a_(e, _, t) {
  return _.__k == null && (_.textContent = ""), Je(e, _), typeof t == "function" && t(), e ? e.__c : null;
}
$.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty($.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(_) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: _ });
  } });
});
var $e = f.event;
function s_() {
}
function f_() {
  return this.cancelBubble;
}
function p_() {
  return this.defaultPrevented;
}
f.event = function(e) {
  return $e && (e = $e(e)), e.persist = s_, e.isPropagationStopped = f_, e.isDefaultPrevented = p_, e.nativeEvent = e;
};
var h_ = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Pe = f.vnode;
f.vnode = function(e) {
  typeof e.type == "string" && function(_) {
    var t = _.props, n = _.type, o = {}, r = n.indexOf("-") === -1;
    for (var l in t) {
      var u = t[l];
      if (!(l === "value" && "defaultValue" in t && u == null || u_ && l === "children" && n === "noscript" || l === "class" || l === "className")) {
        var a = l.toLowerCase();
        l === "defaultValue" && "value" in t && t.value == null ? l = "value" : l === "download" && u === !0 ? u = "" : a === "translate" && u === "no" ? u = !1 : a[0] === "o" && a[1] === "n" ? a === "ondoubleclick" ? l = "ondblclick" : a !== "onchange" || n !== "input" && n !== "textarea" || c_(t.type) ? a === "onfocus" ? l = "onfocusin" : a === "onblur" ? l = "onfocusout" : i_.test(l) && (l = a) : a = l = "oninput" : r && r_.test(l) ? l = l.replace(l_, "-$&").toLowerCase() : u === null && (u = void 0), a === "oninput" && o[l = a] && (l = "oninputCapture"), o[l] = u;
      }
    }
    n == "select" && o.multiple && Array.isArray(o.value) && (o.value = B(t.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), n == "select" && o.defaultValue != null && (o.value = B(t.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), t.class && !t.className ? (o.class = t.class, Object.defineProperty(o, "className", h_)) : (t.className && !t.class || t.class && t.className) && (o.class = o.className = t.className), _.props = o;
  }(e), e.$$typeof = o_, Pe && Pe(e);
};
var xe = f.__r;
f.__r = function(e) {
  xe && xe(e), e.__c;
};
var Se = f.diffed;
f.diffed = function(e) {
  Se && Se(e);
  var _ = e.props, t = e.__e;
  t != null && e.type === "textarea" && "value" in _ && _.value !== t.value && (t.value = _.value == null ? "" : _.value);
};
function d_(e) {
  const [_, t] = Xe(0);
  return /* @__PURE__ */ U(C, { children: [
    /* @__PURE__ */ U("h1", { children: "Vite + Preact1" }),
    /* @__PURE__ */ U("div", { class: "card", children: /* @__PURE__ */ U("button", { onClick: () => {
      t((n) => n + 1), console.log(window.Blinko.toast.success("成功4334"));
    }, children: [
      "count is ",
      _
    ] }) })
  ] });
}
const v_ = "blinko-plugin-demo", m_ = "blinko-offical", y_ = "https://github.com/blinko-space/blinko-plugin-template", g_ = "0.0.3", b_ = "0.0.0", k_ = {
  default: "Blinko plugin demo",
  zh: "Blinko插件示例"
}, w_ = {
  default: "This is a blinko plugin demo, you can use it as a template to create your own plugin.",
  zh: "这是一个blinko插件示例，你可以使用它作为模板来创建自己的插件。"
}, $_ = {
  default: "README.md",
  zh: "README_zh.md"
}, P_ = {
  name: v_,
  author: m_,
  url: y_,
  version: g_,
  minAppVersion: b_,
  displayName: k_,
  description: w_,
  readme: $_
};
System.register([], (e) => ({
  execute: () => {
    e("default", class {
      constructor() {
        re(this, "type", "frontend");
        Object.assign(this, P_);
      }
      async init() {
        console.log(123123), window.Blinko.addToolBarIcon({
          name: "test",
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-file'><path d='M13 3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z'/><polyline points='14 3 14 9 19 9'/></svg>",
          placement: "right",
          content: () => {
            const t = document.createElement("div");
            return t.setAttribute("data-plugin", "my-note-plugin"), a_(/* @__PURE__ */ U(d_, {}), t), t;
          }
        });
      }
      destroy() {
        console.log("destroy");
      }
    });
  }
}));
