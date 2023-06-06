import { Component } from '@angular/core';
import { ISelfieImageDetails, SelfieImageDetails } from '../../../../models';

@Component({
  selector: 'selfie',
  styleUrls: ['./selfie.component.scss'],
  template: `
    <section class="photo-wrapper">
      <img
        [class]="image.selfie.class"
        [src]="image.selfie.src"
        [attr.aria-label]="image.selfie.altText"
      />
      <img
        [class]="image.pronounBadge.class"
        [src]="image.pronounBadge.src"
        [attr.aria-label]="image.pronounBadge.altText"
      />
      <img
        [class]="image.awsCCP.class"
        [src]="image.awsCCP.src"
        [attr.aria-label]="image.awsCCP.altText"
      />
    </section>
  `,
})
export class SelfieComponent {
  image: ISelfieImageDetails = SelfieImageDetails;
}
