
import { useId } from "react"
import "./Filters.css"
import { useFilters } from "../hooks/useFilters"

export function Filters() {

    const { filters, setFilters } = useFilters()
    //   const [minPrice, setMinPrice] = useState(0) // estado local -- lo quito porque no es bueno que haya un estado local y uno global, ya que siempre me tengo que fiar del global. Para el cambio, añado filters en la variable de arriba
    const minPriceFilterId = useId()
    const categoryFilterId = useId() // se van creando id únicas cada vez q se renderiza (o sea, la id va cambiando) ya que tengo el useeffect en app

    const handleChangeMinPrice = (event) => {
        // // aquí hay "2 fuentes de la verdad". lo que quiere decir es que el precio mínimo está tanto como en un estado local como en uno glo
        // setMinPrice(event.target.value)
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        // estamos pasando la funcion de actualizar estado nativa de React a un componente hijo
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }


    //  <span>${filters.minPrice}</span>  ------> de esta manera, si en filters.jsx cambio el precio mínimo, se mostrará en la app cual es el minimo directamente
    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Min. price</label>
                <input
                    type="range"
                    id={minPriceFilterId} // les pongo id únicas
                    min="0"
                    max="1000"
                    onChange={handleChangeMinPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoríaa</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="beauty">Beauty</option>
                    <option value="fragrances">Fragances</option>
                </select>
            </div>
        </section>
    )
}