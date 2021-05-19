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
        <div id="project-info" class="face back">
          <h2>{{ project.displayName }}</h2>
          <p>{{ project.description  }}</p>
          <div class="btn-container">
            <project-link 
              linkType="site" 
              [project]="project" 
              [tabIndex]="tabIndex"
            ></project-link>
            <project-link 
              linkType="code" 
              [project]="project" 
              [tabIndex]="tabIndex"
            ></project-link>
          </div>
        </div>
      </div>
    </div>
    <button 
      aria-label="Reveal project information" 
      aria-describedby="project-info" 
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
