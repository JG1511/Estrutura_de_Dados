//Calculo de Fatorial

// function fatorial(n : number) : number{
//     if(n == 1 || n == 0){
//         return 1; // caso base
//     }else{
//         return n * fatorial(n-1); // recursividade 
//     }
// }

// console.log(fatorial(1))

// Soma de um Vetor
// function somaVetor(...lista: number[]) : number{
//     if(lista.length === 0){
//         return 0
//     }else{
//         return lista[0] + somaVetor(...lista.slice(1)) // slice cria uma nova lista sem o primeiro elemento, fazendo isso todas as vezes
//     }
// }

// console.log(somaVetor(1,2,3,4,5));

// Sequencia de Fibonacci

function fibonacci(n : number) : number{
    
    if( n ===0 ) return 0
    if( n === 1){
        return 1
    }else{
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

console.log(fibonacci(4))