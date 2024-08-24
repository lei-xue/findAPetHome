import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { useCart } from "../context";
import { getService } from "../services";

export const ServiceDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { cartList, addToCart, removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);


  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getService(id);
      setProduct(data);
    }
    fetchProduct()

  }, [id]);

  useEffect(() => {
    const found = cartList.find((item) => item.id === product.id);
    setIsInCart(found ? true : false);
  }, [cartList, product.id])

  const { name, photo, price, description, long_description } = product;

  useTitle(name);
  return (
    <main>
      <section>
        <h1 className="my-8 mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{name}</h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{description}</p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded" src={photo} alt={name} />
          </div>
          <div className="max-w-xl my-3 mx-4">
            <p className="text-3xl font-bold text-gray-800 dark:text-slate-200 flex justify-between items-center mx-12">
              <span className="mr-1 text-2xl text-pink-500">Service</span>
              <span className="">$ {price}</span>
            </p>
            <p className="my-6 select-none">
              <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-4 py-1 mr-2">Afforable</span>
              <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-4 py-1 mr-2">Walk-in</span>
              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-4 py-1 mr-2">Popular</span>
            </p>
            <blockquote class="my-4 text-xl italic font-semibold text-center text-gray-900 dark:text-white">
              <p className="mx-6 text-left">
                " {long_description}"
              </p>
            </blockquote>
            <p className="my-3">
              {!isInCart && <button onClick={() => { addToCart(product) }} className={`inline-flex items-left py-2 px-5 text-lg font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-800`}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>}
              {isInCart && <button onClick={() => { removeFromCart(product) }} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`} >Remove Item <i className="ml-1 bi bi-trash3"></i></button>}
            </p>
          </div>
        </div>
      </section>
    </main >
  )
}
