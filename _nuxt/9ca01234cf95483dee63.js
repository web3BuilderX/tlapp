(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1337:function(e,t,n){"use strict";n(249);var c=n(1336),o=n(1339),r=n(1338),l=(n(19),{name:"LockService",computed:{},props:{serviceIndex:{type:Number,default:1},title:{type:String,default:""},offers:{type:Array,default:[]},icons:{type:Array,default:[]}},components:{CTSteper:c.a,LockForm:o.a,CTSelectionTabs:r.a},watch:{},data:function(){return{steps:[{name:"Prepare"},{name:"Add Detail"},{name:"Lock"}],tabs:["Liquidity Lock","Token Lock","Token Vesting","NFT Lock"],icons:["lock-clock","lock-clock","lock-pattern","lock-clock"]}},mounted:function(){},methods:{changeURL:function(title,e){try{history.pushState({},"EVM Chainlist",e)}catch(e){}},processRoute:function(e){}}}),d=n(36),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"label margin-v has-text-centered c-title"},[e._v(e._s(e.title))]),e._v(" "),e.offers&&e.offers.length?n("div",{staticClass:"margin-v large-bottom feature-banner"},[n("div",{staticClass:"c-flex"},[n("div",{staticClass:"left"},[n("p",[e._v("Our Locker offer")]),e._v(" "),e._l(e.offers,(function(t,c){return n("p",[n("b-icon",{staticClass:"has-text-blue",attrs:{icon:"check",size:"is-small"}}),e._v(" "+e._s(t)+"\n            ")],1)}))],2),e._v(" "),n("div",{staticClass:"c-flex h-center wrap"},e._l(e.icons,(function(e,t){return n("img",{class:[(t+1)%2==0?"left":"side"],attrs:{src:e}})})),0)])]):e._e(),e._v(" "),n("LockForm",{staticClass:"forms no-border no-padding"}),e._v(" "),e._m(0)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home-card-container"},[t("div",{staticClass:"card-content"})])}],!1,null,null,null);t.a=component.exports},1405:function(e,t,n){"use strict";n.r(t);var c=n(1337),o=(n(19),{name:"LockHome",computed:{},components:{LockService:c.a},data:function(){return{serviceIndex:-1,offers:["Lock splitting","Relocking","Lock ownership transfer"],icons:["/dai.svg","/usdt.svg","/usdc.svg"]}},mounted:function(){this.serviceIndex=1},methods:{},head:function(){return{title:"Secure Token Locker solution",meta:[{hid:"description",name:"description",content:"Token Locker, lock and manage your tokens for Ethereum & BSC & Polygon & Solana & TRON & Almost all EVM-compatible chains securely."}]}}}),r=n(36),component=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-container"},[t("div",{staticClass:"content-container"},[t("LockService",{attrs:{serviceIndex:this.serviceIndex,title:"Lock Token",offers:this.offers,icons:this.icons}})],1)])}),[],!1,null,null,null);t.default=component.exports}}]);