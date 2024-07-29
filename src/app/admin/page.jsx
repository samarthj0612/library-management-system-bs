"use client"
import React,{ useState } from 'react'
import '../../styles/admin-panel.css';
import Link from 'next/link';
import Image from 'next/image';

const AdminLayout = ({children}) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item === activeItem ? null : item);
  };

  return (
    <>
      <div style={{ display: 'flex', minHeight: '100vh'}}>
        <nav className='sidebar'>
          <ul className='sidebar-list'>
            <li className={activeItem === 1 ? 'active' : ''} onClick={() => handleClick(1)}>
              <div>
              <li><Link href={`/admin/notice`}>Add Notice</Link></li>
              </div>
            </li>
            <li className={activeItem === 2 ? 'active' : ''} onClick={() => handleClick(2)}>
              <div >
              <li><Link href={`/admin/addBooks`}>Books</Link></li>
              </div>
            </li>
            <li className={activeItem === 3 ? 'active' : ''} onClick={() => handleClick(3)}>
              <div >
              <li><Link href={`/admin/branchDetails`}>Branch Details</Link></li>
              </div>
            </li>
            <li className={activeItem === 4 ? 'active' : ''} onClick={() => handleClick(4)}>
              <div>

              <li><Link href={`/admin/addBranch`}>Add Branch</Link></li>
              </div>
            </li>

            <li className={activeItem === 5 ? 'active' : ''} onClick={() => handleClick(4)}>
              <div>

              <li><Link href={`/admin/notifications`}>Notifications</Link></li>
              </div>
            </li>

          </ul>
        </nav>
        <div className='line'></div>

      <div style={{ flex: 1, padding: '20px', paddingTop: "4rem" }}>
        {children}
      </div>
      </div>
    </>
  );
};
export default AdminLayout