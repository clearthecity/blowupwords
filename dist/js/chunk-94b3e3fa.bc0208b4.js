(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94b3e3fa"],{"03b2":function(t,e,i){},"062f":function(t,e,i){},1912:function(t,e,i){},"25e0":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-flex",{attrs:{xs12:"",sm10:"",id:"game"}},[i("v-layout",{attrs:{row:"",wrap:"",id:"game-main"}},[i("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[t.start?i("div",{attrs:{id:"game-info"}},[i("p",{staticStyle:{"font-size":"1.25rem"}},[t._v("Find bad academic writing. Then blow it up.")]),i("div",{staticStyle:{"text-align":"center"}},[i("v-btn",{attrs:{type:"button",fab:"",color:"success"},on:{click:t.initializeGame}},[t._v("Go")]),i("router-link",{attrs:{to:"/about"}},[i("v-btn",{attrs:{type:"button",flat:"",color:"warning"}},[i("span",[t._v("Tell me more")])])],1)],1)]):t._e()]),t.gameInProgress&&!t.start?i("AsyncFloatingPhrase"):t._e()],1),i("v-layout",{attrs:{"justify-space-around":"",row:"",id:"controls"}},[i("div",[t._v(" Level: "),i("strong",{attrs:{id:"difficulty-text"}},[t._v(t._s(t.difficultyText))]),i("v-slider",{attrs:{value:t.difficulty,min:"1",max:"3",step:"1",ticks:"always"},on:{input:t.changeDifficulty}})],1),i("div",{attrs:{id:"vol-control"},on:{click:t.changeAudioPrefs}},[i("p",[t._v("Sound: "),i("strong",{attrs:{id:"vol-text"}},[t._v(t._s(t.volumeText))])]),i("svg",{staticStyle:{width:"32px",height:"32px"},attrs:{viewBox:"0 0 32 32"}},[i("path",{attrs:{id:"vol-icon",fill:"lightgrey",d:t.volumeSVG,alt:"Change audio setting"}})])])])],1)},n=[],r=i("2f62"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fp-loading",staticStyle:{color:"black"}},[t._v(" ... ")])},o=[],l={name:"FPLoading"},u=l,h=i("2877"),c=Object(h["a"])(u,a,o,!1,null,null,null),d=c.exports,f=i.e("chunk-1d6e3d2e").then(i.bind(null,"7619")),p="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z",v="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z",g={name:"Game",components:{AsyncFloatingPhrase:function(){return{component:f,loading:d,error:function(){return i.e("chunk-2d210837").then(i.bind(null,"b7e1"))},delay:200,timeout:2e3}}},data:function(){return{start:!0,load_error:!1}},computed:Object(r["b"])({gameInProgress:function(t){return!t.paused},difficulty:function(t){return t.difficulty},difficultyText:function(t){switch(t.difficulty){case 1:return"Easy";case 2:return"Medium";case 3:return"Hard";default:return""}},volumeSVG:function(t){return t.audio?v:p},volumeText:function(t){return t.audio?"On":"Off"}}),methods:{initializeGame:function(){this.start=!1,this.gameInProgress||this.$store.commit("pauseOrResume")},changeDifficulty:function(t){this.$store.commit("changeDifficulty",t)},changeAudioPrefs:function(){this.$store.commit("changeAudioPrefs")}}},m=g,b=(i("69b5"),i("6544")),y=i.n(b),k=i("8336"),S=(i("db6d"),i("e8f2")),C=Object(S["a"])("flex"),_=i("a722"),x=(i("6b54"),i("6762"),i("2fdb"),i("7f7f"),i("c5f6"),i("03b2"),i("80d2"));function $(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var O,w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e?"width":"height";return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=$({transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow},i,t.style[i])},enter:function(e){var s=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.visibility="hidden";var n=e["offset"+Object(x["r"])(i)]+"px";e.style.visibility=s.visibility,e.style.overflow="hidden",e.style[i]=0,e.offsetHeight,e.style.transition=s.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[i]=n}))},afterEnter:n,enterCancelled:n,leave:function(t){t._initialStyle=$({overflow:t.style.overflow},i,t.style[i]),t.style.overflow="hidden",t.style[i]=t["offset"+Object(x["r"])(i)]+"px",t.offsetHeight,requestAnimationFrame((function(){return t.style[i]=0}))},afterLeave:s,leaveCancelled:s};function s(e){t&&e._parent&&e._parent.classList.remove(t),n(e)}function n(t){t.style.overflow=t._initialStyle.overflow,t.style[i]=t._initialStyle[i],delete t._initialStyle}},M=(Object(x["g"])("bottom-sheet-transition"),Object(x["g"])("carousel-transition"),Object(x["g"])("carousel-reverse-transition"),Object(x["g"])("tab-transition"),Object(x["g"])("tab-reverse-transition"),Object(x["g"])("menu-transition"),Object(x["g"])("fab-transition","center center","out-in"),Object(x["g"])("dialog-transition"),Object(x["g"])("dialog-bottom-transition"),Object(x["g"])("fade-transition")),j=Object(x["g"])("scale-transition"),V=(Object(x["g"])("scroll-x-transition"),Object(x["g"])("scroll-x-reverse-transition"),Object(x["g"])("scroll-y-transition"),Object(x["g"])("scroll-y-reverse-transition"),Object(x["g"])("slide-x-transition")),L=(Object(x["g"])("slide-x-reverse-transition"),Object(x["g"])("slide-y-transition"),Object(x["g"])("slide-y-reverse-transition"),Object(x["d"])("expand-transition",w()),Object(x["d"])("expand-x-transition",w("",!0)),Object(x["d"])("row-expand-transition",w("datatable__expand-col--expanded")),i("1912"),i("7514"),i("f386"),i("44dc"),i("b64a")),B=i("2b0e"),T=B["a"].extend({name:"sizeable",props:{large:Boolean,medium:Boolean,size:{type:[Number,String]},small:Boolean,xLarge:Boolean}}),E=i("6a18"),F=i("58df"),I=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};function D(t){return["fas","far","fal","fab"].some((function(e){return t.includes(e)}))}(function(t){t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(O||(O={}));var z=Object(F["a"])(L["a"],T,E["a"]).extend({name:"v-icon",props:{disabled:Boolean,left:Boolean,right:Boolean},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(x["q"])(this,t)},getSize:function(){var t={small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(x["p"])(t).find((function(e){return t[e]}));return e&&O[e]||Object(x["c"])(this.size)},getDefaultData:function(){var t={staticClass:"v-icon",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.$listeners.click||this.$listeners["!click"],"v-icon--right":this.right},attrs:I({"aria-hidden":!0},this.$attrs),on:this.$listeners};return t},applyColors:function(t){t.class=I({},t.class,this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],s=this.getDefaultData(),n="material-icons",r=t.indexOf("-"),a=r<=-1;a?i.push(t):(n=t.slice(0,r),D(n)&&(n="")),s.class[n]=!0,s.class[t]=!a;var o=this.getSize();return o&&(s.style={fontSize:o}),this.applyColors(s),e("i",s,i)},renderSvgIcon:function(t,e){var i=this.getDefaultData();i.class["v-icon--is-component"]=!0;var s=this.getSize();s&&(i.style={fontSize:s,height:s}),this.applyColors(i);var n=t.component;return i.props=t.props,i.nativeOn=i.on,e(n,i)}},render:function(t){var e=this.getIcon();return"string"===typeof e?this.renderFontIcon(e,t):this.renderSvgIcon(e,t)}}),P=B["a"].extend({name:"v-icon",$_wrapperFor:z,functional:!0,render:function(t,e){var i=e.data,s=e.children,n="";return i.domProps&&(n=i.domProps.textContent||i.domProps.innerHTML||n,delete i.domProps.textContent,delete i.domProps.innerHTML),t(z,i,n?[n]:s)}}),A=P,N=(i("062f"),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t}),H=Object(F["a"])(E["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render:function(t,e){var i=e.children,s=e.listeners,n=e.props,r={staticClass:"v-label",class:N({"v-label--active":n.value,"v-label--is-disabled":n.disabled},Object(E["b"])(e)),attrs:{for:n.for,"aria-hidden":!n.for},on:s,style:{left:Object(x["c"])(n.left),right:Object(x["c"])(n.right),position:n.absolute?"absolute":"relative"}};return t("label",L["a"].options.methods.setTextColor(n.focused&&n.color,r),i)}}),q=H,R=(i("97fb"),Object(F["a"])(L["a"],E["a"]).extend({name:"v-messages",props:{value:{type:Array,default:function(){return[]}}},methods:{genChildren:function(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage:function(t,e){var i=this.$scopedSlots.default?this.$scopedSlots.default({message:t,key:e}):void 0,s=Object(x["i"])(t),n=i?void 0:s;return this.$createElement("div",{staticClass:"v-messages__message",key:e,domProps:{innerHTML:n}},i)}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}})),W=R,K=i("7618"),U=(i("ac4d"),i("8a81"),i("94ab")),G=i("d9bd"),X="function"===typeof Symbol&&"symbol"===Object(K["a"])(Symbol.iterator)?function(t){return Object(K["a"])(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":Object(K["a"])(t)},J=Object(F["a"])(L["a"],Object(U["a"])("form")).extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,value:{required:!1}},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess:function(){return this.internalSuccessMessages.length>0||this.success},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasMessages:function(){return this.validationTarget.length>0},hasState:function(){return this.hasSuccess||this.shouldValidate&&this.hasError},internalErrorMessages:function(){return this.genInternalMessages(this.errorMessages)},internalMessages:function(){return this.genInternalMessages(this.messages)},internalSuccessMessages:function(){return this.genInternalMessages(this.successMessages)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",t)}},shouldValidate:function(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.color:void 0},validationTarget:function(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages.length>0?this.internalSuccessMessages:this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler:function(t,e){Object(x["h"])(t,e)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(t){t||this.disabled||this.readonly||(this.hasFocused=!0,this.validateOnBlur&&this.validate())},isResetting:function(){var t=this;setTimeout((function(){t.hasInput=!1,t.hasFocused=!1,t.isResetting=!1,t.validate()}),0)},hasError:function(t){this.shouldValidate&&this.$emit("update:error",t)},value:function(t){this.lazyValue=t}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:function(t){return t?Array.isArray(t)?t:[t]:[]},reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation:function(){this.isResetting=!0},validate:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments[1],i=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(var s=0;s<this.rules.length;s++){var n=this.rules[s],r="function"===typeof n?n(e):n;"string"===typeof r?i.push(r):"boolean"!==typeof r&&Object(G["a"])("Rules should return a string or boolean, received '"+("undefined"===typeof r?"undefined":X(r))+"' instead",this)}return this.errorBucket=i,this.valid=0===i.length,this.valid}}}),Z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},Y=Object(F["a"])(L["a"],E["a"],J).extend({name:"v-input",props:{appendIcon:String,appendIconCb:Function,backgroundColor:{type:String,default:""},height:[Number,String],hideDetails:Boolean,hint:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,prependIconCb:Function,value:{required:!1}},data:function(){return{attrsInput:{},lazyValue:this.value,hasMouseDown:!1}},computed:{classes:function(){return{}},classesInput:function(){return Z({},this.classes,{"v-input--has-state":this.hasState,"v-input--hide-details":this.hideDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.disabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&void 0!==this.loading,"v-input--is-readonly":this.readonly},this.themeClasses)},directivesInput:function(){return[]},hasHint:function(){return!this.hasMessages&&this.hint&&(this.persistentHint||this.isFocused)},hasLabel:function(){return Boolean(this.$slots.label||this.label)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty:function(){return!!this.lazyValue},isDisabled:function(){return Boolean(this.disabled||this.readonly)},isLabelActive:function(){return this.isDirty}},watch:{value:function(t){this.lazyValue=t}},beforeCreate:function(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent:function(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl:function(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot:function(){return[this.genLabel(),this.$slots.default]},genIcon:function(t,e){var i=this,s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=this[t+"Icon"],r="click:"+Object(x["n"])(t);e=e||this[t+"IconCb"],s&&t&&e&&Object(G["c"])(":"+t+"-icon-cb","@"+r,this);var a={props:{color:this.validationState,dark:this.dark,disabled:this.disabled,light:this.light},on:this.$listeners[r]||e?{click:function(t){t.preventDefault(),t.stopPropagation(),i.$emit(r,t),e&&e(t)},mouseup:function(t){t.preventDefault(),t.stopPropagation()}}:void 0};return this.$createElement("div",{staticClass:"v-input__icon v-input__icon--"+Object(x["n"])(t),key:""+t+n},[this.$createElement(A,a,n)])},genInputSlot:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(x["c"])(this.height)},directives:this.directivesInput,on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel:function(){return this.hasLabel?this.$createElement(q,{props:{color:this.validationState,dark:this.dark,focused:this.hasState,for:this.$attrs.id,light:this.light}},this.$slots.label||this.label):null},genMessages:function(){var t=this;if(this.hideDetails)return null;var e=this.hasHint?[this.hint]:this.validations;return this.$createElement(W,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.hasMessages||this.hasHint?e:[]},scopedSlots:{default:this.$scopedSlots.message?function(e){return t.$scopedSlots.message(e)}:void 0}})},genSlot:function(t,e,i){if(!i.length)return null;var s=t+"-"+e;return this.$createElement("div",{staticClass:"v-input__"+s,ref:s},i)},genPrependSlot:function(){var t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot:function(){var t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick:function(t){this.$emit("click",t)},onMouseDown:function(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp:function(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render:function(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",attrs:this.attrsInput,class:this.classesInput}),this.genContent())}}),Q=Y,tt=i("c584");i("b4f7");function et(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var it=Object(F["a"])(L["a"]).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:7},indeterminate:Boolean,query:Boolean,value:{type:[Number,String],default:0}},computed:{backgroundStyle:function(){var t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{height:this.active?Object(x["c"])(this.height):0,opacity:t,width:this.normalizedBufer+"%"}},effectiveWidth:function(){return this.normalizedBufer?100*+this.normalizedValue/+this.normalizedBufer:0},normalizedBufer:function(){return this.bufferValue<0?0:this.bufferValue>100?100:parseFloat(this.bufferValue)},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBufer)||(t.width=this.normalizedBufer+"%"),t}},methods:{genDeterminate:function(t){return t("div",this.setBackgroundColor(this.color,{ref:"front",staticClass:"v-progress-linear__bar__determinate",style:{width:this.effectiveWidth+"%"}}))},genBar:function(t,e){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__bar__indeterminate",class:et({},e,!0)}))},genIndeterminate:function(t){return t("div",{ref:"front",staticClass:"v-progress-linear__bar__indeterminate",class:{"v-progress-linear__bar__indeterminate--active":this.active}},[this.genBar(t,"long"),this.genBar(t,"short")])}},render:function(t){var e=t(M,this.indeterminate?[this.genIndeterminate(t)]:[]),i=t(V,this.indeterminate?[]:[this.genDeterminate(t)]),s=t("div",{staticClass:"v-progress-linear__bar",style:this.styles},[e,i]),n=t("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle})),r=this.$slots.default&&t("div",{staticClass:"v-progress-linear__content"},this.$slots.default);return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBufer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:{"v-progress-linear--query":this.query},style:{height:Object(x["c"])(this.height)},on:this.$listeners},[n,s,r])}}),st=it,nt=B["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(st,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:2,indeterminate:!0}})}}}),rt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},at=Q.extend({name:"v-slider",directives:{ClickOutside:tt["a"]},mixins:[nt],props:{alwaysDirty:Boolean,inverseLabel:Boolean,label:String,min:{type:[Number,String],default:0},max:{type:[Number,String],default:100},step:{type:[Number,String],default:1},ticks:{type:[Boolean,String],default:!1,validator:function(t){return"boolean"===typeof t||"always"===t}},tickLabels:{type:Array,default:function(){return[]}},tickSize:{type:[Number,String],default:1},thumbColor:{type:String,default:null},thumbLabel:{type:[Boolean,String],default:null,validator:function(t){return"boolean"===typeof t||"always"===t}},thumbSize:{type:[Number,String],default:32},trackColor:{type:String,default:null},value:[Number,String]},data:function(t){return{app:{},isActive:!1,keyPressed:0,lazyValue:"undefined"!==typeof t.value?t.value:Number(t.min),oldValue:null}},computed:{classes:function(){return{"v-input--slider":!0,"v-input--slider--ticks":this.showTicks,"v-input--slider--inverse-label":this.inverseLabel,"v-input--slider--ticks-labels":this.tickLabels.length>0,"v-input--slider--thumb-label":this.thumbLabel||this.$scopedSlots.thumbLabel}},showTicks:function(){return this.tickLabels.length>0||!this.disabled&&this.stepNumeric&&!!this.ticks},showThumbLabel:function(){return!this.disabled&&(!!this.thumbLabel||""===this.thumbLabel||this.$scopedSlots["thumb-label"])},computedColor:function(){return this.disabled?null:this.validationState||this.color||"primary"},computedTrackColor:function(){return this.disabled?null:this.trackColor||null},computedThumbColor:function(){return this.disabled||!this.isDirty?null:this.validationState||this.thumbColor||this.color||"primary"},internalValue:{get:function(){return this.lazyValue},set:function(t){var e=this.min,i=this.max,s=this.roundValue(Math.min(Math.max(t,e),i));s!==this.lazyValue&&(this.lazyValue=s,this.$emit("input",s),this.validate())}},stepNumeric:function(){return this.step>0?parseFloat(this.step):0},trackFillStyles:function(){var t=this.$vuetify.rtl?"auto":0,e=this.$vuetify.rtl?0:"auto",i=this.inputWidth+"%";return this.disabled&&(i="calc("+this.inputWidth+"% - 8px)"),{transition:this.trackTransition,left:t,right:e,width:i}},trackPadding:function(){return this.isActive||this.inputWidth>0||this.disabled?0:7},trackStyles:function(){var t=this.disabled?"calc("+this.inputWidth+"% + 8px)":this.trackPadding+"px",e=this.$vuetify.rtl?"auto":t,i=this.$vuetify.rtl?t:"auto",s=this.disabled?"calc("+(100-this.inputWidth)+"% - 8px)":"100%";return{transition:this.trackTransition,left:e,right:i,width:s}},tickStyles:function(){var t=Number(this.tickSize);return{"border-width":t+"px","border-radius":t>1?"50%":null,transform:t>1?"translateX(-"+t+"px) translateY(-"+(t-1)+"px)":null}},trackTransition:function(){return this.keyPressed>=2?"none":""},numTicks:function(){return Math.ceil((this.max-this.min)/this.stepNumeric)},inputWidth:function(){return(this.roundValue(this.internalValue)-this.min)/(this.max-this.min)*100},isDirty:function(){return this.internalValue>this.min||this.alwaysDirty}},watch:{min:function(t){t>this.internalValue&&this.$emit("input",parseFloat(t))},max:function(t){t<this.internalValue&&this.$emit("input",parseFloat(t))},value:function(t){this.internalValue=t}},mounted:function(){this.app=document.querySelector("[data-app]")||Object(G["b"])("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot:function(){var t=[this.genLabel()],e=this.genSlider();return this.inverseLabel?t.unshift(e):t.push(e),t.push(this.genProgress()),t},genListeners:function(){return{blur:this.onBlur,click:this.onSliderClick,focus:this.onFocus,keydown:this.onKeyDown,keyup:this.onKeyUp}},genInput:function(){return this.$createElement("input",{attrs:rt({"aria-label":this.label,name:this.name,role:"slider",tabindex:this.disabled?-1:this.$attrs.tabindex,value:this.internalValue,readonly:!0,"aria-readonly":String(this.readonly),"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue},this.$attrs),on:this.genListeners(),ref:"input"})},genSlider:function(){return this.$createElement("div",{staticClass:"v-slider",class:{"v-slider--is-active":this.isActive},directives:[{name:"click-outside",value:this.onBlur}]},this.genChildren())},genChildren:function(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isFocused||this.isActive,this.onThumbMouseDown)]},genSteps:function(){var t=this;if(!this.step||!this.showTicks)return null;var e=Object(x["e"])(this.numTicks+1).map((function(e){var i=[];return t.tickLabels[e]&&i.push(t.$createElement("span",t.tickLabels[e])),t.$createElement("span",{key:e,staticClass:"v-slider__ticks",class:{"v-slider__ticks--always-show":"always"===t.ticks||t.tickLabels.length>0},style:rt({},t.tickStyles,{left:e*(100/t.numTicks)+"%"})},i)}));return this.$createElement("div",{staticClass:"v-slider__ticks-container"},e)},genThumb:function(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},genThumbContainer:function(t,e,i,s){var n=[this.genThumb()],r=this.getLabel(t);return this.showThumbLabel&&n.push(this.genThumbLabel(r)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--is-active":i,"v-slider__thumb-container--show-label":this.showThumbLabel},style:{transition:this.trackTransition,left:(this.$vuetify.rtl?100-e:e)+"%"},on:{touchstart:s,mousedown:s}}),n)},genThumbLabel:function(t){var e=Object(x["c"])(this.thumbSize);return this.$createElement(j,{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label__container",directives:[{name:"show",value:this.isFocused||this.isActive||"always"===this.thumbLabel}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:e,width:e}}),[t])])])},genTrackContainer:function(){var t=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track__container",ref:"track"},t)},getLabel:function(t){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:t}):this.$createElement("span",t)},onBlur:function(t){2!==this.keyPressed&&(this.isActive=!1,this.isFocused=!1,this.$emit("blur",t))},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onThumbMouseDown:function(t){this.oldValue=this.internalValue,this.keyPressed=2;var e={passive:!0};this.isActive=!0,this.isFocused=!1,"touches"in t?(this.app.addEventListener("touchmove",this.onMouseMove,e),Object(x["a"])(this.app,"touchend",this.onSliderMouseUp)):(this.app.addEventListener("mousemove",this.onMouseMove,e),Object(x["a"])(this.app,"mouseup",this.onSliderMouseUp)),this.$emit("start",this.internalValue)},onSliderMouseUp:function(){this.keyPressed=0;var t={passive:!0};this.isActive=!1,this.isFocused=!1,this.app.removeEventListener("touchmove",this.onMouseMove,t),this.app.removeEventListener("mousemove",this.onMouseMove,t),this.$emit("end",this.internalValue),Object(x["h"])(this.oldValue,this.internalValue)||this.$emit("change",this.internalValue)},onMouseMove:function(t){var e=this.parseMouseMove(t),i=e.value,s=e.isInsideTrack;s&&this.setInternalValue(i)},onKeyDown:function(t){if(!this.disabled&&!this.readonly){var e=this.parseKeyDown(t);null!=e&&(this.setInternalValue(e),this.$emit("change",e))}},onKeyUp:function(){this.keyPressed=0},onSliderClick:function(t){this.isFocused=!0,this.onMouseMove(t),this.$emit("change",this.internalValue)},parseMouseMove:function(t){var e=this.$refs.track.getBoundingClientRect(),i=e.left,s=e.width,n="touches"in t?t.touches[0].clientX:t.clientX,r=Math.min(Math.max((n-i)/s,0),1)||0;this.$vuetify.rtl&&(r=1-r);var a=n>=i-8&&n<=i+s+8,o=parseFloat(this.min)+r*(this.max-this.min);return{value:o,isInsideTrack:a}},parseKeyDown:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.internalValue;if(!this.disabled){var i=x["o"].pageup,s=x["o"].pagedown,n=x["o"].end,r=x["o"].home,a=x["o"].left,o=x["o"].right,l=x["o"].down,u=x["o"].up;if([i,s,n,r,a,o,l,u].includes(t.keyCode)){t.preventDefault();var h=this.stepNumeric||1,c=(this.max-this.min)/h;if([a,o,l,u].includes(t.keyCode)){this.keyPressed+=1;var d=this.$vuetify.rtl?[a,u]:[o,u],f=d.includes(t.keyCode)?1:-1,p=t.shiftKey?3:t.ctrlKey?2:1;e+=f*h*p}else if(t.keyCode===r)e=parseFloat(this.min);else if(t.keyCode===n)e=parseFloat(this.max);else{var v=t.keyCode===s?1:-1;e-=v*h*(c>100?c/10:10)}return e}}},roundValue:function(t){if(!this.stepNumeric)return t;var e=this.step.toString().trim(),i=e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0,s=this.min%this.stepNumeric,n=Math.round((t-s)/this.stepNumeric)*this.stepNumeric+s;return parseFloat(Math.max(Math.min(n,this.max),this.min).toFixed(i))},setInternalValue:function(t){this.internalValue=t}}}),ot=Object(h["a"])(m,s,n,!1,null,"0137bdec",null);e["default"]=ot.exports;y()(ot,{VBtn:k["a"],VFlex:C,VLayout:_["a"],VSlider:at})},"44dc":function(t,e,i){},"69b5":function(t,e,i){"use strict";var s=i("e6b7"),n=i.n(s);n.a},"97fb":function(t,e,i){},b4f7:function(t,e,i){},e6b7:function(t,e,i){}}]);
//# sourceMappingURL=chunk-94b3e3fa.bc0208b4.js.map