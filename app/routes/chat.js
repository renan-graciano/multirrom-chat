const { check } = require('express-validator');

module.exports = function(application){
    application.post('/chat',[
        check('apelido','Nome ou apelido é obrigatório').notEmpty(),
        check('apelido','Nome ou apelido deve conter entre 3 e 15 caracteres').isLength({min:3, max: 15})
    ],function(req, resp){
        application.app.controllers.chat.iniciaChat(application, req, resp);
    });

    application.get('/chat',function(req, resp){
        application.app.controllers.chat.iniciaChat(application, req, resp);
    });
}