import React from 'react';
import './Header.css';
import logo from '../../assets/habot-logo.png'
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

function Header() {
  return (
    <div className='container'>
      <div className='header'>
        <div className='logo-wrapper'>
          <img src={logo} alt="logo" className='logo' />
        </div>
        <div className='menu-items'>
          <div className='find-suppliers-link'>
            <Link to="" >Find Suppliers</Link>
          </div>
          <div className='service-tags-dropdown'>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className='custom-dropdown'>
                Find Service Tags
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className='login-signup'>
            <button type='button' className='login-signup-btn'>
              Login / SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
