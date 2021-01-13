(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{695:function(e,n,t){"use strict";t.r(n);var a=t(1),o=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adr-001-coin-source-tracing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adr-001-coin-source-tracing"}},[e._v("#")]),e._v(" ADR 001: Coin Source Tracing")]),e._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("ul",[t("li",[e._v("2020-07-09: Initial Draft")]),e._v(" "),t("li",[e._v("2020-08-11: Implementation changes")])]),e._v(" "),t("h2",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),t("p",[e._v("Accepted, Implemented")]),e._v(" "),t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),t("p",[e._v("The specification for IBC cross-chain fungible token transfers\n("),t("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS20"),t("OutboundLink")],1),e._v("), needs to\nbe aware of the origin of any token denomination in order to relay a "),t("code",[e._v("Packet")]),e._v(" which contains the sender\nand recipient addressed in the\n"),t("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("FungibleTokenPacketData")]),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("The Packet relay sending works based in 2 cases (per\n"),t("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#packet-relay",target:"_blank",rel:"noopener noreferrer"}},[e._v("specification"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://github.com/colin-axner",target:"_blank",rel:"noopener noreferrer"}},[e._v("Colin Axnér"),t("OutboundLink")],1),e._v("'s description):")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Sender chain is acting as the source zone. The coins are transferred\nto an escrow address (i.e locked) on the sender chain and then transferred\nto the receiving chain through IBC TAO logic. It is expected that the\nreceiving chain will mint vouchers to the receiving address.")])]),e._v(" "),t("li",[t("p",[e._v("Sender chain is acting as the sink zone. The coins (vouchers) are burned\non the sender chain and then transferred to the receiving chain though IBC\nTAO logic. It is expected that the receiving chain, which had previously\nsent the original denomination, will unescrow the fungible token and send\nit to the receiving address.")])])]),e._v(" "),t("p",[e._v("Another way of thinking of source and sink zones is through the token's\ntimeline. Each send to any chain other than the one it was previously\nreceived from is a movement forwards in the token's timeline. This causes\ntrace to be added to the token's history and the destination port and\ndestination channel to be prefixed to the denomination. In these instances\nthe sender chain is acting as the source zone. When the token is sent back\nto the chain it previously received from, the prefix is removed. This is\na backwards movement in the token's timeline and the sender chain\nis acting as the sink zone.")]),e._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("p",[e._v("Assume the following channel connections exist and that all channels use the port ID "),t("code",[e._v("transfer")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("chain "),t("code",[e._v("A")]),e._v(" has channels with chain "),t("code",[e._v("B")]),e._v(" and chain "),t("code",[e._v("C")]),e._v(" with the IDs "),t("code",[e._v("channelToB")]),e._v(" and "),t("code",[e._v("channelToC")]),e._v(", respectively")]),e._v(" "),t("li",[e._v("chain "),t("code",[e._v("B")]),e._v(" has channels with chain "),t("code",[e._v("A")]),e._v(" and chain "),t("code",[e._v("C")]),e._v(" with the IDs "),t("code",[e._v("channelToA")]),e._v(" and "),t("code",[e._v("channelToC")]),e._v(", respectively")]),e._v(" "),t("li",[e._v("chain "),t("code",[e._v("C")]),e._v(" has channels with chain "),t("code",[e._v("A")]),e._v(" and chain "),t("code",[e._v("B")]),e._v(" with the IDs "),t("code",[e._v("channelToA")]),e._v(" and "),t("code",[e._v("channelToB")]),e._v(", respectively")])]),e._v(" "),t("p",[e._v("These steps of transfer between chains occur in the following order: "),t("code",[e._v("A -> B -> C -> A -> C")]),e._v(". In particular:")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("A -> B")]),e._v(": sender chain is source zone. "),t("code",[e._v("A")]),e._v(" sends packet with "),t("code",[e._v("denom")]),e._v(" (escrowed on "),t("code",[e._v("A")]),e._v("), "),t("code",[e._v("B")]),e._v(" receives "),t("code",[e._v("denom")]),e._v(" and mints and sends voucher "),t("code",[e._v("transfer/channelToA/denom")]),e._v(" to recipient.")]),e._v(" "),t("li",[t("code",[e._v("B -> C")]),e._v(": sender chain is source zone. "),t("code",[e._v("B")]),e._v(" sends packet with "),t("code",[e._v("transfer/channelToA/denom")]),e._v(" (escrowed on "),t("code",[e._v("B")]),e._v("), "),t("code",[e._v("C")]),e._v(" receives "),t("code",[e._v("transfer/channelToA/denom")]),e._v(" and mints and sends voucher "),t("code",[e._v("transfer/channelToB/transfer/channelToA/denom")]),e._v(" to recipient.")]),e._v(" "),t("li",[t("code",[e._v("C -> A")]),e._v(": sender chain is source zone. "),t("code",[e._v("C")]),e._v(" sends packet with "),t("code",[e._v("transfer/channelToB/transfer/channelToA/denom")]),e._v(" (escrowed on "),t("code",[e._v("C")]),e._v("), "),t("code",[e._v("A")]),e._v(" receives "),t("code",[e._v("transfer/channelToB/transfer/channelToA/denom")]),e._v(" and mints and sends voucher "),t("code",[e._v("transfer/channelToC/transfer/channelToB/transfer/channelToA/denom")]),e._v(" to recipient.")]),e._v(" "),t("li",[t("code",[e._v("A -> C")]),e._v(": sender chain is sink zone. "),t("code",[e._v("A")]),e._v(" sends packet with "),t("code",[e._v("transfer/channelToC/transfer/channelToB/transfer/channelToA/denom")]),e._v(" (burned on "),t("code",[e._v("A")]),e._v("), "),t("code",[e._v("C")]),e._v(" receives "),t("code",[e._v("transfer/channelToC/transfer/channelToB/transfer/channelToA/denom")]),e._v(", and unescrows and sends "),t("code",[e._v("transfer/channelToB/transfer/channelToA/denom")]),e._v(" to recipient.")])]),e._v(" "),t("p",[e._v("The token has a final denomination on chain "),t("code",[e._v("C")]),e._v(" of "),t("code",[e._v("transfer/channelToB/transfer/channelToA/denom")]),e._v(", where "),t("code",[e._v("transfer/channelToB/transfer/channelToA")]),e._v(" is the trace information.")]),e._v(" "),t("p",[e._v("In this context, upon a receive of a cross-chain fungible token transfer, if the sender chain is the source of the token, the protocol prefixes the denomination with the port and channel identifiers in the following format:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"cHJlZml4ICsgZGVub20gPSB7ZGVzdFBvcnROfS97ZGVzdENoYW5uZWxOfS8uLi4ve2Rlc3RQb3J0MH0ve2Rlc3RDaGFubmVsMH0vZGVub20K"}}),e._v(" "),t("p",[e._v("Example: transferring "),t("code",[e._v("100 uatom")]),e._v(" from port "),t("code",[e._v("HubPort")]),e._v(" and channel "),t("code",[e._v("HubChannel")]),e._v(" on the Hub to\nEthermint's port "),t("code",[e._v("EthermintPort")]),e._v(" and channel "),t("code",[e._v("EthermintChannel")]),e._v(" results in "),t("code",[e._v("100 EthermintPort/EthermintChannel/uatom")]),e._v(", where "),t("code",[e._v("EthermintPort/EthermintChannel/uatom")]),e._v(" is the new\ndenomination on the receiving chain.")]),e._v(" "),t("p",[e._v("In the case those tokens are transferred back to the Hub (i.e the "),t("strong",[e._v("source")]),e._v(" chain), the prefix is\ntrimmed and the token denomination updated to the original one.")]),e._v(" "),t("h3",{attrs:{id:"problem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[e._v("#")]),e._v(" Problem")]),e._v(" "),t("p",[e._v("The problem of adding additional information to the coin denomination is twofold:")]),e._v(" "),t("ol",[t("li",[e._v("The ever increasing length if tokens are transferred to zones other than the source:")])]),e._v(" "),t("p",[e._v("If a token is transferred "),t("code",[e._v("n")]),e._v(" times via IBC to a sink chain, the token denom will contain "),t("code",[e._v("n")]),e._v(" pairs\nof prefixes, as shown on the format example above. This poses a problem because, while port and\nchannel identifiers have a maximum length of 64 each, the SDK "),t("code",[e._v("Coin")]),e._v(" type only accepts denoms up to\n64 characters. Thus, a single cross-chain token, which again, is composed by the port and channels\nidentifiers plus the base denomination, can exceed the length validation for the SDK "),t("code",[e._v("Coins")]),e._v(".")]),e._v(" "),t("p",[e._v("This can result in undesired behaviours such as tokens not being able to be transferred to multiple\nsink chains if the denomination exceeds the length or unexpected "),t("code",[e._v("panics")]),e._v(" due to denomination\nvalidation failing on the receiving chain.")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("The existence of special characters and uppercase letters on the denomination:")])]),e._v(" "),t("p",[e._v("In the SDK every time a "),t("code",[e._v("Coin")]),e._v(" is initialized through the constructor function "),t("code",[e._v("NewCoin")]),e._v(", a validation\nof a coin's denom is performed according to a\n"),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/a940214a4923a3bf9a9161cd14bd3072299cd0c9/types/coin.go#L583",target:"_blank",rel:"noopener noreferrer"}},[e._v("Regex"),t("OutboundLink")],1),e._v(",\nwhere only lowercase alphanumeric characters are accepted. While this is desirable for native denominations\nto keep a clean UX, it presents a challenge for IBC as ports and channels might be randomly\ngenerated with special and uppercase characters as per the "),t("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-024-host-requirements#paths-identifiers-separators",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 024 - Host\nRequirements"),t("OutboundLink")],1),e._v("\nspecification.")]),e._v(" "),t("h2",{attrs:{id:"decision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),t("p",[e._v("The issues outlined above, are applicable only to SDK-based chains, and thus the proposed solution\nare do not require specification changes that would result in modification to other implementations\nof the ICS20 spec.")]),e._v(" "),t("p",[e._v("Instead of adding the identifiers on the coin denomination directly, the proposed solution hashes\nthe denomination prefix in order to get a consistent length for all the cross-chain fungible tokens.")]),e._v(" "),t("p",[e._v("This will be used for internal storage only, and when transferred via IBC to a different chain, the\ndenomination specified on the packed data will be the full prefix path of the identifiers needed to\ntrace the token back to the originating chain, as specified on ICS20.")]),e._v(" "),t("p",[e._v("The new proposed format will be the following:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"aWJjRGVub20gPSAmcXVvdDtpYmMvJnF1b3Q7ICsgaGFzaCh0cmFjZSBwYXRoICsgJnF1b3Q7LyZxdW90OyArIGJhc2UgZGVub20pCg=="}}),e._v(" "),t("p",[e._v("The hash function will be a SHA256 hash of the fields of the "),t("code",[e._v("DenomTrace")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gRGVub21UcmFjZSBjb250YWlucyB0aGUgYmFzZSBkZW5vbWluYXRpb24gZm9yIElDUzIwIGZ1bmdpYmxlIHRva2VucyBhbmQgdGhlIHNvdXJjZSB0cmFjaW5nCi8vIGluZm9ybWF0aW9uCm1lc3NhZ2UgRGVub21UcmFjZSB7CiAgLy8gY2hhaW4gb2YgcG9ydC9jaGFubmVsIGlkZW50aWZpZXJzIHVzZWQgZm9yIHRyYWNpbmcgdGhlIHNvdXJjZSBvZiB0aGUgZnVuZ2libGUgdG9rZW4KICBzdHJpbmcgcGF0aCA9IDE7CiAgLy8gYmFzZSBkZW5vbWluYXRpb24gb2YgdGhlIHJlbGF5ZWQgZnVuZ2libGUgdG9rZW4KICBzdHJpbmcgYmFzZV9kZW5vbSA9IDI7Cn0K"}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("IBCDenom")]),e._v(" function constructs the "),t("code",[e._v("Coin")]),e._v(" denomination used when creating the ICS20 fungible token packet data:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"Ly8gSGFzaCByZXR1cm5zIHRoZSBoZXggYnl0ZXMgb2YgdGhlIFNIQTI1NiBoYXNoIG9mIHRoZSBEZW5vbVRyYWNlIGZpZWxkcyB1c2luZyB0aGUgZm9sbG93aW5nIGZvcm11bGE6Ci8vCi8vIGhhc2ggPSBzaGEyNTYodHJhY2VQYXRoICsgJnF1b3Q7LyZxdW90OyArIGJhc2VEZW5vbSkKZnVuYyAoZHQgRGVub21UcmFjZSkgSGFzaCgpIHRtYnl0ZXMuSGV4Qnl0ZXMgewogIHJldHVybiB0bWhhc2guU3VtKGR0LlBhdGggKyAmcXVvdDsvJnF1b3Q7ICsgZHQuQmFzZURlbm9tKQp9CgovLyBJQkNEZW5vbSBhIGNvaW4gZGVub21pbmF0aW9uIGZvciBhbiBJQ1MyMCBmdW5naWJsZSB0b2tlbiBpbiB0aGUgZm9ybWF0ICdpYmMve2hhc2godHJhY2VQYXRoICsgYmFzZURlbm9tKX0nLiAKLy8gSWYgdGhlIHRyYWNlIGlzIGVtcHR5LCBpdCB3aWxsIHJldHVybiB0aGUgYmFzZSBkZW5vbWluYXRpb24uCmZ1bmMgKGR0IERlbm9tVHJhY2UpIElCQ0Rlbm9tKCkgc3RyaW5nIHsKICBpZiBkdC5QYXRoICE9ICZxdW90OyZxdW90OyB7CiAgICByZXR1cm4gZm10LlNwcmludGYoJnF1b3Q7aWJjLyVzJnF1b3Q7LCBkdC5IYXNoKCkpCiAgfQogIHJldHVybiBkdC5CYXNlRGVub20KfQo="}}),e._v(" "),t("h3",{attrs:{id:"x-ibc-transfer-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#x-ibc-transfer-changes"}},[e._v("#")]),e._v(" "),t("code",[e._v("x/ibc-transfer")]),e._v(" Changes")]),e._v(" "),t("p",[e._v("In order to retrieve the trace information from an IBC denomination, a lookup table needs to be\nadded to the "),t("code",[e._v("ibc-transfer")]),e._v(" module. These values need to also be persisted between upgrades, meaning\nthat a new "),t("code",[e._v("[]DenomTrace")]),e._v(" "),t("code",[e._v("GenesisState")]),e._v(" field state needs to be added to the module:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"Ly8gR2V0RGVub21UcmFjZSByZXRyaWV2ZXMgdGhlIGZ1bGwgaWRlbnRpZmllcnMgdHJhY2UgYW5kIGJhc2UgZGVub21pbmF0aW9uIGZyb20gdGhlIHN0b3JlLgpmdW5jIChrIEtlZXBlcikgR2V0RGVub21UcmFjZShjdHggQ29udGV4dCwgZGVub21UcmFjZUhhc2ggW11ieXRlKSAoRGVub21UcmFjZSwgYm9vbCkgewogIHN0b3JlIDo9IGN0eC5LVlN0b3JlKGsuc3RvcmVLZXkpCiAgYnogOj0gc3RvcmUuR2V0KHR5cGVzLktleURlbm9tVHJhY2UodHJhY2VIYXNoKSkKICBpZiBieiA9PSBuaWwgewogICAgcmV0dXJuICZhbXA7RGVub21UcmFjZSwgZmFsc2UKICB9CgogIHZhciBkZW5vbVRyYWNlIERlbm9tVHJhY2UKICBrLmNkYy5NdXN0VW5tYXJzaGFsQmluYXJ5QmFyZShieiwgJmFtcDtkZW5vbVRyYWNlKQogIHJldHVybiBkZW5vbVRyYWNlLCB0cnVlCn0KCi8vIEhhc0Rlbm9tVHJhY2UgY2hlY2tzIGlmIGEgdGhlIGtleSB3aXRoIHRoZSBnaXZlbiB0cmFjZSBoYXNoIGV4aXN0cyBvbiB0aGUgc3RvcmUuCmZ1bmMgKGsgS2VlcGVyKSBIYXNEZW5vbVRyYWNlKGN0eCBDb250ZXh0LCBkZW5vbVRyYWNlSGFzaCBbXWJ5dGUpICBib29sIHsKICBzdG9yZSA6PSBjdHguS1ZTdG9yZShrLnN0b3JlS2V5KQogIHJldHVybiBzdG9yZS5IYXModHlwZXMuS2V5VHJhY2UoZGVub21UcmFjZUhhc2gpKQp9CgovLyBTZXREZW5vbVRyYWNlIHNldHMgYSBuZXcge3RyYWNlIGhhc2ggLSZndDsgdHJhY2V9IHBhaXIgdG8gdGhlIHN0b3JlLgpmdW5jIChrIEtlZXBlcikgU2V0RGVub21UcmFjZShjdHggQ29udGV4dCwgZGVub21UcmFjZSBEZW5vbVRyYWNlKSB7CiAgc3RvcmUgOj0gY3R4LktWU3RvcmUoay5zdG9yZUtleSkKICBieiA6PSBrLmNkYy5NdXN0TWFyc2hhbEJpbmFyeUJhcmUoJmFtcDtkZW5vbVRyYWNlKQogIHN0b3JlLlNldCh0eXBlcy5LZXlUcmFjZShkZW5vbVRyYWNlLkhhc2goKSksIGJ6KQp9Cg=="}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("MsgTransfer")]),e._v(" will validate that the "),t("code",[e._v("Coin")]),e._v(" denomination from the "),t("code",[e._v("Token")]),e._v(" field contains a valid\nhash, if the trace info is provided, or that the base denominations matches:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyAobXNnIE1zZ1RyYW5zZmVyKSBWYWxpZGF0ZUJhc2ljKCkgZXJyb3IgewogIC8vIC4uLgogIHJldHVybiBWYWxpZGF0ZUlCQ0Rlbm9tKG1zZy5Ub2tlbi5EZW5vbSkKfQo="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"Ly8gVmFsaWRhdGVJQkNEZW5vbSB2YWxpZGF0ZXMgdGhhdCB0aGUgZ2l2ZW4gZGVub21pbmF0aW9uIGlzIGVpdGhlcjoKLy8KLy8gIC0gQSB2YWxpZCBiYXNlIGRlbm9taW5hdGlvbiAoZWc6ICd1YXRvbScpCi8vICAtIEEgdmFsaWQgZnVuZ2libGUgdG9rZW4gcmVwcmVzZW50YXRpb24gKGkuZSAnaWJjL3toYXNofScpIHBlciBBRFIgMDAxIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9ibG9iL21hc3Rlci9kb2NzL2FyY2hpdGVjdHVyZS9hZHItMDAxLWNvaW4tc291cmNlLXRyYWNpbmcubWQKZnVuYyBWYWxpZGF0ZUlCQ0Rlbm9tKGRlbm9tIHN0cmluZykgZXJyb3IgewogIGRlbm9tU3BsaXQgOj0gc3RyaW5ncy5TcGxpdE4oZGVub20sICZxdW90Oy8mcXVvdDssIDIpCgogIHN3aXRjaCB7CiAgY2FzZSBzdHJpbmdzLlRyaW1TcGFjZShkZW5vbSkgPT0gJnF1b3Q7JnF1b3Q7LAogICAgbGVuKGRlbm9tU3BsaXQpID09IDEgJmFtcDsmYW1wOyBkZW5vbVNwbGl0WzBdID09ICZxdW90O2liYyZxdW90OywKICAgIGxlbihkZW5vbVNwbGl0KSA9PSAyICZhbXA7JmFtcDsgKGRlbm9tU3BsaXRbMF0gIT0gJnF1b3Q7aWJjJnF1b3Q7IHx8IHN0cmluZ3MuVHJpbVNwYWNlKGRlbm9tU3BsaXRbMV0pID09ICZxdW90OyZxdW90Oyk6CiAgICByZXR1cm4gc2RrZXJyb3JzLldyYXBmKEVyckludmFsaWREZW5vbUZvclRyYW5zZmVyLCAmcXVvdDtkZW5vbWluYXRpb24gc2hvdWxkIGJlIHByZWZpeGVkIHdpdGggdGhlIGZvcm1hdCAnaWJjL3toYXNoKHRyYWNlICsgXCZxdW90Oy9cJnF1b3Q7ICsgJXMpfScmcXVvdDssIGRlbm9tKQoKICBjYXNlIGRlbm9tU3BsaXRbMF0gPT0gZGVub20gJmFtcDsmYW1wOyBzdHJpbmdzLlRyaW1TcGFjZShkZW5vbSkgIT0gJnF1b3Q7JnF1b3Q7OgogICAgcmV0dXJuIHNkay5WYWxpZGF0ZURlbm9tKGRlbm9tKQogIH0KCiAgaWYgXywgZXJyIDo9IFBhcnNlSGV4SGFzaChkZW5vbVNwbGl0WzFdKTsgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gV3JhcGYoZXJyLCAmcXVvdDtpbnZhbGlkIGRlbm9tIHRyYWNlIGhhc2ggJXMmcXVvdDssIGRlbm9tU3BsaXRbMV0pCiAgfQoKICByZXR1cm4gbmlsCn0K"}}),e._v(" "),t("p",[e._v("The denomination trace info only needs to be updated when token is received:")]),e._v(" "),t("ul",[t("li",[e._v("Receiver is "),t("strong",[e._v("source")]),e._v(" chain: The receiver created the token and must have the trace lookup already stored (if necessary "),t("em",[e._v("ie")]),e._v(" native token case wouldn't need a lookup).")]),e._v(" "),t("li",[e._v("Receiver is "),t("strong",[e._v("not source")]),e._v(" chain: Store the received info. For example, during step 1, when chain "),t("code",[e._v("B")]),e._v(" receives "),t("code",[e._v("transfer/channelToA/denom")]),e._v(".")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"Ly8gU2VuZFRyYW5zZmVyCi8vIC4uLgoKICBmdWxsRGVub21QYXRoIDo9IHRva2VuLkRlbm9tCgovLyBkZWNvbnN0cnVjdCB0aGUgdG9rZW4gZGVub21pbmF0aW9uIGludG8gdGhlIGRlbm9taW5hdGlvbiB0cmFjZSBpbmZvCi8vIHRvIGRldGVybWluZSBpZiB0aGUgc2VuZGVyIGlzIHRoZSBzb3VyY2UgY2hhaW4KaWYgc3RyaW5ncy5IYXNQcmVmaXgodG9rZW4uRGVub20sICZxdW90O2liYy8mcXVvdDspIHsKICBmdWxsRGVub21QYXRoLCBlcnIgPSBrLkRlbm9tUGF0aEZyb21IYXNoKGN0eCwgdG9rZW4uRGVub20pCiAgaWYgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gZXJyCiAgfQp9CgppZiB0eXBlcy5TZW5kZXJDaGFpbklzU291cmNlKHNvdXJjZVBvcnQsIHNvdXJjZUNoYW5uZWwsIGZ1bGxEZW5vbVBhdGgpIHsKLy8uLi4K"}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"Ly8gRGVub21QYXRoRnJvbUhhc2ggcmV0dXJucyB0aGUgZnVsbCBkZW5vbWluYXRpb24gcGF0aCBwcmVmaXggZnJvbSBhbiBpYmMgZGVub20gd2l0aCBhIGhhc2gKLy8gY29tcG9uZW50LgpmdW5jIChrIEtlZXBlcikgRGVub21QYXRoRnJvbUhhc2goY3R4IHNkay5Db250ZXh0LCBkZW5vbSBzdHJpbmcpIChzdHJpbmcsIGVycm9yKSB7CiAgaGV4SGFzaCA6PSBkZW5vbVs0Ol0KICBoYXNoLCBlcnIgOj0gUGFyc2VIZXhIYXNoKGhleEhhc2gpCiAgaWYgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gJnF1b3Q7JnF1b3Q7LCBXcmFwKEVyckludmFsaWREZW5vbUZvclRyYW5zZmVyLCBlcnIuRXJyb3IoKSkKICB9CgogIGRlbm9tVHJhY2UsIGZvdW5kIDo9IGsuR2V0RGVub21UcmFjZShjdHgsIGhhc2gpCiAgaWYgIWZvdW5kIHsKICAgIHJldHVybiAmcXVvdDsmcXVvdDssIFdyYXAoRXJyVHJhY2VOb3RGb3VuZCwgaGV4SGFzaCkKICB9CgogIGZ1bGxEZW5vbVBhdGggOj0gZGVub21UcmFjZS5HZXRGdWxsRGVub21QYXRoKCkKICByZXR1cm4gZnVsbERlbm9tUGF0aCwgbmlsCn0K"}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"Ly8gT25SZWN2UGFja2V0Ci8vIC4uLgoKLy8gVGhpcyBpcyB0aGUgcHJlZml4IHRoYXQgd291bGQgaGF2ZSBiZWVuIHByZWZpeGVkIHRvIHRoZSBkZW5vbWluYXRpb24KLy8gb24gc2VuZGVyIGNoYWluIElGIGFuZCBvbmx5IGlmIHRoZSB0b2tlbiBvcmlnaW5hbGx5IGNhbWUgZnJvbSB0aGUKLy8gcmVjZWl2aW5nIGNoYWluLgovLwovLyBOT1RFOiBXZSB1c2UgU291cmNlUG9ydCBhbmQgU291cmNlQ2hhbm5lbCBoZXJlLCBiZWNhdXNlIHRoZSBjb3VudGVycGFydHkKLy8gY2hhaW4gd291bGQgaGF2ZSBwcmVmaXhlZCB3aXRoIERlc3RQb3J0IGFuZCBEZXN0Q2hhbm5lbCB3aGVuIG9yaWdpbmFsbHkKLy8gcmVjZWl2aW5nIHRoaXMgY29pbiBhcyBzZWVuIGluIHRoZSAmcXVvdDtzZW5kZXIgY2hhaW4gaXMgdGhlIHNvdXJjZSZxdW90OyBjb25kaXRpb24uCmlmIFJlY2VpdmVyQ2hhaW5Jc1NvdXJjZShwYWNrZXQuR2V0U291cmNlUG9ydCgpLCBwYWNrZXQuR2V0U291cmNlQ2hhbm5lbCgpLCBkYXRhLkRlbm9tKSB7CiAgLy8gc2VuZGVyIGNoYWluIGlzIG5vdCB0aGUgc291cmNlLCB1bmVzY3JvdyB0b2tlbnMKCiAgLy8gcmVtb3ZlIHByZWZpeCBhZGRlZCBieSBzZW5kZXIgY2hhaW4KICB2b3VjaGVyUHJlZml4IDo9IHR5cGVzLkdldERlbm9tUHJlZml4KHBhY2tldC5HZXRTb3VyY2VQb3J0KCksIHBhY2tldC5HZXRTb3VyY2VDaGFubmVsKCkpCiAgdW5wcmVmaXhlZERlbm9tIDo9IGRhdGEuRGVub21bbGVuKHZvdWNoZXJQcmVmaXgpOl0KICB0b2tlbiA6PSBzZGsuTmV3Q29pbih1bnByZWZpeGVkRGVub20sIHNkay5OZXdJbnRGcm9tVWludDY0KGRhdGEuQW1vdW50KSkKCiAgLy8gdW5lc2Nyb3cgdG9rZW5zCiAgZXNjcm93QWRkcmVzcyA6PSB0eXBlcy5HZXRFc2Nyb3dBZGRyZXNzKHBhY2tldC5HZXREZXN0UG9ydCgpLCBwYWNrZXQuR2V0RGVzdENoYW5uZWwoKSkKICByZXR1cm4gay5iYW5rS2VlcGVyLlNlbmRDb2lucyhjdHgsIGVzY3Jvd0FkZHJlc3MsIHJlY2VpdmVyLCBzZGsuTmV3Q29pbnModG9rZW4pKQp9CgovLyBzZW5kZXIgY2hhaW4gaXMgdGhlIHNvdXJjZSwgbWludCB2b3VjaGVycwoKLy8gc2luY2UgU2VuZFBhY2tldCBkaWQgbm90IHByZWZpeCB0aGUgZGVub21pbmF0aW9uLCB3ZSBtdXN0IHByZWZpeCBkZW5vbWluYXRpb24gaGVyZQpzb3VyY2VQcmVmaXggOj0gdHlwZXMuR2V0RGVub21QcmVmaXgocGFja2V0LkdldERlc3RQb3J0KCksIHBhY2tldC5HZXREZXN0Q2hhbm5lbCgpKQovLyBOT1RFOiBzb3VyY2VQcmVmaXggY29udGFpbnMgdGhlIHRyYWlsaW5nICZxdW90Oy8mcXVvdDsKcHJlZml4ZWREZW5vbSA6PSBzb3VyY2VQcmVmaXggKyBkYXRhLkRlbm9tCgovLyBjb25zdHJ1Y3QgdGhlIGRlbm9taW5hdGlvbiB0cmFjZSBmcm9tIHRoZSBmdWxsIHJhdyBkZW5vbWluYXRpb24KZGVub21UcmFjZSA6PSB0eXBlcy5QYXJzZURlbm9tVHJhY2UocHJlZml4ZWREZW5vbSkKCi8vIHNldCB0aGUgdmFsdWUgdG8gdGhlIGxvb2t1cCB0YWJsZSBpZiBub3Qgc3RvcmVkIGFscmVhZHkKdHJhY2VIYXNoIDo9IGRlbm9tVHJhY2UuSGFzaCgpCmlmICFrLkhhc0Rlbm9tVHJhY2UoY3R4LCB0cmFjZUhhc2gpIHsKICBrLlNldERlbm9tVHJhY2UoY3R4LCB0cmFjZUhhc2gsIGRlbm9tVHJhY2UpCn0KCnZvdWNoZXJEZW5vbSA6PSBkZW5vbVRyYWNlLklCQ0Rlbm9tKCkKdm91Y2hlciA6PSBzZGsuTmV3Q29pbih2b3VjaGVyRGVub20sIHNkay5OZXdJbnRGcm9tVWludDY0KGRhdGEuQW1vdW50KSkKCi8vIG1pbnQgbmV3IHRva2VucyBpZiB0aGUgc291cmNlIG9mIHRoZSB0cmFuc2ZlciBpcyB0aGUgc2FtZSBjaGFpbgppZiBlcnIgOj0gay5iYW5rS2VlcGVyLk1pbnRDb2lucygKICBjdHgsIHR5cGVzLk1vZHVsZU5hbWUsIHNkay5OZXdDb2lucyh2b3VjaGVyKSwKKTsgZXJyICE9IG5pbCB7CiAgcmV0dXJuIGVycgp9CgovLyBzZW5kIHRvIHJlY2VpdmVyCnJldHVybiBrLmJhbmtLZWVwZXIuU2VuZENvaW5zRnJvbU1vZHVsZVRvQWNjb3VudCgKICBjdHgsIHR5cGVzLk1vZHVsZU5hbWUsIHJlY2VpdmVyLCBzZGsuTmV3Q29pbnModm91Y2hlciksCikK"}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyBOZXdEZW5vbVRyYWNlRnJvbVJhd0Rlbm9tKGRlbm9tIHN0cmluZykgRGVub21UcmFjZXsKICBkZW5vbVNwbGl0IDo9IHN0cmluZ3MuU3BsaXQoZGVub20sICZxdW90Oy8mcXVvdDspCiAgdHJhY2UgOj0gJnF1b3Q7JnF1b3Q7CiAgaWYgbGVuKGRlbm9tU3BsaXQpICZndDsgMSB7CiAgICB0cmFjZSA9IHN0cmluZ3MuSm9pbihkZW5vbVNwbGl0WzpsZW4oZGVub21TcGxpdCktMV0sICZxdW90Oy8mcXVvdDspCiAgfQogIHJldHVybiBEZW5vbVRyYWNlewogICAgQmFzZURlbm9tOiBkZW5vbVNwbGl0W2xlbihkZW5vbVNwbGl0KS0xXSwKICAgIFRyYWNlOiAgICAgdHJhY2UsCiAgfQp9Cg=="}}),e._v(" "),t("p",[e._v("One final remark is that the "),t("code",[e._v("FungibleTokenPacketData")]),e._v(" will remain the same, i.e with the prefixed full denomination, since the receiving chain may not be an SDK-based chain.")]),e._v(" "),t("h3",{attrs:{id:"coin-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coin-changes"}},[e._v("#")]),e._v(" Coin Changes")]),e._v(" "),t("p",[e._v("The coin denomination validation will need to be updated to reflect these changes. In particular, the denomination validation\nfunction will now:")]),e._v(" "),t("ul",[t("li",[e._v("Accept slash separators ("),t("code",[e._v('"/"')]),e._v(") and uppercase characters (due to the "),t("code",[e._v("HexBytes")]),e._v(" format)")]),e._v(" "),t("li",[e._v("Bump the maximum character length to 128, as the hex representation used by Tendermint's\n"),t("code",[e._v("HexBytes")]),e._v(" type contains 64 characters.")])]),e._v(" "),t("p",[e._v("Additional validation logic, such as verifying the length of the hash, the  may be added to the bank module in the future if the "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/6755",target:"_blank",rel:"noopener noreferrer"}},[e._v("custom base denomination validation"),t("OutboundLink")],1),e._v(" is integrated into the SDK.")]),e._v(" "),t("h3",{attrs:{id:"positive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),t("ul",[t("li",[e._v("Clearer separation of the source tracing behaviour of the token (transfer prefix) from the original\n"),t("code",[e._v("Coin")]),e._v(" denomination")]),e._v(" "),t("li",[e._v("Consistent validation of "),t("code",[e._v("Coin")]),e._v(" fields (i.e no special characters, fixed max length)")]),e._v(" "),t("li",[e._v("Cleaner "),t("code",[e._v("Coin")]),e._v(" and standard denominations for IBC")]),e._v(" "),t("li",[e._v("No additional fields to SDK "),t("code",[e._v("Coin")])])]),e._v(" "),t("h3",{attrs:{id:"negative"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),t("ul",[t("li",[e._v("Store each set of tracing denomination identifiers on the "),t("code",[e._v("ibc-transfer")]),e._v(" module store")]),e._v(" "),t("li",[e._v("Clients will have to fetch the base denomination every time they receive a new relayed fungible token over IBC. This can be mitigated using a map/cache for already seen hashes on the client side. Other forms of mitigation, would be opening a websocket connection subscribe to incoming events.")])]),e._v(" "),t("h3",{attrs:{id:"neutral"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),t("ul",[t("li",[e._v("Slight difference with the ICS20 spec")]),e._v(" "),t("li",[e._v("Additional validation logic for IBC coins on the "),t("code",[e._v("ibc-transfer")]),e._v(" module")]),e._v(" "),t("li",[e._v("Additional genesis fields")]),e._v(" "),t("li",[e._v("Slightly increases the gas usage on cross-chain transfers due to access to the store. This should\nbe inter-block cached if transfers are frequent.")])]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS 20 - Fungible token transfer"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/6755",target:"_blank",rel:"noopener noreferrer"}},[e._v("Custom Coin Denomination validation"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);n.default=o.exports}}]);