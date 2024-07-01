'use client'

import React from 'react'
import ProtectedRoute from '../_components/ProtectedRoute'

const Profile = () => {
  return (
    <ProtectedRoute>
      <div>Profile</div>
    </ProtectedRoute>
  )
}

export default Profile