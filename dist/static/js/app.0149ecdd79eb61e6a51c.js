webpackJsonp([1],{100:function(e,t){},101:function(e,t){},102:function(e,t){},103:function(e,t){},108:function(e,t,n){n(102);var o=n(7)(n(77),n(113),"data-v-32d2e663",null);e.exports=o.exports},109:function(e,t,n){n(101);var o=n(7)(n(78),n(112),"data-v-28bedbde",null);e.exports=o.exports},110:function(e,t,n){n(100);var o=n(7)(n(79),n(111),"data-v-1b219ead",null);e.exports=o.exports},111:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("\n  游戏已结束\n")])},staticRenderFns:[]}},112:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root"},[e.time?[n("div",{attrs:{id:"container"}}),e._v(" "),e.ready?n("div",{staticClass:"ready"},[n("span",[e._v(e._s(e.ready))])]):e._e(),e._v(" "),n("div",{staticClass:"info"},[n("el-card",{staticClass:"box-card"},[n("div",[e._v("剩余时间: "+e._s(e.time)+"s")]),e._v(" "),n("div",[e._v("任务进度: "+e._s(e.foundCount)+"/8")])])],1)]:n("div",{staticClass:"overInfo"},[n("h3",[e._v("恭喜你找到"+e._s(e.foundCount)+"个拼图，获得"+e._s(e.money)+"牛币,打败了"+e._s(e.people)+"的玩家")]),e._v(" "),n("el-form",{ref:"numberValidateForm",staticClass:"demo-ruleForm",attrs:{model:e.numberValidateForm,"label-position":"top","label-width":"100px"}},[n("el-form-item",{attrs:{label:"手机号码",prop:"phone",rules:[{required:!0,message:"号码不能为空"},{type:"number",message:"号码必须为数字值"}]}},[n("el-input",{attrs:{type:"phone","auto-complete":"off"},model:{value:e.numberValidateForm.phone,callback:function(t){e.numberValidateForm.phone=e._n(t)},expression:"numberValidateForm.phone"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("numberValidateForm")}}},[e._v("提交")]),e._v(" "),n("el-button",{on:{click:function(t){e.resetForm("numberValidateForm")}}},[e._v("重置")])],1)],1)],1)],2)},staticRenderFns:[]}},113:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root"},[n("div",{staticClass:"content"},[n("h1",[e._v("翻转羊城八景")]),e._v(" "),e._m(0),e._v(" "),n("el-button",{attrs:{type:"primary"}},[n("router-link",{attrs:{to:e.toggle}},[e._v("进入游戏")])],1)],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("时间")]),e._v(" "),n("li",[e._v("寻找")]),e._v(" "),n("li",[e._v("本活动")]),e._v(" "),n("li",[e._v("。。。")])])}]}},114:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{name:"window"}})],1)},staticRenderFns:[]}},32:function(e,t,n){"use strict";var o=n(3),a=n(115),r=n(108),i=n.n(r),d=n(109),c=n.n(d),u=n(110),s=n.n(u),l=n(99);n.n(l);o.default.use(a.a),t.a=new a.a({routes:[{path:"/",name:"entry",components:{window:i.a}},{path:"/game",name:"game",components:{window:c.a}},{path:"/outDate",name:"outDate",components:{window:s.a}}]})},34:function(e,t){},35:function(e,t,n){n(103);var o=n(7)(n(76),n(114),null,null);e.exports=o.exports},75:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),a=n(35),r=n.n(a),i=n(32),d=n(33),c=n.n(d),u=n(34),s=(n.n(u),n(31)),l=n.n(s);o.default.prototype.$http=l.a,o.default.use(c.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})},76:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"entry",data:function(){return{toggle:"/game"}},methods:{checkDate:function(){var e=Date.now()-new Date(2017,4,3);this.toggle=e<0?"/game":"/outDate"}},created:function(){this.checkDate()}}},78:function(e,t,n){"use strict";function o(){var e=void 0,t=void 0;e=document.getElementById("container"),h=new v.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1100),h.target=new v.Vector3(0,0,0),g=new v.Scene;var n=new v.SphereGeometry(500,60,40);n.scale(-1,1,1);var o=new v.MeshBasicMaterial({map:(new v.TextureLoader).load("http://oe9g187nt.bkt.clouddn.com/img/2294472375_24a3b8ef46_o.jpg")});t=new v.Mesh(n,o),g.add(t);for(var a=0;a<8;a++){var r=function(){var e=new v.SpriteMaterial({map:(new v.TextureLoader).load("http://oe9g187nt.bkt.clouddn.com/img/sprite1.png"),color:16777215,fog:!0}),t=new v.Sprite(e);return t.scale.set(20,20,1),t.position.x=300*Math.random()*(Math.random()>.5?1:-1),t.position.y=300*Math.random()*(Math.random()>.5?1:-1),t.position.z=300*Math.random()*(Math.random()>.5?1:-1),t}();D[r.id]=!1,g.add(r)}w=new v.WebGLRenderer,w.setPixelRatio(window.devicePixelRatio),w.setSize(window.innerWidth,window.innerHeight),e.appendChild(w.domElement)}function a(){container.addEventListener("mousedown",u(this),!1),container.addEventListener("mousemove",s,!1),container.addEventListener("mouseup",l,!1),container.addEventListener("wheel",m,!1),container.addEventListener("dragover",function(e){e.preventDefault(),e.dataTransfer.dropEffect="copy"},!1),container.addEventListener("dragenter",function(e){document.body.style.opacity=.5},!1),container.addEventListener("dragleave",function(e){document.body.style.opacity=1},!1),container.addEventListener("drop",function(e){e.preventDefault();var t=new FileReader;t.addEventListener("load",function(e){material.map.image.src=e.target.result,material.map.needsUpdate=!0},!1),t.readAsDataURL(e.dataTransfer.files[0]),document.body.style.opacity=1},!1),container.addEventListener("resize",c,!1),container.addEventListener("touchstart",r(this),!1),document.addEventListener("touchmove",function(e){e.preventDefault()},!1),container.addEventListener("touchmove",i,!1),container.addEventListener("touchend",d,!1)}function r(e){return function(t){_=!0,b=t.changedTouches[0].pageX,y=t.changedTouches[0].pageY,x=M,F=E,R.x=t.changedTouches[0].pageX/window.innerWidth*2-1,R.y=-t.changedTouches[0].pageY/window.innerHeight*2+1,L.setFromCamera(R,h);var n=L.intersectObjects(g.children);n.length>0&&n[0].object.id>3&&(n[0].object.material.map=(new v.TextureLoader).load("http://oe9g187nt.bkt.clouddn.com/img/sprite0.png"),n[0].object.scale.set(20,20,1),D[n[0].object.id]===!1&&(D[n[0].object.id]=!0,e.foundCount+=1),k()&&(e.over=!0))}}function i(e){if(void 0==e.changedTouches[1])_===!0&&(M=.1*(b-e.changedTouches[0].pageX)+x,E=.1*(e.changedTouches[0].pageY-y)+F);else{var t=Math.pow(e.changedTouches[1].pageX-e.changedTouches[0].pageX,2)+Math.pow(e.changedTouches[1].pageY-e.changedTouches[0].pageY,2);t<C?h.fov+=.75:h.fov-=.75,C=t,h.updateProjectionMatrix()}}function d(e){_=!1}function c(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),w.setSize(window.innerWidth,window.innerHeight)}function u(e){return function(t){t.preventDefault(),_=!0,b=t.clientX,y=t.clientY,x=M,F=E,R.x=t.clientX/window.innerWidth*2-1,R.y=-t.clientY/window.innerHeight*2+1,L.setFromCamera(R,h);var n=L.intersectObjects(g.children);n.length>0&&n[0].object.id>3&&(n[0].object.material.map=(new v.TextureLoader).load("http://oe9g187nt.bkt.clouddn.com/img/sprite0.png"),n[0].object.scale.set(20,20,1),D[n[0].object.id]===!1&&(D[n[0].object.id]=!0,e.foundCount+=1),k()&&(e.over=!0))}}function s(e){_===!0&&(M=.1*(b-e.clientX)+x,E=.1*(e.clientY-y)+F)}function l(e){_=!1}function m(e){h.fov+=.05*e.deltaY,h.updateProjectionMatrix()}function p(){requestAnimationFrame(p),f()}function f(){E=Math.max(-85,Math.min(85,E)),T=v.Math.degToRad(90-E),j=v.Math.degToRad(M),h.target.x=500*Math.sin(T)*Math.cos(j),h.target.y=500*Math.cos(T),h.target.z=500*Math.sin(T)*Math.sin(j),h.lookAt(h.target),w.render(g,h)}Object.defineProperty(t,"__esModule",{value:!0});var v=n(107);t.default={name:"game",data:function(){return{time:20,ready:5,foundCount:0,numberValidateForm:{phone:""}}},computed:{money:function(){switch(!0){case 0===this.foundCount:return 0;case 1===this.foundCount:return 1;case this.foundCount<=5:return 10;default:return 20}},people:function(){return Math.floor(this.foundCount/8*100)+"%"}},created:function(){this.curReady()},methods:{curTime:function(){var e=this,t=setInterval(function(){e.time-=1,0===e.time&&clearInterval(t)},1e3)},curReady:function(){var e=this,t=setInterval(function(){e.ready-=1,0===e.ready&&(clearInterval(t),e.curTime())},1e3)},init:o,animate:p,addEvent:a,submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.$http.post("/url",{phone:t.numberValidateForm.phone,money:t.money}).then(function(e){return alert("领取成功")},function(e){return alert("领取失败")})})},resetForm:function(e){this.$refs[e].resetFields()}},mounted:function(){this.init(),this.animate(),this.addEvent()}};var h=void 0,g=void 0,w=void 0,_=!1,b=0,y=0,M=0,x=0,E=0,F=0,T=0,j=0,C=0,L=new v.Raycaster,R=new v.Vector2,D=[],k=function(){return!D.includes(!1)}},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"outDate"}},99:function(e,t){}},[75]);
//# sourceMappingURL=app.0149ecdd79eb61e6a51c.js.map