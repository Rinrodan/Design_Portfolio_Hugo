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


  
  function smallImageOneClick(){
    console.log("small image one click")
            document.getElementById('large-image-1').classList.toggle('visibility')
            document.querySelector('.large-image').classList.toggle('scaled-up');
            document.querySelector('.large-image').classList.toggle('moved-up');
        };
// ================================================== carousel ===================

function carouselLinkOne(){
  console.log("carousel Link One click")
          // document.getElementById('large-image-1').classList.toggle('visibility')
          // document.querySelector('.large-image').classList.toggle('scaled-up');
          // document.querySelector('.large-image').classList.toggle('moved-up');
};
  // function carousel(){
  //   let carouselNavLinks = document.querySelectorAll(".carouselNavLink");
  //   let slides = document.querySelectorAll(".slideImage");
  //   let overlays = document.querySelectorAll(".bar");
  //   let maxZIndex = carouselNavLinks.length;
  //   let easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";
  //   slides[0].classList.add("active");
  //   carouselNavLinks[0].classList.add("active");
  //   console.log("slides")
    
    
  //   carouselNavLinks.forEach((carouselNavLink, activeIndex) => {
  //       overlays[activeIndex].style.zIndex = `${carouselNavLinks.length - activeIndex}`;
    
  //       carouselNavLink.addEventListener("click", () => {
    
  //         consle.log("asdfgasdfadsfadsf");
  //           carouselNavLinks.forEach((link) => link.classList.remove("active"));
  //           carouselNavLink.classList.add("active");
    
  //           slides.forEach((slide) => slide.classList.remove("active"));
  //           slides[activeIndex].classList.add("active");
    
  //           overlays.forEach((overlay) => overlay.style.zIndex = "0");
  //           overlays[activeIndex].style.zIndex = `${maxZIndex++}`;
    
  //           overlays.forEach((overlay) => {
  //               overlay.animate(
  //                   [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
  //                   { duration: 1200, fill: "forwards", easing: easeInOutQuart }
  //               );
  //           });
  //       });
  //   });
  // };


  function logInsideCarousel() {
    console.log("carouselLinks")
   }
  function carouselScript() {
      let carouselNavLinks = [];
      let slides = [];
      let overlays = [];
      let slideComments = [];
      let maxZIndex = {};
      let easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";


    setTimeout(function() {
      const nodeListLinks = document.querySelectorAll('.carouselNavLink');
      const nodeArrayLinks = Array.from(nodeListLinks);
      const nodeListSlides = document.querySelectorAll(".slideImage");
      const nodeArraySlides = Array.from(nodeListSlides);
      const nodeListOverlays = document.querySelectorAll(".bar");
      const nodeArrayOverlays = Array.from(nodeListOverlays);
      const nodeListComments = document.querySelectorAll(".slideComment");
      const nodeArrayComments = Array.from(nodeListComments);
      
      carouselNavLinks.push(nodeArrayLinks);
      slides.push(nodeArraySlides);
      overlays.push(nodeArrayOverlays);
      slideComments.push(nodeArrayComments);

      const nodeListMaxZ = carouselNavLinks[0].length;
      maxZIndex = nodeListMaxZ;
      carouselNavLinks[0][0].classList.add("active");
      slides[0][0].classList.add("active");
      slideComments[0][0].classList.add("active");
      console.log("overlays after update",overlays);
      console.log("variables after update", carouselNavLinks, slides, overlays, maxZIndex);
      console.log("comments after update", slideComments[0]);
    }, 300);

    setTimeout(function() {
      carouselNavLinks[0].forEach((carouselNavLink, activeIndex) => {
        console.log("setting activeindex", carouselNavLinks[0])
        console.log("setting activeindex - overlays", overlays);
        console.log("setting activeindex - comments", slideComments[0]);
            overlays[0][activeIndex].style.zIndex = `${maxZIndex - activeIndex}`;
        
            carouselNavLink.addEventListener("click", () => {
        
              console.log("asdfgasdfadsfadsf");
                carouselNavLinks[0].forEach((link) => link.classList.remove("active"));
                carouselNavLink.classList.add("active");


        
                slides[0].forEach((slide) => slide.classList.remove("active"));
                slides[0][activeIndex].classList.add("active");
        
                overlays[0].forEach((overlay) => overlay.style.zIndex = "0");
                overlays[0][activeIndex].style.zIndex = `${maxZIndex++}`;
        
                overlays[0].forEach((overlay) => {
                    overlay.animate(
                        [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
                        { duration: 1200, fill: "forwards", easing: easeInOutQuart }
                    );
                });
                slideComments[0].forEach((slideComment) => slideComment.classList.remove("active"));
                slideComments[0][activeIndex].classList.add("active");

              slideComments[0].forEach((comment) => {
                  comment.animate(
                      [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
                      { duration: 1200, fill: "forwards", easing: easeInOutQuart }
                  );
              });
            });
        });
    },350);
  };
    // let carouselNavLinks = document.querySelectorAll("carouselNavLink");
 
// const handleCloseCarouselSlide = () => {
//    addEventListener("click", () => {
    
//   console.log(carouselLinks);
//     carouselNavLinks.forEach((link) => link.classList.remove("active"));
//     carouselNavLink.classList.add("active");

//     slides.forEach((slide) => slide.classList.remove("active"));;
// })};

function carouselLinkOne(){
  console.log("carousel Link One click")
          document.getElementById('carouselSlideOne').classList.toggle('active')
          // document.querySelector('.large-image').classList.toggle('scaled-up');
          // document.querySelector('.large-image').classList.toggle('moved-up');
};



  // ================================================== carousel ===================
          // function getGalleryCarousel(){
  //   fetch('./components/galleryCarousel.html')
  //   .then(response=> response.text())
  //   .then(text=> document.getElementById('galleryCarouselContainer').innerHTML = text);
  // } getGalleryCarousel()

//   window.addEventListener("load", ()=>{
//     const mendu = document.getElementById("#mendu");
//     mendu.addEventListener("click", handler);
// });

//   const toggleMendu = () => {
//     console.log(mendu);
//     if (mendu !== null) {
//       mendu.classList.toggle(".show");
//   }}

//   window.onclick = (event) => {
//     if (!event.target.matches('btn')) {
//       if(mendu !== null && mendu.classList.contains('.show')){
//           mendu.classList.remove('.show')
//       }
//   }
// }
  
  


  
//   function getHeaderContent(){
//     fetch('./components/header.html')
//     .then(response=> response.text())
//     .then(text=> document.getElementById('headerContent').innerHTML = text);
//   } getHeaderContent()

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 