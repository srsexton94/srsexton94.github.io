import { Component } from '@angular/core'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faPaintRoller, faTools } from '@fortawesome/free-solid-svg-icons'
import { ImagePaths, SocialPaths } from '../../models/paths'

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
          <social-link linkType="github" iconType="newtab">my code on GitHub</social-link>
        </li>
        <li>
          Connect with me on
          <social-link linkType="linkedin" iconType="newtab">LinkedIn</social-link>
        </li>
        <li>
          Review 
          <social-link linkType="resume">my Resume</social-link>
        </li>
        <li>
          Check out my favorite past projects:<br>
          <social-link linkType="surViralSite" iconType="newtab">SurViral</social-link>
          and
          <social-link linkType="moodTrackerSite" iconType="newtab">MoodTracker</social-link>
        </li>
        <li>
          Email me at <a class="email-link" [href]="emailPath">srsexton94@gmail.com</a>
        </li>
      </ul>
      <img 
        title="Blush: The Little Things Kitchen by Susana Salas"
        alt="cartoon person working on laptop in kitchen"
        [src]="blushImage"
      />
    </section>
  `
})
export class UnderConstructionComponent {
  blushImage: string = ImagePaths.blushImg
  emailPath: string = SocialPaths.email
  paintIcon: IconProp = faPaintRoller
  toolsIcon: IconProp = faTools
}
