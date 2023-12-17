const LIMITE_ELEMENTOS = 100;
const LONGITUD_ARRAY = 15;

function generadorArray(a){

    for(let i=0;i<LONGITUD_ARRAY;i++){

        a.push(Math.floor(Math.random()*LIMITE_ELEMENTOS));

    }
}

function generarNuevoArr(a1, a2){
    let a3 = a1.concat(a2);
    let longitud = a3.length;
    let mapa = {};
    let nuevoArr = [];

    for(let i=0;i<longitud;i++){

        if(a3[i] in mapa){

            mapa[a3[i]] = true;

        } else {
            mapa[a3[i]] = false;
            nuevoArr.push(a3[i]);
        }


    }
    
    return nuevoArr.sort((a, b) => a - b);

}

function imprimir(a){

    a.forEach((e) => document.write(`${e} `));
}

let arr1 = [];
let arr2 = [];

generadorArray(arr1);
generadorArray(arr2);

//ordenar los arrays

arr1.sort((a, b) => a - b);
arr2.sort((a, b) => a - b);




document.write(`Los dos arrays originales: <br/>`);
imprimir(arr1);
document.write(`<br/><br/>`);
imprimir(arr2);
document.write(`<br/><br/>El nuevo array resultado de unir ambos y eliminar los repetidos: <br/>`);
imprimir(generarNuevoArr(arr1, arr2));

