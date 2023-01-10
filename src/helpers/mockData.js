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

const projects = [
  {
    id: 1,
    img: snaptSmall,
    imgBig: snaptBig,
    name: 'snapt',
    info: 'Internet Shop',
  },
  {
    id: 2,
    img: jobmeteorSmall,
    imgBig: jobmeteorBig,
    name: 'Job Meteor',
    info: 'Job Search Website',
  },
  {
    id: 3,
    img: motormartSmall,
    imgBig: motormartBig,
    name: 'Motormart',
    info: 'Сar Auction',
  },
  {
    id: 4,
    img: ephanSmall,
    imgBig: ephanBig,
    name: 'E-Phan',
    info: 'Site for the selection of coaches and dancers',
  },
  {
    id: 5,
    img: jobjunSmall,
    imgBig: jobjunBig,
    name: 'JobJun',
    info: 'Site to help find your first job Junior',
  },
];

const navData = [
  {
    id: 1,
    active: true,
    link: '/',
    name: 'Home',
  },
  {
    id: 2,
    active: false,
    link: '/projects',
    name: 'Projects',
  },
  {
    id: 3,
    active: false,
    link: '/contacts',
    name: 'Contacts',
  },
];

const skillsData = [
  {
    id: 1,
    title: 'Hard skills:',
    text: 'HTML, CSS/SASS, JS/ES6, React(Classes/Hooks), Redux/Redux-thunk, NextJS,styled-components, i18n/i18next, JSON, Axios, Ajax, Git, Linux OS (Ubuntu,Mint), MacOS',
  },
  {
    id: 2,
    title: 'Soft skills:',
    text: 'Responsibility, Communicability, Stress-resistance, Diligence, Accuracy, Learning, Focus on results',
  },
];

export { projects, navData, skillsData };
