let sonido_correcto = new Audio("multimedia/notification.wav")
let sonido_error = new Audio("multimedia/error.mp3")

let caracteres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let captcha_numerico = []
let captcha = []


let html_captcha = document.getElementById("palabra_captcha")

function caracter_al_azar(cantidad){
    for (let i = 0; i < cantidad; i++) { //CREA ${CANTIDAD} DE NUMEROS AL AZAR Y LOS PUSHEA A UN ARRAY
        let digito_azar = parseInt(Math.random() * (caracteres.length))
        captcha_numerico.push(digito_azar)
        //console.log(digito_azar)
    }

    //console.log("Length"  , captcha_numerico.length)

    for (let i = 0; i < captcha_numerico.length; i++) { //RECORRE EL ARRAY NUMERICO Y LO CONVIERTE EN CARACTER.

        let numero = captcha_numerico[i]
        captcha.push(caracteres[numero])
    }
    captcha = captcha.join("") //CONVIERTE EL ARRAY EN STRING Y UNE LOS CARACTERES
    //console.log(captcha)
    html_captcha.innerText = `${captcha}`

}

caracter_al_azar(5);


let input_captcha = document.getElementById("input_captcha")

input_captcha.addEventListener("keyup" , function(e){
    let respuesta = e.target.value;
    //console.log(respuesta)

    if(respuesta == captcha){
        sonido_correcto.play()
        html_captcha.innerHTML = `¡Eres humano!<img src="./multimedia/./mario.gif" alt="" class="personaje">`
        html_captcha.style.backgroundColor="#52b788"
        html_captcha.style.animation="shake 2s linear infinite"
    }
    if(respuesta.length > 4){
        if(respuesta != captcha){
            sonido_error.play()
            html_captcha.innerHTML = `¡Maldito Robot!<img src="./multimedia/./robot.gif" alt="" class="personaje">`
            html_captcha.style.backgroundColor="red"
            setTimeout(recargar , 2000)
        }
    }
})

function recargar(){
    location.reload()
}

