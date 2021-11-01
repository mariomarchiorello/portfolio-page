import React, {useState} from 'react';
import { Container } from './style';
import logo from "../../Assets/logos/logo_transparent_background.png"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Header(props) {
    const [anchorEl, setAnchorEl] = useState()
    const open = Boolean(anchorEl)


  return (
    <>
      <Container>
          <section className="logo"><img src={logo} alt={"mario marchiorello logo"}/></section>

          <section className="menu">
              <Button
                  id="basic-button">About me
              </Button>
              <Button
                  id="menuButton"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}>
                  Examples
              </Button>

          </section>

      </Container>
    </>
  );
}

export default Header;
