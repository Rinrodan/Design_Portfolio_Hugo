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

  function getHeaderContent(){
    fetch('./components/header.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('headerContent').innerHTML = text);
  } getHeaderContent()


