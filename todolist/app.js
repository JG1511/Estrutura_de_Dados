"use strict";
const form = document.getElementById("cadastro_de_tarefa");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio do formulário
    adcionar_tarefa();
});
const barra_de_pesquisa = document.getElementById("barra_de_pesquisa");
const pesquisa = document.getElementById("pesquisa");
barra_de_pesquisa.addEventListener("submit", (event) => {
    event.preventDefault();
    const id_pesquisado = pesquisa.value;
    pesquisar_tarefa(Number(id_pesquisado));
});
const descricao_do_html = document.getElementById("descricao");
const data_do_html = document.getElementById("date");
const tabela = document.getElementById("lista_do_carlos_maia");
let id = 1;
const tarefas = new Map();
getLocalStorage();
function adcionar_tarefa() {
    const descricao_da_tarefa = descricao_do_html.value;
    const data_da_tarefa = new Date(data_do_html.value);
    const tarefa = { descricao: descricao_da_tarefa, data: data_da_tarefa };
    tarefas.set(id, tarefa);
    id++;
    Salvar_tarefas_no_localStorage();
    listar_tarefas();
    descricao_do_html.value = '';
    data_do_html.value = '';
}
function listar_tarefas() {
    tabela.innerHTML = '';
    for (let [chave, valor] of tarefas.entries()) {
        const dataFormatada = valor.data.toLocaleDateString();
        const tr = document.createElement('tr');
        const td_id = document.createElement('td');
        const td_descricao = document.createElement('td');
        const td_data = document.createElement('td');
        const td_excluir = document.createElement('td');
        td_id.textContent = String(chave);
        td_descricao.textContent = valor.descricao;
        td_data.textContent = dataFormatada;
        //Nesse caso, para poder excluir, será criado um botão de excluir para cada chave, como isso ele acaba lembrando qual é o ID
        const botao_excluir_tabela = document.createElement("button");
        botao_excluir_tabela.textContent = "Excluir";
        botao_excluir_tabela.addEventListener("click", (event) => {
            event.preventDefault();
            limpar_tarefa(chave);
        });
        td_excluir.appendChild(botao_excluir_tabela);
        tr.appendChild(td_id);
        tr.appendChild(td_descricao);
        tr.appendChild(td_data);
        tr.appendChild(td_excluir); // Adiciona o botão na linha
        tabela?.appendChild(tr);
    }
}
function limpar_tarefa(id) {
    tarefas.delete(id);
    Salvar_tarefas_no_localStorage();
    listar_tarefas();
}
function pesquisar_tarefa(id) {
    for (let [chave, valor] of tarefas.entries()) {
        const dataFormatada = valor.data.toLocaleDateString();
        let encontrado = false;
        if (chave === id) {
            alert(`ID ${chave}: ${valor.descricao} - ${dataFormatada} `);
            encontrado = true;
            break;
        }
        if (!encontrado) {
            alert('A tarefa não Foi encontrada ou não foi cadatrada ');
        }
    }
}
function Salvar_tarefas_no_localStorage() {
    const lista_de_tarefas = Array.from(tarefas.entries());
    localStorage.setItem("tarefas", JSON.stringify(lista_de_tarefas));
}
function getLocalStorage() {
    const dados = localStorage.getItem("tarefas");
    if (dados) {
        // Aqui, convertemos a lista de tarefas para o formato correto
        const lista = JSON.parse(dados);
        // Limpamos o mapa de tarefas antes de preenchê-lo novamente
        tarefas.clear();
        for (const [chave, tarefa] of lista) {
            tarefa.data = new Date(tarefa.data);
            tarefas.set(chave, tarefa);
            if (chave >= id)
                id = chave + 1;
        }
    }
    listar_tarefas();
}
// Teste para demonstar a lista no html
// const lista = document.getElementById("lista")
// const casa : string [] = ['casa','aprtamento','rua']
// function listar_tarefas(){
//     for(let nome of casa){
//         const li = document.createElement("li")
//         li.textContent = nome
//         lista?.appendChild(li)
//     }
// }
// listar_tarefas()
