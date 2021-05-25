import { Component } from '@angular/core'
import { MediaPaths, SocialLinkTypes } from '../../../../src/models/index'

@Component({
  selector: 'design-page',
  styleUrls: ['./design.component.scss'],
  template: `
  <section id="design-section" class="page-section">
    <div class="design-description">
      <h2>UX Design</h2>
      <p class="description-item">
        Inspired by the pivotal role of UX Designers in Web Accessibility work,
        and dedicated to user-centered, equity-focused design, 
        I've recently enrolled in the... 
      </p>
      <social-link addClasses="google-btn" iconType="newtab" [linkType]="googleCourseSrc">
        Google UX Design<br/> Professional Certificate
      </social-link>
      <p class="description-item">
        <b>Stay tuned!</b> I will update my design portfolio as I complete this course
      </p>
    </div>
    <lottie-player
      title="Sheik Sohel - Web Development Lottie Animation"
      alt="cartoon person coding on laptop with gears turning in background"
      speed=".5"
      loop controls autoplay
      [src]="animationSrc" 
    ></lottie-player>
  </section>
  `
})
export class DesignComponent {
  animationSrc: string = MediaPaths.lottieAnimation
  googleCourseSrc: SocialLinkTypes = SocialLinkTypes.GOOGLE
}
