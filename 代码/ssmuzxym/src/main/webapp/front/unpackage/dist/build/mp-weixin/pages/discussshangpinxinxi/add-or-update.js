(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/discussshangpinxinxi/add-or-update"],{2443:function(e,n,t){"use strict";t.r(n);var r=t("bd41"),a=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=a.a},"2a89":function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},u=[]},"5a13":function(e,n,t){"use strict";t.r(n);var r=t("2a89"),a=t("2443");for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);t("cafa");var i,o=t("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"7b0159e0",null,!1,r["a"],i);n["default"]=c.exports},b14f:function(e,n,t){"use strict";(function(e){t("bd8d");r(t("66fd"));var n=r(t("5a13"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},bd41:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,r,a,u,i){try{var o=e[u](i),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){u(i,r,a,o,c,"next",e)}function c(e){u(i,r,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("7924"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{refid:"",userid:"",nickname:"",content:"",reply:""},user:{},ro:{refid:!1,userid:!1,nickname:!1,content:!1,reply:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return i(r.default.mark((function a(){var u,i,o,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=e.getStorageSync("nowTable"),a.next=3,t.$api.session(u);case 3:if(i=a.sent,t.user=i.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=13;break}return t.ruleForm.id=n.id,a.next=11,t.$api.info("discussshangpinxinxi",t.ruleForm.id);case 11:i=a.sent,t.ruleForm=i.data;case 13:if(!n.cross){a.next=40;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 16:if((a.t1=a.t0()).done){a.next=40;break}if(c=a.t1.value,"refid"!=c){a.next=22;break}return t.ruleForm.refid=o[c],t.ro.refid=!0,a.abrupt("continue",16);case 22:if("userid"!=c){a.next=26;break}return t.ruleForm.userid=o[c],t.ro.userid=!0,a.abrupt("continue",16);case 26:if("nickname"!=c){a.next=30;break}return t.ruleForm.nickname=o[c],t.ro.nickname=!0,a.abrupt("continue",16);case 30:if("content"!=c){a.next=34;break}return t.ruleForm.content=o[c],t.ro.content=!0,a.abrupt("continue",16);case 34:if("reply"!=c){a.next=38;break}return t.ruleForm.reply=o[c],t.ro.reply=!0,a.abrupt("continue",16);case 38:a.next=16;break;case 40:t.styleChange();case 41:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return i(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.refid){t.next=3;break}return n.$utils.msg("关联表id不能为空"),t.abrupt("return");case 3:if(n.ruleForm.userid){t.next=6;break}return n.$utils.msg("用户id不能为空"),t.abrupt("return");case 6:if(n.ruleForm.content){t.next=9;break}return n.$utils.msg("评论内容不能为空"),t.abrupt("return");case 9:if(!n.ruleForm.id){t.next=14;break}return t.next=12,n.$api.update("discussshangpinxinxi",n.ruleForm);case 12:t.next=16;break;case 14:return t.next=16,n.$api.add("discussshangpinxinxi",n.ruleForm);case 16:e.setStorageSync("discussshangpinxinxiCleanType",!0),n.$utils.msgBack("提交成功");case 18:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},cafa:function(e,n,t){"use strict";var r=t("de83"),a=t.n(r);a.a},de83:function(e,n,t){}},[["b14f","common/runtime","common/vendor"]]]);