import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ producto }) => {
    return (
        <div className="card mb-3" style={{maxWidth: "540px", margin: "3%"}}>

        <div className="row g-0">
            <div className="col-md-4">
                <img src={producto.imagen} className="w-100" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h4 className="card-title">{producto.nombre}</h4>
                    <p className="card-text"><small className="text-muted">Hamburguesa tipo: {producto.tipo}</small></p>
                    <p className="card-text">{producto.descripcion}</p>
                    Precio:
                    <p style={{ fontSize: '40px' }}>$ {producto.precio}</p>
                    <ItemCount stockTot={producto.stock} initial={1} />
                </div>
            </div>
        </div>
        </div>
    )
}

export default ItemDetail