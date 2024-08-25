
import { ProductCard } from "../../../components/Elements/ProductCard"
import { useEffect, useState } from "react"
import { getFeaturedList } from "../../../services"
import { ErrorCard } from "../../../components"
export const FeatureProducts = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedList();
        setProducts(data);
        setError(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchProducts();
  }, [])

  return (
    <section>
      <h3 className=" pt-8 mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-400 from-sky-400">Service Available</span>
      </h3>
      {error && <ErrorCard />}
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section >
  )
}
