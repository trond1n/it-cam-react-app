(this["webpackJsonpit-cam-react"]=this["webpackJsonpit-cam-react"]||[]).push([[3],{292:function(e,s,a){e.exports={dialog:"DialogItem_dialog__7GifU",active:"DialogItem_active__1UDhR",img:"DialogItem_img__301Ls"}},293:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__3zMSf",dialogs__items:"Dialogs_dialogs__items__feYQ9",dialog:"Dialogs_dialog__tjgNR",active:"Dialogs_active__GKyRo",messages:"Dialogs_messages__2HNa-",message:"Dialogs_message__3WUeb"}},294:function(e,s,a){e.exports={message:"Message_message__2lKD4"}},299:function(e,s,a){"use strict";a.r(s);var t=a(18),i=a(9),n=a(127),c=a(5),o=a(35),r=a(36),g=a(38),d=a(37),l=a(1),j=a(0),m=a.n(j),u=a(11),b=function(e){return{isAuth:e.auth.isAuth}},_=a(14),O=a(292),h=a.n(O),f=function(e){var s="/dialogs/"+e.id;return Object(l.jsx)("div",{children:Object(l.jsxs)(_.b,{activeClassName:h.a.active,className:h.a.dialog,to:s,children:[Object(l.jsx)("img",{className:h.a.img,src:e.img,alt:"user avatar"}),e.name]})})},v=a(293),x=a.n(v),p=a(294),D=a.n(p),N=function(e){return Object(l.jsx)("div",{className:D.a.message,children:e.message})},M=a(90),y=a(128),A=a(33),S=a(87),w=Object(S.a)(100),k=Object(y.a)({form:"dialogAddMessageForm"})((function(e){return Object(l.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(l.jsx)("div",{children:Object(l.jsx)(M.a,{validate:[S.b,w],component:A.b,name:"newMessageBody",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 "})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{children:"Send"})})]})})),I=function(e){var s=e.dialogsPage,a=s.dialogsData.map((function(e){return Object(l.jsx)(f,{img:e.img,name:e.name,id:e.id},e.id)})),t=s.messagesData.map((function(e){return Object(l.jsx)(N,{message:e.message,id:e.id},e.id)}));return e.isAuth?Object(l.jsxs)("div",{className:x.a.dialogs,children:[Object(l.jsx)("div",{className:x.a.dialogs__items,children:a}),Object(l.jsx)("div",{className:x.a.messages,children:Object(l.jsx)("div",{children:t})}),Object(l.jsx)(k,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]}):Object(l.jsx)(u.a,{to:"/login"})};s.default=Object(i.d)(Object(t.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(n.b)(s))}}})),(function(e){var s=function(s){Object(g.a)(t,s);var a=Object(d.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return this.props.isAuth?Object(l.jsx)(e,Object(c.a)({},this.props)):Object(l.jsx)(u.a,{to:"/login"})}}]),t}(m.a.Component);return Object(t.b)(b)(s)}))(I)}}]);
//# sourceMappingURL=3.6a26522b.chunk.js.map