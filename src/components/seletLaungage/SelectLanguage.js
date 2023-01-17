import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import langImage from './../../img/icons/planet.svg';
import { useTranslation } from 'react-i18next';

const SelectLanguage = () => {
  const language = [
    {
      id: 1,
      value: 'uk',
      name: 'UA',
    },
    {
      id: 2,
      value: 'en',
      name: 'ENG',
    },
  ];
  const [lang, setLang] = useState('en');
  const [activeLabel, setActiveLabel] = useState('ENG');
  const [visiblePopup, setVisiblePopup] = useState(false);

  useEffect(() => {
    const head = i18n.resolvedLanguage;
    if (head === 'en') {
      setActiveLabel('ENG');
    }
    if (head === 'uk') {
      setActiveLabel('UA');
    }
  }, []);

  const { i18n } = useTranslation();
  const handleLang = (language, value) => {
    setLang(lang);
    setActiveLabel(language);
    i18n.changeLanguage(value);
    setVisiblePopup(false);
  };
  const handleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
  const handleOutsideClick = (e) => {
    return !e.path.includes(langRef.current) ? setVisiblePopup(false) : null;
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const langRef = useRef();

  return (
    <div ref={langRef} className="sort" onClick={handleVisiblePopup}>
      <img src={langImage} alt="language" />
      <div className="sort__label">
        <span>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {language.map((item) => (
              <li
                onClick={() => handleLang(item.name, item.value)}
                key={item.id}
                className={item.name === lang ? 'active' : ''}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectLanguage;
