
/*
Por tag: GetElementBysTagName()
por id : GetElementByid()
case sensitive = reconehce letras maiusculas e minusculas
por classe: getElementsByClassName()
por seletor: querySelector()
*/
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let foto = document.querySelector('#foto')
//nome.style.width = '24%'
//email.style.width = '24%'
foto.style.transitionDuration = "1s";

let MP = document.querySelector('.MP')
MP.style.transitionDuration = "1s";
function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3 ) {
        txtNome.innerHTML = 'nome invalido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'nome valido'
        txtNome.style.color = 'blue'
        nomeOk = true
    }

}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'E-mail invalido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail valido'
        txtEmail.style.color = 'blue'
        emailOk = true
    }
}
 
 function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length  >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande, o limite de caracteres é 100'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display ='block'
    }else {
        txtAssunto.style.display ='none'
        assuntoOk = true
    }

 }
  function enviar() {
      if (nomeOk == true && emailOk == true && assuntoOk == true){
          alert ('***Formulario enviado com sucesso!***')
      } else {
          alert ('Preencha o formulario corretamente antes de enviar!')
          
      }
  }
  function fotoZoom() {
    foto.style.width = '450px'
    foto.style.height = '450px'
    foto.style.borderRadius =  "50%"
    MP.style.fontSize = "50px"
  }
  function fotoNormal(){
    foto.style.width = '200px'
    foto.style.height = '200px'
    foto.style.borderRadius =  "0%"
    MP.style.fontSize = "25px"

  }