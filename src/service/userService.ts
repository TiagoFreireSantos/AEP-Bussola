
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