'use client'

import React,{useState} from 'react'
import ProtectedRoute from '../_components/ProtectedRoute';
import '../../styles/student-panel.css';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const Profile = ({children}) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item === activeItem ? null : item);
  };

  const {id} = useParams()
  console.log("UID", id)



  return (
    // <ProtectedRoute>
      <div style={{ display: 'flex', minHeight: '100vh'}}>
        <nav className='sidebar'>
          <ul className='sidebar-list'>
            <li className={activeItem === 1 ? 'active' : ''} onClick={() => handleClick(1)}>
              <div>
              <li><Link href={`/profile/${id}/user`}>Profile</Link></li>
              </div>
            </li>
            <li className={activeItem === 2 ? 'active' : ''} onClick={() => handleClick(2)}>
              <div >
              <li><Link href={`/profile/${id}/notification`}>Notification</Link></li>
              </div>
            </li>
            <li className={activeItem === 3 ? 'active' : ''} onClick={() => handleClick(3)}>
              <div >
              <li><Link href={`/profile/${id}/renewPlan`}>Renew Plan</Link></li>
              </div>
            </li>
            <li className={activeItem === 4 ? 'active' : ''} onClick={() => handleClick(4)}>
              <div>

              <li><Link href={`/profile/${id}/paymentHistory`}>Payment History</Link></li>
              </div>
            </li>
            <li className={activeItem === 5 ? 'active' : ''} onClick={() => handleClick(5)}>
              <div>

              <li><Link href={`/profile/${id}/Rules`}>Rules & Regulations</Link></li>
              </div>
            </li>

          </ul>
        </nav>
        <div className='line'></div>

      <div style={{ flex: 1, padding: '20px', paddingTop: "4rem" }}>
        {children}
      </div>
      </div>
    // </ProtectedRoute>
  )
}

export default Profile