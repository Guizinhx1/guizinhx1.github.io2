function cadastrarlogin(){
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    localStorage.setItem("email", email)
    localStorage.setItem("senha", senha)
    
}

function fazerLogin(){
    let email = document.getElementById("email2").value
    let senha = document.getElementById("senha2").value
    let emailLocalStore = localStorage.getItem("email")
    let senhaLocalStore = localStorage.getItem("senha")
    if(email == emailLocalStore && senha == senhaLocalStore){
        window.location.href = "Tela.inicial.html"
    }else{
        alert("Acesso negado!")
    }
}

document.getElementById('btnAbrir').addEventListener('click', function() {
    document.getElementById('caixaMensagens').classList.remove('hidden');
  });
  
  document.getElementById('fechar').addEventListener('click', function() {
    document.getElementById('caixaMensagens').classList.add('hidden');
  });

  $(function() {
    $("#caixaMensagens").draggable();
});

function abrirPortifolio(){
    window.location.href = "Portifólio.html"
}

function enviarForms(){
    let cliente = document.getElementById("cliente").value
    let freelancer = document.getElementById("freelancer").value

    if (cliente == "" && freelancer == "") {
        alert("Assine todos os campos do contrato")
    }else{
        alert("Formulario enviado")
    }
}
function assinarContrato(){
    window.location.href = "contrato.html"
}