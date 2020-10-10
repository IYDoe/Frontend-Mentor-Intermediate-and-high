const menuToggle = document.getElementById('menu-toggle');
const mobileNavContainer = document.getElementById('mobile-nav');
let toggleMenuOpen = false;

// ===================== Menu toggle ===================== 
menuToggle.onclick = function () {
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('burger__nav--active');

    if (toggleMenuOpen) {
        document.body.style.overflow = "auto";
        toggleMenuOpen = false;
    } else {
        document.body.style.overflow = "hidden";
        toggleMenuOpen = true;
    }
}
// ======================= Slider =======================

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
    showSlidesImg(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
    showSlidesImg(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    showSlidesImg(slideIndex = n)
}
// ======================= Slider text func =======================
function showSlides(n) {

    let i;
    let slides = document.getElementsByClassName("content");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}
// ======================= Slider Image func =======================
function showSlidesImg(n) {

    let i;
    let slidesImg = document.getElementsByClassName("header-image__item");
    if (n > slidesImg.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slidesImg.length;
    }
    for (i = 0; i < slidesImg.length; i++) {
        slidesImg[i].style.display = "none";
    }
    slidesImg[slideIndex - 1].style.display = "flex";
}