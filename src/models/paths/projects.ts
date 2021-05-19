export enum ProjectTypes {
  SURVIRAL = 'surViral',
  MOODTRACKER = 'moodTracker',
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
  surViral: {
    site: 'https://connietran-dev.github.io/janebox-surviral-client/#/',
    code: '',
    image: ''
  },
  moodTracker: {
    site: 'https://srsexton94.github.io/moodtracker-client/',
    code: '',
    image: ''
  },
  TBD: {
    site: '',
    code: '',
    image: '../../assets/images/TBD.jpeg'
  }
}
