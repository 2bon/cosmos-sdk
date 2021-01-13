(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{754:function(e,g,I){"use strict";I.r(g);var t=I(1),C=Object(t.a)({},(function(){var e=this,g=e.$createElement,I=e._self._c||g;return I("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[I("h1",{attrs:{id:"adr-032-typed-events"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#adr-032-typed-events"}},[e._v("#")]),e._v(" ADR 032: Typed Events")]),e._v(" "),I("h2",{attrs:{id:"changelog"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),I("ul",[I("li",[e._v("28-Sept-2020: Initial Draft")])]),e._v(" "),I("h2",{attrs:{id:"authors"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#authors"}},[e._v("#")]),e._v(" Authors")]),e._v(" "),I("ul",[I("li",[e._v("Anil Kumar (@anilcse)")]),e._v(" "),I("li",[e._v("Jack Zampolin (@jackzampolin)")]),e._v(" "),I("li",[e._v("Adam Bozanich (@boz)")])]),e._v(" "),I("h2",{attrs:{id:"status"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),I("p",[e._v("Proposed")]),e._v(" "),I("h2",{attrs:{id:"abstract"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),I("p",[e._v("Currently in the SDK, events are defined in the handlers for each message as well as "),I("code",[e._v("BeginBlock")]),e._v(" and "),I("code",[e._v("EndBlock")]),e._v(". Each module doesn't have types defined for each event, they are implemented as "),I("code",[e._v("map[string]string")]),e._v(". Above all else this makes these events difficult to consume as it requires a great deal of raw string matching and parsing. This proposal focuses on updating the events to use "),I("strong",[e._v("typed events")]),e._v(" defined in each module such that emiting and subscribing to events will be much easier. This workflow comes from the experience of the Akash Network team.")]),e._v(" "),I("h2",{attrs:{id:"context"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),I("p",[e._v("Currently in the SDK, events are defined in the handlers for each message, meaning each module doesn't have a cannonical set of types for each event. Above all else this makes these events difficult to consume as it requires a great deal of raw string matching and parsing. This proposal focuses on updating the events to use "),I("strong",[e._v("typed events")]),e._v(" defined in each module such that emiting and subscribing to events will be much easier. This workflow comes from the experience of the Akash Network team.")]),e._v(" "),I("p",[I("a",{attrs:{href:"http://github.com/ovrclk/akash",target:"_blank",rel:"noopener noreferrer"}},[e._v("Our platform"),I("OutboundLink")],1),e._v(" requires a number of programatic on chain interactions both on the provider (datacenter - to bid on new orders and listen for leases created) and user (application developer - to send the app manifest to the provider) side. In addition the Akash team is now maintaining the IBC "),I("a",{attrs:{href:"https://github.com/ovrclk/relayer",target:"_blank",rel:"noopener noreferrer"}},[I("code",[e._v("relayer")]),I("OutboundLink")],1),e._v(", another very event driven process. In working on these core pieces of infrastructure, and integrating lessons learned from Kubernetes developement, our team has developed a standard method for defining and consuming typed events in SDK modules. We have found that it is extremely useful in building this type of event driven application.")]),e._v(" "),I("p",[e._v("As the SDK gets used more extensively for apps like "),I("code",[e._v("peggy")]),e._v(", other peg zones, IBC, DeFi, etc... there will be an exploding demand for event driven applications to support new features desired by users. We propose upstreaming our findings into the SDK to enable all SDK applications to quickly and easily build event driven apps to aid their core application. Wallets, exchanges, explorers, and defi protocols all stand to benefit from this work.")]),e._v(" "),I("p",[e._v("If this proposal is accepted, users will be able to build event driven SDK apps in go by just writing "),I("code",[e._v("EventHandler")]),e._v("s for their specific event types and passing them to "),I("code",[e._v("EventEmitters")]),e._v(" that are defined in the SDK.")]),e._v(" "),I("p",[e._v("The end of this proposal contains a detailed example of how to consume events after this refactor.")]),e._v(" "),I("p",[e._v("This proposal is specifically about how to consume these events as a client of the blockchain, not for intermodule communication.")]),e._v(" "),I("h2",{attrs:{id:"decision"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),I("p",[I("strong",[e._v("Step-1")]),e._v(":  Implement additional functionality in the "),I("code",[e._v("types")]),e._v(" package: "),I("code",[e._v("EmitTypedEvent")]),e._v(" and "),I("code",[e._v("ParseTypedEvent")]),e._v(" functions")]),e._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gdHlwZXMvZXZlbnRzLmdvCgovLyBFbWl0VHlwZWRFdmVudCB0YWtlcyB0eXBlZCBldmVudCBhbmQgZW1pdHMgY29udmVydGluZyBpdCBpbnRvIHNkay5FdmVudCAKZnVuYyAoZW0gKkV2ZW50TWFuYWdlcikgRW1pdFR5cGVkRXZlbnQoZXZlbnQgcHJvdG8uTWVzc2FnZSkgZXJyb3IgewoJZXZ0VHlwZSA6PSBwcm90by5NZXNzYWdlTmFtZShldmVudCkKCWV2dEpTT04sIGVyciA6PSBjb2RlYy5Qcm90b01hcnNoYWxKU09OKGV2ZW50KQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIGVycgoJfQoKCXZhciBhdHRyTWFwIG1hcFtzdHJpbmddanNvbi5SYXdNZXNzYWdlCgllcnIgPSBqc29uLlVubWFyc2hhbChldnRKU09OLCAmYW1wO2F0dHJNYXApCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gZXJyCgl9CgoJdmFyIGF0dHJzIFtdYWJjaS5FdmVudEF0dHJpYnV0ZQoJZm9yIGssIHYgOj0gcmFuZ2UgYXR0ck1hcCB7CgkJYXR0cnMgPSBhcHBlbmQoYXR0cnMsIGFiY2kuRXZlbnRBdHRyaWJ1dGV7CgkJCUtleTogICBbXWJ5dGUoayksCgkJCVZhbHVlOiB2LAoJCX0pCgl9CgoJZW0uRW1pdEV2ZW50KEV2ZW50ewoJCVR5cGU6ICAgICAgIGV2dFR5cGUsCgkJQXR0cmlidXRlczogYXR0cnMsCgl9KQoKCXJldHVybiBuaWwKfQoKLy8gUGFyc2VUeXBlZEV2ZW50IGNvbnZlcnRzIGFiY2kuRXZlbnQgYmFjayB0byB0eXBlZCBldmVudApmdW5jIFBhcnNlVHlwZWRFdmVudChldmVudCBhYmNpLkV2ZW50KSAocHJvdG8uTWVzc2FnZSwgZXJyb3IpIHsKCWNvbmNyZXRlR29UeXBlIDo9IHByb3RvLk1lc3NhZ2VUeXBlKGV2ZW50LlR5cGUpCglpZiBjb25jcmV0ZUdvVHlwZSA9PSBuaWwgewoJCXJldHVybiBuaWwsIGZtdC5FcnJvcmYoJnF1b3Q7ZmFpbGVkIHRvIHJldHJpZXZlIHRoZSBtZXNzYWdlIG9mIHR5cGUgJXEmcXVvdDssIGV2ZW50LlR5cGUpCgl9CgoJdmFyIHZhbHVlIHJlZmxlY3QuVmFsdWUKCWlmIGNvbmNyZXRlR29UeXBlLktpbmQoKSA9PSByZWZsZWN0LlB0ciB7CgkJdmFsdWUgPSByZWZsZWN0Lk5ldyhjb25jcmV0ZUdvVHlwZS5FbGVtKCkpCgl9IGVsc2UgewoJCXZhbHVlID0gcmVmbGVjdC5aZXJvKGNvbmNyZXRlR29UeXBlKQogICAgfQogICAgCglwcm90b01zZywgb2sgOj0gdmFsdWUuSW50ZXJmYWNlKCkuKHByb3RvLk1lc3NhZ2UpCglpZiAhb2sgewoJCXJldHVybiBuaWwsIGZtdC5FcnJvcmYoJnF1b3Q7JXEgZG9lcyBub3QgaW1wbGVtZW50IHByb3RvLk1lc3NhZ2UmcXVvdDssIGV2ZW50LlR5cGUpCgl9CgoJYXR0ck1hcCA6PSBtYWtlKG1hcFtzdHJpbmddanNvbi5SYXdNZXNzYWdlKQoJZm9yIF8sIGF0dHIgOj0gcmFuZ2UgZXZlbnQuQXR0cmlidXRlcyB7CgkJYXR0ck1hcFtzdHJpbmcoYXR0ci5LZXkpXSA9IGF0dHIuVmFsdWUKCX0KCglhdHRyQnl0ZXMsIGVyciA6PSBqc29uLk1hcnNoYWwoYXR0ck1hcCkKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBuaWwsIGVycgoJfQoKCWVyciA9IGpzb25wYi5Vbm1hcnNoYWwoc3RyaW5ncy5OZXdSZWFkZXIoc3RyaW5nKGF0dHJCeXRlcykpLCBwcm90b01zZykKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBuaWwsIGVycgoJfQoKCXJldHVybiBwcm90b01zZywgbmlsCn0K"}}),e._v(" "),I("p",[e._v("Here, the "),I("code",[e._v("EmitTypedEvent")]),e._v(" is a method on "),I("code",[e._v("EventManager")]),e._v(" which takes typed event as input and apply json serialization on it. Then it maps the JSON key/value pairs to "),I("code",[e._v("event.Attributes")]),e._v(" and emits it in form of "),I("code",[e._v("sdk.Event")]),e._v(". "),I("code",[e._v("Event.Type")]),e._v(" will be the type URL of the proto message.")]),e._v(" "),I("p",[e._v("When we subscribe to emitted events on the tendermint websocket, they are emitted in the form of an "),I("code",[e._v("abci.Event")]),e._v(". "),I("code",[e._v("ParseTypedEvent")]),e._v(" parses the event back to it's original proto message.")]),e._v(" "),I("p",[I("strong",[e._v("Step-2")]),e._v(": Add proto definitions for typed events for msgs in each module:")]),e._v(" "),I("p",[e._v("For example, let's take "),I("code",[e._v("MsgSubmitProposal")]),e._v(" of "),I("code",[e._v("gov")]),e._v(" module and implement this event's type.")]),e._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gcHJvdG8vY29zbW9zL2dvdi92MWJldGExL2dvdi5wcm90bwovLyBBZGQgdHlwZWQgZXZlbnQgZGVmaW5pdGlvbgoKcGFja2FnZSBjb3Ntb3MuZ292LnYxYmV0YTE7CgptZXNzYWdlIEV2ZW50U3VibWl0UHJvcG9zYWwgewogICAgc3RyaW5nIGZyb21fYWRkcmVzcyAgID0gMTsKICAgIHVpbnQ2NCBwcm9wb3NhbF9pZCAgICA9IDI7CiAgICBUZXh0UHJvcG9zYWwgcHJvcG9zYWwgPSAzOwp9Cg=="}}),e._v(" "),I("p",[I("strong",[e._v("Step-3")]),e._v(": Refactor event emission to use the typed event created and emit using "),I("code",[e._v("sdk.EmitTypedEvent")]),e._v(":")]),e._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9nb3YvaGFuZGxlci5nbwpmdW5jIGhhbmRsZU1zZ1N1Ym1pdFByb3Bvc2FsKGN0eCBzZGsuQ29udGV4dCwga2VlcGVyIGtlZXBlci5LZWVwZXIsIG1zZyB0eXBlcy5Nc2dTdWJtaXRQcm9wb3NhbEkpICgqc2RrLlJlc3VsdCwgZXJyb3IpIHsKICAgIC4uLgogICAgdHlwZXMuQ29udGV4dC5FdmVudE1hbmFnZXIoKS5FbWl0VHlwZWRFdmVudCgKICAgICAgICAmYW1wO0V2ZW50U3VibWl0UHJvcG9zYWx7CiAgICAgICAgICAgIEZyb21BZGRyZXNzOiBmcm9tQWRkcmVzcywKICAgICAgICAgICAgUHJvcG9zYWxJZDogaWQsCiAgICAgICAgICAgIFByb3Bvc2FsOiBwcm9wb3NhbCwKICAgICAgICB9LAogICAgKQogICAgLi4uCn0K"}}),e._v(" "),I("h4",{attrs:{id:"how-to-subscribe-to-these-typed-events-in-client"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#how-to-subscribe-to-these-typed-events-in-client"}},[e._v("#")]),e._v(" How to subscribe to these typed events in "),I("code",[e._v("Client")])]),e._v(" "),I("blockquote",[I("p",[e._v("NOTE: Full code example below")])]),e._v(" "),I("p",[e._v("Users will be able to subscribe using "),I("code",[e._v("client.Context.Client.Subscribe")]),e._v(" and consume events which are emitted using "),I("code",[e._v("EventHandler")]),e._v("s.")]),e._v(" "),I("p",[e._v("Akash Network has built a simple "),I("a",{attrs:{href:"https://github.com/ovrclk/akash/blob/90d258caeb933b611d575355b8df281208a214f8/pubsub/bus.go#L20",target:"_blank",rel:"noopener noreferrer"}},[I("code",[e._v("pubsub")]),I("OutboundLink")],1),e._v(". This can be used to subscribe to "),I("code",[e._v("abci.Events")]),e._v(" and "),I("a",{attrs:{href:"https://github.com/ovrclk/akash/blob/90d258caeb933b611d575355b8df281208a214f8/events/publish.go#L21",target:"_blank",rel:"noopener noreferrer"}},[e._v("publish"),I("OutboundLink")],1),e._v(" them as typed events.")]),e._v(" "),I("p",[e._v("Please see the below code sample for more detail on this flow looks for clients.")]),e._v(" "),I("h2",{attrs:{id:"consequences"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),I("h3",{attrs:{id:"positive"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),I("ul",[I("li",[e._v("Improves consistency of implementation for the events currently in the sdk")]),e._v(" "),I("li",[e._v("Provides a much more ergonomic way to handle events and facilitates writing event driven applications")]),e._v(" "),I("li",[e._v("This implementation will support a middleware ecosystem of "),I("code",[e._v("EventHandler")]),e._v("s")])]),e._v(" "),I("h3",{attrs:{id:"negative"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),I("h2",{attrs:{id:"detailed-code-example-of-publishing-events"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#detailed-code-example-of-publishing-events"}},[e._v("#")]),e._v(" Detailed code example of publishing events")]),e._v(" "),I("p",[e._v("This ADR also proposes adding affordances to emit and consume these events. This way developers will only need to write\n"),I("code",[e._v("EventHandler")]),e._v("s which define the actions they desire to take.")]),e._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRXZlbnRFbWl0dGVyIGlzIGEgdHlwZSB0aGF0IGRlc2NyaWJlcyBldmVudCBlbWl0dGVyIGZ1bmN0aW9ucwovLyBUaGlzIHNob3VsZCBiZSBkZWZpbmVkIGluIGB0eXBlcy9ldmVudHMuZ29gCnR5cGUgRXZlbnRFbWl0dGVyIGZ1bmMoY29udGV4dC5Db250ZXh0LCBjbGllbnQuQ29udGV4dCwgLi4uRXZlbnRIYW5kbGVyKSBlcnJvcgoKLy8gRXZlbnRIYW5kbGVyIGlzIGEgdHlwZSBvZiBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgZXZlbnRzIGNvbWluZyBvdXQgb2YgdGhlIGV2ZW50IGJ1cwovLyBUaGlzIHNob3VsZCBiZSBkZWZpbmVkIGluIGB0eXBlcy9ldmVudHMuZ29gCnR5cGUgRXZlbnRIYW5kbGVyIGZ1bmMocHJvdG8uTWVzc2FnZSkgZXJyb3IKCi8vIFNhbXBsZSB1c2Ugb2YgdGhlIGZ1bmN0aW9ucyBiZWxvdwpmdW5jIG1haW4oKSB7CiAgICBjdHgsIGNhbmNlbCA6PSBjb250ZXh0LldpdGhDYW5jZWwoY29udGV4dC5CYWNrZ3JvdW5kKCkpCgogICAgaWYgZXJyIDo9IFR4RW1pdHRlcihjdHgsIGNsaWVudC5Db250ZXh0e30uV2l0aE5vZGVVUkkoJnF1b3Q7dGNwOi8vbG9jYWxob3N0OjI2NjU3JnF1b3Q7KSwgU3VibWl0UHJvcG9zYWxFdmVudEhhbmRsZXIpOyBlcnIgIT0gbmlsIHsKICAgICAgICBjYW5jZWwoKQogICAgICAgIHBhbmljKGVycikKICAgIH0KCiAgICByZXR1cm4KfQoKLy8gU3VibWl0UHJvcG9zYWxFdmVudEhhbmRsZXIgaXMgYW4gZXhhbXBsZSBvZiBhbiBldmVudCBoYW5kbGVyIHRoYXQgcHJpbnRzIHByb3Bvc2FsIGRldGFpbHMKLy8gd2hlbiBhbnkgRXZlbnRTdWJtaXRQcm9wb3NhbCBpcyBlbWl0dGVkLiAKZnVuYyBTdWJtaXRQcm9wb3NhbEV2ZW50SGFuZGxlcihldiBwcm90by5NZXNzYWdlKSAoZXJyIGVycm9yKSB7CiAgICBzd2l0Y2ggZXZlbnQgOj0gZXYuKHR5cGUpIHsKICAgIC8vIEhhbmRsZSBnb3Zlcm5hbmNlIHByb3Bvc2FsIGV2ZW50cyBjcmVhdGlvbiBldmVudHMKICAgIGNhc2UgZ292dHlwZXMuRXZlbnRTdWJtaXRQcm9wb3NhbDoKICAgICAgICAvLyBVc2VycyBkZWZpbmUgYnVzaW5lc3MgbG9naWMgaGVyZSBlLmcuCiAgICAgICAgZm10LlByaW50bG4oZXYuRnJvbUFkZHJlc3MsIGV2LlByb3Bvc2FsSWQsIGV2LlByb3Bvc2FsKQogICAgICAgIHJldHVybiBuaWwKICAgIGRlZmF1bHQ6CiAgICAgICAgcmV0dXJuIG5pbAogICAgfQp9CgovLyBUeEVtaXR0ZXIgaXMgYW4gZXhhbXBsZSBvZiBhbiBldmVudCBlbWl0dGVyIHRoYXQgZW1pdHMganVzdCB0cmFuc2FjdGlvbiBldmVudHMuIFRoaXMgY2FuIGFuZCAKLy8gc2hvdWxkIGJlIGltcGxlbWVudGVkIHNvbWV3aGVyZSBpbiB0aGUgU0RLLiBUaGUgU0RLIGNhbiBpbmNsdWRlIGFuIEV2ZW50RW1pdHRlcnMgZm9yIHRtLmV2ZW50PSdUeCcgCi8vIGFuZC9vciB0bS5ldmVudD0nTmV3QmxvY2snICh0aGUgbmV3IGJsb2NrIGV2ZW50cyBtYXkgY29udGFpbiB0eXBlZCBldmVudHMpIApmdW5jIFR4RW1pdHRlcihjdHggY29udGV4dC5Db250ZXh0LCBjbGlDdHggY2xpZW50LkNvbnRleHQsIGVocyAuLi5FdmVudEhhbmRsZXIpIChlcnIgZXJyb3IpIHsKICAgIC8vIEluc3RhbnRpYXRlIGFuZCBzdGFydCB0ZW5kZXJtaW50IFJQQyBjbGllbnQKICAgIGNsaWVudCwgZXJyIDo9IGNsaUN0eC5HZXROb2RlKCkKICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBlcnIKICAgIH0KCiAgICBpZiBlcnIgPSBjbGllbnQuU3RhcnQoKTsgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuIGVycgogICAgfQoKICAgIC8vIFN0YXJ0IHRoZSBwdWJzdWIgYnVzCiAgICBidXMgOj0gcHVic3ViLk5ld0J1cygpCiAgICBkZWZlciBidXMuQ2xvc2UoKQoKICAgIC8vIEluaXRpYWxpemUgYSBuZXcgZXJyb3IgZ3JvdXAKICAgIGVnLCBjdHggOj0gZXJyZ3JvdXAuV2l0aENvbnRleHQoY3R4KQoKICAgIC8vIFB1Ymxpc2ggY2hhaW4gZXZlbnRzIHRvIHRoZSBwdWJzdWIgYnVzCiAgICBlZy5HbyhmdW5jKCkgZXJyb3IgewogICAgICAgIHJldHVybiBQdWJsaXNoQ2hhaW5UeEV2ZW50cyhjdHgsIGNsaWVudCwgYnVzLCBzaW1hcHAuTW9kdWxlQmFzaWNzKQogICAgfSkKCiAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIGJ1cyBldmVudHMKICAgIHN1YnNjcmliZXIsIGVyciA6PSBidXMuU3Vic2NyaWJlKCkKICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBlcnIKICAgIH0KCgkvLyBIYW5kbGUgYWxsIHRoZSBldmVudHMgY29taW5nIG91dCBvZiB0aGUgYnVzCgllZy5HbyhmdW5jKCkgZXJyb3IgewogICAgICAgIHZhciBlcnIgZXJyb3IKICAgICAgICBmb3IgewogICAgICAgICAgICBzZWxlY3QgewogICAgICAgICAgICBjYXNlICZsdDstY3R4LkRvbmUoKToKICAgICAgICAgICAgICAgIHJldHVybiBuaWwKICAgICAgICAgICAgY2FzZSAmbHQ7LXN1YnNjcmliZXIuRG9uZSgpOgogICAgICAgICAgICAgICAgcmV0dXJuIG5pbAogICAgICAgICAgICBjYXNlIGV2IDo9ICZsdDstc3Vic2NyaWJlci5FdmVudHMoKToKICAgICAgICAgICAgICAgIGZvciBfLCBlaCA6PSByYW5nZSBlaHMgewogICAgICAgICAgICAgICAgICAgIGlmIGVyciA9IGVoKGV2KTsgZXJyICE9IG5pbCB7CiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrCiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIHJldHVybiBuaWwKCX0pCgoJcmV0dXJuIGdyb3VwLldhaXQoKQp9CgovLyBQdWJsaXNoQ2hhaW5UeEV2ZW50cyBldmVudHMgdXNpbmcgdG1jbGllbnQuIFdhaXRzIG9uIGNvbnRleHQgc2h1dGRvd24gc2lnbmFscyB0byBleGl0LgpmdW5jIFB1Ymxpc2hDaGFpblR4RXZlbnRzKGN0eCBjb250ZXh0LkNvbnRleHQsIGNsaWVudCB0bWNsaWVudC5FdmVudHNDbGllbnQsIGJ1cyBwdWJzdWIuQnVzLCBtYiBtb2R1bGUuQmFzaWNNYW5hZ2VyKSAoZXJyIGVycm9yKSB7CiAgICAvLyBTdWJzY3JpYmUgdG8gdHJhbnNhY3Rpb24gZXZlbnRzCiAgICB0eGNoLCBlcnIgOj0gY2xpZW50LlN1YnNjcmliZShjdHgsICZxdW90O3R4ZXZlbnRzJnF1b3Q7LCAmcXVvdDt0bS5ldmVudD0nVHgnJnF1b3Q7LCAxMDApCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CgogICAgLy8gVW5zdWJzY3JpYmUgZnJvbSB0cmFuc2FjdGlvbiBldmVudHMgb24gZnVuY3Rpb24gZXhpdAogICAgZGVmZXIgZnVuYygpIHsKICAgICAgICBlcnIgPSBjbGllbnQuVW5zdWJzY3JpYmVBbGwoY3R4LCAmcXVvdDt0eGV2ZW50cyZxdW90OykKICAgIH0oKQoKICAgIC8vIFVzZSBlcnJncm91cCB0byBtYW5hZ2UgY29uY3VycmVuY3kKICAgIGcsIGN0eCA6PSBlcnJncm91cC5XaXRoQ29udGV4dChjdHgpCgogICAgLy8gUHVibGlzaCB0cmFuc2FjdGlvbiBldmVudHMgaW4gYSBnb3JvdXRpbmUKICAgIGcuR28oZnVuYygpIGVycm9yIHsKICAgICAgICB2YXIgZXJyIGVycm9yCiAgICAgICAgZm9yIHsKICAgICAgICAgICAgc2VsZWN0IHsKICAgICAgICAgICAgY2FzZSAmbHQ7LWN0eC5Eb25lKCk6CiAgICAgICAgICAgICAgICBicmVhawogICAgICAgICAgICBjYXNlIGVkIDo9ICZsdDstY2g6CiAgICAgICAgICAgICAgICBzd2l0Y2ggZXZ0IDo9IGVkLkRhdGEuKHR5cGUpIHsKICAgICAgICAgICAgICAgIGNhc2UgdG10eXBlcy5FdmVudERhdGFUeDoKICAgICAgICAgICAgICAgICAgICBpZiAhZXZ0LlJlc3VsdC5Jc09LKCkgewogICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZQogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAvLyByYW5nZSBvdmVyIGV2ZW50cywgcGFyc2UgdGhlbSB1c2luZyB0aGUgYmFzaWMgbWFuYWdlciBhbmQgCiAgICAgICAgICAgICAgICAgICAgLy8gc2VuZCB0aGVtIHRvIHRoZSBwdWJzdWIgYnVzCiAgICAgICAgICAgICAgICAgICAgZm9yIF8sIGFiY2lFdiA6PSByYW5nZSBldmVudHMgewogICAgICAgICAgICAgICAgICAgICAgICB0eXBlZEV2ZW50LCBlcnIgOj0gc2RrLlBhcnNlVHlwZWRFdmVudChhYmNpRXYpCiAgICAgICAgICAgICAgICAgICAgICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVyCiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgZXJyIDo9IGJ1cy5QdWJsaXNoKHR5cGVkRXZlbnQpOyBlcnIgIT0gbmlsIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1cy5DbG9zZSgpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4KICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZQogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICByZXR1cm4gZXJyCgl9KQoKICAgIC8vIEV4aXQgb24gZXJyb3Igb3IgY29udGV4dCBjYW5jZWxhdGlvbgogICAgcmV0dXJuIGcuV2FpdCgpCn0K"}}),e._v(" "),I("h2",{attrs:{id:"references"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),I("ul",[I("li",[I("a",{attrs:{href:"https://github.com/ovrclk/akash/blob/90d258caeb933b611d575355b8df281208a214f8/events/publish.go#L19-L58",target:"_blank",rel:"noopener noreferrer"}},[e._v("Publish Custom Events via a bus"),I("OutboundLink")],1)]),e._v(" "),I("li",[I("a",{attrs:{href:"https://github.com/ovrclk/deploy/blob/bf6c633ab6c68f3026df59efd9982d6ca1bf0561/cmd/event-handlers.go#L57",target:"_blank",rel:"noopener noreferrer"}},[e._v("Consuming the events in "),I("code",[e._v("Client")]),I("OutboundLink")],1)])])],1)}),[],!1,null,null,null);g.default=C.exports}}]);