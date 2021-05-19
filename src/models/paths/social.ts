import { ProjectTypes } from './projects'

export enum SocialLinkTypes {
  LINKEDIN = 'linkedin',
  GITHUB = 'github',
  RESUME = 'resume',
  EMAIL = 'email',
}

type ISocialPaths = { [key in SocialLinkTypes]: string }

export const SocialPaths: ISocialPaths = {
  github: 'https://github.com/srsexton94',
  linkedin: 'https://www.linkedin.com/in/samantha-sexton/',
  resume: '../assets/documents/SamanthaSexton_SoftwareEngineer_Resume.pdf',
  email: 'mailto:srsexton94@gmail.com'
}
