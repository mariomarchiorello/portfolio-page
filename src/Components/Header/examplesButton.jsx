import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router-dom';

function ExamplesButton() {
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
        sx={{ color: 'black', fontSize: 'large' }}
        id="menuButton"
        aria-controls="examples-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        examples
      </Button>
      <Menu
        id="examples-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => goToPage('/books')}>
          Library Challenge
        </MenuItem>
        <MenuItem disabled={true} onClick={() => goToPage('/')}>
          Starwars API
        </MenuItem>
      </Menu>
    </>
  );
}

export default ExamplesButton;
