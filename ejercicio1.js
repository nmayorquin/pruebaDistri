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


/*let a = 5;
let b = 6;
let c = 7;

let ejercicio1 = (a*b)/c;
let ejercicio2 = (b+c)*a;
let ejercicio3 = (a/b)-(a+c);

console.log(ejercicio1);
console.log(ejercicio2);
console.log(ejercicio3);

//REALICE UN CÓDIGO DONDE SE USE MÓDULO
let modulo = a%b;
console.log(modulo);*/

//Según el código investigue si es posible realizar un incremento de más de una unidad. Si es posible realice un código de demostración.
/* 
    console.log(modulo+=2);
*/

//Realice un código que realice una tabla de verdad de AND y OR dadas dos variables booleanas.


//TALLER 6  -TALLER 6 - TALLER 6  -TALLER 6 - TALLER 6  -TALLER 6 - TALLER 6  -TALLER 6 - 

//r haga un código que dados tres números, evalúe cual es el número mayor. Imprimalos en consola ordenados.

/*let numero1 = 10;
let numero2 = 12;
let numero3 = 15;

let mayor, medio, menor;

if (numero3>numero1 && numero2<numero3){
    console.log("el número", numero3, "es mayor que el número", numero1, "y el número", numero2);
}*/

//Haga un código que evalúe si un número es par o impar

/*Realice un código que resuelva el siguiente planeamiento:
a. Una tienda comenzó una oferta para ventas al
i.20% Para compras mayores a 10 docenas.
ii.15% Para compras mayores o iguales a 5 docenas.
iii.10% Para compras mayores a 1 docena.
Se desea determinar cuál es descuento dado una cantidad de decenas que se van a
comprar. Imprima tambien cual es el valor de la compra si cada docena cuesta 60.000*/


//CLASE 19 DE ABRIL POO
/*haga un código que:
a. Tenga un objeto carro con las siguientes propiedades:
i.Marca.
ii.Modelo.
iii.Año.
iv.Color.
b. Agregue al objeto carro la función de descripción en la cual imprima lo siguiente:
“Hola! Mi marca es marca, soy modelo modelo año y mi color es color”
c. Imprima por consola cada una de las propiedades y funciones.*/
/*
class Carro{
   constructor(marca, modelo, year, color,){
        this.marca= marca;
        this.modelo = modelo;
        this.year = year;
        this.color= color;
   }

       
        imprimir(){
            return console.log("Hola! Mi marca es " + this.marca + " ,soy modelo " + this.modelo + " el año" + this.year + " y mi color es " + this.color);
        }
    };
     const carro = new Carro("fiat", "2007", "2007", "naranja");
    return carro.imprimir();
*/

//CLASE 20 DE ABRIL 



//CLASE 26 DE ABRIL // PROGRAMACIÓN AVANZADA II
/*const email = "naty@gmail.com";
const email2 ="holi";
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validarEmail1 = regex.test(email);
const validarEmail2 = regex.test(email2);
console.log(validarEmail1);
console.log(validarEmail2);*/


//CLASE 27 DE ABRIL DE OBJETO A JSON-DE ------- JSON A OBJETO

//TALLER 1   TALLER 1 TALLER 1 TALLER 1 TALLER 1
/*haga un JSON información que contenga la siguiente información:
1. Nombre
2. Apellido
3. Edad
4. Hobbies guardados en un arreglo.
5. Objeto Contacto con la siguiente información:
1. Correo
2. Objeto Teléfono
1.Teléfono celular
2.Teléfono fijo.
3. Dirección*/

/*const datosJson={
    "name": "nata",
    "lastName": "mayor",
    "age": 39,
    "hobbies": ["patinar", "programar", "caminar con perros"],
    "contacto": {
        "tel": 123456,
        "email": "naty@gmail.com,"
    },
    "telefono": {
        "celular": 57123456,
        "fijo": 601123456,
        "adress": "cll pepito con carrera pepito",
    }
}
*/
/*Realice un JSON para el siguiente planteamiento:
En una tienda se tienen productos de aseo, alimentos y bebidas. Cada producto vendido en la tienda cuenta con las siguientes propiedades:
a. Nombre
b. Marca
c. Valor
1. Valor de compra
2. Valor de venta
d. Tipo (aseo, alimento, bebida)
e. Inventario
Para los siguientes productos crear un fichero JSON que represente esta información relativa a los productos que ofrece la tienda.
a. Arroz, Diana
b. Jabon, Ariel
c. Detergente, Suavitel
d. Gaseosa, Coca-Cola
e. Aceite, Gourmet
f. Galletas, Festival
g. Cerveza, Poker
h. Crema dental, Colgate*/


const tienda={
    "comida":[{
        objeto1:{
            "name": "arroz",
            "marca": "diana",
            "valor": 2000,
            "valorCompra": 1500,
            "valorVenta": 2500,
            "tipo": "alimento",
            "inventario":10,
        },
        objeto2:{
            "name": "aceite",
            "marca": "Gourmet",
            "valor": 5000,
            "valorCompra": 4500,
            "valorVenta": 6000,
            "tipo": "alimento",
            "inventario":5
        },
        objeto3:{
            "name": "galletas",
            "marca": "festival",
            "valor": 1000,
            "valorCompra": 500,
            "valorVenta": 200,
            "tipo": "alimento",
            "inventario":4
        }
    }],
    "aseo":[{
        objeto1:{
            "name": "jabón",
            "marca": "ariel",
            "valor": 10000,
            "valorCompra": 8000,
            "valorVenta": 13000,
            "tipo": "aseo",
            "inventario":2,
        },
        objeto2:{
            "name": "detergente",
            "marca": "suavitel",
            "valor": 5000,
            "valorCompra": 4500,
            "valorVenta": 6000,
            "tipo": "aseo",
            "inventario":5
        },
        objeto3:{
            "name": "crema dental",
            "marca": "colgate",
            "valor": 1500,
            "valorCompra": 1000,
            "valorVenta": 3000,
            "tipo": "aseo",
            "inventario":2
        }
    }],
    
    "bebida":[{
        objeto1:{
            "name": "gaseosa",
            "marca": "coca-cola",
            "valor": 5000,
            "valorCompra": 4000,
            "valorVenta": 6000,
            "tipo": "bebida",
            "inventario":10,
        },
        objeto2:{
            "name": "cerveza",
            "marca": "poker",
            "valor": 3000,
            "valorCompra": 2000,
            "valorVenta": 5000,
            "tipo": "bebida",
            "inventario":5
        }
    }],
}

console.log(tienda)
console.log(tienda.aseo)
console.log(tienda.bebida)
console.log(tienda.comida)
//TALLER 2   TALLER 2 TALLER 2 TALLER 2 TALLER 2