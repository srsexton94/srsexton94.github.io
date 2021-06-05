import { Component } from '@angular/core'
import { ImagePaths, SocialLinkTypes } from '../../../../../src/models/index'

@Component({
  selector: 'main-intro',
  styleUrls: ['./main-intro.component.scss'],
  template: `
    <div class="main-intro">
      <selfie></selfie>
      <div class="self-description">
        <div class="intro">
          <h2 class="header">Hi there! I'm Sam</h2>
          <p class="description">
            I am a software engineer who thrives off of building and designing human-centered digital
            experiences that are equal parts accessible and exceptional.
          </p>
          <resume-preview></resume-preview>
          <p class="description">
            From studying the intricacies of language at 
            <social-link [linkType]="socialLinks.UMASS">
              UMass Linguistics
            </social-link>, 
            to my career in Community Advocacy and Activism,
            to my current obsessions with 
            <social-link [linkType]="socialLinks.CLEAN_CODE">
              Clean code 
            </social-link> and
            <social-link [linkType]="socialLinks.CODE_KATA">
              Code katas 
            </social-link> &ndash;
            I have long been fascinated by the nuances of the many complex systems that guide our lives.
          </p>
          <p class="description">
            At the heart of those systems, however, is always people. And I am thrilled to play my part
            in the movement towards Equity-centered Design and radical accesibility in tech.
          </p>
          <a class="learn-more-link" href="#">Learn more about me!</a>
        </div>
      </div>
    </div>
  `
})
export class MainIntroComponent {
  socialLinks: typeof SocialLinkTypes = SocialLinkTypes
}
