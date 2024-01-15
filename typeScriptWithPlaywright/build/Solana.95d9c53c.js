(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function t(t){return t&&t.__esModule?t.default:t}var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;e.register("k4oSe",(function(n,r){var o,i,a,u,l;o=n.exports,Object.defineProperty(o,"__esModule",{value:!0,configurable:!0}),i=n.exports,a="default",u=function(){return _},l=function(t){return _=t},Object.defineProperty(i,a,{get:u,set:l,enumerable:!0,configurable:!0});var s,c,f=e("iBvu5"),h=e("9UXyL"),d=e("6rT8n").Buffer,p=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{l(r.next(t))}catch(t){i(t)}}function u(t){try{l(r.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}l((r=r.apply(t,e||[])).next())}))},y=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},v=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},b=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},g=255,w=4,T=5,E=6,I=7;(c=s||(s={}))[c.BLIND_SIGNATURE_REQUIRED=26632]="BLIND_SIGNATURE_REQUIRED";var S,R,_=function(){function e(t,e){void 0===e&&(e="solana_default_scramble_key"),this.transport=t,this.transport.decorateAppAPIMethods(this,["getAddress","signTransaction","getAppConfiguration"],e)}return e.prototype.getAddress=function(t,e){return void 0===e&&(e=!1),p(this,void 0,void 0,(function(){var n;return y(this,(function(r){switch(r.label){case 0:return n=this.pathToBuffer(t),[4,this.sendToDevice(T,e?1:0,n)];case 1:return[2,{address:r.sent()}]}}))}))},e.prototype.signTransaction=function(t,e){return p(this,void 0,void 0,(function(){var n,r,o;return y(this,(function(i){switch(i.label){case 0:return n=this.pathToBuffer(t),(r=d.alloc(1)).writeUInt8(1,0),o=d.concat([r,n,e]),[4,this.sendToDevice(E,1,o)];case 1:return[2,{signature:i.sent()}]}}))}))},e.prototype.signOffchainMessage=function(t,e){return p(this,void 0,void 0,(function(){var n,r,o;return y(this,(function(i){switch(i.label){case 0:return n=this.pathToBuffer(t),(r=d.alloc(1)).writeUInt8(1,0),o=d.concat([r,n,e]),[4,this.sendToDevice(I,1,o)];case 1:return[2,{signature:i.sent()}]}}))}))},e.prototype.getAppConfiguration=function(){return p(this,void 0,void 0,(function(){var t,e,n,r,o,i;return y(this,(function(a){switch(a.label){case 0:return[4,this.sendToDevice(w,0,d.alloc(0))];case 1:return t=v.apply(void 0,[a.sent(),5]),e=t[0],n=t[1],r=t[2],o=t[3],i=t[4],[2,{blindSigningEnabled:Boolean(e),pubKeyDisplayMode:n,version:"".concat(r,".").concat(o,".").concat(i)}]}}))}))},e.prototype.pathToBuffer=function(e){var n=e.split("/").map((function(t){return t.endsWith("'")||t.endsWith("h")?t:t+"'"})).join("/"),r=t(h).fromString(n).toPathArray();return this.serializePath(r)},e.prototype.serializePath=function(t){var e,n,r=d.alloc(1+4*t.length);r.writeUInt8(t.length,0);try{for(var o=b(t.entries()),i=o.next();!i.done;i=o.next()){var a=v(i.value,2),u=a[0],l=a[1];r.writeUInt32BE(l,1+4*u)}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return r},e.prototype.sendToDevice=function(t,e,n){return p(this,void 0,void 0,(function(){var r,o,i,a,u,l,c;return y(this,(function(h){switch(h.label){case 0:if(r=[f.StatusCodes.OK,s.BLIND_SIGNATURE_REQUIRED],o=0,i=0,!(n.length>g))return[3,3];h.label=1;case 1:return n.length-i>g?(a=n.slice(i,i+g),i+=g,[4,this.transport.send(224,t,e,2|o,a,r)]):[3,3];case 2:return u=h.sent(),this.throwOnFailure(u),o|=1,[3,1];case 3:return l=n.slice(i),[4,this.transport.send(224,t,e,o,l,r)];case 4:return c=h.sent(),this.throwOnFailure(c),[2,c.slice(0,c.length-2)]}}))}))},e.prototype.throwOnFailure=function(t){if(t.readUInt16BE(t.length-2)===s.BLIND_SIGNATURE_REQUIRED)throw new Error("Missing a parameter. Try enabling blind signature in the app")},e}();(R=S||(S={}))[R.LONG=0]="LONG",R[R.SHORT=1]="SHORT"}));
//# sourceMappingURL=Solana.95d9c53c.js.map
define=__define;})(window.define);