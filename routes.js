const EXPRESS = require('express')
const ROUTER = EXPRESS.Router();

ROUTER.get('/', function(req, res){
    res.render('home')
})

ROUTER.get('/about', function(req,res){
    res.render('about')
})

ROUTER.get('/contact', function(req,res){
    res.render('contact')
})

module.exports = ROUTER;
