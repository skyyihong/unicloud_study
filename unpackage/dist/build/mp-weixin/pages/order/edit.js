(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/edit"],{"160c":function(t,n,e){"use strict";e.r(n);var o=e("f829"),r=e("5cec");for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("9631");var a=e("f0c5"),u=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=u.exports},"461d":function(t,n,e){},"5cec":function(t,n,e){"use strict";e.r(n);var o=e("8110"),r=e.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=r.a},8110:function(t,n,e){"use strict";(function(t,o){var r=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("9523")),a=e("fc28");function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){(0,i.default)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var f=t.database();function s(t){var n={};for(var e in a.validator)t.indexOf(e)>-1&&(n[e]=a.validator[e]);return n}var l={data:function(){var t={book_id:null,quantity:null};return{formData:t,formOptions:{},rules:c({},s(Object.keys(t)))}},onLoad:function(t){if(t.id){var n=t.id;this.formDataId=n,this.getDetail(n)}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;o.showLoading({mask:!0}),this.$refs.form.validate().then((function(n){return t.submitForm(n)})).catch((function(){})).finally((function(){o.hideLoading()}))},submitForm:function(t){var n=this;return f.collection("order").doc(this.formDataId).update(t).then((function(t){o.showToast({icon:"none",title:"修改成功"}),n.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return o.navigateBack()}),500)})).catch((function(t){o.showModal({content:t.message||"请求服务失败",showCancel:!1})}))},getDetail:function(t){var n=this;o.showLoading({mask:!0}),f.collection("order").doc(t).field("book_id,quantity").get().then((function(t){var e=t.result.data[0];e&&(n.formData=e)})).catch((function(t){o.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){o.hideLoading()}))}}};n.default=l}).call(this,e("a9ff")["default"],e("543d")["default"])},9631:function(t,n,e){"use strict";var o=e("461d"),r=e.n(o);r.a},a2b2:function(t,n,e){"use strict";(function(t,n){var o=e("4ea4");e("9eee"),e("a9ff");o(e("66fd"));var r=o(e("160c"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(r.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},f829:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}));var o={uniForms:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(e.bind(null,"1bcc"))},uniFormsItem:function(){return e.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(e.bind(null,"3a0a"))}},r=function(){var t=this.$createElement;this._self._c},i=[]}},[["a2b2","common/runtime","common/vendor"]]]);