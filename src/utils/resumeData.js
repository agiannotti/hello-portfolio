import { EmailRounded, Language } from '@material-ui/icons';
import DnsTwoToneIcon from '@material-ui/icons/DnsTwoTone';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SettingsEthernetTwoToneIcon from '@material-ui/icons/SettingsEthernetTwoTone';
import WebTwoToneIcon from '@material-ui/icons/WebTwoTone';

import bookmarkedMain1 from '../assets/images/bookmarked.main1.png';
import consoleMain1 from '../assets/images/console.main1.png';
import employeeformmain1 from '../assets/images/employeeformmain1.png';
import eztaskMain1 from '../assets/images/eztask.main1.png';
import foodfulMain1 from '../assets/images/foodful.main1.png';
import latinlyMain1 from '../assets/images/latinly.main1.png';
import pattern3 from '../assets/images/pattern3.jpg';
import petfulMain1 from '../assets/images/petful.main1.png';
import quizMain1 from '../assets/images/quiz.main1.png';
import thinkboardMain1 from '../assets/images/thinkboard.main1.png';
import socialsMain1 from '../assets/images/socials.main1.png';

const resumeData = {
  name: 'Anthony Giannotti',
  title: 'Full-Stack Software Developer',
  birthday: '14th November 1992',
  email: 'aj.gianno@gmail.com',
  address: 'Chicago, Illinois',
  phone: '(850)-408-4674',
  about: `I'm a Chicago based software developer proficient in JavaScript, TypeScript, React, Angular, and Node.\n\nMy former career within the culinary field has ensured my aptitude for adapting quickly and staying detail-oriented. I thrive on learning and taking on new challenges.\n\nI highly value accessibility, effective communication, and producing high-quality end-user experiences through diligence and creativity. `,

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
        'Developed fundamentals of translating a design???s intent into a functional experience. Focusing on real user problems reduces the impact of designer bias.',
    },
    {
      title: 'Southern New Hampshire University',
      date: '2020 / 2024; Currently Enrolled',
      description: `Computer Science Bachelor's Program with a concentration in software engineering`,
    },
  ],
  services: [
    {
      title: 'Front-End',
      description:
        'Responsive and Dynamic sites utilizing the latest technologies in web development',
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
        'Developed fundamentals of translating a design???s intent into a functional experience',
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
      description: [
        'Git',
        'Iterm2/Oh my zsh',
        'Fira Code',
        'GitHub',
        'Agile/SCRUM',
      ],
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
    Mailto: {
      link: `mailto:${'aj.gianno@gmail.com'}`,
      text: '@aj.gianno@gmail.com',
      icon: <EmailRounded />,
    },
  },
  projects: [
    {
      tag: 'Full-Stack',
      image: socialsMain1,
      title: 'Socials',
      caption: 'Social media creatve platform clone',

      description:
        'This is a social media clone with a feed for users to post videos, images, and articles to a viewable feed. This application utilizes react + redux alongside a firebase database with google login + authentication, and automatically populates a user profile with information from users gmail account. ',
      links: [
        {
          link: 'https://github.com/agiannotti/social-clone',
          icon: <GitHubIcon />,
        },
        { link: 'https://socials-ec27f.web.app/', icon: <Language /> },
      ],
    },
    {
      tag: 'Full-Stack',
      image: foodfulMain1,
      title: 'Foodful',
      caption: 'A platform for sharing resources within communities',

      description: `This application uses React and JS with a back-end API to create update and delete posted resources.`,
      links: [
        {
          link: 'https://github.com/agiannotti/foodful-vercel',
          icon: <GitHubIcon />,
        },
        { link: 'https://socials-ec27f.web.app/', icon: <Language /> },
      ],
    },
    {
      tag: 'React',
      image: consoleMain1,
      title: 'Console.dev',
      caption: 'Minimalist Code Typing Test Application',

      description:
        'Practice typing code snippets! This project uses JavaScript, React, and some basic string manipulation to render the color of font if it matches the text.',
      links: [
        {
          link: 'https://github.com/agiannotti/console.dev-client',
          icon: <GitHubIcon />,
        },
        { link: 'https://console-dev-client.vercel.app/', icon: <Language /> },
      ],
    },

    {
      tag: 'JQuery',
      image: bookmarkedMain1,
      title: 'Bookmarked',
      caption: 'Bookmark your designated websites.',

      description:
        'A basic JQuery application demonstrating CRUD and raw JavaScript methods and query selectors.',
      links: [
        {
          link: 'https://github.com/agiannotti/bookmark-app',
          icon: <GitHubIcon />,
        },
        {
          link: 'https://agiannotti.github.io/bookmark-app/dist/',
          icon: <Language />,
        },
      ],
    },
    {
      tag: 'Full-Stack',
      image: latinlyMain1,
      title: 'Latinly',
      caption: 'Learn latin phrases utilizing the spaced repetition technique.',

      description:
        'This project utilizes JWT Authentication, a from-scratch back-end API to store phrases, Cypress Testing, and JS Stack and Queue data structures to implement a spaced repetition learning technique. Track your amount of correct and incorrect answers.',
      links: [
        {
          link: 'https://github.com/agiannotti/latinly-client',
          icon: <GitHubIcon />,
        },
        { link: 'https://latinly.vercel.app/', icon: <Language /> },
      ],
    },
    {
      tag: 'React',
      image: pattern3,
      title: 'This website',
      caption: 'Hello, Portfolio',
      description: 'Material UI, JS, Grid, react-router-dom, firebase, vercel',
      links: [
        {
          link: 'https://github.com/agiannotti/hello-portfolio',
          icon: <GitHubIcon />,
        },
        {
          link: 'https://github.com/agiannotti/hello-portfolio',
          icon: <Language />,
        },
      ],
    },
    {
      tag: 'React',
      image: eztaskMain1,
      title: 'Task Tracker Practice',
      caption: 'Add and remove tasks and set reminders!',

      description: 'Mat UI, React, Hooks, Form Control',
      links: [
        {
          link: 'https://github.com/agiannotti/task-tracker',
          icon: <GitHubIcon />,
        },
        { link: 'https://eztask.vercel.app/', icon: <Language /> },
      ],
    },
    {
      tag: 'JQuery',
      image: quizMain1,
      title: 'Quiz App',
      caption: 'A quiz app with scores!',

      description:
        'track your progress, and recieve feedback for correct/ incorrect answers.',
      links: [
        {
          link: 'https://github.com/agiannotti/quiz-app',
          icon: <GitHubIcon />,
        },
        { link: 'https://agiannotti.github.io/quiz-app/', icon: <Language /> },
      ],
    },
    {
      tag: 'Full-Stack',
      image: petfulMain1,
      title: 'Petful',
      caption: 'Find your next companion!',

      description:
        'A stack and queue implementation with a timeout function to simulate waiting in line for a desired pet.',
      links: [
        {
          link: 'https://github.com/agiannotti/petful-front-end',
          icon: <GitHubIcon />,
        },
        { link: 'https://petful-two.vercel.app/', icon: <Language /> },
      ],
    },
    {
      tag: 'Angular',
      image: thinkboardMain1,
      title: 'Thinkboard',
      caption:
        'A kanban template utilizing material UIs drag and drop API. Hosted and provisioned via Firestore + Firebase',

      description: '',
      links: [
        {
          link: 'https://github.com/agiannotti/thinkboard-angular',
          icon: <GitHubIcon />,
        },
        { link: 'https://thinkboard-d8d22.web.app/', icon: <Language /> },
      ],
    },
    {
      tag: 'React',
      image: employeeformmain1,
      title: 'Employee Form',
      caption: 'Form best practices exercise',

      description:
        'Material UI with React and JS. Form Control, checkboxes, selects, submit, textfields, and matUi style hooks for functional component CSS styling.',
      links: [
        {
          link: 'https://github.com/agiannotti/react-form-practice',
          icon: <GitHubIcon />,
        },
        {
          link: 'https://employee-form-seven.vercel.app/ ',
          icon: <Language />,
        },
      ],
    },
  ],
};

export default resumeData;
