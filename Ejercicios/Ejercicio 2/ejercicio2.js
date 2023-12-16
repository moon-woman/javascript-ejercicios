//declaración de las variables para hacer las operaciones
let op1 = 0, op2 = 0, resul = 0, operacion;


//recojo los números y los operadores en un array

let numeros = document.querySelectorAll('.numeros');
let operadores = document.querySelectorAll('.operador');
// let flotante = document.getElementById("float");

let mostrar = document.getElementById("mostrar");
let limpiar = document.getElementById("limpiar");
let igual = document.getElementById("igual");



//que, cuando haga click, me escriba en el cuadro de texto o me resetee la calculadora

numeros.forEach(numero => {
    numero.addEventListener('click', function(e){
        mostrar.value += numero.value;
    });
});

operadores.forEach(ope => {
    ope.addEventListener('click', function(e){
        mostrar.value += ope.value;
    });
});

//funciones para suma, resta, multiplicación y división de enteros

function suma(){

    op1 = mostrar.value;
    operacion ="+";

}

function resta(){

    op1 = mostrar.value;
    operacion ="-";

}

function multi(){

    op1 = mostrar.value;
    operacion ="*";

}

function division(){

    op1 = mostrar.value;
    operacion ="/";

}


igual.onclick = function(){
    console.log("esto es op2" + mostrar.value);
    op2 = mostrar.value.split(operacion)[1];
    resolver();
}

//función para borrar

function borrar(){
    mostrar.value = "";
}

//funcion para resetear

function reset(){
    mostrar.value = "";
    op1 = 0;
    op2 = 0;
    operacion = "";
}

//resolver la operación

function resolver(){

    switch(operacion){
        case "+":
            console.log(op1);
            console.log(op2);
            resul = parseFloat(op1) + parseFloat(op2);
            break;
        case "-":
            resul = parseFloat(op1) - parseFloat(op2);
            break;
        case "*":
            resul = parseFloat(op1) * parseFloat(op2);
            break;
        case "/":
            resul = parseFloat(op1) / parseFloat(op2);
            break;
    }
    
    reset();
    mostrar.value = resul;

}


