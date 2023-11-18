import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaUser, FaBars, FaHome } from 'react-icons/fa';
import './Menu.css';
import { ImFileText2, ImEarth } from "react-icons/im";



export default function MenuComponent(props) {

  const [searchQuery, setSearchQuery] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('');
  const menuRef = useRef(null);

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>

      <div className={`menu-items ${showMenu ? 'show' : ''}`}>
        <span
          className={activeMenuItem === 'Item 1' ? 'active' : ''}
          onClick={() => handleMenuItemClick('Item 1')}
        >
          <FaHome />  Home
        </span>
        <span
          className={activeMenuItem === 'Item 2' ? 'active' : ''}
          onClick={() => handleMenuItemClick('Item 2')}
        >
          <ImFileText2 />  All Courses
        </span>
        <span
          className={activeMenuItem === 'Item 3' ? 'active' : ''}
          onClick={() => handleMenuItemClick('Item 3')}
        >
          Menu Item 3
        </span>
      </div>

      <div className="logo">Shurtcat  Tainer</div>

      <div className="search-bar">
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      <div className='languageselect'>
        <ImEarth />
      </div>

      <div className="user-actions">
        <button className="sign-up">Sign Up</button>
        <button className="sign-in">Sign In</button>
      </div>
      <div className="user-profile">
        <FaUser />
        <span>User Name</span>
      </div>
    </nav>
  );
};
