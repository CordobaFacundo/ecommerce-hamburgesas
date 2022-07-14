import { useState} from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useCartContext } from "../../contexts/cartContext"

const ItemDetail = ({ producto }) => {
    const [test, setTest] = useState('button')
    const { cart, addToCart } = useCartContext()

    const onAdd = (cant) => {
        addToCart({...producto, cantidad: cant})
        
        toast.success(`🚀 Agregaste ${cant} al carrito! `, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            
        setTest('input')
    }

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
                    {
                        test == 'button'?
                            producto.stock > 0 ?
                                <ItemCount stockTot={producto.stock} initial={1} onAdd={onAdd} />
                                :
                                <div class="alert alert-danger" role="alert">Stock no disponible</div>
                        :
                            <div>
                                <Link to={'/Cart'}>
                                    <button className="btn btn-primary">Terminar compra</button>
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail