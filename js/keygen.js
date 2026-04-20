window.generateWinRARLicense = function(username, licenseType) {
    let $ = function f() {
        let $ = new Uint32Array(32767), e = 1;
        $[0] = 1;
        for (let n = 1; n < 32767; n++)
            (e <<= 1) > 32767 && (e ^= 32771),
            $[n] = e;
        return $
    }();

    let e = function f() {
        let e = new Uint32Array(32768);
        e[1] = 0;
        for (let n = 0; n < 32767; n++)
            e[$[n]] = n;
        return e[0] = 0, e
    }();

    function n(f) {
        for (var $ = 0n, e = 0; e < f.length; e++)
            $ += BigInt(255 & f[e].charCodeAt(0)) << BigInt(8 * e);
        return $
    }

    function r(f, $) {
        var e = "", n = 0n, r = 0;
        n = BigInt(f);
        for (var t = 0; t < $; t++)
            e = String.fromCharCode(r = 255 & Number(n % BigInt(256))) + e,
            n >>= 8n;
        return e
    }

    function t(f) {
        for (var $ = "", e = 0; e < f.length; e++)
            $ += (255 & f[e].charCodeAt(0)).toString(16).padStart(2, "0");
        return $
    }

    function a(f, $) { return f ^ $ }
    function x(f, $) { return f ^ $ }

    function i(f, n) {
        function r(f, n) {
            return 0 == f || 0 == n ? 0 : $[(e[f] + e[n]) % 32767]
        }
        if (0n == f || 0n == n) return 0n;
        var t, a, x, i = new Uint32Array(17), o = new Uint32Array(17), u = new Uint32Array(34);
        for (t = 0; t < 17; t++)
            i[t] = Number(32767n & f), o[t] = Number(32767n & n), f >>= 15n, n >>= 15n;
        for (t = 0; t < 34; t++) u[t] = 0;
        for (t = 0; t < 17; t++)
            for (a = 0; a < 17; a++)
                u[t + a] ^= r(i[t], o[a]);
        for (t = 33; t > 16; t--)
            u[t - 17] ^= u[t], u[t - 14] ^= u[t], u[t] = 0;
        for (t = 16, x = 0n; t > 0; t--)
            x = x + BigInt(u[t]) << 15n;
        return x + BigInt(u[0])
    }

    function o(f, n) {
        return i(f, function f(n) {
            var r, t, a, x;
            if (0n == n) return 0n;
            for (x = 0, r = n, t = 1n, a = 0n; x < 16; x++)
                r = i(r, r), r = i(r, r), r = i(r, r), r = i(r, r),
                r = i(r, r), r = i(r, r), r = i(r, r), r = i(r, r),
                r = i(r, r), r = i(r, r), r = i(r, r), r = i(r, r),
                r = i(r, r), r = i(r, r), r = i(r, r), t = i(t, r);
            return a = BigInt($[(32767 - e[Number(32767n & (a = i(t, n)))]) % 32767]),
            t = i(t, a)
        }(n))
    }

    function u(f, $) {
        var e, n, r, t, a, x, u, c, _, s, b, g, l, d, h, p, v, y, C, m, w, k, A;
        return (e = 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn & f,
        n = f >> 255n & 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn,
        r = 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn & $,
        t = $ >> 255n & 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn,
        f == $) ? function f($) {
            var e, n, r, t, a, x, u, c, _, s, b, g;
            if (0n == $) return $;
            return e = 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn & $,
            r = (x = o(n = $ >> 255n & 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn, e),
            x ^ (u = e)),
            t = (c = i(r, r), c ^ (_ = r)),
            a = (b = i(1n ^ (s = r), t), b ^ (g = i(e, e))),
            t | a << 255n
        }(f) : 0n == e && 0n == n ? $ : 0n == r && 0n == t ? f : 0n == e && 0n == r && 0n != n && 0n != t ? 0n : (x = (p = (g = a = o((c = n,
        c ^ (_ = t)), (s = e, s ^ (b = r))), g ^ (l = i(a, a))),
        p ^ (v = (d = e, d ^ (h = r)))),
        u = (k = i(a, (y = e, y ^ (C = x))),
        k ^ (A = (m = x, m ^ (w = n)))),
        x | u << 255n)
    }

    function c(f, $) {
        var e, n, r;
        if (0n == f) return 0n;
        for (e = f % 0x1026dd85081b82314691ced9bbec30547840e4bf72d8b5e0d258442bbcd31n, n = $, r = 0n; 0n != e; )
            (1n & e) != 0n && (r = u(r, n)), n = u(n, n), e >>= 1n;
        return r
    }

    function _(f) {
        if (0 == f.length) return "\x81\xb7>\xeb)S&P\xa3\xf4^\xdc\xd5\xb9GhL;\xe4\xcd";
        var $, e = new Uint8Array(20), n = "", r = 0;
        for (r = 0, $ = function f($) {
            function e(f, $) { return f << $ | f >>> 32 - $ }
            function n(f) {
                var $ = "";
                return $ += (f >>> 28 & 15).toString(16), $ += (f >>> 24 & 15).toString(16),
                $ += (f >>> 20 & 15).toString(16), $ += (f >>> 16 & 15).toString(16),
                $ += (f >>> 12 & 15).toString(16), $ += (f >>> 8 & 15).toString(16),
                $ += (f >>> 4 & 15).toString(16), $ += (15 & f).toString(16)
            }
            var r, t, a, x, i, o, u, c, _, s = Array(80), b = 1732584193, g = 4023233417, l = 2562383102, d = 271733878, h = 3285377520, p = $.length, v = [];
            for (t = 0; t < p - 3; t += 4)
                a = $.charCodeAt(t) << 24 | $.charCodeAt(t + 1) << 16 | $.charCodeAt(t + 2) << 8 | $.charCodeAt(t + 3),
                v.push(a);
            switch (p % 4) {
                case 0: t = 2147483648; break;
                case 1: t = $.charCodeAt(p - 1) << 24 | 8388608; break;
                case 2: t = $.charCodeAt(p - 2) << 24 | $.charCodeAt(p - 1) << 16 | 32768; break;
                case 3: t = $.charCodeAt(p - 3) << 24 | $.charCodeAt(p - 2) << 16 | $.charCodeAt(p - 1) << 8 | 128
            }
            for (v.push(t); v.length % 16 != 14; ) v.push(0);
            for (v.push(p >>> 29), v.push(p << 3 & 4294967295), r = 0; r < v.length; r += 16) {
                for (t = 0; t < 16; t++) s[t] = v[r + t];
                for (t = 16; t <= 79; t++) s[t] = e(s[t - 3] ^ s[t - 8] ^ s[t - 14] ^ s[t - 16], 1);
                for (t = 0, x = b, i = g, o = l, u = d, c = h; t <= 19; t++)
                    _ = e(x, 5) + (i & o | ~i & u) + c + s[t] + 1518500249 & 4294967295,
                    c = u, u = o, o = e(i, 30), i = x, x = _;
                for (t = 20; t <= 39; t++)
                    _ = e(x, 5) + (i ^ o ^ u) + c + s[t] + 1859775393 & 4294967295,
                    c = u, u = o, o = e(i, 30), i = x, x = _;
                for (t = 40; t <= 59; t++)
                    _ = e(x, 5) + (i & o | i & u | o & u) + c + s[t] + 2400959708 & 4294967295,
                    c = u, u = o, o = e(i, 30), i = x, x = _;
                for (t = 60; t <= 79; t++)
                    _ = e(x, 5) + (i ^ o ^ u) + c + s[t] + 3395469782 & 4294967295,
                    c = u, u = o, o = e(i, 30), i = x, x = _;
                b = b + x & 4294967295, g = g + i & 4294967295, l = l + o & 4294967295, d = d + u & 4294967295, h = h + c & 4294967295
            }
            return (n(b) + n(g) + n(l) + n(d) + n(h)).toLowerCase()
        }(f); r < 20; r++)
            e[r] = 255 & Number("0x" + $.substring(2 * r, 2 * r + 2));
        for (r = 0; r < 5; r++)
            n += String.fromCharCode(e[4 * r + 3]), n += String.fromCharCode(e[4 * r + 2]),
            n += String.fromCharCode(e[4 * r + 1]), n += String.fromCharCode(e[4 * r + 0]);
        return n
    }

    function s(f) {
        var $ = _(f), e = "";
        return e += _("\x01\0\0\0" + $).substring(0, 2), e += _("\x02\0\0\0" + $).substring(0, 2),
        e += _("\x03\0\0\0" + $).substring(0, 2), e += _("\x04\0\0\0" + $).substring(0, 2),
        e += _("\x05\0\0\0" + $).substring(0, 2), e += _("\x06\0\0\0" + $).substring(0, 2),
        e += _("\x07\0\0\0" + $).substring(0, 2), e += _("\b\0\0\0" + $).substring(0, 2),
        e += _("	\0\0\0" + $).substring(0, 2), e += _("\n\0\0\0" + $).substring(0, 2),
        e += _("\v\0\0\0" + $).substring(0, 2), e += _("\f\0\0\0" + $).substring(0, 2),
        e += _("\r\0\0\0" + $).substring(0, 2), e += _("\x0e\0\0\0" + $).substring(0, 2),
        e += _("\x0f\0\0\0" + $).substring(0, 2)
    }

    function b(f) {
        var $ = 0n, e = 0n, r = 0n, t = 0n, a = 0n, x = 0n;
        return r = 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn & (e = c($ = n(f), 0x106d197457e485be7873b5ef2224b5a683ca02a73753079c43412318997c98d3d6fdcbc6a27acee0cc2996e0096ae74feb1acf220a2341b898b549440297b8ccn)),
        t = e >> 255n & 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn,
        (a = 2n * r) + (x = 1n & o(t, r))
    }

    function g(f) {
        var $, e = 0n, r = new Uint32Array(2), t = 0n, a = 0n;
        return crypto.getRandomValues(r),
        e = e + BigInt(r[0]) << 32n, e += BigInt(r[1]), e &= 255n,
        t = ((0x1026dd85081b82314691ced9bbec30547840e4bf72d8b5e0d258442bbcd31n << 512n) + (0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn & c(e, 0x106d197457e485be7873b5ef2224b5a683ca02a73753079c43412318997c98d3d6fdcbc6a27acee0cc2996e0096ae74feb1acf220a2341b898b549440297b8ccn)) + n(_($ = f) + "C\x8d\xfd\x0f|<\xe3\xb4\xd1\x1b")) % 0x1026dd85081b82314691ced9bbec30547840e4bf72d8b5e0d258442bbcd31n,
        a = ((0x1026dd85081b82314691ced9bbec30547840e4bf72d8b5e0d258442bbcd31n << 512n) + e - 0x59fe6abcca90bdb95f0105271fa85fb9f11f467450c1ae9044b7fd61d65en * t) % 0x1026dd85081b82314691ced9bbec30547840e4bf72d8b5e0d258442bbcd31n,
        [t, a]
    }

    // Main License Generation Logic
    var n_val = "", a_val = "", x_val = "", i_val = "", o_val = "", u_val = "", c_val = 0n, _val = 0n, l_val = "", d_val = "", h_val = 0n, p_val = 0n, v_val = "", y_val = "", C_val = "", m_val = "";
    
    for (u_val = t("`" + (n_val = r(b(s(username)), 32)).substring(0, 24)), x_val = t(r(b(s(u_val)), 32)); ; ) {
        var [c_val,_val] = g(licenseType);
        if (c_val < 1n << 240n - 1n && _val < 1n << 240n - 1n) break
    }
    
    for (l_val = t(r(c_val, 30)), i_val = "60" + (d_val = t(r(_val, 30))) + l_val; ; ) {
        var [h_val,p_val] = g(username + x_val);
        if (h_val < 1n << 240n - 1n && p_val < 1n << 240n - 1n) break
    }
    
    v_val = t(r(h_val, 30));
    a_val = "6412212250" + (a_val = x_val + i_val + (o_val = "60" + (y_val = t(r(p_val, 30))) + v_val) + u_val) + (function f($) {
        for (var e, n = [], r = 0; r < 256; r++) {
            e = r;
            for (var t = 0; t < 8; t++)
                e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
            n[r] = e
        }
        for (var a = -1, x = 0; x < $.length; x++)
            a = a >>> 8 ^ n[255 & (a ^ $.charCodeAt(x))];
        return (-1 ^ a) >>> 0
    }(licenseType + username + a_val)).toString(10).padStart(10, "0");

    m_val = "RAR registration data\r\n" + username + "\r\n" + licenseType + "\r\nUID=" + (C_val = t(n_val.substring(24, 32)) + x_val.substring(0, 4)) + "\r\n" + a_val.substring(0, 54) + "\r\n" + a_val.substring(54, 108) + "\r\n" + a_val.substring(108, 162) + "\r\n" + a_val.substring(162, 216) + "\r\n" + a_val.substring(216, 270) + "\r\n" + a_val.substring(270, 324) + "\r\n" + a_val.substring(324, 378) + "\r\n";
    
    return m_val;
}
