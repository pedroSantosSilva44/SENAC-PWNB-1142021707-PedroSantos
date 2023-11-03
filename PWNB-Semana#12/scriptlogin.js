// Declaração de variáveis
let formCadastro = document.getElementById("form-cadastro");
let tabelaClientes = document.getElementById("tabela-clientes");

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

// Declare uma variável para gerar identificadores únicos
let nextClientId = 1;

function incluirCliente() {
  // Valida os campos do formulário
  if (!validarCampos()) {
    alert("Preencha todos os campos obrigatórios!");
    return true;
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
}

function limparFormulario() {
  formCadastro.reset();
}

// Eventos
formCadastro.addEventListener("submit", function(event) {
  event.preventDefault();
  incluirCliente();
});
