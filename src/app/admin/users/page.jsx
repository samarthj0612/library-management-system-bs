"use client"

import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '@/app/firebase/config';

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "users"))
      setUsers(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    fetchItems()
  }, [])

  const handleDelete = async (id) => {
    const itemRef = doc(db, "users", id)
    try {
      await deleteDoc(itemRef)
      alert("User deleted successfully")
    } catch (error) {
      console.error("Error deleting document: ", error)
      alert("Error deleting item")
    }
  }

  return (
    <div>
      Users
      <div className="border w-96 text-center p-4">
        <h2>List of Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="border-t-2 p-2">
              <p>{user.username}</p>
              <p onClick={() => handleDelete(user.id)}>Delete</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Users