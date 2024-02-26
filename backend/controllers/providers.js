const providers = require('../models/providers');
// List
module.exports.list = function(req,res){
    res.render('providers/providers-list', {title:'Service Providers', providers : providers})
}
// Details
module.exports.details = function(req,res){
    let id = req.params.id;
    let provider = providers.find( prodiver => prodiver.id == id)
    res.render('providers/providers-details', { id : id,  title:'Service Providers Details', company : provider.company} )
}
// Edit Form
module.exports.edit = function(req,res){
    let id = req.params.id;
    let provider = providers.find( prodiver => prodiver.id == id)
    res.render('providers/providers-edit', { id : id,  title:'Edit', provider : provider} )
}
// Update Form
module.exports.update = function(req,res){
    let id = req.params.id;
    let provider = providers.find( prodiver => prodiver.id == id)
    res.render('providers/providers-update', { title:'Update', provider : provider} )
}