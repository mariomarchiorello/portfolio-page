import React from 'react';
import * as S from './style';
import Logo from '../Logo/logo';
import NavbarButton from './NavbarButton';
import { navbarButtons } from './navbarButtons';

const Navbar = () => (
  <S.Container>
    <Logo />

    <S.MenuSection>
      {navbarButtons.map(btn => (
        <NavbarButton
          key={btn.title}
          title={btn.title}
          menuItems={btn.menuItems}
        />
      ))}
    </S.MenuSection>
  </S.Container>
);

export default Navbar;
