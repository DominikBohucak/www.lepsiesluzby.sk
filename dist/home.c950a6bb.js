parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"YfbL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={data:function(){return{tableOptions:{caption:"Čo aktuálne riešime"},jiraData:null}},computed:{tableData:function(){this.jiraData}},methods:{getJiraData:function(){}},mounted:function(){this.jiraData=getJiraData()}};exports.default=t;
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("nd-hero"),this._v(" "),i("div",{staticClass:"govuk-width-container"},[i("main",{staticClass:"govuk-main-wrapper"},[i("div",{staticClass:"govuk-grid-row"},[i("div",{staticClass:"govuk-grid-column-three-quarters govuk-!-padding-bottom-6"},[i("nd-thumbnail",{attrs:{url:"/podnet"}})],1)]),this._v(" "),i("nd-table",{attrs:{data:this.tableData,options:this.tableOptions}}),this._v(" "),i("nd-button",[this._v("Zobraziť viac")])],1)])],1)},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{}]},{},["YfbL"], null)
//# sourceMappingURL=/home.c950a6bb.js.map