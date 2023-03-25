

import { Schema, model, Document } from "mongoose"
//importando da biblioteca mongoose as classes schema, model e document

        const UserSchema = new Schema({
            email: String,
            fistName: String,
            lastName: String
        }, {
            timestamps: true
        })
        //Instanciamos um novo Schema na constante UserSchema
        //essa instancia segue o padrão::: nomeDoCampoNoBanco (atributo) : TipoDeDado
        export default model('User', UserSchema)