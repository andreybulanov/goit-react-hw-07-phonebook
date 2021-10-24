(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{27:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a,r,c,o,i,s,u=n(0),d=n.n(u),b=n(14),l=n.n(b),j=(n(27),n(4)),p=n(5),f=p.a.h1(a||(a=Object(j.a)(["\nmargin-left: 75px;\ncolor: gray;\n"]))),O=p.a.h2(r||(r=Object(j.a)(["\n  margin-left: 75px;\n"]))),m=n(10),x=n(18),h=n(7),g=Object(x.a)({reducerPath:"contactsApi",baseQuery:Object(h.d)({baseUrl:"https://617187f3c20f3a001705fdb5.mockapi.io/api/v1"}),tagTypes:["Contacts"],endpoints:function(e){return{fetchContacts:e.query({query:function(){return"/contacts"},providesTags:["Contacts"]}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:["Contacts"]}),createContact:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:e}},invalidatesTags:["Contacts"]})}}}),v=g.useFetchContactsQuery,y=g.useDeleteContactMutation,C=g.useCreateContactMutation,w=p.a.form(c||(c=Object(j.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 40px;\n  padding: 30px;\n  border: none;\n  border-radius: 4px;\n"]))),k=p.a.label(o||(o=Object(j.a)(["\n  font-size: 14px;\n"]))),z=p.a.input(i||(i=Object(j.a)(["\n  padding: 4px;\n  margin-top: 4px;\n"]))),A=p.a.button(s||(s=Object(j.a)(["\n  width: fit-content;\n  padding: 10px;\n  margin-top: 8px;\n  font-size: 14px;\n  background-color: #0eebdc;\n  border: none;\n  border-radius: 10px;\n  &:hover,\n  &:active {\n    cursor: pointer;\n    background-color: #15c2b6;\n  }\n"]))),F=n(17),T=n(2);var q,S,E,L,D,M=function(){var e=Object(u.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(u.useState)(""),c=Object(m.a)(r,2),o=c[0],i=c[1],s=C(),d=Object(m.a)(s,1)[0],b=v().data,l=function(e){switch(e.target.name){case"name":a(e.target.value);break;case"number":i(e.target.value);break;default:return}};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(w,{action:"",onSubmit:function(e){e.preventDefault(),b.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?Object(F.b)("".concat(n," is already in contacts"),{icon:"\ud83d\udc4f",style:{borderRadius:"10px",background:"#333",color:"#fff",duration:4e3}}):(d({name:n,number:o}),a(""),i(""))},children:[Object(T.jsx)(k,{htmlFor:"name",children:"Name"}),Object(T.jsx)(z,{onChange:l,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(T.jsx)(k,{htmlFor:"number",children:"Number"}),Object(T.jsx)(z,{onChange:l,type:"tel",name:"number",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(T.jsx)(A,{type:"submit",children:" Add contact"})]}),Object(T.jsx)(F.a,{})]})},P=p.a.ul(q||(q=Object(j.a)(["\n  list-style-type: circle;\n  margin-left: 20px;\n"]))),J=p.a.li(S||(S=Object(j.a)(["\n  margin-top: 8px;\n  font-size: 18px;\n"]))),Z=p.a.div(E||(E=Object(j.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 60px;\n"]))),B=p.a.input(L||(L=Object(j.a)(["\n  padding: 4px;\n  margin-top: 4px;\n"]))),N=p.a.label(D||(D=Object(j.a)(["\n  font-weight: 500;\n"])));var Q=function(e){var t=e.filter;return Object(T.jsxs)(Z,{children:[Object(T.jsx)(N,{htmlFor:"filter",children:"Find contacts by name"}),Object(T.jsx)(B,{type:"text",name:"filter",onChange:function(e){t(e.target.value)}})]})};var I=function(){var e=Object(u.useState)([]),t=Object(m.a)(e,2),n=t[0],a=t[1],r=v().data,c=y(),o=Object(m.a)(c,1)[0];return Object(u.useEffect)((function(){r&&a(r)}),[r]),Object(T.jsxs)("div",{children:[Object(T.jsx)(Q,{filter:function(e){if(e){var t=e.toLowerCase(),c=n.filter((function(e){return e.name.toLowerCase().includes(t)}));a(c)}else a(r)}}),Object(T.jsx)(P,{children:n.map((function(e){var t=e.id,n=e.name,a=e.number;return Object(T.jsxs)(J,{children:[n," - ",a," ",Object(T.jsx)(A,{type:"button",onClick:function(){return o(t)},children:"Delete"})]},t)}))})]})};function R(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(f,{children:"Phonebook"}),Object(T.jsx)(M,{}),Object(T.jsx)(O,{children:"Contacts"}),Object(T.jsx)(I,{})]})}var U=n(6),$=n(21),G=n(11),H=n(1),K=n(20),V=n.n(K),W=Object(H.a)({reducer:Object(G.a)({},g.reducerPath,g.reducer),middleware:function(e){return[].concat(Object($.a)(e()),[g.middleware,V.a])},devTools:!1});l.a.render(Object(T.jsx)(d.a.StrictMode,{children:Object(T.jsx)(U.a,{store:W,children:Object(T.jsx)(R,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.147d142e.chunk.js.map