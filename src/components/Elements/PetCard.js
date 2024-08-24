import { Link } from "react-router-dom"
import { useCart } from "../../context"
import { useState, useEffect } from "react"



export const PetCard = ({ product }) => {
  const { id, name, photo, species, birthYear, description, price } = product
  const year = new Date().getFullYear() - Number(birthYear)

  const { cartList, addToCart, removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const found = cartList.find((item) => item.id === product.id);
    setIsInCart(found ? true : false);
  }, [cartList, product.id])

  function handleClick(product) {
    addToCart(product);
  }
  function handleRemove(product) {
    removeFromCart(product);
  }


  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${id}`}>
        <img className="rounded-t-lg w-full h-64 p-2" src={photo} alt={name} />
      </Link>
      <div className="px-5 pb-5">
        <Link to={`/products/${id}`}>
          <h1 className="text-2xl  py-1 font-semibold tracking-tight text-purple-800 dark:text-white " >{name}</h1>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400">{species} • Born in {birthYear} • {year > 0 ? `${year} year(s) old` : `6 months `}</p>
        <p className="mt-2 text-gray-700 dark:text-gray-300 h-20 text-left">{description}</p>
        <div className="justify-between flex">
          <span className="text-2xl text-gray-900 dark:text-white">${price}</span>
          {!isInCart && <button to="#" onClick={() => { handleClick(product) }} className="text-white bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-500 dark:hover:bg-pink-700 dark:focus:ring-pink-500">Add to cart
            <i className="ml-1 bi bi-plus-lg"></i></button>}
          {
            isInCart && <button to="#" onClick={() => { handleRemove(product) }} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-800 dark:focus:ring-red-500">Remove
              <i className="ml-1 bi bi-trash3"></i></button>
          }
        </div>
      </div>
    </div >
  )
}
