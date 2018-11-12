const goUpBtn = document.querySelector('.goUp');
const connectBtn = $('.connect-btn');

//https://stackoverflow.com/questions/6677035/jquery-scroll-to-element
connectBtn.on('click', () => {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(".footer").offset().top
  }, 1000);

});


goUpBtn.addEventListener('click', () => {
  // alert('asda')
  window.scrollTo(0, 0);
})

window.onscroll = function(ev) {
  const scrolled = window.innerHeight + window.scrollY;
  //if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  if (scrolled >= window.innerHeight + 60) {
    goUpBtn.style.display = "block";
  } else {
    goUpBtn.style.display = "none";
  }
};


const mobileDropDown = $('.mobileDropDown');
const mobileNav = $('.mobileNav');
const mobileX = $('.mobileX');


mobileDropDown.on('click', () => {
  mobileNav.slideDown();

});


mobileX.on('click', () => {
  mobileNav.slideUp();

});