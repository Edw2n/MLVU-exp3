(this.webpackJsonpexperiment3=this.webpackJsonpexperiment3||[]).push([[0],{17:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(18),i=n.n(r),s=(n(49),n(2)),o=n(20),u=n(9),l=n(8),d=(n(50),n(3)),p=n.n(d),j=n(12),f=(n(17),n(4)),h=n(19),b=n.n(h),x=n(0);var m=function(t){var e=t.number,n=t.rootDir,r=Array.from(Array(9).keys()),i=Object(c.useState)(1),s=Object(l.a)(i,2),o=s[0],u=s[1],d={3:"basic_fv.png",4:"dataset_fv.png"};return a.a.useEffect((function(){function t(){return(t=Object(j.a)(p.a.mark((function t(){var c,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=f.b("#attribution_".concat(e)),a={w:90,h:80},c.attr("preserveAspectRatio","xMinYMin meet").style("background-color","transparent").attr("viewBox","0 0 ".concat(a.w," ").concat(a.h)).classed("svg-content",!0).selectAll("*").remove(),c.append("defs").selectAll("pattern").data(r.slice(0,2)).enter().append("pattern").attr("id",(function(t){return"att_".concat(e,"_").concat(t)})).attr("width","100%").attr("height","100%").attr("patternContentUnits","objectBoundingBox").append("image").attr("height","1").attr("width","1").attr("xlink:href",(function(t){return"".concat(n,"/attribution/dataset-example").concat(t+1,".png")})),c.append("defs").selectAll("pattern").data(r.slice(2,4)).enter().append("pattern").attr("id",(function(t){return"att_".concat(e,"_").concat(t)})).attr("width","100%").attr("height","100%").attr("patternContentUnits","objectBoundingBox").append("image").attr("height","1").attr("width","1").attr("xlink:href",(function(t){return"".concat(n,"/attribution/").concat(d[t+1])})),c.append("g").selectAll("rect").data(r.slice(0,4)).enter().append("rect").attr("id",(function(t){return"att_".concat(e,"_").concat(t)})).attr("x",(function(t){return 7+40*parseInt(t/2)})).attr("y",(function(t){return t%2*40})).attr("width",38).attr("height",38).style("fill",(function(t){return"url(#att_".concat(e,"_").concat(t,")")})).style("filter","opacity(".concat(20*o,"%)"));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[o]),Object(x.jsxs)("div",{className:"Target-FV",children:[Object(x.jsx)("svg",{id:"attribution_"+e,className:"attribution"}),Object(x.jsx)(b.a,{className:"slider",value:o,min:"1",max:"5",variant:"info",onChange:function(t){u(t.target.value)}})]})};var O=function(t){var e=t.number,n=t.setAnswer,c=t.rootDir,r=Array.from(Array(9).keys());return a.a.useEffect((function(){function t(){return(t=Object(j.a)(p.a.mark((function t(){var a,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=function(){f.a(this).classed("clicked",!f.a(this).classed("clicked")),n(e,f.a(this).data()[0]+1)},a=f.b("#Options_".concat(e)),90,90,a.attr("preserveAspectRatio","xMinYMin meet").style("background-color","transparent").attr("viewBox","0 0 ".concat(90," ").concat(90)).classed("svg-content",!0).selectAll("*").remove(),a.append("defs").selectAll("pattern").data(r).enter().append("pattern").attr("id",(function(t){return"img_".concat(e,"_").concat(t)})).attr("width","100%").attr("height","100%").attr("patternContentUnits","objectBoundingBox").append("image").attr("height","1").attr("width","1").attr("xlink:href",(function(t){return"".concat(c,"/options/option").concat(t+1,".png")})),a.append("g").selectAll("rect").data(r).enter().append("rect").attr("id",(function(t){return"rect_".concat(e,"_").concat(t)})).attr("x",(function(t){return 30*parseInt(t/3)+1})).attr("y",(function(t){return t%3*30+1})).attr("width",28).attr("height",28).style("fill",(function(t){return"url(#img_".concat(e,"_").concat(t,")")})).on("click",i);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(x.jsxs)("div",{className:"Question",children:[Object(x.jsx)("div",{className:"Question-Title",children:Object(x.jsxs)("text",{className:"Question-Text",children:["Question ",e]})}),Object(x.jsxs)("div",{className:"Container",children:[Object(x.jsx)(m,{number:e,rootDir:c}),Object(x.jsx)("div",{className:"Option-box",children:Object(x.jsx)("svg",{id:"Options_"+e,className:"Options"})})]})]})};var g=function(){var t=[132,210,233,291,355,356,360,577,660,735,840,862,904,906,908,997,1173,1526,1591,1797,1895,1943,1954,1994,1997,2031].map((function(t){return"full_spec11/nueron_"+t+"/Madry"})),e=t.length,n=Object(c.useState)(Array.from(Array(e).keys()).reduce((function(t,e){return t[e+1]=[],t}),{})),a=Object(l.a)(n,2),r=a[0],i=a[1],d={name:"",age:"",gender:"",major:"",backgrounds:""},p=Object(c.useState)(d),j=Object(l.a)(p,2),f=j[0],h=j[1];function b(t,e){i((function(n){return Object(u.a)(Object(u.a)({},n),{},Object(s.a)({},t,n[t].includes(e)?n[t].filter((function(t){return t!==e})):[].concat(Object(o.a)(n[t]),[e])))}))}function m(t,e){h((function(n){return Object(u.a)(Object(u.a)({},n),{},Object(s.a)({},t,e.target.value))}))}return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("header",{className:"App-header",children:Object(x.jsx)("p",{children:"Interpretability Test (Experiment 3)"})}),Object(x.jsxs)("div",{className:"userInfoForm",children:[Object(x.jsxs)("div",{className:"Form-above",children:[Object(x.jsx)("div",{className:"Form-Left",children:Object.keys(d).slice(0,2).map((function(t){return console.log(t),Object(x.jsxs)("div",{className:"Input-Row",children:[Object(x.jsxs)("text",{style:{width:"60px"},children:[" ",t," "]}),Object(x.jsx)("input",{type:"text",value:f[t],onChange:function(e){return m(t,e)}})]})}))}),Object(x.jsx)("div",{className:"Form-Left",children:Object.keys(d).slice(2,4).map((function(t){return console.log(t),Object(x.jsxs)("div",{className:"Input-Row",children:[Object(x.jsxs)("text",{style:{width:"60px"},children:[" ",t," "]}),Object(x.jsx)("input",{type:"text",value:f[t],onChange:function(e){return m(t,e)}})]})}))})]}),Object(x.jsxs)("div",{className:"Input-full-Row",children:[Object(x.jsxs)("text",{style:{width:"100px"},children:[" ",Object.keys(f).slice(-1)[0]," "]}),Object(x.jsx)("textarea",{type:"text",value:f[Object.keys(f).slice(-1)[0]],onChange:function(t){return m(Object.keys(f).slice(-1)[0],t)}})]})]}),Array.from(Array(e).keys()).map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(O,{number:e+1,setAnswer:b,rootDir:t[e]})})})),Object(x.jsx)("button",{onClick:function(){var t=[];return Object.keys(r).forEach((function(e){3!==r[e].length&&t.push(e)})),0==t.length&&function(t,e,n){var c=document.createElement("a"),a=new Blob([t],{type:n});c.href=URL.createObjectURL(a),c.download=e,c.click()}(JSON.stringify(f),"Experiment3_"+f.name+".json","text/plain"),alert(JSON.stringify(f)+"\n"+"".concat(t.length>0?"pick only 3 options: "+t:"All Done!!!!")+"\n"+JSON.stringify(r))},children:"Submit"})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(g,{})}),document.getElementById("root")),v()}},[[57,1,2]]]);
//# sourceMappingURL=main.d17dabf0.chunk.js.map