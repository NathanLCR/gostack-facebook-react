import React from 'react';

import './Navbar.css';
import facebookLogo from '../Assets/facebook-1.png';

function Navbar() {
  return (
    <nav>
      <img src={facebookLogo} alt="Logo Facebook" />
      <h3>Meu perfil</h3>
    </nav>
  );
}

export default Navbar;
