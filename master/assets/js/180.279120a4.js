(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{846:function(g,C,I){"use strict";I.r(C);var A=I(1),t=Object(A.a)({},(function(){var g=this,C=g.$createElement,I=g._self._c||C;return I("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[I("h1",{attrs:{id:"코스모스-sdk의-주요-구성-요소"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#코스모스-sdk의-주요-구성-요소"}},[g._v("#")]),g._v(" 코스모스 SDK의 주요 구성 요소")]),g._v(" "),I("p",[g._v("코스모스 SDK는 텐더민트 위에서 안전한 상태 기계를 구현하는 프레임워크입니다. 핵심적으로, 코스모스 SDK는 일종의 Go 언어로 구현된 "),I("RouterLink",{attrs:{to:"/kr/intro/sdk-app-architecture.html#abci"}},[g._v("ABCI")]),g._v(" 구현체 템플릿입니다. 코스모스 SDK에는 데이터를 지속하는 "),I("RouterLink",{attrs:{to:"/kr/core/store.html#multistore"}},[I("code",[g._v("multistore")])]),g._v("와 트래잭션을 처리하는 "),I("RouterLink",{attrs:{to:"/kr/core/baseapp.html#routing"}},[I("code",[g._v("router")])]),g._v("가 내장되어 있습니다.")],1),g._v(" "),I("p",[g._v("다음은 코스모스 SDK로 만들어진 애플리케이션에서 텐더민트에서 "),I("code",[g._v("DeliverTx")]),g._v("로 전달된 트랜잭션이 처리되는 과정을 간소화한 설명입니다:")]),g._v(" "),I("ol",[I("li",[g._v("텐더민트 컨센서스 엔진(텐더민트는 "),I("code",[g._v("[]bytes")]),g._v("만을 다룬다는 것을 참고하세요)에서 전달된 "),I("code",[g._v("transaction")]),g._v("을 디코딩")]),g._v(" "),I("li",[I("code",[g._v("transaction")]),g._v("에서 "),I("code",[g._v("messages")]),g._v("를 추출한 후 기본적인 타당성 검사를 진행")]),g._v(" "),I("li",[g._v("각 메시지가 처리될 수 있게 올바른 모듈에게 라우팅")]),g._v(" "),I("li",[g._v("상태 변경 실행")])]),g._v(" "),I("h2",{attrs:{id:"baseapp"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#baseapp"}},[g._v("#")]),g._v(" "),I("code",[g._v("baseapp")])]),g._v(" "),I("p",[I("code",[g._v("baseapp")]),g._v("은 코스모스 SDK 애플리케이션 구현체 템플릿입니다. 하위 컨센서스 엔진과 연결을 처리하기 위한 구현체가 포함 되어있습니다. 통상, 코스모스 SDK 애플리케이션에서는 "),I("RouterLink",{attrs:{to:"/kr/basics/app-anatomy.html#core-application-file"}},[I("code",[g._v("app.go")])]),g._v("내에 "),I("code",[g._v("baseapp")]),g._v("을 임베딩합니다. 이에 대한 예시는 코스모스 SDK 애플리케이션 튜토리얼을 참고하세요:")],1),g._v(" "),I("p",[I("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBuYW1lU2VydmljZUFwcCBzdHJ1Y3QgewoJKmJhbS5CYXNlQXBwCgljZGMgKmNvZGVjLkNvZGVjCgoJLy8ga2V5cyB0byBhY2Nlc3MgdGhlIHN1YnN0b3JlcwoJa2V5cyAgbWFwW3N0cmluZ10qc2RrLktWU3RvcmVLZXkKCXRrZXlzIG1hcFtzdHJpbmddKnNkay5UcmFuc2llbnRTdG9yZUtleQoKCS8vIEtlZXBlcnMKCWFjY291bnRLZWVwZXIgIGF1dGguQWNjb3VudEtlZXBlcgoJYmFua0tlZXBlciAgICAgYmFuay5LZWVwZXIKCXN0YWtpbmdLZWVwZXIgIHN0YWtpbmcuS2VlcGVyCglzbGFzaGluZ0tlZXBlciBzbGFzaGluZy5LZWVwZXIKCWRpc3RyS2VlcGVyICAgIGRpc3RyLktlZXBlcgoJc3VwcGx5S2VlcGVyICAgc3VwcGx5LktlZXBlcgoJcGFyYW1zS2VlcGVyICAgcGFyYW1zLktlZXBlcgoJbnNLZWVwZXIgICAgICAgbmFtZXNlcnZpY2UuS2VlcGVyCgoJLy8gTW9kdWxlIE1hbmFnZXIKCW1tICptb2R1bGUuTWFuYWdlcgp9"}})],1),g._v(" "),I("p",[I("code",[g._v("baseapp")]),g._v("의 목표는 스토어와 확장 가능한 상태 기계간의 안전한 인터페이스를 제공함과 동시에 상태 기계를 최소한으로 정의하는(ABCI 디자인 목적에 따라) 것입니다.")]),g._v(" "),I("p",[I("code",[g._v("baseapp")]),g._v("에 대한 추가 정보는 "),I("RouterLink",{attrs:{to:"/kr/core/baseapp.html"}},[g._v("여기")]),g._v("를 참조하세요.")],1),g._v(" "),I("h2",{attrs:{id:"멀티스토어"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#멀티스토어"}},[g._v("#")]),g._v(" 멀티스토어")]),g._v(" "),I("p",[g._v("코스모스 SDK는 지속되는 상태를 위해 "),I("RouterLink",{attrs:{to:"/kr/core/store.html#multistore"}},[I("code",[g._v("멀티스토어/multistore")])]),g._v("를 제공합니다.멀티스토어는 개발자가 원하는 수량의 "),I("RouterLink",{attrs:{to:"/kr/core/store.html#base-layer-kvtores"}},[I("code",[g._v("KVtore")])]),g._v("를 선언할 수 있도록 합니다. "),I("code",[g._v("KVStore")]),g._v("는 오직 "),I("code",[g._v("[]byte")]),g._v(" 타입만을 유효한 값으로 받기 때문에 자체 스트럭쳐는 "),I("RouterLink",{attrs:{to:"/kr/core/encoding.html"}},[g._v("코덱")]),g._v("을 사용해 마셜된 후 저장되어야 합니다.")],1),g._v(" "),I("p",[g._v("멀티스토어를 추상화한 이유는 상태를 구획화하기 위한 목적이 있으며, 각자 해당되는 모듈에 의해 관리됩니다. 멀티스토어 대한 추가 정보는 "),I("RouterLink",{attrs:{to:"/kr/core/store.html#multistore"}},[g._v("여기")]),g._v("를 확인하세요.")],1),g._v(" "),I("h2",{attrs:{id:"모듈"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#모듈"}},[g._v("#")]),g._v(" 모듈")]),g._v(" "),I("p",[g._v("코스모스 SDK의 강점은 바로 모듈성에 있습니다. SDK 기반 애플리케이션은 다수의 상호 호환되는 모듈을 모아서 개발됩니다. 각 모듈은 상태의 특정 분야를 정의하고 자체적인 메시지/트랜잭션 처리 기능을 가지고 있으며, 코스모스 SDK는 각 메시지를 해당되는 모듈에 라우팅하는 역할을 합니다.")]),g._v(" "),I("p",[g._v("다음은 어떻게 트랜잭션이 각 풀노드가 유효한 블록을 받았을때 애플리케이션에 의해 처리되는지를 설명합니다:")]),g._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIERlbGl2ZXJUeOulvCDthrXtlbQg7ZKA64W465Oc7J2YIO2FkOuNlOuvvO2KuOyXkOyEnAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIOuFuOuTnOydmCDslaDtlIzrpqzsvIDsnbTshZjsnLzroZwg7KCE64us65CcIO2KuOuenOyereyFmAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLXYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsKICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAg7JWg7ZSM66as7LyA7J207IWYICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgfCAgICAg67Kg7J207Iqk7JWx7J2YIOuplOyEnOuTnOulvCDsgqzsmqntlbQ6IFR4IOuUlOy9lOuUqSwgICAgIHwKICAgICAgICAgICAgICAgIHwgICAgICAgICAgICDrqZTsi5zsp4Ag7LaU7LacIO2bhCDrnbzsmrDtjIUgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICDsspjrpqzrpbwg7JyE7ZW0IOyYrOuwlOuluAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICDrqqjrk4jroZwg65287Jqw7YyF65CcIOuplOyLnOyngAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKKy0tLS0tLS0tLS0tLS0tLS0rICArLS0tLS0tLS0tLS0tLS0tKyAgKy0tLS0tLS0tLS0tLS0tLS0rICArLS0tLS0tdi0tLS0tLS0tLS0rCnwgICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgfAp8ICAgIEFVVEgg66qo65OIICAgfCAgfCAgIEJBTksg66qo65OIICAgfCAgfCAgU1RBS0lORyDrqqjrk4ggIHwgIHwgICAgR09WIOuqqOuTiCAgICAgfAp8ICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgIHwKfCAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICB8ICB8ICAg66mU7Iuc7KeAIOyymOumrCwgIHwKfCAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICB8ICB8ICDsg4Htg5wg7JeF642w7J207Yq4ICB8CnwgICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgfAorLS0tLS0tLS0tLS0tLS0tLSsgICstLS0tLS0tLS0tLS0tLS0rICArLS0tLS0tLS0tLS0tLS0tLSsgICstLS0tLS0rLS0tLS0tLS0tLSsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCDqsrDqs7wg6rCSIO2FkOuNlOuvvO2KuOuhnCDsoITri6wKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoMD1PaywgMT1FcnIpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYK"}}),g._v(" "),I("p",[g._v("각 모듈은 미니 상태 기계로 볼 쑤 있습니다. 개발자는 각 모듈이 처리하는 상태의 부분과 상태를 바꾸는 고유 메시지 타입을 정의해야합니다("),I("em",[g._v("참고")]),g._v(": 메시지는 트랜잭션에서 "),I("code",[g._v("baseapp")]),g._v("을 통해 추출됩니다). 통상적으로, 각 모듈은 각자의 "),I("code",[g._v("KVStore")]),g._v("를 "),I("code",[g._v("multistore")]),g._v("에 선언하여 해당 모듈이 정의하는 상태의 부분을 지속합니다. 개발자는 본인의 모듈을 만들때 제 삼자의 모듈을 액세스해야할 수 있습니다. 코스모스-SDK는 오픈 프레임워크이기 때문에, 일부 모듈은 악성 모듈일 가능성이 존재하며 이런 인터-모듈 소통에서 보안 원칙이 존재합니다. 이런 원칙은 "),I("RouterLink",{attrs:{to:"/kr/core/ocap.html"}},[g._v("오브젝트-가능성(object-capabilities)")]),g._v("를 따릅니다. 실전에서는, 각 모듈이 다른 모듈의 액세스 권한 리스트를 관리하는 것이 아니라, 각 모듈이 "),I("code",[g._v("keeper")]),g._v("라는 특별 오브젝트를 구현하여 접근 가능한 권한을 사전에 정의합니다.")],1),g._v(" "),I("p",[g._v("SDK의 모듈은 "),I("code",[g._v("x/")]),g._v(" 폴더 내에 정의되며, 핵심 모듈 중 일부는 다음과 같습니다:")]),g._v(" "),I("ul",[I("li",[I("code",[g._v("x/auth")]),g._v(": 계정과 서명 관리에 사용됨")]),g._v(" "),I("li",[I("code",[g._v("x/bank")]),g._v(": 토큰과 토큰 전송 기능에 사용됨")]),g._v(" "),I("li",[I("code",[g._v("x/staking")]),g._v(" + "),I("code",[g._v("x/slashing")]),g._v(": 지분증명 블록체인을 만들기 위해 사용됨")])]),g._v(" "),I("p",[g._v("모두가 본인의 앱을 만들기 위해 사용할 수 있는 "),I("code",[g._v("x/")]),g._v(" 내 존재하는 모듈 외에도, 코스모스 SDK는 자체 모듈을 개발할 수 있도록합니다. 이에 대한 예시는 "),I("a",{attrs:{href:"https://cosmos.network/docs/tutorial/keeper.html",target:"_blank",rel:"noopener noreferrer"}},[g._v("이 튜토리얼"),I("OutboundLink")],1),g._v("을 참고하세요.")]),g._v(" "),I("h2",{attrs:{hide:"",id:"다음"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#다음"}},[g._v("#")]),g._v(" 다음")]),g._v(" "),I("p",{attrs:{hide:""}},[I("RouterLink",{attrs:{to:"/kr/basics/app-anatomy.html"}},[g._v("코스모스 SDK 애플리케이션 해부학")]),g._v("에 대해서 알아보세요")],1)],1)}),[],!1,null,null,null);C.default=t.exports}}]);