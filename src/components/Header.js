import React from "react";
import facebookpng from "../../asserts/facebook-logo.png";

function Header() {
  return (
    <header>
      <img src={facebookpng} alt="Logo do facebook" width="150px" />
      <h3>
        <a>Meu perfil</a>
      </h3>
    </header>
  );
}

export default Header;
