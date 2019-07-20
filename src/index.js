import './scss/main.scss'
import slick from 'slick-slider'
import $ from 'jquery'
import Validation from './js/validationd/validationd.js'
import setLinks from './js/link/link'


var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const formVal = new Validation({
  form: $('.letswork__form'),
  submit: $('#btn__form'),
  name: $('.name'),
  email: $('.email')
})

$('.success-alert__close').click(function(){
  $(this).parent().removeClass('success-alert__active')
})

formVal.checkValid()

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

const links = ['Home', 'About', 'Portfolio','Blog', 'Clients']


setLinks(links)
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

$('.blog__flag').slick({
  prevArrow: false,
  nextArrow: false,
  responsive: [
      {
          breakpoint: 7699,
          settings: "unslick"
        },
        {
          breakpoint: 768,
          settings: {
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
})

$('#pageUp').click(function() {
  $('body,html').animate({scrollTop:0},700);
});



$(document).scroll(function(){
  var lengthFooterTop = $('.footer').offset().top - $(window).scrollTop(),
      lengthPageUpTop = $('#pageUp').offset().top - $(window).scrollTop() + 57

  if(lengthFooterTop < lengthPageUpTop) {
    console.log('new sty')
    $('#pageUp').addClass('stickyPageUp')
    
  } 
  
  if(lengthFooterTop > $(window).height() - 30) {
    $('#pageUp').removeClass('stickyPageUp')
  }

    var scrolCur = $(document).scrollTop()
    if($(document).scrollTop() > 60) {
        $('.fixed-header').addClass('fixed-header__shown')
        $('#pageUp').fadeIn()
    }
    else {
        $('.fixed-header').removeClass('fixed-header__shown')
        $('#pageUp').fadeOut()
        
    }
  
    
})

$('.mobile-menu__list__item').click(function(){
  $('.mobile-menu').removeClass('mobile-menu__shown')
})
