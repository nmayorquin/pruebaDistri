/*var hola = "hola mundo";
console.log(hola);*/


//TALLER 1 - TALLER 1 - TALLER 1 - TALLER 1  -DEFINA DOS VARIABLES E IMPRIMA POR CONSOLA

/*var nombre = "Natalia";
var edad = 33;

console.log(nombre + " " + edad);*/


//TALLER 2 - TALLER 2 - TALLER 2 - TALLER 2

//DEFINA DOS VARIABLES GLOBALES: NOMBRE Y APELLIDO
//DEFINA EN BLOQUE DOS VARIABLES LOCALES: EDAD Y COMIDA
/*
var nombre1= "Natalia";
var apellido = "Mayorquin";
console.log(nombre1, apellido); //RESULTADO: natalia mayorquin

let edad = 33;
let comida = "ajiaco";

console.log(edad, comida); //RESULTADO: 33 ajiaco

{
    var edad1 = 30;
    let comida = "pizza";

    console.log(edad1, comida)  //RESULTADO: 30 pizza
}

console.log(edad1, comida) *///RESULTADO: 30 ajiaco 

//scope: si la variable var local es definida con un mismo nombre que la global , toma a la local, pero si no existe la local toma la global. de adentro hacia afuera. LO QUE MANEJO DENTRO DEL BLOQUE SE IMPRIME COMO ESTÁ DENTRO DEL BLOQUE PERO LET RECUPERA EL VALOR FUERA DEL BLOQUE

//TALLER 3 - TALLER 3 - TALLER 3 -TALLER 3 -TALLER 3 -

//DEFINA 3 CONSTANTES: EL NUMERO DE SEGUNDOS EN U MINUTO, EL NUMERO DE MINUTOS EN UNA HORA Y NUMERO DE HORAS EN UN DÍA

/*const segPorMin = 60;
const minPorHora = 60;
const horasPorDia = 24;

console.log(`un minuto tiene ${segPorMin} segundos, una hora tiene ${minPorHora} minutos y un día tiene ${horasPorDia} horas`); *///RESULTADO: un minuto tiene 60 segundos, una hora tiene 60 minutos y un dia tiene 24 horas

//TALLER 4 - TALLER 4 - TALLER 4 - TALLER 4 - TALLER 4 -

//TENGA VARIABLES QUE GUARDEN LOS SIGUIENTES DATOS: nombre, apellido, edad, canción
//EN LA RESPUESTA SE DEBE RECIBIR UN TRUE O FALSE DEPENDIENDO SI ENTENDIÓ EL TEMA DE LOS TIPOS DE DATOS DE JS
/*
let nombre= "Natalia";
let apellido = "Mayorquin";
let edad = 33;
let song = "ajiaco";
let entiende = true;

console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años y la respuesta es ${entiende}`); */   //RESULTADO: mi nombre es natalia mayorquin y tengo 33 años y la respuesta es true

//TALLER 5 - TALLER 5 - TALLER 5 - TALLER 5 - TALLER 5 -
//CREAR 3 VARIABLES Y REALIZAR LAS SIGUIENTES OPERACIONES. (a*b)/c, (b+c)*a Y  .(a/b)-(a+c)
//REALICE UN CÓDIGO DONDE SE USE MÓDULO
//Según el código investigue si es posible realizar un incremento de más de una unidad. Si es posible realice un código de demostración.
//Realice un código que realice una tabla de verdad de AND y OR dadas dos variables booleanas.

let a = 5;
let b = 6;
let c = 7;

let ejercicio1 = (a*b)/c;
let ejercicio2 = (b+c)*a;
let ejercicio3 = (a/b)-(a+c);

console.log(ejercicio1);
console.log(ejercicio2);
console.log(ejercicio3);

//MODULO: IMPRIMA EL RESIDUO DE 