(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5dae694"],{"32c4":function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-card",[i("v-card-title",[i("v-btn",{attrs:{depressed:"",color:"cyan",id:"my-canvas",dark:""},on:{click:function(a){return t.$router.push({name:"halaman-cetak-incubator",params:{sprint_id:t.sprint_id,startup_id:t.startup_id}})}}},[i("v-icon",{staticClass:"mr-2"},[t._v("mdi-file-pdf")]),t._v(" export to pdf ")],1)],1),i("v-card-text",[i("Progress",{attrs:{sprint_id:t.sprint_id}})],1)],1)},e=[],n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"d-flex demo"},[t.isLoadingList?i("v-col",{attrs:{cols:"12",sm:"3"}},[i("Loader",{attrs:{type:"card"}})],1):t._e(),t.scene.children.length>0&&!t.isLoadingList?i("div",[i("Container",{attrs:{behaviour:"contain",orientation:"horizontal","drag-handle-selector":".column-drag-handle","drop-placeholder":t.upperDropPlaceholderOptions},on:{drop:function(a){return t.onColumnDrop(a)},"drag-start":t.dragStart}},t._l(t.scene.children,(function(a,s){return i("Draggable",{key:s},[i("v-card",{staticClass:"mb-6",class:{"mr-4":t.scene.children.length!==s+1},attrs:{width:"320"}},[i("v-card-title",{staticClass:"py-1 purple lighten-4 font-weight-regular subtitle-1 column-drag-handle"},[t._v(" "+t._s(a.name)+" "),i("v-spacer"),i("Edit",{attrs:{data:a}}),i("Hapus",{attrs:{id:a.id}})],1),i("v-card-text",{staticClass:"pa-3 pb-0 grey lighten-3 card-container"},[i("Container",{attrs:{"group-name":"col","get-child-payload":t.getCardPayload(a.id),"drag-class":"card-ghost","drop-class":"card-ghost-drop","drop-placeholder":t.dropPlaceholderOptions},on:{drop:function(i){return t.onCardDrop(a.id,i)},"drag-start":function(i){return t.ambilCard(a.id,i)}}},t._l(a.children,(function(s,e){return i("Draggable",{key:e},[i("v-sheet",{staticClass:"pa-3 mb-3"},[i("p",[t._v(t._s(s.data))]),i("div",{staticClass:"d-flex justify-end"},[i("DetailCard",{attrs:{data:s,column_id:a.id}})],1)])],1)})),1)],1),i("v-card-actions",{staticClass:"grey lighten-3"},[i("TambahCard",{attrs:{card:a.children,id:a.id}})],1)],1)],1)})),1)],1):t._e(),i("div",{class:{"ml-4":t.scene.children.length>0}},[i("v-card",[i("v-form",{ref:"form",model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[i("v-card-text",{staticClass:"pb-0"},[i("v-text-field",{attrs:{outlined:"",rules:t.requiredRule,dense:"",autocomplete:"off",placeholder:"Nama list"},model:{value:t.dataSprintList.nama,callback:function(a){t.$set(t.dataSprintList,"nama",a)},expression:"dataSprintList.nama"}})],1),i("v-card-actions",[i("v-btn",{staticClass:"white--text",attrs:{type:"submit",disabled:!t.valid,depressed:"",width:"320",color:"cyan"},on:{click:function(a){return a.preventDefault(),t.validate(a)}}},[i("v-icon",{staticClass:"mr-3"},[t._v("mdi-plus-circle")]),t._v(" tambah list ")],1)],1)],1)],1)],1)],1)},r=[],d=(i("4de4"),i("5530")),o=i("2f62"),l=i("3f7d"),c=i("555f"),u=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on;return[i("v-btn",t._g({staticClass:"white mr-3",attrs:{icon:"",small:"",color:"primary"}},s),[i("v-icon",{attrs:{"x-small":""}},[t._v("mdi-pencil")])],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[i("v-card",[i("div",{staticClass:"pa-2 text-center"},[i("span",{staticClass:"title"},[t._v("Edit List")])]),i("v-form",{ref:"form",model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[i("v-card-text",[i("v-text-field",{attrs:{label:"Nama",dense:"",rules:t.requiredRule,autocomplete:"off"},model:{value:t.data.name,callback:function(a){t.$set(t.data,"name",a)},expression:"data.name"}}),i("Notif",{attrs:{msg:t.msg,status:t.statusList},on:{visible:t.visible}})],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.dialog=!1}}},[t._v(" kembali ")]),i("v-btn",{attrs:{disabled:!t.valid,loading:t.isLoadingList,color:"primary",type:"submit",depressed:""},on:{click:function(a){return a.preventDefault(),t.validate(a)}}},[t._v(" simpan ")])],1)],1)],1)],1)},p=[],v=(i("b0c0"),i("6959")),h={props:["data"],data:function(){return{dialog:!1,valid:!0,modal:!1,requiredRule:[function(t){return!!t||"Data harus diisi"}],msg:{success:"Berhasil diubah",error:"Gagal diubah",visible:!1}}},components:{Notif:v["a"]},computed:Object(d["a"])({},Object(o["b"])("dataIncubatorSprint",["isLoadingList","statusList"])),watch:{statusList:function(t){null===t&&(this.dialog=!1)}},methods:{validate:function(){if(this.$refs.form.validate()){var t={id:this.data.id,nama:this.data.name,board_id:this.$route.params.sprint_id};this.$store.dispatch("dataIncubatorSprint/putDataList",t),this.$store.dispatch("dataIncubatorSprint/updateIsLoadingList",!0),this.msg.visible=!0}},visible:function(t){this.msg.visible=t,this.$store.commit("dataIncubatorSprint/updateStatusList",null)}}},m=h,f=i("2877"),b=i("6544"),g=i.n(b),_=i("8336"),C=i("b0af"),L=i("99d9"),k=i("169a"),x=i("ce7e"),V=i("4bd4"),$=i("132d"),I=i("2fa4"),y=i("8654"),D=Object(f["a"])(m,u,p,!1,null,null,null),w=D.exports;g()(D,{VBtn:_["a"],VCard:C["a"],VCardActions:L["a"],VCardText:L["b"],VDialog:k["a"],VDivider:x["a"],VForm:V["a"],VIcon:$["a"],VSpacer:I["a"],VTextField:y["a"]});var S=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on;return[i("v-btn",t._g({staticClass:"white",attrs:{icon:"",small:"",color:"error"}},s),[i("v-icon",{attrs:{"x-small":""}},[t._v("mdi-trash-can")])],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"title pa-6"},[t._v(" Apakah anda yakin ingin menghapusnya ? ")]),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.dialog=!1}}},[t._v("kembali")]),i("v-btn",{attrs:{loading:t.isLoadingList,color:"primary"},on:{click:t.hapusData}},[t._v("hapus")])],1)],1)],1)},O=[],j={props:["id"],data:function(){return{dialog:!1}},methods:{hapusData:function(){this.$store.dispatch("dataIncubatorSprint/deleteDataList",{id:this.id,board_id:parseInt(this.$route.params.sprint_id)}),this.$store.dispatch("dataIncubatorSprint/updateIsLoadingList",!0)}},computed:Object(d["a"])({},Object(o["b"])("dataIncubatorSprint",["isLoadingList","statusList"])),watch:{statusList:function(t){!0===t&&(this.dialog=!1)}}},B=j,E=Object(f["a"])(B,S,O,!1,null,null,null),T=E.exports;g()(E,{VBtn:_["a"],VCard:C["a"],VCardActions:L["a"],VCardTitle:L["c"],VDialog:k["a"],VDivider:x["a"],VIcon:$["a"],VSpacer:I["a"]});var A=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on;return[i("v-btn",t._g({attrs:{text:"",block:"",color:"cyan"}},s),[i("v-icon",{staticClass:"mr-3"},[t._v("mdi-plus-circle")]),t._v(" tambah kegiatan ")],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[i("v-card",[i("div",{staticClass:"pa-2 text-center"},[i("span",{staticClass:"title"},[t._v("Tambah Kegiatan")])]),i("v-form",{ref:"form",attrs:{enctype:"multipart/form-data"},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[i("v-card-text",[i("v-text-field",{attrs:{label:"Nama",dense:"",rules:t.requiredRule,autocomplete:"off"},model:{value:t.data.title,callback:function(a){t.$set(t.data,"title",a)},expression:"data.title"}})],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.dialog=!1}}},[t._v(" kembali ")]),i("v-btn",{attrs:{disabled:!t.valid,loading:t.isLoadingCard,color:"primary",type:"submit",depressed:""},on:{click:function(a){return a.preventDefault(),t.validate(a)}}},[t._v(" simpan ")])],1)],1)],1)],1)},F=[],P={props:["card","id"],data:function(){return{dialog:!1,valid:!0,data:{title:"",list_id:""},requiredRule:[function(t){return!!t||"Data harus diisi"}],msg:{success:"Berhasil diubah",error:"Gagal diubah",visible:!1}}},computed:Object(d["a"])({},Object(o["b"])("dataIncubatorSprint",["isLoadingCard","statusCard"])),methods:{validate:function(){this.$refs.form.validate()&&(this.data.list_id=this.id,this.data.urut=this.card.length+1,this.data.board_id=this.$route.params.sprint_id,this.data.startup_id=this.$route.params.startup_id,this.$store.dispatch("dataIncubatorSprint/postDataCard",this.data),this.$store.dispatch("dataIncubatorSprint/updateIsLoadingCard",!0))}}},N=P,R=Object(f["a"])(N,A,F,!1,null,null,null),q=R.exports;g()(R,{VBtn:_["a"],VCard:C["a"],VCardActions:L["a"],VCardText:L["b"],VDialog:k["a"],VDivider:x["a"],VForm:V["a"],VIcon:$["a"],VSpacer:I["a"],VTextField:y["a"]});var z=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-dialog",{attrs:{width:"800"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on;return[i("v-icon",t._g({},s),[t._v("mdi-dots-horizontal")])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("v-spacer"),i("v-btn",{attrs:{icon:""},on:{click:function(a){t.dialog=!1}}},[i("v-icon",[t._v("mdi-close")])],1)],1),i("v-card-text",{staticClass:"black--text"},[i("v-row",[i("v-col",{attrs:{cols:"12",md:"8",sm:"12"}},[i("EditTitle",{attrs:{id:t.detailCard.id,data:t.detailCard.title},on:{visible:t.visible}}),i("EditDesc",{attrs:{id:t.detailCard.id,data:t.detailCard.description},on:{visible:t.visible}}),i("EditFile",{attrs:{id:t.detailCard.id,data:t.detailCard.berkas},on:{visible:t.visible}})],1),i("v-col",{attrs:{cols:"12",md:"4",sm:"12"}},[i(t.tabs,{tag:"component",attrs:{id:t.data.id,column_id:t.column_id},on:{actions:t.changeComponent,dialog:t.closeDialog}})],1)],1)],1)],1),i("v-snackbar",{attrs:{top:"",color:t.status},model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},["success"===t.status?i("span",[t._v("Berhasil diubah")]):i("span",[t._v("Gagal diubah")])])],1)},G=[],H=i("425b"),J=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"d-flex align-center"},[i("v-icon",{staticClass:"mr-3"},[t._v("mdi-content-copy")]),i("div",{staticClass:"title"},[t._v("Salin ke")])],1),i("div",{staticClass:"subtitle-1"},[t._v("Sprint")]),i("v-select",{attrs:{items:t.dataSprint,"item-text":"nama","item-value":"id",dense:"",outlined:""},model:{value:t.sprint_id,callback:function(a){t.sprint_id=a},expression:"sprint_id"}}),i("div",{staticClass:"subtitle-1"},[t._v("List")]),i("v-select",{attrs:{disbaled:""===t.sprint_id,items:t.dataList,"item-text":"nama","item-value":"id",dense:"",outlined:""},model:{value:t.list_id,callback:function(a){t.list_id=a},expression:"list_id"}}),i("div",{staticClass:"d-flex justify-end"},[i("v-btn",{attrs:{text:"",small:"",color:"primary"},on:{click:function(a){return t.$emit("actions","Actions")}}},[t._v(" kembali ")]),i("v-btn",{attrs:{depressed:"",small:"",loading:t.isLoading,color:"primary"},on:{click:t.copyCard}},[t._v(" salin ")])],1)],1)},K=[],M={props:["id"],data:function(){return{sprint_id:"",isLoading:!1,dataList:[],list_id:0}},computed:Object(d["a"])({},Object(o["b"])("dataIncubatorSprint",["dataSprint"])),watch:{sprint_id:function(t){var a=this;Object(H["g"])(t).then((function(t){a.dataList=t.data.data}))}},methods:{copyCard:function(){var t=this;this.isLoading=!0,Object(H["a"])({card_id:this.id,list_id:this.list_id,startup_id:parseInt(this.$route.params.startup_id)}).then((function(){t.$store.dispatch("dataIncubatorSprint/getDataList",t.$route.params.sprint_id),t.isLoading=!1,t.$emit("dialog",!1)}))}}},U=M,Q=i("b974"),W=Object(f["a"])(U,J,K,!1,null,null,null),X=W.exports;g()(W,{VBtn:_["a"],VIcon:$["a"],VSelect:Q["a"]});var Y=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"d-flex align-center"},[i("v-icon",{staticClass:"mr-3"},[t._v("mdi-arrow-right")]),i("div",{staticClass:"title"},[t._v("Pindah ke")])],1),i("div",{staticClass:"subtitle-1"},[t._v("Sprint")]),i("v-select",{attrs:{items:t.dataSprint,"item-text":"nama","item-value":"id",dense:"",outlined:""},model:{value:t.sprint_id,callback:function(a){t.sprint_id=a},expression:"sprint_id"}}),i("div",{staticClass:"subtitle-1"},[t._v("List")]),i("v-select",{attrs:{disbaled:""===t.sprint_id,items:t.dataList,"item-text":"nama","item-value":"id",dense:"",outlined:""},model:{value:t.list_id,callback:function(a){t.list_id=a},expression:"list_id"}}),i("div",{staticClass:"d-flex justify-end"},[i("v-btn",{attrs:{text:"",small:"",color:"primary"},on:{click:function(a){return t.$emit("actions","Actions")}}},[t._v(" kembali ")]),i("v-btn",{attrs:{depressed:"",small:"",loading:t.isLoading,color:"primary"},on:{click:t.moveCard}},[t._v(" pindah ")])],1)],1)},Z=[],tt={props:["id","column_id"],data:function(){return{sprint_id:"",dataList:[],isLoading:!1,list_id:0}},computed:Object(d["a"])({},Object(o["b"])("dataIncubatorSprint",["dataSprint"])),watch:{sprint_id:function(t){var a=this;Object(H["g"])(t).then((function(t){a.dataList=t.data.data}))}},methods:{moveCard:function(){var t=this;this.isLoading=!0,Object(H["l"])({card_id:this.id,list_id:this.list_id,column_id:this.column_id}).then((function(){t.$store.dispatch("dataIncubatorSprint/getDataList",t.$route.params.sprint_id),t.isLoading=!1,t.$emit("dialog",!1)}))}}},at=tt,it=Object(f["a"])(at,Y,Z,!1,null,null,null),st=it.exports;g()(it,{VBtn:_["a"],VIcon:$["a"],VSelect:Q["a"]});var et=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("p",{staticClass:"title grey--text"},[t._v("ACTIONS")]),i("v-btn",{staticClass:"justify-start mb-3",attrs:{depressed:"",block:"",color:"grey lighten-2"},on:{click:function(a){return t.$emit("actions","Move")}}},[i("v-icon",{staticClass:"mr-3"},[t._v("mdi-arrow-right")]),t._v(" pindah ke ")],1),i("v-btn",{staticClass:"justify-start mb-3",attrs:{depressed:"",block:"",color:"grey lighten-2"},on:{click:function(a){return t.$emit("actions","Copy")}}},[i("v-icon",{staticClass:"mr-3"},[t._v("mdi-content-copy")]),t._v(" salin ke ")],1),i("v-btn",{staticClass:"justify-start mb-3",attrs:{depressed:"",block:"",loading:t.isLoading,color:"grey lighten-2"},on:{click:t.hapusCard}},[i("v-icon",{staticClass:"mr-3"},[t._v("mdi-trash-can")]),t._v(" hapus ")],1)],1)},nt=[],rt={props:["id","column_id"],data:function(){return{isLoading:!1}},methods:{hapusCard:function(){var t=this;this.isLoading=!0,Object(H["b"])({card_id:this.id,column_id:this.column_id}).then((function(){t.$store.dispatch("dataIncubatorSprint/getDataList",t.$route.params.sprint_id),t.isLoading=!1,t.$emit("dialog",!1)}))}}},dt=rt,ot=Object(f["a"])(dt,et,nt,!1,null,null,null),lt=ot.exports;g()(ot,{VBtn:_["a"],VIcon:$["a"]});var ct=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"d-flex"},[i("v-icon",[t._v("mdi-attachment")]),i("div",{staticClass:"title font-weight-bold ml-3 mb-3"},[t._v(" Attachment ")])],1),""===t.cekFile(t.data)?i("div"):t._e(),"gambar"===t.cekFile(t.data)?i("div",{staticClass:"d-flex justify-center align-center"},[i("img",{attrs:{src:"https://progresio.id/api/public/uploads/berkas/"+t.data,width:"150"}}),t._v(" "),i("br"),i("v-btn",{staticClass:"ml-3",attrs:{text:"",small:"",color:"primary"},on:{click:function(a){return t.download(t.data)}}},[t._v(" download ")])],1):t._e(),"file"===t.cekFile(t.data)?i("div",{staticClass:"d-flex align-center justify-center my-4"},[i("v-icon",{staticClass:"mr-3"},[t._v("mdi-file")]),i("span",[t._v(t._s(t.data))]),i("v-btn",{staticClass:"ml-3",attrs:{text:"",small:"",color:"primary"},on:{click:function(a){return t.download(t.data)}}},[t._v(" download ")])],1):t._e(),i("v-file-input",{staticClass:"ml-9",attrs:{"show-size":"",counter:"",label:"File"},model:{value:t.file,callback:function(a){t.file=a},expression:"file"}}),i("div",{staticClass:"d-flex"},[i("v-spacer"),t.showBtn?i("v-btn",{staticClass:"mt-3",attrs:{lodaing:t.isLoading,depressed:"",color:"primary",small:""},on:{click:t.updateData}},[t._v(" simpan ")]):t._e()],1)],1)},ut=[],pt=(i("ac1f"),i("1276"),i("21a6")),vt={props:["data","id"],data:function(){return{showBtn:!1,file:null,isLoading:!1}},computed:{changeData:{get:function(){return this.data},set:function(t){this.file=t}}},watch:{file:function(){this.showBtn=!0}},methods:{cekFile:function(t){if(null==t)return"";var a=t.split("."),i=a[1];return"jpeg"===i?"gambar":"file"},updateData:function(){var t=this;this.isLoading=!0;var a=new FormData;a.append("berkas",this.file),Object(H["s"])(this.id,a).then((function(a){"success"===a.data.status?(t.$emit("visible","success"),t.$store.dispatch("dataIncubatorSprint/getDataList",t.$route.params.sprint_id),t.isLoading=!1,t.showBtn=!1):(t.$emit("visible","error"),t.isLoading=!1,t.showBtn=!1)})).catch((function(){t.$emit("visible","error"),t.isLoading=!1,t.showBtn=!1}))},handleClickOutside:function(t){this.$el.contains(t.target)||(this.showBtn=!1)},download:function(t){var a=t.split(".");Object(pt["saveAs"])("https://progresio.id/api/public/uploads/berkas/".concat(t),"berkas_card."+a[1])}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}},ht=vt,mt=i("23a7"),ft=Object(f["a"])(ht,ct,ut,!1,null,null,null),bt=ft.exports;g()(ft,{VBtn:_["a"],VFileInput:mt["a"],VIcon:$["a"],VSpacer:I["a"]});var gt=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"d-flex"},[i("v-icon",[t._v("mdi-text")]),i("div",{staticClass:"title font-weight-bold ml-3"},[t._v(" Deskripsi ")])],1),i("v-textarea",{staticClass:"mt-2 ml-9",attrs:{outlined:"","full-width":""},on:{input:function(a){t.showBtn=!0}},model:{value:t.changeData,callback:function(a){t.changeData=a},expression:"changeData"}}),i("div",{staticClass:"d-flex"},[i("v-spacer"),t.showBtn?i("v-btn",{attrs:{loading:t.isLoading,depressed:"",color:"primary",small:""},on:{click:t.updateData}},[t._v(" simpan ")]):t._e()],1)],1)},_t=[],Ct={props:["data","id"],data:function(){return{showBtn:!1,desc:"",isLoading:!1}},computed:{changeData:{get:function(){return this.data},set:function(t){this.desc=t}}},methods:{updateData:function(){var t=this;this.isLoading=!0,Object(H["r"])(this.id,{description:this.desc}).then((function(a){"success"===a.data.status?(t.$emit("visible","success"),t.$store.dispatch("dataIncubatorSprint/getDataList",t.$route.params.sprint_id),t.isLoading=!1,t.showBtn=!1):(t.$emit("visible","error"),t.isLoading=!1,t.showBtn=!1)})).catch((function(){t.$emit("visible","error"),t.isLoading=!1,t.showBtn=!1}))},handleClickOutside:function(t){this.$el.contains(t.target)||(this.showBtn=!1)}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}},Lt=Ct,kt=i("a844"),xt=Object(f["a"])(Lt,gt,_t,!1,null,null,null),Vt=xt.exports;g()(xt,{VBtn:_["a"],VIcon:$["a"],VSpacer:I["a"],VTextarea:kt["a"]});var $t=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"d-flex"},[i("v-icon",[t._v("mdi-card-text")]),i("div",{staticClass:"title font-weight-bold ml-3"},[t._v(" Judul ")])],1),i("v-text-field",{staticClass:"mt-2 ml-9",attrs:{dense:""},on:{input:function(a){t.showBtn=!0}},model:{value:t.changeData,callback:function(a){t.changeData=a},expression:"changeData"}}),i("div",{staticClass:"d-flex"},[i("v-spacer"),t.showBtn?i("v-btn",{attrs:{depressed:"",color:"primary",loading:t.isLoading,small:""},on:{click:t.updateData}},[t._v(" simpan ")]):t._e()],1)],1)},It=[],yt={props:["data","id"],data:function(){return{showBtn:!1,title:"",isLoading:!1}},computed:{changeData:{get:function(){return this.data},set:function(t){this.title=t}}},methods:{updateData:function(){var t=this;this.isLoading=!0,Object(H["t"])(this.id,{title:this.title}).then((function(a){"success"===a.data.status?(t.$emit("visible","success"),t.$store.dispatch("dataIncubatorSprint/getDataList",t.$route.params.sprint_id),t.isLoading=!1,t.showBtn=!1):(t.$emit("visible","error"),t.isLoading=!1,t.showBtn=!1)})).catch((function(){t.$emit("visible","error"),t.isLoading=!1,t.showBtn=!1}))},handleClickOutside:function(t){this.$el.contains(t.target)||(this.showBtn=!1)}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}},Dt=yt,wt=Object(f["a"])(Dt,$t,It,!1,null,null,null),St=wt.exports;g()(wt,{VBtn:_["a"],VIcon:$["a"],VSpacer:I["a"],VTextField:y["a"]});var Ot={props:["data","column_id"],data:function(){return{dialog:!1,valid:!0,detailCard:{},tabs:"Actions",snackbar:!1,status:""}},components:{Actions:lt,Move:st,Copy:X,EditFile:bt,EditDesc:Vt,EditTitle:St},watch:{dialog:function(t){var a=this;!0===t&&Object(H["i"])(this.data.id).then((function(t){return a.detailCard=t.data.data[0]}))}},methods:{changeComponent:function(t){this.tabs=t},closeDialog:function(t){this.dialog=t},visible:function(t){this.snackbar=!0,this.status=t}}},jt=Ot,Bt=i("62ad"),Et=i("0fd9"),Tt=i("2db4"),At=Object(f["a"])(jt,z,G,!1,null,null,null),Ft=At.exports;g()(At,{VBtn:_["a"],VCard:C["a"],VCardText:L["b"],VCardTitle:L["c"],VCol:Bt["a"],VDialog:k["a"],VIcon:$["a"],VRow:Et["a"],VSnackbar:Tt["a"],VSpacer:I["a"]});var Pt={type:"container",props:{orientation:"horizontal"},children:[]},Nt={props:["sprint_id"],components:{Container:l["Container"],Draggable:l["Draggable"],TambahCard:q,DetailCard:Ft,Loader:c["a"],Edit:w,Hapus:T},data:function(){return{valid:!0,dataSprintList:{nama:""},requiredRule:[function(t){return!!t||"Harus di isi"}],upperDropPlaceholderOptions:{className:"cards-drop-preview",animationDuration:"150",showOnTop:!0},dropPlaceholderOptions:{className:"drop-preview",animationDuration:"150",showOnTop:!0}}},created:function(){this.$store.dispatch("dataIncubatorSprint/getDataList",this.sprint_id),this.$store.dispatch("dataIncubatorSprint/updateIsLoadingList",!0),this.$store.dispatch("dataIncubatorSprint/getDataSprint",this.$route.params.startup_id)},computed:Object(d["a"])({},Object(o["b"])("dataIncubatorSprint",["dataList","isLoadingList","statusList"]),{scene:function(){return Pt.children=this.dataList,Pt}}),methods:{onColumnDrop:function(t){var a=this.dataList.filter((function(a,i){return i===t.removedIndex})),i=this.dataList.filter((function(a,i){return i===t.addedIndex})),s=Object(d["a"])({},a[0]),e=Object(d["a"])({},i[0]);this.$store.dispatch("dataIncubatorSprint/moveDataList",{list_pindah:s.id,list_kepindah:e.id,board_id:parseInt(this.sprint_id)})},onCardDrop:function(t,a){if(null!==a.removedIndex&&null!==a.addedIndex){var i=this.dataList.filter((function(a){return a.id===t}))[0],s=i.children.filter((function(t,i){return i===a.removedIndex}))[0],e=i.children.filter((function(t,i){return i===a.addedIndex}))[0];this.$store.dispatch("dataIncubatorSprint/moveDataCard",{card_pindah_id:s.id,card_kepindah_id:e.id,board_id:parseInt(this.sprint_id)})}else if((null!==a.removedIndex||null!==a.addedIndex)&&null!==a.addedIndex){var n=0,r=this.dataList.filter((function(a){return a.id===t}))[0];n=0===r.children.length?1:a.addedIndex+1;var d={listAsal:this.listAsalId,idCard:this.cardAsalId,urutCardAsal:this.cardAsalUrut,idList:t,urut:n,board_id:parseInt(this.sprint_id)};this.$store.dispatch("dataIncubatorSprint/moveDataCardList",d)}},getCardPayload:function(t){var a=this;return function(i){return a.scene.children.filter((function(a){return a.id===t}))[0].children[i]}},ambilCard:function(t,a){this.cardAsalId=a.payload.id,this.cardAsalUrut=a.payload.urut,a.isSource&&(this.listAsalId=t)},dragStart:function(){console.log("drag started")},validate:function(){this.$refs.form.validate()&&(this.dataSprintList.board_id=this.sprint_id,this.dataSprintList.urut=this.scene.children.length+1,this.$store.dispatch("dataIncubatorSprint/postDataList",this.dataSprintList),this.$store.dispatch("dataIncubatorSprint/updateIsLoadingList",!0))},tambahKegiatan:function(t){this.scene.children[t.index].children.push(t.data)}}},Rt=Nt,qt=(i("424b"),i("8dd9")),zt=Object(f["a"])(Rt,n,r,!1,null,null,null),Gt=zt.exports;g()(zt,{VBtn:_["a"],VCard:C["a"],VCardActions:L["a"],VCardText:L["b"],VCardTitle:L["c"],VCol:Bt["a"],VForm:V["a"],VIcon:$["a"],VSheet:qt["a"],VSpacer:I["a"],VTextField:y["a"]});var Ht={props:["sprint_id","startup_id"],components:{Progress:Gt}},Jt=Ht,Kt=Object(f["a"])(Jt,s,e,!1,null,null,null);a["default"]=Kt.exports;g()(Kt,{VBtn:_["a"],VCard:C["a"],VCardText:L["b"],VCardTitle:L["c"],VIcon:$["a"]})},"424b":function(t,a,i){"use strict";var s=i("972c"),e=i.n(s);e.a},"972c":function(t,a,i){}}]);
//# sourceMappingURL=chunk-b5dae694.896812db.js.map