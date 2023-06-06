export enum SelfieImageTypes {
  SELFIE = 'selfie',
  CCP = 'awsCCP',
  PRONOUNS = 'pronounBadge',
}

export type ISelfieImageDetails = {
  [key in SelfieImageTypes]: {
    src: string,
    altText: string,
    class: string,
  }
}

export const SelfieImageDetails: ISelfieImageDetails = {
  [SelfieImageTypes.SELFIE]: {
    src: '../../assets/images/about-me.jpeg',
    altText: `
      Smiling photo of Sam, a white person with bright pink and orange hair,
      in an open collared shirt against a brick background.
    `,
    class: 'selfie'
  },
  [SelfieImageTypes.CCP]: {
    src: '../../assets/images/aws-ccp.png',
    altText: `
      Amazon Web Services Certified Cloud Practitioner completion badge
    `,
    class: 'aws-ccp'
  },
  [SelfieImageTypes.PRONOUNS]: {
    src: '../../assets/images/pronouns.png',
    altText: `
      Name tag reading 'Hello! My Pronouns are They/Them'
    `,
    class: 'pronoun-badge'
  },
}