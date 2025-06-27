export enum SelfieImageTypes {
  SELFIE = 'selfie',
  GA = 'general-assembly',
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
    class: SelfieImageTypes.GA,
    src: '../../assets/images/GA.png',
    altText: `
      General Assembly coding school badge, a red cog with the letters GA
    `,
  },
];
