"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[1804],{7655:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var o=n(5697),i=n.n(o),r=n(8661),s=n(8429),u=n(2915),c=n(6727),a=n(8389),l=n(5322),d=n(111),v=n(65),_=n(978);const h=(0,c.ZP)({resolved:{},chunkName:()=>"app-components-GameInfoButton",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>n.e(493).then(n.bind(n,8165)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return 8165}});function m(e){let{gameId:t,rating:o}=e;const i=(0,s.I0)(),c=(0,s.v9)(l.eP),m=(0,s.v9)(d.B),f=(0,s.v9)((e=>(0,l.i5)(e,t))),[g,p]=(0,r.useState)(0),[b,A]=(0,r.useState)(!1),[D,E]=(0,r.useState)(!1);if(null==o||!o.rating)return null;(0,r.useEffect)((()=>{0===f?(A(!1),E(!1)):1===f?(A(!0),E(!1)):(A(!1),E(!0))}),[f]);const x=async(e,o)=>{if(!c){i((0,a.m3)());const e=await Promise.all([n.e(7631),n.e(6086)]).then(n.bind(n,6086));_.G.next((0,u.l)(...Object.values(e)))}(0,v.u)(),Date.now()<g||(f===e&&(e=0),i((0,a.Ns)({gameId:t,direction:e,source:o})),p({noVoteBefore:Date.now()+500}))},k=e=>e?e>1e6?"".concat((e/1e6).toFixed(1),"M"):e>1e3?"".concat((e/1e3).toFixed(1),"K"):e:0,w=o.up_count?k(o.up_count+(b?1:0)):"",y=o.down_count?k(o.down_count+(D?1:0)):"";return r.default.createElement(r.default.Fragment,null,r.default.createElement(h,{iconName:"thumbsUp",text:w,hoverText:b?m.remove_vote:m.i_like_it,onClick:()=>x(1,"thumbsUp"),isHighlighted:b}),r.default.createElement(h,{iconName:"thumbsUp",text:y,hoverText:D?m.remove_vote:m.i_dont_like_it,onClick:()=>x(-1,"thumbsDown"),isHighlighted:D,inverted:!0}))}},5322:(e,t,n)=>{function o(e,t){return e.ratings.userVotes[t]||0}function i(e,t){return e.ratings.previousUserVotes[t]||0}function r(e,t){const{userVotes:n,feedbackGiven:o}=e.ratings;return 0!==n[t]&&void 0!==o[t]&&!o[t]}function s(e){return e.ratings.voteEpicInitilized}n.d(t,{bF:()=>i,eP:()=>s,i5:()=>o,jG:()=>r})}}]);