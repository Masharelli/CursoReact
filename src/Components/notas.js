//Es una funcion normal
function mi_function(){
    return material.lenght;
}

//Arrow function
// Cuando es solo una linea no necesitamos usar llaves ni return
const mi_funcion = ()  => material.lenght + 1  ;

//Aqui es la misma arrow function solo que con mas lineas por lo tanto tienes que agregar llaves y un return.
const mi_funcion = () => {
    var uno = 1;
    return material.lenght + uno;
};

//Usamos la arrowFunction
console.log(mi_funcion());

//Destructuring simplificacion de propiedades

const {name,nick} = obj;

name

//Destructuring de arrays

const myArray = ['a','b'];

const [x,y] = myArray;

//Se puede usar con let, const y var en JavaScript

/*El destructuring se puede anidar, de manera que se puee hacer
destructuring objetos, cuando se hace destructuring sobre un objeto no es necesario
tomar todas las propiedades del objeto solo las que necesitamos
*/

const source = {x: 7, y:8};

/*
En el destructuring de arrays se puede utilizar 'elision'
De esa forma se pueden omitir uno o mas elementos de determinada posicion del array
*/

const [, , x, y] = ['a','b','c','d'];

/* 
    Tambien se puede utilizar el 'rest operator' en conjuncion con destructuring para extrarer los 
    elementos remanente, los elementos que queden, despues de tomar los primeros identificados. una
    aclaracion: este tipo de operador con tres puntos, se parece al "spread operator" pero con funcion
    diferente.
*/

const [x, ...y] = ["a", 'b', 'c'];

  //  x = a and y = ['b','c'];