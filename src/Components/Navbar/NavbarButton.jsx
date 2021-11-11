import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router-dom';

const NavbarButton = ({ title, menuItems }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const open = Boolean(anchorEl);
  const handleClick = event => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const goToPage = goTo => {
    history.push(goTo);
    handleClose();
  };

  return (
    <>
      <Button
        sx={{ color: 'black', fontSize: 'large' }}
        id="menuButton"
        aria-controls={`${title}-menu`}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {title}
      </Button>
      <Menu
        id={`${title}-menu`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuItems.map(item =>
          item.disabled ? (
            <MenuItem
              key={item.title}
              disabled={true}
              onClick={() => goToPage(item.link)}
            >
              {item.title}
            </MenuItem>
          ) : (
            <MenuItem key={item.title} onClick={() => goToPage(item.link)}>
              {item.title}
            </MenuItem>
          )
        )}
      </Menu>
    </>
  );
};

export default NavbarButton;
