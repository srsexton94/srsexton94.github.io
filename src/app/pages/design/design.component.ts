import { Component } from '@angular/core';
import { DesignProjects, IProject } from 'src/models/projects';

@Component({
  selector: 'design-page',
  styleUrls: ['./design.component.scss'],
  template: `
    <section id="design-section" class="page-section">
      <div class="design">
        <h2>Design Projects</h2>
        <ul>
          <li *ngFor="let project of projects">
            <project-splash
              [imgSrc]="project.image"
              [title]="project.title"
              [description]="project.description"
              [links]="project.links"
            ></project-splash>
          </li>
        </ul>
      </div>
    </section>
  `,
})
export class DesignComponent {
  projects: IProject[] = DesignProjects;
}
