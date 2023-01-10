import React from 'react';
import Header from '../components/header/Header';
import { skillsData } from '../helpers/mockData';

const Home = () => {
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
                    <h2 className="title-2">{data.title}</h2>
                    <p>{data.text}</p>
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
