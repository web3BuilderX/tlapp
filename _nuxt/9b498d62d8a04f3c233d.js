(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{152:function(e,t,n){var r=n(11).Buffer,o=n(56),c=n(2),f=n(660).AbiCoder,m=n(660).ParamType,d=new f((function(e,t){return!e.match(/^u?int/)||o.isArray(t)||o.isObject(t)&&"BN"===t.constructor.name?t:t.toString()}));function h(){}var y=function(){};y.prototype.encodeFunctionSignature=function(e){return o.isObject(e)&&(e=c._jsonInterfaceMethodToString(e)),c.sha3(e).slice(0,10)},y.prototype.encodeEventSignature=function(e){return o.isObject(e)&&(e=c._jsonInterfaceMethodToString(e)),c.sha3(e)},y.prototype.encodeParameter=function(e,param){return this.encodeParameters([e],[param])},y.prototype.encodeParameters=function(e,t){var n=this;return e=n.mapTypes(e),t=t.map((function(param,t){let r=e[t];if("object"==typeof r&&r.type&&(r=r.type),param=n.formatParam(r,param),"string"==typeof r&&r.includes("tuple")){const e=d._getCoder(m.from(r)),t=(e,param)=>{if("array"===e.name)return param.map(p=>t(d._getCoder(m.from(e.type.replace("[]",""))),p));e.coders.forEach((e,i)=>{"tuple"===e.name?t(e,param[i]):param[i]=n.formatParam(e.name,param[i])})};t(e,param)}return param})),d.encode(e,t)},y.prototype.mapTypes=function(e){var t=this,n=[];return e.forEach((function(e){if("object"==typeof e&&"function"===e.type&&(e.type="bytes24"),t.isSimplifiedStructFormat(e)){var r=Object.keys(e)[0];n.push(Object.assign(t.mapStructNameAndType(r),{components:t.mapStructToCoderFormat(e[r])}))}else n.push(e)})),n},y.prototype.isSimplifiedStructFormat=function(e){return"object"==typeof e&&void 0===e.components&&void 0===e.name},y.prototype.mapStructNameAndType=function(e){var t="tuple";return e.indexOf("[]")>-1&&(t="tuple[]",e=e.slice(0,-2)),{type:t,name:e}},y.prototype.mapStructToCoderFormat=function(e){var t=this,n=[];return Object.keys(e).forEach((function(r){"object"!=typeof e[r]?n.push({name:r,type:e[r]}):n.push(Object.assign(t.mapStructNameAndType(r),{components:t.mapStructToCoderFormat(e[r])}))})),n},y.prototype.formatParam=function(e,param){const t=new RegExp(/^bytes([0-9]*)$/),n=new RegExp(/^bytes([0-9]*)\[\]$/),o=new RegExp(/^(u?int)([0-9]*)$/),f=new RegExp(/^(u?int)([0-9]*)\[\]$/);if(c.isBN(param)||c.isBigNumber(param))return param.toString(10);if(e.match(n)||e.match(f))return param.map(p=>this.formatParam(e.replace("[]",""),p));let m=e.match(o);if(m){let e=parseInt(m[2]||"256");e/8<param.length&&(param=c.leftPad(param,e))}if(m=e.match(t),m){r.isBuffer(param)&&(param=c.toHex(param));let e=parseInt(m[1]);if(e){let t=2*e;"0x"===param.substring(0,2)&&(t+=2),param.length<t&&(param=c.rightPad(param,2*e))}param.length%2==1&&(param="0x0"+param.substring(2))}return param},y.prototype.encodeFunctionCall=function(e,t){return this.encodeFunctionSignature(e)+this.encodeParameters(e.inputs,t).replace("0x","")},y.prototype.decodeParameter=function(e,t){return this.decodeParameters([e],t)[0]},y.prototype.decodeParameters=function(e,t){if(e.length>0&&(!t||"0x"===t||"0X"===t))throw new Error("Returned values aren't valid, did it run Out of Gas? You might also see this error if you are not using the correct ABI for the contract you are retrieving data from, requesting data from a block number that does not exist, or querying a node which is not fully synced.");var n=d.decode(this.mapTypes(e),"0x"+t.replace(/0x/i,"")),r=new h;return r.__length__=0,e.forEach((function(output,i){var e=n[r.__length__];e="0x"===e?null:e,r[i]=e,o.isObject(output)&&output.name&&(r[output.name]=e),r.__length__++})),r},y.prototype.decodeLog=function(e,data,t){var n=this;t=o.isArray(t)?t:[t],data=data||"";var r=[],c=[],f=0;e.forEach((function(input,i){input.indexed?(c[i]=["bool","int","uint","address","fixed","ufixed"].find((function(e){return-1!==input.type.indexOf(e)}))?n.decodeParameter(input.type,t[f]):t[f],f++):r[i]=input}));var m=data,d=m?this.decodeParameters(r,m):[],y=new h;return y.__length__=0,e.forEach((function(e,i){y[i]="string"===e.type?"":null,void 0!==d[i]&&(y[i]=d[i]),void 0!==c[i]&&(y[i]=c[i]),e.name&&(y[e.name]=y[i]),y.__length__++})),y};var l=new y;e.exports=l}}]);