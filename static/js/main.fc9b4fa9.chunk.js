(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(18),s=n.n(r),i=(n(23),n(24),n(3)),o=n.n(i),u=n(4),l=n(8),d=n(5),h=n.n(d),j=(n(44),n(0)),p=function(e){var t=e.task,n=e.deleteTask,c=e.id,a=e.toggleCheck;return Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{className:"check-box",type:"checkbox",onClick:function(e){var t=e.target.checked?{done:!0}:{done:!1};a(c,t)}}),Object(j.jsx)("label",{htmlFor:"task",children:t})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"deletBtn",onClick:function(){return n(c)},children:"Delete"})})]})},b=function(e){var t=e.handleInput,n=e.task,c=e.inputValue;return Object(j.jsx)("div",{id:"add-task",children:Object(j.jsxs)("form",{onSubmit:n,children:[Object(j.jsx)("input",{className:"add-Task-input",type:"text",onChange:t,value:c}),Object(j.jsx)("button",{children:"Add"})]})})},f=function(e){var t=e.taskNumber,n=e.remains;return Object(j.jsxs)("div",{id:"header",children:[Object(j.jsxs)("h1",{children:[t," Tasks"]}),Object(j.jsxs)("span",{children:["task remain ",n.length]})]})},x=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),s=Object(l.a)(r,2),i=s[0],d=s[1],x=Object(c.useState)(!1),O=Object(l.a)(x,2),k=O[0],v=O[1],m="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjJlM2U1MzVkODdiZmYxMzBiOTJlZiIsIm5hbWUiOiJUYWxUIiwiaWF0IjoxNjMzODcwODI5LCJleHAiOjE2MzUwODA0Mjl9.VaTiwyqup-dO5YcnnYlSwCyfCGSvxxcxF70W0HQ0TFo",g="http://todo.etodo.xyz/api/v1";function y(){return(y=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.a.create({baseURL:g,headers:{Authorization:"Bearer ".concat(m)}}),e.prev=1,e.next=4,t.get("/tasks").then((function(e){d(e.data.docs)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}function I(){return(I=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h.a.create({baseURL:g,headers:{Authorization:"Bearer ".concat(m)}}),e.prev=1,e.next=4,n.post("/tasks",t).then((function(e){console.log(e)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}function w(e,t){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(o.a.mark((function e(t,n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=h.a.create({baseURL:g,headers:{Authorization:"Bearer ".concat(m)}}),e.prev=1,e.next=4,c.patch("/tasks/".concat(t),n).then((function(e){console.log(e),v(!0)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}function N(e){return z.apply(this,arguments)}function z(){return(z=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h.a.create({baseURL:g,headers:{Authorization:"Bearer ".concat(m)}}),e.prev=1,e.next=4,n.delete("/tasks/".concat(t)).then((function(){v(!0)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){y.apply(this,arguments)}(),v(!1)}),[k]);return Object(j.jsxs)("div",{id:"container",children:[i?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{taskNumber:i.length,remains:function(){if(i)return i.filter((function(e){return!0!==e.done}))}()}),Object(j.jsx)("ul",{children:i.map((function(e){return Object(j.jsx)("li",{className:e.done?"task-li-done":"task-li",children:Object(j.jsx)(p,{toggleCheck:w,task:e.title,id:e._id,deleteTask:N},e._id)})}))})]}):Object(j.jsx)("h1",{children:"No tasks yet..."}),Object(j.jsx)(b,{handleInput:function(e){a(e.target.value)},inputValue:n,task:function(e){e.preventDefault(),function(e){I.apply(this,arguments)}({title:n,body:"",done:!1}),v(!0),a("")}})]})};var O=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(x,{})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),k()}},[[46,1,2]]]);
//# sourceMappingURL=main.fc9b4fa9.chunk.js.map