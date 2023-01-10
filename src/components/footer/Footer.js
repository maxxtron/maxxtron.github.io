import React from 'react';
import gitHub from '../../img/icons/gitHub.svg';
import linkedin from '../../img/icons/linkedIn.svg';
import './footer.css';

const Footer = () => {
  const socialData = [
    {
      id: 1,
      img: gitHub,
      src: 'https://github.com/maxxtron',
      name: 'GitHub',
    },
    {
      id: 2,
      img: linkedin,
      src: 'https://www.linkedin.com/in/mykyta-prokopenko-67b874195/',
      name: 'linkedIn',
    },
  ];
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
            <p>© 2022 Prokopenko Mykyta</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
