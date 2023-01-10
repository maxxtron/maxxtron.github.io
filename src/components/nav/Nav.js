import React, { useEffect, useState } from 'react';
import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';
import './nav.css';
import { Link } from 'react-router-dom';
import { navData } from '../../helpers/mockData';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';

const Nav = () => {
  const [isActive, setIsActive] = useState(1);

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('id'));
    if (id) {
      setIsActive(id);
    }
  }, [isActive]);
  const handleActive = (item) => {
    setIsActive(item);
    localStorage.setItem('id', item);
  };
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <Link to="/" className="logo">
            <strong>Prokopenko Mykyta</strong>
            <span>portfolio</span>
          </Link>

          <BtnDarkMode />

          <ul className="nav-list">
            {navData.map((data) => {
              return (
                <li
                  className="nav-list__item"
                  key={data.id}
                  onClick={(item) => handleActive(data.id)}
                >
                  <Link
                    to={data.link}
                    className={
                      isActive === data.id
                        ? 'nav-list__link nav-list__link--active'
                        : 'nav-list__link'
                    }
                  >
                    {data.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
