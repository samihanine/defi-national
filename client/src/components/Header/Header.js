import React, { useEffect, useContext, useState } from 'react'
import Media from 'react-media';
import axiosConfig from 'axiosConfig';
import './Header.scss'

//Components

import NavbarDesktop from "./Desktop/NavbarDesktop";
import NavbarMobile from "./Mobile/NavbarMobile";


const Header = () => {

  return (
    <Media queries={{
      small: "(max-width: 599px)",
      medium: "(min-width: 600px) and (max-width: 1199px)",
      large: "(min-width: 1200px)"
    }}>
      {matches => (
        <>
          {matches.small && <NavbarMobile />}
          {matches.medium && <p>I am medium!</p>}
          {matches.large && <NavbarDesktop />}
        </>
      )}
    </Media>
  )
}

export default Header;