function loadHTML(){
    fetch('home.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('homePage').innerHTML = text);
  }

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