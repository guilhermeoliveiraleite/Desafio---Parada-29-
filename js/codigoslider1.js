let slideShow = 1;
Slider1(slideShow);


function proxslide(n) {
    Slider1(slideShow += n);
}


function atualslide(n) {
    Slider1(slideShow = n);
}

function Slider1(n) {
  let i;
  let slides = document.getElementsByClassName("slide1");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideShow = 1}
  if (n < 1) {slideShow = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideShow-1].style.display = "block";
  dots[slideShow-1].className += " active";
}