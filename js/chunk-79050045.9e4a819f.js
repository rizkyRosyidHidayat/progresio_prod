(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79050045"],{"555f":function(a,t,e){"use strict";var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-skeleton-loader",{staticClass:"mx-auto",staticStyle:{width:"100%"},attrs:{type:a.type}})},i=[],r={props:{type:{type:String,default:"table"}}},s=r,o=e("2877"),d=e("6544"),c=e.n(d),l=e("3129"),u=Object(o["a"])(s,n,i,!1,null,null,null);t["a"]=u.exports;c()(u,{VSkeletonLoader:l["a"]})},fee3:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"pa-md-6 pa-sm-3"},[e("v-card",[e("v-card-title",{staticClass:"py-2"},[a._v("Daftar Startup")]),e("v-card-text",[a.isLoading?e("Loader"):e("v-data-table",{staticClass:"mt-0",attrs:{headers:a.header,items:a.dataStartup,"items-per-page":10},scopedSlots:a._u([{key:"item.no",fn:function(t){var e=t.item;return[a._v(" "+a._s(a.dataStartup.map((function(a){return a.id})).indexOf(e.id)+1)+" ")]}},{key:"item.startup",fn:function(t){var n=t.item;return[e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"ml-3"},[a._v(" "+a._s(n.name)+" ")])])]}},{key:"item.incubator",fn:function(t){var n=t.item;return[e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"ml-3"},[a._v(a._s(n.incubator_by))])])]}},{key:"item.manage",fn:function(t){var n=t.item;return[e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"ml-3"},[a._v(" "+a._s(n.managed_by)+" "),e("br")])])]}},{key:"no-data",fn:function(){return[e("v-alert",{staticClass:"mt-4",attrs:{type:"info"}},[e("div",[a._v("Data tidak ditemukan")])])]},proxy:!0},{key:"item.action",fn:function(t){var n=t.item;return[e("v-btn",{attrs:{icon:"",color:"primary"}},[e("v-icon",{attrs:{small:""}},[a._v("mdi-eye")])],1),e("Hapus",{attrs:{id:n.id}})]}}])})],1)],1)],1)},i=[],r=e("5530"),s=e("2f62"),o=e("555f"),d=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:a._u([{key:"activator",fn:function(t){var n=t.on;return[e("v-btn",a._g({attrs:{icon:""}},n),[e("v-icon",{attrs:{small:"",color:"error"}},[a._v("mdi-trash-can")])],1)]}}]),model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"title pa-6"},[a._v(" Apakah anda yakin ingin menghapusnya ? ")]),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){a.dialog=!1}}},[a._v("kembali")]),e("v-btn",{attrs:{loading:a.isLoading,color:"primary"},on:{click:a.hapusData}},[a._v("hapus")])],1)],1)],1)},c=[],l={props:["id"],data:function(){return{dialog:!1}},methods:{hapusData:function(){this.$store.dispatch("dataStartup/deleteDataStartup",this.id),this.$store.dispatch("dataStartup/updateIsLoading",!0)}},computed:Object(r["a"])({},Object(s["b"])("dataStartup",["isLoading"]))},u=l,p=e("2877"),v=e("6544"),m=e.n(v),f=e("8336"),b=e("b0af"),g=e("99d9"),y=e("169a"),_=e("ce7e"),h=e("132d"),k=e("2fa4"),x=Object(p["a"])(u,d,c,!1,null,null,null),S=x.exports;m()(x,{VBtn:f["a"],VCard:b["a"],VCardActions:g["a"],VCardTitle:g["c"],VDialog:y["a"],VDivider:_["a"],VIcon:h["a"],VSpacer:k["a"]});var C={data:function(){return{header:[{text:"No",value:"no",sortable:!1},{text:"Startup",value:"name",sortable:!1},{text:"Managed By",value:"managed_by",sortable:!1},{text:"Incubator By",value:"incubator_by",sortable:!1},{text:"Action",value:"action",align:"center",sortable:!1}],data:[{id:1,incubator:{logo:"avatar.jpg",name:"Amikom Bussniess Park"},startup:{logo:"avatar.jpg",name:"Smartedu",bidang:"Education"},manage:{avatar:"avatar.jpg",name:"Rizky Rosyid Hidayat",jabatan:"CEO"}}]}},components:{Hapus:S,Loader:o["a"]},created:function(){this.$store.dispatch("dataAdminStartup/getDataStartup"),this.$store.dispatch("dataAdminStartup/updateIsLoading",!0)},computed:Object(r["a"])({},Object(s["b"])("dataAdminStartup",["isLoading","dataStartup"]))},V=C,j=e("0798"),D=e("8fea"),L=Object(p["a"])(V,n,i,!1,null,null,null);t["default"]=L.exports;m()(L,{VAlert:j["a"],VBtn:f["a"],VCard:b["a"],VCardText:g["b"],VCardTitle:g["c"],VDataTable:D["a"],VIcon:h["a"]})}}]);
//# sourceMappingURL=chunk-79050045.9e4a819f.js.map