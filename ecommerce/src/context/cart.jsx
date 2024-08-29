import { useReducer, createContext } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart.js'

export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return { state, addToCart, removeFromCart, clearCart }

  
    //const [cart, setCart] = useState([])

    // const addToCart = product => {
    //     //setCart([... cart, product])

    //     // check si el producto está en el carrito
    //     const productInCartIndex = cart.findIndex(item => item.id == product.id)

    //     if (productInCartIndex >= 0) {
    //         // una forma usando structuredClone, pero no es la mejor
    //         const newCart = structuredClone(cart) // structuredClone hace una copia profunda
    //         newCart[productInCartIndex].quantity += 1
    //         return setCart(newCart)

    //     }


    //     // producto no está en el carrito
    //     setCart(prevState => ([
    //         ...prevState,
    //         {
    //             ...product,
    //             quantity: 1
    //         }
    //     ]))
    // }

    // const removeFromCart = product => {
    //     setCart(prevState => prevState.filter(item => item.id != product.id))
    // }

    // const clearCart = () => {
    //     setCart([])
    // }

    // a esto es a lo que quiero que se tenga acceso de este contexto
}

// la dependencia de usar React Context
// es MÍNIMA
export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}