import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideNav.css';

const SideNav = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "280px", height: "100vh"}}>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link side-nav-link active my-1" aria-current="page">Home</NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="nav-link side-nav-link  my-1">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/shop" className="nav-link side-nav-link  my-1">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/doctors" className="nav-link side-nav-link  my-1">Doctors Near Me</NavLink>
        </li>
        <li>
          <NavLink to="/stock-details" className="nav-link side-nav-link my-1">Stock Details</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
