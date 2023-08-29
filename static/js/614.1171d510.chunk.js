"use strict";(self.webpackChunkshmooz_admin=self.webpackChunkshmooz_admin||[]).push([[614],{22889:function(e,n,t){var r=t(47313);n.Z=function(){var e=(0,r.useRef)(!0);return(0,r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},35184:function(e,n,t){var r=t(35898),i=t(61113),s=t(90891),a=t(46417);n.Z=function(){return(0,a.jsxs)(r.Z,{direction:"row",justifyContent:"space-between",children:[(0,a.jsx)(i.Z,{variant:"subtitle2",component:s.Z,href:"https://shmooz.in",target:"_blank",underline:"hover",children:"shmooz.in"}),(0,a.jsx)(i.Z,{variant:"subtitle2",component:s.Z,href:"https://www.protofact.in/",target:"_blank",underline:"hover",children:"\xa9 Protofact LLC"})]})}},85436:function(e,n,t){var r=t(1413),i=t(45987),s=t(57829),a=t(33497),l=t(46417),o=["children"];n.Z=function(e){var n=e.children,t=(0,i.Z)(e,o);return(0,l.jsx)(a.Z,(0,r.Z)((0,r.Z)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},t),{},{children:(0,l.jsx)(s.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:n})}))}},58124:function(e,n,t){var r=(0,t(17592).ZP)("div")((function(e){var n=e.theme;return{backgroundColor:"dark"===n.palette.mode?n.palette.background.default:n.palette.grey[100],minHeight:"100vh"}}));n.Z=r},50614:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(2135),i=t(19860),s=t(24813),a=t(9019),l=t(61113),o=t(19536),c=t(58124),d=t(85436),u=t(48080),m=t(1413),h=t(15861),x=t(64687),Z=t.n(x),f=t(1550),j=t(23306),p=t(49914),g=t(15480),v=t(57829),b=t(69099),P=t(25823),w=t(58467),y=t(3463),k=t(79429),C=t(66182),S=t(54285),E=t(22889),I=t(5866),z=t(46417),A=function(e){var n=Object.assign({},e),t=(0,i.Z)(),r=(0,E.Z)(),s=(0,P.I0)(),a=(0,w.s0)(),l=(0,S.Z)().resetPassword;return(0,z.jsx)(k.J9,{initialValues:{email:"",password:"",submit:null},validationSchema:y.Ry().shape({email:y.Z_().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=(0,h.Z)(Z().mark((function e(n,t){var i,o,c;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.setErrors,o=t.setStatus,c=t.setSubmitting,e.prev=1,e.next=4,l(n.email);case 4:r.current&&(o({success:!0}),c(!1),s((0,I.ss)({open:!0,message:"Check mail for reset password link",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){a("/login",{replace:!0})}),1500)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),r.current&&(o({success:!1}),i({submit:e.t0.message}),c(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n,t){return e.apply(this,arguments)}}(),children:function(e){var r=e.errors,i=e.handleBlur,s=e.handleChange,a=e.handleSubmit,l=e.isSubmitting,o=e.touched,c=e.values;return(0,z.jsxs)("form",(0,m.Z)((0,m.Z)({noValidate:!0,onSubmit:a},n),{},{children:[(0,z.jsxs)(f.Z,{fullWidth:!0,error:Boolean(o.email&&r.email),sx:(0,m.Z)({},t.typography.customInput),children:[(0,z.jsx)(j.Z,{htmlFor:"outlined-adornment-email-forgot",children:"Email Address / Username"}),(0,z.jsx)(p.Z,{id:"outlined-adornment-email-forgot",type:"email",value:c.email,name:"email",onBlur:i,onChange:s,label:"Email Address / Username",inputProps:{}}),o.email&&r.email&&(0,z.jsx)(g.Z,{error:!0,id:"standard-weight-helper-text-email-forgot",children:r.email})]}),r.submit&&(0,z.jsx)(v.Z,{sx:{mt:3},children:(0,z.jsx)(g.Z,{error:!0,children:r.submit})}),(0,z.jsx)(v.Z,{sx:{mt:2},children:(0,z.jsx)(C.Z,{children:(0,z.jsx)(b.Z,{disableElevation:!0,disabled:l,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Send Mail"})})})]}))}})},B=t(35184),_=function(){var e=(0,i.Z)(),n=(0,S.Z)().isLoggedIn,t=(0,s.Z)(e.breakpoints.down("md"));return(0,z.jsx)(c.Z,{children:(0,z.jsxs)(a.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,z.jsx)(a.ZP,{item:!0,xs:12,children:(0,z.jsx)(a.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,z.jsx)(a.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,z.jsx)(d.Z,{children:(0,z.jsxs)(a.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,z.jsx)(a.ZP,{item:!0,sx:{mb:3},children:(0,z.jsx)(r.rU,{to:"#","aria-label":"theme-logo",children:(0,z.jsx)(u.Z,{})})}),(0,z.jsx)(a.ZP,{item:!0,xs:12,children:(0,z.jsxs)(a.ZP,{container:!0,alignItems:"center",justifyContent:"center",textAlign:"center",spacing:2,children:[(0,z.jsx)(a.ZP,{item:!0,xs:12,children:(0,z.jsx)(l.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Forgot password?"})}),(0,z.jsx)(a.ZP,{item:!0,xs:12,children:(0,z.jsx)(l.Z,{variant:"caption",fontSize:"16px",textAlign:"center",children:"Enter your email address below and we'll send you password reset OTP."})})]})}),(0,z.jsx)(a.ZP,{item:!0,xs:12,children:(0,z.jsx)(A,{})}),(0,z.jsx)(a.ZP,{item:!0,xs:12,children:(0,z.jsx)(o.Z,{})}),(0,z.jsx)(a.ZP,{item:!0,xs:12,children:(0,z.jsx)(a.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,z.jsx)(l.Z,{component:r.rU,to:n?"/pages/login/login3":"/login",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),(0,z.jsx)(a.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,z.jsx)(B.Z,{})})]})})}}}]);