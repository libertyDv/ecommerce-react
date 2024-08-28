import { useState } from 'react'
import { Products } from './components/products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header';


function App() {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

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

  const filteredProducts = filterProducts(products)

  // <Header changeFilters={setFilters}/>  ----------> se lo envio al header
  return (
    <>
    <Header changeFilters={setFilters}/> 
      <Products products={filteredProducts} />
    </>
  )
}

export default App
