import React from 'react'
import Header from '../features/header/Header'
import AdminProductList from '../features/admin/components/AdminProductList'

const AdminHome = () => {
  return (
    <div>
        <Header />
        <AdminProductList />
    </div>
  )
}

export default AdminHome