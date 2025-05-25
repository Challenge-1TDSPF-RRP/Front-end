function cadastrar(event) {
  event.preventDefault();
  const nome = document.getElementById("idNome").value;
  const cpf = document.getElementById("idCpf").value;
  const email = document.getElementById("idEmail").value;
  const telefone = document.getElementById("idTelefone").value;
  const idade = document.getElementById("idIdade").value;
  const genero = document.getElementById("idGenero").value;
  const senha = document.getElementById("idSenha").value;
  const confsenha = document.getElementById("idConfSenha").value;

  localStorage.setItem("nome", nome);
  localStorage.setItem("cpf", cpf);
  localStorage.setItem("email", email);
  localStorage.setItem("telefone", telefone);
  localStorage.setItem("idade", idade);
  localStorage.setItem("genero", genero);
  localStorage.setItem("senha", senha);
  localStorage.setItem("confsenha", confsenha);

  if(senha === confsenha){
    alert("Cadastro realizado com sucesso!");
    window.location.href = "../index.html";
} else {
    alert("Cadastro não realizado")
}
}
  

function logar(event) {
  event.preventDefault();
  const email = document.getElementById("idEmail").value;
  const senha = document.getElementById("idSenha").value;

  const emailSalvo = localStorage.getItem("email");
  const senhaSalva = localStorage.getItem("senha");

  if (email === emailSalvo && senha === senhaSalva) {
    alert("Login bem-sucedido!");
    window.location.href = "assets/inicio.html";
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

function recuperarSenha(event) {
  event.preventDefault();
  const usuario = document.getElementById("usuario").value;
  const novaSenha = document.getElementById("novaSenha").value;

  const usuarioSalvo = localStorage.getItem("usuario");

  if (usuario === usuarioSalvo) {
    localStorage.setItem("senha", novaSenha);
    alert("Senha redefinida com sucesso!");
    window.location.href = "index.html";
  } else {
    alert("Usuário não encontrado!");
  }
}


function opensidebar(){
    document.getElementById("sidebar").style.width = "250px";
}

