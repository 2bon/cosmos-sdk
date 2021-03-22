(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{787:function(e,t,c){"use strict";c.r(t);var l=c(1),o=Object(l.a)({},(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[c("h1",{attrs:{id:"adr-015-ibc-packet-receiver"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#adr-015-ibc-packet-receiver"}},[e._v("#")]),e._v(" ADR 015: IBC Packet Receiver")]),e._v(" "),c("h2",{attrs:{id:"changelog"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),c("ul",[c("li",[e._v("2019 Oct 22: Initial Draft")])]),e._v(" "),c("h2",{attrs:{id:"context"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),c("p",[c("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-026-routing-module",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 26 - Routing Module"),c("OutboundLink")],1),e._v(" defines a function "),c("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-026-routing-module#packet-relay",target:"_blank",rel:"noopener noreferrer"}},[c("code",[e._v("handlePacketRecv")]),c("OutboundLink")],1),e._v(".")]),e._v(" "),c("p",[e._v("In ICS 26, the routing module is defined as a layer above each application module\nwhich verifies and routes messages to the destination modules. It is possible to\nimplement it as a separate module, however, we already have functionality to route\nmessages upon the destination identifiers in the baseapp. This ADR suggests\nto utilize existing "),c("code",[e._v("baseapp.router")]),e._v(" to route packets to application modules.")]),e._v(" "),c("p",[e._v("Generally, routing module callbacks have two separate steps in them,\nverification and execution. This corresponds to the "),c("code",[e._v("AnteHandler")]),e._v("-"),c("code",[e._v("Handler")]),e._v("\nmodel inside the SDK. We can do the verification inside the "),c("code",[e._v("AnteHandler")]),e._v("\nin order to increase developer ergonomics by reducing boilerplate\nverification code.")]),e._v(" "),c("p",[e._v("For atomic multi-message transaction, we want to keep the IBC related\nstate modification to be preserved even the application side state change\nreverts. One of the example might be IBC token sending message following with\nstake delegation which uses the tokens received by the previous packet message.\nIf the token receiving fails for any reason, we might not want to keep\nexecuting the transaction, but we also don't want to abort the transaction\nor the sequence and commitment will be reverted and the channel will be stuck.\nThis ADR suggests new "),c("code",[e._v("CodeType")]),e._v(", "),c("code",[e._v("CodeTxBreak")]),e._v(", to fix this problem.")]),e._v(" "),c("h2",{attrs:{id:"decision"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),c("p",[c("code",[e._v("PortKeeper")]),e._v(" will have the capability key that is able to access only the\nchannels bound to the port. Entities that hold a "),c("code",[e._v("PortKeeper")]),e._v(" will be\nable to call the methods on it which are corresponding with the methods with\nthe same names on the "),c("code",[e._v("ChannelKeeper")]),e._v(", but only with the\nallowed port. "),c("code",[e._v("ChannelKeeper.Port(string, ChannelChecker)")]),e._v(" will be defined to\neasily construct a capability-safe "),c("code",[e._v("PortKeeper")]),e._v(". This will be addressed in\nanother ADR and we will use insecure "),c("code",[e._v("ChannelKeeper")]),e._v(" for now.")]),e._v(" "),c("p",[c("code",[e._v("baseapp.runMsgs")]),e._v(" will break the loop over the messages if one of the handlers\nreturns "),c("code",[e._v("!Result.IsOK()")]),e._v(". However, the outer logic will write the cached\nstore if "),c("code",[e._v("Result.IsOK() || Result.Code.IsBreak()")]),e._v(". "),c("code",[e._v("Result.Code.IsBreak()")]),e._v(" if\n"),c("code",[e._v("Result.Code == CodeTxBreak")]),e._v(".")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpCYXNlQXBwKSBydW5UeCh0eCBUeCkgKHJlc3VsdCBSZXN1bHQpIHsKICBtc2dzIDo9IHR4LkdldE1zZ3MoKQogIAogIC8vIEFudGVIYW5kbGVyCiAgaWYgYXBwLmFudGVIYW5kbGVyICE9IG5pbCB7CiAgICBhbnRlQ3R4LCBtc0NhY2hlIDo9IGFwcC5jYWNoZVR4Q29udGV4dChjdHgpCiAgICBuZXdDdHgsIGVyciA6PSBhcHAuYW50ZUhhbmRsZXIoYW50ZUN0eCwgdHgpCiAgICBpZiAhbmV3Q3R4LklzWmVybygpIHsKICAgICAgY3R4ID0gbmV3Q3R4LldpdGhNdWx0aVN0b3JlKG1zKQogICAgfQoKICAgIGlmIGVyciAhPSBuaWwgewogICAgICAvLyBlcnJvciBoYW5kbGluZyBsb2dpYwogICAgICByZXR1cm4gcmVzCiAgICB9CgogICAgbXNDYWNoZS5Xcml0ZSgpCiAgfQogIAogIC8vIE1haW4gSGFuZGxlcgogIHJ1bk1zZ0N0eCwgbXNDYWNoZSA6PSBhcHAuY2FjaGVUeENvbnRleHQoY3R4KQogIHJlc3VsdCA9IGFwcC5ydW5Nc2dzKHJ1bk1zZ0N0eCwgbXNncykKICAvLyBCRUdJTiBtb2RpZmljYXRpb24gbWFkZSBpbiB0aGlzIEFEUgogIGlmIHJlc3VsdC5Jc09LKCkgfHwgcmVzdWx0LklzQnJlYWsoKSB7CiAgLy8gRU5ECiAgICBtc0NhY2hlLldyaXRlKCkKICB9CgogIHJldHVybiByZXN1bHQKfQo="}}),e._v(" "),c("p",[e._v("The Cosmos SDK will define an "),c("code",[e._v("AnteDecorator")]),e._v(" for IBC packet receiving. The\n"),c("code",[e._v("AnteDecorator")]),e._v(" will iterate over the messages included in the transaction, type\n"),c("code",[e._v("switch")]),e._v(" to check whether the message contains an incoming IBC packet, and if so\nverify the Merkle proof.")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBQcm9vZlZlcmlmaWNhdGlvbkRlY29yYXRvciBzdHJ1Y3QgewogIGNsaWVudEtlZXBlciBDbGllbnRLZWVwZXIKICBjaGFubmVsS2VlcGVyIENoYW5uZWxLZWVwZXIKfQoKZnVuYyAocHZyIFByb29mVmVyaWZpY2F0aW9uRGVjb3JhdG9yKSBBbnRlSGFuZGxlKGN0eCBDb250ZXh0LCB0eCBUeCwgc2ltdWxhdGUgYm9vbCwgbmV4dCBBbnRlSGFuZGxlcikgKENvbnRleHQsIGVycm9yKSB7CiAgZm9yIF8sIG1zZyA6PSByYW5nZSB0eC5HZXRNc2dzKCkgewogICAgdmFyIGVyciBlcnJvcgogICAgc3dpdGNoIG1zZyA6PSBtc2cuKHR5cGUpIHsKICAgIGNhc2UgY2xpZW50Lk1zZ1VwZGF0ZUNsaWVudDoKICAgICAgZXJyID0gcHZyLmNsaWVudEtlZXBlci5VcGRhdGVDbGllbnQobXNnLkNsaWVudElELCBtc2cuSGVhZGVyKQogICAgY2FzZSBjaGFubmVsLk1zZ1BhY2tldDoKICAgICAgZXJyID0gcHZyLmNoYW5uZWxLZWVwZXIuUmVjdlBhY2tldChtc2cuUGFja2V0LCBtc2cuUHJvb2ZzLCBtc2cuUHJvb2ZIZWlnaHQpCiAgICBjYXNlIGNoYW5lbC5Nc2dBY2tub3dsZWRnZW1lbnQ6CiAgICAgIGVyciA9IHB2ci5jaGFubmVsS2VlcGVyLkFja25vd2xlZGdlbWVudFBhY2tldChtc2cuQWNrbm93bGVkZ2VtZW50LCBtc2cuUHJvb2YsIG1zZy5Qcm9vZkhlaWdodCkKICAgIGNhc2UgY2hhbm5lbC5Nc2dUaW1lb3V0UGFja2V0OgogICAgICBlcnIgPSBwdnIuY2hhbm5lbEtlZXBlci5UaW1lb3V0UGFja2V0KG1zZy5QYWNrZXQsIG1zZy5Qcm9vZiwgbXNnLlByb29mSGVpZ2h0LCBtc2cuTmV4dFNlcXVlbmNlUmVjdikKICAgIGNhc2UgY2hhbm5lbC5Nc2dDaGFubmVsT3BlbkluaXQ7CiAgICAgIGVyciA9IHB2ci5jaGFubmVsS2VlcGVyLkNoZWNrT3Blbihtc2cuUG9ydElELCBtc2cuQ2hhbm5lbElELCBtc2cuQ2hhbm5lbCkKICAgIGRlZmF1bHQ6CiAgICAgIGNvbnRpbnVlCiAgICB9CgogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgIHJldHVybiBjdHgsIGVycgogICAgfQogIH0KICAKICByZXR1cm4gbmV4dChjdHgsIHR4LCBzaW11bGF0ZSkKfQo="}}),e._v(" "),c("p",[e._v("Where "),c("code",[e._v("MsgUpdateClient")]),e._v(", "),c("code",[e._v("MsgPacket")]),e._v(", "),c("code",[e._v("MsgAcknowledgement")]),e._v(", "),c("code",[e._v("MsgTimeoutPacket")]),e._v("\nare "),c("code",[e._v("sdk.Msg")]),e._v(" types correspond to "),c("code",[e._v("handleUpdateClient")]),e._v(", "),c("code",[e._v("handleRecvPacket")]),e._v(",\n"),c("code",[e._v("handleAcknowledgementPacket")]),e._v(", "),c("code",[e._v("handleTimeoutPacket")]),e._v(" of the routing module,\nrespectively.")]),e._v(" "),c("p",[e._v("The side effects of "),c("code",[e._v("RecvPacket")]),e._v(", "),c("code",[e._v("VerifyAcknowledgement")]),e._v(",\n"),c("code",[e._v("VerifyTimeout")]),e._v(" will be extracted out into separated functions,\n"),c("code",[e._v("WriteAcknowledgement")]),e._v(", "),c("code",[e._v("DeleteCommitment")]),e._v(", "),c("code",[e._v("DeleteCommitmentTimeout")]),e._v(", respectively,\nwhich will be called by the application handlers after the execution.")]),e._v(" "),c("p",[c("code",[e._v("WriteAcknowledgement")]),e._v(" writes the acknowledgement to the state that can be\nverified by the counter-party chain and increments the sequence to prevent\ndouble execution. "),c("code",[e._v("DeleteCommitment")]),e._v(" will delete the commitment stored,\n"),c("code",[e._v("DeleteCommitmentTimeout")]),e._v(" will delete the commitment and close channel in case\nof ordered channel.")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoa2VlcGVyIENoYW5uZWxLZWVwZXIpIFdyaXRlQWNrbm93bGVkZ2VtZW50KGN0eCBDb250ZXh0LCBwYWNrZXQgUGFja2V0LCBhY2sgW11ieXRlKSB7CiAga2VlcGVyLlNldFBhY2tldEFja25vd2xlZGdlbWVudChjdHgsIHBhY2tldC5HZXREZXN0UG9ydCgpLCBwYWNrZXQuR2V0RGVzdENoYW5uZWwoKSwgcGFja2V0LkdldFNlcXVlbmNlKCksIGFjaykKICBrZWVwZXIuU2V0TmV4dFNlcXVlbmNlUmVjdihjdHgsIHBhY2tldC5HZXREZXN0UG9ydCgpLCBwYWNrZXQuR2V0RGVzdENoYW5uZWwoKSwgcGFja2V0LkdldFNlcXVlbmNlKCkpCn0KCmZ1bmMgKGtlZXBlciBDaGFubmVsS2VlcGVyKSBEZWxldGVDb21taXRtZW50KGN0eCBDb250ZXh0LCBwYWNrZXQgUGFja2V0KSB7CiAga2VlcGVyLmRlbGV0ZVBhY2tldENvbW1pdG1lbnQoY3R4LCBwYWNrZXQuR2V0U291cmNlUG9ydCgpLCBwYWNrZXQuR2V0U291cmNlQ2hhbm5lbCgpLCBwYWNrZXQuR2V0U2VxdWVuY2UoKSkKfQoKZnVuYyAoa2VlcGVyIENoYW5uZWxLZWVwZXIpIERlbGV0ZUNvbW1pdG1lbnRUaW1lb3V0KGN0eCBDb250ZXh0LCBwYWNrZXQgUGFja2V0KSB7CiAgay5kZWxldGVQYWNrZXRDb21taXRtZW50KGN0eCwgcGFja2V0LkdldFNvdXJjZVBvcnQoKSwgcGFja2V0LkdldFNvdXJjZUNoYW5uZWwoKSwgcGFja2V0LkdldFNlcXVlbmNlKCkpCiAgCiAgaWYgY2hhbm5lbC5PcmRlcmluZyA9PSB0eXBlcy5PUkRFUkVEIFsKICAgIGNoYW5uZWwuU3RhdGUgPSB0eXBlcy5DTE9TRUQKICAgIGsuU2V0Q2hhbm5lbChjdHgsIHBhY2tldC5HZXRTb3VyY2VQb3J0KCksIHBhY2tldC5HZXRTb3VyY2VDaGFubmVsKCksIGNoYW5uZWwpCiAgfQp9Cg=="}}),e._v(" "),c("p",[e._v("Each application handler should call respective finalization methods on the "),c("code",[e._v("PortKeeper")]),e._v("\nin order to increase sequence (in case of packet) or remove the commitment\n(in case of acknowledgement and timeout).\nCalling those functions implies that the application logic has successfully executed.\nHowever, the handlers can return "),c("code",[e._v("Result")]),e._v(" with "),c("code",[e._v("CodeTxBreak")]),e._v(" after calling those methods\nwhich will persist the state changes that has been already done but prevent any further\nmessages to be executed in case of semantically invalid packet. This will keep the sequence\nincreased in the previous IBC packets(thus preventing double execution) without\nproceeding to the following messages.\nIn any case the application modules should never return state reverting result,\nwhich will make the channel unable to proceed.")]),e._v(" "),c("p",[c("code",[e._v("ChannelKeeper.CheckOpen")]),e._v(" method will be introduced. This will replace "),c("code",[e._v("onChanOpen*")]),e._v(" defined\nunder the routing module specification. Instead of define each channel handshake callback\nfunctions, application modules can provide "),c("code",[e._v("ChannelChecker")]),e._v(" function with the "),c("code",[e._v("AppModule")]),e._v("\nwhich will be injected to "),c("code",[e._v("ChannelKeeper.Port()")]),e._v(" at the top level application.\n"),c("code",[e._v("CheckOpen")]),e._v(" will find the correct "),c("code",[e._v("ChennelChecker")]),e._v(" using the\n"),c("code",[e._v("PortID")]),e._v(" and call it, which will return an error if it is unacceptable by the application.")]),e._v(" "),c("p",[e._v("The "),c("code",[e._v("ProofVerificationDecorator")]),e._v(" will be inserted to the top level application.\nIt is not safe to make each module responsible to call proof verification\nlogic, whereas application can misbehave(in terms of IBC protocol) by\nmistake.")]),e._v(" "),c("p",[e._v("The "),c("code",[e._v("ProofVerificationDecorator")]),e._v(" should come right after the default sybil attack\nresistent layer from the current "),c("code",[e._v("auth.NewAnteHandler")]),e._v(":")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gYWRkIElCQyBQcm9vZlZlcmlmaWNhdGlvbkRlY29yYXRvciB0byB0aGUgQ2hhaW4gb2YKZnVuYyBOZXdBbnRlSGFuZGxlcigKICBhayBrZWVwZXIuQWNjb3VudEtlZXBlciwgc3VwcGx5S2VlcGVyIHR5cGVzLlN1cHBseUtlZXBlciwgaWJjS2VlcGVyIGliYy5LZWVwZXIsCiAgc2lnR2FzQ29uc3VtZXIgU2lnbmF0dXJlVmVyaWZpY2F0aW9uR2FzQ29uc3VtZXIpIHNkay5BbnRlSGFuZGxlciB7CiAgcmV0dXJuIHNkay5DaGFpbkFudGVEZWNvcmF0b3JzKAogICAgTmV3U2V0VXBDb250ZXh0RGVjb3JhdG9yKCksIC8vIG91dGVybW9zdCBBbnRlRGVjb3JhdG9yLiBTZXRVcENvbnRleHQgbXVzdCBiZSBjYWxsZWQgZmlyc3QKICAgIC4uLgogICAgTmV3SW5jcmVtZW50U2VxdWVuY2VEZWNvcmF0b3IoYWspLAogICAgaWJjYW50ZS5Qcm9vZlZlcmlmaWNhdGlvbkRlY29yYXRvcihpYmNLZWVwZXIuQ2xpZW50S2VlcGVyLCBpYmNLZWVwZXIuQ2hhbm5lbEtlZXBlciksIC8vIGlubmVybW9zdCBBbnRlRGVjb3JhdG9yCiAgKQp9Cg=="}}),e._v(" "),c("p",[e._v("The implementation of this ADR will also create a "),c("code",[e._v("Data")]),e._v(" field of the "),c("code",[e._v("Packet")]),e._v(" of type "),c("code",[e._v("[]byte")]),e._v(", which can be deserialised by the receiving module into its own private type. It is up to the application modules to do this according to their own interpretation, not by the IBC keeper.  This is crucial for dynamic IBC.")]),e._v(" "),c("p",[e._v("Example application-side usage:")]),e._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBcHBNb2R1bGUgc3RydWN0IHt9CgovLyBDaGVja0NoYW5uZWwgd2lsbCBiZSBwcm92aWRlZCB0byB0aGUgQ2hhbm5lbEtlZXBlciBhcyBDaGFubmVsS2VlcGVyLlBvcnQobW9kdWxlLkNoZWNrQ2hhbm5lbCkKZnVuYyAobW9kdWxlIEFwcE1vZHVsZSkgQ2hlY2tDaGFubmVsKHBvcnRJRCwgY2hhbm5lbElEIHN0cmluZywgY2hhbm5lbCBDaGFubmVsKSBlcnJvciB7CiAgaWYgY2hhbm5lbC5PcmRlcmluZyAhPSBVTk9SREVSRUQgewogICAgcmV0dXJuIEVyclVuY29tcGF0aWJsZU9yZGVyaW5nKCkKICB9CiAgaWYgY2hhbm5lbC5Db3VudGVycGFydHlQb3J0ICE9ICZxdW90O2JhbmsmcXVvdDsgewogICAgcmV0dXJuIEVyclVuY29tcGF0aWJsZVBvcnQoKQogIH0KICBpZiBjaGFubmVsLlZlcnNpb24gIT0gJnF1b3Q7JnF1b3Q7IHsKICAgIHJldHVybiBFcnJVbmNvbXBhdGlibGVWZXJzaW9uKCkKICB9CiAgcmV0dXJuIG5pbAp9CgpmdW5jIE5ld0hhbmRsZXIoayBLZWVwZXIpIEhhbmRsZXIgewogIHJldHVybiBmdW5jKGN0eCBDb250ZXh0LCBtc2cgTXNnKSBSZXN1bHQgewogICAgc3dpdGNoIG1zZyA6PSBtc2cuKHR5cGUpIHsKICAgIGNhc2UgTXNnVHJhbnNmZXI6CiAgICAgIHJldHVybiBoYW5kbGVNc2dUcmFuc2ZlcihjdHgsIGssIG1zZykKICAgIGNhc2UgaWJjLk1zZ1BhY2tldDoKICAgICAgdmFyIGRhdGEgUGFja2V0RGF0YVRyYW5zZmVyCiAgICAgIGlmIGVyciA6PSB0eXBlcy5Nb2R1bGVDb2RlYy5Vbm1hcnNoYWxCaW5hcnlCYXJlKG1zZy5HZXREYXRhKCksICZhbXA7ZGF0YSk7IGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBlcnIKICAgICAgfQogICAgICByZXR1cm4gaGFuZGxlUGFja2V0RGF0YVRyYW5zZmVyKGN0eCwgaywgbXNnLCBkYXRhKQogICAgY2FzZSBpYmMuTXNnVGltZW91dFBhY2tldDoKICAgICAgdmFyIGRhdGEgUGFja2V0RGF0YVRyYW5zZmVyCiAgICAgIGlmIGVyciA6PSB0eXBlcy5Nb2R1bGVDb2RlYy5Vbm1hcnNoYWxCaW5hcnlCYXJlKG1zZy5HZXREYXRhKCksICZhbXA7ZGF0YSk7IGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBlcnIKICAgICAgfQogICAgICByZXR1cm4gaGFuZGxlVGltZW91dFBhY2tldERhdGFUcmFuc2ZlcihjdHgsIGssIHBhY2tldCkKICAgIC8vIGludGVyZmFjZSB7IFBvcnRJRCgpIHN0cmluZzsgQ2hhbm5lbElEKCkgc3RyaW5nOyBDaGFubmVsKCkgaWJjLkNoYW5uZWwgfQogICAgLy8gTXNnQ2hhbkluaXQsIE1zZ0NoYW5UcnkgaW1wbGVtZW50cyBpYmMuTXNnQ2hhbm5lbE9wZW4KICAgIGNhc2UgaWJjLk1zZ0NoYW5uZWxPcGVuOiAKICAgICAgcmV0dXJuIGhhbmRsZU1zZ0NoYW5uZWxPcGVuKGN0eCwgaywgbXNnKQogICAgfQogIH0KfQoKZnVuYyBoYW5kbGVNc2dUcmFuc2ZlcihjdHggQ29udGV4dCwgayBLZWVwZXIsIG1zZyBNc2dUcmFuc2ZlcikgUmVzdWx0IHsKICBlcnIgOj0gay5TZW5kVHJhbnNmZXIoY3R4LG1zZy5Qb3J0SUQsIG1zZy5DaGFubmVsSUQsIG1zZy5BbW91bnQsIG1zZy5TZW5kZXIsIG1zZy5SZWNlaXZlcikKICBpZiBlcnIgIT0gbmlsIHsKICAgIHJldHVybiBzZGsuUmVzdWx0RnJvbUVycm9yKGVycikKICB9CgogIHJldHVybiBzZGsuUmVzdWx0e30KfQoKZnVuYyBoYW5kbGVQYWNrZXREYXRhVHJhbnNmZXIoY3R4IENvbnRleHQsIGsgS2VlcGVyLCBwYWNrZXQgUGFja2V0LCBkYXRhIFBhY2tldERhdGFUcmFuc2ZlcikgUmVzdWx0IHsKICBlcnIgOj0gay5SZWNlaXZlVHJhbnNmZXIoY3R4LCBwYWNrZXQuR2V0U291cmNlUG9ydCgpLCBwYWNrZXQuR2V0U291cmNlQ2hhbm5lbCgpLCBwYWNrZXQuR2V0RGVzdGluYXRpb25Qb3J0KCksIHBhY2tldC5HZXREZXN0aW5hdGlvbkNoYW5uZWwoKSwgZGF0YSkKICBpZiBlcnIgIT0gbmlsIHsKICAgIC8vIFRPRE86IFNvdXJjZSBjaGFpbiBzZW50IGludmFsaWQgcGFja2V0LCBzaHV0ZG93biBjaGFubmVsCiAgfQogIGsuQ2hhbm5lbEtlZXBlci5Xcml0ZUFja25vd2xlZGdlbWVudChbXWJ5dGV7MHgwMH0pIC8vIFdyaXRlQWNrbm93bGVkZ2VtZW50IGluY3JlYXNlcyB0aGUgc2VxdWVuY2UsIHByZXZlbnRpbmcgZG91YmxlIHNwZW5kaW5nCiAgcmV0dXJuIHNkay5SZXN1bHR7fQp9CgpmdW5jIGhhbmRsZUN1c3RvbVRpbWVvdXRQYWNrZXQoY3R4IENvbnRleHQsIGsgS2VlcGVyLCBwYWNrZXQgQ3VzdG9tUGFja2V0KSBSZXN1bHQgewogIGVyciA6PSBrLlJlY292ZXJUcmFuc2ZlcihjdHgsIHBhY2tldC5HZXRTb3VyY2VQb3J0KCksIHBhY2tldC5HZXRTb3VyY2VDaGFubmVsKCksIHBhY2tldC5HZXREZXN0aW5hdGlvblBvcnQoKSwgcGFja2V0LkdldERlc3RpbmF0aW9uQ2hhbm5lbCgpLCBkYXRhKQogIGlmIGVyciAhPSBuaWwgewogICAgLy8gVGhpcyBjaGFpbiBzZW50IGludmFsaWQgcGFja2V0IG9yIGNhbm5vdCByZWNvdmVyIHRoZSBmdW5kcwogICAgcGFuaWMoZXJyKQogIH0KICBrLkNoYW5uZWxLZWVwZXIuRGVsZXRlQ29tbWl0bWVudFRpbWVvdXQoY3R4LCBwYWNrZXQpCiAgLy8gcGFja2V0IHRpbWVvdXQgc2hvdWxkIG5vdCBmYWlsCiAgcmV0dXJuIHNkay5SZXN1bHR7fQp9CgpmdW5jIGhhbmRsZU1zZ0NoYW5uZWxPcGVuKHNkay5Db250ZXh0LCBrIEtlZXBlciwgbXNnIE1zZ09wZW5DaGFubmVsKSBSZXN1bHQgewogIGsuQWxsb2NhdGVFc2Nyb3dBZGRyZXNzKGN0eCwgbXNnLkNoYW5uZWxJRCgpKQogIHJldHVybiBzZGsuUmVzdWx0e30KfQo="}}),e._v(" "),c("h2",{attrs:{id:"status"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),c("p",[e._v("Proposed")]),e._v(" "),c("h2",{attrs:{id:"consequences"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),c("h3",{attrs:{id:"positive"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),c("ul",[c("li",[e._v("Intuitive interface for developers - IBC handlers do not need to care about IBC authentication")]),e._v(" "),c("li",[e._v("State change commitment logic is embedded into "),c("code",[e._v("baseapp.runTx")]),e._v(" logic")])]),e._v(" "),c("h3",{attrs:{id:"negative"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),c("ul",[c("li",[e._v("Cannot support dynamic ports, routing is tied to the baseapp router")])]),e._v(" "),c("h3",{attrs:{id:"neutral"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),c("ul",[c("li",[e._v("Introduces new "),c("code",[e._v("AnteHandler")]),e._v(" decorator.")]),e._v(" "),c("li",[e._v("Dynamic ports can be supported using hierarchical port identifier, see #5290 for detail")])]),e._v(" "),c("h2",{attrs:{id:"references"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),c("ul",[c("li",[e._v("Relevant comment: "),c("a",{attrs:{href:"https://github.com/cosmos/ics/issues/289#issuecomment-544533583",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmos/ics#289"),c("OutboundLink")],1)]),e._v(" "),c("li",[c("a",{attrs:{href:"https://github.com/cosmos/ics/blob/master/spec/ics-026-routing-module",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS26 - Routing Module"),c("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);