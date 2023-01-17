import React from 'react';
import { projects } from '../helpers/mockData';
import Project from '../components/project/Project';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">{t('Project.title')}</h2>
        <ul className="projects">
          {projects.map((data, index) => {
            return <Project data={data} key={data.id} index={index} />;
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
