import { Component } from '@angular/core'
import { SocialLinkTypes } from '../../../../../src/models/index'

@Component({
  selector: 'main-intro',
  styleUrls: ['./main-intro.component.scss'],
  template: `
    <div class="main-intro">
      <selfie class="desktop-only"></selfie>
      <div class="self-description">
        <div class="intro">
          <h2 class="header">Hi there! I'm Sam</h2>
          <selfie class="mobile-only"></selfie>
          <p class="description">
            I'm a professional frontend Software Engineer and experienced Technical Lead
            who thrives off of architecting human-centered digital experiences that are
            equal parts accessible and exceptional. 
          </p>
          <resume-preview class="desktop-only"></resume-preview>
          <p class="description">
            Working in FinTech, EdTech, CivicTech, and beyond I've honed my skills building
            responsive and interactive interfaces. I have a considerable depth of knowledge
            in crafting scalable, maintainable code and a unique capacity to seamlessly build
            accessibility into the development lifecycle.
          </p>
          <p class="description">
            At the heart of my work is always community &ndash; and I am thrilled to play my 
            part in the movements towards Equitable Design and radical accesibility in tech.
          </p>
          <p class="description">
            Overall, I know myself to be an analytical, driven, and collaborative engineer
            who is always excited to learn something new, and unpacks even the most complex
            problem with diligence and a laugh (or two!).
          </p>
          <resume-preview class="mobile-only"></resume-preview>
        </div>
      </div>
    </div>
  `
})
export class MainIntroComponent {
  socialLinks: typeof SocialLinkTypes = SocialLinkTypes
}
