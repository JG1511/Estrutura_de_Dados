// function soma(n: number) : number{
//     if (n == 1){
//         return 1;
//     }else{
//         return n + soma(n - 1)
//     }
// }

// console.log(soma(5))

// function fatorial(n : number) : number{
//     if(n == 1 || n == 0){
//         return 1; // caso base
//     }else{
//         return n * fatorial(n-1); // recursividade 
//     }
// }

// console.log(fatorial(1))

function somaVetor(...lista: number[]) : number{
    if(lista.length === 0){
        return 0
    }else{
        return lista[0] + somaVetor(...lista.slice(1)) // slice cria uma nova lista sem o primeiro elemento, fazendo isso todas as vezes
    }
}

console.log(somaVetor(1,2,3,4,5));