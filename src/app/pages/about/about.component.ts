import { Component } from '@angular/core';
import { MediaPaths, SocialLinkTypes } from '../../../../src/models/index'

@Component({
  selector: 'about-page',
  styleUrls: ['./about.component.scss'],
  template: `
    <section id="about-section" class="page-section">
      <img class="selfie" [src]="selfieSrc"/>
      <div class="self-description">
        <h2>Hi there! I'm Sam</h2>
        <p>
          Here's a paragraph where I'll tell you about myself and all the cool stuff that I do weeeeee
        </p>
        <social-link [linkType]="linkType" [excludeIcon]="true">
          <img class="resume-preview" [src]="resumeSrc"/>
        </social-link>
        <img class="pronoun-badge" [src]="pronounSrc"/>
        <button (click)="toggleVideo('BJJ')">BJJ video</button>
        <button (click)="toggleVideo('DANCE')">Dance video</button>
      </div>
    </section>
    <video *ngIf="isVideoShown.BJJ" controls>
      <source type="video/mp4" [src]="getVideoSrc('BJJ')">
      Your browser does not support the video tag.
    </video>
    <video *ngIf="isVideoShown.DANCE" controls>
      <source type="video/mp4" [src]="getVideoSrc('DANCE')">
      Your browser does not support the video tag.
    </video>
  `
})
export class AboutComponent {
  linkType: SocialLinkTypes = SocialLinkTypes.RESUME
  selfieSrc: string = MediaPaths.aboutMeImg
  pronounSrc: string = MediaPaths.pronounBadge
  resumeSrc: string = MediaPaths.resumeImg

  isVideoShown: { [key: string]: boolean } = {
    BJJ: false,
    DANCE: false
  }
  
  videoSelectors: { [key: string]: string } = {
    BJJ: 'bjjVideo',
    DANCE: 'danceVideo'
  }

  getVideoSrc(name: string): string {
    return MediaPaths[this.videoSelectors[name]]
  }

  toggleVideo(modalSelector: string): void {
    this.isVideoShown[modalSelector] = !this.isVideoShown[modalSelector]
  }
}
