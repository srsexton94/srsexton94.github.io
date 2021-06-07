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
            I am a software engineer who thrives off of building and designing human-centered digital
            experiences that are equal parts accessible and exceptional.
          </p>
          <resume-preview class="desktop-only"></resume-preview>
          <p class="description">
            From studying the intricacies of language at 
            <social-link [linkType]="socialLinks.UMASS">
              UMass Linguistics
            </social-link>, 
            to my career in Community Advocacy and Activism,
            to my current obsessions with 
            <social-link [linkType]="socialLinks.CLEAN_CODE">
              clean code 
            </social-link> and
            <social-link [linkType]="socialLinks.CODE_KATA">
              algorithms 
            </social-link> &ndash;
            I have long been fascinated by the nuances of the many complex systems that guide our lives.
          </p>
          <p class="description">
            At the heart of those systems, however, is always people &ndash; and it is in
            people that I find my passion. I am thrilled to play my part in the movements
            towards Equity-centered Design and radical accesibility in tech.
          </p>
          <resume-preview class="mobile-only"></resume-preview>
          <scroll-link></scroll-link>
        </div>
      </div>
    </div>
  `
})
export class MainIntroComponent {
  socialLinks: typeof SocialLinkTypes = SocialLinkTypes
}
