var i={name:"VueLinkPreview",props:{url:{type:String,required:!0},width:{type:String,default:"90%"},maxWidth:{type:String,default:"700px"},marginTop:{type:String,default:"18px"},marginBottom:{type:String,default:"18px"},marginRight:{type:String,default:"auto"},marginLeft:{type:String,default:"auto"},customDomain:{type:String,default:"https://lpdg-server.azurewebsites.net/parse/link"},canOpenLink:{type:Boolean,default:!0}},data:function(){return{loading:!1,preview:null,api:this.customDomain,validUrl:!1}},computed:{style:function(){var i=this.width,e=this.maxWidth,t=this.marginRight,n=this.marginLeft;return{width:i,maxWidth:e,marginTop:this.marginTop,marginBottom:this.marginBottom,marginRight:t,marginLeft:n}}},mounted:function(){var i=this;this.loading=!0,this.loadUrlPreviewData().then((function(e){i.preview=e,i.loading=!1}))},methods:{isValidUrl:function(i){return this.validUrl=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.test(i),this.validUrl},loadUrlPreviewData:function(){var i=this,e=this.url,t=this.api;return new Promise((function(n,a){i.isValidUrl(e)&&fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({url:e})}).then((function(i){return i.json()})).then((function(i){n(i)})).catch((function(i){return a(i)}))}))},onClick:function(){if(this.canOpenLink){var i=this.url;window.open(i,"_blank")}this.$emit("click",this.preview)}}};var e=function(i,e,t,n,a,r,o,s,d,l){"boolean"!=typeof o&&(d=s,s=o,o=!1);var c,p="function"==typeof t?t.options:t;if(i&&i.render&&(p.render=i.render,p.staticRenderFns=i.staticRenderFns,p._compiled=!0,a&&(p.functional=!0)),n&&(p._scopeId=n),r?(c=function(i){(i=i||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(i=__VUE_SSR_CONTEXT__),e&&e.call(this,d(i)),i&&i._registeredComponents&&i._registeredComponents.add(r)},p._ssrRegister=c):e&&(c=o?function(){e.call(this,l(this.$root.$options.shadowRoot))}:function(i){e.call(this,s(i))}),c)if(p.functional){var v=p.render;p.render=function(i,e){return c.call(e),v(i,e)}}else{var m=p.beforeCreate;p.beforeCreate=m?[].concat(m,c):[c]}return t},t="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var n=document.head||document.getElementsByTagName("head")[0],a={};var r=e({render:function(){var i=this,e=i.$createElement,t=i._self._c||e;return i.validUrl?t("div",[i.loading&&!i.preview?i._t("loader",(function(){return[t("div",{staticClass:"link-preview-section",style:i.style},[i._m(0),i._v(" "),i._m(1)])]})):i._t("default",(function(){return[t("div",{staticClass:"link-preview-section",style:i.style,on:{click:i.onClick}},[t("div",{staticClass:"link-description"},[t("div",{staticClass:"domain"},[t("span",{staticClass:"link-url"},[i._v(i._s(i.preview.domain))])]),i._v(" "),t("div",{staticClass:"link-data"},[t("div",{staticClass:"link-title"},[i._v("\n                        "+i._s(i.preview.title)+"\n                    ")]),i._v(" "),t("div",{staticClass:"link-description"},[i._v("\n                        "+i._s(i.preview.description)+"\n                    ")])])]),i._v(" "),t("div",{staticClass:"link-image"},[i.preview.img?t("img",{attrs:{src:i.preview.img,alt:i.preview.description}}):i._e()])])]}),{title:i.preview.title,img:i.preview.img,description:i.preview.description,domain:i.preview.domain})],2):i._e()},staticRenderFns:[function(){var i=this.$createElement,e=this._self._c||i;return e("div",{staticClass:"link-description"},[e("div",{staticClass:"domain"},[e("span",{staticClass:"link-url-loader animated-background"},[this._v("facebook.com")])]),this._v(" "),e("div",{staticClass:"link-data-loader"},[e("div",{staticClass:"p1 animated-background"},[this._v("\n                        Shashank Shekhar\n                    ")]),this._v(" "),e("div",{staticClass:"p2 animated-background"},[this._v("\n                        This is some description\n                    ")])])])},function(){var i=this.$createElement,e=this._self._c||i;return e("div",{staticClass:"link-image-loader"},[e("div",{staticClass:"img"})])}]},(function(i){i&&i("data-v-87dc150a_0",{source:".link-preview-section[data-v-87dc150a]{display:flex;flex-direction:row;justify-content:space-between;padding:14px;border-radius:5px;margin:20px 0;box-shadow:0 0 0 1px rgba(0,0,0,.1),0 -4px 24px 2px rgba(0,0,0,.03);line-height:1.5;cursor:pointer}.link-preview-section .animated-background[data-v-87dc150a],.link-preview-section .link-image-loader .img[data-v-87dc150a]{animation-duration:2.25s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:placeHolderShimmer-data-v-87dc150a;animation-timing-function:linear;background:#f6f6f6;background:linear-gradient(to right,#f6f6f6 8%,#f0f0f0 18%,#f6f6f6 33%);position:relative}@keyframes placeHolderShimmer-data-v-87dc150a{0%{background-position:-468px 0}100%{background-position:468px 0}}.link-preview-section .link-description[data-v-87dc150a]{display:flex;flex-direction:column}.link-preview-section .link-description .domain[data-v-87dc150a]{display:flex;flex-direction:row;align-items:center;margin-bottom:4px}.link-preview-section .link-description .domain img[data-v-87dc150a]{height:16px;width:16px}.link-preview-section .link-description .domain .link-url[data-v-87dc150a],.link-preview-section .link-description .domain .link-url-loader[data-v-87dc150a]{font-weight:600}.link-preview-section .link-description .domain .link-url-loader[data-v-87dc150a]{background-color:#f6f6f6;color:#f6f6f6;border-radius:10px}.link-preview-section .link-description .link-data .link-title[data-v-87dc150a]{color:#1364a2;font-weight:600;font-size:15px}.link-preview-section .link-description .link-data .link-description[data-v-87dc150a]{font-size:14px;text-align:left}.link-preview-section .link-description .link-data-loader .p1[data-v-87dc150a]{font-weight:600;font-size:15px}.link-preview-section .link-description .link-data-loader .p2[data-v-87dc150a]{font-size:14px}.link-preview-section .link-description .link-data-loader .p1[data-v-87dc150a],.link-preview-section .link-description .link-data-loader .p2[data-v-87dc150a]{background-color:#f6f6f6;color:#f6f6f6;border-radius:10px;margin-bottom:4px}.link-preview-section .link-image[data-v-87dc150a]{display:flex;align-content:center;align-items:center;height:100%}.link-preview-section .link-image img[data-v-87dc150a]{max-height:64px;object-fit:cover}.link-preview-section .link-image-loader[data-v-87dc150a]{display:flex;align-content:center;align-items:center}.link-preview-section .link-image-loader .img[data-v-87dc150a]{height:64px;width:64px}",map:void 0,media:void 0})}),i,"data-v-87dc150a",!1,void 0,(function(i){return function(i,e){return function(i,e){var r=t?e.media||"default":i,o=a[r]||(a[r]={ids:new Set,styles:[]});if(!o.ids.has(i)){o.ids.add(i);var s=e.source;if(e.map&&(s+="\n/*# sourceURL="+e.map.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",e.media&&o.element.setAttribute("media",e.media),n.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(s),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var d=o.ids.size-1,l=document.createTextNode(s),c=o.element.childNodes;c[d]&&o.element.removeChild(c[d]),c.length?o.element.insertBefore(l,c[d]):o.element.appendChild(l)}}}(i,e)}}),void 0);function o(i){o.installed||(o.installed=!0,i.component("VueLinkPreview",r))}var s={install:o},d=null;"undefined"!=typeof window?d=window.Vue:"undefined"!=typeof global&&(d=global.vue),d&&d.use(s),r.install=o;export default r;
