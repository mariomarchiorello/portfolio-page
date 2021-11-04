import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router-dom';

function AboutMeButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const open = Boolean(anchorEl);
  const handleClick = event => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const goToPage = goTo => {
    history.push(goTo);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        sx={{ color: 'black' }}
        id="menuButton"
        aria-controls="about-me-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        about me
      </Button>
      <Menu
        id="about-me-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => goToPage('/')}>Home</MenuItem>
        <MenuItem disabled={true} onClick={() => goToPage('/cv')}>
          My CV
        </MenuItem>
      </Menu>
    </>
  );
}

export default AboutMeButton;
