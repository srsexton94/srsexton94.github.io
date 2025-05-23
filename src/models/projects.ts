import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

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
];
