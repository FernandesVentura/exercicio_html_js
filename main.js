const form = document.getElementById('form-desafio');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validaCampo();
});

function validaCampo(){
    const campoA = parseInt(document.getElementById('numero-A').value);
    const campoB = parseInt(document.getElementById('numero-B').value);
    const mensagemSucesso = `Muito bem, Realmente o valor <b>${campoA}</b> é menor que <b>${campoB}</b>, sendo assim o desafio está completo. Parabéns!` 

    if (isNaN(campoA) || isNaN(campoB)){
        alert('Os campos precisam estar preenchidos');
        }
        if (campoA > campoB) {
            document.querySelector('.mensagem-erro').style.display = 'block';
            document.querySelector('.mensagem-sucesso').style.display = 'none';

            document.getElementById('numero-A').value = '';
            document.getElementById('numero-B').value = '';
        }else {
            const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
            containerMensagemSucesso.innerHTML = mensagemSucesso;
            containerMensagemSucesso.style.display = 'block'
            document.querySelector('.mensagem-erro').style.display = 'none';
            document.querySelector('.mensagem-sucesso').style.display = 'block';

        }
    }

