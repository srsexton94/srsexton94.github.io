import { Component, Input } from '@angular/core'
import { ProjectPaths, ProjectTypes } from '../../../models/index'

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
          <a [attr.tabindex]="tabIndex" [href]="siteSrc">Live Site</a>
          <a [attr.tabindex]="tabIndex" [href]="codeSrc">Codebase</a>
        </div>
      </div>
    </div>
    <button 
      aria-label="Reveal project description" 
      aria-describedby="project-description" 
      (click)="flipCard()"
    >
      Flip Card
    </button>
  `
})
export class ProjectTileComponent {
  @Input() projectName: ProjectTypes = ProjectTypes.TBD

  isFlipped: boolean = false
  
  get codeSrc(): string {
    return ProjectPaths[this.projectName].code
  }

  get imgSrc(): string {
    return ProjectPaths[this.projectName].image
  }

  get siteSrc(): string {
    return ProjectPaths[this.projectName].site
  }

  get tabIndex(): number {
    return this.isFlipped ? 0 : -1
  }

  flipCard(): void {
    this.isFlipped = !this.isFlipped
  }
}
