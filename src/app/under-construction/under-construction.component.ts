import { Component } from '@angular/core'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt, faPaintRoller, faFilePdf, faTools } from '@fortawesome/free-solid-svg-icons'
import { PATHS } from '../../models/paths'
@Component({
  selector: 'under-construction',
  styleUrls: ['./under-construction.component.scss'],
  template: `
    <section class="under-construction">
      <h2>
        <fa-icon class="icon paint" aria-hidden="true" [icon]="paintIcon"></fa-icon>
        I'm under construction!
        <fa-icon class="icon tools" aria-hidden="true" [icon]="toolsIcon"></fa-icon>
      </h2>
      <p>
        I've recently decided to re-design my website and the changes are now underway.
      </p>
      <p>
        In the meantime I'd love to invite you to...
      </p>
      <ul>
        <li>
          Check out
          <a target="_blank" rel="noopener noreferer" [href]="githubPath">
            my code on Github
            <fa-icon class="icon newtab" aria-label="opens new tab" [icon]="newTabIcon"></fa-icon>
          </a>
        </li>
        <li>
          Connect with me on
          <a target="_blank" rel="noopener noreferer" [href]="linkedInPath">
            LinkedIn
            <fa-icon class="icon newtab" aria-label="opens new tab" [icon]="newTabIcon"></fa-icon>
          </a>
        </li>
        <li>
          Review
          <a target="_blank" rel="noopener noreferer" [href]="resumePath">
            my Resume
            <fa-icon class="icon pdf" aria-label="opens pdf on new tab" [icon]="pdfIcon"></fa-icon>
          </a>
        </li>
        <li>
          Check out my favorite past projects:<br>
          <a target="_blank" rel="noopener noreferer" [href]="surViralSitePath">
            SurViral
            <fa-icon class="icon newtab" aria-label="opens new tab" [icon]="newTabIcon"></fa-icon>
          </a>
          and
          <a target="_blank" rel="noopener noreferer" [href]="moodTrackerSitePath">
            MoodTracker
            <fa-icon class="icon newtab" aria-label="opens new tab" [icon]="newTabIcon"></fa-icon>
          </a>
        </li>
        <li>
          Email me at <a [href]="emailPath">srsexton94@gmail.com</a>
        </li>
      </ul>
      <img alt="cartoon person working on laptop in kitchen" [src]="blushImage">
    </section>
  `
})
export class UnderConstructionComponent {
  blushImage: string = PATHS.blushImg
  emailPath: string = PATHS.email
  githubPath: string = PATHS.github
  linkedInPath: string = PATHS.linkedin
  moodTrackerSitePath: string = PATHS.moodTrackerSite
  newTabIcon: IconProp = faExternalLinkAlt
  paintIcon: IconProp = faPaintRoller
  pdfIcon: IconProp = faFilePdf
  resumePath: string = PATHS.resume
  surViralSitePath: string = PATHS.surViralSite
  toolsIcon: IconProp = faTools
}
