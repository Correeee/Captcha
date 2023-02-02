/*CICLO DE UN TRIANGULO

let simbolo = "#"

console.log("Ciclo de un triángulo")

for(let i = 0; i < 7; i++){
    console.log(simbolo += "#")
}

_________________________________________________
*/

/*FIZZBUZZ

MI SOLUCIÓN:

for (let i = 1; i <= 100; i++) {
    
    if(i % 3 == 0 && i % 5 != 0){
        console.log("Fizz")
    }

    if(i % 5 == 0 && i % 3 != 0){
        console.log("Fizz")
    }

    else if(i % 3 == 0 && i % 5 == 0){
        console.log("Fizz-Buzz")
    }

    else{
        console.log(i)
    }

}

OTRA SOLUCIÓN DE YOUTUBE:

for (let i = 1; i <= 100; i++) {
    
    let resultado = "";

    if(i % 3 == 0){
        resultado += "Fizz"
    }

    if(i % 5 == 0){
        resultado += "Buzz"
    }

    console.log(resultado || i)

}

_________________________________________
*/

/*TABLERO DE AJEDREZ

let tamaño = 8
let tabla = "";

for (let row = 1; row <= tamaño; row++) { //SALTA DE FILA
    
    for (let column = 1; column <= tamaño; column++) { //CREA LA FILA
        
        if((column + row) % 2 === 0){
            tabla += " "
        }
        else{
            tabla += "#"
        }
    }

    tabla += "\n"
}
console.log(tabla)

*/
/*

// RECURSIVIDAD

function encontrarSolucion(objetivo){
    function encontrar(actual , historia){
        if(actual == objetivo){
            return historia
        }
    
        else if(actual > objetivo){
            return null;
        }
        
        else{
            return encontrar(actual + 5, `(${historia} + 5)`) || encontrar(actual * 3, `(${historia} * 3)`)
        }
    }
    return encontrar(1, "1");
    
}

console.log(encontrarSolucion(24))
*/

/*
function imprimir(n_vacas, n_pollos){

    let string_vaca = String(n_vacas)

    while(string_vaca.length < 3){
        string_vaca = "0" + string_vaca
    }

    console.log(`${string_vaca} Vacas`)
    
    let string_pollo = String(n_pollos)

    while(string_pollo.length < 3){
        string_pollo = "0" + string_pollo
    }

    console.log(`${string_pollo} Pollos`)
}

imprimir(7, 11)
*/

/*
//MÍNIMO

function min(a, b){
    if(a > b){
        console.log("El número menor es:" , b)
    }
    else if(a = b){
        console.log("Los números son iguales.")
    }
    else{
        console.log("El número menor es:" , a)
    }
}

min(50, 7)

*/

/*

//RECURSIÓN

function esPar(num){

    if(num % 2 == 0 || num == 0){
        console.log("El número es par: " + num)
    }

    else if(num % 3 == 0 || num == 1){
        console.log("El número es impar: " + num)
        
    }

    else{
        console.log(String("Número en recursión: " + num));
        return esPar(num - 2)
    }
}

esPar(10)

*/

/*Devuelve el valor del caracter en la ubicación pedida string[N]
let saludo = "HOLA, COMO ESTAS?"


console.log(saludo[1])

*/


/*
//Conteo de Frijoles

function contarFs(string, caracter){

    let contador_F = 0
    let contador_caracteres = 0

    console.log(string)

    for (let i = 0; i < string.length; i++) {

        if(string[i] == "F"){
            contador_F+= 1
        }
    }

    for (let i = 0; i < string.length; i++) {

        if(string[i] == caracter){
            contador_caracteres += 1
        }
    }

    console.log("CONTADOR DE F: " + contador_F)
    console.log("CONTADOR DE CARACTERES: " + contador_caracteres)

}

contarFs("Fabrica de alfajor: ALFAJORES JORGITO" , "A")


*/

/*
//LA SUMA DE UN RANGO

let array_contenedor = []

function rango(a, b, valor_paso){

    if(valor_paso == undefined){
        for (let i = a; i <= b; i++) {
            array_contenedor.push(i)
            }
    }

    else{
        for (let i = a; i <= b; i = (i + valor_paso)) {   
            array_contenedor.push(i)
            }
    }



    console.log(array_contenedor)
    suma();
}

rango(1, 10, 2);

let array_suma = []

function suma(){

    let resultado = 0

    for (let i = 0; i < array_contenedor.length; i++) {
        
        resultado += array_contenedor[i]

    }
    array_suma.push(resultado)

    console.log("CONTENEDOR: " + array_suma)
}

*/

