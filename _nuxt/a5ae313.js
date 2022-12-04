(window.webpackJsonp=window.webpackJsonp||[]).push([[65,22,23],{384:function(t,e,n){"use strict";n.r(e);var r={},o=n(30),component=Object(o.a)(r,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"round drop-shadow p:16|48 bg:white cursor:pointer",on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},386:function(t,e,n){"use strict";n.r(e);n(15),n(51);var r=n(3),o=(n(21),n(107),n(11),n(23),n(24),n(388),n(172),n(171),{data:function(){return{response:null}},computed:{hasError:function(){return this.$route.query.payment_error&&this.$route.query.payment_error.match(/^[A-Z]\d{4}$/)},oenCCPaymentSuccess:function(){return this.$route.query.oen_success}},methods:{receiveResponse:function(data){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!data){e.next=5;break}return t.$set(t,"response",data),e.next=4,t.$nextTick();case 4:"refresh"==data.payment_type?window.location.reload():"redirect_to_newebpay"==data.payment_type?t.$refs.newebpay_form.submit():"redirect"!=data.payment_type&&"need_manual_intervention"!=data.payment_type||((n=new URL(data.payment_info.redirect_url)).origin==window.location.origin?data.payment_info.redirect_url==location.href?window.location.reload():t.$router.push(t.localePath(n.pathname+n.search)):location.href=n);case 5:case"end":return e.stop()}}),e)})))()}}}),c=n(30),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t.response&&"redirect_to_newebpay"==t.response.payment_type?e("form",{ref:"newebpay_form",staticClass:"display:none",attrs:{method:"POST",action:t.response.payment_info.submit_url}},[e("input",{attrs:{name:"MerchantID"},domProps:{value:t.response.payment_info.merchant_id}}),t._v(" "),e("input",{attrs:{name:"Version"},domProps:{value:t.response.payment_info.version}}),t._v(" "),e("input",{attrs:{name:"TradeInfo"},domProps:{value:t.response.payment_info.trade_info}}),t._v(" "),e("input",{attrs:{name:"TradeSha"},domProps:{value:t.response.payment_info.hash}})]):t._e(),t._v(" "),t.hasError?e("div",{staticClass:"pt:32 font-size:1.4rem"},[t._v("\n    "+t._s(t.$t("payment.errors.failed").replace("{ERROR}",t.$t("payment.enums.oenErrorCodes."+t.$route.query.payment_error)))+"\n  ")]):t._e(),t._v(" "),t.oenCCPaymentSuccess?e("div",{staticClass:"pt:32 font-size:1.4rem"},[t._v("\n    "+t._s(t.$t("payment.messages.oenSuccess"))+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},512:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(21),n(71)),c=n(72),l=n.n(c),f=n(135),d=n.n(f),m={data:function(){return{COLORS:d.a,config:l.a.getConfig(),isMaintenancing:l.a.isMaintenancing(),isOpened:l.a.isAfterPartyRegistrationOpened(),openDatetimeRange:l.a.getAfterPartyRegistrationOpenDatetimeRange(),isTooYoung:null,loading:!0,afterPartyRegistrationStatus:null,paymentInfo:null}},mounted:function(){this.getafterPartyRegistrationStatus(),this.$store.commit("app/setTitle",this.$t("afterPartyRegistration.register.title"));var t=this.$store.state.auth.account.account_birthday,e=this.config.after_party_registration.minimum_birthday;if(null===e)this.isTooYoung=!1;else{var n=parseInt(t.split("-")[0]),r=parseInt(t.split("-")[1]),o=parseInt(t.split("-")[2]),c=parseInt(e.split("-")[0]),l=parseInt(e.split("-")[1]),f=parseInt(e.split("-")[2]);if(n>c)return this.isTooYoung=!0;if(n==c){if(r>l)return this.isTooYoung=!0;if(r==l&&o>f)return this.isTooYoung=!0}this.isTooYoung=!1}},methods:{getafterPartyRegistrationStatus:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("/api/afterPartyRegistration").then((function(e){t.afterPartyRegistrationStatus=e.data,t.loading=!1})).catch((function(t){o.a.showRequestError(t)}));case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()},pay:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("/api/afterPartyRegistration/payment").then((function(e){t.paymentInfo=e.data.payment_info,o.a.showSnackbar({message:t.$t(e.data.code),colorType:"positive"}),t.$refs.paymentGateway.receiveResponse(e.data)})).catch((function(e){o.a.showRequestError(e),t.loading=!1}));case 3:case"end":return e.stop()}}),e)})))()}}},_=n(30),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("Loading",{attrs:{value:t.loading}}),t._v(" "),t.afterPartyRegistrationStatus?e("div",[null==t.afterPartyRegistrationStatus.after_party_registration?e("div",[e("div",{staticClass:"p:96|32 bg:white flex flex-center font-size:1.4rem round drop-shadow border"},[t._v("\n        "+t._s(t.afterPartyRegistrationStatus.can_register?t.isTooYoung?t.$t("afterPartyRegistration.errors.tooYoung"):t.$t("afterPartyRegistration.messages.notRegistered"):t.$t("afterPartyRegistration.errors.needRegisterFirst"))+"\n      ")]),t._v(" "),t.afterPartyRegistrationStatus.can_register&&!t.isTooYoung?e("div",{staticClass:"mt:32 flex flex-center"},[t.isOpened&&!t.isMaintenancing?e("nuxt-link",{attrs:{to:t.localePath("/afterPartyRegistration/form")}},[e("RoundButton",[t._v(t._s(t.$t("afterPartyRegistration.actions.registerNow")))])],1):t.isMaintenancing?e("RoundButton",[t._v("\n          "+t._s(t.$t("common.errors.maintenancing"))+"\n        ")]):e("RoundButton",[t._v("\n          "+t._s(t.$t("common.errors.ended"))+"\n        ")])],1):t._e()]):e("div",[1==t.afterPartyRegistrationStatus.after_party_registration.after_party_registration_status?e("div",{staticClass:"round border drop-shadow bg:white p:32|16 flex flex-center flex-direction:column mb:32"},[e("div",{staticClass:"font-size:2rem font-weight:bold",style:{color:t.COLORS.negative.background}},[t._v("\n          "+t._s(t.$t("payment.enums.paymentStatus.unpaid"))+"\n        ")]),t._v(" "),t.isMaintenancing?e("RoundButton",{staticClass:"mt:16 border"},[t._v("\n          "+t._s(t.$t("common.errors.maintenancing"))+"\n        ")]):e("RoundButton",{staticClass:"mt:16 border",on:{click:t.pay}},[t._v("\n          "+t._s(t.$t("payment.actions.payNow"))+"\n        ")]),t._v(" "),e("PaymentGateway",{ref:"paymentGateway"})],1):t._e(),t._v(" "),3==t.afterPartyRegistrationStatus.after_party_registration.after_party_registration_status?e("div",{staticClass:"round border drop-shadow bg:white p:32|16 flex flex-center flex-direction:column mb:32"},[e("div",{staticClass:"font-size:2rem font-weight:bold",style:{color:t.COLORS.primary.background}},[t._v("\n          "+t._s(t.$t("payment.enums.paymentStatus.needManualIntervention"))+"\n        ")])]):t._e(),t._v(" "),5==t.afterPartyRegistrationStatus.after_party_registration.after_party_registration_status?e("div",{staticClass:"round border drop-shadow bg:white p:32|16 flex flex-center flex-direction:column mb:32"},[e("div",{staticClass:"font-size:2rem font-weight:bold",style:{color:t.COLORS.negative.background}},[t._v("\n          "+t._s(t.$t("payment.enums.paymentStatus.paymentInfoReceived"))+"\n        ")]),t._v(" "),e("div",{staticClass:"mt:16 color:gray font-size:1.2rem"},[t._v("\n          "+t._s(t.$t("payment.messages.paymentInfo"))+"\n        ")]),t._v(" "),e("div",{staticClass:"mt:16 color:gray font-size:1.2rem font-weight:bold"},[t._v("\n          "+t._s(t.afterPartyRegistrationStatus.order.order_payment_info)+"\n        ")]),t._v(" "),e("div",{staticClass:"mt:16 color:gray font-size:1.2rem font-weight:bold"},[t._v("\n          "+t._s(t.$t("afterPartyRegistration.fields.afterPartyRegistrationTotalAmount"))+"\n          :\n          "+t._s(t.afterPartyRegistrationStatus.after_party_registration.after_party_registration_total_amount)+"\n          /\n          "+t._s(t.$t("payment.fields.orderExpireDatetime"))+"\n          :\n          "+t._s(new Date(t.afterPartyRegistrationStatus.order.order_expire_datetime).toLocaleString())+"\n        ")])]):t._e(),t._v(" "),10==t.afterPartyRegistrationStatus.after_party_registration.after_party_registration_status?e("div",{staticClass:"round border drop-shadow bg:white p:16|16 flex flex-center flex-direction:column mb:32"},[e("i",{staticClass:"mdi mdi-check font-size:6rem",style:{color:t.COLORS.positive.background}}),t._v(" "),e("div",{staticClass:"font-size:1.6rem mb:16"},[t._v("\n          "+t._s(t.$t("payment.enums.paymentStatus.paid"))+"\n        ")])]):t._e()])]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Loading:n(169).default,RoundButton:n(384).default,PaymentGateway:n(386).default})}}]);