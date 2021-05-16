import { Component } from '@angular/core';
import { ImagePaths } from '../../../../src/models/paths'

@Component({
  selector: 'about-page',
  styleUrls: ['./about.component.scss'],
  template: `
    <section id="about-section" class="page-section">
      <img class="selfie" [src]="selfieSrc"/>
      <div class="self-description">
        <h2>Hi there! I'm Sam</h2>
        <p>
          Here's a paragraph where I'll tell you about myself and all the cool stuff that I do weeeeee
        </p>
        <img class="pronoun-badge" [src]="pronounSrc"/>
      </div>
    </section>
  `
})
export class AboutComponent {
  selfieSrc: string = ImagePaths.aboutMe
  pronounSrc: string = ImagePaths.pronounBadge
}
