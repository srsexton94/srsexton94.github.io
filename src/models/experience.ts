enum Skills {
  AGILE = 'Agile',
  ANGULAR = 'Angular',
  A11Y = 'Web Accessibility',
  CSS = 'CSS',
  CYPRESS = 'Cypress',
  DESIGN = 'UI/UX Design',
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
  TEAM_LEAD = 'Team Leadership',
  TESTING = 'Usability Testing',
  TYPESCRIPT = 'TypeScript',
  USER_RESEARCH = 'User Research',
}

export const Experiences = [
  {
    company: 'ATPCO',
    titles: ['Senior Frontend Software Engineer'],
    startYear: 2025,
    description: `
      ATPCO is the foundation of modern airline retailing.  Taking ownership of the 3Victors product PriceEye,
      I help customers confidently make strategic pricing decisions.  I deliver innovative, engaging prototypes
      and user interfaces using the latest in frontend technologies and drive the frontend development on key
      applications, partnering closely with designers, researchers, and engineers.
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
  // {
  //   company: 'MyWorkerAI',
  //   titles: ['User Experience Designer'],
  //   startYear: 2025,
  //   description: `
  //     I help complete the UX design process for a lifelike AI video sales agent that incorporates
  //     conversational AI across websites, platforms, and apps; focused on scalability for founders,
  //     startup leaders, and SMB owners.
  //   `,
  //   skills: [
  //     Skills.DESIGN,
  //     Skills.FIGMA,
  //     Skills.USER_RESEARCH,
  //     Skills.TESTING,
  //     Skills.TEAM_LEAD,
  //     Skills.A11Y,
  //   ],
  //   link: 'https://www.nationalpolicedata.org/',
  // },
  {
    company: 'Schneider Electric',
    titles: ['Frontend Software Engineer'],
    startYear: 2023,
    endYear: 2024,
    description: `
      Schneider offers products, software, and services to help businesses reduce energy consumption. 
      I designed and built a mission-critical sustainability dashboard, turning business objectives into an
      intuitive user interface that helps customers understand their performance, scalable for our largest data
      center clients. Utilized Angular, HTML5, CSS3, JavaScript/TypeScript, Ngxs, Storybook, and Figma.
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
      Pluralsight is a leading workforce development company.  I took ownership of frontend development on the
      engineering analytics platform, Flow, crafting intuitive user interfaces on a complex data visualization platform.
      I also greatly expanded test coverage and drove the prioritization of web accessibility.
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
      Fidelity is an industry-renowned financial services institution. I led a team of 12 junior developers to build
      a product from concept to release and took ownership of frontend features and tech debt for personalized
      Retirement Investment software in Tax Smart withdrawals. Utilized Jest and Cypress to maintain 100% testing
      coverage in monorepo architecture and drove prioritization of Web Accessibility - educating teams across the
      company to improve the product for all.
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
      Skills.TEAM_LEAD,
      Skills.A11Y,
    ],
    link: 'https://digital.fidelity.com/stgw/digital/planning/retirement/retirement-income-calculator/',
  },
  {
    company: 'Code for Boston',
    titles: ['Software Engineer', 'User Experience Designer'],
    startYear: 2020,
    endYear: 2025,
    description: `
      Volunteering with Code for Boston’s National Police Data Coalition (NPDC) -- the first nationally integrated,
      independent repository of police misconduct data -- I led the initial UX Design efforts through user research
      & wireframing in Figma, and helped develop an internal design system.
    `,
    skills: [
      Skills.REACT,
      Skills.TYPESCRIPT,
      Skills.JAVASCRIPT,
      Skills.D3,
      Skills.REACT_TEST,
      Skills.DESIGN,
      Skills.FIGMA,
      Skills.USER_RESEARCH,
      Skills.HTML,
      Skills.SASS,
      Skills.GIT,
      Skills.A11Y,
    ],
    link: 'https://www.nationalpolicedata.org/',
  },
];
