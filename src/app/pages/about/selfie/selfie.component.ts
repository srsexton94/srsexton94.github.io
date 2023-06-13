import { Component } from '@angular/core';
import { ISelfieImageDetails, SelfieImageDetails } from '../../../../models';

@Component({
  selector: 'selfie',
  styleUrls: ['./selfie.component.scss'],
  template: `
    <section class="photo-wrapper">
      <img
        *ngFor="let image of images"
        [class]="image.class"
        [src]="image.src"
        [attr.aria-label]="image.altText"
      />
    </section>
  `,
})
export class SelfieComponent {
  images: ISelfieImageDetails[] = SelfieImageDetails;
}
