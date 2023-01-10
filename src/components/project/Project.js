import { Link, NavLink } from 'react-router-dom';
import './style.css';
import React from 'react';
import resume from '../../files/resume.pdf';

const Project = ({ data, index }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project">
        <img src={data.img} alt={data.name} className="project__img" />
        <h3 className="project__title">{data.info}</h3>
      </li>
    </NavLink>
  );
};

export default Project;
