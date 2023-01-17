import React, { useEffect, useState } from 'react';
import './nav.css';
import { Link, useLocation } from 'react-router-dom';
import { navData } from '../../helpers/mockData';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import SelectLanguage from '../seletLaungage/SelectLanguage';
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const [isActive, setIsActive] = useState(1);
  const location = useLocation();
  const { t } = useTranslation();
  useEffect(() => {
    if (location.pathname === '/') {
      setIsActive(1);
    }
    if (location.pathname === '/projects') {
      setIsActive(2);
    }
    if (location.pathname === '/contacts') {
      setIsActive(3);
    }
  }, [isActive, location.pathname]);
  const handleActive = (item) => {
    setIsActive(item);
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <Link to="/" className="logo" onClick={() => handleActive(1)}>
            <strong>{t('Nav.logoName')}</strong>
            <span>{t('Nav.logoSpan')}</span>
          </Link>

          <BtnDarkMode />
          <SelectLanguage />
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
                    {t(data.name)}
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
