(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{735:function(e,t,o){"use strict";o.r(t);var s=o(1),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adr-002-sdk-documentation-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adr-002-sdk-documentation-structure"}},[e._v("#")]),e._v(" ADR 002: SDK Documentation Structure")]),e._v(" "),o("h2",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",[e._v("There is a need for a scalable structure of the SDK documentation. Current documentation includes a lot of non-related SDK material, is difficult to maintain and hard to follow as a user.")]),e._v(" "),o("p",[e._v("Ideally, we would have:")]),e._v(" "),o("ul",[o("li",[e._v("All docs related to dev frameworks or tools live in their respective github repos (sdk repo would contain sdk docs, hub repo would contain hub docs, lotion repo would contain lotion docs, etc.)")]),e._v(" "),o("li",[e._v("All other docs (faqs, whitepaper, high-level material about Cosmos) would live on the website.")])]),e._v(" "),o("h2",{attrs:{id:"decision"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),o("p",[e._v("Re-structure the "),o("code",[e._v("/docs")]),e._v(" folder of the SDK github repo as follows:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZG9jcy8K4pSc4pSA4pSAIFJFQURNRQrilJzilIDilIAgaW50cm8vCuKUnOKUgOKUgCBjb25jZXB0cy8K4pSCICAg4pSc4pSA4pSAIGJhc2VhcHAK4pSCICAg4pSc4pSA4pSAIHR5cGVzCuKUgiAgIOKUnOKUgOKUgCBzdG9yZQrilIIgICDilJzilIDilIAgc2VydmVyCuKUgiAgIOKUnOKUgOKUgCBtb2R1bGVzLwrilIIgICDilIIgICDilJzilIDilIAga2VlcGVyCuKUgiAgIOKUgiAgIOKUnOKUgOKUgCBoYW5kbGVyCuKUgiAgIOKUgiAgIOKUnOKUgOKUgCBjbGkK4pSCICAg4pSc4pSA4pSAIGdhcwrilIIgICDilJTilIDilIAgY29tbWFuZHMK4pSc4pSA4pSAIGNsaWVudHMvCuKUgiAgIOKUnOKUgOKUgCBsaXRlLwrilIIgICDilJzilIDilIAgc2VydmljZS1wcm92aWRlcnMK4pSc4pSA4pSAIG1vZHVsZXMvCuKUnOKUgOKUgCBzcGVjLwrilJzilIDilIAgdHJhbnNsYXRpb25zLwrilJTilIDilIAgYXJjaGl0ZWN0dXJlLwo="}}),e._v(" "),o("p",[e._v("The files in each sub-folders do not matter and will likely change. What matters is the sectioning:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("README")]),e._v(": Landing page of the docs.")]),e._v(" "),o("li",[o("code",[e._v("intro")]),e._v(": Introductory material. Goal is to have a short explainer of the SDK and then channel people to the resource they need. The "),o("a",{attrs:{href:"https://github.com/cosmos/sdk-application-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[e._v("sdk-tutorial"),o("OutboundLink")],1),e._v(" will be highlighted, as well as the "),o("code",[e._v("godocs")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("concepts")]),e._v(": Contains high-level explanations of the abstractions of the SDK. It does not contain specific code implementation and does not need to be updated often. "),o("strong",[e._v("It is not an API specification of the interfaces")]),e._v(". API spec is the "),o("code",[e._v("godoc")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("clients")]),e._v(": Contains specs and info about the various SDK clients.")]),e._v(" "),o("li",[o("code",[e._v("spec")]),e._v(": Contains specs of modules, and others.")]),e._v(" "),o("li",[o("code",[e._v("modules")]),e._v(": Contains links to "),o("code",[e._v("godocs")]),e._v(" and the spec of the modules.")]),e._v(" "),o("li",[o("code",[e._v("architecture")]),e._v(": Contains architecture-related docs like the present one.")]),e._v(" "),o("li",[o("code",[e._v("translations")]),e._v(": Contains different translations of the documentation.")])]),e._v(" "),o("p",[e._v("Website docs sidebar will only include the following sections:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("README")])]),e._v(" "),o("li",[o("code",[e._v("intro")])]),e._v(" "),o("li",[o("code",[e._v("concepts")])]),e._v(" "),o("li",[o("code",[e._v("clients")])])]),e._v(" "),o("p",[o("code",[e._v("architecture")]),e._v(" need not be displayed on the website.")]),e._v(" "),o("h2",{attrs:{id:"status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),o("p",[e._v("Accepted")]),e._v(" "),o("h2",{attrs:{id:"consequences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),o("h3",{attrs:{id:"positive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),o("ul",[o("li",[e._v("Much clearer organisation of the SDK docs.")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("/docs")]),e._v(" folder now only contains SDK and gaia related material. Later, it will only contain SDK related material.")]),e._v(" "),o("li",[e._v("Developers only have to update "),o("code",[e._v("/docs")]),e._v(" folder when they open a PR (and not "),o("code",[e._v("/examples")]),e._v(" for example).")]),e._v(" "),o("li",[e._v("Easier for developers to find what they need to update in the docs thanks to reworked architecture.")]),e._v(" "),o("li",[e._v("Cleaner vuepress build for website docs.")]),e._v(" "),o("li",[e._v("Will help build an executable doc (cf https://github.com/cosmos/cosmos-sdk/issues/2611)")])]),e._v(" "),o("h3",{attrs:{id:"neutral"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),o("ul",[o("li",[e._v("We need to move a bunch of deprecated stuff to "),o("code",[e._v("/_attic")]),e._v(" folder.")]),e._v(" "),o("li",[e._v("We need to integrate content in "),o("code",[e._v("docs/sdk/docs/core")]),e._v(" in "),o("code",[e._v("concepts")]),e._v(".")]),e._v(" "),o("li",[e._v("We need to move all the content that currently lives in "),o("code",[e._v("docs")]),e._v(" and does not fit in new structure (like "),o("code",[e._v("lotion")]),e._v(", intro material, whitepaper) to the website repository.")]),e._v(" "),o("li",[e._v("Update "),o("code",[e._v("DOCS_README.md")])])]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ul",[o("li",[e._v("https://github.com/cosmos/cosmos-sdk/issues/1460")]),e._v(" "),o("li",[e._v("https://github.com/cosmos/cosmos-sdk/pull/2695")]),e._v(" "),o("li",[e._v("https://github.com/cosmos/cosmos-sdk/issues/2611")])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);