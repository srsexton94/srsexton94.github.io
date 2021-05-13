interface ISocialPaths {
  github: string,
  linkedin: string,
  resume: string,
  email: string
  [key: string]: string;
}

interface IImagePaths {
  blushImg: string,
  blushImgEditor: string
  [key: string]: string;
}

interface IProjectPaths {
  surViralSite: string,
  moodTrackerSite: string
  [key: string]: string;
}

export const SocialPaths: ISocialPaths = {
  github: 'https://github.com/srsexton94',
  linkedin: 'https://www.linkedin.com/in/samantha-sexton/',
  resume: '../assets/documents/SamanthaSexton_SoftwareEngineer_Resume.pdf',
  email: 'mailto:srsexton94@gmail.com'
}

export const ImagePaths: IImagePaths = {
  blushImg: 'https://blush.design/api/download?shareUri=THKY6D0pRbyCdz2x&c=Hair_0%7Ee7b460-0.8%7E372310_Skin_0%7E673a18-0.8%7Ef4d4b8&bg=59eeff&w=800&h=800&fm=png',
  blushImgEditor: 'https://blush.design/collections/little-things/scenes-kitchen/THKY6D0pRbyCdz2x?c=Hair_0%7Ee7b460-0.8%7E372310_Skin_0%7E673a18-0.8%7Ef4d4b8&bg=59eeff'
}

export const ProjectPaths: IProjectPaths = {
  surViralSite: 'https://connietran-dev.github.io/janebox-surviral-client/#/',
  moodTrackerSite: 'https://srsexton94.github.io/moodtracker-client/'
}


export enum PATHS {
  github = 'https://github.com/srsexton94',
  linkedin = 'https://www.linkedin.com/in/samantha-sexton/',
  resume = '../assets/documents/SamanthaSexton_SoftwareEngineer_Resume.pdf',
  blushImg = 'https://blush.design/api/download?shareUri=THKY6D0pRbyCdz2x&c=Hair_0%7Ee7b460-0.8%7E372310_Skin_0%7E673a18-0.8%7Ef4d4b8&bg=59eeff&w=800&h=800&fm=png',
  blushImgEditor = 'https://blush.design/collections/little-things/scenes-kitchen/THKY6D0pRbyCdz2x?c=Hair_0%7Ee7b460-0.8%7E372310_Skin_0%7E673a18-0.8%7Ef4d4b8&bg=59eeff',
  surViralSite = 'https://connietran-dev.github.io/janebox-surviral-client/#/',
  moodTrackerSite = 'https://srsexton94.github.io/moodtracker-client/',
  email = 'mailto:srsexton94@gmail.com'
}