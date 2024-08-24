import { Link } from "react-router-dom"

export const CartEmpty = () => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-16 dark:text-slate-100 border dark:border-slate-700 rounded">
      <div className="my-10">
        <p className="bi bi-cart text-pink-600 text-7xl mb-5"></p>
        <p>Oops! Your cart looks empty!</p>
        <br />
        <p>Add Pets or services to your cart from our store collection.</p>
      </div>
      <Link to="/products" type="button" className="text-white bg-pink-700 hover:bg-pink-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 focus:outline-none">Continue Shopping <i className="ml-2 bi bi-cart"></i></Link>
    </section>
  )
}