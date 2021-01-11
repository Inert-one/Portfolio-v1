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
      scrolldelay = setTimeout(pageScroll,10);
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

// ES6 Class
class TypeWriter {
      constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
      }
    
      type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];
    
        // Check if deleting
        if(this.isDeleting) {
          // Remove char
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          // Add char
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
    
        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    
        // Initial Type Speed
        let typeSpeed = 80;
    
        if(this.isDeleting) {
          typeSpeed /= 2;
        }
    
        // If word is complete
        if(!this.isDeleting && this.txt === fullTxt) {
          // Make pause at end
          typeSpeed = this.wait;
          // Set delete to true
          this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          // Move to next word
          this.wordIndex++;
          // Pause before start typing
          typeSpeed = 0;
        }
    
        setTimeout(() => this.type(), typeSpeed);
      }
    }
    
    
    // Init On DOM Load
    document.addEventListener('DOMContentLoaded', init);
    
    // Init App
    function init() {
      const txtElement = document.querySelector('.txt-type');
      const words = JSON.parse(txtElement.getAttribute('data-words'));
      const wait = txtElement.getAttribute('data-wait');
      // Init TypeWriter
      new TypeWriter(txtElement, words, wait);
    }


// TypeWriter 2

var i = 0;
var txt = "Hi, I'm Shubham."; /* The text */
var speed = 300; /* The speed/duration of the effect in milliseconds */

function typeWriter2() {
  if (i < txt.length) {
    document.getElementById("type-stop").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter2, speed);
  }
}
typeWriter2();


// Poem Scroller
$(document).ready(function(){
$('.paper-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 2000,
        });
      });