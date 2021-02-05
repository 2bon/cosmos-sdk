(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{789:function(e,a,l){"use strict";l.r(a);var t=l(1),c=Object(t.a)({},(function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"concepts"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),l("h2",{attrs:{id:"evidence"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#evidence"}},[e._v("#")]),e._v(" Evidence")]),e._v(" "),l("p",[e._v("Any concrete type of evidence submitted to the "),l("code",[e._v("x/evidence")]),e._v(" module must fulfill the\n"),l("code",[e._v("Evidence")]),e._v(" contract outlined below. Not all concrete types of evidence will fulfill\nthis contract in the same way and some data may be entirely irrelevant to certain\ntypes of evidence. An additional "),l("code",[e._v("ValidatorEvidence")]),e._v(", which extends "),l("code",[e._v("Evidence")]),e._v(",\nhas also been created to define a contract for evidence against malicious validators.")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRXZpZGVuY2UgZGVmaW5lcyB0aGUgY29udHJhY3Qgd2hpY2ggY29uY3JldGUgZXZpZGVuY2UgdHlwZXMgb2YgbWlzYmVoYXZpb3IKLy8gbXVzdCBpbXBsZW1lbnQuCnR5cGUgRXZpZGVuY2UgaW50ZXJmYWNlIHsKCXByb3RvLk1lc3NhZ2UKCglSb3V0ZSgpIHN0cmluZwoJVHlwZSgpIHN0cmluZwoJU3RyaW5nKCkgc3RyaW5nCglIYXNoKCkgdG1ieXRlcy5IZXhCeXRlcwoJVmFsaWRhdGVCYXNpYygpIGVycm9yCgoJLy8gSGVpZ2h0IGF0IHdoaWNoIHRoZSBpbmZyYWN0aW9uIG9jY3VycmVkCglHZXRIZWlnaHQoKSBpbnQ2NAp9CgovLyBWYWxpZGF0b3JFdmlkZW5jZSBleHRlbmRzIEV2aWRlbmNlIGludGVyZmFjZSB0byBkZWZpbmUgY29udHJhY3QKLy8gZm9yIGV2aWRlbmNlIGFnYWluc3QgbWFsaWNpb3VzIHZhbGlkYXRvcnMKdHlwZSBWYWxpZGF0b3JFdmlkZW5jZSBpbnRlcmZhY2UgewoJRXZpZGVuY2UKCgkvLyBUaGUgY29uc2Vuc3VzIGFkZHJlc3Mgb2YgdGhlIG1hbGljaW91cyB2YWxpZGF0b3IgYXQgdGltZSBvZiBpbmZyYWN0aW9uCglHZXRDb25zZW5zdXNBZGRyZXNzKCkgc2RrLkNvbnNBZGRyZXNzCgoJLy8gVGhlIHRvdGFsIHBvd2VyIG9mIHRoZSBtYWxpY2lvdXMgdmFsaWRhdG9yIGF0IHRpbWUgb2YgaW5mcmFjdGlvbgoJR2V0VmFsaWRhdG9yUG93ZXIoKSBpbnQ2NAoKCS8vIFRoZSB0b3RhbCB2YWxpZGF0b3Igc2V0IHBvd2VyIGF0IHRpbWUgb2YgaW5mcmFjdGlvbgoJR2V0VG90YWxQb3dlcigpIGludDY0Cn0K"}}),e._v(" "),l("h2",{attrs:{id:"registration-handling"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#registration-handling"}},[e._v("#")]),e._v(" Registration & Handling")]),e._v(" "),l("p",[e._v("The "),l("code",[e._v("x/evidence")]),e._v(" module must first know about all types of evidence it is expected\nto handle. This is accomplished by registering the "),l("code",[e._v("Route")]),e._v(" method in the "),l("code",[e._v("Evidence")]),e._v("\ncontract with what is known as a "),l("code",[e._v("Router")]),e._v(" (defined below). The "),l("code",[e._v("Router")]),e._v(" accepts\n"),l("code",[e._v("Evidence")]),e._v(" and attempts to find the corresponding "),l("code",[e._v("Handler")]),e._v(" for the "),l("code",[e._v("Evidence")]),e._v("\nvia the "),l("code",[e._v("Route")]),e._v(" method.")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBSb3V0ZXIgaW50ZXJmYWNlIHsKICBBZGRSb3V0ZShyIHN0cmluZywgaCBIYW5kbGVyKSBSb3V0ZXIKICBIYXNSb3V0ZShyIHN0cmluZykgYm9vbAogIEdldFJvdXRlKHBhdGggc3RyaW5nKSBIYW5kbGVyCiAgU2VhbCgpCiAgU2VhbGVkKCkgYm9vbAp9Cg=="}}),e._v(" "),l("p",[e._v("The "),l("code",[e._v("Handler")]),e._v(" (defined below) is responsible for executing the entirety of the\nbusiness logic for handling "),l("code",[e._v("Evidence")]),e._v(". This typically includes validating the\nevidence, both stateless checks via "),l("code",[e._v("ValidateBasic")]),e._v(" and stateful checks via any\nkeepers provided to the "),l("code",[e._v("Handler")]),e._v(". In addition, the "),l("code",[e._v("Handler")]),e._v(" may also perform\ncapabilities such as slashing and jailing a validator. All "),l("code",[e._v("Evidence")]),e._v(" handled\nby the "),l("code",[e._v("Handler")]),e._v(" should be persisted.")]),e._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gSGFuZGxlciBkZWZpbmVzIGFuIGFnbm9zdGljIEV2aWRlbmNlIGhhbmRsZXIuIFRoZSBoYW5kbGVyIGlzIHJlc3BvbnNpYmxlCi8vIGZvciBleGVjdXRpbmcgYWxsIGNvcnJlc3BvbmRpbmcgYnVzaW5lc3MgbG9naWMgbmVjZXNzYXJ5IGZvciB2ZXJpZnlpbmcgdGhlCi8vIGV2aWRlbmNlIGFzIHZhbGlkLiBJbiBhZGRpdGlvbiwgdGhlIEhhbmRsZXIgbWF5IGV4ZWN1dGUgYW55IG5lY2Vzc2FyeQovLyBzbGFzaGluZyBhbmQgcG90ZW50aWFsIGphaWxpbmcuCnR5cGUgSGFuZGxlciBmdW5jKHNkay5Db250ZXh0LCBFdmlkZW5jZSkgZXJyb3IK"}})],1)}),[],!1,null,null,null);a.default=c.exports}}]);