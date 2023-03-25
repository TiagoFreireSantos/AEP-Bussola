import { writeFile, readFile } from 'fs/promises'


class ProductService {
    async createProductList(data) {
        try{
        await writeFile('products.json', JSON.stringify(data, null, 2))
        }catch (err){
            throw new Error ('Falha ao salvar produtos')
        }
    }

    async findProducts() {

        try {
            const productList = await readFile('products.json', "utf8")
            return JSON.parse(productList)
        } catch (error) {
            throw new Error("Erro ao ler lista de produtos")
        }
    }

    async getStock() {
        try {
            const productList = await this.findProducts()

            const productStock = productList.map(produto => {
                let stock = {
                    nome: produto.nome,
                    qtde: produto.qtde,
                    preco: produto.preco,
                    valor_stock: produto.qtde * produto.preco
                }
                return stock
            })

            return productStock
        } catch (error) {
            throw new Error(error)
        }
    }

    async getStockValue(){
        try {
            const product = await this.getStock()
            const product_stock = product.reduce((totalValue, value)=>{
                return (totalValue + value.valor_stock)
            },0
            ).toFixed(2)
        return JSON.parse(product_stock)
        
        } catch (error) {
            console.log("Erro. Tente novamente")
        }
    }

}

export default new ProductService()