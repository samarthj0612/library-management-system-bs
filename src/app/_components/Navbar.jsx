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
    <nav className="navbar navbar-expand-lg  p-1" style={{ backgroundColor: '#F3DAE1' }}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" href="/">Dream Library</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services">Branches</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Libraries
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" href="/libraries/library1">Library-1</Link></li>
                <li><Link className="dropdown-item" href="/libraries/library2">Library-2</Link></li>
                <li><Link className="dropdown-item" href="/libraries/library3">Library-3</Link></li>
                <li><Link className="dropdown-item" href="/libraries/library4">Library-4</Link></li>
                <li><Link className="dropdown-item" href="/libraries/library5">Library-5</Link></li>
                <li><Link className="dropdown-item" href="/libraries/library6">Library-6</Link></li>
                {/* <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" href="#">Something else here</Link></li> */}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">Facilities</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">Contact</Link>
            </li>
          </ul>
          {!user ? (
            <Link href='/auth/login' className="d-flex align-items-center">
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