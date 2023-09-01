"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3389],{6926:(i,t,c)=>{c.r(t),c.d(t,{default:()=>A});var g=c(8661),e=c(8429),a=c(4593),n=c(6727),r=c(278),l=c(4135),s=c(9631),o=c(3316),m=c(4237),d=c(9778),u=c(5452),p=c(4927),h=c(9317),v=c(111),f=c(8656),y=c(7986),b=c(942),k=c(2255);const E=(0,n.ZP)({resolved:{},chunkName:()=>"app-components-Description",isReady(i){const t=this.resolve(i);return!0===this.resolved[t]&&!!c.m[t]},importAsync:()=>Promise.all([c.e(9674),c.e(9369)]).then(c.bind(c,3107)),requireAsync(i){const t=this.resolve(i);return this.resolved[t]=!1,this.importAsync(i).then((i=>(this.resolved[t]=!0,i)))},requireSync(i){const t=this.resolve(i);return c(t)},resolve(){return 3107}}),_=(0,n.ZP)({resolved:{},chunkName:()=>"app-components-contentTypes-GameUnavailable",isReady(i){const t=this.resolve(i);return!0===this.resolved[t]&&!!c.m[t]},importAsync:()=>Promise.all([c.e(8532),c.e(9235)]).then(c.bind(c,4447)),requireAsync(i){const t=this.resolve(i);return this.resolved[t]=!1,this.importAsync(i).then((i=>(this.resolved[t]=!0,i)))},requireSync(i){const t=this.resolve(i);return c(t)},resolve(){return 4447}}),x=(0,n.ZP)({resolved:{},chunkName:()=>"app-components-ExternallyHostedCommunication",isReady(i){const t=this.resolve(i);return!0===this.resolved[t]&&!!c.m[t]},importAsync:()=>c.e(9313).then(c.bind(c,8756)),requireAsync(i){const t=this.resolve(i);return this.resolved[t]=!1,this.importAsync(i).then((i=>(this.resolved[t]=!0,i)))},requireSync(i){const t=this.resolve(i);return c(t)},resolve(){return 8756}}),w="game",T=i=>{var t,c,e;let{hasMultiverse:a,hasTakeover:n,page:l,isMobile:s,localisations:o}=i;const{content:p}=l,h={id:p.game.id,image:p.game.image,developer:p.game.developer,title:p.game.title,slug:p.game.slug,unlisted:p.game.unlisted,mobile:p.game.mobile_available,externally_hosted:p.game.externally_hosted},v={details:h,file:s?p.game.mobile_file:p.game.file,categories:p.game.categories||[],rating:p.game.rating,showExplicitOrientationnMessage:p.game.explicit_orientation_message},f={body:(o.mobile_page_doesnt_exist_yet||"").replace("%title",p.game.title),id:p.game.id,image:p.game.image,title:p.game.title,store_urls:p.game.store_urls},y=a&&!n?[g.default.createElement(u.HV,{data:h})]:[],b=!s||s&&p.game.mobile_file?g.default.createElement(d.Z,{data:v,key:"GameContainer-".concat(p.game.id)}):g.default.createElement(_,{data:f,key:"GameUnavailable-".concat(p.game.id)}),E=(s?(0,k.Pi)(p.game.related_games):p.game.related_games).map(((i,t)=>{const c=a?"basic-game":"related";return g.default.createElement(u.V4,{key:"".concat(w,"-").concat(h.id,"-").concat(c,"-").concat(i.id),hasTakeover:n,hasMultiverse:a,idx:t,isMobile:s,data:i,type:"game",list:c,componentKey:w})})),T=null==p||null===(t=p.game)||void 0===t||null===(c=t.related_categories)||void 0===c?void 0:c.map(((i,t)=>g.default.createElement(m.default,{contentType:"basic-category",data:i,key:"c-".concat(i.id),type:"category",list:"basic-category",idx:t}))),A=null==p||null===(e=p.promotedCategories)||void 0===e?void 0:e.map(((i,t)=>g.default.createElement(m.default,{contentType:"basic-category",data:i,key:"c-".concat(i.id),type:"category",list:"basic-category",idx:t}))),C=s?[g.default.createElement(u.B3,null,g.default.createElement(x,{data:{gameId:p.game.id}}))]:[];return[...s?[g.default.createElement(u.Ww,{contentDetails:h,noThumb:!0})]:[],...C,g.default.createElement(u.qZ,{isMobile:s},b),...y,g.default.createElement(r.Z,{whenIdle:!0},E),g.default.createElement(r.Z,{whenVisible:!0},T,A)]};function A(){const{isMobile:i}=(0,g.useContext)(l.kn),t=(0,e.v9)((i=>(0,f.Zp)(i))),c=(0,e.v9)((i=>(0,f.Wj)(i))),n=(0,e.v9)((i=>(0,f.Q4)(i))),m=(0,e.v9)((i=>(0,f.GD)(i))),d=(0,e.v9)((i=>(0,v.B)(i))),k=(0,e.v9)((i=>(0,h.xU)(i))),_=(0,e.v9)((i=>y.Z.desktop_gp_728x90(i))),x=(0,e.v9)((i=>y.Z.desktop_gp_300x250(i))),w=(0,e.v9)((i=>y.Z.desktop_gp_160x600(i)));if("game"!==c&&"preview"!==c)return g.default.createElement(o.default,{forceLoadingState:!0});if(200!==n)return g.default.createElement(s.default,null);const A=(0,e.I0)(),C=!!k&&"object"==typeof k;(0,g.useEffect)((()=>{A((0,p.ZB)())}),[m,C]);const M=!i&&28933===t.content.game.id,Z=30067===t.content.game.id,q=!i&&!Z,P=(0,g.useMemo)((()=>T({hasMultiverse:M,hasTakeover:C,page:t,isMobile:i,localisations:d})),[m,C]);return g.default.createElement(g.default.Fragment,null,!!t.jsonLD&&g.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t.jsonLD)}}),g.default.createElement(a.q,null,t.meta.title&&g.default.createElement("title",null,t.meta.title),t.meta.description&&g.default.createElement("meta",{name:"description",content:t.meta.description}),g.default.createElement("link",{key:"canonical",rel:"canonical",href:t.meta.canonical}),(t.meta.alternates||[]).map((i=>{let{href:t,hrefLang:c}=i;return g.default.createElement("link",{key:c,rel:"alternate",href:t,hrefLang:c})})),t.og&&Object.entries(t.og).map((i=>{let[t,c]=i;return g.default.createElement("meta",{property:"og:".concat(t),content:c})})),t.twitter&&Object.entries(t.twitter).map((i=>{let[t,c]=i;return g.default.createElement("meta",{property:"twitter:".concat(t),content:c})}))),g.default.createElement(b.q,{isMobile:i,hasTakeover:C,hasMultiverse:M},P,q&&g.default.createElement(g.default.Fragment,null,g.default.createElement(u.$4,{data:_,key:"advertisement-desktop_gp_728x90"}),g.default.createElement(u.di,{data:x,key:"advertisement-desktop_gp_300x250"}),g.default.createElement(u.n3,{data:w,key:"advertisement-desktop_gp_160x600",isMobile:i}))),!!t.description&&g.default.createElement(r.Z,{whenVisible:!0},g.default.createElement(E,{data:t.description})))}},9778:(i,t,c)=>{c.d(t,{Z:()=>_});var g=c(5697),e=c.n(g),a=c(8661),n=c(8429),r=c(1893),l=c(6727),s=c(710),o=c(905),m=c(8855),d=c(6151),u=c(4135),p=c(3748),h=c(394);function v(){return v=Object.assign?Object.assign.bind():function(i){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&(i[g]=c[g])}return i},v.apply(this,arguments)}const f=(0,l.ZP)({resolved:{},chunkName:()=>"app-components-MobileNav",isReady(i){const t=this.resolve(i);return!0===this.resolved[t]&&!!c.m[t]},importAsync:()=>c.e(352).then(c.bind(c,9616)),requireAsync(i){const t=this.resolve(i);return this.resolved[t]=!1,this.importAsync(i).then((i=>(this.resolved[t]=!0,i)))},requireSync(i){const t=this.resolve(i);return c(t)},resolve(){return 9616}}),y=(0,l.ZP)({resolved:{},chunkName:()=>"app-components-PlayGameTile",isReady(i){const t=this.resolve(i);return!0===this.resolved[t]&&!!c.m[t]},importAsync:()=>c.e(8745).then(c.bind(c,4897)),requireAsync(i){const t=this.resolve(i);return this.resolved[t]=!1,this.importAsync(i).then((i=>(this.resolved[t]=!0,i)))},requireSync(i){const t=this.resolve(i);return c(t)},resolve(){return 4897}}),b=(0,l.ZP)({resolved:{},chunkName:()=>"app-components-GamePlayer",isReady(i){const t=this.resolve(i);return!0===this.resolved[t]&&!!c.m[t]},importAsync:()=>c.e(7165).then(c.bind(c,8164)),requireAsync(i){const t=this.resolve(i);return this.resolved[t]=!1,this.importAsync(i).then((i=>(this.resolved[t]=!0,i)))},requireSync(i){const t=this.resolve(i);return c(t)},resolve(){return 8164}}),k=(0,r.iv)(["position:fixed !important;z-index:999 !important;top:0 !important;left:0 !important;--width:100vw;min-height:var(--minHeight,100vh);background:#fff !important;@supports (min-height:-webkit-fill-available){--minHeight:-webkit-fill-available;--height:-webkit-fill-available;}@supports (height:100dvh){--minHeight:100dvh;--height:100dvh;}"]),E=r.ZP.div.withConfig({componentId:"sc-1t2vga5-0"})(["height:var(--height,100%);width:var(--width,100%);position:relative;"," ",""],(i=>i.isFullscreen&&k),(i=>i.triggerIpadRedraw&&(0,r.iv)(["display:flex;"])));function _(i){let{className:t,data:c,...g}=i;const e=(0,n.I0)(),[r,l]=(0,a.useState)(!1),{isMobile:s}=(0,a.useContext)(u.kn),k=(0,n.v9)(m.Eo),_=(0,n.v9)(d.At),x=s&&!k;return(0,a.useEffect)((()=>{_&&setTimeout((()=>{l(k)}),0)}),[k]),a.default.createElement(E,{id:"game-container",className:t,isFullscreen:k,triggerIpadRedraw:r},x&&a.default.createElement(y,{onClick:()=>{(0,p.A)({category:"game",action:"launch",options:{interaction:!0}}),e((0,o.Zx)({toggle:!0})),(0,h.Z)().push("".concat(window.location.pathname).concat(window.location.search,"#fullscreen"))},details:c.details}),!x&&a.default.createElement(a.default.Fragment,null,a.default.createElement(b,v({key:c.id,data:c},g)),s&&a.default.createElement(f,null)))}_.defaultProps={className:null}},942:(i,t,c)=>{c.d(t,{q:()=>n});var g=c(1893),e=c(3032),a=c(5452);const n=g.ZP.div.withConfig({componentId:"sc-1o65d6p-0"})([""," "," "," ",""],a.k6,(i=>i.hasTakeover&&(0,g.iv)(["&:before{display:none;}"])),(i=>i.isMobile&&(0,g.iv)(["","{grid-template-areas:'... ibx ibx' 'igc igc igc' 'igc igc igc' 'igc igc igc' 'egc egc egc' '... ... ...';}","{--gridTemplateColumns:5;grid-template-areas:'... igc igc igc ...' '... igc igc igc ...' '... igc igc igc ...' '... egc egc egc ...';}","{--gridTemplateColumns:6;grid-template-areas:'... ibx ibx ibx ... ...' 'igc igc igc igc ... ...' 'igc igc igc igc ... ...' 'igc igc igc igc ... ...' 'igc igc igc igc ... ...' '... egc egc egc ... ...';}","{--gridTemplateColumns:8;grid-template-areas:'... ibx ibx ibx ... ... ... ...' 'igc igc igc igc ... ... ... ...' 'igc igc igc igc ... ... ... ...' 'igc igc igc igc ... ... ... ...' 'igc igc igc igc ... ... ... ...' '... egc egc egc ... ... ... ...';}"],(0,e.w5)(1,5),(0,e.w5)(5,6),(0,e.w5)(6,8),(0,e.w5)(8,18))),(i=>!i.isMobile&&(0,g.iv)([""," ","{--gridTemplateColumns:7;grid-template-areas:'... igc igc igc igc igc igc' '... igc igc igc igc igc igc' '... igc igc igc igc igc igc' '... igc igc igc igc igc igc' 'a79 a79 a79 a79 a79 a79 a79';"," ","{display:none;}}","{--gridTemplateColumns:9;grid-template-areas:'... igc igc igc igc igc igc a16 a16' '... igc igc igc igc igc igc a16 a16' '... igc igc igc igc igc igc a16 a16' '... igc igc igc igc igc igc a16 a16' 'a79 a79 a79 a79 a79 a79 a79 a16 a16' '... ... ... ... ... ... ... a16 a16';"," ","}","{--gridTemplateColumns:11;grid-template-areas:'... igc igc igc igc igc igc igc igc a16 a16' '... igc igc igc igc igc igc igc igc a16 a16' '... igc igc igc igc igc igc igc igc a16 a16' '... igc igc igc igc igc igc igc igc a16 a16' '... igc igc igc igc igc igc igc igc a16 a16' '... ... a79 a79 a79 a79 a79 a79 a79 a16 a16';"," ","}","{--gridTemplateColumns:12;grid-template-areas:'... igc igc igc igc igc igc igc igc a32 a32 a32' '... igc igc igc igc igc igc igc igc a32 a32 a32' '... igc igc igc igc igc igc igc igc a32 a32 a32' '... igc igc igc igc igc igc igc igc ir0 ir0 ...' '... igc igc igc igc igc igc igc igc ir0 ir0 ...' '... ... a79 a79 a79 a79 a79 a79 a79 ir1 ir1 ...' '... ... ... ... ... ... ... ... ... ir1 ir1 ...';"," ","}","{--gridTemplateColumns:14;grid-template-areas:'... igc igc igc igc igc igc igc igc igc igc a32 a32 a32' '... igc igc igc igc igc igc igc igc igc igc a32 a32 a32' '... igc igc igc igc igc igc igc igc igc igc a32 a32 a32' '... igc igc igc igc igc igc igc igc igc igc ir0 ir0 ...' '... igc igc igc igc igc igc igc igc igc igc ir0 ir0 ...' '... igc igc igc igc igc igc igc igc igc igc ir1 ir1 ...' '... ... ... ... a79 a79 a79 a79 a79 a79 a79 ir1 ir1 ...';"," ","}","{--gridTemplateColumns:17;grid-template-areas:'... ... igc igc igc igc igc igc igc igc igc igc ir0 ir0 a32 a32 a32' 'a16 a16 igc igc igc igc igc igc igc igc igc igc ir0 ir0 a32 a32 a32' 'a16 a16 igc igc igc igc igc igc igc igc igc igc ir1 ir1 a32 a32 a32' 'a16 a16 igc igc igc igc igc igc igc igc igc igc ir1 ir1 ... ... ...' 'a16 a16 igc igc igc igc igc igc igc igc igc igc ... ... ... ... ...' 'a16 a16 igc igc igc igc igc igc igc igc igc igc ... ... ... ... ...' 'a16 a16 ... ... ... a79 a79 a79 a79 a79 a79 a79 ... ... ... ... ...';"," ","}"],i.hasTakeover&&"\n\t\t\tmargin-bottom: 113px;\n\n\t\t\t".concat(a.di,",\n\t\t\t").concat(a.n3," {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t"),(0,e.w5)(1,9),i.hasMultiverse&&"\n\t\t\t\tgrid-template-areas:\n\t\t\t\t'... igc igc igc igc igc igc'\n\t\t\t\t'... igc igc igc igc igc igc'\n\t\t\t\t'... igc igc igc igc igc igc'\n\t\t\t\t'... igc igc igc igc igc igc'\n\t\t\t\t'... ... ... ... ... ... ...'\n\t\t\t\t'a79 a79 a79 a79 a79 a79 a79'\n\t\t\t\t'... ... ... ... ... imc imc'\n\t\t\t\t'... ... ... ... ... imc imc'\n\t\t\t\t'... ... ... ... ... imc imc';\n\t\t\t",a.n3,(0,e.w5)(9,11),i.hasMultiverse&&"\n\t\t\t\tgrid-template-areas:\n\t\t\t\t'... igc igc igc igc igc igc imc imc'\n\t\t\t\t'... igc igc igc igc igc igc imc imc'\n\t\t\t\t'... igc igc igc igc igc igc imc imc'\n\t\t\t\t'... igc igc igc igc igc igc ... ...'\n\t\t\t\t'... ... ... ... ... ... ... ... ...'\n\t\t\t\t'a79 a79 a79 a79 a79 a79 a79 ... ...';\n\t\t\t\t".concat(a.n3," {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t"),i.hasTakeover&&"\n\t\t\t\t--gridTemplateColumns: 7;\n\t\t\t\tgrid-template-areas:\n\t\t\t\t\t'igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc'\n\t\t\t\t\t'a79 a79 a79 a79 a79 a79 a79'\n\t\t\t\t\t'... ... ... ... ... ... ...';\n\n\t\t\t\twidth: 754px;\n\t\t\t\tmargin-right: 0;\n\t\t\t\tmargin-left: 110px;\n\t\t\t",(0,e.w5)(11,12),i.hasMultiverse&&"\n\t\t\t\tgrid-template-areas:\n\t\t\t\t'... igc igc igc igc igc igc igc igc imc imc'\n\t\t\t\t'... igc igc igc igc igc igc igc igc imc imc'\n\t\t\t\t'... igc igc igc igc igc igc igc igc imc imc'\n\t\t\t\t'... igc igc igc igc igc igc igc igc ... ...'\n\t\t\t\t'... igc igc igc igc igc igc igc igc ... ...'\n\t\t\t\t'... ... a79 a79 a79 a79 a79 a79 a79 ... ...';\n\t\t\t\t".concat(a.n3," {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t"),i.hasTakeover&&"\n\t\t\t\t--gridTemplateColumns: 8;\n\t\t\t\tgrid-template-areas:\n\t\t\t\t\t'igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'... a79 a79 a79 a79 a79 a79 a79';\n\n\t\t\t\twidth: 864px;\n\t\t\t\tmargin-right: 0;\n\t\t\t\tmargin-left: 110px;\n\t\t\t",(0,e.w5)(12,14),i.hasMultiverse&&"\n\t\t\t\tgrid-template-areas:\n\t\t\t\t\t'... igc igc igc igc igc igc igc igc a32 a32 a32'\n\t\t\t\t\t'... igc igc igc igc igc igc igc igc a32 a32 a32'\n\t\t\t\t\t'... igc igc igc igc igc igc igc igc a32 a32 a32'\n\t\t\t\t\t'... igc igc igc igc igc igc igc igc imc imc ...'\n\t\t\t\t\t'... igc igc igc igc igc igc igc igc imc imc ...'\n\t\t\t\t\t'... ... a79 a79 a79 a79 a79 a79 a79 imc imc ...'\n\t\t\t\t\t'... ... ... ... ... ... ... ... ... ... ... ...';\n\t\t\t",i.hasTakeover&&"\n\t\t\t\t--gridTemplateColumns: 8;\n\t\t\t\tgrid-template-areas:\n\t\t\t\t\t'igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'... a79 a79 a79 a79 a79 a79 a79';\n\n\t\t\t\twidth: 864px;\n\t\t\t\tmargin-right: 0;\n\t\t\t\tmargin-left: 110px;\n\t\t\t",(0,e.w5)(14,17),i.hasMultiverse&&"\n\t\t\t\tgrid-template-areas:\n\t\t\t\t\t'... igc igc igc igc igc igc igc igc igc igc a32 a32 a32'\n\t\t\t\t\t'... igc igc igc igc igc igc igc igc igc igc a32 a32 a32'\n\t\t\t\t\t'... igc igc igc igc igc igc igc igc igc igc a32 a32 a32'\n\t\t\t\t\t'... igc igc igc igc igc igc igc igc igc igc imc imc ...'\n\t\t\t\t\t'... igc igc igc igc igc igc igc igc igc igc imc imc ...'\n\t\t\t\t\t'... igc igc igc igc igc igc igc igc igc igc imc imc ...'\n\t\t\t\t\t'... ... ... ... a79 a79 a79 a79 a79 a79 a79 ... ... ...';\n\t\t\t",i.hasTakeover&&"\n\t\t\t\t--gridTemplateColumns: 10;\n\t\t\t\tgrid-template-areas:\n\t\t\t\t\t'igc igc igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'... ... ... a79 a79 a79 a79 a79 a79 a79';\n\n\t\t\t\twidth: 1084px;\n\t\t\t\tmargin-right: 0;\n\t\t\t\tmargin-left: 110px;\n\t\t\t",(0,e.w5)(17,18),i.hasMultiverse&&"\n\t\t\t\tgrid-template-areas:\n\t\t\t\t\t'... ... igc igc igc igc igc igc igc igc igc igc imc imc a32 a32 a32'\n\t\t\t\t\t'a16 a16 igc igc igc igc igc igc igc igc igc igc imc imc a32 a32 a32'\n\t\t\t\t\t'a16 a16 igc igc igc igc igc igc igc igc igc igc imc imc a32 a32 a32'\n\t\t\t\t\t'a16 a16 igc igc igc igc igc igc igc igc igc igc ... ... ... ... ...'\n\t\t\t\t\t'a16 a16 igc igc igc igc igc igc igc igc igc igc ... ... ... ... ...'\n\t\t\t\t\t'a16 a16 igc igc igc igc igc igc igc igc igc igc ... ... ... ... ...'\n\t\t\t\t\t'a16 a16 ... ... ... a79 a79 a79 a79 a79 a79 a79 ... ... ... ... ...';\n\t\t\t",i.hasTakeover&&"\n\t\t\t\t--gridTemplateColumns: 10;\n\t\t\t\tgrid-template-areas:\n\t\t\t\t\t'igc igc igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'igc igc igc igc igc igc igc igc igc igc'\n\t\t\t\t\t'... ... ... a79 a79 a79 a79 a79 a79 a79';\n\n\n\t\t\t\twidth: 864px;\n\t\t\t\tmargin-right: 0;\n\t\t\t\tmargin-left: 330px;\n\t\t\t")))}}]);