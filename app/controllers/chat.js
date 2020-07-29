const { validationResult} = require('express-validator');
const { emit } = require('../../config/server');
module.exports.iniciaChat = function(application, req, resp){

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        resp.render('index',{validacao: errors.errors});
        return;
    }
    var dados = req.body;
    application.get('io')
        .emit('msgParaCliente',{
            apelido: dados.apelido,
            mensagem: ' acabou de entrar no chat.'
        });
    resp.render("chat",{dadosForm: dados});
}
