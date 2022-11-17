import './App.css';
import { useEffect, useState } from 'react';
import { Header } from "./components/Header"
import { ProductList } from './components/ProductsList';
import { Cart } from "./components/Cart"

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res)
        setFilteredProducts(res)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <Header products={products} setFilteredProducts={setFilteredProducts} />
      <main className='main-container'>
        <ProductList
          filteredProducts={filteredProducts}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale} />
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </main>
    </div>
  );
}

export default App;
