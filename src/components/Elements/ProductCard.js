import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useState, useEffect } from 'react';

export const ProductCard = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const found = cartList.find((item) => item.id === product.id);
    setIsInCart(found ? true : false);
  }, [cartList])

  function handleClick(product) {
    addToCart(product);
  }
  function handleRemove(product) {
    removeFromCart(product);
  }

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to="/" className="relative" >
        <span className="absolute bottom-4 right-2 px-2 bg-orange-400 bg-opacity-80 text-white rounded">Feature Service</span>
        <img className="rounded-t-lg w-full h-64" src={product.photo} alt={product.name} />
      </Link>
      <div className="p-5">
        <Link to="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>

        <p className="flex justify-between items-center mt-4">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span><span>{product.price}</span>
          </span>
          {!isInCart ?
            (<button onClick={() => { handleClick(product) }} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-800">Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>)
            :
            (
              <button onClick={() => { handleRemove(product) }} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800">Remove Item <i className="ml-1 bi bi-trash3"></i></button>)
          }
        </p>
      </div>
    </div>
  )
}