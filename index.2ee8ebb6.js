const o=document.querySelector("#printBtn");console.log(o),o.addEventListener("click",(function(){window.print()}));const t=document.querySelector(".scroll-btn");t.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),document.addEventListener("scroll",(()=>{window.scrollY>100?t.classList.add("show-scroll-btn"):t.classList.remove("show-scroll-btn")}));
//# sourceMappingURL=index.2ee8ebb6.js.map