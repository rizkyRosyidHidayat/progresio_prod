(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff96e140"],{1771:function(t,a,e){var n={"./abp.svg":"da78","./advantages.png":"fafc","./advantages/1.png":"8533","./advantages/2.png":"bc87","./advantages/3.png":"7120","./avatar.jpg":"915e","./award.jpg":"1ead","./dib.png":"c4c6","./feature.png":"eb62","./features/financial.png":"c9d2","./features/video.png":"71e1","./features/weapons.png":"c61b","./incubator.png":"dff4","./logo.png":"cf05","./logo.svg":"9b19","./se.png":"55ff","./sign.svg":"68ce","./slide.png":"3910","./sobatutbk.png":"6c6f","./testimoni.png":"918f","./trophy.svg":"18c1"};function r(t){var a=o(t);return e(a)}function o(t){if(!e.o(n,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=o,t.exports=r,r.id="1771"},"18c1":function(t,a,e){t.exports=e.p+"img/trophy.d1c7bf95.svg"},"1ead":function(t,a,e){t.exports=e.p+"img/award.eeab3e61.jpg"},"555f":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-skeleton-loader",{staticClass:"mx-auto",staticStyle:{width:"100%"},attrs:{type:t.type}})},r=[],o={props:{type:{type:String,default:"table"}}},s=o,i=e("2877"),c=e("6544"),p=e.n(c),u=e("3129"),d=Object(i["a"])(s,n,r,!1,null,null,null);a["a"]=d.exports;p()(d,{VSkeletonLoader:u["a"]})},"55ff":function(t,a,e){t.exports=e.p+"img/se.24191cbb.png"},"647b":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-card",[n("v-card-title",{staticClass:"py-2"},[t._v("Pilih Startup")]),n("v-card-text",[t.isLoading?n("Loader"):n("v-data-table",{staticClass:"mt-0",attrs:{headers:t.header,items:t.data,"items-per-page":10},scopedSlots:t._u([{key:"item.no",fn:function(a){var e=a.item;return[t._v(" "+t._s(t.data.map((function(t){return t.id})).indexOf(e.id)+1)+" ")]}},{key:"item.startup",fn:function(a){var r=a.item;return[n("div",{staticClass:"d-flex align-center"},[n("v-avatar",{attrs:{size:"40",color:"grey lighten-3"}},[null===r.startup.logo?n("div",[t._v("L")]):n("img",{attrs:{src:e("1771")("./"+r.startup.logo),alt:"logo startup"}})]),n("div",{staticClass:"ml-3"},[t._v(" "+t._s(r.startup.name)+" "),n("br"),n("span",{staticClass:"body grey--text"},[t._v(t._s(r.startup.bidang))])])],1)]}},{key:"item.manage",fn:function(a){var r=a.item;return[n("div",{staticClass:"d-flex align-center"},[n("v-avatar",{attrs:{size:"40",color:"grey lighten-3"}},[null===r.manage.avatar?n("div",[t._v("A")]):n("img",{attrs:{src:e("1771")("./"+r.manage.avatar),alt:"logo manage"}})]),n("div",{staticClass:"ml-3"},[t._v(" "+t._s(r.manage.name)+" "),n("br"),n("span",{staticClass:"body grey--text"},[t._v(t._s(r.manage.jabatan))])])],1)]}},{key:"no-data",fn:function(){return[n("v-alert",{staticClass:"mt-4",attrs:{type:"info"}},[n("div",[t._v("Data tidak ditemukan")])])]},proxy:!0},{key:"item.actions",fn:function(a){var e=a.item;return[n("v-btn",{attrs:{small:"",dark:"",color:"cyan",depressed:""},on:{click:function(a){return t.$router.push({name:"show-response",params:{startup_id:e.id,traction_id:t.traction_id}})}}},[t._v(" lihat traction ")])]}}])})],1)],1)},r=[],o=(e("d81d"),e("b0c0"),e("5530")),s=e("2f62"),i=e("555f"),c={props:["traction_id"],data:function(){return{header:[{text:"No",value:"no",sortable:!1},{text:"Startup",value:"startup",sortable:!1},{text:"Category",value:"category",sortable:!1},{text:"Managed By",value:"manage",sortable:!1},{text:"",value:"actions",align:"center",sortable:!1}]}},components:{Loader:i["a"]},created:function(){this.$store.dispatch("dataIncubatorStartup/getShowStartup"),this.$store.dispatch("dataIncubatorStartup/updateIsLoading",!0)},computed:Object(o["a"])({},Object(s["b"])("dataIncubatorStartup",["isLoading","dataStartup"]),{data:function(){return this.dataStartup.map((function(t){return{id:t.id,category:"Education",startup:{logo:t.profile.logo,name:t.name},manage:{avatar:t.profile.manager_profile_foto,name:t.profile.manager_name}}}))}})},p=c,u=e("2877"),d=e("6544"),g=e.n(d),l=e("0798"),f=e("8212"),v=e("8336"),m=e("b0af"),b=e("99d9"),y=e("8fea"),_=Object(u["a"])(p,n,r,!1,null,null,null);a["default"]=_.exports;g()(_,{VAlert:l["a"],VAvatar:f["a"],VBtn:v["a"],VCard:m["a"],VCardText:b["b"],VCardTitle:b["c"],VDataTable:y["a"]})},"68ce":function(t,a,e){t.exports=e.p+"img/sign.8de4af0f.svg"},"6c6f":function(t,a,e){t.exports=e.p+"img/sobatutbk.901cf6f7.png"},"915e":function(t,a,e){t.exports=e.p+"img/avatar.3ce154ef.jpg"},"9b19":function(t,a,e){t.exports=e.p+"img/logo.6e10e119.svg"},c4c6:function(t,a,e){t.exports=e.p+"img/dib.d0338380.png"},d81d:function(t,a,e){"use strict";var n=e("23e7"),r=e("b727").map,o=e("1dde"),s=e("ae40"),i=o("map"),c=s("map");n({target:"Array",proto:!0,forced:!i||!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},da78:function(t,a,e){t.exports=e.p+"img/abp.9dda15be.svg"},eb62:function(t,a,e){t.exports=e.p+"img/feature.efdbb49c.png"},fafc:function(t,a,e){t.exports=e.p+"img/advantages.cdc02012.png"}}]);
//# sourceMappingURL=chunk-ff96e140.9a1222cb.js.map