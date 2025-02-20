var Ve = Object.defineProperty;
var qe = (e, _, t) => _ in e ? Ve(e, _, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[_] = t;
var Z = (e, _, t) => (qe(e, typeof _ != "symbol" ? _ + "" : _, t), t);
var I, f, Ee, $, le, He, Te, Ae, te, K, Q, B = {}, Be = [], Ze = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, j = Array.isArray;
function N(e, _) {
  for (var t in _)
    e[t] = _[t];
  return e;
}
function ne(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function X(e, _, t) {
  var n, o, r, l = {};
  for (r in _)
    r == "key" ? n = _[r] : r == "ref" ? o = _[r] : l[r] = _[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? I.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      l[r] === void 0 && (l[r] = e.defaultProps[r]);
  return R(e, l, n, o, null);
}
function R(e, _, t, n, o) {
  var r = { type: e, props: _, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Ee, __i: -1, __u: 0 };
  return o == null && f.vnode != null && f.vnode(r), r;
}
function S(e) {
  return e.children;
}
function P(e, _) {
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
function ue(e) {
  (!e.__d && (e.__d = !0) && $.push(e) && !F.__r++ || le !== f.debounceRendering) && ((le = f.debounceRendering) || He)(F);
}
function F() {
  for (var e, _, t, n, o, r, l, u = 1; $.length; )
    $.length > u && $.sort(Te), e = $.shift(), u = $.length, e.__d && (t = void 0, o = (n = (_ = e).__v).__e, r = [], l = [], _.__P && ((t = N({}, n)).__v = n.__v + 1, f.vnode && f.vnode(t), oe(_.__P, t, n, _.__n, _.__P.namespaceURI, 32 & n.__u ? [o] : null, r, o ?? E(n), !!(32 & n.__u), l), t.__v = n.__v, t.__.__k[t.__i] = t, Le(r, t, l), t.__e != o && Ue(t)));
  F.__r = 0;
}
function Me(e, _, t, n, o, r, l, u, c, a, d) {
  var i, p, s, g, w, b, h = n && n.__k || Be, v = _.length;
  for (c = Ge(t, _, h, c, v), i = 0; i < v; i++)
    (s = t.__k[i]) != null && (p = s.__i === -1 ? B : h[s.__i] || B, s.__i = i, b = oe(e, s, p, o, r, l, u, c, a, d), g = s.__e, s.ref && p.ref != s.ref && (p.ref && re(p.ref, null, s), d.push(s.ref, s.__c || g, s)), w == null && g != null && (w = g), 4 & s.__u || p.__k === s.__k ? c = De(s, c, e) : typeof s.type == "function" && b !== void 0 ? c = b : g && (c = g.nextSibling), s.__u &= -7);
  return t.__e = w, c;
}
function Ge(e, _, t, n, o) {
  var r, l, u, c, a, d = t.length, i = d, p = 0;
  for (e.__k = new Array(o), r = 0; r < o; r++)
    (l = _[r]) != null && typeof l != "boolean" && typeof l != "function" ? (c = r + p, (l = e.__k[r] = typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? R(null, l, null, null, null) : j(l) ? R(S, { children: l }, null, null, null) : l.constructor === void 0 && l.__b > 0 ? R(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l).__ = e, l.__b = e.__b + 1, u = null, (a = l.__i = Je(l, t, c, i)) !== -1 && (i--, (u = t[a]) && (u.__u |= 2)), u == null || u.__v === null ? (a == -1 && p--, typeof l.type != "function" && (l.__u |= 4)) : a != c && (a == c - 1 ? p-- : a == c + 1 ? p++ : (a > c ? p-- : p++, l.__u |= 4))) : e.__k[r] = null;
  if (i)
    for (r = 0; r < d; r++)
      (u = t[r]) != null && !(2 & u.__u) && (u.__e == n && (n = E(u)), Re(u, u));
  return n;
}
function De(e, _, t) {
  var n, o;
  if (typeof e.type == "function") {
    for (n = e.__k, o = 0; n && o < n.length; o++)
      n[o] && (n[o].__ = e, _ = De(n[o], _, t));
    return _;
  }
  e.__e != _ && (_ && e.type && !t.contains(_) && (_ = E(e)), t.insertBefore(e.__e, _ || null), _ = e.__e);
  do
    _ = _ && _.nextSibling;
  while (_ != null && _.nodeType == 8);
  return _;
}
function W(e, _) {
  return _ = _ || [], e == null || typeof e == "boolean" || (j(e) ? e.some(function(t) {
    W(t, _);
  }) : _.push(e)), _;
}
function Je(e, _, t, n) {
  var o, r, l = e.key, u = e.type, c = _[t];
  if (c === null || c && l == c.key && u === c.type && !(2 & c.__u))
    return t;
  if (n > (c != null && !(2 & c.__u) ? 1 : 0))
    for (o = t - 1, r = t + 1; o >= 0 || r < _.length; ) {
      if (o >= 0) {
        if ((c = _[o]) && !(2 & c.__u) && l == c.key && u === c.type)
          return o;
        o--;
      }
      if (r < _.length) {
        if ((c = _[r]) && !(2 & c.__u) && l == c.key && u === c.type)
          return r;
        r++;
      }
    }
  return -1;
}
function ae(e, _, t) {
  _[0] == "-" ? e.setProperty(_, t ?? "") : e[_] = t == null ? "" : typeof t != "number" || Ze.test(_) ? t : t + "px";
}
function D(e, _, t, n, o) {
  var r;
  e:
    if (_ == "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof n == "string" && (e.style.cssText = n = ""), n)
          for (_ in n)
            t && _ in t || ae(e.style, _, "");
        if (t)
          for (_ in t)
            n && t[_] === n[_] || ae(e.style, _, t[_]);
      }
    else if (_[0] == "o" && _[1] == "n")
      r = _ != (_ = _.replace(Ae, "$1")), _ = _.toLowerCase() in e || _ == "onFocusOut" || _ == "onFocusIn" ? _.toLowerCase().slice(2) : _.slice(2), e.l || (e.l = {}), e.l[_ + r] = t, t ? n ? t.t = n.t : (t.t = te, e.addEventListener(_, r ? Q : K, r)) : e.removeEventListener(_, r ? Q : K, r);
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
        _.u = te++;
      else if (_.u < t.t)
        return;
      return t(f.event ? f.event(_) : _);
    }
  };
}
function oe(e, _, t, n, o, r, l, u, c, a) {
  var d, i, p, s, g, w, b, h, v, H, C, U, T, ie, M, V, q, x = _.type;
  if (_.constructor !== void 0)
    return null;
  128 & t.__u && (c = !!(32 & t.__u), r = [u = _.__e = t.__e]), (d = f.__b) && d(_);
  e:
    if (typeof x == "function")
      try {
        if (h = _.props, v = "prototype" in x && x.prototype.render, H = (d = x.contextType) && n[d.__c], C = d ? H ? H.props.value : d.__ : n, t.__c ? b = (i = _.__c = t.__c).__ = i.__E : (v ? _.__c = i = new x(h, C) : (_.__c = i = new P(h, C), i.constructor = x, i.render = Qe), H && H.sub(i), i.props = h, i.state || (i.state = {}), i.context = C, i.__n = n, p = i.__d = !0, i.__h = [], i._sb = []), v && i.__s == null && (i.__s = i.state), v && x.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = N({}, i.__s)), N(i.__s, x.getDerivedStateFromProps(h, i.__s))), s = i.props, g = i.state, i.__v = _, p)
          v && x.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), v && i.componentDidMount != null && i.__h.push(i.componentDidMount);
        else {
          if (v && x.getDerivedStateFromProps == null && h !== s && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, C), !i.__e && (i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, C) === !1 || _.__v == t.__v)) {
            for (_.__v != t.__v && (i.props = h, i.state = i.__s, i.__d = !1), _.__e = t.__e, _.__k = t.__k, _.__k.some(function(A) {
              A && (A.__ = _);
            }), U = 0; U < i._sb.length; U++)
              i.__h.push(i._sb[U]);
            i._sb = [], i.__h.length && l.push(i);
            break e;
          }
          i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, C), v && i.componentDidUpdate != null && i.__h.push(function() {
            i.componentDidUpdate(s, g, w);
          });
        }
        if (i.context = C, i.props = h, i.__P = e, i.__e = !1, T = f.__r, ie = 0, v) {
          for (i.state = i.__s, i.__d = !1, T && T(_), d = i.render(i.props, i.state, i.context), M = 0; M < i._sb.length; M++)
            i.__h.push(i._sb[M]);
          i._sb = [];
        } else
          do
            i.__d = !1, T && T(_), d = i.render(i.props, i.state, i.context), i.state = i.__s;
          while (i.__d && ++ie < 25);
        i.state = i.__s, i.getChildContext != null && (n = N(N({}, n), i.getChildContext())), v && !p && i.getSnapshotBeforeUpdate != null && (w = i.getSnapshotBeforeUpdate(s, g)), u = Me(e, j(V = d != null && d.type === S && d.key == null ? d.props.children : d) ? V : [V], _, t, n, o, r, l, u, c, a), i.base = _.__e, _.__u &= -161, i.__h.length && l.push(i), b && (i.__E = i.__ = null);
      } catch (A) {
        if (_.__v = null, c || r != null)
          if (A.then) {
            for (_.__u |= c ? 160 : 128; u && u.nodeType == 8 && u.nextSibling; )
              u = u.nextSibling;
            r[r.indexOf(u)] = null, _.__e = u;
          } else
            for (q = r.length; q--; )
              ne(r[q]);
        else
          _.__e = t.__e, _.__k = t.__k;
        f.__e(A, _, t);
      }
    else
      r == null && _.__v == t.__v ? (_.__k = t.__k, _.__e = t.__e) : u = _.__e = Ke(t.__e, _, t, n, o, r, l, c, a);
  return (d = f.diffed) && d(_), 128 & _.__u ? void 0 : u;
}
function Le(e, _, t) {
  for (var n = 0; n < t.length; n++)
    re(t[n], t[++n], t[++n]);
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
function Ke(e, _, t, n, o, r, l, u, c) {
  var a, d, i, p, s, g, w, b = t.props, h = _.props, v = _.type;
  if (v == "svg" ? o = "http://www.w3.org/2000/svg" : v == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), r != null) {
    for (a = 0; a < r.length; a++)
      if ((s = r[a]) && "setAttribute" in s == !!v && (v ? s.localName == v : s.nodeType == 3)) {
        e = s, r[a] = null;
        break;
      }
  }
  if (e == null) {
    if (v == null)
      return document.createTextNode(h);
    e = document.createElementNS(o, v, h.is && h), u && (f.__m && f.__m(_, r), u = !1), r = null;
  }
  if (v === null)
    b === h || u && e.data === h || (e.data = h);
  else {
    if (r = r && I.call(e.childNodes), b = t.props || B, !u && r != null)
      for (b = {}, a = 0; a < e.attributes.length; a++)
        b[(s = e.attributes[a]).name] = s.value;
    for (a in b)
      if (s = b[a], a != "children") {
        if (a == "dangerouslySetInnerHTML")
          i = s;
        else if (!(a in h)) {
          if (a == "value" && "defaultValue" in h || a == "checked" && "defaultChecked" in h)
            continue;
          D(e, a, null, s, o);
        }
      }
    for (a in h)
      s = h[a], a == "children" ? p = s : a == "dangerouslySetInnerHTML" ? d = s : a == "value" ? g = s : a == "checked" ? w = s : u && typeof s != "function" || b[a] === s || D(e, a, s, b[a], o);
    if (d)
      u || i && (d.__html === i.__html || d.__html === e.innerHTML) || (e.innerHTML = d.__html), _.__k = [];
    else if (i && (e.innerHTML = ""), Me(_.type === "template" ? e.content : e, j(p) ? p : [p], _, t, n, v == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, r, l, r ? r[0] : t.__k && E(t, 0), u, c), r != null)
      for (a = r.length; a--; )
        ne(r[a]);
    u || (a = "value", v == "progress" && g == null ? e.removeAttribute("value") : g !== void 0 && (g !== e[a] || v == "progress" && !g || v == "option" && g !== b[a]) && D(e, a, g, b[a], o), a = "checked", w !== void 0 && w !== e[a] && D(e, a, w, b[a], o));
  }
  return e;
}
function re(e, _, t) {
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
function Re(e, _, t) {
  var n, o;
  if (f.unmount && f.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || re(n, null, _)), (n = e.__c) != null) {
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
      n[o] && Re(n[o], _, t || typeof e.type != "function");
  t || ne(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Qe(e, _, t) {
  return this.constructor(e, t);
}
function Xe(e, _, t) {
  var n, o, r, l;
  _ == document && (_ = document.documentElement), f.__ && f.__(e, _), o = (n = typeof t == "function") ? null : t && t.__k || _.__k, r = [], l = [], oe(_, e = (!n && t || _).__k = X(S, null, [e]), o || B, B, _.namespaceURI, !n && t ? [t] : o ? null : _.firstChild ? I.call(_.childNodes) : null, r, !n && t ? t : o ? o.__e : _.firstChild, n, l), Le(r, e, l);
}
I = Be.slice, f = { __e: function(e, _, t, n) {
  for (var o, r, l; _ = _.__; )
    if ((o = _.__c) && !o.__)
      try {
        if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(e)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), l = o.__d), l)
          return o.__E = o;
      } catch (u) {
        e = u;
      }
  throw e;
} }, Ee = 0, P.prototype.setState = function(e, _) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = N({}, this.state), typeof e == "function" && (e = e(N({}, t), this.props)), e && N(t, e), e != null && this.__v && (_ && this._sb.push(_), ue(this));
}, P.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ue(this));
}, P.prototype.render = S, $ = [], He = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Te = function(e, _) {
  return e.__v.__b - _.__v.__b;
}, F.__r = 0, Ae = /(PointerCapture)$|Capture$/i, te = 0, K = ce(!1), Q = ce(!0);
var Ye = 0;
function k(e, _, t, n, o, r) {
  _ || (_ = {});
  var l, u, c = _;
  if ("ref" in c)
    for (u in c = {}, _)
      u == "ref" ? l = _[u] : c[u] = _[u];
  var a = { type: e, props: c, key: t, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ye, __i: -1, __u: 0, __source: o, __self: r };
  if (typeof e == "function" && (l = e.defaultProps))
    for (u in l)
      c[u] === void 0 && (c[u] = l[u]);
  return f.vnode && f.vnode(a), a;
}
var z, m, G, se, Y = 0, Oe = [], y = f, fe = y.__b, pe = y.__r, de = y.diffed, he = y.__c, ve = y.unmount, me = y.__;
function Fe(e, _) {
  y.__h && y.__h(m, e, Y || _), Y = 0;
  var t = m.__H || (m.__H = { __: [], __h: [] });
  return e >= t.__.length && t.__.push({}), t.__[e];
}
function ee(e) {
  return Y = 1, e_(We, e);
}
function e_(e, _, t) {
  var n = Fe(z++, 2);
  if (n.t = e, !n.__c && (n.__ = [t ? t(_) : We(void 0, _), function(u) {
    var c = n.__N ? n.__N[0] : n.__[0], a = n.t(c, u);
    c !== a && (n.__N = [a, n.__[1]], n.__c.setState({}));
  }], n.__c = m, !m.__f)) {
    var o = function(u, c, a) {
      if (!n.__c.__H)
        return !0;
      var d = n.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (d.every(function(p) {
        return !p.__N;
      }))
        return !r || r.call(this, u, c, a);
      var i = n.__c.props !== u;
      return d.forEach(function(p) {
        if (p.__N) {
          var s = p.__[0];
          p.__ = p.__N, p.__N = void 0, s !== p.__[0] && (i = !0);
        }
      }), r && r.call(this, u, c, a) || i;
    };
    m.__f = !0;
    var r = m.shouldComponentUpdate, l = m.componentWillUpdate;
    m.componentWillUpdate = function(u, c, a) {
      if (this.__e) {
        var d = r;
        r = void 0, o(u, c, a), r = d;
      }
      l && l.call(this, u, c, a);
    }, m.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function __(e, _) {
  var t = Fe(z++, 3);
  !y.__s && o_(t.__H, _) && (t.__ = e, t.u = _, m.__H.__h.push(t));
}
function t_() {
  for (var e; e = Oe.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(O), e.__H.__h.forEach(_e), e.__H.__h = [];
      } catch (_) {
        e.__H.__h = [], y.__e(_, e.__v);
      }
}
y.__b = function(e) {
  m = null, fe && fe(e);
}, y.__ = function(e, _) {
  e && _.__k && _.__k.__m && (e.__m = _.__k.__m), me && me(e, _);
}, y.__r = function(e) {
  pe && pe(e), z = 0;
  var _ = (m = e.__c).__H;
  _ && (G === m ? (_.__h = [], m.__h = [], _.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (_.__h.forEach(O), _.__h.forEach(_e), _.__h = [], z = 0)), G = m;
}, y.diffed = function(e) {
  de && de(e);
  var _ = e.__c;
  _ && _.__H && (_.__H.__h.length && (Oe.push(_) !== 1 && se === y.requestAnimationFrame || ((se = y.requestAnimationFrame) || n_)(t_)), _.__H.__.forEach(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), G = m = null;
}, y.__c = function(e, _) {
  _.some(function(t) {
    try {
      t.__h.forEach(O), t.__h = t.__h.filter(function(n) {
        return !n.__ || _e(n);
      });
    } catch (n) {
      _.some(function(o) {
        o.__h && (o.__h = []);
      }), _ = [], y.__e(n, t.__v);
    }
  }), he && he(e, _);
}, y.unmount = function(e) {
  ve && ve(e);
  var _, t = e.__c;
  t && t.__H && (t.__H.__.forEach(function(n) {
    try {
      O(n);
    } catch (o) {
      _ = o;
    }
  }), t.__H = void 0, _ && y.__e(_, t.__v));
};
var ye = typeof requestAnimationFrame == "function";
function n_(e) {
  var _, t = function() {
    clearTimeout(n), ye && cancelAnimationFrame(_), setTimeout(e);
  }, n = setTimeout(t, 100);
  ye && (_ = requestAnimationFrame(t));
}
function O(e) {
  var _ = m, t = e.__c;
  typeof t == "function" && (e.__c = void 0, t()), m = _;
}
function _e(e) {
  var _ = m;
  e.__c = e.__(), m = _;
}
function o_(e, _) {
  return !e || e.length !== _.length || _.some(function(t, n) {
    return t !== e[n];
  });
}
function We(e, _) {
  return typeof _ == "function" ? _(e) : _;
}
function r_(e, _) {
  for (var t in _)
    e[t] = _[t];
  return e;
}
function ge(e, _) {
  for (var t in e)
    if (t !== "__source" && !(t in _))
      return !0;
  for (var n in _)
    if (n !== "__source" && e[n] !== _[n])
      return !0;
  return !1;
}
function be(e, _) {
  this.props = e, this.context = _;
}
(be.prototype = new P()).isPureReactComponent = !0, be.prototype.shouldComponentUpdate = function(e, _) {
  return ge(this.props, e) || ge(this.state, _);
};
var ke = f.__b;
f.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ke && ke(e);
};
var i_ = f.__e;
f.__e = function(e, _, t, n) {
  if (e.then) {
    for (var o, r = _; r = r.__; )
      if ((o = r.__c) && o.__c)
        return _.__e == null && (_.__e = t.__e, _.__k = t.__k), o.__c(e, _);
  }
  i_(e, _, t, n);
};
var we = f.unmount;
function ze(e, _, t) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), e.__c.__H = null), (e = r_({}, e)).__c != null && (e.__c.__P === t && (e.__c.__P = _), e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
    return ze(n, _, t);
  })), e;
}
function Ie(e, _, t) {
  return e && t && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
    return Ie(n, _, t);
  }), e.__c && e.__c.__P === _ && (e.__e && t.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = t)), e;
}
function J() {
  this.__u = 0, this.o = null, this.__b = null;
}
function je(e) {
  var _ = e.__.__c;
  return _ && _.__a && _.__a(e);
}
function L() {
  this.i = null, this.l = null;
}
f.unmount = function(e) {
  var _ = e.__c;
  _ && _.__R && _.__R(), _ && 32 & e.__u && (e.type = null), we && we(e);
}, (J.prototype = new P()).__c = function(e, _) {
  var t = _.__c, n = this;
  n.o == null && (n.o = []), n.o.push(t);
  var o = je(n.__v), r = !1, l = function() {
    r || (r = !0, t.__R = null, o ? o(u) : u());
  };
  t.__R = l;
  var u = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var c = n.state.__a;
        n.__v.__k[0] = Ie(c, c.__c.__P, c.__c.__O);
      }
      var a;
      for (n.setState({ __a: n.__b = null }); a = n.o.pop(); )
        a.forceUpdate();
    }
  };
  n.__u++ || 32 & _.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(l, l);
}, J.prototype.componentWillUnmount = function() {
  this.o = [];
}, J.prototype.render = function(e, _) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = ze(this.__b, t, n.__O = n.__P);
    }
    this.__b = null;
  }
  var o = _.__a && X(S, null, e.fallback);
  return o && (o.__u &= -33), [X(S, null, _.__a ? null : e.children), o];
};
var xe = function(e, _, t) {
  if (++t[1] === t[0] && e.l.delete(_), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
    for (t = e.i; t; ) {
      for (; t.length > 3; )
        t.pop()();
      if (t[1] < t[0])
        break;
      e.i = t = t[2];
    }
};
(L.prototype = new P()).__a = function(e) {
  var _ = this, t = je(_.__v), n = _.l.get(e);
  return n[0]++, function(o) {
    var r = function() {
      _.props.revealOrder ? (n.push(o), xe(_, e, n)) : o();
    };
    t ? t(r) : r();
  };
}, L.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var _ = W(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && _.reverse();
  for (var t = _.length; t--; )
    this.l.set(_[t], this.i = [1, 0, this.i]);
  return e.children;
}, L.prototype.componentDidUpdate = L.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(_, t) {
    xe(e, t, _);
  });
};
var l_ = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, u_ = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, a_ = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, c_ = /[A-Z0-9]/g, s_ = typeof document < "u", f_ = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Pe(e, _, t) {
  return _.__k == null && (_.textContent = ""), Xe(e, _), typeof t == "function" && t(), e ? e.__c : null;
}
P.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(P.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(_) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: _ });
  } });
});
var Ce = f.event;
function p_() {
}
function d_() {
  return this.cancelBubble;
}
function h_() {
  return this.defaultPrevented;
}
f.event = function(e) {
  return Ce && (e = Ce(e)), e.persist = p_, e.isPropagationStopped = d_, e.isDefaultPrevented = h_, e.nativeEvent = e;
};
var v_ = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Ne = f.vnode;
f.vnode = function(e) {
  typeof e.type == "string" && function(_) {
    var t = _.props, n = _.type, o = {}, r = n.indexOf("-") === -1;
    for (var l in t) {
      var u = t[l];
      if (!(l === "value" && "defaultValue" in t && u == null || s_ && l === "children" && n === "noscript" || l === "class" || l === "className")) {
        var c = l.toLowerCase();
        l === "defaultValue" && "value" in t && t.value == null ? l = "value" : l === "download" && u === !0 ? u = "" : c === "translate" && u === "no" ? u = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? l = "ondblclick" : c !== "onchange" || n !== "input" && n !== "textarea" || f_(t.type) ? c === "onfocus" ? l = "onfocusin" : c === "onblur" ? l = "onfocusout" : a_.test(l) && (l = c) : c = l = "oninput" : r && u_.test(l) ? l = l.replace(c_, "-$&").toLowerCase() : u === null && (u = void 0), c === "oninput" && o[l = c] && (l = "oninputCapture"), o[l] = u;
      }
    }
    n == "select" && o.multiple && Array.isArray(o.value) && (o.value = W(t.children).forEach(function(a) {
      a.props.selected = o.value.indexOf(a.props.value) != -1;
    })), n == "select" && o.defaultValue != null && (o.value = W(t.children).forEach(function(a) {
      a.props.selected = o.multiple ? o.defaultValue.indexOf(a.props.value) != -1 : o.defaultValue == a.props.value;
    })), t.class && !t.className ? (o.class = t.class, Object.defineProperty(o, "className", v_)) : (t.className && !t.class || t.class && t.className) && (o.class = o.className = t.className), _.props = o;
  }(e), e.$$typeof = l_, Ne && Ne(e);
};
var $e = f.__r;
f.__r = function(e) {
  $e && $e(e), e.__c;
};
var Se = f.diffed;
f.diffed = function(e) {
  Se && Se(e);
  var _ = e.props, t = e.__e;
  t != null && e.type === "textarea" && "value" in _ && _.value !== t.value && (t.value = _.value == null ? "" : _.value);
};
function m_() {
  const [e, _] = ee(0), t = window.Blinko.i18n;
  return /* @__PURE__ */ k(S, { children: [
    /* @__PURE__ */ k("h1", { children: [
      t.t("title"),
      "2"
    ] }),
    /* @__PURE__ */ k("div", { class: "card", children: /* @__PURE__ */ k("button", { onClick: () => {
      _((n) => n + 1), console.log(window.Blinko.toast.success(t.t("successMessage")));
    }, children: t.t("countLabel", { count: e }) }) })
  ] });
}
function y_() {
  const [e, _] = ee(""), [t, n] = ee(!0), o = window.Blinko.i18n;
  __(() => {
    window.Blinko.api.config.getPluginConfig.query({
      pluginName: "my-note-plugin"
    }).then((l) => {
      _(l.apiToken);
    });
  }, []);
  const r = async () => {
    window.Blinko.toast.success(o.t("settingsSaved")), window.Blinko.closeDialog(), await window.Blinko.api.config.setPluginConfig.mutate({
      pluginName: "my-note-plugin",
      key: "apiToken",
      value: e
    }), window.Blinko.api.config.getPluginConfig.query({
      pluginName: "my-note-plugin"
    });
  };
  return /* @__PURE__ */ k("div", { className: "max-w-2xl mx-auto p-2 rounded-lg", children: [
    /* @__PURE__ */ k("div", { className: "mb-6", children: /* @__PURE__ */ k("label", { className: "block text-sm font-medium mb-2", children: [
      o.t("apiTokenLabel"),
      /* @__PURE__ */ k(
        "input",
        {
          value: e,
          onChange: (l) => _(l.currentTarget.value),
          placeholder: o.t("enterApiToken"),
          className: "mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm bg-primary!"
        }
      )
    ] }) }),
    /* @__PURE__ */ k("div", { className: "mb-6", children: /* @__PURE__ */ k("label", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ k(
        "input",
        {
          type: "checkbox",
          checked: t,
          onChange: (l) => n(l.currentTarget.checked),
          className: "h-4 w-4 text-primary-foreground bg-primary rounded"
        }
      ),
      /* @__PURE__ */ k("span", { className: "text-sm text-desc", children: o.t("enableNotifications") })
    ] }) }),
    /* @__PURE__ */ k(
      "button",
      {
        onClick: r,
        className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-primary text-primary-foreground",
        children: o.t("saveSettings")
      }
    )
  ] });
}
System.register([], (e) => ({
  execute: () => {
    e("default", class {
      constructor() {
        // Flag indicating this plugin has a settings panel
        Z(this, "withSettingPanel", !0);
        /**
         * Renders the settings panel UI
         * @returns {HTMLElement} Container element with rendered settings component
         */
        Z(this, "renderSettingPanel", () => {
          const t = document.createElement("div");
          return Pe(/* @__PURE__ */ k(y_, {}), t), t;
        });
        Object.assign(this, { name: "blinko-plugin-demo", author: "blinko-offical", url: "https://github.com/blinko-space/blinko-plugin-template", version: "0.0.4", minAppVersion: "0.0.0", displayName: { default: "Blinko plugin demo", zh: "Blinko插件示例" }, description: { default: "This is a blinko plugin demo, you can use it as a template to create your own plugin.", zh: "这是一个blinko插件示例，你可以使用它作为模板来创建自己的插件。" }, readme: { default: "README.md", zh: "README_zh.md" } });
      }
      /**
       * Initializes the plugin
       * Sets up toolbar icons, right-click menus, and AI write prompts
       */
      async init() {
        this.initI18n(), window.Blinko.addToolBarIcon({
          name: "test",
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-file'><path d='M13 3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z'/><polyline points='14 3 14 9 19 9'/></svg>",
          placement: "top",
          tooltip: "testtootip",
          content: () => {
            const t = document.createElement("div");
            return t.setAttribute("data-plugin", "my-note-plugin"), Pe(/* @__PURE__ */ k(m_, {}), t), t;
          }
        }), window.Blinko.addRightClickMenu({
          name: "custom-action",
          label: "Custom Action",
          icon: "tabler:accessible",
          onClick: (t) => {
            console.log("Custom action triggered", t);
          }
        }), window.Blinko.addAiWritePrompt(
          "Translate Content",
          "Please translate the following content into English:",
          "material-symbols:translate"
        );
      }
      /**
       * Initializes internationalization resources
       * Adds English and Chinese translation bundles
       */
      initI18n() {
        window.Blinko.i18n.addResourceBundle("en", "translation", { title: "My Plugin", countLabel: "Count is {{count}}", successMessage: "Success!" }), window.Blinko.i18n.addResourceBundle("zh", "translation", { title: "我的插件", countLabel: "计数为 {{count}}", successMessage: "成功！" });
      }
      /**
       * Cleanup function called when plugin is disabled
       */
      destroy() {
        console.log("Plugin destroyed");
      }
    });
  }
}));
