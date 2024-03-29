import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Button, Select, MenuItem } from '@mui/material';
import { FaSearch, FaUser, FaBars, FaHome } from 'react-icons/fa';
import './Menu.css';
import { ImFileText2, ImEarth } from "react-icons/im";
import LoginButton from './Auth0Buttons/LoginButton';
import LogoutButton from './Auth0Buttons/LogoutButton';
import RegisterButton from './Auth0Buttons/RegisterButton';
import ProfileButton from './Auth0Buttons/ProfileButton';


export default function MenuComponent(props) {

  const [showMenu, setShowMenu] = React.useState(false);
  const [activeMenuItem, setActiveMenuItem] = React.useState('Item 1');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedLanguage, setSelectedLanguage] = React.useState('en');

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item);
    // Add logic you need when a menu item is clicked
  };

  const handleSearch = () => {
    //logic for handling search
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // Add logic for handling language change
  };

  return (
    <AppBar position="fixed">
      <Toolbar className='toolbar' style={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton className="menu-icon" onClick={toggleMenu} color="inherit">
            <FaBars />
          </IconButton>

          <div className={`menu-items ${showMenu ? 'show' : ''}`}>
            <Button
              className={activeMenuItem === 'Item 1' ? 'active' : ''}
              onClick={() => handleMenuItemClick('Item 1')}
              startIcon={<FaHome />}
            >
              Home
            </Button>
            <Button
              className={activeMenuItem === 'Item 2' ? 'active' : ''}
              onClick={() => handleMenuItemClick('Item 2')}
              startIcon={<ImFileText2 />}
            >
              All Courses
            </Button>
            <Button
              className={activeMenuItem === 'Item 3' ? 'active' : ''}
              onClick={() => handleMenuItemClick('Item 3')}
            >
              Menu Item 3
            </Button>
          </div>

          <div className="logo">Shortcut Trainer</div>
        </div>

      

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className='language'>
            <div className='worldIcon'>
              <ImEarth />
            </div>
            <div className='languageselect'>
              <Select
                id="languageSelect"
                value={selectedLanguage}
                onChange={handleLanguageChange}
                label="Language"
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="de">German</MenuItem>
              </Select>
            </div>
          </div>

          <div className="user-actions">
            <div className='login'>
              <LoginButton />
            </div>
            <div className='logout'>
              <LogoutButton />
            </div>
            <div className='login'>
              <RegisterButton />
            </div>
          </div>

          <div className="user-profile">
             <ProfileButton onClick={() => props.showProfile()} />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
