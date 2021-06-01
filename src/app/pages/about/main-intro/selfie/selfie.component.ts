import { Component } from '@angular/core';
import { ImagePaths } from '../../../../../../src/models/index'

@Component({
  selector: 'selfie',
  styleUrls: ['./selfie.component.scss'],
  template: `
    <div class="photo-wrapper">
      <img class="selfie" [src]="selfieSrc"/>
      <img class="pronoun-badge" [src]="pronounSrc"/>
    </div>
  `
})
export class SelfieComponent {
  selfieSrc: string = ImagePaths.aboutMeImg
  pronounSrc: string = ImagePaths.pronounBadge
}
