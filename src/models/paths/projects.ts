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

interface IProject {
  site: string,
  code: string,
  image: string,
  [key: string]: string;
}

type IProjectPaths = { [key in ProjectTypes]: IProject }

export const ProjectPaths: IProjectPaths = {
  budgetTracker: {
    site: 'https://chrome.google.com/webstore/detail/kefbibfkinkpmcfdehfmdedogekjbpde/publish-accepted?authuser=0&hl=es',
    code: 'https://github.com/srsexton94/budget-tracker',
    image: '../assets/images/projects/budget-tracker.jpeg'
  },
  calculator: {
    site: 'https://srsexton94.github.io/calculator-client/',
    code: 'https://github.com/srsexton94/calculator-client',
    image: '../assets/images/projects/calculator.png'
  },
  moodTracker: {
    site: 'https://srsexton94.github.io/moodtracker-client/',
    code: 'https://github.com/srsexton94/moodtracker-client',
    image: '../assets/images/projects/moodtracker.png'
  },
  pomodoro: {
    site: 'https://srsexton94.github.io/pomodoro/',
    code: 'https://github.com/srsexton94/pomodoro',
    image: '../assets/images/projects/pomodoro.jpeg'
  },
  rain: {
    site: 'https://right-as-rain.netlify.app/',
    code: 'https://github.com/srsexton94/right-as-rain',
    image: '../assets/images/projects/rain.png'
  },
  russian: {
    site: 'https://srsexton94.github.io/russkaya-klaviatura/',
    code: 'https://github.com/srsexton94/russkaya-klaviatura',
    image: '../assets/images/projects/russian.png'
  },
  surViral: {
    site: 'https://connietran-dev.github.io/janebox-surviral-client/#/',
    code: 'https://github.com/connietran-dev/janebox-surviral-client',
    image: '../assets/images/projects/surviral.png'
  },
  toDone: {
    site: 'https://srsexton94.github.io/to-done/',
    code: 'https://github.com/srsexton94/to-done',
    image: '../assets/images/projects/to-done.png'
  },
  TBD: {
    site: '',
    code: '',
    image: '../../assets/images/projects/TBD.jpeg'
  }
}
