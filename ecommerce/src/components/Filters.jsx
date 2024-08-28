
import { useState } from "react"
import "./Filters.css"

export function Filters({onChange}) {

    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        // estamos pasando la funcion de actualizar estado nativa de React a un componente hijo
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    
    

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Min. price</label>
                <input
                    type="range"
                    id="price"
                    min="0"
                    max="1000"
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Categoríaa</label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="beauty">Beauty</option>
                    <option value="fragrances">Fragances</option>
                </select>
            </div>
        </section>
    )
}