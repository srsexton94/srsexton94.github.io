enum DevTitles {
  ENGINEER = 'Full Stack Software Engineer',
  DESIGNER = 'UX Designer',
  ACCESSIBILITY = 'Web Accessibility Specialist',
  COMMUNITY = 'Community Advocate',
  LINGUIST = 'Theoretical Linguist'
}

enum PersonalInterests {
  BJJ = 'train and compete as a JiuJiteira',
  DANCE = 'perform and teach as a Ballroom Dancer',
  LANG = 'try my darndest to learn alllllll the languages!'
}

export const DevTitleList: string[] = Object.values(DevTitles)
export const InterestsList: string[] = Object.values(PersonalInterests)