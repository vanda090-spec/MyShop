import { ProductList } from '../Components/ProductList'
import { AllProductsButton } from '../Components/Header'
import { ProductsByPage } from '../Components/Pagination'
import { ProductsByCategory } from '../Components/CategoryFilter'
import './App.css'
import { useEffect } from 'react'
import { useShop } from './ShopContext'

function App() {
  const { getProducts } = useShop()
  useEffect(() => { getProducts() }, [])
  return (
    <>
      <>
      <div className="min-h-screen bg-slate-100">

        <div className="flex justify-center">
          <img src="/dummyjson.png" alt="DummyJSON Store" className="w-96" />
        </div>

        <div className="flex flex-col items-center gap-4 mb-6">

          <div className="flex justify-center w-full">
            <AllProductsButton />
          </div>

          <ProductsByCategory />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-4 justify-items-center">
          <ProductList />
        </div>

        <div className="flex justify-center mt-8">
          <ProductsByPage />
        </div>

        </div>
      </>
    </>
  )
}

export default App
