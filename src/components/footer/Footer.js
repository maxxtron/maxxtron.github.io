import React from 'react';
import { socialData } from './../../helpers/mockData';
import './footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            {socialData.map((data) => {
              return (
                <li className="social__item" key={data.id}>
                  <a href={data.src} target={'_blank'}>
                    <img src={data.img} alt={data.name} />
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="copyright">
            <p>© 2023 {t('Nav.logoName')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
