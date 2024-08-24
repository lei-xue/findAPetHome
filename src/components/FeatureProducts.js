
import { ProductCard } from "./Elements/ProductCard"
import { useEffect, useState } from "react"

export const FeatureProducts = () => {
  const [products, setProducts] = useState([])


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:8000/featured_products')
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <section>
      <h3 className=" pt-8 mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-400 from-sky-400">Service Available</span>
      </h3>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section >
  )
}
