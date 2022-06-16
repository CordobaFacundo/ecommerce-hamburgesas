import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ producto }) => {
    return (
        <div className="container" >
            <div className="row g-0 bg-light position-relative" style={{ margin: "3%"}}>
                <div className="col-md-6 mb-md-0 p-md-4">
                    <img id="imagenDestino" src={producto.imagen} className="w-100" width="550" height="450" /></div>
                <div className="col-md-6 p-4 ps-md-0">
                    <h3 className="card-title">{producto.nombre.toUpperCase()}</h3><hr/>
                    <p className="card-text"><small className="text-muted">Hamburguesa tipo: {producto.categoria}</small></p>
                    <p>Descripcion : {producto.descripcion}</p>
                    <p>Proximamente: salsas</p>
                    <p>Proximamente: bebidas</p>
                    Precio: 
                    <p style={{ fontSize: '40px' }}>${producto.precio}</p><hr />
                    <ItemCount stockTot={producto.stock} initial={1} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail