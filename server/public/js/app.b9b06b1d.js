(function(e){function t(t){for(var r,s,a=t[0],l=t[1],i=t[2],u=0,b=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&b.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,i||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],r=!0,a=1;a<o.length;a++){var l=o[a];0!==n[l]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=o[0]))}return e}var r={},n={app:0},c=[];function s(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=r,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(o,r,function(t){return e[t]}.bind(null,r));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var d=l;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},3980:function(e,t,o){"use strict";o("5dcb")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("7a23");function n(e,t,o,n,c,s){var a=Object(r["j"])("AppHome");return Object(r["h"])(),Object(r["c"])(a)}var c={key:0,class:"container mx-auto"},s={key:1,class:"container mx-auto"};function a(e,t,o,n,a,l){var i=Object(r["j"])("AppHeader"),d=Object(r["j"])("TodoList"),u=Object(r["j"])("TodoForm");return Object(r["h"])(),Object(r["e"])("div",null,[Object(r["g"])(i,{onOnToggleForm:l.toggleTodoForm,toggleForm:a.toggleForm},null,8,["onOnToggleForm","toggleForm"]),a.toggleForm?(Object(r["h"])(),Object(r["e"])("section",s,[Object(r["g"])(u,{onSubmitNewTodo:l.postNewTodo},null,8,["onSubmitNewTodo"])])):(Object(r["h"])(),Object(r["e"])("main",c,[Object(r["g"])(d,{error:a.error,onRemoveTodo:l.removeTodo,todos:a.todos},null,8,["error","onRemoveTodo","todos"])]))])}var l=o("1da1"),i=(o("96cf"),o("d3b7"),o("4de4"),o("4e82"),o("a4d3"),o("e01a"),{class:"flex flex-col items-center mt-10"}),d={key:0,class:"text-6xl font-bold"},u={key:1,class:"text-red-500 text-3xl font-bold"},b={key:2,class:"text-3xl font-bold"};function p(e,t,o,n,c,s){var a=Object(r["j"])("TodoItem");return Object(r["h"])(),Object(r["e"])("section",i,[o.todos.length>0?(Object(r["h"])(),Object(r["e"])("h1",d,"Todos")):o.error?(Object(r["h"])(),Object(r["e"])("h1",u,"Could not fetch todos!")):(Object(r["h"])(),Object(r["e"])("h1",b,"No todos remaining")),(Object(r["h"])(!0),Object(r["e"])(r["a"],null,Object(r["i"])(o.todos,(function(e){return Object(r["h"])(),Object(r["e"])("section",{key:e.id,class:"flex flex-col w-2/3 border-1 rounded my-4 shadow-xl p-4"},[Object(r["g"])(a,{onRemoveTodo:s.removeTodo,id:e.id,title:e.title,description:e.description,date:e.date},null,8,["onRemoveTodo","id","title","description","date"])])})),128))])}var f={class:"flex flex-row"},m={class:"flex-1"},h={class:"flex font-bold text-3xl"},j={class:"flex justify-end"},O={class:"font-bold text-center"},g={class:"text-center m-4"},v={class:"break-words"};function x(e,t,o,n,c,s){return Object(r["h"])(),Object(r["e"])("div",null,[Object(r["f"])("header",f,[Object(r["f"])("div",m,[Object(r["f"])("h1",h,Object(r["k"])(o.title),1)]),Object(r["f"])("div",j,[Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return s.onRemoveTodo&&s.onRemoveTodo.apply(s,arguments)}),class:"w-6 my-1 rounded shadow bg-green-200 font-bold hover:bg-green-500"},"X")])]),Object(r["f"])("section",O,[Object(r["f"])("p",null,Object(r["k"])(new Date(o.date).toLocaleDateString("se-SE",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),1)]),Object(r["f"])("section",g,[Object(r["f"])("p",v,Object(r["k"])(o.description),1)])])}var y={name:"TodoItem",props:["title","description","date","id"],emits:["remove-todo"],methods:{onRemoveTodo:function(){this.$emit("remove-todo",this.id)}}};y.render=x;var T=y,w={name:"TodoList",props:["todos","error"],emits:["remove-todo"],components:{TodoItem:T},methods:{removeTodo:function(e){this.$emit("remove-todo",e)}}};w.render=p;var k=w,F={class:"flex flex-col items-center mt-10"},R=Object(r["f"])("h1",{class:"text-6xl font-bold my-4"},"Add new Todo",-1),S=Object(r["f"])("button",{class:"border rounded bg-green-200 hover:bg-green-500 py-1"},"Add Todo",-1),P={key:0,class:"flex justify-center"},N={class:"text-red-500"};function A(e,t,o,n,c,s){return Object(r["h"])(),Object(r["e"])("section",F,[R,Object(r["f"])("form",{onSubmit:t[3]||(t[3]=Object(r["n"])((function(){return s.submitTodo&&s.submitTodo.apply(s,arguments)}),["prevent"])),class:"flex flex-col rounded shadow m4 p-10"},[Object(r["m"])(Object(r["f"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.title=e}),class:"my-4 border shadow py-2 px-3",placeholder:"title",type:"text"},null,512),[[r["l"],c.title]]),Object(r["m"])(Object(r["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.date=e}),class:"m-4",type:"date"},null,512),[[r["l"],c.date]]),Object(r["m"])(Object(r["f"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.description=e}),class:"box-border max-w-full my-4 border shadow py-2 px-3",placeholder:"description"},null,512),[[r["l"],c.description]]),S,c.error.length>0?(Object(r["h"])(),Object(r["e"])("div",P,[Object(r["f"])("p",N,Object(r["k"])(c.error[0]),1)])):Object(r["d"])("",!0)],32)])}o("498a");var M={name:"TodoForm",data:function(){return{title:null,date:null,description:null,error:[]}},methods:{submitTodo:function(){return this.error=[],this.title?this.date?this.description?void this.$emit("submitNewTodo",{id:Math.floor(1e7*Math.random()),title:this.title.trim(),date:this.date,description:this.description.trim()}):(console.log("description saknas!"),void this.error.push("Please enter description")):(console.log("date saknas!"),void this.error.push("Please enter date")):(console.log("titel saknas!"),void this.error.push("Please enter title"))}}};M.render=A;var H=M,_={class:"flex justify-center py-5 bg-green-200"},C={class:"flex container mx-auto"},D={class:"flex font-bold w-2/3 space-x-3"};function L(e,t,o,n,c,s){return Object(r["h"])(),Object(r["e"])("header",_,[Object(r["f"])("section",C,[Object(r["f"])("nav",D,[o.toggleForm?(Object(r["h"])(),Object(r["e"])("button",{key:1,onClick:t[1]||(t[1]=Object(r["n"])((function(){return s.onToggleForm&&s.onToggleForm.apply(s,arguments)}),["prevent"]))},"My Todos")):(Object(r["h"])(),Object(r["e"])("button",{key:0,onClick:t[0]||(t[0]=Object(r["n"])((function(){return s.onToggleForm&&s.onToggleForm.apply(s,arguments)}),["prevent"]))},"Add Todo"))])])])}var E={name:"Header",props:["toggleForm"],methods:{onToggleForm:function(){this.$emit("onToggleForm")}}};E.render=L;var $=E,I={name:"Home",components:{TodoList:k,TodoForm:H,AppHeader:$},emits:["remove-todo","onToggleForm","submitNewTodo"],data:function(){return{todos:[],error:!1,toggleForm:!1}},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:8000/todos");case 3:return o=t.sent,t.next=6,o.json();case 6:r=t.sent,e.todos=r,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),e.error=!0;case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},methods:{removeTodo:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function o(){var r,n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,fetch("http://localhost:8000/todos/".concat(e),{method:"DELETE"});case 3:return r=o.sent,o.next=6,r.json();case 6:n=o.sent,t.todos=t.todos.filter((function(e){return e.id!==n.id})),o.next=13;break;case 10:o.prev=10,o.t0=o["catch"](0),t.error=!0;case 13:case"end":return o.stop()}}),o,null,[[0,10]])})))()},postNewTodo:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function o(){var r,n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,fetch("http://localhost:8000/todos",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 3:return r=o.sent,o.next=6,r.json();case 6:n=o.sent,console.log(n),t.todos.push(n),t.toggleForm=!1,o.next=15;break;case 12:o.prev=12,o.t0=o["catch"](0),t.error=!0;case 15:case"end":return o.stop()}}),o,null,[[0,12]])})))()},toggleTodoForm:function(){this.toggleForm=!this.toggleForm},sortTodos:function(){var e=this.todos.sort((function(e,t){return new Date(e.date)-new Date(t.date)}));console.log(e)}}};I.render=a;var J=I,U={components:{AppHome:J}};o("3980");U.render=n;var V=U;o("ba8c");Object(r["b"])(V).mount("#app")},"5dcb":function(e,t,o){},ba8c:function(e,t,o){}});
//# sourceMappingURL=app.b9b06b1d.js.map