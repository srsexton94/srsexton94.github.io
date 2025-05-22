import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export interface IProjectLink { 
  src: string;
  label: string,
  icon: IconProp
}

export interface IProject {
  image: string,
  title: string,
  description: string,
  links?: IProjectLink[]
}

export const EngineeringProjects: IProject[] = [
  {
    image: '../assets/images/projects/tic-tac-toe.png',
    title: 'Tic Tac Toe',
    description: `
      A fun little pet project built in Vanilla JS, HTML, & CSS as part of my 
      time in General Assembly's short course on JavaScript.  I had fun and went 
      rogue with the styling and semantic HTML, prioritizing accessibility, and 
      refactored the class' code for optimization and readability!
    `,
    links: [
      {
        src: 'https://srsexton94.github.io/tic-tac-toe/',
        label: 'Deployed Site',
        icon: faGlobe
      },
      {
        src: 'https://github.com/srsexton94/tic-tac-toe',
        label: 'Source code',
        icon: faGithub
      }
    ]
  }
]