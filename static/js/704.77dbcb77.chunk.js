"use strict";(self.webpackChunkmern_project=self.webpackChunkmern_project||[]).push([[704],{81776:function(e,t,n){n.d(t,{$:function(){return i},t:function(){return a}});var r=n(6803),i=function(e){return e.subscribe="subscribe",e.dealsUpdated="dealsUpdated",e[e.retrievedBBItemsOnlinePrice=r.UT]="retrievedBBItemsOnlinePrice",e[e.retrievedMSItemsOnlinePrice=r.ug]="retrievedMSItemsOnlinePrice",e[e.retrievedBBItemsOnlinePriceErr=r._o]="retrievedBBItemsOnlinePriceErr",e[e.retrievedMSItemsOnlinePriceErr=r.yd]="retrievedMSItemsOnlinePriceErr",e}({}),a=function(e){return e.dealsRoom="dealsRoom",e}({})},29205:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(1413),i=n(15671),a=n(43144),o=n(60136),c=n(27277),s=n(72791),u=n(78687),l=n(86005),d=n(83099),f=n(87309),h=n(49766),p=n(96263),I=n.n(p),E=n(11730),v=n(24258),m=n(83783),T=n(80184),y=function(e){(0,o.Z)(n,e);var t=(0,c.Z)(n);function n(e){var a;return(0,i.Z)(this,n),(a=t.call(this,e)).searchInput=void 0,a.setTableUserSettings=function(e){var t=e.searchText,n=e.searchedRowId,r=e.searchedColumn;""!==t&&a.setState({searchText:t,searchedRowId:n,searchedColumn:r})},a.addSearchPropsToColumns=function(e,t){return e.map((function(e){return e.searchable?(0,r.Z)((0,r.Z)({},e),t(e.dataIndex)):(0,r.Z)({},e)}))},a.handleScrollPosition=function(e,t){if(""!==t.searchedRowId){var n=a.locateSearchedItem(e,t.searchedRowId);a.setState({searchedRowId:n._id}),a.scrollToTableRow(document,n.index)}},a.locateSearchedItem=function(e,t){var n=e.find((function(e){return e._id===t})),r=e.findIndex((function(e){return e._id===t}));return{index:r||0,_id:n?n._id:""}},a.scrollToTableRow=function(e,t){e.getElementsByClassName("ant-layout-content site-layout-content")[0].scrollTop=75.31*(t-0)},a.handleSearch=function(e,t,n){t();var r=(0,m.gI)(e[0]);a.setState({searchText:r,searchedColumn:n})},a.handleReset=function(e){e&&e(),a.setState({searchText:""})},a.getColumnSearchProps=function(e){return{filterDropdown:function(t){var n=t.setSelectedKeys,r=t.selectedKeys,i=t.confirm,o=t.clearFilters;return(0,T.jsxs)("div",{style:{padding:8},children:[(0,T.jsx)(l.Z,{ref:a.searchInput,placeholder:"Search ".concat(e),value:r[0],onChange:function(e){return n(e.target.value?[e.target.value]:[""])},onPressEnter:function(){return a.handleSearch(r,i,e)},style:{marginBottom:8,display:"block"}}),(0,T.jsxs)(d.Z,{children:[(0,T.jsx)(f.ZP,{type:"primary",onClick:function(){return a.handleSearch(r,i,e)},icon:(0,T.jsx)(E.Z,{}),size:"small",style:{width:90},children:"Search"}),(0,T.jsx)(f.ZP,{size:"small",style:{width:90},onClick:function(){return a.handleReset(o)},children:"Reset"})]})]})},filteredValue:a.state.searchedColumn===e?[a.state.searchText]:[],filterIcon:function(e){return(0,T.jsx)(E.Z,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,n){return void 0!==t&&(!!n[e]&&n[e].toString().toLowerCase().includes(t.toString().toLowerCase()))},onFilterDropdownOpenChange:function(e){e&&setTimeout((function(){var e;return null===(e=a.searchInput.current)||void 0===e?void 0:e.select()}),100)},render:function(t,n){return a.state.searchedColumn===e?(0,T.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:n.link,children:(0,T.jsx)(I(),{highlightStyle:{backgroundColor:"#c7edcc",padding:0},searchWords:[a.state.searchText],autoEscape:!0,textToHighlight:t?t.toString():""})}):a.state.searchedRowId===n._id?(0,T.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:n.link,children:(0,T.jsx)(I(),{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[t],autoEscape:!0,textToHighlight:t?t.toString():""})}):(0,T.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:n.link,children:t})}}},a.state={searchText:"",searchedRowId:"",searchedColumn:""},a.searchInput=s.createRef(),a}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){var e=this.props.dataSource;e&&this.handleScrollPosition(e,(0,r.Z)({},this.state))}},{key:"componentDidUpdate",value:function(e,t){this.state.searchText!==t.searchText&&this.props.saveUserTableSettings((0,r.Z)({},this.state))}},{key:"render",value:function(){var e=this.props,t=e.dataSource,n=e.loading,i=e.handleRowClick,a=e.tableUserSettings,o=this.props.columns,c=this.addSearchPropsToColumns(o,this.getColumnSearchProps);return(0,T.jsx)(h.Z,(0,r.Z)({dataSource:t,loading:n,showSorterTooltip:!0,columns:c,onRow:i?function(e){return{onClick:function(){return i(e)}}}:void 0},a))}}]),n}(s.Component),g=(0,u.$j)(null,{saveUserTableSettings:v.L1})(y)},93343:function(e,t,n){n.d(t,{BB:function(){return f},Dv:function(){return h},yW:function(){return d}});n(72791);var r=n(45863),i=n(77128),a=n(38307),o=n(57689),c=n(66106),s=n(30914),u=n(80184),l=r.Z.Title,d=function(e){var t=e.title,n=e.subTitle,r=(0,o.s0)();return(0,u.jsx)(a.m,{style:{width:"100%",paddingBlock:0,paddingInline:0},onBack:function(){r(-1)},title:(0,u.jsx)(l,{level:2,style:{whiteSpace:"normal",wordWrap:"break-word"},children:t}),subTitle:n})},f=function(e){var t=e.title,n=e.subTitle;return(0,u.jsx)(i.Z,{plain:!0,children:(0,u.jsx)(a.m,{className:"site-page-header",title:t,subTitle:n})})},h=function(e){var t=e.children;return(0,u.jsx)(c.Z,{gutter:[24,24],style:{display:"flex",justifyContent:"center"},children:(0,u.jsx)(s.Z,{span:18,children:t})})}},97988:function(e,t,n){n.d(t,{v:function(){return i}});var r=n(6803),i={BESTBUY:r.Yx,MICROSOFT:r.lA,COSTCO:r.z6,WALMART:r.yz}},83783:function(e,t,n){n.d(t,{Jo:function(){return i},gI:function(){return r}});n(72426);var r=function(e){return e.replace(/^\s+|\s+$/g,"")};function i(e){return Object.keys(e).forEach((function(t){if("string"===typeof e[t]){var n=e[t].trim().toLowerCase();e[t]=n}})),e}},66080:function(e,t,n){var r=n(1413),i=n(15671),a=n(43144),o=n(60136),c=n(27277),s=n(72791),u=(n(45041),n(78687)),l=n(24258),d=n(6803),f=n(77106),h=n(62444),p=n(45863),I=n(61431),E=n(66883),v=n(20458),m=n(93343),T=n(10702),y=n(11878),g=n(29205),x=n(80184),_=p.Z.Text,S=d.Yx,w=d.lA,C=(d.z6,d.yz,{showSorterTooltip:!1,pagination:{defaultPageSize:20,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"],position:["topRight","bottomRight"]},size:"middle",expandable:void 0}),R=[{title:"Name",dataIndex:"name",key:"name",width:"30%",searchable:!0},{title:"UPC | SKU",dataIndex:"upc",key:"upc",width:"15%",searchable:!0},{title:"Price Diff",dataIndex:"priceDiff",key:"priceDiff",width:"10%",sorter:function(e,t){return e.priceDiff-t.priceDiff},render:function(e,t){var n=Math.round(e),r=t.isCurrentPriceLower?"success":"danger";return(0,x.jsxs)(_,{type:r,children:[" $ ",n," "]})}},{title:(0,x.jsx)(I.Z,{placement:"topLeft",title:"Click to sort on price diff",children:"Current Price"}),dataIndex:"currentPrice",key:"currentPrice",width:"10%",sorter:function(e,t){return e.currentPrice-t.currentPrice},render:function(e,t){return t.isCurrentPriceLower?(0,x.jsxs)(_,{type:"success",children:[" $ ",e," "]}):(0,x.jsxs)(_,{type:"danger",children:[" $ ",e," "]})}},{title:"Capture Date",dataIndex:"captureDate",key:"captureDate",width:"10%",sorter:function(e,t){return Number(new Date(e.captureDate))-Number(new Date(t.captureDate))},sortDirections:["descend","ascend","descend"]}],Z=function(e){var t=e.storeName,n=(0,u.I0)(),r=(0,u.v9)((function(e){return e.bestbuy.onlinePriceLoading})),i=(0,u.v9)((function(e){return e.microsoft.onlinePriceLoading})),a=function(e){switch(e){case S:return r;case w:return i;default:return!1}}(t),o=[{title:"Bot Options",key:"options",children:[{key:"crawl",disabled:a||!1,icon:function(){return a?(0,x.jsx)(f.Z,{}):(0,x.jsx)(h.Z,{})},title:"Initiate Bot"}]}];return(0,x.jsx)(E.Z,{showIcon:!0,defaultExpandAll:!0,defaultSelectedKeys:["options"],switcherIcon:(0,x.jsx)(v.Nm0,{}),treeData:o,onSelect:function(e){"crawl"===e[0]&&n((0,l.d4)(t))}})},b=function(e){(0,o.Z)(n,e);var t=(0,c.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).handleRowClick=function(e){var t=r.props,n=t.storeName,i=t.navigate;t.location;i&&i("detail/store/".concat(n,"/id/").concat(e._id,"/sku/").concat(e.sku))},r.state={searchText:"",searchedRowId:"",searchedColumn:""},r}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.items,n=e.storeName,i=e.loading;e.userTableSettings;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m.yW,{title:n}),(0,x.jsx)(Z,{storeName:n}),(0,x.jsx)(g.Z,(0,r.Z)((0,r.Z)({},C),{},{loading:i,columns:R,dataSource:t,handleRowClick:this.handleRowClick}))]})}}]),n}(s.Component);b.contextType=y.J;var k=(0,u.$j)((function(e){return{userTableSettings:e.item.tableState}}),{handlePriceCrawlFinished:l.Q,handlePriceCrawlError:l.HA,saveUserTableSettings:l.L1,signalPriceCrawler:l.d4});t.ZP=(0,T.Z)(k(b))},24258:function(e,t,n){n.d(t,{HA:function(){return v},L1:function(){return T},Q:function(){return E},Rf:function(){return m},d4:function(){return I}});var r=n(1413),i=n(74165),a=n(15861),o=n(31243),c=n(72426),s=n.n(c),u=n(34796),l=n(6803),d=n(34219),f=n(97922),h=function(){return{type:l.JE}};function p(e){switch(e){case l.lA:return{routes:"microsoft",type:{CLEAR_ERRORS:l.WD,GET_ITEM_DETAIL:l.Pd,GET_ITEM_ONLINE_PRICE:l.q$,ITEMS_ONLINE_PRICE_LOADING:l.ZB,ON_RETRIEVED_ONLINE_PRICE:l.ug,FAILED_RETRIEVE_DEALS_INFO:l.yd}};case l.Yx:return{routes:"bestbuy",type:{CLEAR_ERRORS:l.Tp,GET_ITEM_DETAIL:l.Op,ADD_ITEM_SPEC:l.b1,GET_ITEM_ONLINE_PRICE:l.JH,ITEMS_ONLINE_PRICE_LOADING:l.qp,ON_RETRIEVED_ONLINE_PRICE:l.UT,FAILED_RETRIEVE_DEALS_INFO:l._o}};default:return}}var I=function(e){return function(){var t=(0,a.Z)((0,i.Z)().mark((function t(n,r){var a;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=p(e)){t.next=3;break}return t.abrupt("return");case 3:n({type:a.type.ITEMS_ONLINE_PRICE_LOADING}),o.Z.get("/api/".concat(a.routes,"/crawl/v1/laptop/prices"),(0,d.Y2)(r)).then((function(e){n((0,f.h)(e.data.msg,e.status,a.type.ITEMS_ONLINE_PRICE_LOADING))})).catch((function(e){n((0,f.j)()),n((0,f.h)(e.response.msg,e.response.status,l.Cg))}));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=(0,a.Z)((0,i.Z)().mark((function t(n){var r;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=p(e)){t.next=3;break}return t.abrupt("return");case 3:n({type:r.type.GET_ITEM_ONLINE_PRICE}),n((0,f.j)()),n((0,f.h)("".concat(e," Bot Finished!"),200,r.type.GET_ITEM_ONLINE_PRICE));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=(0,a.Z)((0,i.Z)().mark((function t(n){var r;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=p(e)){t.next=3;break}return t.abrupt("return");case 3:n({type:r.type.GET_ITEM_ONLINE_PRICE}),n((0,u.b)(r.type.CLEAR_ERRORS)),n((0,u.d)("".concat(e," Bot throw Exceptions"),400,r.type.FAILED_RETRIEVE_DEALS_INFO));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e,t,n){return function(){var c=(0,a.Z)((0,i.Z)().mark((function a(c,l){var f;return(0,i.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:c(h()),f=p(e),o.Z.get("/api/".concat(null===f||void 0===f?void 0:f.routes,"/v1/deal/detail/id/").concat(t),(0,r.Z)((0,r.Z)({},(0,d.Y2)(l)),{},{signal:n})).then((function(e){var t=e.data;t.price_timestamps.forEach((function(e){e.date=s()(e.date).format("MMM Do YYYY HH:mm a")})),c({type:f.type.GET_ITEM_DETAIL,payload:t})})).catch((function(e){e.response?c((0,u.d)(e.response.data.msg,e.response.status)):console.error(e)}));case 3:case"end":return i.stop()}}),a)})));return function(e,t){return c.apply(this,arguments)}}()},T=function(e){return function(){var t=(0,a.Z)((0,i.Z)().mark((function t(n){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(h()),n({type:l.n6,payload:(0,r.Z)({},e)});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},45041:function(){}}]);
//# sourceMappingURL=704.77dbcb77.chunk.js.map