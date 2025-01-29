//Array para armazenar os nomes
let amigos = [];

//Função de adicionar os nomes dos amigos na lista 
function adicionarAmigo() {
    let entrada = document.querySelector('input').value;

    if (entrada == '') {
        alert('Por Favor, insira um nome!');
    } else {
        amigos.push(entrada);
        document.querySelector('input').value = '';
    }

}

// Função usada para atualizar a lista de amigos
function atualizarAmigo() {

    for (let amigo in amigos) {
        let novoItem = document.createElement("li");
        novoItem.innerHTML = amigo;
        amigos.push(novoItem);
    }
}

// Função usada para sortiar um nome da lista de amigos
function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Necesario adicionar os nomes ante de sortear!');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `Amigo sortiado foi ${amigoSorteado}`;
    }

}