import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { IVideoPaths, VideoPaths } from '../../../../../../models'

@Component({
  selector: 'video-player',
  styleUrls: ['./video-player.component.scss'],
  template: `
    <button class="close-btn" (click)="close.emit()">
      <fa-icon [icon]="closeIcon"></fa-icon>
    </button>
    <video controls>
      <source type="video/mp4" [src]="videoPaths[type]">
      Your browser does not support the video tag.
    </video>
  `
})
export class VideoPlayerComponent {
  @Input() type: string = 'BJJ'

  @Output() close: EventEmitter<void> = new EventEmitter<void>()
  
  closeIcon: IconProp = faTimes
  videoPaths: IVideoPaths = VideoPaths
}
