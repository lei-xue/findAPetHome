import { Link } from "react-router-dom"
import { useCart } from "../../../context"
export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();
  function handleRemove(product) {
    removeFromCart(product);
  }
  let url;

  if (product.id < 3) {
    url = `../featured_products/${product.id}`
  } else {
    url = `../products/${product.id}`
  }

  return (
    <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
        <Link to="">
          <img className="w-32 rounded" src={product.photo} alt={product.name} />
        </Link>
        <div className="">
          <Link to={url}>
            <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
          </Link>
          <button style={{ textAlign: 'right' }}
            onClick={() => handleRemove(product)} className="text-red-400">Remove</button>
        </div>

      </div>
      <div className="text-lg m-2 dark:text-slate-200">
        <span>$ {product.price}</span>
      </div>
    </div>
  )
}