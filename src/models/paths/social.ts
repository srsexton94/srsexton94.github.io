import { ProjectTypes } from './projects'

export enum SocialLinkTypes {
  EMAIL = 'email',
  GITHUB = 'github',
  GOOGLE = 'google',
  LINKEDIN = 'linkedin',
  RESUME = 'resume'
}

type ISocialPaths = { [key in SocialLinkTypes]: string }

export const SocialPaths: ISocialPaths = {
  email: 'mailto:srsexton94@gmail.com',
  github: 'https://github.com/srsexton94',
  google: 'https://www.coursera.org/professional-certificates/google-ux-design',
  linkedin: 'https://www.linkedin.com/in/samantha-sexton/',
  resume: '../assets/documents/SamanthaSexton_SoftwareEngineer_Resume.pdf'
}
