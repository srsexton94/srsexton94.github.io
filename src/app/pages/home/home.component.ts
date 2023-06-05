import { Component } from '@angular/core'
import { DevTitleList, SocialLinkTypes } from '../../../models/index'

@Component({
  selector: 'home-page',
  styleUrls: ['./home.component.scss'],
  template: `
    <section class="page-section">
      <div class="section-body">
        <h1 class="name-display">Sam <span>Rose</span> Sexton</h1>
        <typewriter [typewriterTexts]="titleTexts"></typewriter>
        <ul class="socials">
          <li class="social-button">
            <social-link addClasses="social-btn" [linkType]="linkTypes.LINKEDIN"></social-link>
          </li>
          <li class="social-button">
            <social-link addClasses="social-btn" [linkType]="linkTypes.GITHUB"></social-link>
          </li>
          <li class="social-button">
            <social-link addClasses="social-btn" [linkType]="linkTypes.EMAIL"></social-link>
          </li>
          <li class="social-button">
            <social-link addClasses="social-btn" [linkType]="linkTypes.RESUME"></social-link>
          </li>
        </ul>
      </div>
    </section>
  `
})
export class HomeComponent {
  linkTypes: { [key: string]: SocialLinkTypes } = SocialLinkTypes
  titleTexts: string[] = DevTitleList
}