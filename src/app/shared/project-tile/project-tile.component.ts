import { Component, Input } from '@angular/core'
import { ProjectImagePaths } from '../../../models/index'

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
            linkType="github" 
            iconType="newtab" 
            [ngClass]="{ 'hidden': !isFlipped }"
          >
            Live Site
          </social-link>
          <social-link 
            linkType="github" 
            iconType="newtab" 
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
  @Input() projectName: string = 'TBD'

  isFlipped: boolean = false
  
  get imgSrc(): string {
    return ProjectImagePaths[this.projectName]
  }

  flipCard(): void {
    this.isFlipped = !this.isFlipped
  }
}
