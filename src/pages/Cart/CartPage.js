import React from 'react'
import { CartEmpty } from './components/CartEmpty'
import { useCart } from '../../context/CartContext'
import { CartList } from './components/CartList'

export const CartPage = () => {
  const { cartList } = useCart();

  return (
    <main>
      {console.log(cartList)}
      {cartList.length === 0 ? <CartEmpty /> : <CartList />}

    </main>
  )
}
