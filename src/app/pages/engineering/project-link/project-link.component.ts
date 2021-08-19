import { Component, Input } from '@angular/core'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { IProject, ProjectData, ProjectTypes } from 'src/models'

@Component({
  selector: 'project-link',
  styleUrls: ['./project-link.component.scss'],
  template: `
    <a 
      *ngIf="linkSrc"
      class="project-link"
      target="_blank" 
      rel="noopener noreferer"
      [attr.tabindex]="tabIndex" 
      [attr.aria-label]="ariaLabel"
      [href]="linkSrc"
    >
      <fa-icon size="lg" [icon]="linkIcon"></fa-icon>
    </a>
  `
})
export class ProjectLinkComponent {
  @Input() linkType: string = ''
  @Input() project: IProject = ProjectData[ProjectTypes.TBD]
  @Input() tabIndex: number = 0

  get linkSrc(): string {
    return this.project[this.linkType]
  }

  get linkIcon(): IconProp {
    return this.linkType === 'site' ? faLaptop : faGithub
  }

  get ariaLabel(): string {
    const descriptor: string = this.linkType === 'site' ? 'website' : 'code'

    return `Open ${ this.project.displayName } ${ descriptor } in new tab`
  }
}
