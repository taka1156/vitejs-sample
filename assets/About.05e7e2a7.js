var e=Object.assign;import{d as t,p as r,i as a,o as n,c as u,F as o,l,m as i,j as s,t as c,n as d,q as p,r as v,w as f,a as m,b as y,s as $,h as b,u as g,v as h,x,y as w,z as _,A as S,B as k,C as j,D as E,E as q,G as A,H as R}from"./vendor.9993ab62.js";var V=t({name:"BaseErrors",props:{errors:{type:Array,default:()=>[]}}});const P=s("data-v-03e8ee52");r("data-v-03e8ee52");const C={key:0};a();const O=P(((e,t,r,a,s,d)=>0!==e.errors.length?(n(),u("div",C,[(n(!0),u(o,null,l(e.errors,((e,t)=>(n(),u("p",{class:"base-errors",key:`error_${t}`},c(e.$message),1)))),128))])):i("",!0)));V.render=O,V.__scopeId="data-v-03e8ee52";var I=t({name:"BaseLabel",props:{id:{type:String,required:!0}},setup:e=>({props:e})});I.render=function(e,t,r,a,o,l){return n(),u("label",{for:e.id},[d(e.$slots,"default")],8,["for"])};var M=t({name:"BaseCheckBox",components:{"base-label":I},props:{name:{type:String,required:!0},options:{type:Array,required:!0},value:{type:Array,required:!0}},setup(e,t){const r=p({values:[]});return{props:e,updateValue:e=>{if(e.target instanceof HTMLInputElement){const a=e.target.value;e.target.checked?r.values=[...r.values,a]:r.values=r.values.filter((e=>e!==a)),t.emit("update:value",r.values)}}}}});M.render=function(e,t,r,a,i,s){const d=v("base-label");return n(!0),u(o,null,l(e.options,(r=>(n(),u(d,{key:r.id,id:r.id},{default:f((()=>[m("input",{type:"checkbox",id:r.id,name:e.name,value:r.value,onChange:t[1]||(t[1]=(...t)=>e.updateValue&&e.updateValue(...t))},null,40,["id","name","value"]),y(c(r.label),1)])),_:2},1032,["id"])))),128)};var T=t({name:"BaseInput",props:{id:{type:String,required:!0},name:{type:String,required:!0},type:{type:String,required:!0},value:{type:String,required:!0},placeholder:{type:String,required:!0}},setup:(e,t)=>({props:e,updateValue:e=>{e.target instanceof HTMLInputElement&&t.emit("update:value",e.target.value)}})});const z=s("data-v-b32eb8f6")(((e,t,r,a,o,l)=>(n(),u("input",{id:e.id,name:e.name,type:e.type,value:e.value,placeholder:e.placeholder,onInput:t[1]||(t[1]=(...t)=>e.updateValue&&e.updateValue(...t))},null,40,["id","name","type","value","placeholder"]))));T.render=z,T.__scopeId="data-v-b32eb8f6";var B=t({name:"BaseRadio",components:{"base-label":I},props:{name:{type:String,required:!0},value:{type:String,required:!0},options:{type:Array,required:!0}},setup:(e,t)=>({props:e,updateValue:e=>{e.target instanceof HTMLInputElement&&t.emit("update:value",e.target.value)}})});B.render=function(e,t,r,a,i,s){const d=v("base-label");return n(!0),u(o,null,l(e.options,(r=>(n(),u(d,{key:r.id,id:r.id},{default:f((()=>[m("input",{type:"radio",id:r.id,name:e.name,value:r.value,onChange:t[1]||(t[1]=(...t)=>e.updateValue&&e.updateValue(...t))},null,40,["id","name","value"]),y(c(r.label),1)])),_:2},1032,["id"])))),128)};var F=t({name:"BaseSelect",props:{id:{type:String,required:!0},name:{type:String,required:!0},options:{type:Array,required:!0}},setup:(e,t)=>({props:e,updateValue:e=>{e.target instanceof HTMLSelectElement&&t.emit("update:value",e.target.value)}})});const N=s("data-v-440adbc5");r("data-v-440adbc5");const U=m("option",{disabled:"",selected:"",value:""},"選択してください",-1);a();const D=N(((e,t,r,a,i,s)=>(n(),u("select",{id:e.id,name:e.name,onChange:t[1]||(t[1]=(...t)=>e.updateValue&&e.updateValue(...t))},[U,(n(!0),u(o,null,l(e.options,(e=>(n(),u("option",{key:e.id,value:e.value},c(e.label),9,["value"])))),128))],40,["id","name"]))));F.render=D,F.__scopeId="data-v-440adbc5";var H=t({name:"BaseTextArea",props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:String,required:!0},rows:{type:Number,required:!0},cols:{type:Number,required:!0},placeholder:{type:String,required:!0}},setup:(e,t)=>({props:e,updateValue:e=>{e.target instanceof HTMLTextAreaElement&&t.emit("update:value",e.target.value)}})});const L=s("data-v-72171498")(((e,t,r,a,o,l)=>(n(),u("textarea",{id:e.id,name:e.name,placeholder:e.placeholder,rows:e.rows,cols:e.cols,value:e.value,onInput:t[1]||(t[1]=(...t)=>e.updateValue&&e.updateValue(...t))},null,40,["id","name","placeholder","rows","cols","value"]))));H.render=L,H.__scopeId="data-v-72171498";const G=[{id:"php",label:"PHP",value:"php"},{id:"ruby",label:"Ruby",value:"ruby"},{id:"python",label:"Python",value:"python"}],K=[{id:"vue",label:"Vue",value:"vue"},{id:"react",label:"React",value:"react"},{id:"angular",label:"Angular",value:"angular"}],W=[{id:"go",label:"Go",value:"go"},{id:"rust",label:"Rust",value:"Rust"}];function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,u=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(i){n=!0,u=i}finally{try{a||null==l.return||l.return()}finally{if(n)throw u}}return r}(e,t)||Z(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e){return function(e){if(Array.isArray(e))return ee(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Z(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){if(e){if("string"==typeof e)return ee(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ee(e,t):void 0}}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function te(e){return x(e)?e.value:e}function re(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce((function(r,a){return t.includes(a)||(r[a]=te(e[a])),r}),{})}function ae(e){return"function"==typeof e}function ne(e){return w(e)||_(e)}function ue(e,t,r,a,n,u){var o=n.$lazy,l=b(!!a.value),i=b(0);r.value=!1;var s=h([t,a],(function(n){var s,c=X(n,2);if(c[0],c[1],o&&!a.value)return!1;try{s=function(e,t){return e(te(t))}(e,t)}catch(d){s=Promise.reject(d)}i.value++,r.value=!!i.value,l.value=!0,Promise.resolve(s).then((function(e){var t;i.value--,r.value=!!i.value,u.value=e,l.value=void 0!==(t=e).$valid?!t.$valid:!t})).catch((function(e){i.value--,r.value=!!i.value,u.value=e,l.value=!0}))}),{immediate:!0});return{$invalid:l,$unwatch:s}}function oe(e,t,r,a,n,u){var o=Object.keys(e),l=a.get(n,e),i=b(!1);if(l){if(!l.$partial)return l;l.$unwatch(),i.value=l.$dirty.value}var s={$dirty:i,$path:n,$touch:function(){i.value||(i.value=!0)},$reset:function(){i.value&&(i.value=!1)}};return o.length?(o.forEach((function(r){s[r]=function(e,t,r,a){var n=b(!1),u=e.$params||{},o=b(null),l=ue(e.$validator,t,n,r,a,o),i=l.$invalid,s=l.$unwatch,c=e.$message;return{$message:ae(c)?$((function(){return c(re({$pending:n,$invalid:i,$params:re(u),$model:t,$response:o}))})):c||"",$params:u,$pending:n,$invalid:i,$response:o,$unwatch:s}}(e[r],t,s.$dirty,u)})),s.$invalid=$((function(){return o.some((function(e){return te(s[e].$invalid)}))})),s.$pending=$((function(){return o.some((function(e){return te(s[e].$pending)}))})),s.$error=$((function(){return s.$invalid.value&&s.$dirty.value})),s.$silentErrors=$((function(){return o.filter((function(e){return te(s[e].$invalid)})).map((function(e){var t=s[e];return p({$propertyPath:n,$property:r,$validator:e,$message:t.$message,$params:t.$params,$response:t.$response,$pending:t.$pending})}))})),s.$errors=$((function(){return s.$dirty.value?s.$silentErrors.value:[]})),s.$unwatch=function(){return o.forEach((function(e){s[e].$unwatch()}))},a.set(n,e,s),s):(l&&a.set(n,e,s),s)}function le(e){var t=e.validations,r=e.state,a=e.key,n=e.parentKey,u=e.childResults,o=e.resultsCache,l=e.globalConfig,i=void 0===l?{}:l,s=n?"".concat(n,".").concat(a):a,c=function(){var e=te(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),t=Object.keys(e),r={},a={},n={};return t.forEach((function(t){var u=e[t];switch(!0){case ae(u.$validator):r[t]=u;break;case ae(u):r[t]={$validator:u};break;case t.startsWith("$"):n[t]=u;break;default:a[t]=u}})),{rules:r,nestedValidators:a,config:n}}(t),d=c.rules,v=c.nestedValidators,f=c.config,m=Object.assign({},i,f),y=a?$((function(){var e=te(r);return e?te(e[a]):void 0})):r,b=oe(d,y,a,o,s,m),g=function(e,t,r,a,n){var u=Object.keys(e);return u.length?u.reduce((function(u,o){return u[o]=le({validations:e[o],state:t,key:o,parentKey:r,resultsCache:a,globalConfig:n}),u}),{}):{}}(v,y,s,o,m),w=function(e,t,r){var a=$((function(){return[t,r].filter((function(e){return e})).reduce((function(e,t){return e.concat(Object.values(te(t)))}),[])})),n=$({get:function(){return e.$dirty.value||!!a.value.length&&a.value.every((function(e){return e.$dirty}))},set:function(t){e.$dirty.value=t}}),u=$((function(){var t=te(e.$silentErrors)||[],r=a.value.filter((function(e){return(te(e).$silentErrors||[]).length})).reduce((function(e,t){return e.concat.apply(e,Y(t.$silentErrors))}),[]);return t.concat(r)})),o=$((function(){var t=te(e.$errors)||[],r=a.value.filter((function(e){return(te(e).$errors||[]).length})).reduce((function(e,t){return e.concat.apply(e,Y(t.$errors))}),[]);return t.concat(r)})),l=$((function(){return a.value.some((function(e){return e.$invalid}))||te(e.$invalid)||!1})),i=$((function(){return a.value.some((function(e){return te(e.$pending)}))||te(e.$pending)||!1})),s=$((function(){return a.value.some((function(e){return e.$dirty}))||a.value.some((function(e){return e.$anyDirty}))||n.value})),c=$((function(){return l.value&&n.value||!1})),d=function(){e.$touch(),a.value.forEach((function(e){e.$touch()}))};return a.value.length&&a.value.every((function(e){return e.$dirty}))&&d(),{$dirty:n,$errors:o,$invalid:l,$anyDirty:s,$error:c,$pending:i,$touch:d,$reset:function(){e.$reset(),a.value.forEach((function(e){e.$reset()}))},$silentErrors:u}}(b,g,u),_=w.$dirty,S=w.$errors,k=w.$invalid,j=w.$anyDirty,E=w.$error,A=w.$pending,R=w.$touch,V=w.$reset,P=w.$silentErrors,C=a?$({get:function(){return te(y)},set:function(e){_.value=!0;var t=te(r);x(t[a])?t[a].value=e:t[a]=e}}):null;if(a&&m.$autoDirty)var O=h(y,(function(){var e="_".concat(s,"_$watcher_"),t=o.get(e,{});_.value||R(),t&&t.$unwatch(),o.set(e,{},{$unwatch:O})}),{flush:"sync"});return p(Object.assign({},b,{$model:C,$dirty:_,$error:E,$errors:S,$invalid:k,$anyDirty:j,$pending:A,$touch:R,$reset:V,$path:s||"__root",$silentErrors:P},u&&{$getResultsForChild:function(e){return(u.value||{})[e]},$validate:function(){return new Promise((e=function(e){return _.value||R(),function(e,t,r){if(r)return t?t(e()):e();try{var a=Promise.resolve(e());return t?a.then(t):a}catch(n){return Promise.reject(n)}}(q,(function(){if(!A.value)return e(!k.value);var t=h(A,(function(){e(!k.value),t()}))}))},function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];try{return Promise.resolve(e.apply(this,t))}catch(a){return Promise.reject(a)}}));var e}},g))}var ie=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.storage=new Map}var t,r,a;return t=e,(r=[{key:"set",value:function(e,t,r){this.storage.set(e,{rules:t,result:r})}},{key:"checkRulesValidity",value:function(e,t,r){var a=Object.keys(r),n=Object.keys(t);return n.length===a.length&&!!n.every((function(e){return a.includes(e)}))&&n.every((function(e){return!t[e].$params||Object.keys(t[e].$params).every((function(a){return te(r[e].$params[a])===te(t[e].$params[a])}))}))}},{key:"get",value:function(e,t){var r=this.storage.get(e);if(r){var a=r.rules,n=r.result,u=this.checkRulesValidity(e,t,a),o=n.$unwatch?n.$unwatch:function(){return{}};return u?n:{$dirty:n.$dirty,$partial:!0,$unwatch:o}}}}])&&Q(t.prototype,r),a&&Q(t,a),e}(),se=Symbol("vuelidate#injectChiildResults"),ce=Symbol("vuelidate#removeChiildResults"),de=!0,pe=!1;function ve(e){var t=e.$scope,r={},a=b([]),n=$((function(){return a.value.reduce((function(e,t){return e[t]=te(r[t]),e}),{})}));var u=k(se,(function(){}));j(se,(function(e,n){var u=n.$registerAs,o=n.$scope;n.$stopPropagation||t===pe||o===pe||t!==de&&t!==o||(r[u]=e,a.value.push(u))}));var o=k(ce,(function(){}));return j(ce,(function(e){a.value=a.value.filter((function(t){return t!==e})),delete r[e]})),{childResults:n,sendValidationResultsToParent:u,removeValidationResultsFromParent:o}}function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function me(e){return"function"==typeof e}function ye(e){return null!==e&&"object"===fe(e)&&!Array.isArray(e)}function $e(e){return me(e.$validator)?e:{$validator:e}}var be=function(e){if(e=A(e),Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===fe(e)){for(var t in e)return!0;return!1}return!!String(e).length};function ge(e){return function(t){return t=A(t),!be(t)||e.test(t)}}var he=Object.freeze({__proto__:null,withParams:function(e,t){if(!ye(e))throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided '.concat(fe(e)));if(!ye(t)&&!me(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");var r=$e(t);return r.$params=Object.assign({},r.$params,e),r},withMessage:function(e,t){if(!me(e)&&"string"!=typeof A(e))throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided '.concat(fe(e)));if(!ye(t)&&!me(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");var r=Object.assign({},$e(t));return r.$message=e,r},req:be,len:function(e){return e=A(e),Array.isArray(e)?e.length:"object"===fe(e)?Object.keys(e).length:String(e).length},regex:ge,unwrap:A}),xe={$validator:ge(/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/),$message:"Value is not a valid email address"};var we={$validator:function(e){return"string"==typeof e&&(e=e.trim()),be(e)},$message:"Value is required"},_e=t({name:"FormBox",components:{"base-label":I,"base-input":T,"base-text-area":H,"base-check-box":M,"base-radio":B,"base-select":F},setup(e,t){const r=p({sampleName:"",sampleEmail:"",samplePassword:"",sampleTextarea:"",sampleRadio:"",sampleCheck:[],sampleSelect:""}),a=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};1===arguments.length&&(r=e,e=void 0,t=void 0);var a=r,n=a.$registerAs,u=a.$scope,o=void 0===u?de:u,l=a.$stopPropagation,i=E(),s=i.type;if(!n){var c=i.uid||i._uid;n="_vuelidate_".concat(c)}var d=b({}),v=new ie,f=ve({$scope:o,$stopPropagation:l}),m=f.childResults,y=f.sendValidationResultsToParent,w=f.removeValidationResultsFromParent;if(!e&&s.validations){var _=s.validations;t=b({}),g((function(){function e(t){return new Proxy(t,{get:function(t,r,a){return"object"===J(t[r])?e(t[r]):$((function(){return t[r]}))}})}t.value=i.proxy,h((function(){return ae(_)?_.call(t.value,new e(t.value)):_}),(function(e){d.value=le({validations:e,state:t,childResults:m,resultsCache:v,globalConfig:r})}),{immediate:!0})})),r=s.validationsConfig||{}}else{var k=x(e)||ne(e)?e:p(e||{});h(k,(function(e){d.value=le({validations:e,state:t,childResults:m,resultsCache:v,globalConfig:r})}),{immediate:!0})}return y(d,{$registerAs:n,$scope:o,$stopPropagation:l}),S((function(){return w(n)})),$((function(){return Object.assign({},te(d.value),m.value)}))}({sampleName:{required:he.withMessage("nameは必須入力です。",we)},sampleEmail:{required:he.withMessage("emailは必須入力です。",we),email:he.withMessage("メールアドレスの形式が正しくありません。",xe)},samplePassword:{required:he.withMessage("passwordは必須入力です。",we)},sampleTextarea:{required:he.withMessage("テキストエリアは必須入力です。",we)},sampleRadio:{required:he.withMessage("フレームワークの質問は必須入力です。",we)},sampleCheck:{required:he.withMessage("バックエンド系言語の質問は必須入力です。",we)},sampleSelect:{required:he.withMessage("今後学びたい言語の質問は必須入力です。",we)}},r,{$lazy:!0}),n=$((()=>!a.value.$invalid&&a.value.$dirty));return{state:r,sendResult:async()=>{await a.value.$validate(),n.value&&t.emit("send-result",r),t.emit("send-errors",a.value.$errors)},selects:W,radios:K,checkboxes:G}}});const Se=s("data-v-1ca7e62d");r("data-v-1ca7e62d");const ke=m("p",null,"Form",-1),je={class:"form-box__fieldset"},Ee=m("legend",null,"inputフォーム",-1),qe={class:"form-box__input"},Ae=y("name"),Re={class:"form-box__input"},Ve=y("email"),Pe={class:"form-box__input"},Ce=y("password"),Oe={class:"form-box__input"},Ie=y("テキスエリア"),Me={class:"form-box__fieldset"},Te=m("legend",null,"使ったことのあるフレームワークは?",-1),ze={class:"form-box__fieldset"},Be=m("legend",null,"使ったことのあるバックエンド系言語は?",-1),Fe={class:"form-box__fieldset"},Ne=y("Future Learning"),Ue=m("legend",null,"今後学びたい言語は?",-1),De={class:"form-box__input"};a();const He=Se(((e,t,r,a,o,l)=>{const i=v("base-label"),s=v("base-input"),c=v("base-text-area"),d=v("base-radio"),p=v("base-check-box"),f=v("base-select");return n(),u("form",{class:"form-box",onSubmit:t[9]||(t[9]=R((()=>{}),["prevent"]))},[ke,m("fieldset",je,[Ee,m("div",qe,[m(i,{id:"sample-name"},{default:Se((()=>[Ae])),_:1}),m(s,{id:"sample-name",name:"sample-name",type:"text",placeholder:"name",value:e.state.sampleName,"onUpdate:value":t[1]||(t[1]=t=>e.state.sampleName=t)},null,8,["value"])]),m("div",Re,[m(i,{id:"sample-email"},{default:Se((()=>[Ve])),_:1}),m(s,{id:"sample-email",name:"sample-email",type:"email",placeholder:"sample@hoge.com",value:e.state.sampleEmail,"onUpdate:value":t[2]||(t[2]=t=>e.state.sampleEmail=t)},null,8,["value"])]),m("div",Pe,[m(i,{id:"sample-password"},{default:Se((()=>[Ce])),_:1}),m(s,{id:"sample-password",name:"sample-password",type:"password",placeholder:"password",value:e.state.samplePassword,"onUpdate:value":t[3]||(t[3]=t=>e.state.samplePassword=t)},null,8,["value"])]),m("div",Oe,[m(i,{id:"sample-textarea"},{default:Se((()=>[Ie])),_:1}),m(c,{id:"sample-textarea",name:"sample-textarea",rows:3,cols:50,placeholder:"テキストエリア",value:e.state.sampleTextarea,"onUpdate:value":t[4]||(t[4]=t=>e.state.sampleTextarea=t)},null,8,["value"])])]),m("fieldset",Me,[Te,m(d,{name:"frontend-used",options:e.radios,value:e.state.sampleRadio,"onUpdate:value":t[5]||(t[5]=t=>e.state.sampleRadio=t)},null,8,["options","value"])]),m("fieldset",ze,[Be,m(p,{name:"backend-used",options:e.checkboxes,value:e.state.sampleCheck,"onUpdate:value":t[6]||(t[6]=t=>e.state.sampleCheck=t)},null,8,["options","value"])]),m("fieldset",Fe,[m(i,{id:"future-learning"},{default:Se((()=>[Ne])),_:1}),Ue,m(f,{id:"future-learning",name:"future-learning",options:e.selects,value:e.state.sampleSelect,"onUpdate:value":t[7]||(t[7]=t=>e.state.sampleSelect=t)},null,8,["options","value"])]),m("div",De,[m("input",{type:"submit",value:"確定",onClick:t[8]||(t[8]=(...t)=>e.sendResult&&e.sendResult(...t))})])],32)}));_e.render=He,_e.__scopeId="data-v-1ca7e62d";var Le=t({name:"About",components:{"base-errors":V,"form-box":_e},setup(){const t=p({results:null,errors:[]});return{state:t,sendResult:r=>{t.results=e({},r)},sendErrors:e=>{t.errors=e}}}});const Ge=s("data-v-28817eae");r("data-v-28817eae");const Ke=m("h1",null,"About",-1),We={class:"about"},Je={class:"result"},Qe=m("p",null,"Result",-1);a();const Xe=Ge(((e,t,r,a,i,s)=>{const d=v("base-errors"),p=v("form-box");return n(),u(o,null,[Ke,m(d,{errors:e.state.errors},null,8,["errors"]),m("div",We,[m(p,{onSendResult:e.sendResult,onSendErrors:e.sendErrors},null,8,["onSendResult","onSendErrors"]),m("div",Je,[Qe,(n(!0),u(o,null,l(e.state.results,((e,t)=>(n(),u("p",{key:`result_${t}`},c(e),1)))),128))])])],64)}));Le.render=Xe,Le.__scopeId="data-v-28817eae";export default Le;