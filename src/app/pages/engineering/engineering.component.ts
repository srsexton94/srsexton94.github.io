import { Component } from '@angular/core';

@Component({
  selector: 'engineering-page',
  styleUrls: ['./engineering.component.scss'],
  template: `
    <section id="engineering-section" class="page-section">
      <h2>Engineering projects</h2>
      <div class="project-container">
        <project-tile></project-tile>
        <project-tile></project-tile>
        <project-tile></project-tile>
        <project-tile></project-tile>
        <project-tile></project-tile>
        <project-tile></project-tile>
        <project-tile></project-tile>
        <project-tile></project-tile>
      </div>
    </section>
  `
})
export class EngineeringComponent {}
