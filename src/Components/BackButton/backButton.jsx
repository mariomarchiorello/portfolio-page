import React from 'react';
import { Link } from 'react-router-dom';
import { GoHome } from '../../Styles/globalstyle';

function BackButton() {
  return (
    <div>
      <Link to="/books">
        <GoHome>Home</GoHome>
      </Link>
    </div>
  );
}

export default BackButton;
