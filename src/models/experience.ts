enum Skills {
  AGILE = 'Agile',
  ANGULAR = 'Angular',
  A11Y = 'Web Accessibility',
  CSS = 'CSS',
  CYPRESS = 'Cypress',
  D3 = 'D3',
  FIGMA = 'Figma',
  GIT = 'Git',
  HTML = 'HTML',
  JAVASCRIPT = 'JavaScript',
  JEST = 'Jest',
  NGRX = 'NgRx',
  NODE = 'Node / NPM',
  REACT = 'React',
  REACT_TEST = 'React Testing',
  REDUX = 'Redux',
  SASS = 'Sass/SCSS',
  SCRUM = 'Scrum',
  STORYBOOK = 'Storybook',
  TYPESCRIPT = 'TypeScript',
}

export const Experiences = [
  {
    company: 'ATPCO',
    titles: ['Senior UX Engineer'],
    startYear: 2025,
    description: `
      Taking ownership of the 3Victors product suite, I help customers confidently make strategic
      pricing decisions leveraging the power of AI.  I deliver innovative, engaging prototypes using
      the latest in frontend technologies and drive the frontend development on key applications,
      partnering closely with full-stack and backend engineering teams.
    `,
    skills: [
      Skills.ANGULAR,
      Skills.TYPESCRIPT,
      Skills.JAVASCRIPT,
      Skills.NGRX,
      Skills.HTML,
      Skills.CSS,
      Skills.STORYBOOK,
      Skills.NODE,
      Skills.FIGMA,
      Skills.JEST,
      Skills.GIT,
      Skills.A11Y,
      Skills.AGILE,
    ],
    link: 'https://atpco.net/',
  },
  {
    company: 'Schneider Electric',
    titles: ['UI/UX Software Engineer'],
    startYear: 2023,
    endYear: 2024,
    description: `
      Designed, developed, & maintained features and improvements on EcoStruxureIT Expert
      platform with readable, optimized, and well-tested code. Collaborated and communicated
      through design/code reviews and pull requests.
    `,
    skills: [
      Skills.ANGULAR,
      Skills.TYPESCRIPT,
      Skills.JAVASCRIPT,
      Skills.NGRX,
      Skills.HTML,
      Skills.CSS,
      Skills.STORYBOOK,
      Skills.NODE,
      Skills.FIGMA,
      Skills.JEST,
      Skills.GIT,
      Skills.A11Y,
      Skills.AGILE,
    ],
    link: 'https://ecostruxureit.com/',
  },
  {
    company: 'Pluralsight',
    titles: ['Software Engineer'],
    startYear: 2020,
    endYear: 2022,
    description: `
      Developed frontend Data Visualization tools in React with TypeScript and Redux
      Contributed to a fully-integrated, cross-functional team. 
      Greatly expanded front-end, unit & end-to-end, test coverage. 
      Independently drove prioritization of Web Accessibility -- auditing software and
      educating engineering teams across the company. 
    `,
    skills: [
      Skills.REACT,
      Skills.TYPESCRIPT,
      Skills.JAVASCRIPT,
      Skills.REDUX,
      Skills.REACT_TEST,
      Skills.HTML,
      Skills.SASS,
      Skills.GIT,
      Skills.AGILE,
      Skills.SCRUM,
      Skills.A11Y,
    ],
    link: 'https://www.pluralsight.com/product/flow',
  },
  {
    company: 'Fidelity Investments',
    titles: ['Software Engineer', 'Associate Engineer'],
    startYear: 2020,
    endYear: 2022,
    description: `
      Developed personalized investment software in Angular with TypeScript and NgRx.
      Served as Tech Lead overseeing 12+ technologists, from conception to production.
      Maintained 100% testing coverage in a monorepo architecture in Jest and Cypress
    `,
    skills: [
      Skills.ANGULAR,
      Skills.TYPESCRIPT,
      Skills.JAVASCRIPT,
      Skills.NGRX,
      Skills.NODE,
      Skills.JEST,
      Skills.CYPRESS,
      Skills.HTML,
      Skills.SASS,
      Skills.STORYBOOK,
      Skills.GIT,
      Skills.AGILE,
      Skills.SCRUM,
      Skills.A11Y,
    ],
    link: 'https://digital.fidelity.com/stgw/digital/planning/retirement/retirement-income-calculator/',
  },
  {
    company: 'Code for Boston',
    titles: ['Software Engineer', 'User Experience Designer'],
    startYear: 2020,
    description: `
      Helped design & develop the National Police Data Coalition project -- a national
      Data Visualization app to help combat police violence. 
      Lead UX Design efforts through user research & wireframing for developer handoff.
    `,
    skills: [
      Skills.REACT,
      Skills.TYPESCRIPT,
      Skills.JAVASCRIPT,
      Skills.D3,
      Skills.REACT_TEST,
      Skills.FIGMA,
      Skills.HTML,
      Skills.SASS,
      Skills.GIT,
      Skills.A11Y,
    ],
    link: 'https://www.nationalpolicedata.org/',
  },
];
