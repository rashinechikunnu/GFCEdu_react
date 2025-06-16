import React from 'react'
import logo from '../../assets/img/logo.png';
import './Header.css';
function Header() {

    const nav_titles = [
        {
            path:'/',display:'Home' 
        },
        {
            path:'/',display:'Service'
        },
        {
            path:'/',display:'Course'
        },
        {
            path:'/',display:'About Us'
        },
    ]

    return (
       <header className='header'>
  <div className="container">
    <div className="nav_container">
      <div className="logo-img">
        <img src={logo} alt="Logo" />
        <h2>GFC EDU</h2>
      </div>
      <div className='navigation'>
        <ul className='menu'>
          {nav_titles.map((item, index) => (
            <li className='nav-item'>{item.display}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header
