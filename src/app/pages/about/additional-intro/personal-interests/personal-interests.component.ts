import { Component } from '@angular/core'
import { ImagePaths, InterestsList } from '../../../../../models'

@Component({
  selector: 'personal-interests',
  styleUrls: ['./personal-interests.component.scss'],
  template: `
    <div id="videos" class="personal-interests page-section">
      <h2>
        I also...
        <typewriter [typewriterTexts]="interestsList"></typewriter>
      </h2>
      <video-player *ngIf="isVideoShown.BJJ" type="BJJ" (close)="clearVideo()"></video-player>
      <video-player *ngIf="isVideoShown.DANCE" type="DANCE" (close)="clearVideo()"></video-player>
      <video-player *ngIf="isVideoShown.LANG" type="LANG" (close)="clearVideo()"></video-player>
      <div class="btn-container">
        <button class="expand-btn" (click)="chooseVideo('DANCE')">Watch me dance!</button>
        <button class="expand-btn" (click)="chooseVideo('BJJ')">Watch me fight!</button>
        <button class="expand-btn" (click)="chooseVideo('LANG')">Watch me... talk?</button>
      </div>
      <div class="writing-section">
        <p>
          I&rsquo;m also a writer! I completed a draft of my first novel during
          "National Novel Writing Month" this past year
        </p>
        <img class="nano" [src]="nanoPath" alt="{{ nanoAlt }}">
      </div>
    </div>
  `
})
export class PersonalInterestsComponent {
  interestsList: string[] = InterestsList
  isVideoShown: { [key: string]: boolean } = { BJJ: false, DANCE: false, LANG: false }
  nanoAlt: string = 'National Novel Writing Month 2020 certificate of completion'
  nanoPath: string = ImagePaths.nanowrimoImg

  chooseVideo(videoType: string): void {
    this.clearVideo()
    this.isVideoShown[videoType] = true
  }

  clearVideo(): void {
    Object.keys(this.isVideoShown).forEach(key => this.isVideoShown[key] = false)
  }
}
