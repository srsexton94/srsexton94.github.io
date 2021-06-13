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
      <video *ngIf="isVideoShown.BJJ" controls>
        <source type="video/mp4" [src]="videoPaths.BJJ">
        {{ browserCompatibilityText }}
      </video>
      <video *ngIf="isVideoShown.DANCE" controls>
        <source type="video/mp4" [src]="videoPaths.DANCE">
        {{ browserCompatibilityText }}
      </video>
      <video *ngIf="isVideoShown.LANG" controls>
        <source type="video/mp4" [src]="videoPaths.LANG">
        {{ browserCompatibilityText }}
      </video>
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
        <img class="nanowrimo" [src]="nanowrimoPath" alt="National Novel Writing Month 2020 certificate of completion">
      </div>
    </div>
  `
})
export class PersonalInterestsComponent {
  browserCompatibilityText: string = 'Your browser does not support the video tag.'
  isVideoShown: { [key: string]: boolean } = { BJJ: false, DANCE: false, LANG: false }
  nanowrimoPath: string = ImagePaths.nanowrimoImg
  videoPaths: IVideoPaths = VideoPaths

  chooseVideo(videoType: string): void {
    Object.keys(this.isVideoShown).forEach(key => this.isVideoShown[key] = false)
    this.isVideoShown[videoType] = true
  }
}
