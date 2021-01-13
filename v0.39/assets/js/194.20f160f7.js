(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{876:function(c,e,l){"use strict";l.r(e);var a=l(1),s=Object(a.a)({},(function(){var c=this,e=c.$createElement,l=c._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":c.$parent.slotKey}},[l("h1",{attrs:{id:"keepers"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#keepers"}},[c._v("#")]),c._v(" Keepers")]),c._v(" "),l("p",[c._v("The bank module provides three different exported keeper interfaces which can be passed to other modules which need to read or update account balances. Modules should use the least-permissive interface which provides the functionality they require.")]),c._v(" "),l("p",[c._v("Note that you should always review the "),l("code",[c._v("bank")]),c._v(" module code to ensure that permissions are limited in the way that you expect.")]),c._v(" "),l("h2",{attrs:{id:"common-types"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#common-types"}},[c._v("#")]),c._v(" Common Types")]),c._v(" "),l("h3",{attrs:{id:"input"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[c._v("#")]),c._v(" Input")]),c._v(" "),l("p",[c._v("An input of a multiparty transfer")]),c._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gSW5wdXQgbW9kZWxzIHRyYW5zYWN0aW9uIGlucHV0LgptZXNzYWdlIElucHV0IHsKICBzdHJpbmcgICBhZGRyZXNzICAgICAgICAgICAgICAgICAgICAgICAgPSAxOwogIHJlcGVhdGVkIGNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbiBjb2lucyA9IDI7Cn0K"}}),c._v(" "),l("h3",{attrs:{id:"output"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[c._v("#")]),c._v(" Output")]),c._v(" "),l("p",[c._v("An output of a multiparty transfer.")]),c._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gT3V0cHV0IG1vZGVscyB0cmFuc2FjdGlvbiBvdXRwdXRzLgptZXNzYWdlIE91dHB1dCB7CiAgc3RyaW5nICAgYWRkcmVzcyAgICAgICAgICAgICAgICAgICAgICAgID0gMTsKICByZXBlYXRlZCBjb3Ntb3MuYmFzZS52MWJldGExLkNvaW4gY29pbnMgPSAyOwp9Cg=="}}),c._v(" "),l("h2",{attrs:{id:"basekeeper"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#basekeeper"}},[c._v("#")]),c._v(" BaseKeeper")]),c._v(" "),l("p",[c._v("The base keeper provides full-permission access: the ability to arbitrary modify any account's balance and mint or burn coins.")]),c._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gS2VlcGVyIGRlZmluZXMgYSBtb2R1bGUgaW50ZXJmYWNlIHRoYXQgZmFjaWxpdGF0ZXMgdGhlIHRyYW5zZmVyIG9mIGNvaW5zCi8vIGJldHdlZW4gYWNjb3VudHMuCnR5cGUgS2VlcGVyIGludGVyZmFjZSB7CglTZW5kS2VlcGVyCgoJSW5pdEdlbmVzaXMoc2RrLkNvbnRleHQsICp0eXBlcy5HZW5lc2lzU3RhdGUpCglFeHBvcnRHZW5lc2lzKHNkay5Db250ZXh0KSAqdHlwZXMuR2VuZXNpc1N0YXRlCgoJR2V0U3VwcGx5KGN0eCBzZGsuQ29udGV4dCkgZXhwb3J0ZWQuU3VwcGx5SQoJU2V0U3VwcGx5KGN0eCBzZGsuQ29udGV4dCwgc3VwcGx5IGV4cG9ydGVkLlN1cHBseUkpCgoJR2V0RGVub21NZXRhRGF0YShjdHggc2RrLkNvbnRleHQsIGRlbm9tIHN0cmluZykgdHlwZXMuTWV0YWRhdGEKCVNldERlbm9tTWV0YURhdGEoY3R4IHNkay5Db250ZXh0LCBkZW5vbU1ldGFEYXRhIHR5cGVzLk1ldGFkYXRhKQoJSXRlcmF0ZUFsbERlbm9tTWV0YURhdGEoY3R4IHNkay5Db250ZXh0LCBjYiBmdW5jKHR5cGVzLk1ldGFkYXRhKSBib29sKQoKCVNlbmRDb2luc0Zyb21Nb2R1bGVUb0FjY291bnQoY3R4IHNkay5Db250ZXh0LCBzZW5kZXJNb2R1bGUgc3RyaW5nLCByZWNpcGllbnRBZGRyIHNkay5BY2NBZGRyZXNzLCBhbXQgc2RrLkNvaW5zKSBlcnJvcgoJU2VuZENvaW5zRnJvbU1vZHVsZVRvTW9kdWxlKGN0eCBzZGsuQ29udGV4dCwgc2VuZGVyTW9kdWxlLCByZWNpcGllbnRNb2R1bGUgc3RyaW5nLCBhbXQgc2RrLkNvaW5zKSBlcnJvcgoJU2VuZENvaW5zRnJvbUFjY291bnRUb01vZHVsZShjdHggc2RrLkNvbnRleHQsIHNlbmRlckFkZHIgc2RrLkFjY0FkZHJlc3MsIHJlY2lwaWVudE1vZHVsZSBzdHJpbmcsIGFtdCBzZGsuQ29pbnMpIGVycm9yCglEZWxlZ2F0ZUNvaW5zRnJvbUFjY291bnRUb01vZHVsZShjdHggc2RrLkNvbnRleHQsIHNlbmRlckFkZHIgc2RrLkFjY0FkZHJlc3MsIHJlY2lwaWVudE1vZHVsZSBzdHJpbmcsIGFtdCBzZGsuQ29pbnMpIGVycm9yCglVbmRlbGVnYXRlQ29pbnNGcm9tTW9kdWxlVG9BY2NvdW50KGN0eCBzZGsuQ29udGV4dCwgc2VuZGVyTW9kdWxlIHN0cmluZywgcmVjaXBpZW50QWRkciBzZGsuQWNjQWRkcmVzcywgYW10IHNkay5Db2lucykgZXJyb3IKCU1pbnRDb2lucyhjdHggc2RrLkNvbnRleHQsIG1vZHVsZU5hbWUgc3RyaW5nLCBhbXQgc2RrLkNvaW5zKSBlcnJvcgoJQnVybkNvaW5zKGN0eCBzZGsuQ29udGV4dCwgbW9kdWxlTmFtZSBzdHJpbmcsIGFtdCBzZGsuQ29pbnMpIGVycm9yCgoJRGVsZWdhdGVDb2lucyhjdHggc2RrLkNvbnRleHQsIGRlbGVnYXRvckFkZHIsIG1vZHVsZUFjY0FkZHIgc2RrLkFjY0FkZHJlc3MsIGFtdCBzZGsuQ29pbnMpIGVycm9yCglVbmRlbGVnYXRlQ29pbnMoY3R4IHNkay5Db250ZXh0LCBtb2R1bGVBY2NBZGRyLCBkZWxlZ2F0b3JBZGRyIHNkay5BY2NBZGRyZXNzLCBhbXQgc2RrLkNvaW5zKSBlcnJvcgoJTWFyc2hhbFN1cHBseShzdXBwbHlJIGV4cG9ydGVkLlN1cHBseUkpIChbXWJ5dGUsIGVycm9yKQoJVW5tYXJzaGFsU3VwcGx5KGJ6IFtdYnl0ZSkgKGV4cG9ydGVkLlN1cHBseUksIGVycm9yKQoKCXR5cGVzLlF1ZXJ5U2VydmVyCn0K"}}),c._v(" "),l("h2",{attrs:{id:"sendkeeper"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#sendkeeper"}},[c._v("#")]),c._v(" SendKeeper")]),c._v(" "),l("p",[c._v("The send keeper provides access to account balances and the ability to transfer coins between accounts, but not to alter the total supply (mint or burn coins).")]),c._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU2VuZEtlZXBlciBkZWZpbmVzIGEgbW9kdWxlIGludGVyZmFjZSB0aGF0IGZhY2lsaXRhdGVzIHRoZSB0cmFuc2ZlciBvZiBjb2lucwovLyBiZXR3ZWVuIGFjY291bnRzIHdpdGhvdXQgdGhlIHBvc3NpYmlsaXR5IG9mIGNyZWF0aW5nIGNvaW5zLgp0eXBlIFNlbmRLZWVwZXIgaW50ZXJmYWNlIHsKCVZpZXdLZWVwZXIKCglJbnB1dE91dHB1dENvaW5zKGN0eCBzZGsuQ29udGV4dCwgaW5wdXRzIFtddHlwZXMuSW5wdXQsIG91dHB1dHMgW110eXBlcy5PdXRwdXQpIGVycm9yCglTZW5kQ29pbnMoY3R4IHNkay5Db250ZXh0LCBmcm9tQWRkciBzZGsuQWNjQWRkcmVzcywgdG9BZGRyIHNkay5BY2NBZGRyZXNzLCBhbXQgc2RrLkNvaW5zKSBlcnJvcgoKCVN1YnRyYWN0Q29pbnMoY3R4IHNkay5Db250ZXh0LCBhZGRyIHNkay5BY2NBZGRyZXNzLCBhbXQgc2RrLkNvaW5zKSBlcnJvcgoJQWRkQ29pbnMoY3R4IHNkay5Db250ZXh0LCBhZGRyIHNkay5BY2NBZGRyZXNzLCBhbXQgc2RrLkNvaW5zKSBlcnJvcgoKCVNldEJhbGFuY2UoY3R4IHNkay5Db250ZXh0LCBhZGRyIHNkay5BY2NBZGRyZXNzLCBiYWxhbmNlIHNkay5Db2luKSBlcnJvcgoJU2V0QmFsYW5jZXMoY3R4IHNkay5Db250ZXh0LCBhZGRyIHNkay5BY2NBZGRyZXNzLCBiYWxhbmNlcyBzZGsuQ29pbnMpIGVycm9yCgoJR2V0UGFyYW1zKGN0eCBzZGsuQ29udGV4dCkgdHlwZXMuUGFyYW1zCglTZXRQYXJhbXMoY3R4IHNkay5Db250ZXh0LCBwYXJhbXMgdHlwZXMuUGFyYW1zKQoKCVNlbmRFbmFibGVkQ29pbihjdHggc2RrLkNvbnRleHQsIGNvaW4gc2RrLkNvaW4pIGJvb2wKCVNlbmRFbmFibGVkQ29pbnMoY3R4IHNkay5Db250ZXh0LCBjb2lucyAuLi5zZGsuQ29pbikgZXJyb3IKCglCbG9ja2VkQWRkcihhZGRyIHNkay5BY2NBZGRyZXNzKSBib29sCn0K"}}),c._v(" "),l("h2",{attrs:{id:"viewkeeper"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#viewkeeper"}},[c._v("#")]),c._v(" ViewKeeper")]),c._v(" "),l("p",[c._v("The view keeper provides read-only access to account balances but no balance alteration functionality. All balance lookups are "),l("code",[c._v("O(1)")]),c._v(".")]),c._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVmlld0tlZXBlciBkZWZpbmVzIGEgbW9kdWxlIGludGVyZmFjZSB0aGF0IGZhY2lsaXRhdGVzIHJlYWQgb25seSBhY2Nlc3MgdG8KLy8gYWNjb3VudCBiYWxhbmNlcy4KdHlwZSBWaWV3S2VlcGVyIGludGVyZmFjZSB7CglWYWxpZGF0ZUJhbGFuY2UoY3R4IHNkay5Db250ZXh0LCBhZGRyIHNkay5BY2NBZGRyZXNzKSBlcnJvcgoJSGFzQmFsYW5jZShjdHggc2RrLkNvbnRleHQsIGFkZHIgc2RrLkFjY0FkZHJlc3MsIGFtdCBzZGsuQ29pbikgYm9vbAoKCUdldEFsbEJhbGFuY2VzKGN0eCBzZGsuQ29udGV4dCwgYWRkciBzZGsuQWNjQWRkcmVzcykgc2RrLkNvaW5zCglHZXRBY2NvdW50c0JhbGFuY2VzKGN0eCBzZGsuQ29udGV4dCkgW110eXBlcy5CYWxhbmNlCglHZXRCYWxhbmNlKGN0eCBzZGsuQ29udGV4dCwgYWRkciBzZGsuQWNjQWRkcmVzcywgZGVub20gc3RyaW5nKSBzZGsuQ29pbgoJTG9ja2VkQ29pbnMoY3R4IHNkay5Db250ZXh0LCBhZGRyIHNkay5BY2NBZGRyZXNzKSBzZGsuQ29pbnMKCVNwZW5kYWJsZUNvaW5zKGN0eCBzZGsuQ29udGV4dCwgYWRkciBzZGsuQWNjQWRkcmVzcykgc2RrLkNvaW5zCgoJSXRlcmF0ZUFjY291bnRCYWxhbmNlcyhjdHggc2RrLkNvbnRleHQsIGFkZHIgc2RrLkFjY0FkZHJlc3MsIGNiIGZ1bmMoY29pbiBzZGsuQ29pbikgKHN0b3AgYm9vbCkpCglJdGVyYXRlQWxsQmFsYW5jZXMoY3R4IHNkay5Db250ZXh0LCBjYiBmdW5jKGFkZHJlc3Mgc2RrLkFjY0FkZHJlc3MsIGNvaW4gc2RrLkNvaW4pIChzdG9wIGJvb2wpKQp9Cg=="}})],1)}),[],!1,null,null,null);e.default=s.exports}}]);