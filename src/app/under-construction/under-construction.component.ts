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
          <social-link linkText="my code on Github" linkType="github" iconType="newtab"></social-link>
        </li>
        <li>
          Connect with me on
          <social-link linkText="LinkedIn" linkType="linkedin" iconType="newtab"></social-link>
        </li>
        <li>
          Review
          <social-link linkText="my Resume" linkType="resume"></social-link>
        </li>
        <li>
          Check out my favorite past projects:<br>
          <social-link linkText="SurViral" linkType="surViralSite" iconType="newtab"></social-link>
          and
          <social-link linkText="MoodTracker" linkType="moodTrackerSite" iconType="newtab"></social-link>
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
  paintIcon: IconProp = faPaintRoller
  toolsIcon: IconProp = faTools
}