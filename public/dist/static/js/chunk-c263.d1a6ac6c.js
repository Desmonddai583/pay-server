(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c263"],{AzDp:function(t,a,e){},HGhp:function(t,a,e){"use strict";var n=e("AzDp");e.n(n).a},"r/pB":function(t,a,e){"use strict";e.r(a);var n=e("14Xm"),r=e.n(n),s=e("D3Ub"),i=e.n(s),o=e("7BsA"),c=e.n(o),l=e("MT78"),d=e.n(l);e("gX0l");var u={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null,sidebarElm:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.initChart(),this.autoResize&&(this.__resizeHandler=function(t,a,e){var n=void 0,r=void 0,s=void 0,i=void 0,o=void 0,c=function c(){var l=+new Date-i;l<a&&l>0?n=setTimeout(c,a-l):(n=null,e||(o=t.apply(s,r),n||(s=r=null)))};return function(){for(var r=arguments.length,l=Array(r),d=0;d<r;d++)l[d]=arguments[d];s=this,i=+new Date;var u=e&&!n;return n||(n=setTimeout(c,a)),u&&(o=t.apply(s,l),s=l=null),o}}(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler)),this.sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.sidebarElm&&this.sidebarElm.addEventListener("transitionend",this.sidebarResizeHandler)},beforeDestroy:function(){this.chart&&(this.autoResize&&window.removeEventListener("resize",this.__resizeHandler),this.sidebarElm&&this.sidebarElm.removeEventListener("transitionend",this.sidebarResizeHandler),this.chart.dispose(),this.chart=null)},methods:{sidebarResizeHandler:function(t){"width"===t.propertyName&&this.__resizeHandler()},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.order,e=t.money;this.chart.setOption({xAxis:{data:["周一","周二","周三","周四","周五","周六","周日"],boundaryGap:!1,axisTick:{show:!1}},grid:{left:10,right:10,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},legend:{data:["订单","金额"]},series:[{name:"订单",itemStyle:{normal:{color:"#FF005A",lineStyle:{color:"#FF005A",width:2}}},smooth:!0,type:"line",data:a,animationDuration:1500,animationEasing:"cubicInOut"},{name:"金额",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},data:e,animationDuration:1500,animationEasing:"quadraticOut"}]})},initChart:function(){this.chart=d.a.init(this.$el,"macarons"),this.setOptions(this.chartData)}}},h=e("KHd+"),p=Object(h.a)(u,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},[],!1,null,null,null);p.options.__file="chart.vue";var f=p.exports,v=e("sw8x"),m={name:"Dashboard",data:function(){return{lineChartData:{order:[],money:[]},todayOrders:0,todayMoney:0}},components:{CountTo:c.a,Chart:f},created:function(){this.fetchTodayPayStat(),this.fetchWeekPayStat()},methods:{formatDate:function(t){var a=t.getFullYear(),e=t.getMonth()+1,n=t.getDate();return a+"-"+(e<10?"0"+e:e)+"-"+(n<10?"0"+n:n)},fetchWeekPayStat:function(){var t=this;return i()(r.a.mark(function a(){var e,n,s,i,o;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=new Date,n=e.getDay(),s=new Date(e.setDate(e.getDate()-n+1)),i=new Date(e.setDate(e.getDate()+7-n)),a.next=6,Object(v.b)({startDate:t.formatDate(s),endDate:t.formatDate(i)});case 6:if(null!==(o=a.sent)){a.next=9;break}return a.abrupt("return");case 9:o.week_list.forEach(function(a){t.lineChartData.order.push(a.p_count+a.w_count),t.lineChartData.money.push((a.p_total1+a.w_total1)/100)});case 10:case"end":return a.stop()}},a,t)}))()},fetchTodayPayStat:function(){var t=this;return i()(r.a.mark(function a(){var e,n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=new Date,a.next=3,Object(v.b)({startDate:t.formatDate(e),endDate:t.formatDate(e)});case 3:if(null!==(n=a.sent)){a.next=6;break}return a.abrupt("return");case 6:t.todayOrders=n.total_count,t.todayMoney=n.total_amount/100;case 8:case"end":return a.stop()}},a,t)}))()}}},y=(e("HGhp"),Object(h.a)(m,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-container"},[e("el-row",{staticClass:"panel-group",attrs:{gutter:40}},[e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:12}},[e("router-link",{staticClass:"card-panel",attrs:{to:{path:"/receipt/orders"}}},[e("div",{staticClass:"card-panel-icon-wrapper icon-people"},[e("svg-icon",{attrs:{"icon-class":"list","class-name":"card-panel-icon"}})],1),t._v(" "),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("今日订单")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.todayOrders,duration:2600}})],1)])],1),t._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:12}},[e("router-link",{staticClass:"card-panel",attrs:{to:{path:"/receipt/orders"}}},[e("div",{staticClass:"card-panel-icon-wrapper icon-message"},[e("svg-icon",{attrs:{"icon-class":"money","class-name":"card-panel-icon"}})],1),t._v(" "),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("今日金额(元)")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.todayMoney,decimals:2,duration:3e3}})],1)])],1)],1),t._v(" "),e("div",{staticClass:"chart-title"},[t._v("本周收款")]),t._v(" "),e("Chart",{attrs:{"chart-data":t.lineChartData}})],1)},[],!1,null,"604c748c",null));y.options.__file="Index.vue";a.default=y.exports},sw8x:function(t,a,e){"use strict";e.d(a,"a",function(){return r}),e.d(a,"b",function(){return s});var n=e("t3Un"),r=function(t){var a=t.page,e=void 0===a?1:a,r=t.page_size,s=void 0===r?10:r,i=t.state;return Object(n.a)({url:"/api/paychecks/list",method:"get",params:{page:e,page_size:s,state:i}})},s=function(t){var a=t.startDate,e=t.endDate;return Object(n.a)({url:"/api/paychecks/statistic",method:"get",params:{startDate:a,endDate:e}})}}}]);