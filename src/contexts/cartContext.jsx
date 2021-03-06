import {createContext, useState, useContext} from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    //estados y funciones que sean globales
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        let cartItem = cart.find(i => i.id == item.id) 
        if(cartItem) {
            cartItem.cantidad += item.cantidad
            setCart([...cart])
        }else {
            setCart([...cart , item])
        }
    }

    const clearCart = () => {
        setCart([])

        toast.warn('Vaciaste tu carrito!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const removeItem = (id) => {
        let test = cart.filter( (x) => x.id != id )
        setCart(test)
    }

    const totalPrice = () => {
        let tot = 0
        for (let i = 0; i < cart.length; i++) {
            tot += cart[i].precio*cart[i].cantidad
        }
        return tot
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                clearCart,
                removeItem,
                totalPrice  
            }}
        >
            { children }
        </CartContext.Provider>
    )
}