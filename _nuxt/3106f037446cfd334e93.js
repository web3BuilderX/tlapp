(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1392:function(e,t,c){"use strict";c.r(t);c(59),c(52),c(39),c(37),c(48);var n=c(4),o=c(1342),r=c(1356),l=c(1337),d=c(19);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,c)}return t}var h={name:"LockHome",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(d.b)("common",["translationWord"])),watch:{clickedIndex:function(e){0==e?(this.$refs.createcontainer.style.display="block",this.$refs.mylockcontainer.style.display="none"):(this.$refs.mylockcontainer.style.display="block",this.$refs.createcontainer.style.display="none")}},components:{Service:o.a,MyLocks:r.a,CTSelectionTabs:l.a},data:function(){return{serviceIndex:-1,clickedIndex:-1,tabs:["Create Lock","My Locks"],icons:["lock-clock","lock-clock","lock-pattern","lock-clock"]}},mounted:function(){this.serviceIndex=0},methods:{processRoute:function(e){this.clickedIndex=e},clickService:function(e){0==e&&this.$router.push({path:"/lock/liquidity"}),1==e&&this.$router.push({path:"/lock/token"}),2==e&&this.$router.push({path:"/lock/vesting"}),3==e&&this.$router.push({path:"/lock/nft"})}},head:function(){return{title:"Secure Liquidity and Token Locking solution on DeFI",meta:[{hid:"description",name:"description",content:"Token and Liquidity Locker, lock and manage your liquidity or tokens for Ethereum & BSC & Polygon & Solana & TRON & Almost all EVM-compatible chains securely."}]}}},y=c(36),component=Object(y.a)(h,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"card-container"},[c("div",{staticClass:"content-container large"},[c("div",{staticClass:"tabs-container left lock-tabs"},[c("CTSelectionTabs",{staticClass:"large green",attrs:{click:e.processRoute,tabs:e.tabs,cTabIndex:e.serviceIndex}})],1),e._v(" "),c("div",{ref:"createcontainer",staticClass:"createcontainer"},[c("p",{staticClass:"has-text-white c-title margin-v"},[e._v("Our Service")]),e._v(" "),c("Service",{attrs:{click:e.clickService,showOneLine:"true"}})],1),e._v(" "),c("div",{ref:"mylockcontainer",staticClass:"mylock-container"},[c("p",{staticClass:"has-text-white c-title margin-v"},[e._v("My Locks")]),e._v(" "),c("MyLocks")],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);