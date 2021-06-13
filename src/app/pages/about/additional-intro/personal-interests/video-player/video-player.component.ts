import { Component, Input } from '@angular/core';
import { IVideoPaths, VideoPaths } from '../../../../../../models'

@Component({
  selector: 'video-player',
  styleUrls: ['./video-player.component.scss'],
  template: `
    <video controls>
      <source type="video/mp4" [src]="videoPaths[type]">
      Your browser does not support the video tag.
    </video>
  `
})
export class VideoPlayerComponent {
  @Input() type: string = 'BJJ'
  
  videoPaths: IVideoPaths = VideoPaths
}
