import { Component } from '@angular/core'
import { MediaPaths } from '../../../../src/models/index'

@Component({
  selector: 'about-page',
  styleUrls: ['./about.component.scss'],
  template: `
    <section id="about-section" class="page-section">
      <main-intro></main-intro>
      <div class="more-aboutme">
        <div class="video-btn-container">
          <button (click)="toggleVideo('BJJ')">BJJ video</button>
          <button (click)="toggleVideo('DANCE')">Dance video</button>
        </div>
        <video *ngIf="isVideoShown.BJJ" controls>
          <source type="video/mp4" [src]="getVideoSrc('BJJ')">
          Your browser does not support the video tag.
        </video>
        <video *ngIf="isVideoShown.DANCE" controls>
          <source type="video/mp4" [src]="getVideoSrc('DANCE')">
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  `
})
export class AboutComponent {
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
