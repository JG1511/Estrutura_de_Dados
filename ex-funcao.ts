function mostar_o_maior_valor(...lista: number[]): number {

    let maior = lista[0]

    if (maior === null) {
        console.log("Lista vazia")
    } else {

        for (let i = 1; i < lista.length; i++) {
            if (lista [i] > maior) {
                maior = lista[i];
            }
        }
    }
    return maior;
}

console.log(mostar_o_maior_valor(200, 2, 10, 4, 5, 6, 7, 8, 9))