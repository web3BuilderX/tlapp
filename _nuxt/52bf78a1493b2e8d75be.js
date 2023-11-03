(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1161:function(t,e,r){const n=r(215),o=r(1162);function c(t){const e=new Error("Expect argument to be non-empty array");if("object"!=typeof t||!t.length)throw e;const data=t.map((function(t){return"bytes"===t.type?n.toBuffer(t.value):t.value})),r=t.map((function(t){return t.type})),c=t.map((function(t){if(!t.name)throw e;return t.type+" "+t.name}));return o.soliditySHA3(["bytes32","bytes32"],[o.soliditySHA3(new Array(t.length).fill("string"),c),o.soliditySHA3(r,data)])}function l(t,e){const r=n.toBuffer(e),o=n.fromRpcSig(r);return n.ecrecover(t,o.v,o.r,o.s)}function h(t){const e=n.toBuffer(t.data);return l(n.hashPersonalMessage(e),t.sig)}function f(t,e){for(var r=""+t;r.length<e;)r="0"+r;return r}t.exports={concatSig:function(t,e,s){const r=n.fromSigned(e),o=n.fromSigned(s),c=n.bufferToInt(t),l=f(n.toUnsigned(r).toString("hex"),64),h=f(n.toUnsigned(o).toString("hex"),64),y=n.stripHexPrefix(n.intToHex(c));return n.addHexPrefix(l.concat(h,y)).toString("hex")},normalize:function(input){if(input){if("number"==typeof input){const t=n.toBuffer(input);input=n.bufferToHex(t)}if("string"!=typeof input){var t="eth-sig-util.normalize() requires hex string or integer input.";throw new Error(t+=" received "+typeof input+": "+input)}return n.addHexPrefix(input.toLowerCase())}},personalSign:function(t,e){var r=n.toBuffer(e.data),o=n.hashPersonalMessage(r),c=n.ecsign(o,t);return n.bufferToHex(this.concatSig(c.v,c.r,c.s))},recoverPersonalSignature:function(t){const e=h(t),r=n.publicToAddress(e);return n.bufferToHex(r)},extractPublicKey:function(t){return"0x"+h(t).toString("hex")},typedSignatureHash:function(t){const e=c(t);return n.bufferToHex(e)},signTypedData:function(t,e){const r=c(e.data),o=n.ecsign(r,t);return n.bufferToHex(this.concatSig(o.v,o.r,o.s))},recoverTypedSignature:function(t){const e=l(c(t.data),t.sig),r=n.publicToAddress(e);return n.bufferToHex(r)}}},366:function(t,e,r){const n=r(206),o=r(1114)();function c(t){this.currentProvider=t}function l(t){return function(){const e=this;var r=[].slice.call(arguments),n=r.pop();e.sendAsync({method:t,params:r},n)}}function h(t,e){return function(){const r=this;var n=[].slice.call(arguments),o=n.pop();n.length<t&&n.push("latest"),r.sendAsync({method:e,params:n},o)}}t.exports=c,c.prototype.getBalance=h(2,"eth_getBalance"),c.prototype.getCode=h(2,"eth_getCode"),c.prototype.getTransactionCount=h(2,"eth_getTransactionCount"),c.prototype.getStorageAt=h(3,"eth_getStorageAt"),c.prototype.call=h(2,"eth_call"),c.prototype.protocolVersion=l("eth_protocolVersion"),c.prototype.syncing=l("eth_syncing"),c.prototype.coinbase=l("eth_coinbase"),c.prototype.mining=l("eth_mining"),c.prototype.hashrate=l("eth_hashrate"),c.prototype.gasPrice=l("eth_gasPrice"),c.prototype.accounts=l("eth_accounts"),c.prototype.blockNumber=l("eth_blockNumber"),c.prototype.getBlockTransactionCountByHash=l("eth_getBlockTransactionCountByHash"),c.prototype.getBlockTransactionCountByNumber=l("eth_getBlockTransactionCountByNumber"),c.prototype.getUncleCountByBlockHash=l("eth_getUncleCountByBlockHash"),c.prototype.getUncleCountByBlockNumber=l("eth_getUncleCountByBlockNumber"),c.prototype.sign=l("eth_sign"),c.prototype.sendTransaction=l("eth_sendTransaction"),c.prototype.sendRawTransaction=l("eth_sendRawTransaction"),c.prototype.estimateGas=l("eth_estimateGas"),c.prototype.getBlockByHash=l("eth_getBlockByHash"),c.prototype.getBlockByNumber=l("eth_getBlockByNumber"),c.prototype.getTransactionByHash=l("eth_getTransactionByHash"),c.prototype.getTransactionByBlockHashAndIndex=l("eth_getTransactionByBlockHashAndIndex"),c.prototype.getTransactionByBlockNumberAndIndex=l("eth_getTransactionByBlockNumberAndIndex"),c.prototype.getTransactionReceipt=l("eth_getTransactionReceipt"),c.prototype.getUncleByBlockHashAndIndex=l("eth_getUncleByBlockHashAndIndex"),c.prototype.getUncleByBlockNumberAndIndex=l("eth_getUncleByBlockNumberAndIndex"),c.prototype.getCompilers=l("eth_getCompilers"),c.prototype.compileLLL=l("eth_compileLLL"),c.prototype.compileSolidity=l("eth_compileSolidity"),c.prototype.compileSerpent=l("eth_compileSerpent"),c.prototype.newFilter=l("eth_newFilter"),c.prototype.newBlockFilter=l("eth_newBlockFilter"),c.prototype.newPendingTransactionFilter=l("eth_newPendingTransactionFilter"),c.prototype.uninstallFilter=l("eth_uninstallFilter"),c.prototype.getFilterChanges=l("eth_getFilterChanges"),c.prototype.getFilterLogs=l("eth_getFilterLogs"),c.prototype.getLogs=l("eth_getLogs"),c.prototype.getWork=l("eth_getWork"),c.prototype.submitWork=l("eth_submitWork"),c.prototype.submitHashrate=l("eth_submitHashrate"),c.prototype.sendAsync=function(t,e){var data;this.currentProvider.sendAsync((data=t,n({id:o(),jsonrpc:"2.0",params:[]},data)),(function(t,r){if(!t&&r.error&&(t=new Error("EthQuery - RPC Error - "+r.error.message)),t)return e(t);e(null,r.result)}))}},760:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r(761);function o(t){return"string"==typeof t&&(!!/^(0x)?[0-9a-f]{512}$/i.test(t)&&!(!/^(0x)?[0-9a-f]{512}$/.test(t)&&!/^(0x)?[0-9A-F]{512}$/.test(t)))}function c(t,e){"object"==typeof e&&e.constructor===Uint8Array&&(e=n.bytesToHex(e));const r=n.keccak256(e).replace("0x","");for(let i=0;i<12;i+=4){const e=(parseInt(r.substr(i,2),16)<<8)+parseInt(r.substr(i+2,2),16)&2047,n=1<<e%4;if((l(t.charCodeAt(t.length-1-Math.floor(e/4)))&n)!==n)return!1}return!0}function l(t){if(t>=48&&t<=57)return t-48;if(t>=65&&t<=70)return t-55;if(t>=97&&t<=102)return t-87;throw new Error("invalid bloom")}function h(t){return"string"==typeof t&&(!!/^(0x)?[0-9a-f]{64}$/i.test(t)&&!(!/^(0x)?[0-9a-f]{64}$/.test(t)&&!/^(0x)?[0-9A-F]{64}$/.test(t)))}function f(address){return"string"==typeof address&&(!!address.match(/^(0x)?[0-9a-fA-F]{40}$/)||!!address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/))}e.isBloom=o,e.isInBloom=c,e.isUserEthereumAddressInBloom=function(t,e){if(!o(t))throw new Error("Invalid bloom given");if(!f(e))throw new Error(`Invalid ethereum address given: "${e}"`);return c(t,n.padLeft(e,64))},e.isContractAddressInBloom=function(t,e){if(!o(t))throw new Error("Invalid bloom given");if(!f(e))throw new Error(`Invalid contract address given: "${e}"`);return c(t,e)},e.isTopicInBloom=function(t,e){if(!o(t))throw new Error("Invalid bloom given");if(!h(e))throw new Error("Invalid topic");return c(t,e)},e.isTopic=h,e.isAddress=f},761:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r(225);function o(t){if(null==t)throw new Error("cannot convert null value to array");if("string"==typeof t){const e=t.match(/^(0x)?[0-9a-fA-F]*$/);if(!e)throw new Error("invalid hexidecimal string");if("0x"!==e[1])throw new Error("hex string must have 0x prefix");(t=t.substring(2)).length%2&&(t="0"+t);const r=[];for(let i=0;i<t.length;i+=2)r.push(parseInt(t.substr(i,2),16));return c(new Uint8Array(r))}if(function(t){if(!t||parseInt(String(t.length))!=t.length||"string"==typeof t)return!1;for(let i=0;i<t.length;i++){const e=t[i];if(e<0||e>=256||parseInt(String(e))!=e)return!1}return!0}(t))return c(new Uint8Array(t));throw new Error("invalid arrayify value")}function c(t){return void 0!==t.slice||(t.slice=()=>{const e=Array.prototype.slice.call(arguments);return c(new Uint8Array(Array.prototype.slice.apply(t,e)))}),t}e.keccak256=function(data){return"0x"+n.keccak_256(o(data))},e.padLeft=(t,e)=>{const r=/^0x/i.test(t)||"number"==typeof t,n=e-(t=t.toString().replace(/^0x/i,"")).length+1>=0?e-t.length+1:0;return(r?"0x":"")+new Array(n).join("0")+t},e.bytesToHex=function(t){const e=[];for(let i=0;i<t.length;i++)e.push((t[i]>>>4).toString(16)),e.push((15&t[i]).toString(16));return`0x${e.join("").replace(/^0+/,"")}`},e.toByteArray=o}}]);