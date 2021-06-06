import { Component } from '@angular/core'
import { ProjectTypes } from '../../../models/index'

@Component({
  selector: 'engineering-page',
  styleUrls: ['./engineering.component.scss'],
  template: `
    <section id="engineering-section" class="page-section">
      <h2 class="eng-title">Engineering Projects</h2>
      <p class="eng-instructions">[ Click each card to learn more ]</p>
      <div class="project-container">
        <project-tile 
          [projectName]="projects.SURVIRAL"
        ></project-tile>
        <project-tile 
          [projectName]="projects.MOODTRACKER"
        ></project-tile>
        <project-tile 
          [projectName]="projects.RUSSIAN"
        ></project-tile>
        <project-tile 
          [projectName]="projects.RAIN"
        ></project-tile>
        <project-tile 
          [ngClass]="{ 'collapsed': isMobileCollapsed }" 
          [projectName]="projects.BUDGET"
        ></project-tile>
        <project-tile 
          [ngClass]="{ 'collapsed': isMobileCollapsed }" 
          [projectName]="projects.CALCULATOR"
        ></project-tile>
        <project-tile 
          [ngClass]="{ 'collapsed': isMobileCollapsed }" 
          [projectName]="projects.POMODORO"
        ></project-tile>
        <project-tile 
          [ngClass]="{ 'collapsed': isMobileCollapsed }" 
          [projectName]="projects.TODONE"
        ></project-tile>
        <button class="mobile-btn" (click)="handleMobileToggle()">
          {{ mobileToggleText }}
        </button>
      </div>
    </section>
  `
})
export class EngineeringComponent {
  projects: { [key: string]: ProjectTypes } = ProjectTypes
  isMobileCollapsed: boolean = true

  get mobileToggleText(): string {
    return this.isMobileCollapsed ? 'Show more' : 'Show less'
  }

  handleMobileToggle(): void {
    this.isMobileCollapsed = !this.isMobileCollapsed
  }
}
