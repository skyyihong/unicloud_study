(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/opendb-city-china/edit"],{"0729":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return i}));var i={uniForms:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(e.bind(null,"1bcc"))},uniFormsItem:function(){return e.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(e.bind(null,"3a0a"))},uniEasyinput:function(){return e.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(e.bind(null,"0d78"))}},o=function(){var n=this.$createElement;this._self._c},r=[]},"16ed":function(n,t,e){"use strict";e.r(t);var i=e("0729"),o=e("9012");for(var r in o)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(r);e("4228");var a=e("f0c5"),u=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=u.exports},4228:function(n,t,e){"use strict";var i=e("ecbe"),o=e.n(i);o.a},4492:function(n,t,e){"use strict";(function(n,t){var i=e("4ea4");e("9eee"),e("a9ff");i(e("66fd"));var o=i(e("16ed"));n.__webpack_require_UNI_MP_PLUGIN__=e,t(o.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},9012:function(n,t,e){"use strict";e.r(t);var i=e("d867"),o=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=o.a},d867:function(n,t,e){"use strict";(function(n,i){var o=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(e("9523")),a=e("d71e");function u(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?u(Object(e),!0).forEach((function(t){(0,r.default)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var f=n.database();function s(n){var t={};for(var e in a.validator)n.indexOf(e)>-1&&(t[e]=a.validator[e]);return t}var d={data:function(){var n={code:"",parent_code:"",name:"",type:null,first_letter:"",pinyin:"",zip_code:""};return{formData:n,formOptions:{},rules:c({},s(Object.keys(n)))}},onLoad:function(n){if(n.id){var t=n.id;this.formDataId=t,this.getDetail(t)}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var n=this;i.showLoading({mask:!0}),this.$refs.form.validate().then((function(t){return n.submitForm(t)})).catch((function(){})).finally((function(){i.hideLoading()}))},submitForm:function(n){var t=this;return f.collection("opendb-city-china").doc(this.formDataId).update(n).then((function(n){i.showToast({icon:"none",title:"修改成功"}),t.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return i.navigateBack()}),500)})).catch((function(n){i.showModal({content:n.message||"请求服务失败",showCancel:!1})}))},getDetail:function(n){var t=this;i.showLoading({mask:!0}),f.collection("opendb-city-china").doc(n).field("code,parent_code,name,type,first_letter,pinyin,zip_code").get().then((function(n){var e=n.result.data[0];e&&(t.formData=e)})).catch((function(n){i.showModal({content:n.message||"请求服务失败",showCancel:!1})})).finally((function(){i.hideLoading()}))}}};t.default=d}).call(this,e("a9ff")["default"],e("543d")["default"])},ecbe:function(n,t,e){}},[["4492","common/runtime","common/vendor"]]]);