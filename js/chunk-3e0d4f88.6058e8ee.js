(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e0d4f88"],{"0755":function(t,a,i){},"292b":function(t,a,i){"use strict";var e=i("0755"),r=i.n(e);r.a},a893:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-card",[i("v-card-title",[i("ExportWord")],1),i("v-card-text",[i("div",{staticClass:"d-flex demo"},[t.isLoadingList?i("v-col",{attrs:{cols:"12",sm:"3"}},[i("Loader",{attrs:{type:"card"}})],1):t.scene.children.length>0&&!t.isLoadingList?i("div",[i("Container",{attrs:{behaviour:"contain",orientation:"horizontal","drag-handle-selector":".column-drag-handle"},on:{drop:function(a){return t.onColumnDrop(a)},"drag-start":t.dragStart}},t._l(t.scene.children,(function(a,e){return i("Draggable",{key:e},[i("v-card",{staticClass:"mb-6",class:{"mr-4":t.scene.children.length!==e+1},attrs:{width:"320"}},[i("v-card-title",{staticClass:"py-1 purple lighten-4 font-weight-regular subtitle-1 column-drag-handle"},[t._v(" "+t._s(a.name)+" "),i("v-spacer"),i("Edit",{attrs:{data:a}}),i("Hapus",{attrs:{id:a.id}})],1),i("v-card-text",{staticClass:"pa-3 pb-0 grey lighten-3 card-container"},[i("Container",{attrs:{"group-name":"col","drag-class":"card-ghost","drop-class":"card-ghost-drop","get-child-payload":t.getCardPayload(a.id),"drop-placeholder":t.dropPlaceholderOptions},on:{drop:function(i){return t.onCardDrop(a.id,i)},"drag-start":function(i){return t.ambilCard(a.id,i)}}},t._l(a.children,(function(e,r){return i("Draggable",{key:r},[i("v-sheet",{staticClass:"pa-3 mb-3 pb-1"},[i("p",[t._v(t._s(e.data))]),i("div",{staticClass:"d-flex justify-end"},[i("DetailCard",{attrs:{data:e,column_id:a.id}})],1)])],1)})),1)],1),i("v-card-actions",{staticClass:"grey lighten-3"},[i("TambahCard",{attrs:{card:a.children,id:a.id}})],1)],1)],1)})),1)],1):t._e(),i("div",{class:{"ml-4":t.scene.children.length>0}},[i("v-card",[i("v-form",{ref:"form",model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[i("v-card-text",{staticClass:"pb-0"},[i("v-text-field",{attrs:{outlined:"",rules:t.requiredRule,dense:"",autocomplete:"off",placeholder:"Nama list"},model:{value:t.dataSprintList.nama,callback:function(a){t.$set(t.dataSprintList,"nama",a)},expression:"dataSprintList.nama"}})],1),i("v-card-actions",[i("v-btn",{staticClass:"white--text",attrs:{type:"submit",disabled:!t.valid,depressed:"",width:"320",color:"cyan"},on:{click:function(a){return a.preventDefault(),t.validate(a)}}},[i("v-icon",{staticClass:"mr-3"},[t._v("mdi-plus-circle")]),t._v(" tambah list ")],1)],1)],1)],1)],1)],1)])],1)},r=[],n=(i("4de4"),i("5530")),s=i("2f62"),d=i("3f7d"),l=i("555f"),o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on;return[i("v-btn",t._g({attrs:{text:"",block:"",color:"cyan"}},e),[i("v-icon",{staticClass:"mr-3"},[t._v("mdi-plus-circle")]),t._v(" tambah kegiatan ")],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[i("v-card",[i("div",{staticClass:"pa-2 text-center"},[i("span",{staticClass:"title"},[t._v("Tambah Kegiatan")])]),i("v-form",{ref:"form",attrs:{enctype:"multipart/form-data"},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[i("v-card-text",[i("v-text-field",{attrs:{label:"Nama",dense:"",rules:t.requiredRule,autocomplete:"off"},model:{value:t.data.title,callback:function(a){t.$set(t.data,"title",a)},expression:"data.title"}})],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.dialog=!1}}},[t._v(" kembali ")]),i("v-btn",{attrs:{disabled:!t.valid,loading:t.isLoadingCard,color:"primary",type:"submit",depressed:""},on:{click:function(a){return a.preventDefault(),t.validate(a)}}},[t._v(" simpan ")])],1)],1)],1)],1)},c=[],u={props:["card","id"],data:function(){return{dialog:!1,valid:!0,data:{title:"",list_id:""},requiredRule:[function(t){return!!t||"Data harus diisi"}],msg:{success:"Berhasil diubah",error:"Gagal diubah",visible:!1}}},computed:Object(n["a"])({},Object(s["b"])("dataStartupSprint",["isLoadingCard","statusCard"])),methods:{validate:function(){this.$refs.form.validate()&&(this.data.list_id=this.id,this.data.urut=this.card.length+1,this.data.board_id=this.$route.params.sprint_id,this.$store.dispatch("dataStartupSprint/postDataCard",this.data),this.$store.dispatch("dataStartupSprint/updateIsLoadingCard",!0))}}},p=u,v=i("2877"),m=i("6544"),h=i.n(m),f=i("8336"),b=i("b0af"),g=i("99d9"),_=i("169a"),C=i("ce7e"),x=i("4bd4"),k=i("132d"),S=i("2fa4"),L=i("8654"),y=Object(v["a"])(p,o,c,!1,null,null,null),V=y.exports;h()(y,{VBtn:f["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["b"],VDialog:_["a"],VDivider:C["a"],VForm:x["a"],VIcon:k["a"],VSpacer:S["a"],VTextField:L["a"]});var D=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-dialog",{attrs:{width:"800"},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on;return[i("v-icon",t._g({},e),[t._v("mdi-dots-horizontal")])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("v-spacer"),i("v-btn",{attrs:{icon:""},on:{click:function(a){t.dialog=!1}}},[i("v-icon",[t._v("mdi-close")])],1)],1),i("v-card-text",{staticClass:"black--text"},[i("center",[""===t.cekFile(t.detailCard.berkas)?i("div"):t._e(),"gambar"===t.cekFile(t.detailCard.berkas)?i("div",[i("img",{attrs:{src:"http://progresio.id/api/public/uploads/berkas/"+t.detailCard.berkas,width:"250"}}),t._v(" "),i("br"),i("v-btn",{staticClass:"ml-3",attrs:{text:"",small:"",color:"primary"}},[t._v(" download ")])],1):t._e(),"file"===t.cekFile(t.detailCard.berkas)?i("div",{staticClass:"d-flex align-center justify-center my-4"},[i("v-icon",{staticClass:"mr-3"},[t._v("mdi-file")]),i("span",[t._v(t._s(t.detailCard.berkas))]),i("v-btn",{staticClass:"ml-3",attrs:{text:"",small:"",color:"primary"}},[t._v(" download ")])],1):t._e()]),i("v-row",[i("v-col",{attrs:{cols:"12",md:"8",sm:"12"}},[i("v-text-field",{staticClass:"title font-weight-bold",attrs:{"prepend-icon":"mdi-card-text","append-icon":t.editName?"mdi-pencil":"",dense:""},on:{"click:append":t.updateTitle,focus:function(a){t.editName=!0},blur:function(a){t.editName=!1}},model:{value:t.detailCard.title,callback:function(a){t.$set(t.detailCard,"title",a)},expression:"detailCard.title"}}),i("div",{staticClass:"d-flex"},[i("v-icon",[t._v("mdi-text")]),i("div",{staticClass:"title font-weight-bold ml-3"},[t._v(" Deskripsi ")])],1),i("v-textarea",{staticClass:"mt-2 ml-9",attrs:{outlined:"","full-width":"","append-icon":t.editDesc?"mdi-pencil":""},on:{focus:function(a){t.editDesc=!0},blur:function(a){t.editDesc=!1},"click:append":t.updateDesc},model:{value:t.detailCard.description,callback:function(a){t.$set(t.detailCard,"description",a)},expression:"detailCard.description"}}),i("div",{staticClass:"d-flex"},[i("v-icon",[t._v("mdi-attachment")]),i("div",{staticClass:"title font-weight-bold ml-3"},[t._v(" Attachment ")])],1),i("v-file-input",{staticClass:"ml-9",attrs:{"show-size":"",counter:"",label:"File","prepend-icon":"","append-icon":t.editFile?"mdi-pencil":""},on:{focus:function(a){t.editFile=!0},blur:function(a){t.editFile=!1},"click:append":t.updateFile},model:{value:t.file,callback:function(a){t.file=a},expression:"file"}})],1),i("v-col",{attrs:{cols:"12",md:"4",sm:"12"}},[i(t.tabs,{tag:"component",attrs:{id:t.data.id,column_id:t.column_id},on:{actions:t.changeComponent,dialog:t.closeDialog}})],1)],1)],1)],1)],1)},w=[],$=(i("a4d3"),i("e01a"),i("ac1f"),i("1276"),i("ad3f")),O=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"d-flex align-center"},[i("v-icon",{staticClass:"mr-3"},[t._v("mdi-content-copy")]),i("div",{staticClass:"title"},[t._v("Salin ke")])],1),i("div",{staticClass:"subtitle-1"},[t._v("Sprint")]),i("v-select",{attrs:{items:t.dataSprint,"item-text":"nama","item-value":"id",dense:"",outlined:""},model:{value:t.sprint_id,callback:function(a){t.sprint_id=a},expression:"sprint_id"}}),i("div",{staticClass:"subtitle-1"},[t._v("List")]),i("v-select",{attrs:{disbaled:""===t.sprint_id,items:t.dataList,"item-text":"nama","item-value":"id",dense:"",outlined:""},model:{value:t.list_id,callback:function(a){t.list_id=a},expression:"list_id"}}),i("div",{staticClass:"d-flex justify-end"},[i("v-btn",{attrs:{text:"",small:"",color:"primary"},on:{click:function(a){return t.$emit("actions","Actions")}}},[t._v(" kembali ")]),i("v-btn",{attrs:{depressed:"",small:"",loading:t.isLoading,color:"primary"},on:{click:t.copyCard}},[t._v(" salin ")])],1)],1)},I=[],j={props:["id"],data:function(){return{sprint_id:"",isLoading:!1,dataList:[],list_id:0}},computed:Object(n["a"])({},Object(s["b"])("dataStartupSprint",["dataSprint"])),watch:{sprint_id:function(t){var a=this;Object($["f"])(t).then((function(t){a.dataList=t.data.data}))}},methods:{copyCard:function(){var t=this;this.isLoading=!0,Object($["a"])({card_id:this.id,list_id:this.list_id}).then((function(){t.$store.dispatch("dataStartupSprint/getDataList",t.$route.params.sprint_id),t.isLoading=!1,t.$emit("dialog",!1)}))}}},T=j,A=i("b974"),N=Object(v["a"])(T,O,I,!1,null,null,null),F=N.exports;h()(N,{VBtn:f["a"],VIcon:k["a"],VSelect:A["a"]});var E=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"d-flex align-center"},[i("v-icon",{staticClass:"mr-3"},[t._v("mdi-arrow-right")]),i("div",{staticClass:"title"},[t._v("Pindah ke")])],1),i("div",{staticClass:"subtitle-1"},[t._v("Sprint")]),i("v-select",{attrs:{items:t.dataSprint,"item-text":"nama","item-value":"id",dense:"",outlined:""},model:{value:t.sprint_id,callback:function(a){t.sprint_id=a},expression:"sprint_id"}}),i("div",{staticClass:"subtitle-1"},[t._v("List")]),i("v-select",{attrs:{disbaled:""===t.sprint_id,items:t.dataList,"item-text":"nama","item-value":"id",dense:"",outlined:""},model:{value:t.list_id,callback:function(a){t.list_id=a},expression:"list_id"}}),i("div",{staticClass:"d-flex justify-end"},[i("v-btn",{attrs:{text:"",small:"",color:"primary"},on:{click:function(a){return t.$emit("actions","Actions")}}},[t._v(" kembali ")]),i("v-btn",{attrs:{depressed:"",small:"",loading:t.isLoading,color:"primary"},on:{click:t.moveCard}},[t._v(" pindah ")])],1)],1)},P=[],R={props:["id","column_id"],data:function(){return{sprint_id:"",dataList:[],isLoading:!1,list_id:0}},computed:Object(n["a"])({},Object(s["b"])("dataStartupSprint",["dataSprint"])),watch:{sprint_id:function(t){var a=this;Object($["f"])(t).then((function(t){a.dataList=t.data.data}))}},methods:{moveCard:function(){var t=this;this.isLoading=!0,Object($["k"])({card_id:this.id,list_id:this.list_id,column_id:this.column_id}).then((function(){t.$store.dispatch("dataStartupSprint/getDataList",t.$route.params.sprint_id),t.isLoading=!1,t.$emit("dialog",!1)}))}}},B=R,q=Object(v["a"])(B,E,P,!1,null,null,null),H=q.exports;h()(q,{VBtn:f["a"],VIcon:k["a"],VSelect:A["a"]});var z=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("p",{staticClass:"title grey--text"},[t._v("ACTIONS")]),i("v-btn",{staticClass:"justify-start mb-3",attrs:{depressed:"",block:"",color:"grey lighten-2"},on:{click:function(a){return t.$emit("actions","Move")}}},[i("v-icon",{staticClass:"mr-3"},[t._v("mdi-arrow-right")]),t._v(" pindah ke ")],1),i("v-btn",{staticClass:"justify-start mb-3",attrs:{depressed:"",block:"",color:"grey lighten-2"},on:{click:function(a){return t.$emit("actions","Copy")}}},[i("v-icon",{staticClass:"mr-3"},[t._v("mdi-content-copy")]),t._v(" salin ke ")],1),i("v-btn",{staticClass:"justify-start mb-3",attrs:{depressed:"",block:"",loading:t.isLoading,color:"grey lighten-2"},on:{click:t.hapusCard}},[i("v-icon",{staticClass:"mr-3"},[t._v("mdi-trash-can")]),t._v(" hapus ")],1)],1)},G=[],M={props:["id","column_id"],data:function(){return{isLoading:!1}},methods:{hapusCard:function(){var t=this;this.isLoading=!0,Object($["b"])({card_id:this.id,column_id:this.column_id}).then((function(){t.$store.dispatch("dataStartupSprint/getDataList",t.$route.params.sprint_id),t.isLoading=!1,t.$emit("dialog",!1)}))}}},U=M,W=Object(v["a"])(U,z,G,!1,null,null,null),J=W.exports;h()(W,{VBtn:f["a"],VIcon:k["a"]});var Y={props:["data","column_id"],data:function(){return{dialog:!1,valid:!0,editName:!1,editDesc:!1,editFile:!1,file:null,detailCard:{},tabs:"Actions"}},components:{Actions:J,Move:H,Copy:F},watch:{dialog:function(t){var a=this;!0===t&&Object($["h"])(this.data.id).then((function(t){return a.detailCard=t.data.data[0]}))}},methods:{cekFile:function(t){if(null==t)return"";var a=t.split("."),i=a[1];return"jpeg"===i?"gambar":"file"},changeComponent:function(t){this.tabs=t},closeDialog:function(t){this.dialog=t},updateFile:function(){var t=this,a=new FormData;a.append("berkas",this.file),Object($["r"])(this.data.id,a).then((function(){return t.$store.dispatch("dataStartupSprint/getDataList",t.$route.params.sprint_id)}))},updateTitle:function(){Object($["s"])(this.data.id,{title:this.detailCard.title})},updateDesc:function(){Object($["q"])(this.data.id,{description:this.detailCard.description})}}},K=Y,X=i("62ad"),Q=i("23a7"),Z=i("0fd9"),tt=i("a844"),at=Object(v["a"])(K,D,w,!1,null,null,null),it=at.exports;h()(at,{VBtn:f["a"],VCard:b["a"],VCardText:g["b"],VCardTitle:g["c"],VCol:X["a"],VDialog:_["a"],VFileInput:Q["a"],VIcon:k["a"],VRow:Z["a"],VSpacer:S["a"],VTextField:L["a"],VTextarea:tt["a"]});var et=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on;return[i("v-btn",t._g({staticClass:"white mr-3",attrs:{icon:"",small:"",color:"primary"}},e),[i("v-icon",{attrs:{"x-small":""}},[t._v("mdi-pencil")])],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[i("v-card",[i("div",{staticClass:"pa-2 text-center"},[i("span",{staticClass:"title"},[t._v("Edit List")])]),i("v-form",{ref:"form",model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[i("v-card-text",[i("v-text-field",{attrs:{label:"Nama",dense:"",rules:t.requiredRule,autocomplete:"off"},model:{value:t.data.name,callback:function(a){t.$set(t.data,"name",a)},expression:"data.name"}}),i("Notif",{attrs:{msg:t.msg,status:t.statusList},on:{visible:t.visible}})],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.dialog=!1}}},[t._v(" kembali ")]),i("v-btn",{attrs:{disabled:!t.valid,loading:t.isLoadingList,color:"primary",type:"submit",depressed:""},on:{click:function(a){return a.preventDefault(),t.validate(a)}}},[t._v(" simpan ")])],1)],1)],1)],1)},rt=[],nt=(i("b0c0"),i("6959")),st={props:["data"],data:function(){return{dialog:!1,valid:!0,modal:!1,requiredRule:[function(t){return!!t||"Data harus diisi"}],msg:{success:"Berhasil diubah",error:"Gagal diubah",visible:!1}}},components:{Notif:nt["a"]},computed:Object(n["a"])({},Object(s["b"])("dataStartupSprint",["isLoadingList","statusList"])),watch:{statusList:function(t){null===t&&(this.dialog=!1)}},methods:{validate:function(){if(this.$refs.form.validate()){var t={id:this.data.id,nama:this.data.name,board_id:this.$route.params.sprint_id};this.$store.dispatch("dataStartupSprint/putDataList",t),this.$store.dispatch("dataStartupSprint/updateIsLoadingList",!0),this.msg.visible=!0}},visible:function(t){this.msg.visible=t,this.$store.commit("dataStartupSprint/updateStatusList",null)}}},dt=st,lt=Object(v["a"])(dt,et,rt,!1,null,null,null),ot=lt.exports;h()(lt,{VBtn:f["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["b"],VDialog:_["a"],VDivider:C["a"],VForm:x["a"],VIcon:k["a"],VSpacer:S["a"],VTextField:L["a"]});var ct=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on;return[i("v-btn",t._g({staticClass:"white",attrs:{icon:"",small:"",color:"error"}},e),[i("v-icon",{attrs:{"x-small":""}},[t._v("mdi-trash-can")])],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"title pa-6"},[t._v(" Apakah anda yakin ingin menghapusnya ? ")]),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.dialog=!1}}},[t._v("kembali")]),i("v-btn",{attrs:{loading:t.isLoadingList,color:"primary"},on:{click:t.hapusData}},[t._v("hapus")])],1)],1)],1)},ut=[],pt={props:["id"],data:function(){return{dialog:!1}},methods:{hapusData:function(){this.$store.dispatch("dataStartupSprint/deleteDataList",{id:this.id,board_id:parseInt(this.$route.params.sprint_id)}),this.$store.dispatch("dataStartupSprint/updateIsLoadingList",!0)}},computed:Object(n["a"])({},Object(s["b"])("dataStartupSprint",["isLoadingList","statusList"])),watch:{statusList:function(t){!0===t&&(this.dialog=!1)}}},vt=pt,mt=Object(v["a"])(vt,ct,ut,!1,null,null,null),ht=mt.exports;h()(mt,{VBtn:f["a"],VCard:b["a"],VCardActions:g["a"],VCardTitle:g["c"],VDialog:_["a"],VDivider:C["a"],VIcon:k["a"],VSpacer:S["a"]});var ft=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-btn",{attrs:{depressed:"",color:"cyan",id:"my-canvas",dark:""},on:{click:t.exportWord}},[i("v-icon",{staticClass:"mr-2"},[t._v("mdi-file-word")]),t._v(" export to word ")],1)},bt=[],gt=i("21a6"),_t=i("49fb"),Ct={methods:{exportWord:function(){var t=new _t["Document"]({creator:"Progresio",title:"Progres Sprint",description:"Progress sprint startup setiap minggu",styles:{paragraphStyles:[{id:"Heading1",name:"Heading 1",basedOn:"Normal",next:"Normal",quickFormat:!0,run:{size:28,bold:!0,italics:!0,color:"red"},paragraph:{spacing:{after:120}}},{id:"Heading2",name:"Heading 2",basedOn:"Normal",next:"Normal",quickFormat:!0,run:{size:26,bold:!0,underline:{type:_t["UnderlineType"].DOUBLE,color:"FF0000"}},paragraph:{spacing:{before:240,after:120}}},{id:"aside",name:"Aside",basedOn:"Normal",next:"Normal",run:{color:"999999",italics:!0},paragraph:{indent:{left:720},spacing:{line:276}}},{id:"wellSpaced",name:"Well Spaced",basedOn:"Normal",quickFormat:!0,paragraph:{spacing:{line:276,before:144,after:72}}},{id:"ListParagraph",name:"List Paragraph",basedOn:"Normal",quickFormat:!0}]},numbering:{config:[{reference:"my-crazy-numbering",levels:[{level:0,format:"decimal",text:"%1.",alignment:_t["AlignmentType"].LEFT}]}]}});t.addSection({children:[new _t["Paragraph"]({text:"LOG PENDAMPINGAN",heading:_t["HeadingLevel"].HEADING_1}),new _t["Paragraph"]({children:[new _t["TextRun"]("NAMA TENANT\t: Smartedu").break(),new _t["TextRun"]("CEO\t\t\t: Mr. X").break(),new _t["TextRun"]("SPRINT\t\t: 8").break(),new _t["TextRun"]("TANGGAL\t\t: 24 November 2020").break()]}),new _t["Paragraph"]({text:"REVIEW DARI SPRINT SEBELUMNYA",alignment:_t["AlignmentType"].CENTER}),new _t["Paragraph"]({text:"Option1",numbering:{reference:"my-crazy-numbering",level:0}}),new _t["Paragraph"]({children:[new _t["TextRun"]("Yogyakarta, 24 September 2019").break(),new _t["TextRun"]("Tenant\t\t\t\t\t\t\t\t\t\t\t\t\tPendamping").break().break().break(),new _t["TextRun"]("Nama tenant\t\t\t\t\t\t\t\t\t\t\t\tNama incubator").break().break().break().break().break()]})]}),_t["Packer"].toBlob(t).then((function(t){Object(gt["saveAs"])(t,"detailed_report.docx")}))}}},xt=Ct,kt=Object(v["a"])(xt,ft,bt,!1,null,null,null),St=kt.exports;h()(kt,{VBtn:f["a"],VIcon:k["a"]});var Lt={type:"container",props:{orientation:"horizontal"},children:[]},yt={props:["sprint_id"],components:{Container:d["Container"],Draggable:d["Draggable"],Loader:l["a"],ExportWord:St,Hapus:ht,Edit:ot,DetailCard:it,TambahCard:V},data:function(){return{valid:!0,dataSprintList:{nama:"",board_id:""},requiredRule:[function(t){return!!t||"Harus di isi"}],upperDropPlaceholderOptions:{className:"cards-drop-preview",animationDuration:"150",showOnTop:!0},dropPlaceholderOptions:{className:"drop-preview",animationDuration:"150",showOnTop:!0},cardAsalUrut:0,cardAsalId:0,listAsalId:0}},created:function(){this.$store.dispatch("dataStartupSprint/getDataList",this.sprint_id),this.$store.dispatch("dataStartupSprint/updateIsLoadingList",!0),this.$store.dispatch("dataStartupSprint/getDataSprint")},computed:Object(n["a"])({},Object(s["b"])("dataStartupSprint",["dataList","isLoadingList","statusList"]),{scene:function(){return Lt.children=this.dataList,Lt}}),methods:{onColumnDrop:function(t){var a=this.dataList.filter((function(a,i){return i===t.removedIndex})),i=this.dataList.filter((function(a,i){return i===t.addedIndex})),e=Object(n["a"])({},a[0]),r=Object(n["a"])({},i[0]);this.$store.dispatch("dataStartupSprint/moveDataList",{list_pindah:e.id,list_kepindah:r.id,board_id:parseInt(this.sprint_id)})},onCardDrop:function(t,a){if(null!==a.removedIndex&&null!==a.addedIndex){var i=this.dataList.filter((function(a){return a.id===t}))[0],e=i.children.filter((function(t,i){return i===a.removedIndex}))[0],r=i.children.filter((function(t,i){return i===a.addedIndex}))[0];this.$store.dispatch("dataStartupSprint/moveDataCard",{card_pindah_id:e.id,card_kepindah_id:r.id,board_id:parseInt(this.sprint_id)})}else if((null!==a.removedIndex||null!==a.addedIndex)&&null!==a.addedIndex){var n=0,s=this.dataList.filter((function(a){return a.id===t}))[0];n=0===s.children.length?1:a.addedIndex+1;var d={listAsal:this.listAsalId,idCard:this.cardAsalId,urutCardAsal:this.cardAsalUrut,idList:t,urut:n,board_id:parseInt(this.sprint_id)};this.$store.dispatch("dataStartupSprint/moveDataCardList",d)}},dragStart:function(){console.log("drag started")},getCardPayload:function(t){var a=this;return function(i){return a.scene.children.filter((function(a){return a.id===t}))[0].children[i]}},ambilCard:function(t,a){this.cardAsalId=a.payload.id,this.cardAsalUrut=a.payload.urut,a.isSource&&(this.listAsalId=t)},validate:function(){this.$refs.form.validate()&&(this.dataSprintList.board_id=this.sprint_id,this.dataSprintList.urut=this.scene.children.length+1,this.$store.dispatch("dataStartupSprint/postDataList",this.dataSprintList),this.$store.dispatch("dataStartupSprint/updateIsLoadingList",!0))}}},Vt=yt,Dt=(i("292b"),i("8dd9")),wt=Object(v["a"])(Vt,e,r,!1,null,null,null);a["default"]=wt.exports;h()(wt,{VBtn:f["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VCol:X["a"],VForm:x["a"],VIcon:k["a"],VSheet:Dt["a"],VSpacer:S["a"],VTextField:L["a"]})}}]);
//# sourceMappingURL=chunk-3e0d4f88.6058e8ee.js.map