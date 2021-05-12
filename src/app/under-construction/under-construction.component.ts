import { Component } from '@angular/core'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt, faPaintRoller, faFilePdf, faTools } from '@fortawesome/free-solid-svg-icons'

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
          <a target="_blank" rel="noopener noreferer" href="https://github.com/srsexton94">
            my code on Github
            <fa-icon class="icon newtab" aria-label="opens new tab" [icon]="newTabIcon"></fa-icon>
          </a>
        </li>
        <li>
          Connect with me on
          <a target="_blank" rel="noopener noreferer" href="https://www.linkedin.com/in/samantha-sexton/">
            LinkedIn
            <fa-icon class="icon newtab" aria-label="opens new tab" [icon]="newTabIcon"></fa-icon>
          </a>
        </li>
        <li>
          Review
          <a target="_blank" rel="noopener noreferer" [href]="pdfPath">
            my Resume
            <fa-icon class="icon pdf" aria-label="opens pdf on new tab" [icon]="pdfIcon"></fa-icon>
          </a>
        </li>
        <li>
          Check out my favorite past projects:<br>
          <a target="_blank" rel="noopener noreferer" href="https://connietran-dev.github.io/janebox-surviral-client/#/">
            SurViral
            <fa-icon class="icon newtab" aria-label="opens new tab" [icon]="newTabIcon"></fa-icon>
          </a>
          and
          <a target="_blank" rel="noopener noreferer" href="https://srsexton94.github.io/moodtracker-client/">
            MoodTracker
            <fa-icon class="icon newtab" aria-label="opens new tab" [icon]="newTabIcon"></fa-icon>
          </a>
        </li>
        <li>
          Email me at <a href="mailto:srsexton94@gmail.com">srsexton94@gmail.com</a>
        </li>
      </ul>
      <img alt="cartoon person working on laptop in kitchen" [src]="underConstructionImg">
    </section>
  `
})
export class UnderConstructionComponent {
  newTabIcon: IconProp = faExternalLinkAlt
  paintIcon: IconProp = faPaintRoller
  pdfIcon: IconProp = faFilePdf
  pdfPath: string = '../../assets/documents/SamanthaSexton_SoftwareEngineer_Resume.pdf'
  toolsIcon: IconProp = faTools
  underConstructionImg: string = 'https://blush.design/api/download?shareUri=THKY6D0pRbyCdz2x&c=Hair_0%7Ee7b460-0.8%7E372310_Skin_0%7E673a18-0.8%7Ef4d4b8&bg=59eeff&w=800&h=800&fm=png'
  // edit img at https://blush.design/collections/little-things/scenes-kitchen/THKY6D0pRbyCdz2x?c=Hair_0%7Ee7b460-0.8%7E372310_Skin_0%7E673a18-0.8%7Ef4d4b8&bg=59eeff
}
