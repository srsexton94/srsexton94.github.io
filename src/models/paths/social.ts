export enum SocialLinkTypes {
  EMAIL = 'email',
  GITHUB = 'github',
  LINKEDIN = 'linkedin',
  RESUME = 'resume',
}

type ISocialPaths = { [key in SocialLinkTypes]: string };

export const SocialPaths: ISocialPaths = {
  email: 'mailto:srsexton94@gmail.com',
  github: 'https://github.com/srsexton94',
  linkedin: 'https://www.linkedin.com/in/sam-sexton/',
  resume: '../assets/documents/SamSexton_SoftwareEngineer_Resume.pdf',
};
