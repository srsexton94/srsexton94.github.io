import { Component, Input } from '@angular/core';
import { IProjectLink } from 'src/models/projects';

@Component({
  selector: 'project-tile',
  styleUrls: ['project-tile.component.scss'],
  template: `
    <div class="tile">
      <img [src]="imgSrc" alt="A screenshot of {{ title }} project" />
      <div class="content">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <ul>
          <li *ngFor="let link of links">
            <a [href]="link.src">
              <fa-icon aria-hidden [icon]="link.icon"></fa-icon>
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class ProjectTileComponent {
  @Input() title: string = '';
  @Input() imgSrc: string = '';
  @Input() description: string = '';
  @Input() links?: IProjectLink[];
}
