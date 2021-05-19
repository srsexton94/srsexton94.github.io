import { Component, Input } from '@angular/core'
import { ProjectPaths, ProjectTypes, SocialLinkTypes } from '../../../models/index'

@Component({
  selector: 'project-tile',
  styleUrls: ['./project-tile.component.scss'],
  template: `
    <div class="project-tile">
      <div class="card" [ngClass]="{ 'flipped': isFlipped }">
        <div class="face front">
          <img [src]="imgSrc" />
        </div>
        <div id="project-description" class="face back">
          <h2>{{ projectName }}</h2>
          <p>Here's where I'll tell you about what this cool project does weeeee</p>
          <social-link
            [iconType]="linkTypes.NEWTAB"
            [linkType]="linkTypes.GITHUB"
            [ngClass]="{ 'hidden': !isFlipped }"
          >
            Live Site
          </social-link>
          <social-link
            [iconType]="linkTypes.NEWTAB"
            [linkType]="linkTypes.GITHUB"
            [ngClass]="{ 'hidden': !isFlipped }"
          >
            Codebase
          </social-link>
        </div>
      </div>
    </div>
    <button aria-describedby="project-description" (click)="flipCard()">
      Flip Card
    </button>
  `
})
export class ProjectTileComponent {
  @Input() projectName: ProjectTypes = ProjectTypes.TBD

  isFlipped: boolean = false
  linkTypes: { [key: string]: SocialLinkTypes } = SocialLinkTypes
  
  get imgSrc(): string {
    return ProjectPaths[this.projectName].image
  }

  flipCard(): void {
    this.isFlipped = !this.isFlipped
  }
}
