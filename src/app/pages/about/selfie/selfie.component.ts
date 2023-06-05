import { Component } from '@angular/core';
import { IImagePaths, ImagePaths } from '../../../../models/index';

@Component({
  selector: 'selfie',
  styleUrls: ['./selfie.component.scss'],
  template: `
    <section class="photo-wrapper">
      <img
        class="selfie"
        [src]="images.aboutMeImg"
        [attr.aria-label]="describeSelfie"
      />
      <img
        class="pronoun-badge"
        [src]="images.pronounBadge"
        [attr.aria-label]="describePronouns"
      />
      <img
        class="aws-ccp"
        [src]="images.awsCCP"
        [attr.aria-label]="describeAWS"
      />
    </section>
  `,
})
export class SelfieComponent {
  describeAWS: string =
    'Amazon Web Services Certified Cloud Practitioner completion badge';
  describePronouns: string =
    "Name tag reading 'Hello! My Pronouns are They/Them'";
  describeSelfie: string =
    'Smiling photo of Sam, a white person with short dual tone hair, glasses, and a collared shirt';
  images: IImagePaths = ImagePaths;
}
