import { Component } from '@angular/core';
import { ImagePaths, SocialLinkTypes } from '../../../../../models/index'

@Component({
  selector: 'resume-preview',
  styleUrls: ['./resume-preview.component.scss'],
  template: `
      <social-link 
        aria-describedby="preview-instructions"
        [excludeIcon]="true"
        [linkType]="resumeSrc"
      >
        <img class="resume-img" aria-hidden="true" [src]="resumeImg"/>  
        <p id="preview-instructions">Click to open Resume in new tab</p>
      </social-link>
  `
})
export class ResumePreviewComponent {
  resumeImg: string = ImagePaths.resumeImg
  resumeSrc: SocialLinkTypes = SocialLinkTypes.RESUME
}