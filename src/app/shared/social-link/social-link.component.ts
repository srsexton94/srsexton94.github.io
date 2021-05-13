import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faAt, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { ProjectPaths, SocialPaths } from '../../../models/paths'

@Component({
  selector: 'social-link',
  template: `
    <a 
      target="_blank" 
      rel="noopener noreferer" 
      [href]="srcPath"
    >
      <span *ngIf="linkText">{{ linkText }} </span>
      <fa-icon aria-label="opens new tab" [class]="iconClass" [icon]="icon"></fa-icon>
    </a>
  `
})
export class SocialLinkComponent {
  @Input() iconType?: string
  @Input() linkText?: string
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
    return `icon ${this.iconSelector}`
  }

  get iconSelector(): string {
    return this.iconType || this.linkType
  }

  get srcPath(): string {
    return SocialPaths[this.linkType] || ProjectPaths[this.linkType]
  }
}
