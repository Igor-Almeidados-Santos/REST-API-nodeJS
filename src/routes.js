const { Router } = require('express');
const UserController = require('./app/Controllers/UserController');
const routes = new Router();//Instancia um novo objeto de Router.

routes.post('/user', UserController.index);//Quando tem uma requisição na rota informada seus dados são passados para UserController.index.

module.exports = routes;