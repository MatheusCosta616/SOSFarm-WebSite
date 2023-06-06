const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Função para alternar o modo escuro
function toggleDarkMode() {
  const body = document.body;
  const boxes = document.querySelectorAll('.box');
  const menuLogo = document.querySelectorAll('.menuLogo');
  const subMenu = document.querySelectorAll('.subMenu');
  const loginBtn = document.getElementById('login');
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const logoImage = document.querySelector('.logo');
  const txtInicial = document.querySelectorAll('.txtIncial');
  const titulos = document.querySelectorAll('#titulos');
  const formulario = document.getElementById('formulario')
  const loginDois = document.getElementById('')
  const cadastro = document.getElementById('cadastro')

  // Adicione ou remova a classe 'dark-mode' no elemento body
  body.classList.toggle('dark-mode');

  // Verifique se o modo escuro está ativado e salve-o no localStorage
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);

  // Atualize o texto do botão com base no estado do modo escuro
  if (isDarkMode) {
    darkModeToggle.innerHTML = '<img id="iconDark" src="../img/lua.png" alt="Ícone Modo Escuro">';
    boxes.forEach((box) => box.classList.add('dark-mode'));
    darkModeToggle.classList.add('dark-mode')
    menuLogo.forEach((logo) => logo.classList.add('dark-mode'));
    subMenu.forEach((submenu) => submenu.classList.add('dark-mode'));
    loginBtn.classList.add('dark-mode');
    logoImage.setAttribute('src', '../img/Logo2.png');
    txtInicial.forEach((txt) => txt.classList.add('dark-mode'));
    titulos.forEach((titulo) => titulo.classList.add('dark-mode'));
    formulario.classList.add('dark-mode');
    cadastro.classList.add('dark-mode')
    alert('Dark mode ativado');
  } else {
    darkModeToggle.innerHTML = '<img id="iconDark" src="../img/sol.png" alt="Ícone Modo Escuro">';
    darkModeToggle.classList.remove('dark-mode')
    boxes.forEach((box) => box.classList.remove('dark-mode'));
    menuLogo.forEach((logo) => logo.classList.remove('dark-mode'));
    subMenu.forEach((submenu) => submenu.classList.remove('dark-mode'));
    loginBtn.classList.remove('dark-mode');
    logoImage.setAttribute('src', '../img/Logo.png');
    txtInicial.forEach((txt) => txt.classList.remove('dark-mode'));
    titulos.forEach((titulo) => titulo.classList.remove('dark-mode'));
    formulario.classList.remove('dark-mode');
    cadastro.classList.remove('dark-mode')
    alert('Dark mode desativado');
  }
}

// Verifique se o modo escuro está ativado ao carregar a página
if (isDarkMode) {
  document.body.classList.add('dark-mode');
  document.getElementById('dark-mode-toggle').innerHTML = '<img id="iconDark" src="../img/lua.png" alt="Ícone Modo Escuro">';
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  darkModeToggle.classList.add('dark-mode');
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => box.classList.add('dark-mode'));
  const menuLogo = document.querySelectorAll('.menuLogo');
  menuLogo.forEach((logo) => logo.classList.add('dark-mode'));
  const subMenu = document.querySelectorAll('.subMenu');
  subMenu.forEach((submenu) => submenu.classList.add('dark-mode'));
  const loginBtn = document.getElementById('login');
  loginBtn.classList.add('dark-mode');
  const logoImage = document.querySelector('.logo');
  logoImage.setAttribute('src', '../img/Logo2.png');
  const txtInicial = document.querySelectorAll('.txtIncial');
  txtInicial.forEach((txt) => txt.classList.add('dark-mode'));
  const titulos = document.querySelectorAll('#titulos');
  titulos.forEach((titulo) => titulo.classList.add('dark-mode'));
  const formulario = document.getElementById('formulario')
  formulario.classList.add('dark-mode');
  const cadastro = document.getElementById('cadastro')
  cadastro.classList.add('dark-mode')
} else {
  document.getElementById('dark-mode-toggle').innerHTML = '<img id="iconDark" src="../img/sol.png" alt="Ícone Modo Escuro">';
}