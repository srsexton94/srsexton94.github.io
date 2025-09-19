import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFigma, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faGlobe } from '@fortawesome/free-solid-svg-icons';

export interface IProjectLink {
  src: string;
  label: string;
  icon: IconProp;
}

export interface IProject {
  image: string;
  title: string;
  description: string;
  links?: IProjectLink[];
}

export const EngineeringProjects: IProject[] = [
  {
    image: '../assets/images/projects/npdc.png',
    title: 'NPDC',
    description: `
      The National Police Data Coalition is the first nationally integrated, independent
      repository of police misconduct data. Through Code for Boston, I assist with the
      frontend development of the NPDC web application and design system
    `,
    links: [
      {
        src: 'https://www.nationalpolicedata.org/',
        label: 'Non-profit website',
        icon: faGlobe,
      },
      {
        src: 'https://github.com/codeforboston/police-data-trust',
        label: 'Source code',
        icon: faGithub,
      },
      {
        src: 'https://github.com/National-Police-Data-Coalition/design-system',
        label: 'Design System',
        icon: faGithub,
      },
    ],
  },
  {
    image: '../assets/images/projects/retirement-calculator.png',
    title: 'Retirement Income Calculator',
    description: `
      The Retirement Income Calculator is a project that I oversaw as a technical lead
      during my time at Fidelity Investments.  I provided mentorship
      to 12 junior developers around clean code, maintainability, and my personal passion
      project of accessibility.
    `,
    links: [
      {
        src: 'https://digital.fidelity.com/stgw/digital/planning/retirement/retirement-income-calculator/',
        label: 'Deployed Site',
        icon: faGlobe,
      },
    ],
  },
  {
    image: '../assets/images/projects/popcorn-pal.png',
    title: 'Popcorn Pal',
    description: `
      Popcorn Pal is a dynamic movie search application built in React, initialized 
      with Vite, written in TypeScript with Sass for styling and the discover-movie
      API from TMDB.
    `,
    links: [
      {
        src: 'https://srsexton94.github.io/popcorn-pal/',
        label: 'Deployed Site',
        icon: faGlobe,
      },
      {
        src: 'https://github.com/srsexton94/popcorn-pal',
        label: 'Source code',
        icon: faGithub,
      },
    ],
  },
  {
    image: '../assets/images/projects/SurViral.png',
    title: 'SurViral',
    description: `
      SurViral is a multiplayer, storyline game that allows players to work 
      together and defeat a viral (totally-not-COVID) enemy to save the world!
      Built together with a backend developer, under the pseudonym JANEbox Games,
      for a Hackathon, I built the client with React, Sass, and Socket.io
    `,
    links: [
      {
        src: 'https://connietran-dev.github.io/janebox-surviral-client',
        label: 'Deployed Site',
        icon: faGlobe,
      },
      {
        src: 'https://github.com/connietran-dev/janebox-surviral-client',
        label: 'Source code',
        icon: faGithub,
      },
    ],
  },
  {
    image: '../assets/images/projects/definitely-not-dave.png',
    title: 'Definitely Not Dave',
    description: `
      This is a Guess Who clone application built in HTML, CSS, and JS, utilizing the
      DiceBear Avatar library. I built this as my final project for General Assembly's
      short course on JavaScript, brushing up on fundamentals.
    `,
    links: [
      {
        src: 'https://srsexton94.github.io/definitely-not-dave/',
        label: 'Deployed Site',
        icon: faGlobe,
      },
      {
        src: 'https://github.com/srsexton94/definitely-not-dave',
        label: 'Source code',
        icon: faGithub,
      },
    ],
  },
  {
    image: '../assets/images/projects/memory.png',
    title: 'Avatar: the Best Memory',
    description: `
      A quick project built in Vanilla JS, HTML, & CSS to practice game logic.
      This game is the classic Memory game played with all your favorite Avatar
      the Last Airbender characters.  Offers a variable board size and is fully
      keyboard navegable. 
    `,
    links: [
      {
        src: 'https://srsexton94.github.io/avatar-memory/',
        label: 'Deployed Site',
        icon: faGlobe,
      },
      {
        src: 'https://github.com/srsexton94/avatar-memory',
        label: 'Source code',
        icon: faGithub,
      },
    ],
  },
  {
    image: '../assets/images/projects/tic-tac-toe.png',
    title: 'Tic Tac Toe',
    description: `
      A fun little pet project built in Vanilla JS, HTML, & CSS as part of my 
      time in General Assembly's short course on JavaScript.  I had fun and went 
      rogue with the styling and semantic HTML, prioritizing accessibility, and 
      refactored the class' code for optimization and readability!
    `,
    links: [
      {
        src: 'https://srsexton94.github.io/tic-tac-toe/',
        label: 'Deployed Site',
        icon: faGlobe,
      },
      {
        src: 'https://github.com/srsexton94/tic-tac-toe',
        label: 'Source code',
        icon: faGithub,
      },
    ],
  },
  {
    image: '../assets/images/projects/clean-code.png',
    title: 'Clean Code',
    description: `
      This is an infographic I made as a new team-lead trying to lead a team of
      12 junior developers to revamp the code quality of a calculator project.  It
      details the main takeaways from Robert C. "Uncle Bob" Martin's book, Clean Code.
    `,
    links: [
      {
        src: '../assets/documents/CleanCode_Infographic.pdf',
        label: 'Infographic',
        icon: faFilePdf,
      },
      {
        src: 'https://digital.fidelity.com/stgw/digital/planning/retirement/retirement-income-calculator/',
        label: 'Final Product',
        icon: faGlobe,
      },
    ],
  },
];

export const DesignProjects: IProject[] = [
  {
    image: '../assets/images/projects/npdc-design.png',
    title: 'National Police Data Coalition (NPDC)',
    description: `
      The National Police Data Coalition is the first nationally integrated, independent
      repository of police misconduct data. Volunteering as the lead UX Designer in the 
      initial stages of the project, I crafted high-fidelity wireframes designing an MVP
      version of the NPDC application. Informing that process I created a case study with
      mission and problem statements, User Personas, a Competitive Analysis, and research
      takeaways.
    `,
    links: [
      {
        src: '../assets/documents/NPDC_CaseStudy.pdf',
        label: 'Case Study',
        icon: faFilePdf,
      },
      {
        src: 'https://www.figma.com/design/TM86P6ePUar5g24pk4h6Du/NPDC--2?node-id=0-1&t=qAiPtda1MLyp8zgF-1',
        label: 'Figma designs',
        icon: faFigma,
      },
      {
        src: 'https://dev.nationalpolicedata.org/',
        label: 'Deployed site',
        icon: faGlobe,
      },
    ],
  },
];
