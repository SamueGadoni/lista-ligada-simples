function criarNo(dado) {
  return {
    dado: dado,
    proximo: null
  };
}

function criarLista() {
  return {
    inicio: null
  };
}

function listarTodos(lista) {
  let atual = lista.inicio;
  let posicao = 0;

  if (atual === null) {
    console.log("A lista está vazia.");
    return;
  }

  while (atual !== null) {
    console.log("[" + posicao + "] " + atual.dado);
    atual = atual.proximo;
    posicao = posicao + 1;
  }
}

function inserir(lista, dado) {
  const novo = criarNo(dado);

  if (lista.inicio === null) {
    lista.inicio = novo;
    return true;
  }

  let atual = lista.inicio;
  while (atual.proximo !== null) {
    atual = atual.proximo;
  }

  atual.proximo = novo;
  return lista;
}

function inserirNaPosicao(lista, dado, posicao) {

  const novo = criarNo(dado);

  if (posicao === 0) {
    novo.proximo = lista.inicio;
    lista.inicio = novo;
    return lista;
  }

  let atual = lista.inicio;
  let contador = 0;

  while (atual !== null && contador < posicao - 1) {
    atual = atual.proximo;
    contador = contador + 1;
  }

  if (atual === null) {
    console.log("posição maior que a lista")
    return false;
  }

  novo.proximo = atual.proximo;
  atual.proximo = novo;
  return true;
}

function menu(lista) {
  while (true) {
    console.log("=".repeat(50));
    console.log("LISTA LIGADA SIMPLES");
    console.log("[1] Listar todos");
    console.log("[2] Inserir no fim");
    console.log("[3] Inserir na posição");
    console.log("[4] Sair");
    console.log("=".repeat(50));

    let opcao = prompt("Digite a opção desejada:");
    opcao = parseInt(opcao, 10);

    switch (opcao) {
      case 1:
        listarTodos(lista);
        break;

      case 2:
        let itemFim = prompt("Qual valor deseja inserir?");
        inserir(lista, itemFim);
        break;

      case 3:
        let itemPos = prompt("Qual valor deseja inserir?");
        let pos = prompt("Em qual posição deseja inserir?");
        pos = parseInt(pos, 10);
        inserirNaPosicao(lista, itemPos, pos);
        break;

      case 4:
        console.log("Finalizando programa...");
        return;

      default:
        console.log("Digite uma opção válida...");
        break;
    }
  }
}

const lista = criarLista();
menu(lista);
