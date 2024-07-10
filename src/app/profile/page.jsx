'use client'

import React from 'react'
import ProtectedRoute from '../_components/ProtectedRoute'

const Profile = () => {
  return (
    <ProtectedRoute>
      <div style={{color:"white"}}>Profile</div>
    </ProtectedRoute>
  )
}

export default Profile