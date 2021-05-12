import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'home-page',
  styleUrls: ['./home.component.scss'],
  template: `
    <section class="page-section">
      <div class="section-body">
        <h1>Samantha Rose Sexton</h1>
        <p class="typewriter">
          {{ typewriterCopy }}
        </p>
        <ul class="socials">
          <li class="social-item">
            <a 
              target="_blank" 
              rel="noopener noreferer" 
              href="https://www.linkedin.com/in/samantha-sexton/"
            >
              <fa-icon class="icon linkedin" [icon]="linkedinIcon"></fa-icon>
            </a>
          </li>
          <li class="social-item">
            <a 
              target="_blank" 
              rel="noopener noreferer" 
              href="https://github.com/srsexton94"
            >
              <fa-icon class="icon github" [icon]="githubIcon"></fa-icon>
            </a>
          </li>
          <li class="social-item">
            <a 
              target="_blank" 
              rel="noopener noreferer" 
              href="https://github.com/srsexton94"
            >
              <fa-icon class="icon email" [icon]="emailIcon"></fa-icon>
            </a>
          </li>
        </ul>
      </div>
    </section>
  `
})
export class HomeComponent {
  emailIcon: IconProp = faAt
  githubIcon: IconProp = faGithub
  linkedinIcon: IconProp = faLinkedin
  locationIcon: IconProp = faMapMarkerAlt
  typewriterCopy: string = 'Full-stack Software Engineer.'
}
