  // // Sticky menu background
  // window.addEventListener('scroll', function() {
  //   if (window.scrollY > 300) {
  //     document.querySelector('#navbar').style.opacity = 0.9;
  //     document.querySelector('#navbar').style.backgroundColor = "green";
  //     document.querySelector('#navbar').style.position = "sticky";
      
  //   } else {
  //     document.querySelector('#navbar').style.opacity = 1;
  //     document.querySelector('#navbar').style.backgroundColor = "transparent";
  //   }
  // });
  var navTop = $("#navbar").offset().top;
console.log(navTop)
  var stickyNav = function(){
      if ($(window).scrollTop() > 150){
          $("#navbar").addClass("sticky");
      } else {
          $("#navbar").removeClass("sticky");
      }
  };
  
  stickyNav();
  
  $(window).scroll(function(){
      stickyNav();
  });