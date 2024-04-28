$(document).ready(function() {
    
    $('#cep').mask('00000-000');
    $('#cpf').mask('000.000.000-00');
    $('#cell').mask('(00) 00000-0000');

    $('#form-cadastro').validate({
    debug: true,
    }),
        $.validator.addMethod("fRequired", $.validator.methods.required,
        "Informação necessária.");

        $.validator.addClassRules("formulario", {fRequired: true});

        $('#form-cadastro').submit(function(event) {
            event.preventDefault();

                if ($(this).valid()) {
                    $('#mensagem-sucesso').css('visibility', "visible");
                }
        });
})