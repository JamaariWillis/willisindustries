window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 555) {
      navbar.classList.add('navbar-scrolled');
      document.querySelector('.navbar-logo a').style.color = 'black';
      var navbarLinks = document.querySelectorAll('.navbar-link');
  
      navbarLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
          this.style.color = 'white';
        });
        link.addEventListener('mouseout', function() {
          this.style.color = 'black';
        });
        link.style.color = 'black';
      });
    } else {
      navbar.classList.remove('navbar-scrolled');
      document.querySelector('.navbar-logo a').style.color = 'white';
      var navbarLinks = document.querySelectorAll('.navbar-link');
  
      navbarLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
          this.style.color = 'black';
        });
        link.addEventListener('mouseout', function() {
          this.style.color = '#F8F8F8';
        });
        link.style.color = '#F8F8F8';
      });
    }
  });


  window.addEventListener('scroll', function() {
    var boxes = document.querySelectorAll('.box');
    var scrollPosition = window.pageYOffset;
    var windowHeight = window.innerHeight;
  
    for (var i = 0; i < boxes.length; i++) {
      var box = boxes[i];
      var boxOffsetTop = box.offsetTop;
      var boxHeight = box.offsetHeight;
      var triggerPoint = boxOffsetTop + boxHeight * 1; // Adjust the percentage here
  
      var opacity = 1 - (scrollPosition - triggerPoint + windowHeight) / windowHeight;
  
      box.style.opacity = Math.max(0, opacity).toFixed(2);
    }
  });

  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var menuContainer = document.querySelector('.navbar-menu-container');
    var toggle = document.querySelector('.navbar-toggle-label');
    var navbarLinks = document.querySelectorAll('.navbar-menu-container .navbar-link');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 555) {
      navbar.classList.add('navbar-scrolled');
      menuContainer.style.backgroundColor = '#FFF';
      toggle.style.color = 'black';
      navbarLinks.forEach(function(link) {
        link.style.color = 'black';
      });
    } else {
      navbar.classList.remove('navbar-scrolled');
      menuContainer.style.backgroundColor = 'black';
      toggle.style.color = '#FFF';
      navbarLinks.forEach(function(link) {
        link.style.color = '#FFF';
      });
    }
  });
  
  
  
  
  
  
  




  
  
  
  
  
  
  
  
  
  