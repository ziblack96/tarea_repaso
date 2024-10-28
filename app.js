/*  Ejercicio Practicos */
/*  Aplicaciones Matemáticas en Node.js */


/* 1. Serie de Fibonacci*/

function fibonacci(n) 
{
    /* Caso base: si n es 0 o 1, devuelve n*/
    if (n < 2) return n;
    
    /* Retorna la suma de los dos términos anteriores*/
    return fibonacci(n - 2) + fibonacci(n - 1);
}

const n = 10;
console.log(`El número Fibonacci en la posición ${n} es: ${fibonacci(n)}`);


/* 2. Calculo del Factorial */

function factorial(n){
/* Caso base: si n es 0 o 1, devuelve n*/

    if (n===1){
        return 1;
    } else {
       
        for (let i=1; i<=n; i++){
          return n * factorial(n-1);
        }            

    } 
              }

function imprimir(n){

    for (let i=1; i<=n; i++){

        console.log(`factotrial ${i}: ${factorial(i)}`);

    }

}

let valorfor = 8;

if (valorfor> 1){
    imprimir(valorfor);
}else{
    console.log('Ingrese un valor mayor a 1');
}


/* 3. Verificacion de Numeros Primos*/

function primos(numero){

    /* los numeros menores que 2, no son primos */

    if (numero < 2){
        return false;
    }

    /*este ciclo verifica que el numero ingresado es divisible por algun numero entre 2 y el numero anterior a el mismo,
    ya sabemos que todos numero es divisible entre 1 el mismo pero si encontramos en el ciclo un divisor igual a 0 no es primo */
  
    let acum = 0;
    for(let i=2; i < numero; i++ ){

        if(numero % i === 0){
            acum ++;           
        }
    }   
    
    if (acum>0){
        return false;

    }else{
        return true;
    }
    

}

let num = 19;

if (primos(num)){
    console.log('es numero primo');
}else{
    console.log('no es numero primo');
}
