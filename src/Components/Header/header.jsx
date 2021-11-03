import React, { useState } from 'react';
import { Container } from './style';
import logo from '../../Assets/logos/logo_transparent_background.png';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router-dom';

function Header(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const open = Boolean(anchorEl);
  const handleClick = event => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = goTo => {
    history.push(goTo);
    setAnchorEl(null);
  };

  return (
    <>
      <Container>
        <section className="logo">
          <img src={logo} alt={'mario marchiorello logo'} />
        </section>

        <section className="menu">
          <div>
          <Button
              sx={{color:"black"}}
              id="basic-button">About me</Button>
        </div>
        <div>
            <Button
              sx={{color:"black"}}
              id="menuButton"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Examples
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => handleClose('/books')}>
                Library challenge
              </MenuItem>
              <MenuItem
                  disabled={true}
                  onClick={() => handleClose('/books')}>
                starwars API
              </MenuItem>
            </Menu>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Header;
