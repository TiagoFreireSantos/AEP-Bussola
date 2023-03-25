
import { Router } from "express";
//importando a classe Router do express
import healthCheckController from "./controller/healthCheckController";
import userController from "./controller/userController";
import productsController from "./controller/productsController";


const routes = Router()
//a constante routes vai receber a Router

routes.get('/health-check', healthCheckController.check) 
//falo qual metodo quero executar nesta rota. Passa como parâmetro o nome da rota e o que deve executar
routes.get('/users', userController.list)
//se usar a rota no navegador localhost:3000/users, então trará o conteúdo
//da função list dentro do controller userController
routes.post ('/products', productsController.create)
routes.get ('/products', productsController.list)
routes.get('/products-stock', productsController.getStock)
routes.get('/products-stock-value', productsController.getStockValue)


export default routes
//exportando o objeto routes que contém todas as rotas