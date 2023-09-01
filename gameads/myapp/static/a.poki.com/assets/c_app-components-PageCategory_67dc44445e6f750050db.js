"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[5465],{6700:(e,i,t)=>{t.r(i),t.d(i,{default:()=>M});var b=t(8661),n=t(4593),r=t(8429),a=t(6727),l=t(1893),o=t(278),s=t(4135),c=t(4927),m=t(8656),d=t(111),u=t(5452),p=t(3647),h=t(2279),y=t(2255),g=t(9761);const v=(0,a.ZP)({resolved:{},chunkName:()=>"app-components-PageError",isReady(e){const i=this.resolve(e);return!0===this.resolved[i]&&!!t.m[i]},importAsync:()=>Promise.all([t.e(4593),t.e(8039)]).then(t.bind(t,9631)),requireAsync(e){const i=this.resolve(e);return this.resolved[i]=!1,this.importAsync(e).then((e=>(this.resolved[i]=!0,e)))},requireSync(e){const i=this.resolve(e);return t(i)},resolve(){return 9631}}),f=(0,a.ZP)({resolved:{},chunkName:()=>"app-components-Description",isReady(e){const i=this.resolve(e);return!0===this.resolved[i]&&!!t.m[i]},importAsync:()=>Promise.all([t.e(9674),t.e(9369)]).then(t.bind(t,3107)),requireAsync(e){const i=this.resolve(e);return this.resolved[i]=!1,this.importAsync(e).then((e=>(this.resolved[i]=!0,e)))},requireSync(e){const i=this.resolve(e);return t(i)},resolve(){return 3107}}),E=(0,a.ZP)({resolved:{},chunkName:()=>"app-components-SummaryTile",isReady(e){const i=this.resolve(e);return!0===this.resolved[i]&&!!t.m[i]},importAsync:()=>Promise.resolve().then(t.bind(t,4237)),requireAsync(e){const i=this.resolve(e);return this.resolved[i]=!1,this.importAsync(e).then((e=>(this.resolved[i]=!0,e)))},requireSync(e){const i=this.resolve(e);return t(i)},resolve(){return 4237}}),x=(0,a.ZP)({resolved:{},chunkName:()=>"app-components-PageLoader",isReady(e){const i=this.resolve(e);return!0===this.resolved[i]&&!!t.m[i]},importAsync:()=>Promise.resolve().then(t.bind(t,3316)),requireAsync(e){const i=this.resolve(e);return this.resolved[i]=!1,this.importAsync(e).then((e=>(this.resolved[i]=!0,e)))},requireSync(e){const i=this.resolve(e);return t(i)},resolve(){return 3316}}),A=(0,a.ZP)({resolved:{},chunkName:()=>"app-components-Link",isReady(e){const i=this.resolve(e);return!0===this.resolved[i]&&!!t.m[i]},importAsync:()=>Promise.resolve().then(t.bind(t,8166)),requireAsync(e){const i=this.resolve(e);return this.resolved[i]=!1,this.importAsync(e).then((e=>(this.resolved[i]=!0,e)))},requireSync(e){const i=this.resolve(e);return t(i)},resolve(){return 8166}}),C=(0,a.ZP)({resolved:{},chunkName:()=>"app-components-opengraph-OGPageCategory",isReady(e){const i=this.resolve(e);return!0===this.resolved[i]&&!!t.m[i]},importAsync:()=>Promise.all([t.e(4552),t.e(8351)]).then(t.bind(t,210)),requireAsync(e){const i=this.resolve(e);return this.resolved[i]=!1,this.importAsync(e).then((e=>(this.resolved[i]=!0,e)))},requireSync(e){const i=this.resolve(e);return t(i)},resolve(){return 210}}),k=l.ZP.h3.withConfig({componentId:"sc-16uwngq-0"})(["font-size:19px;font-family:inherit;margin:1em 0;"]),P=l.ZP.ol.withConfig({componentId:"sc-16uwngq-1"})(["a{text-decoration:underline;color:var(--blue-3);&:hover{color:var(--blue-5);}}"]),w="category",_=e=>{let{title:i="",games:t=[],localisations:n}=e;const r=t.slice(0,10),a=t.filter((e=>e.mobile)).slice(0,5),l=b.default.createElement(P,null,r.map((e=>b.default.createElement("li",{key:"schema-desktop-".concat(e.id)},b.default.createElement(A,{to:e.url},e.title))))),o=b.default.createElement(P,null,a.map((e=>b.default.createElement("li",{key:"schema-mobile-".concat(e.id)},b.default.createElement(A,{to:e.url},e.title))))),s=r.length?n.category_schema.replace("%CATEGORY_NAME%",i):void 0,c=a.length?n.category_schema_mobile.replace("%CATEGORY_NAME%",i):void 0;return[b.default.createElement(k,null,s),l,b.default.createElement(k,{as:"h4"},c),o]},L=e=>{let{page:i,isMobile:t,localisations:n}=e;const{content:r}=i,{category:a}=(0,h.kI)(r),{id:l}=a;let s=9;const c=t?(0,y.Pi)(a.games):a.games,m=c.map((e=>e.id)),d=r.mostPlayed.filter((e=>!m.includes(e.id))),p=r.newGames.filter((e=>!m.includes(e.id))),g=_({title:a.title,games:c,localisations:n}),v=c.splice(0,10).map(((e,i)=>b.default.createElement(u.AD,{idx:i,lazy:!1,isMobile:t,data:e,key:"g-".concat(l,"-").concat(e.id),list:"basic-game",componentKey:w}))),f=c.slice(0,20).map((e=>{s+=1;return b.default.createElement(u.AD,{idx:s,isMobile:t,data:e,key:"g-".concat(l,"-").concat(e.id),type:"game",list:"basic-game",componentKey:w})})),x=a.related_categories.slice(0,4).map((e=>{s+=1;const i="basic-category";return b.default.createElement(E,{contentType:i,data:e,key:"c-".concat(e.id),type:"category",list:i,idx:s,componentKey:w,isMobile:t})})),A=t?b.default.createElement(o.Z,{whenVisible:!0},x):b.default.createElement(o.Z,{on:"mouseover"},x),C=c.slice(20).map((e=>{s+=1;return b.default.createElement(u.AD,{idx:s,data:e,key:"g-".concat(e.id),type:"game",list:"basic-game",componentKey:w,isMobile:t})})),k=[(t?(0,y.Pi)(d):d).map((e=>(s+=1,b.default.createElement(E,{data:e,key:"g-".concat(e.id),type:"game",list:"most-played",idx:s,componentKey:w})))),(t?(0,y.Pi)(p):p).map((e=>(s+=1,b.default.createElement(E,{data:e,key:"g-".concat(e.id),type:"game",list:"new",idx:s,componentKey:w})))),r.promotedCategories.map((e=>(s+=1,b.default.createElement(E,{data:e,key:"g-".concat(e.id),contentType:"basic-category",type:"category",list:"category",idx:s,componentKey:w})))),a.related_categories.slice(4).map((e=>{s+=1;return b.default.createElement(E,{contentType:"basic-category",data:e,key:"c-".concat(e.id),type:"category",list:"basic-category",idx:s,componentKey:w})}))],P=t?b.default.createElement(o.Z,{whenVisible:!0},k):b.default.createElement(o.Z,{on:"mouseover"},k);return{pageContent:{topContent:[b.default.createElement(u.BJ,{isMobile:t,contentDetails:{title:a.title}}),b.default.createElement(u.NG,null,v.map((e=>b.default.createElement("li",null,e)))),A,f,C],restContent:P},schemaList:g}};function M(){var e;if((0,r.v9)(g.o2).includes("opengraph=true"))return b.default.createElement(C,null);const i=(0,r.I0)(),{isMobile:t}=(0,b.useContext)(s.kn);if("category"!==(0,r.v9)((e=>(0,m.Wj)(e))))return b.default.createElement(x,{forceLoadingState:!0});const a=(0,r.v9)((e=>(0,m.Zp)(e)));if(200!==(null==a||null===(e=a.content)||void 0===e?void 0:e.statusCode))return b.default.createElement(v,null);const l=(0,r.v9)((e=>(0,m.GD)(e))),u=(0,r.v9)((e=>(0,d.B)(e)));(0,b.useEffect)((()=>{i((0,c.ZB)())}),[l]);const h=(0,b.useMemo)((()=>L({page:a,isMobile:t,localisations:u})),[l]),{pageContent:y,schemaList:E}=h;return b.default.createElement(b.default.Fragment,null,!!a.jsonLD&&b.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a.jsonLD)}}),b.default.createElement(n.q,null,a.meta.title&&b.default.createElement("title",null,a.meta.title),a.meta.description&&b.default.createElement("meta",{name:"description",content:a.meta.description}),b.default.createElement("link",{key:"canonical",rel:"canonical",href:a.meta.canonical}),(a.meta.alternates||[]).map((e=>{let{href:i,hrefLang:t}=e;return b.default.createElement("link",{key:t,rel:"alternate",href:i,hrefLang:t})})),a.og&&Object.entries(a.og).map((e=>{let[i,t]=e;return b.default.createElement("meta",{property:"og:".concat(i),content:t})})),a.twitter&&Object.entries(a.twitter).map((e=>{let[i,t]=e;return b.default.createElement("meta",{property:"twitter:".concat(i),content:t})}))),b.default.createElement(p.P,{isMobile:t},y.topContent,t&&y.restContent),!t&&b.default.createElement(p.P,{isMobile:t},y.restContent),!!a.description&&b.default.createElement(o.Z,{whenVisible:!0},b.default.createElement(f,{data:a.description},E)))}},3647:(e,i,t)=>{t.d(i,{P:()=>a});var b=t(1893),n=t(3032),r=t(5452);const a=b.ZP.div.withConfig({componentId:"sc-1bi8huj-0"})([""," "," "," ",""],r.k6,(e=>e.isMobile&&(0,b.iv)(["","{grid-template-areas:'... ibx ibx' 'ib0 ib0 ...' 'ib0 ib0 ...' '... ... ...' '... ib1 ib1' '... ib1 ib1';}","{--gridTemplateColumns:5;grid-template-areas:'... ibx ibx ib0 ib0' '... ... ... ib0 ib0' 'ib1 ib1 ... ... ...' 'ib1 ib1 ... ... ...';}","{--gridTemplateColumns:6;grid-template-areas:'... ibx ibx ibx ... ...' 'ib0 ib0 ... ... ... ...' 'ib0 ib0 ... ... ... ...' '... ... ... ... ... ...' '... ib1 ib1 ... ... ...' '... ib1 ib1 ... ... ...';}","{--gridTemplateColumns:8;grid-template-areas:'... ibx ibx ibx ... ... ... ...' 'ib0 ib0 ... ... ... ... ... ...' 'ib0 ib0 ... ... ... ... ... ...' '... ... ... ... ... ... ... ...' '... ib1 ib1 ... ... ... ... ...' '... ib1 ib1 ... ... ... ... ...';}"],(0,n.w5)(1,5),(0,n.w5)(5,6),(0,n.w5)(6,8),(0,n.w5)(8,18))),(e=>!e.isMobile&&(0,b.iv)(["& + &{&:before{display:none}margin:110px 0 0;}","{--gridTemplateColumns:7;grid-template-areas:'... ibx ibx ibx ... ... ...' 'ib0 ib0 ib1 ib1 ib2 ib2 ...' 'ib0 ib0 ib1 ib1 ib2 ib2 ...' 'ib3 ib3 ib4 ib4 ib5 ib5 ...' 'ib3 ib3 ib4 ib4 ib5 ib5 ...';}","{--gridTemplateColumns:9;grid-template-areas:'... ibx ibx ibx ... ... ... ... ...' 'ib0 ib0 ib1 ib1 ib2 ib2 ib3 ib3 ...' 'ib0 ib0 ib1 ib1 ib2 ib2 ib3 ib3 ...' 'ib4 ib4 ib5 ib5 ib6 ib6 ... ... ...' 'ib4 ib4 ib5 ib5 ib6 ib6 ... ... ...' '... ... ... ... ... ... ... ... ...';}","{--gridTemplateColumns:11;grid-template-areas:'... ibx ibx ibx ib9 ib10 ib11 ib12 ... ... ...' 'ib0 ib0 ib1 ib1 ib2 ib2  ib3  ib3  ib4 ib4 ...' 'ib0 ib0 ib1 ib1 ib2 ib2  ib3  ib3  ib4 ib4 ...' 'ib5 ib5 ib6 ib6 ib7 ib7  ib8  ib8  ... ... ...' 'ib5 ib5 ib6 ib6 ib7 ib7  ib8  ib8  ... ... ...';}","{--gridTemplateColumns:12;grid-template-areas:'... ibx ibx ibx ibx ib10 ib11 ib12 ib13 ... ... ...' 'ib0 ib0 ib1 ib1 ib2 ib2  ib3  ib3  ib4  ib4 ... ...' 'ib0 ib0 ib1 ib1 ib2 ib2  ib3  ib3  ib4  ib4 ... ...' 'ib5 ib5 ib6 ib6 ib7 ib7  ib8  ib8  ib9  ib9 ... ...' 'ib5 ib5 ib6 ib6 ib7 ib7  ib8  ib8  ib9  ib9 ... ...';}","{--gridTemplateColumns:14;grid-template-areas:'... ibx ibx ibx ibx ib12 ib13 ib14 ib15 ib16 ib17 ...  ... ...' 'ib0 ib0 ib1 ib1 ib2 ib2  ib3  ib3  ib4  ib4  ib5  ib5  ... ...' 'ib0 ib0 ib1 ib1 ib2 ib2  ib3  ib3  ib4  ib4  ib5  ib5  ... ...' 'ib6 ib6 ib7 ib7 ib8 ib8  ib9  ib9  ib10 ib10 ib11 ib11 ... ...' 'ib6 ib6 ib7 ib7 ib8 ib8  ib9  ib9  ib10 ib10 ib11 ib11 ... ...';}","{--gridTemplateColumns:17;grid-template-areas:'... ... ibx ibx ibx ibx ib15 ib16 ib17  ...  ...  ...  ...  ...  ...  ...  ...' 'ib0 ib0 ib1 ib1 ib2 ib2 ib3  ib3  ib4  ib4  ib5  ib5  ib6  ib6  ib13 ib13 ...' 'ib0 ib0 ib1 ib1 ib2 ib2 ib3  ib3  ib4  ib4  ib5  ib5  ib6  ib6  ib13 ib13 ...' 'ib7 ib7 ib8 ib8 ib9 ib9 ib10 ib10 ib11 ib11 ib12 ib12 ib14 ib14 ...  ...  ...' 'ib7 ib7 ib8 ib8 ib9 ib9 ib10 ib10 ib11 ib11 ib12 ib12 ib14 ib14 ...  ...  ...';}"],(0,n.w5)(1,9),(0,n.w5)(9,11),(0,n.w5)(11,12),(0,n.w5)(12,14),(0,n.w5)(14,17),(0,n.w5)(17,18))),(e=>e.secondGrid&&(0,b.iv)(["grid-template-areas:none;"])))},2279:(e,i,t)=>{t.d(i,{kI:()=>b});t(9674);function b(e){if(null===e||"object"!=typeof e)return e;const i=e.constructor();for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(e.isActiveClone=null,i[t]=b(e[t]),delete e.isActiveClone);return i}}}]);