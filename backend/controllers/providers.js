const companys = require('../models/providers');

module.exports.list = function(req,res){
    res.render('providers/provider-list', { providers : companys})
}