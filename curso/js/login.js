// window.onload = function () {
//     let btnLogin = $("#btnLogin")

//     btnLogin.click(function(){
//         alert('apretando')
//     })

//  } 
var currentPage = currentPage || {};

currentPage.events = {

}


currentPage.Main = function ($) {
    let btnLogin
    let valorRandom

    let init = function () {
        btnLogin = $("#btnLogin")
        

        btnLogin.click(function () {
            valorRandom = _generateString(10)
            console.log("valor : "+valorRandom)
        })

    }

    let _generateString = function (length) {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let result = ' '
        const charactersLength = characters.length
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }

        return result
    }

    return {
        init: init
    }
}(jQuery);

$(document).ready(function () {
    currentPage.Main.init()
});