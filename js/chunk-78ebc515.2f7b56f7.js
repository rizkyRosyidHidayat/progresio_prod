(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78ebc515"],{"080e":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pa-md-6 pa-sm-3"},[e("v-card",[e("v-card-title",{staticClass:"py-2"},[t._v("Daftar Incubator")]),e("v-card-text",[t.isLoading?e("Loader"):e("v-data-table",{staticClass:"mt-0",attrs:{headers:t.header,items:t.dataIncubator,"items-per-page":10},scopedSlots:t._u([{key:"item.no",fn:function(a){var e=a.item;return[t._v(" "+t._s(t.dataIncubator.map((function(t){return t.id})).indexOf(e.id)+1)+" ")]}},{key:"item.incubator",fn:function(a){var i=a.item;return[e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"ml-3"},[t._v(t._s(i.name))])])]}},{key:"item.manage",fn:function(a){var i=a.item;return[e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"ml-3"},[t._v(t._s(i.managed_by))])])]}},{key:"item.aktifasi",fn:function(a){var i=a.item;return[e("v-btn",{staticStyle:{"border-radius":"2px 0 0 2px"},attrs:{"x-small":"",loading:t.isLoadingAktifasi,color:"1"===i.aktifasi?"success":"default",depressed:""},on:{click:function(a){return t.changeAktifasi({id:i.id,value:1})}}},[t._v(" on ")]),e("v-btn",{staticStyle:{"border-radius":"0 2px 2px 0"},attrs:{"x-small":"",loading:t.isLoadingAktifasi,color:"0"===i.aktifasi?"red":"default",dark:!1===i.aktifasi,depressed:""},on:{click:function(a){return t.changeAktifasi({id:i.id,value:0})}}},[t._v(" off ")])]}},{key:"no-data",fn:function(){return[e("v-alert",{staticClass:"mt-4",attrs:{type:"info"}},[e("div",[t._v("Data tidak ditemukan")])])]},proxy:!0},{key:"item.action",fn:function(a){return[e("v-btn",{attrs:{icon:"",color:"primary"}},[e("v-icon",{attrs:{small:""}},[t._v("mdi-eye")])],1),e("v-btn",{attrs:{icon:"",color:"red"}},[e("v-icon",{attrs:{small:""}},[t._v("mdi-trash-can")])],1)]}}])})],1)],1)],1)},n=[],s=e("5530"),r=e("2f62"),o=e("555f"),c={data:function(){return{header:[{text:"No",value:"no",sortable:!1},{text:"Incubator",value:"name",sortable:!1},{text:"Status",value:"status",sortable:!1},{text:"Managed By",value:"managed_by",sortable:!1},{text:"Aktifasi",value:"aktifasi",sortable:!1},{text:"Action",value:"action",align:"center",sortable:!1}],data:[{id:1,incubator:{logo:"avatar.jpg",name:"Amikom Bussniess Park"},status:"Premium",manage:{avatar:"avatar.jpg",name:"Rizky Rosyid Hidayat"},aktivasi:!0}]}},components:{Loader:o["a"]},created:function(){this.$store.dispatch("dataIncubator/getDataIncubator"),this.$store.dispatch("dataIncubator/updateIsLoading",!0)},computed:Object(s["a"])({},Object(r["b"])("dataIncubator",["isLoading","dataIncubator","isLoadingAktifasi"])),methods:{changeAktifasi:function(t){this.$store.dispatch("dataIncubator/postAktifasiIncubator",{id:t.id,aktifasi:t.value}),this.$store.dispatch("dataIncubator/updateIsLoadingAktifasi",!0)}}},d=c,l=e("2877"),u=e("6544"),f=e.n(u),v=e("0798"),m=e("8336"),b=e("b0af"),p=e("99d9"),k=e("8fea"),g=e("132d"),y=Object(l["a"])(d,i,n,!1,null,null,null);a["default"]=y.exports;f()(y,{VAlert:v["a"],VBtn:m["a"],VCard:b["a"],VCardText:p["b"],VCardTitle:p["c"],VDataTable:k["a"],VIcon:g["a"]})},"555f":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-skeleton-loader",{staticClass:"mx-auto",staticStyle:{width:"100%"},attrs:{type:t.type}})},n=[],s={props:{type:{type:String,default:"table"}}},r=s,o=e("2877"),c=e("6544"),d=e.n(c),l=e("3129"),u=Object(o["a"])(r,i,n,!1,null,null,null);a["a"]=u.exports;d()(u,{VSkeletonLoader:l["a"]})}}]);
//# sourceMappingURL=chunk-78ebc515.2f7b56f7.js.map