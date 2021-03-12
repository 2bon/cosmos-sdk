(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{854:function(t,s,e){"use strict";e.r(s);var a=e(1),o=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"staking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#staking"}},[t._v("#")]),t._v(" "),e("code",[t._v("staking")])]),t._v(" "),e("h2",{attrs:{id:"abstract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),e("p",[t._v("This paper specifies the Staking module of the Cosmos-SDK, which was first\ndescribed in the "),e("a",{attrs:{href:"https://cosmos.network/about/whitepaper",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cosmos Whitepaper"),e("OutboundLink")],1),t._v("\nin June 2016.")]),t._v(" "),e("p",[t._v("The module enables Cosmos-SDK based blockchain to support an advanced\nProof-of-Stake system. In this system, holders of the native staking token of\nthe chain can become validators and can delegate tokens to validators,\nultimately determining the effective validator set for the system.")]),t._v(" "),e("p",[t._v("This module will be used in the Cosmos Hub, the first Hub in the Cosmos\nnetwork.")]),t._v(" "),e("h2",{attrs:{id:"contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),e("ol",[e("li",[e("strong",[e("RouterLink",{attrs:{to:"/modules/staking/01_state.html"}},[t._v("State")])],1),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/modules/staking/01_state.html#pool"}},[t._v("Pool")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/modules/staking/01_state.html#lasttotalpower"}},[t._v("LastTotalPower")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/modules/staking/01_state.html#params"}},[t._v("Params")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/modules/staking/01_state.html#validator"}},[t._v("Validator")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/modules/staking/01_state.html#delegation"}},[t._v("Delegation")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/modules/staking/01_state.html#unbondingdelegation"}},[t._v("UnbondingDelegation")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/modules/staking/01_state.html#redelegation"}},[t._v("Redelegation")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/modules/staking/01_state.html#queues"}},[t._v("Queues")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/modules/staking/01_state.html#historicalinfo"}},[t._v("HistoricalInfo")])],1)])]),t._v(" "),e("li",[e("strong",[e("RouterLink",{attrs:{to:"/modules/staking/02_state_transitions.html"}},[t._v("State Transitions")])],1),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/modules/staking/02_state_transitions.html#validators"}},[t._v("Validators")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/modules/staking/02_state_transitions.html#delegations"}},[t._v("Delegations")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/modules/staking/02_state_transitions.html#slashing"}},[t._v("Slashing")])],1)])]),t._v(" "),e("li",[e("strong",[e("RouterLink",{attrs:{to:"/modules/staking/03_messages.html"}},[t._v("Messages")])],1),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/modules/staking/03_messages.html#msgcreatevalidator"}},[t._v("Msg/CreateValidator")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/modules/staking/03_messages.html#msgeditvalidator"}},[t._v("Msg/EditValidator")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/modules/staking/03_messages.html#msgdelegate"}},[t._v("Msg/Delegate")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/modules/staking/03_messages.html#msgbeginunbonding"}},[t._v("Msg/BeginUnbonding")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/modules/staking/03_messages.html#msgbeginredelegate"}},[t._v("Msg/BeginRedelegate")])],1)])]),t._v(" "),e("li",[e("strong",[e("RouterLink",{attrs:{to:"/modules/staking/04_begin_block.html"}},[t._v("Begin-Block")])],1),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/modules/staking/04_begin_block.html#historical-info-tracking"}},[t._v("Historical Info Tracking")])],1)])]),t._v(" "),e("li",[e("strong",[e("RouterLink",{attrs:{to:"/modules/staking/05_end_block.html"}},[t._v("End-Block ")])],1),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/modules/staking/05_end_block.html#validator-set-changes"}},[t._v("Validator Set Changes")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/modules/staking/05_end_block.html#queues-"}},[t._v("Queues ")])],1)])]),t._v(" "),e("li",[e("strong",[e("RouterLink",{attrs:{to:"/modules/staking/06_hooks.html"}},[t._v("Hooks")])],1)]),t._v(" "),e("li",[e("strong",[e("RouterLink",{attrs:{to:"/modules/staking/07_events.html"}},[t._v("Events")])],1),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/modules/staking/07_events.html#endblocker"}},[t._v("EndBlocker")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/modules/staking/07_events.html#handlers"}},[t._v("Handlers")])],1)])]),t._v(" "),e("li",[e("strong",[e("RouterLink",{attrs:{to:"/modules/staking/08_params.html"}},[t._v("Parameters")])],1)])])])}),[],!1,null,null,null);s.default=o.exports}}]);