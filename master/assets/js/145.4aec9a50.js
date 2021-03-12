(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{803:function(e,t,o){"use strict";o.r(t);var n=o(1),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"events"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),o("p",{attrs:{synopsis:""}},[o("code",[e._v("Event")]),e._v("s are objects that contain information about the execution of the application. They are mainly used by service providers like block explorers and wallet to track the execution of various messages and index transactions.")]),e._v(" "),o("h2",{attrs:{id:"pre-requisite-readings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),o("ul",[o("li",{attrs:{prereq:""}},[o("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[e._v("Anatomy of an SDK application")])],1)]),e._v(" "),o("h2",{attrs:{id:"events-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#events-2"}},[e._v("#")]),e._v(" Events")]),e._v(" "),o("p",[e._v("Events are implemented in the Cosmos SDK as an alias of the ABCI "),o("code",[e._v("Event")]),e._v(" type and\ntake the form of: "),o("code",[e._v("{eventType}.{eventAttribute}={value}")]),e._v(".")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBFdmVudCBzdHJ1Y3QgewoJVHlwZSAgICAgICAgICAgICAgICAgc3RyaW5nICAgICAgICAgIGBwcm90b2J1ZjomcXVvdDtieXRlcywxLG9wdCxuYW1lPXR5cGUscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7dHlwZSxvbWl0ZW1wdHkmcXVvdDtgCglBdHRyaWJ1dGVzICAgICAgICAgICBbXWNvbW1vbi5LVlBhaXIgYHByb3RvYnVmOiZxdW90O2J5dGVzLDIscmVwLG5hbWU9YXR0cmlidXRlcyxwcm90bzMmcXVvdDsganNvbjomcXVvdDthdHRyaWJ1dGVzLG9taXRlbXB0eSZxdW90O2AKCVhYWF9Ob1Vua2V5ZWRMaXRlcmFsIHN0cnVjdHt9ICAgICAgICBganNvbjomcXVvdDstJnF1b3Q7YAoJWFhYX3VucmVjb2duaXplZCAgICAgW11ieXRlICAgICAgICAgIGBqc29uOiZxdW90Oy0mcXVvdDtgCglYWFhfc2l6ZWNhY2hlICAgICAgICBpbnQzMiAgICAgICAgICAgYGpzb246JnF1b3Q7LSZxdW90O2AKfQ=="}})],1),e._v(" "),o("p",[e._v("Events contain:")]),e._v(" "),o("ul",[o("li",[e._v("A "),o("code",[e._v("type")]),e._v(", which is meant to categorize an event at a high-level (e.g. by module (e.g. "),o("code",[e._v("module=bank")]),e._v(") or action (e.g. "),o("code",[e._v("action=/cosmos.bank.v1beta1.Msg/Send")]),e._v(")).")]),e._v(" "),o("li",[e._v("A list of "),o("code",[e._v("attributes")]),e._v(", which are key-value pairs that give more information about\nthe categorized "),o("code",[e._v("event")]),e._v(".\n"),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CS8vIEF0dHJpYnV0ZSBkZWZpbmVzIGFuIGF0dHJpYnV0ZSB3cmFwcGVyIHdoZXJlIHRoZSBrZXkgYW5kIHZhbHVlIGFyZQoJLy8gc3RyaW5ncyBpbnN0ZWFkIG9mIHJhdyBieXRlcy4KCUF0dHJpYnV0ZSBzdHJ1Y3QgewoJCUtleSAgIHN0cmluZyBganNvbjomcXVvdDtrZXkmcXVvdDtgCgkJVmFsdWUgc3RyaW5nIGBqc29uOiZxdW90O3ZhbHVlLG9taXRlbXB0eSZxdW90O2AKCX0="}})],1)]),e._v(" "),o("p",[e._v("Events are returned to the underlying consensus engine in the response of the following ABCI messages:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/core/baseapp.html#beginblock"}},[o("code",[e._v("BeginBlock")])])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/core/baseapp.html#endblock"}},[o("code",[e._v("EndBlock")])])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/core/baseapp.html#checktx"}},[o("code",[e._v("CheckTx")])])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/core/baseapp.html#delivertx"}},[o("code",[e._v("DeliverTx")])])],1)]),e._v(" "),o("p",[e._v("Events, the "),o("code",[e._v("type")]),e._v(" and "),o("code",[e._v("attributes")]),e._v(", are defined on a "),o("strong",[e._v("per-module basis")]),e._v(" in the module's\n"),o("code",[e._v("/types/events.go")]),e._v(" file, and triggered from the module's "),o("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[o("code",[e._v("Msg")]),e._v(" service")]),e._v("\nvia the "),o("a",{attrs:{href:"#eventmanager"}},[o("code",[e._v("EventManager")])]),e._v(". In addition, each module documents its events under\n"),o("code",[e._v("spec/xx_events.md")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"eventmanager"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#eventmanager"}},[e._v("#")]),e._v(" EventManager")]),e._v(" "),o("p",[e._v("In Cosmos SDK applications, events are managed by an abstraction called the "),o("code",[e._v("EventManager")]),e._v(".\nInternally, the "),o("code",[e._v("EventManager")]),e._v(" tracks a list of "),o("code",[e._v("Events")]),e._v(" for the entire execution flow of a\ntransaction or "),o("code",[e._v("BeginBlock")]),e._v("/"),o("code",[e._v("EndBlock")]),e._v(".")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRXZlbnRNYW5hZ2VyIGltcGxlbWVudHMgYSBzaW1wbGUgd3JhcHBlciBhcm91bmQgYSBzbGljZSBvZiBFdmVudCBvYmplY3RzIHRoYXQKLy8gY2FuIGJlIGVtaXR0ZWQgZnJvbS4KdHlwZSBFdmVudE1hbmFnZXIgc3RydWN0IHsKCWV2ZW50cyBFdmVudHMKfQ=="}})],1),e._v(" "),o("p",[e._v("The "),o("code",[e._v("EventManager")]),e._v(" comes with a set of useful methods to manage events. Among them, the one that is\nused the most by module and application developers is the "),o("code",[e._v("EmitEvent")]),e._v(" method, which tracks\nan "),o("code",[e._v("event")]),e._v(" in the "),o("code",[e._v("EventManager")]),e._v(".")]),e._v(" "),o("p",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoZW0gKkV2ZW50TWFuYWdlcikgRW1pdEV2ZW50KGV2ZW50IEV2ZW50KSB7CgllbS5ldmVudHMgPSBlbS5ldmVudHMuQXBwZW5kRXZlbnQoZXZlbnQpCn0="}})],1),e._v(" "),o("p",[e._v("Module developers should handle event emission via the "),o("code",[e._v("EventManager#EmitEvent")]),e._v(" in each message\n"),o("code",[e._v("Handler")]),e._v(" and in each "),o("code",[e._v("BeginBlock")]),e._v("/"),o("code",[e._v("EndBlock")]),e._v(" handler. The "),o("code",[e._v("EventManager")]),e._v(" is accessed via\nthe "),o("RouterLink",{attrs:{to:"/core/context.html"}},[o("code",[e._v("Context")])]),e._v(", where event emission generally follows this pattern:")],1),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRFdmVudCgKICAgIHNkay5OZXdFdmVudChldmVudFR5cGUsIHNkay5OZXdBdHRyaWJ1dGUoYXR0cmlidXRlS2V5LCBhdHRyaWJ1dGVWYWx1ZSkpLAopCg=="}}),e._v(" "),o("p",[e._v("Module's "),o("code",[e._v("handler")]),e._v(" function should also set a new "),o("code",[e._v("EventManager")]),e._v(" to the "),o("code",[e._v("context")]),e._v(" to isolate emitted events per "),o("code",[e._v("message")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdIYW5kbGVyKGtlZXBlciBLZWVwZXIpIHNkay5IYW5kbGVyIHsKICAgIHJldHVybiBmdW5jKGN0eCBzZGsuQ29udGV4dCwgbXNnIHNkay5Nc2cpICgqc2RrLlJlc3VsdCwgZXJyb3IpIHsKICAgICAgICBjdHggPSBjdHguV2l0aEV2ZW50TWFuYWdlcihzZGsuTmV3RXZlbnRNYW5hZ2VyKCkpCiAgICAgICAgc3dpdGNoIG1zZyA6PSBtc2cuKHR5cGUpIHsK"}}),e._v(" "),o("p",[e._v("See the "),o("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[o("code",[e._v("Msg")]),e._v(" services")]),e._v(" concept doc for a more detailed\nview on how to typically implement "),o("code",[e._v("Events")]),e._v(" and use the "),o("code",[e._v("EventManager")]),e._v(" in modules.")],1),e._v(" "),o("h2",{attrs:{id:"subscribing-to-events"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#subscribing-to-events"}},[e._v("#")]),e._v(" Subscribing to Events")]),e._v(" "),o("p",[e._v("It is possible to subscribe to "),o("code",[e._v("Events")]),e._v(" via Tendermint's "),o("a",{attrs:{href:"https://tendermint.com/docs/app-dev/subscribing-to-events-via-websocket.html#subscribing-to-events-via-websocket",target:"_blank",rel:"noopener noreferrer"}},[e._v("Websocket"),o("OutboundLink")],1),e._v(".\nThis is done by calling the "),o("code",[e._v("subscribe")]),e._v(" RPC method via Websocket:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7bWV0aG9kJnF1b3Q7OiAmcXVvdDtzdWJzY3JpYmUmcXVvdDssCiAgICAmcXVvdDtpZCZxdW90OzogJnF1b3Q7MCZxdW90OywKICAgICZxdW90O3BhcmFtcyZxdW90OzogewogICAgICAgICZxdW90O3F1ZXJ5JnF1b3Q7OiAmcXVvdDt0bS5ldmVudD0nZXZlbnRDYXRlZ29yeScgQU5EIGV2ZW50VHlwZS5ldmVudEF0dHJpYnV0ZT0nYXR0cmlidXRlVmFsdWUnJnF1b3Q7CiAgICB9Cn0K"}}),e._v(" "),o("p",[e._v("The main "),o("code",[e._v("eventCategory")]),e._v(" you can subscribe to are:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("NewBlock")]),e._v(": Contains "),o("code",[e._v("events")]),e._v(" triggered during "),o("code",[e._v("BeginBlock")]),e._v(" and "),o("code",[e._v("EndBlock")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("Tx")]),e._v(": Contains "),o("code",[e._v("events")]),e._v(" triggered during "),o("code",[e._v("DeliverTx")]),e._v(" (i.e. transaction processing).")]),e._v(" "),o("li",[o("code",[e._v("ValidatorSetUpdates")]),e._v(": Contains validator set updates for the block.")])]),e._v(" "),o("p",[e._v("These events are triggered from the "),o("code",[e._v("state")]),e._v(" package after a block is committed. You can get the\nfull list of "),o("code",[e._v("event")]),e._v(" categories "),o("a",{attrs:{href:"https://godoc.org/github.com/tendermint/tendermint/types#pkg-constants",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("type")]),e._v(" and "),o("code",[e._v("attribute")]),e._v(" value of the "),o("code",[e._v("query")]),e._v(" allow you to filter the specific "),o("code",[e._v("event")]),e._v(" you are looking for. For example, a "),o("code",[e._v("transfer")]),e._v(" transaction triggers an "),o("code",[e._v("event")]),e._v(" of type "),o("code",[e._v("Transfer")]),e._v(" and has "),o("code",[e._v("Recipient")]),e._v(" and "),o("code",[e._v("Sender")]),e._v(" as "),o("code",[e._v("attributes")]),e._v(" (as defined in the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/x/bank/types/events.go",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("events")]),e._v(" file of the "),o("code",[e._v("bank")]),e._v(" module"),o("OutboundLink")],1),e._v("). Subscribing to this "),o("code",[e._v("event")]),e._v(" would be done like so:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7bWV0aG9kJnF1b3Q7OiAmcXVvdDtzdWJzY3JpYmUmcXVvdDssCiAgICAmcXVvdDtpZCZxdW90OzogJnF1b3Q7MCZxdW90OywKICAgICZxdW90O3BhcmFtcyZxdW90OzogewogICAgICAgICZxdW90O3F1ZXJ5JnF1b3Q7OiAmcXVvdDt0bS5ldmVudD0nVHgnIEFORCB0cmFuc2Zlci5zZW5kZXI9J3NlbmRlckFkZHJlc3MnJnF1b3Q7CiAgICB9Cn0K"}}),e._v(" "),o("p",[e._v("where "),o("code",[e._v("senderAddress")]),e._v(" is an address following the "),o("RouterLink",{attrs:{to:"/basics/accounts.html#addresses"}},[o("code",[e._v("AccAddress")])]),e._v(" format.")],1),e._v(" "),o("h2",{attrs:{hide:"",id:"next"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),o("p",{attrs:{hide:""}},[e._v("Learn about SDK "),o("RouterLink",{attrs:{to:"/core/telemetry.html"}},[e._v("telemetry")])],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);