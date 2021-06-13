interface IImagePaths {
  aboutMeImg: string,
  blushImg: string,
  lottieAnimation: string,
  nanowrimoImg: string,
  pronounBadge: string,
  resumeImg: string,
  [key: string]: string;
}

export interface IVideoPaths {
  BJJ: string,
  DANCE: string,
  LANG: string,
  [key: string]: string;
}

export const ImagePaths: IImagePaths = {
  aboutMeImg: '../../assets/images/about-me.jpeg',
  blushImg: '../../assets/images/the-little-things-kitchen.png',
  lottieAnimation: 'https://assets9.lottiefiles.com/packages/lf20_hucoqyyg.json',
  nanowrimoImg: '../../assets/images/NaNoWriMo_2020.png',
  pronounBadge: '../../assets/images/pronouns.png',
  resumeImg: '../../assets/images/resume.png'
}

export const VideoPaths: IVideoPaths = {
  BJJ: '../../assets/videos/tap-cancer-out.mp4',
  DANCE: '../../assets/videos/bolero-finals.mp4',
  LANG: '../../assets/videos/bolero-finals.mp4'
}
