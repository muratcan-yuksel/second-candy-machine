(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{146:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return p}));var a=n(2),c=n.n(a),r=n(4),i=n(36),s=n(73),o=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),l=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),d=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),u=function(){var e=Object(r.a)(c.a.mark((function e(t,n,a){var i,s,o,l,d,u=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>3&&void 0!==u[3]?u[3]:"recent",s=u.length>4&&void 0!==u[4]&&u[4],o=!1,l={slot:0,confirmations:0,err:null},d=0,e.next=7,new Promise(function(){var e=Object(r.a)(c.a.mark((function e(u,j){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),j({timeout:!0}))}),n);try{d=a.onSignature(t,(function(e,t){o=!0,l={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),j(l)):(console.log("Resolved via websocket",e),u(l))}),i)}catch(b){o=!0,console.error("WS error in setup",t,b)}case 2:if(o||!s){e.next=8;break}return Object(r.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.getSignatureStatuses([t]);case 3:n=e.sent,l=n&&n.value[0],o||(l?l.err?(console.log("REST error for",t,l),o=!0,j(l.err)):l.confirmations?(console.log("REST confirmation for",t,l),o=!0,u(l)):console.log("REST no confirmations for",t,l):console.log("REST null result for",t,l)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,O(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return l=e.sent,a._signatureSubscriptions[d]&&a.removeSignatureListener(d),o=!0,console.log("Returning status",l),e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),j=function(t,n,a,c){var r=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:r,programId:l,data:e.from([])})},b=function(){var e=Object(r.a)(c.a.mark((function e(t,n,a){var r,s,l,d,u,j,b,m,x;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new i.b(a,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(o,r);case 3:return s=e.sent,l=new i.a(s,o,r),d={id:n,connection:a,program:l},e.next=8,l.account.candyMachine.fetch(n);case 8:return u=e.sent,j=u.data.itemsAvailable.toNumber(),b=u.itemsRedeemed.toNumber(),m=j-b,x=u.data.goLiveDate.toNumber(),x=new Date(1e3*x),console.log({itemsAvailable:j,itemsRedeemed:b,itemsRemaining:m,goLiveDate:x}),e.abrupt("return",{candyMachine:d,itemsAvailable:j,itemsRedeemed:b,itemsRemaining:m,goLiveDate:x});case 16:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),n.toBuffer(),e.from("edition")],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(r.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),n.toBuffer()],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var e=Object(r.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),s.b.toBuffer(),n.toBuffer()],l);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(c.a.mark((function e(t,n,a,r){var o,l,u,b,h,p,O;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.d.Keypair.generate(),e.next=3,f(a,o.publicKey);case 3:return l=e.sent,u=t.connection,b=t.program,e.next=7,x(o.publicKey);case 7:return h=e.sent,e.next=10,m(o.publicKey);case 10:return p=e.sent,e.next=13,u.getMinimumBalanceForRentExemption(s.a.span);case 13:return O=e.sent,e.next=16,b.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:a,wallet:r,mint:o.publicKey,metadata:h,masterEdition:p,mintAuthority:a,updateAuthority:a,tokenMetadataProgram:d,tokenProgram:s.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[o],instructions:[i.d.SystemProgram.createAccount({fromPubkey:a,newAccountPubkey:o.publicKey,space:s.a.span,lamports:O,programId:s.b}),s.c.createInitMintInstruction(s.b,o.publicKey,0,a,a),j(l,a,a,o.publicKey),s.c.createMintToInstruction(s.b,o.publicKey,l,a,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,a,c){return e.apply(this,arguments)}}(),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},O=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(8).Buffer)},375:function(e,t,n){},376:function(e,t,n){},377:function(e,t,n){},378:function(e,t,n){},384:function(e,t,n){},385:function(e,t,n){},386:function(e,t,n){},387:function(e,t,n){},388:function(e,t,n){},389:function(e,t,n){},390:function(e,t){},392:function(e,t){},408:function(e,t){},409:function(e,t){},439:function(e,t){},440:function(e,t,n){},495:function(e,t){},497:function(e,t){},511:function(e,t){},515:function(e,t){},517:function(e,t){},527:function(e,t){},529:function(e,t){},556:function(e,t){},558:function(e,t){},563:function(e,t){},565:function(e,t){},571:function(e,t){},573:function(e,t){},585:function(e,t){},588:function(e,t){},600:function(e,t){},602:function(e,t,n){"use strict";n.r(t);var a,c,r,i,s=n(1),o=n.n(s),l=n(30),d=n.n(l),u=(n(375),n(376),n(377),n(638)),j=n(627),b=n(639),m=(n(378),n.p+"static/media/icon.a3e34c8a.gif"),x=n(5),f=function(){return Object(x.jsx)("div",{id:"navbarComponent",children:Object(x.jsx)(u.a,{id:"navbarStyling",bg:"dark",expand:"lg",fixed:"top",children:Object(x.jsxs)(j.a,{children:[Object(x.jsxs)(u.a.Brand,{id:"navbarTitle",href:"#landingComponent",children:[" ",Object(x.jsx)("div",{id:"navbarLogoContainer",children:Object(x.jsx)("img",{src:m,alt:"",id:"navbarLogo"})})]}),Object(x.jsx)(u.a.Toggle,{id:"menuBtn","aria-controls":"basic-navbar-nav"}),Object(x.jsx)(u.a.Collapse,{id:"basic-navbar-nav",children:Object(x.jsxs)(b.a,{className:"me-auto",children:[Object(x.jsx)(b.a.Link,{className:"navText",href:"#landingComponent",children:"Home"}),Object(x.jsx)(b.a.Link,{className:"navText",href:"#roadmapComponent",children:"Roadmap"}),Object(x.jsx)(b.a.Link,{className:"navText",href:"#aboutComponent",children:"About us"})]})})]})})})},h=(n(384),n.p+"static/media/1.63236f53.png"),p=n.p+"static/media/2.d85d303f.png",O=n.p+"static/media/3.f018319d.png",g=n(628),v=n(629),y=function(){return Object(x.jsx)("div",{id:"descriptionComponent",children:Object(x.jsx)("div",{id:"descImages",children:Object(x.jsx)(j.a,{children:Object(x.jsxs)(g.a,{children:[Object(x.jsx)(v.a,{xs:6,md:6,sm:6,xl:3,lg:6,xxl:3,children:Object(x.jsx)("div",{className:"descImgContainer",children:Object(x.jsx)("img",{className:"descImg",src:h,alt:""})})})," ",Object(x.jsx)(v.a,{xs:6,md:6,sm:6,xl:3,lg:6,xxl:3,children:Object(x.jsx)("div",{className:"descImgContainer",children:Object(x.jsx)("img",{className:"descImg",src:p,alt:""})})})," ",Object(x.jsx)(v.a,{xs:6,md:6,sm:6,xl:3,lg:6,xxl:3,children:Object(x.jsx)("div",{className:"descImgContainer",children:Object(x.jsx)("img",{className:"descImg",src:O,alt:""})})})," ",Object(x.jsx)(v.a,{xs:6,md:6,sm:6,xl:3,lg:6,xxl:3,children:Object(x.jsx)("div",{className:"descImgContainer",children:Object(x.jsx)("img",{className:"descImg",src:h,alt:""})})})]})})})})},w=(n(385),n(93)),S=n.n(w),N=(n(151),function(){return Object(s.useEffect)((function(){S.a.init({duration:2e3})}),[]),Object(x.jsx)("div",{id:"informationComponent",children:Object(x.jsxs)(j.a,{children:[Object(x.jsxs)(g.a,{children:[Object(x.jsx)(v.a,{xs:12,sm:12,md:12,lg:6,xl:6,xxl:6,children:Object(x.jsx)("div",{className:"infoImgContainer",children:Object(x.jsx)("img",{"data-aos":"flip-left",src:h,alt:"",className:"infoImg"})})}),Object(x.jsx)(v.a,{xs:12,sm:12,md:12,lg:6,xl:6,xxl:6,children:Object(x.jsxs)("div",{className:"infoTextGroup",children:[Object(x.jsx)("h1",{className:"infoTitle",children:"Alpha Group"}),Object(x.jsx)("p",{className:"infoPara",children:"Our alpha group is the main utility behind Grumpy Gorilla Gang, which will be the most powerful alpha on the Blockchain! Our goal is to create a hyper competitive environment by incentivizing our troops in our discord through rewards and payouts via Sol. You can climb the ranks and compete to be the Gorilla General that will be given Solana weekly! To find out more about becoming the Gorilla General, please come check out our Discord."})]})})]}),Object(x.jsxs)(g.a,{children:[Object(x.jsx)(v.a,{xs:12,sm:12,md:12,lg:6,xl:6,xxl:6,children:Object(x.jsxs)("div",{className:"infoTextGroup",children:[Object(x.jsx)("h1",{className:"infoTitle",children:"The Vision"}),Object(x.jsx)("p",{className:"infoPara",children:"We understand that Solana NFTs is a place where people can go from a little capital to an actual sizable amount. Some people have the ability to call NFTs consistently and earn multiples of their capital. Some of these people have no influence or network. Our main goal is to give the power to the people and create a decentralized alpha group that rewards our top members. Anybody can become the General and guide our troops to victory! The real question is who will it be?"})]})}),Object(x.jsx)(v.a,{xs:12,sm:12,md:12,lg:6,xl:6,xxl:6,children:Object(x.jsx)("div",{className:"infoImgContainer",children:Object(x.jsx)("img",{"data-aos":"flip-right",src:p,alt:"",className:"infoImg"})})})]})]})})}),T=(n(386),function(){return Object(s.useEffect)((function(){S.a.init({duration:2e3})}),[]),Object(x.jsxs)("div",{id:"roadmapComponent",children:[Object(x.jsx)("h1",{id:"roadmapTitle",children:"Roadmap"}),Object(x.jsx)("h2",{"data-aos":"zoom-out",className:"phaseTitle",children:"Phase 1"}),Object(x.jsx)("p",{"data-aos":"zoom-out",className:"roadPara",children:"Generate Artwork for 400 Gorillas"})," ",Object(x.jsx)("p",{"data-aos":"zoom-out",className:"roadPara",children:"Launch Twitter"})," ",Object(x.jsx)("p",{"data-aos":"zoom-out",className:"roadPara",children:"Launch Discord"})," ",Object(x.jsx)("p",{"data-aos":"zoom-out",className:"roadPara",children:"Release the 400 Gorillas via a Stealth Launch sometime between December 12th at 10:00 PM UTC and December 15th at 10:00 PM UTC."}),Object(x.jsx)("h2",{"data-aos":"zoom-out",className:"phaseTitle",children:"Phase 2"}),Object(x.jsx)("p",{"data-aos":"zoom-out",className:"roadPara",children:"Add Grape Verification to the Discord Server."})," ",Object(x.jsx)("p",{"data-aos":"zoom-out",className:"roadPara",children:"Implement new roles for the gorilla holders/soldiers and begin the process of creating the most powerful alpha group on Solana."})," ",Object(x.jsx)("p",{"data-aos":"zoom-out",className:"roadPara",children:"Launch Discord"})," ",Object(x.jsx)("p",{"data-aos":"zoom-out",className:"roadPara",children:"Get listed on Moonrank and Magic Eden"})]})}),P=(n(387),function(){return Object(x.jsxs)("div",{id:"aboutComponent",children:[Object(x.jsx)("h1",{id:"aboutTitle",children:"About us"}),Object(x.jsx)("p",{className:"aboutPara",children:"Grumpy Gorilla Gang is a generative art collection of 400 Gorillas living on the Solana Blockchain! The Grumpy Gorillas NFTs main purpose is to serve as a completely decentralized Solana NFT Alpha Group."})," "]})}),k=(n(388),n.p+"static/media/discord.c97e04e9.svg"),C=n.p+"static/media/youtube1.133cc783.svg",G=n.p+"static/media/insta.c45b4444.svg",R=n.p+"static/media/twitter.5a5ef6a7.svg",I=function(){return Object(x.jsxs)("div",{id:"footerComponent",children:[Object(x.jsx)("p",{children:"Grumpy Gorilla Gang"}),Object(x.jsx)("img",{src:k,alt:""}),Object(x.jsx)("img",{src:C,alt:""}),Object(x.jsx)("img",{src:G,alt:""}),Object(x.jsx)("img",{src:R,alt:""})]})},A=(n(389),function(){return Object(s.useEffect)((function(){S.a.init({duration:2e3})}),[]),Object(x.jsxs)("div",{id:"faqContainer",children:[Object(x.jsx)("h1",{id:"faqGeneralTitle",children:" FAQ"}),Object(x.jsxs)(j.a,{children:[Object(x.jsx)(g.a,{children:Object(x.jsx)(v.a,{xs:12,md:12,sm:12,xl:12,lg:12,xxl:12,children:Object(x.jsxs)("div",{"data-aos":"fade-right",className:"faqDiv",children:[Object(x.jsx)("h1",{className:"faqTitle",children:"When can you mint?"}),Object(x.jsx)("p",{className:"faqPara",children:"This is a stealth launch, launching will be sometime between December 12th and December 15th."})]})})})," ",Object(x.jsx)(g.a,{children:Object(x.jsx)(v.a,{xs:12,md:12,sm:12,xl:12,lg:12,xxl:12,children:Object(x.jsxs)("div",{"data-aos":"fade-left",className:"faqDiv",children:[Object(x.jsx)("h1",{className:"faqTitle",children:"Where Grumpy Gorillas live?"}),Object(x.jsx)("p",{className:"faqPara",children:"The Gorillas will be eating bananas on the Solana Blockchain"})]})})})," ",Object(x.jsx)(g.a,{children:Object(x.jsx)(v.a,{xs:12,md:12,sm:12,xl:12,lg:12,xxl:12,children:Object(x.jsxs)("div",{"data-aos":"fade-right",className:"faqDiv",children:[Object(x.jsx)("h1",{className:"faqTitle",children:"How many will be minted?"}),Object(x.jsx)("p",{className:"faqPara",children:"There will only be 400 Gorillas available."})]})})})," ",Object(x.jsx)(g.a,{children:Object(x.jsx)(v.a,{xs:12,md:12,sm:12,xl:12,lg:12,xxl:12,children:Object(x.jsxs)("div",{"data-aos":"fade-left",className:"faqDiv",children:[Object(x.jsx)("h1",{className:"faqTitle",children:"How much is it to mint?"}),Object(x.jsx)("p",{className:"faqPara",children:"Mint price will be .2 Solana."})]})})})]})]})}),M=n(9),L=n(2),B=n.n(L),K=n(4),D=n(12),q=n(145),E=n(147),z=n(336),W=n(631),F=n(636),U=n(642),_=n(641),V=n(16),Y=n(57),H=n(194),J=n(146),Z=(n(440),n.p+"static/media/ico_1.afd19854.gif"),Q=n.p+"static/media/banner.f280c819.png",X=Object(E.a)(H.a)(a||(a=Object(q.a)([""]))),$=E.a.span(c||(c=Object(q.a)([""]))),ee=E.a.div(r||(r=Object(q.a)([""]))),te=Object(E.a)(W.a)(i||(i=Object(q.a)([""]))),ne=function(e){var t=e.days,n=e.hours,a=e.minutes,c=e.seconds;e.completed;return Object(x.jsxs)($,{children:[n+24*(t||0)," hours, ",a," minutes, ",c," seconds"]})},ae=function(e){var t=Object(s.useState)(),n=Object(D.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(!1),i=Object(D.a)(r,2),o=i[0],l=i[1],d=Object(s.useState)(!1),u=Object(D.a)(d,2),b=u[0],m=u[1],f=Object(s.useState)(!1),h=Object(D.a)(f,2),p=h[0],O=h[1],y=Object(s.useState)(0),w=Object(D.a)(y,2),N=w[0],T=w[1],P=Object(s.useState)(0),k=Object(D.a)(P,2),C=k[0],G=k[1],R=Object(s.useState)(0),I=Object(D.a)(R,2),A=I[0],L=I[1],q=Object(s.useState)({open:!1,message:"",severity:void 0}),E=Object(D.a)(q,2),W=E[0],H=E[1],$=Object(s.useState)(new Date(e.startDate)),ae=Object(D.a)($,2),ce=ae[0],re=ae[1],ie=Object(Y.c)(),se=Object(s.useState)(),oe=Object(D.a)(se,2),le=oe[0],de=oe[1],ue=function(){Object(K.a)(B.a.mark((function t(){var n,a,c,r,i,s;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(ie){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(J.b)(ie,e.candyMachineId,e.connection);case 4:n=t.sent,a=n.candyMachine,c=n.goLiveDate,r=n.itemsAvailable,i=n.itemsRemaining,s=n.itemsRedeemed,T(r),L(i),G(s),m(0===i),re(c),de(a);case 16:case"end":return t.stop()}}),t)})))()},je=function(){var t=Object(K.a)(B.a.mark((function t(){var n,a,r,i;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,O(!0),!ie||!(null===le||void 0===le?void 0:le.program)){t.next=10;break}return t.next=5,Object(J.c)(le,e.config,ie.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(J.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(a=t.sent)||void 0===a?void 0:a.err)?H({open:!0,message:"Mint failed! Please try again!",severity:"error"}):H({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),r=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(r="SOLD OUT!",m(!0)):312===t.t0.code&&(r="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?r="SOLD OUT!":t.t0.message.indexOf("0x135")&&(r="Insufficient funds to mint. Please fund your wallet.")),H({open:!0,message:r,severity:"error"});case 17:if(t.prev=17,!ie){t.next=23;break}return t.next=21,e.connection.getBalance(ie.publicKey);case 21:i=t.sent,c(i/V.LAMPORTS_PER_SOL);case 23:return O(!1),ue(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){Object(K.a)(B.a.mark((function t(){var n;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ie){t.next=5;break}return t.next=3,e.connection.getBalance(ie.publicKey);case 3:n=t.sent,c(n/V.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))(),S.a.init({duration:2e3})}),[ie,e.connection]),Object(s.useEffect)(ue,[ie,e.candyMachineId,e.connection]),Object(x.jsx)("main",{children:Object(x.jsxs)("div",{id:"landingComponent",children:[Object(x.jsx)("div",{id:"bannerContainer",children:Object(x.jsx)("img",{id:"banner",src:Q,alt:""})}),Object(x.jsx)(j.a,{children:Object(x.jsxs)(g.a,{children:[Object(x.jsx)(v.a,{xs:6,md:6,sm:6,xl:6,lg:6,xxl:6,children:Object(x.jsxs)("div",{id:"landingText",children:[Object(x.jsx)("h1",{id:"landingTitle",children:"Grumpy Gorilla Gang"}),Object(x.jsxs)("p",{id:"landingPara",children:[" ","400 Grumpy Gorillas eating bananas on the Solana Blockchain!",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"\u201cThe #1 Alpha Group On Solana\u201d"]}),ie&&Object(x.jsxs)("p",{className:"walletPara",children:["Wallet ",Object(J.d)(ie.publicKey.toBase58()||"")]}),ie&&Object(x.jsxs)("p",{className:"walletPara",children:["Balance: ",(a||0).toLocaleString()," SOL"]}),ie&&Object(x.jsxs)("p",{className:"walletPara",children:["Total Available: ",N]}),ie&&Object(x.jsxs)("p",{className:"walletPara",children:["Redeemed: ",C]}),ie&&Object(x.jsxs)("p",{className:"walletPara",children:["Remaining: ",A]}),Object(x.jsx)(ee,{children:ie?Object(x.jsx)(te,{id:"mintBtn",disabled:b||p||!o,onClick:je,variant:"contained",children:b?"SOLD OUT":o?p?Object(x.jsx)(F.a,{}):"MINT":Object(x.jsx)(z.a,{date:ce,onMount:function(e){return e.completed&&l(!0)},onComplete:function(){return l(!0)},renderer:ne})}):Object(x.jsx)(X,{id:"connectBtn",children:"Connect Wallet"})}),Object(x.jsx)(U.a,{open:W.open,autoHideDuration:6e3,onClose:function(){return H(Object(M.a)(Object(M.a)({},W),{},{open:!1}))},children:Object(x.jsx)(_.a,{onClose:function(){return H(Object(M.a)(Object(M.a)({},W),{},{open:!1}))},severity:W.severity,children:W.message})})]})}),Object(x.jsx)(v.a,{xs:6,md:6,sm:6,xl:6,lg:6,xxl:6,children:Object(x.jsx)("div",{id:"landingImgContainer",children:Object(x.jsx)("img",{id:"landingImg","data-aos":"zoom-in",src:Z,alt:""})})})]})})]})})},ce=n(36),re=n(129),ie=n(363),se=n(637),oe=new ce.d.PublicKey("GfqYSVuiBjfc1m4WrwADqCM3kZpGzKAUt81cTDrCVZ28"),le=new ce.d.PublicKey("7coJNNa98JRswmjwRRhwKrd9Lv8rpiVShzi1Zmc8piCm"),de=new ce.d.PublicKey("Hrr8cufe5qSic3fXUvEFMonKguobAd7m7MFg5KdM1pDx"),ue="devnet",je=new ce.d.Connection("https://explorer-api.devnet.solana.com"),be=parseInt("1577865600",10),me=Object(ie.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),xe=function(){var e=Object(s.useMemo)((function(){return Object(V.clusterApiUrl)(ue)}),[]),t=Object(s.useMemo)((function(){return[Object(re.a)(),Object(re.b)(),Object(re.c)(),Object(re.e)({network:ue}),Object(re.d)({network:ue})]}),[]);return Object(x.jsxs)("div",{id:"appComponent",children:[Object(x.jsx)(f,{}),Object(x.jsx)(se.a,{theme:me,children:Object(x.jsx)(Y.a,{endpoint:e,children:Object(x.jsx)(Y.b,{wallets:t,autoConnect:!0,children:Object(x.jsx)(H.b,{children:Object(x.jsx)(ae,{candyMachineId:de,config:le,connection:je,startDate:be,treasury:oe,txTimeout:3e4})})})})}),Object(x.jsx)(N,{}),Object(x.jsx)(T,{}),Object(x.jsx)(A,{}),Object(x.jsx)(y,{}),Object(x.jsx)(P,{}),Object(x.jsx)(I,{})]})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,643)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};n(601);d.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(xe,{})}),document.getElementById("root")),fe()}},[[602,1,2]]]);
//# sourceMappingURL=main.5360bb26.chunk.js.map