/*
//REVIRTIENDO UN ARRAY


let array_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let array_invertido = []

function revertirArray(array){

console.log("ARRAY INICIAL" , array)

    console.log("LENGTH" , array_numeros.length)

    for (let i = array_numeros.length; i > 0; i--) {
        console.log(i)
        array_invertido.push(i)
    }
    

    

    console.log("ARRAY INVERTIDO" , array_invertido)
}

revertirArray(array_numeros)

*/

/*
//UNA LISTA

let lista;
let array = [] 

function arrayLista(a){

    for (let i = 1; i <= a; i++) {
        
        lista = {
            valor: i,
            rest: lista,
        }
        
    }
    console.log("LOCAL" , lista)
    listaAArray()
}

arrayLista(5);

*/

/*
//COMPARACIÓN PROFUNDA

let obj_a = {
    nombre: "Mario",
    apellido: "Bros",
}

let obj_b = {
    nombre: "Luigi",
    apellido: "Bros",    
}

function igualdadProfunda(a, b){

    for(let propiedades in a , b){
        
        if(a[propiedades] == b[propiedades]){
            console.log("Propiedad:", propiedades + "\n" + "Valores iguales:", a[propiedades] , "y" , b[propiedades])
            console.log()
            return true;
        }

    }

    if(typeof a == typeof b){
        console.log("Mismo tipo de dato.")
        return true;
    }

    else{
        console.log("No coincide ni el dato, ni el tipo de dato.");
        return false
    }

}

console.log(igualdadProfunda(obj_a , obj_b))

*/
/*
let array = ["Matias", "Juan", "Raul", "Romina", "Maximiliano", "Tomas"]

for (let i = array.length-1; i >= 0; i--) {
    console.log(array[i] , i)
}

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
*/

/*
//APLANAMIENTO

let string = "Hola, cómo estas?"
let array = [[1, 2, 3] , [4, 5, 3] , [6]]

let array_reduce = array.reduce((a , b) => a.concat(b) , [])

console.log("ARRAY" , array_reduce)

*/


//TU PROPIO CICLO

// for (let i = 1; i <= 5; i++) {
//     console.log("FOR" , i)
// }


let array = [1, 2, 3 , 4, 5, 3 , 6,]

// console.log(array.every(numero =>{
//     if(typeof numero == "number"){
//         return true
//     }
//     else{
//         return false
//     }
// }))

/*
//METODOS

let nombre = prompt("Ingrese un nombre.")
let apellido = prompt("Ingrese un apellido.")

let nombres = {nombre: nombre, apellido: apellido , hablar}

function hablar(linea){
    console.log(`Hola ${this.nombre} ${this.apellido}. ¿Cómo estás?. ${linea} `)
}

nombres.hablar("Mucho gusto en conocerte.")

console.log(nombres.hablar())
*/

/*
//CLASES

class Conejo {
    constructor(nombre, apellido, edad, color){
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.color = color
    }

    hablar(){
        console.log(`El conejo ${this.nombre} ${this.apellido} tiene ${this.edad} años.`)
    }
}
Conejo.prototype.color = "Rojo"
let conejo_uno = new Conejo("Martin", "Morales", 23, "azul")
let conejo_dos = new Conejo("Raúl", "Portal", 39, "verde")



conejo_uno.get(color)

let edades = new Map()

edades.set("Maxi", 29)
edades.set("Eloy" , 40)

console.log(edades.size)

*/

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
    console.log(captcha)
    html_captcha.innerText = `${captcha}`

}

caracter_al_azar(5);


let input_captcha = document.getElementById("input_captcha")

input_captcha.addEventListener("keyup" , function(e){
    let respuesta = e.target.value;
    console.log(respuesta)

    if(respuesta == captcha){
        sonido_correcto.play()
        html_captcha.innerHTML = `¡Eres humano<img src="./multimedia/./mario.gif" alt="" class="mario">!`
    }
    if(respuesta.length > 4){
        if(respuesta != captcha){
            sonido_error.play()
            html_captcha.innerText = `¡Maldito Robot!`
            setTimeout(recargar , 2000)
        }
    }
})

function recargar(){
    location.reload()
}

