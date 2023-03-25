
import { Request, Response } from "express";
//request e response são necessários para uma requisição http

        class HealthCheckController {

            public async check(req: Request, res: Response) {
                return res.json("Hello Word!!!")
                //esse método público check recebe dois parâmetros. Um do tipo request e o outro do tipo response.
                //vai retornar de forma assíncrona um json com a palavra Hello World
            }
        }

        export default new HealthCheckController()