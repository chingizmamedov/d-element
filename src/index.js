import './scss/main.scss'
import slick from 'slick-slider'
import $ from 'jquery'

var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

$('#arrows').click(function(){

      var elementClick = $('.about-myself');
      var destination = $(elementClick).offset().top;
      if (is_safari) {
          $('body').animate({ scrollTop: destination }, 1100); //1100 - скорость
      } else {
          $('html').animate({ scrollTop: destination }, 1100);
      }
      return false; 

})

$('.burger').click(function(){
    console.log('menu click')
    $('.mobile-menu').toggleClass('mobile-menu__shown')
})

$('.happyclients__slider').slick({
    slidesToShow: 6,
    slidesToScroll: 3,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})

$(document).scroll(function(){
    var scrolCur = $(document).scrollTop()
    if($(document).scrollTop() > 60) {
        $('.fixed-header').addClass('fixed-header__shown')
    }
    else {
        $('.fixed-header').removeClass('fixed-header__shown')
    }
    
})

console.log('QwbpXK')