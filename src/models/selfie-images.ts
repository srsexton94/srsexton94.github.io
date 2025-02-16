export enum SelfieImageTypes {
  SELFIE = 'selfie',
  CCP = 'aws-ccp',
  PRONOUNS = 'pronoun-badge',
}

export type ISelfieImageDetails = {
  class: SelfieImageTypes;
  src: string;
  altText: string;
};

export const SelfieImageDetails: ISelfieImageDetails[] = [
  {
    class: SelfieImageTypes.SELFIE,
    src: '../../assets/images/about-me.jpeg',
    altText: `
      Smiling photo of Sam, a white person with short brown hair, 
      round glasses, and an open jacket with a blue collar.
    `,
  },
  {
    class: SelfieImageTypes.PRONOUNS,
    src: '../../assets/images/pronouns.png',
    altText: `
      Name tag reading 'Hello! My Pronouns are They/Them'
    `,
  },
  {
    class: SelfieImageTypes.CCP,
    src: '../../assets/images/aws-ccp.png',
    altText: `
      Amazon Web Services Certified Cloud Practitioner completion badge
    `,
  },
];
