(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1333:function(e,t,r){e.exports=r(740)},344:function(e,t,r){"use strict";r.r(t),t.default=function(e){}},345:function(e,t,r){"use strict";r.r(t);r(92),r(129),r(44);var n=r(1);t.default=function(e){var t=e.app,r=e.redirect,o=e.store;t.router.beforeEach((function(e,t,r){r()})),t.router.afterEach(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(n,c){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=c.name){e.next=14;break}if(console.info("to.name",n.name),console.info("to.path",n.path),"vip"!=n.name&&"tutorial"!=n.name&&"referral"!=n.name&&"revoke"!=n.name&&"refund"!=n.name&&"delegator"!=n.name&&"blockMultitabs"!=n.name&&"checkBulksend"!=n.name&&"faq"!=n.name&&"profile"!=n.name&&"myLocks"!=n.name&&"lock"!=n.name&&"lock-token"!=n.name&&"lock-liquidity"!=n.name&&"lock-vesting"!=n.name&&"lock-nft"!=n.name){e.next=10;break}return l=(l=n.path).replace(/\/$/,""),e.next=8,o.dispatch("common/updateCurrentRouter",{currentRouter:l});case 8:e.next=12;break;case 10:if("index"==n.name||""==n.name||"/"==n.name){e.next=12;break}return e.abrupt("return",r("/"));case 12:e.next=15;break;case 14:t.$bus.$emit("routeChanged",n.path);case 15:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}())}},733:function(e,t,r){"use strict";r(59),r(52),r(39),r(37),r(48),r(129),r(44);var n=r(1),o=r(4),c=r(19),l=r(734),h=r(735),m=r(731);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f,k,v,w,x={computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.c)("metamask",["walletState","providerName"]),{step:{get:function(){return this.$store.state.common.step},set:function(e){this.$store.dispatch("common/updateStep",{step:e})}},currentRouter:{get:function(){return this.$store.state.common.currentRouter},set:function(e){this.$store.dispatch("common/updateCurrentRouter",{currentRouter:e})}}}),mounted:function(){var e=this;window.onload=function(){e.connectWeb3();var t=e.checkIsMobile();e.redirectRouter(),t||e.checkMultipleTabs(),e.checkReferralAddress()},window.onbeforeunload=function(){},$nuxt.$bus.$on("walletChanged",(function(t){var r=t.providerName,n=t.netId,o=t.walletName;e.connectToWallet(r,n,o)}))},created:function(){this.$nextTick(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))))},data:function(){return{showModal:!1}},methods:{closeOverlay:function(){$nuxt.$bus.$emit("closeOverlay",!0)},checkIsMobile:function(){if(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)){this.step=0;return this.$store.dispatch("common/updateIsMobile",{isMobile:!0}),!0}return!1},redirectRouter:function(){var e=this;"/vip"!=this.currentRouter&&"/tutorial"!=this.currentRouter&&"/checkBulksend"!=this.currentRouter&&"/faq"!=this.currentRouter&&"/blockMultitabs"!=this.currentRouter&&"/referral"!=this.currentRouter&&"/revoke"!=this.currentRouter&&"/refund"!=this.currentRouter&&"/delegator"!=this.currentRouter&&"/myLocks"!=this.currentRouter&&"/lock"!=this.currentRouter&&"/lock/token"!=this.currentRouter&&"/lock/liquidity"!=this.currentRouter&&"/lock/vesting"!=this.currentRouter&&"/lock/nft"!=this.currentRouter||setTimeout((function(){$nuxt.$router.push({path:e.currentRouter}),$nuxt.$bus.$emit("routeChanged",e.currentRouter),e.currentRouter=null}),0)},checkMultipleTabs:(w=Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"tutorial"!=$nuxt.$route.name&&"checkBulksend"!=$nuxt.$route.name&&"faq"!=$nuxt.$route.name){e.next=3;break}return e.abrupt("return");case 3:localStorage.openPages=Date.now(),t=function(e){"openPages"==e.key&&"blockMultitabs"!=$nuxt.$route.name&&(localStorage.pageOpened=Date.now()),"pageOpened"==e.key&&$nuxt.$router.push({path:"/blockMultitabs"})},window.addEventListener("storage",t,!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.info(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),function(){return w.apply(this,arguments)}),checkReferralAddress:(v=Object(n.a)(regeneratorRuntime.mark((function e(){var address,t,r,source;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,address=this.$route.query.referrer,t=!0,r=this.checkIsMobile(),source=this.$route.query.utm_source,r||null==source||null==source||"imtoken"!=source||(t=!1),!t){e.next=15;break}return e.next=9,this.$store.dispatch("common/checkAddressIsValid",{address:address});case 9:if(!e.sent){e.next=15;break}return e.next=13,this.$store.dispatch("common/checkTheAddressIsContract",{address:address});case 13:e.sent||(console.info("referrer",address),this.$store.dispatch("bulksender/saveReferralAddress",{address:address}));case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.info(e.t0);case 20:case"end":return e.stop()}}),e,this,[[0,17]])}))),function(){return v.apply(this,arguments)}),connectWeb3:(k=Object(n.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("common/getLastUsedProvider");case 2:if(""!=(t=e.sent)&&null!=t&&null!=t||(t="Metamask"),"Metamask"!=t){e.next=10;break}return this.connectToWallet(t),e.next=8,this.$store.dispatch("common/getLastUsedWalletName");case 8:r=e.sent,this.$store.dispatch("metamask/setWalletName",{walletName:r});case 10:case"end":return e.stop()}}),e,this)}))),function(){return k.apply(this,arguments)}),connectToWallet:(f=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="mainnet",null==r&&(r=1),null==n&&(n=""),e.prev=3,"walletConnect"!=t||"walletConnect"!=this.providerName){e.next=7;break}return e.next=7,this.$store.dispatch("metamask/closeProvider",{providerName:t});case 7:e.next=11;break;case 9:e.prev=9,e.t0=e.catch(3);case 11:return e.prev=11,e.next=14,this.$store.dispatch("metamask/askPermission",{providerName:t,networkName:o,prepareNetId:r,walletName:n});case 14:e.sent,this.$store.dispatch("metamask/fetchGasPrice",{}),e.next=20;break;case 18:e.prev=18,e.t1=e.catch(11);case 20:case"end":return e.stop()}}),e,this,[[3,9],[11,18]])}))),function(e,t,r){return f.apply(this,arguments)})},name:"HomeIndex",components:{Header:l.a,Footer:h.a,HeaderView:m.a}},$=r(36),component=Object($.a)(x,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("section",{staticClass:"overlay-view"},[t("a",{on:{click:this.closeOverlay}},[t("b-icon",{staticClass:"overlay-close",attrs:{icon:"close-circle",type:"is-success"}})],1)]),this._v(" "),t("section",{staticClass:"rootContainer"},[t("div",{staticClass:"headerContainer"},[t("HeaderView")],1),this._v(" "),t("div",{staticClass:"mainContainer"},[t("nuxt")],1),this._v(" "),t("div",{staticClass:"_footerContainer"},[t("Footer")],1)]),this._v(" "),t("script",{attrs:{type:"module"}},[this._v("\n    import { WalletConnectModalSign } from 'https://unpkg.com/@walletconnect/modal-sign-html@2.5.4'\n    window.walletConnectModalSignForBulksender3 = WalletConnectModalSign\n  ")])])}),[],!1,null,null,null);t.a=component.exports}}]);