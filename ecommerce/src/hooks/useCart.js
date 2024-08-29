import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () => {
    const context = useContext(CartContext)

    // esto salta si estoy usando el customHook en un sitio donde no puedo porque esa parte de la app no está envuelta con un provider
    // siempre hay que tener en cuenta donde poner el provider. hay veces que no hace falta que envuelva toda la app, sino en partes concretas
    if (context == undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }

    return context
} 