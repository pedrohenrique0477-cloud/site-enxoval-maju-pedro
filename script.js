const WHATSAPP = "https://wa.me/5516994507580";

const CHAVE_PIX = "16994507580";
const NOME_RECEBEDOR = "Pedro Henrique Casalli";

const LINK_CARTAO_MERCADO_PAGO = "https://link.mercadopago.com.br/presentemajuepedro";

const DATA_EVENTO = new Date("2026-09-13T12:00:00");

let carrinho = JSON.parse(localStorage.getItem("carrinhoMajuPedro")) || [];
let formaPagamento = "pix";

const categorias = [
  {
    nome: "Cozinha",
    itens: [
      {
        id: 1,
        nome: "Kit de utensílios para o chef de miojo evoluir",
        preco: 49.90,
        imagem: "kitutensilios.jpg"
      },
      {
        id: 2,
        nome: "Panos de prato que prometem não virar pano de chão",
        preco: 43.90,
        imagem: "kitpanosdeprato.jpg"
      },
      {
        id: 3,
        nome: "Potes para a geladeira fingir que é organizada",
        preco: 59.90,
        imagem: "jogopotes.jpg"
      },
      {
        id: 4,
        nome: "Escorredor para a louça parar de fazer acampamento na pia",
        preco: 67.90,
        imagem: "escorredorpratos.jpg"
      },
      {
        id: 5,
        nome: "Jogo de copos para receber visita sem usar copo de requeijão",
        preco: 74.90,
        imagem: "jogocopos.jpg"
      },
      {
        id: 6,
        nome: "Panela de arroz para ninguém errar o ponto no primeiro almoço",
        preco: 119.90,
        imagem: "panelaarroz.jpg"
      },
      {
        id: 7,
        nome: "Organizador de temperos para a comida sair com personalidade",
        preco: 54.90,
        imagem: "organizadortemperos.jpg"
      }
    ]
  },
  {
    nome: "Sala",
    itens: [
      {
        id: 8,
        nome: "Tapete de entrada para a casa já chegar causando boa impressão",
        preco: 48.90,
        imagem: "tapeteentrada.jpg"
      },
      {
        id: 9,
        nome: "Porta-retrato para provar que a gente já era bonito antes da casa",
        preco: 44.90,
        imagem: "portaretrato.jpg"
      },
      {
        id: 10,
        nome: "Almofadas fofinhas para a soneca render mais que a série",
        preco: 89.90,
        imagem: "almofadas.jpg"
      },
      {
        id: 11,
        nome: "Manta para o sofá ficar bonito igual foto de Pinterest",
        preco: 79.90,
        imagem: "mantasofa.jpg"
      },
      {
        id: 12,
        nome: "Cortina para a sala ficar elegante e os vizinhos saberem menos",
        preco: 129.90,
        imagem: "cortinasala.jpg"
      },
      {
        id: 13,
        nome: "Luminária para deixar a sala bonita até quando a conta de luz vier",
        preco: 99.90,
        imagem: "luminariasala.jpg"
      },
      {
        id: 14,
        nome: "Tela para as gatas não perderem nenhuma de suas 7 vidas",
        preco: 199.90,
        imagem: "telajanelassala.jpg"
      }
    ]
  },
  {
    nome: "Quarto",
    itens: [
      {
        id: 15,
        nome: "Fronhas macias para acordar bonito, ou pelo menos tentar",
        preco: 52.90,
        imagem: "jogofronhas.jpg"
      },
      {
        id: 16,
        nome: "Cabides para cada um parar de roubar o do outro",
        preco: 46.90,
        imagem: "kitcabides.jpg"
      },
      {
        id: 17,
        nome: "Difusor para o quarto ficar cheiroso igual casa de gente chique",
        preco: 56.90,
        imagem: "difusor.jpg"
      },
      {
        id: 18,
        nome: "Abajur para ler antes de dormir e apagar depois de duas páginas",
        preco: 92.90,
        imagem: "abajur.jpg"
      },
      {
  id: 19,
  nome: "Ventilador para salvar as noites quentes e os cobertores briguentos",
  preco: 179.90,
  imagem: "ventilador.jpg"
},
{
  id: 31,
  nome: "Cobertor para ela dormir sempre coberta de razão",
  preco: 139.90,
  imagem: "cobertor.jpg"
}
    ]
  },
  {
    nome: "Banheiro",
    itens: [
      {
        id: 20,
        nome: "Kit de toalhas para sair do banho parecendo gente fina",
        preco: 87.90,
        imagem: "kittoalhas.jpg"
      },
      {
        id: 21,
        nome: "Tapete antiderrapante para ninguém estrear a casa escorregando",
        preco: 57.90,
        imagem: "tapetebanheiro.jpg"
      },
      {
        id: 22,
        nome: "Kit de pia para organizar a escova, o sabonete e a vida",
        preco: 51.90,
        imagem: "kitbanheiro.jpg"
      },
      {
        id: 23,
        nome: "Cesto de roupa suja para fingir que está tudo sob controle",
        preco: 72.90,
        imagem: "cestoroupa.jpg"
      },
      {
        id: 24,
        nome: "Espelho para conferir se o noivado está fazendo bem",
        preco: 124.90,
        imagem: "espelhobanheiro.jpg"
      }
    ]
  },
  {
    nome: "Área de serviço",
    itens: [
      {
        id: 25,
        nome: "Varal de apartamento para a roupa secar sem ocupar a casa toda",
        preco: 82.90,
        imagem: "varaldechao.jpg"
      },
      {
        id: 26,
        nome: "Ferro de passar para a roupa sair alinhada igual boleto vencendo",
        preco: 104.90,
        imagem: "ferrodepassar.jpg"
      },
      {
        id: 27,
        nome: "Mop para limpar a casa com cara de quem sabe o que está fazendo",
        preco: 69.90,
        imagem: "mop.jpg"
      },
      {
        id: 28,
        nome: "Aspirador de pó para sumir com a sujeira e com a desculpa",
        preco: 209.90,
        imagem: "aspiradordepo.jpg"
      },
      {
        id: 29,
        nome: "Organizador multiuso para esconder a baguncinha com elegância",
        preco: 94.90,
        imagem: "organizadormultiuso.jpg"
      },
      {
        id: 30,
        nome: "Ajuda para a lava e seca para a gente não ter que usar o seu",
        preco: 249.90,
        imagem: "lavaseca.jpg"
      }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  const chavePixElemento = document.getElementById("chavePix");
  const nomeRecebedorElemento = document.getElementById("nomeRecebedor");
  const linkCartaoElemento = document.getElementById("linkCartao");

  if (chavePixElemento) {
    chavePixElemento.textContent = CHAVE_PIX;
  }

  if (nomeRecebedorElemento) {
    nomeRecebedorElemento.textContent = NOME_RECEBEDOR;
  }

  if (linkCartaoElemento) {
    linkCartaoElemento.href = LINK_CARTAO_MERCADO_PAGO;
  }

  carregarPresentes();
  atualizarCarrinho();
  atualizarContador();

  setInterval(atualizarContador, 1000);
});

function mostrarPagina(pagina) {
  document.querySelectorAll(".pagina").forEach(secao => {
    secao.classList.remove("ativa");
  });

  const paginaSelecionada = document.getElementById(`pagina-${pagina}`);

  if (paginaSelecionada) {
    paginaSelecionada.classList.add("ativa");
  }

  if (pagina === "carrinho") {
    renderizarCarrinho();
  }

  if (pagina === "revisao") {
    renderizarRevisao();
  }

  if (pagina === "pagamento") {
    renderizarPagamento();
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  setTimeout(() => {
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }, 100);
}

function carregarPresentes() {
  const lista = document.getElementById("listaPresentes");

  if (!lista) return;

  lista.innerHTML = "";

  categorias.forEach(categoria => {
    const section = document.createElement("section");
    section.className = "categoria";

    const titulo = document.createElement("h3");
    titulo.textContent = categoria.nome;

    const grid = document.createElement("div");
    grid.className = "grid-presentes";

    categoria.itens.forEach(item => {
      const card = document.createElement("div");
      card.className = "card-presente";

      card.innerHTML = `
        <img src="./img/${item.imagem}" alt="${item.nome}">
        <h4>${item.nome}</h4>
        <p class="preco">${formatarMoeda(item.preco)}</p>
        <button onclick="comprarItem(${item.id})">Comprar</button>
      `;

      grid.appendChild(card);
    });

    section.appendChild(titulo);
    section.appendChild(grid);
    lista.appendChild(section);
  });
}

function comprarItem(id) {
  const item = buscarItem(id);

  if (!item) return;

  const itemNoCarrinho = carrinho.find(produto => produto.id === id);

  if (itemNoCarrinho) {
    itemNoCarrinho.quantidade += 1;
  } else {
    carrinho.push({
      ...item,
      quantidade: 1
    });
  }

  salvarCarrinho();
  atualizarCarrinho();
  mostrarPagina("carrinho");
}

function buscarItem(id) {
  for (const categoria of categorias) {
    const encontrado = categoria.itens.find(item => item.id === id);

    if (encontrado) {
      return encontrado;
    }
  }

  return null;
}

function renderizarCarrinho() {
  const area = document.getElementById("itensCarrinho");

  if (!area) return;

  if (carrinho.length === 0) {
    area.innerHTML = `
      <div class="revisao-linha">
        <span>Seu carrinho está vazio.</span>
        <strong>R$ 0,00</strong>
      </div>
    `;
  } else {
    area.innerHTML = carrinho.map(item => `
      <div class="item-carrinho">
        <img src="./img/${item.imagem}" alt="${item.nome}">

        <div>
          <h4>${item.nome}</h4>
          <p>${formatarMoeda(item.preco)}</p>
        </div>

        <div class="quantidade">
          <button onclick="alterarQuantidade(${item.id}, -1)">−</button>
          <input type="text" value="${item.quantidade}" readonly>
          <button onclick="alterarQuantidade(${item.id}, 1)">+</button>
          <button class="remover" onclick="removerItem(${item.id})">Remover</button>
        </div>
      </div>
    `).join("");
  }

  const total = calcularTotal();

  const valorCarrinho = document.getElementById("valorCarrinho");
  const totalCarrinho = document.getElementById("totalCarrinho");

  if (valorCarrinho) {
    valorCarrinho.textContent = formatarMoeda(total);
  }

  if (totalCarrinho) {
    totalCarrinho.textContent = formatarMoeda(total);
  }

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

function alterarQuantidade(id, valor) {
  const item = carrinho.find(produto => produto.id === id);

  if (!item) return;

  item.quantidade += valor;

  if (item.quantidade <= 0) {
    carrinho = carrinho.filter(produto => produto.id !== id);
  }

  salvarCarrinho();
  atualizarCarrinho();
  renderizarCarrinho();
}

function removerItem(id) {
  carrinho = carrinho.filter(item => item.id !== id);

  salvarCarrinho();
  atualizarCarrinho();
  renderizarCarrinho();
}

function irParaRevisao() {
  if (carrinho.length === 0) {
    alert("Escolha pelo menos um presentinho antes de continuar.");
    return;
  }

  mostrarPagina("revisao");
}

function renderizarRevisao() {
  const total = calcularTotal();

  const valorRevisao = document.getElementById("valorRevisao");
  const totalRevisao = document.getElementById("totalRevisao");
  const resumo = document.getElementById("resumoRevisao");

  if (valorRevisao) {
    valorRevisao.textContent = formatarMoeda(total);
  }

  if (totalRevisao) {
    totalRevisao.textContent = formatarMoeda(total);
  }

  if (resumo) {
    resumo.innerHTML = carrinho.map(item => `
      <p>
        <span>${item.quantidade}x ${item.nome}</span>
        <strong>${formatarMoeda(item.preco * item.quantidade)}</strong>
      </p>
    `).join("");
  }
}

function irParaPagamento() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  mostrarPagina("pagamento");
}

function renderizarPagamento() {
  const total = calcularTotal();

  const valorPagamento = document.getElementById("valorPagamento");

  if (valorPagamento) {
    valorPagamento.textContent = formatarMoeda(total);
  }

  selecionarPagamento(formaPagamento);
}

function selecionarPagamento(tipo) {
  formaPagamento = tipo;

  document.querySelectorAll(".opcao-pagamento").forEach(opcao => {
    opcao.classList.remove("ativa");

    const radio = opcao.querySelector("input");

    if (radio) {
      radio.checked = false;
    }
  });

  const opcoes = document.querySelectorAll(".opcao-pagamento");

  const formaSelecionada = document.getElementById("formaSelecionada");
  const textoInstrucaoPagamento = document.getElementById("textoInstrucaoPagamento");
  const areaPix = document.getElementById("areaPix");
  const areaCartao = document.getElementById("areaCartao");

  if (tipo === "pix") {
    if (opcoes[0]) {
      opcoes[0].classList.add("ativa");

      const radio = opcoes[0].querySelector("input");

      if (radio) {
        radio.checked = true;
      }
    }

    if (formaSelecionada) {
      formaSelecionada.textContent = "Pix";
    }

    if (textoInstrucaoPagamento) {
      textoInstrucaoPagamento.textContent = "Faça o Pix no valor de";
    }

    if (areaPix) {
      areaPix.classList.remove("escondido");
    }

    if (areaCartao) {
      areaCartao.classList.add("escondido");
    }
  }

  if (tipo === "cartao") {
    if (opcoes[1]) {
      opcoes[1].classList.add("ativa");

      const radio = opcoes[1].querySelector("input");

      if (radio) {
        radio.checked = true;
      }
    }

    if (formaSelecionada) {
      formaSelecionada.textContent = "Cartão";
    }

    if (textoInstrucaoPagamento) {
      textoInstrucaoPagamento.textContent = "Pague com cartão no valor de";
    }

    if (areaPix) {
      areaPix.classList.add("escondido");
    }

    if (areaCartao) {
      areaCartao.classList.remove("escondido");
    }
  }

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

function copiarPix() {
  navigator.clipboard.writeText(CHAVE_PIX)
    .then(() => {
      alert(
        "Chave Pix copiada!\n\n" +
        "Agora vá até o aplicativo do seu banco, escolha a opção Pix, cole a chave e faça o pagamento no valor mostrado aqui."
      );
    })
    .catch(() => {
      alert(
        "Não foi possível copiar automaticamente.\n\n" +
        "Copie a chave Pix manualmente e vá até o aplicativo do seu banco para fazer o pagamento."
      );
    });
}

function abrirMercadoPago(event) {
  if (event) {
    event.preventDefault();
  }

  const total = calcularTotal();

  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  alert(`No Mercado Pago, digite exatamente o valor: ${formatarMoeda(total)}`);

  window.open(LINK_CARTAO_MERCADO_PAGO, "_blank");
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  const total = calcularTotal();

  let forma = "Pix";

  if (formaPagamento === "cartao") {
    forma = "Cartão de crédito pelo Mercado Pago";
  }

  alert(
    `Compra finalizada!\n\n` +
    `Total: ${formatarMoeda(total)}\n` +
    `Forma de pagamento escolhida: ${forma}\n\n` +
    `Obrigado pelo carinho com o nosso Chá de Casa Nova!`
  );

  if (formaPagamento === "cartao") {
    const abrirPagamento = confirm(
      `Você escolheu cartão de crédito.\n\n` +
      `No Mercado Pago, digite exatamente o valor: ${formatarMoeda(total)}.\n\n` +
      `Deseja abrir o Mercado Pago agora?`
    );

    if (abrirPagamento) {
      window.open(LINK_CARTAO_MERCADO_PAGO, "_blank");
    }
  }

  const querEnviarMensagem = confirm(
    "Deseja enviar uma mensagem para Maju e Pedro avisando sobre o presente?"
  );

  if (querEnviarMensagem) {
    enviarMensagemCompra();
  }
}

function enviarMensagemCompra() {
  const total = calcularTotal();

  const listaItens = carrinho.map(item => {
    return `${item.quantidade}x ${item.nome} - ${formatarMoeda(item.preco * item.quantidade)}`;
  }).join("%0A");

  let forma = "Pix";

  if (formaPagamento === "cartao") {
    forma = "Cartão de crédito pelo Mercado Pago";
  }

  const mensagem =
    `Oi, Maju e Pedro!%0A%0A` +
    `Escolhi um presentinho do Chá de Casa Nova:%0A%0A` +
    `${listaItens}%0A%0A` +
    `Total: ${formatarMoeda(total)}%0A` +
    `Forma de pagamento escolhida: ${forma}%0A%0A` +
    `Finalizei pelo site.`;

  window.open(`${WHATSAPP}?text=${mensagem}`, "_blank");
}

function calcularTotal() {
  return carrinho.reduce((total, item) => {
    return total + item.preco * item.quantidade;
  }, 0);
}

function atualizarCarrinho() {
  const quantidade = carrinho.reduce((total, item) => {
    return total + item.quantidade;
  }, 0);

  const contador = document.getElementById("contadorCarrinho");

  if (!contador) return;

  contador.textContent = quantidade;

  if (quantidade > 0) {
    contador.style.display = "flex";
  } else {
    contador.style.display = "none";
  }
}

function salvarCarrinho() {
  localStorage.setItem("carrinhoMajuPedro", JSON.stringify(carrinho));
}

function atualizarContador() {
  const agora = new Date();
  const diferenca = DATA_EVENTO - agora;

  const diasElemento = document.getElementById("dias");
  const horasElemento = document.getElementById("horas");
  const minutosElemento = document.getElementById("minutos");
  const segundosElemento = document.getElementById("segundos");

  if (!diasElemento || !horasElemento || !minutosElemento || !segundosElemento) {
    return;
  }

  if (diferenca <= 0) {
    diasElemento.textContent = "00";
    horasElemento.textContent = "00";
    minutosElemento.textContent = "00";
    segundosElemento.textContent = "00";
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  diasElemento.textContent = String(dias).padStart(2, "0");
  horasElemento.textContent = String(horas).padStart(2, "0");
  minutosElemento.textContent = String(minutos).padStart(2, "0");
  segundosElemento.textContent = String(segundos).padStart(2, "0");
}

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}