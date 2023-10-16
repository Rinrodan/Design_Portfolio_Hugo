function loadHTML(){
    fetch('home.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('homePage').innerHTML = text);
  }
  function getHero(){
    fetch('./components/hero.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('home').innerHTML = text);
  } getHero()

  function getGallery(){
    fetch('./components/gallery.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('gallery').innerHTML = text);
  } getGallery()

  function getSkills(){
    fetch('./components/skills.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('skills').innerHTML = text);
  } getSkills()

  function getGraphicDesigntabs(){
    fetch('./components/tabs.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('graphicDesignTabs').innerHTML = text);
  }
  function getModalOneContent(){
    fetch('./components/modalOneContent.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('modalOneContent').innerHTML = text);
  }
  function getModalTwoContent(){
    fetch('./components/modalTwoContent.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('modalTwoContent').innerHTML = text);
  }
  function getModalThreeContent(){
    fetch('./components/modalThreeContent.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('modalThreeContent').innerHTML = text);
  }
  function getModalFourContent(){
    fetch('./components/modalFourContent.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('modalFourContent').innerHTML = text);
  }
  function getAbout(){
    fetch('./components/about.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('about').innerHTML = text);
  } getAbout()
  function getGalleryCarousel(){
    fetch('./components/galleryCarousel.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('galleryCarouselContainer').innerHTML = text);
  } getGalleryCarousel()

  
  const mendu = document.getElementById("mendu");

  const toggleMendu = () => {
    console.log(mendu);
    if (mendu !== null) {
      mendu.classList.toggle("show");
  }}

  window.onclick = (event) => {
    if (!event.target.matches('.btn')) {
      if(mendu !== null && mendu.classList.contains('show')){
          mendu.classList.remove('show')
      }
  }
}
  
  
  mendu.addEventListener('click', (event) => event.stopPropagation());
  
//   function getHeaderContent(){
//     fetch('./components/header.html')
//     .then(response=> response.text())
//     .then(text=> document.getElementById('headerContent').innerHTML = text);
//   } getHeaderContent()

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 // carousel  ========================================
//  let carouselNavLinks = document.querySelectorAll(".carouselNavLink");
//  let slides = document.querySelectorAll(".slideImage");
//  let overlays = document.querySelectorAll(".bar");
//  let maxZIndex = carouselNavLinks.length;
//  let easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";
//  slides[0].classList.add("active");
//  carouselNavLinks[0].classList.add("active");

//  consle.table(carouselNavLinks);

//  carouselNavLinks.forEach((carouselNavLink, activeIndex) => {
//      overlays[activeIndex].style.zIndex = `${carouselNavLinks.length - activeIndex}`;

//      carouselNavLink.addEventListener("click", () => {


//          carouselNavLinks.forEach((link) => link.classList.remove("active"));
//          carouselNavLink.classList.add("active");

//          slides.forEach((slide) => slide.classList.remove("active"));
//          slides[activeIndex].classList.add("active");

//          overlays.forEach((overlay) => overlay.style.zIndex = "0");
//          overlays[activeIndex].style.zIndex = `${maxZIndex++}`;

//          overlays.forEach((overlay) => {
//              overlay.animate(
//                  [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
//                  { duration: 1200, fill: "forwards", easing: easeInOutQuart }
//              );
//          });
//      });
//  });
