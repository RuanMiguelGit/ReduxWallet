(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{27:function(e,t,a){},32:function(e,t,a){e.exports=a(46)},37:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),u=a(19),o=(a(37),a(8)),i=a(2),s=a(10),d=a(11),m=a(13),p=a(12),h=a(15),E=a.n(h),v=a(20),b=(a(43),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",shouldRedirect:!1,loading:!1},n}return Object(d.a)(a,[{key:"changeHandler",value:function(){(0,this.props.Change)(this.state.email),this.setState({shouldRedirect:!0,loading:!0})}},{key:"render",value:function(){var e=this,t=this.state,a=t.shouldRedirect,n=t.loading;if(!0===a)return r.a.createElement(i.a,{to:"/carteira"});if(!0===n)return r.a.createElement("div",null,"Carregando ....");var l=this.state,c=l.email,u=l.password;return r.a.createElement("div",{className:"Login"},r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"input-mail"}," ",r.a.createElement("input",{"data-testid":"email-input",type:"text",id:"input-mail",className:"InputLg",value:c,onChange:function(t){return e.setState({email:t.target.value})},placeholder:"email"})),r.a.createElement("label",{htmlFor:"input-pass"},r.a.createElement("input",{"data-testid":"password-input",value:u,type:"password",className:"InputLg",onChange:function(t){return e.setState({password:t.target.value})},placeholder:"senha"}))),r.a.createElement("div",{className:"link"},r.a.createElement("button",{type:"button",className:"loginButton",disabled:u.length<=5||!c.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),onClick:function(){return e.changeHandler(c)}},"Entrar")))}}]),a}(r.a.Component)),f=Object(o.b)(null,(function(e){return{Change:function(t){return e(function(e){return{type:"USER_EMAIL",payload:{userEmail:e}}}(t))}}}))(b),y=(a(45),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.emailDisplay,a=e.expensesData.reduce((function(e,t){return e+t.value*t.exchangeRates[t.currency].ask}),0);return r.a.createElement("div",null,r.a.createElement("section",{"data-testid":"email-field",className:"userName"}," ","Email do usuario:"," ",t),r.a.createElement("section",{"data-testid":"total-field",className:"totalfi"}," ",a),r.a.createElement("section",{"data-testid":"header-currency-field",className:"totalfi"}," ","BRL"))}}]),a}(r.a.Component)),g=Object(o.b)((function(e){return{emailDisplay:e.user.email,expensesData:e.wallet.expenses}}),null)(y),x=(a(27),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.expensesData,a=e.remover;return r.a.createElement("table",null,r.a.createElement("thead",{className:"TableB"},r.a.createElement("tr",null,r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"M\xe9todo de pagamento"),r.a.createElement("th",null,"Valor"),r.a.createElement("th",null,"Moeda"),r.a.createElement("th",null,"C\xe2mbio utilizado"),r.a.createElement("th",null,"Valor convertido"),r.a.createElement("th",null,"Moeda de convers\xe3o"),r.a.createElement("th",null,"Editar/Excluir"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.id,className:"tableB"},r.a.createElement("td",{className:"tableA"},e.description),r.a.createElement("td",{className:"tableA"},e.tag),r.a.createElement("td",{className:"tableA"},e.method),r.a.createElement("td",{className:"tableA"},e.value),r.a.createElement("td",{className:"tableA"},e.exchangeRates[e.currency].name),r.a.createElement("td",{className:"tableA"},parseFloat(e.exchangeRates[e.currency].ask).toFixed(2)),r.a.createElement("td",{className:"tableA"},parseFloat(e.exchangeRates[e.currency].ask*e.value).toFixed(2)),r.a.createElement("td",{className:"tableA"},"Real"),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"ButtonS","data-testid":"delete-btn",onClick:function(){return a(e.id)}},"Excluir")))}))))}}]),a}(r.a.Component)),j=Object(o.b)((function(e){return{currencyData:e.wallet.currencies,expensesData:e.wallet.expenses}}),(function(e){return{remover:function(t){return e(function(e){return{type:"REMOVE_EXPENSE",payload:{delete:e}}}(t))}}}))(x),O=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={value:"",description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o",exchangeRates:{}},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.GetCurrency)()}},{key:"inputExpense",value:function(){var e=this,t=this.state.value;return r.a.createElement("label",{htmlFor:"expense"}," ",r.a.createElement("input",{className:"Input","data-testid":"value-input",type:"number",id:"expenses",value:t,onChange:function(t){return e.setState({value:t.target.value})},placeholder:"Gastos"}))}},{key:"inputDescription",value:function(){var e=this,t=this.state.description;return r.a.createElement("label",{htmlFor:"Description"}," ",r.a.createElement("input",{className:"Input","data-testid":"description-input",value:t,type:"text",onChange:function(t){return e.setState({description:t.target.value})},placeholder:"Descric\xe3o"}))}},{key:"inputCurrency",value:function(){var e=this,t=this.state.currency,a=this.props.currencyData;if(void 0!==Object.keys(a))return r.a.createElement("select",{className:"Input",id:"currency","data-testid":"currency-input",value:t,type:"dropbox",onChange:function(t){return e.setState({currency:t.target.value})}},Object.values(a).filter((function(e){return"D\xf3lar Turismo"!==e.name})).map((function(e){return r.a.createElement("option",{key:e.code,"data-testid":e.code,value:e.code},e.code)})))}},{key:"inputMethod",value:function(){var e=this,t=this.state.method;return r.a.createElement("select",{className:"Input","data-testid":"method-input",value:t,type:"text",onChange:function(t){return e.setState({method:t.target.value})},placeholder:"m\xe9todo"},r.a.createElement("option",{value:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito"))}},{key:"inputTag",value:function(){var e=this,t=this.state.tag;return r.a.createElement("select",{className:"Input","data-testid":"tag-input",value:t,type:"text",onChange:function(t){return e.setState({tag:t.target.value})},placeholder:"tag"},r.a.createElement("option",{value:"Alimenta\xe7\xe3o"},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer"},"Lazer"),r.a.createElement("option",{value:"Trabalho"},"Trabalho"),r.a.createElement("option",{value:"Transporte"},"Transporte"),r.a.createElement("option",{value:"Sa\xfade"},"Sa\xfade"))}},{key:"sumDealer",value:function(){var e=this.props.expensesData;e.map((function(t){var a=t.currency;return e.reduce((function(e,t){return e+t.expense*t.exchangeRates[a].ask}),0)}))}},{key:"buttonHandler",value:function(){var e=Object(v.a)(E.a.mark((function e(){var t,a,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.Getexpense,n=t.GetCurrency,r=t.currencyData,e.next=3,n();case 3:return this.setState({exchangeRates:r}),e.next=6,a(this.state);case 6:return this.setState({value:"",description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o",exchangeRates:{}}),e.abrupt("return",this.sumDealer());case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"table",value:function(){var e=this.props.expensesData;return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"M\xe9todo de pagamento"),r.a.createElement("th",null,"Valor"),r.a.createElement("th",null,"Moeda"),r.a.createElement("th",null,"C\xe2mbio utilizado"),r.a.createElement("th",null,"Valor convertido"),r.a.createElement("th",null,"Moeda de convers\xe3o"),r.a.createElement("th",null,"Editar/Excluir"))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.description),r.a.createElement("td",null,e.tag),r.a.createElement("td",null,e.method),r.a.createElement("td",null,e.value),r.a.createElement("td",null,e.exchangeRates[e.currency].name),r.a.createElement("td",null,parseFloat(e.exchangeRates[e.currency].ask).toFixed(2)),r.a.createElement("td",null,parseFloat(e.exchangeRates[e.currency].ask*e.value).toFixed(2)),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,r.a.createElement("button",{type:"button"},"Excluir")))})))))}},{key:"inputButton",value:function(){var e=this;return r.a.createElement("button",{type:"button",className:"ButtonS",onClick:function(){return e.buttonHandler()}},"Adicionar despesa")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{className:"form"},r.a.createElement("form",null,this.inputExpense(),this.inputDescription(),this.inputMethod(),this.inputCurrency(),this.inputTag(),this.inputButton())),r.a.createElement(j,null))}}]),a}(r.a.Component),D=Object(o.b)((function(e){return{currencyData:e.wallet.currencies,expensesData:e.wallet.expenses}}),(function(e){return{GetCurrency:function(){return e(function(){var e=Object(v.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"REQUEST_LOADING"}),e.next=4,fetch("https://economia.awesomeapi.com.br/json/all");case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,t({type:"REQUEST_SUCESS",payload:{data:n}}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:"REQUEST_FAIL"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())},Getexpense:function(t){return e(function(e){return{type:"ADD_EXPENSE",payload:{expenseData:e}}}(t))}}}))(O);var k=function(){return r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:f}),r.a.createElement(i.b,{path:"/carteira",component:D})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(9),w=a(29),N=a(30),C=a(3),R={email:""},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_EMAIL":return Object(C.a)(Object(C.a)({},e),{},{email:t.payload.userEmail});default:return e}},T=a(31),F={currencies:[],expenses:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_LOADING":return Object(C.a)(Object(C.a)({},e),{},{wallet:{loading:!0}});case"REQUEST_SUCESS":return Object(C.a)(Object(C.a)({},e),{},{loading:!1,currencies:t.payload.data});case"REQUEST_FAIL":return Object(C.a)(Object(C.a)({},e),{},{loading:!1,error:"Unable to find currency"});case"ADD_EXPENSE":return Object(C.a)(Object(C.a)({},e),{},{expenses:[].concat(Object(T.a)(e.expenses),[Object(C.a)({id:e.expenses.length},t.payload.expenseData)])});case"REMOVE_EXPENSE":return Object(C.a)(Object(C.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.payload.delete}))});default:return e}},M=Object(S.combineReducers)({user:A,wallet:I}),U=Object(S.createStore)(M,Object(w.composeWithDevTools)(Object(S.applyMiddleware)(N.a)));c.a.render(r.a.createElement(o.a,{store:U},r.a.createElement(u.a,{basename:"/ReduxWallet"},r.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.89a88bd8.chunk.js.map