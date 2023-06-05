import { Component } from '@angular/core';
import { ImagePaths, SocialLinkTypes } from '../../../../models/index';

@Component({
  selector: 'resume-preview',
  styleUrls: ['./resume-preview.component.scss'],
  template: `
    <social-link
      class="resume-preview"
      aria-describedby="preview-instructions"
      [excludeIcon]="true"
      [linkType]="resumeSrc"
    >
      <img class="resume-img" aria-hidden="true" [src]="resumeImg" />
      <p id="preview-instructions">Opens Resume in new tab</p>
    </social-link>
  `,
})
export class ResumePreviewComponent {
  resumeImg: string = ImagePaths.resumeImg;
  resumeSrc: SocialLinkTypes = SocialLinkTypes.RESUME;
}
