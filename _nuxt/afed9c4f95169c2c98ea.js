(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1337:function(t,e,n){"use strict";n(249);var c=n(1336),o=n(1339),r=n(1338),l=(n(19),{name:"LockService",computed:{},props:{serviceIndex:{type:Number,default:1},title:{type:String,default:""},offers:{type:Array,default:[]},icons:{type:Array,default:[]}},components:{CTSteper:c.a,LockForm:o.a,CTSelectionTabs:r.a},watch:{},data:function(){return{steps:[{name:"Prepare"},{name:"Add Detail"},{name:"Lock"}],tabs:["Liquidity Lock","Token Lock","Token Vesting","NFT Lock"],icons:["lock-clock","lock-clock","lock-pattern","lock-clock"]}},mounted:function(){},methods:{changeURL:function(title,t){try{history.pushState({},"EVM Chainlist",t)}catch(t){}},processRoute:function(t){}}}),d=n(36),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"label margin-v has-text-centered c-title"},[t._v(t._s(t.title))]),t._v(" "),t.offers&&t.offers.length?n("div",{staticClass:"margin-v large-bottom feature-banner"},[n("div",{staticClass:"c-flex"},[n("div",{staticClass:"left"},[n("p",[t._v("Our Locker offer")]),t._v(" "),t._l(t.offers,(function(e,c){return n("p",[n("b-icon",{staticClass:"has-text-blue",attrs:{icon:"check",size:"is-small"}}),t._v(" "+t._s(e)+"\n            ")],1)}))],2),t._v(" "),n("div",{staticClass:"c-flex h-center wrap"},t._l(t.icons,(function(t,e){return n("img",{class:[(e+1)%2==0?"left":"side"],attrs:{src:t}})})),0)])]):t._e(),t._v(" "),n("LockForm",{staticClass:"forms no-border no-padding"}),t._v(" "),t._m(0)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-card-container"},[e("div",{staticClass:"card-content"})])}],!1,null,null,null);e.a=component.exports},1403:function(t,e,n){"use strict";n.r(e);var c=n(1337),o=(n(19),{name:"LockHome",computed:{},components:{LockService:c.a},data:function(){return{serviceIndex:-1,offers:["Lock splitting","Liquidity Migration","Relocking","Lock ownership transfer"],icons:["/sushiswap.svg","/uniswap.svg","/pancakeswap.svg"]}},mounted:function(){this.serviceIndex=0},methods:{},head:function(){return{title:"Secure Liquidity Locker solution",meta:[{hid:"description",name:"description",content:"Liquidity Locker, lock and manage your liquidity for Ethereum & BSC & Polygon & Solana & TRON & Almost all EVM-compatible chains securely."}]}}}),r=n(36),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-container"},[e("div",{staticClass:"content-container"},[e("LockService",{attrs:{serviceIndex:this.serviceIndex,title:"Lock Liquidity",offers:this.offers,icons:this.icons}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);