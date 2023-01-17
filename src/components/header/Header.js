import React from 'react';
import avatar from '../../img/avatar.jpg';
import './header.css';
import resume from '../../files/resume.pdf';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__avatar">
          <img src={avatar} alt="My Portfolio" />
        </div>
        <h1 className="header__title">
          <strong>
            {`${t('Header.title')} `}
            <em>
              <a href="https://github.com/maxxtron" target="_blank">
                {t('Header.titleName')}
              </a>
            </em>
          </strong>
          <br />
          {t('Header.subTitle')}
        </h1>
        <div className="header__text">
          <p>{t('Header.text')}</p>
        </div>
        <Link to={resume} download="React_Frontend_Developer.pdf" className="btn" target="_blank">
          {t('Header.download')}
        </Link>
      </div>
    </header>
  );
};
export default Header;
