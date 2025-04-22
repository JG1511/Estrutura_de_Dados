// function soma(n: number) : number{
//     if (n == 1){
//         return 1;
//     }else{
//         return n + soma(n - 1)
//     }
// }

// console.log(soma(5))

function fatorial(n : number) : number{
    if(n == 1 || n == 0){
        return 1; // caso base
    }else{
        return n * fatorial(n-1); // recursividade 
    }
}

console.log(fatorial(3))