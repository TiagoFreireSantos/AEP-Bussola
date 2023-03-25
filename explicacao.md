1 - Com o package.json rodar o seguinte comando no terminal do projeto
    -> npm install
    -> Esse comando irá instalar todas as dependencia que estão contidas no package.json
    -> CUIDADO: para esse comando funcionar você tem que estar na pasta do projeto
        -> NO MEU CASO É ESSE O DIRETORIO: D:\Studeo\3° Ano\ProgramacaoIII\node-js\node-servidor
        -> Analisar em qual pasta está o seu arquivo
        -> Para ir para pasta você pode usar o comando cd no terminal (para navegar entre as pastas)
            -> cd .. (volta uma pasta)
            -> cd nomeDaPasta (vai para a próxima pasta que está neste diretório)
            -> ls (lista os arquivos/pastas que estão no diretorio atual)

2 - Criar a pasta src (na raiz do projeto)

3 - Ciar o arquivo app.ts na pasta src (seuProjeto/src/app.ts)
    -> no meu caso o seuProjeto = NODE-SERVIDOR

---------------------------------------------------------------------
                        **Arquivo app.ts**
---------------------------------------------------------------------
    a) Importar a biblioteca express:

        import express from 'express'
            -> É uma biblioteca que facilita nas requisições http

    b) declarar o nome da classe seguindo a seguinde sintaxe
        class nomeDaClasse {

        }

        -> no nosso caso nomeDaClasse = App
        -> Então fica assim:

        class App {

            

        }

    c) No corpo dessa classe vamos injetar a biblioteca express da seguinte forma:

        class App {
            public express: express.Application

            public constructor() {
                this.express = express()
            }
        }

    d) Ainda na classe App, criar a função middlewares() que é um interceptador para redirecionar 

        class App {
            public express: express.Application

            public constructor() {
                this.express = express()
            }

            private middlewares (): void { 
                this.express.use(express.json())
            }
        }

    e) Por fim, por enqunto, exportar a classe já instanciada da seguinte maneira:

    export default new App().express

    Na última linha de código da classe App
---------------------------------------------------------------------
---------------------------------------------------------------------

4 - criar o arquivo server.ts na pasta src (seuProjeto/src/server.ts)

---------------------------------------------------------------------
                        **Arquivo server.ts**
---------------------------------------------------------------------
    a) Importar a class app

        import app from "./app";
    
    b) Criar a função main() com a seguinte estrutura:

        function main() {
            let port = 3000
            try {
                app.listen(port, 'localhost', async () => {
                    console.log (`Starting server at port  ${port}`)
                    
                })
            }catch(err) {
                console.error('Starting server Error', err)
            }
        }
    *****************************************************************
        EXPLICANDO A FUNÇÃO:
            -> port::: é a porta na qual o servidor será "conectado", seste casso será a 3000.
            
            ->Dentro do try {
                ->app.listen::: você está indicando em qual porta o servidor será criado e em qual IP, neste caso, localhost. E está passando uma função de callback para indicar que o servidor está de pé (Essa mensagem irá aparecer no console assim que você subir o servidor).
            }

            -> Dentro do catch {
                -> Caso ocorra algum erro ao tentar subir o servidor, no console, irá aparecer essa mensagem de erro
            }
    *****************************************************************

    c) Por fim, chama a função main()
    main()

    d) É assim que o server.ts tem que ficar (até esse momento):

        import app from "./app";

        function main() {
            let port = 3000
            try {
                app.listen(port, 'localhost', async () => {
                    console.log (`Starting server at port  ${port}`)
                    
                })
            }catch(err) {
                console.error('Starting server Error', err)
            }
        }

        main ()
---------------------------------------------------------------------
---------------------------------------------------------------------

5 - Criar a pasta controller dentro da src (seuProjeto/src/controller)

6 - Dentro da pasta controller criar o arquivo healthCheckController.ts (seuProjeto/src/controller/healthCheckController.ts)

---------------------------------------------------------------------
                    **Arquivo healthCheckController.ts**
---------------------------------------------------------------------
    a) Adicionar o seguinte código neste arquivo:

        import { Request, Response } from "express";

        class HealthCheckController {
            public async check(req: Request, res: Response) {
                return res.json("Hello Word!!!")
            }
        }

        export default new HealthCheckController()

        *****************************************************************
        EXPLICANDO O CÓDIGO
            -> Importamos da biblioteca express, tanto o Request quanto o Response, que são utilizados para criar uma requisição http

            -> Criamos a classe HealthCheckController (Seguindo o padrão de criação de classe demonstrado no item 3.b)

                -> Essa classe possui uma função que irá retornar de forma assíncrona um JSON, por meio do Response
                    -> Neste casso esse JSON só é um Hello Word!!!
            
            -> Por fim, exportamos a classe HealthCheckController()
        *****************************************************************
---------------------------------------------------------------------
---------------------------------------------------------------------

7 - Dentro da pasta controller criar o arquivo userController.ts (seuProjeto/src/controller/userController.ts)

8 - Segue a mesma lógica do arquivo healthCheckController.ts (olhar o item anterior)

9 - Criar no src o arquivo que irá conter as rotas da aplicação: routes.ts (seuProjeto/src/routes.ts)

---------------------------------------------------------------------
                        **Arquivo routes.ts**
