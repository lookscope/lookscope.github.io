(this.webpackJsonplookscope=this.webpackJsonplookscope||[]).push([[0],{48:function(e,t,a){e.exports=a(77)},53:function(e,t,a){},54:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(20),c=a.n(n),s=(a(53),a(54),a(21)),o=a(9),i=a(44),m=a.n(i),p=a(45),u=a(46),d=a(1),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetching:!1,fetched:!1,payload:[],details:[],continuationMarker:"",filteredSearch:!1,newSearch:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BRANDS_FULFILLED":return Object(d.a)(Object(d.a)({},e),{},{fetching:!1,fetched:!0,payload:t.payload});case"FETCH_BRANDS_PENDING":return Object(d.a)(Object(d.a)({},e),{},{fetching:!0,fetched:!1});case"FETCH_EXAMPLES_FULFILLED":return Object(d.a)(Object(d.a)({},e),{},{fetching:!1,fetched:!0,payload:t.payload,filteredSearch:!1,newSearch:!1,continuationMarker:t.payload.continuationMarker?t.payload.continuationMarker:""});case"FETCH_EXAMPLES_PENDING":return Object(d.a)(Object(d.a)({},e),{},{fetching:!0,fetched:!1,newSearch:!0});case"FETCH_FILTERED_EXAMPLES_FULFILLED":return Object(d.a)(Object(d.a)({},e),{},{fetched:!0,fetching:!1,filteredSearch:!0,payload:t.payload,continuationMarker:t.payload.continuationMarker?t.payload.continuationMarker:""});case"FETCH_FILTERED_EXAMPLES_PENDING":return Object(d.a)(Object(d.a)({},e),{},{fetching:!0,fetched:!1});case"FETCH_CONTINUED_EXAMPLES_FULFILLED":return Object(d.a)(Object(d.a)({},e),{},{fetched:!0,fetching:!1,filteredSearch:!1,payload:t.payload,continuationMarker:t.payload.continuationMarker?t.payload.continuationMarker:""});case"FETCH_CONTINUED_EXAMPLES_PENDING":return Object(d.a)(Object(d.a)({},e),{},{fetching:!0,fetched:!1});case"FETCH_CONTINUED_FILTERED_EXAMPLES_FULFILLED":return Object(d.a)(Object(d.a)({},e),{},{fetched:!0,fetching:!1,filteredSearch:!0,payload:t.payload,continuationMarker:t.payload.continuationMarker?t.payload.continuationMarker:""});case"FETCH_CONTINUED_FILTERED_EXAMPLES_PENDING":return Object(d.a)(Object(d.a)({},e),{},{fetching:!0,fetched:!1});case"FETCH_OUTFIT_DETAILS_FULFILLED":return Object(d.a)(Object(d.a)({},e),{},{details:t.payload,fetching:!1,fetched:!0});case"FETCH_OUTFIT_DETAILS_PENDING":return Object(d.a)(Object(d.a)({},e),{},{fetching:!0,fetched:!1});default:return e}},f={gender:[],colors:[],style:[],season:[],patterns:[],items:[],firstLoad:!0},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GENDER_FILTER_SELECTED":return e.gender.includes(t.payload.filterName)||e.gender.push(t.payload.filterName),Object(d.a)(Object(d.a)({},e),{},{firstLoad:!1});case"GENDER_FILTER_DESELECTED":var a=e.gender.filter((function(e){return e!==t.payload.filterName}));return Object(d.a)(Object(d.a)({},e),{},{gender:a,firstLoad:!1});case"SEASONS_FILTER_SELECTED":return e.season.includes(t.payload.filterName)||e.season.push(t.payload.filterName),Object(d.a)(Object(d.a)({},e),{},{firstLoad:!1});case"SEASONS_FILTER_DESELECTED":var l=e.season.filter((function(e){return e!==t.payload.filterName}));return Object(d.a)(Object(d.a)({},e),{},{season:l,firstLoad:!1});case"COLOR_FILTER_SELECTED":return e.colors.includes(t.payload.filterName)||e.colors.push(t.payload.filterName),Object(d.a)(Object(d.a)({},e),{},{firstLoad:!1});case"COLOR_FILTER_DESELECTED":var r=e.colors.filter((function(e){return e!==t.payload.filterName}));return Object(d.a)(Object(d.a)({},e),{},{colors:r,firstLoad:!1});case"STYLE_FILTER_SELECTED":return e.style.includes(t.payload.filterName)||e.style.push(t.payload.filterName),Object(d.a)(Object(d.a)({},e),{},{firstLoad:!1});case"STYLE_FILTER_DESELECTED":var n=e.style.filter((function(e){return e!==t.payload.filterName}));return Object(d.a)(Object(d.a)({},e),{},{style:n,firstLoad:!1});case"PATTERN_FILTER_SELECTED":return e.patterns.includes(t.payload.filterName)||e.patterns.push(t.payload.filterName),Object(d.a)(Object(d.a)({},e),{},{firstLoad:!1});case"PATTERN_FILTER_DESELECTED":var c=e.patterns.filter((function(e){return e!==t.payload.filterName}));return Object(d.a)(Object(d.a)({},e),{},{patterns:c,firstLoad:!1});case"ITEM_FILTER_SELECTED":return e.items.includes(t.payload.filterName)||e.items.push(t.payload.filterName),Object(d.a)(Object(d.a)({},e),{},{firstLoad:!1});case"ITEM_FILTER_DESELECTED":var s=e.items.filter((function(e){return e!==t.payload.filterName}));return Object(d.a)(Object(d.a)({},e),{},{items:s,firstLoad:!1});default:return e}},g=Object(o.c)({fetch:E,filters:h}),y=Object(o.a)(p.a,u.a,m.a),b=Object(o.d)(g,y),N=a(4),_=a(2),v=a(12),k=a(13),L=a(14),T=a(16),O=a(15),S=function(e){Object(T.a)(a,e);var t=Object(O.a)(a);function a(e){var l;return Object(v.a)(this,a),(l=t.call(this,e)).appNode=void 0,l.handleClick=function(e){var t=document.getElementById("hamburger");(l.appNode.current&&!l.appNode.current.contains(e.target)||e.target.attributes.href||e.target.parentElement.attributes.href)&&(t.checked=!1)},l.appNode=r.a.createRef(),l.handleClick=l.handleClick.bind(Object(L.a)(l)),l}return Object(k.a)(a,[{key:"componentWillMount",value:function(){document.addEventListener("mousedown",this.handleClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClick)}},{key:"render",value:function(){return r.a.createElement("header",{className:"navigationHeader",ref:this.appNode},r.a.createElement("div",{className:"logo"},r.a.createElement(N.b,{to:"/"},r.a.createElement("img",{src:".\\assets\\images\\Lookscope-word-logo.png",alt:""}))),r.a.createElement("nav",null,r.a.createElement("input",{id:"hamburger",type:"checkbox",name:"hamburger"}),r.a.createElement("label",{className:"hamburger",htmlFor:"hamburger"},r.a.createElement("span",{className:"hamburger__top"}),r.a.createElement("span",{className:"hamburger__middle"}),r.a.createElement("span",{className:"hamburger__bottom"})),r.a.createElement("div",{className:"links"},r.a.createElement("div",{className:"appButton"},r.a.createElement("a",{href:"https://itunes.apple.com/app/apple-store/id1214741326?mt=8",className:"button"},r.a.createElement("button",null,"Get the App"))),r.a.createElement("div",{className:"inspirationButton"},r.a.createElement(N.b,{onClick:this.handleClick,to:"/inspirations"},"See Inspirations")),r.a.createElement(N.b,{to:"/",onClick:this.handleClick,className:"mobileLogo"},r.a.createElement("img",{src:".\\assets\\images\\Lookscope-footer-logo.png",alt:""})))))}}]),a}(r.a.Component),D=function(){return r.a.createElement("main",{id:"home"},r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"hero__box"},r.a.createElement("h1",null,"Build closet, see outfits."),r.a.createElement("a",{href:"https://itunes.apple.com/app/apple-store/id1214741326?mt=8"},r.a.createElement("button",null,"Download now on iOS")))),r.a.createElement("section",{className:"quotes wrapper"},r.a.createElement("h3",null,"What our users say"),r.a.createElement("div",{className:"quotes__blocks"},r.a.createElement("blockquote",null,"\u201cI've been using Lookscope for one year now and I have to say it's changed how I see my closet and fashion \u2026 Using this app has helped me to clear out the clothes I don't wear. No longer do I have pieces of clothing that are hidden in my closet. Whether your closet is minimal or large, this app will help you make the most of what you have.\u201d",r.a.createElement("div",{className:"rating"},r.a.createElement("p",{className:"star"},"\u2605"),r.a.createElement("p",{className:"star"},"\u2605"),r.a.createElement("p",{className:"star"},"\u2605"),r.a.createElement("p",{className:"star"},"\u2605"),r.a.createElement("p",{className:"star"},"\u2605")),r.a.createElement("div",{className:"blockquote--author"},r.a.createElement("span",{className:"blockquote--author__name"},"David (48)"),",",r.a.createElement("span",{className:"blockquote--author__local"}," SF Bay Area"))),r.a.createElement("blockquote",null,"\u201cLookscope has helped me get out of my \u2018style rut\u2019 by showing me tons of new clothing combinations in my closet. I\u2019ve also saved money on purchasing clothes (for a while at least) because I\u2019m busy wearing these new combinations. I\u2019d highly recommend this app to anyone looking to get organized and save time & money!\u201d",r.a.createElement("div",{className:"rating"},r.a.createElement("p",{className:"star"},"\u2605"),r.a.createElement("p",{className:"star"},"\u2605"),r.a.createElement("p",{className:"star"},"\u2605"),r.a.createElement("p",{className:"star"},"\u2605"),r.a.createElement("p",{className:"star"},"\u2605")),r.a.createElement("div",{className:"blockquote--author"},r.a.createElement("span",{className:"blockquote--author__name"},"Dean (19)"),",",r.a.createElement("span",{className:"blockquote--author__local"}," Houston"))))),r.a.createElement("section",{className:"examples"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"examples--title"},r.a.createElement("h2",null,"Get ideas and improve your style."),r.a.createElement(N.b,{to:"/inspirations"},r.a.createElement("button",null,"Find outfit examples"))),r.a.createElement("ul",{className:"examples--grid"},r.a.createElement("li",null,r.a.createElement("img",{src:".\\assets\\images\\collage\\example-outfit-1.jpg",alt:""})),r.a.createElement("li",null,r.a.createElement("img",{src:".\\assets\\images\\collage\\example-outfit-2.jpg",alt:""})),r.a.createElement("li",null,r.a.createElement("img",{src:".\\assets\\images\\collage\\example-outfit-3.jpg",alt:""})),r.a.createElement("li",null,r.a.createElement("img",{src:".\\assets\\images\\collage\\example-outfit-4.jpg",alt:""})),r.a.createElement("li",null,r.a.createElement("img",{src:".\\assets\\images\\collage\\example-outfit-5.jpg",alt:""})),r.a.createElement("li",null,r.a.createElement("img",{src:".\\assets\\images\\collage\\example-outfit-6.jpg",alt:""})),r.a.createElement("li",null,r.a.createElement("img",{src:".\\assets\\images\\collage\\example-outfit-7.jpg",alt:""})),r.a.createElement("li",null,r.a.createElement("img",{src:".\\assets\\images\\collage\\example-outfit-8.jpg",alt:""})),r.a.createElement("li",null,r.a.createElement("img",{src:".\\assets\\images\\collage\\example-outfit-9.jpg",alt:""})),r.a.createElement("li",null,r.a.createElement("img",{src:".\\assets\\images\\collage\\example-outfit-10.jpg",alt:""})),r.a.createElement("li",null,r.a.createElement("img",{src:".\\assets\\images\\collage\\example-outfit-11.jpg",alt:""})),r.a.createElement("li",null,r.a.createElement("img",{src:".\\assets\\images\\collage\\example-outfit-12.jpg",alt:""})),r.a.createElement("li",null,r.a.createElement("img",{src:".\\assets\\images\\collage\\example-outfit-13.jpg",alt:""})),r.a.createElement("li",null,r.a.createElement("img",{src:".\\assets\\images\\collage\\example-outfit-14.jpg",alt:""})),r.a.createElement("li",null,r.a.createElement("img",{src:".\\assets\\images\\collage\\example-outfit-15.jpg",alt:""})),r.a.createElement("li",null,r.a.createElement("img",{src:".\\assets\\images\\collage\\example-outfit-16.jpg",alt:""}))))))},w=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer--container wrapper"},r.a.createElement(N.b,{to:"/",className:"logo"},r.a.createElement("img",{src:".\\assets\\images\\Lookscope-footer-logo.png",alt:""})),r.a.createElement("div",{className:"resources"},r.a.createElement("p",null,"Resources"),r.a.createElement("div",{className:"resources__links"},r.a.createElement(N.b,{to:"/inspirations"},"Inspiration"),r.a.createElement("a",{href:"best-practices.html"},"Best Practices"),r.a.createElement("a",{href:"how-tos.html"},"How To's"))),r.a.createElement("div",{className:"other"},r.a.createElement("p",null,"Other"),r.a.createElement("div",{className:"resources__links"},r.a.createElement("a",{href:"https://medium.com/lookscope/how-lookscope-was-born-dd531f3d1d1d"},"About"),r.a.createElement("a",{href:"mailto:hi@lookscopeapp.com",target:"_top"},"Contact"),r.a.createElement("a",{href:"terms.html"},"Terms"),r.a.createElement("a",{href:"privacy.html"},"Privacy"),r.a.createElement("a",{href:"v2beta.html"},"V2 Beta Test"))),r.a.createElement("div",{className:"social"},r.a.createElement("div",{className:"social__container"},r.a.createElement("a",{href:"https://www.instagram.com/lookscope/?hl=en"},r.a.createElement("img",{src:"./assets/images/instagram-logo.png",alt:""})),r.a.createElement("a",{href:"https://www.facebook.com/lookscope"},r.a.createElement("img",{src:"./assets/images/facebook-logo.png",alt:""})),r.a.createElement("a",{href:"https://medium.com/lookscope"},r.a.createElement("img",{src:"./assets/images/medium-logo.png",alt:""})),r.a.createElement("a",{href:"https://itunes.apple.com/app/apple-store/id1214741326?mt=8"},r.a.createElement("img",{src:"./assets/images/app-store-logo.png",alt:""}))))),r.a.createElement("div",{className:"copyright"},r.a.createElement("p",null,"\xa9 2022 Lookscope, Inc."),r.a.createElement("p",null,"Credits: Design by",r.a.createElement("a",{href:"https://jenniferjlee.me"}," Jennifer Lee"),", development by"," ",r.a.createElement("a",{href:"https://www.ansonli.io"}," Anson Li"),", branding help by"," ",r.a.createElement("a",{href:"https://cargocollective.com/suhosong"}," Suho Song"))))},C=a(30),I=a(19),F=a.n(I);function j(e){return function(t){t(e?{type:"FETCH_CONTINUED_EXAMPLES_PENDING",payload:null}:{type:"FETCH_EXAMPLES_PENDING",payload:null}),F()({method:"POST",params:{ckAPIToken:"e77360a702ff8b523c437b5346f3eb4f7424667a1cddea61dedb57dbbd2ab42d"},baseURL:"https://api.apple-cloudkit.com/database/1/iCloud.com.lookscopeapp.lookscope/development/public/records/query",data:{zoneID:{zoneName:"_defaultZone"},query:{recordType:"OutfitExampleSmall",sortBy:[{fieldName:"name",ascending:!1}]},resultsLimit:12,continuationMarker:e}}).then((function(a){t(e?{type:"FETCH_CONTINUED_EXAMPLES_FULFILLED",payload:a.data}:{type:"FETCH_EXAMPLES_FULFILLED",payload:a.data})})).catch((function(e){t({type:"FETCH_EXAMPLES_REJECTED",payload:e})}))}}function P(e,t){return function(a){a(t?{type:"FETCH_CONTINUED_FILTERED_EXAMPLES_PENDING",payload:null}:{type:"FETCH_FILTERED_EXAMPLES_PENDING",payload:null}),F()({method:"POST",params:{ckAPIToken:"e77360a702ff8b523c437b5346f3eb4f7424667a1cddea61dedb57dbbd2ab42d"},baseURL:"https://api.apple-cloudkit.com/database/1/iCloud.com.lookscopeapp.lookscope/development/public/records/query",data:{zoneID:{zoneName:"_defaultZone"},query:{recordType:"OutfitExampleSmall",filterBy:e},resultsLimit:12,continuationMarker:t}}).then((function(e){a(t?{type:"FETCH_CONTINUED_FILTERED_EXAMPLES_FULFILLED",payload:e.data}:{type:"FETCH_FILTERED_EXAMPLES_FULFILLED",payload:e.data})})).catch((function(e){a({type:"FETCH_FILTERED_EXAMPLES_REJECTED",payload:e})}))}}var R=function(e){return r.a.createElement("li",null,r.a.createElement(N.b,{to:"/outfits/"+e.recordName},r.a.createElement("img",{src:e.image,alt:""})))},x=a(47);function M(e,t){var a=t.id.toLowerCase().split("__")[1];return{type:e.toUpperCase()+"_FILTER_"+(t.checked?"":"DE")+"SELECTED",payload:{filterName:a}}}var A,B=function(e){var t=function(t){var a=t.currentTarget;if(a.classList.contains("checked")?(a.classList.remove("checked"),a.checked=!1):(a.classList.add("checked"),a.checked=!0),"radio"===a.type){var l,r=a.id,n=a.parentElement.parentElement.children,c=[],s=Object(x.a)(n);try{for(s.s();!(l=s.n()).done;){var o=l.value;o.classList.contains("filterItem")&&c.push(o.children.item(0))}}catch(m){s.e(m)}finally{s.f()}for(var i=0;i<c.length;i++)c[i].classList.contains("checked")&&c[i].id!==r&&(c[i].classList.remove("checked"),e.dispatch(M(e.filterTitle,c[i])))}e.dispatch(M(e.filterTitle,t.currentTarget))};return r.a.createElement("ul",null,r.a.createElement("div",{className:"filterTitle","aria-label":e.filterTitle+" Filters"},"By ",e.filterTitle,":"),e.filters.map((function(a,l){return r.a.createElement("li",{className:"filterItem",key:"filter_"+l,"aria-label":a},r.a.createElement("input",{type:"color"!==e.filterType?e.filterType:"checkbox",id:"filter__"+a,name:e.filterTitle,onClick:t,className:"filter__checkbox"}),r.a.createElement("label",{className:"filter__option"+("color"===e.filterType?" "+a.replace(/\s/g,"").toLowerCase():""),htmlFor:"filter__"+a,title:a},a),r.a.createElement("div",{className:"filter__x"},r.a.createElement("span",{className:"forwardSlash"}),r.a.createElement("span",{className:"backslash"})))})))},U=["Male","Female"],G=["Spring","Summer","Fall","Winter"],H=["Active","Casual","Smart-Casual","Formal"],q=["Stripe","Check","Plaid","Polka-Dot","Camo","Quilt","Camouflage","Other"],X=["White","Light Gray","Gray","Black","Light Brown","Brown","Dark Brown","Grayish Brown","Light Yellow","Yellow","Dark Yellow","Grayish Yellow","Light Orange","Orange","Dark Orange","Grayish Orange","Light Red","Red","Dark Red","Grayish Red","Light Green","Green","Dark Green","Grayish Green","Light Blue","Blue","Dark Blue","Grayish Blue","Light Purple","Purple","Dark Purple","Grayish Purple","Bright Green","Bright Blue","Bright Pink","Bright Purple"],W=["Jacket","Coat","Sweater","Shirt","Chinos","Jeans","Dressy Pants","Sneakers","Boots","Dressy Shoes"],J=(0,a(21).connect)((function(e){return{outfits:e.fetch.payload.records,filters:e.filters,fetch:e.fetch,filteredSearch:e.fetch.filteredSearch}}))(A=function(e){Object(T.a)(a,e);var t=Object(O.a)(a);function a(e){var l;return Object(v.a)(this,a),(l=t.call(this,e)).filterSearches=function(e,t){var a=[],r=document.getElementById("filterToggle"),n=function(e){if(!l.state.filters[e].length)return"continue";l.state.filters[e].map((function(t){return a.push({fieldName:e,comparator:"colors"===e||"items"===e||"patterns"===e||"object"===typeof e?"LIST_CONTAINS":"EQUALS",fieldValue:{value:t}}),null}))};for(var c in l.state.filters)n(c);e?(e.preventDefault(),e.currentTarget.classList.contains("filter__apply")?l.setState({outfits:[],newSearch:!0},(function(){l.props.dispatch(P(a,t)),r.checked=!1})):e.currentTarget.classList.contains("continueSearch")&&l.setState({newSearch:!1},(function(){l.props.dispatch(P(a,t))}))):l.props.dispatch(P(a,t))},l.continueSearch=function(e){l.setState({newSearch:!1});var t=l.props.filteredSearch;e.preventDefault(),l.props.fetch.continuationMarker&&(t?l.filterSearches(e,l.props.fetch.continuationMarker):l.props.dispatch(j(l.props.fetch.continuationMarker)))},l.clearFilters=function(){for(var e=document.getElementsByClassName("filter__checkbox"),t=0;t<e.length;t++)e[t].checked&&e[t].click()},l.closeFilter=function(){document.getElementById("filterToggle").checked=!1},l.state={outfits:[],newSearch:!0,filters:e.filters},l}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=!1,t=document.getElementsByClassName("filter__checkbox");for(var a in this.state.filters)if(this.state.filters[a].length)for(var l=0;l<this.state.filters[a].length;l++){var r=this.state.filters[a][l].replace(/^\w/,(function(e){return e.toUpperCase()}));t.namedItem("filter__"+r)&&(e=!0,t.namedItem("filter__"+r).checked=!0)}e?this.filterSearches():this.props.dispatch(j())}},{key:"componentDidUpdate",value:function(){this.state.newSearch&&this.state.outfits.length&&this.props.fetch.fetching&&this.setState({outfits:[],newSearch:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=[new Set];t=e.outfits?[new Set([].concat(Object(C.a)(this.state.outfits),Object(C.a)(e.outfits)))]:[new Set],this.setState({outfits:Array.from(t[0]),filters:e.filters})}},{key:"render",value:function(){var e=this.state.outfits.length?this.state.outfits.map((function(e){return r.a.createElement(R,{image:e.fields.image.value.downloadURL,key:e.recordName,recordName:e.fields.name.value.replace(/small/g,"large")})})):null;return r.a.createElement("div",{id:"inspirations",className:"wrapper"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"Outfit Inspirations")),r.a.createElement("div",{className:"feedback"},r.a.createElement("h5",{title:"Click to give feedback"},r.a.createElement("a",{href:"https://lookscope.typeform.com/to/VEK3Ct"},"Give Feedback"))),r.a.createElement("div",{className:"filterToggle"},r.a.createElement("input",{type:"checkbox",id:"filterToggle"}),r.a.createElement("label",{className:"filterButton",htmlFor:"filterToggle"},"Filter By ",r.a.createElement("span",{className:"filterButton__arrow"})),r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"controls"},r.a.createElement("div",{className:"clear",onClick:this.clearFilters},"Clear"),r.a.createElement("div",{className:"close",onClick:this.closeFilter},r.a.createElement("span",{className:"forwardSlash"}),r.a.createElement("span",{className:"backslash"}))),r.a.createElement("div",{className:"filter__expanded filter__first"},r.a.createElement(B,{filters:U,filterTitle:"Gender",filterType:"radio",dispatch:this.props.dispatch}),r.a.createElement(B,{filters:G,filterTitle:"Seasons",filterType:"radio",dispatch:this.props.dispatch})),r.a.createElement("div",{className:"filter__expanded filter__second"},r.a.createElement(B,{filters:H,filterTitle:"Style",filterType:"radio",dispatch:this.props.dispatch}),r.a.createElement(B,{filters:q,filterTitle:"Pattern",filterType:"checkbox",dispatch:this.props.dispatch})),r.a.createElement("div",{className:"filter__expanded filter__third"},r.a.createElement(B,{filters:X,filterTitle:"Color",filterType:"color",dispatch:this.props.dispatch})),r.a.createElement("div",{className:"filter__expanded filter__fourth"},r.a.createElement(B,{filters:W,filterTitle:"Item",filterType:"checkbox",dispatch:this.props.dispatch})),r.a.createElement("button",{className:"filter__apply",onClick:this.filterSearches},"Apply Filters"),r.a.createElement("button",{className:"filter__apply mobile",onClick:this.filterSearches},"Apply Filters"))),e?r.a.createElement("ul",{className:"outfits"},e):this.props.fetch.fetching?r.a.createElement("p",{className:"noResults"},"Loading Outfits..."):r.a.createElement("p",{className:"noResults"},"No results found."),this.props.fetch.fetching&&!this.state.newSearch?r.a.createElement("p",{className:"noResults"},"Loading Outfits..."):null,this.props.fetch.continuationMarker?r.a.createElement("button",{className:"continueSearch",onClick:this.continueSearch},"Load More"):null)}}]),a}(r.a.Component))||A,z=function(e){return r.a.createElement("div",{className:"details__view--category"},r.a.createElement("h5",null,e.category,":"),r.a.createElement("p",null,e.text))};function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var V,Q=r.a.createElement("title",null,"Back"),$=r.a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},r.a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},r.a.createElement("path",{d:"M21.92,7.75H1.83L8.6,1A1.14,1.14,0,0,0,8.71.86.54.54,0,0,0,7.84.22L.15,7.9a.56.56,0,0,0,0,.76l7.69,7.72a.53.53,0,0,0,.39.15.51.51,0,0,0,.37-.15.54.54,0,0,0,0-.76l-6.8-6.8h20.1a.57.57,0,0,0,.47-.47A.54.54,0,0,0,21.92,7.75Z"}))),K=function(e){var t=e.svgRef,a=e.title,l=Z(e,["svgRef","title"]);return r.a.createElement("svg",Y({viewBox:"0 0 22.39 16.53",ref:t},l),void 0===a?Q:a?r.a.createElement("title",null,a):null,$)},ee=r.a.forwardRef((function(e,t){return r.a.createElement(K,Y({svgRef:t},e))})),te=(a.p,(0,a(21).connect)((function(e){return{details:e.fetch.details.records,fetched:e.fetch.fetched}}))(V=function(e){Object(T.a)(a,e);var t=Object(O.a)(a);function a(e){var l;return Object(v.a)(this,a),(l=t.call(this,e)).appNode=void 0,l.handleClick=function(e){l.appNode.current&&!l.appNode.current.contains(e.target)&&l.setState({showModal:!1})},l.appNode=r.a.createRef(),l.copyToClipboard=l.copyToClipboard.bind(Object(L.a)(l)),l}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e;this.props.dispatch((e=this.props.match.params.recordName,function(t){t({type:"FETCH_OUTFIT_DETAILS_PENDING",payload:null}),F()({method:"POST",params:{ckAPIToken:"e77360a702ff8b523c437b5346f3eb4f7424667a1cddea61dedb57dbbd2ab42d"},baseURL:"https://api.apple-cloudkit.com/database/1/iCloud.com.lookscopeapp.lookscope/development/public/records/query",data:{zoneID:{zoneName:"_defaultZone"},query:{recordType:"OutfitExampleLarge",filterBy:[{comparator:"EQUALS",fieldName:"name",fieldValue:{value:e}}]}}}).then((function(e){t({type:"FETCH_OUTFIT_DETAILS_FULFILLED",payload:e.data})})).catch((function(e){t({type:"FETCH_OUTFIT_DETAILS_REJECTED",payload:e})}))})),window.scrollTo(0,0)}},{key:"componentWillMount",value:function(){document.addEventListener("mousedown",this.handleClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClick)}},{key:"toTitleCase",value:function(e){var t=e.replace(/([A-Z])/g," $1");return t.charAt(0).toUpperCase()+t.slice(1)}},{key:"copyToClipboard",value:function(e){e.preventDefault(),e.currentTarget.innerText="Link Copied",e.currentTarget.className="clicked";var t=document.getElementById("modalUrlText");t.select(),t.setSelectionRange(0,99999),document.execCommand("copy")}},{key:"render",value:function(){var e=this.props.details,t=[];if(e&&e.length&&this.props.fetched){var a=e[0].fields.outfitTitle?e[0].fields.outfitTitle.value.split(" "):"",l=""===a?null:a.map((function(e,t){return r.a.createElement("span",{key:t},e)})),n=new Date(e[0].modified.timestamp),c=["headDescription","topOuterDescription","topMidDescription","topInnerDescription","topBottomDescription","bottomDescription","feetDescription","otherDescription"];for(var s in e[0].fields)s.includes("Description")&&t.push(r.a.createElement(z,{category:this.toTitleCase(s.replace(/Description/g,"")),text:e[0].fields[s].value,key:s}));for(var o=0;o<t.length;o++){var i=t[o].key;c.indexOf(i)!==o&&t.splice(c.indexOf(i),0,t.splice(o,1)[0])}return r.a.createElement("main",{id:"details"},r.a.createElement("section",{className:"title"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"back"},r.a.createElement(N.b,{to:"/inspirations",title:"Back to Home Page"},r.a.createElement(ee,null))),r.a.createElement("h4",null,r.a.createElement("span",null,e[0].fields.outfitNumber?"Outfit No."+e[0].fields.outfitNumber.value:""),a[0]?r.a.createElement("span",{className:"subtitle"},l):null),r.a.createElement("h5",{className:"when"},e[0].fields.year.value+" "+e[0].fields.season.value+": Week "+e[0].fields.week.value),e[0].fields.location?r.a.createElement("h5",{className:"location"},e[0].fields.location.value):"",r.a.createElement("p",{className:"lastUpdate"},"Last Update:"," ",["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()]+" "+n.getDate()+", "+n.getFullYear()))),r.a.createElement("section",{className:"details"},r.a.createElement("div",{className:"wrapper"},e[0].fields.quote?r.a.createElement("div",{className:"quotes__blocks"},r.a.createElement("blockquote",null,r.a.createElement("span",null,"\u201c"),e[0].fields.quote.value,r.a.createElement("span",null,"\u201d"),r.a.createElement("div",{className:"blockquote--author"},"\u23af",r.a.createElement("span",{className:"blockquote--author__name"},e[0].fields.quoteBy.value)))):null,r.a.createElement("div",{className:"details__view"},r.a.createElement("div",{className:"details__view--photo"},r.a.createElement("img",{src:e[0].fields.image.value.downloadURL,alt:""})),r.a.createElement("div",{className:"details__view--categories"},t,r.a.createElement("button",{onClick:this.copyToClipboard},"Share This Post"),r.a.createElement("input",{id:"modalUrlText",readOnly:!0,type:"text",value:document.URL}))))))}return r.a.createElement("main",{id:"details",className:"loading"},"Loading...")}}]),a}(r.a.Component))||V),ae=function(){return r.a.createElement(s.Provider,{store:b},r.a.createElement("div",{className:"App"},r.a.createElement(N.a,null,r.a.createElement(S,null),r.a.createElement(_.a,{exact:!0,path:"/",component:D}),r.a.createElement(_.a,{path:"/inspirations",component:J}),r.a.createElement(_.a,{path:"/outfits/:recordName",component:te}),r.a.createElement(w,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.e19d032f.chunk.js.map