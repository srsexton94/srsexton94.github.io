export interface ISlide {
  image: string,
  altText: string,
  heading: string,
  body: string,
  isActive: boolean,
  [key: string]: string | boolean;
}

export const CommunitySlides: ISlide[] = [
  {
    image: '../../assets/images/slides/boston-cityscape.jpeg',
    altText: 'Nighttime cityscape of boston over water with bright streetlamp',
    heading: 'Police Misconduct Data Trust',
    body: `
      I contribute as a Software Engineer and UX Designer to help build a national index of
      police misconduct through Code for Boston & The Tubman Project.
    `,
    isActive: true
  },
  {
    image: '../../assets/images/slides/woc-coding.jpg',
    altText: 'Three people seated on a couch and working on laptops',
    heading: 'G { Code }',
    body: `
      I served as a mentor in support of women and non-binary people of color pursuing careers as
      change makers in the tech industry.
    `,
    isActive: false
  },
  {
    image: '../../assets/images/slides/code-for-boston.jpeg',
    altText: 'Six people working on laptops around a conference table and talking',
    heading: 'Clean Slate',
    body: `
      I helped develop an app to help those applying for sealing/expungement of criminal records through
      Code for Boston & Citizens for Juvenile Justice.
    `,
    isActive: false
  },
  {
    image: '../../assets/images/slides/amherst-survival-center.png',
    altText: 'A person serves food at a lunch counter while two others work behind them in a kitchen',
    heading: 'Amherst Survival Center',
    body: `
      I helped prepare high-volume, free, healthy lunches for the local community, facilitated grocery
      distribution, and translated for Spanish, Russian, & A.S.L. speaking guests.
    `,
    isActive: false
  },
  {
    image: '../../assets/images/slides/shaha-storytellers.jpg',
    altText: 'A large group wearing matching cast t-shirts pose theatrically',
    heading: 'Shaha: The Storytellers',
    body: `
      I wrote, performed, and facilitated theatrical workshops on issues of social injustice & oppression
      through storytelling - helping to lead multi-year series on Racism in LGBTQ+ spaces.
    `,
    isActive: false
  },
  {
    image: '../../assets/images/slides/stonewall.jpeg',
    altText: 'A red couch with rainbow pillows sits in front of a bookshelf of LGBTQ+ volumes',
    heading: 'Stonewall Center',
    body: `
      I coordinated a panel based series speaking to the diversity and humanity of the LGBTQ+ community
      and supported LGBTQ+ students.
    `,
    isActive: false
  },
  {
    image: '../../assets/images/slides/center-women-community.jpeg',
    altText: 'A black trifold standing on grass reads "CWC we\'ve got your back" above 5 colorful silohettes',
    heading: 'Center for Women & Community',
    body: `
      I served as an Educator Advocate, facilitating professional trainings on Intimate Partner Violence
      and supporting SA survivors.
    `,
    isActive: false
  },
  {
    image: '../../assets/images/slides/craigs-place.jpeg',
    altText: 'A white sign on brick wall displays housing shelter\'s operating hours',
    heading: 'Craig\'s Place: A Home Association',
    body: `
      I worked as overnight staff at an emergency housing shelter; assisting guests with community resource access
      and managing shelter operations.
    `,
    isActive: false
  },
]
