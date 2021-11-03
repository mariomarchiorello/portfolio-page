import React, { useState } from 'react';
import { Container } from './style';
import logo from '../../Assets/logos/logo_transparent_background.png';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router-dom';
import AboutMeButton from "./aboutMeButton";
import ExamplesButton from "./examplesButton";

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

            <AboutMeButton/>

            <ExamplesButton/>
        </section>
      </Container>
    </>
  );
}

export default Header;
