(this.webpackJsonpshortfilm_landingpage=this.webpackJsonpshortfilm_landingpage||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(48),o=a.n(r),s=a(10),i=a(11),c=a(13),u=a(12),m=(a(55),a(49)),p=a.n(m),d=function(e){return l.a.createElement(p.a,{type:"text/javascript",src:"https://apps.elfsight.com/p/platform.js"})};var h={color:"red",textAlign:"center",marginTop:"3px"},E={overflow:"hidden",textAlign:"center"},b=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?l.a.createElement("div",{className:"Slideshow"},l.a.createElement("h1",{style:h},"ACE PRODUCTIONS"),l.a.createElement("div",{style:E},l.a.createElement(d,null),l.a.createElement("div",{className:"elfsight-app-99924c38-7117-4ddb-86cf-d9ba05f77da7"}))):l.a.createElement("div",{className:"Video"},l.a.createElement("h1",{style:h},"ACE PRODUCTIONS"),l.a.createElement("div",{className:"video-background"},l.a.createElement("div",{className:"video-foreground"},l.a.createElement("iframe",{title:"ACE PRODCUCTIONS",src:"https://www.youtube.com/embed/videoseries?listType=playlist&list=PLWrn5jlz67mR_llJQoDoTen8rfaKFa6BV&vq=hd1080&controls=0&showinfo=0&rel=0&loop=1&autoplay=1&mute=1",frameBorder:"0",allowFullScreen:!0}))))},f=(a(102),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"popup"},l.a.createElement("div",{className:"popup\\_inner"},l.a.createElement("h1",null,this.props.text),l.a.createElement("button",{onClick:this.props.closePopup},"Close")))}}]),a}(n.Component)),g=a(22),v=(a(103),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).submitForm=n.submitForm.bind(Object(g.a)(n)),n.state={status:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.status;return l.a.createElement("div",{className:"Form"},l.a.createElement("div",{className:"formComponents"},l.a.createElement("form",{id:"form",onSubmit:this.submitForm,action:"https://formspree.io/mnqgyano",method:"POST"},l.a.createElement("div",null,l.a.createElement("label",null,"Your Email: "),l.a.createElement("input",{type:"email",name:"email",id:"typezone"})),l.a.createElement("div",null,l.a.createElement("label",null,"Enquiry/Feedback:"),l.a.createElement("p",null),l.a.createElement("textarea",{id:"typezone",type:"text",name:"message",cols:"50",rows:"4"})),l.a.createElement("div",null,"SUCCESS"===e?l.a.createElement("p",null,"Thanks!"):l.a.createElement("button",{style:y},"Submit"),"ERROR"===e&&l.a.createElement("p",null,"There was an error, please try again")))),l.a.createElement("button",{onClick:this.props.closeForm,style:y},"Close"))}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var a=e.target,n=new FormData(a),l=new XMLHttpRequest;l.open(a.method,a.action),l.setRequestHeader("Accept","application/json"),l.onreadystatechange=function(){l.readyState===XMLHttpRequest.DONE&&(200===l.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},l.send(n)}}]),a}(n.Component)),y={cursor:"pointer"},w=v,O=(a(104),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={showPopup:!1},n.state={showForm:!1},n}return Object(i.a)(a,[{key:"togglePopup",value:function(){this.setState({showPopup:!this.state.showPopup})}},{key:"toggleFormPopup",value:function(){this.setState({showForm:!this.state.showForm})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("title",null,"ACE PRODUCTIONS"),l.a.createElement(b,null),l.a.createElement("div",{style:C},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.youtube.com/channel/UCXcm2qssdip3tdSaU9przcQ/featured",className:"icon brands fa-linkedin"},l.a.createElement("span",{className:"label"},"Youtube"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.instagram.com/aceproductions96/?hl=en",className:"icon brands fa-github"},l.a.createElement("span",{className:"label"},"Instagram"))),l.a.createElement("li",null,l.a.createElement("button",{onClick:this.togglePopup.bind(this),style:S},"About"),this.state.showPopup?l.a.createElement(f,{text:"Ace Productions is film production group that focus on making independent horror and thriller short films",closePopup:this.togglePopup.bind(this)}):null),l.a.createElement("li",null,l.a.createElement("button",{onClick:this.toggleFormPopup.bind(this),style:S},"Contact"),this.state.showForm?l.a.createElement(w,{closeForm:this.toggleFormPopup.bind(this)}):null))))}}]),a}(n.Component)),C={backgroundColor:"#111",background:"linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 1) 100%)",textAlign:"center",overflow:"hidden"},S={cursor:"pointer",fontWeight:"bold"},P=O;o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root"))},50:function(e,t,a){e.exports=a(105)},55:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.841f4813.chunk.js.map