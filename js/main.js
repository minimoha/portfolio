  // Sticky menu background
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      document.querySelector('#navbar').style.opacity = 0.9;
      document.querySelector('#navbar').style.backgroundColor = "green";
      
    } else {
      document.querySelector('#navbar').style.opacity = 1;
      document.querySelector('#navbar').style.backgroundColor = "transparent";
    }
  });