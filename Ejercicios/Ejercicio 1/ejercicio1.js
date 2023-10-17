
function calcular(){

    //leo primero los valores de las variables introducidas
    
    let propina = parseFloat(document.getElementById("propina").value);
    let total = parseFloat(document.getElementById("total").value);

    //creo la variable que almacenará la operación

    let resultado = (total*propina)/100;

    /*para introducir el valor de resultado en el cuadro de texto que he creado, lo leo primero, y para que no me aparezca NaN antes de que se haga la operación pongo un condicional que me compruebe si NaN, cuando NaN me de falso, entonces me escribirá el resultado, mientras de verdadero no habrá nada en el cuadro de texto*/

    let calculo = document.getElementById("calculo");

    if (isNaN(calculo.value = resultado)){
        return " ";
    } else {
        return calculo.value = resultado;
    }
    
    
    
}
