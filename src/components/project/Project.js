import { Link, NavLink } from 'react-router-dom';
import './style.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Project = ({ data, index }) => {
  const { t } = useTranslation();
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project">
        <img src={data.img} alt={data.name} className="project__img" />
        <h3 className="project__title">{t(data.info)}</h3>
      </li>
    </NavLink>
  );
};

export default Project;
