(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e){e.exports={typography:{useNextVariants:!0},palette:{common:{black:"rgba(0, 0, 0, 1)",white:"rgba(255, 255, 255, 1)"},background:{paper:"rgba(255, 255, 255, 1)",default:"rgba(255, 235, 205, 1)"},primary:{light:"rgba(121, 85, 72, 1)",main:"rgba(121, 85, 72, 1)",dark:"rgba(121, 85, 72, 1)",contrastText:"#fff"},secondary:{light:"#fff",main:"#fff",dark:"rgba(121, 85, 72, 1)",contrastText:"#fff"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"}}}},222:function(e,t,a){e.exports=a(396)},227:function(e,t,a){},229:function(e,t,a){},396:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),s=a.n(l),o=(a(227),a(16)),c=a(17),i=a(19),u=a(18),m=a(20),h=(a(229),a(15)),d=a(54),p=a.n(d),f=a(43),b=a.n(f),E=a(24),g=a.n(E),y={zIndex:5},C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(p.a,{style:y,position:"fixed",color:"primary"},r.a.createElement(b.a,null,r.a.createElement(g.a,{variant:"h6",color:"inherit"},"Chocobun"))),r.a.createElement(b.a,null))}}]),t}(r.a.Component),v=Object(h.withStyles)({})(C),S=a(80),O=a.n(S),j=a(67),k=a.n(j),N=a(161),x=a.n(N),w=a(162),T=a.n(w),A=a(400),F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={vaule:0},a.navToTransmute=function(){a.props.history.push("/"),a.setState({vaule:0})},a.navToCourses=function(){a.props.history.push("/courses"),a.setState({vaule:1})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(O.a,{value:this.state.vaule,showLabels:!0,className:e.root},r.a.createElement(k.a,{onClick:this.navToTransmute,label:"Transmute",icon:r.a.createElement(x.a,null)}),r.a.createElement(k.a,{onClick:this.navToCourses,label:"Courses",icon:r.a.createElement(T.a,null)})))}}]),t}(r.a.Component),M=Object(A.a)(Object(h.withStyles)({root:{}})(F)),I=a(398),G=a(399),W=a(397),D=a(29),R=a(65),z=a.n(R),B=a(41),P=a.n(B),$=a(42),Y=a.n($),L=a(27),H=a.n(L),_=a(21),J=a.n(_),Q=a(81),U=a.n(Q),V=a(82),X=a.n(V),q=a(40),K=a.n(q),Z=a(165),ee=a.n(Z),te=a(31),ae=a.n(te),ne={right:5,top:5,position:"fixed",zIndex:10},re=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={anchorEl:null},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.handleClear=function(){a.props.resetState(),Object(te.clearStorage)(""),a.handleClose()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.anchorEl;return r.a.createElement(n.Fragment,null,r.a.createElement(K.a,{"aria-owns":e?"simple-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick,style:ne,color:"secondary"},r.a.createElement(ee.a,null)),r.a.createElement(U.a,{id:"simple-menu",anchorEl:e,open:Boolean(e),onClose:this.handleClose},r.a.createElement(X.a,{onClick:this.handleClear},"Clear All Data")))}}]),t}(r.a.Component),le=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={base:"65",yourScore:"",totalItems:"",res1:"Chocobun App by Chocobun Fam",res2:"v1.0.0"},a.handleReset=function(){a.setState({base:"65",yourScore:"",totalItems:"",res1:"Chocobun App by Chocobun Fam",res2:"v1.0.0"})},a.handleChange=function(e){return function(t){a.setState(Object(D.a)({},e,t.target.value))}},a.handleTransmute=function(){var e,t,n=parseFloat(a.state.yourScore)/parseFloat(a.state.totalItems);"65"===a.state.base?(e=71.5*n+28.5,e=Math.round(e),t=.65*parseFloat(a.state.totalItems)):"60"===a.state.base?(e=62.5*n+37.5,e=Math.round(e),t=.6*parseFloat(a.state.totalItems)):"50"===a.state.base&&(e=50*n+50,e=Math.round(e),t=.5*parseFloat(a.state.totalItems));var r=(parseFloat(a.state.yourScore)>=t?"You passed! ":"You failed! ")+"The passing score is: "+t,l="Your transmuted grade is: "+e;a.setState({res1:r,res2:l})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"PositionFixed"},r.a.createElement("div",{className:"ScoreInput"},r.a.createElement(P.a,null,r.a.createElement(z.a,{htmlFor:"base-native-simple"},"Base"),r.a.createElement(Y.a,{native:!0,value:this.state.base,onChange:this.handleChange("base")},r.a.createElement("option",{value:65},"65"),r.a.createElement("option",{value:60},"60"),r.a.createElement("option",{value:50},"50"))),r.a.createElement(H.a,{id:"standard-yourScore",label:"Your Score",className:e.textField,value:this.state.yourScore,onChange:this.handleChange("yourScore"),margin:"normal",fullWidth:!0,type:"tel"}),r.a.createElement(H.a,{id:"standard-totalItems",label:"Total Items",className:e.textField,value:this.state.totalItems,onChange:this.handleChange("totalItems"),margin:"normal",fullWidth:!0,type:"tel"})),r.a.createElement("div",{className:"TransmuteButton"},r.a.createElement(J.a,{onClick:this.handleTransmute,variant:"contained",color:"primary"},"Transmute")),r.a.createElement("div",{className:"TransmuteResult"},r.a.createElement("p",null,this.state.res1),r.a.createElement("p",null,this.state.res2))),r.a.createElement(re,{resetState:this.handleReset}))}}]),t}(r.a.Component),se=Object(h.withStyles)(function(e){return{}})(le),oe=a(39),ce=a(63),ie=a.n(ce),ue=a(64),me=a.n(ue),he=a(92),de=a.n(he),pe=a(30),fe=a.n(pe),be=a(38),Ee=a.n(be),ge=a(37),ye=a.n(ge),Ce=a(55),ve=a.n(Ce),Se=a(96),Oe=a.n(Se),je=a(66),ke=a.n(je),Ne=a(87),xe=a.n(Ne),we=a(89),Te=a.n(we),Ae=a(88),Fe=a.n(Ae),Me=a(166),Ie=a.n(Me),Ge=a(36),We=a.n(Ge),De=a(84),Re=a.n(De),ze=a(86),Be=a.n(ze),Pe=a(44),$e=a.n(Pe),Ye=a(85),Le=a.n(Ye),He=a(68),_e=a.n(He),Je=a(33),Qe=a.n(Je),Ue=a(83),Ve=a.n(Ue),Xe=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ve.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.props.isOpen,onClose:this.props.isClosed,autoHideDuration:1500,message:this.props.errorMessage}))}}]),t}(r.a.Component);var qe=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={base:"65",allScores:[],yourScore:"",totalItems:"",open:!1,counter:1,transmutedGrade:"",errorOpen:!1,errorMessage:""},a.handleComputation=function(){if(a.state.allScores.length>0){var e=function(e,t){return parseFloat(e)+parseFloat(t)},t=a.state.allScores.map(function(e){return e.yscore}).reduce(e)/a.state.allScores.map(function(e){return e.titems}).reduce(e),n=a.state.base.toString();"65"===n?t=71.5*t+28.5:"60"===n?t=62.5*t+37.5:"50"===n&&(t=50*t+50),t=Math.round(100*t)/100,a.setState({transmutedGrade:t},function(){a.props.transmutedGrade(a.props.syllabusName,a.state.transmutedGrade,a.props.syllabusWeight)})}},a.handleAdd=function(){var e,t,n,r=a.state,l=r.yourScore,s=r.totalItems;/^\d+$/.test(l)&&/^\d+$/.test(s)?a.setState({counter:a.state.counter+1,allScores:Object(oe.a)(a.state.allScores).concat([(e=a.props.syllabusName+" "+a.state.counter,t=a.state.yourScore,n=a.state.totalItems,{name:e,yscore:t,titems:n})])},function(){a.handleComputation()}):/^\d+$/.test(l)?/^\d+$/.test(s)||a.setState({errorOpen:!0,errorMessage:"Total items should be a number."}):a.setState({errorOpen:!0,errorMessage:"Your score should be a number."}),a.handleClose()},a.handleErrorClosed=function(){a.setState({errorOpen:!1})},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1,yourScore:"",totalItems:""})},a.handleChangeText=function(e){return function(t){a.setState(Object(D.a)({},e,t.target.value))}},a.handleChangeBase=function(e){a.setState({base:e.target.value},function(){return a.handleComputation()})},a.clearScores=function(){a.setState({allScores:[]}),a.props.transmutedGrade(a.props.syllabusName,0,a.props.syllabusWeight)},a.handleDeleteSyllabus=function(){a.clearScores(),a.props.deleteSyllabus(a.props.syllabusName)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(ae.a,{parent:this,prefix:"is_"+this.props.courseName+"_"+this.props.syllabusName,blacklist:["open"]}),r.a.createElement(Qe.a,{className:e.root},r.a.createElement(Re.a,{className:e.table},r.a.createElement(Le.a,null,r.a.createElement(_e.a,null,r.a.createElement($e.a,{align:"right"},r.a.createElement(g.a,null,"Base")),r.a.createElement($e.a,{align:"left"},r.a.createElement(P.a,null,r.a.createElement(Y.a,{native:!0,value:this.state.base,onChange:this.handleChangeBase},r.a.createElement("option",{value:65},"65"),r.a.createElement("option",{value:60},"60"),r.a.createElement("option",{value:50},"50")))))),r.a.createElement(Be.a,null,this.state.allScores.map(function(e){return r.a.createElement(_e.a,{key:e.name},r.a.createElement($e.a,{component:"th",scope:"row"},e.name),r.a.createElement($e.a,{align:"right"},e.yscore+"/"+e.titems))}))),r.a.createElement("div",{className:"tableButtons"},r.a.createElement(J.a,{size:"small",onClick:this.clearScores,variant:"contained",color:"primary"},"Clear"),r.a.createElement("span",{className:"alignRight"},r.a.createElement(J.a,{size:"small",onClick:this.handleClickOpen,variant:"contained",color:"primary"},"Add")))),r.a.createElement("div",{className:"deleteSyllabus"},r.a.createElement(J.a,{size:"small",onClick:this.handleDeleteSyllabus,variant:"text",color:"primary"},"Delete Syllabus")),r.a.createElement(fe.a,{fullWidth:!0,open:this.state.open,onClose:this.handleClose},r.a.createElement(We.a,null,"New "+this.props.syllabusName),r.a.createElement(ye.a,null,r.a.createElement(H.a,{onChange:this.handleChangeText("yourScore"),autoFocus:!0,margin:"dense",label:"Your Score",fullWidth:!0,type:"tel"}),r.a.createElement(H.a,{onChange:this.handleChangeText("totalItems"),margin:"dense",label:"Total Items",fullWidth:!0,type:"tel"})),r.a.createElement(Ee.a,null,r.a.createElement(J.a,{onClick:this.handleClose,color:"primary"},"Cancel"),r.a.createElement(J.a,{onClick:this.handleAdd,color:"primary"},"Add"))),r.a.createElement(Xe,{isOpen:this.state.errorOpen,isClosed:this.handleErrorClosed,errorMessage:this.state.errorMessage}))}}]),t}(r.a.Component),Ke=Object(h.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"}}})(qe),Ze=a(95),et=a.n(Ze),tt=a(90),at=a.n(tt),nt={right:20,bottom:25,position:"fixed"};var rt=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={allSyllabus:[],expanded:null,open:!1,syllabusName:"",weight:"",errorOpen:!1,errorMessage:""},a.clearSyllabus=function(){return 0===a.state.allSyllabus.length||(a.setState({errorOpen:!0,errorMessage:"Please delete all syllabi before deleting course."}),!1)},a.handleChange=function(e){return function(t,n){a.setState({expanded:!!n&&e})}},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1,syllabusName:"",weight:""})},a.handleChangeText=function(e){return function(t){a.setState(Object(D.a)({},e,t.target.value))}},a.handleGrades=function(e,t,n){var r=a.state.allSyllabus.findIndex(function(t){return t.name===e});a.setState({allSyllabus:et()(a.state.allSyllabus,Object(D.a)({},r,{tg:{$set:"Transmuted Grade: "+t}}))}),a.props.finalGrade(e,t*n/100)},a.handleAdd=function(){var e,t,n,r=a.state,l=r.allSyllabus,s=r.syllabusName,o=r.weight,c=l.map(function(e){return e.name});!c.includes(s)&&""!==s&&/^\d+$/.test(o)?(a.props.addSyllabus(a.props.selectedCourse,s),a.setState({allSyllabus:Object(oe.a)(l).concat([(e=s,t="Transmuted Grade: 0",n=o,{name:e,tg:t,wt:n})])})):c.includes(s)?a.setState({errorOpen:!0,errorMessage:"Label already used."}):""===s?a.setState({errorOpen:!0,errorMessage:"Label can't be blank."}):/^\d+$/.test(o)||a.setState({errorOpen:!0,errorMessage:"Weight should be a number."}),a.handleClose()},a.handleDelete=function(e){var t=a.state.allSyllabus.filter(function(t){return t.name!==e});a.setState({allSyllabus:t})},a.handleErrorClosed=function(){a.setState({errorOpen:!1})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"componentWillUnmount",value:function(){this.props.onRef(void 0)}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.expanded,l=this.state.allSyllabus.map(function(n){return r.a.createElement(xe.a,{key:n.name,expanded:a==="panel"+n.name,onChange:e.handleChange("panel"+n.name)},r.a.createElement(Fe.a,{expandIcon:r.a.createElement(Ie.a,null)},r.a.createElement(g.a,{className:t.heading},n.name+" ("+n.wt+"%)"),r.a.createElement(g.a,{className:t.secondaryHeading},n.tg)),r.a.createElement(Te.a,null,r.a.createElement("div",{className:"AddSyllabusDiv"},r.a.createElement(Ke,{deleteSyllabus:e.handleDelete,courseName:e.props.selectedCourse,syllabusName:n.name,transmutedGrade:e.handleGrades,syllabusWeight:n.wt,onRef:function(t){return e.indivScore=t}}))))});return r.a.createElement(n.Fragment,null,r.a.createElement(ae.a,{parent:this,prefix:"cs_"+this.props.selectedCourse,blacklist:["open","expanded","errorOpen","errorMessage"]}),r.a.createElement("div",{className:t.root},l),r.a.createElement(ve.a,{onClick:this.handleClickOpen,style:nt,size:"medium",color:"primary","aria-label":"Add"},r.a.createElement(Oe.a,null)),r.a.createElement(fe.a,{fullWidth:!0,open:this.state.open,onClose:this.handleClose},r.a.createElement(We.a,null,"New Syllabus"),r.a.createElement(ye.a,null,r.a.createElement(H.a,{onChange:this.handleChangeText("syllabusName"),autoFocus:!0,margin:"dense",label:"Label (e.g. Quiz, Attendance)",fullWidth:!0}),r.a.createElement(H.a,{className:"smallTextField",onChange:this.handleChangeText("weight"),margin:"dense",label:"Weight",type:"tel",InputProps:{endAdornment:r.a.createElement(at.a,{position:"end"},"%")}})),r.a.createElement(Ee.a,null,r.a.createElement(J.a,{onClick:this.handleClose,color:"primary"},"Cancel"),r.a.createElement(J.a,{onClick:this.handleAdd,color:"primary"},"Add"))),r.a.createElement(Xe,{isOpen:this.state.errorOpen,isClosed:this.handleErrorClosed,errorMessage:this.state.errorMessage}))}}]),t}(r.a.Component),lt=Object(h.withStyles)(function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}})(rt),st=a(91),ot=a.n(st),ct=a(167),it=a.n(ct);function ut(e){return r.a.createElement(ke.a,Object.assign({direction:"up"},e))}var mt=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={courseGrades:[]},a.handleGrades=function(e,t){var n=a.state.courseGrades,r=n.findIndex(function(t){return t.name===a.props.courseName&&t.syllabus===e});a.setState({courseGrades:et()(n,Object(D.a)({},r,{grade:{$set:t}}))})},a.handleAdd=function(e,t){a.setState({courseGrades:Object(oe.a)(a.state.courseGrades).concat([function(e,t,a){return{name:e,syllabus:t,grade:a}}(e,t,"0")])})},a.handleDeleteCourse=function(){a.courseSyllabus.clearSyllabus()&&a.props.deleteCourse(a.props.courseName)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=function(e){if(e.length>0){var t=e.reduce(function(e,t){return parseFloat(e)+parseFloat(t)});return t=Math.round(100*t)/100}return 100}(this.state.courseGrades.map(function(t){return t.name===e.props.courseName?t.grade:0}));return r.a.createElement(n.Fragment,null,r.a.createElement(ae.a,{parent:this,prefix:"ic"}),r.a.createElement(fe.a,{fullScreen:!0,open:this.props.editCourse,onClose:this.props.stopEdit,TransitionComponent:ut},r.a.createElement(p.a,{className:t.appBar},r.a.createElement(b.a,null,r.a.createElement(g.a,{variant:"h6",color:"inherit",className:t.flex},this.props.courseName),r.a.createElement(K.a,{onClick:this.handleDeleteCourse,color:"inherit"},r.a.createElement(it.a,null)),r.a.createElement(J.a,{onClick:this.props.stopEdit,color:"inherit"},"DONE"))),r.a.createElement(lt,{finalGrade:this.handleGrades,selectedCourse:this.props.courseName,addSyllabus:this.handleAdd,onRef:function(t){return e.courseSyllabus=t}}),r.a.createElement(ot.a,{className:"FinalSGrade",label:"Final Grade: "+a,color:"primary"})))}}]),t}(r.a.Component),ht=Object(h.withStyles)({appBar:{position:"relative"},flex:{flex:1}})(mt),dt=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"An error has occured!!"),r.a.createElement("h3",null,"Please clear all app data to continue using this page."),r.a.createElement("h4",null,"Follow these instructions:"),r.a.createElement("ol",null,r.a.createElement("li",null,'Go to "Transmute" page'),r.a.createElement("li",null,"Tap on the three dots on the upper right corner of the app"),r.a.createElement("li",null,"Choose clear all data")),r.a.createElement("p",null,"This will delete all data of this app."),r.a.createElement("p",null,"To avoid this error in the future, refrain from using numbers when naming courses and syllabus."),r.a.createElement("p",null,"Thank you for using the app and sorry for this unfortunate error. Have a great day!"))},pt={right:20,bottom:70,position:"fixed"},ft=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={courses:[],open:!1,courseName:"",editCourse:!1,activeCourse:"",errorOpen:!1,errorMessage:""},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1,courseName:""})},a.handleChange=function(e){return function(t){a.setState(Object(D.a)({},e,t.target.value))}},a.handleAdd=function(){a.state.courses.includes(a.state.courseName)||""===a.state.courseName?a.state.courses.includes(a.state.courseName)?a.setState({errorOpen:!0,errorMessage:"Course name is already used."}):""===a.state.courseName&&a.setState({errorOpen:!0,errorMessage:"Course name can't be blank."}):a.setState({courses:Object(oe.a)(a.state.courses).concat([a.state.courseName])}),a.handleClose()},a.handleErrorClosed=function(){a.setState({errorOpen:!1})},a.handleEditCourse=function(e){a.setState({editCourse:!0,activeCourse:e})},a.handleStopEdit=function(){a.setState({editCourse:!1})},a.handleDelete=function(e){var t=a.state.courses.filter(function(t){return t!==e});a.setState({courses:t}),a.handleStopEdit()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.courses;if(Number.isInteger(t))return r.a.createElement(dt,null);var a=t.map(function(t){return r.a.createElement(me.a,{key:t,button:!0,divider:!0,onClick:e.handleEditCourse.bind(e,t)},r.a.createElement(de.a,{primary:t}))});return r.a.createElement(n.Fragment,null,r.a.createElement(ae.a,{parent:this,prefix:"c",blacklist:["open","editCourse"]}),r.a.createElement(ie.a,{component:"nav"},a),r.a.createElement(ve.a,{onClick:this.handleClickOpen,style:pt,size:"medium",color:"primary","aria-label":"Add"},r.a.createElement(Oe.a,null)),r.a.createElement(fe.a,{fullWidth:!0,open:this.state.open,onClose:this.handleClose,PaperProps:{style:{backgroundColor:"#fff"}}},r.a.createElement(We.a,null,"New Course"),r.a.createElement(ye.a,null,r.a.createElement(H.a,{onChange:this.handleChange("courseName"),autoFocus:!0,margin:"dense",label:"e.g. Anatomy, Patho",fullWidth:!0})),r.a.createElement(Ee.a,null,r.a.createElement(J.a,{onClick:this.handleClose,color:"primary"},"Cancel"),r.a.createElement(J.a,{onClick:this.handleAdd,color:"primary"},"Add"))),r.a.createElement(ht,{stopEdit:this.handleStopEdit,editCourse:this.state.editCourse,courseName:this.state.activeCourse,deleteCourse:this.handleDelete}),r.a.createElement(Xe,{isOpen:this.state.errorOpen,isClosed:this.handleErrorClosed,errorMessage:this.state.errorMessage}))}}]),t}(r.a.Component),bt=Object(h.withStyles)(function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper}}})(ft),Et=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"This page does not exist!"))},gt=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(I.a,null,r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"fixedScreen noselect"},r.a.createElement(v,null),r.a.createElement(G.a,null,r.a.createElement(W.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(se,Object.assign({},t,{onRef:function(t){return e.transmute=t}}))}}),r.a.createElement(W.a,{path:"/courses",render:function(t){return r.a.createElement(bt,Object.assign({},t,{onRef:function(t){return e.courses=t}}))}}),r.a.createElement(W.a,{component:Et}))),r.a.createElement("div",{className:"fixedScreen noselect botnav"},r.a.createElement(M,null))))}}]),t}(r.a.Component),yt=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(gt,null))}}]),t}(n.Component);window.addEventListener("touchmove",function(e){1!==e.scale&&e.preventDefault()},{passive:!1});var Ct=a(168),vt=a(169),St=Object(h.createMuiTheme)(Ct);s.a.render(r.a.createElement(h.MuiThemeProvider,{theme:St},r.a.createElement(vt.a,null),r.a.createElement(yt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.register("./serWork.js").then(function(e){console.log("Registered:",e)}).catch(function(e){console.log("Registration failed: ",e)})}},[[222,2,1]]]);
//# sourceMappingURL=main.48d48a46.chunk.js.map