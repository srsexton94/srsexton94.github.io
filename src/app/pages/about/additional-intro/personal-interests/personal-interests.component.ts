import { Component } from '@angular/core'
import { ImagePaths, IVideoPaths, VideoPaths } from '../../../../../models'

@Component({
  selector: 'personal-interests',
  styleUrls: ['./personal-interests.component.scss'],
  template: `
    <div id="videos" class="personal-interests page-section">
      <h2>I also...</h2>
      <ul>
        <li>Perform and teach as a Ballroom Dancer</li>
        <li>Train and compete as a Jiujiteira</li>
        <li>Try my darndest to learn every langauge!</li>
      </ul>
      <video-player *ngIf="isVideoShown.BJJ" type="BJJ"></video-player>
      <video-player *ngIf="isVideoShown.DANCE" type="DANCE"></video-player>
      <video-player *ngIf="isVideoShown.LANG" type="LANG"></video-player>
      <div class="btn-container">
        <button (click)="chooseVideo('DANCE')">Watch me dance!</button>
        <button (click)="chooseVideo('BJJ')">Watch me fight!</button>
        <button (click)="chooseVideo('LANG')">Watch me... talk?</button>
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
  isVideoShown: { [key: string]: boolean } = { BJJ: false, DANCE: false, LANG: false }
  nanoAlt: string = 'National Novel Writing Month 2020 certificate of completion'
  nanoPath: string = ImagePaths.nanowrimoImg

  chooseVideo(videoType: string): void {
    Object.keys(this.isVideoShown).forEach(key => this.isVideoShown[key] = false)
    this.isVideoShown[videoType] = true
  }
}
