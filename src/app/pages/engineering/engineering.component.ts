import { Component } from '@angular/core';
import { EngineeringProjects, IProject } from 'src/models/projects';

@Component({
  selector: 'engineering-page',
  styleUrls: ['./engineering.component.scss'],
  template: `
    <section id="engineering-section" class="page-section">
      <div class="engineering">
        <h2>Engineering Projects</h2>
        <ul>
          <li *ngFor="let project of projects">
            <project-tile
              [imgSrc]="project.image"
              [title]="project.title"
              [description]="project.description"
              [links]="project.links"
            ></project-tile> 
          </li>
        </ul>
      </div>
    </section>
  `,
})
export class EngineeringComponent {
  projects: IProject[] = EngineeringProjects;
}
