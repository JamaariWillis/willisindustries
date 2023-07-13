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
      var triggerPoint = boxOffsetTop + boxHeight * .999; // Adjust the percentage here
  
      var opacity = 1 - (scrollPosition - triggerPoint + windowHeight) / windowHeight;
  
      box.style.opacity = Math.max(0, opacity).toFixed(2);
    }
  });



    
  
  
  
  
  
  
  




  
  
  
  
  
  
  
  
  
  