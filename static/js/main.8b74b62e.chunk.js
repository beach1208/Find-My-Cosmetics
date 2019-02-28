(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/makeup.8495d5d0.svg"},18:function(e,t,a){e.exports=a.p+"static/media/noimg.67edcff8.svg"},20:function(e,t,a){e.exports=a(60)},26:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),o=(a(26),a(2)),i=a(3),u=a(5),s=a(4),m=a(6),p=a(17),d=a.n(p),E=(a(28),a(8)),h=(a(30),a(9)),g=a.n(h),v=a(18),f=a.n(v),y=a(19),b=a.n(y),O=(a(56),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this.props.items;return e=t?l.a.createElement("div",{className:"layout"},t.map(function(e){return l.a.createElement("div",{key:e.id,className:"item"},l.a.createElement("ul",null,l.a.createElement(b.a,{src:e.image_link,fallbackImage:f.a,alt:"Image should be here",className:"image-link"}),l.a.createElement("li",{className:"item-name"},e.name),l.a.createElement("li",{className:"brand-name"},"by ",e.brand),e.tag_list.map(function(e){return l.a.createElement("li",{key:e,className:"tag-name"},e)}),l.a.createElement("li",{className:"link-btn"},l.a.createElement("a",{href:e.product_link,rel:"noopener noreferrer",target:"_blank"},"SHOP"))))})):null,l.a.createElement("div",null,e)}}]),t}(n.Component)),k=(a(58),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"keyword"},"By Keyword"),l.a.createElement("ul",{className:"keyword-list"},l.a.createElement("li",null,"Lipstick"),l.a.createElement("li",null,"Foundation"),l.a.createElement("li",null,"Blush"),l.a.createElement("li",null,"EyeShadow"),l.a.createElement("li",null,"Blonzer"),l.a.createElement("li",null,"EyeBrow"),l.a.createElement("li",null,"Eyeliner"),l.a.createElement("li",null,"Mascara"),l.a.createElement("li",null,"Nail Polish")))}}]),t}(n.Component)),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={tagText:"",searchText:"",loading:!0,apiUrl:"https://makeup-api.herokuapp.com/api/v1/products.json",items:[]},a.handleInputChange=function(e){var t=e.target.value;a.setState(Object(E.a)({},e.target.name,t),function(){""===t?a.setState({items:[]}):g.a.get("".concat(a.state.apiUrl,"?product_type=").concat(a.state.searchText,"&product_tags=").concat(a.state.tagText)).then(function(e){return a.setState({items:e.data})}).catch(function(e){return console.log(e)})})},a.handleOptionChange=function(e){var t=e.target.value;a.setState(Object(E.a)({},e.target.name,t),function(){""===t?a.setState({items:[]}):g.a.get("".concat(a.state.apiUrl,"?product_type=").concat(a.state.searchText,"&product_tags=").concat(a.state.tagText)).then(function(e){return a.setState({items:e.data})}).catch(function(e){return console.log(e)})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"search"},l.a.createElement("input",{name:"searchText",className:"search-bar",type:"text",placeholder:"Search",onChange:this.handleInputChange}),l.a.createElement(k,null),l.a.createElement("select",{className:"select-bar",name:"tagText",onChange:this.handleOptionChange},l.a.createElement("option",{value:"Not Selected"},"Not Selected"),l.a.createElement("option",{value:"canadian"},"Canadian"),l.a.createElement("option",{value:"certclean"},"Cert Clean"),l.a.createElement("option",{value:"chemical free"},"Chemical Free"),l.a.createElement("option",{value:"dairy free"},"Dairy Free"),l.a.createElement("option",{value:"ewg verified"},"EWG Verified"),l.a.createElement("option",{value:"ecocert"},"Eco Cert"),l.a.createElement("option",{value:"fair trade"},"Fair Trade"),l.a.createElement("option",{value:"gluten free"},"Gluten Free"),l.a.createElement("option",{value:"hypoallergenic"},"Hypoallergenic"),l.a.createElement("option",{value:"natural"},"Natural"),l.a.createElement("option",{value:"No Talc"},"No Talc"),l.a.createElement("option",{value:"organic"},"Organic"),l.a.createElement("option",{value:"peanut free product"},"Peanut Free Product"),l.a.createElement("option",{value:"sugar free"},"Sugar Free"),l.a.createElement("option",{value:"usda organic"},"USDA Organic"),l.a.createElement("option",{value:"vegan"},"Vegan"),l.a.createElement("option",{value:"alcohol free"},"Alcohol Free"),l.a.createElement("option",{value:"cruelty free"},"Cruelty Free"),l.a.createElement("option",{value:"oil free"},"Oil Free"),l.a.createElement("option",{value:"purpicks"},"Purpicks"),l.a.createElement("option",{value:"silicone free"},"Silicon Free"),l.a.createElement("option",{value:"water free"},"Water Free")),l.a.createElement("div",{className:"category"},"By Category"),l.a.createElement(O,{items:this.state.items}))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),l.a.createElement("h1",{className:"title-name"},"Find My Cosmetics")),l.a.createElement(j,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.8b74b62e.chunk.js.map