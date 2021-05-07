import { Language } from '@material-ui/icons';
import DnsTwoToneIcon from '@material-ui/icons/DnsTwoTone';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SettingsEthernetTwoToneIcon from '@material-ui/icons/SettingsEthernetTwoTone';
import WebTwoToneIcon from '@material-ui/icons/WebTwoTone';

import consoleMain1 from '../assets/images/console.main1.png';
import foodfulMain1 from '../assets/images/foodful.main1.png';
import latinlyMain1 from '../assets/images/latinly.main1.png';
import bookmarkedMain1 from '../assets/images/bookmarked.main1.png';
import eztaskMain1 from '../assets/images/eztask.main1.png';
import thinkboardMain1 from '../assets/images/thinkboard.main1.png';
import pattern3 from '../assets/images/pattern3.jpg';
import quizMain1 from '../assets/images/quiz.main1.png';

const resumeData = {
  name: 'Anthony Giannotti',
  title: 'Full-Stack Software Developer',

  birthday: '14th November 1992',
  email: 'aj.gianno@gmail.com',
  address: 'Chicago, Illinois',
  phone: '(850)-408-4674',
  about: `Proficient with JavaScript, TypeScript, React, Angular, Node, Express, and SQL.\n\nMy former career within the culinary field has ensured my aptitude for adapting quickly and staying detail-oriented. I thrive on learning and taking on new challenges.\n\nAs a software developer, I highly value accessibility, effective communication, and producing high-quality end-user experiences through diligence and creativity. `,

  experiences: [
    {
      title: 'Pastry and Bakery Cook / Soho House Chicago',
      date: 'September 2019 - September 2021',
      description: 'Sourdough & Croissants',
    },
    {
      title: 'Sous Chef / Tasty N Alder',
      date: '2019 - 2020',
      description: 'Breakfast & Brunch Restaurant',
    },
    {
      title: 'Commis Chef / Next Restaurant',
      date: 'February 2018 - January 2019',
      description: 'Michelin starred Restaurant in Fulton Market, Chicago',
    },
  ],

  educations: [
    {
      title: 'Thinkful Engineering Immersion Certificate',
      date: 'Nov 2020 - April 2021',
      description:
        'Javascript, CSS, HTML, React, Node, SQL, Jquery, data structures & algorithms.',
    },
    {
      title: 'Google UX Design Certificate',
      date: 'April 2021 - March 2021',
      description:
        ' Developed fundamentals of translating a design’s intent into a functional experience',
    },
    {
      title: 'Tallahassee Community College & Portland State University',
      date: '2012-2015 / 2018',
      description: 'Education & English Studies',
    },
  ],
  services: [
    {
      title: 'Front-End',
      description:
        'Responsive and Dynamic sites utilizing the latest trends in web development',
      icon: <WebTwoToneIcon />,
    },
    {
      title: 'Back-end',
      description: 'RESTFul from-sratch APIs and Database Provisioning ',
      icon: <SettingsEthernetTwoToneIcon />,
    },
    {
      title: 'UX Design',
      description:
        'understanding users and empathizing with different backgrounds, demographics, motivations, pain points, emotions, and life goals',
      icon: <DnsTwoToneIcon />,
    },
  ],

  skills: [
    {
      title: 'FRONT-END',
      description: [
        'JavaScript',
        'React',
        'TypeScript',
        'Angular',
        'Bootstrap',
        'Material UI',
      ],
    },
    {
      title: 'BACK-END',
      description: ['JavaScript', 'NodeJS', 'postgresSQL', 'Express'],
    },
    {
      title: 'DATABASES',
      description: ['PostgreSQL', 'Heroku', 'FireBase', 'AWS'],
    },
    {
      title: 'SOURCE CONTROL',
      description: ['Git', 'GitHub', 'Agile/SCRUM'],
    },
  ],

  socials: {
    GitHub: {
      link: 'https://github.com/agiannotti',
      text: 'GitHub.com/agiannotti',
      icon: <GitHubIcon />,
    },
    LinkedIn: {
      link: 'https://www.linkedin.com/in/agiannotti/',
      text: 'LinkedIn.com/in/agiannotti',
      icon: <LinkedInIcon />,
    },
  },
  projects: [
    {
      tag: 'React',
      image: pattern3,
      title: 'React Project 1',
      caption: 'A short description',
      description:
        'words wordswords wordswords wordswords wordswords wordswords words',
      links: [
        { link: 'https://www.google.com', icon: <GitHubIcon /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ],
    },
    {
      tag: 'Angular',
      image: foodfulMain1,
      title: 'Angular Project 1',
      caption: 'A short description',

      description:
        'words wordswords wordswords wordswords wordswords wordswords words',
      links: [
        { link: 'https://www.google.com', icon: <GitHubIcon /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ],
    },
    {
      tag: 'React',
      image: consoleMain1,
      title: 'React Project 5',
      caption: 'A short description',

      description:
        'words wordswords wordswords wordswords wordswords wordswords words',
      links: [
        { link: 'https://www.google.com', icon: <GitHubIcon /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ],
    },
    {
      tag: 'React',
      image: bookmarkedMain1,
      title: 'React Project 1',
      caption: 'A short description',

      description:
        'words wordswords wordswords wordswords wordswords wordswords words',
      links: [
        { link: 'https://www.google.com', icon: <GitHubIcon /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ],
    },
    {
      tag: 'React',
      image: latinlyMain1,
      title: 'React Project 2',
      caption: 'A short description',

      description:
        'words wordswords wordswords wordswords wordswords wordswords words',
      links: [
        { link: 'https://www.google.com', icon: <GitHubIcon /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ],
    },
    {
      tag: 'React',
      image: eztaskMain1,
      title: 'React Project 3',
      caption: 'A short description',

      description:
        'words wordswords wordswords wordswords wordswords wordswords words',
      links: [
        { link: 'https://www.google.com', icon: <GitHubIcon /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ],
    },
    {
      tag: 'React',
      image: quizMain1,
      title: 'React Project 4',
      caption: 'A short description',

      description:
        'words wordswords wordswords wordswords wordswords wordswords words',
      links: [
        { link: 'https://www.google.com', icon: <GitHubIcon /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ],
    },
    {
      tag: 'Angular',
      image: thinkboardMain1,
      title: 'Angular Project 2',
      caption: 'A short description',

      description:
        'words wordswords wordswords wordswords wordswords wordswords words',
      links: [
        { link: 'https://www.google.com', icon: <GitHubIcon /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ],
    },
  ],
};

export default resumeData;
