(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{152:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return f}));var a=n(2),i=n.n(a),c=n(5),r=n(36),s=n(74),o=new r.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),l=new r.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),d=new r.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),u=function(){var e=Object(c.a)(i.a.mark((function e(t,n,a){var r,s,o,l,d,u=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>3&&void 0!==u[3]?u[3]:"recent",s=u.length>4&&void 0!==u[4]&&u[4],o=!1,l={slot:0,confirmations:0,err:null},d=0,e.next=7,new Promise(function(){var e=Object(c.a)(i.a.mark((function e(u,m){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),m({timeout:!0}))}),n);try{d=a.onSignature(t,(function(e,t){o=!0,l={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),m(l)):(console.log("Resolved via websocket",e),u(l))}),r)}catch(j){o=!0,console.error("WS error in setup",t,j)}case 2:if(o||!s){e.next=8;break}return Object(c.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.getSignatureStatuses([t]);case 3:n=e.sent,l=n&&n.value[0],o||(l?l.err?(console.log("REST error for",t,l),o=!0,m(l.err)):l.confirmations?(console.log("REST confirmation for",t,l),o=!0,u(l)):console.log("REST no confirmations for",t,l):console.log("REST null result for",t,l)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,O(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return l=e.sent,a._signatureSubscriptions[d]&&a.removeSignatureListener(d),o=!0,console.log("Returning status",l),e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),m=function(t,n,a,i){var c=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:i,isSigner:!1,isWritable:!1},{pubkey:r.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:r.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new r.d.TransactionInstruction({keys:c,programId:l,data:e.from([])})},j=function(){var e=Object(c.a)(i.a.mark((function e(t,n,a){var c,s,l,d,u,m,j,b,x;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new r.b(a,t,{preflightCommitment:"recent"}),e.next=3,r.a.fetchIdl(o,c);case 3:return s=e.sent,l=new r.a(s,o,c),d={id:n,connection:a,program:l},e.next=8,l.account.candyMachine.fetch(n);case 8:return u=e.sent,m=u.data.itemsAvailable.toNumber(),j=u.itemsRedeemed.toNumber(),b=m-j,x=u.data.goLiveDate.toNumber(),x=new Date(1e3*x),console.log({itemsAvailable:m,itemsRedeemed:j,itemsRemaining:b,goLiveDate:x}),e.abrupt("return",{candyMachine:d,itemsAvailable:m,itemsRedeemed:j,itemsRemaining:b,goLiveDate:x});case 16:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.d.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),n.toBuffer(),e.from("edition")],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.d.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),n.toBuffer()],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.d.PublicKey.findProgramAddress([t.toBuffer(),s.b.toBuffer(),n.toBuffer()],l);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(i.a.mark((function e(t,n,a,c){var o,l,u,j,h,f,O;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.d.Keypair.generate(),e.next=3,p(a,o.publicKey);case 3:return l=e.sent,u=t.connection,j=t.program,e.next=7,x(o.publicKey);case 7:return h=e.sent,e.next=10,b(o.publicKey);case 10:return f=e.sent,e.next=13,u.getMinimumBalanceForRentExemption(s.a.span);case 13:return O=e.sent,e.next=16,j.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:a,wallet:c,mint:o.publicKey,metadata:h,masterEdition:f,mintAuthority:a,updateAuthority:a,tokenMetadataProgram:d,tokenProgram:s.b,systemProgram:r.d.SystemProgram.programId,rent:r.d.SYSVAR_RENT_PUBKEY,clock:r.d.SYSVAR_CLOCK_PUBKEY},signers:[o],instructions:[r.d.SystemProgram.createAccount({fromPubkey:a,newAccountPubkey:o.publicKey,space:s.a.span,lamports:O,programId:s.b}),s.c.createInitMintInstruction(s.b,o.publicKey,0,a,a),m(l,a,a,o.publicKey),s.c.createMintToInstruction(s.b,o.publicKey,l,a,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,a,i){return e.apply(this,arguments)}}(),f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},O=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(8).Buffer)},381:function(e,t,n){},382:function(e,t,n){},383:function(e,t,n){},384:function(e,t,n){},390:function(e,t,n){},391:function(e,t,n){},392:function(e,t,n){},393:function(e,t,n){},394:function(e,t,n){},395:function(e,t,n){},396:function(e,t,n){},397:function(e,t){},399:function(e,t){},415:function(e,t){},416:function(e,t){},446:function(e,t){},447:function(e,t,n){},502:function(e,t){},504:function(e,t){},518:function(e,t){},522:function(e,t){},524:function(e,t){},534:function(e,t){},536:function(e,t){},563:function(e,t){},565:function(e,t){},570:function(e,t){},572:function(e,t){},578:function(e,t){},580:function(e,t){},592:function(e,t){},595:function(e,t){},607:function(e,t){},609:function(e,t,n){"use strict";n.r(t);var a,i,c,r,s=n(1),o=n.n(s),l=n(30),d=n.n(l),u=(n(381),n(382),n(383),n(647)),m=n(634),j=n(368),b=n(645),x=(n(384),n(4)),p=function(){return Object(x.jsx)("div",{id:"navbarComponent",children:Object(x.jsx)(u.a,{id:"navbarStyling",bg:"dark",expand:!1,fixed:"top",children:Object(x.jsxs)(m.a,{fluid:!0,children:[Object(x.jsx)(u.a.Brand,{id:"navbarTitle",href:"#",children:"Grumpy Gorilla Gang"}),Object(x.jsx)(u.a.Toggle,{id:"menuBtn","aria-controls":"offcanvasNavbar"}),Object(x.jsxs)(u.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[Object(x.jsx)(j.a.Header,{closeButton:!0,children:Object(x.jsx)(j.a.Title,{id:"offcanvasNavbarLabel",children:"Grumpy Gorilla Gang"})}),Object(x.jsx)(j.a.Body,{children:Object(x.jsxs)(b.a,{className:"justify-content-end flex-grow-1 pe-3",children:[Object(x.jsx)(b.a.Link,{href:"#landingComponent",children:"Home"}),Object(x.jsx)(b.a.Link,{href:"#roadmapContainer",children:"Roadmap"}),Object(x.jsx)(b.a.Link,{href:"#aboutComponent",children:"About us"})]})})]})]})})})},h=(n(390),n.p+"static/media/1.63236f53.png"),f=n.p+"static/media/2.d85d303f.png",O=n.p+"static/media/3.f018319d.png",g=n(635),v=n(636),y=function(){return Object(x.jsxs)("div",{id:"descriptionComponent",children:[Object(x.jsx)("h1",{id:"descTitle",children:"This is another title"}),Object(x.jsx)("p",{id:"descText",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus soluta, dolore provident est culpa eaque nulla distinctio eos placeat maxime! Eveniet reiciendis aut beatae facere facilis deleniti unde praesentium?"}),Object(x.jsx)("div",{id:"descImages",children:Object(x.jsx)(m.a,{children:Object(x.jsxs)(g.a,{children:[Object(x.jsx)(v.a,{xs:6,md:6,sm:6,xl:3,lg:6,xxl:3,children:Object(x.jsx)("div",{className:"descImgContainer",children:Object(x.jsx)("img",{className:"descImg",src:h,alt:""})})})," ",Object(x.jsx)(v.a,{xs:6,md:6,sm:6,xl:3,lg:6,xxl:3,children:Object(x.jsx)("div",{className:"descImgContainer",children:Object(x.jsx)("img",{className:"descImg",src:f,alt:""})})})," ",Object(x.jsx)(v.a,{xs:6,md:6,sm:6,xl:3,lg:6,xxl:3,children:Object(x.jsx)("div",{className:"descImgContainer",children:Object(x.jsx)("img",{className:"descImg",src:O,alt:""})})})," ",Object(x.jsx)(v.a,{xs:6,md:6,sm:6,xl:3,lg:6,xxl:3,children:Object(x.jsx)("div",{className:"descImgContainer",children:Object(x.jsx)("img",{className:"descImg",src:h,alt:""})})})]})})})]})},w=(n(391),function(){return Object(x.jsx)("div",{id:"informationComponent",children:Object(x.jsxs)(m.a,{children:[Object(x.jsxs)(g.a,{children:[Object(x.jsx)(v.a,{xs:12,sm:12,md:12,lg:6,xl:6,xxl:6,children:Object(x.jsx)("div",{className:"infoImgContainer",children:Object(x.jsx)("img",{src:h,alt:"",className:"infoImg"})})}),Object(x.jsx)(v.a,{xs:12,sm:12,md:12,lg:6,xl:6,xxl:6,children:Object(x.jsxs)("div",{className:"infoTextGroup",children:[Object(x.jsx)("h1",{className:"infoTitle",children:"Alpha Group"}),Object(x.jsx)("p",{className:"infoPara",children:"Our alpha group is the main utility behind Grumpy Gorilla Gang, which will be the most powerful alpha on the Blockchain! Our goal is to create a hyper competitive environment by incentivizing our troops in our discord through rewards and payouts via Sol. You can climb the ranks and compete to be the Gorilla General that will be given Solana weekly! To find out more about becoming the Gorilla General, please come check out our Discord."})]})})]}),Object(x.jsxs)(g.a,{children:[Object(x.jsx)(v.a,{xs:12,sm:12,md:12,lg:6,xl:6,xxl:6,children:Object(x.jsxs)("div",{className:"infoTextGroup",children:[Object(x.jsx)("h1",{className:"infoTitle",children:"The Vision"}),Object(x.jsx)("p",{className:"infoPara",children:"We understand that Solana NFTs is a place where people can go from a little capital to an actual sizable amount. Some people have the ability to call NFTs consistently and earn multiples of their capital. Some of these people have no influence or network. Our main goal is to give the power to the people and create a decentralized alpha group that rewards our top members. Anybody can become the General and guide our troops to victory! The real question is who will it be?"})]})}),Object(x.jsx)(v.a,{xs:12,sm:12,md:12,lg:6,xl:6,xxl:6,children:Object(x.jsx)("div",{className:"infoImgContainer",children:Object(x.jsx)("img",{src:f,alt:"",className:"infoImg"})})})]})]})})}),N=(n(392),function(){return Object(x.jsx)("div",{id:"communityComponent",children:Object(x.jsx)("div",{id:"communityGroup",children:Object(x.jsx)("p",{children:"We are implementing 3 new roles for the channel and the most loyal, big brain alpha players will be rewarded via sol and high ranks in our discord."})})})}),S=(n(393),n.p+"static/media/0.626f07fd.png"),P=function(){return Object(x.jsxs)("div",{id:"roadmapComponent",children:[Object(x.jsx)("h1",{className:"roadmapTitle",children:"Roadmap"}),Object(x.jsx)(m.a,{children:Object(x.jsx)(g.a,{children:Object(x.jsx)(v.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:Object(x.jsxs)("div",{id:"roadmapContainer",children:[Object(x.jsxs)("div",{className:"roadmapItem",children:[Object(x.jsx)("h1",{className:"roadmapTitle",children:"Phase 1"}),Object(x.jsxs)(m.a,{children:[Object(x.jsxs)(g.a,{children:[Object(x.jsx)(v.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(x.jsx)("p",{className:"roadmapPara",children:"Generate Artwork for 400 Gorillas"})}),Object(x.jsx)(v.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(x.jsx)("p",{className:"roadmapPara",children:"Launch Twitter"})})," "]}),Object(x.jsxs)(g.a,{children:[Object(x.jsx)(v.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(x.jsx)("p",{className:"roadmapPara",children:"Launch Discord"})}),Object(x.jsx)(v.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(x.jsx)("p",{className:"roadmapPara",children:"Release the 400 Gorillas via a Stealth Launch sometime between December 9th at 10:00 PM UTC and December 12th at 10:00 PM UTC."})})]})]})]})," ",Object(x.jsx)(v.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:Object(x.jsx)("div",{id:"roadmapImgContainer",children:Object(x.jsx)("img",{src:S,alt:"",id:"roadmapImg"})})}),Object(x.jsxs)("div",{className:"roadmapItem",children:[Object(x.jsx)("h1",{className:"roadmapTitle",children:"Phase 2"}),Object(x.jsxs)(m.a,{children:[Object(x.jsxs)(g.a,{children:[Object(x.jsx)(v.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(x.jsx)("p",{className:"roadmapPara",children:"Add Grape Verification to the Discord Server."})}),Object(x.jsx)(v.a,{xs:6,sm:6,md:6,lg:6,xl:6,xxl:6,children:Object(x.jsx)("p",{className:"roadmapPara",children:"Implement new roles for the gorilla holders/soldiers and begin the process of creating the most powerful alpha group on Solana."})})," "]}),Object(x.jsx)(g.a,{children:Object(x.jsx)(v.a,{xs:12,sm:12,md:12,lg:12,xl:12,xxl:12,children:Object(x.jsx)("div",{id:"lastRoadmapPara",children:Object(x.jsx)("p",{className:"roadmapPara",children:"Get listed on Moonrank and Magic Eden"})})})})]})]})," "]})})})})]})},T=(n(394),function(){return Object(x.jsxs)("div",{id:"aboutComponent",children:[Object(x.jsx)("h1",{id:"aboutTitle",children:"About us"}),Object(x.jsx)("p",{className:"aboutPara",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet iste ipsam autem, aspernatur possimus officia consectetur molestiae temporibus, non iusto optio voluptatem reiciendis quibusdam facere atque, libero modi quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet iste ipsam autem, aspernatur possimus officia consectetur molestiae temporibus, non iusto optio voluptatem reiciendis quibusdam facere atque, libero modi quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet iste ipsam autem, aspernatur possimus officia consectetur molestiae temporibus, non iusto optio voluptatem reiciendis quibusdam facere atque, libero modi quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet iste ipsam autem, aspernatur possimus officia consectetur molestiae temporibus, non iusto optio voluptatem reiciendis quibusdam facere atque, libero modi quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet iste ipsam autem, aspernatur possimus officia consectetur molestiae temporibus, non iusto optio voluptatem reiciendis quibusdam facere atque, libero modi quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet iste ipsam autem, aspernatur possimus officia consectetur molestiae temporibus, non iusto optio voluptatem reiciendis quibusdam facere atque, libero modi quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet iste ipsam autem, aspernatur possimus officia consectetur molestiae temporibus, non iusto optio voluptatem reiciendis quibusdam facere atque, libero modi quo."})," "]})}),k=(n(395),n.p+"static/media/discord.c97e04e9.svg"),q=n.p+"static/media/youtube1.133cc783.svg",C=n.p+"static/media/insta.c45b4444.svg",G=n.p+"static/media/twitter.5a5ef6a7.svg",I=function(){return Object(x.jsxs)("div",{id:"footerComponent",children:[Object(x.jsx)("p",{children:"2021 some NFT collection"}),Object(x.jsx)("img",{src:k,alt:""}),Object(x.jsx)("img",{src:q,alt:""}),Object(x.jsx)("img",{src:C,alt:""}),Object(x.jsx)("img",{src:G,alt:""})]})},L=(n(396),function(){return Object(x.jsxs)("div",{id:"faqContainer",children:[Object(x.jsx)("h1",{id:"faqGeneralTitle",children:" FAQ"}),Object(x.jsxs)(m.a,{children:[Object(x.jsx)(g.a,{children:Object(x.jsx)(v.a,{xs:12,md:12,sm:12,xl:12,lg:12,xxl:12,children:Object(x.jsxs)("div",{className:"faqDiv",children:[Object(x.jsx)("h1",{className:"faqTitle",children:"When can you mint?"}),Object(x.jsx)("p",{className:"faqPara",children:"This is a stealth launch, launching will be sometime between November 9th-November 11th."})]})})})," ",Object(x.jsx)(g.a,{children:Object(x.jsx)(v.a,{xs:12,md:12,sm:12,xl:12,lg:12,xxl:12,children:Object(x.jsxs)("div",{className:"faqDiv",children:[Object(x.jsx)("h1",{className:"faqTitle",children:"Where Grumpy Gorillas live?"}),Object(x.jsx)("p",{className:"faqPara",children:"The Gorillas will be eating bananas on the Solana Blockchain"})]})})})," ",Object(x.jsx)(g.a,{children:Object(x.jsx)(v.a,{xs:12,md:12,sm:12,xl:12,lg:12,xxl:12,children:Object(x.jsxs)("div",{className:"faqDiv",children:[Object(x.jsx)("h1",{className:"faqTitle",children:"How many will be minted?"}),Object(x.jsx)("p",{className:"faqPara",children:"There will only be 400 Gorillas available."})]})})})," ",Object(x.jsx)(g.a,{children:Object(x.jsx)(v.a,{xs:12,md:12,sm:12,xl:12,lg:12,xxl:12,children:Object(x.jsxs)("div",{className:"faqDiv",children:[Object(x.jsx)("h1",{className:"faqTitle",children:"How much is it to mint?"}),Object(x.jsx)("p",{className:"faqPara",children:"Mint price will be .2 Solana."})]})})})]})]})}),R=n(9),A=n(2),M=n.n(A),B=n(5),K=n(12),D=n(151),E=n(153),W=n(341),U=n(638),F=n(643),_=n(649),Q=n(648),V=n(16),Y=n(58),H=n(199),z=n(152),J=(n(447),Object(E.a)(H.a)(a||(a=Object(D.a)([""])))),Z=E.a.span(i||(i=Object(D.a)([""]))),X=E.a.div(c||(c=Object(D.a)([""]))),$=Object(E.a)(U.a)(r||(r=Object(D.a)([""]))),ee=function(e){var t=e.days,n=e.hours,a=e.minutes,i=e.seconds;e.completed;return Object(x.jsxs)(Z,{children:[n+24*(t||0)," hours, ",a," minutes, ",i," seconds"]})},te=function(e){var t=Object(s.useState)(),n=Object(K.a)(t,2),a=n[0],i=n[1],c=Object(s.useState)(!1),r=Object(K.a)(c,2),o=r[0],l=r[1],d=Object(s.useState)(!1),u=Object(K.a)(d,2),j=u[0],b=u[1],p=Object(s.useState)(!1),h=Object(K.a)(p,2),f=h[0],O=h[1],y=Object(s.useState)(0),w=Object(K.a)(y,2),N=w[0],P=w[1],T=Object(s.useState)(0),k=Object(K.a)(T,2),q=k[0],C=k[1],G=Object(s.useState)(0),I=Object(K.a)(G,2),L=I[0],A=I[1],D=Object(s.useState)({open:!1,message:"",severity:void 0}),E=Object(K.a)(D,2),U=E[0],H=E[1],Z=Object(s.useState)(new Date(e.startDate)),te=Object(K.a)(Z,2),ne=te[0],ae=te[1],ie=Object(Y.c)(),ce=Object(s.useState)(),re=Object(K.a)(ce,2),se=re[0],oe=re[1],le=function(){Object(B.a)(M.a.mark((function t(){var n,a,i,c,r,s;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(ie){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(z.b)(ie,e.candyMachineId,e.connection);case 4:n=t.sent,a=n.candyMachine,i=n.goLiveDate,c=n.itemsAvailable,r=n.itemsRemaining,s=n.itemsRedeemed,P(c),A(r),C(s),b(0===r),ae(i),oe(a);case 16:case"end":return t.stop()}}),t)})))()},de=function(){var t=Object(B.a)(M.a.mark((function t(){var n,a,c,r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,O(!0),!ie||!(null===se||void 0===se?void 0:se.program)){t.next=10;break}return t.next=5,Object(z.c)(se,e.config,ie.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(z.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(a=t.sent)||void 0===a?void 0:a.err)?H({open:!0,message:"Mint failed! Please try again!",severity:"error"}):H({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),c=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(c="SOLD OUT!",b(!0)):312===t.t0.code&&(c="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?c="SOLD OUT!":t.t0.message.indexOf("0x135")&&(c="Insufficient funds to mint. Please fund your wallet.")),H({open:!0,message:c,severity:"error"});case 17:if(t.prev=17,!ie){t.next=23;break}return t.next=21,e.connection.getBalance(ie.publicKey);case 21:r=t.sent,i(r/V.LAMPORTS_PER_SOL);case 23:return O(!1),le(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){Object(B.a)(M.a.mark((function t(){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ie){t.next=5;break}return t.next=3,e.connection.getBalance(ie.publicKey);case 3:n=t.sent,i(n/V.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[ie,e.connection]),Object(s.useEffect)(le,[ie,e.candyMachineId,e.connection]),Object(x.jsx)("main",{children:Object(x.jsx)("div",{id:"landingComponent",children:Object(x.jsx)(m.a,{children:Object(x.jsxs)(g.a,{children:[Object(x.jsx)(v.a,{xs:6,md:6,sm:6,xl:6,lg:6,xxl:6,children:Object(x.jsxs)("div",{id:"landingText",children:[Object(x.jsx)("h1",{id:"landingTitle",children:"Grumpy Gorilla Gang"}),Object(x.jsxs)("p",{id:"landingPara",children:[" ","400 Grumpy Gorillas eating bananas on the Solana Blockchain!",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"\u201cThe #1 Alpha Group On Solana\u201d"]}),ie&&Object(x.jsxs)("p",{className:"walletPara",children:["Wallet ",Object(z.d)(ie.publicKey.toBase58()||"")]}),ie&&Object(x.jsxs)("p",{className:"walletPara",children:["Balance: ",(a||0).toLocaleString()," SOL"]}),ie&&Object(x.jsxs)("p",{className:"walletPara",children:["Total Available: ",N]}),ie&&Object(x.jsxs)("p",{className:"walletPara",children:["Redeemed: ",q]}),ie&&Object(x.jsxs)("p",{className:"walletPara",children:["Remaining: ",L]}),Object(x.jsx)(X,{children:ie?Object(x.jsx)($,{id:"mintBtn",disabled:j||f||!o,onClick:de,variant:"contained",children:j?"SOLD OUT":o?f?Object(x.jsx)(F.a,{}):"MINT":Object(x.jsx)(W.a,{date:ne,onMount:function(e){return e.completed&&l(!0)},onComplete:function(){return l(!0)},renderer:ee})}):Object(x.jsx)(J,{id:"connectBtn",children:"Connect Wallet"})}),Object(x.jsx)(_.a,{open:U.open,autoHideDuration:6e3,onClose:function(){return H(Object(R.a)(Object(R.a)({},U),{},{open:!1}))},children:Object(x.jsx)(Q.a,{onClose:function(){return H(Object(R.a)(Object(R.a)({},U),{},{open:!1}))},severity:U.severity,children:U.message})})]})}),Object(x.jsx)(v.a,{xs:6,md:6,sm:6,xl:6,lg:6,xxl:6,children:Object(x.jsx)("div",{id:"landingImgContainer",children:Object(x.jsx)("img",{id:"landingImg",src:S,alt:""})})})]})})})})},ne=n(36),ae=n(134),ie=n(369),ce=n(644),re=new ne.d.PublicKey("GfqYSVuiBjfc1m4WrwADqCM3kZpGzKAUt81cTDrCVZ28"),se=new ne.d.PublicKey("7coJNNa98JRswmjwRRhwKrd9Lv8rpiVShzi1Zmc8piCm"),oe=new ne.d.PublicKey("Hrr8cufe5qSic3fXUvEFMonKguobAd7m7MFg5KdM1pDx"),le="devnet",de=new ne.d.Connection("https://explorer-api.devnet.solana.com"),ue=parseInt("1577865600",10),me=Object(ie.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),je=function(){var e=Object(s.useMemo)((function(){return Object(V.clusterApiUrl)(le)}),[]),t=Object(s.useMemo)((function(){return[Object(ae.a)(),Object(ae.b)(),Object(ae.c)(),Object(ae.e)({network:le}),Object(ae.d)({network:le})]}),[]);return Object(x.jsxs)("div",{id:"appComponent",children:[Object(x.jsx)(p,{}),Object(x.jsx)(ce.a,{theme:me,children:Object(x.jsx)(Y.a,{endpoint:e,children:Object(x.jsx)(Y.b,{wallets:t,autoConnect:!0,children:Object(x.jsx)(H.b,{children:Object(x.jsx)(te,{candyMachineId:oe,config:se,connection:de,startDate:ue,treasury:re,txTimeout:3e4})})})})}),Object(x.jsx)(y,{}),Object(x.jsx)(N,{}),Object(x.jsx)(w,{}),Object(x.jsx)(P,{}),Object(x.jsx)(L,{}),Object(x.jsx)(T,{}),Object(x.jsx)(I,{})]})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,650)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};n(608);d.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(je,{})}),document.getElementById("root")),be()}},[[609,1,2]]]);
//# sourceMappingURL=main.b2bff40b.chunk.js.map