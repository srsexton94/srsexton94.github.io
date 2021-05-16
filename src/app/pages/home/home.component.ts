import { Component } from '@angular/core'
import { DevTitleList } from '../../../models/titles'

@Component({
  selector: 'home-page',
  styleUrls: ['./home.component.scss'],
  template: `
    <section class="page-section">
      <div class="section-body">
        <h1>Samantha Rose Sexton</h1>
        <typewriter [typewriterTexts]="typewriterTexts"></typewriter>
        <ul class="socials">
          <li class="social-button">
            <social-link addClasses="button" linkType="linkedin"></social-link>
          </li>
          <li class="social-button">
            <social-link addClasses="button" linkType="github"></social-link>
          </li>
          <li class="social-button">
            <social-link addClasses="button" linkType="email"></social-link>
          </li>
          <li class="social-button">
            <social-link addClasses="button" linkType="resume"></social-link>
          </li>
        </ul>
      </div>
    </section>
  `
})
export class HomeComponent {
  typewriterTexts: string[] = DevTitleList
}