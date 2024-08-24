import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, ProductDetail, ProductLists, Login, Register, CartPage, OrderPage, DashboardPage } from '../pages'
import { ProtectedRoutes } from './ProtectedRoutes'


export const AllRoutes = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductLists />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
        <Route path="order-summary" element={<ProtectedRoutes><OrderPage /></ProtectedRoutes>} />
        {<Route path="dashboard" element={<ProtectedRoutes><DashboardPage /></ProtectedRoutes>} />}
      </Routes>
    </>
  )
}
