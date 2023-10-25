import React from 'react'
import Header from '../features/header/Header'
import { UserProfile } from '../features/user/components/UserProfile'

const UserProfilePage = () => {
  return (
    <div>
        <Header />
        <UserProfile />
    </div>
  )
}

export default UserProfilePage