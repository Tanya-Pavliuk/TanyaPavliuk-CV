!function(){var o=document.querySelector("#printBtn");console.log(o),o.addEventListener("click",(function(){window.print()}));var n=document.querySelector(".scroll-btn");n.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),document.addEventListener("scroll",(function(){window.scrollY>100?n.classList.add("show-scroll-btn"):n.classList.remove("show-scroll-btn")}))}();
//# sourceMappingURL=index.549b2d64.js.map