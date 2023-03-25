import app from "./app";

    function main (){
        //essa função é a primeira a ser executada
        let port = 3000 //porta no qual o servidor será conectado
            try {
                app.listen(port, 'localhost', async () => {
                    console.log (`Starting server at port  ${port}`)
                 //indica qual porta o servidor vai ser criado e qual ip + função que indicará que o servidor
                 //está de pé   
                })
            }catch(err) {
                console.error('Starting server Error', err)
            }//para caso ocorra algum erro...

    } //vai criar a função main

    main () //vai executar a função main
