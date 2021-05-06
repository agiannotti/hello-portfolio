import { Language, WebOutlined, YouTube } from '@material-ui/icons';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const resumeData = {
  name: 'Anthony Giannotti',
  title: 'Full-Stack Software Developer',

  birthday: '14th November 1992',
  email: 'aj.gianno@gmail.com',
  address: 'Chicago, Illinois',
  phone: '(850)-408-4674',
  about: `Proficient with Python, JavaScript, TypeScript, React, Angular, Node, Express, and SQL.

    \nMy former career within the culinary field has ensured my aptitude for adapting quickly and staying detail-oriented. I thrive on learning and taking on new challenges.
    
    \nAs a software developer, I highly value accessibility, effective communication, and producing high-quality end-user experiences through diligence and creativity. `,

  experiences: [
    {
      title: 'Work1',
      date: '2020 - 2021',
      description:
        'Experiences Experiences Experiences Experiences Experiences Experiences Experiences Experiences ',
    },
    {
      title: 'Work2',
      date: '2019 - 2020',
      description:
        'Experiences Experiences Experiences Experiences Experiences Experiences Experiences Experiences ',
    },
    {
      title: 'Work3',
      date: '2018 - 2019',
      description:
        'Experiences Experiences Experiences Experiences Experiences Experiences Experiences Experiences ',
    },
  ],

  educations: [
    {
      title: 'Education1',
      date: '2020 - 2021',
      description:
        'Experiences Experiences Experiences Experiences Experiences Experiences Experiences Experiences ',
    },
    {
      title: 'Education2',
      date: '2019 - 2020',
      description:
        'Experiences Experiences Experiences Experiences Experiences Experiences Experiences Experiences ',
    },
    {
      title: 'Education3',
      date: '2018 - 2019',
      description:
        'Experiences Experiences Experiences Experiences Experiences Experiences Experiences Experiences ',
    },
  ],
  services: [
    {
      title: 'Front-End',
      description: 'reach 10x dev status in 6 months',
      icon: <WebOutlined />,
    },
    {
      title: 'Back-end',
      description: 'reach 10x dev status in 6 months',
      icon: <WebOutlined />,
    },
    {
      title: 'UX Design',
      description: 'reach 10x dev status in 6 months',
      icon: <WebOutlined />,
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
      description: ['NodeJS', 'JavaScript', 'Python', 'Express'],
    },
    {
      title: 'DATABASES',
      description: ['FireBase', 'PostgreSQL', 'Heroku'],
    },
    {
      title: 'SOURCE CONTROL',
      description: ['Git', 'GitHub', 'Agile/SCRUM'],
    },
  ],

  socials: {
    GitHub: {
      link: 'https://github.com/agiannotti',
      text: 'GitHub',
      icon: <GitHubIcon />,
    },
    LinkedIn: {
      link: 'https://www.linkedin.com/in/agiannotti/',
      text: 'LinkedIn',
      icon: <LinkedInIcon />,
    },
  },
  projects: [
    {
      tag: 'React',
      image:
        'https://en.wikipedia.org/wiki/Wallpaper_(computing)#/media/File:Animated_Wallpaper_Windows_10_-_Wallpaper_Engine.gif',
      title: 'React Project 1',
      caption: 'A short description',
      description:
        'words wordswords wordswords wordswords wordswords wordswords words',
      links: [
        { link: 'https://www.google.com', icon: <YouTube /> },
        { link: 'https://www.google.com', icon: <GitHubIcon /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ],
    },
    {
      tag: 'Angular',
      image:
        'https://en.wikipedia.org/wiki/Wallpaper_(computing)#/media/File:Animated_Wallpaper_Windows_10_-_Wallpaper_Engine.gif',
      title: 'Angular Project 1',
      caption: 'A short description',

      description:
        'words wordswords wordswords wordswords wordswords wordswords words',
      links: [
        { link: 'https://www.google.com', icon: <YouTube /> },
        { link: 'https://www.google.com', icon: <GitHubIcon /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ],
    },
    {
      tag: 'Python',
      image:
        'https://en.wikipedia.org/wiki/Wallpaper_(computing)#/media/File:Animated_Wallpaper_Windows_10_-_Wallpaper_Engine.gif',
      title: 'Python Project 1',
      caption: 'A short description',

      description:
        'words wordswords wordswords wordswords wordswords wordswords words',
      links: [
        { link: 'https://www.google.com', icon: <YouTube /> },
        { link: 'https://www.google.com', icon: <GitHubIcon /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ],
    },
    {
      tag: 'SQL',
      image:
        'https://en.wikipedia.org/wiki/Wallpaper_(computing)#/media/File:Animated_Wallpaper_Windows_10_-_Wallpaper_Engine.gif',
      title: 'SQL Project 1',
      caption: 'A short description',

      description:
        'words wordswords wordswords wordswords wordswords wordswords words',
      links: [
        { link: 'https://www.google.com', icon: <YouTube /> },
        { link: 'https://www.google.com', icon: <GitHubIcon /> },
        { link: 'https://www.google.com', icon: <Language /> },
      ],
    },
  ],
};

export default resumeData;
