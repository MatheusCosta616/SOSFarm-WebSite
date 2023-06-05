function enviarFormulario() {
    const nomeInput = document.getElementById('nome');
    const telefoneInput = document.getElementById('telefone');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const confPassInput = document.getElementById('confPass');

    let nome = nomeInput.value.toLowerCase();
    const telefone = telefoneInput.value;
    const email = emailInput.value;
    const senha = senhaInput.value;
    const conf = confPassInput.value;
  
    let formularioValido = true;
    
    

    if (nome.trim() === '') {
      nomeInput.classList.add('campo-invalido');
      alert('Digite o nome');
      formularioValido = false;
    } else {
      
      nomeInput.classList.remove('campo-invalido');
    }
  
    if (telefone.trim() === '') {
      telefoneInput.classList.add('campo-invalido');
      alert('Digite o telefone');
      formularioValido = false;
    } else if (!/^\d+$/.test(telefone)) {
      telefoneInput.classList.add('campo-invalido');
      alert('O telefone deve conter apenas números');
      formularioValido = false;
    } else {
      telefoneInput.classList.remove('campo-invalido');
    }
  
    if (email.trim() === '') {
      emailInput.classList.add('campo-invalido');
      alert('Digite o email');
      formularioValido = false;
    } else {
      emailInput.classList.remove('campo-invalido');
    }
  
    if (senha.trim() === '') {
      senhaInput.classList.add('campo-invalido');
      alert('Digite a senha');
      formularioValido = false;
    } else {
      senhaInput.classList.remove('campo-invalido');
    }
  
    if (conf !== senha) {
      confPassInput.classList.add('campo-invalido');
      alert('As senhas não coincidem');
      formularioValido = false;
    } else {
      confPassInput.classList.remove('campo-invalido');
    }
  
    if (formularioValido) {
      let usuarios = localStorage.getItem('usuarios');
  
      if (usuarios === null) {
        usuarios = [];
      } else {
        usuarios = JSON.parse(usuarios);
      }
  
      // Gerar um token aleatório como ID do usuário
      const token = Math.random().toString(36).substring(2);
  
      // Obter a data e hora atual do computador
      const dataHoraAtual = new Date().toLocaleString();
  
      const usuario = {
        id: token,
        nome: nome,
        telefone: telefone,
        email: email,
        senha: senha,
        dataHoraCadastro: dataHoraAtual
      };
  
      usuarios.push(usuario);
  
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
      alert('Cadastro realizado com sucesso!');
      document.querySelector('form').reset();
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
