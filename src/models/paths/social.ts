interface ISocialPaths {
  github: string,
  linkedin: string,
  resume: string,
  email: string
  [key: string]: string;
}

export const SocialPaths: ISocialPaths = {
  github: 'https://github.com/srsexton94',
  linkedin: 'https://www.linkedin.com/in/samantha-sexton/',
  resume: '../assets/documents/SamanthaSexton_SoftwareEngineer_Resume.pdf',
  email: 'mailto:srsexton94@gmail.com'
}
