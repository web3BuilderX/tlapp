(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1379:function(e,t,n){"use strict";n.r(t);n(57),n(48),n(40),n(37),n(45);var r=n(3),o=n(1332),c=n(18);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var f={name:"LockHome",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)("common",["translationWord"]),{offers:function(){return[this.translationWord.feature.f1,this.translationWord.feature.f2,this.translationWord.feature.f4]}}),components:{LockService:o.a},data:function(){return{serviceIndex:-1,icons:["/dai.svg","/usdt.svg","/usdc.svg"]}},mounted:function(){this.serviceIndex=1},methods:{},head:function(){return{title:"Secure Token Vesting solution",meta:[{hid:"description",name:"description",content:"Token Locker, lock and manage your team tokens for Ethereum & BSC & Polygon & Solana & TRON & Almost all EVM-compatible chains securely."}]}}},d=n(33),component=Object(d.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-container"},[t("div",{staticClass:"content-container"},[t("LockService",{attrs:{serviceIndex:this.serviceIndex,title:this.translationWord.vestTokenTitle,offers:this.offers,icons:this.icons}})],1)])}),[],!1,null,null,null);t.default=component.exports}}]);