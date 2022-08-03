(this["webpackJsonpfriday-project"]=this["webpackJsonpfriday-project"]||[]).push([[0],{103:function(e,t,s){},105:function(e,t,s){},106:function(e,t,s){},107:function(e,t,s){},108:function(e,t,s){},109:function(e,t,s){},110:function(e,t,s){},111:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s(37),c=s.n(n),a=(s(79),s(80),s(45)),i=s(67),o=s(10),d=s(4),l={status:"idle",error:null,isInit:!1},j=function(e){return{type:"app/SET-STATUS",status:e}},u=function(e){return{type:"app/SET-ERROR",error:e}},b=s(68),O=s.n(b).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),p=function(){return O.post("auth/me")},m=function(e,t){return O.post("/auth/register",{email:e,password:t})},h=function(e,t,s){return O.post("auth/login",{email:e,password:t,rememberMe:s})},x=function(){return O.delete("auth/me")},f=function(e){return O.post("auth/forgot",{email:e})},v=function(e,t){return O.post("auth/set-new-password",{password:e,resetPasswordToken:t})},g=function(e){return O.put("auth/me",e)},E={},R={email:"",success:!1},w={user:{},isAuth:!1},S=function(e){return{type:"login/SET_USER_DATA",payload:e}},N={newUser:{},isRedirect:!1},A=Object(a.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/SET-STATUS":return Object(d.a)(Object(d.a)({},e),{},{status:t.status});case"app/SET-ERROR":return Object(d.a)(Object(d.a)({},e),{},{error:t.error});case"app/IS_INITIALIZED":return Object(d.a)(Object(d.a)({},e),{},{isInit:t.isInit});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"registration/SET_NEW_USER":return Object(d.a)(Object(d.a)({},e),{},{newUser:t.payload});case"registration/SET_REDIRECT":return Object(d.a)(Object(d.a)({},e),{},{isRedirect:t.isRedirect});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE/SET-PROFILE-DATA":var s=t.payload,r=s.name,n=s.avatar,c=s.email,a=s.id;return Object(d.a)(Object(d.a)({},e),{},{name:r,avatar:n,email:c,_id:a});case"PROFILE/UPDATE-USER-DATA":return Object(d.a)(Object(d.a)({},e),t.payload.updatedUser);default:return e}},password:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"password/FORGOT":return Object(d.a)(Object(d.a)({},e),{},{email:t.email});case"password/SET_NEW_PASSWORD_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{success:t.success});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET_USER_DATA":return Object(d.a)(Object(d.a)({},e),t.payload);default:return e}}}),L=Object(a.c)(A,Object(a.a)(i.a)),V=o.c;window.store=L;var C=s(125),P=s(123),T=s(1),Z=function(){return Object(T.jsx)(C.a,{sx:{width:"100%",color:"grey.500"},children:Object(T.jsx)(P.a,{color:"secondary",sx:{position:"absolute",top:0,left:0,right:0}})})},F=s(9),k=s(6),y=(s(33),s(64),s(26)),I=(s(103),function(e){var t=e.errorMessage,s=Object(o.b)(),r=V((function(e){return e.app.error}));return Object(T.jsxs)("div",{className:r?"showNotification":"closeNotification",children:[Object(T.jsxs)("div",{className:"text",children:[" ",t," "]}),Object(T.jsx)("div",{className:"close",children:Object(T.jsx)("div",{className:"text cross",onClick:function(){return s(u(null))},children:"\u2716 "})})]})}),X=function(){var e=V((function(e){return e.app.error})),t=V((function(e){return e.login.isAuth})),s=V((function(e){return e.app.isInit})),n=Object(o.b)(),c=Object(y.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<8&&(t.password="Password must be at least 8 characters"):t.password="Required",t},onSubmit:function(e){var t,s,r;console.log(e),n((t=e.email,s=e.password,r=e.rememberMe,function(e){e(j("loading")),h(t,s,r).then((function(t){e(j("succeeded")),e(S({user:t.data,isAuth:!0}))})).catch((function(t){var s=t.response?t.response.data.error:t.message+", more details in the console";e(j("failed")),e(u(s))}))}))}});return Object(r.useEffect)((function(){n((function(e){e(j("loading")),e({type:"app/IS_INITIALIZED",isInit:!0}),p().then((function(t){e(j("succeeded")),e(S({user:t.data,isAuth:!0}))}))}))}),[n]),s?t?Object(T.jsx)(k.a,{to:se.PROFILE}):Object(T.jsx)("div",{children:Object(T.jsxs)("form",{className:"form",onSubmit:c.handleSubmit,children:[Object(T.jsx)("h1",{children:"Learning Cards"}),Object(T.jsx)("h2",{children:"Sign In"}),Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{htmlFor:"email",children:"Email "}),Object(T.jsx)("input",Object(d.a)({type:"text",id:"email"},c.getFieldProps("email")))]}),c.errors.email&&c.touched.email&&Object(T.jsx)("span",{className:"error",children:c.errors.email}),Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{htmlFor:"password",children:"Password "}),Object(T.jsx)("input",Object(d.a)({type:"password",id:"password"},c.getFieldProps("password")))]}),c.errors.password&&c.touched.password&&Object(T.jsx)("span",{className:"error",children:c.errors.password}),Object(T.jsxs)("div",{className:"checkboxWrapper",children:[Object(T.jsx)("input",Object(d.a)({type:"checkbox",id:"rememberMe"},c.getFieldProps("rememberMe"))),Object(T.jsx)("label",{htmlFor:"rememberMe",children:"Remember me "})]}),Object(T.jsx)(F.b,{to:se.FORGOT_PASSWORD,className:"forgot",children:"Forgot Password"}),Object(T.jsx)("div",{className:"btnLoginWrapper",children:Object(T.jsx)("button",{type:"submit",className:"login",disabled:!(!c.errors.email&&!c.errors.password),children:"Login"})}),Object(T.jsx)("p",{className:"quo",children:"Don't have an account?"}),Object(T.jsx)(F.b,{to:se.REGISTER,className:"regLink",children:"Sign Up"}),e&&Object(T.jsx)(I,{errorMessage:e})]})}):Object(T.jsx)(Z,{})},D=function(){var e=V((function(e){return e.register.isRedirect})),t=V((function(e){return e.app.error})),s=(V((function(e){return e.app.status})),V((function(e){return e.login.isAuth}))),r=Object(o.b)(),n=Object(y.a)({initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<8&&(t.password="Password must be at least 8 characters"):t.password="Required",t},onSubmit:function(e){var t,s;r((t=e.email,s=e.password,function(e){e(j("loading")),m(t,s).then((function(t){console.log(t),e(j("succeeded")),e(u(null)),e({type:"registration/SET_NEW_USER",payload:t.data}),e({type:"registration/SET_REDIRECT",isRedirect:!0})})).catch((function(t){var s=t.response?t.response.data.error:t.message+", more details in the console";e(j("failed")),e(u(s))})).finally((function(){e(j("idle"))}))}))}});return s?Object(T.jsx)(k.a,{to:se.PROFILE}):e?Object(T.jsx)(k.a,{to:se.LOGIN}):Object(T.jsx)("div",{children:Object(T.jsxs)("form",{className:"form",onSubmit:n.handleSubmit,children:[Object(T.jsx)("h1",{children:"Learning Cards"}),Object(T.jsx)("h2",{children:"Sign Up"}),Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{htmlFor:"email",children:"Email "}),Object(T.jsx)("input",Object(d.a)({type:"text",id:"email"},n.getFieldProps("email")))]}),n.errors.email&&n.touched.email&&Object(T.jsx)("span",{className:"error",children:n.errors.email}),Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{htmlFor:"password",children:"Password "}),Object(T.jsx)("input",Object(d.a)({type:"password",id:"password"},n.getFieldProps("password")))]}),n.errors.password&&n.touched.password&&Object(T.jsx)("span",{className:"error",children:n.errors.password}),Object(T.jsxs)("div",{className:"btnWrapper",children:[Object(T.jsx)("button",{className:"cancel",children:"Cancel"}),Object(T.jsx)("button",{type:"submit",className:"register",disabled:!(!n.errors.email&&!n.errors.password),children:"Register"})]}),t&&Object(T.jsx)(I,{errorMessage:t})]})})},W=(s(105),function(){var e=V((function(e){return e.login.isAuth})),t=V((function(e){return e.app.error})),s=V((function(e){return e.password.email})),r=Object(o.b)(),n=Object(y.a)({initialValues:{email:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e){var t;r((t=e.email,function(e){e(j("loading")),f(t).then((function(){e(j("succeeded")),e(function(e){return{type:"password/FORGOT",email:e}}(t))})).catch((function(t){var s=t.response?t.response.data.error:t.message+", more details in the console";e(j("failed")),e(u(s))})).finally((function(){e(j("idle"))}))}))}});return e?Object(T.jsx)(k.a,{to:se.PROFILE}):s?Object(T.jsx)(k.a,{to:se.CHECK_EMAIL}):Object(T.jsx)("div",{children:Object(T.jsxs)("form",{className:"form",onSubmit:n.handleSubmit,children:[Object(T.jsx)("h1",{children:"Learning Cards"}),Object(T.jsx)("h2",{className:"forPass",children:"Forgot your password?"}),Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{htmlFor:"email",children:"Email "}),Object(T.jsx)("input",Object(d.a)({type:"text",id:"email"},n.getFieldProps("email")))]}),n.errors.email&&n.touched.email&&Object(T.jsx)("span",{className:"error",children:n.errors.email}),Object(T.jsx)("p",{className:"instr",children:"Enter your email address and we will send you further instructions"}),Object(T.jsx)("div",{className:"btnLoginWrapper",children:Object(T.jsx)("button",{type:"submit",className:"login",disabled:!!n.errors.email,children:"Send Instructions"})}),Object(T.jsx)("p",{className:"quo",children:"Did you remember your password?"}),Object(T.jsx)(F.b,{to:se.LOGIN,className:"regLink",children:"Try logging in"}),t&&Object(T.jsx)(I,{errorMessage:t})]})})}),q=s.p+"static/media/checkEmailIcon.bc3a4042.svg",H=(s(66),function(){var e=V((function(e){return e.password.email}));return Object(T.jsx)("div",{children:Object(T.jsxs)("div",{className:"form",children:[Object(T.jsx)("h1",{children:"Learning Cards"}),Object(T.jsx)("div",{className:"checkEmail",children:Object(T.jsx)("img",{src:q,alt:"check icon"})}),Object(T.jsx)("h2",{children:"Check Email"}),Object(T.jsxs)("p",{className:"quo emailInstr",children:["We\u2019ve sent an Email with instructions to",Object(T.jsx)("span",{children:e})]})]})})}),J=function(){var e=V((function(e){return e.password.email})),t=V((function(e){return e.app.error})),s=V((function(e){return e.password.success})),r=V((function(e){return e.login.isAuth})),n=Object(k.g)().token,c=n||"",a=Object(o.b)(),i=Object(y.a)({initialValues:{password:""},validate:function(e){var t={};return e.password?e.password.length<8&&(t.password="Password must be at least 8 characters"):t.password="Required",t},onSubmit:function(e){var t,s;a((t=e.password,s=c,function(e){e(j("loading")),v(t,s).then((function(t){e(j("succeeded")),e({type:"password/SET_NEW_PASSWORD_SUCCESS",success:!0}),e(u(t.data.info+" you will be redirected to login page"))})).catch((function(t){var s=t.response?t.response.data.error:t.message+", more details in the console";e(j("failed")),e(u(s))}))}))}});return r?Object(T.jsx)(k.a,{to:se.PROFILE}):s?Object(T.jsx)(k.a,{to:se.LOGIN}):Object(T.jsx)("div",{children:Object(T.jsxs)("form",{className:"form",onSubmit:i.handleSubmit,children:[Object(T.jsx)("h1",{children:"Learning Cards"}),Object(T.jsx)("h2",{className:"forPass",children:"Create new password"}),Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{htmlFor:"password",children:"Password "}),Object(T.jsx)("input",Object(d.a)({type:"password",id:"password"},i.getFieldProps("password")))]}),i.errors.password&&i.touched.password&&Object(T.jsx)("span",{className:"error",children:i.errors.password}),Object(T.jsxs)("p",{className:"quo emailInstr left",children:["Create new password and we will send you further instructions to",Object(T.jsx)("span",{children:e})]}),Object(T.jsx)("div",{className:"btnLoginWrapper",children:Object(T.jsx)("button",{type:"submit",className:"login",disabled:!!i.errors.password,children:"Create new password"})}),t&&Object(T.jsx)(I,{errorMessage:t})]})})},B=(s(106),function(){return Object(T.jsxs)("div",{className:"toggleCardsWrapper",children:[Object(T.jsx)("span",{children:"Number of cards"}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{children:"toggler of cards"})]})}),U=(s(107),function(){return Object(T.jsxs)("div",{className:"packsListWrapper",children:[Object(T.jsx)("h2",{children:"My packs list"}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{children:"search bar"}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{children:"table"}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{children:"pagination"}),Object(T.jsx)("br",{})]})}),z=s(27),G=(s(108),s.p+"static/media/logout.f0f14280.svg"),Q=s.p+"static/media/changePhoto.c128641c.svg",Y=function(){var e=V((function(e){return e.login.user})),t=e.avatar,s=e.name,n=Object(r.useState)(!1),c=Object(z.a)(n,2),a=c[0],i=c[1],d=Object(r.useState)(s),l=Object(z.a)(d,2),b=l[0],O=l[1],p=Object(o.b)();return Object(T.jsxs)("div",{className:"profileDataWrapper",children:[Object(T.jsxs)("div",{className:"userWrapper",children:[Object(T.jsx)("img",{src:t||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nO3dZ2Bc1Znw8f+5M6MZ9V4sWaNiGdkqLriBjbABY2oMDiUFAoQUNiyQ7EtI3kCSDQlLSDYk+7K72ewmSwIpBAKEJNi0YIxNccEIF1myLKtbvcyoj2bmnveDChp12ZJG0j2/T5ozd+Y+mtGje+855z4HFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRlIkJfwdgJBkZGVav17pSFyIHqS9HinQE8UAiEAFoQDjQC3QADqANQSs6RQgK0Cj0uviourqgxX+/iXGoBJlhKSlZq6VguybEZRLWAbZpeFtdwgea4FV0/ZXy8sIDgJyG91WGUQkyA5IyViw2ebx3CsEdQNpAu0lAfKiVxZE2EsKsRAZZiAg0E2ozE2jR0BAEBpjQdYnLo9Pt1ulxe+lwealtd1HndFHb7qK6tQeP7pMPJ0H+0m3xPFVTXNw067/wAqYSZBotWZKT7NXltyV8HrAARAdbyEkMZXlcMBmxwVhM5/6Ruzw6pxq7KKzr4FhtB85u9+BTAvnfSPHD8vKCunPekaISZDpkZKyOdXvd3wF5FxBg1gRr7eFsSA0nLTpoRj9kr4QTte28W+agqL4TKSVAl5Q84eo2PVJff7RzBne/4KkEOUfJadnbNfgVEGvWNC7OiOCSpdGE2cyzHkuN08WuE40cr2kfuCCplHBPZVnB32Y9mAVCJchZSkxcE2Sx9vw/4IsAuYtC2bEynuhgi58jg8qWbp7Lr6PK0dPfIn9nC/DeffLkyXa/BjYPqQQ5C3Z7bqTQ9JcRbLSYhLx5VYJYnxrh77B86BL2nm5h1/FGXF4doEQXfLaqtOCQv2ObT0z+DmC+SUlZvkiYxG4Ea8JsZr6SlyKyF4X4O6wRhIDUqEBWLQ6lrKWbth5PlIDbIyLjXU5Hw/v+jm++UEeQKeg/rdoLrIkPs/KVTclEBvn/lGoiHl3y1+MN7D3VggQkvGbRTLedPn20wd+xzXXqCDIFUbFRTwPbwgMt3LfZPi+SA0ATguXxIdijAimq78TtlRm6lLdGhMd96HQ2lvs7vrlMJcgkpaZmXQfiEYtJcE+enbhQq79DmrLYkADW2sOodPTQ2uUORXBrRGRceHCQ/Z329lr3xO9gPCpBJqalpGd9FsS/AyHXrYhnRWKov2M6azaLiXX2CASCsuYuTcKFJrPnM5ERsRUOR+Mp1JQVH+oaZBxpaTnbdOSPgFUAKVGBfHVLKtMwGD4nVLX28IfDNdQ4XQBIOKVJfq7rvO7x2Mprag53+TlEv1sgX/X0ysjIsLq91p8CdwNEBlm4cnks61LCF0xyDNCl5P0yB28WN9PcOeIs652KsoI8f8Q1Vyywr/vcpaYuS0WYnpOwzqQJrsmOZXNGFGZtYX9UXglHq9s4WttORUv3QLJ0VJQVzN/zyWmwsL/1KVqcvnypSWpvA4uiggO4fX0iqVGB/g5r1tW1ufjhG6UAxRVlBZn+jsefZn/C0By1eEl2hklnD7BoWVwwn78wCZvZmH0Yla39U1Qkx/0bif+pBKFvdBydN4HEzLhgvrgxeVqmpc9Xh6ucfT8IXvFvJP6n+TuAOUBDMz0N2JfEBPElgydHtaOHkw1dIOm0mAL+4u94/M3wCWJPzX4A5NZQq4k7NiQZOjk8uuT3H9T03VMi+GlJSX6jv2PyN0OfYiUvWZ4jdH4ghODW9Ul+uYdjruhx6/xqf9XAmEiZxeT6ib9jmguM+xcBmHTtUQmWvPRIlsUFT+m1/7WvErcuueuiZKym+X8g/p/3qjjd1AXQ5BXadRUlJW3+jmkumP/f7Fmyp2dfJOETVrMmr1weM6XXdvV6KWro5HRTF898ULsg5mb0evT+n8RT1aXHjvk1mDnEsAki4PsAl2VGi2Dr1Lpz69p7B3/Or27jlYL5f6p+4+oE+sZC5X0pKVmr/R3PXGHIBLHbc9ORbLGaNLYsjZry6wtq++5czVqaislk4rWiJp45XIMu5++xJDUqkM0Z0QAWNPGb7OzsAH/HNBcYMkHQ9FsBsXJx6JSvH3QJh6v6Ts+/cfct/PihuwkIsLC/3Ml/7K2ksbN3gneYu67JjiU2xAqwoqOL7/g7nrnAkEPFEZFxvwKirl8ZT3Tw1P5RfnSmjf3lDtLtSdx9+w5SFidwfu55HMgvpLqpjffLHGhCkBodiBDzq8vYpAkWR9o4WOEE2BgenbDL2dpQ6++4/MlwCdI3GVH7frDVxE2rEqb8R/z7QzW09Xj4/KeuIXdZOgCL4qK5dutGqmsbOV1RQ3FDJwcrnJg0QWK4FZMfJzp6JXxQ4eC3h2r4sLqNtfZwtHF+58ggCz1unfKWbg0pVzkdjf87i+HOOYZLkIiIhCsQ3JgZF8wae/iUXnuyoZM3i5sJDwvh+/d/AYv5415ymzWAy/PWkZOZxqmyamqaHJyo62B/uZOuXi+hNjOh1tnrVXd5dA5WOHnqQDUHKpx0uLy0drkxmQQZMUHjvjYtJpD3yhy4vTIpMiI23+FoPDlLYc85hkuQsKjYLwq4YF1KOEsm+EMZ7k8f1tHU6eb2G69iw+qsUbdJToxnx5VbSIqPoaa+mdomB6XN3bxT2srRmnY6XF4AQm3maT+yOLvdHK3p4O8nm3k2v44jZ9rpduskxEXz6e1bOXLiFGXNXaxODiM4YOyv3qwJPF7JqcYuECLW6Wh8eloDnUcMN1AoYCVASuTUprFXOXooaugkKNDGp7ZfNu62JpPg2ss3ce3lm8g/XsyLr7zN3gNHqHH2UOPs6xI2awJ7pI2EMBtxoRZiQgKIDgrAatYItGhYzRomTeCV4HL3JZXLo9Pt6Sto3d5/RGjpclPf5qK2rXdojV4AVmefx46rLubyi9dhNplocbbx4q632Xm8kTs2JI37O+QtieT1oiY8utySkbE61qjTToyXIJIYCYQGTu1Xf6Oor2j6DVdvJixk8kee1TnnsTrnPNxuDwePnGDv/iPkHy+mvLqO0uZuSpu7pxTHeEKDA1mxfCkXrs0mb91KEhN8B0C//NntvPz39zhypo3mzrhxq0AGBZjIiA2iqL7T5NF7twLPTFug84jhEkQKopAQZJn82WV9m4ujNR0EBFj47PWXn9V+LRYzm9auYNPaFQC0d3ZzrLCE0soaqmsbqalvorahiZ6eXrq6e+jq6sGj64QG9/WGBQUFYjJpBNqsBNmsJMRFsygumoTYKBLiokleFE9yYiyaNna3dXRkONsvv4jnd77FnpIWblgZP27M6TFB/QWxxRpUghiEJAoY9xx8uL8XNyOl5NqtG4mJmp4So6HBgWxcm8vGtbnT8n6TdeM1W3h+51scKHdwTXbMuDeFJYX3r/Uj5OgXXAZgxIFCC8Bkxwdbu9wcrmzDrGnc9skrZzKuWbEkJYmspam4PDpHz3SMu21Uf2E8IVk8G7HNRUZMkB4Al2dy00L2lzvxSsnlF68naVHsjAY2W67duhGAD6vHn7Abaus7ukgY/1xsATNwgugTbYcuYX95KwCf2n7pzEY1i7Zt3oDFYqa4voPO/m7n0QSYB/88ptYfvoAYMUEcAG7v2H8YA07UdeDo9pC1NJXszPQZD2y2hIcGs2ZFJl4Jx2rHPs0yf3zBPx0Lj85LRkyQOgBn98QJ8n5Z39Hjk1dvmdmI/GDjmr7OgaL6sRNEfHyni2fmI5qbDJcgAlEL0DTBrFtHt4cTdX1du5dtWjMrsc2mTWtzgL7pM94xLseGXKc5ZiWoOchwCSLRTwE0dYyfIPnVTnQJeetWEhK88IrH2ZMSWJwQS1evl4qW0Qcrh1ynOWctsDnGcOMgEq1QIKmfIEEGukC3bV436vOFJRWUlp/hdOUZSsrP0NTipKunh46OLrq6XXi8XkKDAzGZTMRGRxAfE0lSQiwZaclkpiezNM2OaZIVVLxeSXFZJcWlVZSUVXGmrpG6xlaaWhx4vV7aO7sxm0wEBVoJCQkiyGYjJiqcjNQkltiTSE9NYnlGyoj3XX9+FtW73qa0qYv06JH/BJw9g2dWhj2CGC5BdCGOmKSkrGnsKR4dLi/lLV2YzWYuOD971G1+/exO3nrvw3H31dbRVxy91dlOcWmVz3OhwYFcseUCvnn3LeO+x49+/nte3bOfjs7xp6S4PR6c7R6c7X2rPp8qq+L9w32FES/ZeD4/fujuEa9ZlbWUF3e9TeUYR5CW/tNQAfXj7nwBM1yCVJceK0hJy3a2uzzhjZ29xI5yw1RRQwe6hDXZSwkKHL0D5x8+dz17D+Tj7T+Bt1kDiIwII8hmJTDQhkkT9Pa6aevsoqGpFbfb9zq3o6uHvPUrJow3b/0KXti1Z0S7xWImLiaSsOAgAgIseHVJd3cPXT0uWh1t9Lj6/rhNJsE/fO76Ud97xbIlAFS0jp4gjf1HWQmGLeJguAQBdGAfcO2phk5i00YmyOn+o8vG/gvZ0aTbE/n+/V/CZrOSkZI0YmLgcPVNLRSXVlN4qoz3DheQmZ48qWkmG9fmsuPKizlZWsXGNdlknZfG0rTFxMeMfy99TV0TpyqqcfX0km5PHHWbpEWxREeG09zqxNHtIWLYBM6BGr0SeWTCQBcoIyYIQvKCFFz70Zl2NqZFjni+tK8+FCuXLx33fbZtXj/pfcbHRBEfE0Xe+hV8+ZbrphTvt+753JS2B0hMiJkwaQFyl6ez5718Klq7iQj0Xelg4OLdLHTDJojherEAdF37C9Bb0tA5YiS5261T3+bCbDJxXnqyfwKcRUtT+37H4T1ZNW0u2vou0utKS4tKZj+yucGQCVJZeawVKf7ulXCw0reDprbNhQQy0hZjtc6PVWzPxZLUvtOv4QkyUNoI+Bt9p6WGZMgEAdCEfBbg7RIH+pCBsrq2vvX6Bv6zLnRL7H0TdQfWKYS+VTwPlA8MfYjA+PgVU6vLuoAY8hokLS17pRceEUBrVy+Hq5ys6y/gUNfe94eSmBA95fft6OzmP596kd3vHsbtdrM1bx333nkToTM00Dgd+1ucFIfFYqar10OHy0uI1URxfSeNHb1oQui6lLfagrx5yUuWX1t1utBwC+oY7giSnJGzRIc9AgYPEX873oC7v7vW0b+Q5VSntrs9Hr76z//G8zvfosXRRntnN39+dS/3PPQ4bs/0T2Warv2ZNY3UxYsAqO//57CvtG8Omi7lwN9HiqZr+9LSlo8cbVzgDFfVJCo85hcgfCZXuTw6Xl2SGR/MvtJWWrvc3LJjGwmxky9LWnmmnsvz1nHrDVdQXl1HVU0DAI0tDsJDQwZraE2X6dzfkYISSsqrSY0OxKRpvHS0HiHE8KLcNilFvNPR+MJ0/h5zneGOIBLhMzX3sk1r0TTB7lMtFDd20tbT16sVGTG1xV3TkheRmBBDfEwkD97r2y376p795xj1zO4vPaXvQr2h3c1LR+vRJWy/Io+bPzHsHhjBJecU9DxkuAQBQoY++N79d/LJq7Ygpeyvmth3imULsE7pTRuaxp6uVFY1/dU7p3N/9qS+GwYPVjo42dBJcFAgd9+2g3+844bhmxpuSWgjJohPfadWRxv/9MWbyVm2BEe3Z3AGa1Dg1BLkx7/4PfVNLdQ3tfAvT8x8nbXp3F9ifN+A4sCY0H133khkeCgtjhG35BquNpbxerEkZxAMXmyWVdWyKD6GHz/4Fe76v/9KVU3fvDybbWpFrRsaW7j29m+M+lx68qJzCHjm97co/uMR94s3rGTHlRcDUFE94khUPaU3XgAMdwQRwnft75LyMwDERkfwyx9/g+zMdNasyMRsmlr/xZWXXDDmc1eM89zZms79hYcGs27FcnKXp/ODB740WNC7pOyMz3ZSSMN18xruCCLh6NDHBcVlgz9HR4bzm58+eFbve9M1l/D6ngMUnCr3ac8+L40br5n+W3ane38//+H9I9qOF5f6PNZ0zXBzsgzXzRsWFS8FfHngcYuznVs/ue2c1/IwmTQuy1tHe0cXZ+oasQZYuOayjTx8/xcItE3temYu7E/Xdf71F8/gcn18Y5k0ad8z2noh82uFl2lxkykl7UQTMFgi8Zn/+B4ZaYatjTaqU2VVfPaeh4c2OSrKsmLgTxNXu1hADHcN0v8FvzO05YNjhl3+YkwfHPH9TCS8bbTkAEMmCCB4a+jDw8eK/BXJnHX4uG+CaJKRtzUagCETROjsHvo4/1jx4K2zSl+RiI+OFw9vVgliFOXlBUeB5oHHzvZOjp887ceI5pbjJ08PFn/o19z/mRmOIRME0JG8NrRhz/v5/oplzhnxWfR9Voa8acqoCYJA/HXo493vHfZXKHPOW+/7ljOSQr7kp1D8zrAJYjb3vAIMdvLX1DWRXzDivNtw8o8Xc6bWZ8qVK8DU+9pY2y90hk2QkpKSNsDnKPL0n171UzRzx1PDPgOB+Gv/Z2VIhhtJHyo8Kq5WwJ0Djytr6gHJ0nQ71oCFX7BhqLaOLn797E7+8vo+n3apcZeztbFqjJcteAYcSfeVkpr9LoKNw9vjoyN58L7bZn0Nwdn2zqGj/PA/nh7r/pJ3K8oKLprtmOYSw55iDZBm+WVgxCIZ9c2tPPrvv/VDRLPrsX//7VjJ0SG9H89ZMyrDJ0hlyYkCKeT1QMvw5+qbRjQtOPXNraM1N6NxXWVlwYnZjmeuMXyCAFSWnnhT93hyheBH/o7F36QUP0TXcytOF+yeeOuFz/DXIMOlpGX7zDk5tPNX/gplVqy75os+jyvKCtTfxBDqCKIo41AJ4id3fv1R7vjaIzS1jF2dpLHZwe1fe4Qvf+PHsxiZMpThbrmdK9xuL0UlFXz6H7/Hpz5xKRdvWEViQixSSmrqGtl74COee/ktnG0dZC1N9Xe4hqXON4eZrWsQZ1sHD//sSfYdHH+S7MUbVvLdf7qT8NCZqR+trkHGp44gfhIeFsJP//k+jhed5vlde8gvOEVza19F9ZioCFZlL+Wmq7eQnTm9JUuVqVEJMlIjMFi5uqHJQVxMxDibn5ucZUvI6V8rcLaNMs7TPtp2RqYu0kfyGRw7dKTQX3HMuEP5I343ww8MDqcSZBghpM/U7t/9+TWkXHi340op+d2fXx/Wxp/9FM6cpRJkGCG1Jxlyn0hJWTVv7D3kx4hmxqtvH+B0hU/lRJfFZPq1v+KZq1SCDFNWdrxewjND2x7/nz/S1tE1qdd/9p6H+eaj/0VFdf2MxDea8qo6vvnof3HLvQ9PvDF99+D/7H+e9W2U4g+nTx9tmIHw5jVD3w8ylrDQqINC0+4CAgC6e1w0tTi4ZOP5E77W1evm+Z1v8dzfdlN4qoyoyDCSEqa2WtVkHTpSyOP//Qw//eWzVNc1cuuOKya1cM6/PPEUx0/6lBVtR+o7nM6mEbOajU4lyCja2prbI6PiJLB1oO1UWTXxsVEsW2If97W5y5awbfN62to72fP+h7z89/d4fe8BmlvbCA4KJCoiHE07u6EGr1dSdLqC53e+xY9+/jv+8Oc3qKlt5MpLNvDo/72LTesmvnflxVfe5jfP7RrWKr5TUX7CsLfVjkcNCo1hzZo1luaWnnclrBtos1otPPmTBye9fnplTT1PPruTN/Yeore3b2GekOBAVmUt5bz0ZFIWJ5CSFE9EWCghwYEEBdkA6OrqoaOzG0dbO+XV9VSeqePk6So+OnGKzq6+5ZoDAixs27yez998NfbE+EnFU1RSwRceeGwwln4HYqJseYcPH3aP9TojUwkyDrs9N12Y9HwgbKAtNjqCJ3/yLRLiJr8KbntnN2/sPchb73/IR8dP0TOkIPRU2KwBrM45j0s2ns/WvHVTWs22vqmVL9z/w+FjHx1eoZ9fXVp46qwCMgCVIBNITc/+jJT8YWhbuj2JX/7rNwkLCZry+/X2ujlaeJqTpZWUVdZQVlVLq6Odjq5uOvqPDiFBgYQEBRIVGUZa8iJSkxeRmW5nZVYGFsvUx3ad7Z186YHHRizNJiSfKS8v+OOU39BAVIJMgj0151Eh5LeGtq1YvoQnvv81goNmZg306dLR2c293/03jheNqBz5LxVlBd/2R0zzibpInwSno2F3RGR8BrBioK2+qZUD+Se49KK12KxTW65ttrR3dnPvd35GgW+PFQL5XEXZiX/0U1jzikqQSYqMCNqFCMgDBueeN7U4+eBIEZduPH/OJYmzrYN7vv1TTgxbgQrYYzH13tDS0uLxR1zzjUqQSXI4HJ7gIPtzJotnI5A20N7Y4mD3u4e54PwcIsJDxnmH2VNV28DdD/1kcP3FId7tCuKa6pMnu/0R13ykEmQK2ttr3cGB9j+ZzJ5NDDmStHV08dqe/WRlppIUPzODgpP10YlT3PPQz6hvHDFT911bgOeqysJCNRg4BSpBpqi9vdYdkBT3gtnNGgEZA+2uXjev7TmIzRpATmb6Oa95OFW6rvPbF17je48/SVdPz/CnX+0K4jqVHFOnEuQsdDU29jodW56JiGiMRXw8kKhLyYH8ExwpKGHdqiyC+wf+ZlqLo41vPfbfvLBrD/rwmcdSPhkTHXhLyZEjI7JGmZjq5j1HKWk5D4J8hGGfpclk4tqtG3no3ttm7GgipeSRJ55m55vv4fWOWD5QF4KHyksLHpuRnRuEOoKcI6ejYV9kRNwBBFcAgzeOSyk5ebqS9w4dY0nKYuJjI6d1v4UlFXzrsV+wd/9Ho92v0qAhbigvK3hqWndqQOoIMk0WL16ZpFm8fxDIi4c/p2kaV27ZwC07tk16HtdYTp6u5Pcvvs5rew+i6yMXfZKIvdLj/kxV1cmac9qRAqgEmV5btphTKhp9Jv3dcfPV/OGlNwYnCJ6fex6f3r6VTWtzCZjkEgu9vW7eOXSUP/71TfL7F9cMCLBwy/WX8+thM3MrUmIt7NmjxjimiUqQaTZa2aC6hmb++Nc3+cvr++jo7BuCsFkDOD83kwtWZ7Msw05URPhgcYj6xlZanW0UllSw/8MC8o8XD05wDA0OZPu2PD69/TIS4qJV2Z4Zpj7MaTZeXa2uHhev7H6fl17bR3Fp1ainSKPRNI3M9GSuuyKPqy69kCCbdfA5lSAzS5X9mUVBNis3XL2FG67egsPZwYGPTnAwv4DT5Wc409BEZ2dfT2xIcCCJ8TFkpCaxflUW61dlzZlReqNRCeInEeEhXLF5PVdsXu/vUJRxqKIN0yg5OccPFeB8z6js9lxVinEaqQSZJtnZ2SGaWb48tM1mtY61+bSxWX17woSmv7xixYqZKeRrQCpBzlFaWtbNKWk5H3R04QCWDX1uTe55M77/1TnD9iFY7mzXnSlpOR+kpi7/9IwHsMCpHo+zkJqavUoXPCzgcqD/lkLJ0I/TZDKx6+mfEBUROqOxNDvauea2r4821QQAgXSBthfp+k55+akDMxrMAqQSZJKSktZHm62d35dws5AyZryPzqTB4//8VTbN0hLS+w4e4es/+M8Juo0lUogmAX9y99i+W1NzuGlWgpvn1Fys8ZlTU7PvC4uMe1ozuR8TsF5A0ET/VySCDyvqOVLbSo/QiA8PxnYWxRbG0+FyU+XVOI6N8rgU4jbm0VRcTHfrWCtWCfpiZ51m9jwQHhV3a2R4nNnhaPwAmNyAjAGpI8goUlNXXCmF99sSNogJusIFYA0Lw75pEzGZmVQfOsCZQx/gHVp7SgjC4+NJTE8hMTGexNhIkmIiSY6LJiLQQogtAKvZQmSwFU3TcHS5cOs6ZmsAHnMAnbrgcEExBw4do7rqDHWVVbQ3NBG6KIFrn/g3n3h6O7o49uyzVL77Pq42JxOV3ZbgEXBASNMj5eVHXz3Lj2zBUgnSLy1tdYoX1yMaYrscUgdrLCaLhbjsbFZ97hYiUnyrLXpcvTSeOEHtkaM0FhbiqKhE90x9elR48mKu/tnjALxwx530dnQOPqdZLCRvWM/Gr9035us76uo5+txz1Bw6jLt7EnfZCly6zm6rOeDrJSX5aikEDJ8gNwXYlxz/mtBN94JcPNHWQtOIsCezbPsnSL04b9J7kV4vjsoqHBUVdDQ00N3cQmdzMz0tLXhcLjw9LnSvB3dXN1LXsQQGIUyCuOws8h74OgBVBw7irKgkLHkxEXY7IYsS0LTJd0KeOXSYky/vpKGoCDnGBf2QiEFqLeB9KiRY+25BQYFh70Q0ZIIkn5e9TusVT4Bcj5igq1tAcEwcGVsvYdl116OZ53fPuO7RKXzpJU6/uZvOpkYmcQ6mgzggdXFvZeWxw7MS5BxiqARZvDh3s8msP4UgZaJtA4KDSd6wntzP3ExgZNRshDfruluaOfrsc1TtP4i7cxLLO0jKda92e1XVsb0zH93cYIgESUxcExNgdT0vkZvH204zm4jNXEbOzTcSl501W+HNCc2nSznxwp+p+SgfvXf8OtYCeSTQJq8qLCysHXfDBWDBJ4g9I+dWzSuflDDq3UlCCMKTk8m89irSL710tsObk0rf3E3Rzl20VVWPt/ycW0jv7eXlRc+MtcFCsKATJDUt61mJuHm057QAC6l5m1h92+0EBE+9CLUR9HZ0kf/001Tseweve/Sjiob8fVnZiVtnObRZs2ATJCU15z2EvHB4uzCZWLptK6tvvw3NrGb7T4bu8fDhb56i5I03R+0BE7CvvKxgxL34C8GCTJDUtKyPJGLl8PaIlBS2fPdBAsNnbt3zhazb6eDtHzxKa3nFyCel+LCi/Pia2Y9qZi24qSbJqdm7hBAX+bYKsq6/jose+D9YbLNTzG0hsthsZGy7HN3jobGoyPdJwaLIyNg1DkfjgromWVAJkpqa+5gQ8g6fRgEX3P0PLLtuu5+iWngScnOJsNup2n8AfC7iRWZ4VJzmbG3c47fgptmCSRC7PXcNmv4UQ08bBWz4yl2qd2oGhC9eTMzSpZTve8enXUjyoiLjX3I4GmZvHewZNL+HhYcQZvkKw66p1nzhTpUcMyhh1UxCFMcAAAIiSURBVEouuPsrvo0CTSJf909E029BHEFSU7MeBa4Y2pawcgVrv/B5P0VkHJFpqbSWltFe4zNmGBIeFS+crQ3z/lRrAfRi3RSQklbYDnJwiSdLcBCf/N9foZkXRP7PfbrOi1+8C1db29DW3oqyrFD409kt6TtHzPtTrJQlJx4fmhwAF957j0qO2aRp5H3j/uGtASmpx+d9Zfl5nyB48TmPCktcRNLaBdcdP+fFLltGRIrvHFAptC/7KZxpM68TJC1t2TbEx0sOCOCC++7xY0TGduFXfT97AcGJacsv91M402JeJ4jE/ODQx9bISKIzMsbaXJlhEXY7QdHRPm0WqX1rjM3nhXmeIL5zrdIv3eKvUJR+GVsv820QbPJPJNNj3iZI0pLsS4DBi3MhIHvH9X6MSAHI3HHd8L7RgOTk3Hk7kXHeJohJ+k5jt4aFY1bzrPzObDZji/Bdbk4L0G/yUzjnbN4miCbxOb2KWuKHutHKqGIyfL8LocvJV7iYY+ZtgkikT59i3PJMf4WiDBMz7LuQiAlrAMxV83Yk3Z6e4xZSqjue5gEp8FSWFkxuQcY5Zt4eQVRyzB9Czt+FmuZtgiCZqPqZMkfIefxdzecEeVglydwnJV4h+Z6/41AURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVEURVFm0v8Hw3klExnCcGAAAAAASUVORK5CYII=",alt:"user avatar",className:"ava"}),Object(T.jsx)("a",{children:Object(T.jsx)("img",{src:Q,alt:"change icon",className:"change"})}),Object(T.jsx)("a",{className:"logout",onClick:function(){p((function(e){e(j("loading")),x().then((function(t){e(j("succeeded")),e(S({user:{},isAuth:!1})),e(u(t.data.info))})).catch((function(t){var s=t.response?t.response.data.error:t.message+", more details in the console";e(j("failed")),e(u(s))}))}))},children:Object(T.jsx)("img",{src:G,alt:"logout",title:"Logout"})})]}),!a&&Object(T.jsx)("div",{className:"userName",children:Object(T.jsx)("span",{children:b})}),a&&Object(T.jsx)("div",{className:"userName",children:Object(T.jsx)("input",{autoFocus:!0,onBlur:function(){i(!1),p(function(e,t){return function(s){s(j("loading")),g({name:e,avatar:t}).then((function(e){s(j("succeeded")),s({type:"PROFILE/UPDATE-USER-DATA",payload:e.data})})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";s(j("failed")),s(u(t))}))}}(b,""))},value:b,onChange:function(e){O(e.currentTarget.value)},className:"inputName"})}),Object(T.jsx)("div",{className:"editWrapper",children:Object(T.jsx)("button",{onClick:function(){i(!0)},title:"Edit your name",children:"Edit Profile"})})]})},M=(s(109),function(){return Object(T.jsxs)("div",{className:"profileWrapper",children:[Object(T.jsxs)("div",{className:"left",children:[Object(T.jsx)(Y,{}),Object(T.jsx)(B,{})]}),Object(T.jsx)("div",{className:"right",children:Object(T.jsx)(U,{})})]})}),K=function(){var e=V((function(e){return e.login.isAuth})),t=Object(o.b)();return Object(r.useEffect)((function(){}),[t]),e?Object(T.jsx)("div",{children:Object(T.jsx)(M,{})}):Object(T.jsx)(k.a,{to:se.LOGIN})},_=function(){return Object(T.jsx)("div",{children:"Card Packs"})},$=function(){return Object(T.jsx)("div",{children:"Cards"})},ee=function(){return Object(T.jsx)("div",{children:"Not found"})},te=function(){return Object(T.jsxs)(k.d,{children:[Object(T.jsx)(k.b,{exact:!0,path:"/",render:function(){return Object(T.jsx)(K,{})}}),Object(T.jsx)(k.b,{exact:!0,path:se.LOGIN,render:function(){return Object(T.jsx)(X,{})}}),Object(T.jsx)(k.b,{exact:!0,path:se.REGISTER,render:function(){return Object(T.jsx)(D,{})}}),Object(T.jsx)(k.b,{exact:!0,path:se.FORGOT_PASSWORD,render:function(){return Object(T.jsx)(W,{})}}),Object(T.jsx)(k.b,{exact:!0,path:se.CHECK_EMAIL,render:function(){return Object(T.jsx)(H,{})}}),Object(T.jsx)(k.b,{exact:!0,path:se.NEW_PASSWORD,render:function(){return Object(T.jsx)(J,{})}}),Object(T.jsx)(k.b,{exact:!0,path:se.PROFILE,render:function(){return Object(T.jsx)(K,{})}}),Object(T.jsx)(k.b,{exact:!0,path:se.CARD_PACKS,render:function(){return Object(T.jsx)(_,{})}}),Object(T.jsx)(k.b,{exact:!0,path:se.CARDS,render:function(){return Object(T.jsx)($,{})}}),Object(T.jsx)(k.b,{exact:!0,path:"/*",render:function(){return Object(T.jsx)(ee,{})}})]})},se={LOGIN:"/login",REGISTER:"/registration",FORGOT_PASSWORD:"/forgot-password",CHECK_EMAIL:"/check-email",NEW_PASSWORD:"/set-new-password/:token",PROFILE:"/profile",CARD_PACKS:"/card_packs",CARDS:"/cards"},re=(s(110),function(){return Object(T.jsxs)("div",{className:"links",children:[Object(T.jsx)(F.b,{to:se.LOGIN,activeClassName:"activeLink",children:"Sign in "}),Object(T.jsx)(F.b,{to:se.REGISTER,activeClassName:"activeLink",children:"Sign up "}),Object(T.jsx)(F.b,{to:se.FORGOT_PASSWORD,activeClassName:"activeLink",children:"Forgot Password "}),Object(T.jsx)(F.b,{to:se.NEW_PASSWORD,activeClassName:"activeLink",children:"New Password "}),Object(T.jsx)(F.b,{to:se.PROFILE,activeClassName:"activeLink",children:"Profile "}),Object(T.jsx)(F.b,{to:se.CARD_PACKS,activeClassName:"activeLink",children:"Packs "}),Object(T.jsx)(F.b,{to:se.CARDS,activeClassName:"activeLink",children:"Cards "})]})}),ne=function(){var e=V((function(e){return e.app.status}));return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)(re,{}),Object(T.jsx)(te,{}),"loading"===e&&Object(T.jsx)(Z,{})]})},ce=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,126)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),r(e),n(e),c(e),a(e)}))};c.a.render(Object(T.jsx)(F.a,{children:Object(T.jsx)(o.a,{store:L,children:Object(T.jsx)(ne,{})})}),document.getElementById("root")),ce()},33:function(e,t,s){},64:function(e,t,s){},66:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){}},[[111,1,2]]]);
//# sourceMappingURL=main.81e1afec.chunk.js.map