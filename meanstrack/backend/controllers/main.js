// main controllers

module.exports.home = function(req, res){
    res.render('index', { title: 'Express' });
}