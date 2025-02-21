document.addEventListener("DOMContentLoaded", carregarContatos);

const formulario = document.getElementById("form-group");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); //impedindo o refresh da página
  adicionarContato();
});

function adicionarContato() {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;

  if (nome === "" || telefone === "" || email === "") {
    alert("Por favor, preencha todos os campos");
    return;
  }

  const contato = { nome, telefone, email };

  salvarContato(contato);
  limparCampos();
  carregarContatos();
}

function salvarContato(contato) {
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.push(contato);
  localStorage.setItem("contatos", JSON.stringify(contatos));
}

function carregarContatos() {
  const lista = document.getElementById("listaContatos");
  lista.innerHTML = "";

  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

  contatos.forEach((contato, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
        <p><strong>Nome:</strong> ${contato.nome}</p>
        <p><strong>Telefone:</strong> ${contato.telefone}</p>
        <p><strong>E-mail:</strong> ${contato.email}</p>
        <button type="button" class="delete" onclick="removerContato(${index})">X</button>
        <button type="button" class="edit" onclick="editarContato(${index})">Editar</button>
    `;

    lista.appendChild(li);
  });
}

function removerContato(index) {
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.splice(index, 1);
  localStorage.setItem("contatos", JSON.stringify(contatos));
  carregarContatos();
}

let contatoEditandoIndex = null; // Variável global para armazenar o índice do contato em edição

function editarContato(index) {
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  const contato = contatos[index];

  // Preenche os campos com os dados do contato
  document.getElementById("nome").value = contato.nome;
  document.getElementById("telefone").value = contato.telefone;
  document.getElementById("email").value = contato.email;

  // Verifica se estamos editando ou adicionando um contato
  if (contatoEditandoIndex === null) {
    // Se o índice não estiver definido, significa que estamos começando a edição
    contatoEditandoIndex = index; // Armazena o índice do contato em edição
    document.getElementById("saveButton").innerText = "Salvar Alterações"; // Altera o texto do botão para "Salvar Alterações"
  } else {
    // Se já estamos editando, isso significa que o usuário clicou novamente no botão de editar
    // Agora vamos salvar as alterações

    // Recupera os valores atualizados dos campos
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;

    // Atualiza o contato no array
    contatos[contatoEditandoIndex] = { nome, telefone, email };

    // Salva os contatos atualizados no localStorage
    localStorage.setItem("contatos", JSON.stringify(contatos));

    // Limpa os campos de edição
    limparCampos();

    // Atualiza o texto do botão de volta para "Salvar Contato"
    document.getElementById("saveButton").innerText = "Salvar Contato";

    // Limpa a variável de edição
    contatoEditandoIndex = null;

    // Recarrega a lista de contatos para refletir as mudanças
    carregarContatos();
  }
}

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("email").value = "";
}
