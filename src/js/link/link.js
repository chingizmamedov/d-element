import $ from 'jquery'


export default function setLinks(links){
    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    links.forEach((item)=> {

        $('.link__' + item).click(function () {
    
            var elementClick = $('#section__' + item);
            var destination = $(elementClick).offset().top;
            if (is_safari) {
                $('body').animate({ scrollTop: destination }, 1100); //1100 - скорость
            } else {
                $('html').animate({ scrollTop: destination }, 1100);
            }
            return false;
        
          })

    })

}

