(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/makeup.8495d5d0.svg"},18:function(e,t,a){e.exports=a.p+"static/media/noimg.67edcff8.svg"},20:function(e,t,a){e.exports=a(60)},26:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=(a(26),a(2)),i=a(3),u=a(5),s=a(4),m=a(6),p=a(17),d=a.n(p),E=(a(28),a(8)),h=(a(30),a(9)),g=a.n(h),v=a(18),f=a.n(v),y=a(19),b=a.n(y),O=(a(56),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this.props.items;return e=t?r.a.createElement("div",{className:"layout"},t.map(function(e){return r.a.createElement("div",{key:e.id,className:"item"},r.a.createElement("ul",null,r.a.createElement(b.a,{src:e.image_link,fallbackImage:f.a,alt:"Image should be here",className:"image-link"}),r.a.createElement("li",{className:"item-name"},e.name),r.a.createElement("li",{className:"brand-name"},"by ",e.brand),e.tag_list.map(function(e){return r.a.createElement("li",{key:e,className:"tag-name"},e)}),r.a.createElement("li",{className:"link-btn"},r.a.createElement("a",{href:e.product_link,rel:"noopener noreferrer",target:"_blank"},"SHOP"))))})):null,r.a.createElement("div",null,e)}}]),t}(n.Component)),k=(a(58),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"keyword"},"By Keyword"),r.a.createElement("ul",{className:"keyword-list"},r.a.createElement("li",null,"Lipstick"),r.a.createElement("li",null,"Foundation"),r.a.createElement("li",null,"Blush"),r.a.createElement("li",null,"EyeShadow"),r.a.createElement("li",null,"Blonzer"),r.a.createElement("li",null,"EyeBrow"),r.a.createElement("li",null,"Eyeliner"),r.a.createElement("li",null,"Marcara"),r.a.createElement("li",null,"Nail Polish")))}}]),t}(n.Component)),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={tagText:"",searchText:"",loading:!0,apiUrl:"https://makeup-api.herokuapp.com/api/v1/products.json",items:[]},a.handleInputChange=function(e){var t=e.target.value;a.setState(Object(E.a)({},e.target.name,t),function(){""===t?a.setState({items:[]}):g.a.get("".concat(a.state.apiUrl,"?product_type=").concat(a.state.searchText,"&product_tags=").concat(a.state.tagText)).then(function(e){return a.setState({items:e.data})}).catch(function(e){return console.log(e)})})},a.handleOptionChange=function(e){var t=e.target.value;a.setState(Object(E.a)({},e.target.name,t),function(){""===t?a.setState({items:[]}):g.a.get("".concat(a.state.apiUrl,"?product_type=").concat(a.state.searchText,"&product_tags=").concat(a.state.tagText)).then(function(e){return a.setState({items:e.data})}).catch(function(e){return console.log(e)})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search"},r.a.createElement("input",{name:"searchText",className:"search-bar",type:"text",placeholder:"Search",onChange:this.handleInputChange}),r.a.createElement(k,null),r.a.createElement("select",{className:"select-bar",name:"tagText",onChange:this.handleOptionChange},r.a.createElement("option",{value:"Not Selected"},"Not Selected"),r.a.createElement("option",{value:"canadian"},"Canadian"),r.a.createElement("option",{value:"certclean"},"Cert Clean"),r.a.createElement("option",{value:"chemical free"},"Chemical Free"),r.a.createElement("option",{value:"dairy free"},"Dairy Free"),r.a.createElement("option",{value:"ewg verified"},"EWG Verified"),r.a.createElement("option",{value:"ecocert"},"Eco Cert"),r.a.createElement("option",{value:"fair trade"},"Fair Trade"),r.a.createElement("option",{value:"gluten free"},"Gluten Free"),r.a.createElement("option",{value:"hypoallergenic"},"Hypoallergenic"),r.a.createElement("option",{value:"natural"},"Natural"),r.a.createElement("option",{value:"No Talc"},"No Talc"),r.a.createElement("option",{value:"organic"},"Organic"),r.a.createElement("option",{value:"peanut free product"},"Peanut Free Product"),r.a.createElement("option",{value:"sugar free"},"Sugar Free"),r.a.createElement("option",{value:"usda organic"},"USDA Organic"),r.a.createElement("option",{value:"vegan"},"Vegan"),r.a.createElement("option",{value:"alcohol free"},"Alcohol Free"),r.a.createElement("option",{value:"cruelty free"},"Cruelty Free"),r.a.createElement("option",{value:"oil free"},"Oil Free"),r.a.createElement("option",{value:"purpicks"},"Purpicks"),r.a.createElement("option",{value:"silicone free"},"Silicon Free"),r.a.createElement("option",{value:"water free"},"Water Free")),r.a.createElement("div",{className:"category"},"By Category"),r.a.createElement(O,{items:this.state.items}))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"title-name"},"Find My Cosmetics")),r.a.createElement(j,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.2dce4923.chunk.js.map