(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-084a5671"],{"555f":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-skeleton-loader",{staticClass:"mx-auto",staticStyle:{width:"100%"},attrs:{type:t.type}})},r=[],i={props:{type:{type:String,default:"table"}}},o=i,s=e("2877"),c=e("6544"),d=e.n(c),u=e("3129"),l=Object(s["a"])(o,n,r,!1,null,null,null);a["a"]=l.exports;d()(l,{VSkeletonLoader:u["a"]})},"647b":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",[e("v-card-title",{staticClass:"py-2"},[t._v("Pilih Startup")]),e("v-card-text",[t.isLoading?e("Loader"):e("v-data-table",{staticClass:"mt-0",attrs:{headers:t.header,items:t.dataStartup,"items-per-page":10},scopedSlots:t._u([{key:"item.no",fn:function(a){var e=a.item;return[t._v(" "+t._s(t.dataStartup.map((function(t){return t.id})).indexOf(e.id)+1)+" ")]}},{key:"no-data",fn:function(){return[e("v-alert",{staticClass:"mt-4",attrs:{type:"info"}},[e("div",[t._v("Data tidak ditemukan")])])]},proxy:!0},{key:"item.actions",fn:function(a){var n=a.item;return[e("v-btn",{attrs:{small:"",dark:"",color:"cyan",depressed:""},on:{click:function(a){return t.$router.push({name:"show-response",params:{startup_id:n.id_startup,traction_id:t.traction_id}})}}},[t._v(" lihat traction ")])]}}])})],1)],1)},r=[],i=e("5530"),o=e("2f62"),s=e("555f"),c={props:["traction_id"],data:function(){return{header:[{text:"No",value:"no",sortable:!1},{text:"Startup",value:"name",sortable:!1},{text:"Managed By",value:"manager_name",sortable:!1},{text:"",value:"actions",align:"center",sortable:!1}]}},components:{Loader:s["a"]},created:function(){this.$store.dispatch("dataIncubatorTraction/updateIsLoading",!0),this.$store.dispatch("dataIncubatorTraction/getDetailTraction",this.traction_id)},computed:Object(i["a"])({},Object(o["b"])("dataIncubatorTraction",["dataStartup","isLoading"]))},d=c,u=e("2877"),l=e("6544"),p=e.n(l),f=e("0798"),v=e("8336"),b=e("b0af"),m=e("99d9"),h=e("8fea"),_=Object(u["a"])(d,n,r,!1,null,null,null);a["default"]=_.exports;p()(_,{VAlert:f["a"],VBtn:v["a"],VCard:b["a"],VCardText:m["b"],VCardTitle:m["c"],VDataTable:h["a"]})}}]);
//# sourceMappingURL=chunk-084a5671.c65bf24c.js.map