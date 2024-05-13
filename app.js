const EXPRESS = require('express');
const HANDLEBARS =  require('express-handlebars')
const APP = EXPRESS();
const PATH = require('path');
const ROUTES = require('./routes.js')

APP.use(EXPRESS.static(PATH.join(__dirname, 'public')));

APP.engine('handlebars', HANDLEBARS.engine())
APP.set('view engine', 'handlebars');
APP.set('views', './views')

APP.use('/', ROUTES)

APP.listen(3000, function(){
    console.log('SERVER STARTED');
})