$(document).ready(function() {
    $('#cep').mask('00000-000');
    $('#cpf').mask('000.000.000-00');
    $('#cell').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            }
            endereco: {
                required: true
            }
            cep: {
                required: true
            }
            cpf: {
                required: true
            }
            cell: {
                required: true
            }
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            nomeCompleto: 'Por favor, insira o seu nome completo.'
        },

    })
})

