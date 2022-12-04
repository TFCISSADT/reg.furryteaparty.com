(window.webpackJsonp=window.webpackJsonp||[]).push([[46,6,7,18,20],{370:function(e,t,n){"use strict";n.r(t);var r=n(135),o=n.n(r),c={props:{type:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},computed:{computedStyle:function(){return{background:o.a[this.type].background,color:o.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},l=n(30),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"position:relative"},[t("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:e.computedStyle,on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[e._t("default")],2),e._v(" "),e.disabled?t("div",{staticClass:"position:absolute top:0 left:0 w:100% h:100% background:rgba(0,0,0,0.4)"}):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:n(370).default})},371:function(e,t,n){"use strict";var r=n(14),o=n(7),c=n(5),l=n(106),d=n(26),f=n(17),v=n(170),m=n(66),_=n(105),h=n(239),y=n(4),k=n(88).f,x=n(60).f,w=n(22).f,I=n(375),$=n(373).trim,O="Number",C=o.Number,T=C.prototype,N=o.TypeError,E=c("".slice),j=c("".charCodeAt),R=function(e){var t=h(e,"number");return"bigint"==typeof t?t:S(t)},S=function(e){var t,n,r,o,c,l,d,code,f=h(e,"number");if(_(f))throw N("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=$(f),43===(t=j(f,0))||45===t){if(88===(n=j(f,2))||120===n)return NaN}else if(48===t){switch(j(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=E(f,2)).length,d=0;d<l;d++)if((code=j(c,d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(l(O,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var z,A=function(e){var t=arguments.length<1?0:C(R(e)),n=this;return m(T,n)&&y((function(){I(n)}))?v(Object(t),n,A):t},L=r?k(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;L.length>P;P++)f(C,z=L[P])&&!f(A,z)&&w(A,z,x(C,z));A.prototype=T,T.constructor=A,d(o,O,A,{constructor:!0})}},372:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},373:function(e,t,n){var r=n(5),o=n(39),c=n(16),l=n(372),d=r("".replace),f="["+l+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),_=function(e){return function(t){var n=c(o(t));return 1&e&&(n=d(n,v,"")),2&e&&(n=d(n,m,"")),n}};e.exports={start:_(1),end:_(2),trim:_(3)}},374:function(e,t,n){"use strict";n.r(t);n(371);var r=n(135),o=n.n(r),c={props:{field:{type:String,default:""},type:{type:String,default:"text"},value:{default:""},placeholder:{type:String,default:""},error:{default:null},required:{type:Boolean,default:!1},maxlength:{type:Number,default:null},disabled:{type:Boolean,default:!1}},mounted:function(){this.input=this.$refs.input},data:function(){return{COLORS:o.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},l=n(30),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+" :\n  ")]):e._e(),e._v(" "),t("input",{ref:"input",style:e.computedStyle,attrs:{type:e.type,placeholder:e.placeholder,required:e.required,maxlength:e.maxlength,disabled:e.disabled},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])}),[],!1,null,null,null);t.default=component.exports},375:function(e,t,n){var r=n(5);e.exports=r(1..valueOf)},376:function(e,t,n){"use strict";n.r(t);n(31),n(20),n(38),n(11),n(48),n(35),n(49);var r=n(13);n(87);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l=n(135),d=n.n(l),f={props:{field:{type:String,default:""},error:{default:null}},data:function(){return{COLORS:d.a}},computed:{computedErrorStyle:function(){return{color:d.a.negative.background}}}},v=n(30),component=Object(v.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"my:8"},[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+"\n  ")]):e._e(),e._v(" "),e._t("default",null,null,c(c({},e.$props),e.$attrs)),e._v(" "),e.error?t("div",{staticClass:"font-size:0.8rem mt:4",style:e.computedErrorStyle},[e._v("\n    "+e._s(e.error.join("\n"))+"\n  ")]):e._e()],2)}),[],!1,null,null,null);t.default=component.exports},379:function(e,t,n){var content=n(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("ba1b4598",content,!0,{sourceMap:!1})},381:function(e,t,n){"use strict";n.r(t);var r={props:["attendee"]},o=(n(382),n(30)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return e.attendee&&!e.attendee.error?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n    "+e._s(e.$t("attendee.messages.cardInfo"))+"\n  ")]),e._v(" "),t("div",{staticClass:"round border drop-shadow p:16|32 bg:white flex flex-direction:column@<md mt:8 w:fit-content font-size:1.4rem align-items:center"},[t("div",{staticClass:"cardNumberInput"},[e._v("\n      "+e._s(e.attendee.attendee_no)+"\n      "),2==e.attendee.attendee_receive_status?t("div",{staticClass:"font-size:0.9rem mt:4"},[e._v("\n        他人代領\n      ")]):e._e()]),e._v(" "),e.attendee.attendee_card_name_1?t("div",{style:{borderLeft:"2px solid #cecece",marginLeft:"32px",paddingLeft:"32px",textAlign:"center"}},[e._v("\n      "+e._s(e.attendee.attendee_card_name_1)),t("br"),e._v("\n      "+e._s(e.attendee.attendee_card_name_2)+"\n    ")]):t("div",{style:{borderLeft:"2px solid #cecece",marginLeft:"32px",paddingLeft:"32px",textAlign:"center"}},[e._v("\n      "+e._s(e.attendee.attendee_nickname)+"\n    ")])])]):e._e()}),[],!1,null,null,null);t.default=component.exports},382:function(e,t,n){"use strict";n(379)},383:function(e,t,n){var r=n(61)(!1);r.push([e.i,'.cardNumberInput{font-family:"Courier New",monospace;font-weight:700}',""]),e.exports=r},414:function(e,t,n){var content=n(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("33a99be3",content,!0,{sourceMap:!1})},448:function(e,t,n){"use strict";n(414)},449:function(e,t,n){var r=n(61)(!1);r.push([e.i,"@-moz-document url-prefix(){button:focus{border-width:2px;border-color:#2c7cf6}}",""]),e.exports=r},544:function(e,t,n){"use strict";n.r(t);var r=n(3),o=(n(21),n(45),n(41),n(1)),c=n(71),l=n(381),d=["cafe","dinner"],f={layout:"admin",components:{AttendeeInfoResume:l.default},data:function(){return{loading:!1,entranceType:d.includes(this.$route.query.type)?this.$route.query.type:"cafe",attendee:null,ticket:null,searchInput:null,focusedField:null}},mounted:function(){var e=this;this.$refs.searchInput.input.focus(),this.$refs.searchInput.input.addEventListener("keyup",(function(t){13==t.keyCode&&e.findAttendee()}))},watch:{"$route.query":function(){this.$refs.searchInput.input.focus(),this.entranceType=d.includes(this.$route.query.type)?this.$route.query.type:"cafe",this.ticket=null,this.searchInput=null,this.attendee=null}},methods:{findAttendee:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.searchInput.length){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,e.attendee=null,e.ticket=null,t.next=7,e.$axios.get("/api/admin/attendees/search?attendeeIdOrCardNumber=".concat(e.searchInput)).then((function(t){e.attendee=t.data.attendee,e.checkTicket()})).catch((function(t){t.response.data?e.attendee={error:t.response.data.code}:c.a.showRequestError(t)}));case 7:e.searchInput=null,e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()},checkTicket:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,e.ticket=null,n=e,t.next=5,e.$axios.get("/api/admin/attendee/".concat(e.attendee.attendee_id,"/entrance/").concat(e.entranceType)).then((function(t){e.ticket=t.data,o.a.nextTick((function(){n.$refs.useTicket.button.focus()}))})).catch((function(t){t.response.data?e.ticket=t.response.data:c.a.showRequestError(t)}));case 5:e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},useTicket:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(confirm("確定將參加者標記成已入場嗎？")){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,n=e,t.next=6,e.$axios.post("/api/admin/attendee/".concat(e.attendee.attendee_id,"/entrance/").concat(e.entranceType)).then((function(t){alert("入場登陸成功"),e.ticket=null,e.attendee=null,e.searchInput=null,o.a.nextTick((function(){n.$refs.searchInput.input.focus()}))})).catch((function(e){c.a.showRequestError(e)}));case 6:e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()},restoreTicket:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(confirm("確定要移除參加者的入場記錄嗎？")){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,n=e,t.next=6,e.$axios.delete("/api/admin/attendee/".concat(e.attendee.attendee_id,"/entrance/").concat(e.entranceType)).then((function(t){alert("已刪除入場記錄"),e.ticket=null,e.attendee=null,e.searchInput=null,o.a.nextTick((function(){n.$refs.searchInput.input.focus()}))})).catch((function(e){c.a.showRequestError(e)}));case 6:e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()}}},v=(n(448),n(30)),component=Object(v.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"p:16 overflow:auto"},[t("link",{attrs:{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap"}}),e._v(" "),t("Loading",{attrs:{value:e.loading}}),e._v(" "),t("router-view",{key:e.$route.path}),e._v(" "),t("div",{staticClass:"font-size:2rem"},[e._v("\n    "+e._s(e.$t("activity.entrance.title")+" ("+e.$t("activity.enums.entranceType.".concat(e.entranceType))+")")+"\n  ")]),e._v(" "),t("Field",{attrs:{field:e.$t("attendee.search.title")}},[t("InputText",{ref:"searchInput",attrs:{placeholder:e.$t("attendee.search.placeholder")},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}}),e._v(" "),e.attendee&&e.attendee.info?t("div",{staticClass:"mt:8"},[e._v("\n      "+e._s(e.$t(e.attendee.info.attendee_card_name_1))+"\n    ")]):e._e(),e._v(" "),e.attendee&&e.attendee.error?t("div",{staticClass:"mt:8 color:red"},[e._v("\n      "+e._s(e.$t(e.attendee.error))+"\n    ")]):e._e()],1),e._v(" "),e.ticket?t("div",[t("AttendeeInfoResume",{attrs:{attendee:e.attendee}}),e._v(" "),t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n      "+e._s(e.$t("activity.entranceTicket.itemName"))+"\n    ")]),e._v(" "),e.ticket?t("div",[e.ticket.success?t("div",{staticClass:"flex w:fit-content flex-direction:column@<md"},[t("div",{staticClass:"round border drop-shadow p:16|32 bg:#dce9d5 mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n          "+e._s(e.$t(e.ticket.code))+"\n        ")])]):t("div",{staticClass:"flex w:fit-content flex-direction:column@<md"},["entrance.errors.ticket.used"==e.ticket.code?t("div",{staticClass:"round border drop-shadow p:16|32 bg:#fcf2c6 mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n          "+e._s(e.$t(e.ticket.code))+"\n        ")]):t("div",{staticClass:"round border drop-shadow p:16|32 bg:#eecdcd mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n          "+e._s(e.$t(e.ticket.code))+"\n        ")])])]):e._e()],1):e.ticket&&e.ticket.code?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("錯誤")]),e._v(" "),e.ticket?t("div",{staticClass:"round border drop-shadow p:16|32 bg:#eecdcd mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md"},[e._v("\n      "+e._s(e.$t(e.ticket.code))+"\n    ")]):e._e()]):e._e(),e._v(" "),e.ticket&&(e.ticket.success||"entrance.errors.ticket.used"==e.ticket.code)?t("div",[t("div",{staticClass:"font-size:1.5rem mt:16"},[e._v("\n      "+e._s(e.$t("common.messages.actions"))+"\n    ")]),e._v(" "),t("div",{staticClass:"mt:8 flex"},[e.ticket&&e.ticket.success?t("Button",{ref:"useTicket",on:{click:e.useTicket}},[e._v("\n        "+e._s(e.$t("activity.actions.useTicket"))+"\n      ")]):e._e(),e._v(" "),e.ticket&&"entrance.errors.ticket.used"==e.ticket.code?t("Button",{ref:"restoreTicket",attrs:{type:"negative"},on:{click:e.restoreTicket}},[e._v("\n        "+e._s(e.$t("activity.actions.revertTicket"))+"\n      ")]):e._e()],1)]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Loading:n(169).default,InputText:n(374).default,Field:n(376).default,AttendeeInfoResume:n(381).default,Button:n(370).default})}}]);