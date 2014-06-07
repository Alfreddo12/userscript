﻿// ==UserScript==
// @name           jSpeed Technique - JavaScript Library
// @version        1.0.3
// @author         ww_start_t - نايف الرشيدي
// @copyright      © Copyright 2011, 2013 jSpeed
// @license        Released under the LGPL license
// @description    jSpeed - JavaScript Library
// @include        *
// ==/UserScript==

/*!
 * jSpeed Technique - JavaScript Library v1.0.3
 *
 * Copyright 2011, 2013 jSpeed,
 * Released under the LGPL license
 * http://www.gnu.org/copyleft/lesser.html
 *
 * Email us: KSAoTOON@Gmail.com
 *
 * Date: 2013/04/23
 */
(function (a, b) { window.jSpeed = function (a, b) { if (a) return new $R(a, b ? b : null) }, window.$R = window.jSpeed; function is$(a) { if (a instanceof NodeList || a instanceof HTMLCollection) return true; else return false }; function $R(a, b) { if (a && typeof a == 'string' && !/\<\w+(\s+[^>]+|)\>/.test(a)) { if (window === this) return new window.$R(a, b != null ? b : document); this.e = b != null ? b : document; if (/\-\>/.test(a)) { a = a.replace(/(\s+|)\-\>(\s+|)/g, '->'); var n = [], u = [], i, l = a.split('->'), li = l.length; for (i = 0; i < li; i++) { n[i] = l[i]; this.e = is$(this.e) ? this.e[0] : this.e; if (this.e == undefined) return 'undefined'; if (/\[\D+|\w+\.|\w+\#/.test(n[i]) || (/\#/.test(n[i]) && (i != 0 || b != null))) { if (i == (li - 1)) this.e = this.e.querySelectorAll(n[i]); else this.e = this.e.querySelector(n[i]) } else if (/\#/.test(n[i]) && i == 0 && b == null) { this.e = document.getElementById(n[i].replace('#', '')) } else if (/\./.test(n[i])) { n[i] = n[i].replace('.', ''); if (/\[\d+\]/.test(n[i])) { u[i] = n[i].split('[')[1].split(']')[0]; n[i] = n[i].split('[')[0]; this.e = this.e.getElementsByClassName(n[i])[u[i]] } else this.e = this.e.getElementsByClassName(n[i]) } else { if (/\[\d+\]/.test(n[i])) { u[i] = n[i].split('[')[1].split(']')[0]; n[i] = n[i].split('[')[0]; this.e = this.e.getElementsByTagName(n[i])[u[i]] } else this.e = this.e.getElementsByTagName(n[i]) } } } else { var n = a, u; if (/\[\D+|\w+\.|\w+\#/.test(n) || (/\#/.test(n) && b != null)) { this.e = this.e.querySelectorAll(n) } else if (/\#/.test(n) && b == null) { this.e = document.getElementById(n.replace('#', '')) } else if (/\./.test(n)) { n = n.replace('.', ''); if (/\[\d+\]/.test(n)) { u = n.split('[')[1].split(']')[0]; n = n.split('[')[0]; this.e = this.e.getElementsByClassName(n)[u] } else this.e = this.e.getElementsByClassName(n) } else { if (/\[\d+\]/.test(n)) { u = n.split('[')[1].split(']')[0]; n = n.split('[')[0]; this.e = this.e.getElementsByTagName(n)[u] } else this.e = this.e.getElementsByTagName(n) } }; return this } else { if (window === this) return new window.$R(a, b != null ? b : document); this.e = a; return this } }; $R.prototype = { hide: function () { if (is$(this.e)) for (var i = 0; i < this.e.length; i++) this.e[i].style.display = 'none'; else this.e.style.display = 'none'; return this }, show: function () { if (is$(this.e)) for (var i = 0; i < this.e.length; i++) this.e[i].style.display = ''; else this.e.style.display = ''; return this }, val: function (newval) { if (newval) { if (is$(this.e)) for (var i = 0; i < this.e.length; i++) this.e[i].value = newval; else this.e.value = newval } else return (is$(this.e) ? this.e[0] : this.e).value; return this }, count: function () { return this.e.length }, item: function (a) { if (is$(this.e)) this.e = this.e[a]; else console.log('cannot find item:' + a); return this }, toggle: function () { if (is$(this.e)) for (var i = 0; i < this.e.length; i++) this.e[i].style.display = this.e[i].style.display != 'none' ? 'none' : ''; else this.e.style.display = this.e.style.display != 'none' ? 'none' : ''; return this }, size: function (height, width) { if (is$(this.e)) for (var i = 0; i < this.e.length; i++) { this.e[i].style.height = height + 'px'; this.e[i].style.width = width + 'px' } else { this.e.style.height = height + 'px'; this.e.style.width = width + 'px' }; return this }, append: function (s) { if (typeof s == 'string') { var i = 0, u = this.e; if (is$(u)) { for (; i < u.length; i++) { u[i].insertAdjacentHTML('beforeEnd', s) } } else u.insertAdjacentHTML('beforeEnd', s) } else if (typeof s == 'object') { if (is$(this.e)) { var i = 0, u = this.e, o = u.length; var e = document.createElement('div'); e.appendChild(s.e ? s.e : s); while (i < o) { u[i].insertAdjacentHTML('beforeEnd', e.innerHTML); i++ } } else this.e.appendChild(s) }; return this }, appendTo: function (a) { if (a) { var x = typeof a == 'string' ? $R(a) : a, r = this.e; var j = x.count ? x.count() : x.length; if (x.count) { x.append(this.e) } else { if (is$(x)) for (var i = 0; i < j; i++) x[i].insertAdjacentHTML('beforeEnd', this.e); else x.insertAdjacentHTML('beforeEnd', this.e) } }; return this }, empty: function () { var a = this.e, i = 0; if (is$(a)) { var u = a.length; while (i < u) { while (a[i].firstChild) a[i].removeChild(a[i].firstChild); i++ } } else while (a.firstChild) a.removeChild(a.firstChild); return this }, isEmpty: function () { var a = this.e, i = 0, result = false; if (is$(a)) { var u = a.length; while (i < u) { if (a[i].hasChildNodes()) { result = false; break } else result = true; i++ } } else if (a.hasChildNodes()) { result = false } else result = true; return result }, isExist: function () { if (this.e == undefined) return false; else return true }, remove: function () { if (is$(this.e)) for (var i = 0; i < this.e.length; i++) this.e[i].parentNode.removeChild(this.e[i]); else this.e.parentNode.removeChild(this.e); return }, replaceWith: function (s) { if (typeof s == 'object') { var a = (is$(s)) ? true : false; var e = this.e.parentNode; if (is$(this.e)) for (var i = 0; i < this.e.length; i++) this.e[i].parentNode.replaceChild(a == true ? s[i] : s, this.e[i]); else this.e.parentNode.replaceChild(s, this.e); return e }; return this }, parent: function () { this.e = (is$(this.e) ? this.e[0] : this.e).parentNode; return this }, next: function () { this.e = (is$(this.e) ? this.e[0] : this.e).nextElementSibling; return this }, prev: function () { this.e = (is$(this.e) ? this.e[0] : this.e).previousElementSibling; return this }, first: function () { this.e = (is$(this.e) ? this.e[0] : this.e).firstChild; return this }, find: function (a) { return window.$R(a, (is$(this.e) ? this.e[0] : this.e)) }, html: function (s) { if (s) { if (is$(this.e)) for (var i = 0; i < this.e.length; i++) this.e[i].innerHTML = s; else this.e.innerHTML = s } else return (is$(this.e) ? this.e[0] : this.e).innerHTML; return this }, txt: function (s) { if (s) { if (is$(this.e)) for (var i = 0; i < this.e.length; i++) this.e[i].textContent = s; else this.e.textContent = s } else return this.e.textContent; return this }, attr: function (s, t) { if (s) { if (s && t) { if (is$(this.e)) for (var i = 0; i < this.e.length; i++) this.e[i].setAttribute(s, t); else this.e.setAttribute(s, t) } else return (is$(this.e) ? this.e[0] : this.e).getAttribute(s) }; return this }, removeAttr: function (s) { if (s) { if (is$(this.e)) for (var i = 0; i < this.e.length; i++) this.e[i].removeAttribute(s); else this.e.removeAttribute(s) }; return this }, css: function (s, t) { if (s) { if (/\-/.test(s)) { var r = s.toLowerCase(); var i = [r.split("-")[0], r.split("-")[1].charAt(0).toUpperCase() + r.split("-")[1].slice(1)]; var x = i[0] + i[1]; if (t || t == '') if (is$(this.e)) for (var i = 0; i < this.e.length; i++) this.e[i].style[x] = t; else this.e.style[x] = t; else return (is$(this.e) ? this.e[0] : this.e).style[x]; return this } else { if (t || t == '') if (is$(this.e)) for (var i = 0; i < this.e.length; i++) this.e[i].style[s] = t; else this.e.style[s] = t; else return (is$(this.e) ? this.e[0] : this.e).style[s]; return this } }; return this }, get: function (a) { if ((is$(this.e) ? this.e[0] : this.e)[a]) return (is$(this.e) ? this.e[0] : this.e)[a]; else return null }, this: function (a) { if (is$(this.e)) for (var i = 0; i < this.e.length; i++) a(this.e[i]); else a(this.e) }, click: function (a) { if (a) { if (is$(this.e)) for (var i = 0; i < this.e.length; i++) this.e[i].onclick = a; else this.e.onclick = a } else { if (is$(this.e)) for (var i = 0; i < this.e.length; i++) this.e[i].click(); else this.e.click() }; return this }, on: function (a, b) { if (a && b) { var is = /\,/.test(a); if (is$(this.e)) for (var i = 0; i < this.e.length; i++) if (is) for (var c = 0; c < a.split(',').length; c++) this.e[i].addEventListener(a.split(',')[c], b); else this.e[i].addEventListener(a, b); else { if (is) for (var c = 0; c < a.split(',').length; c++) this.e.addEventListener(a.split(',')[c], b); else this.e.addEventListener(a, b) } }; return this }, hover: function (a, b) { if (a) if (is$(this.e)) for (var i = 0; i < this.e.length; i++) this.e[i].onmouseover = a; else this.e.onmouseover = a; if (b) if (is$(this.e)) for (var i = 0; i < this.e.length; i++) this.e[i].onmouseout = b; else this.e.onmouseout = b; return this } }; return new window.$R(a, b ? b : null) })(window);