      // Scrolling Effect

      $(window).on("scroll", function() {
        if($(window).scrollTop()) {
              $('nav').addClass('black');
        }

        else {
              $('nav').removeClass('black');
        }
  })

    $('li').on("click", function(){
        if($('li').hasClass('active')){
            $('li').removeClass('active');
            $(this).addClass('active');
        }
    })



//     Auto Scrolling

function pageScroll() {
      window.scrollBy(0,1);
      scrolldelay = setTimeout(pageScroll,15);
  }
function scrollOff(){
            clearTimeout(scrolldelay);
      }

window.addEventListener("touchmove", scrollOff )
window.addEventListener("mousemove", scrollOff )

// Slideshow

// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("Project-slides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 4000); // Change image every 2 seconds
// }


//Reveal animation
new WOW().init();

// Slick



      if (window.matchMedia('(min-width: 767px)').matches) {
          //...
          $(document).ready(function(){
            $('.slides').slick({
                  dots: true,
                  infinite: true,
                  speed: 500,
                  fade: true,
                  autoplay:true,
                  autoplaySpeed: 5000,
                  cssEase: 'linear'
      });
});   
      }else{
          $(document).ready(function(){
          $('.slides').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
                  });
                });
            
      }


//   Responsive nav

// function myFunction() {
//       var x = document.getElementById("button-container");
//       if (x.className === "topnav") {
//         x.className += " responsive";
//       } else {
//         x.className = "topnav";
//       }
//     }


    // Hamburger


function myFunction(){
      var overlay = document.getElementById("body-overlay");
      var main = document.getElementById("mySidebar");
      if (main.className ==="sidebar" && overlay.className ==="body-overlay"){
      main.className += " sideOn";
      overlay.className += " on"
}
else{
      main.className = "sidebar";
      overlay.className = "body-overlay";
}
}


$('.Contacts').mousemove(function(e){
      var amountMovedX = (e.pageX * 1 / 20);
      var amountMovedY = (e.pageY * 1 / 20);
      $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
  });
// // Smooth scroll









// function scrollToHash(hash1) {
//       location.hash = "#" + hash1;
//   }

// Active on Scroll 

// div = document.querySelectorAll('div');
// li = document.querySelectorAll('li');

// onscroll = function(){
//       var scrollPosition = document.documentElement.scrollTop;

//       div.forEach( div => {
//             if(scrollPosition >= div.offsetTop && scrollPosition < div.offsetTop + div.offsetHeight){
//                   let currentId = div.attributes.id.value;      
//                   if (li.hasClass('active')){
//                             li.removeClass('active');
//                             currentId.addClass('active');}
//             }
//       })
// }

