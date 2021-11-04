import React from 'react';
import { Container } from './style';
import logo from '../../Assets/logos/logo_transparent_background.png';
import AboutMeButton from './aboutMeButton';
import ExamplesButton from './examplesButton';

function Header() {
  return (
    <>
      <Container>
        <section className="logo">
          <img src={logo} alt={'mario marchiorello logo'} />
        </section>

        <section className="menu">
          <AboutMeButton />

          <ExamplesButton />
        </section>
      </Container>
    </>
  );
}

export default Header;
