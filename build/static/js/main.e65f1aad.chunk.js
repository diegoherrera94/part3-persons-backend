(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{44:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(19),c=t.n(a),i=t(20),u=t(10),o=t(3),s=t(0),l=function(e){var n=e.filter,t=e.handleFilter;return Object(s.jsxs)("div",{children:["filter shown with ",Object(s.jsx)("input",{value:n,onChange:t})]})},d=function(e){var n=e.handleSubmit,t=e.handleNameChange,r=e.handleNumberChange,a=e.newName,c=e.newNumber;return Object(s.jsxs)("form",{onSubmit:n,children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:a,onChange:t})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{value:c,onChange:r})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},f=function(e){var n=e.person,t=e.handleDelete;return Object(s.jsxs)("div",{children:[n.name," ",n.number,Object(s.jsx)("button",{onClick:function(){return t(n.id)},children:"delete"})]})},b=function(e){var n=e.persons,t=e.handleDelete;return Object(s.jsx)(s.Fragment,{children:n.map((function(e){return Object(s.jsx)(f,{person:e,handleDelete:t},e.name)}))})},j=t(5),h=t.n(j),m="/api/persons",O=function(){return h.a.get(m).then((function(e){return e.data}))},p=function(e){return h.a.post(m,e).then((function(e){return e.data}))},v=function(e){return h.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},g=function(e,n){return h.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},x=function(e){var n=e.message;if(null===n.message)return null;var t=n.isError?"error":"notification";return Object(s.jsx)("div",{className:t,children:n.message})},w=(t(44),function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),f=Object(o.a)(c,2),j=f[0],h=f[1],m=Object(r.useState)(""),w=Object(o.a)(m,2),E=w[0],C=w[1],N=Object(r.useState)(""),S=Object(o.a)(N,2),k=S[0],D=S[1],T=Object(r.useState)({message:null,isError:null}),y=Object(o.a)(T,2),F=y[0],U=y[1];Object(r.useEffect)((function(){O().then((function(e){return a(e)}))}),[]);var J=""===k?t:t.filter((function(e){return e.name.toUpperCase().indexOf(k.toUpperCase())>-1}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(x,{message:F}),Object(s.jsx)(l,{filter:k,handleFilter:function(e){D(e.target.value)}}),Object(s.jsx)("h3",{children:"add a new"}),Object(s.jsx)(d,{handleSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===j}));n?window.confirm("".concat(j," is already added to phonebook, replace the old number with a new one"))&&function(e){var n=Object(u.a)(Object(u.a)({},e),{},{number:E});g(e.id,n).then((function(n){a(t.map((function(t){return t.id!==e.id?t:n}))),h(""),C(""),U({message:"Updated number of ".concat(n.name),isError:!1}),setTimeout((function(){U({message:null,isError:null})}),5e3)})).catch((function(n){U({message:"The person '".concat(e.name,"' was already deleted from server"),isError:!0}),setTimeout((function(){U({message:null,isError:null})}),5e3),a(t.filter((function(n){return n.id!==e.id})))}))}(n):p({name:j,number:E}).then((function(e){a([].concat(Object(i.a)(t),[e])),h(""),C(""),U({message:"Added ".concat(e.name),isError:!1}),setTimeout((function(){U({message:null,isError:null})}),5e3)}))},handleNumberChange:function(e){C(e.target.value)},handleNameChange:function(e){h(e.target.value)},newName:j,newNumber:E}),Object(s.jsx)("h3",{children:"Numbers"}),Object(s.jsx)(b,{persons:J,handleDelete:function(e){var n=t.filter((function(n){return n.id===e}))[0];window.confirm("Delete ".concat(n.name," ?"))&&v(e).then((function(){a(t.filter((function(n){return n.id!==e})))})).catch((function(r){U({message:"The person '".concat(n.name,"' was already deleted from server"),isError:!0}),setTimeout((function(){U({message:null,isError:null})}),5e3),a(t.filter((function(n){return n.id!==e})))}))}})]})});c.a.render(Object(s.jsx)(w,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.e65f1aad.chunk.js.map