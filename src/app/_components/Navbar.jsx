'use client'

import { useAuth } from '@/contexts/authContext';
import Link from 'next/link';
import React from 'react';
import { CiLogin } from "react-icons/ci";

const Navbar = () => {

  const { user, signout } = useAuth();
  console.log("Loggedin User => ", user);

  const logoutHandler = () => {
    signout();
  }

  return (
    <nav className="navbar navbar-expand-lg  p-1.5" style={{ backgroundColor: '#F3DAE1' }}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" href="/">Dream Library</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/#Home">Home</Link>
            </li>
            <li className="nav-item">



              <Link className="nav-link" href="/#branches">Branches</Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" href="/#facilities">Facilities</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">Contact</Link>
            </li>
          </ul>
          {!user ? (
            <Link href='/loginform' className="d-flex align-items-center">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button> */}
             Existing User Login
              <CiLogin size={24} />
            </Link>
          ) : (
            <>
              {/* {user?.email} */}
              <button onClick={logoutHandler}>Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar