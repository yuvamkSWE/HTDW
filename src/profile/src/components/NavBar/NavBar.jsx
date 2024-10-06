
import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUser, faHomeAlt, faHomeLg, faUserAltSlash } from '@fortawesome/free-solid-svg-icons';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons/faUserAstronaut';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';

export const NavBar = ({ className }) => {
  return (
    <div className="navbar">

             <a href="" className='navbarIcon'><FontAwesomeIcon icon={faSearch} /></a>
            
            <a href="../index.html" className='navbarIcon'><FontAwesomeIcon icon={faHomeLg} /></a>
            {/* 
            
            */}
           <a href="../contacts.html" className='navbarIcon'><FontAwesomeIcon icon={faUserCircle} /></a> 
      </div>
  );
};
