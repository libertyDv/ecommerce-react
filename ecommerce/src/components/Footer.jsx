import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
  const { filters } = useFilters()
  const { cart } = useCart()

  /*
  {
            JSON.stringify(filters, null,2) // esto funciona como debugger 
        }
             {
        JSON.stringify(cart, null, 2) // esto funciona como debugger 
      }
  */

  return (
    <footer className='footer'>

      <h4>Prueba técnica de React ⚛️ － </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>

    </footer>

  )
}