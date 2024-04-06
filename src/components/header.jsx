import React from 'react'
import './header.css';
import { Link , NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
          <div className='logo'>
            <Link to='/' >Movies </Link>
          </div>
          <ul className='nav-links'>
            <li>
              <NavLink to='/'>watch List</NavLink>
            </li>
            <li>
              <NavLink to='/watched'>watched</NavLink>
            </li>
            <li>
            <NavLink to='/add' className='btn'>Add</NavLink>

            </li>
          </ul>
        </div>
    </div>
  )
}

export default Header