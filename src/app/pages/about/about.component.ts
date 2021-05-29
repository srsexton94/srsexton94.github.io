import { Component } from '@angular/core';
import { MediaPaths, SocialLinkTypes } from '../../../../src/models/index'

@Component({
  selector: 'about-page',
  styleUrls: ['./about.component.scss'],
  template: `
    <section id="about-section" class="page-section">
      <div class="main-intro">
        <div class="photo-wrapper">
          <img class="selfie" [src]="selfieSrc"/>
          <img class="pronoun-badge" [src]="pronounSrc"/>
        </div>
        <div class="self-description">
          <div class="intro">
            <h2 class="header">Hi there! I'm Sam</h2>
            <p class="description">
              I am a software engineer who thrives off of building and designing human-centered, digital
              experiences that are equal parts exceptional and accessible.
            </p>
            <p class="description">
              From studying the intricacies of language at 
              <social-link [linkType]="socialLinks.UMASS">
                UMass linguistics
              </social-link>, 
              to my career in community advocacy and activism, to my current obsession with 
              <social-link [linkType]="socialLinks.CLEAN_CODE">
                Clean code 
              </social-link> and
              <social-link [linkType]="socialLinks.CODE_KATA">
                Code katas 
              </social-link> &ndash;
              I am fascinated by the nuances of the complex systems that guide our lives.
            </p>
            <p class="description">
              At the heart of those systems, however, is always people. And I am thrilled to play my part
              in the movement towards Equity-centered design and radical accesibility in tech.
            </p>
          </div>
          <social-link [linkType]="socialLinks.RESUME" [excludeIcon]="true">
            <img class="resume-preview" [src]="resumeImg"/>
          </social-link>
          <div class="video-btn-container">
            <button (click)="toggleVideo('BJJ')">BJJ video</button>
            <button (click)="toggleVideo('DANCE')">Dance video</button>
          </div>
        </div>
      </div>
      <video *ngIf="isVideoShown.BJJ" controls>
        <source type="video/mp4" [src]="getVideoSrc('BJJ')">
        Your browser does not support the video tag.
      </video>
      <video *ngIf="isVideoShown.DANCE" controls>
        <source type="video/mp4" [src]="getVideoSrc('DANCE')">
        Your browser does not support the video tag.
      </video>
    </section>
  `
})
export class AboutComponent {
  socialLinks: typeof SocialLinkTypes = SocialLinkTypes
  selfieSrc: string = MediaPaths.aboutMeImg
  pronounSrc: string = MediaPaths.pronounBadge
  resumeImg: string = MediaPaths.resumeImg

  isVideoShown: { [key: string]: boolean } = {
    BJJ: false,
    DANCE: false
  }
  
  videoPathSelectors: { [key: string]: string } = {
    BJJ: 'bjjVideo',
    DANCE: 'danceVideo'
  }

  getVideoSrc(name: string): string {
    return MediaPaths[this.videoPathSelectors[name]]
  }

  toggleVideo(videoType: string): void {
    this.isVideoShown[videoType] = !this.isVideoShown[videoType]
  }
}
