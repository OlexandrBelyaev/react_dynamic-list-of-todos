(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,function(e,t,r){e.exports=r(19)},,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(4),c=r.n(s),o=r(1),l=r.n(o),u=r(2),i=r(5),m=r(6),p=r(8),d=r(7),y=(r(15),r(16),r(17),function(e){var t=e.todos,r=e.selectUser,a=e.setQueryText,s=e.setQueryCategory,c=e.textFilter,o=e.categoryFilter,l=c(t);return l=o(l),n.a.createElement("div",{className:"TodoList"},n.a.createElement("h2",null,"Todos:"),n.a.createElement("label",null,"Find",n.a.createElement("input",{type:"text",onChange:a})),n.a.createElement("select",{onChange:s},n.a.createElement("option",{value:"all"},"All"),n.a.createElement("option",{value:"true"},"Completed"),n.a.createElement("option",{value:"false"},"Active")),n.a.createElement("div",{className:"TodoList__list-container"},n.a.createElement("ul",{className:"TodoList__list"},l.map((function(e){return n.a.createElement("li",{key:e.id,className:e.completed?"TodoList__item TodoList__item--checked":"TodoList__item TodoList__item--unchecked"},n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox",readOnly:!0}),n.a.createElement("p",null,e.title)),n.a.createElement("button",{className:" TodoList__user-button TodoList__user-button--selected button",type:"button",onClick:r(e.userId)},"User\xa0 #",e.userId))})))))}),f=(r(18),function(e){var t=e.selectedUser,r=e.clearSelect;return n.a.createElement("div",{className:"CurrentUser"},n.a.createElement("h2",{className:"CurrentUser__title"},n.a.createElement("span",null,"Selected user: #",t.id)),n.a.createElement("h3",{className:"CurrentUser__name"},t.name),n.a.createElement("p",{className:"CurrentUser__email"},t.email),n.a.createElement("p",{className:"CurrentUser__phone"},t.phone),n.a.createElement("button",{className:" TodoList__user-button TodoList__user-button--selected button",type:"button",onClick:r},"Unselect user"))});function h(){return(h=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-api.herokuapp.com/todos");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-api.herokuapp.com/users/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(){return h.apply(this,arguments)},b=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={todos:[],selectedUserId:0,currentUser:"",queryFilter:"",queryCategory:"all"},e.selectUser=function(t){return Object(u.a)(l.a.mark((function r(){var a;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_(t);case 2:a=r.sent,e.setState({selectedUserId:t,currentUser:a.data});case 4:case"end":return r.stop()}}),r)})))},e.clearSelect=function(){e.setState({selectedUserId:0,currentUser:""})},e.setQueryText=function(t){e.setState({queryFilter:t.target.value})},e.setQueryCategory=function(t){e.setState({queryCategory:t.target.value})},e.textFilter=function(t){return t.filter((function(t){return null!==t.title&&t.title.includes(e.state.queryFilter)}))},e.categoryFilter=function(t){return t.filter((function(t){return"all"===e.state.queryCategory||"boolean"===typeof t.completed&&(!0===t.completed&&"true"===e.state.queryCategory||(!1===t.completed&&"false"===e.state.queryCategory||e.state.queryCategory===t.completed))}))},e}return Object(m.a)(r,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,this.setState({todos:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.todos,r=e.selectedUserId,a=e.currentUser;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App__sidebar"},n.a.createElement(y,{todos:t,selectUser:this.selectUser,setQueryText:this.setQueryText,setQueryCategory:this.setQueryCategory,textFilter:this.textFilter,categoryFilter:this.categoryFilter})),n.a.createElement("div",{className:"App__content"},n.a.createElement("div",{className:"App__content-container"},r?n.a.createElement(f,{selectedUser:a,clearSelect:this.clearSelect}):"No user selected")))}}]),r}(n.a.Component);c.a.render(n.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.806caf10.chunk.js.map