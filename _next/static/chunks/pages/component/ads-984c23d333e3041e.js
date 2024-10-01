(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[901],{8045:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/ads",function(){return n(9014)}])},9014:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return d}});var a=n(5893),o=n(2673),s=n(3393),i=n(2702);n(9128);var r=n(2643);let d=[{depth:2,value:"IMA SDK",id:"ima-sdk"},{depth:3,value:"Usage",id:"usage"},{depth:3,value:"Events",id:"events"},{depth:3,value:"Localization",id:"localization"}];function _createMdxContent(e){let t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",h3:"h3",pre:"pre",span:"span",blockquote:"blockquote"},(0,r.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{children:"Ads"}),"\n",(0,a.jsx)(t.h2,{id:"ima-sdk",children:"IMA SDK"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"react-native-video"})," has built-in support for Google IMA SDK for Android and iOS. To enable it please refer to ",(0,a.jsx)(t.a,{href:"/installation",children:"installation section"})]}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:["To use AVOD, you need to pass ",(0,a.jsx)(t.code,{children:"adTagUrl"})," prop to ",(0,a.jsx)(t.code,{children:"Video"})," component. ",(0,a.jsx)(t.code,{children:"adTagUrl"})," is a VAST uri."]}),"\n",(0,a.jsx)(t.p,{children:"Example:"}),"\n",(0,a.jsx)(t.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(t.code,{"data-language":"text","data-theme":"default",children:(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:'adTagUrl="https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpremidpostoptimizedpodbumper&ciu_szs=300x250&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&cmsid=496&vid=short_onecue&correlator="'})})})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["NOTE: Video ads cannot start when you are using the PIP on iOS (more info available at ",(0,a.jsx)(t.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/ios/client-side/picture_in_picture?hl=en#starting_ads",children:"Google IMA SDK Docs"}),"). If you are using custom controls, you must hide your PIP button when you receive the ",(0,a.jsx)(t.code,{children:"STARTED"})," event from ",(0,a.jsx)(t.code,{children:"onReceiveAdEvent"})," and show it again when you receive the ",(0,a.jsx)(t.code,{children:"ALL_ADS_COMPLETED"})," event."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,a.jsxs)(t.p,{children:["To receive events from IMA SDK, you need to pass ",(0,a.jsx)(t.code,{children:"onReceiveAdEvent"})," prop to ",(0,a.jsx)(t.code,{children:"Video"})," component. List of events, you can find ",(0,a.jsx)(t.a,{href:"https://github.com/TheWidlarzGroup/react-native-video/blob/master/src/types/Ads.ts",children:"here"})]}),"\n",(0,a.jsx)(t.p,{children:"Example:"}),"\n",(0,a.jsx)(t.pre,{"data-language":"jsx","data-theme":"default",children:(0,a.jsxs)(t.code,{"data-language":"jsx","data-theme":"default",children:[(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"onReceiveAdEvent"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{event "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(event)}"})]}),"\n",(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})})]})}),"\n",(0,a.jsx)(t.h3,{id:"localization",children:"Localization"}),"\n",(0,a.jsxs)(t.p,{children:["To change the language of the IMA SDK, you need to pass ",(0,a.jsx)(t.code,{children:"adLanguage"})," prop to ",(0,a.jsx)(t.code,{children:"Video"})," component. List of supported languages, you can find ",(0,a.jsx)(t.a,{href:"https://developers.google.com/interactive-media-ads/docs/sdks/android/client-side/localization#locale-codes",children:"here"})]}),"\n",(0,a.jsxs)(t.p,{children:["By default, ios will use system language and android will use ",(0,a.jsx)(t.code,{children:"en"})]}),"\n",(0,a.jsx)(t.p,{children:"Example:"}),"\n",(0,a.jsx)(t.pre,{"data-language":"jsx","data-theme":"default",children:(0,a.jsxs)(t.code,{"data-language":"jsx","data-theme":"default",children:[(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"adLanguage"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"fr"'})]}),"\n",(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})})]})})]})}let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.a)(),e.components);return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/component/ads.md",route:"/component/ads",timestamp:1727788293e3,pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",component:"API",other:"Other",separator_versions:{type:"separator",title:""},updating:"Updating",changelog:{title:"Changelog",newWindow:!0,href:"https://github.com/TheWidlarzGroup/react-native-video/blob/master/CHANGELOG.md"},separator_community:{type:"separator",title:""},projects:"Useful projects"}},{kind:"Folder",name:"component",route:"/component",children:[{kind:"Meta",data:{props:"Properties",drm:"DRM",ads:"Ads",events:"Events",methods:"Methods"}},{kind:"MdxPage",name:"ads",route:"/component/ads"},{kind:"MdxPage",name:"drm",route:"/component/drm"},{kind:"MdxPage",name:"events",route:"/component/events"},{kind:"MdxPage",name:"methods",route:"/component/methods"},{kind:"MdxPage",name:"props",route:"/component/props"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"other",route:"/other",children:[{kind:"Meta",data:{caching:"Caching",misc:"Misc",debug:"Debugging","new-arch":"New Architecture",expo:"Expo",plugin:"Plugin (experimental)"}},{kind:"MdxPage",name:"caching",route:"/other/caching"},{kind:"MdxPage",name:"debug",route:"/other/debug"},{kind:"MdxPage",name:"expo",route:"/other/expo"},{kind:"MdxPage",name:"misc",route:"/other/misc"},{kind:"MdxPage",name:"new-arch",route:"/other/new-arch"},{kind:"MdxPage",name:"plugin",route:"/other/plugin"}]},{kind:"MdxPage",name:"projects",route:"/projects"},{kind:"MdxPage",name:"updating",route:"/updating"}],flexsearch:{codeblocks:!0},title:"Ads",headings:d},pageNextRoute:"/component/ads",nextraLayout:s.ZP,themeConfig:i.Z};t.default=(0,o.j)(c)},2702:function(e,t,n){"use strict";var a=n(5893);n(7294),t.Z={head:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"language",content:"en"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,a.jsx)("meta",{name:"description",content:"Video component for React Native"}),(0,a.jsx)("meta",{name:"og:title",content:"React Native Video"}),(0,a.jsx)("meta",{name:"og:description",content:"A Video component for React Native"}),(0,a.jsx)("meta",{name:"og:image",content:"https://thewidlarzgroup.github.io/react-native-video/thumbnail.jpg"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:"React Native Video"}),(0,a.jsx)("meta",{name:"twitter:description",content:"A Video component for React Native"}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://thewidlarzgroup.github.io/react-native-video/thumbnail.jpg"}),(0,a.jsx)("meta",{name:"twitter:image:alt",content:"React Native Video"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap",rel:"stylesheet"})]}),logo:(0,a.jsxs)("span",{children:["\uD83C\uDFAC ",(0,a.jsx)("strong",{children:"Video component"})," for React Native"]}),faviconGlyph:"\uD83C\uDFAC",project:{link:"https://github.com/TheWidlarzGroup/react-native-video"},docsRepositoryBase:"https://github.com/TheWidlarzGroup/react-native-video/tree/master/docs/",footer:{text:(0,a.jsxs)("span",{children:["Built with ❤️ by ",(0,a.jsx)("strong",{children:"React Native Community"})]})},useNextSeoProps:()=>({titleTemplate:"%s – Video"})}},5789:function(){}},function(e){e.O(0,[774,890,888,179],function(){return e(e.s=8045)}),_N_E=e.O()}]);