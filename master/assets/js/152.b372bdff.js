(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{724:function(t,e,a){"use strict";a.r(e);var o=a(1),g=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#store"}},[t._v("#")]),t._v(" Store")]),t._v(" "),a("p",{attrs:{synopsis:""}},[t._v("A store is a data structure that holds the state of the application.")]),t._v(" "),a("h3",{attrs:{id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[t._v("#")]),t._v(" Pre-requisite Readings")]),t._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[t._v("Anatomy of an SDK application")])],1)]),t._v(" "),a("h2",{attrs:{id:"introduction-to-sdk-stores"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-sdk-stores"}},[t._v("#")]),t._v(" Introduction to SDK Stores")]),t._v(" "),a("p",[t._v("The Cosmos SDK comes with a large set of stores to persist the state of applications. By default, the main store of SDK applications is a "),a("code",[t._v("multistore")]),t._v(", i.e. a store of stores. Developers can add any number of key-value stores to the multistore, depending on their application needs. The multistore exists to support the modularity of the Cosmos SDK, as it lets each module declare and manage their own subset of the state. Key-value stores in the multistore can only be accessed with a specific capability "),a("code",[t._v("key")]),t._v(", which is typically held in the "),a("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[a("code",[t._v("keeper")])]),t._v(" of the module that declared the store.")],1),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Ky0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKwp8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CnwgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAgIHwKfCAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgfAp8ICAgIHwgIEtWU3RvcmUgMSAtIE1hbmFnZSBieSBrZWVwZXIgb2YgTW9kdWxlIDEgIHwKfCAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgfAp8ICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsgICB8CnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKfCAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rICAgfAp8ICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICB8CnwgICAgfCAgS1ZTdG9yZSAyIC0gTWFuYWdlIGJ5IGtlZXBlciBvZiBNb2R1bGUgMiAgfCAgIHwKfCAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgfAp8ICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsgICB8CnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKfCAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rICAgfAp8ICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICB8CnwgICAgfCAgS1ZTdG9yZSAzIC0gTWFuYWdlIGJ5IGtlZXBlciBvZiBNb2R1bGUgMiAgfCAgIHwKfCAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgfAp8ICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsgICB8CnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKfCAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rICAgfAp8ICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICB8CnwgICAgfCAgS1ZTdG9yZSA0IC0gTWFuYWdlIGJ5IGtlZXBlciBvZiBNb2R1bGUgMyAgfCAgIHwKfCAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgfAp8ICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsgICB8CnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKfCAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rICAgfAp8ICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICB8CnwgICAgfCAgS1ZTdG9yZSA1IC0gTWFuYWdlIGJ5IGtlZXBlciBvZiBNb2R1bGUgNCAgfCAgIHwKfCAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgfAp8ICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsgICB8CnwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKfCAgICAgICAgICAgICAgICAgICAgTWFpbiBNdWx0aXN0b3JlICAgICAgICAgICAgICAgICAgfAp8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CistLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsKCiAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbidzIFN0YXRlCg=="}}),t._v(" "),a("h3",{attrs:{id:"store-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#store-interface"}},[t._v("#")]),t._v(" Store Interface")]),t._v(" "),a("p",[t._v("At its very core, a Cosmos SDK "),a("code",[t._v("store")]),t._v(" is an object that holds a "),a("code",[t._v("CacheWrapper")]),t._v(" and has a "),a("code",[t._v("GetStoreType()")]),t._v(" method:")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTdG9yZSBpbnRlcmZhY2UgewoJR2V0U3RvcmVUeXBlKCkgU3RvcmVUeXBlCglDYWNoZVdyYXBwZXIKfQ=="}})],1),t._v(" "),a("p",[t._v("The "),a("code",[t._v("GetStoreType")]),t._v(" is a simple method that returns the type of store, whereas a "),a("code",[t._v("CacheWrapper")]),t._v(" is a simple interface that implements store read caching and write branching  through "),a("code",[t._v("Write")]),t._v(" method:")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCi8vIENhY2hlV3JhcAoKLy8gQ2FjaGVXcmFwIG1ha2VzIHRoZSBtb3N0IGFwcHJvcHJpYXRlIGNhY2hlLXdyYXAuIEZvciBleGFtcGxlLAovLyBJQVZMU3RvcmUuQ2FjaGVXcmFwKCkgcmV0dXJucyBhIENhY2hlS1ZTdG9yZS4gQ2FjaGVXcmFwIHNob3VsZCBub3QgcmV0dXJuCi8vIGEgQ29tbWl0dGVyLCBzaW5jZSBDb21taXQgY2FjaGUtd3JhcHMgbWFrZSBubyBzZW5zZS4gSXQgY2FuIHJldHVybiBLVlN0b3JlLAovLyBIZWFwU3RvcmUsIFNwYWNlU3RvcmUsIGV0Yy4KdHlwZSBDYWNoZVdyYXAgaW50ZXJmYWNlIHsKCS8vIFdyaXRlIHN5bmNzIHdpdGggdGhlIHVuZGVybHlpbmcgc3RvcmUuCglXcml0ZSgpCgoJLy8gQ2FjaGVXcmFwIHJlY3Vyc2l2ZWx5IHdyYXBzIGFnYWluLgoJQ2FjaGVXcmFwKCkgQ2FjaGVXcmFwCgoJLy8gQ2FjaGVXcmFwV2l0aFRyYWNlIHJlY3Vyc2l2ZWx5IHdyYXBzIGFnYWluIHdpdGggdHJhY2luZyBlbmFibGVkLgoJQ2FjaGVXcmFwV2l0aFRyYWNlKHcgaW8uV3JpdGVyLCB0YyBUcmFjZUNvbnRleHQpIENhY2hlV3JhcAp9Cgp0eXBlIENhY2hlV3JhcHBlciBpbnRlcmZhY2UgewoJLy8gQ2FjaGVXcmFwIGNhY2hlIHdyYXBzLgoJQ2FjaGVXcmFwKCkgQ2FjaGVXcmFwCgoJLy8gQ2FjaGVXcmFwV2l0aFRyYWNlIGNhY2hlIHdyYXBzIHdpdGggdHJhY2luZyBlbmFibGVkLgoJQ2FjaGVXcmFwV2l0aFRyYWNlKHcgaW8uV3JpdGVyLCB0YyBUcmFjZUNvbnRleHQpIENhY2hlV3JhcAp9"}})],1),t._v(" "),a("p",[t._v("Branching and cache is used ubiquitously in the Cosmos SDK and required to be implemented on every store type. A storage branch creates an isolated, ephemeral branch of a store that can be passed around and updated without affecting the main underlying store. This is used to trigger temporary state-transitions that may be reverted later should an error occur. Read more about it in "),a("RouterLink",{attrs:{to:"/core/context.html#Store-branching"}},[t._v("context")])],1),t._v(" "),a("h3",{attrs:{id:"commit-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit-store"}},[t._v("#")]),t._v(" Commit Store")]),t._v(" "),a("p",[t._v("A commit store is a store that has the ability to commit changes made to the underlying tree or db. The Cosmos SDK differentiates simple stores from commit stores by extending the basic store interfaces with a "),a("code",[t._v("Committer")]),t._v(":")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RvcmVzIG9mIE11bHRpU3RvcmUgbXVzdCBpbXBsZW1lbnQgQ29tbWl0U3RvcmUuCnR5cGUgQ29tbWl0U3RvcmUgaW50ZXJmYWNlIHsKCUNvbW1pdHRlcgoJU3RvcmUKfQ=="}})],1),t._v(" "),a("p",[t._v("The "),a("code",[t._v("Committer")]),t._v(" is an interface that defines methods to persist changes to disk:")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gc29tZXRoaW5nIHRoYXQgY2FuIHBlcnNpc3QgdG8gZGlzawp0eXBlIENvbW1pdHRlciBpbnRlcmZhY2UgewoJQ29tbWl0KCkgQ29tbWl0SUQKCUxhc3RDb21taXRJRCgpIENvbW1pdElECgoJU2V0UHJ1bmluZyhQcnVuaW5nT3B0aW9ucykKCUdldFBydW5pbmcoKSBQcnVuaW5nT3B0aW9ucwp9"}})],1),t._v(" "),a("p",[t._v("The "),a("code",[t._v("CommitID")]),t._v(" is a deterministic commit of the state tree. Its hash is returned to the underlying consensus engine and stored in the block header. Note that commit store interfaces exist for various purposes, one of which is to make sure not every object can commit the store. As part of the "),a("RouterLink",{attrs:{to:"/core/ocap.html"}},[t._v("object-capabilities model")]),t._v(" of the Cosmos SDK, only "),a("code",[t._v("baseapp")]),t._v(" should have the ability to commit stores. For example, this is the reason why the "),a("code",[t._v("ctx.KVStore()")]),t._v(" method by which modules typically access stores returns a "),a("code",[t._v("KVStore")]),t._v(" and not a "),a("code",[t._v("CommitKVStore")]),t._v(".")],1),t._v(" "),a("p",[t._v("The Cosmos SDK comes with many types of stores, the most used being "),a("a",{attrs:{href:"#multistore"}},[a("code",[t._v("CommitMultiStore")])]),t._v(", "),a("a",{attrs:{href:"#kvstore"}},[a("code",[t._v("KVStore")])]),t._v(" and "),a("a",{attrs:{href:"#gaskv-store"}},[a("code",[t._v("GasKv")]),t._v(" store")]),t._v(". "),a("a",{attrs:{href:"#other-stores"}},[t._v("Other types of stores")]),t._v(" include "),a("code",[t._v("Transient")]),t._v(" and "),a("code",[t._v("TraceKV")]),t._v(" stores.")]),t._v(" "),a("h2",{attrs:{id:"multistore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multistore"}},[t._v("#")]),t._v(" Multistore")]),t._v(" "),a("h3",{attrs:{id:"multistore-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multistore-interface"}},[t._v("#")]),t._v(" Multistore Interface")]),t._v(" "),a("p",[t._v("Each Cosmos SDK application holds a multistore at its root to persist its state. The multistore is a store of "),a("code",[t._v("KVStores")]),t._v(" that follows the "),a("code",[t._v("Multistore")]),t._v(" interface:")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNdWx0aVN0b3JlIGludGVyZmFjZSB7CglTdG9yZQoKCS8vIENhY2hlIHdyYXAgTXVsdGlTdG9yZS4KCS8vIE5PVEU6IENhbGxlciBzaG91bGQgcHJvYmFibHkgbm90IGNhbGwgLldyaXRlKCkgb24gZWFjaCwgYnV0CgkvLyBjYWxsIENhY2hlTXVsdGlTdG9yZS5Xcml0ZSgpLgoJQ2FjaGVNdWx0aVN0b3JlKCkgQ2FjaGVNdWx0aVN0b3JlCgoJLy8gQ2FjaGVNdWx0aVN0b3JlV2l0aFZlcnNpb24gY2FjaGUtd3JhcHMgdGhlIHVuZGVybHlpbmcgTXVsdGlTdG9yZSB3aGVyZQoJLy8gZWFjaCBzdG9yZWQgaXMgbG9hZGVkIGF0IGEgc3BlY2lmaWMgdmVyc2lvbiAoaGVpZ2h0KS4KCUNhY2hlTXVsdGlTdG9yZVdpdGhWZXJzaW9uKHZlcnNpb24gaW50NjQpIChDYWNoZU11bHRpU3RvcmUsIGVycm9yKQoKCS8vIENvbnZlbmllbmNlIGZvciBmZXRjaGluZyBzdWJzdG9yZXMuCgkvLyBJZiB0aGUgc3RvcmUgZG9lcyBub3QgZXhpc3QsIHBhbmljcy4KCUdldFN0b3JlKFN0b3JlS2V5KSBTdG9yZQoJR2V0S1ZTdG9yZShTdG9yZUtleSkgS1ZTdG9yZQoKCS8vIFRyYWNpbmdFbmFibGVkIHJldHVybnMgaWYgdHJhY2luZyBpcyBlbmFibGVkIGZvciB0aGUgTXVsdGlTdG9yZS4KCVRyYWNpbmdFbmFibGVkKCkgYm9vbAoKCS8vIFNldFRyYWNlciBzZXRzIHRoZSB0cmFjZXIgZm9yIHRoZSBNdWx0aVN0b3JlIHRoYXQgdGhlIHVuZGVybHlpbmcKCS8vIHN0b3JlcyB3aWxsIHV0aWxpemUgdG8gdHJhY2Ugb3BlcmF0aW9ucy4gVGhlIG1vZGlmaWVkIE11bHRpU3RvcmUgaXMKCS8vIHJldHVybmVkLgoJU2V0VHJhY2VyKHcgaW8uV3JpdGVyKSBNdWx0aVN0b3JlCgoJLy8gU2V0VHJhY2luZ0NvbnRleHQgc2V0cyB0aGUgdHJhY2luZyBjb250ZXh0IGZvciBhIE11bHRpU3RvcmUuIEl0IGlzCgkvLyBpbXBsaWVkIHRoYXQgdGhlIGNhbGxlciBzaG91bGQgdXBkYXRlIHRoZSBjb250ZXh0IHdoZW4gbmVjZXNzYXJ5IGJldHdlZW4KCS8vIHRyYWNpbmcgb3BlcmF0aW9ucy4gVGhlIG1vZGlmaWVkIE11bHRpU3RvcmUgaXMgcmV0dXJuZWQuCglTZXRUcmFjaW5nQ29udGV4dChUcmFjZUNvbnRleHQpIE11bHRpU3RvcmUKfQ=="}})],1),t._v(" "),a("p",[t._v("If tracing is enabled, then branching the multistore will firstly wrap all the underlying "),a("code",[t._v("KVStore")]),t._v(" in "),a("a",{attrs:{href:"#tracekv-store"}},[a("code",[t._v("TraceKv.Store")])]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"commitmultistore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commitmultistore"}},[t._v("#")]),t._v(" CommitMultiStore")]),t._v(" "),a("p",[t._v("The main type of "),a("code",[t._v("Multistore")]),t._v(" used in the Cosmos SDK is "),a("code",[t._v("CommitMultiStore")]),t._v(", which is an extension of the "),a("code",[t._v("Multistore")]),t._v(" interface:")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQSBub24tY2FjaGUgTXVsdGlTdG9yZS4KdHlwZSBDb21taXRNdWx0aVN0b3JlIGludGVyZmFjZSB7CglDb21taXR0ZXIKCU11bHRpU3RvcmUKCXNuYXBzaG90dHlwZXMuU25hcHNob3R0ZXIKCgkvLyBNb3VudCBhIHN0b3JlIG9mIHR5cGUgdXNpbmcgdGhlIGdpdmVuIGRiLgoJLy8gSWYgZGIgPT0gbmlsLCB0aGUgbmV3IHN0b3JlIHdpbGwgdXNlIHRoZSBDb21taXRNdWx0aVN0b3JlIGRiLgoJTW91bnRTdG9yZVdpdGhEQihrZXkgU3RvcmVLZXksIHR5cCBTdG9yZVR5cGUsIGRiIGRibS5EQikKCgkvLyBQYW5pY3Mgb24gYSBuaWwga2V5LgoJR2V0Q29tbWl0U3RvcmUoa2V5IFN0b3JlS2V5KSBDb21taXRTdG9yZQoKCS8vIFBhbmljcyBvbiBhIG5pbCBrZXkuCglHZXRDb21taXRLVlN0b3JlKGtleSBTdG9yZUtleSkgQ29tbWl0S1ZTdG9yZQoKCS8vIExvYWQgdGhlIGxhdGVzdCBwZXJzaXN0ZWQgdmVyc2lvbi4gQ2FsbGVkIG9uY2UgYWZ0ZXIgYWxsIGNhbGxzIHRvCgkvLyBNb3VudCpTdG9yZSgpIGFyZSBjb21wbGV0ZS4KCUxvYWRMYXRlc3RWZXJzaW9uKCkgZXJyb3IKCgkvLyBMb2FkTGF0ZXN0VmVyc2lvbkFuZFVwZ3JhZGUgd2lsbCBsb2FkIHRoZSBsYXRlc3QgdmVyc2lvbiwgYnV0IGFsc28KCS8vIHJlbmFtZS9kZWxldGUvY3JlYXRlIHN1Yi1zdG9yZSBrZXlzLCBiZWZvcmUgcmVnaXN0ZXJpbmcgYWxsIHRoZSBrZXlzCgkvLyBpbiBvcmRlciB0byBoYW5kbGUgYnJlYWtpbmcgZm9ybWF0cyBpbiBtaWdyYXRpb25zCglMb2FkTGF0ZXN0VmVyc2lvbkFuZFVwZ3JhZGUodXBncmFkZXMgKlN0b3JlVXBncmFkZXMpIGVycm9yCgoJLy8gTG9hZFZlcnNpb25BbmRVcGdyYWRlIHdpbGwgbG9hZCB0aGUgbmFtZWQgdmVyc2lvbiwgYnV0IGFsc28KCS8vIHJlbmFtZS9kZWxldGUvY3JlYXRlIHN1Yi1zdG9yZSBrZXlzLCBiZWZvcmUgcmVnaXN0ZXJpbmcgYWxsIHRoZSBrZXlzCgkvLyBpbiBvcmRlciB0byBoYW5kbGUgYnJlYWtpbmcgZm9ybWF0cyBpbiBtaWdyYXRpb25zCglMb2FkVmVyc2lvbkFuZFVwZ3JhZGUodmVyIGludDY0LCB1cGdyYWRlcyAqU3RvcmVVcGdyYWRlcykgZXJyb3IKCgkvLyBMb2FkIGEgc3BlY2lmaWMgcGVyc2lzdGVkIHZlcnNpb24uIFdoZW4geW91IGxvYWQgYW4gb2xkIHZlcnNpb24sIG9yIHdoZW4KCS8vIHRoZSBsYXN0IGNvbW1pdCBhdHRlbXB0IGRpZG4ndCBjb21wbGV0ZSwgdGhlIG5leHQgY29tbWl0IGFmdGVyIGxvYWRpbmcKCS8vIG11c3QgYmUgaWRlbXBvdGVudCAocmV0dXJuIHRoZSBzYW1lIGNvbW1pdCBpZCkuIE90aGVyd2lzZSB0aGUgYmVoYXZpb3IgaXMKCS8vIHVuZGVmaW5lZC4KCUxvYWRWZXJzaW9uKHZlciBpbnQ2NCkgZXJyb3IKCgkvLyBTZXQgYW4gaW50ZXItYmxvY2sgKHBlcnNpc3RlbnQpIGNhY2hlIHRoYXQgbWFpbnRhaW5zIGEgbWFwcGluZyBmcm9tCgkvLyBTdG9yZUtleXMgdG8gQ29tbWl0S1ZTdG9yZXMuCglTZXRJbnRlckJsb2NrQ2FjaGUoTXVsdGlTdG9yZVBlcnNpc3RlbnRDYWNoZSkKCgkvLyBTZXRJbml0aWFsVmVyc2lvbiBzZXRzIHRoZSBpbml0aWFsIHZlcnNpb24gb2YgdGhlIElBVkwgdHJlZS4gSXQgaXMgdXNlZCB3aGVuCgkvLyBzdGFydGluZyBhIG5ldyBjaGFpbiBhdCBhbiBhcmJpdHJhcnkgaGVpZ2h0LgoJU2V0SW5pdGlhbFZlcnNpb24odmVyc2lvbiBpbnQ2NCkgZXJyb3IKfQ=="}})],1),t._v(" "),a("p",[t._v("As for concrete implementation, the ["),a("code",[t._v("rootMulti.Store")]),t._v("] is the go-to implementation of the "),a("code",[t._v("CommitMultiStore")]),t._v(" interface.")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RvcmUgaXMgY29tcG9zZWQgb2YgbWFueSBDb21taXRTdG9yZXMuIE5hbWUgY29udHJhc3RzIHdpdGgKLy8gY2FjaGVNdWx0aVN0b3JlIHdoaWNoIGlzIGZvciBjYWNoZS13cmFwcGluZyBvdGhlciBNdWx0aVN0b3Jlcy4gSXQgaW1wbGVtZW50cwovLyB0aGUgQ29tbWl0TXVsdGlTdG9yZSBpbnRlcmZhY2UuCnR5cGUgU3RvcmUgc3RydWN0IHsKCWRiICAgICAgICAgICAgIGRibS5EQgoJbGFzdENvbW1pdEluZm8gKnR5cGVzLkNvbW1pdEluZm8KCXBydW5pbmdPcHRzICAgIHR5cGVzLlBydW5pbmdPcHRpb25zCglzdG9yZXNQYXJhbXMgICBtYXBbdHlwZXMuU3RvcmVLZXldc3RvcmVQYXJhbXMKCXN0b3JlcyAgICAgICAgIG1hcFt0eXBlcy5TdG9yZUtleV10eXBlcy5Db21taXRLVlN0b3JlCglrZXlzQnlOYW1lICAgICBtYXBbc3RyaW5nXXR5cGVzLlN0b3JlS2V5CglsYXp5TG9hZGluZyAgICBib29sCglwcnVuZUhlaWdodHMgICBbXWludDY0Cglpbml0aWFsVmVyc2lvbiBpbnQ2NAoKCXRyYWNlV3JpdGVyICBpby5Xcml0ZXIKCXRyYWNlQ29udGV4dCB0eXBlcy5UcmFjZUNvbnRleHQKCglpbnRlckJsb2NrQ2FjaGUgdHlwZXMuTXVsdGlTdG9yZVBlcnNpc3RlbnRDYWNoZQp9"}})],1),t._v(" "),a("p",[t._v("The "),a("code",[t._v("rootMulti.Store")]),t._v(" is a base-layer multistore built around a "),a("code",[t._v("db")]),t._v(" on top of which multiple "),a("code",[t._v("KVStores")]),t._v(" can be mounted, and is the default multistore store used in "),a("RouterLink",{attrs:{to:"/core/baseapp.html"}},[a("code",[t._v("baseapp")])]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"cachemultistore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cachemultistore"}},[t._v("#")]),t._v(" CacheMultiStore")]),t._v(" "),a("p",[t._v("Whenever the "),a("code",[t._v("rootMulti.Store")]),t._v(" needs to be branched, a "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/store/cachemulti/store.go",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("cachemulti.Store")]),a("OutboundLink")],1),t._v(" is used.")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RvcmUgaG9sZHMgbWFueSBjYWNoZS13cmFwcGVkIHN0b3Jlcy4KLy8gSW1wbGVtZW50cyBNdWx0aVN0b3JlLgovLyBOT1RFOiBhIFN0b3JlIChhbmQgTXVsdGlTdG9yZXMgaW4gZ2VuZXJhbCkgc2hvdWxkIG5ldmVyIGV4cG9zZSB0aGUKLy8ga2V5cyBmb3IgdGhlIHN1YnN0b3Jlcy4KdHlwZSBTdG9yZSBzdHJ1Y3QgewoJZGIgICAgIHR5cGVzLkNhY2hlS1ZTdG9yZQoJc3RvcmVzIG1hcFt0eXBlcy5TdG9yZUtleV10eXBlcy5DYWNoZVdyYXAKCWtleXMgICBtYXBbc3RyaW5nXXR5cGVzLlN0b3JlS2V5CgoJdHJhY2VXcml0ZXIgIGlvLldyaXRlcgoJdHJhY2VDb250ZXh0IHR5cGVzLlRyYWNlQ29udGV4dAp9"}})],1),t._v(" "),a("p",[a("code",[t._v("cachemulti.Store")]),t._v(" branches all substores (creates a virtual store for each substore) in its constructor and hold them in "),a("code",[t._v("Store.stores")]),t._v(". Moreover caches all read queries. "),a("code",[t._v("Store.GetKVStore()")]),t._v(" returns the store from "),a("code",[t._v("Store.stores")]),t._v(", and "),a("code",[t._v("Store.Write()")]),t._v(" recursively calls "),a("code",[t._v("CacheWrap.Write()")]),t._v(" on all the substores.")]),t._v(" "),a("h2",{attrs:{id:"base-layer-kvstores"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base-layer-kvstores"}},[t._v("#")]),t._v(" Base-layer KVStores")]),t._v(" "),a("h3",{attrs:{id:"kvstore-and-commitkvstore-interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kvstore-and-commitkvstore-interfaces"}},[t._v("#")]),t._v(" "),a("code",[t._v("KVStore")]),t._v(" and "),a("code",[t._v("CommitKVStore")]),t._v(" Interfaces")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("KVStore")]),t._v(" is a simple key-value store used to store and retrieve data. A "),a("code",[t._v("CommitKVStore")]),t._v(" is a "),a("code",[t._v("KVStore")]),t._v(" that also implements a "),a("code",[t._v("Committer")]),t._v(". By default, stores mounted in "),a("code",[t._v("baseapp")]),t._v("'s main "),a("code",[t._v("CommitMultiStore")]),t._v(" are "),a("code",[t._v("CommitKVStore")]),t._v("s. The "),a("code",[t._v("KVStore")]),t._v(" interface is primarily used to restrict modules from accessing the committer.")]),t._v(" "),a("p",[t._v("Individual "),a("code",[t._v("KVStore")]),t._v("s are used by modules to manage a subset of the global state. "),a("code",[t._v("KVStores")]),t._v(" can be accessed by objects that hold a specific key. This "),a("code",[t._v("key")]),t._v(" should only be exposed to the "),a("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[a("code",[t._v("keeper")])]),t._v(" of the module that defines the store.")],1),t._v(" "),a("p",[a("code",[t._v("CommitKVStore")]),t._v("s are declared by proxy of their respective "),a("code",[t._v("key")]),t._v(" and mounted on the application's "),a("a",{attrs:{href:"#multistore"}},[t._v("multistore")]),t._v(" in the "),a("RouterLink",{attrs:{to:"/basics/app-anatomy.html#core-application-file"}},[t._v("main application file")]),t._v(". In the same file, the "),a("code",[t._v("key")]),t._v(" is also passed to the module's "),a("code",[t._v("keeper")]),t._v(" that is responsible for managing the store.")],1),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gS1ZTdG9yZSBpcyBhIHNpbXBsZSBpbnRlcmZhY2UgdG8gZ2V0L3NldCBkYXRhCnR5cGUgS1ZTdG9yZSBpbnRlcmZhY2UgewoJU3RvcmUKCgkvLyBHZXQgcmV0dXJucyBuaWwgaWZmIGtleSBkb2Vzbid0IGV4aXN0LiBQYW5pY3Mgb24gbmlsIGtleS4KCUdldChrZXkgW11ieXRlKSBbXWJ5dGUKCgkvLyBIYXMgY2hlY2tzIGlmIGEga2V5IGV4aXN0cy4gUGFuaWNzIG9uIG5pbCBrZXkuCglIYXMoa2V5IFtdYnl0ZSkgYm9vbAoKCS8vIFNldCBzZXRzIHRoZSBrZXkuIFBhbmljcyBvbiBuaWwga2V5IG9yIHZhbHVlLgoJU2V0KGtleSwgdmFsdWUgW11ieXRlKQoKCS8vIERlbGV0ZSBkZWxldGVzIHRoZSBrZXkuIFBhbmljcyBvbiBuaWwga2V5LgoJRGVsZXRlKGtleSBbXWJ5dGUpCgoJLy8gSXRlcmF0b3Igb3ZlciBhIGRvbWFpbiBvZiBrZXlzIGluIGFzY2VuZGluZyBvcmRlci4gRW5kIGlzIGV4Y2x1c2l2ZS4KCS8vIFN0YXJ0IG11c3QgYmUgbGVzcyB0aGFuIGVuZCwgb3IgdGhlIEl0ZXJhdG9yIGlzIGludmFsaWQuCgkvLyBJdGVyYXRvciBtdXN0IGJlIGNsb3NlZCBieSBjYWxsZXIuCgkvLyBUbyBpdGVyYXRlIG92ZXIgZW50aXJlIGRvbWFpbiwgdXNlIHN0b3JlLkl0ZXJhdG9yKG5pbCwgbmlsKQoJLy8gQ09OVFJBQ1Q6IE5vIHdyaXRlcyBtYXkgaGFwcGVuIHdpdGhpbiBhIGRvbWFpbiB3aGlsZSBhbiBpdGVyYXRvciBleGlzdHMgb3ZlciBpdC4KCS8vIEV4Y2VwdGlvbmFsbHkgYWxsb3dlZCBmb3IgY2FjaGVrdi5TdG9yZSwgc2FmZSB0byB3cml0ZSBpbiB0aGUgbW9kdWxlcy4KCUl0ZXJhdG9yKHN0YXJ0LCBlbmQgW11ieXRlKSBJdGVyYXRvcgoKCS8vIEl0ZXJhdG9yIG92ZXIgYSBkb21haW4gb2Yga2V5cyBpbiBkZXNjZW5kaW5nIG9yZGVyLiBFbmQgaXMgZXhjbHVzaXZlLgoJLy8gU3RhcnQgbXVzdCBiZSBsZXNzIHRoYW4gZW5kLCBvciB0aGUgSXRlcmF0b3IgaXMgaW52YWxpZC4KCS8vIEl0ZXJhdG9yIG11c3QgYmUgY2xvc2VkIGJ5IGNhbGxlci4KCS8vIENPTlRSQUNUOiBObyB3cml0ZXMgbWF5IGhhcHBlbiB3aXRoaW4gYSBkb21haW4gd2hpbGUgYW4gaXRlcmF0b3IgZXhpc3RzIG92ZXIgaXQuCgkvLyBFeGNlcHRpb25hbGx5IGFsbG93ZWQgZm9yIGNhY2hla3YuU3RvcmUsIHNhZmUgdG8gd3JpdGUgaW4gdGhlIG1vZHVsZXMuCglSZXZlcnNlSXRlcmF0b3Ioc3RhcnQsIGVuZCBbXWJ5dGUpIEl0ZXJhdG9yCn0="}})],1),t._v(" "),a("p",[t._v("Apart from the traditional "),a("code",[t._v("Get")]),t._v(" and "),a("code",[t._v("Set")]),t._v(" methods, a "),a("code",[t._v("KVStore")]),t._v(" must provide an "),a("code",[t._v("Iterator(start, end)")]),t._v(" method which returns an "),a("code",[t._v("Iterator")]),t._v(" object. It is used to iterate over a range of keys, typically keys that share a common prefix. Below is an example from the bank's module keeper, used to iterate over all account balances:")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gSXRlcmF0ZUFjY291bnRCYWxhbmNlcyBpdGVyYXRlcyBvdmVyIHRoZSBiYWxhbmNlcyBvZiBhIHNpbmdsZSBhY2NvdW50IGFuZAovLyBwcm92aWRlcyB0aGUgdG9rZW4gYmFsYW5jZSB0byBhIGNhbGxiYWNrLiBJZiB0cnVlIGlzIHJldHVybmVkIGZyb20gdGhlCi8vIGNhbGxiYWNrLCBpdGVyYXRpb24gaXMgaGFsdGVkLgpmdW5jIChrIEJhc2VWaWV3S2VlcGVyKSBJdGVyYXRlQWNjb3VudEJhbGFuY2VzKGN0eCBzZGsuQ29udGV4dCwgYWRkciBzZGsuQWNjQWRkcmVzcywgY2IgZnVuYyhzZGsuQ29pbikgYm9vbCkgewoJc3RvcmUgOj0gY3R4LktWU3RvcmUoay5zdG9yZUtleSkKCWJhbGFuY2VzU3RvcmUgOj0gcHJlZml4Lk5ld1N0b3JlKHN0b3JlLCB0eXBlcy5CYWxhbmNlc1ByZWZpeCkKCWFjY291bnRTdG9yZSA6PSBwcmVmaXguTmV3U3RvcmUoYmFsYW5jZXNTdG9yZSwgYWRkci5CeXRlcygpKQoKCWl0ZXJhdG9yIDo9IGFjY291bnRTdG9yZS5JdGVyYXRvcihuaWwsIG5pbCkKCWRlZmVyIGl0ZXJhdG9yLkNsb3NlKCkKCglmb3IgOyBpdGVyYXRvci5WYWxpZCgpOyBpdGVyYXRvci5OZXh0KCkgewoJCXZhciBiYWxhbmNlIHNkay5Db2luCgkJay5jZGMuTXVzdFVubWFyc2hhbEJpbmFyeUJhcmUoaXRlcmF0b3IuVmFsdWUoKSwgJmFtcDtiYWxhbmNlKQoKCQlpZiBjYihiYWxhbmNlKSB7CgkJCWJyZWFrCgkJfQoJfQp9"}})],1),t._v(" "),a("h3",{attrs:{id:"iavl-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iavl-store"}},[t._v("#")]),t._v(" "),a("code",[t._v("IAVL")]),t._v(" Store")]),t._v(" "),a("p",[t._v("The default implementation of "),a("code",[t._v("KVStore")]),t._v(" and "),a("code",[t._v("CommitKVStore")]),t._v(" used in "),a("code",[t._v("baseapp")]),t._v(" is the "),a("code",[t._v("iavl.Store")]),t._v(".")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RvcmUgSW1wbGVtZW50cyB0eXBlcy5LVlN0b3JlIGFuZCBDb21taXRLVlN0b3JlLgp0eXBlIFN0b3JlIHN0cnVjdCB7Cgl0cmVlIFRyZWUKfQ=="}})],1),t._v(" "),a("p",[a("code",[t._v("iavl")]),t._v(" stores are based around an "),a("a",{attrs:{href:"https://github.com/tendermint/iavl",target:"_blank",rel:"noopener noreferrer"}},[t._v("IAVL Tree"),a("OutboundLink")],1),t._v(", a self-balancing binary tree which guarantees that:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Get")]),t._v(" and "),a("code",[t._v("Set")]),t._v(" operations are O(log n), where n is the number of elements in the tree.")]),t._v(" "),a("li",[t._v("Iteration efficiently returns the sorted elements within the range.")]),t._v(" "),a("li",[t._v("Each tree version is immutable and can be retrieved even after a commit (depending on the pruning settings).")])]),t._v(" "),a("p",[t._v("The documentation on the IAVL Tree is located "),a("a",{attrs:{href:"https://github.com/cosmos/iavl/blob/v0.15.0-rc5/docs/overview.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"dbadapter-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dbadapter-store"}},[t._v("#")]),t._v(" "),a("code",[t._v("DbAdapter")]),t._v(" Store")]),t._v(" "),a("p",[a("code",[t._v("dbadapter.Store")]),t._v(" is a adapter for "),a("code",[t._v("dbm.DB")]),t._v(" making it fulfilling the "),a("code",[t._v("KVStore")]),t._v(" interface.")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gV3JhcHBlciB0eXBlIGZvciBkYm0uRGIgd2l0aCBpbXBsZW1lbnRhdGlvbiBvZiBLVlN0b3JlCnR5cGUgU3RvcmUgc3RydWN0IHsKCWRibS5EQgp9"}})],1),t._v(" "),a("p",[a("code",[t._v("dbadapter.Store")]),t._v(" embeds "),a("code",[t._v("dbm.DB")]),t._v(", meaning most of the "),a("code",[t._v("KVStore")]),t._v(" interface functions are implemented. The other functions (mostly miscellaneous) are manually implemented. This store is primarily used within "),a("a",{attrs:{href:"#transient-stores"}},[t._v("Transient Stores")])]),t._v(" "),a("h3",{attrs:{id:"transient-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transient-store"}},[t._v("#")]),t._v(" "),a("code",[t._v("Transient")]),t._v(" Store")]),t._v(" "),a("p",[a("code",[t._v("Transient.Store")]),t._v(" is a base-layer "),a("code",[t._v("KVStore")]),t._v(" which is automatically discarded at the end of the block.")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RvcmUgaXMgYSB3cmFwcGVyIGZvciBhIE1lbURCIHdpdGggQ29tbWl0ZXIgaW1wbGVtZW50YXRpb24KdHlwZSBTdG9yZSBzdHJ1Y3QgewoJZGJhZGFwdGVyLlN0b3JlCn0="}})],1),t._v(" "),a("p",[a("code",[t._v("Transient.Store")]),t._v(" is a "),a("code",[t._v("dbadapter.Store")]),t._v(" with a "),a("code",[t._v("dbm.NewMemDB()")]),t._v(". All "),a("code",[t._v("KVStore")]),t._v(" methods are reused. When "),a("code",[t._v("Store.Commit()")]),t._v(" is called, a new "),a("code",[t._v("dbadapter.Store")]),t._v(" is assigned, discarding previous reference and making it garbage collected.")]),t._v(" "),a("p",[t._v("This type of store is useful to persist information that is only relevant per-block. One example would be to store parameter changes (i.e. a bool set to "),a("code",[t._v("true")]),t._v(" if a parameter changed in a block).")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gSW5kaXZpZHVhbCBwYXJhbWV0ZXIgc3RvcmUgZm9yIGVhY2gga2VlcGVyCi8vIFRyYW5zaWVudCBzdG9yZSBwZXJzaXN0cyBmb3IgYSBibG9jaywgc28gd2UgdXNlIGl0IGZvcgovLyByZWNvcmRpbmcgd2hldGhlciB0aGUgcGFyYW1ldGVyIGhhcyBiZWVuIGNoYW5nZWQgb3Igbm90CnR5cGUgU3Vic3BhY2Ugc3RydWN0IHsKCWNkYyAgICAgICAgIGNvZGVjLkJpbmFyeU1hcnNoYWxlcgoJbGVnYWN5QW1pbm8gKmNvZGVjLkxlZ2FjeUFtaW5vCglrZXkgICAgICAgICBzZGsuU3RvcmVLZXkgLy8gW11ieXRlIC0mZ3Q7IFtdYnl0ZSwgc3RvcmVzIHBhcmFtZXRlcgoJdGtleSAgICAgICAgc2RrLlN0b3JlS2V5IC8vIFtdYnl0ZSAtJmd0OyBib29sLCBzdG9yZXMgcGFyYW1ldGVyIGNoYW5nZQoJbmFtZSAgICAgICAgW11ieXRlCgl0YWJsZSAgICAgICBLZXlUYWJsZQp9"}})],1),t._v(" "),a("p",[t._v("Transient stores are typically accessed via the "),a("RouterLink",{attrs:{to:"/core/context.html"}},[a("code",[t._v("context")])]),t._v(" via the "),a("code",[t._v("TransientStore()")]),t._v(" method:")],1),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVHJhbnNpZW50U3RvcmUgZmV0Y2hlcyBhIFRyYW5zaWVudFN0b3JlIGZyb20gdGhlIE11bHRpU3RvcmUuCmZ1bmMgKGMgQ29udGV4dCkgVHJhbnNpZW50U3RvcmUoa2V5IFN0b3JlS2V5KSBLVlN0b3JlIHsKCXJldHVybiBnYXNrdi5OZXdTdG9yZShjLk11bHRpU3RvcmUoKS5HZXRLVlN0b3JlKGtleSksIGMuR2FzTWV0ZXIoKSwgc3R5cGVzLlRyYW5zaWVudEdhc0NvbmZpZygpKQp9"}})],1),t._v(" "),a("h2",{attrs:{id:"kvstore-wrappers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kvstore-wrappers"}},[t._v("#")]),t._v(" KVStore Wrappers")]),t._v(" "),a("h3",{attrs:{id:"cachekvstore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cachekvstore"}},[t._v("#")]),t._v(" CacheKVStore")]),t._v(" "),a("p",[a("code",[t._v("cachekv.Store")]),t._v(" is a wrapper "),a("code",[t._v("KVStore")]),t._v(" which provides buffered writing / cached reading functionalities over the underlying "),a("code",[t._v("KVStore")]),t._v(".")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RvcmUgd3JhcHMgYW4gaW4tbWVtb3J5IGNhY2hlIGFyb3VuZCBhbiB1bmRlcmx5aW5nIHR5cGVzLktWU3RvcmUuCnR5cGUgU3RvcmUgc3RydWN0IHsKCW10eCAgICAgICAgICAgc3luYy5NdXRleAoJY2FjaGUgICAgICAgICBtYXBbc3RyaW5nXSpjVmFsdWUKCXVuc29ydGVkQ2FjaGUgbWFwW3N0cmluZ11zdHJ1Y3R7fQoJc29ydGVkQ2FjaGUgICAqbGlzdC5MaXN0IC8vIGFsd2F5cyBhc2NlbmRpbmcgc29ydGVkCglwYXJlbnQgICAgICAgIHR5cGVzLktWU3RvcmUKfQ=="}})],1),t._v(" "),a("p",[t._v("This is the type used whenever an IAVL Store needs to be branched to create an isolated store (typically when we need to mutate a state that might be reverted later).")]),t._v(" "),a("h4",{attrs:{id:"get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" "),a("code",[t._v("Get")])]),t._v(" "),a("p",[a("code",[t._v("Store.Get()")]),t._v(" firstly checks if "),a("code",[t._v("Store.cache")]),t._v(" has an associated value with the key. If the value exists, the function returns it. If not, the function calls "),a("code",[t._v("Store.parent.Get()")]),t._v(", caches the result in "),a("code",[t._v("Store.cache")]),t._v(", and returns it.")]),t._v(" "),a("h4",{attrs:{id:"set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[t._v("#")]),t._v(" "),a("code",[t._v("Set")])]),t._v(" "),a("p",[a("code",[t._v("Store.Set()")]),t._v(" sets the key-value pair to the "),a("code",[t._v("Store.cache")]),t._v(". "),a("code",[t._v("cValue")]),t._v(" has the field dirty bool which indicates whether the cached value is different from the underlying value. When "),a("code",[t._v("Store.Set()")]),t._v(" caches a new pair, the "),a("code",[t._v("cValue.dirty")]),t._v(" is set "),a("code",[t._v("true")]),t._v(" so when "),a("code",[t._v("Store.Write()")]),t._v(" is called it can be written to the underlying store.")]),t._v(" "),a("h4",{attrs:{id:"iterator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iterator"}},[t._v("#")]),t._v(" "),a("code",[t._v("Iterator")])]),t._v(" "),a("p",[a("code",[t._v("Store.Iterator()")]),t._v(" have to traverse on both cached items and the original items. In "),a("code",[t._v("Store.iterator()")]),t._v(", two iterators are generated for each of them, and merged. "),a("code",[t._v("memIterator")]),t._v(" is essentially a slice of the "),a("code",[t._v("KVPairs")]),t._v(", used for cached items. "),a("code",[t._v("mergeIterator")]),t._v(" is a combination of two iterators, where traverse happens ordered on both iterators.")]),t._v(" "),a("h3",{attrs:{id:"gaskv-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gaskv-store"}},[t._v("#")]),t._v(" "),a("code",[t._v("GasKv")]),t._v(" Store")]),t._v(" "),a("p",[t._v("Cosmos SDK applications use "),a("RouterLink",{attrs:{to:"/basics/gas-fees.html"}},[a("code",[t._v("gas")])]),t._v(" to track resources usage and prevent spam. "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.40.0-rc6/store/gaskv/store.go",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("GasKv.Store")]),a("OutboundLink")],1),t._v(" is a "),a("code",[t._v("KVStore")]),t._v(" wrapper that enables automatic gas consumption each time a read or write to the store is made. It is the solution of choice to track storage usage in Cosmos SDK applications.")],1),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RvcmUgYXBwbGllcyBnYXMgdHJhY2tpbmcgdG8gYW4gdW5kZXJseWluZyBLVlN0b3JlLiBJdCBpbXBsZW1lbnRzIHRoZQovLyBLVlN0b3JlIGludGVyZmFjZS4KdHlwZSBTdG9yZSBzdHJ1Y3QgewoJZ2FzTWV0ZXIgIHR5cGVzLkdhc01ldGVyCglnYXNDb25maWcgdHlwZXMuR2FzQ29uZmlnCglwYXJlbnQgICAgdHlwZXMuS1ZTdG9yZQp9"}})],1),t._v(" "),a("p",[t._v("When methods of the parent "),a("code",[t._v("KVStore")]),t._v(" are called, "),a("code",[t._v("GasKv.Store")]),t._v(" automatically consumes appropriate amount of gas depending on the "),a("code",[t._v("Store.gasConfig")]),t._v(":")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gR2FzQ29uZmlnIGRlZmluZXMgZ2FzIGNvc3QgZm9yIGVhY2ggb3BlcmF0aW9uIG9uIEtWU3RvcmVzCnR5cGUgR2FzQ29uZmlnIHN0cnVjdCB7CglIYXNDb3N0ICAgICAgICAgIEdhcwoJRGVsZXRlQ29zdCAgICAgICBHYXMKCVJlYWRDb3N0RmxhdCAgICAgR2FzCglSZWFkQ29zdFBlckJ5dGUgIEdhcwoJV3JpdGVDb3N0RmxhdCAgICBHYXMKCVdyaXRlQ29zdFBlckJ5dGUgR2FzCglJdGVyTmV4dENvc3RGbGF0IEdhcwp9"}})],1),t._v(" "),a("p",[t._v("By default, all "),a("code",[t._v("KVStores")]),t._v(" are wrapped in "),a("code",[t._v("GasKv.Stores")]),t._v(" when retrieved. This is done in the "),a("code",[t._v("KVStore()")]),t._v(" method of the "),a("RouterLink",{attrs:{to:"/core/context.html"}},[a("code",[t._v("context")])]),t._v(":")],1),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gS1ZTdG9yZSBmZXRjaGVzIGEgS1ZTdG9yZSBmcm9tIHRoZSBNdWx0aVN0b3JlLgpmdW5jIChjIENvbnRleHQpIEtWU3RvcmUoa2V5IFN0b3JlS2V5KSBLVlN0b3JlIHsKCXJldHVybiBnYXNrdi5OZXdTdG9yZShjLk11bHRpU3RvcmUoKS5HZXRLVlN0b3JlKGtleSksIGMuR2FzTWV0ZXIoKSwgc3R5cGVzLktWR2FzQ29uZmlnKCkpCn0="}})],1),t._v(" "),a("p",[t._v("In this case, the default gas configuration is used:")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gS1ZHYXNDb25maWcgcmV0dXJucyBhIGRlZmF1bHQgZ2FzIGNvbmZpZyBmb3IgS1ZTdG9yZXMuCmZ1bmMgS1ZHYXNDb25maWcoKSBHYXNDb25maWcgewoJcmV0dXJuIEdhc0NvbmZpZ3sKCQlIYXNDb3N0OiAgICAgICAgICAxMDAwLAoJCURlbGV0ZUNvc3Q6ICAgICAgIDEwMDAsCgkJUmVhZENvc3RGbGF0OiAgICAgMTAwMCwKCQlSZWFkQ29zdFBlckJ5dGU6ICAzLAoJCVdyaXRlQ29zdEZsYXQ6ICAgIDIwMDAsCgkJV3JpdGVDb3N0UGVyQnl0ZTogMzAsCgkJSXRlck5leHRDb3N0RmxhdDogMzAsCgl9Cn0="}})],1),t._v(" "),a("h3",{attrs:{id:"tracekv-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tracekv-store"}},[t._v("#")]),t._v(" "),a("code",[t._v("TraceKv")]),t._v(" Store")]),t._v(" "),a("p",[a("code",[t._v("tracekv.Store")]),t._v(" is a wrapper "),a("code",[t._v("KVStore")]),t._v(" which provides operation tracing functionalities over the underlying "),a("code",[t._v("KVStore")]),t._v(". It is applied automatically by the Cosmos SDK on all "),a("code",[t._v("KVStore")]),t._v(" if tracing is enabled on the parent "),a("code",[t._v("MultiStore")]),t._v(".")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSAoCgkvLyBTdG9yZSBpbXBsZW1lbnRzIHRoZSBLVlN0b3JlIGludGVyZmFjZSB3aXRoIHRyYWNpbmcgZW5hYmxlZC4KCS8vIE9wZXJhdGlvbnMgYXJlIHRyYWNlZCBvbiBlYWNoIGNvcmUgS1ZTdG9yZSBjYWxsIGFuZCB3cml0dGVuIHRvIHRoZQoJLy8gdW5kZXJseWluZyBpby53cml0ZXIuCgkvLwoJLy8gVE9ETzogU2hvdWxkIHdlIHVzZSBhIGJ1ZmZlcmVkIHdyaXRlciBhbmQgaW1wbGVtZW50IENvbW1pdCBvbgoJLy8gU3RvcmU/CglTdG9yZSBzdHJ1Y3QgewoJCXBhcmVudCAgdHlwZXMuS1ZTdG9yZQoJCXdyaXRlciAgaW8uV3JpdGVyCgkJY29udGV4dCB0eXBlcy5UcmFjZUNvbnRleHQKCX0KCgkvLyBvcGVyYXRpb24gcmVwcmVzZW50cyBhbiBJTyBvcGVyYXRpb24KCW9wZXJhdGlvbiBzdHJpbmcKCgkvLyB0cmFjZU9wZXJhdGlvbiBpbXBsZW1lbnRzIGEgdHJhY2VkIEtWU3RvcmUgb3BlcmF0aW9uCgl0cmFjZU9wZXJhdGlvbiBzdHJ1Y3QgewoJCU9wZXJhdGlvbiBvcGVyYXRpb24gICAgICAgICAgICAgIGBqc29uOiZxdW90O29wZXJhdGlvbiZxdW90O2AKCQlLZXkgICAgICAgc3RyaW5nICAgICAgICAgICAgICAgICBganNvbjomcXVvdDtrZXkmcXVvdDtgCgkJVmFsdWUgICAgIHN0cmluZyAgICAgICAgICAgICAgICAgYGpzb246JnF1b3Q7dmFsdWUmcXVvdDtgCgkJTWV0YWRhdGEgIG1hcFtzdHJpbmddaW50ZXJmYWNle30gYGpzb246JnF1b3Q7bWV0YWRhdGEmcXVvdDtgCgl9Cik="}})],1),t._v(" "),a("p",[t._v("When each "),a("code",[t._v("KVStore")]),t._v(" methods are called, "),a("code",[t._v("tracekv.Store")]),t._v(" automatically logs "),a("code",[t._v("traceOperation")]),t._v(" to the "),a("code",[t._v("Store.writer")]),t._v(". "),a("code",[t._v("traceOperation.Metadata")]),t._v(" is filled with "),a("code",[t._v("Store.context")]),t._v(" when it is not nil. "),a("code",[t._v("TraceContext")]),t._v(" is a "),a("code",[t._v("map[string]interface{}")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"prefix-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prefix-store"}},[t._v("#")]),t._v(" "),a("code",[t._v("Prefix")]),t._v(" Store")]),t._v(" "),a("p",[a("code",[t._v("prefix.Store")]),t._v(" is a wrapper "),a("code",[t._v("KVStore")]),t._v(" which provides automatic key-prefixing functionalities over the underlying "),a("code",[t._v("KVStore")]),t._v(".")]),t._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RvcmUgaXMgc2ltaWxhciB3aXRoIHRlbmRlcm1pbnQvdGVuZGVybWludC9saWJzL2RiL3ByZWZpeF9kYgovLyBib3RoIGdpdmVzIGFjY2VzcyBvbmx5IHRvIHRoZSBsaW1pdGVkIHN1YnNldCBvZiB0aGUgc3RvcmUKLy8gZm9yIGNvbnZpbmllbmNlIG9yIHNhZmV0eQp0eXBlIFN0b3JlIHN0cnVjdCB7CglwYXJlbnQgdHlwZXMuS1ZTdG9yZQoJcHJlZml4IFtdYnl0ZQp9"}})],1),t._v(" "),a("p",[t._v("When "),a("code",[t._v("Store.{Get, Set}()")]),t._v(" is called, the store forwards the call to its parent, with the key prefixed with the "),a("code",[t._v("Store.prefix")]),t._v(".")]),t._v(" "),a("p",[t._v("When "),a("code",[t._v("Store.Iterator()")]),t._v(" is called, it does not simply prefix the "),a("code",[t._v("Store.prefix")]),t._v(", since it does not work as intended. In that case, some of the elements are traversed even they are not starting with the prefix.")]),t._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[t._v("#")]),t._v(" Next")]),t._v(" "),a("p",{attrs:{hide:""}},[t._v("Learn about "),a("RouterLink",{attrs:{to:"/core/encoding.html"}},[t._v("encoding")])],1)],1)}),[],!1,null,null,null);e.default=g.exports}}]);