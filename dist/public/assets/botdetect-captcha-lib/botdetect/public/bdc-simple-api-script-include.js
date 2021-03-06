"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  function h(b) {
    b ? (a[0] = a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0, this.blocks = a) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];this.h0 = 1732584193;this.h1 = 4023233417;this.h2 = 2562383102;this.h3 = 271733878;this.h4 = 3285377520;this.block = this.start = this.bytes = 0;this.finalized = this.hashed = !1;this.first = !0;
  }var d = "object" === (typeof window === "undefined" ? "undefined" : _typeof(window)) ? window : {},
      c = "0123456789abcdef".split(""),
      m = [-2147483648, 8388608, 32768, 128],
      p = [24, 16, 8, 0],
      k = ["hex", "array", "digest", "arrayBuffer"],
      a = [],
      b = function b(a) {
    return function (b) {
      return new h(!0).update(b)[a]();
    };
  };h.prototype.update = function (a) {
    if (!this.finalized) {
      var b = "string" !== typeof a;b && a.constructor === d.ArrayBuffer && (a = new Uint8Array(a));for (var q, c = 0, f, e = a.length || 0, g = this.blocks; c < e;) {
        this.hashed && (this.hashed = !1, g[0] = this.block, g[16] = g[1] = g[2] = g[3] = g[4] = g[5] = g[6] = g[7] = g[8] = g[9] = g[10] = g[11] = g[12] = g[13] = g[14] = g[15] = 0);if (b) for (f = this.start; c < e && 64 > f; ++c) {
          g[f >> 2] |= a[c] << p[f++ & 3];
        } else for (f = this.start; c < e && 64 > f; ++c) {
          q = a.charCodeAt(c), 128 > q ? g[f >> 2] |= q << p[f++ & 3] : (2048 > q ? g[f >> 2] |= (192 | q >> 6) << p[f++ & 3] : (55296 > q || 57344 <= q ? g[f >> 2] |= (224 | q >> 12) << p[f++ & 3] : (q = 65536 + ((q & 1023) << 10 | a.charCodeAt(++c) & 1023), g[f >> 2] |= (240 | q >> 18) << p[f++ & 3], g[f >> 2] |= (128 | q >> 12 & 63) << p[f++ & 3]), g[f >> 2] |= (128 | q >> 6 & 63) << p[f++ & 3]), g[f >> 2] |= (128 | q & 63) << p[f++ & 3]);
        }this.lastByteIndex = f;this.bytes += f - this.start;64 <= f ? (this.block = g[16], this.start = f - 64, this.hash(), this.hashed = !0) : this.start = f;
      }return this;
    }
  };h.prototype.finalize = function () {
    if (!this.finalized) {
      this.finalized = !0;var a = this.blocks,
          b = this.lastByteIndex;a[16] = this.block;a[b >> 2] |= m[b & 3];this.block = a[16];56 <= b && (this.hashed || this.hash(), a[0] = this.block, a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0);a[15] = this.bytes << 3;this.hash();
    }
  };h.prototype.hash = function () {
    var a = this.h0,
        b = this.h1,
        c = this.h2,
        e = this.h3,
        f = this.h4,
        d,
        g = this.blocks;for (d = 16; 80 > d; ++d) {
      var l = g[d - 3] ^ g[d - 8] ^ g[d - 14] ^ g[d - 16];g[d] = l << 1 | l >>> 31;
    }for (d = 0; 20 > d; d += 5) {
      var n = b & c | ~b & e;l = a << 5 | a >>> 27;f = l + n + f + 1518500249 + g[d] << 0;b = b << 30 | b >>> 2;n = a & b | ~a & c;l = f << 5 | f >>> 27;e = l + n + e + 1518500249 + g[d + 1] << 0;a = a << 30 | a >>> 2;n = f & a | ~f & b;l = e << 5 | e >>> 27;c = l + n + c + 1518500249 + g[d + 2] << 0;f = f << 30 | f >>> 2;n = e & f | ~e & a;l = c << 5 | c >>> 27;b = l + n + b + 1518500249 + g[d + 3] << 0;e = e << 30 | e >>> 2;n = c & e | ~c & f;l = b << 5 | b >>> 27;a = l + n + a + 1518500249 + g[d + 4] << 0;c = c << 30 | c >>> 2;
    }for (; 40 > d; d += 5) {
      n = b ^ c ^ e, l = a << 5 | a >>> 27, f = l + n + f + 1859775393 + g[d] << 0, b = b << 30 | b >>> 2, n = a ^ b ^ c, l = f << 5 | f >>> 27, e = l + n + e + 1859775393 + g[d + 1] << 0, a = a << 30 | a >>> 2, n = f ^ a ^ b, l = e << 5 | e >>> 27, c = l + n + c + 1859775393 + g[d + 2] << 0, f = f << 30 | f >>> 2, n = e ^ f ^ a, l = c << 5 | c >>> 27, b = l + n + b + 1859775393 + g[d + 3] << 0, e = e << 30 | e >>> 2, n = c ^ e ^ f, l = b << 5 | b >>> 27, a = l + n + a + 1859775393 + g[d + 4] << 0, c = c << 30 | c >>> 2;
    }for (; 60 > d; d += 5) {
      n = b & c | b & e | c & e, l = a << 5 | a >>> 27, f = l + n + f - 1894007588 + g[d] << 0, b = b << 30 | b >>> 2, n = a & b | a & c | b & c, l = f << 5 | f >>> 27, e = l + n + e - 1894007588 + g[d + 1] << 0, a = a << 30 | a >>> 2, n = f & a | f & b | a & b, l = e << 5 | e >>> 27, c = l + n + c - 1894007588 + g[d + 2] << 0, f = f << 30 | f >>> 2, n = e & f | e & a | f & a, l = c << 5 | c >>> 27, b = l + n + b - 1894007588 + g[d + 3] << 0, e = e << 30 | e >>> 2, n = c & e | c & f | e & f, l = b << 5 | b >>> 27, a = l + n + a - 1894007588 + g[d + 4] << 0, c = c << 30 | c >>> 2;
    }for (; 80 > d; d += 5) {
      n = b ^ c ^ e, l = a << 5 | a >>> 27, f = l + n + f - 899497514 + g[d] << 0, b = b << 30 | b >>> 2, n = a ^ b ^ c, l = f << 5 | f >>> 27, e = l + n + e - 899497514 + g[d + 1] << 0, a = a << 30 | a >>> 2, n = f ^ a ^ b, l = e << 5 | e >>> 27, c = l + n + c - 899497514 + g[d + 2] << 0, f = f << 30 | f >>> 2, n = e ^ f ^ a, l = c << 5 | c >>> 27, b = l + n + b - 899497514 + g[d + 3] << 0, e = e << 30 | e >>> 2, n = c ^ e ^ f, l = b << 5 | b >>> 27, a = l + n + a - 899497514 + g[d + 4] << 0, c = c << 30 | c >>> 2;
    }this.h0 = this.h0 + a << 0;this.h1 = this.h1 + b << 0;this.h2 = this.h2 + c << 0;this.h3 = this.h3 + e << 0;this.h4 = this.h4 + f << 0;
  };h.prototype.hex = function () {
    this.finalize();var a = this.h0,
        b = this.h1,
        e = this.h2,
        d = this.h3,
        f = this.h4;return c[a >> 28 & 15] + c[a >> 24 & 15] + c[a >> 20 & 15] + c[a >> 16 & 15] + c[a >> 12 & 15] + c[a >> 8 & 15] + c[a >> 4 & 15] + c[a & 15] + c[b >> 28 & 15] + c[b >> 24 & 15] + c[b >> 20 & 15] + c[b >> 16 & 15] + c[b >> 12 & 15] + c[b >> 8 & 15] + c[b >> 4 & 15] + c[b & 15] + c[e >> 28 & 15] + c[e >> 24 & 15] + c[e >> 20 & 15] + c[e >> 16 & 15] + c[e >> 12 & 15] + c[e >> 8 & 15] + c[e >> 4 & 15] + c[e & 15] + c[d >> 28 & 15] + c[d >> 24 & 15] + c[d >> 20 & 15] + c[d >> 16 & 15] + c[d >> 12 & 15] + c[d >> 8 & 15] + c[d >> 4 & 15] + c[d & 15] + c[f >> 28 & 15] + c[f >> 24 & 15] + c[f >> 20 & 15] + c[f >> 16 & 15] + c[f >> 12 & 15] + c[f >> 8 & 15] + c[f >> 4 & 15] + c[f & 15];
  };h.prototype.toString = h.prototype.hex;
  h.prototype.digest = function () {
    this.finalize();var a = this.h0,
        b = this.h1,
        c = this.h2,
        e = this.h3,
        f = this.h4;return [a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, a & 255, b >> 24 & 255, b >> 16 & 255, b >> 8 & 255, b & 255, c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, c & 255, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255, f >> 24 & 255, f >> 16 & 255, f >> 8 & 255, f & 255];
  };h.prototype.array = h.prototype.digest;h.prototype.arrayBuffer = function () {
    this.finalize();var a = new ArrayBuffer(20),
        b = new DataView(a);b.setUint32(0, this.h0);b.setUint32(4, this.h1);b.setUint32(8, this.h2);b.setUint32(12, this.h3);
    b.setUint32(16, this.h4);return a;
  };var e = function () {
    var a = b("hex");a.create = function () {
      return new h();
    };a.update = function (b) {
      return a.create().update(b);
    };for (var c = 0; c < k.length; ++c) {
      var e = k[c];a[e] = b(e);
    }return a;
  }();d.a1 = e;
})();
(function (h) {
  var d = function d(c) {
    c = c || {};this.startingPos = c.startingPos;this.endingPos = c.endingPos ? c.endingPos : Math.pow(2, 31) - 1;this.step = c.step || 15E3;this.eachElement = c.eachElement;if ("undefined" === typeof this.startingPos || "function" !== typeof this.eachElement) throw Error("Invalid arguments");this.currentPos = this.startingPos;this.running = !0;this.timer = 0;
  };d.prototype.runIt = function () {
    var c = this;(function p() {
      for (; c.currentPos <= c.endingPos && c.running; c.currentPos++) {
        if (c.eachElement(c.currentPos), 0 === c.currentPos % c.step) {
          c.currentPos++;c.timer = setTimeout(p, 0);break;
        }
      }
    })();
  };d.prototype.stopIt = function () {
    this.running = !1;clearTimeout(this.timer);
  };h.BDCustomFor = d;
})(window);
(function (h) {
  function d(a) {
    this.options = k.extend(a || {}, p);this.captchaStyleName = this.options.captchaStyleName;this.captchaId = this.options.captchaId;this.image = c.getElementById(this.captchaStyleName + "_CaptchaImage");this.imagePlaceholder = this.image.parentNode;this.imageSrcUrl = this.image.src;this.base64Image = this.grayscaleImageDataUrl = this.colorImageDataUrl = null;this.controlsDisabled = !1;if (a = c.getElementById(this.captchaStyleName + "_ReloadLink")) if (a.style.cssText = "display: inline-block !important", this.reloadTimer = this.progressIndicator = this.newImage = null, this.reloadTimerTicks = 0, this.options.autoReloadPeriod = 1E3 * Math.max(this.options.autoReloadPeriod - 10, 10), this.options.autoReloadTimeout *= 1E3, this.autoReloadPeriodSum = 0, this.autoReloading = !1, this.options.autoReloadExpiredImage) {
      this.autoReloadTimer && clearTimeout(this.autoReloadTimer);var b = this;this.autoReloadTimer = setTimeout(function () {
        clearTimeout(b.autoReloadTimer);b.autoReloadPeriodSum >= b.options.autoReloadTimeout ? (b.disableControls(), b.sessionExpired = !0) : (b.autoReloading = !0, b.reloadImage(), b.autoReloading = !1, b.autoReloadPeriodSum += b.options.autoReloadPeriod, b = null);
      }, b.options.autoReloadPeriod);
    }if (a = c.getElementById(this.captchaStyleName + "_ReloadIcon")) {
      this.reloadIconSrc = a.src;this.disabledReloadIconSrc = null;a = c.createElement("img");var e = this;a.onload = function () {
        e.disabledReloadIconSrc = this.src;e = null;
      };a.src = this.reloadIconSrc.replace("icon", "disabled-icon");
    }this.soundPlayDelayed = this.soundPlayed = !1;this.soundReplayCount = 0;this.playNewAudio = !1;if (a = c.getElementById(this.captchaStyleName + "_SoundLink")) this.soundUrl = a.href;this.soundPlaceholder = c.getElementById(this.captchaStyleName + "_AudioPlaceholder");if (a = c.getElementById(this.captchaStyleName + "_SoundIcon")) {
      this.soundIconSrc = a.src;this.disabledSoundIconSrc = null;a = c.createElement("img");var d = this;a.onload = function () {
        d.disabledSoundIconSrc = this.src;d = null;
      };this.soundIconSrc.match(/disabled-icon/) || (a.src = this.soundIconSrc.replace("icon", "disabled-icon"));
    }this.validationUrl = this.imageSrcUrl.replace("get=image", "get=validation-result");this.pUrl = this.imageSrcUrl.replace("get=image", "get=p");this.followHelpLink = !0;this.options.userInputID && (this.userInput = a = k.getInputElement(this.options.userInputID), this.userInput.setAttribute("autocomplete", "off"), a.style.textTransform = this.options.autoUppercaseInput ? "uppercase" : "lowercase");
  }var c = h.document,
      m = h.navigator,
      p = { captchaStyleName: "", captchaId: "", userInputID: "", autoUppercaseInput: !0, autoFocusInput: !0, autoClearInput: !0, autoReloadExpiredImage: !0, autoReloadPeriod: 1200,
    autoReloadTimeout: 7200, soundStartDelay: 0, limitSoundRegeneration: !0, imageColorMode: "none", javaScriptRequired: !0, isTestModeEnabled: !1, reloadTimerMaxTicks: 100, reloadTimerDelay: 250, minSoundCooldown: 2E3, convertGrayscaleImageTimerDelay: 500 },
      k = { extend: function extend(a, b) {
      var c = {},
          d;for (d in b) {
        var h = a[d];c[d] = "undefined" === typeof h ? b[d] : h;
      }return c;
    }, getMimeType: function getMimeType() {
      return "audio/x-wav";
    }, getTimestamp: function getTimestamp() {
      var a = new Date();return a.getTime() + 6E4 * a.getTimezoneOffset();
    }, updateTimestamp: function updateTimestamp(a) {
      var b = a.indexOf("&d=");-1 !== b && (a = a.substring(0, b));return a + "&d=" + this.getTimestamp();
    }, detectSSL: function detectSSL(a) {
      var b = a.indexOf("&e=");-1 !== b && (a = a.substring(0, b) + a.substring(b + 4, a.length));"https:" === c.location.protocol && (a += "&e=1");return a;
    }, detectAndroid: function detectAndroid() {
      var a = !1;m && m.userAgent && m.userAgent.match(/Linux; U; Android/) && (a = !0);return a;
    }, detectIOS: function detectIOS() {
      var a = !1;if (m && m.userAgent) {
        var b = m.userAgent.toLowerCase();if (b.match(/like mac os/) || b.match(/like macos/)) a = !0;
      }return a;
    }, detectFirefox3: function detectFirefox3() {
      var a = !1;m && m.userAgent && m.userAgent.match(/(Firefox)\/(3\.6\.[^;\+,\/\s]+)/) && (a = !0);return a;
    }, detectSafariSSL: function detectSafariSSL() {
      var a = !1;if (m && m.userAgent) {
        var b = m.userAgent.match(/Safari/);b && ((b = m.userAgent.match(/Chrome/)) || "https:" !== c.location.protocol || (a = !0));
      }return a;
    }, detectIncompatibleAudio: function detectIncompatibleAudio() {
      return this.detectFirefox3();
    }, useHtml5Audio: function useHtml5Audio() {
      if (this.detectAndroid() || this.detectIOS()) var a = !0;else a = c.createElement("audio"), a = !!a.canPlayType && !!a.canPlayType("audio/wav") && !this.detectIncompatibleAudio();
      return a;
    }, detectAndroidBelow41: function detectAndroidBelow41() {
      var a = !1;if (m && m.userAgent) {
        var b = m.userAgent.indexOf("Android");0 <= b && 4.1 > parseFloat(m.userAgent.slice(b + 8)) && (a = !0);
      }return a;
    }, soundReplaySupported: function soundReplaySupported() {
      return this.useHtml5Audio() && !this.detectAndroidBelow41();
    }, detectIE: function detectIE() {
      if (m && m.userAgent) {
        var a = m.userAgent.toLowerCase();if (-1 !== a.indexOf("msie") || -1 !== a.indexOf("trident/")) return !0;
      }return !1;
    }, getIosSafariVersion: function getIosSafariVersion() {
      var a = null;if (m && m.userAgent) {
        var b = !1,
            c = m.userAgent;-1 === c.indexOf("iPhone OS") && -1 === c.indexOf("iPad") || -1 === c.indexOf("Safari") || -1 !== c.indexOf("CriOS") || -1 !== c.indexOf("FxiOS") || (b = !0);b && (b = c.split("Version/"), 2 === b.length && (a = parseInt(b[1])));
      }return a;
    }, detectFilterCssSupport: function detectFilterCssSupport() {
      if (this.detectIE()) return !1;var a = this.getIosSafariVersion();if (a && 9 > a) return !1;a = c.createElement("div");a.style.cssText = "-webkit-filter: blur(1px)";return 0 === a.style.length ? !1 : !0;
    }, registerHandler: function registerHandler(a, b, c, d) {
      if ("domready" === b) this.registerDomReadyHandler(c);else if ("undefined" !== typeof a.addEventListener) a.addEventListener(b, c, d);else if ("undefined" !== typeof a.attachEvent) {
        var e = b + c;a["e" + e] = c;a[e] = function (b) {
          "undefined" === typeof b && (b = h.event);a["e" + e](b);
        };a.attachEvent("on" + b, a[e]);
      } else if (b = "o" + b, "function" === typeof a[b]) {
        var q = a[b];a[b] = function () {
          q();return c();
        };
      } else a[b] = c;
    }, registerDomReadyHandler: function registerDomReadyHandler(a) {
      if (c.addEventListener) c.addEventListener("DOMContentLoaded", function () {
        c.removeEventListener("DOMContentLoaded", arguments.callee, !1);a();
      }, !1);else if (c.attachEvent) {
        var b = !1;c.attachEvent("onreadystatechange", function () {
          "complete" === c.readyState && (c.detachEvent("onreadystatechange", arguments.callee), a(), b = !0);
        });c.documentElement.doScroll && h === h.top && function () {
          if (!b) {
            try {
              c.documentElement.doScroll("left");
            } catch (e) {
              setTimeout(arguments.callee, 1);return;
            }a();b = !0;
          }
        }();
      } else this.registerHandler(h, "load", a, !1);
    }, isCanvasSupported: function isCanvasSupported() {
      return !!c.createElement("canvas").getContext;
    }, getInputElement: function getInputElement(a) {
      var b = null,
          e = c.getElementById(a);if (e) b = e;else if (e = c.querySelectorAll ? c.querySelectorAll("input[type=text]") : c.getElementsByTagName("input"), 0 !== e.length) for (var d = 0; d < e.length; d++) {
        if ("text" === e[d].type && -1 !== e[d].id.indexOf(a)) {
          b = e[d];break;
        }
      }return b;
    }, parseJson: function parseJson(a) {
      var b = null;"undefined" !== typeof JSON && "function" === typeof JSON.parse && (b = JSON.parse(a));b || (b = eval("(" + a + ")"));return b;
    }, ajax: { xhr: function xhr() {
        var a = null;try {
          return a = new XMLHttpRequest();
        } catch (b) {}try {
          return a = new ActiveXObject("MSXML2.XMLHTTP.5.0");
        } catch (b) {}try {
          return a = new ActiveXObject("MSXML2.XMLHTTP.4.0");
        } catch (b) {}try {
          return a = new ActiveXObject("MSXML2.XMLHTTP.3.0");
        } catch (b) {}try {
          return a = new ActiveXObject("MSXML2.XMLHTTP");
        } catch (b) {}try {
          return a = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) {}return a;
      }, get: function get(a, b) {
        var c = this.xhr();c && 0 === c.readyState && (c.onreadystatechange = function () {
          4 === c.readyState && b(c);
        }, c.open("GET", a, !0), c.send());
      } } };d.init = function (a, b, e, q, t, m, p, f, v, g, l, n, w, x) {
    var r = function r() {
      c.getElementById(a + "_CaptchaImage") && (h[a] = new d({ captchaStyleName: a, captchaId: b, userInputID: e, autoUppercaseInput: q, autoFocusInput: t, autoClearInput: m, autoReloadExpiredImage: p, autoReloadPeriod: f,
        autoReloadTimeout: v, soundStartDelay: g, limitSoundRegeneration: l, imageColorMode: n, javaScriptRequired: w, isTestModeEnabled: x }), h[a].postInit(), h[a].initEventListeners());
    };"undefined" !== typeof h.jQuery ? jQuery(r) : "complete" === c.readyState || "interactive" === c.readyState ? r() : k.registerHandler(h, "domready", r, !1);h.opera ? k.registerHandler(h, "popstate", function (b) {
      h[a].reloadImage();
    }, !1) : h.chrome ? k.registerHandler(h, "domready", function (b) {
      b = c.getElementById("BDC_BackWorkaround_" + a);"0" === b.value ? b.value = "1" : (b.value = "0", h[a].reloadImage());
    }, !1) : k.registerHandler(h, "pageshow", function (b) {
      b && b.persisted && h[a].reloadImage();
    }, !1);
  };d.getInstanceByStyleName = function (a) {
    var b = null;a && (a = h[a], "undefined" !== typeof a && (b = a));return b;
  };d.prototype.reloadImage = function () {
    var a = this,
        b = function b() {
      if (a.image && !a.reloadInProgress && !a.sessionExpired && (!a.controlsDisabled || a.soundPlayDelayed)) {
        a.reloadInProgress = !0;a.disableControls();a.progressIndicator = c.createElement("span");a.progressIndicator.className = "BDC_ProgressIndicator";
        a.progressIndicator.appendChild(c.createTextNode("."));a.preReloadImage();var b = k.updateTimestamp(a.imageSrcUrl);a.initNewImage(b);a.imagePlaceholder.innerHTML = "";a.imagePlaceholder.appendChild(a.progressIndicator);a.showProgress();a = null;
      }
    };this.useM() ? this.gp(b) : b();
  };d.prototype.initNewImage = function (a) {
    this.newImage = c.createElement("img");var b = this,
        e = !1;this.newImage.onload = function () {
      !e && b.newImage && b.imagePlaceholder && b.progressIndicator && (b.imagePlaceholder.innerHTML = "", b.imagePlaceholder.appendChild(b.newImage), b.image = b.newImage, b.progressIndicator = null, b.initImageColorModeHandler(), b.postReloadImage(), b = null, e = !0);
    };this.newImage.id = this.image.id;this.newImage.alt = this.image.alt;this.imageSrcUrl = this.newImage.src = a;"none" !== this.options.imageColorMode && this.newImage.setAttribute("style", "visibility: hidden !important");
  };d.prototype.showProgress = function () {
    if (this.progressIndicator && this.reloadTimerTicks < this.options.reloadTimerMaxTicks) {
      this.reloadTimerTicks += 1;this.updateProgressIndicator();var a = this;
      this.reloadTimer = setTimeout(function () {
        a.showProgress();a = null;
      }, this.options.reloadTimerDelay);
    } else clearTimeout(this.reloadTimer), this.reloadTimerTicks = 0, this.reloadInProgress = !1;
  };d.prototype.updateProgressIndicator = function () {
    0 === this.progressIndicator.childNodes.length ? this.progressIndicator.appendChild(c.createTextNode(".")) : this.progressIndicator.firstChild.nodeValue = 0 === this.reloadTimerTicks % 5 ? "." : this.progressIndicator.firstChild.nodeValue + ".";
  };d.prototype.playSound = function () {
    if (!(this.soundPlayingInProgess || this.controlsDisabled && !this.soundPlayDelayed)) if (this.disableControls(), this.options.limitSoundRegeneration && !k.soundReplaySupported() && this.soundPlayed) this.soundPlayDelayed = !0, this.reloadImage();else {
      this.prePlaySound();this.soundPlayingInProgess = !0;if (k.useHtml5Audio()) {
        var a = this,
            b = c.getElementById("BDC_CaptchaSoundAudio_" + this.captchaStyleName);b && !this.playNewAudio ? (b.currentTime = 0, this.soundStartDelayTimer = setTimeout(function () {
          a && (clearTimeout(a.soundStartDelayTimer), c.getElementById("BDC_CaptchaSoundAudio_" + a.captchaStyleName).play());
        }, this.options.soundStartDelay)) : (this.soundPlaceholder.innerHTML = "", b = this.soundUrl, b = k.updateTimestamp(b), b = k.detectSSL(b), b = new Audio(b), b.id = "BDC_CaptchaSoundAudio_" + this.captchaStyleName, b.type = "audio/wav", b.autobuffer = !1, b.loop = !1, b.autoplay = !1, b.preload = "auto", this.soundPlaceholder.appendChild(b), b.load(), k.registerHandler(b, "canplay", function () {
          a && (a.soundStartDelayTimer = setTimeout(function () {
            clearTimeout(a.soundStartDelayTimer);c.getElementById("BDC_CaptchaSoundAudio_" + a.captchaStyleName).play();
          }, a.options.soundStartDelay));
        }, !1));k.registerHandler(b, "ended", function () {
          if (a) {
            var b = c.getElementById("BDC_CaptchaSoundAudio_" + a.captchaStyleName);1 === b.duration ? b.play() : (a.soundPlayingInProgess = !1, a.soundReplayCount = 0, a.enableControls(), a = null);
          }
        }, !1);k.registerHandler(b, "error", function (b) {
          a && (a.soundReplayCount += 1, 1 === a.soundReplayCount && (a.soundPlayingInProgess = !1, a.soundPlayDelayed = !0, a.playNewAudio = !0, a.reloadImage()));
        }, !1);
      } else this.soundPlaceholder.innerHTML = "", a = this, this.soundStartDelayTimer = setTimeout(function () {
        clearTimeout(a.soundStartDelayTimer);a.startXhtmlSoundPlayback();
      }, this.options.soundStartDelay);this.soundPlayed = !0;
    }
  };d.prototype.startXhtmlSoundPlayback = function () {
    var a = this.soundUrl;a = k.updateTimestamp(a);a = k.detectSSL(a);a = '<object id="BDC_CaptchaSoundObject_' + this.captchaStyleName + '" classid="clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95" height="0" width="0" style="width: 0; height: 0"><param name="AutoStart" value="1"/><param name="Volume" value="0"/><param name="PlayCount" value="1"/><param name="FileName" value="' + a + '"/><embed id="BDC_CaptchaSoundEmbed" src="' + a + '" autoplay="true" hidden="true" volume="100" type="' + k.getMimeType() + '" style="display:inline"/></object>"';this.soundPlaceholder.innerHTML = a;var b = this;this.soundCooldownTimer = setTimeout(function () {
      b && (clearTimeout(b.soundCooldownTimer), b.soundPlayingInProgess = !1, b.enableControls(), b = null);
    }, this.options.minSoundCooldown);
  };d.prototype.initEventListeners = function () {
    var a = this,
        b = c.getElementById(this.captchaStyleName + "_ReloadLink");b && k.registerHandler(b, "click", function (b) {
      a.reloadImage();this.blur();b.preventDefault ? b.preventDefault() : b.returnValue = !1;
    }, !1);(b = c.getElementById(this.captchaStyleName + "_SoundLink")) && k.registerHandler(b, "click", function (b) {
      a.playSound();this.blur();b.preventDefault ? b.preventDefault() : b.returnValue = !1;
    }, !1);(b = c.getElementById(this.captchaStyleName + "_HelpLink")) && k.registerHandler(b, "click", function (b) {
      a.onHelpLinkClick();a.followHelpLink || (b.preventDefault ? b.preventDefault() : b.returnValue = !1);
    }, !1);
  };d.prototype.postInit = function () {
    this.isCaptchaSecure() || console.error("Captcha.UserInputID is not set. Your implementation of BotDetect is not completely secure yet. \n Please add <userInputID>CAPTCHA_CODE_INPUT_ID</userInputID> line into the botdetect.xml configuration file.");if (this.useM()) {
      var a = this;this.p(function (b) {
        a.m(b, !1, !1);
      });
    }this.initImageColorModeHandler();
  };d.prototype.preReloadImage = function () {
    "none" !== this.options.imageColorMode && this.hideImage();this.clearInput();this.focusInput();
  };d.prototype.postReloadImage = function () {
    this.validationUrl = this.imageSrcUrl.replace("get=image", "get=validation-result");if (this.options.autoReloadExpiredImage) {
      this.autoReloadTimer && clearTimeout(this.autoReloadTimer);var a = this;this.autoReloadTimer = setTimeout(function () {
        clearTimeout(a.autoReloadTimer);a.autoReloadPeriodSum >= a.options.autoReloadTimeout ? (a.disableControls(), a.sessionExpired = !0) : (a.autoReloading = !0, a.reloadImage(), a.autoReloading = !1, a.autoReloadPeriodSum += a.options.autoReloadPeriod, a = null);
      }, a.options.autoReloadPeriod);
    }this.soundIconSrc ? (this.soundPlaceholder.innerHTML = "", this.soundPlayed = !1, this.soundPlayDelayed ? (this.playSound(), this.soundPlayDelayed = !1) : this.enableControls()) : this.enableControls();
  };d.prototype.prePlaySound = function () {
    this.focusInput();
  };d.prototype.onHelpLinkClick = function () {};d.registerCustomHandler = function (a, b) {
    var c = d.prototype[a],
        h = "prePlaySound" === a;d.prototype[a] = function () {
      b.call(this);h || c.call(this);
    };
  };d.prototype.focusInput = function () {
    this.options.autoFocusInput && this.userInput && (this.autoReloading || this.userInput.focus());
  };d.prototype.clearInput = function () {
    this.options.autoClearInput && this.userInput && (this.userInput.value = "");
  };d.prototype.disableControls = function () {
    this.controlsDisabled = !0;this.disableReloadIcon();this.disableSoundIcon();
  };d.prototype.enableControls = function () {
    this.controlsDisabled = !1;this.enableReloadIcon();this.enableSoundIcon();
  };d.prototype.disableReloadIcon = function () {
    this.reloadIconSrc && this.disabledReloadIconSrc && (c.getElementById(this.captchaStyleName + "_ReloadIcon").src = this.disabledReloadIconSrc);
  };d.prototype.enableReloadIcon = function () {
    this.reloadIconSrc && this.disabledReloadIconSrc && (c.getElementById(this.captchaStyleName + "_ReloadIcon").src = this.reloadIconSrc);
  };d.prototype.disableSoundIcon = function () {
    this.soundIconSrc && this.disabledSoundIconSrc && (c.getElementById(this.captchaStyleName + "_SoundIcon").src = this.disabledSoundIconSrc);
  };d.prototype.enableSoundIcon = function () {
    this.soundIconSrc && this.disabledSoundIconSrc && (c.getElementById(this.captchaStyleName + "_SoundIcon").src = this.soundIconSrc);
  };d.prototype.getBase64Image = function (a) {
    var b = this.imageSrcUrl.replace("get=image", "get=base64-image-string"),
        e = this;k.ajax.get(b, function (b) {
      if (200 !== b.status) e = null;else try {
        var d = b.responseText;e.colorImageDataUrl = d;e.base64Image = c.createElement("img");var h = !1;e.base64Image.onload = function () {
          !h && e.imagePlaceholder && (e.imagePlaceholder.innerHTML = "", e.imagePlaceholder.appendChild(this), e.image = e.base64Image, h = !0, "function" === typeof a && a());
        };e.base64Image.id = e.image.id;e.base64Image.alt = e.image.alt;e.base64Image.src = d;"none" !== e.imageColorMode && e.base64Image.setAttribute("style", "visibility: hidden !important");
      } catch (u) {}
    });
  };d.prototype.showImage = function () {
    this.image && (k.detectFilterCssSupport() ? this.image.setAttribute("style", "visibility: visible !important") : (this.imagePlaceholder.innerHTML = "", this.base64Image ? (this.base64Image.setAttribute("style", "visibility: visible !important"), this.imagePlaceholder.appendChild(this.base64Image)) : (this.image.style.visibility = "visible", this.imagePlaceholder.appendChild(this.image))));
  };
  d.prototype.hideImage = function () {
    this.image && this.image.setAttribute("style", "visibility: hidden !important");
  };d.prototype.initImageColorModeHandler = function () {
    if (k.detectFilterCssSupport()) {
      switch (this.options.imageColorMode) {case "color":
          this.image.setAttribute("style", "visibility: visible !important");break;case "grayscale":
          this.image.setAttribute("style", "-webkit-filter: grayscale(100%)!important;-moz-filter: grayscale(100%)!important;-ms-filter: grayscale(100%)!important;-o-filter: grayscale(100%)!important;filter: grayscale(100%)!important;filter: url('url(\"data:image/svg+xml;utf8,<svg%20xmlns='http://www.w3.org/2000/svg'><filter%20id='grayscale'><feColorMatrix%20type='matrix'%20values='0.3333%200.3333%200.3333%200%200%200.3333%200.3333%200.3333%200%200%200.3333%200.3333%200.3333%200%200%200%200%200%201%200'/></filter></svg>#grayscale\");')!important;filter: gray!important");}this.registerImageHoverHandler();
    } else if (k.isCanvasSupported()) {
      var a = this;switch (this.options.imageColorMode) {case "color":
          this.getBase64Image(function () {
            a.showImage();a.registerImageHoverHandler();
          });break;case "grayscale":
          this.getBase64Image(function () {
            a.convertColorImageToGrayscale(function () {
              a.showImage();a.registerImageHoverHandler();
            });
          });}
    } else this.showImage();
  };d.prototype.convertColorImageToGrayscale = function (a) {
    var b = 0;!this.reloadInProgress && k.detectIOS() && (b = this.options.convertGrayscaleImageTimerDelay);var c = this,
        h = function h() {
      setTimeout(function () {
        var b = d.imageProcess.getBase64GrayscaleImageDataUrl(m);
        m.src = b;c.grayscaleImageDataUrl = b;"function" === typeof a && a();c = null;
      }, b);
    },
        m = this.image;m.complete || 0 !== m.naturalHeight ? h() : m.onload = function () {
      h();
    };
  };d.prototype.registerImageHoverHandler = function () {
    if ("none" !== this.imageColorMode) {
      var a = this;k.detectFilterCssSupport() ? (k.registerHandler(this.image, "mouseenter", function (b) {
        switch (a.options.imageColorMode) {case "color":
            this.setAttribute("style", "-webkit-filter: grayscale(100%)!important;-moz-filter: grayscale(100%)!important;-ms-filter: grayscale(100%)!important;-o-filter: grayscale(100%)!important;filter: grayscale(100%)!important;filter: url('url(\"data:image/svg+xml;utf8,<svg%20xmlns='http://www.w3.org/2000/svg'><filter%20id='grayscale'><feColorMatrix%20type='matrix'%20values='0.3333%200.3333%200.3333%200%200%200.3333%200.3333%200.3333%200%200%200.3333%200.3333%200.3333%200%200%200%200%200%201%200'/></filter></svg>#grayscale\");')!important;filter: gray!important");
            break;case "grayscale":
            this.setAttribute("style", "");}
      }, !1), k.registerHandler(this.image, "mouseleave", function (b) {
        switch (a.options.imageColorMode) {case "color":
            this.setAttribute("style", "");break;case "grayscale":
            this.setAttribute("style", "-webkit-filter: grayscale(100%)!important;-moz-filter: grayscale(100%)!important;-ms-filter: grayscale(100%)!important;-o-filter: grayscale(100%)!important;filter: grayscale(100%)!important;filter: url('url(\"data:image/svg+xml;utf8,<svg%20xmlns='http://www.w3.org/2000/svg'><filter%20id='grayscale'><feColorMatrix%20type='matrix'%20values='0.3333%200.3333%200.3333%200%200%200.3333%200.3333%200.3333%200%200%200.3333%200.3333%200.3333%200%200%200%200%200%201%200'/></filter></svg>#grayscale\");')!important;filter: gray!important");}
      }, !1)) : (k.registerHandler(this.imagePlaceholder, "mouseenter", function (b) {
        if (0 < this.children.length) switch (a.options.imageColorMode) {case "color":
            a.grayscaleImageDataUrl = d.imageProcess.getBase64GrayscaleImageDataUrl(this.children[0]);this.children[0].src = a.grayscaleImageDataUrl;break;case "grayscale":
            this.children[0].src = a.colorImageDataUrl;}
      }, !1), k.registerHandler(this.imagePlaceholder, "mouseleave", function (b) {
        if (0 < this.children.length) switch (a.options.imageColorMode) {case "color":
            this.children[0].src = a.colorImageDataUrl;break;case "grayscale":
            this.children[0].src = a.grayscaleImageDataUrl;}
      }, !1));
    }
  };d.imageProcess = { sRGBFromLinear: function sRGBFromLinear(a) {
      return .0031308 < a ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : 12.92 * a;
    }, linearFromsRGB: function linearFromsRGB(a) {
      return .04045 <= a ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92;
    }, getGrayscaleImageCanvas: function getGrayscaleImageCanvas(a) {
      var b = new Image();b.src = a.src;var e = c.createElement("canvas"),
          d = e.getContext("2d"),
          h = a.naturalWidth;a = a.naturalHeight;e.width = h;e.height = a;d.drawImage(b, 0, 0);b = d.getImageData(0, 0, h, a);for (var k = 0; k < a; k++) {
        for (var m = 0; m < h; m++) {
          var f = 4 * k * h + 4 * m,
              p = this.linearFromsRGB(b.data[f] / 255),
              g = this.linearFromsRGB(b.data[f + 1] / 255),
              l = this.linearFromsRGB(b.data[f + 2] / 255);p = Math.round(255 * this.sRGBFromLinear(.2126 * p + .7152 * g + .0722 * l));b.data[f] = p;b.data[f + 1] = p;b.data[f + 2] = p;b.data[f + 3] = 255;
        }
      }d.putImageData(b, 0, 0, 0, 0, h, a);return e;
    }, getBase64GrayscaleImageDataUrl: function getBase64GrayscaleImageDataUrl(a) {
      return this.getGrayscaleImageCanvas(a).toDataURL("image/jpeg");
    } };d.prototype.useM = function () {
    return this.options.javaScriptRequired && this.userInput && !this.options.isTestModeEnabled;
  };d.prototype.isCaptchaSecure = function () {
    return !(this.options.javaScriptRequired && !this.options.isTestModeEnabled && !this.userInput);
  };d.prototype.m = function (a, b, c) {
    if (this.userInput) {
      this._p = a;this._m = d.cm(this._p);this._bm = d.cInt2B(this._m);if (!c) {
        var e = this;k.registerHandler(this.userInput, "keyup", function () {
          var a = this.selectionStart,
              b = this.selectionEnd;this.value = d.cc2c(this.value, e._bm);this.setSelectionRange && this.setSelectionRange(a, b);
        }, !1);
      }this.userInput.removeAttribute("disabled");
      b && this.userInput.focus();
    }
  };d.cm = function (a) {
    return a % 65533 + 1;
  };d.cc2c = function (a, b) {
    b = b.split("");var c = b.length,
        d = a.split(""),
        h = "";for (a = a.length - 1; 0 <= a; a--) {
      var k = b[c-- - 1];k = "undefined" !== typeof k && "1" === k ? d[a].toUpperCase() : d[a].toLowerCase();h = k + h;
    }return h;
  };d.cInt2B = function (a) {
    return (a >>> 0).toString(2);
  };d.prototype.p = function (a) {
    this.userInput && (this.userInput.setAttribute("disabled", "disabled"), this.fp(function (b) {
      a(b);
    }));
  };d.prototype.fp = function (a) {
    var b = c.getElementById("BDC_Hs_" + this.captchaStyleName),
        d = c.getElementById("BDC_SP_" + this.captchaStyleName);if (b && d) {
      var h = c.getElementById("BDC_VCID_" + this.captchaStyleName).value,
          k = b.value,
          m,
          p = new BDCustomFor({ startingPos: d.value, step: 2200, eachElement: function eachElement(b) {
          m = "" + b;a1(m + h) === k && (p.stopIt(), a(b));
        } });p.runIt();
    }
  };d.prototype.gp = function (a) {
    if (!this.gpInProcess) if (this.gpInProcess = !0, this.userInput) {
      this.userInput.setAttribute("disabled", "disabled");this.pUrl = this.imageSrcUrl.replace("get=image", "get=p");var b = this;k.ajax.get(this.pUrl, function (d) {
        b.gpInProcess = !1;if (200 !== d.status) b = null;else try {
          a();var e = k.parseJson(d.responseText),
              h = c.getElementById("BDC_Hs_" + b.captchaStyleName),
              m = c.getElementById("BDC_SP_" + b.captchaStyleName);h && m && (h.value = e.hs, m.value = e.sp, b.p(function (a) {
            b.m(a, b.options.autoFocusInput, !0);
          }));
        } catch (u) {}
      });
    } else this.gpInProcess = !1;
  };h.botdetect = h.BotDetect = d;
})(window);
//# sourceMappingURL=bdc-simple-api-script-include.js.map