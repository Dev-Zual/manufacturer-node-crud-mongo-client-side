import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/review">Review</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      {/* {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li> */}
    </>
  );
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu font-bold menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl font-bold">
          ELECTRIX tools
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal font-bold p-0">{menuItems}</ul>
      </div>
      <div class="navbar-end">
        {/* {user && (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )} */}
        <ul class="menu menu-horizontal font-bold p-0">
          <li>{user ? <p>{user.displayName}</p> : ''}</li>
          <li>
            {user ? (
              <button className="btn btn-ghost" onClick={logout}>
                Sign Out
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
