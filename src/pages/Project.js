import { Link, useParams } from 'react-router-dom';
import { projects } from '../helpers/mockData';
import React, { useEffect, useRef, useState } from 'react';

const Project = () => {
  const { id } = useParams();
  const project = projects[id];
  const [isClick, setIsClick] = useState(false);
  const handleClick = (event) => {
    setIsClick((current) => !current);
  };
  const handleOutsideClick = (e) => {
    return !e.path.includes(sortRef.current) ? setIsClick(false) : null;
  };
  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);
  const sortRef = useRef();
  return (
    <main className="section">
      <div className="container">
        <Link to="/projects" className="btn">
          BACK
        </Link>
        <div className="project-details">
          <h1 className="title-1">{project.info}</h1>
          <img
            ref={sortRef}
            src={project.imgBig}
            alt={project.name}
            onClick={handleClick}
            className={
              isClick
                ? 'project-details__cover project-details__cover--isClick'
                : 'project-details__cover'
            }
          />
        </div>
      </div>
    </main>
  );
};

export default Project;
