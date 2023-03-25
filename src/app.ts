
import express from 'express'
import mongoose from 'mongoose'
//ira importar o express. É uma biblioteca que facilita as requisições
import routes from './routes'


class App {

    public express: express.Application
    //atributo do tipo express.Application

    public constructor (){
        this.express = express ()
        this.middleware ()
        this.routes()
        this.dataBase()

    }
    //método construtor que vai injetar a biblioteca express. Assim terá acesso aos métodos express
    //sempre que instanciar os métodos middleware e routes serão executados

    public middleware(): void{

        this.express.use (express.json())

    } //método use para dizer que as requisições serão em formato json

    public routes ():void {

        this.express.use (routes)
    }//método use pra dizer qual será o arquivo de rotas

    private async dataBase() {
        try {
            await mongoose.connect ('suaURL do mongodb')
        } catch (error) {
            console.log('Erro ao conectar ao Banco de Dados, ERROR: ', error)
        }
    }//essa função irá se conectar, de forma sincrona, com o banco de dados. 
    //isto é, o programa irá esperar a conexão ser feita, e posteriormente continuar o seu caminho natural.
}

export default new App().express

//exportando a classe App já instanciada. Quem chamar essa classe poderá utilizar os métodos do atributo express