---------------------------------------------------------------------
    a) Adicionar o seguinte código neste arquivo:

        import { Router } from "express";
        import heakthCheckController from "./controller/healthCheckController";
        import userController from "./controller/userController";

        const routes = Router()

        routes.get('/', heakthCheckController.check) //falo qual metodo quero executar nesta rota
        routes.get('/users', userController.find)

        export default routes

        *****************************************************************
        EXPLICANDO O CÓDIGO
            -> Importamos da biblioteca express a classe Router

            -> Importamos do nosso proprio projeto os controllers que criamos anteriormente, são eles respectivamente, heakthCheckController e userController

            -> Criamos uma constante que irá conter o Router()

            -> Utilizamos a constante criada para passar quais rotas vamos criar
                -> No primeiro caso, quando utilizarmos a seguinte rota no navegador: localhost:3000
                    -> No navegar será exibido o conteudo que está na função check dentro do controller heakthCheckController.
                
                -> Já no segundo caso, quando utilizarmos a seguinte rota no navegador: localhost:3000/users
                    -> No navegar será exibido o conteudo que está na função find dentro do controller userController.
            
            -> Por fim, exportamos o objeto routes que contem todas as nossas rotas criadas
        *****************************************************************
---------------------------------------------------------------------
---------------------------------------------------------------------

10 - Criar a pasta schemas dentro da src (seuProjeto/src/schemas)

11 - Dentro da pasta schemas criar o arquivo User.ts (seuProjeto/src/controller/User.ts)

---------------------------------------------------------------------
                        **Arquivo User.ts**
---------------------------------------------------------------------
    a) Adicionar o seguinte código neste arquivo:

        import { Schema, model, Document } from "mongoose"

        const UserSchema = new Schema({
            email: String,
            fistName: String,
            lastName: String
        }, {
            timestamps: true
        })

        export default model('User', UserSchema)

        *****************************************************************
        EXPLICANDO O CÓDIGO
            -> Importamos da biblioteca mongoose as classes Schema, model, Document

            -> Instanciamos um novo Schema na constante UserSchema
                -> Essa instancia segue o padrão::: nomeDoCampoNoBanco (atributo) : TipoDeDado

            -> Por fim, exportamos a constante UserShema
        *****************************************************************
---------------------------------------------------------------------
---------------------------------------------------------------------

12 - Criar a pasta service dentro da src (seuProjeto/src/service)

13 - Dentro da pasta service criar o arquivo userService.ts (seuProjeto/src/controller/userService.ts)

---------------------------------------------------------------------
                        **Arquivo userService.ts**
---------------------------------------------------------------------
    a) Adicionar o seguinte código neste arquivo:

        import  User from "../schemas/User"

        class UserService {
            async createUser(input) {
                try {
                    await User.create(input)
                } catch (error) {
                    console.error ("Erro ao criar o Schema User - Error:", error)
                    
                }
            }
        }

        *****************************************************************
        EXPLICANDO O CÓDIGO
            -> Esperar o professor explicar melhor essa parte para eu não falar besteira.
        *****************************************************************
---------------------------------------------------------------------
---------------------------------------------------------------------

14 - Voltando ao arquivo app.ts. Criar dentro da class App a seguinte função:

    private routes(): void {
        this.express.use(routes)
    }
    -> Essa função tem como objetivo disponibilizar as rotas criadas

    -> Não esquecer de add ela ao contrutor da class App:
        public constructor() {
            this.express = express()
            this.middlewares()
            this.routes()
        }
    -> O construtor da class App tem que estar assim até o momento

    -> Realiza a importação do routes
        -> import routes from './routes'

15 - Ainda no arquivo app.ts. Criar dentro da class App a seguinte função:

    private async dataBase() {
        try {
            await mongoose.connect ('suaURL do mongodb')
        } catch (error) {
            console.log('Erro ao conectar ao Banco de Dados, ERROR: ', error)
        }
    }
    -> Essa função irá se conectar, de forma sincrona, com o banco de dados. Istó é, o programa irá esperar a conexão ser feita, e posteriormente continuar o seu caminho natural.

    -> Não esquecer de add ela ao contrutor da class App:
        public constructor() {
            this.express = express()
            this.middlewares()
            this.routes()
            this.dataBase()
        }
    -> O construtor da class App tem que estar assim até o momento

    -> Realiza a importação do mongoose, que é a biblioteca do mongodb para realizar a conexão ao banco de dados
        -> import mongoose from 'mongoose'

---------------------------------------------------------------------
                        **Arquivo app.ts**
    No final de tudo o seu arquivo app.ts tem que estar desta forma
---------------------------------------------------------------------

import express from 'express' //framework que faz requisições http
import routes from './routes'
import mongoose from 'mongoose'

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
        this.dataBase()
    }

    private middlewares (): void { //interceptador para redirecionar
        this.express.use(express.json())
    }

    private routes(): void {
        this.express.use(routes)
    }

    private async dataBase() {
        try {
            await mongoose.connect ('mongodb+srv://guilhermeaca:elefantecolorido@cluster0.88magmd.mongodb.net/?retryWrites=true&w=majority')
        } catch (error) {
            console.log('Erro ao conectar ao Banco de Dados, ERROR: ', error)
        }
    }

}

export default new App().express //exporta a classe já instanciada
