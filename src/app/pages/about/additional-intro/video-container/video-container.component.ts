import { Component } from '@angular/core'
import { IVideoPaths, VideoPaths } from '../../../../../../src/models/index'

@Component({
  selector: 'video-container',
  styleUrls: ['./video-container.component.scss'],
  template: `
    <div class="video-container">
      <div class="video-btn-container">
        <button (click)="chooseVideo('BJJ')">BJJ video</button>
        <button (click)="chooseVideo('DANCE')">Dance video</button>
        <button (click)="chooseVideo('LANG')">Language video</button>
      </div>
      <video *ngIf="isVideoShown.BJJ" controls>
        <source type="video/mp4" [src]="videoPaths.bjjVideo">
        {{ browserCompatibilityText }}
      </video>
      <video *ngIf="isVideoShown.DANCE" controls>
        <source type="video/mp4" [src]="videoPaths.danceVideo">
        {{ browserCompatibilityText }}
      </video>
      <video *ngIf="isVideoShown.LANG" controls>
        <source type="video/mp4" [src]="videoPaths.langVideo">
        {{ browserCompatibilityText }}
      </video>
    </div>
  `
})
export class VideoContainerComponent {
  browserCompatibilityText: string = 'Your browser does not support the video tag.'
  isVideoShown: { [key: string]: boolean } = { BJJ: false, DANCE: false, LANG: false }
  videoPaths: IVideoPaths = VideoPaths

  chooseVideo(videoType: string): void {
    Object.keys(this.isVideoShown).forEach(key => this.isVideoShown[key] = false)
    this.isVideoShown[videoType] = true
  }
}
