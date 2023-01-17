import React from 'react';
import Header from '../components/header/Header';
import { skillsData } from '../helpers/mockData';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <main className="section">
        <div className="container">
          <div className="content-list">
            <ul className="content-list__item">
              {skillsData.map((data) => {
                return (
                  <li key={data.id}>
                    <h2 className="title-2">{t(data.title)}</h2>
                    <p className="title-2__skills">{t(data.text)}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
