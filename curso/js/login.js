var currentPage = currentPage || {};

currentPage.params = {
    TOKEN_ALMACENADO : "_TOKEN_"
}

currentPage.events = {

}


currentPage.Main = function ($) {
    let btnLogin
    let valorRandom
    let inputUsuario
    let inputPassword
    let parametroString

    let init = function () {
        btnLogin = $("#btnLogin")


        btnLogin.click(function () {
            inputUsuario = $("#input-usuario").val()
            inputPassword = $("#input-password").val()
            console.log(inputUsuario)
            console.log(inputPassword)
            if (inputUsuario!="hola" || inputPassword!="123") {
                console.log('incorrecto usuario')
            } else{
                valorRandom = _generateString(10)
                //location.href = 'http://127.0.0.1:5500/curso/educacion_vial/elementos'
                //console.log("valor : " + valorRandom)
                console.log('correcto usuario')
                _redireccionar(valorRandom)
                localStorage.setItem(currentPage.params.TOKEN_ALMACENADO, valorRandom)
  
            }

        })

    }

    let _redireccionar = function (valorRandom) {
        console.log("valor en metodo : " + valorRandom)

    }

    let _generateString = function (length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
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
    localStorage.clear()
    if(!localStorage.getItem(currentPage.params.TOKEN_ALMACENADO)) localStorage.setItem(currentPage.params.TOKEN_ALMACENADO, "0")
    currentPage.Main.init()
});