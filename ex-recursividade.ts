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

// Sequencia de Fibonacci com probelma de stack 

// function fibonacci(n : number) : number{
    
//     if( n ===0 ) return 0
//     if( n === 1){
//         return 1
//     }else{
//         return fibonacci(n - 1) + fibonacci(n - 2)
//     }
// }

// console.log(fibonacci(4))

//Sequencia de Fibonacci interativa 

// const memorizacao : Record<number,number> = {}; // vai armazenar os valores já calculados pela sequencia

// function fibonacci( n : number) : number{
//     if(n === 0) return 0;
//     if(n === 1) return 1;
//     if(memorizacao[n]) return memorizacao [n]; // se o valor já exite, esse if ele retorna o valor sem precisar calcular novamente

//     memorizacao[n] = fibonacci(n - 1) + fibonacci(n - 2);
//     return memorizacao[n];
   
// }

// console.log(fibonacci(4))

//Sequencia de Fibonacci interativa com o Map

// function fibonacci( n : number, memorizacao : Map <number, number> = new Map() ): number{
//     if(n === 0) return 0;
//     if(n === 1) return 1;

//     if(memorizacao.has(n)) return memorizacao.get(n)!; // verifica se já exite e retorna sem precisar calcular novamente

//     const resultado  = fibonacci(n - 1, memorizacao) + fibonacci(n - 2, memorizacao);
     
//     return resultado;
    
// }

function hanoi(n : number, origem : string, destino : string, auxiliar: string){
    if(n === 1){
        console.log(`Mover disco 1 de ${origem} para ${destino}`);
        return;
    }
    hanoi(n-1,origem,auxiliar,destino);
    console.log(`Mover disco ${n} de ${origem} para ${destino}`);
    hanoi(n-1,auxiliar,destino,origem);
}

