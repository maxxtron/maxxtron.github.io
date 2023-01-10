import React from 'react';
import avatar from '../../img/avatar.jpg';
import './header.css';
import resume from '../../files/resume.pdf';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__avatar">
          <img src={avatar} alt="My Portfolio" />
        </div>
        <h1 className="header__title">
          <strong>
            Hi, my name is{' '}
            <em>
              <a href="https://github.com/maxxtron" target="_blank">
                Mykyta
              </a>
            </em>
          </strong>
          <br />a React Frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning new technologies and creating website.</p>
        </div>
        <Link to={resume} download="React_Frontend_Developer.pdf" className="btn" target="_blank">
          Download CV
        </Link>
      </div>
    </header>
  );
};
export default Header;
