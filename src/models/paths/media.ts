interface IImagePaths {
  aboutMeImg: string,
  blushImg: string,
  lottieAnimation: string,
  pronounBadge: string,
  resumeImg: string,
  [key: string]: string;
}

export interface IVideoPaths {
  bjjVideo: string,
  danceVideo: string,
  langVideo: string,
  [key: string]: string;
}

export const ImagePaths: IImagePaths = {
  aboutMeImg: '../../assets/images/about-me.jpeg',
  blushImg: '../../assets/images/the-little-things-kitchen.png',
  lottieAnimation: 'https://assets9.lottiefiles.com/packages/lf20_hucoqyyg.json',
  pronounBadge: '../../assets/images/pronouns.png',
  resumeImg: '../../assets/images/resume.png'
}

export const VideoPaths: IVideoPaths ={
  bjjVideo: '../../assets/videos/tap-cancer-out.mp4',
  danceVideo: '../../assets/videos/bolero-finals.mp4',
  langVideo: '../../assets/videos/bolero-finals.mp4'
}
