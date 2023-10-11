// window.onload = calcular;


function calcular(){
    
    let propina = parseFloat(document.getElementById("propina").value);
    let total = parseFloat(document.getElementById("total").value);


    let resultado = (total*propina)/100;

    let calculo = document.getElementById("calculo");

    if (isNaN(calculo.value = resultado)){
        return " ";
    } else {
        return calculo.value = resultado;
    }
    
    
    
}
