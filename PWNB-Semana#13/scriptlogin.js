// Declaração de variáveis
let formCadastro = document.getElementById("form-cadastro");
let tabelaClientes = document.getElementById("tabela-clientes");

// Declare uma variável para gerar identificadores únicos
let nextClientId = 1;

// Função para obter a lista de clientes armazenados no localStorage
function obterClientesArmazenados() {
  const clientesArmazenados = localStorage.getItem("clientes");
  return clientesArmazenados ? JSON.parse(clientesArmazenados) : [];
}

// Função para salvar a lista atualizada de clientes no localStorage
function salvarClientesNoLocalStorage(clientes) {
  localStorage.setItem("clientes", JSON.stringify(clientes));
}

// Função para popular a tabela com os clientes armazenados no localStorage
function popularTabelaComClientesArmazenados() {
  const clientesArmazenados = obterClientesArmazenados();

  for (const cliente of clientesArmazenados) {
    let linha = document.createElement("tr");
    for (let propriedade in cliente) {
      let celula = document.createElement("td");
      celula.textContent = cliente[propriedade];
      linha.appendChild(celula);
    }

    // Crie uma célula para os botões de ação
    let acoesCell = document.createElement("td");

    // Crie o botão "Editar"
    let editarButton = document.createElement("button");
    editarButton.textContent = "Editar";
    // Adicione um evento de clique para o botão de edição (você pode adicionar sua lógica aqui)
    editarButton.addEventListener("click", function () {
      // Implemente a lógica de edição aqui
      alert("Botão Editar clicado para o cliente: " + cliente.nome);
    });
    acoesCell.appendChild(editarButton);

    // Crie o botão "Excluir"
    let excluirButton = document.createElement("button");
    excluirButton.textContent = "Excluir";
    // Adicione um evento de clique para o botão de exclusão (você pode adicionar sua lógica aqui)
    excluirButton.addEventListener("click", function () {
      // Implemente a lógica de exclusão aqui
      alert("Botão Excluir clicado para o cliente: " + cliente.nome);
    });
    acoesCell.appendChild(excluirButton);

    // Adicione a célula de ações à linha da tabela
    linha.appendChild(acoesCell);

    tabelaClientes.querySelector("tbody").appendChild(linha);
  }
}

// Popula a tabela com os clientes armazenados quando a página é carregada
document.addEventListener("DOMContentLoaded", function() {
  popularTabelaComClientesArmazenados();
});

// Declaração de funções
function validarCampos() {
  // Verifica se todos os campos obrigatórios estão preenchidos
  for (let i = 0; i < formCadastro.elements.length; i++) {
    let elemento = formCadastro.elements[i];
    if (elemento.required && elemento.value === "") {
      return false;
    }
  }

  // Valida o formato do CEP
  let cep = formCadastro.cep.value;
  if (!cep.match(/^[0-9]{8}-[0-9]{3}$/)) {
    return true;
  }

  return true;
}

function buscarEndereco(cep) {
  // Simula uma chamada ao banco de dados
  let endereco = {
    tipoLogradouro: "Rua",
    nomeLogradouro: "Rua das Flores"
  };

  return endereco;
}

function incluirCliente() {
  // Valida os campos do formulário
  if (!validarCampos()) {
    alert("Preencha todos os campos obrigatórios!");
    return;
  }

  // Captura os dados do formulário
  let nome = formCadastro.nome.value;
  let tipoCliente = formCadastro["tipo-cliente"].value;
  let sobrenome = formCadastro.sobrenome.value;
  let dataNascimento = formCadastro["data-nascimento"].value;
  let cep = formCadastro.cep.value;
  let cidade = formCadastro.cidade.value;
  let endereco = formCadastro.endereco.value;
  let numero = formCadastro.numero.value;

  // Busca o endereço a partir do CEP
  let enderecoInformado = buscarEndereco(cep);

  // Cria um objeto cliente
  let cliente = {
    nome,
    tipoCliente,
    sobrenome,
    dataNascimento,
    cep,
    cidade,
    endereco,
    numero
  };

  // Adiciona o cliente à tabela
  let linha = document.createElement("tr");
  for (let propriedade in cliente) {
    let celula = document.createElement("td");
    celula.textContent = cliente[propriedade];
    linha.appendChild(celula);
  }

  // Crie uma célula para os botões de ação
  let acoesCell = document.createElement("td");

  // Crie o botão "Editar"
  let editarButton = document.createElement("button");
  editarButton.textContent = "Editar";
  // Adicione um evento de clique para o botão de edição (você pode adicionar sua lógica aqui)
  editarButton.addEventListener("click", function () {
    // Implemente a lógica de edição aqui
    alert("Botão Editar clicado para o cliente: " + cliente.nome);
  });
  acoesCell.appendChild(editarButton);

  // Crie o botão "Excluir"
  let excluirButton = document.createElement("button");
  excluirButton.textContent = "Excluir";
  // Adicione um evento de clique para o botão de exclusão (você pode adicionar sua lógica aqui)
  excluirButton.addEventListener("click", function () {
    // Implemente a lógica de exclusão aqui
    alert("Botão Excluir clicado para o cliente: " + cliente.nome);
  });
  acoesCell.appendChild(excluirButton);

  // Adicione a célula de ações à linha da tabela
  linha.appendChild(acoesCell);

  tabelaClientes.querySelector("tbody").appendChild(linha);

  /// Limpa o formulário
  limparFormulario();

  // Obter a lista atual de clientes armazenados
  const clientesArmazenados = obterClientesArmazenados();

  // Adiciona o novo cliente à lista
  clientesArmazenados.push(cliente);

  // Salva a lista atualizada de clientes no localStorage
  salvarClientesNoLocalStorage(clientesArmazenados);
}

function limparFormulario() {
  formCadastro.reset();
}

// Eventos
formCadastro.addEventListener("submit", function(event) {
  event.preventDefault();
  incluirCliente();
});
