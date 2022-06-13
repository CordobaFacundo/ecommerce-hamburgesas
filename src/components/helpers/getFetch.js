let hamburguesas = [
    {
        id: "1001",
        tipo: "Carne",
        nombre: "Cheese burger",
        descripcion: "Triple carne, triple queso",
        precio: 700,
        stock: 50,
        imagen: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg"
    },
    {
        id: "1002",
        tipo: "Carne",
        nombre: "Cheese bacon",
        descripcion: "La cheese burger + bacon",
        precio: 1000,
        stock: 25,
        imagen: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg"
    },
    {
        id: "1003",
        tipo: "Carne",
        nombre: "La clasica",
        descripcion: "Doble carne con queso + lechuga + tomate + cebolla",
        precio: 1000,
        stock: 25,
        imagen: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg"
    },
    {
        id: "1004",
        tipo: "Pollo",
        nombre: "La pechugona",
        descripcion: "Medallon de pollo con lechuga y mayonesa",
        precio: 800,
        stock: 25,
        imagen: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg"
    },
    {
        id: "1005",
        tipo: "Vegana",
        nombre: "Corean burger",
        descripcion: "Hamburgesa de tofu + queso ahumado + cebolla caramelizada + brotes de soja",
        precio: 900,
        stock: 5,
        imagen: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg"
    },
    {
        id: "1006",
        tipo: "Vegana",
        nombre: "Simple vegana",
        descripcion: "Hamburgesa de tofu, cheddar vegano y cebolla morada",
        precio: 750,
        stock: 10,
        imagen: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg"
    }
]

export const getFecth = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (id) {
                resolve(hamburguesas.find(prod => prod.id == id))
            } else {
                resolve(hamburguesas)
            }
        }, 1500 )
    } )
}