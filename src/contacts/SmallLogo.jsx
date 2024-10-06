import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUser, faHomeAlt, faHomeLg, faUserAltSlash } from '@fortawesome/free-solid-svg-icons';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons/faUserAstronaut';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';

export const SmallLogo = ({ className }) => {
  return (
    <div className={`small-logo ${className}`}>
      <div className="overlap-group">
        <img
          className="your-paragraph-text"
          alt="Your paragraph text"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4913dc27622920bb57bc6b83910965d0ec0251f3c41055dea4ca3bc31fb14094?placeholderIfAbsent=true&apiKey=f2344844959a479cb405e1fddc9b6906"
        />
        <div className="text-wrapper">ContApp</div>
        <div className="navbar">
            <a href="" className='navbarIcon'><FontAwesomeIcon icon={faSearch} /></a>
            <a href="../index.html" className='navbarIcon'><FontAwesomeIcon icon={faHomeLg} /></a>
            <a href="" className='navbarIcon'><FontAwesomeIcon icon={faUserCircle} /></a>
      </div>
      </div>
    </div>
  );
};
