function enviaFormProBack(evento){
    evento.preventDefault()
    
    const data = new FormData(evento.target)

    fetch('http://localhost:8080/clientes', {
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(data => console.log('Resposta do servidor: ', data))
    .catch(erro => console.error('Erro ao enviar dados para o servidor', erro))
}

const form = document.getElementById('cadastroClientes')
form.addEventListener('submit', enviaFormProBack)
