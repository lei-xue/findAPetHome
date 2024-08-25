import React from 'react'
import { CartEmpty } from './components/CartEmpty'
import { useCart } from '../../context/CartContext'
import { CartList } from './components/CartList'
import { useTitle } from '../../hooks/useTitle'

export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart ${cartList.length}`);

  return (
    <main>
      {cartList.length === 0 ? <CartEmpty /> : <CartList />}

    </main>
  )
}
