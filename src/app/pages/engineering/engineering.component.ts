import { Component } from '@angular/core'
import { ProjectTypes } from '../../../models/index'

@Component({
  selector: 'engineering-page',
  styleUrls: ['./engineering.component.scss'],
  template: `
    <section id="engineering-section" class="page-section">
      <h2 class="eng-title">Engineering Projects</h2>
      <p class="eng-instructions">
        [ Hover each card or click its button to learn more about the projects ]
      </p>
      <div class="project-container">
        <project-tile [projectName]="projects.SURVIRAL"></project-tile>
        <project-tile [projectName]="projects.MOODTRACKER"></project-tile>
        <project-tile [projectName]="projects.RUSSIAN"></project-tile>
        <project-tile [projectName]="projects.RAIN"></project-tile>
        <project-tile [projectName]="projects.BUDGET"></project-tile>
        <project-tile [projectName]="projects.CALCULATOR"></project-tile>
        <project-tile [projectName]="projects.POMODORO"></project-tile>
        <project-tile [projectName]="projects.TODONE"></project-tile>
      </div>
    </section>
  `
})
export class EngineeringComponent {
  projects: { [key: string]: ProjectTypes } = ProjectTypes
}
