// const fs = requiere ('fs')

class ProductManager {

    #precioBaseDeGanancia
    
    constructor () {
    
    this.products = []
    
    this.precioBaseDeGanancia = 0.15
}


getProducts = () => {return this.products}
    
getNextID = () => {
    
    const count = this.products.length
    
    if (count == 0) return 1
    
    const lastProduct = this.products [count-1]
    
    const lastID = lastProduct.id
    
    const nextID = lastID + 1
    
    return nextID
    
    }
    
    addProduct = (name, description, price, thumbnail, stock) => {
    
    const id = this.getNextID ()
    
    const product ={
    
    id,
    
    name,
    
    description,
    
    price: price * (1 + this.#precioBaseDeGanancia),
    
    thumbnail,
    
    stock: [10]
    
    }

    this.products.push(product)
    }

    getProductsById = (getbyId) =>{
        const buscar = this.products.find(product => product.id == getbyId)
        if(buscar == undefined) return console.log("not found")
        else (console.log(buscar))
    }

}

const manager = new ProductManager()

manager.addProduct ("Escada", "Especially Elixir EDP 30 Ml", 600, "Imagen")
manager.addProduct ("NINA RICCI", "Les Sorbet Bella EDT 80 Ml", 800, "Imagen")
console.log(manager);
manager.getProductsById(1)
manager.getProductsById(4)



