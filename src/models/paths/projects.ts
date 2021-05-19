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

type IProjectPaths = { [key in ProjectTypes]: IProject }

const placeholder: string = 'Here\'s where I\'ll tell you about what this cool project does weeeee'

export const ProjectPaths: IProjectPaths = {
  budgetTracker: {
    displayName: 'Budget Tracker',
    description: placeholder,
    site: 'https://chrome.google.com/webstore/detail/kefbibfkinkpmcfdehfmdedogekjbpde/publish-accepted?authuser=0&hl=es',
    code: 'https://github.com/srsexton94/budget-tracker',
    image: '../assets/images/projects/budget-tracker.jpeg'
  },
  calculator: {
    displayName: 'JS Calc!',
    description: placeholder,
    site: 'https://srsexton94.github.io/calculator-client/',
    code: 'https://github.com/srsexton94/calculator-client',
    image: '../assets/images/projects/calculator.png'
  },
  moodTracker: {
    displayName: 'MoodTracker',
    description: placeholder,
    site: 'https://srsexton94.github.io/moodtracker-client/',
    code: 'https://github.com/srsexton94/moodtracker-client',
    image: '../assets/images/projects/moodtracker.png'
  },
  pomodoro: {
    displayName: 'PomodoroBuddy',
    description: placeholder,
    site: 'https://srsexton94.github.io/pomodoro/',
    code: 'https://github.com/srsexton94/pomodoro',
    image: '../assets/images/projects/pomodoro.jpeg'
  },
  rain: {
    displayName: 'Right as Rain',
    description: placeholder,
    site: 'https://right-as-rain.netlify.app/',
    code: 'https://github.com/srsexton94/right-as-rain',
    image: '../assets/images/projects/rain.png'
  },
  russian: {
    displayName: 'Ruskaya Klaviatura',
    description: placeholder,
    site: 'https://srsexton94.github.io/russkaya-klaviatura/',
    code: 'https://github.com/srsexton94/russkaya-klaviatura',
    image: '../assets/images/projects/russian.png'
  },
  surViral: {
    displayName: 'SurViral',
    description: placeholder,
    site: 'https://connietran-dev.github.io/janebox-surviral-client/#/',
    code: 'https://github.com/connietran-dev/janebox-surviral-client',
    image: '../assets/images/projects/surviral.png'
  },
  toDone: {
    displayName: 'To-DONE',
    description: placeholder,
    site: 'https://srsexton94.github.io/to-done/',
    code: 'https://github.com/srsexton94/to-done',
    image: '../assets/images/projects/to-done.png'
  },
  TBD: {
    displayName: 'Under Construction!',
    description: placeholder,
    site: '',
    code: '',
    image: '../../assets/images/projects/TBD.jpeg'
  }
}
