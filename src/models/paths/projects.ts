export enum ProjectTypes {
  BUDGET = 'budgetTracker',
  CALCULATOR = 'calculator',
  MOODTRACKER = 'moodTracker',
  POMODORO = 'pomodoro',
  RUSSIAN = 'russian',
  RAIN = 'rain',
  SURVIRAL = 'surViral',
  TODONE = 'toDone',
  TBD = 'TBD'
}

export interface IProject {
  displayName: string,
  description: string,
  code: string,
  image: string,
  site: string,
  [key: string]: string;
}

type IProjectData = { [key in ProjectTypes]: IProject }

const placeholder: string = 'Here\'s where I\'ll tell you about what this cool project does weeeee'

export const ProjectData: IProjectData = {
  budgetTracker: {
    displayName: 'Budget Tracker',
    description: 'Chrome extension built with jQuery and Bootstrap to help users track online spending',
    site: 'https://chrome.google.com/webstore/detail/kefbibfkinkpmcfdehfmdedogekjbpde/publish-accepted?authuser=0&hl=es',
    code: 'https://github.com/srsexton94/budget-tracker',
    image: '../assets/images/projects/budget-tracker.jpeg'
  },
  calculator: {
    displayName: 'JS Calc!',
    description: '90\'s inspired calculator app built in vanilla JS - think you can find the easter egg?',
    site: 'https://srsexton94.github.io/calculator-client/',
    code: 'https://github.com/srsexton94/calculator-client',
    image: '../assets/images/projects/calculator.png'
  },
  moodTracker: {
    displayName: 'MoodTracker',
    description: 'Mental health Data Visualization app built with jQuery, Sass, RoR, and PostgreSQL',
    site: 'https://srsexton94.github.io/moodtracker-client/',
    code: 'https://github.com/srsexton94/moodtracker-client',
    image: '../assets/images/projects/moodtracker.png'
  },
  pomodoro: {
    displayName: 'PomodoroBuddy',
    description: 'An online clock that cycles work and rest sessions, built with jQuery and Sass',
    site: 'https://srsexton94.github.io/pomodoro/',
    code: 'https://github.com/srsexton94/pomodoro',
    image: '../assets/images/projects/pomodoro.jpeg'
  },
  rain: {
    displayName: 'Right as Rain',
    description: 'A weather prediction app built utilizing a 3rd party API and mobile-first design',
    site: 'https://right-as-rain.netlify.app/',
    code: 'https://github.com/srsexton94/right-as-rain',
    image: '../assets/images/projects/rain.png'
  },
  russian: {
    displayName: 'Ruskaya Klaviatura',
    description: 'An interactive keyboard interface for Russian language practice, built with jQuery and Sass',
    site: 'https://srsexton94.github.io/russkaya-klaviatura/',
    code: 'https://github.com/srsexton94/russkaya-klaviatura',
    image: '../assets/images/projects/russian.png'
  },
  surViral: {
    displayName: 'SurViral',
    description: 'A multiplayer, dystopian storyline game built with React, Sass, and Socket.io',
    site: 'https://connietran-dev.github.io/janebox-surviral-client/#/',
    code: 'https://github.com/connietran-dev/janebox-surviral-client',
    image: '../assets/images/projects/surviral.png'
  },
  toDone: {
    displayName: 'To-DONE',
    description: 'A to-do management application displayed on a fun personal-desk interface',
    site: 'https://srsexton94.github.io/to-done/',
    code: 'https://github.com/srsexton94/to-done',
    image: '../assets/images/projects/to-done.png'
  },
  TBD: {
    displayName: 'Under Construction',
    description: 'This project is still underway! Check back soon to see the results',
    site: '',
    code: '',
    image: '../../assets/images/projects/TBD.jpeg'
  }
}
