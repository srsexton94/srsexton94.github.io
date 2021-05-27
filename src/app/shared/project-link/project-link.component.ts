import { Component, Input } from '@angular/core';
import { IProject, ProjectData, ProjectTypes } from 'src/models';

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
      {{ linkText }}
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

  get linkText(): string {
    return this.linkType === 'site' ? 'Live Site' : 'Codebase'
  }

  get ariaLabel(): string {
    return `Open ${ this.linkText.toLocaleLowerCase() } in new tab`
  }
}
