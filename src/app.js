const express = require('express');
const cors = require('cors');
const routes = require('./routes')

class App{
    constructor(){
        this.app = express();//Recebe todos os modulos do express.
        this.middlewares();
        this.routes();//Rotas da aplicação.
    }

    middlewares(){
        this.app.use(express.json());//Transforma os dados em formato json.

        this.app.use((req, res, next) => {
            res.header("Access-Controll-Allow-Origin" , "*");//Aceita qualquer origem da requisição.
            res.header("Access-Controll-Allow-Methods" , "Get, POST, PUT, DELETE");//Metodos que a api aceita.
            res.header("Access-Controll-Allow-Headers", "Access, Content-type, Authorization, Acept, Origin, X-requested-with");//Cabeçalhos que a api aceita.

            this.app.use(cors());
            next();
        })
    }

    routes(){
        this.app.use(routes);
    }
};

module.exports = new App().app;//Exporta o atributo "app" de uma instancia da class "App". 