const bntPrintEl = document.querySelector("#printBtn");
console.log(bntPrintEl)
bntPrintEl.addEventListener("click", function () {
    window.print()
})

const scrollUpBtn = document.querySelector('.scroll-btn');

const onScroll = () => {
  if (window.scrollY > 100 ) {
    scrollUpBtn.classList.add('show-scroll-btn');
  } else {
    scrollUpBtn.classList.remove('show-scroll-btn');
  }
};

const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

scrollUpBtn.addEventListener('click', scrollUp);
document.addEventListener('scroll', onScroll);