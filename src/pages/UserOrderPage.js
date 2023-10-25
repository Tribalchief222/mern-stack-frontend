import React from 'react'
import Header from '../features/header/Header'
import { UserOrders } from '../features/user/components/UserOrders'

const UserOrderPage = () => {
  return (
    <div>
        <Header />
        <h1 className='mx-24 font-bold mb-10 text-4xl'>My Orders</h1>
        <UserOrders />
    </div>
  )
}

export default UserOrderPage