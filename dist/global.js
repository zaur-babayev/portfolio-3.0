!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("global",[],t):"object"==typeof exports?exports.global=t():e.global=t()}(this,(()=>(()=>{new SplitType(".nav-home, .nav-link",{types:"words, chars",tagName:"span"}),$(".char").each((function(e){let t=$(this).text();$(this).attr("letter",t)})),$(".nav-home, .nav-link").each((function(e){function t(){void 0!==a&&clearInterval(a),r.each((function(e){let t=$(this).attr("letter");$(this).text(t)}))}let a,r=$(this).find(".char");$(this).on("mouseenter",(function(){let e=r.length;a=setInterval((function(){r.each((function(t){if(t<e){let e=function(e){for(var t="",a=0;a<1;a++)t+="ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(26*Math.random()));return t}();$(this).text(e)}else{let e=$(this).attr("letter");$(this).text(e)}})),e-=1}),100),setTimeout((()=>{t()}),600)})),$(this).on("mouseleave",(function(){t()}))}));const e=new LocomotiveScroll({el:document.querySelector(".locomotive-scroll"),smooth:!0,smartphone:{smooth:!0,breakpoint:0},tablet:{smooth:!0},smoothMobile:0,multiplier:1});setTimeout((()=>{e.update()}),2e3),$(".nav__link.is--first").on("click",(function(){const t=document.querySelector("#about");e.scrollTo(t)})),$(".nav__link.is--second").on("click",(function(){const t=document.querySelector("#projects");e.scrollTo(t)})),$(".nav__link.is--third").on("click",(function(){const t=document.querySelector("#contact");e.scrollTo(t)}));var t=document.querySelector(".tag-canvas"),a=new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting&&(function(){var e=Matter.Engine,t=Matter.Render,a=Matter.Events,r=Matter.MouseConstraint,s=Matter.Mouse,o=Matter.World,c=Matter.Bodies,l=e.create(),n=l.world,f=document.querySelector(".balls-area"),d=f.clientWidth+2,u=f.clientHeight+2,m=t.create({element:f,engine:l,options:{width:d,height:u,pixelRatio:2,background:"transparent",border:"none",wireframes:!1}}),p=c.rectangle(d/2+160,u+80,d+320,160,{render:{fillStyle:"#000000"},isStatic:!0}),h=c.rectangle(-80,u/2,160,u,{isStatic:!0}),b=c.rectangle(d+80,u/2,160,1200,{isStatic:!0}),g=c.rectangle(d/2+160,-80,d+320,160,{isStatic:!0}),w=20,v=c.rectangle(d/2+150,500,164,56,{chamfer:{radius:w},render:{sprite:{texture:"https://uploads-ssl.webflow.com/64f41ea3b31af27272713c03/64f47541d38f6886e5747c1d_uiux.svg",xScale:1,yScale:1}}}),S=c.rectangle(d/2+150,460,240,56,{chamfer:{radius:w},render:{sprite:{texture:"https://uploads-ssl.webflow.com/64f41ea3b31af27272713c03/64f47540055ab00edffa0a68_wordpress.svg",xScale:1,yScale:1}}}),x=c.rectangle(d/2+250,420,200,56,{chamfer:{radius:w},render:{sprite:{texture:"https://uploads-ssl.webflow.com/64f41ea3b31af27272713c03/64f475405a7c8ff69c27ed37_webflow.svg",xScale:1,yScale:1}}}),y=c.rectangle(d/2-75,380,160,56,{chamfer:{radius:w},render:{sprite:{texture:"https://uploads-ssl.webflow.com/64f41ea3b31af27272713c03/64f47540c9a2047edbb293d1_whitelevel.svg",xScale:1,yScale:1}}}),_=c.rectangle(d/2-74,540,248,56,{chamfer:{radius:w},render:{sprite:{texture:"https://uploads-ssl.webflow.com/64f41ea3b31af27272713c03/64f47540487abf2c397d777f_webflow-green.svg",xScale:1,yScale:1}}}),M=c.rectangle(d/2+174,490,105,56,{chamfer:{radius:w},render:{sprite:{texture:"https://uploads-ssl.webflow.com/64f41ea3b31af27272713c03/64f475407ebe06e52f9283d1_sass.svg",xScale:1,yScale:1}}}),$=c.rectangle(d/2-142,440,186,56,{chamfer:{radius:w},render:{sprite:{texture:"https://uploads-ssl.webflow.com/64f41ea3b31af27272713c03/64f47540f762b61424410849_web.svg",xScale:1,yScale:1}}}),k=c.rectangle(d/2-10,260,128,56,{chamfer:{radius:w},render:{sprite:{texture:"https://uploads-ssl.webflow.com/64f41ea3b31af27272713c03/64f475402ae28c15adeba62f_startup.svg",xScale:1,yScale:1}}}),E=c.rectangle(d/2-242,420,168,56,{chamfer:{radius:w},render:{sprite:{texture:"https://uploads-ssl.webflow.com/64f41ea3b31af27272713c03/64f47540f86ad4f4175a1e69_maintence.svg",xScale:1,yScale:1}}}),L=c.rectangle(d/2+60,380,155,56,{chamfer:{radius:w},render:{sprite:{texture:"https://uploads-ssl.webflow.com/64f41ea3b31af27272713c03/64f47540035d9b03fc33e447_integration.svg",xScale:1,yScale:1}}}),T=c.rectangle(d/2,360,180,56,{chamfer:{radius:w},render:{sprite:{texture:"https://uploads-ssl.webflow.com/64f41ea3b31af27272713c03/64f475405a7c8ff69c27ed00_motion.svg",xScale:1,yScale:1}}}),q=c.rectangle(d/2-59,260,172,56,{chamfer:{radius:w},render:{sprite:{texture:"https://uploads-ssl.webflow.com/64f41ea3b31af27272713c03/64f475406ef461a95eaa0f12_pay.svg",xScale:1,yScale:1}}}),B=c.rectangle(d/2-59,260,115,56,{chamfer:{radius:w},render:{sprite:{texture:"https://uploads-ssl.webflow.com/64f41ea3b31af27272713c03/64f47540f86ad4f4175a1df1_gsap.svg",xScale:1,yScale:1}}}),I=c.rectangle(d/2-59,260,210,56,{chamfer:{radius:w},render:{sprite:{texture:"https://uploads-ssl.webflow.com/64f41ea3b31af27272713c03/64f475407a05afc618131310_figma.svg",xScale:1,yScale:1}}}),j=c.rectangle(d/2-59,260,145,56,{chamfer:{radius:w},render:{sprite:{texture:"https://uploads-ssl.webflow.com/64f41ea3b31af27272713c03/64f47540bfb0eee6858d556a_migration.svg",xScale:1,yScale:1}}});o.add(l.world,[p,h,b,g,v,S,x,y,_,M,$,k,E,L,T,q,B,I,j]);var H=s.create(m.canvas),O=r.create(l,{mouse:H,constraint:{stiffness:.2,render:{visible:!1}}});o.add(n,O),m.mouse=H,H.element.removeEventListener("mousewheel",H.mousewheel),H.element.removeEventListener("DOMMouseScroll",H.mousewheel);let R=!1;document.addEventListener("mousedown",(()=>R=!0)),document.addEventListener("mousemove",(()=>R=!1)),document.addEventListener("mouseup",(()=>console.log(R?"click":"drag"))),a.on(O,"mouseup",(function(e){var t=e.source,a=l.world.bodies;if(!t.bodyB)for(i=0;i<a.length;i++){var r=a[i];if(!0===R&&Matter.Bounds.contains(r.bounds,t.mouse.position)){var s=r.url;console.log("Body.Url >> "+s),null!=s&&(window.open(s,"_blank"),console.log("Hyperlink was opened"));break}}})),e.run(l),t.run(m)}(),t.disconnect())}))}),{});return a.observe(t),{}})()));