"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2714],{7900:(e,i,o)=>{o.r(i),o.d(i,{adLibsNotLoadedEpic:()=>O,destoryAllInGameDisplayAdsEpic:()=>B,destoryGoogleRewardedWebEpic:()=>Z,destroyAdEpic:()=>K,initAdsEpic:()=>x,initCCPAPrivacyEpic:()=>q,lazyStartMonetizationCoreEpic:()=>C,processAdEpic:()=>j,receivePokiSDKGameCommandsEpic:()=>L,updateAdsOnNavigationEpic:()=>I});var n=o(5069),l=o(230),t=o(2817),d=o(4975),a=o(4727),r=o(7877),s=o(378),u=o(2006),c=o(533),p=o(9127),v=o(8813),w=o(4862),y=o(905),m=o(6151),f=o(9317),g=o(1308),A=o(8656),k=o(4927),_=o(132),h=o(6084),S=o(3748),b=o(8092),D=o(6343);const P=e=>{const i=(0,f.sY)(e),o=(0,m.tl)(e),n=(0,m.g$)(e),l=(0,m.Zn)(e);return{bot:"true"===window.pokiBotVerified,experiment:i.experiment,isPokiIframe:!1,siteID:i.site_id,tag:i.tag,ccpaApplies:o,country:l,runningOnPlayground:!0,nonPersonalized:n,familyFriendly:n}},E=e=>{const i=(0,A.J1)(e),o=(0,m.z7)(e),n=(0,A.ex)(e);let l="";return o?l="landing":n&&(l="crosspromo"),{categories:((null==i?void 0:i.categories)||[]).map((e=>{let{id:i}=e;return i})),gameID:i?i.pokifordevs_game_id:"",specialCondition:l}};function x(e,i){return e.pipe((0,n.l)(v.Qi.type,k.o8.type),(0,d.h)((()=>["game","preview"].includes((0,A.Wj)(i.value)))),(0,a.q)(1),(0,r.z)((()=>new l.y((e=>{const o=(0,g.L)(i.value);window.pbjs.que.push((()=>{window.pbjs.addAdUnits(o.adUnits)}));const n=()=>{e.next((0,w.xZ)()),e.complete()},l=(0,m.eD)(i.value),t=(0,m.g$)(i.value);(window.adBridge=!0,window.pokiSDKVersion=(0,h.R)(i.value),Promise.all([(0,_.v)("https://game-cdn.poki.com/scripts/v2/poki-sdk.js")])).then((()=>{var d,a,r;(0,b.$8)(),null===(d=window)||void 0===d||null===(a=d.PokiSDK)||void 0===a||null===(r=a.init)||void 0===r||r.call(a,{wrapper:(0,b.AF)(l),prebid:{config:o.config},startupParams:{...P(i.value),...E(i.value)},strictConsentMode:!0,nonPersonalized:t,familyFriendly:t,onAdblocked:n}).then((()=>{(0,D.Z)(),e.next((0,w.xZ)()),e.complete()})).catch(n)}))})))))}function C(e,i){return e.pipe((0,n.l)(w.xZ.type,v.dY.type,y.Gq.type),(0,d.h)((()=>(0,f.y0)(i.value))),(0,a.q)(1),(0,r.z)((()=>new l.y((e=>{var i,o,n,l;null===(i=window)||void 0===i||null===(o=i.PokiSDK)||void 0===o||null===(n=o.startLoadingMonetizationCore)||void 0===n||null===(l=n.call(o))||void 0===l||l.then((()=>{e.next((0,w.qs)()),e.complete()})).catch((i=>{let o;try{o=JSON.stringify(i)}catch(i){}e.next((0,w.Ux)()),(0,S.A)("ads","adblocked",{playground:"".concat(i.message||i),sdk:"".concat(o)}),e.next((0,w.qs)())}))})))))}function I(e,i){const o=e.pipe((0,n.l)(w.xZ.type));return e.pipe((0,n.l)(k.o8.type),(0,s.j)((()=>(0,f.XZ)(i.value)?(0,t.of)(void 0):o)),(0,d.h)((()=>["game","preview"].includes((0,A.Wj)(i.value)))),(0,u.b)((()=>{var e,o,n;null===(e=window)||void 0===e||null===(o=e.PokiSDK)||void 0===o||null===(n=o.setRuntimeInformation)||void 0===n||n.call(o,E(i.value))})),(0,c.l)())}function K(e,i){const o=e.pipe((0,n.l)(w.xZ.type));return e.pipe((0,n.l)(w.VJ.type),(0,s.j)((()=>(0,f.XZ)(i.value)?(0,t.of)(void 0):o)),(0,u.b)((e=>{var o,n,l;let{code:t}=e;if(!(0,g.O)(i.value).find((e=>{let{code:i}=e;return i===t})))return void console.error("Investigate AdStack ad was undefined on destroyAdSlot");const d=document.getElementById(t);d?null===(o=window)||void 0===o||null===(n=o.PokiSDK)||void 0===n||null===(l=n.destroyAd)||void 0===l||l.call(n,d):console.error("Investigate AdStack adContainer was undefined on destroyAdSlot (React unloaded?)")})),(0,c.l)())}function j(e,i){const o=e.pipe((0,n.l)(w.qs.type));return e.pipe((0,n.l)(w.Cq.type,w.SB.type),(0,s.j)((()=>(0,f.HO)(i.value)?(0,t.of)(void 0):o)),(0,d.h)((()=>["game","preview"].includes((0,A.Wj)(i.value)))),(0,d.h)((()=>!(0,f.xU)(i.value))),(0,u.b)((e=>{var o,n,l;let{code:t,refreshType:d}=e;const a=(0,g.O)(i.value).find((e=>{let{code:i}=e;return i===t}));if(!a)return void console.error("Investigate AdStack ad was undefined on display/refresh");const r=document.getElementById(t);if(!r)return void console.error("Investigate AdStack adContainer was undefined on display/refresh",r,a,t);const s={...(0,f.sY)(i.value),...(0,m.tl)(i.value)?{us_privacy:(0,m.yu)(i.value)}:{},refreshType:d};s.p4d_game_id="",s.p4d_game_id_cond="";const u=document.getElementById("game-element");if(u){const e=u.getBoundingClientRect();s.player_size=e.width}null===(o=window)||void 0===o||null===(n=o.PokiSDK)||void 0===n||null===(l=n.playgroundPlatformAd)||void 0===l||l.call(n,r,a.code,"".concat(a.width,"x").concat(a.height),s)})),(0,c.l)())}function q(e,i){return e.pipe((0,n.l)(v.Qi.type),(0,a.q)(1),(0,u.b)((()=>{(0,m.tl)(i.value)&&window.addEventListener("message",(e=>{const i=e&&e.data&&e.data.__uspapiCall;i&&window.__uspapi&&window.__uspapi(i.command,i.version,((o,n)=>{e.source.postMessage({__uspapiReturn:{returnValue:o,success:n,callId:i.callId}},"*")}))}),!1)})),(0,c.l)())}function L(e,i){const o=e.pipe((0,n.l)(w.xZ.type)),l=(0,m.eD)(i.value);return e.pipe((0,n.l)(y.iq.type),(0,s.j)((()=>(0,f.XZ)(i.value)?(0,t.of)(void 0):o)),(0,d.h)((()=>["game","preview"].includes((0,A.Wj)(i.value)))),(0,u.b)((e=>{var o,n,t,d,a,r,s,u,c,p,v,w;let{event:y,data:m,source:g}=e;switch(y){case"adTiming":(0,b.eJ)({...m,isAdBlocked:(0,f.N9)(i.value)},g);break;case"forcePreroll":null===(o=window)||void 0===o||null===(n=o.PokiSDK)||void 0===n||null===(t=n.forcePreroll)||void 0===t||t.call(n);break;case"startStartAdsAfterTimer":null===(d=window)||void 0===d||null===(a=d.PokiSDK)||void 0===a||null===(r=a.startStartAdsAfterTimer)||void 0===r||r.call(a);break;case"muteAd":null===(s=window)||void 0===s||null===(u=s.PokiSDK)||void 0===u||null===(c=u.muteAd)||void 0===c||c.call(u);break;case"setVolume":null===(p=window)||void 0===p||null===(v=p.PokiSDK)||void 0===v||null===(w=v.setVolume)||void 0===w||w.call(v,m.volume);break;case"requestVideoAd":(0,b.u9)(m,g);break;case"destroyAd":(0,b.eX)(m,g);break;case"displayAd":(0,b.rR)(m,l,g)}})),(0,c.l)())}function O(e,i){return e.pipe((0,n.l)(y.iq.type),(0,d.h)((()=>["game","preview"].includes((0,A.Wj)(i.value)))),(0,d.h)((e=>{let{event:i}=e;return"adLibrariesNotLoaded"===i})),(0,p.U)((()=>(0,v.Bl)({isVisible:!0}))))}function B(e,i){const o=e.pipe((0,n.l)(w.qs.type));return e.pipe((0,n.l)(k.o8.type),(0,s.j)((()=>(0,f.HO)(i.value)?(0,t.of)(void 0):o)),(0,u.b)((()=>{var e,i,o;null===(e=window)||void 0===e||null===(i=e.PokiSDK)||void 0===i||null===(o=i.stopVideoAd)||void 0===o||o.call(i),(0,b.aH)()})),(0,c.l)())}function Z(e,i){const o=e.pipe((0,n.l)(w.qs.type));return e.pipe((0,n.l)("@@router/LOCATION_CHANGE"),(0,s.j)((()=>(0,f.HO)(i.value)?(0,t.of)(void 0):o)),(0,d.h)((()=>window.location.toString().includes("#fullscreen"))),(0,u.b)((()=>{var e,i,o;null===(e=window)||void 0===e||null===(i=e.PokiSDK)||void 0===i||null===(o=i.stopVideoAd)||void 0===o||o.call(i)})),(0,c.l)())}}}]);