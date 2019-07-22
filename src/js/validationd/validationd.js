import $ from 'jquery'


export default class Validation {
    constructor(form){
        this.form = form.form || null,
        this.name = form.name || null,
        this.email = form.email || null,
        this.submit = form.submit || null
        this.HasName = false,
        this.HasEmail = false,
        this.formBool = false
    }

    checkValid() {
        if(this.form == null || this.submit == null) {
            alert('Важные поля не определены, надо определить или работа формы не возможна!')
        }
        var checkedName = false,
            checkedEmail = false
        if(this.name !== null) {
            this.HasName = true
            const nameReg = /^[a-zA-Zа-яА-Я ,.'-]+$/i,
                  name = this.name
            let ans,
                nameLeg
            $(this.name).on('keyup', function(){
                ans = nameReg.test(name.val())
                nameLeg = name.val().length
                if(ans) {
                    $(this).siblings().css('background', 'green')
                    checkedName = true
                }
                if(!ans || nameLeg < 3) {
                    $(this).siblings().css('background', 'red')
                }
            })
            $(this.name).on('focusin', function(){
                    $(this).siblings().css('transform', 'scale(1)')
            })
            $(this.name).on('focusout', function(){
                if(ans) {
                    $(this).siblings().css('transform', 'scale(0)')
                }
                if(!ans || nameLeg < 3) {
                    $(this).siblings().css('transform', 'scale(1)')
                }
            })
        }

        if(this.email !== null) {
            this.HasEmail = true
            const emailRe = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                email = this.email
            let ansEmail
            $(this.email).on('keyup', function(){
                ansEmail = emailRe.test(email.val())
                if(ansEmail) {
                    $(this).siblings().css('background', 'green')
                    checkedEmail = true
                }
                if(!ansEmail) {
                    $(this).siblings().css('background', 'red')
                }
            })
            $(this.email).on('focusin', function(){
                $(this).siblings().css('transform', 'scale(1)')
            })
            $(this.email).on('focusout', function(){
                if(ansEmail) {
                    $(this).siblings().css('transform', 'scale(0)')
                }
                if(!ansEmail) {
                    $(this).siblings().css('transform', 'scale(1)')
                }
            })
        }

        if(this.form !== null) {
            $(this.submit).click(function(e){
                e.preventDefault()
                const url = 'https://crtrack.ru/delement.php'
                if(checkedName == true && checkedEmail === true) {
                    const data = {
                        name: $('.name').val(),
                        email: $('.email').val(),
                        text: $('.text').val(),
                    
                    }
                    $.ajax({
                        crossDomain: true,
                        type: "POST",
                        url: url,
                        data: data,
                        success: function(){
                            checkedName = false
                            checkedEmail = false
                            $('.name').val('')
                            $('.email').val('')
                            $('.text').val('')
                            $('.success-alert').addClass('success-alert__active')
                            setTimeout(function(){
                                $('.success-alert').removeClass('success-alert__active')
                              }, 2300)
                        }
                    });
                } else {
                }
            })
        }


    }
}
