import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Button, Select, MenuItem } from '@mui/material';
import { FaSearch, FaUser, FaBars, FaHome } from 'react-icons/fa';
import './Menu.css';
import { ImFileText2, ImEarth } from "react-icons/im";



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
    <AppBar position="static">
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

          <div className="logo">Shortcut Tainer</div>
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
            <Button className="sign-up" color="inherit">Sign Up</Button>
            <Button className="sign-in" color="inherit">Sign In</Button>
          </div>

          <div className="user-profile">
            <FaUser />
            <span>User Name</span>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};
