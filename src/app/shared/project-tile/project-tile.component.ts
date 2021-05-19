import { Component, Input } from '@angular/core'
import { IProject, ProjectPaths, ProjectTypes } from '../../../models/index'

@Component({
  selector: 'project-tile',
  styleUrls: ['./project-tile.component.scss'],
  template: `
    <div class="project-tile">
      <div class="card" [ngClass]="{ 'flipped': isFlipped }">
        <div class="face front">
          <img [src]="project.image" />
        </div>
        <div id="project-description" class="face back">
          <h2>{{ project.displayName }}</h2>
          <p>{{ project.description }}</p>
          <a 
            *ngIf="project.site"
            target="_blank" 
            rel="noopener noreferer" 
            aria-label="Open live site in new tab" 
            [attr.tabindex]="tabIndex" 
            [href]="project.site"
          >
            Live Site
          </a>
          <a 
            *ngIf="project.code"
            target="_blank" 
            rel="noopener noreferer" 
            aria-label="Open codebase in new tab" 
            [attr.tabindex]="tabIndex" 
            [href]="project.code"
          >
            Codebase
          </a>
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

  get project(): IProject {
    return ProjectPaths[this.projectName]
  }

  get tabIndex(): number {
    return this.isFlipped ? 0 : -1
  }

  flipCard(): void {
    this.isFlipped = !this.isFlipped
  }
}
