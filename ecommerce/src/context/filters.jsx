import { createContext, useState } from "react";


/*
A la hora de los provider, hay 3 pasos:
1. creo el contexto
2. distribuyo el contexto
3. consumo el contexto
*/

// eso es un Singleton --> patrón de diseño que garantiza que una clase tenga una única instancia y proporciona un punto global de acceso a esa instancia.
// 1. Creo el contexto ---- este es el que hay que consumir
export const FiltersContext = createContext()

// 2. Creo el Provider, para proveer el contexto ---- este es el que provee
export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    return (
        <FiltersContext.Provider value={{
           filters,
           setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
} 