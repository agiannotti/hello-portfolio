import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const resumeData = {
  name: 'Anthony Giannotti',
  title: 'Full-Stack Software Developer',

  birthday: '14th November 1992',
  email: 'aj.gianno@gmail.com',
  address: 'Chicago, Illinois',
  phone: '(850)-408-4674',

  socials: {
    gitHub: {
      link: 'https://github.com/agiannotti',
      text: 'GitHub',
      icon: <GitHubIcon />,
    },
    linkedIn: {
      link: 'https://www.linkedin.com/in/agiannotti/',
      text: 'LinkedIn',
      icon: <LinkedInIcon />,
    },
  },
};

export default resumeData;
