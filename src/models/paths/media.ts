interface IMediaPaths {
  aboutMeImg: string,
  bjjVideo: string,
  blushImg: string,
  blushImgEditor: string,
  danceVideo: string,
  pronounBadge: string,
  resumeImg: string,
  [key: string]: string;
}

export const MediaPaths: IMediaPaths = {
  aboutMeImg: '../../assets/images/about-me.jpeg',
  bjjVideo: '../../assets/videos/tap-cancer-out.mp4',
  blushImg: 'https://blush.design/api/download?shareUri=THKY6D0pRbyCdz2x&c=Hair_0%7Ee7b460-0.8%7E372310_Skin_0%7E673a18-0.8%7Ef4d4b8&bg=59eeff&w=800&h=800&fm=png',
  blushImgEditor: 'https://blush.design/collections/little-things/scenes-kitchen/THKY6D0pRbyCdz2x?c=Hair_0%7Ee7b460-0.8%7E372310_Skin_0%7E673a18-0.8%7Ef4d4b8&bg=59eeff',
  danceVideo: '../../assets/videos/bolero-finals.mp4',
  pronounBadge: '../../assets/images/pronouns.png',
  resumeImg: '../../assets/images/resume.png'
}