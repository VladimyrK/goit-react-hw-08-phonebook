"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[609],{609:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(861),a=t(885),s=t(757),i=t.n(s),u=t(48),o=t(320),c=t(895),l=t(140),d=t(184);var h=function(e){var n=e.onSubmit;return(0,d.jsxs)("form",{onSubmit:n,children:[(0,d.jsxs)("label",{children:["Name",(0,d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,d.jsxs)("label",{children:["Number",(0,d.jsx)("input",{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,d.jsx)("button",{children:"Add contact"})]})};var p=function(e){var n=e.id,t=e.phone,r=e.name,s=(0,o.Nt)(),i=(0,a.Z)(s,1)[0];return(0,d.jsxs)("li",{children:[(0,d.jsxs)("p",{children:[r,": ",t]}),(0,d.jsx)("button",{type:"button",onClick:function(){return i(n)},children:"Delete"})]})},m=function(e){var n=e.items;return(0,d.jsx)("ul",{children:n.map((function(e){var n=e.id,t=e.name,r=e.phone;return(0,d.jsx)(p,{id:n,name:t,phone:r},n)}))})},f=function(e){var n=e.value,t=e.onFilter;return(0,d.jsxs)("label",{children:["Find contacts by name",(0,d.jsx)("input",{type:"text",name:"filter",value:n,onChange:t})]})};var x=function(){var e=(0,o.Jx)().data,n=(0,o.Lr)(),t=(0,a.Z)(n,1)[0],s=(0,u.v9)((function(e){return e.filter.filter})),p=(0,u.I0)(),x=function(){var e=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t([n.currentTarget.elements.name.value,n.currentTarget.elements.phone.value]),n.currentTarget.reset(),l.Am.success("\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430!");case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var n=s.toLowerCase(),t=[];return e&&(t=e.filter((function(e){return e.name.toLowerCase().includes(n)}))),t}();return(0,d.jsxs)("div",{className:"App",children:[(0,d.jsx)("h1",{children:"Phonebook"}),(0,d.jsx)(h,{onSubmit:x}),(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)(f,{value:s,onFilter:function(e){return p((0,c.KJ)(e.currentTarget.value))}}),e&&(0,d.jsx)(m,{items:v}),(0,d.jsx)(l.x7,{position:"top-center"})]})}}}]);
//# sourceMappingURL=609.b49ee637.chunk.js.map