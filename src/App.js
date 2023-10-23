import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage';
import CheckOutForm from './pages/CheckOutForm';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/components/Protected';
import Logout from './features/auth/components/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Protected><Home /></Protected>} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/checkout' element={<Protected><CheckOutForm /></Protected>} />
      <Route path='/product/:id' element={<Protected><ProductDetailPage /></Protected>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App