import snaptSmall from '../img/projects/snaptSmall.jpg';
import snaptBig from '../img/projects/snaptBig.jpg';
import jobmeteorSmall from '../img/projects/jobmeteorSmall.jpg';
import jobmeteorBig from '../img/projects/jobmeteorBig.jpg';
import motormartSmall from '../img/projects/motormartSmall.jpg';
import motormartBig from '../img/projects/motormartBig.jpg';
import ephanSmall from '../img/projects/e-phanSmall.jpg';
import ephanBig from '../img/projects/e-phanBig.jpg';
import jobjunSmall from '../img/projects/jobjunSmall.jpg';
import jobjunBig from '../img/projects/jobjunBig.jpg';
import gitHub from '../img/icons/gitHub.svg';
import linkedin from '../img/icons/linkedIn.svg';
const projects = [
  {
    id: 1,
    img: snaptSmall,
    imgBig: snaptBig,
    name: 'snapt',
    info: 'Project.snapt',
  },
  {
    id: 2,
    img: jobmeteorSmall,
    imgBig: jobmeteorBig,
    name: 'Job Meteor',
    info: 'Project.jobMeteor',
  },
  {
    id: 3,
    img: motormartSmall,
    imgBig: motormartBig,
    name: 'Motormart',
    info: 'Project.motormart',
  },
  {
    id: 4,
    img: ephanSmall,
    imgBig: ephanBig,
    name: 'E-Phan',
    info: 'Project.ephan',
  },
  {
    id: 5,
    img: jobjunSmall,
    imgBig: jobjunBig,
    name: 'JobJun',
    info: 'Project.jobJun',
  },
];

const navData = [
  {
    id: 1,
    active: true,
    link: '/',
    name: 'Nav.home',
  },
  {
    id: 2,
    active: false,
    link: '/projects',
    name: 'Nav.projects',
  },
  {
    id: 3,
    active: false,
    link: '/contacts',
    name: 'Nav.contacts',
  },
];

const skillsData = [
  {
    id: 1,
    title: 'Main.hardSkills',
    text: 'HTML, CSS/SASS, JS/ES6, React(Classes/Hooks), Redux/Redux-thunk, NextJS,styled-components, i18n/i18next, JSON, Axios, Ajax, Git, Linux OS (Ubuntu,Mint), MacOS',
  },
  {
    id: 2,
    title: 'Main.softSkills',
    text: 'Main.softText',
  },
];

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

export { projects, navData, skillsData, socialData };
