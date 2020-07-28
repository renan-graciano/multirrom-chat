const { validationResult} = require('express-validator');
module.exports.iniciaChat = function(application, req, resp){

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        resp.render('index',{validacao: errors.errors});
        return;
    }
    resp.render("chat");
}
