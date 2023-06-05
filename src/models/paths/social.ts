import { ProjectTypes } from './projects'

export enum SocialLinkTypes {
  CLEAN_CODE = 'cleancode',
  CODE_KATA = 'codekata',
  EMAIL = 'email',
  FIDELITY = 'fidelity',
  GITHUB = 'github',
  GOOGLE = 'google',
  LINKEDIN = 'linkedin',
  NANO = 'nanowrimo',
  RESUME = 'resume',
  UMASS = 'umass'
}

type ISocialPaths = { [key in SocialLinkTypes]: string }

export const SocialPaths: ISocialPaths = {
  cleancode: '../assets/documents/CleanCode_Infographic.pdf',
  codekata: 'https://www.codewars.com/users/srsexton94/completed_solutions',
  email: 'mailto:srsexton94@gmail.com',
  fidelity: 'https://www.linkedin.com/company/fidelity-investments/about/',
  github: 'https://github.com/srsexton94',
  google: 'https://www.coursera.org/professional-certificates/google-ux-design',
  linkedin: 'https://www.linkedin.com/in/sam-sexton/',
  nanowrimo: 'https://nanowrimo.org/',
  resume: '../assets/documents/SamSexton_SoftwareEngineer_Resume.pdf',
  umass: 'https://www.umass.edu/linguistics/node/2867'
}
