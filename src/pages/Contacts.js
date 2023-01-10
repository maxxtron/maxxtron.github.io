import React from 'react';
import telegram from '../img/icons/telegram.png';
import viber from '../img/icons/viber.png';
import location from '../img/icons/loc.png';
import mail from '../img/icons/mail.png';
import contact from '../img/icons/contact.png';
import phone from '../img/icons/phone.png';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1 title-1__flex">
          <img src={contact} alt="contacts" />
          Contacts
        </h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2 title-2__flex">
              <img src={location} alt="location" /> Location
            </h2>
            <p>Kyiv, Ukraine</p>
          </li>
          <li className="content-list__item content-list__item--social">
            <h2 className="title-2 title-2__flex">
              <a href="tel:+380634463785">
                <img src={phone} alt="phone" />
              </a>
            </h2>
            <h2 className="title-2 title-2__flex">
              <a href="https://t.me//maxxtron" target="_blank">
                <img src={telegram} alt="telegram" />
              </a>
            </h2>
            <h2 className="title-2 title-2__flex">
              <a href="mailto:maxxtron93@gmail.com">
                <img src={mail} alt="email" />
              </a>
            </h2>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
