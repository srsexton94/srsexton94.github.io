import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MediaPaths } from '../../../../src/models/index'

@Component({
  selector: 'modal',
  styleUrls: ['./modal.component.scss'],
  template: `
    <div class="modal-overlay" tabindex="-1">
      <section class="modal-content">
        <h2>Modal header {{ modalName }}</h2>
        <p>Modal body {{ modalName }}</p>
        <video controls>
          <source type="video/mp4" [src]="videoSrc">
           Your browser does not support the video tag.
        </video>
        <button (click)="close.emit()">Close</button>
      </section>
    </div>
  `
})
export class ModalComponent {
  @Input() modalName: string = 'Modal'
  @Output() close: EventEmitter<void> = new EventEmitter<void>()

  videoSelectors: { [key: string]: string } = {
    BJJ: 'bjjVideo',
    DANCE: 'danceVideo'
  }

  get videoSrc(): string {
    return MediaPaths[this.videoSelectors[this.modalName]]
  }
}
