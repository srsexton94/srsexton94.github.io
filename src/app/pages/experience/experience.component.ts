import { Component } from '@angular/core';
import { Experiences } from '../../../models/index'

@Component({
  selector: 'experience-page',
  styleUrls: ['./experience.component.scss'],
  template: `
    <section id="experience-section" class="page-section">
      <div class="experience-intro">
        <ul *ngFor="let exp of experiences">
          <li class="experience">
            <span class="dates">{{ exp.startYear }} - {{ exp.endYear || 'Pres.' }}</span>
            <div class="content">
              <a class="company" [attr.href]="exp.link">{{ exp.company }}</a>
              <p *ngFor="let title of exp.titles" class="title">{{ title }}</p>
              <p class="description">{{ exp.description }}</p>
              <ul class="skills">
                <li *ngFor="let skill of exp.skills" class="skill">{{ skill }}</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  experiences = Experiences;
}
