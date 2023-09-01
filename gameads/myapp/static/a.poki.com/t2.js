! function() {
    function e(e, t) {
        if (navigator.sendBeacon) {
            var a = navigator.sendBeacon.bind(navigator);
            try {
                if (a(e, t)) return
            } catch (e) {
                console.error(e)
            }
        }
        try {
            var n = "XMLHttpRequest" in window ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            n.open("POST", e, !0), n.setRequestHeader("Content-Type", "text/plain"), n.send(t)
        } catch (e) {}
    }

    function t(t, a, n) {
        console.error(t);
        var o = [{
            k: "where",
            v: a
        }, {
            k: "error",
            v: t.name && t.message ? "".concat(t.name, ": ").concat(t.message) : JSON.stringify(t)
        }];
        if (void 0 !== n) {
            var i = n;
            "string" != typeof t && (i = JSON.stringify(t)), o.push({
                k: "extra",
                v: i
            })
        }
        e("https://t.poki.io/l", JSON.stringify({
            c: "observer-error",
            ve: 7,
            d: o
        }))
    }
    window._pokiUserGlobalName = window._pokiUserGlobalName || "user";
    var a = "poki_session";

    function n(e) {
        return !(!e || !(e && e.page && e.landing_page && e.previous_page) || !e.tab_id || !e.expire || Date.now() > e.expire || e.expire > Date.now() + 18e5)
    }

    function o() {
        var e = null;
        n(window[window._pokiSessionGlobalName]) && (e = window[window._pokiSessionGlobalName]);
        try {
            var o = JSON.parse(sessionStorage.getItem(a));
            n(o) && (!e || o.depth > e.depth) && (e = o)
        } catch (e) {
            try {
                t(e, "getTabSession", sessionStorage.getItem(a))
            } catch (o) {
                t(e, "getTabSession", o)
            }
        }
        return e
    }

    function i() {
        try {
            var e = o();
            if (!e) return;
            e.expire = Date.now() + 18e5;
            var n = JSON.stringify(e);
            try {
                sessionStorage.setItem(a, n)
            } catch (e) {}
            window[window._pokiSessionGlobalName] = e,
                function(e, t, a) {
                    document.cookie = "".concat(e, "=").concat(t, "; path=/; samesite=lax; max-age=").concat(Math.min(a || 15552e3, 15552e3))
                }(a, n)
        } catch (e) {
            t(e, "markSessionInteraction")
        }
    }
    window._pokiSessionGlobalName = window._pokiSessionGlobalName || "session";
    const r = {},
        {
            documentElement: d,
            body: l,
            compatMode: c
        } = document,
        s = l && l.clientWidth && l.clientHeight;
    d && d.clientWidth && d.clientHeight && ("CSS1Compat" === c || !s) ? r.size = d.clientWidth + "x" + d.clientHeight : r.size = l.clientWidth + "x" + l.clientHeight;
    let p = null,
        u = !1;

    function v(e) {
        var t;
        if (p = 0, null != e && null !== (t = e.purpose) && void 0 !== t && t.consents)
            for (let t = 1; t <= 10; t++) e.purpose.consents[t] && (p |= 1 << t)
    }

    function y() {
        window.__tcfapi && !u && (window.__tcfapi("addEventListener", 2, (e, t) => {
            !t || "tcloaded" !== e.eventStatus && "useractioncomplete" !== e.eventStatus || v(e)
        }), window.__tcfapi("getTCData", 2, (e, t) => {
            t && v(e)
        }), u = !0)
    }
    y();
    const g = {
        action: "a",
        browser_size: "bs",
        category: "c",
        connect: "co",
        connection_type: "ct",
        count: "cn",
        cpus: "cu",
        data: "d",
        depth: "de",
        dns: "dn",
        dom_complete: "dc",
        domain: "do",
        experiment: "ex",
        first_byte: "fb",
        flash_version: "f",
        game_id: "gid",
        game_version_id: "vid",
        has_adblock: "ha",
        hash: "h",
        id: "id",
        insert_id: "ii",
        interaction: "i",
        is_new: "in",
        key: "k",
        label: "l",
        landing_page: "lp",
        language: "la",
        last_byte: "lb",
        message: "m",
        name: "n",
        nav: "n",
        page: "p",
        pageview_id: "pvid",
        path: "pa",
        previous_page: "pp",
        protocol: "pr",
        query_params: "qp",
        referrer: "r",
        screen_orientation: "sor",
        screen_resolution: "sc",
        scroll_y: "sy",
        session: "s",
        site_id: "si",
        stack: "s",
        tab_id: "ti",
        tag_id: "t",
        tcf_purpose_consents: "tpc",
        time_on_page: "tp",
        time_on_previous_page: "tr",
        time_on_site: "ts",
        time_spa_load: "sl",
        timeout: "to",
        timestamp: "tt",
        timezone: "tz",
        transfer_size: "tr",
        type: "ty",
        user: "u",
        user_id: "ui",
        value: "v",
        version: "ve"
    };
    const k = [];
    let f = !1;

    function m(e) {
        if (e.google_allow_ad_personalization_signals = !0, e.google_restricted_data_processing = !1, e.google_conversion_linker = !0, window.google_trackConversion) window.google_trackConversion(e);
        else if (k.push(e), !f) {
            f = !0;
            const e = document.createElement("script");
            e.src = "https://www.googleadservices.com/pagead/conversion_async.js", e.addEventListener("load", () => {
                for (; k.length > 0;) window.google_trackConversion(k.shift())
            });
            const t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }
    }

    function w(e, t, a, n) {
        const o = {
            google_conversion_id: e,
            google_conversion_label: t,
            google_remarketing_only: !1
        };
        void 0 !== a && (o.google_conversion_value = a, o.google_conversion_currency = n || "USD"), m(o)
    }

    function h(e, t) {
        const a = new URLSearchParams(t).get(e);
        return null === a ? "" : a
    }
    let _ = {},
        b = !1;
    const I = ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "ES", "EE", "FI", "FR", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SK", "SI", "SE", "GB"];

    function S() {
        return /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera\smini|avantgo|mobilesafari|docomo)/i.test(navigator.userAgent)
    }

    function D() {
        return /(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i.test(navigator.userAgent)
    }

    function T(e) {
        return Object.keys(e).map(t => {
            if ("category" === t || "action" === t || "label" === t || "eventNoun" === t || "eventVerb" === t) return !1;
            let a = e[t];
            return "object" == typeof a && (a = JSON.stringify(a)), {
                key: t,
                value: a
            }
        }).filter(e => !!e)
    }

    function A(e) {
        const {
            position: t
        } = e.content.data;
        switch (t) {
            case "PP":
                return "preroll";
            case "PM":
                return "midroll";
            case "PR":
                return "rewarded";
            default:
                return "unknown-".concat(t)
        }
    }

    function C(e) {
        return "playground" === e.origin ? "platform" : "ingame"
    }

    function B(e) {
        return e < 0 ? 0 : e < 30 ? Math.floor(e) : e < 60 ? 30 : e < 120 ? 60 : e < 300 ? 120 : e < 600 ? 300 : e < 1200 ? 600 : e < 1800 ? 1200 : 1800
    }
    window._pokiContextGlobalName = window._pokiContextGlobalName || "context";
    let E = !1;

    function G() {
        window.uetq || (window.uetq = [], function(e, t, a, n, o) {
            var i, r, d;
            e[o] = e[o] || [], i = function() {
                var t = {
                    ti: "5066235"
                };
                t.q = e[o], e[o] = new UET(t), e[o].push("pageLoad")
            }, (r = t.createElement(a)).src = "//bat.bing.com/bat.js", r.async = 1, r.onload = r.onreadystatechange = function() {
                var e = this.readyState;
                e && "loaded" !== e && "complete" !== e || (i(), r.onload = r.onreadystatechange = null)
            }, (d = t.getElementsByTagName(a)[0]).parentNode.insertBefore(r, d)
        }(window, document, "script", 0, "uetq"))
    }

    function P() {
        return window.pokiCountry && !I.includes(window.pokiCountry) || b || !!_[4]
    }

    function N() {
        return window.pokiCountry && !I.includes(window.pokiCountry) || b
    }

    function M(e, a, n, r = "", d = [], l = {}) {
        var c, s, p, u, v, y;
        const g = window[window._pokiContextGlobalName],
            {
                session: k,
                user: f
            } = g;
        if ("pageview" === a && !g.site.id) return;
        const m = Math.max(Date.now() - k.page.start, 0),
            w = function() {
                try {
                    return !o()
                } catch (e) {
                    return t(e, "isSessionExpired"), !0
                }
            }();
        let h, _ = 0;
        ("pageview" !== a || k.depth > 1) && (_ = Math.max(Date.now() - k.landing_page.start, 0)), "pageview" === a && k.previous_page.start && (h = k.page.start - k.previous_page.start);
        let b, I = null === (c = e.content) || void 0 === c || null === (s = c.pokifordevs) || void 0 === s ? void 0 : s.game_id,
            S = null === (p = e.content) || void 0 === p || null === (u = p.pokifordevs) || void 0 === u ? void 0 : u.game_version_id;
        I || ({
            gameID: I
        } = e), S || (S = e.gameVersion), g.site.id || "pubhost" !== a || "initialized" !== n ? "pageview" !== a || E || (E = !0, ({
            referrer: b
        } = document)) : ({
            referrer: b
        } = document);
        let D = 0;
        k.expire && (D = Math.ceil((k.expire - Date.now()) / 1e3)), w && "pageview" !== a || (l.interaction && i(), window[window._pokiTrackerGlobalName].push({
            session: {
                id: k.id,
                depth: k.depth,
                count: k.count
            },
            user: {
                id: f.id,
                is_new: f.is_new
            },
            page: {
                path: k.page.path,
                type: k.page.type,
                id: e.storeNoPageID ? void 0 : k.page.id,
                pageview_id: k.page.pageview_id
            },
            previous_page: {
                path: k.previous_page.path,
                type: k.previous_page.type,
                id: k.previous_page.id,
                pageview_id: k.previous_page.pageview_id
            },
            landing_page: {
                path: k.landing_page.path,
                type: k.landing_page.type,
                id: k.landing_page.id,
                pageview_id: k.landing_page.pageview_id
            },
            category: a,
            action: n,
            label: r,
            data: d,
            interaction: l.interaction,
            site_id: g.site.id,
            tag_id: g.tag,
            referrer: b,
            flash_version: g.flashVersion,
            time_on_site: _,
            time_spa_load: e.loadTime,
            time_on_page: m,
            time_on_previous_page: h,
            tab_id: k.tab_id,
            has_adblock: null === (v = window.api) || void 0 === v || null === (y = v.getAdblock) || void 0 === y ? void 0 : y.call(v),
            once_per_pageview: l.once_per_pageview,
            game_id: I || void 0,
            game_version_id: S || void 0,
            experiment: g.experiment,
            timeout: D
        }))
    }

    function R(e) {
        const a = window[window._pokiContextGlobalName],
            {
                event: n
            } = e,
            o = e.eventData || e.data || {};
        try {
            if ("sdk-message" === n)
                if ("pokiTrackingScreenDisplayAdImpression" === o.content.event) M(o, "ad", "displayImpression", o.content.data.platformAd ? "platform" : "ingame", [{
                    key: "opportunityId",
                    value: o.content.data.opportunityId
                }, {
                    key: "adUnitPath",
                    value: o.content.data.adUnitPath
                }, {
                    key: "prebidBid",
                    value: o.content.data.prebidBid
                }, {
                    key: "prebidBidder",
                    value: o.content.data.prebidBidder
                }, {
                    key: "prebidWon",
                    value: o.content.data.prebidWon || o.content.data.preBidWon
                }, {
                    key: "prebidSecondBid",
                    value: o.content.data.prebidSecondBid
                }, {
                    key: "prebidSecondBidder",
                    value: o.content.data.prebidSecondBidder
                }, {
                    key: "dfpIsBackfill",
                    value: o.content.data.dfpIsBackfill
                }, {
                    key: "dfpLineItemId",
                    value: o.content.data.dfpLineItemId
                }, {
                    key: "duringGameplay",
                    value: o.content.data.duringGameplay
                }, {
                    key: "houseAdId",
                    value: o.content.data.houseAdId
                }, {
                    key: "isEmpty",
                    value: o.content.data.isEmpty
                }, {
                    key: "adDomain",
                    value: o.content.data.adDomain
                }, {
                    key: "trigger",
                    value: o.content.data.refreshType
                }, {
                    key: "number",
                    value: o.content.data.refreshNumber
                }]);
                else if ("pokiTrackingScreenDisplayAdRequested" === o.content.event) M(o, "ad", "displayRequest", o.content.data.platformAd ? "platform" : "ingame", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adUnitPath",
                value: o.content.data.adUnitPath
            }, {
                key: "duringGameplay",
                value: o.content.data.duringGameplay
            }, {
                key: "trigger",
                value: o.content.data.refreshType
            }, {
                key: "number",
                value: o.content.data.refreshNumber
            }]);
            else if ("pokiTrackingScreenDisplayAdDestroy" !== o.content.event || o.content.data.platformAd)
                if ("pokiTrackingScreenDisplayAdDestroy" === o.content.event && o.content.data.platformAd) M(o, "platform", "destroyAd", "", [{
                    key: "opportunityId",
                    value: o.content.data.opportunityId
                }]);
                else if ("pokiTrackingScreenGameLoadingFinished" === o.content.event) M(o, "game", "loadingFinished", "", [{
                key: "time_on_page",
                value: o.content.data.now
            }, {
                key: "transferSize",
                value: o.content.data.transferSize
            }, {
                key: "trackers",
                value: o.content.data.trackers
            }, {
                key: "external_resources",
                value: o.content.data.external_resources
            }], {
                once_per_pageview: !0
            });
            else if ("pokiTrackingScreenGameplayStart" === o.content.event) M(o, "game", "play", "start", T(o.content.data), {
                interaction: !0
            });
            else if ("pokiTrackingScreenGameplayStop" === o.content.event) M(o, "game", "play", "stop", T(o.content.data), {
                interaction: !0
            });
            else if ("pokiTrackingAdsStatusError" === o.content.event) M(o, "ad", "error", "", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "waterfall",
                value: o.content.data.waterfall
            }]);
            else if ("pokiTrackingSdkStatusFailed" === o.content.event) M(o, "ad", "failed", "", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }]);
            else if ("pokiTrackingAdsStatusBuffering" === o.content.event) M(o, "ad", "videoBuffering", A(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsVideoError" === o.content.event) M(o, "ad", "videoError", A(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "message",
                value: o.content.data.message
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsVideoLoaderError" === o.content.event) M(o, "ad", "videoLoaderError", A(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsStatusPrebidRequested" === o.content.event) M(o, "ad", "videoPrebidRequested", A(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }]);
            else if ("pokiTrackingAdsStatusReady" === o.content.event) M(o, "ad", "videoReady", A(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsStatusSkipped" === o.content.event) M(o, "ad", "videoSkipped", A(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }], {
                interaction: !0
            });
            else if ("pokiTrackingAdsVideoClicked" === o.content.event) M(o, "ad", "videoClicked", A(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "origin",
                value: C(o)
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }], {
                interaction: !0
            });
            else if ("pokiTrackingAdsStatusCompleted" === o.content.event) M(o, "ad", "videoCompleted", A(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "origin",
                value: C(o)
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsStatusImpression" === o.content.event) M(o, "ad", "videoImpression", A(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "origin",
                value: C(o)
            }, {
                key: "prebidBidder",
                value: o.content.data.prebidBidder
            }, {
                key: "prebidBid",
                value: o.content.data.prebidBid
            }, {
                key: "creativeId",
                value: o.content.data.creativeId
            }, {
                key: "adUnitPath",
                value: o.content.data.adUnitPath
            }, {
                key: "houseAdId",
                value: o.content.data.houseAdId
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsVideoPaused" === o.content.event) M(o, "ad", "videoPaused", A(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "origin",
                value: C(o)
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsStatusRequested" === o.content.event) M(o, "ad", "videoRequest", A(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "origin",
                value: C(o)
            }]);
            else if ("pokiTrackingAdsVideoResumed" === o.content.event) M(o, "ad", "videoResumed", A(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "origin",
                value: C(o)
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsStatusStarted" === o.content.event) M(o, "ad", "videoStarted", A(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "origin",
                value: C(o)
            }, {
                key: "duration",
                value: o.content.data.duration
            }, {
                key: "prebidBidder",
                value: o.content.data.prebidBidder
            }, {
                key: "prebidBid",
                value: o.content.data.prebidBid
            }, {
                key: "creativeId",
                value: o.content.data.creativeId
            }, {
                key: "adUnitPath",
                value: o.content.data.adUnitPath
            }, {
                key: "houseAdId",
                value: o.content.data.houseAdId
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }]);
            else if ("pokiTrackingRewardedWebRequest" === o.content.event) M(o, "ad", "rewardedWeb", "request", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }]);
            else if ("pokiTrackingRewardedWebReady" === o.content.event) M(o, "ad", "rewardedWeb", "ready", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }]);
            else if ("pokiTrackingRewardedWebImpression" === o.content.event) M(o, "ad", "rewardedWeb", "impression", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adUnitPath",
                value: o.content.data.adUnitPath
            }, {
                key: "bid",
                value: o.content.data.bid
            }, {
                key: "bidder",
                value: o.content.data.bidder
            }, {
                key: "prebidBidder",
                value: o.content.data.prebidBidder
            }, {
                key: "prebidWon",
                value: o.content.data.prebidWon || o.content.data.preBidWon
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }]);
            else if ("pokiTrackingRewardedWebClosedGranted" === o.content.event) M(o, "ad", "rewardedWeb", "closedGranted", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }]);
            else if ("pokiTrackingRewardedWebClosedDeclined" === o.content.event || "pokiTrackingRewardedWebclosedDeclined" === o.content.event) M(o, "ad", "rewardedWeb", "closedDeclined", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }]);
            else if ("pokiTrackingRewardedWebEmpty" === o.content.event) M(o, "ad", "rewardedWeb", "empty", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }]);
            else if ("pokiTrackingScreenFirstRound" === o.content.event) {
                var i, r, d;
                if (M(o, "game", "play", "first", [], {
                        interaction: !0,
                        once_per_pageview: !0
                    }), "GB" === a.geo) return;
                const e = null === (i = a.page) || void 0 === i || null === (r = i.content) || void 0 === r || null === (d = r.game) || void 0 === d ? void 0 : d.id;
                let t = !1,
                    n = "Unknown";
                if (window.api && window.api.getAdblock && (t = window.api.getAdblock(), !0 === t ? n = "Yes" : !1 === t && (n = "No")), P()) {
                    G();
                    let a = "desktop";
                    S() ? a = "mobile" : D() && (a = "tablet"), window.uetq.push("event", "game-play-first", {
                        event_category: a,
                        event_label: e,
                        event_value: t ? 1 : 0
                    }), t || window.uetq.push("event", "", {
                        ecomm_prodid: e,
                        ecomm_pagetype: "product"
                    })
                }
                if (N()) {
                    const e = h("keyword", window.location.search),
                        t = h("matchtype", window.location.search),
                        o = h("device", window.location.search);
                    ! function(e, t, a, n) {
                        const o = {
                            google_conversion_id: e,
                            google_conversion_label: t,
                            google_remarketing_only: !0
                        };
                        a && (o.google_user_id = a), n && (o.google_custom_params = n), m(o)
                    }(962655633, "IGSuCMaAmIEBEJHrg8sD", a.user.id, {
                        ID: a.page.id,
                        AdBlocker: n,
                        Keyword: e,
                        Matchtype: t,
                        Device: o
                    }), w(962655633, "KzjDCPH3l6IBEJHrg8sD"), w(962655633, "YAozCMbHmZQDEJHrg8sD"), S() ? (w(962655633, "GcnkCL2-mZQDEJHrg8sD"), w(962655633, "yoVJCODb6pMDEJHrg8sD")) : D() ? (w(962655633, "LpAFCNHG6pMDEJHrg8sD"), w(962655633, "NC5BCKnU6pMDEJHrg8sD")) : (w(962655633, "tmXGCPitoJQDEJHrg8sD"), w(962655633, "vjKvCO35q4cDEJHrg8sD"), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? w(962655633, "AT-CCLLI3qQBEJHrg8sD") : w(962655633, "XuGfCNXE3qQBEJHrg8sD"))
                }
            } else "pokiTrackingScreenCommercialBreak" === o.content.event ? M(o, "game", "commercialBreak", "", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }]) : "pokiTrackingScreenRewardedBreak" === o.content.event ? M(o, "game", "rewardedBreak", "", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "category",
                value: o.content.data.category
            }, {
                key: "details",
                value: o.content.data.details
            }, {
                key: "placement",
                value: o.content.data.placement
            }, {
                key: "from",
                value: o.content.data.from
            }].filter(e => void 0 !== e.value), {
                interaction: !0
            }) : "pokiTrackingScreenRoundEnd" === o.content.event ? M(o, "game", "roundEnd", "", T(o.content.data)) : "pokiTrackingScreenRoundStart" === o.content.event ? M(o, "game", "roundStart", "", T(o.content.data), {
                interaction: !0
            }) : "SaveGameMigrator" === o.type && "error" === o.content.event ? M(o, "game", "saveGameMigrator", "error", [{
                key: "error",
                value: o.content.error
            }]) : "SaveGameMigrator" === o.type && "start" === o.content.event ? M(o, "game", "saveGameMigrator", "start") : "SaveGameMigrator" === o.type && "timeout" === o.content.event ? M(o, "game", "saveGameMigrator", "timeout") : "pokiTrackingSdkStatusInitialized" === o.content.event && "game" === o.origin ? M(o, "game", "sdkInitialized", "", [], {
                once_per_pageview: !0
            }) : "pokiTrackingScreenDisplayAdRequest" !== o.content.event || o.content.data.platformAd ? "pokiTrackingScreenDisplayAdRequest" === o.content.event && o.content.data.platformAd ? M(o, "platform", "displayAd", "", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "size",
                value: o.content.data.size
            }]) : "pokiTrackingCustom" === o.content.event ? M(o, o.content.data.category || o.content.data.eventNoun, o.content.data.action || o.content.data.eventVerb, "", T(o.content.data.eventData || {})) : "pokiTrackingScreenPlayerActive" === o.content.event ? M(o, "game", "playerActive", "", [], {
                interaction: !0
            }) : "pokiTrackingPlaytestShowModal" === o.content.event ? M(o, "playtest", "showModal", "", [{
                key: "show",
                value: o.content.data.show
            }]) : "pokiTrackingPlaytestAccepted" === o.content.event ? M(o, "playtest", "accepted", "", [], {
                interaction: !0
            }) : "pokiTrackingPlaytestRejected" === o.content.event ? M(o, "playtest", "rejected", "", [], {
                interaction: !0
            }) : "pokiTrackingPlaytestNoCanvas" === o.content.event ? M(o, "playtest", "noCanvas", "", []) : "pokiTrackingPlaytestStarting" === o.content.event ? M(o, "playtest", "starting", "", []) : "pokiTrackingPlaytestConnected" === o.content.event ? M(o, "playtest", "connected", "", [{
                key: "peer",
                value: o.content.data.peer
            }]) : "pokiTrackingScreenisAdBlockFunctionCall" === o.content.event && M(o, "game", "isAdBlockedCalled", "", []) : M(o, "game", "displayAd", "", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "size",
                value: o.content.data.size
            }]);
            else M(o, "game", "destroyAd", "ingame", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }]);
            else if ("adslot-renderEnded" === n) M(o, "ad", "displayImpression", "platform", [{
                key: "trigger",
                value: o.refreshType
            }, {
                key: "adUnitPath",
                value: o.adUnitPath
            }, {
                key: "number",
                value: o.refreshNumber
            }, {
                key: "opportunityId",
                value: o.opportunityId
            }, {
                key: "prebidBid",
                value: o.prebidBid
            }, {
                key: "prebidBidder",
                value: o.prebidBidder
            }, {
                key: "prebidWon",
                value: o.prebidWon || o.preBidWon
            }, {
                key: "prebidSecondBid",
                value: o.prebidSecondBid
            }, {
                key: "prebidSecondBidder",
                value: o.prebidSecondBidder
            }, {
                key: "dfpIsBackfill",
                value: o.dfpIsBackfill
            }, {
                key: "dfpLineItemId",
                value: o.dfpLineItemId
            }, {
                key: "houseAdId",
                value: o.houseAdId
            }, {
                key: "isEmpty",
                value: o.isEmpty
            }, {
                key: "adDomain",
                value: o.adDomain
            }]);
            else if ("ads-adblocked" === n) M(o, "ad", "adblocked", "platform", [{
                key: "playground",
                value: o.playground
            }, {
                key: "sdk",
                value: o.sdk
            }]);
            else if ("ads-notFound" === n) M(o, "ad", "notFound", "platform", [{
                key: "event",
                value: o.event
            }, {
                key: "code",
                value: o.code
            }, {
                key: "refreshType",
                value: o.refreshType
            }]);
            else if ("ads-debugDisplayAd" === n) M(o, "ad", "debugDisplayAd", "platform", [{
                key: "event",
                value: o.event
            }, {
                key: "sdkAdsReady",
                value: o.sdkAdsReady
            }, {
                key: "consentSettled",
                value: o.consentSettled
            }, {
                key: "page",
                value: o.page
            }, {
                key: "code",
                value: o.code
            }, {
                key: "refreshType",
                value: o.refreshType
            }]);
            else if ("ads-render" === n) M(o, "ad", "displayRequest", "platform", [{
                key: "trigger",
                value: o.refreshType
            }, {
                key: "adUnitPath",
                value: o.adUnitPath
            }, {
                key: "number",
                value: o.refreshNumber
            }, {
                key: "opportunityId",
                value: o.opportunityId
            }]);
            else if ("housead-click" === n) M(o, "ad", "houseAdClick", "platform", [{
                key: "houseAdId",
                value: o.houseAdId
            }]);
            else if ("consent-full" === n) b = !0, M(o, "consent", "full"),
                function(e) {
                    if ("GB" !== e.geo) {
                        window._comscore = window._comscore || [], window._comscore.push({
                            c1: "2",
                            c2: "20061681"
                        });
                        var t = document.createElement("script");
                        t.src = "https://sb.scorecardresearch.com/cs/20061681/beacon.js";
                        var a = document.getElementsByTagName("script")[0];
                        a.parentNode.insertBefore(t, a)
                    }
                }(a);
            else if ("consent-no" === n) b = !1, M(o, "consent", "no");
            else if ("consent-noniab" === n)({
                nonIABConsents: _
            } = o), M(o, "consent", "noniab", "", [{
                key: "consents",
                value: JSON.stringify(_)
            }]);
            else if ("consent-npa" === n) M(o, "consent", "npa");
            else if ("consent-unknown" === n) M(o, "consent", "unknown");
            else if ("consent-bootError" === n) M(o, "consent", "bootError");
            else if (n.startsWith("rating-")) M(o, "game", "rating", n.substr(13).toLowerCase(), [{
                key: "previous_vote",
                value: o.previousVote
            }], {
                interaction: !0
            });
            else if ("sdk-details" === n) M(o, "game", "sdkDetails", "", [{
                key: "version",
                value: o.version
            }], {
                once_per_pageview: !0
            });
            else if ("sdk-externalUrl" === n) M(o, "game", "externalUrl", "", o.data.data.map(e => ({
                key: "domain",
                value: e
            })));
            else if ("react-prehydrate" === n) {
                const e = [{
                    key: "bot.verified",
                    value: window.pokiBotVerified
                }, {
                    key: "bot.score",
                    value: window.pokiBotScore
                }];
                void 0 !== o.isIPad && e.push({
                    key: "isIPad",
                    value: o.isIPad
                }), M(o, "page", "reactPrehydrate", a.page.type, e)
            } else if ("tile-click" === n) o.searchExpanded ? M(o, "search", "tileClick", a.page.type, [{
                key: "id",
                value: o.id
            }, {
                key: "type",
                value: o.type
            }, {
                key: "index",
                value: o.index
            }, {
                key: "path",
                value: o.path
            }, {
                key: "list",
                value: o.list
            }, {
                key: "terms",
                value: o.searchQuery
            }, {
                key: "searchSessionId",
                value: o.searchSessionId
            }, {
                key: "panelSection",
                value: o.panelSection
            }], {
                interaction: !0
            }) : M(o, "page", "tileClick", a.page.type, [{
                key: "id",
                value: o.id
            }, {
                key: "type",
                value: o.type
            }, {
                key: "index",
                value: o.index
            }, {
                key: "path",
                value: o.path
            }, {
                key: "list",
                value: o.list
            }, {
                key: "thumbnail",
                value: o.image
            }], {
                interaction: !0
            });
            else if ("pubHost-initialized" === n) {
                var l, c;
                M(o, "pubhost", "initialized", "", [{
                    key: "topOrigin",
                    value: o.topOrigin
                }, {
                    key: "bot.verified",
                    value: null === (l = o.bot) || void 0 === l ? void 0 : l.verified
                }, {
                    key: "bot.score",
                    value: null === (c = o.bot) || void 0 === c ? void 0 : c.score
                }])
            } else if ("page-pulse" === n) {
                const e = Math.floor((Date.now() - a.session.page.start) / 1e3),
                    t = function(e) {
                        return B(e)
                    }(e),
                    n = function(e) {
                        return B(e - 30)
                    }(e);
                if ((30 === t && n < 30 || 60 === t && n < 60 || 120 === t && n < 120 || 300 === t && n < 300 || 600 === t && n < 600 || 1200 === t && n < 1200 || 1800 === t && n < 1800) && M(o, "page", "timeSpent", "".concat(t, "s")), "GB" === a.geo) return;
                if (e >= 300 && e < 330) {
                    if (P() && "game" === a.page.type) {
                        var s, p, u;
                        G();
                        const e = null === (s = a.page) || void 0 === s || null === (p = s.content) || void 0 === p || null === (u = p.game) || void 0 === u ? void 0 : u.id;
                        let t = !1;
                        window.api && window.api.getAdblock && (t = window.api.getAdblock());
                        let n = "desktop";
                        S() ? n = "mobile" : D() && (n = "tablet"), window.uetq.push("event", "page_timeSpent-300", {
                            event_category: n,
                            event_label: e,
                            event_value: t ? 1 : 0
                        })
                    }
                    "game" === a.page.type && N() && (w(962655633, "2IEyCPmFmZQDEJHrg8sD"), S() ? w(962655633, "AYEACNah6pMDEJHrg8sD") : D() ? w(962655633, "y05mCNeWmZQDEJHrg8sD") : w(962655633, "lsPJCLbOqYEBEJHrg8sD"))
                } else e >= 900 && e < 930 && "game" === a.page.type && N() && (S() ? w(962655633, "t5VrCLXIlMkBEJHrg8sD") : D() ? w(962655633, "WUfoCMSC5LkBEJHrg8sD") : w(962655633, "Gh96CL-84MkBEJHrg8sD"))
            } else if ("appStoreButton-click" === n) M(o, "game", "appstoreClick", o.store, [], {
                interaction: !0
            });
            else if ("home-click" === n) M(o, "home", "click", a.page.type, [], {
                interaction: !0
            });
            else if ("logo-click" === n) M(o, "logo", "click", a.page.type, [], {
                interaction: !0
            });
            else if ("fullscreenButton-click" === n) M(o, "fullscreenButton", "click", "", [{
                key: "targetState",
                value: o.targetState
            }], {
                interaction: !0
            });
            else if ("page-pillClick" === n) M(o, "page", "pillClick", "", [], {
                interaction: !0
            });
            else if ("page-pillDrag" === n) M(o, "page", "pillDrag", "", [{
                key: "x",
                value: o.x
            }, {
                key: "y",
                value: o.y
            }], {
                interaction: !0
            });
            else if ("page-autoRedirectClick" === n) M(o, "page", "autoRedirect", "click", [], {
                interaction: !0
            });
            else if ("searchPanel-close" === n) M(o, "searchPanel", "close", a.page.type, [{
                key: "searchSessionId",
                value: o.searchSessionId
            }], {
                interaction: !0
            });
            else if ("searchPanel-open" === n) M(o, "searchPanel", "open", a.page.type, [{
                key: "searchSessionId",
                value: o.searchSessionId
            }], {
                interaction: !0
            });
            else if ("game-launch" === n) M(o, "game", "launch", "", [], {
                interaction: !0
            });
            else if ("page-view" !== n && "pageview" !== n || 0 === o.counter) {
                const {
                    category: t,
                    action: n,
                    options: i
                } = e;
                let {
                    label: r
                } = e;
                null != i && i.pageTypeAsLabel && (r = a.page.type), M(o, t, n, r, T(o), i)
            } else M(o, "pageview", "", "", [], {
                interaction: !0
            })
        } catch (e) {
            t(e, "gtm")
        }
    }
    const x = window;
    x._pokiTrackerGlobalName = x._pokiTrackerGlobalName || "tracker", x[x._pokiTrackerGlobalName] = x[x._pokiTrackerGlobalName] || [];
    const q = x[x._pokiTrackerGlobalName];
    for (q.uniqueEvents = {}, q.firstPageview = !0, q.installTCFHandler = y, q.push = function(e, a, n, o, i, r) {
            return d => {
                if ("function" != typeof d) try {
                    var l, c;
                    if (d.version = 7, !d.category) return;
                    if (d.once_per_pageview) {
                        const e = "".concat(d.category, "-").concat(d.action || "", "-").concat(d.label || "");
                        if (a.uniqueEvents[e]) return;
                        a.uniqueEvents[e] = !0
                    }
                    if (delete d.once_per_pageview, "pageview" === d.category && (a.uniqueEvents = {}, d.query_params = e.location.search.substr(1), d.hash = e.location.hash.substr(1)), void 0 !== d.action && null !== d.action && (d.action = d.action.toString()), "" === d.action && delete d.action, void 0 !== d.label && null !== d.label && (d.label = d.label.toString()), "" === d.label && delete d.label, Array.isArray(d.data))
                        for (let e = 0; e < d.data.length; e++) void 0 !== d.data[e].value && null !== d.data[e].value && (d.data[e].value = d.data[e].value.toString());
                    else delete d.data;
                    if (d.cpus = e.navigator.hardwareConcurrency || 0, d.domain = e.location.hostname, d.protocol = e.location.protocol.substr(0, e.location.protocol.length - 1), d.scroll_y = e.scrollY, d.timezone = (new Date).getTimezoneOffset(), d.timestamp = Date.now(), d.tcf_purpose_consents = r(), e.navigator.connection && e.navigator.connection.effectiveType && (d.connection_type = e.navigator.connection.effectiveType), d.user && (d.user.language = e.navigator.language), d.screen_resolution = e.screen.width + "x" + e.screen.height, d.screen_orientation = null === (l = e.screen) || void 0 === l || null === (c = l.orientation) || void 0 === c ? void 0 : c.type, d.browser_size = i.size, "pageview" === d.category && a.firstPageview && e.performance && e.performance.getEntriesByType) try {
                        const t = e.performance.getEntriesByType("navigation");
                        if (t.length > 0) {
                            const e = t[0];
                            d.nav = {
                                connect: Math.round(e.connectEnd - e.connectStart),
                                dns: Math.round(e.domainLookupEnd - e.domainLookupStart),
                                dom_complete: Math.round(e.domComplete),
                                first_byte: Math.round(e.responseStart - e.requestStart),
                                last_byte: Math.round(e.responseEnd - e.requestStart),
                                transfer_size: e.transferSize
                            }
                        }
                    } catch (e) {}
                    d.insert_id = o(), d = function e(t) {
                        return Object.keys(t).forEach(a => {
                            if (!g[a]) return console.error("unknown field ".concat(a)), void delete t[a];
                            if (Array.isArray(t[a])) {
                                if (0 === t[a].length) return void delete t[a];
                                for (let n = 0; n < t[a].length; n++) t[a][n] = e(t[a][n])
                            } else {
                                if (null === t[a] || void 0 === t[a]) return void delete t[a];
                                "object" == typeof t[a] && e(t[a])
                            }
                            const n = g[a];
                            a !== n && (t[n] = t[a], delete t[a])
                        }), t
                    }(d), n("https://t.poki.io/t", function(e) {
                        const t = [];
                        for (let a = 0; a < e.length; a++) {
                            const n = e.charCodeAt(a);
                            t[a] = n >= 33 && n <= 126 ? String.fromCharCode(33 + (n + 14) % 94) : String.fromCharCode(n)
                        }
                        return t.join("")
                    }(JSON.stringify(d))), "pageview" === d.category && (a.firstPageview = !1)
                } catch (e) {
                    t(e, "push")
                } else d()
            }
        }(x, q, e, (function() {
            for (var e = Math.floor(Date.now() / 1e3), t = "", a = 0; a < 4; a++) t = String.fromCharCode(255 & e) + t, e >>= 8;
            if (window.crypto && crypto.getRandomValues && Uint32Array) {
                var n = new Uint32Array(12);
                crypto.getRandomValues(n);
                for (var o = 0; o < 12; o++) t += String.fromCharCode(255 & n[o])
            } else
                for (var i = 0; i < 12; i++) t += String.fromCharCode(Math.floor(256 * Math.random()));
            return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
        }), r, (function() {
            return p
        })); q.length > 0;) q.push(q.shift());
    ! function() {
        for (window.pokiGTM = window.pokiGTM || [], window.pokiGTM.push = R, window.pokiGTM.push({
                event: "pageview",
                eventData: {}
            }); window.pokiGTM.length > 0;) window.pokiGTM.push(window.pokiGTM.shift())
    }()
}();