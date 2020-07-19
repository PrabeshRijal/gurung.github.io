
// navigation-bar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});
// navigation-bar
// ------------------
// navigation scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("gurungbeauty-section").style.height = "150px";
    document.getElementById("gurungbeauty-section").style.opacity = 1;
    document.getElementById("brand-logo").style.width = "6%";
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("gurungbeauty-section").style.height = "156px";
    document.getElementById("gurungbeauty-section").style.opacity = 0.8;
    document.getElementById("brand-logo").style.width = "8%";
    document.getElementById("myBtn").style.display = "none";
  }
};
// navigation scroll
// --------------------
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 500) {
      $("#addHere").addClass("addme");
  } else {
      $("#addHere").removeClass("addme");
  }
});
// -----------------
// image-gallery
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
// ---------------
// scroll to
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
