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
    body: 'I contribute as a Software Engineer and UX designer to help build a national index of police incidents through Code for Boston',
    isActive: true
  },
  {
    image: '../../assets/images/slides/woc-coding.jpg',
    altText: 'Three people seated on a couch and working on laptops',
    heading: 'G { Code }',
    body: 'I serve as a mentor in support of women and non-binary people of color pursuing careers as change makers in the tech industry',
    isActive: false
  },
  {
    image: '../../assets/images/slides/code-for-boston.jpeg',
    altText: 'Six people working on laptops around a conference table and talking',
    heading: 'Clean Slate',
    body: 'I helped develop and design an app to help those applying for sealing/expungement of criminal records through Code for Boston',
    isActive: false
  },
  {
    image: '../../assets/images/slides/amherst-survival-center.png',
    altText: 'A person serves food at a lunch counter while two others work behind them in a kitchen',
    heading: 'Amherst Survival Center',
    body: 'I helped prepare high-volume, free, healthy lunches for the local community and translated for Spanish & Russian speaking guests.',
    isActive: false
  },
  {
    image: '../../assets/images/slides/shaha-storytellers.jpg',
    altText: 'A large group wearing matching cast t-shirts pose theatrically',
    heading: 'Shaha: The Storytellers',
    body: 'I wrote, performed, and facilitated theatrical workshops on issues of social injustice & oppression through storytelling',
    isActive: false
  },
  {
    image: '../../assets/images/slides/stonewall.jpeg',
    altText: 'A red couch with rainbow pillows sits in front of a bookshelf full of LGBTQ+ titles',
    heading: 'Stonewall Center',
    body: 'I coordinated a panel based series speaking to the diversity and humanity of the LGBTQ+ community and supported LGBTQ+ students',
    isActive: false
  },
  {
    image: '../../assets/images/slides/center-women-community.jpeg',
    altText: 'A red couch with rainbow pillows sits in front of a bookshelf full of LGBTQ+ titles',
    heading: 'Center for Women & Community',
    body: 'I served as an Educator Advocate, facilitating professional trainings on Intimate Partner Violence Prevention and supporting survivors',
    isActive: false
  },
  {
    image: '../../assets/images/slides/working-at-desk.jpg',
    altText: 'Three people seated at a table with laptops talking and laughing',
    heading: 'Design X Humanity',
    body: 'I worked as a UX Engineer & Instructional Designer to help build educational tools for K-12 students on critical anti-racism and social equity',
    isActive: false
  }
]

const old = `<section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="community">

          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="mb-2 card bg-dark text-white">
                <div class="card-body dxh">
                  <a href="https://www.designxhumanity.com/" target="_blank">
                    <h4 class="card-title">Design X Humanity</h4>
                    <p class="card-text">
                      I worked as an UI/UX Engineer & Instructional Designer on the DEI Committee to help build
                      educational tech tools for K-12 students on critical anti-racism and social equity.
                    </p>
                  </a>
                </div>
              </div>
              </div>
              </div>
      </section>`