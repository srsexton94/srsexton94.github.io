import { Component, Input } from '@angular/core'
import { IProject, ProjectData, ProjectTypes } from '../../../../models/index'

@Component({
  selector: 'project-tile',
  styleUrls: ['./project-tile.component.scss'],
  template: `
    <ng-container>
      <div class="project-tile">
        <div class="card" [ngClass]="{ 'flipped': isFlipped }">
          <div class="face front">
            <img [src]="project.image" />
          </div>
          <div id="project-info" class="face back">
            <h2 class="display-name">{{ project.displayName }}</h2>
            <p class="description">{{ project.description  }}</p>
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
        class="flipcard-btn"
        aria-label="Reveal project info" 
        aria-describedby="project-info" 
        (click)="flipCard()"
      >
        Flip Card
      </button>
    </ng-container>
  `
})
export class ProjectTileComponent {
  @Input() projectName: ProjectTypes = ProjectTypes.TBD

  isFlipped: boolean = false

  get project(): IProject {
    return ProjectData[this.projectName]
  }

  get tabIndex(): number {
    return this.isFlipped ? 0 : -1
  }

  flipCard(): void {
    this.isFlipped = !this.isFlipped
  }
}