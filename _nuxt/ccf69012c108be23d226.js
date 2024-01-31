(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1342:function(t,e,n){"use strict";n(18);var o={name:"faq",components:{},data:function(){return{isOpen:!1,links:[],items:[1,2,3,4,5,6,7],faq:[{open:!0,title:"Whats TokenLocker.app?",desc:"Its a tool that allows you to lock your DEX liquidity, team token, NFTs to show confidence to your invistor and community members."},{open:!1,title:"How to use TokenLocker.app?",desc:'\n                <ul>\n                <li>1. Connect your wallet, supports MetaMask, Wallet Connect and any web3 compatible wallet.</li>\n               <li>2. Make sure your Wallet is pointed to the network that you would like to use.</li>\n               <li>3. Make sure your Wallet account is unlocked.</li>\n               <li>4. Go to <a class="font-bold has-text-gray" href="/lock/liquidity">Liquidity Locker</a> or <a class="font-bold has-text-gray" href="/lock/token">Token Locker</a></li>\n               <li>5. Select a pair or token or NFT that you would like to lock.</li>\n               <li>6. Enter the unlock amoount and unlock date.</li>\n               <li>7. Click «Approve» button.</li>\n               <li>8. Once the approve transaction is completed, click «Preview» button, just double check your lock information, click «Lock», confirm the lock transaction in your wallet.</li>\n               <li>9. Done!\n               </ul>\n               '},{open:!1,title:"Is it a safe tool?",desc:'Yes, its open-sourced, you can get the source code on <a class="font-bold has-text-gray" target="_blank" href="https://github.com/TokenLockerApp/tokenlockerapp">Github</a> and find all previous transactions of TokenLocker Smart contract on <a class="font-bold has-text-gray" target="_blank" href="https://etherscan.io/address/0x271eb0d7f4cd963f7214313d0b94d0844bb41c1d#code">Etherscan</a>.'},{open:!1,title:"Where can I manage my created lock?",desc:'You can find and manage all of your locks on <a class="font-bold has-text-gray" href="/lock">Lock</a> page'},{open:!1,title:"Can I test it on a Testnet?",desc:"Absolutely! You can use Goerli, Sepolia, Holesky, BSC Testnet, Polygon Mumbai, Base Sepolia for testing to make sure that everything is working as expected."},{open:!1,title:"Which chains does your dApp support?",desc:"10+ Chains supported, includes Ethereum, BNB Smart Chain, Polygon, Avalanche, Arbitrum, Optimism, Base, Celo, Metis, opBNB, Klaytn, PulseChain, etc."},{open:!1,title:"Which dexs does your dApp support for liquidity locking?",desc:"Uniswap, PancakeSwap, SushiSwap, QuickSwap, Camelot, BiSwap, SafeMoonSwap, Trader Joe, Velodrome, Aerodrome, BaseSwap, BabyDogSwap, Julswap, Honeyswap, etc."},{open:!1,title:"How much time does a lock creatation take?",desc:"It depends on the gas price and network congestion. It typically takes 3 to 5 minutes."},{open:!1,title:"Which wallets can I use?",desc:"You can use Metamask, hardware wallets or any wallet that is supported by WalletConnect."},{open:!1,title:"How can I get in touch?",desc:'You can contact us on <a class="font-bold has-text-gray" href="https://t.me/tokenlockerapp" target="_blank">Telegram</a> or <a class="font-bold has-text-gray" href="https://twitter.com/tokenlockerapp" target="_blank">Twitter</a>'}]}},mounted:function(){this.$router&&this.addListeners()},beforeUnmount:function(){this.$router&&this.removeListeners()},updated:function(){var t=this;this.$router&&(this.removeListeners(),this.$nextTick((function(){t.addListeners()})))},methods:{navigate:function(t){var e=t.target.getAttribute("href"),n=t.target.getAttribute("target");e&&"/"===e[0]&&"_blank"!==n&&(t.preventDefault(),this.$router&&this.$router.push(e))},addListeners:function(){this.links=this.$refs.faqlist.getElementsByTagName("a");for(var i=0;i<this.links.length;i++)this.links[i].addEventListener("click",this.navigate,!1)},removeListeners:function(){for(var i=0;i<this.links.length;i++)this.links[i].removeEventListener("click",this.navigate,!1);this.links=[]}}},l=n(33),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"faqlist"},t._l(t.faq,(function(e,o){return n("div",{staticClass:"faq-item"},[n("b-collapse",{staticClass:"panel",attrs:{"aria-id":"contentIdForA11y2",animation:"slide"},scopedSlots:t._u([{key:"trigger",fn:function(){return[n("div",{staticClass:"c-flex v-center faq-title"},[n("div",{attrs:{role:"button","aria-controls":"contentIdForA11y2","aria-expanded":e.open}},[n("strong",{staticClass:"has-text-success"},[t._v(t._s(e.title))])]),t._v(" "),n("a",{staticClass:"right"},[n("b-icon",{attrs:{type:"is-success",icon:e.open?"minus":"plus"}})],1)])]},proxy:!0}],null,!0),model:{value:e.open,callback:function(n){t.$set(e,"open",n)},expression:"item.open"}},[t._v(" "),n("div",{staticClass:"faq-content"},[n("span",{domProps:{innerHTML:t._s(e.desc)}})])])],1)})),0)}),[],!1,null,null,null);e.a=component.exports},1375:function(t,e,n){"use strict";n.r(e);var o=n(1342),l=(n(18),{name:"faq",components:{FAQ:o.a},data:function(){return{}}}),r=n(33),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-container"},[e("div",{staticClass:"content-container medium"},[e("p",{staticClass:"has-text-white c-title margin-v"},[this._v("Frequently asked questions")]),this._v(" "),e("FAQ")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);