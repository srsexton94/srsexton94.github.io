import { Component, Input } from '@angular/core'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, faAt, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { SocialLinkTypes, SocialPaths } from '../../../models/index'

@Component({
  selector: 'social-link',
  styleUrls: ['social-link.component.scss'],
  template: `
    <a 
      target="_blank" 
      rel="noopener noreferer" 
      [class]="iconClass"
      [href]="srcPath"
    >
      <ng-content></ng-content>
      <fa-icon *ngIf="!excludeIcon" aria-label="opens new tab" [icon]="icon"></fa-icon>
    </a>
  `
})
export class SocialLinkComponent {
  @Input() addClasses?: string
  @Input() excludeIcon?: boolean
  @Input() iconType?: string
  @Input() linkType: SocialLinkTypes = SocialLinkTypes.LINKEDIN

  iconTypes: { [key: string]: IconProp } = {
    email: faAt,
    github: faGithub,
    linkedin: faLinkedin,
    newtab: faExternalLinkAlt,
    resume: faFilePdf
  }
  
  get icon(): IconProp {
    return this.iconTypes[this.iconSelector] || this.iconTypes.newtab
  }

  get iconClass(): string {
    return `social-link ${this.iconSelector} ${this.addClasses}`
  }

  get iconSelector(): string {
    return this.iconType || this.linkType
  }

  get srcPath(): string {
    return SocialPaths[this.linkType]
  }
}
