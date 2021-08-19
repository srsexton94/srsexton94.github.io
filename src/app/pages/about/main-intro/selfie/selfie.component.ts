import { Component } from '@angular/core';
import { IImagePaths, ImagePaths } from '../../../../../../src/models/index'

@Component({
  selector: 'selfie',
  styleUrls: ['./selfie.component.scss'],
  template: `
    <div class="photo-wrapper">
      <img class="selfie" [src]="images.aboutMeImg"/>
      <img class="pronoun-badge" [src]="images.pronounBadge"/>
      <img class="aws-ccp" [src]="images.awsCCP"/>
    </div>
  `
})
export class SelfieComponent {
  images: IImagePaths = ImagePaths
}
