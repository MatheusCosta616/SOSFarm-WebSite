const formulario = document.querySelector('form');
const nomeInput = document.getElementById('nome');
const telefoneInput = document.getElementById('telefone');
const senhaInput = document.getElementById('senha');
const confirmaSenhaInput = document.getElementById('confPass');

// Adiciona o event listener para o evento de input nos campos
nomeInput.addEventListener('input', validarNome);
telefoneInput.addEventListener('input', validarTelefone);
senhaInput.addEventListener('input', validarSenha);
confirmaSenhaInput.addEventListener('input', validarSenha);

// Função para validar o campo de nome
function validarNome() {
  if (nomeInput.value === '') {
    nomeInput.style.backgroundColor = 'red';
  } else {
    nomeInput.style.backgroundColor = '';
  }
}

// Função para validar o campo de telefone
function validarTelefone() {
  const telefone = telefoneInput.value;
  const regex = /^[0-9]+$/;

  if (!regex.test(telefone)) {
    telefoneInput.style.backgroundColor = 'red';
    alert('O telefone não pode conter letras')
  } else {
    telefoneInput.style.backgroundColor = '';
  }
}

// Função para validar as senhas
function validarSenha() {
  const senha = senhaInput.value;
  const confirmaSenha = confirmaSenhaInput.value;

  if (senha !== confirmaSenha || confirmaSenha !== senha) {
    confirmaSenhaInput.style.backgroundColor = 'red';
  } else if (senha === confirmaSenha || confirmaSenha === senha){
    confirmaSenhaInput.style.backgroundColor = '';
  }
}