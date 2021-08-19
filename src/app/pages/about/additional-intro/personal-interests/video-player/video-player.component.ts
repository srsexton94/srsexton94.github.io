import { Component, Input } from '@angular/core'
import { IImagePaths, ImagePaths, IVideoPaths, VideoPaths } from '../../../../../../models'

@Component({
  selector: 'video-player',
  styleUrls: ['./video-player.component.scss'],
  template: `
    <video class="video-player" controls [attr.poster]="imagePaths[type]">
      <source type="video/mp4" [src]="videoPaths[type]">
    </video>
  `
})
export class VideoPlayerComponent {
  @Input() type: string = 'BJJ'
  
  imagePaths: IImagePaths = ImagePaths
  videoPaths: IVideoPaths = VideoPaths
}
