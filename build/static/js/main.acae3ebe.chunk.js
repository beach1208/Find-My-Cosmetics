(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/makeup.8495d5d0.svg"},18:function(e,t,a){e.exports=a.p+"static/media/noimg.67edcff8.svg"},20:function(e,t,a){e.exports=a(58)},26:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=(a(26),a(2)),i=a(3),s=a(5),u=a(4),m=a(6),p=a(17),d=a.n(p),h=(a(28),a(8)),g=(a(30),a(9)),v=a.n(g),f=a(18),E=a.n(f),b=a(19),y=a.n(b),O=(a(56),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this.props.items;return e=t?r.a.createElement("div",{className:"layout"},t.map(function(e){return r.a.createElement("div",{key:e.id,className:"item"},r.a.createElement("ul",null,r.a.createElement(y.a,{src:e.image_link,fallbackImage:E.a,initialImage:"loader.gif",alt:"Image should be here",className:"image-link"}),r.a.createElement("li",{className:"item-name"},e.name),r.a.createElement("li",{className:"brand-name"},"by ",e.brand),e.tag_list.map(function(e){return r.a.createElement("li",{key:e,className:"tag-name"},e)}),r.a.createElement("li",{className:"link-btn"},r.a.createElement("a",{href:e.product_link,target:"_blank"},"SHOP"))))})):null,r.a.createElement("div",null,e)}}]),t}(n.Component)),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={tagText:"",searchText:"",loading:!0,apiUrl:"http://makeup-api.herokuapp.com/api/v1/products.json",items:[]},a.handleInputChange=function(e){var t=e.target.value;a.setState(Object(h.a)({},e.target.name,t),function(){""===t?a.setState({items:[]}):v.a.get("".concat(a.state.apiUrl,"?product_type=").concat(a.state.searchText,"&product_tags=").concat(a.state.tagText)).then(function(e){return a.setState({items:e.data})}).catch(function(e){return console.log(e)})})},a.handleOptionChange=function(e){var t=e.target.value;a.setState(Object(h.a)({},e.target.name,t),function(){""===t?a.setState({items:[]}):v.a.get("".concat(a.state.apiUrl,"?product_type=").concat(a.state.searchText,"&product_tags=").concat(a.state.tagText)).then(function(e){return a.setState({items:e.data})}).catch(function(e){return console.log(e)})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search"},r.a.createElement("input",{name:"searchText",className:"search-bar",type:"text",placeholder:"Search",onChange:this.handleInputChange}),r.a.createElement("div",{className:"category"},"By Category"),r.a.createElement("select",{className:"select-bar",name:"tagText",onChange:this.handleOptionChange},r.a.createElement("option",{value:"Not Selected"},"Not Selected"),r.a.createElement("option",{value:"canadian"},"Canadian"),r.a.createElement("option",{value:"certclean"},"Cert Clean"),r.a.createElement("option",{value:"chemical free"},"Chemical Free"),r.a.createElement("option",{value:"dairy free"},"Dairy Free"),r.a.createElement("option",{value:"ewg verified"},"EWG Verified"),r.a.createElement("option",{value:"ecocert"},"Eco Cert"),r.a.createElement("option",{value:"fair trade"},"Fair Trade"),r.a.createElement("option",{value:"gluten free"},"Gluten Free"),r.a.createElement("option",{value:"hypoallergenic"},"Hypoallergenic"),r.a.createElement("option",{value:"natural"},"Natural"),r.a.createElement("option",{value:"No Talc"},"No Talc"),r.a.createElement("option",{value:"organic"},"Organic"),r.a.createElement("option",{value:"peanut free product"},"Peanut Free Product"),r.a.createElement("option",{value:"sugar free"},"Sugar Free"),r.a.createElement("option",{value:"usda organic"},"USDA Organic"),r.a.createElement("option",{value:"vegan"},"Vegan"),r.a.createElement("option",{value:"alcohol free"},"Alcohol Free"),r.a.createElement("option",{value:"cruelty free"},"Cruelty Free"),r.a.createElement("option",{value:"oil free"},"Oil Free"),r.a.createElement("option",{value:"purpicks"},"Purpicks"),r.a.createElement("option",{value:"silicone free"},"Silicon Free"),r.a.createElement("option",{value:"water free"},"Water Free")),r.a.createElement(O,{items:this.state.items}))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"title-name"},"Find My Cosmetics")),r.a.createElement(k,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.acae3ebe.chunk.js.map