import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'modal',
  styleUrls: ['./modal.component.scss'],
  template: `
    <div class="modal">
      <section class="modal-content">
        <h2>Modal header {{ modalName }}</h2>
        <p>Modal body {{ modalName }}</p>
        <button (click)="close.emit()">Close</button>
      </section>
    </div>
  `
})
export class ModalComponent {
  @Input() modalName: string = 'Modal'

  @Output() close: EventEmitter<void> = new EventEmitter<void>()
}
