(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{764:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-034-account-rekeying"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-034-account-rekeying"}},[e._v("#")]),e._v(" ADR 034: Account Rekeying")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("30-09-2020: Initial Draft")])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("PROPOSED")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("Account rekeying is a process hat allows an account to replace its authentication pubkey with a new one.")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Currently, in the Cosmos SDK, the address of an auth "),a("code",[e._v("BaseAccount")]),e._v(" is based on the hash of the public key.  Once an account is created, the public key for the account is set in stone, and cannot be changed.  This can be a problem for users, as key rotation is a useful security practice, but is not possible currently.  Furthermore, as multisigs are a type of pubkey, once a multisig for an account is set, it can not be updated.  This is problematic, as multisigs are often used by organizations or companies, who may need to change their set of multisig signers for internal reasons.")]),e._v(" "),a("p",[e._v('Transferring all the assets of an account to a new account with the updated pubkey is not sufficient, because some "engagements" of an account are not easily transferable.  For example, in staking, to transfer bonded Atoms, an account would have to unbond all delegations and wait the three week unbonding period.  Even more significantly, for validator operators, ownership over a validator is not transferrable at all, meaning that the operator key for a validator can never be updated, leading to poor operational security for validators.')]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("We propose the addition of a new feature to "),a("code",[e._v("x/auth")]),e._v(" that allows accounts to update the public key associated with their account, while keeping the address the same.")]),e._v(" "),a("p",[e._v("This is possible because the Cosmos SDK "),a("code",[e._v("BaseAccount")]),e._v(" stores the public key for an account in state, instead of making the assumption that the public key is included in the transaction (whether explicitly or implicitly through the signature) as in other blockchains such as Bitcoin and Ethereum.  Because the public key is stored on chain, it is okay for the public key to not hash to the address of an account, as the address is not pertinent to the signature checking process.")]),e._v(" "),a("p",[e._v("To build this system, we design a new Msg type as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"c2VydmljZSBNc2cgewogICAgcnBjIENoYW5nZVB1YktleShNc2dDaGFuZ2VQdWJLZXkpIHJldHVybnMgKE1zZ0NoYW5nZVB1YktleVJlc3BvbnNlKTsKfQoKbWVzc2FnZSBNc2dDaGFuZ2VQdWJLZXkgewogIHN0cmluZyBhZGRyZXNzID0gMTsKICBnb29nbGUucHJvdG9idWYuQW55IHB1Yl9rZXkgPSAyOwp9CgptZXNzYWdlIE1zZ0NoYW5nZVB1YktleVJlc3BvbnNlIHt9Cg=="}}),e._v(" "),a("p",[e._v("The MsgChangePubKey transaction needs to be signed by the existing pubkey in state.")]),e._v(" "),a("p",[e._v("Once, approved, the handler for this message type, which takes in the AccountKeeper, will update the in-state pubkey for the account and replace it with the pubkey from the Msg.")]),e._v(" "),a("p",[e._v("An account that has had its pubkey changed cannot be automatically pruned from state.  This is because if pruned, the original pubkey of the account would be needed to recreate the same address, but the owner of the address may not have the original pubkey anymore.  Currently, we do not automatically prune any accounts anyways, but we would like to keep this option open the road (this is the purpose of account numbers).  To resolve this, we charge an additional gas fee for this operation to compensate for this this externality (this bound gas amount is configured as parameter "),a("code",[e._v("PubKeyChangeCost")]),e._v("). The bonus gas is charged inside the handler, using the "),a("code",[e._v("ConsumeGas")]),e._v(" function.  Furthermore, in the future, we can allow accounts that have rekeyed manually prune themselves using a new Msg type such as "),a("code",[e._v("MsgDeleteAccount")]),e._v(".  Manually pruning accounts can give a gas refund as an incentive for performing the action.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CWFtb3VudCA6PSBhay5HZXRQYXJhbXMoY3R4KS5QdWJLZXlDaGFuZ2VDb3N0CgljdHguR2FzTWV0ZXIoKS5Db25zdW1lR2FzKGFtb3VudCwgJnF1b3Q7cHVia2V5IGNoYW5nZSBmZWUmcXVvdDspCg=="}}),e._v(" "),a("p",[e._v("Everytime a key for an address is changed, we will store a log of this change in the state of the chain, thus creating a stack of all previous keys for an address and the time intervals for which they were active.  This allows dapps and clients to easily query past keys for an account which may be useful for features such as verifying timestamped off-chain signed messages.")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Will allow users and validator operators to employ better operational security practices with key rotation.")]),e._v(" "),a("li",[e._v("Will allow organizations or groups to easily change and add/remove multisig signers.")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("p",[e._v("Breaks the current assumed relationship between address and pubkeys as H(pubkey) = address. This has a couple of consequences.")]),e._v(" "),a("ul",[a("li",[e._v("This makes wallets that support this feature more complicated. For example, if an address on chain was updated, the corresponding key in the CLI wallet also needs to be updated.")]),e._v(" "),a("li",[e._v("Cannot automatically prune accounts with 0 balance that have had their pubkey changed.")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("ul",[a("li",[e._v("While the purpose of this is intended to allow the owner of an account to update to a new pubkey they own, this could technically also be used to transfer ownership of an account to a new owner.  For example, this could be use used to sell a staked position without unbonding or an account that has vesting tokens.  However, the friction of this is very high as this would essentially have to be done as a very specific OTC trade. Furthermore, additional constraints could be added to prevent accouns with Vesting tokens to use this feature.")]),e._v(" "),a("li",[e._v("Will require that PubKeys for an account are included in the genesis exports.")])]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[e._v("https://www.algorand.com/resources/blog/announcing-rekeying")])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);