// Implementa una función que tome un array y devuelva el subarray más largo con la suma máxima de sus elementos. 
// Asegúrate de que la función maneje eficientemente los casos con números negativos

function imprimir(a){
    for (let i = 0; i < a.length; i++){
        if(i < a.length-1){

            document.write(`${a[i]} - `);
        } else {

            document.write(`${a[i]}`);

        }
    }
}

let miArr = [
    42,
    [1, 2, 3, 74, 12],
    7,
    [8, 9],
    15,
    [11, 22, 33, 3, 1, 867, 2, 3],
    [4, 5],
    10
  ];

  let mayorLong = 0;
  let resul = 0;
  let mayorArray = [];

  for (let fila of miArr){
    let suma = 0;
    if(Array.isArray(fila)){
        if(fila.length>mayorLong){
            mayorLong = fila.length;
            for (let filaInt of fila){
                suma += filaInt;
                resul = suma;
                mayorArray.push(filaInt);
            }

        }
    }

  }

  document.write(`El mayor subarray es: `);

  imprimir(mayorArray);

  document.write(` con una longitud de ${mayorLong} y la suma de sus elementos es ${resul}`);
  