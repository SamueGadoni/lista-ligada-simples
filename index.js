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

function lerDado(mensagem) {
  const entrada = prompt(mensagem);
  if (entrada === null) {
    return null;
  }
  const dado = entrada.trim();
  if (dado === "") {
    console.log("O valor não pode ficar vazio.");
    return null;
  }
  return dado;
}

function lerPosicao(mensagem) {
  const entrada = prompt(mensagem + "\nAs posições começam em 0.");
  if (entrada === null) {
    return null;
  }
  const posicao = Number(entrada.trim());
  if (!Number.isInteger(posicao) || posicao < 0) {
    console.log("Informe uma posição inteira não negativa.");
    return null;
  }
  return posicao;
}

function listarTodos(lista) {
  let elementos = [];
  let atual = lista.inicio;
  let posicao = 0;

  if (atual === null) {
    console.log("A lista está vazia.");
    return elementos;
  }

  while (atual !== null) {
    console.log("[" + posicao + "] " + atual.dado);
    elementos.push(atual.dado);
    atual = atual.proximo;
    posicao++;
  }

  return elementos;
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
  return true;
}

function inserirNaPosicao(lista, dado, posicao) {
  if (!Number.isInteger(posicao) || posicao < 0) {
    return false;
  }

  const novo = criarNo(dado);

  if (posicao === 0) {
    novo.proximo = lista.inicio;
    lista.inicio = novo;
    return true;
  }

  let anterior = lista.inicio;
  let indice = 0;

  while (anterior !== null && indice < posicao - 1) {
    anterior = anterior.proximo;
    indice++;
  }

  if (anterior === null) {
    return false;
  }

  novo.proximo = anterior.proximo;
  anterior.proximo = novo;
  return true;
}

function menu(lista) {
  while (true) {
    const opcao = prompt(
      "LISTA LIGADA SIMPLES\n" +
      "[1] Listar todos\n" +
      "[2] Inserir no fim\n" +
      "[3] Inserir na posição\n" +
      "[4] Sair\n\n" +
      "Digite a opção desejada:"
    );

    if (opcao === null || opcao.trim() === "4") {
      console.log("Finalizando programa...");
      return;
    }

    switch (opcao.trim()) {
      case "1":
        listarTodos(lista);
        break;

      case "2": {
        const valor = lerDado("Qual valor deseja inserir?");
        if (valor !== null) {
          inserir(lista, valor);
        }
        break;
      }

      case "3": {
        const valor = lerDado("Qual valor deseja inserir?");
        if (valor !== null) {
          const pos = lerPosicao("Em qual posição deseja inserir?");
          if (pos !== null) {
            const inseriu = inserirNaPosicao(lista, valor, pos);
            if (!inseriu) {
              console.log("Posição inválida.");
            }
          }
        }
        break;
      }

      default:
        console.log("Opção inválida.");
        break;
    }
  }
}

const listaTeste = criarLista();
inserir(listaTeste, "Arroz");
inserir(listaTeste, "Feijão");
inserir(listaTeste, "Farinha");
console.table(listarTodos(listaTeste));

const listaPos = criarLista();
console.log(inserirNaPosicao(listaPos, "Arroz", 0));
console.log(inserirNaPosicao(listaPos, "Açúcar", 0));
console.log(inserirNaPosicao(listaPos, "Feijão", 1));
console.log(inserirNaPosicao(listaPos, "Farinha", 3));
console.log(inserirNaPosicao(listaPos, "Erro", -1));
console.log(inserirNaPosicao(listaPos, "Erro", 99));
console.log(inserirNaPosicao(listaPos, "Erro", 1.5));
listarTodos(listaPos);

const lista = criarLista();
menu(lista);
