(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1031:function(e,t,r){"use strict";r.r(t);r(158),r(132),r(531);var n,o,d,c,l,m,f,h,S,v,A,x,D,k,I,E,T,O,_,w,N=r(40),y=(r(216),r(263),r(249),r(152),r(264),r(112),r(113),r(37),r(39),r(184),r(92),r(44),r(1)),R=(r(346),r(2)),j=r(206),F=r.n(j),C=r(0),L=r(47),G=(r(137),r(137)),B={updateContructIndex:function(e,t){e.dispatch;(0,e.commit)("SET_CONTRUCT_INDEX",t.contructTxIndex)},updateCheckingFrom:function(e,t){e.dispatch;(0,e.commit)("SET_CHECKING_ADDRESS_FROM",t.checkingFrom)},updateCheckingTo:function(e,t){e.dispatch;(0,e.commit)("SET_CHECKING_ADDRESS_TO",t.checkingTo)},setSendLoading:function(e,t){e.dispatch;(0,e.commit)("SET_SEND_LOADING",t.loading)},setResendDisabled:function(e,t){e.dispatch;(0,e.commit)("SET_RESEND_DISABLED",t.disabled)},setSendingIndex:function(e,t){e.dispatch;(0,e.commit)("SET_SENDING_INDEX",t.sendingIndex)},setCode:function(e,t){e.dispatch;(0,e.commit)("SET_CODE",t.code)},setInputType:function(e,t){e.dispatch;(0,e.commit)("SET_INPUT_TYPE",t.type)},setHeaderClosed:function(e,t){e.dispatch;(0,e.commit)("SET_HEADER_CLOSED",t.closed)},updateLanguage:function(e,t){e.dispatch;var r=e.commit,n=t.language;try{r("SET_LANGUAGE",n),localStorage.language=n}catch(e){}},checkAddressIsValid:(w=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var address;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch,t.commit,address=r.address,e.abrupt("return","0x0000000000000000000000000000000000000000"!=address&&Object(L.a)(address));case 3:case"end":return e.stop()}}),e)}))),function(e,t){return w.apply(this,arguments)}),initBulksender:(_=Object(y.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.rootState,t.rootGetters,t.dispatch,t.commit,t.state;case 1:case"end":return e.stop()}}),e)}))),function(e){return _.apply(this,arguments)}),initBaseParams:(O=Object(y.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.rootState,t.rootGetters,t.dispatch,t.commit,t.state;case 1:case"end":return e.stop()}}),e)}))),function(e){return O.apply(this,arguments)}),parseInsertAddresses:(T=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rootState,n=t.dispatch,t.commit,o=r.insertedAddress,d=(d=o.replace(/(\n[\s|\t]*\r*\n)/g,"\n").replace(/^\s+|\s+$/gm,"")).split("\n"),e.next=6,n("checkInsertAddresses",{addresses:d});case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)}))),function(e,t){return T.apply(this,arguments)}),parseInsertTxs:(E=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rootState,n=t.dispatch,t.commit,o=r.insertedAddress,d=(d=o.replace(/(\n[\s|\t]*\r*\n)/g,"\n").replace(/^\s+|\s+$/gm,"")).split("\n"),e.next=6,n("checkInsertTxs",{addresses:d});case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)}))),function(e,t){return E.apply(this,arguments)}),prepareTransactions:(I=Object(y.a)(regeneratorRuntime.mark((function e(t){var r,n,o,d,c,l,m,f,address,h,S,v,A,x,D,k,I,E,T,O,_,w,N,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.rootState,n=t.rootGetters,o=t.state,d=t.dispatch,c=t.commit,l=r.token,m=l.allowanceEnough,f=l.balanceEnough,address=l.address,h=l.gasForProcessing,r.metamask.netId,e.next=5,d("checkTheLessBalance");case 5:if(S=e.sent,!(m&&f&&S)){e.next=31;break}v=address,A=r.checkBulksend.addressInfo,x=n["metamask/networkConfig"].blockConfig,D=r.bulksender,k=D.commonExtraGas,I=D.defaultBlockConfig,null==x&&(x=I),E=x.blockGasLimit,T=Object.assign({},A),O=T.batches,_=0,w=[],N=regeneratorRuntime.mark((function e(){var t,r,n,l,m,f,S,A;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c("SET_CONTRUCT_INDEX",y+1),t=O[y],r=Object.assign({},t),n=r.addressValues,l=[],m=[],f=[],n.forEach((function(e){l.push(e.address),m.push(e.amount),null!=e.tokenId&&f.push(e.tokenId)})),S=0,!l.length||!m.length){e.next=13;break}return e.next=12,d("bulksender/estimateGasForBatchTransfer",{tokenAddress:v,addresses:l,amounts:m,tokenIds:f},{root:!0});case 12:S=e.sent;case 13:if(-1!=S){e.next=15;break}throw Error("EstimateCostForTransferOfHolder error");case 15:(h>0||o.queryLimitForBadAddress<=o.queryLimitForBadAddressSpecialProcess)&&(A=S,0==y?h>0&&(A=2*S):(y>0&&(A=2*S),y==O.length-1&&(A=3*S)),A>E&&(A=E),S=A),r.estimateGas=S,_+=S,w.push(r);case 19:case"end":return e.stop()}}),e)})),y=0;case 19:if(!(y<O.length)){e.next=24;break}return e.delegateYield(N(),"t0",21);case 21:y++,e.next=19;break;case 24:return T.batches=w,T.totalGas=_+k*O.length,c("SET_ADDRESS_INFO",T),e.next=29,d("estimateExtraFee");case 29:return e.next=31,d("estimateTotalEtherCost");case 31:return e.abrupt("return",!0);case 32:case"end":return e.stop()}}),e)}))),function(e){return I.apply(this,arguments)}),checkDuplicatedTokenIds:(k=Object(y.a)(regeneratorRuntime.mark((function e(t){var r,n,o,d,c,l,m,f,h,S,v,A,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t.state,r=t.rootState,n=t.commit,t.rootGetters,t.dispatch,o=r.checkBulksend.addressInfo,r.metamask.ethAccount,d=Object.assign({},o),c=d.validData,l=[],m=[],f=Object(C.a)(o.validAmount),h=[],S={},v=0;v<c.length;v++)A=c[v],null==S[A.tokenId]?(S[A.tokenId]=!0,h.push(A)):(l.push({index:v,address:A.address,amount:A.amount,tokenId:A.tokenId,errorType:6}),m.push(v),x=Object(C.a)(A.amount),f=f.minus(x));if(!(m.length>0)){e.next=19;break}return d.validData=h,d.validAmount=f.toString(10),d.invalidAddressesIndexes=m,d.invalidAddresses=l,n("SET_ADDRESS_INFO",d),e.abrupt("return",!0);case 19:return e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e)}))),function(e){return k.apply(this,arguments)}),checkInsertTxs:(D=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l,m,f,h,S,v,A,x,D,k,I,E,T,O;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.rootState,t.rootGetters,t.dispatch,o=t.commit,d=r.addresses,c=(new Date).getTime(),l=n.token.tokenSelected,m=18,null!=l&&(m=l.decimals),f=new Set,h=[],S=new Set,v=[],A=Object(C.a)(0),x=Object(C.a)(0),D=[],k=[],I=[],E={},T=function(e){return/^0x([A-Fa-f0-9]{64})$/.test(e)},d.forEach((function(e,t){var r=e.split(",");r.length<2&&(r=e.split("，"));var address=r[0].replace(/(\n[\s|\t]*\r*\n)/g,"\n").replace(/^\s+|\s+$/gm,""),n=1,o=!0,d=!1;if(!T(address)||"0x0000000000000000000000000000000000000000"==address.toLowerCase()||isNaN(n)||!isNaN(n)&&Number(n)<=0){var c=0;(isNaN(n)||Number(n)<=0)&&(c=1,T(address)||(c=2)),S.add({index:t,address:address,amount:n,errorType:c}),v.push(t),o=!1}else{var l=!1,O=n.toString().split(".");if(O.length>1&&O[1].length>m&&(l=!0),l)c=4,S.add({index:t,address:address,amount:n,errorType:c}),v.push(t),o=!1;else{var _=Object(C.a)(n);n=_.toString(10),x=x.plus(_),D.push({address:address,amount:n,amountStr:_.toString(10)}),null==E[address]?(E[address]=!0,k.push({address:address,amount:n,amountStr:_.toString(10)}),A=A.plus(_)):(d=!0,f.add(address),h.push(t))}}var w=n;try{w=Object(C.a)(n).toString(10)}catch(e){}I.push({address:address,amount:n,amountStr:w,valid:o,duplicated:d})})),O=(new Date).getTime(),console.info("addresses processing time",(O-c)/1e3),A=A.toString(10),x=x.toString(10),f=Array.from(f),S=Array.from(S),o("SET_TXS_INFO",{validAmount:x,nonDuplicatedAmount:A,originalData:I,originalAddressStr:d,duplicatedAddresses:f,duplicatedAddressesIndexes:h,invalidAddresses:S,invalidAddressesIndexes:v,validData:D,nonDuplicatedData:k,finalData:I,finalAmount:A});case 27:case"end":return e.stop()}}),e)}))),function(e,t){return D.apply(this,arguments)}),checkInsertAddresses:(x=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l,m,f,h,S,v,A,x,D,k,I,E,T,O,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.rootState,o=t.rootGetters,d=t.dispatch,c=t.commit,l=r.addresses,!o["token/isNFTToken"]){e.next=7;break}return e.next=6,d("checkInsertAddressesForNFT",{addresses:l});case 6:return e.abrupt("return");case 7:m=(new Date).getTime(),f=n.token.tokenSelected,h=18,null!=f&&(h=f.decimals),S=new Set,v=[],A=new Set,x=[],D=Object(C.a)(0),k=Object(C.a)(0),I=[],E=[],T=[],O={},l.forEach((function(e,t){var r=e.split(",");r.length<2&&(r=e.split("，"));var address=r[0].replace(/(\n[\s|\t]*\r*\n)/g,"\n").replace(/^\s+|\s+$/gm,""),n=r[1],o=!0,d=!1;try{address.startsWith("xdc")&&(address=address.replace("xdc","0x"))}catch(e){}if(!Object(L.a)(address)||"0x0000000000000000000000000000000000000000"==address.toLowerCase()||isNaN(n)||!isNaN(n)&&Number(n)<=0){var c=0;(isNaN(n)||Number(n)<=0)&&(c=1,Object(L.a)(address)||(c=2)),A.add({index:t,address:address,amount:n,errorType:c}),x.push(t),o=!1}else{var l=!1,m=n.toString().split(".");if(m.length>1&&m[1].length>h&&(l=!0),l)c=4,A.add({index:t,address:address,amount:n,errorType:c}),x.push(t),o=!1;else{address=Object(R.toChecksumAddress)(address);var f=Object(C.a)(n);n=f.toString(10),k=k.plus(f),I.push({address:address,amount:n,amountStr:f.toString(10)}),null==O[address]?(O[address]=!0,E.push({address:address,amount:n,amountStr:f.toString(10)}),D=D.plus(f)):(d=!0,S.add(address),v.push(t))}}var _=n;try{_=Object(C.a)(n).toString(10)}catch(e){}T.push({address:address,amount:n,amountStr:_,valid:o,duplicated:d})})),_=(new Date).getTime(),console.info("addresses processing time",(_-m)/1e3),D=D.toString(10),k=k.toString(10),S=Array.from(S),A=Array.from(A),c("SET_ADDRESS_INFO",{validAmount:k,nonDuplicatedAmount:D,originalData:T,originalAddressStr:l,duplicatedAddresses:S,duplicatedAddressesIndexes:v,invalidAddresses:A,invalidAddressesIndexes:x,validData:I,nonDuplicatedData:E,finalData:T,finalAmount:D});case 31:case"end":return e.stop()}}),e)}))),function(e,t){return x.apply(this,arguments)}),checkInsertAddressesForNFT:(A=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l,m,f,h,S,v,A,x,D,k,I,E,T,O;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.rootState,o=t.rootGetters,d=t.commit,c=r.addresses,null!=(l=n.token.tokenSelected)&&l.decimals,m=o["token/isERC1155"],f=(new Date).getTime(),h=new Set,S=[],v=new Set,A=[],x=Object(C.a)(0),D=Object(C.a)(0),k=[],I=[],E=[],T={},c.forEach((function(e,t){var r=(e=e.replace("，",",")).split(","),address=r[0].replace(/(\n[\s|\t]*\r*\n)/g,"\n").replace(/^\s+|\s+$/gm,""),n=r[1],o="0";r.length>2&&(o=r[2]);try{address.startsWith("xdc")&&(address=address.replace("xdc","0x"))}catch(e){}var d=!0,c=!1;if(!Object(L.a)(address)||"0x0000000000000000000000000000000000000000"==address.toLowerCase()||isNaN(n)||isNaN(o)){var l=0;isNaN(o)&&(l=7,Object(L.a)(address)||(l=10,isNaN(n)||(l=100)),isNaN(n)||(l=9)),isNaN(n)&&(l=8,Object(L.a)(address)||(l=11)),v.add({index:t,address:address,amount:o,tokenId:n,errorType:l}),A.push(t),d=!1}else{var f=!1,O=(l=0,parseInt(o)<=0&&m);if(o%1!=0||O?(f=!0,l=7,O&&(l=101),n%1!=0&&(l=9)):n%1!=0&&(f=!0,l=8),f)v.add({index:t,address:address,amount:o,tokenId:n,errorType:l}),A.push(t),d=!1;else{address=Object(R.toChecksumAddress)(address);var _=Object(C.a)(o);o=_.toString(10),D=D.plus(_),k.push({address:address,amount:o,tokenId:n,amountStr:_.toString(10)}),null==T[address]?(T[address]=!0,I.push({address:address,amount:o,tokenId:n,amountStr:_.toString(10)}),x=x.plus(_)):(c=!0,h.add(address),S.push(t))}}var w=o;try{w=Object(C.a)(o).toString(10)}catch(e){}E.push({address:address,amount:o,tokenId:n,amountStr:w,valid:d,duplicated:c})})),O=(new Date).getTime(),console.info("addresses processing time",(O-f)/1e3),x=x.toString(10),D=D.toString(10),h=Array.from(h),v=Array.from(v),d("SET_ADDRESS_INFO",{validAmount:D,nonDuplicatedAmount:x,originalData:E,originalAddressStr:c,duplicatedAddresses:h,duplicatedAddressesIndexes:S,invalidAddresses:v,invalidAddressesIndexes:A,validData:k,nonDuplicatedData:I,finalData:E,finalAmount:x});case 27:case"end":return e.stop()}}),e)}))),function(e,t){return A.apply(this,arguments)}),combineBalances:(v=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,o=t.commit,t.dispatch,t.state,Object(N.a)(r),d=[],c=n.checkBulksend.addressInfo,(l=Object.assign({},c)).validData.forEach((function(e){this[e.address]||(this[e.address]={address:e.address,amount:Object(C.a)(0)},d.push(this[e.address]));var t=Object(C.a)(e.amount),r=Object(C.a)(this[e.address].amount);this[e.address].amount=r.plus(t).toString(10),this[e.address].amountStr=r.plus(t).toString(10)}),Object.create(null)),l.combinedData=d,l.finalData=d,l.finalAmount=c.validAmount,l.invalidAddressesIndexes=[],l.invalidAddresses=[],l.duplicatedAddressesIndexes=[],l.duplicatedAddresses=[],o("SET_ADDRESS_INFO",l),e.abrupt("return",!0);case 15:case"end":return e.stop()}}),e)}))),function(e,t){return v.apply(this,arguments)}),keepFirstOne:(S=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,o=t.commit,t.dispatch,t.state,Object(N.a)(r),d=n.checkBulksend.addressInfo,(c=Object.assign({},d)).finalData=d.nonDuplicatedData,c.finalAmount=d.nonDuplicatedAmount,c.invalidAddressesIndexes=[],c.invalidAddresses=[],c.duplicatedAddressesIndexes=[],c.duplicatedAddresses=[],o("SET_ADDRESS_INFO",c),e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)}))),function(e,t){return S.apply(this,arguments)}),keepFirstOneForTxs:(h=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,o=t.commit,t.dispatch,t.state,Object(N.a)(r),d=n.checkBulksend.txs,c=d,(l=Object.assign({},c)).finalData=c.nonDuplicatedData,l.finalAmount=c.nonDuplicatedAmount,l.invalidAddressesIndexes=[],l.invalidAddresses=[],l.duplicatedAddressesIndexes=[],l.duplicatedAddresses=[],o("SET_TXS_INFO",l),e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)}))),function(e,t){return h.apply(this,arguments)}),keepDuplicated:(f=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,o=t.commit,t.dispatch,t.state,Object(N.a)(r),d=n.checkBulksend.addressInfo,(c=Object.assign({},d)).finalData=c.validData,c.finalAmount=d.validAmount,c.invalidAddressesIndexes=[],c.invalidAddresses=[],c.duplicatedAddressesIndexes=[],c.duplicatedAddresses=[],o("SET_ADDRESS_INFO",c),e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)}))),function(e,t){return f.apply(this,arguments)}),deleteInvalidTxs:(m=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l,m,f,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,o=t.commit,t.dispatch,t.state,Object(N.a)(r),d=n.checkBulksend.txs,c=d,l=Object.assign({},c),m=l.validData,l.duplicatedAddressesIndexes.length>0&&(f={},h=[],m.forEach((function(e,t){null!=f[e.address]?h.push(t):f[e.address]=!0})),l.duplicatedAddressesIndexes=h),l.finalData=m,l.finalAmount=c.validAmount,l.invalidAddressesIndexes=[],l.invalidAddresses=[],o("SET_TXS_INFO",l),e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)}))),function(e,t){return m.apply(this,arguments)}),deleteInvalidAddresses:(l=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l,m,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,o=t.commit,t.dispatch,t.state,Object(N.a)(r),d=n.checkBulksend.addressInfo,c=Object.assign({},d),l=c.validData,c.duplicatedAddressesIndexes.length>0&&(m={},f=[],l.forEach((function(e,t){null!=m[e.address]?f.push(t):m[e.address]=!0})),c.duplicatedAddressesIndexes=f),c.finalData=l,c.finalAmount=d.validAmount,c.invalidAddressesIndexes=[],c.invalidAddresses=[],o("SET_ADDRESS_INFO",c),e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)}))),function(e,t){return l.apply(this,arguments)}),readFileAsync:(c=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rootState,t.commit,t.dispatch,t.state,n=r.fileData,o=n,e.abrupt("return",new Promise((function(e,t){var r=new FileReader;r.onload=function(){for(var t="",n=new Uint8Array(r.result),o=n.byteLength,i=0;i<o;i++)t+=String.fromCharCode(n[i]);var d=F.a.read(t,{type:"binary",raw:!0}),c=d.SheetNames[0],l=d.Sheets[c],data=F.a.utils.sheet_to_csv(l);e(data)},r.onerror=t,r.readAsArrayBuffer(o)})));case 5:case"end":return e.stop()}}),e)}))),function(e,t){return c.apply(this,arguments)}),parseFile:(d=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rootState,t.commit,n=t.dispatch,t.rootGetters,t.state,o=r.fileData,e.prev=2,e.next=5,n("readFileAsync",{fileData:o});case 5:return d=e.sent,e.next=8,n("parseInsertAddresses",{insertedAddress:d});case 8:return e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e.catch(2),console.info(e.t0),e.next=16,n("uploadFile",{fileData:o});case 16:return c=e.sent,e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,null,[[2,11]])}))),function(e,t){return d.apply(this,arguments)}),parseFileForTxs:(o=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rootState,t.commit,n=t.dispatch,t.rootGetters,t.state,o=r.fileData,e.prev=2,e.next=5,n("readFileAsync",{fileData:o});case 5:return d=e.sent,e.next=8,n("parseInsertTxs",{insertedAddress:d});case 8:return e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e.catch(2),e.next=15,n("uploadFile",{fileData:o});case 15:return c=e.sent,e.abrupt("return",c);case 17:case"end":return e.stop()}}),e,null,[[2,11]])}))),function(e,t){return o.apply(this,arguments)}),getTxData:(n=Object(y.a)(regeneratorRuntime.mark((function e(t){var r,n,o,d,c,l,m,address,f,h,S,v,A,x,D,i,k,I,E,T,O,_,w,N,y,R,j,F,L;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.state,t.getters,n=t.rootGetters,o=t.rootState,d=t.dispatch,c=t.commit,n["metamask/networkConfig"].smartContractShortPollTime,o.bulksender.bulksenderAddress,l=o.token,m=l.tokenSelected,address=l.address,f=m.decimals,h=address,S=r.txs.finalData,v=Object.assign({},r.txs),A=[],x=[],D=[],i=0;case 12:if(!(i<S.length)){e.next=53;break}return e.prev=13,c("SET_QUERY_INDEX",i+1),k=S[i].address,I=void 0,e.next=20,d("metamask/getTransactionReceipt",{txHash:k},{root:!0});case 20:if(null==(E=e.sent)){e.next=43;break}if("0x1"!=(T=E.status)&&1!=T){e.next=41;break}return e.next=26,d("metamask/getTransactionByHash",{txHash:k},{root:!0});case 26:if(I=e.sent,e.prev=27,"0x0000000000000000000000000000000000000000"!=address){e.next=32;break}!function(){var e=G.decodeParameters([{name:"_to",type:"address[]"},{name:"_values",type:"uint256[]"},{name:"_uniqueId",type:"bytes32"}],I.input.slice(10)),t=e._to,r=e._values;t.forEach((function(e,i){if(i){var t=r[i],n=e+","+(t=Object(C.a)(t).div(Object(C.a)(10).pow(Object(C.a)(f))).toString(10));x.push(n),D.push(n.toLowerCase())}}))}(),e.next=35;break;case 32:if("continue"!==function(){var e=G.decodeParameters([{name:"_token",type:"address"},{name:"_to",type:"address[]"},{name:"_values",type:"uint256[]"},{name:"_uniqueId",type:"bytes32"}],I.input.slice(10)),t=e._token,r=e._to,n=e._values;if(t.toLowerCase()!=h.toLowerCase())return A.push(k),"continue";r.forEach((function(e,i){if(i){var t=n[i],r=e+","+(t=Object(C.a)(t).div(Object(C.a)(10).pow(Object(C.a)(f))).toString(10));x.push(r),D.push(r.toLowerCase())}}))}()){e.next=35;break}return e.abrupt("continue",50);case 35:e.next=41;break;case 37:e.prev=37,e.t0=e.catch(27),console.info(e.t0),A.push(k);case 41:e.next=44;break;case 43:A.push(k);case 44:e.next=50;break;case 46:e.prev=46,e.t1=e.catch(13),console.info("checking error",e.t1),A.push(k);case 50:i++,e.next=12;break;case 53:return A.length?(w=[],N=[],y=[],S.forEach((function(e,t){A.includes(e.address)?(w.push({index:t,address:e.address,amount:e.amount,errorType:13}),N.push(t)):y.push(e)})),w.length>0&&(v.validData=y,v.invalidAddressesIndexes=N,v.invalidAddresses=w,c("SET_TXS_INFO",v)),O=!1,_=A):_=x,R=Object.assign({},r.addressInfo),j=R.finalData,F=[],L=[],j.forEach((function(e,i){var t=e.address+","+e.amountStr;D.includes(t.toLowerCase())&&F.push(t)})),j.forEach((function(e,i){var t=e.address+","+e.amountStr;D.includes(t.toLowerCase())||L.push(t)})),R.matched=F,R.notReceived=L,R.received=x,c("SET_ADDRESS_INFO",R),e.abrupt("return",{status:O,result:_});case 65:case"end":return e.stop()}}),e,null,[[13,46],[27,37]])}))),function(e){return n.apply(this,arguments)})};t.default={namespaced:!0,state:function(){return{inputType:0,addressesInsertWay:0,code:"",queryLimit:1e3,queryLimitForBadAddress:210,queryLimitForBadAddressOrigional:210,queryLimitForBadAddressSpecialProcess:80,queryIndex:1,addressInfo:{taskID:"",nonAmount:0,validAmount:0,nonDuplicatedAmount:0,originalData:[],originalAddressStr:[],duplicatedAddresses:[],duplicatedAddressesIndexes:[],invalidAddresses:[],invalidAddressesIndexes:[],validData:[],combinedData:[],nonDuplicatedData:[],finalData:[],finalAmount:0,batches:[],times:1,batchSize:100,holders:[],freshers:[],matched:[],notReceived:[],received:[],estimateGasUsed:0,baseFeeEnough:!0},txs:{taskID:"",nonAmount:0,validAmount:0,nonDuplicatedAmount:0,originalData:[],originalAddressStr:[],duplicatedAddresses:[],duplicatedAddressesIndexes:[],invalidAddresses:[],invalidAddressesIndexes:[],validData:[],combinedData:[],nonDuplicatedData:[],finalData:[],finalAmount:0,batches:[],times:1,batchSize:100,holders:[],freshers:[],estimateGasUsed:0,baseFeeEnough:!0},balanceBurners:[{address:"Loading",balanceDisplay:"0",balance:0}]}},getters:{addressInfo:function(e){return e.addressInfo}},mutations:{SET_INPUT_TYPE:function(e,t){e.inputType=t},SET_CODE:function(e,code){e.code=code},SET_ORIGIN_INPUT_DATA:function(e,t){e.originInputData=t},SET_ADDRESS_INFO:function(e,t){e.addressInfo=t},SET_TXS_INFO:function(e,t){e.txs=t},SET_SEND_LOADING:function(e,t){e.sendLoading=t},SET_ADDRESSES_INSERT_WAY:function(e,t){e.addressesInsertWay=t},SET_SENDING_INDEX:function(e,t){e.sendingIndex=t},SET_CONTRUCT_INDEX:function(e,t){e.contructTxIndex=t},SET_CHECKING_ADDRESS_FROM:function(e,t){e.checkingAddressFrom=t},SET_CHECKING_ADDRESS_TO:function(e,t){e.checkingAddressTo=t},SET_QUERY_INDEX:function(e,t){e.queryIndex=t}},actions:B}},438:function(e,t,r){"use strict";var n=r(21),o=r(730),d=r.n(o);r(1294),r(1304),r(1305),r(194),r(698),r(699),r(1306),r(1307),r(700),r(1308),r(701),r(1309),r(1311),r(1312),r(1313),r(1315),r(1316),r(702),r(1317),r(1318),r(1319),r(1320),r(1321);n.a.use(d.a)},439:function(e,t,r){"use strict";var n=r(21);t.a=function(e,t){t("bus",new n.a)}},440:function(e,t,r){"use strict";r(39),r(48),r(1322),r(459),r(92),r(112),r(113),r(37),r(184),r(249),r(1324);var n=r(21),o=function(e,t){return"".concat(Number.parseFloat(e.toFixed(t)))},d={1e3:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;if("string"==typeof e){if(isNaN(e))return e;e=Number(e)}if("number"==typeof e){try{t=e%1==0||e<1?0:-1==t?4:e.toString().split(".")[1].length}catch(e){}return 0==t?e.toLocaleString():o(e,t).replace(/(\d)(?=(\d{3})+\.)/g,"$1,")}},truncate:function(e,t){return null!=e?e.length>t?e.substr(0,t/4)+"..."+e.substr(e.length-t/4,t/4):e:""},lower:function(e){return console.info(e),e.toLowerCase()},substr:function(e,t){try{return e.toString().substr(0,t)}catch(t){return e}},upper:function(e){return e.toUpperCase()},inDays:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,r=e.getTime()-t.getTime(),n=Math.ceil(r/864e5);return n},inTime:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;if(e){var time,r,n=6e4,o=60*n,d=24*o,c=30*d,l=365*d,m=e.getTime()-t.getTime();return m<o?((time=Math.floor(m/n))<=0&&(time=1),r="Minutes"):m<d?((time=Math.floor(m/o))<=0&&(time=1),r="Hours"):m<c?((time=Math.floor(m/d))<=0&&(time=1),r="Days"):m<l?((time=Math.floor(m/c))<=0&&(time=1),r="Months"):((time=Math.floor(m/l))<=0&&(time=1),r="Years"),time+" "+r}return""},dateFormat:function(e,t){var r,n=new Date(e),o={"Y+":n.getFullYear().toString(),"m+":(n.getMonth()+1).toString(),"d+":n.getDate().toString(),"H+":n.getHours().toString(),"M+":n.getMinutes().toString(),"S+":n.getSeconds().toString()};for(var d in o)(r=new RegExp("("+d+")").exec(t))&&(t=t.replace(r[1],1==r[1].length?o[d]:o[d].padStart(r[1].length,"0")));return t},formatNumber:function(e,t){return parseFloat(e).toFixed(t)}};Object.keys(d).forEach((function(e){n.a.filter(e,d[e])}))}}]);