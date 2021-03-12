(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{685:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adr-033-protobuf-based-inter-module-communication"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adr-033-protobuf-based-inter-module-communication"}},[e._v("#")]),e._v(" ADR 033: Protobuf-based Inter-Module Communication")]),e._v(" "),o("h2",{attrs:{id:"changelog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),o("ul",[o("li",[e._v("2020-10-05: Initial Draft")])]),e._v(" "),o("h2",{attrs:{id:"status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),o("p",[e._v("Proposed")]),e._v(" "),o("h2",{attrs:{id:"abstract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),o("p",[e._v("This ADR introduces a system for permissioned inter-module communication leveraging the protobuf "),o("code",[e._v("Query")]),e._v(" and "),o("code",[e._v("Msg")]),e._v("\nservice definitions defined in "),o("RouterLink",{attrs:{to:"/architecture/adr-021-protobuf-query-encoding.html"}},[e._v("ADR 021")]),e._v(" and\n"),o("RouterLink",{attrs:{to:"/architecture/adr-031-msg-service.html"}},[e._v("ADR 031")]),e._v(" which provides:")],1),e._v(" "),o("ul",[o("li",[e._v("stable protobuf based module interfaces to potentially later replace the keeper paradigm")]),e._v(" "),o("li",[e._v("stronger inter-module object capabilities (OCAPs) guarantees")]),e._v(" "),o("li",[e._v("module accounts and sub-account authorization")])]),e._v(" "),o("h2",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",[e._v("In the current Cosmos SDK documentation on the "),o("RouterLink",{attrs:{to:"/docs/core/ocap.html"}},[e._v("Object-Capability Model")]),e._v(", it is stated that:")],1),e._v(" "),o("blockquote",[o("p",[e._v("We assume that a thriving ecosystem of Cosmos-SDK modules that are easy to compose into a blockchain application will contain faulty or malicious modules.")])]),e._v(" "),o("p",[e._v("There is currently not a thriving ecosystem of Cosmos SDK modules. We hypothesize that this is in part due to:")]),e._v(" "),o("ol",[o("li",[e._v("lack of a stable v1.0 Cosmos SDK to build modules off of. Module interfaces are changing, sometimes dramatically, from\npoint release to point release, often for good reasons, but this does not create a stable foundation to build on.")]),e._v(" "),o("li",[e._v("lack of a properly implemented object capability or even object-oriented encapsulation system which makes refactors\nof module keeper interfaces inevitable because the current interfaces are poorly constrained.")])]),e._v(" "),o("h3",{attrs:{id:"x-bank-case-study"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#x-bank-case-study"}},[e._v("#")]),e._v(" "),o("code",[e._v("x/bank")]),e._v(" Case Study")]),e._v(" "),o("p",[e._v("Currently the "),o("code",[e._v("x/bank")]),e._v(" keeper gives pretty much unrestricted access to any module which references it. For instance, the\n"),o("code",[e._v("SetBalance")]),e._v(" method allows the caller to set the balance of any account to anything, bypassing even proper tracking of supply.")]),e._v(" "),o("p",[e._v("There appears to have been some later attempts to implement some semblance of OCAPs using module-level minting, staking\nand burning permissions. These permissions allow a module to mint, burn or delegate tokens with reference to the module’s\nown account. These permissions are actually stored as a "),o("code",[e._v("[]string")]),e._v(" array on the "),o("code",[e._v("ModuleAccount")]),e._v(" type in state.")]),e._v(" "),o("p",[e._v("However, these permissions don’t really do much. They control what modules can be referenced in the "),o("code",[e._v("MintCoins")]),e._v(",\n"),o("code",[e._v("BurnCoins")]),e._v(" and "),o("code",[e._v("DelegateCoins***")]),e._v(" methods, but for one there is no unique object capability token that controls access —\njust a simple string. So the "),o("code",[e._v("x/upgrade")]),e._v(" module could mint tokens for the "),o("code",[e._v("x/staking")]),e._v(" module simple by calling\n"),o("code",[e._v("MintCoins(“staking”)")]),e._v(". Furthermore, all modules which have access to these keeper methods, also have access to\n"),o("code",[e._v("SetBalance")]),e._v(" negating any other attempt at OCAPs and breaking even basic object-oriented encapsulation.")]),e._v(" "),o("h2",{attrs:{id:"decision"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),o("p",[e._v("Based on "),o("RouterLink",{attrs:{to:"/architecture/adr-021-protobuf-query-encoding.html"}},[e._v("ADR-021")]),e._v(" and "),o("RouterLink",{attrs:{to:"/architecture/adr-031-msg-service.html"}},[e._v("ADR-031")]),e._v(", we introduce the\nInter-Module Communication framework for secure module authorization and OCAPs.\nWhen implemented, this could also serve as an alternative to the existing paradigm of passing keepers between\nmodules. The approach outlined here-in is intended to form the basis of a Cosmos SDK v1.0 that provides the necessary\nstability and encapsulation guarantees that allow a thriving module ecosystem to emerge.")],1),e._v(" "),o("p",[e._v("Of particular note — the decision is to "),o("em",[e._v("enable")]),e._v(" this functionality for modules to adopt at their own discretion.\nProposals to migrate existing modules to this new paradigm will have to be a separate conversation, potentially\naddressed as amendments to this ADR.")]),e._v(" "),o("h3",{attrs:{id:"new-keeper-paradigm"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-keeper-paradigm"}},[e._v("#")]),e._v(' New "Keeper" Paradigm')]),e._v(" "),o("p",[e._v("In "),o("RouterLink",{attrs:{to:"/architecture/adr-021-protobuf-query-encoding.html"}},[e._v("ADR 021")]),e._v(", a mechanism for using protobuf service definitions to define queriers\nwas introduced and in "),o("RouterLink",{attrs:{to:"/architecture/adr-031-msg-service.html"}},[e._v("ADR 31")]),e._v(", a mechanism for using protobuf service to define "),o("code",[e._v("Msg")]),e._v("s was added.\nProtobuf service definitions generate two golang interfaces representing the client and server sides of a service plus\nsome helper code. Here is a minimal example for the bank "),o("code",[e._v("cosmos.bank.Msg/Send")]),e._v(" message type:")],1),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBiYW5rCgp0eXBlIE1zZ0NsaWVudCBpbnRlcmZhY2UgewoJU2VuZChjb250ZXh0LkNvbnRleHQsICpNc2dTZW5kLCBvcHRzIC4uLmdycGMuQ2FsbE9wdGlvbikgKCpNc2dTZW5kUmVzcG9uc2UsIGVycm9yKQp9Cgp0eXBlIE1zZ1NlcnZlciBpbnRlcmZhY2UgewoJU2VuZChjb250ZXh0LkNvbnRleHQsICpNc2dTZW5kKSAoKk1zZ1NlbmRSZXNwb25zZSwgZXJyb3IpCn0K"}}),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/architecture/adr-021-protobuf-query-encoding.html"}},[e._v("ADR 021")]),e._v(" and "),o("RouterLink",{attrs:{to:"/architecture/adr-031-msg-service.html"}},[e._v("ADR 31")]),e._v(" specifies how modules can implement the generated "),o("code",[e._v("QueryServer")]),e._v("\nand "),o("code",[e._v("MsgServer")]),e._v(" interfaces as replacements for the legacy queriers and "),o("code",[e._v("Msg")]),e._v(" handlers respectively.")],1),e._v(" "),o("p",[e._v("In this ADR we explain how modules can make queries and send "),o("code",[e._v("Msg")]),e._v("s to other modules using the generated "),o("code",[e._v("QueryClient")]),e._v("\nand "),o("code",[e._v("MsgClient")]),e._v(" interfaces and propose this mechanism as a replacement for the existing "),o("code",[e._v("Keeper")]),e._v(" paradigm. To be clear,\nthis ADR does not necessitate the creation of new protobuf definitions or services. Rather, it leverages the same proto\nbased service interfaces already used by clients for inter-module communication.")]),e._v(" "),o("p",[e._v("Using this "),o("code",[e._v("QueryClient")]),e._v("/"),o("code",[e._v("MsgClient")]),e._v(" approach has the following key benefits over exposing keepers to external modules:")]),e._v(" "),o("ol",[o("li",[e._v("Protobuf types are checked for breaking changes using "),o("a",{attrs:{href:"https://buf.build/docs/breaking-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("buf"),o("OutboundLink")],1),e._v(" and because of\nthe way protobuf is designed this will give us strong backwards compatibility guarantees while allowing for forward\nevolution.")]),e._v(" "),o("li",[e._v("The separation between the client and server interfaces will allow us to insert permission checking code in between\nthe two which checks if one module is authorized to send the specified "),o("code",[e._v("Msg")]),e._v(" to the other module providing a proper\nobject capability system (see below).")]),e._v(" "),o("li",[e._v("The router for inter-module communication gives us a convenient place to handle rollback of transactions,\nenabling atomicy of operations ("),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/8030",target:"_blank",rel:"noopener noreferrer"}},[e._v("currently a problem"),o("OutboundLink")],1),e._v("). Any failure within a module-to-module call would result in a failure of the entire\ntransaction")])]),e._v(" "),o("p",[e._v("This mechanism has the added benefits of:")]),e._v(" "),o("ul",[o("li",[e._v("reducing boilerplate through code generation, and")]),e._v(" "),o("li",[e._v("allowing for modules in other languages either via a VM like CosmWasm or sub-processes using gRPC")])]),e._v(" "),o("h3",{attrs:{id:"inter-module-communication"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#inter-module-communication"}},[e._v("#")]),e._v(" Inter-module Communication")]),e._v(" "),o("p",[e._v("To use the "),o("code",[e._v("Client")]),e._v(" generated by the protobuf compiler we need a "),o("code",[e._v("grpc.ClientConn")]),e._v(" "),o("a",{attrs:{href:"https://github.com/regen-network/protobuf/blob/cosmos/grpc/types.go#L12",target:"_blank",rel:"noopener noreferrer"}},[e._v("interface"),o("OutboundLink")],1),e._v("\nimplementation. For this we introduce\na new type, "),o("code",[e._v("ModuleKey")]),e._v(", which implements the "),o("code",[e._v("grpc.ClientConn")]),e._v(" interface. "),o("code",[e._v("ModuleKey")]),e._v(' can be thought of as the "private\nkey" corresponding to a module account, where authentication is provided through use of a special '),o("code",[e._v("Invoker()")]),e._v(" function,\ndescribed in more detail below.")]),e._v(" "),o("p",[e._v("Blockchain users (external clients) use their account's private key to sign transactions containing "),o("code",[e._v("Msg")]),e._v("s where they are listed as signers (each\nmessage specifies required signers with "),o("code",[e._v("Msg.GetSigner")]),e._v("). The authentication checks is performed by "),o("code",[e._v("AnteHandler")]),e._v(".")]),e._v(" "),o("p",[e._v("Here, we extend this process, by allowing modules to be identified in "),o("code",[e._v("Msg.GetSigners")]),e._v(". When a module wants to trigger the execution a "),o("code",[e._v("Msg")]),e._v(" in another module,\nits "),o("code",[e._v("ModuleKey")]),e._v(" acts as the sender (through the "),o("code",[e._v("ClientConn")]),e._v(" interface we describe below) and is set as a sole \"signer\". It's worth to note\nthat we don't use any cryptographic signature in this case.\nFor example, module "),o("code",[e._v("A")]),e._v(" could use its "),o("code",[e._v("A.ModuleKey")]),e._v(" to create "),o("code",[e._v("MsgSend")]),e._v(" object for "),o("code",[e._v("/cosmos.bank.Msg/Send")]),e._v(" transaction. "),o("code",[e._v("MsgSend")]),e._v(" validation\nwill assure that the "),o("code",[e._v("from")]),e._v(" account ("),o("code",[e._v("A.ModuleKey")]),e._v(" in this case) is the signer.")]),e._v(" "),o("p",[e._v("Here's an example of a hypothetical module "),o("code",[e._v("foo")]),e._v(" interacting with "),o("code",[e._v("x/bank")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBmb28KCgp0eXBlIEZvb01zZ1NlcnZlciB7CiAgLy8gLi4uCgogIGJhbmtRdWVyeSBiYW5rLlF1ZXJ5Q2xpZW50CiAgYmFua01zZyAgIGJhbmsuTXNnQ2xpZW50Cn0KCmZ1bmMgTmV3Rm9vTXNnU2VydmVyKG1vZHVsZUtleSBSb290TW9kdWxlS2V5LCAuLi4pIEZvb01zZ1NlcnZlciB7CiAgLy8gLi4uCgogIHJldHVybiBGb29Nc2dTZXJ2ZXIgewogICAgLy8gLi4uCiAgICBtb2RvdWxlS2V5OiBtb2R1bGVLZXksCiAgICBiYW5rUXVlcnk6IGJhbmsuTmV3UXVlcnlDbGllbnQobW9kdWxlS2V5KSwKICAgIGJhbmtNc2c6IGJhbmsuTmV3TXNnQ2xpZW50KG1vZHVsZUtleSksCiAgfQp9CgpmdW5jIChmb28gKkZvb01zZ1NlcnZlcikgQmFyKGN0eCBjb250ZXh0LkNvbnRleHQsIHJlcSAqTXNnQmFyUmVxdWVzdCkgKCpNc2dCYXJSZXNwb25zZSwgZXJyb3IpIHsKICBiYWxhbmNlLCBlcnIgOj0gZm9vLmJhbmtRdWVyeS5CYWxhbmNlKCZhbXA7YmFuay5RdWVyeUJhbGFuY2VSZXF1ZXN0e0FkZHJlc3M6IGZvb01zZ1NlcnZlci5tb2R1bGVLZXkuQWRkcmVzcygpLCBEZW5vbTogJnF1b3Q7Zm9vJnF1b3Q7fSkKCiAgLi4uCgogIHJlcywgZXJyIDo9IGZvby5iYW5rTXNnLlNlbmQoY3R4LCAmYW1wO2JhbmsuTXNnU2VuZFJlcXVlc3R7RnJvbUFkZHJlc3M6IGZvb01zZ1NlcnZlci5tb2R1bGVLZXkuQWRkcmVzcygpLCAuLi59KQoKICAuLi4KfQo="}}),e._v(" "),o("p",[e._v("This design is also intended to be extensible to cover use cases of more fine grained permissioning like minting by\ndenom prefix being restricted to certain modules (as discussed in\n"),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/7459#discussion_r529545528",target:"_blank",rel:"noopener noreferrer"}},[e._v("#7459"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("h3",{attrs:{id:"modulekeys-and-moduleids"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modulekeys-and-moduleids"}},[e._v("#")]),e._v(" "),o("code",[e._v("ModuleKey")]),e._v("s and "),o("code",[e._v("ModuleID")]),e._v("s")]),e._v(" "),o("p",[e._v("A "),o("code",[e._v("ModuleKey")]),e._v(' can be thought of as a "private key" for a module account and a '),o("code",[e._v("ModuleID")]),e._v(' can be thought of as the\ncorresponding "public key". From the '),o("RouterLink",{attrs:{to:"/architecture/adr-028-public-key-addresses.html"}},[e._v("ADR 028")]),e._v(", modules can have both a root module account and any number of sub-accounts\nor derived accounts that can be used for different pools (ex. staking pools) or managed accounts (ex. group\naccounts). We can also think of module sub-accounts as similar to derived keys - there is a root key and then some\nderivation path. "),o("code",[e._v("ModuleID")]),e._v(' is a simple struct which contains the module name and optional "derivation" path,\nand forms its address based on the '),o("code",[e._v("AddressHash")]),e._v(" method from "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/architecture/adr-028-public-key-addresses.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("the ADR-028"),o("OutboundLink")],1),e._v(":")],1),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNb2R1bGVJRCBzdHJ1Y3QgewogIE1vZHVsZU5hbWUgc3RyaW5nCiAgUGF0aCBbXWJ5dGUKfQoKZnVuYyAoa2V5IE1vZHVsZUlEKSBBZGRyZXNzKCkgW11ieXRlIHsKICByZXR1cm4gQWRkcmVzc0hhc2goa2V5Lk1vZHVsZU5hbWUsIGtleS5QYXRoKQp9Cg=="}}),e._v(" "),o("p",[e._v("In addition to being able to generate a "),o("code",[e._v("ModuleID")]),e._v(" and address, a "),o("code",[e._v("ModuleKey")]),e._v(" contains a special function called\n"),o("code",[e._v("Invoker")]),e._v(" which is the key to safe inter-module access. The "),o("code",[e._v("Invoker")]),e._v(" creates an "),o("code",[e._v("InvokeFn")]),e._v(" closure which is used as an "),o("code",[e._v("Invoke")]),e._v(" method in\nthe "),o("code",[e._v("grpc.ClientConn")]),e._v(" interface and under the hood is able to route messages to the appropriate "),o("code",[e._v("Msg")]),e._v(" and "),o("code",[e._v("Query")]),e._v(" handlers\nperforming appropriate security checks on "),o("code",[e._v("Msg")]),e._v("s. This allows for even safer inter-module access than keeper's whose\nprivate member variables could be manipulated through reflection. Golang does not support reflection on a function\nclosure's captured variables and direct manipulation of memory would be needed for a truly malicious module to bypass\nthe "),o("code",[e._v("ModuleKey")]),e._v(" security.")]),e._v(" "),o("p",[e._v("The two "),o("code",[e._v("ModuleKey")]),e._v(" types are "),o("code",[e._v("RootModuleKey")]),e._v(" and "),o("code",[e._v("DerivedModuleKey")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBJbnZva2VyIGZ1bmMoY2FsbEluZm8gQ2FsbEluZm8pIGZ1bmMoY3R4IGNvbnRleHQuQ29udGV4dCwgcmVxdWVzdCwgcmVzcG9uc2UgaW50ZXJmYWNle30sIG9wdHMgLi4uaW50ZXJmYWNle30pIGVycm9yCgp0eXBlIENhbGxJbmZvIHsKICBNZXRob2Qgc3RyaW5nCiAgQ2FsbGVyIE1vZHVsZUlECn0KCnR5cGUgUm9vdE1vZHVsZUtleSBzdHJ1Y3QgewogIG1vZHVsZU5hbWUgc3RyaW5nCiAgaW52b2tlciBJbnZva2VyCn0KCmZ1bmMgKHJtIFJvb3RNb2R1bGVLZXkpIERlcml2ZShwYXRoIFtdYnl0ZSkgRGVyaXZlZE1vZHVsZUtleSB7IC8qIC4uLiAqL30KCnR5cGUgRGVyaXZlZE1vZHVsZUtleSBzdHJ1Y3QgewogIG1vZHVsZU5hbWUgc3RyaW5nCiAgcGF0aCBbXWJ5dGUKICBpbnZva2VyIEludm9rZXIKfQo="}}),e._v(" "),o("p",[e._v("A module can get access to a "),o("code",[e._v("DerivedModuleKey")]),e._v(", using the "),o("code",[e._v("Derive(path []byte)")]),e._v(" method on "),o("code",[e._v("RootModuleKey")]),e._v(" and then\nwould use this key to authenticate "),o("code",[e._v("Msg")]),e._v("s from a sub-account. Ex:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBmb28KCmZ1bmMgKGZvb01zZ1NlcnZlciAqTXNnU2VydmVyKSBCYXIoY3R4IGNvbnRleHQuQ29udGV4dCwgcmVxICpNc2dCYXIpICgqTXNnQmFyUmVzcG9uc2UsIGVycm9yKSB7CiAgZGVyaXZlZEtleSA6PSBmb29Nc2dTZXJ2ZXIubW9kdWxlS2V5LkRlcml2ZShyZXEuU29tZVBhdGgpCiAgYmFua01zZ0NsaWVudCA6PSBiYW5rLk5ld01zZ0NsaWVudChkZXJpdmVkS2V5KQogIHJlcywgZXJyIDo9IGJhbmtNc2dDbGllbnQuQmFsYW5jZShjdHgsICZhbXA7YmFuay5Nc2dTZW5ke0Zyb21BZGRyZXNzOiBkZXJpdmVkS2V5LkFkZHJlc3MoKSwgLi4ufSkKICAuLi4KfQo="}}),e._v(" "),o("p",[e._v("In this way, a module can gain permissioned access to a root account and any number of sub-accounts and send\nauthenticated "),o("code",[e._v("Msg")]),e._v("s from these accounts. The "),o("code",[e._v("Invoker")]),e._v(" "),o("code",[e._v("callInfo.Caller")]),e._v(" parameter is used under the hood to\ndistinguish between different module accounts, but either way the function returned by "),o("code",[e._v("Invoker")]),e._v(" only allows "),o("code",[e._v("Msg")]),e._v("s\nfrom either the root or a derived module account to pass through.")]),e._v(" "),o("p",[e._v("Note that "),o("code",[e._v("Invoker")]),e._v(" itself returns a function closure based on the "),o("code",[e._v("CallInfo")]),e._v(" passed in. This will allow client implementations\nin the future that cache the invoke function for each method type avoiding the overhead of hash table lookup.\nThis would reduce the performance overhead of this inter-module communication method to the bare minimum required for\nchecking permissions.")]),e._v(" "),o("p",[e._v("To re-iterate, the closure only allows access to authorized calls. There is no access to anything else regardless of any\nname impersonation.")]),e._v(" "),o("p",[e._v("Below is a rough sketch of the implementation of "),o("code",[e._v("grpc.ClientConn.Invoke")]),e._v(" for "),o("code",[e._v("RootModuleKey")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoa2V5IFJvb3RNb2R1bGVLZXkpIEludm9rZShjdHggY29udGV4dC5Db250ZXh0LCBtZXRob2Qgc3RyaW5nLCBhcmdzLCByZXBseSBpbnRlcmZhY2V7fSwgb3B0cyAuLi5ncnBjLkNhbGxPcHRpb24pIGVycm9yIHsKICBmIDo9IGtleS5pbnZva2VyKENhbGxJbmZvIHtNZXRob2Q6IG1ldGhvZCwgQ2FsbGVyOiBNb2R1bGVJRCB7TW9kdWxlTmFtZToga2V5Lm1vZHVsZU5hbWV9fSkKICByZXR1cm4gZihjdHgsIGFyZ3MsIHJlcGx5KQp9Cg=="}}),e._v(" "),o("h3",{attrs:{id:"appmodule-wiring-and-requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#appmodule-wiring-and-requirements"}},[e._v("#")]),e._v(" "),o("code",[e._v("AppModule")]),e._v(" Wiring and Requirements")]),e._v(" "),o("p",[e._v("In "),o("RouterLink",{attrs:{to:"/architecture/adr-031-msg-service.html"}},[e._v("ADR 031")]),e._v(", the "),o("code",[e._v("AppModule.RegisterService(Configurator)")]),e._v(" method was introduced. To support\ninter-module communication, we extend the "),o("code",[e._v("Configurator")]),e._v(" interface to pass in the "),o("code",[e._v("ModuleKey")]),e._v(" and to allow modules to\nspecify their dependencies on other modules using "),o("code",[e._v("RequireServer()")]),e._v(":")],1),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBDb25maWd1cmF0b3IgaW50ZXJmYWNlIHsKICAgTXNnU2VydmVyKCkgZ3JwYy5TZXJ2ZXIKICAgUXVlcnlTZXJ2ZXIoKSBncnBjLlNlcnZlcgoKICAgTW9kdWxlS2V5KCkgTW9kdWxlS2V5CiAgIFJlcXVpcmVTZXJ2ZXIobXNnU2VydmVyIGludGVyZmFjZXt9KQp9Cg=="}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("ModuleKey")]),e._v(" is passed to modules in the "),o("code",[e._v("RegisterService")]),e._v(" method itself so that "),o("code",[e._v("RegisterServices")]),e._v(" serves as a single\nentry point for configuring module services. This is intended to also have the side-effect of greatly reducing boilerplate in\n"),o("code",[e._v("app.go")]),e._v(". For now, "),o("code",[e._v("ModuleKey")]),e._v("s will be created based on "),o("code",[e._v("AppModuleBasic.Name()")]),e._v(", but a more flexible system may be\nintroduced in the future. The "),o("code",[e._v("ModuleManager")]),e._v(" will handle creation of module accounts behind the scenes.")]),e._v(" "),o("p",[e._v("Because modules do not get direct access to each other anymore, modules may have unfulfilled dependencies. To make sure\nthat module dependencies are resolved at startup, the "),o("code",[e._v("Configurator.RequireServer")]),e._v(" method should be added. The "),o("code",[e._v("ModuleManager")]),e._v("\nwill make sure that all dependencies declared with "),o("code",[e._v("RequireServer")]),e._v(" can be resolved before the app starts. An example\nmodule "),o("code",[e._v("foo")]),e._v(" could declare it's dependency on "),o("code",[e._v("x/bank")]),e._v(" like this:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBmb28KCmZ1bmMgKGFtIEFwcE1vZHVsZSkgUmVnaXN0ZXJTZXJ2aWNlcyhjZmcgQ29uZmlndXJhdG9yKSB7CiAgY2ZnLlJlcXVpcmVTZXJ2ZXIoKCpiYW5rLlF1ZXJ5U2VydmVyKShuaWwpKQogIGNmZy5SZXF1aXJlU2VydmVyKCgqYmFuay5Nc2dTZXJ2ZXIpKG5pbCkpCn0K"}}),e._v(" "),o("h3",{attrs:{id:"security-considerations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security Considerations")]),e._v(" "),o("p",[e._v("In addition to checking for "),o("code",[e._v("ModuleKey")]),e._v(" permissions, a few additional security precautions will need to be taken by\nthe underlying router infrastructure.")]),e._v(" "),o("h4",{attrs:{id:"recursion-and-re-entry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#recursion-and-re-entry"}},[e._v("#")]),e._v(" Recursion and Re-entry")]),e._v(" "),o("p",[e._v("Recursive or re-entrant method invocations pose a potential security threat. This can be a problem if Module A\ncalls Module B and Module B calls module A again in the same call.")]),e._v(" "),o("p",[e._v("One basic way for the router system to deal with this is to maintain a call stack which prevents a module from\nbeing referenced more than once in the call stack so that there is no re-entry. A "),o("code",[e._v("map[string]interface{}")]),e._v(" table\nin the router could be used to perform this security check.")]),e._v(" "),o("h4",{attrs:{id:"queries"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#queries"}},[e._v("#")]),e._v(" Queries")]),e._v(" "),o("p",[e._v("Queries in Cosmos SDK are generally un-permissioned so allowing one module to query another module should not pose\nany major security threats assuming basic precautions are taken. The basic precaution that the router system will\nneed to take is making sure that the "),o("code",[e._v("sdk.Context")]),e._v(" passed to query methods does not allow writing to the store. This\ncan be done for now with a "),o("code",[e._v("CacheMultiStore")]),e._v(" as is currently done for "),o("code",[e._v("BaseApp")]),e._v(" queries.")]),e._v(" "),o("h3",{attrs:{id:"internal-methods"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#internal-methods"}},[e._v("#")]),e._v(" Internal Methods")]),e._v(" "),o("p",[e._v("In many cases, we may wish for modules to call methods on other modules which are not exposed to clients at all. For this\npurpose, we add the "),o("code",[e._v("InternalServer")]),e._v(" method to "),o("code",[e._v("Configurator")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBDb25maWd1cmF0b3IgaW50ZXJmYWNlIHsKICAgTXNnU2VydmVyKCkgZ3JwYy5TZXJ2ZXIKICAgUXVlcnlTZXJ2ZXIoKSBncnBjLlNlcnZlcgogICBJbnRlcm5hbFNlcnZlcigpIGdycGMuU2VydmVyCn0K"}}),e._v(" "),o("p",[e._v("As an example, x/slashing's Slash must call x/staking's Slash, but we don't want to expose x/staking's Slash to end users\nand clients.")]),e._v(" "),o("p",[e._v("Internal protobuf services will be defined in a corresponding "),o("code",[e._v("internal.proto")]),e._v(" file in the given module's\nproto package.")]),e._v(" "),o("p",[e._v("Services registered against "),o("code",[e._v("InternalServer")]),e._v(" will be callable from other modules but not by external clients.")]),e._v(" "),o("p",[e._v("An alternative solution to internal-only methods could involve hooks / plugins as discussed "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/7459#issuecomment-733807753",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".\nA more detailed evaluation of a hooks / plugin system will be addressed later in follow-ups to this ADR or as a separate\nADR.")]),e._v(" "),o("h3",{attrs:{id:"authorization"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[e._v("#")]),e._v(" Authorization")]),e._v(" "),o("p",[e._v("By default, the inter-module router requires that messages are sent by the first signer returned by "),o("code",[e._v("GetSigners")]),e._v(". The\ninter-module router should also accept authorization middleware such as that provided by "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/architecture/adr-030-authz-module.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 030"),o("OutboundLink")],1),e._v('.\nThis middleware will allow accounts to otherwise specific module accounts to perform actions on their behalf.\nAuthorization middleware should take into account the need to grant certain modules effectively "admin" privileges to\nother modules. This will be addressed in separate ADRs or updates to this ADR.')]),e._v(" "),o("h3",{attrs:{id:"future-work"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#future-work"}},[e._v("#")]),e._v(" Future Work")]),e._v(" "),o("p",[e._v("Other future improvements may include:")]),e._v(" "),o("ul",[o("li",[e._v("custom code generation that:\n"),o("ul",[o("li",[e._v("simplifies interfaces (ex. generates code with "),o("code",[e._v("sdk.Context")]),e._v(" instead of "),o("code",[e._v("context.Context")]),e._v(")")]),e._v(" "),o("li",[e._v("optimizes inter-module calls - for instance caching resolved methods after first invocation")])])]),e._v(" "),o("li",[e._v("combining "),o("code",[e._v("StoreKey")]),e._v("s and "),o("code",[e._v("ModuleKey")]),e._v("s into a single interface so that modules have a single OCAPs handle")]),e._v(" "),o("li",[e._v("code generation which makes inter-module communication more performant")]),e._v(" "),o("li",[e._v("decoupling "),o("code",[e._v("ModuleKey")]),e._v(" creation from "),o("code",[e._v("AppModuleBasic.Name()")]),e._v(" so that app's can override root module account names")]),e._v(" "),o("li",[e._v("inter-module hooks and plugins")])]),e._v(" "),o("h2",{attrs:{id:"alternatives"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alternatives"}},[e._v("#")]),e._v(" Alternatives")]),e._v(" "),o("h3",{attrs:{id:"msgservices-vs-x-capability"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#msgservices-vs-x-capability"}},[e._v("#")]),e._v(" MsgServices vs "),o("code",[e._v("x/capability")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("x/capability")]),e._v(" module does provide a proper object-capability implementation that can be used by any module in the\nSDK and could even be used for inter-module OCAPs as described in "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/5931",target:"_blank",rel:"noopener noreferrer"}},[e._v("#5931"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("The advantages of the approach described in this ADR are mostly around how it integrates with other parts of the SDK,\nspecifically:")]),e._v(" "),o("ul",[o("li",[e._v("protobuf so that:\n"),o("ul",[o("li",[e._v("code generation of interfaces can be leveraged for a better dev UX")]),e._v(" "),o("li",[e._v("module interfaces are versioned and checked for breakage using "),o("a",{attrs:{href:"https://docs.buf.build/breaking-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("buf"),o("OutboundLink")],1)])])]),e._v(" "),o("li",[e._v("sub-module accounts as per ADR 028")]),e._v(" "),o("li",[e._v("the general "),o("code",[e._v("Msg")]),e._v(" passing paradigm and the way signers are specified by "),o("code",[e._v("GetSigners")])])]),e._v(" "),o("p",[e._v("Also, this is a complete replacement for keepers and could be applied to "),o("em",[e._v("all")]),e._v(" inter-module communication whereas the\n"),o("code",[e._v("x/capability")]),e._v(" approach in #5931 would need to be applied method by method.")]),e._v(" "),o("h2",{attrs:{id:"consequences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),o("h3",{attrs:{id:"backwards-compatibility"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),o("p",[e._v("This ADR is intended to provide a pathway to a scenario where there is greater long term compatibility between modules.\nIn the short-term, this will likely result in breaking certain "),o("code",[e._v("Keeper")]),e._v(" interfaces which are too permissive and/or\nreplacing "),o("code",[e._v("Keeper")]),e._v(" interfaces altogether.")]),e._v(" "),o("h3",{attrs:{id:"positive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),o("ul",[o("li",[e._v("an alternative to keepers which can more easily lead to stable inter-module interfaces")]),e._v(" "),o("li",[e._v("proper inter-module OCAPs")]),e._v(" "),o("li",[e._v("improved module developer DevX, as commented on by several particpants on\n"),o("a",{attrs:{href:"https://hackmd.io/E0wxxOvRQ5qVmTf6N_k84Q",target:"_blank",rel:"noopener noreferrer"}},[e._v("Architecture Review Call, Dec 3"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("lays the groundwork for what can be a greatly simplified "),o("code",[e._v("app.go")])]),e._v(" "),o("li",[e._v("router can be setup to enforce atomic transactions for moule-to-module calls")])]),e._v(" "),o("h3",{attrs:{id:"negative"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),o("ul",[o("li",[e._v("modules which adopt this will need significant refactoring")])]),e._v(" "),o("h3",{attrs:{id:"neutral"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),o("h2",{attrs:{id:"test-cases-optional"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#test-cases-optional"}},[e._v("#")]),e._v(" Test Cases [optional]")]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/architecture/adr-021-protobuf-query-encoding.html"}},[e._v("ADR 021")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/architecture/adr-031-msg-service.html"}},[e._v("ADR 031")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/architecture/adr-028-public-key-addresses.html"}},[e._v("ADR 028")])],1),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/7105",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 030 draft"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/docs/core/ocap.html"}},[e._v("Object-Capability Model")])],1)])],1)}),[],!1,null,null,null);t.default=s.exports}}]);