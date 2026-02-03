const Usuario = document.getElementById('usuario');
const Senha = document.getElementById('senha');
const btnSubmit = document.getElementById('submit');
const mensagem = document.getElementById('mensagem');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if(Usuario.value === '' || Senha.value === ''){
        mensagem.classList.add('ativo');
        Usuario.style.borderColor = 'red';
        Senha.style.borderColor = 'red';
        setTimeout(() => {
            mensagem.classList.remove('ativo');
            Usuario.style.borderColor = '#000';
            Senha.style.borderColor = '#000';
       }, 3000);
    
     }else{
    alert('Formulário enviado com sucesso!');
   }
});