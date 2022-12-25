"use strict";(self.webpackChunkquestify=self.webpackChunkquestify||[]).push([[629,475],{2475:function(e,t,a){a.r(t);var l=a(1523),n=a(184);t.default=function(){return(0,n.jsx)("div",{className:"w-screen h-screen flex items-center justify-center bg-black opacity-80",children:(0,n.jsx)(l.BR,{visible:!0,height:"180",width:"1000",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper",color:"#00D7FF"})})}},6851:function(e,t,a){a.r(t),a.d(t,{default:function(){return oe}});var l=a(885),n=a(2791),s=a(184),r=function(e){var t=e.text,a=e.fn;return(0,s.jsx)("button",{className:"w-12 h-12 rounded-full bg-orange text-3xl text-white fixed bottom-8 right-8 transition duration-150 ease-in-out",onClick:a,"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Add a new quest",children:t})},i=a(4165),o=a(5861),c=a(7425),u=a(5562),d=a.n(u),x=a(8827),f=a(4740),m=function(){var e=(0,f.C)((function(e){return e.app.userName}))||"",t=(0,f.C)((function(e){return e.app.userToken})),a=e.charAt(0),l=(0,f.T)(),n=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l((0,x.ak)(t));case 2:localStorage.clear(),d().Notify.info("Logout successful! See you soon!");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,s.jsx)("nav",{className:"h-16 bg-navyblue w-screen flex items-center justify-center  ",children:(0,s.jsxs)("div",{className:"flex justify-between items-center w-[93%]",children:[(0,s.jsx)("h2",{className:" text-azure text-xl",children:"Questify"}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsxs)("div",{className:"flex items-center justify-center",children:[(0,s.jsx)("span",{className:"rounded-full bg-navy w-8 h-8 text-white text-lg font-medium flex justify-center items-center",children:a}),(0,s.jsxs)("p",{className:"hidden md:block ml-2 text-gray text-lg font-light font-Montserrat",children:[e," Quest Log"]})]}),(0,s.jsx)("button",{className:"md:hidden",children:(0,s.jsx)(c.Vac,{className:"fill-navy w-8 h-8 ml-2",onClick:n})})]}),(0,s.jsx)("button",{className:"hidden md:block",children:(0,s.jsx)(c.Vac,{className:"fill-navy w-8 h-8 ml-2",onClick:n})})]})})},h=a(2475),g=a.p+"static/media/empty.f5c9b5fc8e4bb3a3d043.png",p=function(){return(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center mt-8  ",children:[(0,s.jsx)("img",{src:g,alt:"empty state",className:"w-[290px] h-[320px] rounded-2xl"}),(0,s.jsx)("p",{className:"font-Montserrat text-xl font-medium mt-10 text-center",children:'"Hmmm... that orange button must be important..."'})]})},j=a(5112),v=a(7892),b=a.n(v),w=a(1413),C=a(6794),N=a(7792),y=a(6571),q=a(2790),F=function(e){var t=e.dateValue,a=e.setDateValue,l=e.isQuestChallenge;return(0,s.jsx)(y._,{dateAdapter:N.y,children:(0,s.jsx)(q.M,{label:"Select a date",value:t,inputFormat:"DD/MM/YYYY",onChange:function(e){a(e)},renderInput:function(e){return(0,s.jsx)(C.Z,(0,w.Z)({sx:l?{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"white"},color:"white"},svg:{color:"white"}}:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"black"},"&:hover fieldset":{borderColor:"black"},"&.Mui-focused fieldset":{borderColor:"black"},color:"black"}},InputLabelProps:{style:{color:l?"white":"black"}}},e))}})})},k=b()(),A=function(e){var t=e.split("/").map(Number),a=(0,l.Z)(t,3),n=a[0],s=a[1],r=a[2];return new Date(r,s-1,n)},D=k.format("DD/MM/YYYY"),I=k.add(1,"day").format("DD/MM/YYYY"),E=A(D),T=A(I),M=function(e){var t=e.modalDeleteOpen,a=e.isQuestChallenge,l=e.handleDelete,n=e.setModalOpen;return(0,s.jsx)(j.Z,{sx:{color:"#ffff",justifyItems:"center",alignItems:"center",opacity:"1",zIndex:function(e){return e.zIndex.drawer+1}},open:t,className:"open:animate-fade-in",children:(0,s.jsxs)("div",{className:" flex flex-col w-64 h-36 items-center justify-evenly border-solid border-2 bg-navyblue rounded duration-500 ease-in-out ",children:[(0,s.jsx)("h2",{className:"text-center text-lg",children:"Do you want to delete this ".concat(a?"challenge":"quest","?")}),(0,s.jsxs)("ul",{className:"flex justify-around w-9/12 text-lg",children:[(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:"w-12 h-8 border-2 border-solid bg-green-500 text-center",onClick:l,children:"Yes"})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:"w-12 h-8 border-2 border-solid bg-red-500",onClick:function(){return n(!1)},children:"No"})})]})]})})},J=function(e){var t=e.handleChangeLevel,a=e.questLevel,l=e.isQuestChallenge;return(0,s.jsxs)("select",{id:"difficult",name:"difficult",onChange:t,defaultValue:a,className:l?"bg-deepblue text-white":"bg-white text-black",children:[(0,s.jsx)("option",{value:"easy",children:" Easy"}),(0,s.jsx)("option",{value:"normal",children:" Normal"}),(0,s.jsx)("option",{value:"hard",children:"Hard"})]})},R=function(e){var t=e.questCategory,a=e.handleChangeCategories;return(0,s.jsxs)("select",{name:"categories",onChange:a,className:"bg-[#B9C3C8] p-1 rounded-r-xl",defaultValue:t,children:[(0,s.jsx)("option",{value:"stuff",children:"STUFF"}),(0,s.jsx)("option",{value:"family",children:"FAMILY"}),(0,s.jsx)("option",{value:"health",children:"HEALTH"}),(0,s.jsx)("option",{value:"learning",children:"LEARNING"}),(0,s.jsx)("option",{value:"leisure",children:"LEISURE"}),(0,s.jsx)("option",{value:"work",children:"WORK"})]})},S=a(8820),U=function(e){var t=e.isQuestChallenge,a=e.handleChallenge;return(0,s.jsx)("button",{onClick:a,children:t?(0,s.jsx)(S.pHD,{className:"fill-azure w-5 h-5","data-bs-toggle":"tooltip","data-bs-placement":"right",title:"Back to normal quest!"}):(0,s.jsx)(S.YYh,{className:"fill-azure w-5 h-5","data-bs-toggle":"tooltip","data-bs-placement":"right",title:"Make your quest a challenge!"})})},Q=function(e){var t=e.questTitle,a=e.isQuestChallenge;return(0,s.jsx)("input",{name:"title",defaultValue:t,maxLength:20,required:!0,placeholder:a?"Create a challange!":"Create a new quest",className:"border-b-2 border-azure text-azure placeholder:text-gray placeholder:text-center placeholder:text-base outline-0 text-lg w-10/12 ".concat(a?"bg-deepblue":"bg-white")})},Z=a(5763),Y=function(e){var t=e.dotColor;return(0,s.jsx)("span",{children:(0,s.jsx)(Z.DcD,{fill:t,className:"w-5 h-5",id:"dot_color"})})},L=function(){return(0,s.jsx)("span",{className:"text-gray text-lg",children:"|"})},B=function(e){var t=e.closeModalFn;return(0,s.jsx)("button",{className:" text-red-600 transition duration-50 ease-in-out","data-bs-toggle":"tooltip","data-bs-placement":"right",title:"Cancel",type:"button",onClick:t,children:"X"})},V=function(e){var t=e.isQuestChallenge,a=e.setModalOpen;return(0,s.jsx)("button",{type:"button",onClick:function(){return a(!0)},className:"  transition\r duration-50\r ease-in-out","data-bs-toggle":"tooltip","data-bs-placement":"right",title:"Delete ".concat(t?"challenge":"quest","!"),children:(0,s.jsx)(S.VPh,{className:"w-5 h-5 ".concat(t?"text-white":"text-black")})})},z=function(e){var t=e.completeQuest;return(0,s.jsx)("button",{className:"absolute bottom-0 bg-azure text-white rounded-t-xl w-24 font-medium ",onClick:t,children:"DONE!"})},K=a(71),O=function(e){var t=e.isQuestNew;return(0,s.jsx)("button",{className:"text-azure",type:"submit",children:t?(0,s.jsx)("p",{className:" duration-50 ease-in-out","data-bs-toggle":"tooltip","data-bs-placement":"right",title:"Start the new quest!",children:"START"}):(0,s.jsx)(K.kme,{className:"text-green-500 w-5 h-5 duration-50 ease-in-out","data-bs-toggle":"tooltip","data-bs-placement":"right",title:"Save"})})},W=function(e){var t=e.closeModalFn,a=e.questCategory,r=e.questLevel,c=e.questTitle,u=e.isQuestNew,d=e.questDate,m=void 0===d?"":d,h=e.isChallenge,g=e.id,p=e.isDone,j=function(e){switch(e){case"easy":default:return"green";case"normal":return"#00D7FF";case"hard":return"red"}},v=(0,f.T)(),w=u?b()(new Date):b()(function(e){var t=e.split("/"),a=(0,l.Z)(t,3),n=a[0],s=a[1],r=a[2];return"".concat(r,"-").concat(s,"-").concat(n)}(m)),C=(0,n.useState)(b()(w)),N=(0,l.Z)(C,2),y=N[0],q=N[1],k=(0,n.useState)(j(r)),A=(0,l.Z)(k,2),D=A[0],I=A[1],E=(0,f.C)((function(e){return e.app.userEmail})),T=(0,n.useState)(h),S=(0,l.Z)(T,2),Z=S[0],K=S[1],W=(0,n.useState)(!1),G=(0,l.Z)(W,2),P=G[0],H=G[1],X=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(a){var l,n,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),l=a.target,n=a.target,s={title:n.title.value,level:n.difficult.value,category:n.categories.value,date:"".concat(null===y||void 0===y?void 0:y.format("DD/MM/YYYY")),isChallenge:Z,isDone:p},e.next=6,v((0,x.eW)(s));case 6:l.reset(),t();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(a){var l,n,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),l=a.target,n={title:l.title.value,level:l.difficult.value,category:l.categories.value,date:"".concat(null===y||void 0===y?void 0:y.format("DD/MM/YYYY")),isChallenge:Z,isDone:p},s={owner:E,id:g,data:n},v((0,x.lj)(s)),t();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),l={owner:E,id:g,data:{title:c,level:r,category:a,date:m,isChallenge:h,isDone:!0}},v((0,x.lj)(l));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,s.jsx)("div",{className:"w-72 h-72 rounded-2xl  flex flex-col justify-around items-center font-Montserrat relative  text-black ".concat(Z?"bg-deepblue ":"bg-white "),children:(0,s.jsxs)("form",{id:"questForm",className:"w-full h-[80%] flex flex-col-reverse items-center justify-between",onSubmit:u?X:_,children:[!u&&(0,s.jsx)(z,{completeQuest:$}),(0,s.jsxs)("div",{className:"flex justify-between w-full flex-row mb-4",children:[(0,s.jsx)(R,{handleChangeCategories:function(e){var t=e.currentTarget,a=t.value;"stuff"===a&&(t.style.background="#B9C3C8"),"family"===a&&(t.style.background="#FFE6D3"),"health"===a&&(t.style.background="#CDF7FF"),"learning"===a&&(t.style.background="#FFF6C0"),"leisure"===a&&(t.style.background="#F8D2FF"),"work"===a&&(t.style.background="#D3F6CE")},questCategory:a}),(0,s.jsxs)("div",{className:"flex w-4/12 justify-between font-medium mr-3",children:[!u&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(V,{isQuestChallenge:Z,setModalOpen:H}),(0,s.jsx)(L,{})]}),(0,s.jsx)(B,{closeModalFn:t}),(0,s.jsx)(L,{}),(0,s.jsx)(O,{isQuestNew:u})]})]}),(0,s.jsx)(F,{dateValue:y,setDateValue:q,isQuestChallenge:Z}),(0,s.jsx)(Q,{isQuestChallenge:Z,questTitle:c}),(0,s.jsx)("div",{className:"flex w-full",children:(0,s.jsxs)("div",{className:"flex w-full justify-around",children:[(0,s.jsxs)("div",{className:"flex w-9/12",children:[(0,s.jsx)(Y,{dotColor:D}),(0,s.jsx)(J,{handleChangeLevel:function(e){var t=e.currentTarget.value;I(j(t))},isQuestChallenge:Z,questLevel:r})]}),(0,s.jsx)(U,{handleChallenge:function(e){e.preventDefault(),K(!Z)},isQuestChallenge:Z})]})}),P&&(0,s.jsx)(M,{modalDeleteOpen:P,isQuestChallenge:Z,handleDelete:function(){var e={owner:E,id:g};v((0,x.zr)(e)),H(!1)},setModalOpen:H})]})})},G=a(4651),P=function(e){var t,a=e.level;switch(a){case"easy":t="fill-green-500";break;case"normal":t="fill-[#00D7FF]";break;case"hard":t="fill-red-500"}return a?(0,s.jsxs)("div",{className:"flex font-medium text-gray",children:[(0,s.jsx)(Z.DcD,{size:20,className:t}),a.charAt(0).toUpperCase()+a.slice(1)]}):null},H=function(e){var t,a=e.category;return"stuff"===a&&(t="bg-[#B9C3C8]"),"family"===a&&(t="bg-[#FFE6D3]"),"health"===a&&(t="bg-[#CDF7FF]"),"learning"===a&&(t="bg-[#FFF6C0]"),"leisure"===a&&(t="bg-[#F8D2FF]"),"work"===a&&(t="bg-[#D3F6CE]"),(0,s.jsx)("div",{className:"".concat(t," w-32 rounded-r-xl flex items-center justify-center p-[1px]"),children:(0,s.jsx)("p",{className:"text-lg font-Montserrat md:text-base",children:a.toUpperCase()})})},X=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},_=function(e){var t=e.text,a=e.isChallenge;return(0,s.jsx)("p",{className:"text-xl text-center break-all w-titleMobile md:w-titleDefault md:text-lg ".concat(a?"text-white":"text-black"),children:X(t)})},$=a(6856),ee=a(8014),te=a(6355),ae=function(e){var t,a,l=e.date,n=A(l);return n.getTime()===E.getTime()&&(a=(0,s.jsx)($.w79,{fill:"#FF851C",size:20,className:"ml-1"}),t="Today"),n.getTime()===T.getTime()&&(a=(0,s.jsx)(S.QRz,{fill:"#FF851C",size:20,className:"ml-1"}),t="Tomorrow"),n.getTime()>T.getTime()&&(a=(0,s.jsx)(ee.eTY,{fill:"#FF851C",size:20,className:"ml-1"}),t=l),n.getTime()<E.getTime()&&(a=(0,s.jsx)(te.qjb,{fill:"#FF851C",size:20,className:"ml-1"}),t=l),(0,s.jsxs)("div",{className:"text-base text-gray",children:[" ",(0,s.jsxs)("p",{className:"flex items-center justify-center",children:[t," ",a]})]})},le=function(e){var t=e.level,a=e.title,r=e.date,c=e.category,u=e._id,d=e.isChallenge,x=e.isDone,f=(0,n.useState)(!1),m=(0,l.Z)(f,2),h=m[0],g=m[1],p=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(!h);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"relative shadow-[3px_4px_4px_4px_rgba(21,57,90,0.03),-3px_-4px_4px_0px_rgba(21,57,90,0.03)] w-questMobile h-questMobile flex flex-col justify-around rounded-2xl font-Montserrat md:w-questDefault  md:h-questDefault ".concat(d?"bg-deepblue ":"bg-white "),id:u,children:[(0,s.jsxs)("div",{className:"max-w-sm  flex flex-row justify-between mr-2 ml-2 ",children:[(0,s.jsx)(P,{level:t}),(0,s.jsx)("button",{children:(0,s.jsx)(G.$jT,{className:"fill-azure w-5 h-5 transition duration-50 ease-in-out","data-bs-toggle":"tooltip","data-bs-placement":"right",title:"Edit ".concat(d?"challenge":"quest","!"),onClick:p})})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center ",children:[(0,s.jsx)(_,{text:a,isChallenge:d}),(0,s.jsx)(ae,{date:r})]}),(0,s.jsx)(H,{category:c})]}),h&&(0,s.jsx)(j.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:h,className:"w-screen h-screen",children:(0,s.jsx)(W,{closeModalFn:function(){g(!1)},questCategory:c,questLevel:t,questTitle:a,isQuestNew:!1,questDate:r,isChallenge:d,id:u,isDone:x})})]})},ne=a(9126),se=function(e){var t=e.text,a=t.length>20?"".concat(t.substring(0,17),"..."):t;return(0,s.jsx)("p",{className:"break-all text-azure underline",children:X(a)})},re=function(e){var t=e._id,a=e.title,l=(0,f.C)((function(e){return e.app.userEmail})),n=(0,f.T)();return(0,s.jsxs)("div",{className:"shadow-[3px_4px_4px_4px_rgba(21,57,90,0.03),-3px_-4px_4px_0px_rgba(21,57,90,0.03)] w-72 h-64 flex flex-col items-center justify-around rounded-2xl font-Montserrat bg-white",children:[(0,s.jsxs)("h2",{className:"font-medium text-sm  cursor-default text-center w-60 break-all flex ",children:["COMPLETED: \xa0",(0,s.jsx)(se,{text:a})]}),(0,s.jsx)("img",{src:"data:image/png;base64,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",alt:"quest done",className:"w-[144px] h-[124px]"}),(0,s.jsxs)("button",{className:"text-gray flex text-center items-center hover:text-azure",onClick:function(){var e={owner:l,id:t};n((0,x.zr)(e))},children:["Continue ",(0,s.jsx)(ne.lzl,{className:"fill-azure w-5 h-5 ml-2"})]})]})},ie=function(e){var t=e.title,a=e.items;return(0,s.jsx)("div",{className:"flex flex-col justify-center items-center w-[95%]",children:(0,s.jsxs)("div",{className:"flex flex-col w-full justify-center items-center flex-wrap",children:[(0,s.jsxs)("div",{className:"w-full flex justify-start",children:[" ",(0,s.jsx)("p",{className:"mt-4 mb-4 text-lg text-left",children:t})]}),(0,s.jsx)("ul",{className:"flex flex-col items-center justify-center gap-4 w-full flex-wrap md:flex-row md:justify-start ",children:a.map((function(e){return(0,s.jsx)("li",{className:"w-questMobile h-questMobile md:w-questDefault md:h-questDefault",children:e.isDone?(0,s.jsx)(re,{title:e.title,_id:e._id}):(0,s.jsx)(le,{category:e.category,date:e.date,isChallenge:e.isChallenge,level:e.level,title:e.title,_id:e._id,isDone:e.isDone})},e._id)}))})]})})},oe=function(){var e=(0,f.C)((function(e){return e.app.isLoading})),t=(0,f.C)((function(e){return e.app.userToken})),a=(0,f.C)((function(e){return e.app.items})),i=(0,f.T)(),o=(0,n.useState)(!1),c=(0,l.Z)(o,2),u=c[0],d=c[1],g=[],v=[],b=[],w=[];return a.forEach((function(e){var t=A(e.date),a=E,l=T;t.getTime()===a.getTime()?g.push(e):t.getTime()===l.getTime()?v.push(e):t.getTime()>l.getTime()?b.push(e):t.getTime()<a.getTime()&&w.push(e)})),b.sort((function(e,t){var a=A(e.date),l=A(t.date);return a.getTime()-l.getTime()})),w.sort((function(e,t){var a=A(e.date),l=A(t.date);return a.getTime()-l.getTime()})),(0,n.useEffect)((function(){i((0,x.dk)(t))}),[i,t]),(0,s.jsxs)("div",{className:" min-h-screen h-fit bg-darkwhite pb-8",children:[(0,s.jsx)(m,{}),e?(0,s.jsx)(h.default,{}):(0,s.jsxs)("section",{className:"relative flex flex-col flex-wrap  items-center font-Montserrat max-w-screen min-w-screen ",children:[a.length>0?(0,s.jsxs)(s.Fragment,{children:[w.length>0&&(0,s.jsx)(ie,{items:w,title:"Time's up:"}),g.length>0&&(0,s.jsx)(ie,{items:g,title:"Today:"}),v.length>0&&(0,s.jsx)(ie,{items:v,title:"Tomorrow:"}),b.length>0&&(0,s.jsx)(ie,{items:b,title:"Next days:"})]}):(0,s.jsx)(p,{}),(0,s.jsx)(r,{text:"+",fn:function(){d(!u)}}),(0,s.jsx)(j.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:u,children:(0,s.jsx)(W,{questCategory:"stuff",questDate:"",questLevel:"easy",questTitle:"",closeModalFn:function(){d(!1)},id:"",isQuestNew:!0,isChallenge:!1,isDone:!1})})]})]})}}}]);
//# sourceMappingURL=629.ed0f89e8.chunk.js.map