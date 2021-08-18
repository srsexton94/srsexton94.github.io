import { Component } from '@angular/core'

@Component({
  selector: 'about-page',
  styleUrls: ['./about.component.scss'],
  template: `
    <section id="about-me-section" class="page-section">
      <main-intro></main-intro>
      <additional-intro></additional-intro>
    </section>
  `
})
export class AboutComponent {}
