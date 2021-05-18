interface IProjectImagePaths {
  TBD: string,
  [key: string]: string;
}

interface IProjectPaths {
  surViralSite: string,
  moodTrackerSite: string,
  [key: string]: string;
}

export const ProjectPaths: IProjectPaths = {
  surViralSite: 'https://connietran-dev.github.io/janebox-surviral-client/#/',
  moodTrackerSite: 'https://srsexton94.github.io/moodtracker-client/'
}

export const ProjectImagePaths: IProjectImagePaths = {
  TBD: '../../assets/images/TBD.jpeg'
}
