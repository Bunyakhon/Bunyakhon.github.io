let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
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
}
function myFunction(imgs) {
  // Get the expanded image and the image text
  let expandImg = document.getElementById("expandedImg");
  let imgText = document.getElementById("imgtext");

  // Use the same source as the clicked image for the large image
  expandImg.src = imgs.src;

  // Update the alt text in the expanded image
  imgText.innerHTML = imgs.alt;

  // Show the container of the expanded image
  expandImg.parentElement.style.display = "block";
}
