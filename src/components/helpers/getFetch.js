let hamburguesas = [
    {
        id: 1001,
        tipo: "carne",
        nombre: "Cheese burger",
        descripcion: "Triple carne, triple queso",
        precio: 700,
        stock: 50,
        imagen: ""
    },
    {
        id: 1002,
        tipo: "carne",
        nombre: "Cheese bacon",
        descripcion: "La cheese burger + bacon",
        precio: 1000,
        stock: 25,
        imagen: ""
    },
    {
        id: 1003,
        tipo: "carne",
        nombre: "La clasica",
        descripcion: "Doble carne con queso + lechuga + tomate + cebolla",
        precio: 1000,
        stock: 25,
        imagen: ""
    },
    {
        id: 1004,
        tipo: "pollo",
        nombre: "La pechugona",
        descripcion: "Medallon de pollo con lechuga y mayonesa",
        precio: 800,
        stock: 25,
        imagen: ""
    },
    {
        id: 1005,
        tipo: "vegana",
        nombre: "Corean burger",
        descripcion: "Hamburgesa de tofu + queso ahumado + cebolla caramelizada + brotes de soja",
        precio: 900,
        stock: 5,
        imagen: ""
    },
    {
        id: 1006,
        tipo: "vegana",
        nombre: "Simple vegana",
        descripcion: "Hamburgesa de tofu, cheddar vegano y cebolla morada",
        precio: 750,
        stock: 10,
        imagen: ""
    }
]

export const getFecth = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(hamburguesas)
        }, 2000 )
    } )
}