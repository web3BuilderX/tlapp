(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1334:function(e,t,r){"use strict";r(44);var n=r(1),o=(r(249),{name:"CTSteper",components:{},props:{steps:{type:Array,default:function(){return[]}},step:{type:Number,default:0}},data:function(){return{open:!1}},computed:{},created:function(){this.$nextTick(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))))},methods:{}}),l=r(36),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"custom-steps-container"},[r("div",{staticClass:"custom-steps"},[e._l(e.steps,(function(t,n){return[r("div",{class:[e.step==n?"step-item actived":"step-item"]},[e.step<=n?r("div",{staticClass:"step-maker"},[e._v(e._s(n+1))]):r("div",{staticClass:"step-maker"},[r("b-icon",{attrs:{icon:"check","custom-size":"mdi-18px"}})],1),e._v(" "),r("div",{staticClass:"step-title"},[e._v(e._s(t.name))])]),e._v(" "),r("span",{class:[(e.step,"step-dash")]})]}))],2)])}),[],!1,null,null,null);t.a=component.exports},1335:function(e,t,r){"use strict";r(59),r(52),r(39),r(37),r(48);var n=r(4),o=(r(249),r(1334)),l=r(18);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={name:"Stepper",props:{step:{type:Number,default:0}},components:{CTSteper:o.a},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)("common",["translationWord"]),{steps:function(){var e=this.translationWord;return[{name:e.header.step1Title},{name:e.header.step2Title},{name:e.header.step3Title}]}}),data:function(){return{}}},_=r(36),component=Object(_.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("CTSteper",{attrs:{steps:this.steps,step:this.step}})],1)}),[],!1,null,null,null);t.a=component.exports},1338:function(e,t,r){var content=r(1356);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(84).default)("d9474fbc",content,!0,{sourceMap:!1})},1339:function(e,t,r){var content=r(1358);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(84).default)("57b4dc2a",content,!0,{sourceMap:!1})},1355:function(e,t,r){"use strict";var n=r(1338);r.n(n).a},1356:function(e,t,r){(e.exports=r(78)(!1)).push([e.i,"",""])},1357:function(e,t,r){"use strict";var n=r(1339);r.n(n).a},1358:function(e,t,r){(e.exports=r(78)(!1)).push([e.i,"",""])},1384:function(e,t,r){"use strict";r.r(t);r(59),r(52),r(39),r(37),r(48),r(44);var n=r(1),o=(r(92),r(4)),l=r(18);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d,_,h,v,m,f,k,y={computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.c)("common",["originInputData","addressInfo","etherEnough","baseFeeEnough","estimateETHCost","isMobile","checkingAddressTo","checkingAddressFrom","contructTxIndex","language"]),{},Object(l.c)("bulksender",["bulksenderAddress","txUrl","gasPrice"]),{},Object(l.c)("token",["balance","tokenAddress","allowanceEnough","balanceEnough","approveTx","approveTxStatus","isERC721","unlimitedApproveAmount","priceLoaded"]),{},Object(l.c)("metamask",["balance","ethAccount","gasPrice","providerName","walletName","ethPriceLoaded","netId","supportEIP1559"]),{},Object(l.b)("token",["allowanceNumber","balanceNumber","isNFTToken","isERC721","isERC1155","isOpenseaIssue"]),{},Object(l.b)("common",["translationWord"]),{},Object(l.b)("metamask",["currency","disableBurnerFeature"]),{},Object(l.b)("bulksender",["dappFee"]),{formatedEtherNotEnoughText:function(){var e=this.$store.getters["metamask/currency"],t=this.$store.getters["bulksender/dappFee"],r=this.translationWord.error.insufficientEtherBalance;return this.baseFeeEnough||(r=this.translationWord.error.insufficientEtherBalance+this.translationWord.error.insufficientBaseEtherBalance+t+" "+e+this.translationWord.error.getEstimatedFee),-1==e.indexOf("ETH")?r.replace("ether",e).replace("以太币",e):r},networkSpeedTips:function(){try{var e=this.$store.state.metamask.networkBaseFee,t=this.$store.state.bulksender.gasPrice,r=this.$store.getters["bulksender/priorityFee"];return this.translationWord.confirm.networkSpeedInfo.replace("$maxfee",t).replace("$basefee",e).replace("$priority",r)}catch(e){return this.translationWord.confirm.networkSpeedInfo}},hasInvalid:function(){return this.$store.state.common.addressInfo.invalidAddressesIndexes.length>0},allBad:function(){try{return this.addressInfo.invalidAddressesIndexes.length==this.addressInfo.finalData.length}catch(e){return!1}},showEstimatedCostTips:function(){return this.$store.state.token.gasForProcessing>0||this.txsTimes>1&&this.$store.state.common.queryLimitForBadAddress<=this.$store.state.common.queryLimitForBadAddressSpecialProcess},invalidAddresses:function(){return this.$store.state.common.addressInfo.invalidAddresses},tokenBalance:function(){return this.tokenSelected.isETH?this.ethBalance:this.$store.getters["token/balanceNumber"]},addresses:function(){try{return this.$store.state.common.addressInfo.finalData.length}catch(e){return console.info(e),0}},ethBalance:function(){return this.$store.state.metamask.balance},decimals:{get:function(){return null==this.$store.state.token.tokenSelected?18:this.$store.state.token.tokenSelected.decimals}},gasPriceDict:function(){return this.$store.state.metamask.gasPrice},gasPrice:{get:function(){return this.$store.state.bulksender.gasPrice},set:function(e){this.$store.dispatch("bulksender/setGasPrice",{gasPrice:e})}},tokenSelected:{get:function(){return null==this.$store.state.token.tokenSelected?{}:this.$store.state.token.tokenSelected},set:function(e){this.$store.dispatch("token/setTokenSelected",{selected:e})}},batchSizeZero:function(){return null==this.addressInfo.batches||!(this.addressInfo.batches.length>0)},txsTimes:function(){var e=this.addressInfo.times;return null==e?0:e},estimateETHCost:function(){return 0==this.txsTimes?0:this.$store.state.common.estimateETHCost},showBurnKeyOptions:function(){return!this.disableBurnerFeature&&!this.tokenSelected.isETH&&!this.isMobile&&null!=this.addressInfo.batches&&this.addressInfo.batches.length>3},finalAmount:function(){return this.isERC721?this.$store.state.common.addressInfo.finalData.length:this.$store.state.common.addressInfo.finalAmount},delegater:function(){return this.$store.state.bulksender.burnerKey},finalAmountString:function(){return this.$store.state.common.addressInfo.finalAmountStr},showApprove:function(){return null!=this.tokenSelected&&!this.tokenSelected.isETH&&!this.allowanceEnough||this.showPrepareStep},showGasSlider:function(){return 8217!=this.netId&&17217!=this.netId},allowanceNumber:function(){if(this.tokenSelected.isETH)return this.ethBalance;var e=this.$store.getters["token/allowanceNumber"];return-1==e?this.translationWord.home.approveOptionUnlimited:e},allowance:function(){return this.tokenSelected.isETH?this.ethBalance:this.$store.state.token.allowance},allowanceEnough:function(){return!(null==this.tokenSelected||!this.tokenSelected.isETH)||this.$store.state.token.allowanceEnough},approveTx:function(){return this.$store.state.token.approveTx},approveTxStatus:{get:function(){return this.$store.state.token.approveTxStatus},set:function(e){this.$store.dispatch("token/setAproveTxStatus",{status:e})}}}),watch:{allowance:function(e){var t=this.finalAmount;this.$store.dispatch("token/checkAllowceEnough",{finalAmount:t}),console.info("allowanceChanged:",e)},gasPrice:function(e){this.$store.dispatch("common/estimateTotalEtherCost")},approveTx:function(e){},approveTxStatus:function(e){var t=0==this.approveErrorType;-2==e||1==e?1==e&&t?this.prepareBulksending():this.buttonLoading=!1:(this.buttonLoading=!0,t&&(this.showCheckingApprove=!0))}},mounted:function(){this.gasPrice=this.gasPriceDict.fast,this.showBurnKeyOptions&&(this.sendType=0),this.showApprove||this.lockGasPriceOracle(),this.skipCheckingBadAddress=!1},methods:{deleteInvalid:(k=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("common/deleteInvalidAddresses",{});case 2:return this.skipCheckingBadAddress=!0,e.next=5,this.prepareBulksending();case 5:this.batchSizeZero&&this.$router.push({path:"/"});case 6:case"end":return e.stop()}}),e,this)}))),function(){return k.apply(this,arguments)}),signKey:(f=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.approveButtonDisable=!0,e.next=4,this.$store.dispatch("bulksender/signKey");case 4:this.approveButtonDisable=!1,this.signKeyDone=!0,e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),this.signKeyDone=!1,this.approveButtonDisable=!1;case 13:case"end":return e.stop()}}),e,this,[[0,8]])}))),function(){return f.apply(this,arguments)}),prepareBulksending:(m=Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.buttonLoading=!0,this.showPrepareStep=!0,this.hasBadAddress=!1,t=this.finalAmount,e.next=6,this.$store.dispatch("token/checkAllowceEnough",{finalAmount:t});case 6:if(this.skipCheckingBadAddress){e.next=30;break}return this.prepareStep=0,e.prev=8,e.next=11,this.$store.dispatch("common/checkBadAddresses");case 11:if(!e.sent){e.next=19;break}return this.hasBadAddress=!0,this.showPrepareStep=!1,this.showPrepareStepError=!0,this.prepareErrorType=0,this.buttonLoading=!1,e.abrupt("return");case 19:e.next=30;break;case 21:return e.prev=21,e.t0=e.catch(8),console.info(e.t0),this.hasBadAddress=!1,this.showPrepareStep=!1,this.showPrepareStepError=!0,this.buttonLoading=!1,this.prepareErrorType=1,e.abrupt("return");case 30:if(this.prepareStep=1,e.prev=31,this.ethPriceLoaded){e.next=35;break}return e.next=35,this.$store.dispatch("metamask/fetchCoinPrice");case 35:e.next=39;break;case 37:e.prev=37,e.t1=e.catch(31);case 39:if(e.prev=39,this.priceLoaded){e.next=43;break}return e.next=43,this.$store.dispatch("token/fetchTokenPrice");case 43:e.next=47;break;case 45:e.prev=45,e.t2=e.catch(39);case 47:return this.prepareStep=1,e.prev=48,e.next=51,this.$store.dispatch("metamask/fetchETHBalance");case 51:e.next=55;break;case 53:e.prev=53,e.t3=e.catch(48);case 55:return e.prev=55,e.next=58,this.$store.dispatch("common/prepareBulksending");case 58:e.next=68;break;case 60:return e.prev=60,e.t4=e.catch(55),console.info(e.t4),this.showPrepareStep=!1,this.showPrepareStepError=!0,this.buttonLoading=!1,this.prepareErrorType=2,e.abrupt("return");case 68:return this.prepareStep=7,e.prev=69,e.next=72,this.$store.dispatch("common/prepareTransactions");case 72:e.next=81;break;case 74:return e.prev=74,e.t5=e.catch(69),this.showPrepareStep=!1,this.showPrepareStepError=!0,this.buttonLoading=!1,this.prepareErrorType=6,e.abrupt("return");case 81:this.showPrepareStep=!1,this.buttonLoading=!1,this.prepareStep=-1,this.showBurnKeyOptions&&(this.sendType=0),this.lockGasPriceOracle();case 86:case"end":return e.stop()}}),e,this,[[8,21],[31,37],[39,45],[48,53],[55,60],[69,74]])}))),function(){return m.apply(this,arguments)}),lockGasPriceOracle:(v=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.$store.dispatch("metamask/lockGasPriceOracle",{gasPriceOracleLocked:!0});case 2:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)}),approveToken:(h=Object(n.a)(regeneratorRuntime.mark((function e(){var t,r,n,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.finalAmount,1==this.approveType&&(t=this.unlimitedApproveAmount),this.approveButtonDisable=!0,!this.isNFTToken){e.next=12;break}return e.next=6,this.$store.dispatch("token/approveForBulksenderForNFTToken",{amount:t});case 6:r=e.sent,n=r.txHash,r.errorType,console.info(n),e.next=20;break;case 12:return e.next=15,this.$store.dispatch("token/approveForBulksender",{amount:t});case 15:o=e.sent,l=o.txHash,c=o.errorType,this.approveErrorType=c,console.info(l);case 20:this.approveButtonDisable=!1;case 21:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)}),approveZero:(_=Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.approveButtonDisable=!0,e.next=4,this.$store.dispatch("token/approveForBulksender",{amount:0});case 4:(t=e.sent).txHash,t.errorType,this.approveButtonDisable=!1;case 8:case"end":return e.stop()}}),e,this)}))),function(){return _.apply(this,arguments)}),clickSendNext:(d=Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.buttonLoading=!0,e.next=3,this.$store.dispatch("common/checkEtherEnough");case 3:if(!e.sent){e.next=10;break}return t=0==this.sendType,e.next=8,this.$store.dispatch("bulksender/setUsedBurnerKey",{usedBurnerKey:t});case 8:this.buttonLoading=!1,this.$router.push({path:"/send"});case 10:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)})},data:function(){return{showPrepareStep:!1,buttonLoading:!1,showCheckingApprove:!1,approveType:1,sendType:1,showPrepareStepError:!1,prepareErrorType:-1,prepareStep:-1,approveErrorType:0,approveButtonDisable:!1,signKeyDone:!1,skipCheckingBadAddress:!1,hasBadAddress:!1}}},T=(r(1355),r(36)),C={name:"confirm",components:{ConfirmBody:Object(T.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[e.showApprove?r("div",[r("p",{staticClass:"label"},[e._v(e._s(e.translationWord.confirm.summaryTitle))]),e._v(" "),r("table",{staticClass:"networkSpeed table is-bordered"},[r("tbody",[r("tr",[r("td",{staticClass:"td-container"},[r("p",{staticClass:"td-title"},[e._v("\n       "+e._s(e._f("1000")(e.allowanceNumber,e.decimals))+" "+e._s(e.tokenSelected.symbol)+"\n     ")]),e._v(" "),r("p",{staticClass:"td-value"},[e._v("\n       "+e._s(e.translationWord.confirm.summary.totalTokenAllowanceTitle)+"\n     ")])]),e._v(" "),r("td",{staticClass:"td-container"},[r("p",{staticClass:"td-title"},[e._v("\n          "+e._s(e._f("1000")(e.finalAmount,e.decimals))+"  "+e._s(e.tokenSelected.symbol)+"\n       ")]),e._v(" "),r("p",{staticClass:"td-value"},[e._v("\n         "+e._s(e.translationWord.confirm.summary.totalAmountTitle)+"\n       ")])])]),e._v(" "),r("tr",[r("td",{staticClass:"td-container"},[r("p",{staticClass:"td-title"},[e._v("\n         "+e._s(e._f("1000")(e.ethBalance))+" "+e._s(e.currency)+"\n       ")]),e._v(" "),r("p",{staticClass:"td-value"},[e._v("\n\n         "+e._s(e.translationWord.confirm.summary.yourTitle)+e._s(e.currency)+e._s(e.translationWord.confirm.summary.balanceTitle)+"\n\n       ")])]),e._v(" "),r("td",{staticClass:"td-container"},[e.isERC1155?r("p",{staticClass:"td-title"},[e._v("\n        "+e._s(e.translationWord.confirm.summary.unknowBalance)+"\n      ")]):r("p",{class:[e.balanceEnough?"td-title":"td-title-red"]},[e._v("\n        "+e._s(e._f("1000")(e.tokenBalance))+" "+e._s(e.tokenSelected.symbol)+"\n      ")]),e._v(" "),r("p",{class:[e.balanceEnough?"td-value":"td-value-red"]},[e._v("\n       "+e._s(e.translationWord.confirm.summary.totalTokenBalanceTitle)+"\n     ")])])])])]),e._v(" "),e.isNFTToken?e._e():r("div",{staticClass:"networkSpeed"},[r("p",{staticClass:"label"},[e._v(e._s(e.translationWord.home.approveTitle))]),e._v(" "),r("div",{staticClass:"level"},[r("div",{staticClass:"level-left"},[r("b-field",[r("b-radio",{staticClass:"radio-label-fix",attrs:{"native-value":"0",type:"is-info"},model:{value:e.approveType,callback:function(t){e.approveType=t},expression:"approveType"}},[r("p",{staticClass:"label"},[e._v("\n                  "+e._s(e.translationWord.home.approveOption1)+" ("+e._s(e._f("1000")(e.finalAmount,e.decimals))+" "+e._s(e.tokenSelected.symbol)+")\n                ")])])],1)],1),e._v(" "),r("div",{staticClass:"level-right"},[r("b-field",[r("b-radio",{staticClass:"radio-label-fix",attrs:{"native-value":"1",type:"is-info"},model:{value:e.approveType,callback:function(t){e.approveType=t},expression:"approveType"}},[r("p",{staticClass:"label"},[e._v("\n                      "+e._s(e.translationWord.home.approveOptionUnlimited)+e._s(e.translationWord.home.approveOptionUnlimitedRecommend)+"\n                    ")])])],1)],1)])]),e._v(" "),r("p",{staticClass:"padding-small"}),e._v(" "),e.showCheckingApprove||e.showPrepareStep?r("article",{staticClass:"notification is-info networkSpeed"},[r("div",[e._v("\n              "+e._s(e.translationWord.confirm.approveHashTitle)+"\n              "),r("br"),e._v(" "),e.isMobile?r("a",{attrs:{target:"_blank",href:""+e.txUrl+e.approveTx}},[e._v(e._s(e._f("truncate")(e.approveTx,64)))]):r("a",{attrs:{target:"_blank",href:""+e.txUrl+e.approveTx}},[e._v(e._s(e.approveTx))]),e._v(" "),0==e.approveTxStatus?r("span",{staticClass:"tx-loading"}):e._e(),e._v(" "),1==e.approveTxStatus?r("b-icon",{attrs:{icon:"check-circle",size:"is-small",type:"is-success"}}):e._e(),e._v(" "),-2==e.approveTxStatus?r("b-icon",{attrs:{icon:"close-circle",size:"is-small",type:"is-danger"}}):e._e()],1),e._v(" "),e.showPrepareStep?r("div",[r("br"),e._v(" "),0==e.prepareStep?r("span",[e._v(e._s(this.translationWord.info.prepareStep5_1)+"\n              "),r("span",{staticClass:"tx-loading"}),e._v(" "),r("p",[e._v("\n              "+e._s(e.translationWord.info.addressConfirming)+" "+e._s(e.translationWord.info.from)+" "+e._s(e.checkingAddressFrom+1)+" "+e._s(e.translationWord.info.to)+" "+e._s(e.checkingAddressTo)+"\n              ")])]):e._e(),e._v(" "),1==e.prepareStep?r("span",[e._v(e._s(this.translationWord.info.prepareStep5)+"\n              "),r("span",{staticClass:"tx-loading"}),e._v(" "),r("p",[e._v("\n              "+e._s(e.translationWord.info.addressSorting)+" "+e._s(e.translationWord.info.from)+" "+e._s(e.checkingAddressFrom+1)+" "+e._s(e.translationWord.info.to)+" "+e._s(e.checkingAddressTo)+"\n              ")])]):e._e(),e._v(" "),7==e.prepareStep?r("span",[e._v(e._s(e.translationWord.info.prepareStep5)+"\n              "),r("span",{staticClass:"tx-loading"}),e._v(" "),r("p",[e._v("\n              "+e._s(e.translationWord.info.addressContructing)+" "+e._s(e.contructTxIndex)+" / "+e._s(e.txsTimes)+"\n              ")])]):e._e()]):e._e()]):e._e(),e._v(" "),e.showCheckingApprove?r("article",{staticClass:"notification is-info no-shadow networkSpeed"},[r("div",[e._v("\n            "+e._s(e.translationWord.confirm.prepareTransactionStatus)+"\n            ")])]):e._e()]):e._e(),e._v(" "),e.showApprove?e._e():r("div",[r("div",{staticClass:"networkSpeed"},[r("b-field",[e.supportEIP1559?r("p",{staticClass:"label"},[e._v(e._s(e.translationWord.confirm.networkSpeedTitle)+" ("+e._s(e.gasPrice)+" Gwei)\n            "),r("b-tooltip",{attrs:{label:e.networkSpeedTips,type:"is-info",position:"is-bottom",multilined:""}},[r("b-icon",{attrs:{icon:"information-outline",size:"is-small",type:"is-info"}})],1)],1):r("p",{staticClass:"label"},[e._v(e._s(e.translationWord.confirm.networkSpeedTitle)+" ("+e._s(e.gasPrice)+" Gwei)")]),e._v(" "),e.showGasSlider?r("b-slider",{attrs:{size:"is-medium",min:e.gasPriceDict.standard,max:e.gasPriceDict.instant,step:.1,"custom-formatter":function(e){return e+" Gwei"},rounded:""},model:{value:e.gasPrice,callback:function(t){e.gasPrice=t},expression:"gasPrice"}},[e._l([e.gasPriceDict.standard,e.gasPriceDict.fast,e.gasPriceDict.instant],(function(t){return[t==e.gasPriceDict.standard?r("b-slider-tick",{staticClass:"b-slider-tick-label-left-fix",attrs:{value:t}},[e._v(e._s(e.translationWord.confirm.networkSpeedSlow))]):e._e(),e._v(" "),t==e.gasPriceDict.fast?r("b-slider-tick",{attrs:{value:t}},[e._v(e._s(e.translationWord.confirm.networkSpeedFast))]):e._e(),e._v(" "),t==e.gasPriceDict.instant?r("b-slider-tick",{staticClass:"b-slider-tick-label-right-fix",attrs:{value:t}},[e._v(e._s(e.translationWord.confirm.networkSpeedInstant))]):e._e()]}))],2):e._e()],1)],1),e._v(" "),r("p",{staticClass:"padding-medium"}),e._v(" "),r("p",{staticClass:"label"},[e._v(e._s(e.translationWord.confirm.summaryTitle))]),e._v(" "),r("div",[r("table",{staticClass:"networkSpeed table is-bordered"},[r("tbody",[r("tr",[r("td",{staticClass:"td-container"},[r("p",{staticClass:"td-title"},[e._v("\n         "+e._s(e.addresses)+"\n       ")]),e._v(" "),r("p",{staticClass:"td-value"},[e._v("\n         "+e._s(e.translationWord.confirm.summary.totalAddressesTitle)+"\n       ")])]),e._v(" "),r("td",{staticClass:"td-container"},[r("p",{staticClass:"td-title"},[e._v("\n        "+e._s(e._f("1000")(e.finalAmount,e.decimals))+"  "+e._s(e.tokenSelected.symbol)+"\n     ")]),e._v(" "),r("p",{staticClass:"td-value"},[e._v("\n       "+e._s(e.translationWord.confirm.summary.totalAmountTitle)+"\n     ")])])]),e._v(" "),r("tr",[r("td",{staticClass:"td-container"},[r("p",{staticClass:"td-title"},[e._v("\n      "+e._s(e.txsTimes)+"\n    ")]),e._v(" "),r("p",{staticClass:"td-value"},[e._v("\n     "+e._s(e.translationWord.confirm.summary.totalTxsTitle)+"\n    ")])]),e._v(" "),r("td",{staticClass:"td-container"},[e.isERC1155?r("p",{staticClass:"td-title"},[e._v("\n     "+e._s(e.translationWord.confirm.summary.unknowBalance)+"\n  ")]):r("p",{class:[e.balanceEnough?"td-title":"td-title-red"]},[e._v("\n  "+e._s(e._f("1000")(e.tokenBalance))+" "+e._s(e.tokenSelected.symbol)+"\n  ")]),e._v(" "),r("p",{class:[e.balanceEnough?"td-value":"td-value-red"]},[e._v("\n   "+e._s(e.translationWord.confirm.summary.totalTokenBalanceTitle)+"\n ")])])]),e._v(" "),r("tr",[r("td",{staticClass:"td-container"},[r("p",{staticClass:"td-title"},[e._v("\n     "+e._s(e._f("1000")(e.estimateETHCost))+" "+e._s(e.currency)+"\n   ")]),e._v(" "),r("p",{staticClass:"td-value"},[e._v("\n     "+e._s(e.translationWord.confirm.summary.approximateCostTitle)+" "),r("b-tooltip",{attrs:{label:e.translationWord.confirm.estimatedInfo,type:"is-info",position:"is-bottom",multilined:""}},[e.showEstimatedCostTips?r("b-icon",{attrs:{icon:"information-outline",size:"is-small",type:"is-info"}}):e._e()],1)],1)]),e._v(" "),r("td",{staticClass:"td-container"},[r("p",{class:[e.balanceEnough&&!e.etherEnough?"td-title-red":"td-title"]},[e._v("\n     "+e._s(e._f("1000")(e.ethBalance))+" "+e._s(e.currency)+"\n   ")]),e._v(" "),r("p",{class:[e.balanceEnough&&!e.etherEnough?"td-value-red":"td-value"]},[e._v("\n     "+e._s(e.translationWord.confirm.summary.yourTitle)+e._s(e.currency)+e._s(e.translationWord.confirm.summary.balanceTitle)+"\n   ")])])])])])]),e._v(" "),e.showBurnKeyOptions?r("div",{staticClass:"networkSpeed"},[r("p",{staticClass:"padding-normal"}),e._v(" "),r("p",{staticClass:"label"},[e._v(e._s(e.translationWord.confirm.sendType))]),e._v(" "),r("div",{staticClass:"level"},[r("div",{staticClass:"level-left"},[r("b-field",[r("b-radio",{staticClass:"radio-label-fix",attrs:{"native-value":"0",type:"is-info"},model:{value:e.sendType,callback:function(t){e.sendType=t},expression:"sendType"}},[r("p",{staticClass:"label"},[e._v("\n        "+e._s(e.translationWord.confirm.fastWay)+"\n      ")])])],1)],1),e._v(" "),r("div",{staticClass:"level-right"},[r("b-field",[r("b-radio",{staticClass:"radio-label-fix",attrs:{"native-value":"1",type:"is-info"},model:{value:e.sendType,callback:function(t){e.sendType=t},expression:"sendType"}},["walletConnect"==e.providerName?r("p",{staticClass:"label"},["imToken"==e.walletName?r("span",{staticClass:"label"},[e._v("\n              "+e._s(e.translationWord.connectWallet.imToken)+"\n            ")]):"huobiWallet"==e.walletName?r("span",{staticClass:"label"},[e._v("\n              "+e._s(e.translationWord.connectWallet.huobiWallet)+"\n            ")]):r("span",{staticClass:"label"},[e._v("\n              "+e._s(e.translationWord.connectWallet.walletConnect)+"\n            ")])]):"walletLink"==e.providerName?r("p",{staticClass:"label"},[e._v("\n            "+e._s(e.translationWord.connectWallet.walletLink)+"\n          ")]):"fortmatic"==e.providerName?r("p",{staticClass:"label"},[e._v("\n            "+e._s(e.translationWord.connectWallet.fortmatic)+"\n          ")]):r("p",{staticClass:"label"},[e._v("\n            "+e._s(e.translationWord.confirm.metamask)+"\n          ")])])],1)],1)]),e._v(" "),0==e.sendType?r("div",[r("p",{staticClass:"has-text-info",staticStyle:{"font-size":"13px","margin-top":"-20px","margin-bottom":"10px"}},[e._v("\n    "+e._s(e.translationWord.confirm.burnKeyTitle)+": "+e._s(e.delegater.address)+"\n  ")]),e._v(" "),r("article",{staticClass:"notification is-info no-shadow"},[e._v("\n  "+e._s(e.translationWord.confirm.fastWayTitle)+"\n  "),r("br"),e._v(" "),r("p",[e._v("1. "+e._s(e.translationWord.confirm.fastWayDesc1))]),e._v(" "),r("p",[e._v("2. "+e._s(e.translationWord.confirm.fastWayDesc2))]),e._v(" "),r("p",[e._v("3. "+e._s(e.translationWord.confirm.fastWayDesc3)+e._s(e.currency)+e._s(e.translationWord.confirm.fastWayDesc4))])]),e._v(" "),e.signKeyDone?r("article",{staticClass:"notification is-warning"},[e._v("\n  "+e._s(e.translationWord.confirm.copyPrivateKeyDes)+"\n  "),r("p",{staticClass:"words-wrap-all"},[e._v(e._s(e.delegater.privateKey))])]):e._e()]):e._e(),e._v(" "),1==e.sendType?r("div",[r("article",{staticClass:"notification is-info no-shadow",staticStyle:{"margin-top":"-15px"}},["Metamask"==e.providerName?r("span",[e._v(e._s(e.translationWord.confirm.metamaskDesc))]):r("span",[e._v(e._s(e.translationWord.confirm.otherWalletDesc))])])]):e._e()]):e._e()]),e._v(" "),r("p",{staticClass:"padding-small"}),e._v(" "),e.showPrepareStepError&&1==e.prepareErrorType?r("article",{staticClass:"notification is-danger networkSpeed"},[e._v("\n      "+e._s(e.translationWord.error.checkBadAddressDataError)+"\n    ")]):e._e(),e._v(" "),e.showPrepareStepError&&0==e.prepareErrorType&&e.hasInvalid?r("div",{staticClass:"networkSpeed"},[r("div",{staticClass:"label-container"},[r("div",{staticClass:"label is-danger-alert"},[e._v(e._s(e.translationWord.error.badAddressCantBeProcessed))]),e._v(" "),r("div",{staticClass:"invalidAction has-text-danger"},[r("a",{staticClass:"has-text-danger",on:{click:function(t){return e.deleteInvalid()}}},[e._v(e._s(e.translationWord.button.deleteAllInvalidAddresses))])])]),e._v(" "),e.isOpenseaIssue&&e.hasBadAddress&&e.allBad?r("article",{staticClass:"notification is-warning"},[e._v("\n        "+e._s(e.translationWord.error.openseaIssue)),r("strong",{staticClass:"warning-link"},["CN"==e.language?r("a",{attrs:{href:"https://nebula-direction-d04.notion.site/OpenSea-NFT-f4e34cc8947f4ac88233d13af2bb05bc",target:"_blank"}},[e._v(e._s(e.translationWord.button.howToFix))]):r("a",{attrs:{href:"https://nebula-direction-d04.notion.site/The-issues-of-NFT-bulk-sendings-through-OpenSea-a5b3c6c263de4d74acea601d1d1dd2eb",target:"_blank"}},[e._v(e._s(e.translationWord.button.howToFix))])])]):e._e(),e._v(" "),r("article",{staticClass:"notification is-danger"},[r("ul",e._l(e.invalidAddresses,(function(t){return r("li",[0==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(t.address)+" "+e._s(e.translationWord.error.invalidEthereumAddress))]):e._e(),e._v(" "),1==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(t.amount)+" "+e._s(e.translationWord.error.invalidEthereumAmount))]):e._e(),e._v(" "),2==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(e.addressInfo.originalAddressStr[t.index])+" "+e._s(e.translationWord.error.invalidEthereumAddressAndAmount))]):e._e(),e._v(" "),3==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(t.address)+" "+e._s(e.translationWord.error.cantSupportsContracts))]):e._e(),e._v(" "),4==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(t.amount)+" "+e._s(e.translationWord.error.invalidEthereumAmountDecimals))]):e._e(),e._v(" "),5==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(e.translationWord.error.invalidEthereumAmounOwnership)+' "'+e._s(t.tokenId)+'"')]):e._e(),e._v(" "),6==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(e.translationWord.error.duplicatedEthereumAmount)+' "'+e._s(t.tokenId)+'"')]):e._e(),e._v(" "),7==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+'："'+e._s(t.amount)+'" '+e._s(e.translationWord.error.invalidAmountShouldBeNumber))]):e._e(),e._v(" "),8==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+'："'+e._s(t.tokenId)+'" '+e._s(e.translationWord.error.invalidTokenIdShouldBeNumber))]):e._e(),e._v(" "),9==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(t.tokenId)+", "+e._s(t.amount)+" "+e._s(e.translationWord.error.invalidTokenIdAndAmountShouldBeNumber))]):e._e(),e._v(" "),10==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(t.address)+", "+e._s(t.amount)+" "+e._s(e.translationWord.error.invalidEthereumAddressAndAmount))]):e._e(),e._v(" "),11==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(t.address)+", "+e._s(t.tokenId)+" "+e._s(e.translationWord.error.invalidEthereumAddressAndTokenId)+" ")]):e._e(),e._v(" "),12==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(t.tokenId)+", "+e._s(t.amount)+" "+e._s(e.translationWord.error.insufficientTokenIDBalance))]):e._e(),e._v(" "),13==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(e.addressInfo.originalAddressStr[t.index])+" "+e._s(e.translationWord.error.addressesCannotBeProcessed))]):e._e(),e._v(" "),100==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(e.addressInfo.originalAddressStr[t.index])+" "+e._s(e.translationWord.error.invalidEthereumAddressAndAmountAndTokenId))]):e._e()])})),0)])]):e._e(),e._v(" "),e.showPrepareStepError&&2==e.prepareErrorType?r("article",{staticClass:"notification is-danger networkSpeed"},[e._v("\n      "+e._s(e.translationWord.error.prepareDataError)+"\n    ")]):e._e(),e._v(" "),e.showPrepareStepError&&6==e.prepareErrorType?r("article",{staticClass:"notification is-danger networkSpeed"},[e._v("\n      "+e._s(e.translationWord.error.prepareTransactionsError)+"\n    ")]):e._e(),e._v(" "),r("div",{staticClass:"networkSpeed"},[e.balanceEnough&&e.etherEnough?e._e():r("article",{staticClass:"notification is-danger"},[e.balanceEnough||e.tokenSelected.isETH?e._e():r("p",[e._v(e._s(e.translationWord.error.insufficientTokenBalance))]),e._v(" "),!e.balanceEnough&&e.tokenSelected.isETH?r("p",[e._v(e._s(e.formatedEtherNotEnoughText))]):e._e(),e._v(" "),e.balanceEnough&&!e.etherEnough?r("p",[e._v(e._s(e.formatedEtherNotEnoughText))]):e._e()]),e._v(" "),e.balanceEnough&&e.etherEnough&&(-1==e.approveErrorType||-2==e.approveErrorType)?r("div",[r("div",{staticClass:"label-container"},[r("div",{staticClass:"label is-danger-alert"},[e._v(e._s(e.translationWord.error.approveError))]),e._v(" "),-1==e.approveErrorType?r("div",{staticClass:"action has-text-danger"},[r("a",{staticClass:"has-text-danger",on:{click:function(t){return e.approveZero()}}},[e._v(e._s(e.translationWord.error.resetApprovalErrorOption2))])]):e._e()]),e._v(" "),r("article",{staticClass:"notification is-danger"},[r("div",{staticClass:"approveErrorContainer"},[-1==e.approveErrorType?r("p",[e._v(e._s(e.translationWord.error.resetApprovalError))]):e._e(),e._v(" "),-1==e.approveErrorType?r("p",[e._v("1. "+e._s(e.translationWord.error.resetApprovalErrorOption1))]):e._e(),e._v(" "),-1==e.approveErrorType?r("p",[r("a",{on:{click:e.approveZero}},[e._v("2. "+e._s(e.translationWord.error.resetApprovalErrorOption2))])]):e._e(),e._v(" "),-1==e.approveErrorType&&e.approveTx?r("p",[r("br"),e._v("\n        "+e._s(e.translationWord.confirm.resetApproval)+"\n        "),r("br"),e._v(" "),r("a",{attrs:{target:"_blank",href:""+e.txUrl+e.approveTx}},[e._v(e._s(e.approveTx))]),e._v(" "),0==e.approveTxStatus?r("span",{staticClass:"tx-loading"}):e._e(),e._v(" "),1==e.approveTxStatus?r("b-icon",{attrs:{icon:"check-circle",size:"is-small",type:"is-success"}}):e._e(),e._v(" "),-2==e.approveTxStatus?r("b-icon",{attrs:{icon:"close-circle",size:"is-small",type:"is-danger"}}):e._e()],1):e._e(),e._v(" "),-2==e.approveErrorType?r("p",[e._v(e._s(e.translationWord.error.approvalError))]):e._e()])])]):e._e(),e._v(" "),r("p",{staticClass:"padding-small"}),e._v(" "),r("div",{staticStyle:{display:"flex"}},[r("nuxt-link",{attrs:{to:"/"}},[r("a",{staticClass:"button is-info backButton"},[r("span",{staticClass:"is-size-4"},[r("b-icon",{attrs:{icon:"chevron-left",size:"is-default"}})],1)])]),e._v(" "),r("div",{staticClass:"is-fullwidth"},[e.showApprove||1!=e.sendType?e._e():r("b-button",{staticClass:"is-info is-fullwidth",attrs:{loading:e.buttonLoading,disabled:!e.balanceEnough||!e.etherEnough||e.hasInvalid||e.batchSizeZero},on:{click:e.clickSendNext}},[r("span",{staticClass:"is-size-7"},[e._v(e._s(e.translationWord.button.send))])]),e._v(" "),e.showApprove||0!=e.sendType||e.signKeyDone?e._e():r("b-button",{staticClass:"is-info is-fullwidth",attrs:{loading:e.buttonLoading,disabled:!e.balanceEnough||!e.etherEnough||e.approveButtonDisable},on:{click:e.signKey}},[r("span",{staticClass:"is-size-7"},[e._v(e._s(e.translationWord.button.signKey))])]),e._v(" "),!e.showApprove&&0==e.sendType&&e.signKeyDone?r("b-button",{staticClass:"is-info is-fullwidth",attrs:{loading:e.buttonLoading,disabled:!e.balanceEnough||!e.etherEnough||e.approveButtonDisable||e.hasInvalid||e.batchSizeZero},on:{click:e.clickSendNext}},[r("span",{staticClass:"is-size-7"},[e._v(e._s(e.translationWord.button.oneClick))])]):e._e(),e._v(" "),e.showApprove?r("b-button",{staticClass:"is-info is-fullwidth",attrs:{loading:e.buttonLoading,disabled:!e.balanceEnough||!e.etherEnough||e.approveButtonDisable},on:{click:e.approveToken}},[r("span",{staticClass:"is-size-7"},[e._v(" "+e._s(e.translationWord.home.approveButton))])]):e._e()],1)],1)])])])}),[],!1,null,null,null).exports,Stepper:r(1335).a},data:function(){return{step:1}}},x=(r(1357),Object(T.a)(C,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card-container"},[t("div",{staticClass:"content-container"},[t("Stepper",{attrs:{step:this.step}}),this._v(" "),t("ConfirmBody",{staticClass:"forms"})],1)])}),[],!1,null,null,null));t.default=x.exports}}]);