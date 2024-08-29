import { useContext } from "react"
import { FiltersContext } from "../context/filters"

export function useFilters() {

    // const [filters, setFilters] = useState({
    //   category: 'all',
    //   minPrice: 0
    // })
  
    const {filters, setFilters} = useContext(FiltersContext) // esto está exportado en filters.jsx. aqui le tengo que pasar lo mismo que tenga en el archivo donde está el context
  
  
    const filterProducts = (products) => {
      return products.filter(product => {
        return (
          product.price >= filters.minPrice &&
          (
            filters.category == "all" ||
            product.category == filters.category // si no es all, mostramos los productos que tengan la misma categoria que filters category
          )
        )
      })
    }
    return { filters, filterProducts, setFilters }
  }