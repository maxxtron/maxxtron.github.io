import React from 'react';
import telegram from '../img/icons/telegram.png';
import location from '../img/icons/loc.png';
import mail from '../img/icons/mail.png';
import contact from '../img/icons/contact.png';
import phone from '../img/icons/phone.png';
import ua from '../img/ua.svg';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1 title-1__flex">
          <img src={contact} alt="contacts" />
          {t('Contacts.contacts')}
        </h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2 title-2__flex">
              <img src={location} alt="location" /> {t('Contacts.location')}
            </h2>

            <p className="title-2__flex-city">
              <img src={ua} alt="Ukraine" className="ukraine" /> {t('Contacts.city')}
            </p>
          </li>
          <li className="content-list__item content-list__item--social">
            <a href="tel:+380634463785">
              <img src={phone} alt="phone" className="image-social" />
            </a>
            <a href="https://t.me//maxxtron" target="_blank">
              <img src={telegram} alt="telegram" className="image-social" />
            </a>
            <a href="mailto:maxxtron93@gmail.com">
              <img src={mail} alt="email" className="image-social" />
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
