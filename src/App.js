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
import PageNotFound from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage';
import AdminHome from './pages/AdminHome';
import AdminProductDetailPage from './pages/AdminProductDetailPage';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
import AdminProductFormPage from './pages/AdminProductFormPage';
import UserOrderPage from './pages/UserOrderPage';
import UserProfilePage from './pages/UserProfilePage';
import AdminOrderPage from './pages/AdminOrderPage';

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Protected><Home /></Protected>} />
      <Route path='/admin' element={<ProtectedAdmin><AdminHome /></ProtectedAdmin>} />
      <Route path='/admin/product-form' element={<ProtectedAdmin><AdminProductFormPage /></ProtectedAdmin>} />
      <Route path='/admin/product-form/edit/:id' element={<ProtectedAdmin><AdminProductFormPage /></ProtectedAdmin>} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/checkout' element={<Protected><CheckOutForm /></Protected>} />
      <Route path='/product/:id' element={<Protected><ProductDetailPage /></Protected>} />
      <Route path='/admin/product/:id' element={<ProtectedAdmin><AdminProductDetailPage /></ProtectedAdmin>} />
      <Route path='*' element={<PageNotFound />} />
      <Route path='/order-success/:id' element={<OrderSuccessPage />} />
      <Route path='/orders' element={<UserOrderPage />} />
      <Route path='/admin/admin-orders' element={<AdminOrderPage />} />
      <Route path='/profile' element={<UserProfilePage />} />
    </Routes>
    </BrowserRouter>
  )
}
export default App