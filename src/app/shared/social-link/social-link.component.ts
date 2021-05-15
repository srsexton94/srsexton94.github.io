import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faAt, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { ProjectPaths, SocialPaths } from '../../../models/paths'

@Component({
  selector: 'social-link',
  styleUrls: ['social-link.component.scss'],
  template: `
    <a 
      class="social-link"
      target="_blank" 
      rel="noopener noreferer" 
      [href]="srcPath"
    >
      <ng-content></ng-content>
      <fa-icon aria-label="opens new tab" [class]="iconClass" [icon]="icon"></fa-icon>
    </a>
  `
})
export class SocialLinkComponent {
  @Input() addClasses?: string
  @Input() iconType?: string
  @Input() linkType: string = 'linkedin'

  iconTypes: { [key: string]: IconProp } = {
    email: faAt,
    github: faGithub,
    linkedin: faLinkedin,
    newtab: faExternalLinkAlt,
    resume: faFilePdf
  }
  
  get icon(): IconProp {
    return this.iconTypes[this.iconSelector]
  }

  get iconClass(): string {
    return `icon ${this.iconSelector} ${this.addClasses}`
  }

  get iconSelector(): string {
    return this.iconType || this.linkType
  }

  get srcPath(): string {
    return SocialPaths[this.linkType] || ProjectPaths[this.linkType]
  }
}
