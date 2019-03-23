(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),i=n.n(l),c=(n(16),n(2)),s=n(3),o=n(8),u=n(7),h=n(9),d=n(1),m=function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,[{key:"check_on_input",value:function(e){if(!/^[\d\+\-\*\/\.]+$/.test(e))return!1;var t=/[\+\-\*\/\.][\+\-\*\/\.]$/.test(e),n=/[\*\/]\-$/.test(e);return!(t&&!n)&&(!/^[\+\*\/]/.test(e)&&(!/\.\d{3}\d+$/.test(e)&&(!/[^\.]\d{12}$/.test(e)&&(!/\d+\.\d+\.$/.test(e)&&!/^[\d\.]+[\+\-\*\/][\d\.]+[\+\-\*\/]/.test(e)))))}},{key:"check_on_handle",value:function(e){return!!/^[\d\.]+[\+\-\*\/]+[\d\.]+$/.test(e)&&(!/\/0$/.test(e)&&!/\.$/.test(e))}},{key:"sanity",value:function(e){return e=this._sanity_empty_string(e),e=this._sanity_remove_trailing_zeroes(e)}},{key:"_sanity_remove_trailing_zeroes",value:function(e){return"0"===e.charAt(0)&&e.length>1&&"."!==e.charAt(1)&&(e=e.substr(1)),e}},{key:"_sanity_empty_string",value:function(e){return""===e&&(e="0"),e}}]),e}(),f=n(4),b=function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,[{key:"encode_and_request",value:function(e){var t=this.str_to_uri(e);return t?fetch(t).then(function(e){return e.json()}):null}},{key:"str_to_uri",value:function(e){var t,n,a;if(e.includes("*")){t="multiply";var r=e.split("*"),l=Object(f.a)(r,2);n=l[0],a=l[1]}else if(e.includes("/")){t="divide";var i=e.split("/"),c=Object(f.a)(i,2);n=c[0],a=c[1]}else if(e.includes("+")){t="add";var s=e.split("+"),o=Object(f.a)(s,2);n=o[0],a=o[1]}else if(e.includes("-")){t="subtract";var u=e.split("-"),h=Object(f.a)(u,2);n=h[0],a=h[1]}return"http://localhost:3000/calculator_actions/".concat(t,"/").concat(n,"/").concat(a)}}]),e}(),p=(n(17),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).stringChecker=new m,n.state={text:"0",last_operation_str:"Enter first operation:"},n.handleChange=n.handleChange.bind(Object(d.a)(Object(d.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(Object(d.a)(n))),n.handleClear=n.handleClear.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"CalculatorWrapper"},r.a.createElement("h3",null,"Simple Calculator based on Ethereum Blockchain"),r.a.createElement("form",{onClick:this.handleSubmit},r.a.createElement("div",{className:"inputWrapper"},r.a.createElement("div",{className:"last_operation"},this.state.last_operation_str),r.a.createElement("input",{id:"calculator-input",autoFocus:!0,onChange:this.handleChange,value:this.state.text,autoComplete:"off"})),r.a.createElement("div",{className:"buttonsWrapper"},r.a.createElement("div",{onClick:this.handleClear,className:"buttonWrapper"},r.a.createElement("button",{type:"button"},"C")),r.a.createElement("div",{className:"buttonWrapper"},r.a.createElement("button",null,"=")))),r.a.createElement("h3",null,"Features:"),r.a.createElement("ul",null,r.a.createElement("li",null,"can do simple operations such as ",r.a.createElement("b",null,"+"),", ",r.a.createElement("b",null,"-"),", ",r.a.createElement("b",null,"*"),", ",r.a.createElement("b",null,"/")),r.a.createElement("li",null,"all calculations are done on the ",r.a.createElement("a",{href:"https://ropsten.etherscan.io/address/0x6eab7a2d1f06dceca1bfe23788f4d0152f356f45",target:"_blank"},"contract")," with ",r.a.createElement("a",{href:"/SimpleCalculator.sol",target:"_blank"},"source code")," located in Ropsten test network via Infura API"),r.a.createElement("li",null,"numbers are limited by 3 digits after a point, and can contain only 12 digits before"),r.a.createElement("li",null,"operations history is not saved in blockchain yet"),r.a.createElement("li",null,"Front-end based on React"),r.a.createElement("li",null,"Back-end based on Node.js")),r.a.createElement("div",null,"Author: Sergey Borodanov"),r.a.createElement("div",null,"Last update: March 23, 2019"))}},{key:"handleChange",value:function(e){e.target.value=this.stringChecker.sanity(e.target.value),this.stringChecker.check_on_input(e.target.value)&&this.setState({text:e.target.value})}},{key:"handleClear",value:function(e){e.preventDefault(),this.setState(function(){return{text:"0"}})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),"0"===this.state.text)return null;if(/\/0$/.test(this.state.text))return this.setState(function(e){return{last_operation_str:e.text,text:"Infinity"}}),null;if(!this.stringChecker.check_on_handle(this.state.text))return null;var t=new b,n=this;t.encode_and_request(this.state.text).then(function(e){n.setState(function(t){return{last_operation_str:t.text,text:e.result}})})}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.598a16b4.chunk.js.map