(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{12:function(t,e,o){},13:function(t,e,o){},15:function(t,e,o){"use strict";o.r(e);var n=o(1),a=o.n(n),r=o(6),i=o.n(r),c=(o(12),o(13),o(2)),u=o(0);function s(){var t=new Date,e=String(t.getHours()).padStart(2,"0"),o=String(t.getMinutes()).padStart(2,"0"),n=String(t.getSeconds()).padStart(2,"0");return"".concat(e,":").concat(o,":").concat(n)}var l=function(){var t=Object(n.useState)(s()),e=Object(c.a)(t,2),o=e[0],a=e[1];return Object(n.useEffect)((function(){setInterval((function(){a(s())}),1e3)})),Object(u.jsx)("div",{id:"clock",children:o})};var d=function(){var t=Object(n.useState)(localStorage.getItem("username")),e=Object(c.a)(t,2),o=e[0],a=e[1],r=Object(n.useState)(""),i=Object(c.a)(r,2),s=i[0],l=i[1];return Object(u.jsx)("div",{id:"login",children:localStorage.getItem("username")?Object(u.jsxs)("h1",{id:"saluting",children:["Salut, ",o]}):Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{id:"login-input",required:!0,maxLength:"15",type:"text",placeholder:"Hello, Who are you?",onChange:function(t){return l(t.target.value)}}),Object(u.jsx)("button",{id:"login-button",onClick:function(t){t.preventDefault(),function(t){a(t),l(""),localStorage.setItem("username",t)}(s)},children:"Log in"})]})})},h=o(7);var b=function(t){var e=t.todos,o=t.deleteTodo;return Object(u.jsx)("div",{id:"todo-ul",children:Object(u.jsx)("ul",{children:e.map((function(t){return Object(u.jsxs)("li",{id:t.id,className:"todo-li",children:[t.todo,Object(u.jsx)("button",{className:"todo-button",onClick:function(t){o(t)},children:"x"})]},t.id)}))})})};var j=function(){var t=Object(n.useState)([]),e=Object(c.a)(t,2),o=e[0],a=e[1],r=Object(n.useState)(""),i=Object(c.a)(r,2),s=i[0],l=i[1];function d(t){var e={id:String(Date.now()),todo:t};a([].concat(Object(h.a)(o),[e])),localStorage.setItem("todos",JSON.stringify(o))}var j=localStorage.getItem("todos");if(null!==j){var f=JSON.parse(j);o=f}return Object(u.jsxs)("div",{children:[Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),d(s)},children:Object(u.jsx)("input",{id:"todo-input",type:"text",placeholder:"Write What to do and Press Enter.",required:!0,onChange:function(t){return l(t.target.value)}})}),Object(u.jsx)(b,{todos:o,deleteTodo:function(t){console.log(t.target.parentNode.id);var e=t.target.parentNode.id;a(o.filter((function(t){return t.id!==e}))),localStorage.setItem("todos",JSON.stringify(o))}})]})},f=[{quote:"The purpose of our lives is to be happy.",author:"Dalai Lama"},{quote:"If you want to live a happy life, tie it to a goal, not to people or things.",author:"Albert Einstein"},{quote:"Life is not a problem to be solved, but a reality to be experienced.",author:"Soren Kierkegaard"},{quote:"Everything negative \u2013 pressure, challenges \u2013 is all an opportunity for me to rise.",author:"Kobe Bryant"},{quote:"Life is never easy. There is work to be done and obligations to be met \u2013 obligations to truth, to justice, and to liberty.",author:"John F. Kennedy"},{quote:"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven\u2019t found it yet, keep looking. Don\u2019t settle. As with all matters of the heart, you\u2019ll know when you find it.",author:"Steve Jobs"},{quote:"My mama always said, life is like a box of chocolates. You never know what you\u2019re gonna get.",author:"Forrest Gump"},{quote:"Keep calm and carry on.",author:"Winston Churchill"},{quote:"Good friends, good books, and a sleepy conscience: this is the ideal life.",author:"Mark Twainv"},{quote:"If you can do what you do best and be happy, you\u2019re further along in life than most people.",author:"Leonardo DiCaprio"}];var g=function(){var t=f[Math.floor(Math.random()*f.length)];return Object(u.jsx)("div",{id:"quote",children:Object(u.jsxs)("span",{children:[t.quote," - ",t.author]})})};var p=function(){var t=Object(n.useState)(""),e=Object(c.a)(t,2),o=e[0],a=e[1],r=Object(n.useState)(""),i=Object(c.a)(r,2),s=i[0],l=i[1],d=Object(n.useState)(""),h=Object(c.a)(d,2),b=h[0],j=h[1];return navigator.geolocation.getCurrentPosition((function(t){var e=t.coords.latitude,o=t.coords.longitude,n="https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(o,"&appid=").concat("f7fe21bbdb94774cf7eff66143dc833d","&units=metric");fetch(n).then((function(t){return t.json()})).then((function(t){a("".concat(t.name,", ").concat(t.sys.country)),l("".concat(t.weather[0].main)),j("".concat(t.main.temp))}))}),(function(){alert("Can't find you. No weather for you.")})),Object(u.jsx)("div",{id:"weather",children:o?Object(u.jsxs)("span",{children:[b," \u2103, ",s," in ",o]}):null})};var O=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{id:"todo-container",children:["aa",Object(u.jsx)(l,{}),Object(u.jsx)(d,{}),Object(u.jsx)(j,{}),Object(u.jsx)(p,{}),Object(u.jsx)(g,{})]})})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.29ef1005.chunk.js.map