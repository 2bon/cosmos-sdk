(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{683:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"module-interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-interfaces"}},[e._v("#")]),e._v(" Module Interfaces")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("This document details how to build CLI and REST interfaces for a module. Examples from various SDK modules are included.")]),e._v(" "),a("h2",{attrs:{id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/building-modules/intro.html"}},[e._v("Building Modules Intro")])],1)]),e._v(" "),a("h2",{attrs:{id:"cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),a("p",[e._v("One of the main interfaces for an application is the "),a("RouterLink",{attrs:{to:"/interfaces/cli.html"}},[e._v("command-line interface")]),e._v(". This entrypoint adds commands from the application's modules to let end-users create "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[a("strong",[e._v("messages")])]),e._v(" and "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[a("strong",[e._v("queries")])]),e._v(". The CLI files are typically found in the "),a("code",[e._v("./x/moduleName/client/cli")]),e._v(" folder.")],1),e._v(" "),a("h3",{attrs:{id:"transaction-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-commands"}},[e._v("#")]),e._v(" Transaction Commands")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/core/transactions.html"}},[e._v("Transactions")]),e._v(" are created by users to wrap messages that trigger state changes when they get included in a valid block. Transaction commands typically have their own "),a("code",[e._v("tx.go")]),e._v(" file in the module "),a("code",[e._v("./x/moduleName/client/cli")]),e._v(" folder. The commands are specified in getter functions and include the name of the command.")],1),e._v(" "),a("p",[e._v("Here is an example from the "),a("code",[e._v("auth")]),e._v(" module:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gR2V0U2lnbkNvbW1hbmQgcmV0dXJucyB0aGUgdHJhbnNhY3Rpb24gc2lnbiBjb21tYW5kLgpmdW5jIEdldFNpZ25Db21tYW5kKCkgKmNvYnJhLkNvbW1hbmQgewoJY21kIDo9ICZhbXA7Y29icmEuQ29tbWFuZHsKCQlVc2U6ICAgJnF1b3Q7c2lnbiBbZmlsZV0mcXVvdDssCgkJU2hvcnQ6ICZxdW90O1NpZ24gdHJhbnNhY3Rpb25zIGdlbmVyYXRlZCBvZmZsaW5lJnF1b3Q7LAoJCUxvbmc6IGBTaWduIHRyYW5zYWN0aW9ucyBjcmVhdGVkIHdpdGggdGhlIC0tZ2VuZXJhdGUtb25seSBmbGFnLgpJdCB3aWxsIHJlYWQgYSB0cmFuc2FjdGlvbiBmcm9tIFtmaWxlXSwgc2lnbiBpdCwgYW5kIHByaW50IGl0cyBKU09OIGVuY29kaW5nLgoKSWYgdGhlIGZsYWcgLS1zaWduYXR1cmUtb25seSBmbGFnIGlzIHNldCwgaXQgd2lsbCBvdXRwdXQgYSBKU09OIHJlcHJlc2VudGF0aW9uCm9mIHRoZSBnZW5lcmF0ZWQgc2lnbmF0dXJlIG9ubHkuCgpUaGUgLS1vZmZsaW5lIGZsYWcgbWFrZXMgc3VyZSB0aGF0IHRoZSBjbGllbnQgd2lsbCBub3QgcmVhY2ggb3V0IHRvIGZ1bGwgbm9kZS4KQXMgYSByZXN1bHQsIHRoZSBhY2NvdW50IGFuZCBzZXF1ZW5jZSBudW1iZXIgcXVlcmllcyB3aWxsIG5vdCBiZSBwZXJmb3JtZWQgYW5kCml0IGlzIHJlcXVpcmVkIHRvIHNldCBzdWNoIHBhcmFtZXRlcnMgbWFudWFsbHkuIE5vdGUsIGludmFsaWQgdmFsdWVzIHdpbGwgY2F1c2UKdGhlIHRyYW5zYWN0aW9uIHRvIGZhaWwuCgpUaGUgLS1tdWx0aXNpZz0mbHQ7bXVsdGlzaWdfa2V5Jmd0OyBmbGFnIGdlbmVyYXRlcyBhIHNpZ25hdHVyZSBvbiBiZWhhbGYgb2YgYSBtdWx0aXNpZyBhY2NvdW50CmtleS4gSXQgaW1wbGllcyAtLXNpZ25hdHVyZS1vbmx5LiBGdWxsIG11bHRpc2lnIHNpZ25lZCB0cmFuc2FjdGlvbnMgbWF5IGV2ZW50dWFsbHkKYmUgZ2VuZXJhdGVkIHZpYSB0aGUgJ211bHRpc2lnbicgY29tbWFuZC4KYCwKCQlQcmVSdW46IHByZVNpZ25DbWQsCgkJUnVuRTogICBtYWtlU2lnbkNtZCgpLAoJCUFyZ3M6ICAgY29icmEuRXhhY3RBcmdzKDEpLAoJfQoKCWNtZC5GbGFncygpLlN0cmluZyhmbGFnTXVsdGlzaWcsICZxdW90OyZxdW90OywgJnF1b3Q7QWRkcmVzcyBvZiB0aGUgbXVsdGlzaWcgYWNjb3VudCBvbiBiZWhhbGYgb2Ygd2hpY2ggdGhlIHRyYW5zYWN0aW9uIHNoYWxsIGJlIHNpZ25lZCZxdW90OykKCWNtZC5GbGFncygpLkJvb2woZmxhZ0FwcGVuZCwgdHJ1ZSwgJnF1b3Q7QXBwZW5kIHRoZSBzaWduYXR1cmUgdG8gdGhlIGV4aXN0aW5nIG9uZXMuIElmIGRpc2FibGVkLCBvbGQgc2lnbmF0dXJlcyB3b3VsZCBiZSBvdmVyd3JpdHRlbi4gSWdub3JlZCBpZiAtLW11bHRpc2lnIGlzIG9uJnF1b3Q7KQoJY21kLkZsYWdzKCkuQm9vbChmbGFnU2lnT25seSwgZmFsc2UsICZxdW90O1ByaW50IG9ubHkgdGhlIGdlbmVyYXRlZCBzaWduYXR1cmUsIHRoZW4gZXhpdCZxdW90OykKCWNtZC5GbGFncygpLlN0cmluZyhmbGFncy5GbGFnT3V0cHV0RG9jdW1lbnQsICZxdW90OyZxdW90OywgJnF1b3Q7VGhlIGRvY3VtZW50IHdpbGwgYmUgd3JpdHRlbiB0byB0aGUgZ2l2ZW4gZmlsZSBpbnN0ZWFkIG9mIFNURE9VVCZxdW90OykKCWNtZC5GbGFncygpLlN0cmluZyhmbGFncy5GbGFnQ2hhaW5JRCwgJnF1b3Q7JnF1b3Q7LCAmcXVvdDtUaGUgbmV0d29yayBjaGFpbiBJRCZxdW90OykKCWNtZC5NYXJrRmxhZ1JlcXVpcmVkKGZsYWdzLkZsYWdGcm9tKQoJZmxhZ3MuQWRkVHhGbGFnc1RvQ21kKGNtZCkKCglyZXR1cm4gY21kCn0="}})],1),e._v(" "),a("p",[e._v("This getter function creates the command for the "),a("code",[e._v("Sign")]),e._v(" transaction. It does the following:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Construct the command:")]),e._v(" Read the "),a("a",{attrs:{href:"https://godoc.org/github.com/spf13/cobra",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cobra Documentation"),a("OutboundLink")],1),e._v(" for details on how to create commands.\n"),a("ul",[a("li",[a("strong",[e._v("Use:")]),e._v(" Specifies the format of a command-line entry users should type in order to invoke this command. In this case, the user uses "),a("code",[e._v("buy-name")]),e._v(" as the name of the transaction command and provides the "),a("code",[e._v("name")]),e._v(" the user wishes to buy and the "),a("code",[e._v("amount")]),e._v(" the user is willing to pay.")]),e._v(" "),a("li",[a("strong",[e._v("Args:")]),e._v(" The number of arguments the user provides, in this case exactly two: "),a("code",[e._v("name")]),e._v(" and "),a("code",[e._v("amount")]),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("Short and Long:")]),e._v(" A description for the function is provided here. A "),a("code",[e._v("Short")]),e._v(" description is expected, and "),a("code",[e._v("Long")]),e._v(" can be used to provide a more detailed description when a user uses the "),a("code",[e._v("--help")]),e._v(" flag to ask for more information.")]),e._v(" "),a("li",[a("strong",[e._v("RunE:")]),e._v(" Defines a function that can return an error, called when the command is executed. Using "),a("code",[e._v("Run")]),e._v(" would do the same thing, but would not allow for errors to be returned.")])])]),e._v(" "),a("li",[a("strong",[a("code",[e._v("RunE")]),e._v(" Function Body:")]),e._v(" The function should be specified as a "),a("code",[e._v("RunE")]),e._v(" to allow for errors to be returned. This function encapsulates all of the logic to create a new transaction that is ready to be relayed to nodes.\n"),a("ul",[a("li",[e._v("The function should first get the "),a("code",[e._v("clientCtx")]),e._v(" with "),a("code",[e._v("client.GetClientContextFromCmd(cmd)")]),e._v(" and "),a("code",[e._v("client.ReadTxCommandFlags(clientCtx, cmd.Flags())")]),e._v(". This context contains all the information provided by the user and will be used to transfer this user-specific information between processes. To learn more about how contexts are used in a transaction, click "),a("RouterLink",{attrs:{to:"/core/transactions.html#transaction-generation"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("If applicable, the command's arguments are parsed.")]),e._v(" "),a("li",[e._v("If applicable, the "),a("code",[e._v("Context")]),e._v(" is used to retrieve any parameters such as the transaction originator's address to be used in the transaction. Here, the "),a("code",[e._v("from")]),e._v(" address is retrieved by calling "),a("code",[e._v("clientCtx.GetFromAddress()")]),e._v(".")]),e._v(" "),a("li",[e._v("A "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html"}},[e._v("message")]),e._v(" is created using all parameters parsed from the command arguments and "),a("code",[e._v("Context")]),e._v(". The constructor function of the specific message type is called directly. It is good practice to call "),a("code",[e._v("ValidateBasic()")]),e._v(" on the newly created message to run a sanity check and check for invalid arguments.")],1),e._v(" "),a("li",[e._v("Depending on what the user wants, the transaction is either generated offline or signed and broadcasted to the preconfigured node using "),a("code",[e._v("GenerateOrBroadcastMsgs()")]),e._v(".")])])]),e._v(" "),a("li",[a("strong",[e._v("Flags.")]),e._v(" Add any "),a("a",{attrs:{href:"#flags"}},[e._v("flags")]),e._v(" to the command. All transaction commands have flags to provide additional information from the user (e.g. amount of fees they are willing to pay). These "),a("em",[e._v("persistent")]),e._v(" "),a("RouterLink",{attrs:{to:"/interfaces/cli.html#flags"}},[e._v("transaction flags")]),e._v(" can be added to a higher-level command so that they apply to all transaction commands.")],1)]),e._v(" "),a("p",[e._v("Finally, the module needs to have a "),a("code",[e._v("GetTxCmd()")]),e._v(", which aggregates all of the transaction commands of the module. Often, each command getter function has its own file in the module's "),a("code",[e._v("cli")]),e._v(" folder, and a separate "),a("code",[e._v("tx.go")]),e._v(" file contains "),a("code",[e._v("GetTxCmd()")]),e._v(". Application developers wishing to include the module's transactions will call this function to add them as subcommands in their CLI. Here is the "),a("code",[e._v("auth")]),e._v(" "),a("code",[e._v("GetTxCmd()")]),e._v(" function, which adds the "),a("code",[e._v("Sign")]),e._v(", "),a("code",[e._v("MultiSign")]),e._v(", "),a("code",[e._v("ValidateSignatures")]),e._v(" and "),a("code",[e._v("SignBatch")]),e._v(" commands.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gR2V0VHhDbWQgcmV0dXJucyB0aGUgdHJhbnNhY3Rpb24gY29tbWFuZHMgZm9yIHRoaXMgbW9kdWxlCmZ1bmMgR2V0VHhDbWQoKSAqY29icmEuQ29tbWFuZCB7Cgl0eENtZCA6PSAmYW1wO2NvYnJhLkNvbW1hbmR7CgkJVXNlOiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzLk1vZHVsZU5hbWUsCgkJU2hvcnQ6ICAgICAgICAgICAgICAgICAgICAgICZxdW90O0F1dGggdHJhbnNhY3Rpb24gc3ViY29tbWFuZHMmcXVvdDssCgkJRGlzYWJsZUZsYWdQYXJzaW5nOiAgICAgICAgIHRydWUsCgkJU3VnZ2VzdGlvbnNNaW5pbXVtRGlzdGFuY2U6IDIsCgkJUnVuRTogICAgICAgICAgICAgICAgICAgICAgIGNsaWVudC5WYWxpZGF0ZUNtZCwKCX0KCXR4Q21kLkFkZENvbW1hbmQoCgkJR2V0TXVsdGlTaWduQ29tbWFuZCgpLAoJCUdldFNpZ25Db21tYW5kKCksCgkJR2V0VmFsaWRhdGVTaWduYXR1cmVzQ29tbWFuZCgpLAoJCUdldFNpZ25CYXRjaENvbW1hbmQoKSwKCSkKCXJldHVybiB0eENtZAp9"}})],1),e._v(" "),a("p",[e._v("An application using this module likely adds "),a("code",[e._v("auth")]),e._v(" module commands to its root "),a("code",[e._v("TxCmd")]),e._v(" command by calling "),a("code",[e._v("txCmd.AddCommand(authModuleClient.GetTxCmd())")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"query-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-commands"}},[e._v("#")]),e._v(" Query Commands")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#queries"}},[e._v("Queries")]),e._v(" allow users to gather information about the application or network state; they are routed by the application and processed by the module in which they are defined. Query commands typically have their own "),a("code",[e._v("query.go")]),e._v(" file in the module "),a("code",[e._v("x/moduleName/client/cli")]),e._v(" folder. Like transaction commands, they are specified in getter functions. Here is an example of a query command from the "),a("code",[e._v("auth")]),e._v(" module:")],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gR2V0QWNjb3VudENtZCByZXR1cm5zIGEgcXVlcnkgYWNjb3VudCB0aGF0IHdpbGwgZGlzcGxheSB0aGUgc3RhdGUgb2YgdGhlCi8vIGFjY291bnQgYXQgYSBnaXZlbiBhZGRyZXNzLgpmdW5jIEdldEFjY291bnRDbWQoKSAqY29icmEuQ29tbWFuZCB7CgljbWQgOj0gJmFtcDtjb2JyYS5Db21tYW5kewoJCVVzZTogICAmcXVvdDthY2NvdW50IFthZGRyZXNzXSZxdW90OywKCQlTaG9ydDogJnF1b3Q7UXVlcnkgZm9yIGFjY291bnQgYnkgYWRkcmVzcyZxdW90OywKCQlBcmdzOiAgY29icmEuRXhhY3RBcmdzKDEpLAoJCVJ1bkU6IGZ1bmMoY21kICpjb2JyYS5Db21tYW5kLCBhcmdzIFtdc3RyaW5nKSBlcnJvciB7CgkJCWNsaWVudEN0eCA6PSBjbGllbnQuR2V0Q2xpZW50Q29udGV4dEZyb21DbWQoY21kKQoJCQljbGllbnRDdHgsIGVyciA6PSBjbGllbnQuUmVhZFF1ZXJ5Q29tbWFuZEZsYWdzKGNsaWVudEN0eCwgY21kLkZsYWdzKCkpCgkJCWlmIGVyciAhPSBuaWwgewoJCQkJcmV0dXJuIGVycgoJCQl9CgoJCQlrZXksIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIoYXJnc1swXSkKCQkJaWYgZXJyICE9IG5pbCB7CgkJCQlyZXR1cm4gZXJyCgkJCX0KCgkJCXF1ZXJ5Q2xpZW50IDo9IHR5cGVzLk5ld1F1ZXJ5Q2xpZW50KGNsaWVudEN0eCkKCQkJcmVzLCBlcnIgOj0gcXVlcnlDbGllbnQuQWNjb3VudChjb250ZXh0LkJhY2tncm91bmQoKSwgJmFtcDt0eXBlcy5RdWVyeUFjY291bnRSZXF1ZXN0e0FkZHJlc3M6IGtleS5TdHJpbmcoKX0pCgkJCWlmIGVyciAhPSBuaWwgewoJCQkJcmV0dXJuIGVycgoJCQl9CgoJCQlyZXR1cm4gY2xpZW50Q3R4LlByaW50T3V0cHV0KHJlcy5BY2NvdW50KQoJCX0sCgl9CgoJZmxhZ3MuQWRkUXVlcnlGbGFnc1RvQ21kKGNtZCkKCglyZXR1cm4gY21kCn0="}})],1),e._v(" "),a("p",[e._v("This query returns the account at a given address. The getter function does the following:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Construct the command.")]),e._v(" Read the "),a("a",{attrs:{href:"https://godoc.org/github.com/spf13/cobra",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cobra Documentation"),a("OutboundLink")],1),e._v(" and the "),a("a",{attrs:{href:"#transaction-commands"}},[e._v("transaction command")]),e._v(" example above for more information. The user must type "),a("code",[e._v("account")]),e._v(" and provide the "),a("code",[e._v("address")]),e._v(" they are querying for as the only argument.")]),e._v(" "),a("li",[a("strong",[a("code",[e._v("RunE")]),e._v(".")]),e._v(" The function should be specified as a "),a("code",[e._v("RunE")]),e._v(" to allow for errors to be returned. This function encapsulates all of the logic to create a new query that is ready to be relayed to nodes.\n"),a("ul",[a("li",[e._v("The function should first initialize a new client "),a("RouterLink",{attrs:{to:"/interfaces/query-lifecycle.html#context"}},[a("code",[e._v("Context")])]),e._v(" as described in the "),a("a",{attrs:{href:"#transaction-commands"}},[e._v("previous section")])],1),e._v(" "),a("li",[e._v("If applicable, the "),a("code",[e._v("Context")]),e._v(" is used to retrieve any parameters (e.g. the query originator's address to be used in the query) and marshal them with the query parameter type, in preparation to be relayed to a node. There are no "),a("code",[e._v("Context")]),e._v(" parameters in this case because the query does not involve any information about the user.")]),e._v(" "),a("li",[e._v("A new "),a("code",[e._v("queryClient")]),e._v(" should be initialized using "),a("code",[e._v("NewQueryClient(clientCtx)")]),e._v(", this method being generated from "),a("code",[e._v("query.proto")]),e._v(". Then it can be used to call the appropriate "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#grpc-queries"}},[e._v("query")]),e._v(".")],1),e._v(" "),a("li",[e._v("The "),a("code",[e._v("clientCtx.PrintProto")]),e._v(" method is used to format a "),a("code",[e._v("proto.Message")]),e._v(" object and print it back to the user.")])])]),e._v(" "),a("li",[a("strong",[e._v("Flags.")]),e._v(" Add any "),a("a",{attrs:{href:"#flags"}},[e._v("flags")]),e._v(" to the command.")])]),e._v(" "),a("p",[e._v("Finally, the module also needs a "),a("code",[e._v("GetQueryCmd")]),e._v(", which aggregates all of the query commands of the module. Application developers wishing to include the module's queries will call this function to add them as subcommands in their CLI. Its structure is identical to the "),a("code",[e._v("GetTxCmd")]),e._v(" command shown above.")]),e._v(" "),a("h3",{attrs:{id:"flags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flags"}},[e._v("#")]),e._v(" Flags")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/interfaces/cli.html#flags"}},[e._v("Flags")]),e._v(" are entered by the user and allow for command customizations. Examples include the "),a("RouterLink",{attrs:{to:"/basics/gas-fees.html"}},[e._v("fees")]),e._v(" or gas prices users are willing to pay for their transactions.")],1),e._v(" "),a("p",[e._v("The flags for a module are typically found in a "),a("code",[e._v("flags.go")]),e._v(" file in the "),a("code",[e._v("./x/moduleName/client/cli")]),e._v(" folder. Module developers can create a list of possible flags including the value type, default value, and a description displayed if the user uses a "),a("code",[e._v("help")]),e._v(" command. In each transaction getter function, they can add flags to the commands and, optionally, mark flags as "),a("em",[e._v("required")]),e._v(" so that an error is thrown if the user does not provide values for them.")]),e._v(" "),a("p",[e._v("For full details on flags, visit the "),a("a",{attrs:{href:"https://github.com/spf13/cobra",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cobra Documentation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("For example, the SDK "),a("code",[e._v("./client/flags")]),e._v(" package includes a "),a("code",[e._v("AddTxFlagsToCmd(cmd *cobra.Command)")]),e._v(" function that adds necessary flags to a transaction command, such as the "),a("code",[e._v("from")]),e._v(" flag to indicate which address the transaction originates from.")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQWRkVHhGbGFnc1RvQ21kIGFkZHMgY29tbW9uIGZsYWdzIHRvIGEgbW9kdWxlIHR4IGNvbW1hbmQuCmZ1bmMgQWRkVHhGbGFnc1RvQ21kKGNtZCAqY29icmEuQ29tbWFuZCkgewoJY21kLkZsYWdzKCkuU3RyaW5nKEZsYWdGcm9tLCAmcXVvdDsmcXVvdDssICZxdW90O05hbWUgb3IgYWRkcmVzcyBvZiBwcml2YXRlIGtleSB3aXRoIHdoaWNoIHRvIHNpZ24mcXVvdDspCgljbWQuRmxhZ3MoKS5VaW50NjRQKEZsYWdBY2NvdW50TnVtYmVyLCAmcXVvdDthJnF1b3Q7LCAwLCAmcXVvdDtUaGUgYWNjb3VudCBudW1iZXIgb2YgdGhlIHNpZ25pbmcgYWNjb3VudCAob2ZmbGluZSBtb2RlIG9ubHkpJnF1b3Q7KQoJY21kLkZsYWdzKCkuVWludDY0UChGbGFnU2VxdWVuY2UsICZxdW90O3MmcXVvdDssIDAsICZxdW90O1RoZSBzZXF1ZW5jZSBudW1iZXIgb2YgdGhlIHNpZ25pbmcgYWNjb3VudCAob2ZmbGluZSBtb2RlIG9ubHkpJnF1b3Q7KQoJY21kLkZsYWdzKCkuU3RyaW5nKEZsYWdNZW1vLCAmcXVvdDsmcXVvdDssICZxdW90O01lbW8gdG8gc2VuZCBhbG9uZyB3aXRoIHRyYW5zYWN0aW9uJnF1b3Q7KQoJY21kLkZsYWdzKCkuU3RyaW5nKEZsYWdGZWVzLCAmcXVvdDsmcXVvdDssICZxdW90O0ZlZXMgdG8gcGF5IGFsb25nIHdpdGggdHJhbnNhY3Rpb247IGVnOiAxMHVhdG9tJnF1b3Q7KQoJY21kLkZsYWdzKCkuU3RyaW5nKEZsYWdHYXNQcmljZXMsICZxdW90OyZxdW90OywgJnF1b3Q7R2FzIHByaWNlcyBpbiBkZWNpbWFsIGZvcm1hdCB0byBkZXRlcm1pbmUgdGhlIHRyYW5zYWN0aW9uIGZlZSAoZS5nLiAwLjF1YXRvbSkmcXVvdDspCgljbWQuRmxhZ3MoKS5TdHJpbmcoRmxhZ05vZGUsICZxdW90O3RjcDovL2xvY2FsaG9zdDoyNjY1NyZxdW90OywgJnF1b3Q7Jmx0O2hvc3QmZ3Q7OiZsdDtwb3J0Jmd0OyB0byB0ZW5kZXJtaW50IHJwYyBpbnRlcmZhY2UgZm9yIHRoaXMgY2hhaW4mcXVvdDspCgljbWQuRmxhZ3MoKS5Cb29sKEZsYWdVc2VMZWRnZXIsIGZhbHNlLCAmcXVvdDtVc2UgYSBjb25uZWN0ZWQgTGVkZ2VyIGRldmljZSZxdW90OykKCWNtZC5GbGFncygpLkZsb2F0NjQoRmxhZ0dhc0FkanVzdG1lbnQsIERlZmF1bHRHYXNBZGp1c3RtZW50LCAmcXVvdDthZGp1c3RtZW50IGZhY3RvciB0byBiZSBtdWx0aXBsaWVkIGFnYWluc3QgdGhlIGVzdGltYXRlIHJldHVybmVkIGJ5IHRoZSB0eCBzaW11bGF0aW9uOyBpZiB0aGUgZ2FzIGxpbWl0IGlzIHNldCBtYW51YWxseSB0aGlzIGZsYWcgaXMgaWdub3JlZCAmcXVvdDspCgljbWQuRmxhZ3MoKS5TdHJpbmdQKEZsYWdCcm9hZGNhc3RNb2RlLCAmcXVvdDtiJnF1b3Q7LCBCcm9hZGNhc3RTeW5jLCAmcXVvdDtUcmFuc2FjdGlvbiBicm9hZGNhc3RpbmcgbW9kZSAoc3luY3xhc3luY3xibG9jaykmcXVvdDspCgljbWQuRmxhZ3MoKS5Cb29sKEZsYWdEcnlSdW4sIGZhbHNlLCAmcXVvdDtpZ25vcmUgdGhlIC0tZ2FzIGZsYWcgYW5kIHBlcmZvcm0gYSBzaW11bGF0aW9uIG9mIGEgdHJhbnNhY3Rpb24sIGJ1dCBkb24ndCBicm9hZGNhc3QgaXQmcXVvdDspCgljbWQuRmxhZ3MoKS5Cb29sKEZsYWdHZW5lcmF0ZU9ubHksIGZhbHNlLCAmcXVvdDtCdWlsZCBhbiB1bnNpZ25lZCB0cmFuc2FjdGlvbiBhbmQgd3JpdGUgaXQgdG8gU1RET1VUICh3aGVuIGVuYWJsZWQsIHRoZSBsb2NhbCBLZXliYXNlIGlzIG5vdCBhY2Nlc3NpYmxlKSZxdW90OykKCWNtZC5GbGFncygpLkJvb2woRmxhZ09mZmxpbmUsIGZhbHNlLCAmcXVvdDtPZmZsaW5lIG1vZGUgKGRvZXMgbm90IGFsbG93IGFueSBvbmxpbmUgZnVuY3Rpb25hbGl0eSZxdW90OykKCWNtZC5GbGFncygpLkJvb2xQKEZsYWdTa2lwQ29uZmlybWF0aW9uLCAmcXVvdDt5JnF1b3Q7LCBmYWxzZSwgJnF1b3Q7U2tpcCB0eCBicm9hZGNhc3RpbmcgcHJvbXB0IGNvbmZpcm1hdGlvbiZxdW90OykKCWNtZC5GbGFncygpLlN0cmluZyhGbGFnS2V5cmluZ0JhY2tlbmQsIERlZmF1bHRLZXlyaW5nQmFja2VuZCwgJnF1b3Q7U2VsZWN0IGtleXJpbmcncyBiYWNrZW5kIChvc3xmaWxlfGt3YWxsZXR8cGFzc3x0ZXN0KSZxdW90OykKCWNtZC5GbGFncygpLlN0cmluZyhGbGFnU2lnbk1vZGUsICZxdW90OyZxdW90OywgJnF1b3Q7Q2hvb3NlIHNpZ24gbW9kZSAoZGlyZWN0fGFtaW5vLWpzb24pLCB0aGlzIGlzIGFuIGFkdmFuY2VkIGZlYXR1cmUmcXVvdDspCgljbWQuRmxhZ3MoKS5VaW50NjQoRmxhZ1RpbWVvdXRIZWlnaHQsIDAsICZxdW90O1NldCBhIGJsb2NrIHRpbWVvdXQgaGVpZ2h0IHRvIHByZXZlbnQgdGhlIHR4IGZyb20gYmVpbmcgY29tbWl0dGVkIHBhc3QgYSBjZXJ0YWluIGhlaWdodCZxdW90OykKCgkvLyAtLWdhcyBjYW4gYWNjZXB0IGludGVnZXJzIGFuZCAmcXVvdDthdXRvJnF1b3Q7CgljbWQuRmxhZ3MoKS5TdHJpbmcoRmxhZ0dhcywgJnF1b3Q7JnF1b3Q7LCBmbXQuU3ByaW50ZigmcXVvdDtnYXMgbGltaXQgdG8gc2V0IHBlci10cmFuc2FjdGlvbjsgc2V0IHRvICVxIHRvIGNhbGN1bGF0ZSBzdWZmaWNpZW50IGdhcyBhdXRvbWF0aWNhbGx5IChkZWZhdWx0ICVkKSZxdW90OywgR2FzRmxhZ0F1dG8sIERlZmF1bHRHYXNMaW1pdCkpCgoJY21kLk1hcmtGbGFnUmVxdWlyZWQoRmxhZ0NoYWluSUQpCgoJY21kLlNldEVycihjbWQuRXJyT3JTdGRlcnIoKSkKCWNtZC5TZXRPdXQoY21kLk91dE9yU3Rkb3V0KCkpCn0="}})],1),e._v(" "),a("p",[e._v("Here is an example of how to add a flag using the "),a("code",[e._v("from")]),e._v(" flag from this function.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y21kLkZsYWdzKCkuU3RyaW5nKEZsYWdGcm9tLCAmcXVvdDsmcXVvdDssICZxdW90O05hbWUgb3IgYWRkcmVzcyBvZiBwcml2YXRlIGtleSB3aXRoIHdoaWNoIHRvIHNpZ24mcXVvdDspCg=="}}),e._v(" "),a("p",[e._v("The input provided for this flag - called "),a("code",[e._v("FlagFrom")]),e._v(" is a string with the default value of "),a("code",[e._v('""')]),e._v(" if none is provided. If the user asks for a description of this flag, the description will be printed.")]),e._v(" "),a("p",[e._v("A flag can be marked as "),a("em",[e._v("required")]),e._v(" so that an error is automatically thrown if the user does not provide a value:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y21kLk1hcmtGbGFnUmVxdWlyZWQoRmxhZ0Zyb20pCg=="}}),e._v(" "),a("p",[e._v("Since "),a("code",[e._v("AddTxFlagsToCmd(cmd *cobra.Command)")]),e._v(" includes all of the basic flags required for a transaction command, module developers may choose not to add any of their own (specifying arguments instead may often be more appropriate).")]),e._v(" "),a("p",[e._v("Similarly, there is a "),a("code",[e._v("AddQueryFlagsToCmd(cmd *cobra.Command)")]),e._v(" to add common flags to a module query command.")]),e._v(" "),a("h2",{attrs:{id:"grpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[e._v("#")]),e._v(" gRPC")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://grpc.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC"),a("OutboundLink")],1),e._v(" is the prefered way for external clients like wallets and exchanges to interact with a node.")]),e._v(" "),a("p",[e._v("In addition to providing an ABCI query pathway, modules "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#grpc-queries"}},[e._v("custom queries")]),e._v(" can provide a GRPC proxy server that routes requests in the GRPC protocol to ABCI query requests under the hood.")],1),e._v(" "),a("p",[e._v("In order to do that, module should implement "),a("code",[e._v("RegisterGRPCGatewayRoutes(clientCtx client.Context, mux *runtime.ServeMux)")]),e._v(" on "),a("code",[e._v("AppModuleBasic")]),e._v(" to wire the client gRPC requests to the correct handler inside the module.")]),e._v(" "),a("p",[e._v("Here's an example from the "),a("code",[e._v("auth")]),e._v(" module:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUmVnaXN0ZXJHUlBDUm91dGVzIHJlZ2lzdGVycyB0aGUgZ1JQQyBHYXRld2F5IHJvdXRlcyBmb3IgdGhlIGF1dGggbW9kdWxlLgpmdW5jIChBcHBNb2R1bGVCYXNpYykgUmVnaXN0ZXJHUlBDUm91dGVzKGNsaWVudEN0eCBjbGllbnQuQ29udGV4dCwgbXV4ICpydW50aW1lLlNlcnZlTXV4KSB7Cgl0eXBlcy5SZWdpc3RlclF1ZXJ5SGFuZGxlckNsaWVudChjb250ZXh0LkJhY2tncm91bmQoKSwgbXV4LCB0eXBlcy5OZXdRdWVyeUNsaWVudChjbGllbnRDdHgpKQp9"}})],1),e._v(" "),a("h2",{attrs:{id:"grpc-gateway-rest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc-gateway-rest"}},[e._v("#")]),e._v(" gRPC-gateway REST")]),e._v(" "),a("p",[e._v("Applications typically support web services that use HTTP requests (e.g. a web wallet like "),a("a",{attrs:{href:"https://lunie.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lunie.io"),a("OutboundLink")],1),e._v(". Thus, application developers can also use REST Routes to route HTTP requests to the application's modules; these routes will be used by service providers.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/grpc-ecosystem/grpc-gateway",target:"_blank",rel:"noopener noreferrer"}},[e._v("grpc-gateway"),a("OutboundLink")],1),e._v(" translates REST calls into gRPC calls, which might be useful for clients that do not use gRPC.")]),e._v(" "),a("p",[e._v("Modules that want to expose REST queries should add "),a("code",[e._v("google.api.http")]),e._v(" annotations to their "),a("code",[e._v("rpc")]),e._v(" methods, such as in the example below from the "),a("code",[e._v("auth")]),e._v(" module:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gUXVlcnkgZGVmaW5lcyB0aGUgZ1JQQyBxdWVyaWVyIHNlcnZpY2UuCnNlcnZpY2UgUXVlcnl7CiAgICAvLyBBY2NvdW50IHJldHVybnMgYWNjb3VudCBkZXRhaWxzIGJhc2VkIG9uIGFkZHJlc3MuCiAgICBycGMgQWNjb3VudCAoUXVlcnlBY2NvdW50UmVxdWVzdCkgcmV0dXJucyAoUXVlcnlBY2NvdW50UmVzcG9uc2UpIHsKICAgICAgb3B0aW9uIChnb29nbGUuYXBpLmh0dHApLmdldCA9ICZxdW90Oy9jb3Ntb3MvYXV0aC92MWJldGExL2FjY291bnRzL3thZGRyZXNzfSZxdW90OzsKICAgIH0KCiAgICAvLyBQYXJhbXMgcXVlcmllcyBhbGwgcGFyYW1ldGVycy4KICAgIHJwYyBQYXJhbXMgKFF1ZXJ5UGFyYW1zUmVxdWVzdCkgcmV0dXJucyAoUXVlcnlQYXJhbXNSZXNwb25zZSkgewogICAgICBvcHRpb24gKGdvb2dsZS5hcGkuaHR0cCkuZ2V0ID0gJnF1b3Q7L2Nvc21vcy9hdXRoL3YxYmV0YTEvcGFyYW1zJnF1b3Q7OwogICAgfQp9Cg=="}}),e._v(" "),a("p",[e._v("gRPC gateway is started in-process along with the application and Tendermint. It can be enabled or disabled by setting gRPC Configuration "),a("code",[e._v("enable")]),e._v(" in "),a("RouterLink",{attrs:{to:"/run-node/run-node.html#configuring-the-node-using-apptoml"}},[a("code",[e._v("app.toml")])]),e._v(".")],1),e._v(" "),a("p",[e._v("The SDK provides a command for generating "),a("a",{attrs:{href:"https://swagger.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger"),a("OutboundLink")],1),e._v(" documentation ("),a("code",[e._v("protoc-gen-swagger")]),e._v("). Setting "),a("code",[e._v("swagger")]),e._v(" in "),a("RouterLink",{attrs:{to:"/run-node/run-node.html#configuring-the-node-using-apptoml"}},[a("code",[e._v("app.toml")])]),e._v(" defines if swagger documentation should be automatically registered.")],1),e._v(" "),a("h2",{attrs:{id:"legacy-rest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#legacy-rest"}},[e._v("#")]),e._v(" Legacy REST")]),e._v(" "),a("p",[e._v("Legacy REST endpoints will be deprecated. But developers may choose to keep using legacy REST endpoints for backward compatibility, although the recommended way is to use "),a("a",{attrs:{href:"#grpc"}},[e._v("gRPC")]),e._v(" and "),a("a",{attrs:{href:"#grpc-gateway-rest"}},[e._v("gRPC-gateway")]),e._v(".")]),e._v(" "),a("p",[e._v("With this implementation, module developers need to define the REST client by defining "),a("a",{attrs:{href:"#register-routes"}},[e._v("routes")]),e._v(" for all possible "),a("a",{attrs:{href:"#request-types"}},[e._v("requests")]),e._v(" and "),a("a",{attrs:{href:"#request-handlers"}},[e._v("handlers")]),e._v(" for each of them. It's up to the module developer how to organize the REST interface files; there is typically a "),a("code",[e._v("rest.go")]),e._v(" file found in the module's "),a("code",[e._v("./x/moduleName/client/rest")]),e._v(" folder.")]),e._v(" "),a("p",[e._v("To support HTTP requests, the module developer needs to define possible request types, how to handle them, and provide a way to register them with a provided router.")]),e._v(" "),a("h3",{attrs:{id:"request-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-types"}},[e._v("#")]),e._v(" Request Types")]),e._v(" "),a("p",[e._v("Request types, which define structured interactions from users, must be defined for all "),a("em",[e._v("transaction")]),e._v(" requests. Users using this method to interact with an application will send HTTP Requests with the required fields in order to trigger state changes in the application. Conventionally, each request is named with the suffix "),a("code",[e._v("Req")]),e._v(", e.g. "),a("code",[e._v("SendReq")]),e._v(" for a Send transaction. Each struct should include a base request "),a("RouterLink",{attrs:{to:"/interfaces/rest.html#basereq"}},[a("code",[e._v("baseReq")])]),e._v(", the name of the transaction, and all the arguments the user must provide for the transaction.")],1),e._v(" "),a("p",[e._v("Here is an example of a request to send coins from the "),a("code",[e._v("bank")]),e._v(" module:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU2VuZFJlcSBkZWZpbmVzIHRoZSBwcm9wZXJ0aWVzIG9mIGEgc2VuZCByZXF1ZXN0J3MgYm9keS4KdHlwZSBTZW5kUmVxIHN0cnVjdCB7CglCYXNlUmVxIHJlc3QuQmFzZVJlcSBganNvbjomcXVvdDtiYXNlX3JlcSZxdW90OyB5YW1sOiZxdW90O2Jhc2VfcmVxJnF1b3Q7YAoJQW1vdW50ICBzZGsuQ29pbnMgICAgYGpzb246JnF1b3Q7YW1vdW50JnF1b3Q7IHlhbWw6JnF1b3Q7YW1vdW50JnF1b3Q7YAp9"}})],1),e._v(" "),a("p",[e._v("The "),a("code",[e._v("BaseReq")]),e._v(" includes basic information that every request needs to have, similar to required flags in a CLI. All of these values, including "),a("code",[e._v("GasPrices")]),e._v(" and "),a("code",[e._v("AccountNumber")]),e._v(", will be provided in the request body. The user will also need to specify the argument "),a("code",[e._v("Amount")]),e._v(" fields in the body.")]),e._v(" "),a("h4",{attrs:{id:"basereq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basereq"}},[e._v("#")]),e._v(" BaseReq")]),e._v(" "),a("p",[a("code",[e._v("BaseReq")]),e._v(" is a type defined in the SDK that encapsulates much of the transaction configurations similar to CLI command flags. Users must provide the information in the body of their requests.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("From")]),e._v(" indicates which "),a("RouterLink",{attrs:{to:"/basics/accounts.html"}},[e._v("account")]),e._v(" the transaction originates from. This account is used to sign the transaction.")],1),e._v(" "),a("li",[a("code",[e._v("Memo")]),e._v(" sends a memo along with the transaction.")]),e._v(" "),a("li",[a("code",[e._v("ChainID")]),e._v(" specifies the unique identifier of the blockchain the transaction pertains to.")]),e._v(" "),a("li",[a("code",[e._v("AccountNumber")]),e._v(" is an identifier for the account.")]),e._v(" "),a("li",[a("code",[e._v("Sequence")]),e._v("is the value of a counter measuring how many transactions have been sent from the account. It is used to prevent replay attacks.")]),e._v(" "),a("li",[a("code",[e._v("TimeoutHeight")]),e._v(" allows a transaction to be rejected if it's committed at a height greater than the timeout.")]),e._v(" "),a("li",[a("code",[e._v("Gas")]),e._v(" refers to how much "),a("RouterLink",{attrs:{to:"/basics/gas-fees.html"}},[e._v("gas")]),e._v(", which represents computational resources, Tx consumes. Gas is dependent on the transaction and is not precisely calculated until execution, but can be estimated by providing auto as the value for "),a("code",[e._v("Gas")]),e._v(".")],1),e._v(" "),a("li",[a("code",[e._v("GasAdjustment")]),e._v(" can be used to scale gas up in order to avoid underestimating. For example, users can specify their gas adjustment as 1.5 to use 1.5 times the estimated gas.")]),e._v(" "),a("li",[a("code",[e._v("GasPrices")]),e._v(" specifies how much the user is willing pay per unit of gas, which can be one or multiple denominations of tokens. For example, --gas-prices=0.025uatom, 0.025upho means the user is willing to pay 0.025uatom AND 0.025upho per unit of gas.")]),e._v(" "),a("li",[a("code",[e._v("Fees")]),e._v(" specifies how much in "),a("RouterLink",{attrs:{to:"/basics/gas-fees.html"}},[e._v("fees")]),e._v(" the user is willing to pay in total. Note that the user only needs to provide either "),a("code",[e._v("gas-prices")]),e._v(" or "),a("code",[e._v("fees")]),e._v(", but not both, because they can be derived from each other.")],1),e._v(" "),a("li",[a("code",[e._v("Simulate")]),e._v(" instructs the application to ignore gas and simulate the transaction running without broadcasting.")])]),e._v(" "),a("h3",{attrs:{id:"request-handlers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-handlers"}},[e._v("#")]),e._v(" Request Handlers")]),e._v(" "),a("p",[e._v("Request handlers must be defined for both transaction and query requests. Handlers' arguments include a reference to the "),a("RouterLink",{attrs:{to:"/interfaces/query-lifecycle.html#context"}},[e._v("client "),a("code",[e._v("Context")])]),e._v(".")],1),e._v(" "),a("p",[e._v("Here is an example of a request handler for the "),a("code",[e._v("bank")]),e._v(" module "),a("code",[e._v("SendReq")]),e._v(" request (the same one shown above):")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTmV3U2VuZFJlcXVlc3RIYW5kbGVyRm4gcmV0dXJucyBhbiBIVFRQIFJFU1QgaGFuZGxlciBmb3IgY3JlYXRpbmcgYSBNc2dTZW5kCi8vIHRyYW5zYWN0aW9uLgpmdW5jIE5ld1NlbmRSZXF1ZXN0SGFuZGxlckZuKGNsaWVudEN0eCBjbGllbnQuQ29udGV4dCkgaHR0cC5IYW5kbGVyRnVuYyB7CglyZXR1cm4gZnVuYyh3IGh0dHAuUmVzcG9uc2VXcml0ZXIsIHIgKmh0dHAuUmVxdWVzdCkgewoJCXZhcnMgOj0gbXV4LlZhcnMocikKCQliZWNoMzJBZGRyIDo9IHZhcnNbJnF1b3Q7YWRkcmVzcyZxdW90O10KCgkJdG9BZGRyLCBlcnIgOj0gc2RrLkFjY0FkZHJlc3NGcm9tQmVjaDMyKGJlY2gzMkFkZHIpCgkJaWYgcmVzdC5DaGVja0JhZFJlcXVlc3RFcnJvcih3LCBlcnIpIHsKCQkJcmV0dXJuCgkJfQoKCQl2YXIgcmVxIFNlbmRSZXEKCQlpZiAhcmVzdC5SZWFkUkVTVFJlcSh3LCByLCBjbGllbnRDdHguTGVnYWN5QW1pbm8sICZhbXA7cmVxKSB7CgkJCXJldHVybgoJCX0KCgkJcmVxLkJhc2VSZXEgPSByZXEuQmFzZVJlcS5TYW5pdGl6ZSgpCgkJaWYgIXJlcS5CYXNlUmVxLlZhbGlkYXRlQmFzaWModykgewoJCQlyZXR1cm4KCQl9CgoJCWZyb21BZGRyLCBlcnIgOj0gc2RrLkFjY0FkZHJlc3NGcm9tQmVjaDMyKHJlcS5CYXNlUmVxLkZyb20pCgkJaWYgcmVzdC5DaGVja0JhZFJlcXVlc3RFcnJvcih3LCBlcnIpIHsKCQkJcmV0dXJuCgkJfQoKCQltc2cgOj0gdHlwZXMuTmV3TXNnU2VuZChmcm9tQWRkciwgdG9BZGRyLCByZXEuQW1vdW50KQoJCXR4LldyaXRlR2VuZXJhdGVkVHhSZXNwb25zZShjbGllbnRDdHgsIHcsIHJlcS5CYXNlUmVxLCBtc2cpCgl9Cn0="}})],1),e._v(" "),a("p",[e._v("The request handler can be broken down as follows:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Parse Request:")]),e._v(" First, it tries to parse the argument "),a("code",[e._v("address")]),e._v(" into a "),a("code",[e._v("AccountAddress")]),e._v(". Then, the request handler attempts to parse the request, and then run "),a("code",[e._v("Sanitize")]),e._v(" and "),a("code",[e._v("ValidateBasic")]),e._v(" on the underlying "),a("code",[e._v("BaseReq")]),e._v(" to check the validity of the request. Finally, it attempts to parse "),a("code",[e._v("BaseReq.From")]),e._v(" to the type "),a("code",[e._v("AccountAddress")]),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("Message:")]),e._v(" Then, a "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[e._v("message")]),e._v(" of the type "),a("code",[e._v("MsgSend")]),e._v(" (defined by the module developer to trigger the state changes for this transaction) is created from the values.")],1),e._v(" "),a("li",[a("strong",[e._v("Generate Transaction:")]),e._v(" Finally, the HTTP "),a("code",[e._v("ResponseWriter")]),e._v(", client "),a("code",[e._v("Context")]),e._v(", request "),a("RouterLink",{attrs:{to:"/interfaces/rest.html#basereq"}},[a("code",[e._v("BaseReq")])]),e._v(", and message is passed to "),a("code",[e._v("WriteGeneratedTxResponse")]),e._v(" to further process the request.")],1)]),e._v(" "),a("p",[e._v("To read more about how a transaction is generated, visit the transactions documentation "),a("RouterLink",{attrs:{to:"/core/transactions.html#transaction-generation"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"register-routes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-routes"}},[e._v("#")]),e._v(" Register Routes")]),e._v(" "),a("p",[e._v("The application CLI entrypoint will have a "),a("code",[e._v("RegisterRoutes")]),e._v(" function in its "),a("code",[e._v("main.go")]),e._v(" file, which calls the "),a("code",[e._v("registerRoutes")]),e._v(" functions of each module utilized by the application. Module developers need to implement "),a("code",[e._v("registerRoutes")]),e._v(" for their modules so that applications are able to route messages and queries to their corresponding handlers and queriers.")]),e._v(" "),a("p",[e._v("The router used by the SDK is "),a("a",{attrs:{href:"https://github.com/gorilla/mux",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gorilla Mux"),a("OutboundLink")],1),e._v(". The router is initialized with the Gorilla Mux "),a("code",[e._v("NewRouter()")]),e._v(" function. Then, the router's "),a("code",[e._v("HandleFunc")]),e._v(' function can then be used to route urls with the defined request handlers and the HTTP method (e.g. "POST", "GET") as a route matcher. It is recommended to prefix every route with the name of the module to avoid collisions with other modules that have the same query or transaction names.')]),e._v(" "),a("p",[e._v("Here is a "),a("code",[e._v("registerRoutes")]),e._v(" function with one query route example from the "),a("a",{attrs:{href:"https://cosmos.network/docs/tutorial/rest.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("nameservice tutorial"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBSZWdpc3RlclJvdXRlcyhjbGlDdHggY2xpZW50LkNvbnRleHQsIHIgKm11eC5Sb3V0ZXIsIGNkYyAqY29kZWMuTGVnYWN5QW1pbm8sIHN0b3JlTmFtZSBzdHJpbmcpIHsKICAvLyBSZXNvbHZlTmFtZSBRdWVyeQogIHIuSGFuZGxlRnVuYyhmbXQuU3ByaW50ZigmcXVvdDsvJXMvbmFtZXMveyVzfSZxdW90Oywgc3RvcmVOYW1lLCByZXN0TmFtZSksIHJlc29sdmVOYW1lSGFuZGxlcihjZGMsIGNsaUN0eCwgc3RvcmVOYW1lKSkuTWV0aG9kcygmcXVvdDtHRVQmcXVvdDspCn0K"}}),e._v(" "),a("p",[e._v("A few things to note:")]),e._v(" "),a("ul",[a("li",[e._v("The router "),a("code",[e._v("r")]),e._v(" has already been initialized by the application and is passed in here as an argument - this function is able to add on the nameservice module's routes onto any application's router. The application must also provide a "),a("RouterLink",{attrs:{to:"/interfaces/query-lifecycle.html#context"}},[a("code",[e._v("Context")])]),e._v(" that the querier will need to process user requests and the application "),a("RouterLink",{attrs:{to:"/core/encoding.html"}},[a("code",[e._v("codec")])]),e._v(" for encoding and decoding application-specific types.")],1),e._v(" "),a("li",[a("code",[e._v('"/%s/names/{%s}", storeName, restName')]),e._v(" is the url for the HTTP request. "),a("code",[e._v("storeName")]),e._v(" is the name of the module, "),a("code",[e._v("restName")]),e._v(" is a variable provided by the user to specify what kind of query they are making.")]),e._v(" "),a("li",[a("code",[e._v("resolveNameHandler")]),e._v(" is the query request handler defined by the module developer. It also takes the application "),a("code",[e._v("codec")]),e._v(" and "),a("code",[e._v("Context")]),e._v(" passed in from the user side, as well as the "),a("code",[e._v("storeName")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v('"GET"')]),e._v(" is the HTTP Request method. As to be expected, queries are typically GET requests. Transactions are typically POST and PUT requests.")])]),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",{attrs:{hide:""}},[e._v("Read about the recommended "),a("RouterLink",{attrs:{to:"/building-modules/structure.html"}},[e._v("module structure")])],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);