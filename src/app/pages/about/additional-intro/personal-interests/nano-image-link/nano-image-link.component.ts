import { Component } from '@angular/core'
import { ImagePaths, InterestsList, SocialLinkTypes } from '../../../../../../models'

@Component({
  selector: 'nano-image-link',
  styleUrls: ['./nano-image-link.component.scss'],
  template: `
    <social-link [excludeIcon]="true" [linkType]="nanoSitePath">
      <div class="link-content-container">
        <img class="nano" aria-hidden="true" [src]="nanoImgPath">
        <div class="caption">
          <p>
            I completed my first <span aria-label="National Novel Writing Month">"NaNoWriMo"</span>
            last year with <span aria-label="more than fifty thousand">50k+</span> words of a 
            <span aria-label="L G B T">LGBT+</span> worldview novel.
          </p>
          <p>I've since continued writing by re-working that first draft and delving into short story forms!</p>
          <p>Looking forward to round #2 in November 2021!</p>
        </div>
      </div>
    </social-link>
  `
})
export class NanoImageLinkComponent {
  nanoImgPath: string = ImagePaths.nanowrimoImg
  nanoSitePath: SocialLinkTypes = SocialLinkTypes.NANO
}