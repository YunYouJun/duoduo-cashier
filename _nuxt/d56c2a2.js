(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{370:function(t,n,e){var content=e(385);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(37).default)("3ee5506f",content,!0,{sourceMap:!1})},384:function(t,n,e){"use strict";e(370)},385:function(t,n,e){(n=e(36)(!1)).push([t.i,".markdown-body{box-sizing:border-box;min-width:200px;max-width:980px;margin:0 auto;padding:0 20px}@media (max-width:767px){.markdown-body{padding:15px}}",""]),t.exports=n},389:function(t,n,e){"use strict";var r=e(391),o=e.n(r),d=e(65),c=e.n(d),l=(e(403),{name:"MdViewer",components:{VueMarkdown:o.a},props:{src:{type:String,default:""}},data:function(){return{mdText:""}},created:function(){var t=this;c.a.get(this.src).then((function(n){t.mdText=n.data}))}}),m=(e(384),e(27)),component=Object(m.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("vue-markdown",{staticClass:"markdown-body",attrs:{source:this.mdText}})}),[],!1,null,null,null);n.a=component.exports},668:function(t,n,e){"use strict";e.r(n);var r={components:{MdViewer:e(389).a},data:function(){return{mdPath:"/doc/help.md"}}},o=e(27),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("md-viewer",{attrs:{src:this.mdPath}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);