import React from 'react'
import edu from '../../assets/img/edu.png';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {

    const nav_titles = [
        {
            path:'/',display:'Home' 
        },
        {
            path:'/services',display:'Service'
        },
        {
            path:'/courses',display:'Course'
        },
        {
            path:'/About',display:'About Us'
        },
    ]

    return (
       <header className='header'>
  <div className="container">
    <div className="nav_container">
      <div className="logo-img">
        <img src={edu} alt="Logo" />
        <h2>GFC EDU</h2>
      </div>
      <div className='navigation'>
        <ul className='menu'>
          {nav_titles.map((item, index) => (
            <li className='nav-item'><Link to={item.path}>{item.display}</Link></li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header
