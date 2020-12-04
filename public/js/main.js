const imgDir = "./img/";
let currentImgIndex = 1;
let lastIndex = 0;
document.addEventListener("DOMContentLoaded", (e) => {
  slide(1);
});

function slide(n) {
  let slides = document.getElementsByClassName("mySlides");
  currentImgIndex = currentImgIndex + n;
  // console.log('curr ==', currentImgIndex)
  if (currentImgIndex > 0 && currentImgIndex < 5) {
    // console.log('slides ==',slides)
    slides[lastIndex].style.display = "none";
    slides[currentImgIndex - 1].style.display = "block";
    lastIndex = currentImgIndex - 1;
  } else if (currentImgIndex > 4) {
    currentImgIndex = 0;
  } else {
    currentImgIndex = 4;
  }
}
